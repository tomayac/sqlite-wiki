(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) a(r);
  new MutationObserver((r) => {
    for (const n of r)
      if (n.type === 'childList')
        for (const c of n.addedNodes)
          c.tagName === 'LINK' && c.rel === 'modulepreload' && a(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(r) {
    const n = {};
    return (
      r.integrity && (n.integrity = r.integrity),
      r.referrerPolicy && (n.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === 'use-credentials'
        ? (n.credentials = 'include')
        : r.crossOrigin === 'anonymous'
        ? (n.credentials = 'omit')
        : (n.credentials = 'same-origin'),
      n
    );
  }
  function a(r) {
    if (r.ep) return;
    r.ep = !0;
    const n = o(r);
    fetch(r.href, n);
  }
})();
const d = document.querySelector('button'),
  g = document.querySelector('[type=submit]'),
  h = document.querySelector('form'),
  l = document.querySelector('[type=search]'),
  i = document.querySelector('datalist'),
  u = document.querySelector('div'),
  p = document.querySelector('span'),
  s = new Worker(new URL('/assets/worker-e20ee697.js', self.location), {
    type: 'module',
  });
s.addEventListener('message', async (e) => {
  if (e.data.ready) {
    localStorage.setItem('sqlite-file-name', e.data.ready),
      (h.disabled = !1),
      (d.hidden = !0);
    const t = new URL(location.href);
    t.pathname.length > 1
      ? m(t)
      : ((p.style.display = 'inline-block'),
        s.postMessage({ searchRandom: !0 }));
  } else if (e.data.showOpenFilePicker) await f();
  else if (e.data.titleSearch) {
    const t = i.querySelectorAll('option');
    for (const a of t) if (a.value === e.data.titleSearch) return;
    const o = document.createElement('option');
    (o.textContent = e.data.titleSearch),
      (o.value = e.data.titleSearch),
      i.append(o);
  } else if (e.data.html) {
    (l.value = ''),
      (i.innerHTML = ''),
      (p.style.display = 'none'),
      window.scrollTo(0, 0),
      (u.innerHTML = `<h2>${e.data.title}</h2>${e.data.html}`);
    const t = encodeURIComponent(
      e.data.title.toLowerCase().replaceAll(/\s/g, '_'),
    );
    history.pushState(null, '', t);
  } else e.data.error && (u.innerHTML = `<pre>${e.data.error}</pre>`);
});
const f = async () => {
  try {
    const [e] = await showOpenFilePicker({
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
    s.postMessage({ handle: e });
  } catch (e) {
    if (e.name === 'SecurityError')
      (d.hidden = !1),
        d.addEventListener('click', async () => {
          await f();
        });
    else if (e.name === 'AbortError') return;
    console.error(e.name, e.message);
  }
};
h.addEventListener('submit', async (e) => {
  e.preventDefault();
  let t = l.value.trim();
  if (t) {
    const o = new URL(location.href);
    (o.pathname = t.replaceAll(/\s+/g, '_')), m(o);
  }
});
l.addEventListener('input', async () => {
  p.style.display = 'none';
  let e = l.value.trim();
  const t = i.querySelectorAll('option');
  for (const o of t) if (e === o.value) return g.click();
  if (e.length > 3) return s.postMessage({ query: e });
  i.innerHTML = '';
});
const m = (e) => {
  const t = decodeURIComponent(e.pathname.slice(1).replaceAll(/_/g, ' '));
  s.postMessage({ search: t });
};
u.addEventListener('click', (e) => {
  const t = e.target.closest('a');
  if (t) {
    const o = new URL(t.href);
    if (o.hash) {
      e.preventDefault(), document.querySelector(o.hash)?.scrollIntoView();
      return;
    }
    o.origin === location.origin && (e.preventDefault(), m(o));
  }
});
const y = localStorage.getItem('sqlite-file-name');
y ? s.postMessage({ checkIfFileExists: y }) : await f();
