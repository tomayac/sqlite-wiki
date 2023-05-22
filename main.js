import 'simpledotcss';
import './style.css';

const startButton = document.querySelector('button');
const submitButton = document.querySelector('[type=submit]');
const form = document.querySelector('form');
const input = document.querySelector('[type=search]');
const datalist = document.querySelector('datalist');
const div = document.querySelector('div');
const span = document.querySelector('span');

const worker = new Worker(new URL('./worker.js', import.meta.url), {
  type: 'module',
});

worker.addEventListener('message', async (e) => {
  if (e.data.ready) {
    localStorage.setItem('sqlite-file-name', e.data.ready);
    form.disabled = false;
    startButton.hidden = true;
    const url = new URL(location.href);
    if (url.pathname.length > 1) {
      search(url);
    } else {
      span.style.display = 'inline-block';
      worker.postMessage({ searchRandom: true });
    }
  } else if (e.data.showOpenFilePicker) {
    await openFile();
  } else if (e.data.titleSearch) {
    const options = datalist.querySelectorAll('option');
    for (const option of options) {
      if (option.value === e.data.titleSearch) {
        return;
      }
    }
    const option = document.createElement('option');
    option.textContent = e.data.titleSearch;
    option.value = e.data.titleSearch;
    datalist.append(option);
  } else if (e.data.html) {
    input.value = '';
    datalist.innerHTML = '';
    span.style.display = 'none';
    window.scrollTo(0, 0);
    div.innerHTML = `<h2>${e.data.title}</h2>${e.data.html}`;
    const slug = encodeURIComponent(
      e.data.title.toLowerCase().replaceAll(/\s/g, '_'),
    );
    history.pushState(null, '', slug);
  } else if (e.data.error) {
    div.innerHTML = `<pre>${e.data.error}</pre>`;
  }
});

const openFile = async () => {
  try {
    const [handle] = await showOpenFilePicker({
      types: [
        {
          description: 'SQLite files',
          accept: {
            'application/vnd.sqlite3': [
              '.sqlite',
              '.sqlite3',
              '.db',
              '.db3',
              '.s3db',
              '.sl3',
            ],
            'application/x-sqlite3': [
              '.sqlite',
              '.sqlite3',
              '.db',
              '.db3',
              '.s3db',
              '.sl3',
            ],
          },
        },
      ],
    });
    worker.postMessage({
      handle,
    });
  } catch (err) {
    // User gesture required for `showOpenFilePicker()`.
    if (err.name === 'SecurityError') {
      startButton.hidden = false;
      startButton.addEventListener('click', async () => {
        await openFile();
      });
    } else if (err.name === 'AbortError') {
      return;
    }
    console.error(err.name, err.message);
  }
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  let query = input.value.trim();
  if (query) {
    const url = new URL(location.href);
    url.pathname = query.replaceAll(/\s+/g, '_');
    search(url);
  }
});

input.addEventListener('input', async () => {
  span.style.display = 'none';
  let query = input.value.trim();
  const options = datalist.querySelectorAll('option');
  for (const option of options) {
    console.log(query, option.value);
    if (query === option.value) {
      return submitButton.click();
    }
  }
  if (query.length > 3) {
    return worker.postMessage({ query });
  }
  datalist.innerHTML = '';
});

const search = (url) => {
  const search = decodeURIComponent(
    url.pathname.slice(1).replaceAll(/_/g, ' '),
  );
  worker.postMessage({ search });
};

div.addEventListener('click', (e) => {
  const anchor = e.target.closest('a');
  if (anchor) {
    const url = new URL(anchor.href);
    if (url.origin === location.origin) {
      e.preventDefault();
      search(url);
    }
  }
});

const sqliteFileName = localStorage.getItem('sqlite-file-name');
if (sqliteFileName) {
  worker.postMessage({ checkIfFileExists: sqliteFileName });
} else {
  await openFile();
}
