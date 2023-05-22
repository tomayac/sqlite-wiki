import sqlite3InitModule from '@sqlite.org/sqlite-wasm';
import { marked } from 'marked';

let db;

const checkIfFileExists = async (fileName) => {
  try {
    const root = await navigator.storage.getDirectory();
    const opfsHandle = await root.getFileHandle(fileName);
    await openSQLiteDatabase(opfsHandle);
  } catch (err) {
    console.log(err.name, err.message);
    if (err.name === 'NotFoundError') {
      self.postMessage({ showOpenFilePicker: true });
    }
  }
};

const openSQLiteDatabase = async (opfsHandle) => {
  const sqlite3 = await sqlite3InitModule({
    print: (...args) => console.log(...args),
    printErr: (...args) => console.error(...args),
  });
  db = new sqlite3.oo1.OpfsDb(opfsHandle.name);
  self.postMessage({ ready: opfsHandle.name });
};

self.addEventListener('message', async (e) => {
  if (e.data.handle) {
    try {
      const root = await navigator.storage.getDirectory();
      const opfsHandle = await root.getFileHandle(e.data.handle.name, {
        create: true,
      });
      const writable = await opfsHandle.createWritable();
      const file = await e.data.handle.getFile();
      await file.stream().pipeTo(writable);
      await checkIfFileExists(e.data.handle.name);
    } catch (err) {
      self.postMessage({ error: `${err.name}: ${err.message}` });
    }
  } else if (e.data.search) {
    await search(e.data.search, e.data.what);
  } else if (e.data.query) {
    await searchFuzzy(e.data.query, e.data.what);
  } else if (e.data.searchRandom) {
    await searchRandom();
  } else if (e.data.checkIfFileExists) {
    await checkIfFileExists(e.data.checkIfFileExists);
  }
});

const searchRandom = async () => {
  const sql = `SELECT * FROM wiki_articles WHERE redirect IS NULL LIMIT 1 OFFSET ABS(RANDOM()) % MAX((SELECT COUNT(*) FROM wiki_articles WHERE redirect IS NULL), 1)`;
  console.log(sql);
  db.exec({
    sql,
    rowMode: 'object',
    callback: async ({ title, text }) => {
      const html = marked
        .parse(text, {
          mangle: false,
          headerIds: false,
        })
        .replaceAll(/<img[^>]*>/g, '');
      self.postMessage({ html, title });
    },
  });
};

const search = async (query, what) => {
  query = query.replaceAll(/'/g, `''`);
  if (what === 'text') {
    query = `%${query}%`;
  }
  const sql = `SELECT * FROM wiki_articles WHERE ${what} ${
    what === 'text' ? 'LIKE' : '='
  } \'${query}\' COLLATE NOCASE`;
  console.log(sql);
  db.exec({
    sql,
    rowMode: 'object',
    callback: async ({ title, text, redirect }) => {
      if (redirect) {
        return await search(redirect, what);
      }
      const html = marked
        .parse(text, {
          mangle: false,
          headerIds: false,
        })
        .replaceAll(/<img[^>]*>/g, '');
      self.postMessage({ html, title });
    },
  });
};

const searchFuzzy = async (query, what) => {
  query = query.replaceAll(/'/g, `''`);
  const sql = `SELECT title FROM wiki_articles WHERE ${what} LIKE \'%${query}%\' COLLATE NOCASE ORDER BY title`;
  console.log(sql);
  db.exec({
    sql,
    rowMode: 'object',
    callback: ({ title }) => {
      self.postMessage({ titleSearch: title });
    },
  });
};
