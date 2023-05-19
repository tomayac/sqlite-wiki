import './style.css';
import '@picocss/pico';

const startButton = document.querySelector('button');
const div = document.querySelector('div');

const worker = new Worker(new URL('./worker.js', import.meta.url), {
  type: 'module',
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

worker.addEventListener('message', async (e) => {
  if (e.data.ready) {
    startButton.hidden = true;
    const url = new URL(location.href);
    if (url.pathname) {
      search(url);
    }
  } else if (e.data.showOpenFilePicker) {
    await openFile();
  } else if (e.data.html) {
    window.scrollTo(0, 0);
    div.innerHTML = `<h1>${e.data.query}</h1>${e.data.html}`;
    history.pushState(null, '', e.data.slug);
  }
});

const search = (url) => {
  const slug = url.pathname.slice(1);
  const search = decodeURIComponent(
    url.pathname.slice(1).replaceAll(/_/g, ' '),
  );
  worker.postMessage({ search, slug });
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
