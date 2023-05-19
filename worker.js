import sqlite3InitModule from '@sqlite.org/sqlite-wasm';
import { marked } from 'marked';

const FILE_NAME = 'enwikiquote.db';

let db;

(async () => {
  const root = await navigator.storage.getDirectory();

  const sqlite3 = await sqlite3InitModule({
    print: (...args) => console.log(...args),
    printErr: (...args) => console.error(...args),
  });

  self.addEventListener('message', async (e) => {
    if (e.data.handle) {
      const opfsHandle = await root.getFileHandle(FILE_NAME, { create: true });
      const writable = await opfsHandle.createWritable();
      const file = await e.data.handle.getFile();
      await file.stream().pipeTo(writable);
      await checkIfFileExists();
    } else if (e.data.search) {
      await search(e.data.search, e.data.slug);
    }
  });

  const openSQLiteDatabase = async (opfsHandle) => {
    console.log('Starting SQLite with', opfsHandle.name);
    db = new sqlite3.oo1.OpfsDb(opfsHandle.name);
    self.postMessage({ ready: true });
  };

  const search = async (query, slug) => {
    console.log(`SELECT * FROM wiki_articles WHERE title = \'${query}\'`);
    db.exec({
      sql: `SELECT * FROM wiki_articles WHERE title = \'${query}\'`,
      rowMode: 'object',
      callback: ({ text }) => {
        const html = marked
          .parse(text, {
            mangle: false,
            headerIds: false,
          })
          .replaceAll(/<img[^>]*>/g, '');
        self.postMessage({ html, slug, query });
      },
    });
  };

  const checkIfFileExists = async () => {
    console.log('Checking if', FILE_NAME, 'exists.');
    try {
      const opfsHandle = await root.getFileHandle(FILE_NAME);
      console.log('Yes,', FILE_NAME, 'exists.');
      await openSQLiteDatabase(opfsHandle);
    } catch (err) {
      if (err.name === 'NotFoundError') {
        self.postMessage({ showOpenFilePicker: FILE_NAME });
      }
    }
  };
  await checkIfFileExists(FILE_NAME);
})();
