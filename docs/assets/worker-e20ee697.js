(function () {
  'use strict';
  var an = (() => {
    var P = self.location.href;
    return function (u) {
      var _ = u || {},
        e = typeof _ < 'u' ? _ : {},
        h,
        I;
      e.ready = new Promise(function (n, t) {
        (h = n), (I = t);
      });
      const D =
        globalThis.sqlite3InitModuleState ||
        Object.assign(Object.create(null), { debugModule: () => {} });
      delete globalThis.sqlite3InitModuleState,
        D.debugModule('globalThis.location =', globalThis.location);
      const N = 'emscripten-bug-17951';
      (e[N] = function n(t, s) {
        t.env.foo = function () {};
        const r = e.locateFile(n.uri, typeof oe > 'u' ? '' : oe);
        D.debugModule('instantiateWasm() uri =', r);
        const i = () => fetch(r, { credentials: 'same-origin' });
        return (
          (WebAssembly.instantiateStreaming
            ? async () =>
                WebAssembly.instantiateStreaming(i(), t).then((g) =>
                  s(g.instance, g.module),
                )
            : async () =>
                i()
                  .then((g) => g.arrayBuffer())
                  .then((g) => WebAssembly.instantiate(g, t))
                  .then((g) => s(g.instance, g.module)))(),
          {}
        );
      }),
        (e[N].uri = 'sqlite3.wasm');
      var K = Object.assign({}, e),
        de = './this.program',
        _e = typeof window == 'object',
        ae = typeof importScripts == 'function';
      typeof process == 'object' &&
        typeof process.versions == 'object' &&
        process.versions.node;
      var oe = '';
      function te(n) {
        return e.locateFile ? e.locateFile(n, oe) : oe + n;
      }
      var Ce, De, je;
      (_e || ae) &&
        (ae
          ? (oe = self.location.href)
          : typeof document < 'u' &&
            document.currentScript &&
            (oe = document.currentScript.src),
        P && (oe = P),
        oe.indexOf('blob:') !== 0
          ? (oe = oe.substr(0, oe.replace(/[?#].*/, '').lastIndexOf('/') + 1))
          : (oe = ''),
        (Ce = (n) => {
          var t = new XMLHttpRequest();
          return t.open('GET', n, !1), t.send(null), t.responseText;
        }),
        ae &&
          (je = (n) => {
            var t = new XMLHttpRequest();
            return (
              t.open('GET', n, !1),
              (t.responseType = 'arraybuffer'),
              t.send(null),
              new Uint8Array(t.response)
            );
          }),
        (De = (n, t, s) => {
          var r = new XMLHttpRequest();
          r.open('GET', n, !0),
            (r.responseType = 'arraybuffer'),
            (r.onload = () => {
              if (r.status == 200 || (r.status == 0 && r.response)) {
                t(r.response);
                return;
              }
              s();
            }),
            (r.onerror = s),
            r.send(null);
        }));
      var we = e.print || console.log.bind(console),
        Ee = e.printErr || console.warn.bind(console);
      Object.assign(e, K),
        (K = null),
        e.arguments && e.arguments,
        e.thisProgram && (de = e.thisProgram),
        e.quit && e.quit;
      var Be;
      e.wasmBinary && (Be = e.wasmBinary),
        e.noExitRuntime,
        typeof WebAssembly != 'object' && tt('no native wasm support detected');
      var Oe,
        ze = !1;
      function Ue(n, t) {
        n || tt(t);
      }
      var Xe = typeof TextDecoder < 'u' ? new TextDecoder('utf8') : void 0;
      function He(n, t, s) {
        for (var r = t + s, i = t; n[i] && !(i >= r); ) ++i;
        if (i - t > 16 && n.buffer && Xe) return Xe.decode(n.subarray(t, i));
        for (var l = ''; t < i; ) {
          var g = n[t++];
          if (!(g & 128)) {
            l += String.fromCharCode(g);
            continue;
          }
          var E = n[t++] & 63;
          if ((g & 224) == 192) {
            l += String.fromCharCode(((g & 31) << 6) | E);
            continue;
          }
          var O = n[t++] & 63;
          if (
            ((g & 240) == 224
              ? (g = ((g & 15) << 12) | (E << 6) | O)
              : (g = ((g & 7) << 18) | (E << 12) | (O << 6) | (n[t++] & 63)),
            g < 65536)
          )
            l += String.fromCharCode(g);
          else {
            var B = g - 65536;
            l += String.fromCharCode(55296 | (B >> 10), 56320 | (B & 1023));
          }
        }
        return l;
      }
      function Fn(n, t) {
        return n ? He(it, n, t) : '';
      }
      function ft(n, t, s, r) {
        if (!(r > 0)) return 0;
        for (var i = s, l = s + r - 1, g = 0; g < n.length; ++g) {
          var E = n.charCodeAt(g);
          if (E >= 55296 && E <= 57343) {
            var O = n.charCodeAt(++g);
            E = (65536 + ((E & 1023) << 10)) | (O & 1023);
          }
          if (E <= 127) {
            if (s >= l) break;
            t[s++] = E;
          } else if (E <= 2047) {
            if (s + 1 >= l) break;
            (t[s++] = 192 | (E >> 6)), (t[s++] = 128 | (E & 63));
          } else if (E <= 65535) {
            if (s + 2 >= l) break;
            (t[s++] = 224 | (E >> 12)),
              (t[s++] = 128 | ((E >> 6) & 63)),
              (t[s++] = 128 | (E & 63));
          } else {
            if (s + 3 >= l) break;
            (t[s++] = 240 | (E >> 18)),
              (t[s++] = 128 | ((E >> 12) & 63)),
              (t[s++] = 128 | ((E >> 6) & 63)),
              (t[s++] = 128 | (E & 63));
          }
        }
        return (t[s] = 0), s - i;
      }
      function Ut(n, t, s) {
        return ft(n, it, t, s);
      }
      function st(n) {
        for (var t = 0, s = 0; s < n.length; ++s) {
          var r = n.charCodeAt(s);
          r <= 127
            ? t++
            : r <= 2047
            ? (t += 2)
            : r >= 55296 && r <= 57343
            ? ((t += 4), ++s)
            : (t += 3);
        }
        return t;
      }
      var Me, it, Wt, me, Te;
      function Qt() {
        var n = Oe.buffer;
        (e.HEAP8 = Me = new Int8Array(n)),
          (e.HEAP16 = Wt = new Int16Array(n)),
          (e.HEAP32 = me = new Int32Array(n)),
          (e.HEAPU8 = it = new Uint8Array(n)),
          (e.HEAPU16 = new Uint16Array(n)),
          (e.HEAPU32 = Te = new Uint32Array(n)),
          (e.HEAPF32 = new Float32Array(n)),
          (e.HEAPF64 = new Float64Array(n)),
          (e.HEAP64 = new BigInt64Array(n)),
          (e.HEAPU64 = new BigUint64Array(n));
      }
      var $t = e.INITIAL_MEMORY || 16777216;
      e.wasmMemory
        ? (Oe = e.wasmMemory)
        : (Oe = new WebAssembly.Memory({
            initial: $t / 65536,
            maximum: 32768,
          })),
        Qt(),
        ($t = Oe.buffer.byteLength);
      var Ht = [],
        Vt = [],
        Gt = [];
      function On() {
        if (e.preRun)
          for (
            typeof e.preRun == 'function' && (e.preRun = [e.preRun]);
            e.preRun.length;

          )
            Rn(e.preRun.shift());
        wt(Ht);
      }
      function Pn() {
        !e.noFSInit && !o.init.initialized && o.init(),
          (o.ignorePermissions = !1),
          wt(Vt);
      }
      function Ln() {
        if (e.postRun)
          for (
            typeof e.postRun == 'function' && (e.postRun = [e.postRun]);
            e.postRun.length;

          )
            Cn(e.postRun.shift());
        wt(Gt);
      }
      function Rn(n) {
        Ht.unshift(n);
      }
      function Dn(n) {
        Vt.unshift(n);
      }
      function Cn(n) {
        Gt.unshift(n);
      }
      var et = 0,
        ot = null;
      function Cr(n) {
        return n;
      }
      function qt(n) {
        et++, e.monitorRunDependencies && e.monitorRunDependencies(et);
      }
      function pt(n) {
        if (
          (et--,
          e.monitorRunDependencies && e.monitorRunDependencies(et),
          et == 0 && ot)
        ) {
          var t = ot;
          (ot = null), t();
        }
      }
      function tt(n) {
        e.onAbort && e.onAbort(n),
          (n = 'Aborted(' + n + ')'),
          Ee(n),
          (ze = !0),
          (n += '. Build with -sASSERTIONS for more info.');
        var t = new WebAssembly.RuntimeError(n);
        throw (I(t), t);
      }
      var zn = 'data:application/octet-stream;base64,';
      function Kt(n) {
        return n.startsWith(zn);
      }
      var We;
      e.locateFile
        ? ((We = 'sqlite3.wasm'), Kt(We) || (We = te(We)))
        : (We = new URL('/assets/sqlite3-14470338.wasm', self.location).href);
      function Jt(n) {
        try {
          if (n == We && Be) return new Uint8Array(Be);
          if (je) return je(n);
          throw 'both async and sync fetching of the wasm failed';
        } catch (t) {
          tt(t);
        }
      }
      function Mn() {
        return !Be && (_e || ae) && typeof fetch == 'function'
          ? fetch(We, { credentials: 'same-origin' })
              .then(function (n) {
                if (!n.ok)
                  throw "failed to load wasm binary file at '" + We + "'";
                return n.arrayBuffer();
              })
              .catch(function () {
                return Jt(We);
              })
          : Promise.resolve().then(function () {
              return Jt(We);
            });
      }
      function Nn() {
        var n = { env: nn, wasi_snapshot_preview1: nn };
        function t(g, E) {
          var O = g.exports;
          (e.asm = O),
            e.asm.__indirect_function_table,
            Dn(e.asm.__wasm_call_ctors),
            pt();
        }
        qt();
        function s(g) {
          t(g.instance);
        }
        function r(g) {
          return Mn()
            .then(function (E) {
              return WebAssembly.instantiate(E, n);
            })
            .then(function (E) {
              return E;
            })
            .then(g, function (E) {
              Ee('failed to asynchronously prepare wasm: ' + E), tt(E);
            });
        }
        function i() {
          return !Be &&
            typeof WebAssembly.instantiateStreaming == 'function' &&
            !Kt(We) &&
            typeof fetch == 'function'
            ? fetch(We, { credentials: 'same-origin' }).then(function (g) {
                var E = WebAssembly.instantiateStreaming(g, n);
                return E.then(s, function (O) {
                  return (
                    Ee('wasm streaming compile failed: ' + O),
                    Ee('falling back to ArrayBuffer instantiation'),
                    r(s)
                  );
                });
              })
            : r(s);
        }
        if (e.instantiateWasm)
          try {
            var l = e.instantiateWasm(n, t);
            return l;
          } catch (g) {
            Ee('Module.instantiateWasm callback failed with error: ' + g), I(g);
          }
        return i().catch(I), {};
      }
      var he, Pe;
      function wt(n) {
        for (; n.length > 0; ) n.shift()(e);
      }
      var be = {
        isAbs: (n) => n.charAt(0) === '/',
        splitPath: (n) => {
          var t =
            /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
          return t.exec(n).slice(1);
        },
        normalizeArray: (n, t) => {
          for (var s = 0, r = n.length - 1; r >= 0; r--) {
            var i = n[r];
            i === '.'
              ? n.splice(r, 1)
              : i === '..'
              ? (n.splice(r, 1), s++)
              : s && (n.splice(r, 1), s--);
          }
          if (t) for (; s; s--) n.unshift('..');
          return n;
        },
        normalize: (n) => {
          var t = be.isAbs(n),
            s = n.substr(-1) === '/';
          return (
            (n = be
              .normalizeArray(
                n.split('/').filter((r) => !!r),
                !t,
              )
              .join('/')),
            !n && !t && (n = '.'),
            n && s && (n += '/'),
            (t ? '/' : '') + n
          );
        },
        dirname: (n) => {
          var t = be.splitPath(n),
            s = t[0],
            r = t[1];
          return !s && !r ? '.' : (r && (r = r.substr(0, r.length - 1)), s + r);
        },
        basename: (n) => {
          if (n === '/') return '/';
          (n = be.normalize(n)), (n = n.replace(/\/$/, ''));
          var t = n.lastIndexOf('/');
          return t === -1 ? n : n.substr(t + 1);
        },
        join: function () {
          var n = Array.prototype.slice.call(arguments);
          return be.normalize(n.join('/'));
        },
        join2: (n, t) => be.normalize(n + '/' + t),
      };
      function jn() {
        if (
          typeof crypto == 'object' &&
          typeof crypto.getRandomValues == 'function'
        ) {
          var n = new Uint8Array(1);
          return () => (crypto.getRandomValues(n), n[0]);
        } else return () => tt('randomDevice');
      }
      var Ve = {
        resolve: function () {
          for (
            var n = '', t = !1, s = arguments.length - 1;
            s >= -1 && !t;
            s--
          ) {
            var r = s >= 0 ? arguments[s] : o.cwd();
            if (typeof r != 'string')
              throw new TypeError('Arguments to path.resolve must be strings');
            if (!r) return '';
            (n = r + '/' + n), (t = be.isAbs(r));
          }
          return (
            (n = be
              .normalizeArray(
                n.split('/').filter((i) => !!i),
                !t,
              )
              .join('/')),
            (t ? '/' : '') + n || '.'
          );
        },
        relative: (n, t) => {
          (n = Ve.resolve(n).substr(1)), (t = Ve.resolve(t).substr(1));
          function s(B) {
            for (var H = 0; H < B.length && B[H] === ''; H++);
            for (var ee = B.length - 1; ee >= 0 && B[ee] === ''; ee--);
            return H > ee ? [] : B.slice(H, ee - H + 1);
          }
          for (
            var r = s(n.split('/')),
              i = s(t.split('/')),
              l = Math.min(r.length, i.length),
              g = l,
              E = 0;
            E < l;
            E++
          )
            if (r[E] !== i[E]) {
              g = E;
              break;
            }
          for (var O = [], E = g; E < r.length; E++) O.push('..');
          return (O = O.concat(i.slice(g))), O.join('/');
        },
      };
      function xt(n, t, s) {
        var r = s > 0 ? s : st(n) + 1,
          i = new Array(r),
          l = ft(n, i, 0, i.length);
        return t && (i.length = l), i;
      }
      var nt = {
        ttys: [],
        init: function () {},
        shutdown: function () {},
        register: function (n, t) {
          (nt.ttys[n] = { input: [], output: [], ops: t }),
            o.registerDevice(n, nt.stream_ops);
        },
        stream_ops: {
          open: function (n) {
            var t = nt.ttys[n.node.rdev];
            if (!t) throw new o.ErrnoError(43);
            (n.tty = t), (n.seekable = !1);
          },
          close: function (n) {
            n.tty.ops.fsync(n.tty);
          },
          fsync: function (n) {
            n.tty.ops.fsync(n.tty);
          },
          read: function (n, t, s, r, i) {
            if (!n.tty || !n.tty.ops.get_char) throw new o.ErrnoError(60);
            for (var l = 0, g = 0; g < r; g++) {
              var E;
              try {
                E = n.tty.ops.get_char(n.tty);
              } catch {
                throw new o.ErrnoError(29);
              }
              if (E === void 0 && l === 0) throw new o.ErrnoError(6);
              if (E == null) break;
              l++, (t[s + g] = E);
            }
            return l && (n.node.timestamp = Date.now()), l;
          },
          write: function (n, t, s, r, i) {
            if (!n.tty || !n.tty.ops.put_char) throw new o.ErrnoError(60);
            try {
              for (var l = 0; l < r; l++) n.tty.ops.put_char(n.tty, t[s + l]);
            } catch {
              throw new o.ErrnoError(29);
            }
            return r && (n.node.timestamp = Date.now()), l;
          },
        },
        default_tty_ops: {
          get_char: function (n) {
            if (!n.input.length) {
              var t = null;
              if (
                (typeof window < 'u' && typeof window.prompt == 'function'
                  ? ((t = window.prompt('Input: ')),
                    t !== null &&
                      (t += `
`))
                  : typeof readline == 'function' &&
                    ((t = readline()),
                    t !== null &&
                      (t += `
`)),
                !t)
              )
                return null;
              n.input = xt(t, !0);
            }
            return n.input.shift();
          },
          put_char: function (n, t) {
            t === null || t === 10
              ? (we(He(n.output, 0)), (n.output = []))
              : t != 0 && n.output.push(t);
          },
          fsync: function (n) {
            n.output &&
              n.output.length > 0 &&
              (we(He(n.output, 0)), (n.output = []));
          },
        },
        default_tty1_ops: {
          put_char: function (n, t) {
            t === null || t === 10
              ? (Ee(He(n.output, 0)), (n.output = []))
              : t != 0 && n.output.push(t);
          },
          fsync: function (n) {
            n.output &&
              n.output.length > 0 &&
              (Ee(He(n.output, 0)), (n.output = []));
          },
        },
      };
      function Xt(n) {
        tt();
      }
      var pe = {
        ops_table: null,
        mount: function (n) {
          return pe.createNode(null, '/', 16895, 0);
        },
        createNode: function (n, t, s, r) {
          if (o.isBlkdev(s) || o.isFIFO(s)) throw new o.ErrnoError(63);
          pe.ops_table ||
            (pe.ops_table = {
              dir: {
                node: {
                  getattr: pe.node_ops.getattr,
                  setattr: pe.node_ops.setattr,
                  lookup: pe.node_ops.lookup,
                  mknod: pe.node_ops.mknod,
                  rename: pe.node_ops.rename,
                  unlink: pe.node_ops.unlink,
                  rmdir: pe.node_ops.rmdir,
                  readdir: pe.node_ops.readdir,
                  symlink: pe.node_ops.symlink,
                },
                stream: { llseek: pe.stream_ops.llseek },
              },
              file: {
                node: {
                  getattr: pe.node_ops.getattr,
                  setattr: pe.node_ops.setattr,
                },
                stream: {
                  llseek: pe.stream_ops.llseek,
                  read: pe.stream_ops.read,
                  write: pe.stream_ops.write,
                  allocate: pe.stream_ops.allocate,
                  mmap: pe.stream_ops.mmap,
                  msync: pe.stream_ops.msync,
                },
              },
              link: {
                node: {
                  getattr: pe.node_ops.getattr,
                  setattr: pe.node_ops.setattr,
                  readlink: pe.node_ops.readlink,
                },
                stream: {},
              },
              chrdev: {
                node: {
                  getattr: pe.node_ops.getattr,
                  setattr: pe.node_ops.setattr,
                },
                stream: o.chrdev_stream_ops,
              },
            });
          var i = o.createNode(n, t, s, r);
          return (
            o.isDir(i.mode)
              ? ((i.node_ops = pe.ops_table.dir.node),
                (i.stream_ops = pe.ops_table.dir.stream),
                (i.contents = {}))
              : o.isFile(i.mode)
              ? ((i.node_ops = pe.ops_table.file.node),
                (i.stream_ops = pe.ops_table.file.stream),
                (i.usedBytes = 0),
                (i.contents = null))
              : o.isLink(i.mode)
              ? ((i.node_ops = pe.ops_table.link.node),
                (i.stream_ops = pe.ops_table.link.stream))
              : o.isChrdev(i.mode) &&
                ((i.node_ops = pe.ops_table.chrdev.node),
                (i.stream_ops = pe.ops_table.chrdev.stream)),
            (i.timestamp = Date.now()),
            n && ((n.contents[t] = i), (n.timestamp = i.timestamp)),
            i
          );
        },
        getFileDataAsTypedArray: function (n) {
          return n.contents
            ? n.contents.subarray
              ? n.contents.subarray(0, n.usedBytes)
              : new Uint8Array(n.contents)
            : new Uint8Array(0);
        },
        expandFileStorage: function (n, t) {
          var s = n.contents ? n.contents.length : 0;
          if (!(s >= t)) {
            var r = 1024 * 1024;
            (t = Math.max(t, (s * (s < r ? 2 : 1.125)) >>> 0)),
              s != 0 && (t = Math.max(t, 256));
            var i = n.contents;
            (n.contents = new Uint8Array(t)),
              n.usedBytes > 0 && n.contents.set(i.subarray(0, n.usedBytes), 0);
          }
        },
        resizeFileStorage: function (n, t) {
          if (n.usedBytes != t)
            if (t == 0) (n.contents = null), (n.usedBytes = 0);
            else {
              var s = n.contents;
              (n.contents = new Uint8Array(t)),
                s && n.contents.set(s.subarray(0, Math.min(t, n.usedBytes))),
                (n.usedBytes = t);
            }
        },
        node_ops: {
          getattr: function (n) {
            var t = {};
            return (
              (t.dev = o.isChrdev(n.mode) ? n.id : 1),
              (t.ino = n.id),
              (t.mode = n.mode),
              (t.nlink = 1),
              (t.uid = 0),
              (t.gid = 0),
              (t.rdev = n.rdev),
              o.isDir(n.mode)
                ? (t.size = 4096)
                : o.isFile(n.mode)
                ? (t.size = n.usedBytes)
                : o.isLink(n.mode)
                ? (t.size = n.link.length)
                : (t.size = 0),
              (t.atime = new Date(n.timestamp)),
              (t.mtime = new Date(n.timestamp)),
              (t.ctime = new Date(n.timestamp)),
              (t.blksize = 4096),
              (t.blocks = Math.ceil(t.size / t.blksize)),
              t
            );
          },
          setattr: function (n, t) {
            t.mode !== void 0 && (n.mode = t.mode),
              t.timestamp !== void 0 && (n.timestamp = t.timestamp),
              t.size !== void 0 && pe.resizeFileStorage(n, t.size);
          },
          lookup: function (n, t) {
            throw o.genericErrors[44];
          },
          mknod: function (n, t, s, r) {
            return pe.createNode(n, t, s, r);
          },
          rename: function (n, t, s) {
            if (o.isDir(n.mode)) {
              var r;
              try {
                r = o.lookupNode(t, s);
              } catch {}
              if (r) for (var i in r.contents) throw new o.ErrnoError(55);
            }
            delete n.parent.contents[n.name],
              (n.parent.timestamp = Date.now()),
              (n.name = s),
              (t.contents[s] = n),
              (t.timestamp = n.parent.timestamp),
              (n.parent = t);
          },
          unlink: function (n, t) {
            delete n.contents[t], (n.timestamp = Date.now());
          },
          rmdir: function (n, t) {
            var s = o.lookupNode(n, t);
            for (var r in s.contents) throw new o.ErrnoError(55);
            delete n.contents[t], (n.timestamp = Date.now());
          },
          readdir: function (n) {
            var t = ['.', '..'];
            for (var s in n.contents) n.contents.hasOwnProperty(s) && t.push(s);
            return t;
          },
          symlink: function (n, t, s) {
            var r = pe.createNode(n, t, 41471, 0);
            return (r.link = s), r;
          },
          readlink: function (n) {
            if (!o.isLink(n.mode)) throw new o.ErrnoError(28);
            return n.link;
          },
        },
        stream_ops: {
          read: function (n, t, s, r, i) {
            var l = n.node.contents;
            if (i >= n.node.usedBytes) return 0;
            var g = Math.min(n.node.usedBytes - i, r);
            if (g > 8 && l.subarray) t.set(l.subarray(i, i + g), s);
            else for (var E = 0; E < g; E++) t[s + E] = l[i + E];
            return g;
          },
          write: function (n, t, s, r, i, l) {
            if ((t.buffer === Me.buffer && (l = !1), !r)) return 0;
            var g = n.node;
            if (
              ((g.timestamp = Date.now()),
              t.subarray && (!g.contents || g.contents.subarray))
            ) {
              if (l)
                return (
                  (g.contents = t.subarray(s, s + r)), (g.usedBytes = r), r
                );
              if (g.usedBytes === 0 && i === 0)
                return (g.contents = t.slice(s, s + r)), (g.usedBytes = r), r;
              if (i + r <= g.usedBytes)
                return g.contents.set(t.subarray(s, s + r), i), r;
            }
            if (
              (pe.expandFileStorage(g, i + r),
              g.contents.subarray && t.subarray)
            )
              g.contents.set(t.subarray(s, s + r), i);
            else for (var E = 0; E < r; E++) g.contents[i + E] = t[s + E];
            return (g.usedBytes = Math.max(g.usedBytes, i + r)), r;
          },
          llseek: function (n, t, s) {
            var r = t;
            if (
              (s === 1
                ? (r += n.position)
                : s === 2 && o.isFile(n.node.mode) && (r += n.node.usedBytes),
              r < 0)
            )
              throw new o.ErrnoError(28);
            return r;
          },
          allocate: function (n, t, s) {
            pe.expandFileStorage(n.node, t + s),
              (n.node.usedBytes = Math.max(n.node.usedBytes, t + s));
          },
          mmap: function (n, t, s, r, i) {
            if (!o.isFile(n.node.mode)) throw new o.ErrnoError(43);
            var l,
              g,
              E = n.node.contents;
            if (!(i & 2) && E.buffer === Me.buffer)
              (g = !1), (l = E.byteOffset);
            else {
              if (
                ((s > 0 || s + t < E.length) &&
                  (E.subarray
                    ? (E = E.subarray(s, s + t))
                    : (E = Array.prototype.slice.call(E, s, s + t))),
                (g = !0),
                (l = Xt()),
                !l)
              )
                throw new o.ErrnoError(48);
              Me.set(E, l);
            }
            return { ptr: l, allocated: g };
          },
          msync: function (n, t, s, r, i) {
            return pe.stream_ops.write(n, t, 0, r, s, !1), 0;
          },
        },
      };
      function Bn(n, t, s, r) {
        var i = r ? '' : 'al ' + n;
        De(
          n,
          (l) => {
            Ue(l, 'Loading data file "' + n + '" failed (no arrayBuffer).'),
              t(new Uint8Array(l)),
              i && pt();
          },
          (l) => {
            if (s) s();
            else throw 'Loading data file "' + n + '" failed.';
          },
        ),
          i && qt();
      }
      var o = {
          root: null,
          mounts: [],
          devices: {},
          streams: [],
          nextInode: 1,
          nameTable: null,
          currentPath: '/',
          initialized: !1,
          ignorePermissions: !0,
          ErrnoError: null,
          genericErrors: {},
          filesystems: null,
          syncFSRequests: 0,
          lookupPath: (n, t = {}) => {
            if (((n = Ve.resolve(n)), !n)) return { path: '', node: null };
            var s = { follow_mount: !0, recurse_count: 0 };
            if (((t = Object.assign(s, t)), t.recurse_count > 8))
              throw new o.ErrnoError(32);
            for (
              var r = n.split('/').filter((ee) => !!ee),
                i = o.root,
                l = '/',
                g = 0;
              g < r.length;
              g++
            ) {
              var E = g === r.length - 1;
              if (E && t.parent) break;
              if (
                ((i = o.lookupNode(i, r[g])),
                (l = be.join2(l, r[g])),
                o.isMountpoint(i) &&
                  (!E || (E && t.follow_mount)) &&
                  (i = i.mounted.root),
                !E || t.follow)
              )
                for (var O = 0; o.isLink(i.mode); ) {
                  var B = o.readlink(l);
                  l = Ve.resolve(be.dirname(l), B);
                  var H = o.lookupPath(l, {
                    recurse_count: t.recurse_count + 1,
                  });
                  if (((i = H.node), O++ > 40)) throw new o.ErrnoError(32);
                }
            }
            return { path: l, node: i };
          },
          getPath: (n) => {
            for (var t; ; ) {
              if (o.isRoot(n)) {
                var s = n.mount.mountpoint;
                return t ? (s[s.length - 1] !== '/' ? s + '/' + t : s + t) : s;
              }
              (t = t ? n.name + '/' + t : n.name), (n = n.parent);
            }
          },
          hashName: (n, t) => {
            for (var s = 0, r = 0; r < t.length; r++)
              s = ((s << 5) - s + t.charCodeAt(r)) | 0;
            return ((n + s) >>> 0) % o.nameTable.length;
          },
          hashAddNode: (n) => {
            var t = o.hashName(n.parent.id, n.name);
            (n.name_next = o.nameTable[t]), (o.nameTable[t] = n);
          },
          hashRemoveNode: (n) => {
            var t = o.hashName(n.parent.id, n.name);
            if (o.nameTable[t] === n) o.nameTable[t] = n.name_next;
            else
              for (var s = o.nameTable[t]; s; ) {
                if (s.name_next === n) {
                  s.name_next = n.name_next;
                  break;
                }
                s = s.name_next;
              }
          },
          lookupNode: (n, t) => {
            var s = o.mayLookup(n);
            if (s) throw new o.ErrnoError(s, n);
            for (
              var r = o.hashName(n.id, t), i = o.nameTable[r];
              i;
              i = i.name_next
            ) {
              var l = i.name;
              if (i.parent.id === n.id && l === t) return i;
            }
            return o.lookup(n, t);
          },
          createNode: (n, t, s, r) => {
            var i = new o.FSNode(n, t, s, r);
            return o.hashAddNode(i), i;
          },
          destroyNode: (n) => {
            o.hashRemoveNode(n);
          },
          isRoot: (n) => n === n.parent,
          isMountpoint: (n) => !!n.mounted,
          isFile: (n) => (n & 61440) === 32768,
          isDir: (n) => (n & 61440) === 16384,
          isLink: (n) => (n & 61440) === 40960,
          isChrdev: (n) => (n & 61440) === 8192,
          isBlkdev: (n) => (n & 61440) === 24576,
          isFIFO: (n) => (n & 61440) === 4096,
          isSocket: (n) => (n & 49152) === 49152,
          flagModes: { r: 0, 'r+': 2, w: 577, 'w+': 578, a: 1089, 'a+': 1090 },
          modeStringToFlags: (n) => {
            var t = o.flagModes[n];
            if (typeof t > 'u') throw new Error('Unknown file open mode: ' + n);
            return t;
          },
          flagsToPermissionString: (n) => {
            var t = ['r', 'w', 'rw'][n & 3];
            return n & 512 && (t += 'w'), t;
          },
          nodePermissions: (n, t) =>
            o.ignorePermissions
              ? 0
              : (t.includes('r') && !(n.mode & 292)) ||
                (t.includes('w') && !(n.mode & 146)) ||
                (t.includes('x') && !(n.mode & 73))
              ? 2
              : 0,
          mayLookup: (n) => {
            var t = o.nodePermissions(n, 'x');
            return t || (n.node_ops.lookup ? 0 : 2);
          },
          mayCreate: (n, t) => {
            try {
              var s = o.lookupNode(n, t);
              return 20;
            } catch {}
            return o.nodePermissions(n, 'wx');
          },
          mayDelete: (n, t, s) => {
            var r;
            try {
              r = o.lookupNode(n, t);
            } catch (l) {
              return l.errno;
            }
            var i = o.nodePermissions(n, 'wx');
            if (i) return i;
            if (s) {
              if (!o.isDir(r.mode)) return 54;
              if (o.isRoot(r) || o.getPath(r) === o.cwd()) return 10;
            } else if (o.isDir(r.mode)) return 31;
            return 0;
          },
          mayOpen: (n, t) =>
            n
              ? o.isLink(n.mode)
                ? 32
                : o.isDir(n.mode) &&
                  (o.flagsToPermissionString(t) !== 'r' || t & 512)
                ? 31
                : o.nodePermissions(n, o.flagsToPermissionString(t))
              : 44,
          MAX_OPEN_FDS: 4096,
          nextfd: (n = 0, t = o.MAX_OPEN_FDS) => {
            for (var s = n; s <= t; s++) if (!o.streams[s]) return s;
            throw new o.ErrnoError(33);
          },
          getStream: (n) => o.streams[n],
          createStream: (n, t, s) => {
            o.FSStream ||
              ((o.FSStream = function () {
                this.shared = {};
              }),
              (o.FSStream.prototype = {}),
              Object.defineProperties(o.FSStream.prototype, {
                object: {
                  get: function () {
                    return this.node;
                  },
                  set: function (i) {
                    this.node = i;
                  },
                },
                isRead: {
                  get: function () {
                    return (this.flags & 2097155) !== 1;
                  },
                },
                isWrite: {
                  get: function () {
                    return (this.flags & 2097155) !== 0;
                  },
                },
                isAppend: {
                  get: function () {
                    return this.flags & 1024;
                  },
                },
                flags: {
                  get: function () {
                    return this.shared.flags;
                  },
                  set: function (i) {
                    this.shared.flags = i;
                  },
                },
                position: {
                  get: function () {
                    return this.shared.position;
                  },
                  set: function (i) {
                    this.shared.position = i;
                  },
                },
              })),
              (n = Object.assign(new o.FSStream(), n));
            var r = o.nextfd(t, s);
            return (n.fd = r), (o.streams[r] = n), n;
          },
          closeStream: (n) => {
            o.streams[n] = null;
          },
          chrdev_stream_ops: {
            open: (n) => {
              var t = o.getDevice(n.node.rdev);
              (n.stream_ops = t.stream_ops),
                n.stream_ops.open && n.stream_ops.open(n);
            },
            llseek: () => {
              throw new o.ErrnoError(70);
            },
          },
          major: (n) => n >> 8,
          minor: (n) => n & 255,
          makedev: (n, t) => (n << 8) | t,
          registerDevice: (n, t) => {
            o.devices[n] = { stream_ops: t };
          },
          getDevice: (n) => o.devices[n],
          getMounts: (n) => {
            for (var t = [], s = [n]; s.length; ) {
              var r = s.pop();
              t.push(r), s.push.apply(s, r.mounts);
            }
            return t;
          },
          syncfs: (n, t) => {
            typeof n == 'function' && ((t = n), (n = !1)),
              o.syncFSRequests++,
              o.syncFSRequests > 1 &&
                Ee(
                  'warning: ' +
                    o.syncFSRequests +
                    ' FS.syncfs operations in flight at once, probably just doing extra work',
                );
            var s = o.getMounts(o.root.mount),
              r = 0;
            function i(g) {
              return o.syncFSRequests--, t(g);
            }
            function l(g) {
              if (g) return l.errored ? void 0 : ((l.errored = !0), i(g));
              ++r >= s.length && i(null);
            }
            s.forEach((g) => {
              if (!g.type.syncfs) return l(null);
              g.type.syncfs(g, n, l);
            });
          },
          mount: (n, t, s) => {
            var r = s === '/',
              i = !s,
              l;
            if (r && o.root) throw new o.ErrnoError(10);
            if (!r && !i) {
              var g = o.lookupPath(s, { follow_mount: !1 });
              if (((s = g.path), (l = g.node), o.isMountpoint(l)))
                throw new o.ErrnoError(10);
              if (!o.isDir(l.mode)) throw new o.ErrnoError(54);
            }
            var E = { type: n, opts: t, mountpoint: s, mounts: [] },
              O = n.mount(E);
            return (
              (O.mount = E),
              (E.root = O),
              r
                ? (o.root = O)
                : l && ((l.mounted = E), l.mount && l.mount.mounts.push(E)),
              O
            );
          },
          unmount: (n) => {
            var t = o.lookupPath(n, { follow_mount: !1 });
            if (!o.isMountpoint(t.node)) throw new o.ErrnoError(28);
            var s = t.node,
              r = s.mounted,
              i = o.getMounts(r);
            Object.keys(o.nameTable).forEach((g) => {
              for (var E = o.nameTable[g]; E; ) {
                var O = E.name_next;
                i.includes(E.mount) && o.destroyNode(E), (E = O);
              }
            }),
              (s.mounted = null);
            var l = s.mount.mounts.indexOf(r);
            s.mount.mounts.splice(l, 1);
          },
          lookup: (n, t) => n.node_ops.lookup(n, t),
          mknod: (n, t, s) => {
            var r = o.lookupPath(n, { parent: !0 }),
              i = r.node,
              l = be.basename(n);
            if (!l || l === '.' || l === '..') throw new o.ErrnoError(28);
            var g = o.mayCreate(i, l);
            if (g) throw new o.ErrnoError(g);
            if (!i.node_ops.mknod) throw new o.ErrnoError(63);
            return i.node_ops.mknod(i, l, t, s);
          },
          create: (n, t) => (
            (t = t !== void 0 ? t : 438),
            (t &= 4095),
            (t |= 32768),
            o.mknod(n, t, 0)
          ),
          mkdir: (n, t) => (
            (t = t !== void 0 ? t : 511),
            (t &= 1023),
            (t |= 16384),
            o.mknod(n, t, 0)
          ),
          mkdirTree: (n, t) => {
            for (var s = n.split('/'), r = '', i = 0; i < s.length; ++i)
              if (s[i]) {
                r += '/' + s[i];
                try {
                  o.mkdir(r, t);
                } catch (l) {
                  if (l.errno != 20) throw l;
                }
              }
          },
          mkdev: (n, t, s) => (
            typeof s > 'u' && ((s = t), (t = 438)),
            (t |= 8192),
            o.mknod(n, t, s)
          ),
          symlink: (n, t) => {
            if (!Ve.resolve(n)) throw new o.ErrnoError(44);
            var s = o.lookupPath(t, { parent: !0 }),
              r = s.node;
            if (!r) throw new o.ErrnoError(44);
            var i = be.basename(t),
              l = o.mayCreate(r, i);
            if (l) throw new o.ErrnoError(l);
            if (!r.node_ops.symlink) throw new o.ErrnoError(63);
            return r.node_ops.symlink(r, i, n);
          },
          rename: (n, t) => {
            var s = be.dirname(n),
              r = be.dirname(t),
              i = be.basename(n),
              l = be.basename(t),
              g,
              E,
              O;
            if (
              ((g = o.lookupPath(n, { parent: !0 })),
              (E = g.node),
              (g = o.lookupPath(t, { parent: !0 })),
              (O = g.node),
              !E || !O)
            )
              throw new o.ErrnoError(44);
            if (E.mount !== O.mount) throw new o.ErrnoError(75);
            var B = o.lookupNode(E, i),
              H = Ve.relative(n, r);
            if (H.charAt(0) !== '.') throw new o.ErrnoError(28);
            if (((H = Ve.relative(t, s)), H.charAt(0) !== '.'))
              throw new o.ErrnoError(55);
            var ee;
            try {
              ee = o.lookupNode(O, l);
            } catch {}
            if (B !== ee) {
              var S = o.isDir(B.mode),
                f = o.mayDelete(E, i, S);
              if (f) throw new o.ErrnoError(f);
              if (((f = ee ? o.mayDelete(O, l, S) : o.mayCreate(O, l)), f))
                throw new o.ErrnoError(f);
              if (!E.node_ops.rename) throw new o.ErrnoError(63);
              if (o.isMountpoint(B) || (ee && o.isMountpoint(ee)))
                throw new o.ErrnoError(10);
              if (O !== E && ((f = o.nodePermissions(E, 'w')), f))
                throw new o.ErrnoError(f);
              o.hashRemoveNode(B);
              try {
                E.node_ops.rename(B, O, l);
              } catch (m) {
                throw m;
              } finally {
                o.hashAddNode(B);
              }
            }
          },
          rmdir: (n) => {
            var t = o.lookupPath(n, { parent: !0 }),
              s = t.node,
              r = be.basename(n),
              i = o.lookupNode(s, r),
              l = o.mayDelete(s, r, !0);
            if (l) throw new o.ErrnoError(l);
            if (!s.node_ops.rmdir) throw new o.ErrnoError(63);
            if (o.isMountpoint(i)) throw new o.ErrnoError(10);
            s.node_ops.rmdir(s, r), o.destroyNode(i);
          },
          readdir: (n) => {
            var t = o.lookupPath(n, { follow: !0 }),
              s = t.node;
            if (!s.node_ops.readdir) throw new o.ErrnoError(54);
            return s.node_ops.readdir(s);
          },
          unlink: (n) => {
            var t = o.lookupPath(n, { parent: !0 }),
              s = t.node;
            if (!s) throw new o.ErrnoError(44);
            var r = be.basename(n),
              i = o.lookupNode(s, r),
              l = o.mayDelete(s, r, !1);
            if (l) throw new o.ErrnoError(l);
            if (!s.node_ops.unlink) throw new o.ErrnoError(63);
            if (o.isMountpoint(i)) throw new o.ErrnoError(10);
            s.node_ops.unlink(s, r), o.destroyNode(i);
          },
          readlink: (n) => {
            var t = o.lookupPath(n),
              s = t.node;
            if (!s) throw new o.ErrnoError(44);
            if (!s.node_ops.readlink) throw new o.ErrnoError(28);
            return Ve.resolve(o.getPath(s.parent), s.node_ops.readlink(s));
          },
          stat: (n, t) => {
            var s = o.lookupPath(n, { follow: !t }),
              r = s.node;
            if (!r) throw new o.ErrnoError(44);
            if (!r.node_ops.getattr) throw new o.ErrnoError(63);
            return r.node_ops.getattr(r);
          },
          lstat: (n) => o.stat(n, !0),
          chmod: (n, t, s) => {
            var r;
            if (typeof n == 'string') {
              var i = o.lookupPath(n, { follow: !s });
              r = i.node;
            } else r = n;
            if (!r.node_ops.setattr) throw new o.ErrnoError(63);
            r.node_ops.setattr(r, {
              mode: (t & 4095) | (r.mode & -4096),
              timestamp: Date.now(),
            });
          },
          lchmod: (n, t) => {
            o.chmod(n, t, !0);
          },
          fchmod: (n, t) => {
            var s = o.getStream(n);
            if (!s) throw new o.ErrnoError(8);
            o.chmod(s.node, t);
          },
          chown: (n, t, s, r) => {
            var i;
            if (typeof n == 'string') {
              var l = o.lookupPath(n, { follow: !r });
              i = l.node;
            } else i = n;
            if (!i.node_ops.setattr) throw new o.ErrnoError(63);
            i.node_ops.setattr(i, { timestamp: Date.now() });
          },
          lchown: (n, t, s) => {
            o.chown(n, t, s, !0);
          },
          fchown: (n, t, s) => {
            var r = o.getStream(n);
            if (!r) throw new o.ErrnoError(8);
            o.chown(r.node, t, s);
          },
          truncate: (n, t) => {
            if (t < 0) throw new o.ErrnoError(28);
            var s;
            if (typeof n == 'string') {
              var r = o.lookupPath(n, { follow: !0 });
              s = r.node;
            } else s = n;
            if (!s.node_ops.setattr) throw new o.ErrnoError(63);
            if (o.isDir(s.mode)) throw new o.ErrnoError(31);
            if (!o.isFile(s.mode)) throw new o.ErrnoError(28);
            var i = o.nodePermissions(s, 'w');
            if (i) throw new o.ErrnoError(i);
            s.node_ops.setattr(s, { size: t, timestamp: Date.now() });
          },
          ftruncate: (n, t) => {
            var s = o.getStream(n);
            if (!s) throw new o.ErrnoError(8);
            if (!(s.flags & 2097155)) throw new o.ErrnoError(28);
            o.truncate(s.node, t);
          },
          utime: (n, t, s) => {
            var r = o.lookupPath(n, { follow: !0 }),
              i = r.node;
            i.node_ops.setattr(i, { timestamp: Math.max(t, s) });
          },
          open: (n, t, s) => {
            if (n === '') throw new o.ErrnoError(44);
            (t = typeof t == 'string' ? o.modeStringToFlags(t) : t),
              (s = typeof s > 'u' ? 438 : s),
              t & 64 ? (s = (s & 4095) | 32768) : (s = 0);
            var r;
            if (typeof n == 'object') r = n;
            else {
              n = be.normalize(n);
              try {
                var i = o.lookupPath(n, { follow: !(t & 131072) });
                r = i.node;
              } catch {}
            }
            var l = !1;
            if (t & 64)
              if (r) {
                if (t & 128) throw new o.ErrnoError(20);
              } else (r = o.mknod(n, s, 0)), (l = !0);
            if (!r) throw new o.ErrnoError(44);
            if (
              (o.isChrdev(r.mode) && (t &= -513), t & 65536 && !o.isDir(r.mode))
            )
              throw new o.ErrnoError(54);
            if (!l) {
              var g = o.mayOpen(r, t);
              if (g) throw new o.ErrnoError(g);
            }
            t & 512 && !l && o.truncate(r, 0), (t &= -131713);
            var E = o.createStream({
              node: r,
              path: o.getPath(r),
              flags: t,
              seekable: !0,
              position: 0,
              stream_ops: r.stream_ops,
              ungotten: [],
              error: !1,
            });
            return (
              E.stream_ops.open && E.stream_ops.open(E),
              e.logReadFiles &&
                !(t & 1) &&
                (o.readFiles || (o.readFiles = {}),
                n in o.readFiles || (o.readFiles[n] = 1)),
              E
            );
          },
          close: (n) => {
            if (o.isClosed(n)) throw new o.ErrnoError(8);
            n.getdents && (n.getdents = null);
            try {
              n.stream_ops.close && n.stream_ops.close(n);
            } catch (t) {
              throw t;
            } finally {
              o.closeStream(n.fd);
            }
            n.fd = null;
          },
          isClosed: (n) => n.fd === null,
          llseek: (n, t, s) => {
            if (o.isClosed(n)) throw new o.ErrnoError(8);
            if (!n.seekable || !n.stream_ops.llseek) throw new o.ErrnoError(70);
            if (s != 0 && s != 1 && s != 2) throw new o.ErrnoError(28);
            return (
              (n.position = n.stream_ops.llseek(n, t, s)),
              (n.ungotten = []),
              n.position
            );
          },
          read: (n, t, s, r, i) => {
            if (r < 0 || i < 0) throw new o.ErrnoError(28);
            if (o.isClosed(n)) throw new o.ErrnoError(8);
            if ((n.flags & 2097155) === 1) throw new o.ErrnoError(8);
            if (o.isDir(n.node.mode)) throw new o.ErrnoError(31);
            if (!n.stream_ops.read) throw new o.ErrnoError(28);
            var l = typeof i < 'u';
            if (!l) i = n.position;
            else if (!n.seekable) throw new o.ErrnoError(70);
            var g = n.stream_ops.read(n, t, s, r, i);
            return l || (n.position += g), g;
          },
          write: (n, t, s, r, i, l) => {
            if (r < 0 || i < 0) throw new o.ErrnoError(28);
            if (o.isClosed(n)) throw new o.ErrnoError(8);
            if (!(n.flags & 2097155)) throw new o.ErrnoError(8);
            if (o.isDir(n.node.mode)) throw new o.ErrnoError(31);
            if (!n.stream_ops.write) throw new o.ErrnoError(28);
            n.seekable && n.flags & 1024 && o.llseek(n, 0, 2);
            var g = typeof i < 'u';
            if (!g) i = n.position;
            else if (!n.seekable) throw new o.ErrnoError(70);
            var E = n.stream_ops.write(n, t, s, r, i, l);
            return g || (n.position += E), E;
          },
          allocate: (n, t, s) => {
            if (o.isClosed(n)) throw new o.ErrnoError(8);
            if (t < 0 || s <= 0) throw new o.ErrnoError(28);
            if (!(n.flags & 2097155)) throw new o.ErrnoError(8);
            if (!o.isFile(n.node.mode) && !o.isDir(n.node.mode))
              throw new o.ErrnoError(43);
            if (!n.stream_ops.allocate) throw new o.ErrnoError(138);
            n.stream_ops.allocate(n, t, s);
          },
          mmap: (n, t, s, r, i) => {
            if (r & 2 && !(i & 2) && (n.flags & 2097155) !== 2)
              throw new o.ErrnoError(2);
            if ((n.flags & 2097155) === 1) throw new o.ErrnoError(2);
            if (!n.stream_ops.mmap) throw new o.ErrnoError(43);
            return n.stream_ops.mmap(n, t, s, r, i);
          },
          msync: (n, t, s, r, i) =>
            n.stream_ops.msync ? n.stream_ops.msync(n, t, s, r, i) : 0,
          munmap: (n) => 0,
          ioctl: (n, t, s) => {
            if (!n.stream_ops.ioctl) throw new o.ErrnoError(59);
            return n.stream_ops.ioctl(n, t, s);
          },
          readFile: (n, t = {}) => {
            if (
              ((t.flags = t.flags || 0),
              (t.encoding = t.encoding || 'binary'),
              t.encoding !== 'utf8' && t.encoding !== 'binary')
            )
              throw new Error('Invalid encoding type "' + t.encoding + '"');
            var s,
              r = o.open(n, t.flags),
              i = o.stat(n),
              l = i.size,
              g = new Uint8Array(l);
            return (
              o.read(r, g, 0, l, 0),
              t.encoding === 'utf8'
                ? (s = He(g, 0))
                : t.encoding === 'binary' && (s = g),
              o.close(r),
              s
            );
          },
          writeFile: (n, t, s = {}) => {
            s.flags = s.flags || 577;
            var r = o.open(n, s.flags, s.mode);
            if (typeof t == 'string') {
              var i = new Uint8Array(st(t) + 1),
                l = ft(t, i, 0, i.length);
              o.write(r, i, 0, l, void 0, s.canOwn);
            } else if (ArrayBuffer.isView(t))
              o.write(r, t, 0, t.byteLength, void 0, s.canOwn);
            else throw new Error('Unsupported data type');
            o.close(r);
          },
          cwd: () => o.currentPath,
          chdir: (n) => {
            var t = o.lookupPath(n, { follow: !0 });
            if (t.node === null) throw new o.ErrnoError(44);
            if (!o.isDir(t.node.mode)) throw new o.ErrnoError(54);
            var s = o.nodePermissions(t.node, 'x');
            if (s) throw new o.ErrnoError(s);
            o.currentPath = t.path;
          },
          createDefaultDirectories: () => {
            o.mkdir('/tmp'), o.mkdir('/home'), o.mkdir('/home/web_user');
          },
          createDefaultDevices: () => {
            o.mkdir('/dev'),
              o.registerDevice(o.makedev(1, 3), {
                read: () => 0,
                write: (t, s, r, i, l) => i,
              }),
              o.mkdev('/dev/null', o.makedev(1, 3)),
              nt.register(o.makedev(5, 0), nt.default_tty_ops),
              nt.register(o.makedev(6, 0), nt.default_tty1_ops),
              o.mkdev('/dev/tty', o.makedev(5, 0)),
              o.mkdev('/dev/tty1', o.makedev(6, 0));
            var n = jn();
            o.createDevice('/dev', 'random', n),
              o.createDevice('/dev', 'urandom', n),
              o.mkdir('/dev/shm'),
              o.mkdir('/dev/shm/tmp');
          },
          createSpecialDirectories: () => {
            o.mkdir('/proc');
            var n = o.mkdir('/proc/self');
            o.mkdir('/proc/self/fd'),
              o.mount(
                {
                  mount: () => {
                    var t = o.createNode(n, 'fd', 16895, 73);
                    return (
                      (t.node_ops = {
                        lookup: (s, r) => {
                          var i = +r,
                            l = o.getStream(i);
                          if (!l) throw new o.ErrnoError(8);
                          var g = {
                            parent: null,
                            mount: { mountpoint: 'fake' },
                            node_ops: { readlink: () => l.path },
                          };
                          return (g.parent = g), g;
                        },
                      }),
                      t
                    );
                  },
                },
                {},
                '/proc/self/fd',
              );
          },
          createStandardStreams: () => {
            e.stdin
              ? o.createDevice('/dev', 'stdin', e.stdin)
              : o.symlink('/dev/tty', '/dev/stdin'),
              e.stdout
                ? o.createDevice('/dev', 'stdout', null, e.stdout)
                : o.symlink('/dev/tty', '/dev/stdout'),
              e.stderr
                ? o.createDevice('/dev', 'stderr', null, e.stderr)
                : o.symlink('/dev/tty1', '/dev/stderr'),
              o.open('/dev/stdin', 0),
              o.open('/dev/stdout', 1),
              o.open('/dev/stderr', 1);
          },
          ensureErrnoError: () => {
            o.ErrnoError ||
              ((o.ErrnoError = function (t, s) {
                (this.node = s),
                  (this.setErrno = function (r) {
                    this.errno = r;
                  }),
                  this.setErrno(t),
                  (this.message = 'FS error');
              }),
              (o.ErrnoError.prototype = new Error()),
              (o.ErrnoError.prototype.constructor = o.ErrnoError),
              [44].forEach((n) => {
                (o.genericErrors[n] = new o.ErrnoError(n)),
                  (o.genericErrors[n].stack = '<generic error, no stack>');
              }));
          },
          staticInit: () => {
            o.ensureErrnoError(),
              (o.nameTable = new Array(4096)),
              o.mount(pe, {}, '/'),
              o.createDefaultDirectories(),
              o.createDefaultDevices(),
              o.createSpecialDirectories(),
              (o.filesystems = { MEMFS: pe });
          },
          init: (n, t, s) => {
            (o.init.initialized = !0),
              o.ensureErrnoError(),
              (e.stdin = n || e.stdin),
              (e.stdout = t || e.stdout),
              (e.stderr = s || e.stderr),
              o.createStandardStreams();
          },
          quit: () => {
            o.init.initialized = !1;
            for (var n = 0; n < o.streams.length; n++) {
              var t = o.streams[n];
              t && o.close(t);
            }
          },
          getMode: (n, t) => {
            var s = 0;
            return n && (s |= 365), t && (s |= 146), s;
          },
          findObject: (n, t) => {
            var s = o.analyzePath(n, t);
            return s.exists ? s.object : null;
          },
          analyzePath: (n, t) => {
            try {
              var s = o.lookupPath(n, { follow: !t });
              n = s.path;
            } catch {}
            var r = {
              isRoot: !1,
              exists: !1,
              error: 0,
              name: null,
              path: null,
              object: null,
              parentExists: !1,
              parentPath: null,
              parentObject: null,
            };
            try {
              var s = o.lookupPath(n, { parent: !0 });
              (r.parentExists = !0),
                (r.parentPath = s.path),
                (r.parentObject = s.node),
                (r.name = be.basename(n)),
                (s = o.lookupPath(n, { follow: !t })),
                (r.exists = !0),
                (r.path = s.path),
                (r.object = s.node),
                (r.name = s.node.name),
                (r.isRoot = s.path === '/');
            } catch (i) {
              r.error = i.errno;
            }
            return r;
          },
          createPath: (n, t, s, r) => {
            n = typeof n == 'string' ? n : o.getPath(n);
            for (var i = t.split('/').reverse(); i.length; ) {
              var l = i.pop();
              if (l) {
                var g = be.join2(n, l);
                try {
                  o.mkdir(g);
                } catch {}
                n = g;
              }
            }
            return g;
          },
          createFile: (n, t, s, r, i) => {
            var l = be.join2(typeof n == 'string' ? n : o.getPath(n), t),
              g = o.getMode(r, i);
            return o.create(l, g);
          },
          createDataFile: (n, t, s, r, i, l) => {
            var g = t;
            n &&
              ((n = typeof n == 'string' ? n : o.getPath(n)),
              (g = t ? be.join2(n, t) : n));
            var E = o.getMode(r, i),
              O = o.create(g, E);
            if (s) {
              if (typeof s == 'string') {
                for (
                  var B = new Array(s.length), H = 0, ee = s.length;
                  H < ee;
                  ++H
                )
                  B[H] = s.charCodeAt(H);
                s = B;
              }
              o.chmod(O, E | 146);
              var S = o.open(O, 577);
              o.write(S, s, 0, s.length, 0, l), o.close(S), o.chmod(O, E);
            }
            return O;
          },
          createDevice: (n, t, s, r) => {
            var i = be.join2(typeof n == 'string' ? n : o.getPath(n), t),
              l = o.getMode(!!s, !!r);
            o.createDevice.major || (o.createDevice.major = 64);
            var g = o.makedev(o.createDevice.major++, 0);
            return (
              o.registerDevice(g, {
                open: (E) => {
                  E.seekable = !1;
                },
                close: (E) => {
                  r && r.buffer && r.buffer.length && r(10);
                },
                read: (E, O, B, H, ee) => {
                  for (var S = 0, f = 0; f < H; f++) {
                    var m;
                    try {
                      m = s();
                    } catch {
                      throw new o.ErrnoError(29);
                    }
                    if (m === void 0 && S === 0) throw new o.ErrnoError(6);
                    if (m == null) break;
                    S++, (O[B + f] = m);
                  }
                  return S && (E.node.timestamp = Date.now()), S;
                },
                write: (E, O, B, H, ee) => {
                  for (var S = 0; S < H; S++)
                    try {
                      r(O[B + S]);
                    } catch {
                      throw new o.ErrnoError(29);
                    }
                  return H && (E.node.timestamp = Date.now()), S;
                },
              }),
              o.mkdev(i, l, g)
            );
          },
          forceLoadFile: (n) => {
            if (n.isDevice || n.isFolder || n.link || n.contents) return !0;
            if (typeof XMLHttpRequest < 'u')
              throw new Error(
                'Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.',
              );
            if (Ce)
              try {
                (n.contents = xt(Ce(n.url), !0)),
                  (n.usedBytes = n.contents.length);
              } catch {
                throw new o.ErrnoError(29);
              }
            else
              throw new Error('Cannot load without read() or XMLHttpRequest.');
          },
          createLazyFile: (n, t, s, r, i) => {
            function l() {
              (this.lengthKnown = !1), (this.chunks = []);
            }
            if (
              ((l.prototype.get = function (f) {
                if (!(f > this.length - 1 || f < 0)) {
                  var m = f % this.chunkSize,
                    w = (f / this.chunkSize) | 0;
                  return this.getter(w)[m];
                }
              }),
              (l.prototype.setDataGetter = function (f) {
                this.getter = f;
              }),
              (l.prototype.cacheLength = function () {
                var f = new XMLHttpRequest();
                if (
                  (f.open('HEAD', s, !1),
                  f.send(null),
                  !((f.status >= 200 && f.status < 300) || f.status === 304))
                )
                  throw new Error(
                    "Couldn't load " + s + '. Status: ' + f.status,
                  );
                var m = Number(f.getResponseHeader('Content-length')),
                  w,
                  v =
                    (w = f.getResponseHeader('Accept-Ranges')) && w === 'bytes',
                  b =
                    (w = f.getResponseHeader('Content-Encoding')) &&
                    w === 'gzip',
                  R = 1024 * 1024;
                v || (R = m);
                var z = (U, G) => {
                    if (U > G)
                      throw new Error(
                        'invalid range (' +
                          U +
                          ', ' +
                          G +
                          ') or no bytes requested!',
                      );
                    if (G > m - 1)
                      throw new Error(
                        'only ' + m + ' bytes available! programmer error!',
                      );
                    var p = new XMLHttpRequest();
                    if (
                      (p.open('GET', s, !1),
                      m !== R &&
                        p.setRequestHeader('Range', 'bytes=' + U + '-' + G),
                      (p.responseType = 'arraybuffer'),
                      p.overrideMimeType &&
                        p.overrideMimeType(
                          'text/plain; charset=x-user-defined',
                        ),
                      p.send(null),
                      !(
                        (p.status >= 200 && p.status < 300) ||
                        p.status === 304
                      ))
                    )
                      throw new Error(
                        "Couldn't load " + s + '. Status: ' + p.status,
                      );
                    return p.response !== void 0
                      ? new Uint8Array(p.response || [])
                      : xt(p.responseText || '', !0);
                  },
                  L = this;
                L.setDataGetter((U) => {
                  var G = U * R,
                    p = (U + 1) * R - 1;
                  if (
                    ((p = Math.min(p, m - 1)),
                    typeof L.chunks[U] > 'u' && (L.chunks[U] = z(G, p)),
                    typeof L.chunks[U] > 'u')
                  )
                    throw new Error('doXHR failed!');
                  return L.chunks[U];
                }),
                  (b || !m) &&
                    ((R = m = 1),
                    (m = this.getter(0).length),
                    (R = m),
                    we(
                      'LazyFiles on gzip forces download of the whole file when length is accessed',
                    )),
                  (this._length = m),
                  (this._chunkSize = R),
                  (this.lengthKnown = !0);
              }),
              typeof XMLHttpRequest < 'u')
            ) {
              if (!ae)
                throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
              var g = new l();
              Object.defineProperties(g, {
                length: {
                  get: function () {
                    return this.lengthKnown || this.cacheLength(), this._length;
                  },
                },
                chunkSize: {
                  get: function () {
                    return (
                      this.lengthKnown || this.cacheLength(), this._chunkSize
                    );
                  },
                },
              });
              var E = { isDevice: !1, contents: g };
            } else var E = { isDevice: !1, url: s };
            var O = o.createFile(n, t, E, r, i);
            E.contents
              ? (O.contents = E.contents)
              : E.url && ((O.contents = null), (O.url = E.url)),
              Object.defineProperties(O, {
                usedBytes: {
                  get: function () {
                    return this.contents.length;
                  },
                },
              });
            var B = {},
              H = Object.keys(O.stream_ops);
            H.forEach((S) => {
              var f = O.stream_ops[S];
              B[S] = function () {
                return o.forceLoadFile(O), f.apply(null, arguments);
              };
            });
            function ee(S, f, m, w, v) {
              var b = S.node.contents;
              if (v >= b.length) return 0;
              var R = Math.min(b.length - v, w);
              if (b.slice) for (var z = 0; z < R; z++) f[m + z] = b[v + z];
              else for (var z = 0; z < R; z++) f[m + z] = b.get(v + z);
              return R;
            }
            return (
              (B.read = (S, f, m, w, v) => (
                o.forceLoadFile(O), ee(S, f, m, w, v)
              )),
              (B.mmap = (S, f, m, w, v) => {
                o.forceLoadFile(O);
                var b = Xt();
                if (!b) throw new o.ErrnoError(48);
                return ee(S, Me, b, f, m), { ptr: b, allocated: !0 };
              }),
              (O.stream_ops = B),
              O
            );
          },
          createPreloadedFile: (n, t, s, r, i, l, g, E, O, B) => {
            var H = t ? Ve.resolve(be.join2(n, t)) : n;
            function ee(S) {
              function f(m) {
                B && B(),
                  E || o.createDataFile(n, t, m, r, i, O),
                  l && l(),
                  pt();
              }
              Browser.handledByPreloadPlugin(S, H, f, () => {
                g && g(), pt();
              }) || f(S);
            }
            qt(), typeof s == 'string' ? Bn(s, (S) => ee(S), g) : ee(s);
          },
          indexedDB: () =>
            window.indexedDB ||
            window.mozIndexedDB ||
            window.webkitIndexedDB ||
            window.msIndexedDB,
          DB_NAME: () => 'EM_FS_' + window.location.pathname,
          DB_VERSION: 20,
          DB_STORE_NAME: 'FILE_DATA',
          saveFilesToDB: (n, t, s) => {
            (t = t || (() => {})), (s = s || (() => {}));
            var r = o.indexedDB();
            try {
              var i = r.open(o.DB_NAME(), o.DB_VERSION);
            } catch (l) {
              return s(l);
            }
            (i.onupgradeneeded = () => {
              we('creating db');
              var l = i.result;
              l.createObjectStore(o.DB_STORE_NAME);
            }),
              (i.onsuccess = () => {
                var l = i.result,
                  g = l.transaction([o.DB_STORE_NAME], 'readwrite'),
                  E = g.objectStore(o.DB_STORE_NAME),
                  O = 0,
                  B = 0,
                  H = n.length;
                function ee() {
                  B == 0 ? t() : s();
                }
                n.forEach((S) => {
                  var f = E.put(o.analyzePath(S).object.contents, S);
                  (f.onsuccess = () => {
                    O++, O + B == H && ee();
                  }),
                    (f.onerror = () => {
                      B++, O + B == H && ee();
                    });
                }),
                  (g.onerror = s);
              }),
              (i.onerror = s);
          },
          loadFilesFromDB: (n, t, s) => {
            (t = t || (() => {})), (s = s || (() => {}));
            var r = o.indexedDB();
            try {
              var i = r.open(o.DB_NAME(), o.DB_VERSION);
            } catch (l) {
              return s(l);
            }
            (i.onupgradeneeded = s),
              (i.onsuccess = () => {
                var l = i.result;
                try {
                  var g = l.transaction([o.DB_STORE_NAME], 'readonly');
                } catch (S) {
                  s(S);
                  return;
                }
                var E = g.objectStore(o.DB_STORE_NAME),
                  O = 0,
                  B = 0,
                  H = n.length;
                function ee() {
                  B == 0 ? t() : s();
                }
                n.forEach((S) => {
                  var f = E.get(S);
                  (f.onsuccess = () => {
                    o.analyzePath(S).exists && o.unlink(S),
                      o.createDataFile(
                        be.dirname(S),
                        be.basename(S),
                        f.result,
                        !0,
                        !0,
                        !0,
                      ),
                      O++,
                      O + B == H && ee();
                  }),
                    (f.onerror = () => {
                      B++, O + B == H && ee();
                    });
                }),
                  (g.onerror = s);
              }),
              (i.onerror = s);
          },
        },
        fe = {
          DEFAULT_POLLMASK: 5,
          calculateAt: function (n, t, s) {
            if (be.isAbs(t)) return t;
            var r;
            if (n === -100) r = o.cwd();
            else {
              var i = fe.getStreamFromFD(n);
              r = i.path;
            }
            if (t.length == 0) {
              if (!s) throw new o.ErrnoError(44);
              return r;
            }
            return be.join2(r, t);
          },
          doStat: function (n, t, s) {
            try {
              var r = n(t);
            } catch (E) {
              if (
                E &&
                E.node &&
                be.normalize(t) !== be.normalize(o.getPath(E.node))
              )
                return -54;
              throw E;
            }
            (me[s >> 2] = r.dev),
              (me[(s + 8) >> 2] = r.ino),
              (me[(s + 12) >> 2] = r.mode),
              (Te[(s + 16) >> 2] = r.nlink),
              (me[(s + 20) >> 2] = r.uid),
              (me[(s + 24) >> 2] = r.gid),
              (me[(s + 28) >> 2] = r.rdev),
              (Pe = [
                r.size >>> 0,
                ((he = r.size),
                +Math.abs(he) >= 1
                  ? he > 0
                    ? (Math.min(+Math.floor(he / 4294967296), 4294967295) |
                        0) >>>
                      0
                    : ~~+Math.ceil((he - +(~~he >>> 0)) / 4294967296) >>> 0
                  : 0),
              ]),
              (me[(s + 40) >> 2] = Pe[0]),
              (me[(s + 44) >> 2] = Pe[1]),
              (me[(s + 48) >> 2] = 4096),
              (me[(s + 52) >> 2] = r.blocks);
            var i = r.atime.getTime(),
              l = r.mtime.getTime(),
              g = r.ctime.getTime();
            return (
              (Pe = [
                Math.floor(i / 1e3) >>> 0,
                ((he = Math.floor(i / 1e3)),
                +Math.abs(he) >= 1
                  ? he > 0
                    ? (Math.min(+Math.floor(he / 4294967296), 4294967295) |
                        0) >>>
                      0
                    : ~~+Math.ceil((he - +(~~he >>> 0)) / 4294967296) >>> 0
                  : 0),
              ]),
              (me[(s + 56) >> 2] = Pe[0]),
              (me[(s + 60) >> 2] = Pe[1]),
              (Te[(s + 64) >> 2] = (i % 1e3) * 1e3),
              (Pe = [
                Math.floor(l / 1e3) >>> 0,
                ((he = Math.floor(l / 1e3)),
                +Math.abs(he) >= 1
                  ? he > 0
                    ? (Math.min(+Math.floor(he / 4294967296), 4294967295) |
                        0) >>>
                      0
                    : ~~+Math.ceil((he - +(~~he >>> 0)) / 4294967296) >>> 0
                  : 0),
              ]),
              (me[(s + 72) >> 2] = Pe[0]),
              (me[(s + 76) >> 2] = Pe[1]),
              (Te[(s + 80) >> 2] = (l % 1e3) * 1e3),
              (Pe = [
                Math.floor(g / 1e3) >>> 0,
                ((he = Math.floor(g / 1e3)),
                +Math.abs(he) >= 1
                  ? he > 0
                    ? (Math.min(+Math.floor(he / 4294967296), 4294967295) |
                        0) >>>
                      0
                    : ~~+Math.ceil((he - +(~~he >>> 0)) / 4294967296) >>> 0
                  : 0),
              ]),
              (me[(s + 88) >> 2] = Pe[0]),
              (me[(s + 92) >> 2] = Pe[1]),
              (Te[(s + 96) >> 2] = (g % 1e3) * 1e3),
              (Pe = [
                r.ino >>> 0,
                ((he = r.ino),
                +Math.abs(he) >= 1
                  ? he > 0
                    ? (Math.min(+Math.floor(he / 4294967296), 4294967295) |
                        0) >>>
                      0
                    : ~~+Math.ceil((he - +(~~he >>> 0)) / 4294967296) >>> 0
                  : 0),
              ]),
              (me[(s + 104) >> 2] = Pe[0]),
              (me[(s + 108) >> 2] = Pe[1]),
              0
            );
          },
          doMsync: function (n, t, s, r, i) {
            if (!o.isFile(t.node.mode)) throw new o.ErrnoError(43);
            if (r & 2) return 0;
            var l = it.slice(n, n + s);
            o.msync(t, l, i, s, r);
          },
          varargs: void 0,
          get: function () {
            fe.varargs += 4;
            var n = me[(fe.varargs - 4) >> 2];
            return n;
          },
          getStr: function (n) {
            var t = Fn(n);
            return t;
          },
          getStreamFromFD: function (n) {
            var t = o.getStream(n);
            if (!t) throw new o.ErrnoError(8);
            return t;
          },
        };
      function Un(n, t) {
        try {
          return (n = fe.getStr(n)), o.chmod(n, t), 0;
        } catch (s) {
          if (typeof o > 'u' || !(s instanceof o.ErrnoError)) throw s;
          return -s.errno;
        }
      }
      function Wn(n, t, s, r) {
        try {
          if (((t = fe.getStr(t)), (t = fe.calculateAt(n, t)), s & -8))
            return -28;
          var i = o.lookupPath(t, { follow: !0 }),
            l = i.node;
          if (!l) return -44;
          var g = '';
          return (
            s & 4 && (g += 'r'),
            s & 2 && (g += 'w'),
            s & 1 && (g += 'x'),
            g && o.nodePermissions(l, g) ? -2 : 0
          );
        } catch (E) {
          if (typeof o > 'u' || !(E instanceof o.ErrnoError)) throw E;
          return -E.errno;
        }
      }
      function Qn(n, t) {
        try {
          return o.fchmod(n, t), 0;
        } catch (s) {
          if (typeof o > 'u' || !(s instanceof o.ErrnoError)) throw s;
          return -s.errno;
        }
      }
      function $n(n, t, s) {
        try {
          return o.fchown(n, t, s), 0;
        } catch (r) {
          if (typeof o > 'u' || !(r instanceof o.ErrnoError)) throw r;
          return -r.errno;
        }
      }
      function Hn(n) {
        return (me[rn() >> 2] = n), n;
      }
      function Vn(n, t, s) {
        fe.varargs = s;
        try {
          var r = fe.getStreamFromFD(n);
          switch (t) {
            case 0: {
              var i = fe.get();
              if (i < 0) return -28;
              var l;
              return (l = o.createStream(r, i)), l.fd;
            }
            case 1:
            case 2:
              return 0;
            case 3:
              return r.flags;
            case 4: {
              var i = fe.get();
              return (r.flags |= i), 0;
            }
            case 5: {
              var i = fe.get(),
                g = 0;
              return (Wt[(i + g) >> 1] = 2), 0;
            }
            case 6:
            case 7:
              return 0;
            case 16:
            case 8:
              return -28;
            case 9:
              return Hn(28), -1;
            default:
              return -28;
          }
        } catch (E) {
          if (typeof o > 'u' || !(E instanceof o.ErrnoError)) throw E;
          return -E.errno;
        }
      }
      function Gn(n, t) {
        try {
          var s = fe.getStreamFromFD(n);
          return fe.doStat(o.stat, s.path, t);
        } catch (r) {
          if (typeof o > 'u' || !(r instanceof o.ErrnoError)) throw r;
          return -r.errno;
        }
      }
      var Kn = 9007199254740992,
        Jn = -9007199254740992;
      function Zt(n) {
        return n < Jn || n > Kn ? NaN : Number(n);
      }
      function Xn(n, t) {
        try {
          return (t = Zt(t)), isNaN(t) ? -61 : (o.ftruncate(n, t), 0);
        } catch (s) {
          if (typeof o > 'u' || !(s instanceof o.ErrnoError)) throw s;
          return -s.errno;
        }
      }
      function Zn(n, t) {
        try {
          if (t === 0) return -28;
          var s = o.cwd(),
            r = st(s) + 1;
          return t < r ? -68 : (Ut(s, n, t), r);
        } catch (i) {
          if (typeof o > 'u' || !(i instanceof o.ErrnoError)) throw i;
          return -i.errno;
        }
      }
      function Yn(n, t, s) {
        fe.varargs = s;
        try {
          var r = fe.getStreamFromFD(n);
          switch (t) {
            case 21509:
            case 21505:
              return r.tty ? 0 : -59;
            case 21510:
            case 21511:
            case 21512:
            case 21506:
            case 21507:
            case 21508:
              return r.tty ? 0 : -59;
            case 21519: {
              if (!r.tty) return -59;
              var i = fe.get();
              return (me[i >> 2] = 0), 0;
            }
            case 21520:
              return r.tty ? -28 : -59;
            case 21531: {
              var i = fe.get();
              return o.ioctl(r, t, i);
            }
            case 21523:
              return r.tty ? 0 : -59;
            case 21524:
              return r.tty ? 0 : -59;
            default:
              return -28;
          }
        } catch (l) {
          if (typeof o > 'u' || !(l instanceof o.ErrnoError)) throw l;
          return -l.errno;
        }
      }
      function er(n, t) {
        try {
          return (n = fe.getStr(n)), fe.doStat(o.lstat, n, t);
        } catch (s) {
          if (typeof o > 'u' || !(s instanceof o.ErrnoError)) throw s;
          return -s.errno;
        }
      }
      function tr(n, t, s) {
        try {
          return (
            (t = fe.getStr(t)),
            (t = fe.calculateAt(n, t)),
            (t = be.normalize(t)),
            t[t.length - 1] === '/' && (t = t.substr(0, t.length - 1)),
            o.mkdir(t, s, 0),
            0
          );
        } catch (r) {
          if (typeof o > 'u' || !(r instanceof o.ErrnoError)) throw r;
          return -r.errno;
        }
      }
      function nr(n, t, s, r) {
        try {
          t = fe.getStr(t);
          var i = r & 256,
            l = r & 4096;
          return (
            (r = r & -6401),
            (t = fe.calculateAt(n, t, l)),
            fe.doStat(i ? o.lstat : o.stat, t, s)
          );
        } catch (g) {
          if (typeof o > 'u' || !(g instanceof o.ErrnoError)) throw g;
          return -g.errno;
        }
      }
      function rr(n, t, s, r) {
        fe.varargs = r;
        try {
          (t = fe.getStr(t)), (t = fe.calculateAt(n, t));
          var i = r ? fe.get() : 0;
          return o.open(t, s, i).fd;
        } catch (l) {
          if (typeof o > 'u' || !(l instanceof o.ErrnoError)) throw l;
          return -l.errno;
        }
      }
      function sr(n, t, s, r) {
        try {
          if (((t = fe.getStr(t)), (t = fe.calculateAt(n, t)), r <= 0))
            return -28;
          var i = o.readlink(t),
            l = Math.min(r, st(i)),
            g = Me[s + l];
          return Ut(i, s, r + 1), (Me[s + l] = g), l;
        } catch (E) {
          if (typeof o > 'u' || !(E instanceof o.ErrnoError)) throw E;
          return -E.errno;
        }
      }
      function ir(n) {
        try {
          return (n = fe.getStr(n)), o.rmdir(n), 0;
        } catch (t) {
          if (typeof o > 'u' || !(t instanceof o.ErrnoError)) throw t;
          return -t.errno;
        }
      }
      function or(n, t) {
        try {
          return (n = fe.getStr(n)), fe.doStat(o.stat, n, t);
        } catch (s) {
          if (typeof o > 'u' || !(s instanceof o.ErrnoError)) throw s;
          return -s.errno;
        }
      }
      function lr(n, t, s) {
        try {
          return (
            (t = fe.getStr(t)),
            (t = fe.calculateAt(n, t)),
            s === 0
              ? o.unlink(t)
              : s === 512
              ? o.rmdir(t)
              : tt('Invalid flags passed to unlinkat'),
            0
          );
        } catch (r) {
          if (typeof o > 'u' || !(r instanceof o.ErrnoError)) throw r;
          return -r.errno;
        }
      }
      function vt(n) {
        return Te[n >> 2] + me[(n + 4) >> 2] * 4294967296;
      }
      function ar(n, t, s, r) {
        try {
          if (((t = fe.getStr(t)), (t = fe.calculateAt(n, t, !0)), s)) {
            var g = vt(s),
              E = me[(s + 8) >> 2];
            (i = g * 1e3 + E / 1e6),
              (s += 16),
              (g = vt(s)),
              (E = me[(s + 8) >> 2]),
              (l = g * 1e3 + E / 1e6);
          } else
            var i = Date.now(),
              l = i;
          return o.utime(t, i, l), 0;
        } catch (O) {
          if (typeof o > 'u' || !(O instanceof o.ErrnoError)) throw O;
          return -O.errno;
        }
      }
      var cr = !0;
      function ur() {
        return cr;
      }
      function _r(n) {
        return n % 4 === 0 && (n % 100 !== 0 || n % 400 === 0);
      }
      var fr = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335],
        pr = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
      function dr(n) {
        var t = _r(n.getFullYear()),
          s = t ? fr : pr,
          r = s[n.getMonth()] + n.getDate() - 1;
        return r;
      }
      function mr(n, t) {
        var s = new Date(vt(n) * 1e3);
        (me[t >> 2] = s.getSeconds()),
          (me[(t + 4) >> 2] = s.getMinutes()),
          (me[(t + 8) >> 2] = s.getHours()),
          (me[(t + 12) >> 2] = s.getDate()),
          (me[(t + 16) >> 2] = s.getMonth()),
          (me[(t + 20) >> 2] = s.getFullYear() - 1900),
          (me[(t + 24) >> 2] = s.getDay());
        var r = dr(s) | 0;
        (me[(t + 28) >> 2] = r),
          (me[(t + 36) >> 2] = -(s.getTimezoneOffset() * 60));
        var i = new Date(s.getFullYear(), 0, 1),
          l = new Date(s.getFullYear(), 6, 1).getTimezoneOffset(),
          g = i.getTimezoneOffset(),
          E = (l != g && s.getTimezoneOffset() == Math.min(g, l)) | 0;
        me[(t + 32) >> 2] = E;
      }
      function Yt(n) {
        var t = st(n) + 1,
          s = sn(t);
        return s && ft(n, Me, s, t), s;
      }
      function hr(n, t, s) {
        var r = new Date().getFullYear(),
          i = new Date(r, 0, 1),
          l = new Date(r, 6, 1),
          g = i.getTimezoneOffset(),
          E = l.getTimezoneOffset(),
          O = Math.max(g, E);
        (Te[n >> 2] = O * 60), (me[t >> 2] = +(g != E));
        function B(m) {
          var w = m.toTimeString().match(/\(([A-Za-z ]+)\)$/);
          return w ? w[1] : 'GMT';
        }
        var H = B(i),
          ee = B(l),
          S = Yt(H),
          f = Yt(ee);
        E < g
          ? ((Te[s >> 2] = S), (Te[(s + 4) >> 2] = f))
          : ((Te[s >> 2] = f), (Te[(s + 4) >> 2] = S));
      }
      function gr() {
        return Date.now();
      }
      var en;
      en = () => performance.now();
      function br() {
        return 2147483648;
      }
      function yr(n) {
        var t = Oe.buffer;
        try {
          return Oe.grow((n - t.byteLength + 65535) >>> 16), Qt(), 1;
        } catch {}
      }
      function qr(n) {
        var t = it.length;
        n = n >>> 0;
        var s = br();
        if (n > s) return !1;
        let r = (O, B) => O + ((B - (O % B)) % B);
        for (var i = 1; i <= 4; i *= 2) {
          var l = t * (1 + 0.2 / i);
          l = Math.min(l, n + 100663296);
          var g = Math.min(s, r(Math.max(n, l), 65536)),
            E = yr(g);
          if (E) return !0;
        }
        return !1;
      }
      var Et = {};
      function wr() {
        return de || './this.program';
      }
      function lt() {
        if (!lt.strings) {
          var n =
              (
                (typeof navigator == 'object' &&
                  navigator.languages &&
                  navigator.languages[0]) ||
                'C'
              ).replace('-', '_') + '.UTF-8',
            t = {
              USER: 'web_user',
              LOGNAME: 'web_user',
              PATH: '/',
              PWD: '/',
              HOME: '/home/web_user',
              LANG: n,
              _: wr(),
            };
          for (var s in Et) Et[s] === void 0 ? delete t[s] : (t[s] = Et[s]);
          var r = [];
          for (var s in t) r.push(s + '=' + t[s]);
          lt.strings = r;
        }
        return lt.strings;
      }
      function xr(n, t, s) {
        for (var r = 0; r < n.length; ++r) Me[t++ >> 0] = n.charCodeAt(r);
        s || (Me[t >> 0] = 0);
      }
      function vr(n, t) {
        var s = 0;
        return (
          lt().forEach(function (r, i) {
            var l = t + s;
            (Te[(n + i * 4) >> 2] = l), xr(r, l), (s += r.length + 1);
          }),
          0
        );
      }
      function Er(n, t) {
        var s = lt();
        Te[n >> 2] = s.length;
        var r = 0;
        return (
          s.forEach(function (i) {
            r += i.length + 1;
          }),
          (Te[t >> 2] = r),
          0
        );
      }
      function kr(n) {
        try {
          var t = fe.getStreamFromFD(n);
          return o.close(t), 0;
        } catch (s) {
          if (typeof o > 'u' || !(s instanceof o.ErrnoError)) throw s;
          return s.errno;
        }
      }
      function Sr(n, t) {
        try {
          var s = fe.getStreamFromFD(n),
            r = s.tty ? 2 : o.isDir(s.mode) ? 3 : o.isLink(s.mode) ? 7 : 4;
          return (Me[t >> 0] = r), 0;
        } catch (i) {
          if (typeof o > 'u' || !(i instanceof o.ErrnoError)) throw i;
          return i.errno;
        }
      }
      function Ar(n, t, s, r) {
        for (var i = 0, l = 0; l < s; l++) {
          var g = Te[t >> 2],
            E = Te[(t + 4) >> 2];
          t += 8;
          var O = o.read(n, Me, g, E, r);
          if (O < 0) return -1;
          if (((i += O), O < E)) break;
          typeof r < 'u' && (r += O);
        }
        return i;
      }
      function Ir(n, t, s, r) {
        try {
          var i = fe.getStreamFromFD(n),
            l = Ar(i, t, s);
          return (Te[r >> 2] = l), 0;
        } catch (g) {
          if (typeof o > 'u' || !(g instanceof o.ErrnoError)) throw g;
          return g.errno;
        }
      }
      function Tr(n, t, s, r) {
        try {
          if (((t = Zt(t)), isNaN(t))) return 61;
          var i = fe.getStreamFromFD(n);
          return (
            o.llseek(i, t, s),
            (Pe = [
              i.position >>> 0,
              ((he = i.position),
              +Math.abs(he) >= 1
                ? he > 0
                  ? (Math.min(+Math.floor(he / 4294967296), 4294967295) | 0) >>>
                    0
                  : ~~+Math.ceil((he - +(~~he >>> 0)) / 4294967296) >>> 0
                : 0),
            ]),
            (me[r >> 2] = Pe[0]),
            (me[(r + 4) >> 2] = Pe[1]),
            i.getdents && t === 0 && s === 0 && (i.getdents = null),
            0
          );
        } catch (l) {
          if (typeof o > 'u' || !(l instanceof o.ErrnoError)) throw l;
          return l.errno;
        }
      }
      function Fr(n) {
        try {
          var t = fe.getStreamFromFD(n);
          return t.stream_ops && t.stream_ops.fsync ? t.stream_ops.fsync(t) : 0;
        } catch (s) {
          if (typeof o > 'u' || !(s instanceof o.ErrnoError)) throw s;
          return s.errno;
        }
      }
      function Or(n, t, s, r) {
        for (var i = 0, l = 0; l < s; l++) {
          var g = Te[t >> 2],
            E = Te[(t + 4) >> 2];
          t += 8;
          var O = o.write(n, Me, g, E, r);
          if (O < 0) return -1;
          (i += O), typeof r < 'u' && (r += O);
        }
        return i;
      }
      function Pr(n, t, s, r) {
        try {
          var i = fe.getStreamFromFD(n),
            l = Or(i, t, s);
          return (Te[r >> 2] = l), 0;
        } catch (g) {
          if (typeof o > 'u' || !(g instanceof o.ErrnoError)) throw g;
          return g.errno;
        }
      }
      var tn = function (n, t, s, r) {
          n || (n = this),
            (this.parent = n),
            (this.mount = n.mount),
            (this.mounted = null),
            (this.id = o.nextInode++),
            (this.name = t),
            (this.mode = s),
            (this.node_ops = {}),
            (this.stream_ops = {}),
            (this.rdev = r);
        },
        dt = 365,
        mt = 146;
      Object.defineProperties(tn.prototype, {
        read: {
          get: function () {
            return (this.mode & dt) === dt;
          },
          set: function (n) {
            n ? (this.mode |= dt) : (this.mode &= ~dt);
          },
        },
        write: {
          get: function () {
            return (this.mode & mt) === mt;
          },
          set: function (n) {
            n ? (this.mode |= mt) : (this.mode &= ~mt);
          },
        },
        isFolder: {
          get: function () {
            return o.isDir(this.mode);
          },
        },
        isDevice: {
          get: function () {
            return o.isChrdev(this.mode);
          },
        },
      }),
        (o.FSNode = tn),
        o.staticInit();
      var nn = {
        __syscall_chmod: Un,
        __syscall_faccessat: Wn,
        __syscall_fchmod: Qn,
        __syscall_fchown32: $n,
        __syscall_fcntl64: Vn,
        __syscall_fstat64: Gn,
        __syscall_ftruncate64: Xn,
        __syscall_getcwd: Zn,
        __syscall_ioctl: Yn,
        __syscall_lstat64: er,
        __syscall_mkdirat: tr,
        __syscall_newfstatat: nr,
        __syscall_openat: rr,
        __syscall_readlinkat: sr,
        __syscall_rmdir: ir,
        __syscall_stat64: or,
        __syscall_unlinkat: lr,
        __syscall_utimensat: ar,
        _emscripten_get_now_is_monotonic: ur,
        _localtime_js: mr,
        _tzset_js: hr,
        emscripten_date_now: gr,
        emscripten_get_now: en,
        emscripten_resize_heap: qr,
        environ_get: vr,
        environ_sizes_get: Er,
        fd_close: kr,
        fd_fdstat_get: Sr,
        fd_read: Ir,
        fd_seek: Tr,
        fd_sync: Fr,
        fd_write: Pr,
        memory: Oe,
      };
      Nn(),
        (e.___wasm_call_ctors = function () {
          return (e.___wasm_call_ctors = e.asm.__wasm_call_ctors).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_status64 = function () {
          return (e._sqlite3_status64 = e.asm.sqlite3_status64).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_status = function () {
          return (e._sqlite3_status = e.asm.sqlite3_status).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_db_status = function () {
          return (e._sqlite3_db_status = e.asm.sqlite3_db_status).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_msize = function () {
          return (e._sqlite3_msize = e.asm.sqlite3_msize).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_vfs_find = function () {
          return (e._sqlite3_vfs_find = e.asm.sqlite3_vfs_find).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_initialize = function () {
          return (e._sqlite3_initialize = e.asm.sqlite3_initialize).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_malloc = function () {
          return (e._sqlite3_malloc = e.asm.sqlite3_malloc).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_free = function () {
          return (e._sqlite3_free = e.asm.sqlite3_free).apply(null, arguments);
        }),
        (e._sqlite3_vfs_register = function () {
          return (e._sqlite3_vfs_register = e.asm.sqlite3_vfs_register).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_vfs_unregister = function () {
          return (e._sqlite3_vfs_unregister =
            e.asm.sqlite3_vfs_unregister).apply(null, arguments);
        }),
        (e._sqlite3_malloc64 = function () {
          return (e._sqlite3_malloc64 = e.asm.sqlite3_malloc64).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_realloc = function () {
          return (e._sqlite3_realloc = e.asm.sqlite3_realloc).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_realloc64 = function () {
          return (e._sqlite3_realloc64 = e.asm.sqlite3_realloc64).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_value_text = function () {
          return (e._sqlite3_value_text = e.asm.sqlite3_value_text).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_randomness = function () {
          return (e._sqlite3_randomness = e.asm.sqlite3_randomness).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_stricmp = function () {
          return (e._sqlite3_stricmp = e.asm.sqlite3_stricmp).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_strnicmp = function () {
          return (e._sqlite3_strnicmp = e.asm.sqlite3_strnicmp).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_uri_parameter = function () {
          return (e._sqlite3_uri_parameter = e.asm.sqlite3_uri_parameter).apply(
            null,
            arguments,
          );
        });
      var rn = (e.___errno_location = function () {
        return (rn = e.___errno_location = e.asm.__errno_location).apply(
          null,
          arguments,
        );
      });
      (e._sqlite3_uri_boolean = function () {
        return (e._sqlite3_uri_boolean = e.asm.sqlite3_uri_boolean).apply(
          null,
          arguments,
        );
      }),
        (e._sqlite3_serialize = function () {
          return (e._sqlite3_serialize = e.asm.sqlite3_serialize).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_prepare_v2 = function () {
          return (e._sqlite3_prepare_v2 = e.asm.sqlite3_prepare_v2).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_step = function () {
          return (e._sqlite3_step = e.asm.sqlite3_step).apply(null, arguments);
        }),
        (e._sqlite3_column_int64 = function () {
          return (e._sqlite3_column_int64 = e.asm.sqlite3_column_int64).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_column_int = function () {
          return (e._sqlite3_column_int = e.asm.sqlite3_column_int).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_finalize = function () {
          return (e._sqlite3_finalize = e.asm.sqlite3_finalize).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_file_control = function () {
          return (e._sqlite3_file_control = e.asm.sqlite3_file_control).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_reset = function () {
          return (e._sqlite3_reset = e.asm.sqlite3_reset).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_deserialize = function () {
          return (e._sqlite3_deserialize = e.asm.sqlite3_deserialize).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_clear_bindings = function () {
          return (e._sqlite3_clear_bindings =
            e.asm.sqlite3_clear_bindings).apply(null, arguments);
        }),
        (e._sqlite3_value_blob = function () {
          return (e._sqlite3_value_blob = e.asm.sqlite3_value_blob).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_value_bytes = function () {
          return (e._sqlite3_value_bytes = e.asm.sqlite3_value_bytes).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_value_double = function () {
          return (e._sqlite3_value_double = e.asm.sqlite3_value_double).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_value_int = function () {
          return (e._sqlite3_value_int = e.asm.sqlite3_value_int).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_value_int64 = function () {
          return (e._sqlite3_value_int64 = e.asm.sqlite3_value_int64).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_value_subtype = function () {
          return (e._sqlite3_value_subtype = e.asm.sqlite3_value_subtype).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_value_pointer = function () {
          return (e._sqlite3_value_pointer = e.asm.sqlite3_value_pointer).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_value_type = function () {
          return (e._sqlite3_value_type = e.asm.sqlite3_value_type).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_value_nochange = function () {
          return (e._sqlite3_value_nochange =
            e.asm.sqlite3_value_nochange).apply(null, arguments);
        }),
        (e._sqlite3_value_frombind = function () {
          return (e._sqlite3_value_frombind =
            e.asm.sqlite3_value_frombind).apply(null, arguments);
        }),
        (e._sqlite3_value_dup = function () {
          return (e._sqlite3_value_dup = e.asm.sqlite3_value_dup).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_value_free = function () {
          return (e._sqlite3_value_free = e.asm.sqlite3_value_free).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_result_blob = function () {
          return (e._sqlite3_result_blob = e.asm.sqlite3_result_blob).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_result_error_nomem = function () {
          return (e._sqlite3_result_error_nomem =
            e.asm.sqlite3_result_error_nomem).apply(null, arguments);
        }),
        (e._sqlite3_result_error_toobig = function () {
          return (e._sqlite3_result_error_toobig =
            e.asm.sqlite3_result_error_toobig).apply(null, arguments);
        }),
        (e._sqlite3_result_double = function () {
          return (e._sqlite3_result_double = e.asm.sqlite3_result_double).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_result_error = function () {
          return (e._sqlite3_result_error = e.asm.sqlite3_result_error).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_result_int = function () {
          return (e._sqlite3_result_int = e.asm.sqlite3_result_int).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_result_int64 = function () {
          return (e._sqlite3_result_int64 = e.asm.sqlite3_result_int64).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_result_null = function () {
          return (e._sqlite3_result_null = e.asm.sqlite3_result_null).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_result_pointer = function () {
          return (e._sqlite3_result_pointer =
            e.asm.sqlite3_result_pointer).apply(null, arguments);
        }),
        (e._sqlite3_result_subtype = function () {
          return (e._sqlite3_result_subtype =
            e.asm.sqlite3_result_subtype).apply(null, arguments);
        }),
        (e._sqlite3_result_text = function () {
          return (e._sqlite3_result_text = e.asm.sqlite3_result_text).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_result_zeroblob = function () {
          return (e._sqlite3_result_zeroblob =
            e.asm.sqlite3_result_zeroblob).apply(null, arguments);
        }),
        (e._sqlite3_result_zeroblob64 = function () {
          return (e._sqlite3_result_zeroblob64 =
            e.asm.sqlite3_result_zeroblob64).apply(null, arguments);
        }),
        (e._sqlite3_result_error_code = function () {
          return (e._sqlite3_result_error_code =
            e.asm.sqlite3_result_error_code).apply(null, arguments);
        }),
        (e._sqlite3_user_data = function () {
          return (e._sqlite3_user_data = e.asm.sqlite3_user_data).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_context_db_handle = function () {
          return (e._sqlite3_context_db_handle =
            e.asm.sqlite3_context_db_handle).apply(null, arguments);
        }),
        (e._sqlite3_vtab_nochange = function () {
          return (e._sqlite3_vtab_nochange = e.asm.sqlite3_vtab_nochange).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_vtab_in_first = function () {
          return (e._sqlite3_vtab_in_first = e.asm.sqlite3_vtab_in_first).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_vtab_in_next = function () {
          return (e._sqlite3_vtab_in_next = e.asm.sqlite3_vtab_in_next).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_aggregate_context = function () {
          return (e._sqlite3_aggregate_context =
            e.asm.sqlite3_aggregate_context).apply(null, arguments);
        }),
        (e._sqlite3_get_auxdata = function () {
          return (e._sqlite3_get_auxdata = e.asm.sqlite3_get_auxdata).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_set_auxdata = function () {
          return (e._sqlite3_set_auxdata = e.asm.sqlite3_set_auxdata).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_column_count = function () {
          return (e._sqlite3_column_count = e.asm.sqlite3_column_count).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_data_count = function () {
          return (e._sqlite3_data_count = e.asm.sqlite3_data_count).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_column_blob = function () {
          return (e._sqlite3_column_blob = e.asm.sqlite3_column_blob).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_column_bytes = function () {
          return (e._sqlite3_column_bytes = e.asm.sqlite3_column_bytes).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_column_double = function () {
          return (e._sqlite3_column_double = e.asm.sqlite3_column_double).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_column_text = function () {
          return (e._sqlite3_column_text = e.asm.sqlite3_column_text).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_column_value = function () {
          return (e._sqlite3_column_value = e.asm.sqlite3_column_value).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_column_type = function () {
          return (e._sqlite3_column_type = e.asm.sqlite3_column_type).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_column_name = function () {
          return (e._sqlite3_column_name = e.asm.sqlite3_column_name).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_bind_blob = function () {
          return (e._sqlite3_bind_blob = e.asm.sqlite3_bind_blob).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_bind_double = function () {
          return (e._sqlite3_bind_double = e.asm.sqlite3_bind_double).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_bind_int = function () {
          return (e._sqlite3_bind_int = e.asm.sqlite3_bind_int).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_bind_int64 = function () {
          return (e._sqlite3_bind_int64 = e.asm.sqlite3_bind_int64).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_bind_null = function () {
          return (e._sqlite3_bind_null = e.asm.sqlite3_bind_null).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_bind_pointer = function () {
          return (e._sqlite3_bind_pointer = e.asm.sqlite3_bind_pointer).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_bind_text = function () {
          return (e._sqlite3_bind_text = e.asm.sqlite3_bind_text).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_bind_parameter_count = function () {
          return (e._sqlite3_bind_parameter_count =
            e.asm.sqlite3_bind_parameter_count).apply(null, arguments);
        }),
        (e._sqlite3_bind_parameter_index = function () {
          return (e._sqlite3_bind_parameter_index =
            e.asm.sqlite3_bind_parameter_index).apply(null, arguments);
        }),
        (e._sqlite3_db_handle = function () {
          return (e._sqlite3_db_handle = e.asm.sqlite3_db_handle).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_stmt_readonly = function () {
          return (e._sqlite3_stmt_readonly = e.asm.sqlite3_stmt_readonly).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_stmt_isexplain = function () {
          return (e._sqlite3_stmt_isexplain =
            e.asm.sqlite3_stmt_isexplain).apply(null, arguments);
        }),
        (e._sqlite3_stmt_status = function () {
          return (e._sqlite3_stmt_status = e.asm.sqlite3_stmt_status).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_sql = function () {
          return (e._sqlite3_sql = e.asm.sqlite3_sql).apply(null, arguments);
        }),
        (e._sqlite3_expanded_sql = function () {
          return (e._sqlite3_expanded_sql = e.asm.sqlite3_expanded_sql).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_preupdate_old = function () {
          return (e._sqlite3_preupdate_old = e.asm.sqlite3_preupdate_old).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_preupdate_count = function () {
          return (e._sqlite3_preupdate_count =
            e.asm.sqlite3_preupdate_count).apply(null, arguments);
        }),
        (e._sqlite3_preupdate_depth = function () {
          return (e._sqlite3_preupdate_depth =
            e.asm.sqlite3_preupdate_depth).apply(null, arguments);
        }),
        (e._sqlite3_preupdate_blobwrite = function () {
          return (e._sqlite3_preupdate_blobwrite =
            e.asm.sqlite3_preupdate_blobwrite).apply(null, arguments);
        }),
        (e._sqlite3_preupdate_new = function () {
          return (e._sqlite3_preupdate_new = e.asm.sqlite3_preupdate_new).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_value_numeric_type = function () {
          return (e._sqlite3_value_numeric_type =
            e.asm.sqlite3_value_numeric_type).apply(null, arguments);
        }),
        (e._sqlite3_errmsg = function () {
          return (e._sqlite3_errmsg = e.asm.sqlite3_errmsg).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_set_authorizer = function () {
          return (e._sqlite3_set_authorizer =
            e.asm.sqlite3_set_authorizer).apply(null, arguments);
        }),
        (e._sqlite3_strglob = function () {
          return (e._sqlite3_strglob = e.asm.sqlite3_strglob).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_strlike = function () {
          return (e._sqlite3_strlike = e.asm.sqlite3_strlike).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_exec = function () {
          return (e._sqlite3_exec = e.asm.sqlite3_exec).apply(null, arguments);
        }),
        (e._sqlite3_auto_extension = function () {
          return (e._sqlite3_auto_extension =
            e.asm.sqlite3_auto_extension).apply(null, arguments);
        }),
        (e._sqlite3_cancel_auto_extension = function () {
          return (e._sqlite3_cancel_auto_extension =
            e.asm.sqlite3_cancel_auto_extension).apply(null, arguments);
        }),
        (e._sqlite3_reset_auto_extension = function () {
          return (e._sqlite3_reset_auto_extension =
            e.asm.sqlite3_reset_auto_extension).apply(null, arguments);
        }),
        (e._sqlite3_prepare_v3 = function () {
          return (e._sqlite3_prepare_v3 = e.asm.sqlite3_prepare_v3).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_create_module = function () {
          return (e._sqlite3_create_module = e.asm.sqlite3_create_module).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_create_module_v2 = function () {
          return (e._sqlite3_create_module_v2 =
            e.asm.sqlite3_create_module_v2).apply(null, arguments);
        }),
        (e._sqlite3_drop_modules = function () {
          return (e._sqlite3_drop_modules = e.asm.sqlite3_drop_modules).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_declare_vtab = function () {
          return (e._sqlite3_declare_vtab = e.asm.sqlite3_declare_vtab).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_vtab_on_conflict = function () {
          return (e._sqlite3_vtab_on_conflict =
            e.asm.sqlite3_vtab_on_conflict).apply(null, arguments);
        }),
        (e._sqlite3_vtab_collation = function () {
          return (e._sqlite3_vtab_collation =
            e.asm.sqlite3_vtab_collation).apply(null, arguments);
        }),
        (e._sqlite3_vtab_in = function () {
          return (e._sqlite3_vtab_in = e.asm.sqlite3_vtab_in).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_vtab_rhs_value = function () {
          return (e._sqlite3_vtab_rhs_value =
            e.asm.sqlite3_vtab_rhs_value).apply(null, arguments);
        }),
        (e._sqlite3_vtab_distinct = function () {
          return (e._sqlite3_vtab_distinct = e.asm.sqlite3_vtab_distinct).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_keyword_name = function () {
          return (e._sqlite3_keyword_name = e.asm.sqlite3_keyword_name).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_keyword_count = function () {
          return (e._sqlite3_keyword_count = e.asm.sqlite3_keyword_count).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_keyword_check = function () {
          return (e._sqlite3_keyword_check = e.asm.sqlite3_keyword_check).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_complete = function () {
          return (e._sqlite3_complete = e.asm.sqlite3_complete).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_libversion = function () {
          return (e._sqlite3_libversion = e.asm.sqlite3_libversion).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_libversion_number = function () {
          return (e._sqlite3_libversion_number =
            e.asm.sqlite3_libversion_number).apply(null, arguments);
        }),
        (e._sqlite3_shutdown = function () {
          return (e._sqlite3_shutdown = e.asm.sqlite3_shutdown).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_last_insert_rowid = function () {
          return (e._sqlite3_last_insert_rowid =
            e.asm.sqlite3_last_insert_rowid).apply(null, arguments);
        }),
        (e._sqlite3_set_last_insert_rowid = function () {
          return (e._sqlite3_set_last_insert_rowid =
            e.asm.sqlite3_set_last_insert_rowid).apply(null, arguments);
        }),
        (e._sqlite3_changes64 = function () {
          return (e._sqlite3_changes64 = e.asm.sqlite3_changes64).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_changes = function () {
          return (e._sqlite3_changes = e.asm.sqlite3_changes).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_total_changes64 = function () {
          return (e._sqlite3_total_changes64 =
            e.asm.sqlite3_total_changes64).apply(null, arguments);
        }),
        (e._sqlite3_total_changes = function () {
          return (e._sqlite3_total_changes = e.asm.sqlite3_total_changes).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_txn_state = function () {
          return (e._sqlite3_txn_state = e.asm.sqlite3_txn_state).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_close_v2 = function () {
          return (e._sqlite3_close_v2 = e.asm.sqlite3_close_v2).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_busy_handler = function () {
          return (e._sqlite3_busy_handler = e.asm.sqlite3_busy_handler).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_progress_handler = function () {
          return (e._sqlite3_progress_handler =
            e.asm.sqlite3_progress_handler).apply(null, arguments);
        }),
        (e._sqlite3_busy_timeout = function () {
          return (e._sqlite3_busy_timeout = e.asm.sqlite3_busy_timeout).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_create_function = function () {
          return (e._sqlite3_create_function =
            e.asm.sqlite3_create_function).apply(null, arguments);
        }),
        (e._sqlite3_create_function_v2 = function () {
          return (e._sqlite3_create_function_v2 =
            e.asm.sqlite3_create_function_v2).apply(null, arguments);
        }),
        (e._sqlite3_create_window_function = function () {
          return (e._sqlite3_create_window_function =
            e.asm.sqlite3_create_window_function).apply(null, arguments);
        }),
        (e._sqlite3_overload_function = function () {
          return (e._sqlite3_overload_function =
            e.asm.sqlite3_overload_function).apply(null, arguments);
        }),
        (e._sqlite3_trace_v2 = function () {
          return (e._sqlite3_trace_v2 = e.asm.sqlite3_trace_v2).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_commit_hook = function () {
          return (e._sqlite3_commit_hook = e.asm.sqlite3_commit_hook).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_update_hook = function () {
          return (e._sqlite3_update_hook = e.asm.sqlite3_update_hook).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_rollback_hook = function () {
          return (e._sqlite3_rollback_hook = e.asm.sqlite3_rollback_hook).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_preupdate_hook = function () {
          return (e._sqlite3_preupdate_hook =
            e.asm.sqlite3_preupdate_hook).apply(null, arguments);
        }),
        (e._sqlite3_error_offset = function () {
          return (e._sqlite3_error_offset = e.asm.sqlite3_error_offset).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_errcode = function () {
          return (e._sqlite3_errcode = e.asm.sqlite3_errcode).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_extended_errcode = function () {
          return (e._sqlite3_extended_errcode =
            e.asm.sqlite3_extended_errcode).apply(null, arguments);
        }),
        (e._sqlite3_errstr = function () {
          return (e._sqlite3_errstr = e.asm.sqlite3_errstr).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_limit = function () {
          return (e._sqlite3_limit = e.asm.sqlite3_limit).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_open = function () {
          return (e._sqlite3_open = e.asm.sqlite3_open).apply(null, arguments);
        }),
        (e._sqlite3_open_v2 = function () {
          return (e._sqlite3_open_v2 = e.asm.sqlite3_open_v2).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_create_collation = function () {
          return (e._sqlite3_create_collation =
            e.asm.sqlite3_create_collation).apply(null, arguments);
        }),
        (e._sqlite3_create_collation_v2 = function () {
          return (e._sqlite3_create_collation_v2 =
            e.asm.sqlite3_create_collation_v2).apply(null, arguments);
        }),
        (e._sqlite3_collation_needed = function () {
          return (e._sqlite3_collation_needed =
            e.asm.sqlite3_collation_needed).apply(null, arguments);
        }),
        (e._sqlite3_table_column_metadata = function () {
          return (e._sqlite3_table_column_metadata =
            e.asm.sqlite3_table_column_metadata).apply(null, arguments);
        }),
        (e._sqlite3_extended_result_codes = function () {
          return (e._sqlite3_extended_result_codes =
            e.asm.sqlite3_extended_result_codes).apply(null, arguments);
        }),
        (e._sqlite3_uri_key = function () {
          return (e._sqlite3_uri_key = e.asm.sqlite3_uri_key).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_uri_int64 = function () {
          return (e._sqlite3_uri_int64 = e.asm.sqlite3_uri_int64).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_db_name = function () {
          return (e._sqlite3_db_name = e.asm.sqlite3_db_name).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_db_filename = function () {
          return (e._sqlite3_db_filename = e.asm.sqlite3_db_filename).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_compileoption_used = function () {
          return (e._sqlite3_compileoption_used =
            e.asm.sqlite3_compileoption_used).apply(null, arguments);
        }),
        (e._sqlite3_compileoption_get = function () {
          return (e._sqlite3_compileoption_get =
            e.asm.sqlite3_compileoption_get).apply(null, arguments);
        }),
        (e._sqlite3session_diff = function () {
          return (e._sqlite3session_diff = e.asm.sqlite3session_diff).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3session_attach = function () {
          return (e._sqlite3session_attach = e.asm.sqlite3session_attach).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3session_create = function () {
          return (e._sqlite3session_create = e.asm.sqlite3session_create).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3session_delete = function () {
          return (e._sqlite3session_delete = e.asm.sqlite3session_delete).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3session_table_filter = function () {
          return (e._sqlite3session_table_filter =
            e.asm.sqlite3session_table_filter).apply(null, arguments);
        }),
        (e._sqlite3session_changeset = function () {
          return (e._sqlite3session_changeset =
            e.asm.sqlite3session_changeset).apply(null, arguments);
        }),
        (e._sqlite3session_changeset_strm = function () {
          return (e._sqlite3session_changeset_strm =
            e.asm.sqlite3session_changeset_strm).apply(null, arguments);
        }),
        (e._sqlite3session_patchset_strm = function () {
          return (e._sqlite3session_patchset_strm =
            e.asm.sqlite3session_patchset_strm).apply(null, arguments);
        }),
        (e._sqlite3session_patchset = function () {
          return (e._sqlite3session_patchset =
            e.asm.sqlite3session_patchset).apply(null, arguments);
        }),
        (e._sqlite3session_enable = function () {
          return (e._sqlite3session_enable = e.asm.sqlite3session_enable).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3session_indirect = function () {
          return (e._sqlite3session_indirect =
            e.asm.sqlite3session_indirect).apply(null, arguments);
        }),
        (e._sqlite3session_isempty = function () {
          return (e._sqlite3session_isempty =
            e.asm.sqlite3session_isempty).apply(null, arguments);
        }),
        (e._sqlite3session_memory_used = function () {
          return (e._sqlite3session_memory_used =
            e.asm.sqlite3session_memory_used).apply(null, arguments);
        }),
        (e._sqlite3session_object_config = function () {
          return (e._sqlite3session_object_config =
            e.asm.sqlite3session_object_config).apply(null, arguments);
        }),
        (e._sqlite3session_changeset_size = function () {
          return (e._sqlite3session_changeset_size =
            e.asm.sqlite3session_changeset_size).apply(null, arguments);
        }),
        (e._sqlite3changeset_start = function () {
          return (e._sqlite3changeset_start =
            e.asm.sqlite3changeset_start).apply(null, arguments);
        }),
        (e._sqlite3changeset_start_v2 = function () {
          return (e._sqlite3changeset_start_v2 =
            e.asm.sqlite3changeset_start_v2).apply(null, arguments);
        }),
        (e._sqlite3changeset_start_strm = function () {
          return (e._sqlite3changeset_start_strm =
            e.asm.sqlite3changeset_start_strm).apply(null, arguments);
        }),
        (e._sqlite3changeset_start_v2_strm = function () {
          return (e._sqlite3changeset_start_v2_strm =
            e.asm.sqlite3changeset_start_v2_strm).apply(null, arguments);
        }),
        (e._sqlite3changeset_next = function () {
          return (e._sqlite3changeset_next = e.asm.sqlite3changeset_next).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3changeset_op = function () {
          return (e._sqlite3changeset_op = e.asm.sqlite3changeset_op).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3changeset_pk = function () {
          return (e._sqlite3changeset_pk = e.asm.sqlite3changeset_pk).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3changeset_old = function () {
          return (e._sqlite3changeset_old = e.asm.sqlite3changeset_old).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3changeset_new = function () {
          return (e._sqlite3changeset_new = e.asm.sqlite3changeset_new).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3changeset_conflict = function () {
          return (e._sqlite3changeset_conflict =
            e.asm.sqlite3changeset_conflict).apply(null, arguments);
        }),
        (e._sqlite3changeset_fk_conflicts = function () {
          return (e._sqlite3changeset_fk_conflicts =
            e.asm.sqlite3changeset_fk_conflicts).apply(null, arguments);
        }),
        (e._sqlite3changeset_finalize = function () {
          return (e._sqlite3changeset_finalize =
            e.asm.sqlite3changeset_finalize).apply(null, arguments);
        }),
        (e._sqlite3changeset_invert = function () {
          return (e._sqlite3changeset_invert =
            e.asm.sqlite3changeset_invert).apply(null, arguments);
        }),
        (e._sqlite3changeset_invert_strm = function () {
          return (e._sqlite3changeset_invert_strm =
            e.asm.sqlite3changeset_invert_strm).apply(null, arguments);
        }),
        (e._sqlite3changeset_apply_v2 = function () {
          return (e._sqlite3changeset_apply_v2 =
            e.asm.sqlite3changeset_apply_v2).apply(null, arguments);
        }),
        (e._sqlite3changeset_apply = function () {
          return (e._sqlite3changeset_apply =
            e.asm.sqlite3changeset_apply).apply(null, arguments);
        }),
        (e._sqlite3changeset_apply_v2_strm = function () {
          return (e._sqlite3changeset_apply_v2_strm =
            e.asm.sqlite3changeset_apply_v2_strm).apply(null, arguments);
        }),
        (e._sqlite3changeset_apply_strm = function () {
          return (e._sqlite3changeset_apply_strm =
            e.asm.sqlite3changeset_apply_strm).apply(null, arguments);
        }),
        (e._sqlite3changegroup_new = function () {
          return (e._sqlite3changegroup_new =
            e.asm.sqlite3changegroup_new).apply(null, arguments);
        }),
        (e._sqlite3changegroup_add = function () {
          return (e._sqlite3changegroup_add =
            e.asm.sqlite3changegroup_add).apply(null, arguments);
        }),
        (e._sqlite3changegroup_output = function () {
          return (e._sqlite3changegroup_output =
            e.asm.sqlite3changegroup_output).apply(null, arguments);
        }),
        (e._sqlite3changegroup_add_strm = function () {
          return (e._sqlite3changegroup_add_strm =
            e.asm.sqlite3changegroup_add_strm).apply(null, arguments);
        }),
        (e._sqlite3changegroup_output_strm = function () {
          return (e._sqlite3changegroup_output_strm =
            e.asm.sqlite3changegroup_output_strm).apply(null, arguments);
        }),
        (e._sqlite3changegroup_delete = function () {
          return (e._sqlite3changegroup_delete =
            e.asm.sqlite3changegroup_delete).apply(null, arguments);
        }),
        (e._sqlite3changeset_concat = function () {
          return (e._sqlite3changeset_concat =
            e.asm.sqlite3changeset_concat).apply(null, arguments);
        }),
        (e._sqlite3changeset_concat_strm = function () {
          return (e._sqlite3changeset_concat_strm =
            e.asm.sqlite3changeset_concat_strm).apply(null, arguments);
        }),
        (e._sqlite3session_config = function () {
          return (e._sqlite3session_config = e.asm.sqlite3session_config).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_sourceid = function () {
          return (e._sqlite3_sourceid = e.asm.sqlite3_sourceid).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_wasm_pstack_ptr = function () {
          return (e._sqlite3_wasm_pstack_ptr =
            e.asm.sqlite3_wasm_pstack_ptr).apply(null, arguments);
        }),
        (e._sqlite3_wasm_pstack_restore = function () {
          return (e._sqlite3_wasm_pstack_restore =
            e.asm.sqlite3_wasm_pstack_restore).apply(null, arguments);
        }),
        (e._sqlite3_wasm_pstack_alloc = function () {
          return (e._sqlite3_wasm_pstack_alloc =
            e.asm.sqlite3_wasm_pstack_alloc).apply(null, arguments);
        }),
        (e._sqlite3_wasm_pstack_remaining = function () {
          return (e._sqlite3_wasm_pstack_remaining =
            e.asm.sqlite3_wasm_pstack_remaining).apply(null, arguments);
        }),
        (e._sqlite3_wasm_pstack_quota = function () {
          return (e._sqlite3_wasm_pstack_quota =
            e.asm.sqlite3_wasm_pstack_quota).apply(null, arguments);
        }),
        (e._sqlite3_wasm_db_error = function () {
          return (e._sqlite3_wasm_db_error = e.asm.sqlite3_wasm_db_error).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_wasm_test_struct = function () {
          return (e._sqlite3_wasm_test_struct =
            e.asm.sqlite3_wasm_test_struct).apply(null, arguments);
        }),
        (e._sqlite3_wasm_enum_json = function () {
          return (e._sqlite3_wasm_enum_json =
            e.asm.sqlite3_wasm_enum_json).apply(null, arguments);
        }),
        (e._sqlite3_wasm_vfs_unlink = function () {
          return (e._sqlite3_wasm_vfs_unlink =
            e.asm.sqlite3_wasm_vfs_unlink).apply(null, arguments);
        }),
        (e._sqlite3_wasm_db_vfs = function () {
          return (e._sqlite3_wasm_db_vfs = e.asm.sqlite3_wasm_db_vfs).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_wasm_db_reset = function () {
          return (e._sqlite3_wasm_db_reset = e.asm.sqlite3_wasm_db_reset).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_wasm_db_export_chunked = function () {
          return (e._sqlite3_wasm_db_export_chunked =
            e.asm.sqlite3_wasm_db_export_chunked).apply(null, arguments);
        }),
        (e._sqlite3_wasm_db_serialize = function () {
          return (e._sqlite3_wasm_db_serialize =
            e.asm.sqlite3_wasm_db_serialize).apply(null, arguments);
        }),
        (e._sqlite3_wasm_vfs_create_file = function () {
          return (e._sqlite3_wasm_vfs_create_file =
            e.asm.sqlite3_wasm_vfs_create_file).apply(null, arguments);
        }),
        (e._sqlite3_wasm_kvvfsMakeKeyOnPstack = function () {
          return (e._sqlite3_wasm_kvvfsMakeKeyOnPstack =
            e.asm.sqlite3_wasm_kvvfsMakeKeyOnPstack).apply(null, arguments);
        }),
        (e._sqlite3_wasm_kvvfs_methods = function () {
          return (e._sqlite3_wasm_kvvfs_methods =
            e.asm.sqlite3_wasm_kvvfs_methods).apply(null, arguments);
        }),
        (e._sqlite3_wasm_vtab_config = function () {
          return (e._sqlite3_wasm_vtab_config =
            e.asm.sqlite3_wasm_vtab_config).apply(null, arguments);
        }),
        (e._sqlite3_wasm_db_config_ip = function () {
          return (e._sqlite3_wasm_db_config_ip =
            e.asm.sqlite3_wasm_db_config_ip).apply(null, arguments);
        }),
        (e._sqlite3_wasm_db_config_pii = function () {
          return (e._sqlite3_wasm_db_config_pii =
            e.asm.sqlite3_wasm_db_config_pii).apply(null, arguments);
        }),
        (e._sqlite3_wasm_db_config_s = function () {
          return (e._sqlite3_wasm_db_config_s =
            e.asm.sqlite3_wasm_db_config_s).apply(null, arguments);
        }),
        (e._sqlite3_wasm_config_i = function () {
          return (e._sqlite3_wasm_config_i = e.asm.sqlite3_wasm_config_i).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_wasm_config_ii = function () {
          return (e._sqlite3_wasm_config_ii =
            e.asm.sqlite3_wasm_config_ii).apply(null, arguments);
        }),
        (e._sqlite3_wasm_config_j = function () {
          return (e._sqlite3_wasm_config_j = e.asm.sqlite3_wasm_config_j).apply(
            null,
            arguments,
          );
        }),
        (e._sqlite3_wasm_init_wasmfs = function () {
          return (e._sqlite3_wasm_init_wasmfs =
            e.asm.sqlite3_wasm_init_wasmfs).apply(null, arguments);
        }),
        (e._sqlite3_wasm_test_intptr = function () {
          return (e._sqlite3_wasm_test_intptr =
            e.asm.sqlite3_wasm_test_intptr).apply(null, arguments);
        }),
        (e._sqlite3_wasm_test_voidptr = function () {
          return (e._sqlite3_wasm_test_voidptr =
            e.asm.sqlite3_wasm_test_voidptr).apply(null, arguments);
        }),
        (e._sqlite3_wasm_test_int64_max = function () {
          return (e._sqlite3_wasm_test_int64_max =
            e.asm.sqlite3_wasm_test_int64_max).apply(null, arguments);
        }),
        (e._sqlite3_wasm_test_int64_min = function () {
          return (e._sqlite3_wasm_test_int64_min =
            e.asm.sqlite3_wasm_test_int64_min).apply(null, arguments);
        }),
        (e._sqlite3_wasm_test_int64_times2 = function () {
          return (e._sqlite3_wasm_test_int64_times2 =
            e.asm.sqlite3_wasm_test_int64_times2).apply(null, arguments);
        }),
        (e._sqlite3_wasm_test_int64_minmax = function () {
          return (e._sqlite3_wasm_test_int64_minmax =
            e.asm.sqlite3_wasm_test_int64_minmax).apply(null, arguments);
        }),
        (e._sqlite3_wasm_test_int64ptr = function () {
          return (e._sqlite3_wasm_test_int64ptr =
            e.asm.sqlite3_wasm_test_int64ptr).apply(null, arguments);
        }),
        (e._sqlite3_wasm_test_stack_overflow = function () {
          return (e._sqlite3_wasm_test_stack_overflow =
            e.asm.sqlite3_wasm_test_stack_overflow).apply(null, arguments);
        }),
        (e._sqlite3_wasm_test_str_hello = function () {
          return (e._sqlite3_wasm_test_str_hello =
            e.asm.sqlite3_wasm_test_str_hello).apply(null, arguments);
        });
      var sn = (e._malloc = function () {
        return (sn = e._malloc = e.asm.malloc).apply(null, arguments);
      });
      (e._free = function () {
        return (e._free = e.asm.free).apply(null, arguments);
      }),
        (e._realloc = function () {
          return (e._realloc = e.asm.realloc).apply(null, arguments);
        }),
        (e.stackSave = function () {
          return (e.stackSave = e.asm.stackSave).apply(null, arguments);
        }),
        (e.stackRestore = function () {
          return (e.stackRestore = e.asm.stackRestore).apply(null, arguments);
        }),
        (e.stackAlloc = function () {
          return (e.stackAlloc = e.asm.stackAlloc).apply(null, arguments);
        }),
        (e.wasmMemory = Oe);
      var ht;
      ot = function n() {
        ht || on(), ht || (ot = n);
      };
      function on(n) {
        if (et > 0 || (On(), et > 0)) return;
        function t() {
          ht ||
            ((ht = !0),
            (e.calledRun = !0),
            !ze &&
              (Pn(),
              h(e),
              e.onRuntimeInitialized && e.onRuntimeInitialized(),
              Ln()));
        }
        e.setStatus
          ? (e.setStatus('Running...'),
            setTimeout(function () {
              setTimeout(function () {
                e.setStatus('');
              }, 1),
                t();
            }, 1))
          : t();
      }
      if (e.preInit)
        for (
          typeof e.preInit == 'function' && (e.preInit = [e.preInit]);
          e.preInit.length > 0;

        )
          e.preInit.pop()();
      return (
        on(),
        e.postRun || (e.postRun = []),
        e.postRun.push(function (n) {
          if (
            ((globalThis.sqlite3ApiBootstrap = function t(
              s = globalThis.sqlite3ApiConfig || t.defaultConfig,
            ) {
              if (t.sqlite3)
                return (
                  console.warn(
                    'sqlite3ApiBootstrap() called multiple times.',
                    'Config and external initializers are ignored on calls after the first.',
                  ),
                  t.sqlite3
                );
              const r = Object.assign(
                Object.create(null),
                {
                  exports: void 0,
                  memory: void 0,
                  bigIntEnabled: (() =>
                    typeof n < 'u'
                      ? !!n.HEAPU64
                      : !!globalThis.BigInt64Array)(),
                  debug: console.debug.bind(console),
                  warn: console.warn.bind(console),
                  error: console.error.bind(console),
                  log: console.log.bind(console),
                  wasmfsOpfsDir: '/opfs',
                  useStdAlloc: !1,
                },
                s || {},
              );
              Object.assign(
                r,
                {
                  allocExportName: r.useStdAlloc ? 'malloc' : 'sqlite3_malloc',
                  deallocExportName: r.useStdAlloc ? 'free' : 'sqlite3_free',
                  reallocExportName: r.useStdAlloc
                    ? 'realloc'
                    : 'sqlite3_realloc',
                },
                r,
              ),
                ['exports', 'memory', 'wasmfsOpfsDir'].forEach((a) => {
                  typeof r[a] == 'function' && (r[a] = r[a]());
                }),
                (r.wasmOpfsDir = !1);
              const i = Object.create(null),
                l = Object.create(null),
                g = (a) =>
                  (i.sqlite3_js_rc_str && i.sqlite3_js_rc_str(a)) ||
                  'Unknown result code #' + a,
                E = (a) => typeof a == 'number' && a === (a | 0);
              class O extends Error {
                constructor(...c) {
                  let q;
                  if (c.length)
                    if (E(c[0]))
                      if (((q = c[0]), c.length === 1)) super(g(c[0]));
                      else {
                        const F = g(q);
                        typeof c[1] == 'object'
                          ? super(F, c[1])
                          : ((c[0] = F + ':'), super(c.join(' ')));
                      }
                    else
                      c.length === 2 && typeof c[1] == 'object'
                        ? super(...c)
                        : super(c.join(' '));
                  (this.resultCode = q || i.SQLITE_ERROR),
                    (this.name = 'SQLite3Error');
                }
              }
              O.toss = (...a) => {
                throw new O(...a);
              };
              const B = O.toss;
              r.wasmfsOpfsDir &&
                !/^\/[^/]+$/.test(r.wasmfsOpfsDir) &&
                B(
                  "config.wasmfsOpfsDir must be falsy or in the form '/dir-name'.",
                );
              const H = (a) =>
                  typeof a != 'bigint' &&
                  a === (a | 0) &&
                  a <= 2147483647 &&
                  a >= -2147483648,
                ee = function a(c) {
                  return (
                    a._max ||
                      ((a._max = BigInt('0x7fffffffffffffff')),
                      (a._min = ~a._max)),
                    c >= a._min && c <= a._max
                  );
                },
                S = (a) => a >= -0x7fffffffn - 1n && a <= 0x7fffffffn,
                f = function a(c) {
                  return (
                    a._min ||
                      ((a._min = Number.MIN_SAFE_INTEGER),
                      (a._max = Number.MAX_SAFE_INTEGER)),
                    c >= a._min && c <= a._max
                  );
                },
                m = (a) =>
                  a && a.constructor && H(a.constructor.BYTES_PER_ELEMENT)
                    ? a
                    : !1,
                w =
                  typeof SharedArrayBuffer > 'u'
                    ? function () {}
                    : SharedArrayBuffer,
                v = (a) => a.buffer instanceof w,
                b = (a, c, q) => (v(a) ? a.slice(c, q) : a.subarray(c, q)),
                R = (a) =>
                  a &&
                  (a instanceof Uint8Array ||
                    a instanceof Int8Array ||
                    a instanceof ArrayBuffer),
                z = (a) =>
                  a &&
                  (a instanceof Uint8Array ||
                    a instanceof Int8Array ||
                    a instanceof ArrayBuffer),
                L = (a) =>
                  R(a) || B('Value is not of a supported TypedArray type.'),
                U = new TextDecoder('utf-8'),
                G = function (a, c, q) {
                  return U.decode(b(a, c, q));
                },
                p = function (a) {
                  return z(a)
                    ? G(a instanceof ArrayBuffer ? new Uint8Array(a) : a)
                    : Array.isArray(a)
                    ? a.join('')
                    : (l.isPtr(a) && (a = l.cstrToJs(a)), a);
                };
              class x extends Error {
                constructor(...c) {
                  c.length === 2 && typeof c[1] == 'object'
                    ? super(...c)
                    : c.length
                    ? super(c.join(' '))
                    : super('Allocation failed.'),
                    (this.resultCode = i.SQLITE_NOMEM),
                    (this.name = 'WasmAllocError');
                }
              }
              (x.toss = (...a) => {
                throw new x(...a);
              }),
                Object.assign(i, {
                  sqlite3_bind_blob: void 0,
                  sqlite3_bind_text: void 0,
                  sqlite3_create_function_v2: (
                    a,
                    c,
                    q,
                    F,
                    Q,
                    re,
                    ne,
                    ce,
                    le,
                  ) => {},
                  sqlite3_create_function: (a, c, q, F, Q, re, ne, ce) => {},
                  sqlite3_create_window_function: (
                    a,
                    c,
                    q,
                    F,
                    Q,
                    re,
                    ne,
                    ce,
                    le,
                    ue,
                  ) => {},
                  sqlite3_prepare_v3: (a, c, q, F, Q, re) => {},
                  sqlite3_prepare_v2: (a, c, q, F, Q) => {},
                  sqlite3_exec: (a, c, q, F, Q) => {},
                  sqlite3_randomness: (a, c) => {},
                });
              const k = {
                affirmBindableTypedArray: L,
                flexibleString: p,
                bigIntFits32: S,
                bigIntFits64: ee,
                bigIntFitsDouble: f,
                isBindableTypedArray: R,
                isInt32: H,
                isSQLableTypedArray: z,
                isTypedArray: m,
                typedArrayToString: G,
                isUIThread: () =>
                  globalThis.window === globalThis && !!globalThis.document,
                isSharedTypedArray: v,
                toss: function (...a) {
                  throw new Error(a.join(' '));
                },
                toss3: B,
                typedArrayPart: b,
              };
              Object.assign(l, {
                ptrSizeof: r.wasmPtrSizeof || 4,
                ptrIR: r.wasmPtrIR || 'i32',
                bigIntEnabled: !!r.bigIntEnabled,
                exports:
                  r.exports ||
                  B('Missing API config.exports (WASM module exports).'),
                memory:
                  r.memory ||
                  r.exports.memory ||
                  B(
                    'API config object requires a WebAssembly.Memory object',
                    'in either config.exports.memory (exported)',
                    'or config.memory (imported).',
                  ),
                alloc: void 0,
                realloc: void 0,
                dealloc: void 0,
              }),
                (l.allocFromTypedArray = function (a) {
                  a instanceof ArrayBuffer && (a = new Uint8Array(a)), L(a);
                  const c = l.alloc(a.byteLength || 1);
                  return (
                    l.heapForSize(a.constructor).set(a.byteLength ? a : [0], c),
                    c
                  );
                });
              {
                const a = r.allocExportName,
                  c = r.deallocExportName,
                  q = r.reallocExportName;
                for (const F of [a, c, q])
                  l.exports[F] instanceof Function ||
                    B('Missing required exports[', F, '] function.');
                (l.alloc = function F(Q) {
                  return (
                    F.impl(Q) || x.toss('Failed to allocate', Q, ' bytes.')
                  );
                }),
                  (l.alloc.impl = l.exports[a]),
                  (l.realloc = function F(Q, re) {
                    const ne = F.impl(Q, re);
                    return re
                      ? ne || x.toss('Failed to reallocate', re, ' bytes.')
                      : 0;
                  }),
                  (l.realloc.impl = l.exports[q]),
                  (l.dealloc = l.exports[c]);
              }
              (l.compileOptionUsed = function a(c) {
                if (arguments.length) {
                  if (Array.isArray(c)) {
                    const q = {};
                    return (
                      c.forEach((F) => {
                        q[F] = i.sqlite3_compileoption_used(F);
                      }),
                      q
                    );
                  } else if (typeof c == 'object')
                    return (
                      Object.keys(c).forEach((q) => {
                        c[q] = i.sqlite3_compileoption_used(q);
                      }),
                      c
                    );
                } else {
                  if (a._result) return a._result;
                  a._opt ||
                    ((a._rx = /^([^=]+)=(.+)/),
                    (a._rxInt = /^-?\d+$/),
                    (a._opt = function (ne, ce) {
                      const le = a._rx.exec(ne);
                      (ce[0] = le ? le[1] : ne),
                        (ce[1] = le
                          ? a._rxInt.test(le[2])
                            ? +le[2]
                            : le[2]
                          : !0);
                    }));
                  const q = {},
                    F = [0, 0];
                  let Q = 0,
                    re;
                  for (; (re = i.sqlite3_compileoption_get(Q++)); )
                    a._opt(re, F), (q[F[0]] = F[1]);
                  return (a._result = q);
                }
                return typeof c == 'string'
                  ? !!i.sqlite3_compileoption_used(c)
                  : !1;
              }),
                (l.pstack = Object.assign(Object.create(null), {
                  restore: l.exports.sqlite3_wasm_pstack_restore,
                  alloc: function (a) {
                    return (
                      typeof a == 'string' &&
                        !(a = l.sizeofIR(a)) &&
                        x.toss(
                          'Invalid value for pstack.alloc(',
                          arguments[0],
                          ')',
                        ),
                      l.exports.sqlite3_wasm_pstack_alloc(a) ||
                        x.toss(
                          'Could not allocate',
                          a,
                          'bytes from the pstack.',
                        )
                    );
                  },
                  allocChunks: function (a, c) {
                    typeof c == 'string' &&
                      !(c = l.sizeofIR(c)) &&
                      x.toss(
                        'Invalid size value for allocChunks(',
                        arguments[1],
                        ')',
                      );
                    const q = l.pstack.alloc(a * c),
                      F = [];
                    let Q = 0,
                      re = 0;
                    for (; Q < a; ++Q, re += c) F.push(q + re);
                    return F;
                  },
                  allocPtr: (a = 1, c = !0) =>
                    a === 1
                      ? l.pstack.alloc(c ? 8 : l.ptrSizeof)
                      : l.pstack.allocChunks(a, c ? 8 : l.ptrSizeof),
                })),
                Object.defineProperties(l.pstack, {
                  pointer: {
                    configurable: !1,
                    iterable: !0,
                    writeable: !1,
                    get: l.exports.sqlite3_wasm_pstack_ptr,
                  },
                  quota: {
                    configurable: !1,
                    iterable: !0,
                    writeable: !1,
                    get: l.exports.sqlite3_wasm_pstack_quota,
                  },
                  remaining: {
                    configurable: !1,
                    iterable: !0,
                    writeable: !1,
                    get: l.exports.sqlite3_wasm_pstack_remaining,
                  },
                }),
                (i.sqlite3_randomness = (...a) => {
                  if (
                    a.length === 1 &&
                    k.isTypedArray(a[0]) &&
                    a[0].BYTES_PER_ELEMENT === 1
                  ) {
                    const c = a[0];
                    if (c.byteLength === 0)
                      return l.exports.sqlite3_randomness(0, 0), c;
                    const q = l.pstack.pointer;
                    try {
                      let F = c.byteLength,
                        Q = 0;
                      const re = l.exports.sqlite3_randomness,
                        ne = l.heap8u(),
                        ce = F < 512 ? F : 512,
                        le = l.pstack.alloc(ce);
                      do {
                        const ue = F > ce ? ce : F;
                        re(ue, le),
                          c.set(b(ne, le, le + ue), Q),
                          (F -= ue),
                          (Q += ue);
                      } while (F > 0);
                    } catch (F) {
                      console.error(
                        'Highly unexpected (and ignored!) exception in sqlite3_randomness():',
                        F,
                      );
                    } finally {
                      l.pstack.restore(q);
                    }
                    return c;
                  }
                  l.exports.sqlite3_randomness(...a);
                });
              let C;
              if (
                ((i.sqlite3_wasmfs_opfs_dir = function () {
                  if (C !== void 0) return C;
                  const a = r.wasmfsOpfsDir;
                  if (
                    (console.error(
                      'sqlite3_wasmfs_opfs_dir() can no longer work due to incompatible WASMFS changes. It will be removed.',
                    ),
                    !a ||
                      !globalThis.FileSystemHandle ||
                      !globalThis.FileSystemDirectoryHandle ||
                      !globalThis.FileSystemFileHandle)
                  )
                    return (C = '');
                  try {
                    return a &&
                      l.xCallWrapped(
                        'sqlite3_wasm_init_wasmfs',
                        'i32',
                        ['string'],
                        a,
                      ) === 0
                      ? (C = a)
                      : (C = '');
                  } catch {
                    return (C = '');
                  }
                }),
                (i.sqlite3_wasmfs_filename_is_persistent = function (a) {
                  const c = i.sqlite3_wasmfs_opfs_dir();
                  return c && a ? a.startsWith(c + '/') : !1;
                }),
                (i.sqlite3_js_db_uses_vfs = function (a, c, q = 0) {
                  try {
                    const F = i.sqlite3_vfs_find(c);
                    return F
                      ? a
                        ? F === i.sqlite3_js_db_vfs(a, q)
                          ? F
                          : !1
                        : F === i.sqlite3_vfs_find(0)
                        ? F
                        : !1
                      : !1;
                  } catch {
                    return !1;
                  }
                }),
                (i.sqlite3_js_vfs_list = function () {
                  const a = [];
                  let c = i.sqlite3_vfs_find(0);
                  for (; c; ) {
                    const q = new i.sqlite3_vfs(c);
                    a.push(l.cstrToJs(q.$zName)), (c = q.$pNext), q.dispose();
                  }
                  return a;
                }),
                (i.sqlite3_js_db_export = function (a, c = 0) {
                  (a = l.xWrap.testConvertArg('sqlite3*', a)),
                    a || B('Invalid sqlite3* argument.'),
                    l.bigIntEnabled || B('BigInt64 support is not enabled.');
                  const q = l.scopedAllocPush();
                  let F;
                  try {
                    const Q = l.scopedAlloc(8 + l.ptrSizeof),
                      re = Q + 8,
                      ne = c
                        ? l.isPtr(c)
                          ? c
                          : l.scopedAllocCString('' + c)
                        : 0;
                    let ce = l.exports.sqlite3_wasm_db_serialize(
                      a,
                      ne,
                      re,
                      Q,
                      0,
                    );
                    ce &&
                      B(
                        'Database serialization failed with code',
                        y.capi.sqlite3_js_rc_str(ce),
                      ),
                      (F = l.peekPtr(re));
                    const le = l.peek(Q, 'i64');
                    return (
                      (ce = le
                        ? l.heap8u().slice(F, F + Number(le))
                        : new Uint8Array()),
                      ce
                    );
                  } finally {
                    F && l.exports.sqlite3_free(F), l.scopedAllocPop(q);
                  }
                }),
                (i.sqlite3_js_db_vfs = (a, c = 0) =>
                  l.sqlite3_wasm_db_vfs(a, c)),
                (i.sqlite3_js_aggregate_context = (a, c) =>
                  i.sqlite3_aggregate_context(a, c) ||
                  (c
                    ? x.toss(
                        'Cannot allocate',
                        c,
                        'bytes for sqlite3_aggregate_context()',
                      )
                    : 0)),
                (i.sqlite3_js_vfs_create_file = function (a, c, q, F) {
                  let Q;
                  q
                    ? (l.isPtr(q)
                        ? (Q = q)
                        : q instanceof ArrayBuffer && (q = new Uint8Array(q)),
                      q instanceof Uint8Array
                        ? ((Q = l.allocFromTypedArray(q)),
                          (arguments.length < 4 || !k.isInt32(F) || F < 0) &&
                            (F = q.byteLength))
                        : O.toss(
                            'Invalid 3rd argument type for sqlite3_js_vfs_create_file().',
                          ))
                    : (Q = 0),
                    (!k.isInt32(F) || F < 0) &&
                      (l.dealloc(Q),
                      O.toss(
                        'Invalid 4th argument for sqlite3_js_vfs_create_file().',
                      ));
                  try {
                    const re = l.sqlite3_wasm_vfs_create_file(a, c, Q, F);
                    re &&
                      O.toss(
                        'Creation of file failed with sqlite3 result code',
                        i.sqlite3_js_rc_str(re),
                      );
                  } finally {
                    l.dealloc(Q);
                  }
                }),
                k.isUIThread())
              ) {
                const a = function (c) {
                  const q = Object.create(null);
                  return (
                    (q.prefix = 'kvvfs-' + c),
                    (q.stores = []),
                    (c === 'session' || c === '') &&
                      q.stores.push(globalThis.sessionStorage),
                    (c === 'local' || c === '') &&
                      q.stores.push(globalThis.localStorage),
                    q
                  );
                };
                (i.sqlite3_js_kvvfs_clear = function (c = '') {
                  let q = 0;
                  const F = a(c);
                  return (
                    F.stores.forEach((Q) => {
                      const re = [];
                      let ne;
                      for (ne = 0; ne < Q.length; ++ne) {
                        const ce = Q.key(ne);
                        ce.startsWith(F.prefix) && re.push(ce);
                      }
                      re.forEach((ce) => Q.removeItem(ce)), (q += re.length);
                    }),
                    q
                  );
                }),
                  (i.sqlite3_js_kvvfs_size = function (c = '') {
                    let q = 0;
                    const F = a(c);
                    return (
                      F.stores.forEach((Q) => {
                        let re;
                        for (re = 0; re < Q.length; ++re) {
                          const ne = Q.key(re);
                          ne.startsWith(F.prefix) &&
                            ((q += ne.length), (q += Q.getItem(ne).length));
                        }
                      }),
                      q * 2
                    );
                  });
              }
              (i.sqlite3_db_config = function (a, c, ...q) {
                switch (
                  (this.s ||
                    ((this.s = l.xWrap('sqlite3_wasm_db_config_s', 'int', [
                      'sqlite3*',
                      'int',
                      'string:static',
                    ])),
                    (this.pii = l.xWrap('sqlite3_wasm_db_config_pii', 'int', [
                      'sqlite3*',
                      'int',
                      '*',
                      'int',
                      'int',
                    ])),
                    (this.ip = l.xWrap('sqlite3_wasm_db_config_ip', 'int', [
                      'sqlite3*',
                      'int',
                      'int',
                      '*',
                    ]))),
                  c)
                ) {
                  case i.SQLITE_DBCONFIG_ENABLE_FKEY:
                  case i.SQLITE_DBCONFIG_ENABLE_TRIGGER:
                  case i.SQLITE_DBCONFIG_ENABLE_FTS3_TOKENIZER:
                  case i.SQLITE_DBCONFIG_ENABLE_LOAD_EXTENSION:
                  case i.SQLITE_DBCONFIG_NO_CKPT_ON_CLOSE:
                  case i.SQLITE_DBCONFIG_ENABLE_QPSG:
                  case i.SQLITE_DBCONFIG_TRIGGER_EQP:
                  case i.SQLITE_DBCONFIG_RESET_DATABASE:
                  case i.SQLITE_DBCONFIG_DEFENSIVE:
                  case i.SQLITE_DBCONFIG_WRITABLE_SCHEMA:
                  case i.SQLITE_DBCONFIG_LEGACY_ALTER_TABLE:
                  case i.SQLITE_DBCONFIG_DQS_DML:
                  case i.SQLITE_DBCONFIG_DQS_DDL:
                  case i.SQLITE_DBCONFIG_ENABLE_VIEW:
                  case i.SQLITE_DBCONFIG_LEGACY_FILE_FORMAT:
                  case i.SQLITE_DBCONFIG_TRUSTED_SCHEMA:
                  case i.SQLITE_DBCONFIG_STMT_SCANSTATUS:
                  case i.SQLITE_DBCONFIG_REVERSE_SCANORDER:
                    return this.ip(a, c, q[0], q[1] || 0);
                  case i.SQLITE_DBCONFIG_LOOKASIDE:
                    return this.pii(a, c, q[0], q[1], q[2]);
                  case i.SQLITE_DBCONFIG_MAINDBNAME:
                    return this.s(a, c, q[0]);
                  default:
                    return i.SQLITE_MISUSE;
                }
              }.bind(Object.create(null))),
                (i.sqlite3_value_to_js = function (a, c = !0) {
                  let q;
                  const F = i.sqlite3_value_type(a);
                  switch (F) {
                    case i.SQLITE_INTEGER:
                      l.bigIntEnabled
                        ? ((q = i.sqlite3_value_int64(a)),
                          k.bigIntFitsDouble(q) && (q = Number(q)))
                        : (q = i.sqlite3_value_double(a));
                      break;
                    case i.SQLITE_FLOAT:
                      q = i.sqlite3_value_double(a);
                      break;
                    case i.SQLITE_TEXT:
                      q = i.sqlite3_value_text(a);
                      break;
                    case i.SQLITE_BLOB: {
                      const Q = i.sqlite3_value_bytes(a),
                        re = i.sqlite3_value_blob(a);
                      Q &&
                        !re &&
                        y.WasmAllocError.toss(
                          'Cannot allocate memory for blob argument of',
                          Q,
                          'byte(s)',
                        ),
                        (q = Q ? l.heap8u().slice(re, re + Number(Q)) : null);
                      break;
                    }
                    case i.SQLITE_NULL:
                      q = null;
                      break;
                    default:
                      c &&
                        B(
                          i.SQLITE_MISMATCH,
                          'Unhandled sqlite3_value_type():',
                          F,
                        ),
                        (q = void 0);
                  }
                  return q;
                }),
                (i.sqlite3_values_to_js = function (a, c, q = !0) {
                  let F;
                  const Q = [];
                  for (F = 0; F < a; ++F)
                    Q.push(
                      i.sqlite3_value_to_js(l.peekPtr(c + l.ptrSizeof * F)),
                    );
                  return Q;
                }),
                (i.sqlite3_result_error_js = function (a, c) {
                  c instanceof x
                    ? i.sqlite3_result_error_nomem(a)
                    : i.sqlite3_result_error(a, '' + c, -1);
                }),
                (i.sqlite3_result_js = function (a, c) {
                  if (c instanceof Error) {
                    i.sqlite3_result_error_js(a, c);
                    return;
                  }
                  try {
                    switch (typeof c) {
                      case 'undefined':
                        break;
                      case 'boolean':
                        i.sqlite3_result_int(a, c ? 1 : 0);
                        break;
                      case 'bigint':
                        k.bigIntFits32(c)
                          ? i.sqlite3_result_int(a, Number(c))
                          : k.bigIntFitsDouble(c)
                          ? i.sqlite3_result_double(a, Number(c))
                          : l.bigIntEnabled
                          ? k.bigIntFits64(c)
                            ? i.sqlite3_result_int64(a, c)
                            : B(
                                'BigInt value',
                                c.toString(),
                                'is too BigInt for int64.',
                              )
                          : B('BigInt value', c.toString(), 'is too BigInt.');
                        break;
                      case 'number': {
                        let q;
                        k.isInt32(c)
                          ? (q = i.sqlite3_result_int)
                          : l.bigIntEnabled &&
                            Number.isInteger(c) &&
                            k.bigIntFits64(BigInt(c))
                          ? (q = i.sqlite3_result_int64)
                          : (q = i.sqlite3_result_double),
                          q(a, c);
                        break;
                      }
                      case 'string': {
                        const [q, F] = l.allocCString(c, !0);
                        i.sqlite3_result_text(a, q, F, i.SQLITE_WASM_DEALLOC);
                        break;
                      }
                      case 'object':
                        if (c === null) {
                          i.sqlite3_result_null(a);
                          break;
                        } else if (k.isBindableTypedArray(c)) {
                          const q = l.allocFromTypedArray(c);
                          i.sqlite3_result_blob(
                            a,
                            q,
                            c.byteLength,
                            i.SQLITE_WASM_DEALLOC,
                          );
                          break;
                        }
                      default:
                        B(
                          "Don't not how to handle this UDF result value:",
                          typeof c,
                          c,
                        );
                    }
                  } catch (q) {
                    i.sqlite3_result_error_js(a, q);
                  }
                }),
                (i.sqlite3_column_js = function (a, c, q = !0) {
                  const F = i.sqlite3_column_value(a, c);
                  return F === 0 ? void 0 : i.sqlite3_value_to_js(F, q);
                });
              const d = function (a, c, q) {
                (q = i[q]),
                  this.ptr ? l.pokePtr(this.ptr, 0) : (this.ptr = l.allocPtr());
                const F = q(a, c, this.ptr);
                if (F)
                  return O.toss(F, arguments[2] + '() failed with code ' + F);
                const Q = l.peekPtr(this.ptr);
                return Q ? i.sqlite3_value_to_js(Q, !0) : void 0;
              }.bind(Object.create(null));
              (i.sqlite3_preupdate_new_js = (a, c) =>
                d(a, c, 'sqlite3_preupdate_new')),
                (i.sqlite3_preupdate_old_js = (a, c) =>
                  d(a, c, 'sqlite3_preupdate_old')),
                (i.sqlite3changeset_new_js = (a, c) =>
                  d(a, c, 'sqlite3changeset_new')),
                (i.sqlite3changeset_old_js = (a, c) =>
                  d(a, c, 'sqlite3changeset_old'));
              const y = {
                WasmAllocError: x,
                SQLite3Error: O,
                capi: i,
                util: k,
                wasm: l,
                config: r,
                version: Object.create(null),
                client: void 0,
                asyncPostInit: async function () {
                  let a = t.initializersAsync;
                  if ((delete t.initializersAsync, !a || !a.length))
                    return Promise.resolve(y);
                  a = a.map((q) =>
                    (q instanceof Promise ? q : q(y)).catch((Q) => {
                      throw (
                        (console.error(
                          'an async sqlite3 initializer failed:',
                          Q,
                        ),
                        Q)
                      );
                    }),
                  );
                  const c = () => (
                    y.__isUnderTest || (delete y.util, delete y.StructBinder), y
                  );
                  {
                    let q = a.shift();
                    for (; a.length; ) q = q.then(a.shift());
                    return q.then(c);
                  }
                },
                scriptInfo: void 0,
              };
              try {
                t.initializers.forEach((a) => {
                  a(y);
                });
              } catch (a) {
                throw (
                  (console.error('sqlite3 bootstrap initializer threw:', a), a)
                );
              }
              return delete t.initializers, (t.sqlite3 = y), y;
            }),
            (globalThis.sqlite3ApiBootstrap.initializers = []),
            (globalThis.sqlite3ApiBootstrap.initializersAsync = []),
            (globalThis.sqlite3ApiBootstrap.defaultConfig =
              Object.create(null)),
            (globalThis.sqlite3ApiBootstrap.sqlite3 = void 0),
            (globalThis.WhWasmUtilInstaller = function (t) {
              t.bigIntEnabled === void 0 &&
                (t.bigIntEnabled = !!self.BigInt64Array);
              const s = (...p) => {
                throw new Error(p.join(' '));
              };
              t.exports ||
                Object.defineProperty(t, 'exports', {
                  enumerable: !0,
                  configurable: !0,
                  get: () => t.instance && t.instance.exports,
                });
              const r = t.pointerIR || 'i32',
                i = (t.ptrSizeof =
                  r === 'i32'
                    ? 4
                    : r === 'i64'
                    ? 8
                    : s('Unhandled ptrSizeof:', r)),
                l = Object.create(null);
              (l.heapSize = 0),
                (l.memory = null),
                (l.freeFuncIndexes = []),
                (l.scopedAlloc = []),
                (l.utf8Decoder = new TextDecoder()),
                (l.utf8Encoder = new TextEncoder('utf-8')),
                (t.sizeofIR = (p) => {
                  switch (p) {
                    case 'i8':
                      return 1;
                    case 'i16':
                      return 2;
                    case 'i32':
                    case 'f32':
                    case 'float':
                      return 4;
                    case 'i64':
                    case 'f64':
                    case 'double':
                      return 8;
                    case '*':
                      return i;
                    default:
                      return ('' + p).endsWith('*') ? i : void 0;
                  }
                });
              const g = function () {
                if (!l.memory)
                  l.memory =
                    t.memory instanceof WebAssembly.Memory
                      ? t.memory
                      : t.exports.memory;
                else if (l.heapSize === l.memory.buffer.byteLength) return l;
                const p = l.memory.buffer;
                return (
                  (l.HEAP8 = new Int8Array(p)),
                  (l.HEAP8U = new Uint8Array(p)),
                  (l.HEAP16 = new Int16Array(p)),
                  (l.HEAP16U = new Uint16Array(p)),
                  (l.HEAP32 = new Int32Array(p)),
                  (l.HEAP32U = new Uint32Array(p)),
                  t.bigIntEnabled &&
                    ((l.HEAP64 = new BigInt64Array(p)),
                    (l.HEAP64U = new BigUint64Array(p))),
                  (l.HEAP32F = new Float32Array(p)),
                  (l.HEAP64F = new Float64Array(p)),
                  (l.heapSize = p.byteLength),
                  l
                );
              };
              (t.heap8 = () => g().HEAP8),
                (t.heap8u = () => g().HEAP8U),
                (t.heap16 = () => g().HEAP16),
                (t.heap16u = () => g().HEAP16U),
                (t.heap32 = () => g().HEAP32),
                (t.heap32u = () => g().HEAP32U),
                (t.heapForSize = function (p, x = !0) {
                  const k =
                    l.memory && l.heapSize === l.memory.buffer.byteLength
                      ? l
                      : g();
                  switch (p) {
                    case Int8Array:
                      return k.HEAP8;
                    case Uint8Array:
                      return k.HEAP8U;
                    case Int16Array:
                      return k.HEAP16;
                    case Uint16Array:
                      return k.HEAP16U;
                    case Int32Array:
                      return k.HEAP32;
                    case Uint32Array:
                      return k.HEAP32U;
                    case 8:
                      return x ? k.HEAP8U : k.HEAP8;
                    case 16:
                      return x ? k.HEAP16U : k.HEAP16;
                    case 32:
                      return x ? k.HEAP32U : k.HEAP32;
                    case 64:
                      if (k.HEAP64) return x ? k.HEAP64U : k.HEAP64;
                      break;
                    default:
                      if (t.bigIntEnabled) {
                        if (p === self.BigUint64Array) return k.HEAP64U;
                        if (p === self.BigInt64Array) return k.HEAP64;
                        break;
                      }
                  }
                  s(
                    'Invalid heapForSize() size: expecting 8, 16, 32,',
                    'or (if BigInt is enabled) 64.',
                  );
                }),
                (t.functionTable = function () {
                  return t.exports.__indirect_function_table;
                }),
                (t.functionEntry = function (p) {
                  const x = t.functionTable();
                  return p < x.length ? x.get(p) : void 0;
                }),
                (t.jsFuncToWasm = function p(x, k) {
                  if (
                    (p._ ||
                      (p._ = {
                        sigTypes: Object.assign(Object.create(null), {
                          i: 'i32',
                          p: 'i32',
                          P: 'i32',
                          s: 'i32',
                          j: 'i64',
                          f: 'f32',
                          d: 'f64',
                        }),
                        typeCodes: Object.assign(Object.create(null), {
                          f64: 124,
                          f32: 125,
                          i64: 126,
                          i32: 127,
                        }),
                        uleb128Encode: function (y, a, c) {
                          c < 128 ? y[a](c) : y[a](c % 128 | 128, c >> 7);
                        },
                        rxJSig: /^(\w)\((\w*)\)$/,
                        sigParams: function (y) {
                          const a = p._.rxJSig.exec(y);
                          return a ? a[2] : y.substr(1);
                        },
                        letterType: (y) =>
                          p._.sigTypes[y] || s('Invalid signature letter:', y),
                        pushSigType: (y, a) =>
                          y.push(p._.typeCodes[p._.letterType(a)]),
                      }),
                    typeof x == 'string')
                  ) {
                    const y = k;
                    (k = x), (x = y);
                  }
                  const C = p._.sigParams(k),
                    d = [1, 96];
                  p._.uleb128Encode(d, 'push', C.length);
                  for (const y of C) p._.pushSigType(d, y);
                  return (
                    k[0] === 'v'
                      ? d.push(0)
                      : (d.push(1), p._.pushSigType(d, k[0])),
                    p._.uleb128Encode(d, 'unshift', d.length),
                    d.unshift(0, 97, 115, 109, 1, 0, 0, 0, 1),
                    d.push(
                      2,
                      7,
                      1,
                      1,
                      101,
                      1,
                      102,
                      0,
                      0,
                      7,
                      5,
                      1,
                      1,
                      102,
                      0,
                      0,
                    ),
                    new WebAssembly.Instance(
                      new WebAssembly.Module(new Uint8Array(d)),
                      { e: { f: x } },
                    ).exports.f
                  );
                });
              const E = function (x, k, C) {
                if (
                  (C &&
                    !l.scopedAlloc.length &&
                    s('No scopedAllocPush() scope is active.'),
                  typeof x == 'string')
                ) {
                  const c = k;
                  (k = x), (x = c);
                }
                (typeof k != 'string' || !(x instanceof Function)) &&
                  s(
                    'Invalid arguments: expecting (function,signature) or (signature,function).',
                  );
                const d = t.functionTable(),
                  y = d.length;
                let a;
                for (
                  ;
                  l.freeFuncIndexes.length &&
                  ((a = l.freeFuncIndexes.pop()), d.get(a));

                ) {
                  a = null;
                  continue;
                }
                a || ((a = y), d.grow(1));
                try {
                  return (
                    d.set(a, x),
                    C && l.scopedAlloc[l.scopedAlloc.length - 1].push(a),
                    a
                  );
                } catch (c) {
                  if (!(c instanceof TypeError))
                    throw (a === y && l.freeFuncIndexes.push(y), c);
                }
                try {
                  const c = t.jsFuncToWasm(x, k);
                  d.set(a, c),
                    C && l.scopedAlloc[l.scopedAlloc.length - 1].push(a);
                } catch (c) {
                  throw (a === y && l.freeFuncIndexes.push(y), c);
                }
                return a;
              };
              (t.installFunction = (p, x) => E(p, x, !1)),
                (t.scopedInstallFunction = (p, x) => E(p, x, !0)),
                (t.uninstallFunction = function (p) {
                  if (!p && p !== 0) return;
                  const x = l.freeFuncIndexes,
                    k = t.functionTable();
                  x.push(p);
                  const C = k.get(p);
                  return k.set(p, null), C;
                }),
                (t.peek = function (x, k = 'i8') {
                  k.endsWith('*') && (k = r);
                  const C =
                      l.memory && l.heapSize === l.memory.buffer.byteLength
                        ? l
                        : g(),
                    d = Array.isArray(x) ? [] : void 0;
                  let y;
                  do {
                    switch ((d && (x = arguments[0].shift()), k)) {
                      case 'i1':
                      case 'i8':
                        y = C.HEAP8[x >> 0];
                        break;
                      case 'i16':
                        y = C.HEAP16[x >> 1];
                        break;
                      case 'i32':
                        y = C.HEAP32[x >> 2];
                        break;
                      case 'float':
                      case 'f32':
                        y = C.HEAP32F[x >> 2];
                        break;
                      case 'double':
                      case 'f64':
                        y = Number(C.HEAP64F[x >> 3]);
                        break;
                      case 'i64':
                        if (t.bigIntEnabled) {
                          y = BigInt(C.HEAP64[x >> 3]);
                          break;
                        }
                      default:
                        s('Invalid type for peek():', k);
                    }
                    d && d.push(y);
                  } while (d && arguments[0].length);
                  return d || y;
                }),
                (t.poke = function (p, x, k = 'i8') {
                  k.endsWith('*') && (k = r);
                  const C =
                    l.memory && l.heapSize === l.memory.buffer.byteLength
                      ? l
                      : g();
                  for (const d of Array.isArray(p) ? p : [p])
                    switch (k) {
                      case 'i1':
                      case 'i8':
                        C.HEAP8[d >> 0] = x;
                        continue;
                      case 'i16':
                        C.HEAP16[d >> 1] = x;
                        continue;
                      case 'i32':
                        C.HEAP32[d >> 2] = x;
                        continue;
                      case 'float':
                      case 'f32':
                        C.HEAP32F[d >> 2] = x;
                        continue;
                      case 'double':
                      case 'f64':
                        C.HEAP64F[d >> 3] = x;
                        continue;
                      case 'i64':
                        if (C.HEAP64) {
                          C.HEAP64[d >> 3] = BigInt(x);
                          continue;
                        }
                      default:
                        s('Invalid type for poke(): ' + k);
                    }
                  return this;
                }),
                (t.peekPtr = (...p) => t.peek(p.length === 1 ? p[0] : p, r)),
                (t.pokePtr = (p, x = 0) => t.poke(p, x, r)),
                (t.peek8 = (...p) => t.peek(p.length === 1 ? p[0] : p, 'i8')),
                (t.poke8 = (p, x) => t.poke(p, x, 'i8')),
                (t.peek16 = (...p) => t.peek(p.length === 1 ? p[0] : p, 'i16')),
                (t.poke16 = (p, x) => t.poke(p, x, 'i16')),
                (t.peek32 = (...p) => t.peek(p.length === 1 ? p[0] : p, 'i32')),
                (t.poke32 = (p, x) => t.poke(p, x, 'i32')),
                (t.peek64 = (...p) => t.peek(p.length === 1 ? p[0] : p, 'i64')),
                (t.poke64 = (p, x) => t.poke(p, x, 'i64')),
                (t.peek32f = (...p) =>
                  t.peek(p.length === 1 ? p[0] : p, 'f32')),
                (t.poke32f = (p, x) => t.poke(p, x, 'f32')),
                (t.peek64f = (...p) =>
                  t.peek(p.length === 1 ? p[0] : p, 'f64')),
                (t.poke64f = (p, x) => t.poke(p, x, 'f64')),
                (t.getMemValue = t.peek),
                (t.getPtrValue = t.peekPtr),
                (t.setMemValue = t.poke),
                (t.setPtrValue = t.pokePtr),
                (t.isPtr32 = (p) =>
                  typeof p == 'number' && p === (p | 0) && p >= 0),
                (t.isPtr = t.isPtr32),
                (t.cstrlen = function (p) {
                  if (!p || !t.isPtr(p)) return null;
                  const x = g().HEAP8U;
                  let k = p;
                  for (; x[k] !== 0; ++k);
                  return k - p;
                });
              const O =
                  typeof SharedArrayBuffer > 'u'
                    ? function () {}
                    : SharedArrayBuffer,
                B = function (p, x, k) {
                  return l.utf8Decoder.decode(
                    p.buffer instanceof O ? p.slice(x, k) : p.subarray(x, k),
                  );
                };
              (t.cstrToJs = function (p) {
                const x = t.cstrlen(p);
                return x ? B(g().HEAP8U, p, p + x) : x === null ? x : '';
              }),
                (t.jstrlen = function (p) {
                  if (typeof p != 'string') return null;
                  const x = p.length;
                  let k = 0;
                  for (let C = 0; C < x; ++C) {
                    let d = p.charCodeAt(C);
                    d >= 55296 &&
                      d <= 57343 &&
                      (d =
                        (65536 + ((d & 1023) << 10)) |
                        (p.charCodeAt(++C) & 1023)),
                      d <= 127
                        ? ++k
                        : d <= 2047
                        ? (k += 2)
                        : d <= 65535
                        ? (k += 3)
                        : (k += 4);
                  }
                  return k;
                }),
                (t.jstrcpy = function (p, x, k = 0, C = -1, d = !0) {
                  if (
                    ((!x ||
                      (!(x instanceof Int8Array) &&
                        !(x instanceof Uint8Array))) &&
                      s('jstrcpy() target must be an Int8Array or Uint8Array.'),
                    C < 0 && (C = x.length - k),
                    !(C > 0) || !(k >= 0))
                  )
                    return 0;
                  let y = 0,
                    a = p.length;
                  const c = k,
                    q = k + C - (d ? 1 : 0);
                  for (; y < a && k < q; ++y) {
                    let F = p.charCodeAt(y);
                    if (
                      (F >= 55296 &&
                        F <= 57343 &&
                        (F =
                          (65536 + ((F & 1023) << 10)) |
                          (p.charCodeAt(++y) & 1023)),
                      F <= 127)
                    ) {
                      if (k >= q) break;
                      x[k++] = F;
                    } else if (F <= 2047) {
                      if (k + 1 >= q) break;
                      (x[k++] = 192 | (F >> 6)), (x[k++] = 128 | (F & 63));
                    } else if (F <= 65535) {
                      if (k + 2 >= q) break;
                      (x[k++] = 224 | (F >> 12)),
                        (x[k++] = 128 | ((F >> 6) & 63)),
                        (x[k++] = 128 | (F & 63));
                    } else {
                      if (k + 3 >= q) break;
                      (x[k++] = 240 | (F >> 18)),
                        (x[k++] = 128 | ((F >> 12) & 63)),
                        (x[k++] = 128 | ((F >> 6) & 63)),
                        (x[k++] = 128 | (F & 63));
                    }
                  }
                  return d && (x[k++] = 0), k - c;
                }),
                (t.cstrncpy = function (p, x, k) {
                  if (
                    ((!p || !x) &&
                      s('cstrncpy() does not accept NULL strings.'),
                    k < 0)
                  )
                    k = t.cstrlen(strPtr) + 1;
                  else if (!(k > 0)) return 0;
                  const C = t.heap8u();
                  let d = 0,
                    y;
                  for (; d < k && (y = C[x + d]); ++d) C[p + d] = y;
                  return d < k && (C[p + d++] = 0), d;
                }),
                (t.jstrToUintArray = (p, x = !1) =>
                  l.utf8Encoder.encode(x ? p + '\0' : p));
              const H = (p, x) => {
                  (!(p.alloc instanceof Function) ||
                    !(p.dealloc instanceof Function)) &&
                    s(
                      'Object is missing alloc() and/or dealloc() function(s)',
                      'required by',
                      x + '().',
                    );
                },
                ee = function (p, x, k, C) {
                  if ((H(t, C), typeof p != 'string')) return null;
                  {
                    const d = l.utf8Encoder.encode(p),
                      y = k(d.length + 1),
                      a = g().HEAP8U;
                    return (
                      a.set(d, y), (a[y + d.length] = 0), x ? [y, d.length] : y
                    );
                  }
                };
              (t.allocCString = (p, x = !1) =>
                ee(p, x, t.alloc, 'allocCString()')),
                (t.scopedAllocPush = function () {
                  H(t, 'scopedAllocPush');
                  const p = [];
                  return l.scopedAlloc.push(p), p;
                }),
                (t.scopedAllocPop = function (p) {
                  H(t, 'scopedAllocPop');
                  const x = arguments.length
                    ? l.scopedAlloc.indexOf(p)
                    : l.scopedAlloc.length - 1;
                  x < 0 && s('Invalid state object for scopedAllocPop().'),
                    arguments.length === 0 && (p = l.scopedAlloc[x]),
                    l.scopedAlloc.splice(x, 1);
                  for (let k; (k = p.pop()); )
                    t.functionEntry(k) ? t.uninstallFunction(k) : t.dealloc(k);
                }),
                (t.scopedAlloc = function (p) {
                  l.scopedAlloc.length ||
                    s('No scopedAllocPush() scope is active.');
                  const x = t.alloc(p);
                  return l.scopedAlloc[l.scopedAlloc.length - 1].push(x), x;
                }),
                Object.defineProperty(t.scopedAlloc, 'level', {
                  configurable: !1,
                  enumerable: !1,
                  get: () => l.scopedAlloc.length,
                  set: () => s("The 'active' property is read-only."),
                }),
                (t.scopedAllocCString = (p, x = !1) =>
                  ee(p, x, t.scopedAlloc, 'scopedAllocCString()'));
              const S = function (p, x) {
                const k = t[p ? 'scopedAlloc' : 'alloc'](
                  (x.length + 1) * t.ptrSizeof,
                );
                let C = 0;
                return (
                  x.forEach((d) => {
                    t.pokePtr(
                      k + t.ptrSizeof * C++,
                      t[p ? 'scopedAllocCString' : 'allocCString']('' + d),
                    );
                  }),
                  t.pokePtr(k + t.ptrSizeof * C, 0),
                  k
                );
              };
              (t.scopedAllocMainArgv = (p) => S(!0, p)),
                (t.allocMainArgv = (p) => S(!1, p)),
                (t.cArgvToJs = (p, x) => {
                  const k = [];
                  for (let C = 0; C < p; ++C) {
                    const d = t.peekPtr(x + t.ptrSizeof * C);
                    k.push(d ? t.cstrToJs(d) : null);
                  }
                  return k;
                }),
                (t.scopedAllocCall = function (p) {
                  t.scopedAllocPush();
                  try {
                    return p();
                  } finally {
                    t.scopedAllocPop();
                  }
                });
              const f = function (p, x, k) {
                H(t, k);
                const C = x ? 'i64' : r;
                let d = t[k](p * (x ? 8 : i));
                if ((t.poke(d, 0, C), p === 1)) return d;
                const y = [d];
                for (let a = 1; a < p; ++a)
                  (d += x ? 8 : i), (y[a] = d), t.poke(d, 0, C);
                return y;
              };
              (t.allocPtr = (p = 1, x = !0) => f(p, x, 'alloc')),
                (t.scopedAllocPtr = (p = 1, x = !0) => f(p, x, 'scopedAlloc')),
                (t.xGet = function (p) {
                  return t.exports[p] || s('Cannot find exported symbol:', p);
                });
              const m = (p, x) => s(p + '() requires', x, 'argument(s).');
              (t.xCall = function (p, ...x) {
                const k = t.xGet(p);
                return (
                  k instanceof Function ||
                    s('Exported symbol', p, 'is not a function.'),
                  k.length !== x.length && m(p, k.length),
                  arguments.length === 2 && Array.isArray(arguments[1])
                    ? k.apply(null, arguments[1])
                    : k.apply(null, x)
                );
              }),
                (l.xWrap = Object.create(null)),
                (l.xWrap.convert = Object.create(null)),
                (l.xWrap.convert.arg = new Map()),
                (l.xWrap.convert.result = new Map());
              const w = l.xWrap.convert.arg,
                v = l.xWrap.convert.result;
              t.bigIntEnabled && w.set('i64', (p) => BigInt(p));
              const b =
                r === 'i32' ? (p) => p | 0 : (p) => BigInt(p) | BigInt(0);
              w
                .set('i32', b)
                .set('i16', (p) => (p | 0) & 65535)
                .set('i8', (p) => (p | 0) & 255)
                .set('f32', (p) => Number(p).valueOf())
                .set('float', w.get('f32'))
                .set('f64', w.get('f32'))
                .set('double', w.get('f64'))
                .set('int', w.get('i32'))
                .set('null', (p) => p)
                .set(null, w.get('null'))
                .set('**', b)
                .set('*', b),
                v
                  .set('*', b)
                  .set('pointer', b)
                  .set('number', (p) => Number(p))
                  .set('void', (p) => {})
                  .set('null', (p) => p)
                  .set(null, v.get('null'));
              {
                const p = [
                  'i8',
                  'i16',
                  'i32',
                  'int',
                  'f32',
                  'float',
                  'f64',
                  'double',
                ];
                t.bigIntEnabled && p.push('i64');
                const x = w.get(r);
                for (const k of p)
                  w.set(k + '*', x),
                    v.set(k + '*', x),
                    v.set(k, w.get(k) || s('Missing arg converter:', k));
              }
              const R = function (p) {
                return typeof p == 'string'
                  ? t.scopedAllocCString(p)
                  : p
                  ? b(p)
                  : null;
              };
              w.set('string', R).set('utf8', R).set('pointer', R),
                v
                  .set('string', (p) => t.cstrToJs(p))
                  .set('utf8', v.get('string'))
                  .set('string:dealloc', (p) => {
                    try {
                      return p ? t.cstrToJs(p) : null;
                    } finally {
                      t.dealloc(p);
                    }
                  })
                  .set('utf8:dealloc', v.get('string:dealloc'))
                  .set('json', (p) => JSON.parse(t.cstrToJs(p)))
                  .set('json:dealloc', (p) => {
                    try {
                      return p ? JSON.parse(t.cstrToJs(p)) : null;
                    } finally {
                      t.dealloc(p);
                    }
                  });
              const z = class {
                constructor(p) {
                  this.name = p.name || 'unnamed adapter';
                }
                convertArg(p, x, k) {
                  s('AbstractArgAdapter must be subclassed.');
                }
              };
              w.FuncPtrAdapter = class Ge extends z {
                constructor(x) {
                  super(x),
                    w.FuncPtrAdapter.warnOnUse &&
                      console.warn(
                        'xArg.FuncPtrAdapter is an internal-only API',
                        'and is not intended to be invoked from',
                        'client-level code. Invoked with:',
                        x,
                      ),
                    (this.signature = x.signature),
                    x.contextKey instanceof Function &&
                      ((this.contextKey = x.contextKey),
                      x.bindScope || (x.bindScope = 'context')),
                    (this.bindScope =
                      x.bindScope ||
                      s(
                        'FuncPtrAdapter options requires a bindScope (explicit or implied).',
                      )),
                    Ge.bindScopes.indexOf(x.bindScope) < 0 &&
                      s(
                        'Invalid options.bindScope (' +
                          x.bindMod +
                          ') for FuncPtrAdapter. Expecting one of: (' +
                          Ge.bindScopes.join(', ') +
                          ')',
                      ),
                    (this.isTransient = this.bindScope === 'transient'),
                    (this.isContext = this.bindScope === 'context'),
                    (this.isPermanent = this.bindScope === 'permanent'),
                    (this.singleton =
                      this.bindScope === 'singleton' ? [] : void 0),
                    (this.callProxy =
                      x.callProxy instanceof Function ? x.callProxy : void 0);
                }
                static warnOnUse = !1;
                static debugFuncInstall = !1;
                static debugOut = console.debug.bind(console);
                static bindScopes = [
                  'transient',
                  'context',
                  'singleton',
                  'permanent',
                ];
                contextKey(x, k) {
                  return this;
                }
                contextMap(x) {
                  const k = this.__cmap || (this.__cmap = new Map());
                  let C = k.get(x);
                  return C === void 0 && k.set(x, (C = [])), C;
                }
                convertArg(x, k, C) {
                  let d = this.singleton;
                  if (
                    (!d &&
                      this.isContext &&
                      (d = this.contextMap(this.contextKey(k, C))),
                    d && d[0] === x)
                  )
                    return d[1];
                  if (x instanceof Function) {
                    this.callProxy && (x = this.callProxy(x));
                    const y = E(x, this.signature, this.isTransient);
                    if (
                      (Ge.debugFuncInstall &&
                        Ge.debugOut(
                          'FuncPtrAdapter installed',
                          this,
                          this.contextKey(k, C),
                          '@' + y,
                          x,
                        ),
                      d)
                    ) {
                      if (d[1]) {
                        Ge.debugFuncInstall &&
                          Ge.debugOut(
                            'FuncPtrAdapter uninstalling',
                            this,
                            this.contextKey(k, C),
                            '@' + d[1],
                            x,
                          );
                        try {
                          t.uninstallFunction(d[1]);
                        } catch {}
                      }
                      (d[0] = x), (d[1] = y);
                    }
                    return y;
                  } else if (t.isPtr(x) || x === null || x === void 0) {
                    if (d && d[1] && d[1] !== x) {
                      Ge.debugFuncInstall &&
                        Ge.debugOut(
                          'FuncPtrAdapter uninstalling',
                          this,
                          this.contextKey(k, C),
                          '@' + d[1],
                          x,
                        );
                      try {
                        t.uninstallFunction(d[1]);
                      } catch {}
                      d[0] = d[1] = x | 0;
                    }
                    return x || 0;
                  } else
                    throw new TypeError(
                      'Invalid FuncPtrAdapter argument type. Expecting a function pointer or a ' +
                        (this.name ? this.name + ' ' : '') +
                        'function matching signature ' +
                        this.signature +
                        '.',
                    );
                }
              };
              const L = (p) => w.get(p) || s('Argument adapter not found:', p),
                U = (p) => v.get(p) || s('Result adapter not found:', p);
              (l.xWrap.convertArg = (p, ...x) => L(p)(...x)),
                (l.xWrap.convertArgNoCheck = (p, ...x) => w.get(p)(...x)),
                (l.xWrap.convertResult = (p, x) =>
                  p === null ? x : p ? U(p)(x) : void 0),
                (l.xWrap.convertResultNoCheck = (p, x) =>
                  p === null ? x : p ? v.get(p)(x) : void 0),
                (t.xWrap = function (p, x, ...k) {
                  arguments.length === 3 &&
                    Array.isArray(arguments[2]) &&
                    (k = arguments[2]),
                    t.isPtr(p) &&
                      (p =
                        t.functionEntry(p) ||
                        s(
                          'Function pointer not found in WASM function table.',
                        ));
                  const C = p instanceof Function,
                    d = C ? p : t.xGet(p);
                  if (
                    (C && (p = d.name || 'unnamed function'),
                    k.length !== d.length && m(p, d.length),
                    x === null && d.length === 0)
                  )
                    return d;
                  x != null && U(x);
                  for (const a of k)
                    a instanceof z
                      ? w.set(a, (...c) => a.convertArg(...c))
                      : L(a);
                  const y = l.xWrap;
                  return d.length === 0
                    ? (...a) =>
                        a.length
                          ? m(p, d.length)
                          : y.convertResult(x, d.call(null))
                    : function (...a) {
                        a.length !== d.length && m(p, d.length);
                        const c = t.scopedAllocPush();
                        try {
                          for (const q in a)
                            a[q] = y.convertArgNoCheck(k[q], a[q], a, q);
                          return y.convertResultNoCheck(x, d.apply(null, a));
                        } finally {
                          t.scopedAllocPop(c);
                        }
                      };
                });
              const G = function (p, x, k, C, d, y) {
                if (typeof k == 'string') {
                  if (x === 1) return y.get(k);
                  if (x === 2) {
                    if (C)
                      C instanceof Function ||
                        s(d, 'requires a function argument.');
                    else return delete y.get(k), p;
                    return y.set(k, C), p;
                  }
                }
                s('Invalid arguments to', d);
              };
              return (
                (t.xWrap.resultAdapter = function p(x, k) {
                  return G(p, arguments.length, x, k, 'resultAdapter()', v);
                }),
                (t.xWrap.argAdapter = function p(x, k) {
                  return G(p, arguments.length, x, k, 'argAdapter()', w);
                }),
                (t.xWrap.FuncPtrAdapter = w.FuncPtrAdapter),
                (t.xCallWrapped = function (p, x, k, ...C) {
                  return (
                    Array.isArray(arguments[3]) && (C = arguments[3]),
                    t.xWrap(p, x, k || []).apply(null, C || [])
                  );
                }),
                (t.xWrap.testConvertArg = l.xWrap.convertArg),
                (t.xWrap.testConvertResult = l.xWrap.convertResult),
                t
              );
            }),
            (globalThis.WhWasmUtilInstaller.yawl = function (t) {
              const s = () => fetch(t.uri, { credentials: 'same-origin' }),
                r = this,
                i = function (g) {
                  if (t.wasmUtilTarget) {
                    const E = (...B) => {
                        throw new Error(B.join(' '));
                      },
                      O = t.wasmUtilTarget;
                    if (
                      ((O.module = g.module),
                      (O.instance = g.instance),
                      O.instance.exports.memory ||
                        (O.memory =
                          (t.imports &&
                            t.imports.env &&
                            t.imports.env.memory) ||
                          E("Missing 'memory' object!")),
                      !O.alloc && g.instance.exports.malloc)
                    ) {
                      const B = g.instance.exports;
                      (O.alloc = function (H) {
                        return (
                          B.malloc(H) || E('Allocation of', H, 'bytes failed.')
                        );
                      }),
                        (O.dealloc = function (H) {
                          B.free(H);
                        });
                    }
                    r(O);
                  }
                  return t.onload && t.onload(g, t), g;
                };
              return WebAssembly.instantiateStreaming
                ? function () {
                    return WebAssembly.instantiateStreaming(
                      s(),
                      t.imports || {},
                    ).then(i);
                  }
                : function () {
                    return s()
                      .then((E) => E.arrayBuffer())
                      .then((E) => WebAssembly.instantiate(E, t.imports || {}))
                      .then(i);
                  };
            }.bind(globalThis.WhWasmUtilInstaller)),
            (globalThis.Jaccwabyt = function t(s) {
              const r = (...T) => {
                throw new Error(T.join(' '));
              };
              !(s.heap instanceof WebAssembly.Memory) &&
                !(s.heap instanceof Function) &&
                r(
                  'config.heap must be WebAssembly.Memory instance or a function.',
                ),
                ['alloc', 'dealloc'].forEach(function (T) {
                  s[T] instanceof Function ||
                    r("Config option '" + T + "' must be a function.");
                });
              const i = t,
                l =
                  s.heap instanceof Function
                    ? s.heap
                    : () => new Uint8Array(s.heap.buffer),
                g = s.alloc,
                E = s.dealloc,
                O = s.log || console.log.bind(console),
                B = s.memberPrefix || '',
                H = s.memberSuffix || '',
                ee =
                  s.bigIntEnabled === void 0
                    ? !!self.BigInt64Array
                    : !!s.bigIntEnabled,
                S = self.BigInt,
                f = self.BigInt64Array,
                m = s.ptrSizeof || 4,
                w = s.ptrIR || 'i32';
              i.debugFlags ||
                ((i.__makeDebugFlags = function (T = null) {
                  T && T.__flags && (T = T.__flags);
                  const W = function $(X) {
                    return arguments.length === 0
                      ? $.__flags
                      : (X < 0
                          ? (delete $.__flags.getter,
                            delete $.__flags.setter,
                            delete $.__flags.alloc,
                            delete $.__flags.dealloc)
                          : (($.__flags.getter = (1 & X) !== 0),
                            ($.__flags.setter = (2 & X) !== 0),
                            ($.__flags.alloc = (4 & X) !== 0),
                            ($.__flags.dealloc = (8 & X) !== 0)),
                        $._flags);
                  };
                  return (
                    Object.defineProperty(W, '__flags', {
                      iterable: !1,
                      writable: !1,
                      value: Object.create(T),
                    }),
                    T || W(0),
                    W
                  );
                }),
                (i.debugFlags = i.__makeDebugFlags()));
              const v = (function () {
                  const T = new ArrayBuffer(2);
                  return (
                    new DataView(T).setInt16(0, 256, !0),
                    new Int16Array(T)[0] === 256
                  );
                })(),
                b = (T) => T[1] === '(',
                R = (T) => T === 'P',
                z = (T) => (b(T) ? 'p' : T[0]),
                L = function (T) {
                  switch (z(T)) {
                    case 'c':
                    case 'C':
                      return 'i8';
                    case 'i':
                      return 'i32';
                    case 'p':
                    case 'P':
                    case 's':
                      return w;
                    case 'j':
                      return 'i64';
                    case 'f':
                      return 'float';
                    case 'd':
                      return 'double';
                  }
                  r('Unhandled signature IR:', T);
                },
                U = f ? () => !0 : () => r('BigInt64Array is not available.'),
                G = function (T) {
                  switch (z(T)) {
                    case 'p':
                    case 'P':
                    case 's': {
                      switch (m) {
                        case 4:
                          return 'getInt32';
                        case 8:
                          return U() && 'getBigInt64';
                      }
                      break;
                    }
                    case 'i':
                      return 'getInt32';
                    case 'c':
                      return 'getInt8';
                    case 'C':
                      return 'getUint8';
                    case 'j':
                      return U() && 'getBigInt64';
                    case 'f':
                      return 'getFloat32';
                    case 'd':
                      return 'getFloat64';
                  }
                  r('Unhandled DataView getter for signature:', T);
                },
                p = function (T) {
                  switch (z(T)) {
                    case 'p':
                    case 'P':
                    case 's': {
                      switch (m) {
                        case 4:
                          return 'setInt32';
                        case 8:
                          return U() && 'setBigInt64';
                      }
                      break;
                    }
                    case 'i':
                      return 'setInt32';
                    case 'c':
                      return 'setInt8';
                    case 'C':
                      return 'setUint8';
                    case 'j':
                      return U() && 'setBigInt64';
                    case 'f':
                      return 'setFloat32';
                    case 'd':
                      return 'setFloat64';
                  }
                  r('Unhandled DataView setter for signature:', T);
                },
                x = function (T) {
                  switch (z(T)) {
                    case 'i':
                    case 'f':
                    case 'c':
                    case 'C':
                    case 'd':
                      return Number;
                    case 'j':
                      return U() && S;
                    case 'p':
                    case 'P':
                    case 's':
                      switch (m) {
                        case 4:
                          return Number;
                        case 8:
                          return U() && S;
                      }
                      break;
                  }
                  r('Unhandled DataView set wrapper for signature:', T);
                },
                k = (T, W) => T + '::' + W,
                C = function (T, W) {
                  return () => r(k(T, W), 'is read-only.');
                },
                d = new WeakMap(),
                y = '(pointer-is-external)',
                a = function (T, W, $) {
                  if (($ || ($ = d.get(W)), $)) {
                    if ((d.delete(W), Array.isArray(W.ondispose))) {
                      let X;
                      for (; (X = W.ondispose.shift()); )
                        try {
                          X instanceof Function
                            ? X.call(W)
                            : X instanceof Z
                            ? X.dispose()
                            : typeof X == 'number' && E(X);
                        } catch (qe) {
                          console.warn(
                            'ondispose() for',
                            T.structName,
                            '@',
                            $,
                            'threw. NOT propagating it.',
                            qe,
                          );
                        }
                    } else if (W.ondispose instanceof Function)
                      try {
                        W.ondispose();
                      } catch (X) {
                        console.warn(
                          'ondispose() for',
                          T.structName,
                          '@',
                          $,
                          'threw. NOT propagating it.',
                          X,
                        );
                      }
                    delete W.ondispose,
                      T.debugFlags.__flags.dealloc &&
                        O(
                          'debug.dealloc:',
                          W[y] ? 'EXTERNAL' : '',
                          T.structName,
                          'instance:',
                          T.structInfo.sizeof,
                          'bytes @' + $,
                        ),
                      W[y] || E($);
                  }
                },
                c = (T) => ({
                  configurable: !1,
                  writable: !1,
                  iterable: !1,
                  value: T,
                }),
                q = function (T, W, $) {
                  let X = !$;
                  $
                    ? Object.defineProperty(W, y, c($))
                    : (($ = g(T.structInfo.sizeof)),
                      $ ||
                        r('Allocation of', T.structName, 'structure failed.'));
                  try {
                    T.debugFlags.__flags.alloc &&
                      O(
                        'debug.alloc:',
                        X ? '' : 'EXTERNAL',
                        T.structName,
                        'instance:',
                        T.structInfo.sizeof,
                        'bytes @' + $,
                      ),
                      X && l().fill(0, $, $ + T.structInfo.sizeof),
                      d.set(W, $);
                  } catch (qe) {
                    throw (a(T, W, $), qe);
                  }
                },
                F = function () {
                  const T = this.pointer;
                  return T
                    ? new Uint8Array(l().slice(T, T + this.structInfo.sizeof))
                    : null;
                },
                re = c((T) => B + T + H),
                ne = function (T, W, $ = !0) {
                  let X = T.members[W];
                  if (!X && (B || H)) {
                    for (const qe of Object.values(T.members))
                      if (qe.key === W) {
                        X = qe;
                        break;
                      }
                    !X &&
                      $ &&
                      r(k(T.name, W), 'is not a mapped struct member.');
                  }
                  return X;
                },
                ce = function T(W, $, X = !1) {
                  T._ ||
                    (T._ = (ke) =>
                      ke
                        .replace(/[^vipPsjrdcC]/g, '')
                        .replace(/[pPscC]/g, 'i'));
                  const qe = ne(W.structInfo, $, !0);
                  return X ? T._(qe.signature) : qe.signature;
                },
                le = {
                  configurable: !1,
                  enumerable: !1,
                  get: function () {
                    return d.get(this);
                  },
                  set: () =>
                    r("Cannot assign the 'pointer' property of a struct."),
                },
                ue = c(function () {
                  const T = [];
                  for (const W of Object.keys(this.structInfo.members))
                    T.push(this.memberKey(W));
                  return T;
                }),
                ye = new TextDecoder('utf-8'),
                Se = new TextEncoder(),
                Ze =
                  typeof SharedArrayBuffer > 'u'
                    ? function () {}
                    : SharedArrayBuffer,
                A = function (T, W, $) {
                  return ye.decode(
                    T.buffer instanceof Ze ? T.slice(W, $) : T.subarray(W, $),
                  );
                },
                M = function (T, W, $ = !1) {
                  const X = ne(T.structInfo, W, $);
                  return X && X.signature.length === 1 && X.signature[0] === 's'
                    ? X
                    : !1;
                },
                j = function (T) {
                  T.signature !== 's' &&
                    r(
                      'Invalid member type signature for C-string value:',
                      JSON.stringify(T),
                    );
                },
                Y = function (W, $) {
                  const X = ne(W.structInfo, $, !0);
                  j(X);
                  const qe = W[X.key];
                  if (!qe) return null;
                  let ke = qe;
                  const Ae = l();
                  for (; Ae[ke] !== 0; ++ke);
                  return qe === ke ? '' : A(Ae, qe, ke);
                },
                V = function (T, ...W) {
                  T.ondispose
                    ? Array.isArray(T.ondispose) ||
                      (T.ondispose = [T.ondispose])
                    : (T.ondispose = []),
                    T.ondispose.push(...W);
                },
                ge = function (T) {
                  const W = Se.encode(T),
                    $ = g(W.length + 1);
                  $ || r('Allocation error while duplicating string:', T);
                  const X = l();
                  return X.set(W, $), (X[$ + W.length] = 0), $;
                },
                ve = function (T, W, $) {
                  const X = ne(T.structInfo, W, !0);
                  j(X);
                  const qe = ge($);
                  return (T[X.key] = qe), V(T, qe), T;
                },
                Z = function (W, $) {
                  arguments[2] !== c &&
                    r(
                      'Do not call the StructType constructor',
                      'from client-level code.',
                    ),
                    Object.defineProperties(this, {
                      structName: c(W),
                      structInfo: c($),
                    });
                };
              (Z.prototype = Object.create(null, {
                dispose: c(function () {
                  a(this.constructor, this);
                }),
                lookupMember: c(function (T, W = !0) {
                  return ne(this.structInfo, T, W);
                }),
                memberToJsString: c(function (T) {
                  return Y(this, T);
                }),
                memberIsString: c(function (T, W = !0) {
                  return M(this, T, W);
                }),
                memberKey: re,
                memberKeys: ue,
                memberSignature: c(function (T, W = !1) {
                  return ce(this, T, W);
                }),
                memoryDump: c(F),
                pointer: le,
                setMemberCString: c(function (T, W) {
                  return ve(this, T, W);
                }),
              })),
                Object.assign(Z.prototype, {
                  addOnDispose: function (...T) {
                    return V(this, ...T), this;
                  },
                }),
                Object.defineProperties(Z, {
                  allocCString: c(ge),
                  isA: c((T) => T instanceof Z),
                  hasExternalPointer: c((T) => T instanceof Z && !!T[y]),
                  memberKey: re,
                });
              const Qe = (T) =>
                  Number.isFinite(T) || T instanceof (S || Number),
                Ne = function T(W, $, X) {
                  if (!T._) {
                    T._ = { getters: {}, setters: {}, sw: {} };
                    const Re = ['i', 'c', 'C', 'p', 'P', 's', 'f', 'd', 'v()'];
                    ee && Re.push('j'),
                      Re.forEach(function ($e) {
                        (T._.getters[$e] = G($e)),
                          (T._.setters[$e] = p($e)),
                          (T._.sw[$e] = x($e));
                      });
                    const Lr = /^[ipPsjfdcC]$/,
                      Rr = /^[vipPsjfdcC]\([ipPsjfdcC]*\)$/;
                    T.sigCheck = function ($e, Dr, ln, kt) {
                      Object.prototype.hasOwnProperty.call($e, ln) &&
                        r(
                          $e.structName,
                          'already has a property named',
                          ln + '.',
                        ),
                        Lr.test(kt) ||
                          Rr.test(kt) ||
                          r(
                            'Malformed signature for',
                            k($e.structName, Dr) + ':',
                            kt,
                          );
                    };
                  }
                  const qe = W.memberKey($);
                  T.sigCheck(W.prototype, $, qe, X.signature),
                    (X.key = qe),
                    (X.name = $);
                  const ke = z(X.signature),
                    Ae = k(W.prototype.structName, qe),
                    Ie = W.prototype.debugFlags.__flags,
                    rt = Object.create(null);
                  (rt.configurable = !1),
                    (rt.enumerable = !1),
                    (rt.get = function () {
                      Ie.getter &&
                        O(
                          'debug.getter:',
                          T._.getters[ke],
                          'for',
                          L(ke),
                          Ae,
                          '@',
                          this.pointer,
                          '+',
                          X.offset,
                          'sz',
                          X.sizeof,
                        );
                      let Re = new DataView(
                        l().buffer,
                        this.pointer + X.offset,
                        X.sizeof,
                      )[T._.getters[ke]](0, v);
                      return (
                        Ie.getter && O('debug.getter:', Ae, 'result =', Re), Re
                      );
                    }),
                    X.readOnly
                      ? (rt.set = C(W.prototype.structName, qe))
                      : (rt.set = function (Re) {
                          if (
                            (Ie.setter &&
                              O(
                                'debug.setter:',
                                T._.setters[ke],
                                'for',
                                L(ke),
                                Ae,
                                '@',
                                this.pointer,
                                '+',
                                X.offset,
                                'sz',
                                X.sizeof,
                                Re,
                              ),
                            this.pointer ||
                              r(
                                'Cannot set struct property on disposed instance.',
                              ),
                            Re === null)
                          )
                            Re = 0;
                          else
                            for (; !Qe(Re); ) {
                              if (R(X.signature) && Re instanceof Z) {
                                (Re = Re.pointer || 0),
                                  Ie.setter &&
                                    O('debug.setter:', Ae, 'resolved to', Re);
                                break;
                              }
                              r('Invalid value for pointer-type', Ae + '.');
                            }
                          new DataView(
                            l().buffer,
                            this.pointer + X.offset,
                            X.sizeof,
                          )[T._.setters[ke]](0, T._.sw[ke](Re), v);
                        }),
                    Object.defineProperty(W.prototype, qe, rt);
                },
                Fe = function T(W, $) {
                  arguments.length === 1
                    ? (($ = W), (W = $.name))
                    : $.name || ($.name = W),
                    W || r('Struct name is required.');
                  let X = !1;
                  Object.keys($.members).forEach((Ae) => {
                    const Ie = $.members[Ae];
                    Ie.sizeof
                      ? Ie.sizeof === 1
                        ? Ie.signature === 'c' ||
                          Ie.signature === 'C' ||
                          r(
                            'Unexpected sizeof==1 member',
                            k($.name, Ae),
                            'with signature',
                            Ie.signature,
                          )
                        : (Ie.sizeof % 4 !== 0 &&
                            (console.warn(
                              'Invalid struct member description =',
                              Ie,
                              'from',
                              $,
                            ),
                            r(
                              W,
                              'member',
                              Ae,
                              'sizeof is not aligned. sizeof=' + Ie.sizeof,
                            )),
                          Ie.offset % 4 !== 0 &&
                            (console.warn(
                              'Invalid struct member description =',
                              Ie,
                              'from',
                              $,
                            ),
                            r(
                              W,
                              'member',
                              Ae,
                              'offset is not aligned. offset=' + Ie.offset,
                            )))
                      : r(W, 'member', Ae, 'is missing sizeof.'),
                      (!X || X.offset < Ie.offset) && (X = Ie);
                  }),
                    X
                      ? $.sizeof < X.offset + X.sizeof &&
                        r(
                          'Invalid struct config:',
                          W,
                          'max member offset (' + X.offset + ') ',
                          'extends past end of struct (sizeof=' +
                            $.sizeof +
                            ').',
                        )
                      : r('No member property descriptions found.');
                  const qe = c(i.__makeDebugFlags(T.debugFlags)),
                    ke = function Ae(Ie) {
                      this instanceof Ae
                        ? arguments.length
                          ? ((Ie !== (Ie | 0) || Ie <= 0) &&
                              r('Invalid pointer value for', W, 'constructor.'),
                            q(Ae, this, Ie))
                          : q(Ae, this)
                        : r(
                            'The',
                            W,
                            "constructor may only be called via 'new'.",
                          );
                    };
                  return (
                    Object.defineProperties(ke, {
                      debugFlags: qe,
                      isA: c((Ae) => Ae instanceof ke),
                      memberKey: re,
                      memberKeys: ue,
                      methodInfoForKey: c(function (Ae) {}),
                      structInfo: c($),
                      structName: c(W),
                    }),
                    (ke.prototype = new Z(W, $, c)),
                    Object.defineProperties(ke.prototype, {
                      debugFlags: qe,
                      constructor: c(ke),
                    }),
                    Object.keys($.members).forEach((Ae) =>
                      Ne(ke, Ae, $.members[Ae]),
                    ),
                    ke
                  );
                };
              return (
                (Fe.StructType = Z),
                (Fe.config = s),
                (Fe.allocCString = ge),
                Fe.debugFlags ||
                  (Fe.debugFlags = i.__makeDebugFlags(i.debugFlags)),
                Fe
              );
            }),
            globalThis.sqlite3ApiBootstrap.initializers.push(function (t) {
              const s = (...S) => {
                throw new Error(S.join(' '));
              };
              t.SQLite3Error.toss;
              const r = t.capi,
                i = t.wasm,
                l = t.util;
              if (
                (globalThis.WhWasmUtilInstaller(i),
                delete globalThis.WhWasmUtilInstaller,
                (i.bindingSignatures = [
                  [
                    'sqlite3_aggregate_context',
                    'void*',
                    'sqlite3_context*',
                    'int',
                  ],
                  ['sqlite3_bind_double', 'int', 'sqlite3_stmt*', 'int', 'f64'],
                  ['sqlite3_bind_int', 'int', 'sqlite3_stmt*', 'int', 'int'],
                  ['sqlite3_bind_null', void 0, 'sqlite3_stmt*', 'int'],
                  ['sqlite3_bind_parameter_count', 'int', 'sqlite3_stmt*'],
                  [
                    'sqlite3_bind_parameter_index',
                    'int',
                    'sqlite3_stmt*',
                    'string',
                  ],
                  [
                    'sqlite3_bind_pointer',
                    'int',
                    'sqlite3_stmt*',
                    'int',
                    '*',
                    'string:static',
                    '*',
                  ],
                  [
                    'sqlite3_busy_handler',
                    'int',
                    [
                      'sqlite3*',
                      new i.xWrap.FuncPtrAdapter({
                        signature: 'i(pi)',
                        contextKey: (S, f) => S[0],
                      }),
                      '*',
                    ],
                  ],
                  ['sqlite3_busy_timeout', 'int', 'sqlite3*', 'int'],
                  ['sqlite3_changes', 'int', 'sqlite3*'],
                  ['sqlite3_clear_bindings', 'int', 'sqlite3_stmt*'],
                  ['sqlite3_collation_needed', 'int', 'sqlite3*', '*', '*'],
                  ['sqlite3_column_blob', '*', 'sqlite3_stmt*', 'int'],
                  ['sqlite3_column_bytes', 'int', 'sqlite3_stmt*', 'int'],
                  ['sqlite3_column_count', 'int', 'sqlite3_stmt*'],
                  ['sqlite3_column_double', 'f64', 'sqlite3_stmt*', 'int'],
                  ['sqlite3_column_int', 'int', 'sqlite3_stmt*', 'int'],
                  ['sqlite3_column_name', 'string', 'sqlite3_stmt*', 'int'],
                  ['sqlite3_column_text', 'string', 'sqlite3_stmt*', 'int'],
                  ['sqlite3_column_type', 'int', 'sqlite3_stmt*', 'int'],
                  [
                    'sqlite3_column_value',
                    'sqlite3_value*',
                    'sqlite3_stmt*',
                    'int',
                  ],
                  [
                    'sqlite3_commit_hook',
                    'void*',
                    [
                      'sqlite3*',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'sqlite3_commit_hook',
                        signature: 'i(p)',
                        contextKey: (S) => S[0],
                      }),
                      '*',
                    ],
                  ],
                  ['sqlite3_compileoption_get', 'string', 'int'],
                  ['sqlite3_compileoption_used', 'int', 'string'],
                  ['sqlite3_complete', 'int', 'string:flexible'],
                  ['sqlite3_context_db_handle', 'sqlite3*', 'sqlite3_context*'],
                  ['sqlite3_data_count', 'int', 'sqlite3_stmt*'],
                  ['sqlite3_db_filename', 'string', 'sqlite3*', 'string'],
                  ['sqlite3_db_handle', 'sqlite3*', 'sqlite3_stmt*'],
                  ['sqlite3_db_name', 'string', 'sqlite3*', 'int'],
                  [
                    'sqlite3_db_status',
                    'int',
                    'sqlite3*',
                    'int',
                    '*',
                    '*',
                    'int',
                  ],
                  ['sqlite3_errcode', 'int', 'sqlite3*'],
                  ['sqlite3_errmsg', 'string', 'sqlite3*'],
                  ['sqlite3_error_offset', 'int', 'sqlite3*'],
                  ['sqlite3_errstr', 'string', 'int'],
                  [
                    'sqlite3_exec',
                    'int',
                    [
                      'sqlite3*',
                      'string:flexible',
                      new i.xWrap.FuncPtrAdapter({
                        signature: 'i(pipp)',
                        bindScope: 'transient',
                        callProxy: (S) => {
                          let f;
                          return (m, w, v, b) => {
                            try {
                              const R = i.cArgvToJs(w, v);
                              return f || (f = i.cArgvToJs(w, b)), S(R, f) | 0;
                            } catch (R) {
                              return R.resultCode || r.SQLITE_ERROR;
                            }
                          };
                        },
                      }),
                      '*',
                      '**',
                    ],
                  ],
                  ['sqlite3_expanded_sql', 'string', 'sqlite3_stmt*'],
                  ['sqlite3_extended_errcode', 'int', 'sqlite3*'],
                  ['sqlite3_extended_result_codes', 'int', 'sqlite3*', 'int'],
                  [
                    'sqlite3_file_control',
                    'int',
                    'sqlite3*',
                    'string',
                    'int',
                    '*',
                  ],
                  ['sqlite3_finalize', 'int', 'sqlite3_stmt*'],
                  ['sqlite3_free', void 0, '*'],
                  ['sqlite3_get_auxdata', '*', 'sqlite3_context*', 'int'],
                  ['sqlite3_initialize', void 0],
                  ['sqlite3_keyword_count', 'int'],
                  ['sqlite3_keyword_name', 'int', ['int', '**', '*']],
                  ['sqlite3_keyword_check', 'int', ['string', 'int']],
                  ['sqlite3_libversion', 'string'],
                  ['sqlite3_libversion_number', 'int'],
                  ['sqlite3_limit', 'int', ['sqlite3*', 'int', 'int']],
                  ['sqlite3_malloc', '*', 'int'],
                  ['sqlite3_open', 'int', 'string', '*'],
                  ['sqlite3_open_v2', 'int', 'string', '*', 'int', 'string'],
                  [
                    'sqlite3_progress_handler',
                    void 0,
                    [
                      'sqlite3*',
                      'int',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xProgressHandler',
                        signature: 'i(p)',
                        bindScope: 'context',
                        contextKey: (S, f) => S[0],
                      }),
                      '*',
                    ],
                  ],
                  ['sqlite3_realloc', '*', '*', 'int'],
                  ['sqlite3_reset', 'int', 'sqlite3_stmt*'],
                  [
                    'sqlite3_result_blob',
                    void 0,
                    'sqlite3_context*',
                    '*',
                    'int',
                    '*',
                  ],
                  ['sqlite3_result_double', void 0, 'sqlite3_context*', 'f64'],
                  [
                    'sqlite3_result_error',
                    void 0,
                    'sqlite3_context*',
                    'string',
                    'int',
                  ],
                  [
                    'sqlite3_result_error_code',
                    void 0,
                    'sqlite3_context*',
                    'int',
                  ],
                  ['sqlite3_result_error_nomem', void 0, 'sqlite3_context*'],
                  ['sqlite3_result_error_toobig', void 0, 'sqlite3_context*'],
                  ['sqlite3_result_int', void 0, 'sqlite3_context*', 'int'],
                  ['sqlite3_result_null', void 0, 'sqlite3_context*'],
                  [
                    'sqlite3_result_pointer',
                    void 0,
                    'sqlite3_context*',
                    '*',
                    'string:static',
                    '*',
                  ],
                  ['sqlite3_result_subtype', void 0, 'sqlite3_value*', 'int'],
                  [
                    'sqlite3_result_text',
                    void 0,
                    'sqlite3_context*',
                    'string',
                    'int',
                    '*',
                  ],
                  [
                    'sqlite3_result_zeroblob',
                    void 0,
                    'sqlite3_context*',
                    'int',
                  ],
                  [
                    'sqlite3_rollback_hook',
                    'void*',
                    [
                      'sqlite3*',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'sqlite3_rollback_hook',
                        signature: 'v(p)',
                        contextKey: (S) => S[0],
                      }),
                      '*',
                    ],
                  ],
                  [
                    'sqlite3_set_authorizer',
                    'int',
                    [
                      'sqlite3*',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'sqlite3_set_authorizer::xAuth',
                        signature: 'i(pissss)',
                        contextKey: (S, f) => S[0],
                        callProxy: (S) => (f, m, w, v, b, R) => {
                          try {
                            return (
                              (w = w && i.cstrToJs(w)),
                              (v = v && i.cstrToJs(v)),
                              (b = b && i.cstrToJs(b)),
                              (R = R && i.cstrToJs(R)),
                              S(f, m, w, v, b, R) || 0
                            );
                          } catch (z) {
                            return z.resultCode || r.SQLITE_ERROR;
                          }
                        },
                      }),
                      '*',
                    ],
                  ],
                  [
                    'sqlite3_set_auxdata',
                    void 0,
                    [
                      'sqlite3_context*',
                      'int',
                      '*',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xDestroyAuxData',
                        signature: 'v(*)',
                        contextKey: (S, f) => S[0],
                      }),
                    ],
                  ],
                  ['sqlite3_shutdown', void 0],
                  ['sqlite3_sourceid', 'string'],
                  ['sqlite3_sql', 'string', 'sqlite3_stmt*'],
                  ['sqlite3_status', 'int', 'int', '*', '*', 'int'],
                  ['sqlite3_step', 'int', 'sqlite3_stmt*'],
                  ['sqlite3_stmt_isexplain', 'int', ['sqlite3_stmt*']],
                  ['sqlite3_stmt_readonly', 'int', ['sqlite3_stmt*']],
                  ['sqlite3_stmt_status', 'int', 'sqlite3_stmt*', 'int', 'int'],
                  ['sqlite3_strglob', 'int', 'string', 'string'],
                  ['sqlite3_stricmp', 'int', 'string', 'string'],
                  ['sqlite3_strlike', 'int', 'string', 'string', 'int'],
                  ['sqlite3_strnicmp', 'int', 'string', 'string', 'int'],
                  [
                    'sqlite3_table_column_metadata',
                    'int',
                    'sqlite3*',
                    'string',
                    'string',
                    'string',
                    '**',
                    '**',
                    '*',
                    '*',
                    '*',
                  ],
                  ['sqlite3_total_changes', 'int', 'sqlite3*'],
                  [
                    'sqlite3_trace_v2',
                    'int',
                    [
                      'sqlite3*',
                      'int',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'sqlite3_trace_v2::callback',
                        signature: 'i(ippp)',
                        contextKey: (S, f) => S[0],
                      }),
                      '*',
                    ],
                  ],
                  ['sqlite3_txn_state', 'int', ['sqlite3*', 'string']],
                  [
                    'sqlite3_uri_boolean',
                    'int',
                    'sqlite3_filename',
                    'string',
                    'int',
                  ],
                  ['sqlite3_uri_key', 'string', 'sqlite3_filename', 'int'],
                  [
                    'sqlite3_uri_parameter',
                    'string',
                    'sqlite3_filename',
                    'string',
                  ],
                  ['sqlite3_user_data', 'void*', 'sqlite3_context*'],
                  ['sqlite3_value_blob', '*', 'sqlite3_value*'],
                  ['sqlite3_value_bytes', 'int', 'sqlite3_value*'],
                  ['sqlite3_value_double', 'f64', 'sqlite3_value*'],
                  ['sqlite3_value_dup', 'sqlite3_value*', 'sqlite3_value*'],
                  ['sqlite3_value_free', void 0, 'sqlite3_value*'],
                  ['sqlite3_value_frombind', 'int', 'sqlite3_value*'],
                  ['sqlite3_value_int', 'int', 'sqlite3_value*'],
                  ['sqlite3_value_nochange', 'int', 'sqlite3_value*'],
                  ['sqlite3_value_numeric_type', 'int', 'sqlite3_value*'],
                  [
                    'sqlite3_value_pointer',
                    '*',
                    'sqlite3_value*',
                    'string:static',
                  ],
                  ['sqlite3_value_subtype', 'int', 'sqlite3_value*'],
                  ['sqlite3_value_text', 'string', 'sqlite3_value*'],
                  ['sqlite3_value_type', 'int', 'sqlite3_value*'],
                  ['sqlite3_vfs_find', '*', 'string'],
                  ['sqlite3_vfs_register', 'int', 'sqlite3_vfs*', 'int'],
                  ['sqlite3_vfs_unregister', 'int', 'sqlite3_vfs*'],
                ]),
                i.exports.sqlite3_activate_see instanceof Function &&
                  i.bindingSignatures.push(
                    ['sqlite3_key', 'int', 'sqlite3*', 'string', 'int'],
                    ['sqlite3_key_v2', 'int', 'sqlite3*', 'string', '*', 'int'],
                    ['sqlite3_rekey', 'int', 'sqlite3*', 'string', 'int'],
                    [
                      'sqlite3_rekey_v2',
                      'int',
                      'sqlite3*',
                      'string',
                      '*',
                      'int',
                    ],
                    ['sqlite3_activate_see', void 0, 'string'],
                  ),
                (i.bindingSignatures.int64 = [
                  [
                    'sqlite3_bind_int64',
                    'int',
                    ['sqlite3_stmt*', 'int', 'i64'],
                  ],
                  ['sqlite3_changes64', 'i64', ['sqlite3*']],
                  ['sqlite3_column_int64', 'i64', ['sqlite3_stmt*', 'int']],
                  [
                    'sqlite3_create_module',
                    'int',
                    ['sqlite3*', 'string', 'sqlite3_module*', '*'],
                  ],
                  [
                    'sqlite3_create_module_v2',
                    'int',
                    ['sqlite3*', 'string', 'sqlite3_module*', '*', '*'],
                  ],
                  [
                    'sqlite3_declare_vtab',
                    'int',
                    ['sqlite3*', 'string:flexible'],
                  ],
                  [
                    'sqlite3_deserialize',
                    'int',
                    'sqlite3*',
                    'string',
                    '*',
                    'i64',
                    'i64',
                    'int',
                  ],
                  ['sqlite3_drop_modules', 'int', ['sqlite3*', '**']],
                  ['sqlite3_last_insert_rowid', 'i64', ['sqlite3*']],
                  ['sqlite3_malloc64', '*', 'i64'],
                  ['sqlite3_msize', 'i64', '*'],
                  [
                    'sqlite3_overload_function',
                    'int',
                    ['sqlite3*', 'string', 'int'],
                  ],
                  ['sqlite3_preupdate_blobwrite', 'int', 'sqlite3*'],
                  ['sqlite3_preupdate_count', 'int', 'sqlite3*'],
                  ['sqlite3_preupdate_depth', 'int', 'sqlite3*'],
                  [
                    'sqlite3_preupdate_hook',
                    '*',
                    [
                      'sqlite3*',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'sqlite3_preupdate_hook',
                        signature: 'v(ppippjj)',
                        contextKey: (S) => S[0],
                        callProxy: (S) => (f, m, w, v, b, R, z) => {
                          S(f, m, w, i.cstrToJs(v), i.cstrToJs(b), R, z);
                        },
                      }),
                      '*',
                    ],
                  ],
                  ['sqlite3_preupdate_new', 'int', ['sqlite3*', 'int', '**']],
                  ['sqlite3_preupdate_old', 'int', ['sqlite3*', 'int', '**']],
                  ['sqlite3_realloc64', '*', '*', 'i64'],
                  ['sqlite3_result_int64', void 0, '*', 'i64'],
                  ['sqlite3_result_zeroblob64', 'int', '*', 'i64'],
                  ['sqlite3_serialize', '*', 'sqlite3*', 'string', '*', 'int'],
                  [
                    'sqlite3_set_last_insert_rowid',
                    void 0,
                    ['sqlite3*', 'i64'],
                  ],
                  ['sqlite3_status64', 'int', 'int', '*', '*', 'int'],
                  ['sqlite3_total_changes64', 'i64', ['sqlite3*']],
                  [
                    'sqlite3_update_hook',
                    '*',
                    [
                      'sqlite3*',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'sqlite3_update_hook',
                        signature: 'v(iippj)',
                        contextKey: (S) => S[0],
                        callProxy: (S) => (f, m, w, v, b) => {
                          S(f, m, i.cstrToJs(w), i.cstrToJs(v), b);
                        },
                      }),
                      '*',
                    ],
                  ],
                  [
                    'sqlite3_uri_int64',
                    'i64',
                    ['sqlite3_filename', 'string', 'i64'],
                  ],
                  ['sqlite3_value_int64', 'i64', 'sqlite3_value*'],
                  [
                    'sqlite3_vtab_collation',
                    'string',
                    'sqlite3_index_info*',
                    'int',
                  ],
                  ['sqlite3_vtab_distinct', 'int', 'sqlite3_index_info*'],
                  [
                    'sqlite3_vtab_in',
                    'int',
                    'sqlite3_index_info*',
                    'int',
                    'int',
                  ],
                  ['sqlite3_vtab_in_first', 'int', 'sqlite3_value*', '**'],
                  ['sqlite3_vtab_in_next', 'int', 'sqlite3_value*', '**'],
                  ['sqlite3_vtab_nochange', 'int', 'sqlite3_context*'],
                  ['sqlite3_vtab_on_conflict', 'int', 'sqlite3*'],
                  [
                    'sqlite3_vtab_rhs_value',
                    'int',
                    'sqlite3_index_info*',
                    'int',
                    '**',
                  ],
                ]),
                i.bigIntEnabled && i.exports.sqlite3changegroup_add)
              ) {
                const S = {
                  signature: 'i(ps)',
                  callProxy: (f) => (m, w) => {
                    try {
                      return f(m, i.cstrToJs(w)) | 0;
                    } catch (v) {
                      return v.resultCode || r.SQLITE_ERROR;
                    }
                  },
                };
                i.bindingSignatures.int64.push(
                  [
                    'sqlite3changegroup_add',
                    'int',
                    ['sqlite3_changegroup*', 'int', 'void*'],
                  ],
                  [
                    'sqlite3changegroup_add_strm',
                    'int',
                    [
                      'sqlite3_changegroup*',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xInput',
                        signature: 'i(ppp)',
                        bindScope: 'transient',
                      }),
                      'void*',
                    ],
                  ],
                  [
                    'sqlite3changegroup_delete',
                    void 0,
                    ['sqlite3_changegroup*'],
                  ],
                  ['sqlite3changegroup_new', 'int', ['**']],
                  [
                    'sqlite3changegroup_output',
                    'int',
                    ['sqlite3_changegroup*', 'int*', '**'],
                  ],
                  [
                    'sqlite3changegroup_output_strm',
                    'int',
                    [
                      'sqlite3_changegroup*',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xOutput',
                        signature: 'i(ppi)',
                        bindScope: 'transient',
                      }),
                      'void*',
                    ],
                  ],
                  [
                    'sqlite3changeset_apply',
                    'int',
                    [
                      'sqlite3*',
                      'int',
                      'void*',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xFilter',
                        bindScope: 'transient',
                        ...S,
                      }),
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xConflict',
                        signature: 'i(pip)',
                        bindScope: 'transient',
                      }),
                      'void*',
                    ],
                  ],
                  [
                    'sqlite3changeset_apply_strm',
                    'int',
                    [
                      'sqlite3*',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xInput',
                        signature: 'i(ppp)',
                        bindScope: 'transient',
                      }),
                      'void*',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xFilter',
                        bindScope: 'transient',
                        ...S,
                      }),
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xConflict',
                        signature: 'i(pip)',
                        bindScope: 'transient',
                      }),
                      'void*',
                    ],
                  ],
                  [
                    'sqlite3changeset_apply_v2',
                    'int',
                    [
                      'sqlite3*',
                      'int',
                      'void*',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xFilter',
                        bindScope: 'transient',
                        ...S,
                      }),
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xConflict',
                        signature: 'i(pip)',
                        bindScope: 'transient',
                      }),
                      'void*',
                      '**',
                      'int*',
                      'int',
                    ],
                  ],
                  [
                    'sqlite3changeset_apply_v2_strm',
                    'int',
                    [
                      'sqlite3*',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xInput',
                        signature: 'i(ppp)',
                        bindScope: 'transient',
                      }),
                      'void*',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xFilter',
                        bindScope: 'transient',
                        ...S,
                      }),
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xConflict',
                        signature: 'i(pip)',
                        bindScope: 'transient',
                      }),
                      'void*',
                      '**',
                      'int*',
                      'int',
                    ],
                  ],
                  [
                    'sqlite3changeset_concat',
                    'int',
                    ['int', 'void*', 'int', 'void*', 'int*', '**'],
                  ],
                  [
                    'sqlite3changeset_concat_strm',
                    'int',
                    [
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xInputA',
                        signature: 'i(ppp)',
                        bindScope: 'transient',
                      }),
                      'void*',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xInputB',
                        signature: 'i(ppp)',
                        bindScope: 'transient',
                      }),
                      'void*',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xOutput',
                        signature: 'i(ppi)',
                        bindScope: 'transient',
                      }),
                      'void*',
                    ],
                  ],
                  [
                    'sqlite3changeset_conflict',
                    'int',
                    ['sqlite3_changeset_iter*', 'int', '**'],
                  ],
                  [
                    'sqlite3changeset_finalize',
                    'int',
                    ['sqlite3_changeset_iter*'],
                  ],
                  [
                    'sqlite3changeset_fk_conflicts',
                    'int',
                    ['sqlite3_changeset_iter*', 'int*'],
                  ],
                  [
                    'sqlite3changeset_invert',
                    'int',
                    ['int', 'void*', 'int*', '**'],
                  ],
                  [
                    'sqlite3changeset_invert_strm',
                    'int',
                    [
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xInput',
                        signature: 'i(ppp)',
                        bindScope: 'transient',
                      }),
                      'void*',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xOutput',
                        signature: 'i(ppi)',
                        bindScope: 'transient',
                      }),
                      'void*',
                    ],
                  ],
                  [
                    'sqlite3changeset_new',
                    'int',
                    ['sqlite3_changeset_iter*', 'int', '**'],
                  ],
                  ['sqlite3changeset_next', 'int', ['sqlite3_changeset_iter*']],
                  [
                    'sqlite3changeset_old',
                    'int',
                    ['sqlite3_changeset_iter*', 'int', '**'],
                  ],
                  [
                    'sqlite3changeset_op',
                    'int',
                    ['sqlite3_changeset_iter*', '**', 'int*', 'int*', 'int*'],
                  ],
                  [
                    'sqlite3changeset_pk',
                    'int',
                    ['sqlite3_changeset_iter*', '**', 'int*'],
                  ],
                  ['sqlite3changeset_start', 'int', ['**', 'int', '*']],
                  [
                    'sqlite3changeset_start_strm',
                    'int',
                    [
                      '**',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xInput',
                        signature: 'i(ppp)',
                        bindScope: 'transient',
                      }),
                      'void*',
                    ],
                  ],
                  [
                    'sqlite3changeset_start_v2',
                    'int',
                    ['**', 'int', '*', 'int'],
                  ],
                  [
                    'sqlite3changeset_start_v2_strm',
                    'int',
                    [
                      '**',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xInput',
                        signature: 'i(ppp)',
                        bindScope: 'transient',
                      }),
                      'void*',
                      'int',
                    ],
                  ],
                  [
                    'sqlite3session_attach',
                    'int',
                    ['sqlite3_session*', 'string'],
                  ],
                  [
                    'sqlite3session_changeset',
                    'int',
                    ['sqlite3_session*', 'int*', '**'],
                  ],
                  [
                    'sqlite3session_changeset_size',
                    'i64',
                    ['sqlite3_session*'],
                  ],
                  [
                    'sqlite3session_changeset_strm',
                    'int',
                    [
                      'sqlite3_session*',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xOutput',
                        signature: 'i(ppp)',
                        bindScope: 'transient',
                      }),
                      'void*',
                    ],
                  ],
                  ['sqlite3session_config', 'int', ['int', 'void*']],
                  [
                    'sqlite3session_create',
                    'int',
                    ['sqlite3*', 'string', '**'],
                  ],
                  [
                    'sqlite3session_diff',
                    'int',
                    ['sqlite3_session*', 'string', 'string', '**'],
                  ],
                  ['sqlite3session_enable', 'int', ['sqlite3_session*', 'int']],
                  [
                    'sqlite3session_indirect',
                    'int',
                    ['sqlite3_session*', 'int'],
                  ],
                  ['sqlite3session_isempty', 'int', ['sqlite3_session*']],
                  ['sqlite3session_memory_used', 'i64', ['sqlite3_session*']],
                  [
                    'sqlite3session_object_config',
                    'int',
                    ['sqlite3_session*', 'int', 'void*'],
                  ],
                  [
                    'sqlite3session_patchset',
                    'int',
                    ['sqlite3_session*', '*', '**'],
                  ],
                  [
                    'sqlite3session_patchset_strm',
                    'int',
                    [
                      'sqlite3_session*',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xOutput',
                        signature: 'i(ppp)',
                        bindScope: 'transient',
                      }),
                      'void*',
                    ],
                  ],
                  [
                    'sqlite3session_table_filter',
                    void 0,
                    [
                      'sqlite3_session*',
                      new i.xWrap.FuncPtrAdapter({
                        name: 'xFilter',
                        ...S,
                        contextKey: (f, m) => f[0],
                      }),
                      '*',
                    ],
                  ],
                );
              }
              (i.bindingSignatures.wasm = [
                ['sqlite3_wasm_db_reset', 'int', 'sqlite3*'],
                ['sqlite3_wasm_db_vfs', 'sqlite3_vfs*', 'sqlite3*', 'string'],
                [
                  'sqlite3_wasm_vfs_create_file',
                  'int',
                  'sqlite3_vfs*',
                  'string',
                  '*',
                  'int',
                ],
                ['sqlite3_wasm_vfs_unlink', 'int', 'sqlite3_vfs*', 'string'],
              ]),
                (t.StructBinder = globalThis.Jaccwabyt({
                  heap: i.heap8u,
                  alloc: i.alloc,
                  dealloc: i.dealloc,
                  bigIntEnabled: i.bigIntEnabled,
                  memberPrefix: '$',
                })),
                delete globalThis.Jaccwabyt;
              {
                const S = i.xWrap.argAdapter('string');
                i.xWrap.argAdapter('string:flexible', (b) =>
                  S(l.flexibleString(b)),
                ),
                  i.xWrap.argAdapter(
                    'string:static',
                    function (b) {
                      return i.isPtr(b)
                        ? b
                        : ((b = '' + b),
                          this[b] || (this[b] = i.allocCString(b)));
                    }.bind(Object.create(null)),
                  );
                const f = i.xWrap.argAdapter('*'),
                  m = function () {};
                i.xWrap.argAdapter('sqlite3_filename', f)(
                  'sqlite3_context*',
                  f,
                )('sqlite3_value*', f)('void*', f)('sqlite3_changegroup*', f)(
                  'sqlite3_changeset_iter*',
                  f,
                )('sqlite3_session*', f)('sqlite3_stmt*', (b) =>
                  f(b instanceof (t?.oo1?.Stmt || m) ? b.pointer : b),
                )('sqlite3*', (b) =>
                  f(b instanceof (t?.oo1?.DB || m) ? b.pointer : b),
                )('sqlite3_index_info*', (b) =>
                  f(b instanceof (r.sqlite3_index_info || m) ? b.pointer : b),
                )('sqlite3_module*', (b) =>
                  f(b instanceof (r.sqlite3_module || m) ? b.pointer : b),
                )('sqlite3_vfs*', (b) =>
                  typeof b == 'string'
                    ? r.sqlite3_vfs_find(b) ||
                      t.SQLite3Error.toss(
                        r.SQLITE_NOTFOUND,
                        'Unknown sqlite3_vfs name:',
                        b,
                      )
                    : f(b instanceof (r.sqlite3_vfs || m) ? b.pointer : b),
                );
                const w = i.xWrap.resultAdapter('*');
                i.xWrap.resultAdapter('sqlite3*', w)('sqlite3_context*', w)(
                  'sqlite3_stmt*',
                  w,
                )('sqlite3_value*', w)('sqlite3_vfs*', w)('void*', w);
                for (const b of i.bindingSignatures)
                  r[b[0]] = i.xWrap.apply(null, b);
                for (const b of i.bindingSignatures.wasm)
                  i[b[0]] = i.xWrap.apply(null, b);
                const v = function (b) {
                  return () =>
                    s(
                      b + '() is unavailable due to lack',
                      'of BigInt support in this build.',
                    );
                };
                for (const b of i.bindingSignatures.int64)
                  r[b[0]] = i.bigIntEnabled ? i.xWrap.apply(null, b) : v(b[0]);
                if (
                  (delete i.bindingSignatures, i.exports.sqlite3_wasm_db_error)
                ) {
                  const b = i.xWrap(
                    'sqlite3_wasm_db_error',
                    'int',
                    'sqlite3*',
                    'int',
                    'string',
                  );
                  l.sqlite3_wasm_db_error = function (R, z, L) {
                    return (
                      z instanceof t.WasmAllocError
                        ? ((z = r.SQLITE_NOMEM), (L = 0))
                        : z instanceof Error &&
                          ((L = L || '' + z),
                          (z = z.resultCode || r.SQLITE_ERROR)),
                      R ? b(R, z, L) : z
                    );
                  };
                } else
                  l.sqlite3_wasm_db_error = function (b, R, z) {
                    return (
                      console.warn(
                        'sqlite3_wasm_db_error() is not exported.',
                        arguments,
                      ),
                      R
                    );
                  };
              }
              {
                const S = i.xCall('sqlite3_wasm_enum_json');
                S ||
                  s(
                    "Maintenance required: increase sqlite3_wasm_enum_json()'s",
                    'static buffer size!',
                  ),
                  (i.ctype = JSON.parse(i.cstrToJs(S)));
                const f = [
                  'access',
                  'authorizer',
                  'blobFinalizers',
                  'changeset',
                  'config',
                  'dataTypes',
                  'dbConfig',
                  'dbStatus',
                  'encodings',
                  'fcntl',
                  'flock',
                  'ioCap',
                  'limits',
                  'openFlags',
                  'prepareFlags',
                  'resultCodes',
                  'sqlite3Status',
                  'stmtStatus',
                  'syncFlags',
                  'trace',
                  'txnState',
                  'udfFlags',
                  'version',
                ];
                i.bigIntEnabled && f.push('serialize', 'session', 'vtab');
                for (const v of f)
                  for (const b of Object.entries(i.ctype[v])) r[b[0]] = b[1];
                i.functionEntry(r.SQLITE_WASM_DEALLOC) ||
                  s(
                    'Internal error: cannot resolve exported function',
                    'entry SQLITE_WASM_DEALLOC (==' +
                      r.SQLITE_WASM_DEALLOC +
                      ').',
                  );
                const m = Object.create(null);
                for (const v of ['resultCodes'])
                  for (const b of Object.entries(i.ctype[v])) m[b[1]] = b[0];
                r.sqlite3_js_rc_str = (v) => m[v];
                const w = Object.assign(Object.create(null), {
                  WasmTestStruct: !0,
                  sqlite3_kvvfs_methods: !l.isUIThread(),
                  sqlite3_index_info: !i.bigIntEnabled,
                  sqlite3_index_constraint: !i.bigIntEnabled,
                  sqlite3_index_orderby: !i.bigIntEnabled,
                  sqlite3_index_constraint_usage: !i.bigIntEnabled,
                });
                for (const v of i.ctype.structs)
                  w[v.name] || (r[v.name] = t.StructBinder(v));
                if (r.sqlite3_index_info) {
                  for (const v of [
                    'sqlite3_index_constraint',
                    'sqlite3_index_orderby',
                    'sqlite3_index_constraint_usage',
                  ])
                    (r.sqlite3_index_info[v] = r[v]), delete r[v];
                  r.sqlite3_vtab_config = i.xWrap(
                    'sqlite3_wasm_vtab_config',
                    'int',
                    ['sqlite3*', 'int', 'int'],
                  );
                }
              }
              const g = (S, f, m) =>
                  t.util.sqlite3_wasm_db_error(
                    S,
                    r.SQLITE_MISUSE,
                    f +
                      '() requires ' +
                      m +
                      ' argument' +
                      (m === 1 ? '' : 's') +
                      '.',
                  ),
                E = (S) =>
                  l.sqlite3_wasm_db_error(
                    S,
                    r.SQLITE_FORMAT,
                    'SQLITE_UTF8 is the only supported encoding.',
                  ),
                O = (S) => i.xWrap.argAdapter('sqlite3*')(S),
                B = (S) => (i.isPtr(S) ? i.cstrToJs(S) : S),
                H = function (S, f) {
                  S = O(S);
                  let m = this.dbMap.get(S);
                  if (f)
                    !m && f > 0 && this.dbMap.set(S, (m = Object.create(null)));
                  else return this.dbMap.delete(S), m;
                  return m;
                }.bind(
                  Object.assign(Object.create(null), { dbMap: new Map() }),
                );
              (H.addCollation = function (S, f) {
                const m = H(S, 1);
                m.collation || (m.collation = new Set()),
                  m.collation.add(B(f).toLowerCase());
              }),
                (H._addUDF = function (S, f, m, w) {
                  f = B(f).toLowerCase();
                  let v = w.get(f);
                  v || w.set(f, (v = new Set())), v.add(m < 0 ? -1 : m);
                }),
                (H.addFunction = function (S, f, m) {
                  const w = H(S, 1);
                  w.udf || (w.udf = new Map()), this._addUDF(S, f, m, w.udf);
                }),
                (H.addWindowFunc = function (S, f, m) {
                  const w = H(S, 1);
                  w.wudf || (w.wudf = new Map()), this._addUDF(S, f, m, w.wudf);
                }),
                (H.cleanup = function (S) {
                  S = O(S);
                  const f = [S];
                  for (const v of [
                    'sqlite3_busy_handler',
                    'sqlite3_commit_hook',
                    'sqlite3_preupdate_hook',
                    'sqlite3_progress_handler',
                    'sqlite3_rollback_hook',
                    'sqlite3_set_authorizer',
                    'sqlite3_trace_v2',
                    'sqlite3_update_hook',
                  ]) {
                    const b = i.exports[v];
                    f.length = b.length;
                    try {
                      r[v](...f);
                    } catch (R) {
                      console.warn(
                        'close-time call of',
                        v + '(',
                        f,
                        ') threw:',
                        R,
                      );
                    }
                  }
                  const m = H(S, 0);
                  if (!m) return;
                  if (m.collation) {
                    for (const v of m.collation)
                      try {
                        r.sqlite3_create_collation_v2(
                          S,
                          v,
                          r.SQLITE_UTF8,
                          0,
                          0,
                          0,
                        );
                      } catch {}
                    delete m.collation;
                  }
                  let w;
                  for (w = 0; w < 2; ++w) {
                    const v = w ? m.wudf : m.udf;
                    if (!v) continue;
                    const b = w
                      ? r.sqlite3_create_window_function
                      : r.sqlite3_create_function_v2;
                    for (const R of v) {
                      const z = R[0],
                        L = R[1],
                        U = [S, z, 0, r.SQLITE_UTF8, 0, 0, 0, 0, 0];
                      w && U.push(0);
                      for (const G of L)
                        try {
                          (U[2] = G), b.apply(null, U);
                        } catch {}
                      L.clear();
                    }
                    v.clear();
                  }
                  delete m.udf, delete m.wudf;
                });
              {
                const S = i.xWrap('sqlite3_close_v2', 'int', 'sqlite3*');
                r.sqlite3_close_v2 = function (f) {
                  if (arguments.length !== 1)
                    return g(f, 'sqlite3_close_v2', 1);
                  if (f)
                    try {
                      H.cleanup(f);
                    } catch {}
                  return S(f);
                };
              }
              if (r.sqlite3session_table_filter) {
                const S = i.xWrap('sqlite3session_delete', void 0, [
                  'sqlite3_session*',
                ]);
                r.sqlite3session_delete = function (f) {
                  if (arguments.length !== 1)
                    return g(pDb, 'sqlite3session_delete', 1);
                  f && r.sqlite3session_table_filter(f, 0, 0), S(f);
                };
              }
              {
                const S = (m, w) =>
                    'argv[' +
                    w +
                    ']:' +
                    m[0] +
                    ':' +
                    i.cstrToJs(m[1]).toLowerCase(),
                  f = i.xWrap('sqlite3_create_collation_v2', 'int', [
                    'sqlite3*',
                    'string',
                    'int',
                    '*',
                    new i.xWrap.FuncPtrAdapter({
                      name: 'xCompare',
                      signature: 'i(pipip)',
                      contextKey: S,
                    }),
                    new i.xWrap.FuncPtrAdapter({
                      name: 'xDestroy',
                      signature: 'v(p)',
                      contextKey: S,
                    }),
                  ]);
                (r.sqlite3_create_collation_v2 = function (m, w, v, b, R, z) {
                  if (arguments.length !== 6)
                    return g(m, 'sqlite3_create_collation_v2', 6);
                  if (!(v & 15)) v |= r.SQLITE_UTF8;
                  else if (r.SQLITE_UTF8 !== (v & 15)) return E(m);
                  try {
                    const L = f(m, w, v, b, R, z);
                    return (
                      L === 0 && R instanceof Function && H.addCollation(m, w),
                      L
                    );
                  } catch (L) {
                    return l.sqlite3_wasm_db_error(m, L);
                  }
                }),
                  (r.sqlite3_create_collation = (m, w, v, b, R) =>
                    arguments.length === 5
                      ? r.sqlite3_create_collation_v2(m, w, v, b, R, 0)
                      : g(m, 'sqlite3_create_collation', 5));
              }
              {
                const S = function (v, b) {
                    return (
                      v[0] +
                      ':' +
                      (v[2] < 0 ? -1 : v[2]) +
                      ':' +
                      b +
                      ':' +
                      i.cstrToJs(v[1]).toLowerCase()
                    );
                  },
                  f = Object.assign(Object.create(null), {
                    xInverseAndStep: {
                      signature: 'v(pip)',
                      contextKey: S,
                      callProxy: (v) => (b, R, z) => {
                        try {
                          v(b, ...r.sqlite3_values_to_js(R, z));
                        } catch (L) {
                          r.sqlite3_result_error_js(b, L);
                        }
                      },
                    },
                    xFinalAndValue: {
                      signature: 'v(p)',
                      contextKey: S,
                      callProxy: (v) => (b) => {
                        try {
                          r.sqlite3_result_js(b, v(b));
                        } catch (R) {
                          r.sqlite3_result_error_js(b, R);
                        }
                      },
                    },
                    xFunc: {
                      signature: 'v(pip)',
                      contextKey: S,
                      callProxy: (v) => (b, R, z) => {
                        try {
                          r.sqlite3_result_js(
                            b,
                            v(b, ...r.sqlite3_values_to_js(R, z)),
                          );
                        } catch (L) {
                          r.sqlite3_result_error_js(b, L);
                        }
                      },
                    },
                    xDestroy: {
                      signature: 'v(p)',
                      contextKey: S,
                      callProxy: (v) => (b) => {
                        try {
                          v(b);
                        } catch (R) {
                          console.error('UDF xDestroy method threw:', R);
                        }
                      },
                    },
                  }),
                  m = i.xWrap('sqlite3_create_function_v2', 'int', [
                    'sqlite3*',
                    'string',
                    'int',
                    'int',
                    '*',
                    new i.xWrap.FuncPtrAdapter({ name: 'xFunc', ...f.xFunc }),
                    new i.xWrap.FuncPtrAdapter({
                      name: 'xStep',
                      ...f.xInverseAndStep,
                    }),
                    new i.xWrap.FuncPtrAdapter({
                      name: 'xFinal',
                      ...f.xFinalAndValue,
                    }),
                    new i.xWrap.FuncPtrAdapter({
                      name: 'xDestroy',
                      ...f.xDestroy,
                    }),
                  ]),
                  w = i.xWrap('sqlite3_create_window_function', 'int', [
                    'sqlite3*',
                    'string',
                    'int',
                    'int',
                    '*',
                    new i.xWrap.FuncPtrAdapter({
                      name: 'xStep',
                      ...f.xInverseAndStep,
                    }),
                    new i.xWrap.FuncPtrAdapter({
                      name: 'xFinal',
                      ...f.xFinalAndValue,
                    }),
                    new i.xWrap.FuncPtrAdapter({
                      name: 'xValue',
                      ...f.xFinalAndValue,
                    }),
                    new i.xWrap.FuncPtrAdapter({
                      name: 'xInverse',
                      ...f.xInverseAndStep,
                    }),
                    new i.xWrap.FuncPtrAdapter({
                      name: 'xDestroy',
                      ...f.xDestroy,
                    }),
                  ]);
                (r.sqlite3_create_function_v2 = function v(
                  b,
                  R,
                  z,
                  L,
                  U,
                  G,
                  p,
                  x,
                  k,
                ) {
                  if (v.length !== arguments.length)
                    return g(b, 'sqlite3_create_function_v2', v.length);
                  if (!(L & 15)) L |= r.SQLITE_UTF8;
                  else if (r.SQLITE_UTF8 !== (L & 15)) return E(b);
                  try {
                    const C = m(b, R, z, L, U, G, p, x, k);
                    return (
                      C === 0 &&
                        (G instanceof Function ||
                          p instanceof Function ||
                          x instanceof Function ||
                          k instanceof Function) &&
                        H.addFunction(b, R, z),
                      C
                    );
                  } catch (C) {
                    return (
                      console.error(
                        'sqlite3_create_function_v2() setup threw:',
                        C,
                      ),
                      l.sqlite3_wasm_db_error(
                        b,
                        C,
                        'Creation of UDF threw: ' + C,
                      )
                    );
                  }
                }),
                  (r.sqlite3_create_function = function v(
                    b,
                    R,
                    z,
                    L,
                    U,
                    G,
                    p,
                    x,
                  ) {
                    return v.length === arguments.length
                      ? r.sqlite3_create_function_v2(b, R, z, L, U, G, p, x, 0)
                      : g(b, 'sqlite3_create_function', v.length);
                  }),
                  (r.sqlite3_create_window_function = function v(
                    b,
                    R,
                    z,
                    L,
                    U,
                    G,
                    p,
                    x,
                    k,
                    C,
                  ) {
                    if (v.length !== arguments.length)
                      return g(b, 'sqlite3_create_window_function', v.length);
                    if (!(L & 15)) L |= r.SQLITE_UTF8;
                    else if (r.SQLITE_UTF8 !== (L & 15)) return E(b);
                    try {
                      const d = w(b, R, z, L, U, G, p, x, k, C);
                      return (
                        d === 0 &&
                          (G instanceof Function ||
                            p instanceof Function ||
                            x instanceof Function ||
                            k instanceof Function ||
                            C instanceof Function) &&
                          H.addWindowFunc(b, R, z),
                        d
                      );
                    } catch (d) {
                      return (
                        console.error(
                          'sqlite3_create_window_function() setup threw:',
                          d,
                        ),
                        l.sqlite3_wasm_db_error(
                          b,
                          d,
                          'Creation of UDF threw: ' + d,
                        )
                      );
                    }
                  }),
                  (r.sqlite3_create_function_v2.udfSetResult =
                    r.sqlite3_create_function.udfSetResult =
                    r.sqlite3_create_window_function.udfSetResult =
                      r.sqlite3_result_js),
                  (r.sqlite3_create_function_v2.udfConvertArgs =
                    r.sqlite3_create_function.udfConvertArgs =
                    r.sqlite3_create_window_function.udfConvertArgs =
                      r.sqlite3_values_to_js),
                  (r.sqlite3_create_function_v2.udfSetError =
                    r.sqlite3_create_function.udfSetError =
                    r.sqlite3_create_window_function.udfSetError =
                      r.sqlite3_result_error_js);
              }
              {
                const S = (m, w) => (
                    typeof m == 'string'
                      ? (w = -1)
                      : l.isSQLableTypedArray(m)
                      ? ((w = m.byteLength),
                        (m = l.typedArrayToString(
                          m instanceof ArrayBuffer ? new Uint8Array(m) : m,
                        )))
                      : Array.isArray(m) && ((m = m.join('')), (w = -1)),
                    [m, w]
                  ),
                  f = {
                    basic: i.xWrap('sqlite3_prepare_v3', 'int', [
                      'sqlite3*',
                      'string',
                      'int',
                      'int',
                      '**',
                      '**',
                    ]),
                    full: i.xWrap('sqlite3_prepare_v3', 'int', [
                      'sqlite3*',
                      '*',
                      'int',
                      'int',
                      '**',
                      '**',
                    ]),
                  };
                (r.sqlite3_prepare_v3 = function m(w, v, b, R, z, L) {
                  if (m.length !== arguments.length)
                    return g(w, 'sqlite3_prepare_v3', m.length);
                  const [U, G] = S(v, b);
                  switch (typeof U) {
                    case 'string':
                      return f.basic(w, U, G, R, z, null);
                    case 'number':
                      return f.full(w, U, G, R, z, L);
                    default:
                      return l.sqlite3_wasm_db_error(
                        w,
                        r.SQLITE_MISUSE,
                        'Invalid SQL argument type for sqlite3_prepare_v2/v3().',
                      );
                  }
                }),
                  (r.sqlite3_prepare_v2 = function m(w, v, b, R, z) {
                    return m.length === arguments.length
                      ? r.sqlite3_prepare_v3(w, v, b, 0, R, z)
                      : g(w, 'sqlite3_prepare_v2', m.length);
                  });
              }
              {
                const S = i.xWrap('sqlite3_bind_text', 'int', [
                    'sqlite3_stmt*',
                    'int',
                    'string',
                    'int',
                    '*',
                  ]),
                  f = i.xWrap('sqlite3_bind_blob', 'int', [
                    'sqlite3_stmt*',
                    'int',
                    '*',
                    'int',
                    '*',
                  ]);
                (r.sqlite3_bind_text = function m(w, v, b, R, z) {
                  if (m.length !== arguments.length)
                    return g(
                      r.sqlite3_db_handle(w),
                      'sqlite3_bind_text',
                      m.length,
                    );
                  if (i.isPtr(b) || b === null) return S(w, v, b, R, z);
                  b instanceof ArrayBuffer
                    ? (b = new Uint8Array(b))
                    : Array.isArray(pMem) && (b = pMem.join(''));
                  let L, U;
                  try {
                    if (l.isSQLableTypedArray(b))
                      (L = i.allocFromTypedArray(b)), (U = b.byteLength);
                    else if (typeof b == 'string') [L, U] = i.allocCString(b);
                    else
                      return l.sqlite3_wasm_db_error(
                        r.sqlite3_db_handle(w),
                        r.SQLITE_MISUSE,
                        'Invalid 3rd argument type for sqlite3_bind_text().',
                      );
                    return S(w, v, L, U, r.SQLITE_WASM_DEALLOC);
                  } catch (G) {
                    return (
                      i.dealloc(L),
                      l.sqlite3_wasm_db_error(r.sqlite3_db_handle(w), G)
                    );
                  }
                }),
                  (r.sqlite3_bind_blob = function m(w, v, b, R, z) {
                    if (m.length !== arguments.length)
                      return g(
                        r.sqlite3_db_handle(w),
                        'sqlite3_bind_blob',
                        m.length,
                      );
                    if (i.isPtr(b) || b === null) return f(w, v, b, R, z);
                    b instanceof ArrayBuffer
                      ? (b = new Uint8Array(b))
                      : Array.isArray(b) && (b = b.join(''));
                    let L, U;
                    try {
                      if (l.isBindableTypedArray(b))
                        (L = i.allocFromTypedArray(b)),
                          (U = R >= 0 ? R : b.byteLength);
                      else if (typeof b == 'string') [L, U] = i.allocCString(b);
                      else
                        return l.sqlite3_wasm_db_error(
                          r.sqlite3_db_handle(w),
                          r.SQLITE_MISUSE,
                          'Invalid 3rd argument type for sqlite3_bind_blob().',
                        );
                      return f(w, v, L, U, r.SQLITE_WASM_DEALLOC);
                    } catch (G) {
                      return (
                        i.dealloc(L),
                        l.sqlite3_wasm_db_error(r.sqlite3_db_handle(w), G)
                      );
                    }
                  });
              }
              r.sqlite3_config = function (S, ...f) {
                if (arguments.length < 2) return r.SQLITE_MISUSE;
                switch (S) {
                  case r.SQLITE_CONFIG_COVERING_INDEX_SCAN:
                  case r.SQLITE_CONFIG_MEMSTATUS:
                  case r.SQLITE_CONFIG_SMALL_MALLOC:
                  case r.SQLITE_CONFIG_SORTERREF_SIZE:
                  case r.SQLITE_CONFIG_STMTJRNL_SPILL:
                  case r.SQLITE_CONFIG_URI:
                    return i.exports.sqlite3_wasm_config_i(S, f[0]);
                  case r.SQLITE_CONFIG_LOOKASIDE:
                    return i.exports.sqlite3_wasm_config_ii(S, f[0], f[1]);
                  case r.SQLITE_CONFIG_MEMDB_MAXSIZE:
                    return i.exports.sqlite3_wasm_config_j(S, f[0]);
                  case r.SQLITE_CONFIG_GETMALLOC:
                  case r.SQLITE_CONFIG_GETMUTEX:
                  case r.SQLITE_CONFIG_GETPCACHE2:
                  case r.SQLITE_CONFIG_GETPCACHE:
                  case r.SQLITE_CONFIG_HEAP:
                  case r.SQLITE_CONFIG_LOG:
                  case r.SQLITE_CONFIG_MALLOC:
                  case r.SQLITE_CONFIG_MMAP_SIZE:
                  case r.SQLITE_CONFIG_MULTITHREAD:
                  case r.SQLITE_CONFIG_MUTEX:
                  case r.SQLITE_CONFIG_PAGECACHE:
                  case r.SQLITE_CONFIG_PCACHE2:
                  case r.SQLITE_CONFIG_PCACHE:
                  case r.SQLITE_CONFIG_PCACHE_HDRSZ:
                  case r.SQLITE_CONFIG_PMASZ:
                  case r.SQLITE_CONFIG_SERIALIZED:
                  case r.SQLITE_CONFIG_SINGLETHREAD:
                  case r.SQLITE_CONFIG_SQLLOG:
                  case r.SQLITE_CONFIG_WIN32_HEAPSIZE:
                  default:
                    return r.SQLITE_NOTFOUND;
                }
              };
              {
                const S = new Set();
                (r.sqlite3_auto_extension = function (f) {
                  if (f instanceof Function) f = i.installFunction('i(ppp)', f);
                  else if (arguments.length !== 1 || !i.isPtr(f))
                    return r.SQLITE_MISUSE;
                  const m = i.exports.sqlite3_auto_extension(f);
                  return (
                    f !== arguments[0] &&
                      (m === 0 ? S.add(f) : i.uninstallFunction(f)),
                    m
                  );
                }),
                  (r.sqlite3_cancel_auto_extension = function (f) {
                    return !f || arguments.length !== 1 || !i.isPtr(f)
                      ? 0
                      : i.exports.sqlite3_cancel_auto_extension(f);
                  }),
                  (r.sqlite3_reset_auto_extension = function () {
                    i.exports.sqlite3_reset_auto_extension();
                    for (const f of S) i.uninstallFunction(f);
                    S.clear();
                  });
              }
              const ee = r.sqlite3_vfs_find('kvvfs');
              if (ee)
                if (l.isUIThread()) {
                  const S = new r.sqlite3_kvvfs_methods(
                    i.exports.sqlite3_wasm_kvvfs_methods(),
                  );
                  delete r.sqlite3_kvvfs_methods;
                  const f = i.exports.sqlite3_wasm_kvvfsMakeKeyOnPstack,
                    m = i.pstack,
                    w = (b) =>
                      i.peek(b) === 115 ? sessionStorage : localStorage,
                    v = {
                      xRead: (b, R, z, L) => {
                        const U = m.pointer,
                          G = i.scopedAllocPush();
                        try {
                          const p = f(b, R);
                          if (!p) return -3;
                          const x = i.cstrToJs(p),
                            k = w(b).getItem(x);
                          if (!k) return -1;
                          const C = k.length;
                          if (L <= 0) return C;
                          if (L === 1) return i.poke(z, 0), C;
                          const d = i.scopedAllocCString(k);
                          return (
                            L > C + 1 && (L = C + 1),
                            i.heap8u().copyWithin(z, d, d + L - 1),
                            i.poke(z + L - 1, 0),
                            L - 1
                          );
                        } catch (p) {
                          return console.error('kvstorageRead()', p), -2;
                        } finally {
                          m.restore(U), i.scopedAllocPop(G);
                        }
                      },
                      xWrite: (b, R, z) => {
                        const L = m.pointer;
                        try {
                          const U = f(b, R);
                          if (!U) return 1;
                          const G = i.cstrToJs(U);
                          return w(b).setItem(G, i.cstrToJs(z)), 0;
                        } catch (U) {
                          return (
                            console.error('kvstorageWrite()', U), r.SQLITE_IOERR
                          );
                        } finally {
                          m.restore(L);
                        }
                      },
                      xDelete: (b, R) => {
                        const z = m.pointer;
                        try {
                          const L = f(b, R);
                          return L ? (w(b).removeItem(i.cstrToJs(L)), 0) : 1;
                        } catch (L) {
                          return (
                            console.error('kvstorageDelete()', L),
                            r.SQLITE_IOERR
                          );
                        } finally {
                          m.restore(z);
                        }
                      },
                    };
                  for (const b of Object.keys(v))
                    S[S.memberKey(b)] = i.installFunction(
                      S.memberSignature(b),
                      v[b],
                    );
                } else r.sqlite3_vfs_unregister(ee);
              i.xWrap.FuncPtrAdapter.warnOnUse = !0;
            }),
            globalThis.sqlite3ApiBootstrap.initializers.push(function (t) {
              t.version = {
                libVersion: '3.42.0',
                libVersionNumber: 3042e3,
                sourceId:
                  '2023-05-16 12:36:15 831d0fb2836b71c9bc51067c49fee4b8f18047814f2ff22d817d25195cf350b0',
                downloadVersion: 342e4,
              };
            }),
            globalThis.sqlite3ApiBootstrap.initializers.push(function (t) {
              const s = (...d) => {
                  throw new t.SQLite3Error(...d);
                },
                r = t.capi,
                i = t.wasm,
                l = t.util,
                g = new WeakMap(),
                E = new WeakMap(),
                O = (d, y, a) => {
                  const c = Object.getOwnPropertyDescriptor(d, y);
                  return c ? c.value : a;
                },
                B = function (d, y) {
                  return (
                    y &&
                      (d instanceof f && (d = d.pointer),
                      s(
                        'sqlite3 result code',
                        y + ':',
                        d ? r.sqlite3_errmsg(d) : r.sqlite3_errstr(y),
                      )),
                    arguments[0]
                  );
                },
                H = i.installFunction(
                  'i(ippp)',
                  function (d, y, a, c) {
                    r.SQLITE_TRACE_STMT === d &&
                      console.log(
                        'SQL TRACE #' +
                          ++this.counter +
                          ' via sqlite3@' +
                          y +
                          ':',
                        i.cstrToJs(c),
                      );
                  }.bind({ counter: 0 }),
                ),
                ee = Object.create(null),
                S = function d(...y) {
                  if (!d._name2vfs) {
                    d._name2vfs = Object.create(null);
                    const ue =
                      typeof importScripts == 'function'
                        ? (ye) =>
                            s(
                              'The VFS for',
                              ye,
                              'is only available in the main window thread.',
                            )
                        : !1;
                    (d._name2vfs[':localStorage:'] = {
                      vfs: 'kvvfs',
                      filename: ue || (() => 'local'),
                    }),
                      (d._name2vfs[':sessionStorage:'] = {
                        vfs: 'kvvfs',
                        filename: ue || (() => 'session'),
                      });
                  }
                  const a = d.normalizeArgs(...y);
                  let c = a.filename,
                    q = a.vfs,
                    F = a.flags;
                  ((typeof c != 'string' && typeof c != 'number') ||
                    typeof F != 'string' ||
                    (q && typeof q != 'string' && typeof q != 'number')) &&
                    (t.config.error('Invalid DB ctor args', a, arguments),
                    s('Invalid arguments for DB constructor.'));
                  let Q = typeof c == 'number' ? i.cstrToJs(c) : c;
                  const re = d._name2vfs[Q];
                  re && ((q = re.vfs), (c = Q = re.filename(Q)));
                  let ne,
                    ce = 0;
                  F.indexOf('c') >= 0 &&
                    (ce |= r.SQLITE_OPEN_CREATE | r.SQLITE_OPEN_READWRITE),
                    F.indexOf('w') >= 0 && (ce |= r.SQLITE_OPEN_READWRITE),
                    ce === 0 && (ce |= r.SQLITE_OPEN_READONLY),
                    (ce |= r.SQLITE_OPEN_EXRESCODE);
                  const le = i.pstack.pointer;
                  try {
                    const ue = i.pstack.allocPtr();
                    let ye = r.sqlite3_open_v2(c, ue, ce, q || 0);
                    (ne = i.peekPtr(ue)),
                      B(ne, ye),
                      r.sqlite3_extended_result_codes(ne, 1),
                      F.indexOf('t') >= 0 &&
                        r.sqlite3_trace_v2(ne, r.SQLITE_TRACE_STMT, H, ne);
                  } catch (ue) {
                    throw (ne && r.sqlite3_close_v2(ne), ue);
                  } finally {
                    i.pstack.restore(le);
                  }
                  (this.filename = Q),
                    g.set(this, ne),
                    E.set(this, Object.create(null));
                  try {
                    const ue = r.sqlite3_js_db_vfs(ne);
                    ue ||
                      s('Internal error: cannot get VFS for new db handle.');
                    const ye = ee[ue];
                    ye instanceof Function
                      ? ye(this, t)
                      : ye && B(ne, r.sqlite3_exec(ne, ye, 0, 0, 0));
                  } catch (ue) {
                    throw (this.close(), ue);
                  }
                };
              (S.setVfsPostOpenSql = function (d, y) {
                ee[d] = y;
              }),
                (S.normalizeArgs = function (
                  d = ':memory:',
                  y = 'c',
                  a = null,
                ) {
                  const c = {};
                  return (
                    arguments.length === 1 &&
                    arguments[0] &&
                    typeof arguments[0] == 'object'
                      ? (Object.assign(c, arguments[0]),
                        c.flags === void 0 && (c.flags = 'c'),
                        c.vfs === void 0 && (c.vfs = null),
                        c.filename === void 0 && (c.filename = ':memory:'))
                      : ((c.filename = d), (c.flags = y), (c.vfs = a)),
                    c
                  );
                });
              const f = function (...d) {
                S.apply(this, d);
              };
              f.dbCtorHelper = S;
              const m = { null: 1, number: 2, string: 3, boolean: 4, blob: 5 };
              m.undefined == m.null, i.bigIntEnabled && (m.bigint = m.number);
              const w = function () {
                  m !== arguments[2] &&
                    s(
                      r.SQLITE_MISUSE,
                      'Do not call the Stmt constructor directly. Use DB.prepare().',
                    ),
                    (this.db = arguments[0]),
                    g.set(this, arguments[1]),
                    (this.columnCount = r.sqlite3_column_count(this.pointer)),
                    (this.parameterCount = r.sqlite3_bind_parameter_count(
                      this.pointer,
                    ));
                },
                v = function (d) {
                  return d.pointer || s('DB has been closed.'), d;
                },
                b = function (d, y) {
                  return (
                    (y !== (y | 0) || y < 0 || y >= d.columnCount) &&
                      s('Column index', y, 'is out of range.'),
                    d
                  );
                },
                R = function (d, y) {
                  const a = Object.create(null);
                  switch (((a.opt = Object.create(null)), y.length)) {
                    case 1:
                      typeof y[0] == 'string' ||
                      l.isSQLableTypedArray(y[0]) ||
                      Array.isArray(y[0])
                        ? (a.sql = y[0])
                        : y[0] &&
                          typeof y[0] == 'object' &&
                          ((a.opt = y[0]), (a.sql = a.opt.sql));
                      break;
                    case 2:
                      (a.sql = y[0]), (a.opt = y[1]);
                      break;
                    default:
                      s('Invalid argument count for exec().');
                  }
                  (a.sql = l.flexibleString(a.sql)),
                    typeof a.sql != 'string' &&
                      s('Missing SQL argument or unsupported SQL value type.');
                  const c = a.opt;
                  switch (c.returnValue) {
                    case 'resultRows':
                      c.resultRows || (c.resultRows = []),
                        (a.returnVal = () => c.resultRows);
                      break;
                    case 'saveSql':
                      c.saveSql || (c.saveSql = []),
                        (a.returnVal = () => c.saveSql);
                      break;
                    case void 0:
                    case 'this':
                      a.returnVal = () => d;
                      break;
                    default:
                      s('Invalid returnValue value:', c.returnValue);
                  }
                  if (
                    (!c.callback &&
                      !c.returnValue &&
                      c.rowMode !== void 0 &&
                      (c.resultRows || (c.resultRows = []),
                      (a.returnVal = () => c.resultRows)),
                    c.callback || c.resultRows)
                  )
                    switch (c.rowMode === void 0 ? 'array' : c.rowMode) {
                      case 'object':
                        a.cbArg = (q) => q.get(Object.create(null));
                        break;
                      case 'array':
                        a.cbArg = (q) => q.get([]);
                        break;
                      case 'stmt':
                        Array.isArray(c.resultRows) &&
                          s(
                            'exec(): invalid rowMode for a resultRows array: must',
                            "be one of 'array', 'object',",
                            'a result column number, or column name reference.',
                          ),
                          (a.cbArg = (q) => q);
                        break;
                      default:
                        if (l.isInt32(c.rowMode)) {
                          a.cbArg = (q) => q.get(c.rowMode);
                          break;
                        } else if (
                          typeof c.rowMode == 'string' &&
                          c.rowMode.length > 1 &&
                          c.rowMode[0] === '$'
                        ) {
                          const q = c.rowMode.substr(1);
                          a.cbArg = (F) => {
                            const Q = F.get(Object.create(null))[q];
                            return Q === void 0
                              ? s(
                                  r.SQLITE_NOTFOUND,
                                  'exec(): unknown result column:',
                                  q,
                                )
                              : Q;
                          };
                          break;
                        }
                        s('Invalid rowMode:', c.rowMode);
                    }
                  return a;
                },
                z = (d, y, a, ...c) => {
                  const q = d.prepare(y);
                  try {
                    return q.bind(a).step() ? q.get(...c) : void 0;
                  } finally {
                    q.finalize();
                  }
                },
                L = (d, y, a, c) =>
                  d.exec({
                    sql: y,
                    bind: a,
                    rowMode: c,
                    returnValue: 'resultRows',
                  });
              (f.checkRc = (d, y) => B(d, y)),
                (f.prototype = {
                  isOpen: function () {
                    return !!this.pointer;
                  },
                  affirmOpen: function () {
                    return v(this);
                  },
                  close: function () {
                    if (this.pointer) {
                      if (
                        this.onclose &&
                        this.onclose.before instanceof Function
                      )
                        try {
                          this.onclose.before(this);
                        } catch {}
                      const d = this.pointer;
                      if (
                        (Object.keys(E.get(this)).forEach((y, a) => {
                          a && a.pointer && a.finalize();
                        }),
                        g.delete(this),
                        E.delete(this),
                        r.sqlite3_close_v2(d),
                        this.onclose && this.onclose.after instanceof Function)
                      )
                        try {
                          this.onclose.after(this);
                        } catch {}
                      delete this.filename;
                    }
                  },
                  changes: function (d = !1, y = !1) {
                    const a = v(this).pointer;
                    return d
                      ? y
                        ? r.sqlite3_total_changes64(a)
                        : r.sqlite3_total_changes(a)
                      : y
                      ? r.sqlite3_changes64(a)
                      : r.sqlite3_changes(a);
                  },
                  dbFilename: function (d = 'main') {
                    return r.sqlite3_db_filename(v(this).pointer, d);
                  },
                  dbName: function (d = 0) {
                    return r.sqlite3_db_name(v(this).pointer, d);
                  },
                  dbVfsName: function (d = 0) {
                    let y;
                    const a = r.sqlite3_js_db_vfs(v(this).pointer, d);
                    if (a) {
                      const c = new r.sqlite3_vfs(a);
                      try {
                        y = i.cstrToJs(c.$zName);
                      } finally {
                        c.dispose();
                      }
                    }
                    return y;
                  },
                  prepare: function (d) {
                    v(this);
                    const y = i.pstack.pointer;
                    let a, c;
                    try {
                      (a = i.pstack.alloc(8)),
                        f.checkRc(
                          this,
                          r.sqlite3_prepare_v2(this.pointer, d, -1, a, null),
                        ),
                        (c = i.peekPtr(a));
                    } finally {
                      i.pstack.restore(y);
                    }
                    c || s('Cannot prepare empty SQL.');
                    const q = new w(this, c, m);
                    return (E.get(this)[c] = q), q;
                  },
                  exec: function () {
                    v(this);
                    const d = R(this, arguments);
                    if (!d.sql) return s('exec() requires an SQL string.');
                    const y = d.opt,
                      a = y.callback,
                      c = Array.isArray(y.resultRows) ? y.resultRows : void 0;
                    let q,
                      F = y.bind,
                      Q = !!(d.cbArg || y.columnNames || c);
                    const re = i.scopedAllocPush(),
                      ne = Array.isArray(y.saveSql) ? y.saveSql : void 0;
                    try {
                      const ce = l.isSQLableTypedArray(d.sql);
                      let le = ce ? d.sql.byteLength : i.jstrlen(d.sql);
                      const ue = i.scopedAlloc(2 * i.ptrSizeof + (le + 1)),
                        ye = ue + i.ptrSizeof;
                      let Se = ye + i.ptrSizeof;
                      const Ze = Se + le;
                      for (
                        ce
                          ? i.heap8().set(d.sql, Se)
                          : i.jstrcpy(d.sql, i.heap8(), Se, le, !1),
                          i.poke(Se + le, 0);
                        Se && i.peek(Se, 'i8');

                      ) {
                        i.pokePtr([ue, ye], 0),
                          f.checkRc(
                            this,
                            r.sqlite3_prepare_v3(
                              this.pointer,
                              Se,
                              le,
                              0,
                              ue,
                              ye,
                            ),
                          );
                        const A = i.peekPtr(ue);
                        if (((Se = i.peekPtr(ye)), (le = Ze - Se), !!A)) {
                          if (
                            (ne && ne.push(r.sqlite3_sql(A).trim()),
                            (q = new w(this, A, m)),
                            F && q.parameterCount && (q.bind(F), (F = null)),
                            Q && q.columnCount)
                          ) {
                            if (
                              ((Q = !1),
                              Array.isArray(y.columnNames) &&
                                q.getColumnNames(y.columnNames),
                              d.cbArg || c)
                            ) {
                              for (; q.step(); q._isLocked = !1) {
                                q._isLocked = !0;
                                const M = d.cbArg(q);
                                if (
                                  (c && c.push(M), a && a.call(y, M, q) === !1)
                                )
                                  break;
                              }
                              q._isLocked = !1;
                            }
                          } else q.step();
                          q.finalize(), (q = null);
                        }
                      }
                    } finally {
                      q && (delete q._isLocked, q.finalize()),
                        i.scopedAllocPop(re);
                    }
                    return d.returnVal();
                  },
                  createFunction: function (y, a, c) {
                    const q = (j) => j instanceof Function;
                    switch (arguments.length) {
                      case 1:
                        (c = y), (y = c.name), (a = c.xFunc || 0);
                        break;
                      case 2:
                        q(a) || ((c = a), (a = c.xFunc || 0));
                        break;
                    }
                    c || (c = {}),
                      typeof y != 'string' &&
                        s('Invalid arguments: missing function name.');
                    let F = c.xStep || 0,
                      Q = c.xFinal || 0;
                    const re = c.xValue || 0,
                      ne = c.xInverse || 0;
                    let ce;
                    q(a)
                      ? ((ce = !1),
                        (q(F) || q(Q)) &&
                          s('Ambiguous arguments: scalar or aggregate?'),
                        (F = Q = null))
                      : q(F)
                      ? (q(Q) ||
                          s(
                            'Missing xFinal() callback for aggregate or window UDF.',
                          ),
                        (a = null))
                      : q(Q)
                      ? s(
                          'Missing xStep() callback for aggregate or window UDF.',
                        )
                      : s('Missing function-type properties.'),
                      ce === !1
                        ? (q(re) || q(ne)) &&
                          s(
                            'xValue and xInverse are not permitted for non-window UDFs.',
                          )
                        : q(re)
                        ? (q(ne) ||
                            s('xInverse must be provided if xValue is.'),
                          (ce = !0))
                        : q(ne) && s('xValue must be provided if xInverse is.');
                    const le = c.pApp;
                    le != null &&
                      (typeof le != 'number' || !l.isInt32(le)) &&
                      s(
                        'Invalid value for pApp property. Must be a legal WASM pointer value.',
                      );
                    const ue = c.xDestroy || 0;
                    ue && !q(ue) && s('xDestroy property must be a function.');
                    let ye = 0;
                    O(c, 'deterministic') && (ye |= r.SQLITE_DETERMINISTIC),
                      O(c, 'directOnly') && (ye |= r.SQLITE_DIRECTONLY),
                      O(c, 'innocuous') && (ye |= r.SQLITE_INNOCUOUS),
                      (y = y.toLowerCase());
                    const Se = a || F,
                      Ze = O(c, 'arity'),
                      A =
                        typeof Ze == 'number'
                          ? Ze
                          : Se.length
                          ? Se.length - 1
                          : 0;
                    let M;
                    return (
                      ce
                        ? (M = r.sqlite3_create_window_function(
                            this.pointer,
                            y,
                            A,
                            r.SQLITE_UTF8 | ye,
                            le || 0,
                            F,
                            Q,
                            re,
                            ne,
                            ue,
                          ))
                        : (M = r.sqlite3_create_function_v2(
                            this.pointer,
                            y,
                            A,
                            r.SQLITE_UTF8 | ye,
                            le || 0,
                            a,
                            F,
                            Q,
                            ue,
                          )),
                      f.checkRc(this, M),
                      this
                    );
                  },
                  selectValue: function (d, y, a) {
                    return z(this, d, y, 0, a);
                  },
                  selectValues: function (d, y, a) {
                    const c = this.prepare(d),
                      q = [];
                    try {
                      for (c.bind(y); c.step(); ) q.push(c.get(0, a));
                    } finally {
                      c.finalize();
                    }
                    return q;
                  },
                  selectArray: function (d, y) {
                    return z(this, d, y, []);
                  },
                  selectObject: function (d, y) {
                    return z(this, d, y, {});
                  },
                  selectArrays: function (d, y) {
                    return L(this, d, y, 'array');
                  },
                  selectObjects: function (d, y) {
                    return L(this, d, y, 'object');
                  },
                  openStatementCount: function () {
                    return this.pointer ? Object.keys(E.get(this)).length : 0;
                  },
                  transaction: function (d) {
                    let y = 'BEGIN';
                    arguments.length > 1 &&
                      (/[^a-zA-Z]/.test(arguments[0]) &&
                        s(
                          r.SQLITE_MISUSE,
                          'Invalid argument for BEGIN qualifier.',
                        ),
                      (y += ' ' + arguments[0]),
                      (d = arguments[1])),
                      v(this).exec(y);
                    try {
                      const a = d(this);
                      return this.exec('COMMIT'), a;
                    } catch (a) {
                      throw (this.exec('ROLLBACK'), a);
                    }
                  },
                  savepoint: function (d) {
                    v(this).exec('SAVEPOINT oo1');
                    try {
                      const y = d(this);
                      return this.exec('RELEASE oo1'), y;
                    } catch (y) {
                      throw (
                        (this.exec(
                          'ROLLBACK to SAVEPOINT oo1; RELEASE SAVEPOINT oo1',
                        ),
                        y)
                      );
                    }
                  },
                  checkRc: function (d) {
                    return f.checkRc(this, d);
                  },
                });
              const U = function (d) {
                  return d.pointer || s('Stmt has been closed.'), d;
                },
                G = function (d) {
                  let y = m[d == null ? 'null' : typeof d];
                  switch (y) {
                    case m.boolean:
                    case m.null:
                    case m.number:
                    case m.string:
                      return y;
                    case m.bigint:
                      if (i.bigIntEnabled) return y;
                    default:
                      return l.isBindableTypedArray(d) ? m.blob : void 0;
                  }
                },
                p = function (d) {
                  return (
                    G(d) || s('Unsupported bind() argument type:', typeof d)
                  );
                },
                x = function (d, y) {
                  const a =
                    typeof y == 'number'
                      ? y
                      : r.sqlite3_bind_parameter_index(d.pointer, y);
                  return (
                    a === 0 || !l.isInt32(a)
                      ? s('Invalid bind() parameter name: ' + y)
                      : (a < 1 || a > d.parameterCount) &&
                        s('Bind index', y, 'is out of range.'),
                    a
                  );
                },
                k = function (d, y) {
                  return (
                    d._isLocked &&
                      s('Operation is illegal when statement is locked:', y),
                    d
                  );
                },
                C = function d(y, a, c, q) {
                  k(U(y), 'bind()'),
                    d._ ||
                      ((d._tooBigInt = (Q) =>
                        s(
                          'BigInt value is too big to store without precision loss:',
                          Q,
                        )),
                      (d._ = {
                        string: function (Q, re, ne, ce) {
                          const [le, ue] = i.allocCString(ne, !0);
                          return (
                            ce ? r.sqlite3_bind_blob : r.sqlite3_bind_text
                          )(Q.pointer, re, le, ue, r.SQLITE_WASM_DEALLOC);
                        },
                      })),
                    p(q),
                    (a = x(y, a));
                  let F = 0;
                  switch (q == null ? m.null : c) {
                    case m.null:
                      F = r.sqlite3_bind_null(y.pointer, a);
                      break;
                    case m.string:
                      F = d._.string(y, a, q, !1);
                      break;
                    case m.number: {
                      let Q;
                      l.isInt32(q)
                        ? (Q = r.sqlite3_bind_int)
                        : typeof q == 'bigint'
                        ? l.bigIntFits64(q)
                          ? i.bigIntEnabled
                            ? (Q = r.sqlite3_bind_int64)
                            : l.bigIntFitsDouble(q)
                            ? ((q = Number(q)), (Q = r.sqlite3_bind_double))
                            : d._tooBigInt(q)
                          : d._tooBigInt(q)
                        : ((q = Number(q)),
                          i.bigIntEnabled && Number.isInteger(q)
                            ? (Q = r.sqlite3_bind_int64)
                            : (Q = r.sqlite3_bind_double)),
                        (F = Q(y.pointer, a, q));
                      break;
                    }
                    case m.boolean:
                      F = r.sqlite3_bind_int(y.pointer, a, q ? 1 : 0);
                      break;
                    case m.blob: {
                      if (typeof q == 'string') {
                        F = d._.string(y, a, q, !0);
                        break;
                      } else
                        q instanceof ArrayBuffer
                          ? (q = new Uint8Array(q))
                          : l.isBindableTypedArray(q) ||
                            s(
                              'Binding a value as a blob requires',
                              'that it be a string, Uint8Array, Int8Array, or ArrayBuffer.',
                            );
                      const Q = i.alloc(q.byteLength || 1);
                      i.heap8().set(q.byteLength ? q : [0], Q),
                        (F = r.sqlite3_bind_blob(
                          y.pointer,
                          a,
                          Q,
                          q.byteLength,
                          r.SQLITE_WASM_DEALLOC,
                        ));
                      break;
                    }
                    default:
                      t.config.warn('Unsupported bind() argument type:', q),
                        s('Unsupported bind() argument type: ' + typeof q);
                  }
                  return F && f.checkRc(y.db.pointer, F), (y._mayGet = !1), y;
                };
              w.prototype = {
                finalize: function () {
                  this.pointer &&
                    (k(this, 'finalize()'),
                    delete E.get(this.db)[this.pointer],
                    r.sqlite3_finalize(this.pointer),
                    g.delete(this),
                    delete this._mayGet,
                    delete this.columnCount,
                    delete this.parameterCount,
                    delete this.db,
                    delete this._isLocked);
                },
                clearBindings: function () {
                  return (
                    k(U(this), 'clearBindings()'),
                    r.sqlite3_clear_bindings(this.pointer),
                    (this._mayGet = !1),
                    this
                  );
                },
                reset: function (d) {
                  return (
                    k(this, 'reset()'),
                    d && this.clearBindings(),
                    r.sqlite3_reset(U(this).pointer),
                    (this._mayGet = !1),
                    this
                  );
                },
                bind: function () {
                  U(this);
                  let d, y;
                  switch (arguments.length) {
                    case 1:
                      (d = 1), (y = arguments[0]);
                      break;
                    case 2:
                      (d = arguments[0]), (y = arguments[1]);
                      break;
                    default:
                      s('Invalid bind() arguments.');
                  }
                  return y === void 0
                    ? this
                    : (this.parameterCount ||
                        s('This statement has no bindable parameters.'),
                      (this._mayGet = !1),
                      y === null
                        ? C(this, d, m.null, y)
                        : Array.isArray(y)
                        ? (arguments.length !== 1 &&
                            s(
                              'When binding an array, an index argument is not permitted.',
                            ),
                          y.forEach((a, c) => C(this, c + 1, p(a), a)),
                          this)
                        : (y instanceof ArrayBuffer && (y = new Uint8Array(y)),
                          typeof y == 'object' && !l.isBindableTypedArray(y)
                            ? (arguments.length !== 1 &&
                                s(
                                  'When binding an object, an index argument is not permitted.',
                                ),
                              Object.keys(y).forEach((a) =>
                                C(this, a, p(y[a]), y[a]),
                              ),
                              this)
                            : C(this, d, p(y), y)));
                },
                bindAsBlob: function (d, y) {
                  U(this), arguments.length === 1 && ((y = d), (d = 1));
                  const a = p(y);
                  return (
                    m.string !== a &&
                      m.blob !== a &&
                      m.null !== a &&
                      s('Invalid value type for bindAsBlob()'),
                    C(this, d, m.blob, y)
                  );
                },
                step: function () {
                  k(this, 'step()');
                  const d = r.sqlite3_step(U(this).pointer);
                  switch (d) {
                    case r.SQLITE_DONE:
                      return (this._mayGet = !1);
                    case r.SQLITE_ROW:
                      return (this._mayGet = !0);
                    default:
                      (this._mayGet = !1),
                        t.config.warn(
                          'sqlite3_step() rc=',
                          d,
                          r.sqlite3_js_rc_str(d),
                          'SQL =',
                          r.sqlite3_sql(this.pointer),
                        ),
                        f.checkRc(this.db.pointer, d);
                  }
                },
                stepReset: function () {
                  return this.step(), this.reset();
                },
                stepFinalize: function () {
                  const d = this.step();
                  return this.finalize(), d;
                },
                get: function (d, y) {
                  if (
                    (U(this)._mayGet ||
                      s('Stmt.step() has not (recently) returned true.'),
                    Array.isArray(d))
                  ) {
                    let a = 0;
                    for (; a < this.columnCount; ) d[a] = this.get(a++);
                    return d;
                  } else if (d && typeof d == 'object') {
                    let a = 0;
                    for (; a < this.columnCount; )
                      d[r.sqlite3_column_name(this.pointer, a)] = this.get(a++);
                    return d;
                  }
                  switch (
                    (b(this, d),
                    y === void 0 ? r.sqlite3_column_type(this.pointer, d) : y)
                  ) {
                    case r.SQLITE_NULL:
                      return null;
                    case r.SQLITE_INTEGER:
                      if (i.bigIntEnabled) {
                        const a = r.sqlite3_column_int64(this.pointer, d);
                        return a >= Number.MIN_SAFE_INTEGER &&
                          a <= Number.MAX_SAFE_INTEGER
                          ? Number(a).valueOf()
                          : a;
                      } else {
                        const a = r.sqlite3_column_double(this.pointer, d);
                        return (
                          (a > Number.MAX_SAFE_INTEGER ||
                            a < Number.MIN_SAFE_INTEGER) &&
                            s(
                              'Integer is out of range for JS integer range: ' +
                                a,
                            ),
                          l.isInt32(a) ? a | 0 : a
                        );
                      }
                    case r.SQLITE_FLOAT:
                      return r.sqlite3_column_double(this.pointer, d);
                    case r.SQLITE_TEXT:
                      return r.sqlite3_column_text(this.pointer, d);
                    case r.SQLITE_BLOB: {
                      const a = r.sqlite3_column_bytes(this.pointer, d),
                        c = r.sqlite3_column_blob(this.pointer, d),
                        q = new Uint8Array(a);
                      return (
                        a && q.set(i.heap8u().slice(c, c + a), 0),
                        a &&
                          this.db._blobXfer instanceof Array &&
                          this.db._blobXfer.push(q.buffer),
                        q
                      );
                    }
                    default:
                      s(
                        "Don't know how to translate",
                        'type of result column #' + d + '.',
                      );
                  }
                  s('Not reached.');
                },
                getInt: function (d) {
                  return this.get(d, r.SQLITE_INTEGER);
                },
                getFloat: function (d) {
                  return this.get(d, r.SQLITE_FLOAT);
                },
                getString: function (d) {
                  return this.get(d, r.SQLITE_TEXT);
                },
                getBlob: function (d) {
                  return this.get(d, r.SQLITE_BLOB);
                },
                getJSON: function (d) {
                  const y = this.get(d, r.SQLITE_STRING);
                  return y === null ? y : JSON.parse(y);
                },
                getColumnName: function (d) {
                  return r.sqlite3_column_name(b(U(this), d).pointer, d);
                },
                getColumnNames: function (d = []) {
                  b(U(this), 0);
                  for (let y = 0; y < this.columnCount; ++y)
                    d.push(r.sqlite3_column_name(this.pointer, y));
                  return d;
                },
                getParamIndex: function (d) {
                  return U(this).parameterCount
                    ? r.sqlite3_bind_parameter_index(this.pointer, d)
                    : void 0;
                },
              };
              {
                const d = {
                  enumerable: !0,
                  get: function () {
                    return g.get(this);
                  },
                  set: () => s('The pointer property is read-only.'),
                };
                Object.defineProperty(w.prototype, 'pointer', d),
                  Object.defineProperty(f.prototype, 'pointer', d);
              }
              if (((t.oo1 = { DB: f, Stmt: w }), l.isUIThread())) {
                t.oo1.JsStorageDb = function (y = 'session') {
                  y !== 'session' &&
                    y !== 'local' &&
                    s(
                      "JsStorageDb db name must be one of 'session' or 'local'.",
                    ),
                    S.call(this, { filename: y, flags: 'c', vfs: 'kvvfs' });
                };
                const d = t.oo1.JsStorageDb;
                (d.prototype = Object.create(f.prototype)),
                  (d.clearStorage = r.sqlite3_js_kvvfs_clear),
                  (d.prototype.clearStorage = function () {
                    return d.clearStorage(v(this).filename);
                  }),
                  (d.storageSize = r.sqlite3_js_kvvfs_size),
                  (d.prototype.storageSize = function () {
                    return d.storageSize(v(this).filename);
                  });
              }
            }),
            globalThis.sqlite3ApiBootstrap.initializers.push(function (t) {
              t.initWorker1API = function () {
                const s = (...f) => {
                  throw new Error(f.join(' '));
                };
                globalThis.WorkerGlobalScope instanceof Function ||
                  s('initWorker1API() must be run from a Worker thread.'),
                  this.self;
                const r = this.sqlite3 || s('Missing this.sqlite3 object.'),
                  i = r.oo1.DB,
                  l = function (f) {
                    let m = g.idMap.get(f);
                    return (
                      m ||
                      ((m = 'db#' + ++g.idSeq + '@' + f.pointer),
                      g.idMap.set(f, m),
                      m)
                    );
                  },
                  g = {
                    dbList: [],
                    idSeq: 0,
                    idMap: new WeakMap(),
                    xfer: [],
                    open: function (f) {
                      const m = new i(f);
                      return (
                        (this.dbs[l(m)] = m),
                        this.dbList.indexOf(m) < 0 && this.dbList.push(m),
                        m
                      );
                    },
                    close: function (f, m) {
                      if (f) {
                        delete this.dbs[l(f)];
                        const w = f.filename,
                          v = r.wasm.sqlite3_wasm_db_vfs(f.pointer, 0);
                        f.close();
                        const b = this.dbList.indexOf(f);
                        b >= 0 && this.dbList.splice(b, 1),
                          m && w && v && r.wasm.sqlite3_wasm_vfs_unlink(v, w);
                      }
                    },
                    post: function (f, m) {
                      m && m.length
                        ? (globalThis.postMessage(f, Array.from(m)),
                          (m.length = 0))
                        : globalThis.postMessage(f);
                    },
                    dbs: Object.create(null),
                    getDb: function (f, m = !0) {
                      return (
                        this.dbs[f] ||
                        (m ? s('Unknown (or closed) DB ID:', f) : void 0)
                      );
                    },
                  },
                  E = function (f = g.dbList[0]) {
                    return f && f.pointer ? f : s('DB is not opened.');
                  },
                  O = function (f, m = !0) {
                    const w = g.getDb(f.dbId, !1) || g.dbList[0];
                    return m ? E(w) : w;
                  },
                  B = function () {
                    return g.dbList[0] && l(g.dbList[0]);
                  },
                  H = function (f) {
                    const m = /^file:.+(vfs=(\w+))/.exec(f);
                    return r.capi.sqlite3_vfs_find(m ? m[2] : 0);
                  },
                  ee = (f) => f === '' || f[0] === ':',
                  S = {
                    open: function (f) {
                      const m = Object.create(null),
                        w = f.args || Object.create(null);
                      w.simulateError &&
                        s('Throwing because of simulateError flag.');
                      const v = Object.create(null);
                      let b, R;
                      if (
                        ((m.vfs = w.vfs),
                        ee(w.filename)
                          ? (m.filename = w.filename || '')
                          : ((m.filename = w.filename),
                            (b = w.byteArray),
                            b && (R = H(w.filename))),
                        R)
                      ) {
                        let L;
                        try {
                          L = r.wasm.allocFromTypedArray(b);
                          const U = r.wasm.sqlite3_wasm_vfs_create_file(
                            R,
                            m.filename,
                            L,
                            b.byteLength,
                          );
                          U && r.SQLite3Error.toss(U);
                        } catch (U) {
                          throw new r.SQLite3Error(
                            U.name +
                              ' creating ' +
                              w.filename +
                              ': ' +
                              U.message,
                            { cause: U },
                          );
                        } finally {
                          L && r.wasm.dealloc(L);
                        }
                      }
                      const z = g.open(m);
                      return (
                        (v.filename = z.filename),
                        (v.persistent = !!r.capi.sqlite3_js_db_uses_vfs(
                          z.pointer,
                          'opfs',
                        )),
                        (v.dbId = l(z)),
                        (v.vfs = z.dbVfsName()),
                        v
                      );
                    },
                    close: function (f) {
                      const m = O(f, !1),
                        w = { filename: m && m.filename };
                      if (m) {
                        const v =
                          f.args && typeof f.args == 'object'
                            ? !!f.args.unlink
                            : !1;
                        g.close(m, v);
                      }
                      return w;
                    },
                    exec: function (f) {
                      const m =
                        typeof f.args == 'string'
                          ? { sql: f.args }
                          : f.args || Object.create(null);
                      m.rowMode === 'stmt'
                        ? s(
                            "Invalid rowMode for 'exec': stmt mode",
                            'does not work in the Worker API.',
                          )
                        : m.sql || s("'exec' requires input SQL.");
                      const w = O(f);
                      (m.callback || Array.isArray(m.resultRows)) &&
                        (w._blobXfer = g.xfer);
                      const v = m.callback;
                      let b = 0;
                      const R = !!m.columnNames;
                      typeof v == 'string' &&
                        (R || (m.columnNames = []),
                        (m.callback = function (z, L) {
                          g.post(
                            {
                              type: v,
                              columnNames: m.columnNames,
                              rowNumber: ++b,
                              row: z,
                            },
                            g.xfer,
                          );
                        }));
                      try {
                        w.exec(m),
                          m.callback instanceof Function &&
                            ((m.callback = v),
                            g.post({
                              type: v,
                              columnNames: m.columnNames,
                              rowNumber: null,
                              row: void 0,
                            }));
                      } finally {
                        delete w._blobXfer, m.callback && (m.callback = v);
                      }
                      return m;
                    },
                    'config-get': function () {
                      const f = Object.create(null),
                        m = r.config;
                      return (
                        ['bigIntEnabled'].forEach(function (w) {
                          Object.getOwnPropertyDescriptor(m, w) &&
                            (f[w] = m[w]);
                        }),
                        (f.version = r.version),
                        (f.vfsList = r.capi.sqlite3_js_vfs_list()),
                        (f.opfsEnabled = !!r.opfs),
                        f
                      );
                    },
                    export: function (f) {
                      const m = O(f),
                        w = {
                          byteArray: r.capi.sqlite3_js_db_export(m.pointer),
                          filename: m.filename,
                          mimetype: 'application/x-sqlite3',
                        };
                      return g.xfer.push(w.byteArray.buffer), w;
                    },
                    toss: function (f) {
                      s('Testing worker exception');
                    },
                    'opfs-tree': async function (f) {
                      return (
                        r.opfs || s('OPFS support is unavailable.'),
                        await r.opfs.treeList()
                      );
                    },
                  };
                (globalThis.onmessage = async function (f) {
                  f = f.data;
                  let m,
                    w = f.dbId,
                    v = f.type;
                  const b = performance.now();
                  try {
                    S.hasOwnProperty(v) && S[v] instanceof Function
                      ? (m = await S[v](f))
                      : s('Unknown db worker message type:', f.type);
                  } catch (R) {
                    (v = 'error'),
                      (m = {
                        operation: f.type,
                        message: R.message,
                        errorClass: R.name,
                        input: f,
                      }),
                      R.stack &&
                        (m.stack =
                          typeof R.stack == 'string'
                            ? R.stack.split(/\n\s*/)
                            : R.stack);
                  }
                  w || (w = m.dbId || B()),
                    g.post(
                      {
                        type: v,
                        dbId: w,
                        messageId: f.messageId,
                        workerReceivedTime: b,
                        workerRespondTime: performance.now(),
                        departureTime: f.departureTime,
                        result: m,
                      },
                      g.xfer,
                    );
                }),
                  globalThis.postMessage({
                    type: 'sqlite3-api',
                    result: 'worker1-ready',
                  });
              }.bind({ self, sqlite3: t });
            }),
            globalThis.sqlite3ApiBootstrap.initializers.push(function (t) {
              const s = t.wasm,
                r = t.capi,
                i = t.util.toss3,
                l = Object.create(null),
                g = Object.create(null),
                E = t.StructBinder;
              (t.vfs = l), (t.vtab = g);
              const O = r.sqlite3_index_info;
              (O.prototype.nthConstraint = function (f, m = !1) {
                if (f < 0 || f >= this.$nConstraint) return !1;
                const w =
                  this.$aConstraint +
                  O.sqlite3_index_constraint.structInfo.sizeof * f;
                return m ? w : new O.sqlite3_index_constraint(w);
              }),
                (O.prototype.nthConstraintUsage = function (f, m = !1) {
                  if (f < 0 || f >= this.$nConstraint) return !1;
                  const w =
                    this.$aConstraintUsage +
                    O.sqlite3_index_constraint_usage.structInfo.sizeof * f;
                  return m ? w : new O.sqlite3_index_constraint_usage(w);
                }),
                (O.prototype.nthOrderBy = function (f, m = !1) {
                  if (f < 0 || f >= this.$nOrderBy) return !1;
                  const w =
                    this.$aOrderBy +
                    O.sqlite3_index_orderby.structInfo.sizeof * f;
                  return m ? w : new O.sqlite3_index_orderby(w);
                });
              const B = function f(m, w, v, b = f.installMethodArgcCheck) {
                if (
                  (m instanceof E.StructType
                    ? !(v instanceof Function) &&
                      !s.isPtr(v) &&
                      i(
                        'Usage errror: expecting a Function or WASM pointer to one.',
                      )
                    : i('Usage error: target object is-not-a StructType.'),
                  arguments.length === 1)
                )
                  return (U, G) => f(m, U, G, b);
                f.argcProxy ||
                  ((f.argcProxy = function (U, G, p, x) {
                    return function (...k) {
                      return (
                        p.length !== arguments.length &&
                          i(
                            'Argument mismatch for',
                            U.structInfo.name +
                              '::' +
                              G +
                              ': Native signature is:',
                            x,
                          ),
                        p.apply(this, k)
                      );
                    };
                  }),
                  (f.removeFuncList = function () {
                    this.ondispose.__removeFuncList &&
                      (this.ondispose.__removeFuncList.forEach((U, G) => {
                        if (typeof U == 'number')
                          try {
                            s.uninstallFunction(U);
                          } catch {}
                      }),
                      delete this.ondispose.__removeFuncList);
                  }));
                const R = m.memberSignature(w);
                R.length < 2 &&
                  i(
                    'Member',
                    w,
                    'does not have a function pointer signature:',
                    R,
                  );
                const z = m.memberKey(w),
                  L = b && !s.isPtr(v) ? f.argcProxy(m, z, v, R) : v;
                if (s.isPtr(L))
                  L &&
                    !s.functionEntry(L) &&
                    i('Pointer', L, 'is not a WASM function table entry.'),
                    (m[z] = L);
                else {
                  const U = s.installFunction(L, m.memberSignature(w, !0));
                  (m[z] = U),
                    (!m.ondispose || !m.ondispose.__removeFuncList) &&
                      (m.addOnDispose(
                        'ondispose.__removeFuncList handler',
                        f.removeFuncList,
                      ),
                      (m.ondispose.__removeFuncList = [])),
                    m.ondispose.__removeFuncList.push(z, U);
                }
                return (U, G) => f(m, U, G, b);
              };
              B.installMethodArgcCheck = !1;
              const H = function (f, m, w = B.installMethodArgcCheck) {
                const v = new Map();
                for (const b of Object.keys(m)) {
                  const R = m[b],
                    z = v.get(R);
                  if (z) {
                    const L = f.memberKey(b);
                    f[L] = f[f.memberKey(z)];
                  } else B(f, b, R, w), v.set(R, b);
                }
                return f;
              };
              (E.StructType.prototype.installMethod = function (
                m,
                w,
                v = B.installMethodArgcCheck,
              ) {
                return arguments.length < 3 && m && typeof m == 'object'
                  ? H(this, ...arguments)
                  : B(this, ...arguments);
              }),
                (E.StructType.prototype.installMethods = function (
                  f,
                  m = B.installMethodArgcCheck,
                ) {
                  return H(this, f, m);
                }),
                (r.sqlite3_vfs.prototype.registerVfs = function (f = !1) {
                  this instanceof t.capi.sqlite3_vfs ||
                    i('Expecting a sqlite3_vfs-type argument.');
                  const m = r.sqlite3_vfs_register(this, f ? 1 : 0);
                  return (
                    m &&
                      i('sqlite3_vfs_register(', this, ') failed with rc', m),
                    this.pointer !== r.sqlite3_vfs_find(this.$zName) &&
                      i(
                        'BUG: sqlite3_vfs_find(vfs.$zName) failed for just-installed VFS',
                        this,
                      ),
                    this
                  );
                }),
                (l.installVfs = function (f) {
                  let m = 0;
                  const w = ['io', 'vfs'];
                  for (const v of w) {
                    const b = f[v];
                    b &&
                      (++m,
                      H(b.struct, b.methods, !!b.applyArgcCheck),
                      v === 'vfs' &&
                        (!b.struct.$zName &&
                          typeof b.name == 'string' &&
                          b.struct.addOnDispose(
                            (b.struct.$zName = s.allocCString(b.name)),
                          ),
                        b.struct.registerVfs(!!b.asDefault)));
                  }
                  return (
                    m ||
                      i(
                        'Misuse: installVfs() options object requires at least',
                        'one of:',
                        w,
                      ),
                    this
                  );
                });
              const ee = function (f, m) {
                  return function (w, v = !1) {
                    if (
                      (arguments.length === 0 && (w = new m()), w instanceof m)
                    )
                      return this.set(w.pointer, w), w;
                    s.isPtr(w) ||
                      t.SQLite3Error.toss('Invalid argument to', f + '()');
                    let b = this.get(w);
                    return v && this.delete(w), b;
                  }.bind(new Map());
                },
                S = function (f, m) {
                  const w = ee(f, m);
                  return Object.assign(Object.create(null), {
                    StructType: m,
                    create: (v) => {
                      const b = w();
                      return s.pokePtr(v, b.pointer), b;
                    },
                    get: (v) => w(v),
                    unget: (v) => w(v, !0),
                    dispose: (v) => {
                      const b = w(v, !0);
                      b && b.dispose();
                    },
                  });
                };
              (g.xVtab = S('xVtab', r.sqlite3_vtab)),
                (g.xCursor = S('xCursor', r.sqlite3_vtab_cursor)),
                (g.xIndexInfo = (f) => new r.sqlite3_index_info(f)),
                (g.xError = function f(m, w, v) {
                  if (f.errorReporter instanceof Function)
                    try {
                      f.errorReporter(
                        'sqlite3_module::' + m + '(): ' + w.message,
                      );
                    } catch {}
                  let b;
                  return (
                    w instanceof t.WasmAllocError
                      ? (b = r.SQLITE_NOMEM)
                      : arguments.length > 2
                      ? (b = v)
                      : w instanceof t.SQLite3Error && (b = w.resultCode),
                    b || r.SQLITE_ERROR
                  );
                }),
                (g.xError.errorReporter = console.error.bind(console)),
                (g.xRowid = (f, m) => s.poke(f, m, 'i64')),
                (g.setupModule = function (f) {
                  let m = !1;
                  const w =
                    this instanceof r.sqlite3_module
                      ? this
                      : f.struct || (m = new r.sqlite3_module());
                  try {
                    const v = f.methods || i("Missing 'methods' object.");
                    for (const b of Object.entries({
                      xConnect: 'xCreate',
                      xDisconnect: 'xDestroy',
                    })) {
                      const R = b[0],
                        z = b[1];
                      v[R] === !0
                        ? (v[R] = v[z])
                        : v[z] === !0 && (v[z] = v[R]);
                    }
                    if (f.catchExceptions) {
                      const b = function (L, U) {
                          return ['xConnect', 'xCreate'].indexOf(L) >= 0
                            ? function (G, p, x, k, C, d) {
                                try {
                                  return U(...arguments) || 0;
                                } catch (y) {
                                  return (
                                    y instanceof t.WasmAllocError ||
                                      (s.dealloc(s.peekPtr(d)),
                                      s.pokePtr(d, s.allocCString(y.message))),
                                    g.xError(L, y)
                                  );
                                }
                              }
                            : function (...G) {
                                try {
                                  return U(...G) || 0;
                                } catch (p) {
                                  return g.xError(L, p);
                                }
                              };
                        },
                        R = [
                          'xCreate',
                          'xConnect',
                          'xBestIndex',
                          'xDisconnect',
                          'xDestroy',
                          'xOpen',
                          'xClose',
                          'xFilter',
                          'xNext',
                          'xEof',
                          'xColumn',
                          'xRowid',
                          'xUpdate',
                          'xBegin',
                          'xSync',
                          'xCommit',
                          'xRollback',
                          'xFindFunction',
                          'xRename',
                          'xSavepoint',
                          'xRelease',
                          'xRollbackTo',
                          'xShadowName',
                        ],
                        z = Object.create(null);
                      for (const L of R) {
                        const U = v[L];
                        if (U instanceof Function)
                          L === 'xConnect' && v.xCreate === U
                            ? (z[L] = v.xCreate)
                            : L === 'xCreate' && v.xConnect === U
                            ? (z[L] = v.xConnect)
                            : (z[L] = b(L, U));
                        else continue;
                      }
                      H(w, z, !1);
                    } else H(w, v, !!f.applyArgcCheck);
                    if (w.$iVersion === 0) {
                      let b;
                      typeof f.iVersion == 'number'
                        ? (b = f.iVersion)
                        : w.$xShadowName
                        ? (b = 3)
                        : w.$xSavePoint || w.$xRelease || w.$xRollbackTo
                        ? (b = 2)
                        : (b = 1),
                        (w.$iVersion = b);
                    }
                  } catch (v) {
                    throw (m && m.dispose(), v);
                  }
                  return w;
                }),
                (r.sqlite3_module.prototype.setupModule = function (f) {
                  return g.setupModule.call(this, f);
                });
            }),
            globalThis.sqlite3ApiBootstrap.initializers.push(function (t) {
              const s = function r(i) {
                if (!globalThis.SharedArrayBuffer || !globalThis.Atomics)
                  return Promise.reject(
                    new Error(
                      'Cannot install OPFS: Missing SharedArrayBuffer and/or Atomics. The server must emit the COOP/COEP response headers to enable those. See https://sqlite.org/wasm/doc/trunk/persistence.md#coop-coep',
                    ),
                  );
                if (typeof WorkerGlobalScope > 'u')
                  return Promise.reject(
                    new Error(
                      'The OPFS sqlite3_vfs cannot run in the main thread because it requires Atomics.wait().',
                    ),
                  );
                if (
                  !globalThis.FileSystemHandle ||
                  !globalThis.FileSystemDirectoryHandle ||
                  !globalThis.FileSystemFileHandle ||
                  !globalThis.FileSystemFileHandle.prototype
                    .createSyncAccessHandle ||
                  !navigator?.storage?.getDirectory
                )
                  return Promise.reject(
                    new Error('Missing required OPFS APIs.'),
                  );
                (!i || typeof i != 'object') && (i = Object.create(null));
                const l = new URL(globalThis.location.href).searchParams;
                return (
                  i.verbose === void 0 &&
                    (i.verbose = l.has('opfs-verbose')
                      ? +l.get('opfs-verbose') || 2
                      : 1),
                  i.sanityChecks === void 0 &&
                    (i.sanityChecks = l.has('opfs-sanity-check')),
                  i.proxyUri === void 0 && (i.proxyUri = r.defaultProxyUri),
                  typeof i.proxyUri == 'function' &&
                    (i.proxyUri = i.proxyUri()),
                  new Promise(function (E, O) {
                    const B = {
                        0: t.config.error,
                        1: t.config.warn,
                        2: t.config.log,
                      },
                      H = (A, ...M) => {
                        i.verbose > A && B[A]('OPFS syncer:', ...M);
                      },
                      ee = (...A) => H(2, ...A),
                      S = (...A) => H(1, ...A),
                      f = (...A) => H(0, ...A),
                      m = t.util.toss,
                      w = t.capi,
                      v = t.wasm,
                      b = w.sqlite3_vfs,
                      R = w.sqlite3_file,
                      z = w.sqlite3_io_methods,
                      L = Object.create(null),
                      U = () =>
                        globalThis.FileSystemHandle &&
                        globalThis.FileSystemDirectoryHandle &&
                        globalThis.FileSystemFileHandle &&
                        globalThis.FileSystemFileHandle.prototype
                          .createSyncAccessHandle &&
                        navigator?.storage?.getDirectory;
                    L.metrics = {
                      dump: function () {
                        let A,
                          M = 0,
                          j = 0,
                          Y = 0;
                        for (A in c.opIds) {
                          const V = q[A];
                          (M += V.count),
                            (j += V.time),
                            (Y += V.wait),
                            (V.avgTime =
                              V.count && V.time ? V.time / V.count : 0),
                            (V.avgWait =
                              V.count && V.wait ? V.wait / V.count : 0);
                        }
                        t.config.log(
                          globalThis.location.href,
                          'metrics for',
                          globalThis.location.href,
                          ':',
                          q,
                          `
Total of`,
                          M,
                          'op(s) for',
                          j,
                          'ms (incl. ' +
                            Y +
                            ' ms of waiting on the async side)',
                        ),
                          t.config.log('Serialization metrics:', q.s11n),
                          d.postMessage({ type: 'opfs-async-metrics' });
                      },
                      reset: function () {
                        let A;
                        const M = (Y) => (Y.count = Y.time = Y.wait = 0);
                        for (A in c.opIds) M((q[A] = Object.create(null)));
                        let j = (q.s11n = Object.create(null));
                        (j = j.serialize = Object.create(null)),
                          (j.count = j.time = 0),
                          (j = q.s11n.deserialize = Object.create(null)),
                          (j.count = j.time = 0);
                      },
                    };
                    const G = new b(),
                      p = new z();
                    let x;
                    const k = (A) => ((x = !0), G.dispose(), O(A)),
                      C = (A) => ((x = !1), E(A)),
                      d = new Worker(
                        new URL(
                          '/assets/sqlite3-opfs-async-proxy-7cc9182b.js',
                          self.location,
                        ),
                      );
                    setTimeout(() => {
                      x === void 0 &&
                        k(
                          new Error(
                            'Timeout while waiting for OPFS async proxy worker.',
                          ),
                        );
                    }, 4e3),
                      (d._originalOnError = d.onerror),
                      (d.onerror = function (A) {
                        f('Error initializing OPFS asyncer:', A),
                          k(
                            new Error(
                              'Loading OPFS async Worker failed for unknown reasons.',
                            ),
                          );
                      });
                    const y = w.sqlite3_vfs_find(null),
                      a = y ? new b(y) : null;
                    (G.$iVersion = 2),
                      (G.$szOsFile = w.sqlite3_file.structInfo.sizeof),
                      (G.$mxPathname = 1024),
                      (G.$zName = v.allocCString('opfs')),
                      (G.$xDlOpen =
                        G.$xDlError =
                        G.$xDlSym =
                        G.$xDlClose =
                          null),
                      (G.ondispose = [
                        '$zName',
                        G.$zName,
                        'cleanup default VFS wrapper',
                        () => (a ? a.dispose() : null),
                        'cleanup opfsIoMethods',
                        () => p.dispose(),
                      ]);
                    const c = Object.create(null);
                    (c.verbose = i.verbose),
                      (c.littleEndian = (() => {
                        const A = new ArrayBuffer(2);
                        return (
                          new DataView(A).setInt16(0, 256, !0),
                          new Int16Array(A)[0] === 256
                        );
                      })()),
                      (c.asyncIdleWaitTime = 150),
                      (c.asyncS11nExceptions = 1),
                      (c.fileBufferSize = 1024 * 64),
                      (c.sabS11nOffset = c.fileBufferSize),
                      (c.sabS11nSize = G.$mxPathname * 2),
                      (c.sabIO = new SharedArrayBuffer(
                        c.fileBufferSize + c.sabS11nSize,
                      )),
                      (c.opIds = Object.create(null));
                    const q = Object.create(null);
                    {
                      let A = 0;
                      (c.opIds.whichOp = A++),
                        (c.opIds.rc = A++),
                        (c.opIds.xAccess = A++),
                        (c.opIds.xClose = A++),
                        (c.opIds.xDelete = A++),
                        (c.opIds.xDeleteNoWait = A++),
                        (c.opIds.xFileSize = A++),
                        (c.opIds.xLock = A++),
                        (c.opIds.xOpen = A++),
                        (c.opIds.xRead = A++),
                        (c.opIds.xSleep = A++),
                        (c.opIds.xSync = A++),
                        (c.opIds.xTruncate = A++),
                        (c.opIds.xUnlock = A++),
                        (c.opIds.xWrite = A++),
                        (c.opIds.mkdir = A++),
                        (c.opIds['opfs-async-metrics'] = A++),
                        (c.opIds['opfs-async-shutdown'] = A++),
                        (c.opIds.retry = A++),
                        (c.sabOP = new SharedArrayBuffer(A * 4)),
                        L.metrics.reset();
                    }
                    (c.sq3Codes = Object.create(null)),
                      [
                        'SQLITE_ACCESS_EXISTS',
                        'SQLITE_ACCESS_READWRITE',
                        'SQLITE_BUSY',
                        'SQLITE_ERROR',
                        'SQLITE_IOERR',
                        'SQLITE_IOERR_ACCESS',
                        'SQLITE_IOERR_CLOSE',
                        'SQLITE_IOERR_DELETE',
                        'SQLITE_IOERR_FSYNC',
                        'SQLITE_IOERR_LOCK',
                        'SQLITE_IOERR_READ',
                        'SQLITE_IOERR_SHORT_READ',
                        'SQLITE_IOERR_TRUNCATE',
                        'SQLITE_IOERR_UNLOCK',
                        'SQLITE_IOERR_WRITE',
                        'SQLITE_LOCK_EXCLUSIVE',
                        'SQLITE_LOCK_NONE',
                        'SQLITE_LOCK_PENDING',
                        'SQLITE_LOCK_RESERVED',
                        'SQLITE_LOCK_SHARED',
                        'SQLITE_LOCKED',
                        'SQLITE_MISUSE',
                        'SQLITE_NOTFOUND',
                        'SQLITE_OPEN_CREATE',
                        'SQLITE_OPEN_DELETEONCLOSE',
                        'SQLITE_OPEN_MAIN_DB',
                        'SQLITE_OPEN_READONLY',
                      ].forEach((A) => {
                        (c.sq3Codes[A] = w[A]) === void 0 &&
                          m('Maintenance required: not found:', A);
                      }),
                      (c.opfsFlags = Object.assign(Object.create(null), {
                        OPFS_UNLOCK_ASAP: 1,
                        defaultUnlockAsap: !1,
                      }));
                    const F = (A, ...M) => {
                      const j = c.opIds[A] || m('Invalid op ID:', A);
                      c.s11n.serialize(...M),
                        Atomics.store(c.sabOPView, c.opIds.rc, -1),
                        Atomics.store(c.sabOPView, c.opIds.whichOp, j),
                        Atomics.notify(c.sabOPView, c.opIds.whichOp);
                      const Y = performance.now();
                      Atomics.wait(c.sabOPView, c.opIds.rc, -1);
                      const V = Atomics.load(c.sabOPView, c.opIds.rc);
                      if (
                        ((q[A].wait += performance.now() - Y),
                        V && c.asyncS11nExceptions)
                      ) {
                        const ge = c.s11n.deserialize();
                        ge && f(A + '() async error:', ...ge);
                      }
                      return V;
                    };
                    L.debug = {
                      asyncShutdown: () => {
                        S(
                          'Shutting down OPFS async listener. The OPFS VFS will no longer work.',
                        ),
                          F('opfs-async-shutdown');
                      },
                      asyncRestart: () => {
                        S(
                          'Attempting to restart OPFS VFS async listener. Might work, might not.',
                        ),
                          d.postMessage({ type: 'opfs-async-restart' });
                      },
                    };
                    const Q = () => {
                        if (c.s11n) return c.s11n;
                        const A = new TextDecoder(),
                          M = new TextEncoder('utf-8'),
                          j = new Uint8Array(
                            c.sabIO,
                            c.sabS11nOffset,
                            c.sabS11nSize,
                          ),
                          Y = new DataView(
                            c.sabIO,
                            c.sabS11nOffset,
                            c.sabS11nSize,
                          );
                        c.s11n = Object.create(null);
                        const V = Object.create(null);
                        (V.number = {
                          id: 1,
                          size: 8,
                          getter: 'getFloat64',
                          setter: 'setFloat64',
                        }),
                          (V.bigint = {
                            id: 2,
                            size: 8,
                            getter: 'getBigInt64',
                            setter: 'setBigInt64',
                          }),
                          (V.boolean = {
                            id: 3,
                            size: 4,
                            getter: 'getInt32',
                            setter: 'setInt32',
                          }),
                          (V.string = { id: 4 });
                        const ge = (Z) =>
                            V[typeof Z] ||
                            m(
                              'Maintenance required: this value type cannot be serialized.',
                              Z,
                            ),
                          ve = (Z) => {
                            switch (Z) {
                              case V.number.id:
                                return V.number;
                              case V.bigint.id:
                                return V.bigint;
                              case V.boolean.id:
                                return V.boolean;
                              case V.string.id:
                                return V.string;
                              default:
                                m('Invalid type ID:', Z);
                            }
                          };
                        return (
                          (c.s11n.deserialize = function (Z = !1) {
                            ++q.s11n.deserialize.count;
                            const Qe = performance.now(),
                              Ne = j[0],
                              Fe = Ne ? [] : null;
                            if (Ne) {
                              const T = [];
                              let W = 1,
                                $,
                                X,
                                qe;
                              for ($ = 0; $ < Ne; ++$, ++W) T.push(ve(j[W]));
                              for ($ = 0; $ < Ne; ++$) {
                                const ke = T[$];
                                ke.getter
                                  ? ((qe = Y[ke.getter](W, c.littleEndian)),
                                    (W += ke.size))
                                  : ((X = Y.getInt32(W, c.littleEndian)),
                                    (W += 4),
                                    (qe = A.decode(j.slice(W, W + X))),
                                    (W += X)),
                                  Fe.push(qe);
                              }
                            }
                            return (
                              Z && (j[0] = 0),
                              (q.s11n.deserialize.time +=
                                performance.now() - Qe),
                              Fe
                            );
                          }),
                          (c.s11n.serialize = function (...Z) {
                            const Qe = performance.now();
                            if ((++q.s11n.serialize.count, Z.length)) {
                              const Ne = [];
                              let Fe = 0,
                                T = 1;
                              for (
                                j[0] = Z.length & 255;
                                Fe < Z.length;
                                ++Fe, ++T
                              )
                                Ne.push(ge(Z[Fe])), (j[T] = Ne[Fe].id);
                              for (Fe = 0; Fe < Z.length; ++Fe) {
                                const W = Ne[Fe];
                                if (W.setter)
                                  Y[W.setter](T, Z[Fe], c.littleEndian),
                                    (T += W.size);
                                else {
                                  const $ = M.encode(Z[Fe]);
                                  Y.setInt32(T, $.byteLength, c.littleEndian),
                                    (T += 4),
                                    j.set($, T),
                                    (T += $.byteLength);
                                }
                              }
                            } else j[0] = 0;
                            q.s11n.serialize.time += performance.now() - Qe;
                          }),
                          c.s11n
                        );
                      },
                      re = function A(M = 16) {
                        A._chars ||
                          ((A._chars =
                            'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012346789'),
                          (A._n = A._chars.length));
                        const j = [];
                        let Y = 0;
                        for (; Y < M; ++Y) {
                          const V = (Math.random() * (A._n * 64)) % A._n | 0;
                          j[Y] = A._chars[V];
                        }
                        return j.join('');
                      },
                      ne = Object.create(null),
                      ce = Object.create(null);
                    (ce.op = void 0), (ce.start = void 0);
                    const le = (A) => {
                        (ce.start = performance.now()),
                          (ce.op = A),
                          ++q[A].count;
                      },
                      ue = () =>
                        (q[ce.op].time += performance.now() - ce.start),
                      ye = {
                        xCheckReservedLock: function (A, M) {
                          const j = ne[A];
                          return v.poke(M, j.lockType ? 1 : 0, 'i32'), 0;
                        },
                        xClose: function (A) {
                          le('xClose');
                          let M = 0;
                          const j = ne[A];
                          return (
                            j &&
                              (delete ne[A],
                              (M = F('xClose', A)),
                              j.sq3File && j.sq3File.dispose()),
                            ue(),
                            M
                          );
                        },
                        xDeviceCharacteristics: function (A) {
                          return w.SQLITE_IOCAP_UNDELETABLE_WHEN_OPEN;
                        },
                        xFileControl: function (A, M, j) {
                          return w.SQLITE_NOTFOUND;
                        },
                        xFileSize: function (A, M) {
                          le('xFileSize');
                          let j = F('xFileSize', A);
                          if (j == 0)
                            try {
                              const Y = c.s11n.deserialize()[0];
                              v.poke(M, Y, 'i64');
                            } catch (Y) {
                              f(
                                'Unexpected error reading xFileSize() result:',
                                Y,
                              ),
                                (j = c.sq3Codes.SQLITE_IOERR);
                            }
                          return ue(), j;
                        },
                        xLock: function (A, M) {
                          le('xLock');
                          const j = ne[A];
                          let Y = 0;
                          return (
                            j.lockType
                              ? (j.lockType = M)
                              : ((Y = F('xLock', A, M)),
                                Y === 0 && (j.lockType = M)),
                            ue(),
                            Y
                          );
                        },
                        xRead: function (A, M, j, Y) {
                          le('xRead');
                          const V = ne[A];
                          let ge;
                          try {
                            (ge = F('xRead', A, j, Number(Y))),
                              (ge === 0 || w.SQLITE_IOERR_SHORT_READ === ge) &&
                                v.heap8u().set(V.sabView.subarray(0, j), M);
                          } catch (ve) {
                            f('xRead(', arguments, ') failed:', ve, V),
                              (ge = w.SQLITE_IOERR_READ);
                          }
                          return ue(), ge;
                        },
                        xSync: function (A, M) {
                          le('xSync'), ++q.xSync.count;
                          const j = F('xSync', A, M);
                          return ue(), j;
                        },
                        xTruncate: function (A, M) {
                          le('xTruncate');
                          const j = F('xTruncate', A, Number(M));
                          return ue(), j;
                        },
                        xUnlock: function (A, M) {
                          le('xUnlock');
                          const j = ne[A];
                          let Y = 0;
                          return (
                            w.SQLITE_LOCK_NONE === M &&
                              j.lockType &&
                              (Y = F('xUnlock', A, M)),
                            Y === 0 && (j.lockType = M),
                            ue(),
                            Y
                          );
                        },
                        xWrite: function (A, M, j, Y) {
                          le('xWrite');
                          const V = ne[A];
                          let ge;
                          try {
                            V.sabView.set(v.heap8u().subarray(M, M + j)),
                              (ge = F('xWrite', A, j, Number(Y)));
                          } catch (ve) {
                            f('xWrite(', arguments, ') failed:', ve, V),
                              (ge = w.SQLITE_IOERR_WRITE);
                          }
                          return ue(), ge;
                        },
                      },
                      Se = {
                        xAccess: function (A, M, j, Y) {
                          le('xAccess');
                          const V = F('xAccess', v.cstrToJs(M));
                          return v.poke(Y, V ? 0 : 1, 'i32'), ue(), 0;
                        },
                        xCurrentTime: function (A, M) {
                          return (
                            v.poke(
                              M,
                              24405875e-1 + new Date().getTime() / 864e5,
                              'double',
                            ),
                            0
                          );
                        },
                        xCurrentTimeInt64: function (A, M) {
                          return (
                            v.poke(
                              M,
                              24405875e-1 * 864e5 + new Date().getTime(),
                              'i64',
                            ),
                            0
                          );
                        },
                        xDelete: function (A, M, j) {
                          return (
                            le('xDelete'),
                            F('xDelete', v.cstrToJs(M), j, !1),
                            ue(),
                            0
                          );
                        },
                        xFullPathname: function (A, M, j, Y) {
                          return v.cstrncpy(Y, M, j) < j
                            ? 0
                            : w.SQLITE_CANTOPEN;
                        },
                        xGetLastError: function (A, M, j) {
                          return (
                            S(
                              'OPFS xGetLastError() has nothing sensible to return.',
                            ),
                            0
                          );
                        },
                        xOpen: function (M, j, Y, V, ge) {
                          le('xOpen');
                          let ve = 0;
                          j === 0
                            ? (j = re())
                            : typeof j == 'number' &&
                              (w.sqlite3_uri_boolean(
                                j,
                                'opfs-unlock-asap',
                                0,
                              ) && (ve |= c.opfsFlags.OPFS_UNLOCK_ASAP),
                              (j = v.cstrToJs(j)));
                          const Z = Object.create(null);
                          (Z.fid = Y),
                            (Z.filename = j),
                            (Z.sab = new SharedArrayBuffer(c.fileBufferSize)),
                            (Z.flags = V);
                          const Qe = F('xOpen', Y, j, V, ve);
                          return (
                            Qe ||
                              (Z.readOnly &&
                                v.poke(ge, w.SQLITE_OPEN_READONLY, 'i32'),
                              (ne[Y] = Z),
                              (Z.sabView = c.sabFileBufView),
                              (Z.sq3File = new R(Y)),
                              (Z.sq3File.$pMethods = p.pointer),
                              (Z.lockType = w.SQLITE_LOCK_NONE)),
                            ue(),
                            Qe
                          );
                        },
                      };
                    if (
                      (a &&
                        ((G.$xRandomness = a.$xRandomness),
                        (G.$xSleep = a.$xSleep)),
                      G.$xRandomness ||
                        (Se.xRandomness = function (A, M, j) {
                          const Y = v.heap8u();
                          let V = 0;
                          for (; V < M; ++V)
                            Y[j + V] = (Math.random() * 255e3) & 255;
                          return V;
                        }),
                      G.$xSleep ||
                        (Se.xSleep = function (A, M) {
                          return (
                            Atomics.wait(c.sabOPView, c.opIds.xSleep, 0, M), 0
                          );
                        }),
                      (L.getResolvedPath = function (A, M) {
                        const j = new URL(A, 'file://irrelevant').pathname;
                        return M ? j.split('/').filter((Y) => !!Y) : j;
                      }),
                      (L.getDirForFilename = async function (M, j = !1) {
                        const Y = L.getResolvedPath(M, !0),
                          V = Y.pop();
                        let ge = L.rootDirectory;
                        for (const ve of Y)
                          ve &&
                            (ge = await ge.getDirectoryHandle(ve, {
                              create: !!j,
                            }));
                        return [ge, V];
                      }),
                      (L.mkdir = async function (A) {
                        try {
                          return (
                            await L.getDirForFilename(A + '/filepart', !0), !0
                          );
                        } catch {
                          return !1;
                        }
                      }),
                      (L.entryExists = async function (A) {
                        try {
                          const [M, j] = await L.getDirForFilename(A);
                          return await M.getFileHandle(j), !0;
                        } catch {
                          return !1;
                        }
                      }),
                      (L.randomFilename = re),
                      (L.registerVfs = (A = !1) =>
                        v.exports.sqlite3_vfs_register(G.pointer, A ? 1 : 0)),
                      (L.treeList = async function () {
                        const A = async function j(Y, V) {
                            (V.name = Y.name), (V.dirs = []), (V.files = []);
                            for await (const ge of Y.values())
                              if (ge.kind === 'directory') {
                                const ve = Object.create(null);
                                V.dirs.push(ve), await j(ge, ve);
                              } else V.files.push(ge.name);
                          },
                          M = Object.create(null);
                        return await A(L.rootDirectory, M), M;
                      }),
                      (L.rmfr = async function () {
                        const A = L.rootDirectory,
                          M = { recurse: !0 };
                        for await (const j of A.values())
                          A.removeEntry(j.name, M);
                      }),
                      (L.unlink = async function (A, M = !1, j = !1) {
                        try {
                          const [Y, V] = await L.getDirForFilename(A, !1);
                          return await Y.removeEntry(V, { recursive: M }), !0;
                        } catch (Y) {
                          if (j)
                            throw new Error(
                              'unlink(',
                              arguments[0],
                              ') failed: ' + Y.message,
                              { cause: Y },
                            );
                          return !1;
                        }
                      }),
                      (L.traverse = async function (A) {
                        const M = { recursive: !0, directory: L.rootDirectory };
                        typeof A == 'function' && (A = { callback: A }),
                          (A = Object.assign(M, A || {})),
                          (async function Y(V, ge) {
                            for await (const ve of V.values()) {
                              if (A.callback(ve, V, ge) === !1) return !1;
                              if (
                                A.recursive &&
                                ve.kind === 'directory' &&
                                (await Y(ve, ge + 1)) === !1
                              )
                                break;
                            }
                          })(A.directory, 0);
                      }),
                      t.oo1)
                    ) {
                      const A = function (...M) {
                        const j = t.oo1.DB.dbCtorHelper.normalizeArgs(...M);
                        (j.vfs = G.$zName), t.oo1.DB.dbCtorHelper.call(this, j);
                      };
                      (A.prototype = Object.create(t.oo1.DB.prototype)),
                        (t.oo1.OpfsDb = A),
                        t.oo1.DB.dbCtorHelper.setVfsPostOpenSql(
                          G.pointer,
                          function (M, j) {
                            j.capi.sqlite3_busy_timeout(M, 1e4),
                              j.capi.sqlite3_exec(
                                M,
                                [
                                  'pragma journal_mode=persist;',
                                  'pragma cache_size=-16384;',
                                ],
                                0,
                                0,
                                0,
                              );
                          },
                        );
                    }
                    const Ze = function () {
                      const A = v.scopedAllocPush(),
                        M = new R();
                      try {
                        const j = M.pointer,
                          Y =
                            w.SQLITE_OPEN_CREATE |
                            w.SQLITE_OPEN_READWRITE |
                            w.SQLITE_OPEN_MAIN_DB,
                          V = v.scopedAlloc(8),
                          ge = '/sanity/check/file' + re(8),
                          ve = v.scopedAllocCString(ge);
                        let Z;
                        if (
                          (c.s11n.serialize('This is ä string.'),
                          (Z = c.s11n.deserialize()),
                          ee('deserialize() says:', Z),
                          Z[0] !== 'This is ä string.' &&
                            m('String d13n error.'),
                          Se.xAccess(G.pointer, ve, 0, V),
                          (Z = v.peek(V, 'i32')),
                          ee('xAccess(', ge, ') exists ?=', Z),
                          (Z = Se.xOpen(G.pointer, ve, j, Y, V)),
                          ee(
                            'open rc =',
                            Z,
                            'state.sabOPView[xOpen] =',
                            c.sabOPView[c.opIds.xOpen],
                          ),
                          Z !== 0)
                        ) {
                          f('open failed with code', Z);
                          return;
                        }
                        Se.xAccess(G.pointer, ve, 0, V),
                          (Z = v.peek(V, 'i32')),
                          Z || m('xAccess() failed to detect file.'),
                          (Z = ye.xSync(M.pointer, 0)),
                          Z && m('sync failed w/ rc', Z),
                          (Z = ye.xTruncate(M.pointer, 1024)),
                          Z && m('truncate failed w/ rc', Z),
                          v.poke(V, 0, 'i64'),
                          (Z = ye.xFileSize(M.pointer, V)),
                          Z && m('xFileSize failed w/ rc', Z),
                          ee('xFileSize says:', v.peek(V, 'i64')),
                          (Z = ye.xWrite(M.pointer, ve, 10, 1)),
                          Z && m('xWrite() failed!');
                        const Qe = v.scopedAlloc(16);
                        (Z = ye.xRead(M.pointer, Qe, 6, 2)), v.poke(Qe + 6, 0);
                        let Ne = v.cstrToJs(Qe);
                        ee('xRead() got:', Ne),
                          Ne !== 'sanity' && m('Unexpected xRead() value.'),
                          Se.xSleep &&
                            (ee('xSleep()ing before close()ing...'),
                            Se.xSleep(G.pointer, 2e3),
                            ee('waking up from xSleep()')),
                          (Z = ye.xClose(j)),
                          ee('xClose rc =', Z, 'sabOPView =', c.sabOPView),
                          ee('Deleting file:', ge),
                          Se.xDelete(G.pointer, ve, 4660),
                          Se.xAccess(G.pointer, ve, 0, V),
                          (Z = v.peek(V, 'i32')),
                          Z &&
                            m(
                              'Expecting 0 from xAccess(',
                              ge,
                              ') after xDelete().',
                            ),
                          S('End of OPFS sanity checks.');
                      } finally {
                        M.dispose(), v.scopedAllocPop(A);
                      }
                    };
                    d.onmessage = function ({ data: A }) {
                      switch (A.type) {
                        case 'opfs-unavailable':
                          k(new Error(A.payload.join(' ')));
                          break;
                        case 'opfs-async-loaded':
                          d.postMessage({ type: 'opfs-async-init', args: c });
                          break;
                        case 'opfs-async-inited': {
                          if (x === !0) break;
                          try {
                            t.vfs.installVfs({
                              io: { struct: p, methods: ye },
                              vfs: { struct: G, methods: Se },
                            }),
                              (c.sabOPView = new Int32Array(c.sabOP)),
                              (c.sabFileBufView = new Uint8Array(
                                c.sabIO,
                                0,
                                c.fileBufferSize,
                              )),
                              (c.sabS11nView = new Uint8Array(
                                c.sabIO,
                                c.sabS11nOffset,
                                c.sabS11nSize,
                              )),
                              Q(),
                              i.sanityChecks &&
                                (S(
                                  'Running sanity checks because of opfs-sanity-check URL arg...',
                                ),
                                Ze()),
                              U()
                                ? navigator.storage
                                    .getDirectory()
                                    .then((M) => {
                                      (d.onerror = d._originalOnError),
                                        delete d._originalOnError,
                                        (t.opfs = L),
                                        (L.rootDirectory = M),
                                        ee('End of OPFS sqlite3_vfs setup.', G),
                                        C(t);
                                    })
                                    .catch(k)
                                : C(t);
                          } catch (M) {
                            f(M), k(M);
                          }
                          break;
                        }
                        default: {
                          const M =
                            'Unexpected message from the OPFS async worker: ' +
                            JSON.stringify(A);
                          f(M), k(new Error(M));
                          break;
                        }
                      }
                    };
                  })
                );
              };
              (s.defaultProxyUri = 'sqlite3-opfs-async-proxy.js'),
                globalThis.sqlite3ApiBootstrap.initializersAsync.push(
                  async (r) => {
                    try {
                      let i = s.defaultProxyUri;
                      return (
                        r.scriptInfo.sqlite3Dir &&
                          (s.defaultProxyUri = r.scriptInfo.sqlite3Dir + i),
                        s().catch((l) => {
                          r.config.warn(
                            'Ignoring inability to install OPFS sqlite3_vfs:',
                            l.message,
                          );
                        })
                      );
                    } catch (i) {
                      throw (
                        (r.config.error('installOpfsVfs() exception:', i), i)
                      );
                    }
                  },
                );
            }),
            typeof n < 'u')
          ) {
            const t = Object.assign(
              Object.create(null),
              { exports: n.asm, memory: n.wasmMemory },
              globalThis.sqlite3ApiConfig || {},
            );
            globalThis.sqlite3ApiConfig = t;
            let s;
            try {
              s = globalThis.sqlite3ApiBootstrap();
            } catch (r) {
              throw (console.error('sqlite3ApiBootstrap() error:', r), r);
            } finally {
              delete globalThis.sqlite3ApiBootstrap,
                delete globalThis.sqlite3ApiConfig;
            }
            n.sqlite3 = s;
          } else console.warn('This is not running in an Emscripten module context, so', 'globalThis.sqlite3ApiBootstrap() is _not_ being called due to lack', 'of config info for the WASM environment.', 'It must be called manually.');
        }),
        _.ready
      );
    };
  })();
  const cn = (function () {
    const P = an;
    if (!P)
      throw new Error(
        'Expecting globalThis.sqlite3InitModule to be defined by the Emscripten build.',
      );
    const u = (globalThis.sqlite3InitModuleState = Object.assign(
      Object.create(null),
      {
        moduleScript: globalThis?.document?.currentScript,
        isWorker: typeof WorkerGlobalScope < 'u',
        location: globalThis.location,
        urlParams: globalThis?.location?.href
          ? new URL(globalThis.location.href).searchParams
          : new URLSearchParams(),
      },
    ));
    if (
      ((u.debugModule = u.urlParams.has('sqlite3.debugModule')
        ? (..._) => console.warn('sqlite3.debugModule:', ..._)
        : () => {}),
      u.urlParams.has('sqlite3.dir'))
    )
      u.sqlite3Dir = u.urlParams.get('sqlite3.dir') + '/';
    else if (u.moduleScript) {
      const _ = u.moduleScript.src.split('/');
      _.pop(), (u.sqlite3Dir = _.join('/') + '/');
    }
    if (
      ((globalThis.sqlite3InitModule = function _(...e) {
        return P(...e)
          .then((h) => {
            if (
              typeof WorkerGlobalScope < 'u' &&
              (h.ENVIRONMENT_IS_PTHREAD ||
                h._pthread_self ||
                typeof threadAlert == 'function' ||
                globalThis?.location?.pathname?.endsWith?.('.worker.js'))
            )
              return h;
            const I = h.sqlite3;
            (I.scriptInfo = u), _.__isUnderTest && (I.__isUnderTest = !0);
            const D = I.asyncPostInit;
            return delete I.asyncPostInit, D();
          })
          .catch((h) => {
            throw (console.error('Exception loading sqlite3 module:', h), h);
          });
      }),
      (globalThis.sqlite3InitModule.ready = P.ready),
      globalThis.sqlite3InitModuleState.moduleScript)
    ) {
      const _ = globalThis.sqlite3InitModuleState;
      let e = _.moduleScript.src.split('/');
      e.pop(), (_.scriptDir = e.join('/') + '/');
    }
    return (
      u.debugModule('sqlite3InitModuleState =', u), globalThis.sqlite3InitModule
    );
  })();
  function St() {
    return {
      async: !1,
      baseUrl: null,
      breaks: !1,
      extensions: null,
      gfm: !0,
      headerIds: !0,
      headerPrefix: '',
      highlight: null,
      hooks: null,
      langPrefix: 'language-',
      mangle: !0,
      pedantic: !1,
      renderer: null,
      sanitize: !1,
      sanitizer: null,
      silent: !1,
      smartypants: !1,
      tokenizer: null,
      walkTokens: null,
      xhtml: !1,
    };
  }
  let Ye = St();
  function un(P) {
    Ye = P;
  }
  const At = /[&<>"']/,
    _n = new RegExp(At.source, 'g'),
    It = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
    fn = new RegExp(It.source, 'g'),
    pn = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    },
    Tt = (P) => pn[P];
  function Le(P, u) {
    if (u) {
      if (At.test(P)) return P.replace(_n, Tt);
    } else if (It.test(P)) return P.replace(fn, Tt);
    return P;
  }
  const dn = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
  function Ft(P) {
    return P.replace(
      dn,
      (u, _) => (
        (_ = _.toLowerCase()),
        _ === 'colon'
          ? ':'
          : _.charAt(0) === '#'
          ? _.charAt(1) === 'x'
            ? String.fromCharCode(parseInt(_.substring(2), 16))
            : String.fromCharCode(+_.substring(1))
          : ''
      ),
    );
  }
  const mn = /(^|[^\[])\^/g;
  function xe(P, u) {
    (P = typeof P == 'string' ? P : P.source), (u = u || '');
    const _ = {
      replace: (e, h) => (
        (h = h.source || h), (h = h.replace(mn, '$1')), (P = P.replace(e, h)), _
      ),
      getRegex: () => new RegExp(P, u),
    };
    return _;
  }
  const hn = /[^\w:]/g,
    gn = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
  function Ot(P, u, _) {
    if (P) {
      let e;
      try {
        e = decodeURIComponent(Ft(_)).replace(hn, '').toLowerCase();
      } catch {
        return null;
      }
      if (
        e.indexOf('javascript:') === 0 ||
        e.indexOf('vbscript:') === 0 ||
        e.indexOf('data:') === 0
      )
        return null;
    }
    u && !gn.test(_) && (_ = wn(u, _));
    try {
      _ = encodeURI(_).replace(/%25/g, '%');
    } catch {
      return null;
    }
    return _;
  }
  const at = {},
    bn = /^[^:]+:\/*[^/]*$/,
    yn = /^([^:]+:)[\s\S]*$/,
    qn = /^([^:]+:\/*[^/]*)[\s\S]*$/;
  function wn(P, u) {
    at[' ' + P] ||
      (bn.test(P) ? (at[' ' + P] = P + '/') : (at[' ' + P] = ut(P, '/', !0))),
      (P = at[' ' + P]);
    const _ = P.indexOf(':') === -1;
    return u.substring(0, 2) === '//'
      ? _
        ? u
        : P.replace(yn, '$1') + u
      : u.charAt(0) === '/'
      ? _
        ? u
        : P.replace(qn, '$1') + u
      : P + u;
  }
  const ct = { exec: function () {} };
  function Pt(P, u) {
    const _ = P.replace(/\|/g, (I, D, N) => {
        let K = !1,
          de = D;
        for (; --de >= 0 && N[de] === '\\'; ) K = !K;
        return K ? '|' : ' |';
      }),
      e = _.split(/ \|/);
    let h = 0;
    if (
      (e[0].trim() || e.shift(),
      e.length > 0 && !e[e.length - 1].trim() && e.pop(),
      e.length > u)
    )
      e.splice(u);
    else for (; e.length < u; ) e.push('');
    for (; h < e.length; h++) e[h] = e[h].trim().replace(/\\\|/g, '|');
    return e;
  }
  function ut(P, u, _) {
    const e = P.length;
    if (e === 0) return '';
    let h = 0;
    for (; h < e; ) {
      const I = P.charAt(e - h - 1);
      if (I === u && !_) h++;
      else if (I !== u && _) h++;
      else break;
    }
    return P.slice(0, e - h);
  }
  function xn(P, u) {
    if (P.indexOf(u[1]) === -1) return -1;
    const _ = P.length;
    let e = 0,
      h = 0;
    for (; h < _; h++)
      if (P[h] === '\\') h++;
      else if (P[h] === u[0]) e++;
      else if (P[h] === u[1] && (e--, e < 0)) return h;
    return -1;
  }
  function vn(P, u) {
    !P ||
      P.silent ||
      (u &&
        console.warn(
          'marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async',
        ),
      (P.sanitize || P.sanitizer) &&
        console.warn(
          'marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options',
        ),
      (P.highlight || P.langPrefix !== 'language-') &&
        console.warn(
          'marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight.',
        ),
      P.mangle &&
        console.warn(
          'marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`.',
        ),
      P.baseUrl &&
        console.warn(
          'marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url.',
        ),
      P.smartypants &&
        console.warn(
          'marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants.',
        ),
      P.xhtml &&
        console.warn(
          'marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml.',
        ),
      (P.headerIds || P.headerPrefix) &&
        console.warn(
          'marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`.',
        ));
  }
  function Lt(P, u) {
    if (u < 1) return '';
    let _ = '';
    for (; u > 1; ) u & 1 && (_ += P), (u >>= 1), (P += P);
    return _ + P;
  }
  function Rt(P, u, _, e) {
    const h = u.href,
      I = u.title ? Le(u.title) : null,
      D = P[1].replace(/\\([\[\]])/g, '$1');
    if (P[0].charAt(0) !== '!') {
      e.state.inLink = !0;
      const N = {
        type: 'link',
        raw: _,
        href: h,
        title: I,
        text: D,
        tokens: e.inlineTokens(D),
      };
      return (e.state.inLink = !1), N;
    }
    return { type: 'image', raw: _, href: h, title: I, text: Le(D) };
  }
  function En(P, u) {
    const _ = P.match(/^(\s+)(?:```)/);
    if (_ === null) return u;
    const e = _[1];
    return u
      .split(
        `
`,
      )
      .map((h) => {
        const I = h.match(/^\s+/);
        if (I === null) return h;
        const [D] = I;
        return D.length >= e.length ? h.slice(e.length) : h;
      }).join(`
`);
  }
  class gt {
    constructor(u) {
      this.options = u || Ye;
    }
    space(u) {
      const _ = this.rules.block.newline.exec(u);
      if (_ && _[0].length > 0) return { type: 'space', raw: _[0] };
    }
    code(u) {
      const _ = this.rules.block.code.exec(u);
      if (_) {
        const e = _[0].replace(/^ {1,4}/gm, '');
        return {
          type: 'code',
          raw: _[0],
          codeBlockStyle: 'indented',
          text: this.options.pedantic
            ? e
            : ut(
                e,
                `
`,
              ),
        };
      }
    }
    fences(u) {
      const _ = this.rules.block.fences.exec(u);
      if (_) {
        const e = _[0],
          h = En(e, _[3] || '');
        return {
          type: 'code',
          raw: e,
          lang: _[2]
            ? _[2].trim().replace(this.rules.inline._escapes, '$1')
            : _[2],
          text: h,
        };
      }
    }
    heading(u) {
      const _ = this.rules.block.heading.exec(u);
      if (_) {
        let e = _[2].trim();
        if (/#$/.test(e)) {
          const h = ut(e, '#');
          (this.options.pedantic || !h || / $/.test(h)) && (e = h.trim());
        }
        return {
          type: 'heading',
          raw: _[0],
          depth: _[1].length,
          text: e,
          tokens: this.lexer.inline(e),
        };
      }
    }
    hr(u) {
      const _ = this.rules.block.hr.exec(u);
      if (_) return { type: 'hr', raw: _[0] };
    }
    blockquote(u) {
      const _ = this.rules.block.blockquote.exec(u);
      if (_) {
        const e = _[0].replace(/^ *>[ \t]?/gm, ''),
          h = this.lexer.state.top;
        this.lexer.state.top = !0;
        const I = this.lexer.blockTokens(e);
        return (
          (this.lexer.state.top = h),
          { type: 'blockquote', raw: _[0], tokens: I, text: e }
        );
      }
    }
    list(u) {
      let _ = this.rules.block.list.exec(u);
      if (_) {
        let e,
          h,
          I,
          D,
          N,
          K,
          de,
          _e,
          ae,
          oe,
          te,
          Ce,
          De = _[1].trim();
        const je = De.length > 1,
          we = {
            type: 'list',
            raw: '',
            ordered: je,
            start: je ? +De.slice(0, -1) : '',
            loose: !1,
            items: [],
          };
        (De = je ? `\\d{1,9}\\${De.slice(-1)}` : `\\${De}`),
          this.options.pedantic && (De = je ? De : '[*+-]');
        const Ee = new RegExp(`^( {0,3}${De})((?:[	 ][^\\n]*)?(?:\\n|$))`);
        for (
          ;
          u && ((Ce = !1), !(!(_ = Ee.exec(u)) || this.rules.block.hr.test(u)));

        ) {
          if (
            ((e = _[0]),
            (u = u.substring(e.length)),
            (_e = _[2]
              .split(
                `
`,
                1,
              )[0]
              .replace(/^\t+/, (Oe) => ' '.repeat(3 * Oe.length))),
            (ae = u.split(
              `
`,
              1,
            )[0]),
            this.options.pedantic
              ? ((D = 2), (te = _e.trimLeft()))
              : ((D = _[2].search(/[^ ]/)),
                (D = D > 4 ? 1 : D),
                (te = _e.slice(D)),
                (D += _[1].length)),
            (K = !1),
            !_e &&
              /^ *$/.test(ae) &&
              ((e +=
                ae +
                `
`),
              (u = u.substring(ae.length + 1)),
              (Ce = !0)),
            !Ce)
          ) {
            const Oe = new RegExp(
                `^ {0,${Math.min(
                  3,
                  D - 1,
                )}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`,
              ),
              ze = new RegExp(
                `^ {0,${Math.min(
                  3,
                  D - 1,
                )}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`,
              ),
              Ue = new RegExp(`^ {0,${Math.min(3, D - 1)}}(?:\`\`\`|~~~)`),
              Xe = new RegExp(`^ {0,${Math.min(3, D - 1)}}#`);
            for (
              ;
              u &&
              ((oe = u.split(
                `
`,
                1,
              )[0]),
              (ae = oe),
              this.options.pedantic &&
                (ae = ae.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ')),
              !(Ue.test(ae) || Xe.test(ae) || Oe.test(ae) || ze.test(u)));

            ) {
              if (ae.search(/[^ ]/) >= D || !ae.trim())
                te +=
                  `
` + ae.slice(D);
              else {
                if (
                  K ||
                  _e.search(/[^ ]/) >= 4 ||
                  Ue.test(_e) ||
                  Xe.test(_e) ||
                  ze.test(_e)
                )
                  break;
                te +=
                  `
` + ae;
              }
              !K && !ae.trim() && (K = !0),
                (e +=
                  oe +
                  `
`),
                (u = u.substring(oe.length + 1)),
                (_e = ae.slice(D));
            }
          }
          we.loose || (de ? (we.loose = !0) : /\n *\n *$/.test(e) && (de = !0)),
            this.options.gfm &&
              ((h = /^\[[ xX]\] /.exec(te)),
              h &&
                ((I = h[0] !== '[ ] '), (te = te.replace(/^\[[ xX]\] +/, '')))),
            we.items.push({
              type: 'list_item',
              raw: e,
              task: !!h,
              checked: I,
              loose: !1,
              text: te,
            }),
            (we.raw += e);
        }
        (we.items[we.items.length - 1].raw = e.trimRight()),
          (we.items[we.items.length - 1].text = te.trimRight()),
          (we.raw = we.raw.trimRight());
        const Be = we.items.length;
        for (N = 0; N < Be; N++)
          if (
            ((this.lexer.state.top = !1),
            (we.items[N].tokens = this.lexer.blockTokens(we.items[N].text, [])),
            !we.loose)
          ) {
            const Oe = we.items[N].tokens.filter((Ue) => Ue.type === 'space'),
              ze = Oe.length > 0 && Oe.some((Ue) => /\n.*\n/.test(Ue.raw));
            we.loose = ze;
          }
        if (we.loose) for (N = 0; N < Be; N++) we.items[N].loose = !0;
        return we;
      }
    }
    html(u) {
      const _ = this.rules.block.html.exec(u);
      if (_) {
        const e = {
          type: 'html',
          block: !0,
          raw: _[0],
          pre:
            !this.options.sanitizer &&
            (_[1] === 'pre' || _[1] === 'script' || _[1] === 'style'),
          text: _[0],
        };
        if (this.options.sanitize) {
          const h = this.options.sanitizer
            ? this.options.sanitizer(_[0])
            : Le(_[0]);
          (e.type = 'paragraph'),
            (e.text = h),
            (e.tokens = this.lexer.inline(h));
        }
        return e;
      }
    }
    def(u) {
      const _ = this.rules.block.def.exec(u);
      if (_) {
        const e = _[1].toLowerCase().replace(/\s+/g, ' '),
          h = _[2]
            ? _[2]
                .replace(/^<(.*)>$/, '$1')
                .replace(this.rules.inline._escapes, '$1')
            : '',
          I = _[3]
            ? _[3]
                .substring(1, _[3].length - 1)
                .replace(this.rules.inline._escapes, '$1')
            : _[3];
        return { type: 'def', tag: e, raw: _[0], href: h, title: I };
      }
    }
    table(u) {
      const _ = this.rules.block.table.exec(u);
      if (_) {
        const e = {
          type: 'table',
          header: Pt(_[1]).map((h) => ({ text: h })),
          align: _[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
          rows:
            _[3] && _[3].trim()
              ? _[3].replace(/\n[ \t]*$/, '').split(`
`)
              : [],
        };
        if (e.header.length === e.align.length) {
          e.raw = _[0];
          let h = e.align.length,
            I,
            D,
            N,
            K;
          for (I = 0; I < h; I++)
            /^ *-+: *$/.test(e.align[I])
              ? (e.align[I] = 'right')
              : /^ *:-+: *$/.test(e.align[I])
              ? (e.align[I] = 'center')
              : /^ *:-+ *$/.test(e.align[I])
              ? (e.align[I] = 'left')
              : (e.align[I] = null);
          for (h = e.rows.length, I = 0; I < h; I++)
            e.rows[I] = Pt(e.rows[I], e.header.length).map((de) => ({
              text: de,
            }));
          for (h = e.header.length, D = 0; D < h; D++)
            e.header[D].tokens = this.lexer.inline(e.header[D].text);
          for (h = e.rows.length, D = 0; D < h; D++)
            for (K = e.rows[D], N = 0; N < K.length; N++)
              K[N].tokens = this.lexer.inline(K[N].text);
          return e;
        }
      }
    }
    lheading(u) {
      const _ = this.rules.block.lheading.exec(u);
      if (_)
        return {
          type: 'heading',
          raw: _[0],
          depth: _[2].charAt(0) === '=' ? 1 : 2,
          text: _[1],
          tokens: this.lexer.inline(_[1]),
        };
    }
    paragraph(u) {
      const _ = this.rules.block.paragraph.exec(u);
      if (_) {
        const e =
          _[1].charAt(_[1].length - 1) ===
          `
`
            ? _[1].slice(0, -1)
            : _[1];
        return {
          type: 'paragraph',
          raw: _[0],
          text: e,
          tokens: this.lexer.inline(e),
        };
      }
    }
    text(u) {
      const _ = this.rules.block.text.exec(u);
      if (_)
        return {
          type: 'text',
          raw: _[0],
          text: _[0],
          tokens: this.lexer.inline(_[0]),
        };
    }
    escape(u) {
      const _ = this.rules.inline.escape.exec(u);
      if (_) return { type: 'escape', raw: _[0], text: Le(_[1]) };
    }
    tag(u) {
      const _ = this.rules.inline.tag.exec(u);
      if (_)
        return (
          !this.lexer.state.inLink && /^<a /i.test(_[0])
            ? (this.lexer.state.inLink = !0)
            : this.lexer.state.inLink &&
              /^<\/a>/i.test(_[0]) &&
              (this.lexer.state.inLink = !1),
          !this.lexer.state.inRawBlock &&
          /^<(pre|code|kbd|script)(\s|>)/i.test(_[0])
            ? (this.lexer.state.inRawBlock = !0)
            : this.lexer.state.inRawBlock &&
              /^<\/(pre|code|kbd|script)(\s|>)/i.test(_[0]) &&
              (this.lexer.state.inRawBlock = !1),
          {
            type: this.options.sanitize ? 'text' : 'html',
            raw: _[0],
            inLink: this.lexer.state.inLink,
            inRawBlock: this.lexer.state.inRawBlock,
            block: !1,
            text: this.options.sanitize
              ? this.options.sanitizer
                ? this.options.sanitizer(_[0])
                : Le(_[0])
              : _[0],
          }
        );
    }
    link(u) {
      const _ = this.rules.inline.link.exec(u);
      if (_) {
        const e = _[2].trim();
        if (!this.options.pedantic && /^</.test(e)) {
          if (!/>$/.test(e)) return;
          const D = ut(e.slice(0, -1), '\\');
          if ((e.length - D.length) % 2 === 0) return;
        } else {
          const D = xn(_[2], '()');
          if (D > -1) {
            const K = (_[0].indexOf('!') === 0 ? 5 : 4) + _[1].length + D;
            (_[2] = _[2].substring(0, D)),
              (_[0] = _[0].substring(0, K).trim()),
              (_[3] = '');
          }
        }
        let h = _[2],
          I = '';
        if (this.options.pedantic) {
          const D = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(h);
          D && ((h = D[1]), (I = D[3]));
        } else I = _[3] ? _[3].slice(1, -1) : '';
        return (
          (h = h.trim()),
          /^</.test(h) &&
            (this.options.pedantic && !/>$/.test(e)
              ? (h = h.slice(1))
              : (h = h.slice(1, -1))),
          Rt(
            _,
            {
              href: h && h.replace(this.rules.inline._escapes, '$1'),
              title: I && I.replace(this.rules.inline._escapes, '$1'),
            },
            _[0],
            this.lexer,
          )
        );
      }
    }
    reflink(u, _) {
      let e;
      if (
        (e = this.rules.inline.reflink.exec(u)) ||
        (e = this.rules.inline.nolink.exec(u))
      ) {
        let h = (e[2] || e[1]).replace(/\s+/g, ' ');
        if (((h = _[h.toLowerCase()]), !h)) {
          const I = e[0].charAt(0);
          return { type: 'text', raw: I, text: I };
        }
        return Rt(e, h, e[0], this.lexer);
      }
    }
    emStrong(u, _, e = '') {
      let h = this.rules.inline.emStrong.lDelim.exec(u);
      if (!h || (h[3] && e.match(/[\p{L}\p{N}]/u))) return;
      const I = h[1] || h[2] || '';
      if (!I || (I && (e === '' || this.rules.inline.punctuation.exec(e)))) {
        const D = h[0].length - 1;
        let N,
          K,
          de = D,
          _e = 0;
        const ae =
          h[0][0] === '*'
            ? this.rules.inline.emStrong.rDelimAst
            : this.rules.inline.emStrong.rDelimUnd;
        for (
          ae.lastIndex = 0, _ = _.slice(-1 * u.length + D);
          (h = ae.exec(_)) != null;

        ) {
          if (((N = h[1] || h[2] || h[3] || h[4] || h[5] || h[6]), !N))
            continue;
          if (((K = N.length), h[3] || h[4])) {
            de += K;
            continue;
          } else if ((h[5] || h[6]) && D % 3 && !((D + K) % 3)) {
            _e += K;
            continue;
          }
          if (((de -= K), de > 0)) continue;
          K = Math.min(K, K + de + _e);
          const oe = u.slice(0, D + h.index + (h[0].length - N.length) + K);
          if (Math.min(D, K) % 2) {
            const Ce = oe.slice(1, -1);
            return {
              type: 'em',
              raw: oe,
              text: Ce,
              tokens: this.lexer.inlineTokens(Ce),
            };
          }
          const te = oe.slice(2, -2);
          return {
            type: 'strong',
            raw: oe,
            text: te,
            tokens: this.lexer.inlineTokens(te),
          };
        }
      }
    }
    codespan(u) {
      const _ = this.rules.inline.code.exec(u);
      if (_) {
        let e = _[2].replace(/\n/g, ' ');
        const h = /[^ ]/.test(e),
          I = /^ /.test(e) && / $/.test(e);
        return (
          h && I && (e = e.substring(1, e.length - 1)),
          (e = Le(e, !0)),
          { type: 'codespan', raw: _[0], text: e }
        );
      }
    }
    br(u) {
      const _ = this.rules.inline.br.exec(u);
      if (_) return { type: 'br', raw: _[0] };
    }
    del(u) {
      const _ = this.rules.inline.del.exec(u);
      if (_)
        return {
          type: 'del',
          raw: _[0],
          text: _[2],
          tokens: this.lexer.inlineTokens(_[2]),
        };
    }
    autolink(u, _) {
      const e = this.rules.inline.autolink.exec(u);
      if (e) {
        let h, I;
        return (
          e[2] === '@'
            ? ((h = Le(this.options.mangle ? _(e[1]) : e[1])),
              (I = 'mailto:' + h))
            : ((h = Le(e[1])), (I = h)),
          {
            type: 'link',
            raw: e[0],
            text: h,
            href: I,
            tokens: [{ type: 'text', raw: h, text: h }],
          }
        );
      }
    }
    url(u, _) {
      let e;
      if ((e = this.rules.inline.url.exec(u))) {
        let h, I;
        if (e[2] === '@')
          (h = Le(this.options.mangle ? _(e[0]) : e[0])), (I = 'mailto:' + h);
        else {
          let D;
          do (D = e[0]), (e[0] = this.rules.inline._backpedal.exec(e[0])[0]);
          while (D !== e[0]);
          (h = Le(e[0])), e[1] === 'www.' ? (I = 'http://' + e[0]) : (I = e[0]);
        }
        return {
          type: 'link',
          raw: e[0],
          text: h,
          href: I,
          tokens: [{ type: 'text', raw: h, text: h }],
        };
      }
    }
    inlineText(u, _) {
      const e = this.rules.inline.text.exec(u);
      if (e) {
        let h;
        return (
          this.lexer.state.inRawBlock
            ? (h = this.options.sanitize
                ? this.options.sanitizer
                  ? this.options.sanitizer(e[0])
                  : Le(e[0])
                : e[0])
            : (h = Le(this.options.smartypants ? _(e[0]) : e[0])),
          { type: 'text', raw: e[0], text: h }
        );
      }
    }
  }
  const se = {
    newline: /^(?: *(?:\n|$))+/,
    code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
    fences:
      /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
    hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
    heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
    blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
    list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
    html: '^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))',
    def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
    table: ct,
    lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    _paragraph:
      /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
    text: /^[^\n]+/,
  };
  (se._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/),
    (se._title =
      /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/),
    (se.def = xe(se.def)
      .replace('label', se._label)
      .replace('title', se._title)
      .getRegex()),
    (se.bullet = /(?:[*+-]|\d{1,9}[.)])/),
    (se.listItemStart = xe(/^( *)(bull) */)
      .replace('bull', se.bullet)
      .getRegex()),
    (se.list = xe(se.list)
      .replace(/bull/g, se.bullet)
      .replace(
        'hr',
        '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))',
      )
      .replace('def', '\\n+(?=' + se.def.source + ')')
      .getRegex()),
    (se._tag =
      'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul'),
    (se._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/),
    (se.html = xe(se.html, 'i')
      .replace('comment', se._comment)
      .replace('tag', se._tag)
      .replace(
        'attribute',
        / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/,
      )
      .getRegex()),
    (se.paragraph = xe(se._paragraph)
      .replace('hr', se.hr)
      .replace('heading', ' {0,3}#{1,6} ')
      .replace('|lheading', '')
      .replace('|table', '')
      .replace('blockquote', ' {0,3}>')
      .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
      .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
      .replace(
        'html',
        '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)',
      )
      .replace('tag', se._tag)
      .getRegex()),
    (se.blockquote = xe(se.blockquote)
      .replace('paragraph', se.paragraph)
      .getRegex()),
    (se.normal = { ...se }),
    (se.gfm = {
      ...se.normal,
      table:
        '^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
    }),
    (se.gfm.table = xe(se.gfm.table)
      .replace('hr', se.hr)
      .replace('heading', ' {0,3}#{1,6} ')
      .replace('blockquote', ' {0,3}>')
      .replace('code', ' {4}[^\\n]')
      .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
      .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
      .replace(
        'html',
        '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)',
      )
      .replace('tag', se._tag)
      .getRegex()),
    (se.gfm.paragraph = xe(se._paragraph)
      .replace('hr', se.hr)
      .replace('heading', ' {0,3}#{1,6} ')
      .replace('|lheading', '')
      .replace('table', se.gfm.table)
      .replace('blockquote', ' {0,3}>')
      .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
      .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
      .replace(
        'html',
        '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)',
      )
      .replace('tag', se._tag)
      .getRegex()),
    (se.pedantic = {
      ...se.normal,
      html: xe(
        `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`,
      )
        .replace('comment', se._comment)
        .replace(
          /tag/g,
          '(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b',
        )
        .getRegex(),
      def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
      heading: /^(#{1,6})(.*)(?:\n+|$)/,
      fences: ct,
      lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
      paragraph: xe(se.normal._paragraph)
        .replace('hr', se.hr)
        .replace(
          'heading',
          ` *#{1,6} *[^
]`,
        )
        .replace('lheading', se.lheading)
        .replace('blockquote', ' {0,3}>')
        .replace('|fences', '')
        .replace('|list', '')
        .replace('|html', '')
        .getRegex(),
    });
  const J = {
    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
    url: ct,
    tag: '^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
    link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
    reflink: /^!?\[(label)\]\[(ref)\]/,
    nolink: /^!?\[(ref)\](?:\[\])?/,
    reflinkSearch: 'reflink|nolink(?!\\()',
    emStrong: {
      lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
      rDelimAst:
        /^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,
      rDelimUnd:
        /^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/,
    },
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    br: /^( {2,}|\\)\n(?!\s*$)/,
    del: ct,
    text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
    punctuation: /^([\spunctuation])/,
  };
  (J._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~'),
    (J.punctuation = xe(J.punctuation)
      .replace(/punctuation/g, J._punctuation)
      .getRegex()),
    (J.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g),
    (J.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g),
    (J._comment = xe(se._comment).replace('(?:-->|$)', '-->').getRegex()),
    (J.emStrong.lDelim = xe(J.emStrong.lDelim)
      .replace(/punct/g, J._punctuation)
      .getRegex()),
    (J.emStrong.rDelimAst = xe(J.emStrong.rDelimAst, 'g')
      .replace(/punct/g, J._punctuation)
      .getRegex()),
    (J.emStrong.rDelimUnd = xe(J.emStrong.rDelimUnd, 'g')
      .replace(/punct/g, J._punctuation)
      .getRegex()),
    (J._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
    (J._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
    (J._email =
      /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
    (J.autolink = xe(J.autolink)
      .replace('scheme', J._scheme)
      .replace('email', J._email)
      .getRegex()),
    (J._attribute =
      /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
    (J.tag = xe(J.tag)
      .replace('comment', J._comment)
      .replace('attribute', J._attribute)
      .getRegex()),
    (J._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
    (J._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/),
    (J._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
    (J.link = xe(J.link)
      .replace('label', J._label)
      .replace('href', J._href)
      .replace('title', J._title)
      .getRegex()),
    (J.reflink = xe(J.reflink)
      .replace('label', J._label)
      .replace('ref', se._label)
      .getRegex()),
    (J.nolink = xe(J.nolink).replace('ref', se._label).getRegex()),
    (J.reflinkSearch = xe(J.reflinkSearch, 'g')
      .replace('reflink', J.reflink)
      .replace('nolink', J.nolink)
      .getRegex()),
    (J.normal = { ...J }),
    (J.pedantic = {
      ...J.normal,
      strong: {
        start: /^__|\*\*/,
        middle:
          /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
        endAst: /\*\*(?!\*)/g,
        endUnd: /__(?!_)/g,
      },
      em: {
        start: /^_|\*/,
        middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
        endAst: /\*(?!\*)/g,
        endUnd: /_(?!_)/g,
      },
      link: xe(/^!?\[(label)\]\((.*?)\)/)
        .replace('label', J._label)
        .getRegex(),
      reflink: xe(/^!?\[(label)\]\s*\[([^\]]*)\]/)
        .replace('label', J._label)
        .getRegex(),
    }),
    (J.gfm = {
      ...J.normal,
      escape: xe(J.escape).replace('])', '~|])').getRegex(),
      _extended_email:
        /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
      url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
      _backpedal:
        /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
      del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
      text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
    }),
    (J.gfm.url = xe(J.gfm.url, 'i')
      .replace('email', J.gfm._extended_email)
      .getRegex()),
    (J.breaks = {
      ...J.gfm,
      br: xe(J.br).replace('{2,}', '*').getRegex(),
      text: xe(J.gfm.text)
        .replace('\\b_', '\\b_| {2,}\\n')
        .replace(/\{2,\}/g, '*')
        .getRegex(),
    });
  function kn(P) {
    return P.replace(/---/g, '—')
      .replace(/--/g, '–')
      .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1‘')
      .replace(/'/g, '’')
      .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1“')
      .replace(/"/g, '”')
      .replace(/\.{3}/g, '…');
  }
  function Dt(P) {
    let u = '',
      _,
      e;
    const h = P.length;
    for (_ = 0; _ < h; _++)
      (e = P.charCodeAt(_)),
        Math.random() > 0.5 && (e = 'x' + e.toString(16)),
        (u += '&#' + e + ';');
    return u;
  }
  class Ke {
    constructor(u) {
      (this.tokens = []),
        (this.tokens.links = Object.create(null)),
        (this.options = u || Ye),
        (this.options.tokenizer = this.options.tokenizer || new gt()),
        (this.tokenizer = this.options.tokenizer),
        (this.tokenizer.options = this.options),
        (this.tokenizer.lexer = this),
        (this.inlineQueue = []),
        (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
      const _ = { block: se.normal, inline: J.normal };
      this.options.pedantic
        ? ((_.block = se.pedantic), (_.inline = J.pedantic))
        : this.options.gfm &&
          ((_.block = se.gfm),
          this.options.breaks ? (_.inline = J.breaks) : (_.inline = J.gfm)),
        (this.tokenizer.rules = _);
    }
    static get rules() {
      return { block: se, inline: J };
    }
    static lex(u, _) {
      return new Ke(_).lex(u);
    }
    static lexInline(u, _) {
      return new Ke(_).inlineTokens(u);
    }
    lex(u) {
      (u = u.replace(
        /\r\n|\r/g,
        `
`,
      )),
        this.blockTokens(u, this.tokens);
      let _;
      for (; (_ = this.inlineQueue.shift()); )
        this.inlineTokens(_.src, _.tokens);
      return this.tokens;
    }
    blockTokens(u, _ = []) {
      this.options.pedantic
        ? (u = u.replace(/\t/g, '    ').replace(/^ +$/gm, ''))
        : (u = u.replace(
            /^( *)(\t+)/gm,
            (N, K, de) => K + '    '.repeat(de.length),
          ));
      let e, h, I, D;
      for (; u; )
        if (
          !(
            this.options.extensions &&
            this.options.extensions.block &&
            this.options.extensions.block.some((N) =>
              (e = N.call({ lexer: this }, u, _))
                ? ((u = u.substring(e.raw.length)), _.push(e), !0)
                : !1,
            )
          )
        ) {
          if ((e = this.tokenizer.space(u))) {
            (u = u.substring(e.raw.length)),
              e.raw.length === 1 && _.length > 0
                ? (_[_.length - 1].raw += `
`)
                : _.push(e);
            continue;
          }
          if ((e = this.tokenizer.code(u))) {
            (u = u.substring(e.raw.length)),
              (h = _[_.length - 1]),
              h && (h.type === 'paragraph' || h.type === 'text')
                ? ((h.raw +=
                    `
` + e.raw),
                  (h.text +=
                    `
` + e.text),
                  (this.inlineQueue[this.inlineQueue.length - 1].src = h.text))
                : _.push(e);
            continue;
          }
          if ((e = this.tokenizer.fences(u))) {
            (u = u.substring(e.raw.length)), _.push(e);
            continue;
          }
          if ((e = this.tokenizer.heading(u))) {
            (u = u.substring(e.raw.length)), _.push(e);
            continue;
          }
          if ((e = this.tokenizer.hr(u))) {
            (u = u.substring(e.raw.length)), _.push(e);
            continue;
          }
          if ((e = this.tokenizer.blockquote(u))) {
            (u = u.substring(e.raw.length)), _.push(e);
            continue;
          }
          if ((e = this.tokenizer.list(u))) {
            (u = u.substring(e.raw.length)), _.push(e);
            continue;
          }
          if ((e = this.tokenizer.html(u))) {
            (u = u.substring(e.raw.length)), _.push(e);
            continue;
          }
          if ((e = this.tokenizer.def(u))) {
            (u = u.substring(e.raw.length)),
              (h = _[_.length - 1]),
              h && (h.type === 'paragraph' || h.type === 'text')
                ? ((h.raw +=
                    `
` + e.raw),
                  (h.text +=
                    `
` + e.raw),
                  (this.inlineQueue[this.inlineQueue.length - 1].src = h.text))
                : this.tokens.links[e.tag] ||
                  (this.tokens.links[e.tag] = { href: e.href, title: e.title });
            continue;
          }
          if ((e = this.tokenizer.table(u))) {
            (u = u.substring(e.raw.length)), _.push(e);
            continue;
          }
          if ((e = this.tokenizer.lheading(u))) {
            (u = u.substring(e.raw.length)), _.push(e);
            continue;
          }
          if (
            ((I = u),
            this.options.extensions && this.options.extensions.startBlock)
          ) {
            let N = 1 / 0;
            const K = u.slice(1);
            let de;
            this.options.extensions.startBlock.forEach(function (_e) {
              (de = _e.call({ lexer: this }, K)),
                typeof de == 'number' && de >= 0 && (N = Math.min(N, de));
            }),
              N < 1 / 0 && N >= 0 && (I = u.substring(0, N + 1));
          }
          if (this.state.top && (e = this.tokenizer.paragraph(I))) {
            (h = _[_.length - 1]),
              D && h.type === 'paragraph'
                ? ((h.raw +=
                    `
` + e.raw),
                  (h.text +=
                    `
` + e.text),
                  this.inlineQueue.pop(),
                  (this.inlineQueue[this.inlineQueue.length - 1].src = h.text))
                : _.push(e),
              (D = I.length !== u.length),
              (u = u.substring(e.raw.length));
            continue;
          }
          if ((e = this.tokenizer.text(u))) {
            (u = u.substring(e.raw.length)),
              (h = _[_.length - 1]),
              h && h.type === 'text'
                ? ((h.raw +=
                    `
` + e.raw),
                  (h.text +=
                    `
` + e.text),
                  this.inlineQueue.pop(),
                  (this.inlineQueue[this.inlineQueue.length - 1].src = h.text))
                : _.push(e);
            continue;
          }
          if (u) {
            const N = 'Infinite loop on byte: ' + u.charCodeAt(0);
            if (this.options.silent) {
              console.error(N);
              break;
            } else throw new Error(N);
          }
        }
      return (this.state.top = !0), _;
    }
    inline(u, _ = []) {
      return this.inlineQueue.push({ src: u, tokens: _ }), _;
    }
    inlineTokens(u, _ = []) {
      let e,
        h,
        I,
        D = u,
        N,
        K,
        de;
      if (this.tokens.links) {
        const _e = Object.keys(this.tokens.links);
        if (_e.length > 0)
          for (
            ;
            (N = this.tokenizer.rules.inline.reflinkSearch.exec(D)) != null;

          )
            _e.includes(N[0].slice(N[0].lastIndexOf('[') + 1, -1)) &&
              (D =
                D.slice(0, N.index) +
                '[' +
                Lt('a', N[0].length - 2) +
                ']' +
                D.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
      }
      for (; (N = this.tokenizer.rules.inline.blockSkip.exec(D)) != null; )
        D =
          D.slice(0, N.index) +
          '[' +
          Lt('a', N[0].length - 2) +
          ']' +
          D.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
      for (; (N = this.tokenizer.rules.inline.escapedEmSt.exec(D)) != null; )
        (D =
          D.slice(0, N.index + N[0].length - 2) +
          '++' +
          D.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex)),
          this.tokenizer.rules.inline.escapedEmSt.lastIndex--;
      for (; u; )
        if (
          (K || (de = ''),
          (K = !1),
          !(
            this.options.extensions &&
            this.options.extensions.inline &&
            this.options.extensions.inline.some((_e) =>
              (e = _e.call({ lexer: this }, u, _))
                ? ((u = u.substring(e.raw.length)), _.push(e), !0)
                : !1,
            )
          ))
        ) {
          if ((e = this.tokenizer.escape(u))) {
            (u = u.substring(e.raw.length)), _.push(e);
            continue;
          }
          if ((e = this.tokenizer.tag(u))) {
            (u = u.substring(e.raw.length)),
              (h = _[_.length - 1]),
              h && e.type === 'text' && h.type === 'text'
                ? ((h.raw += e.raw), (h.text += e.text))
                : _.push(e);
            continue;
          }
          if ((e = this.tokenizer.link(u))) {
            (u = u.substring(e.raw.length)), _.push(e);
            continue;
          }
          if ((e = this.tokenizer.reflink(u, this.tokens.links))) {
            (u = u.substring(e.raw.length)),
              (h = _[_.length - 1]),
              h && e.type === 'text' && h.type === 'text'
                ? ((h.raw += e.raw), (h.text += e.text))
                : _.push(e);
            continue;
          }
          if ((e = this.tokenizer.emStrong(u, D, de))) {
            (u = u.substring(e.raw.length)), _.push(e);
            continue;
          }
          if ((e = this.tokenizer.codespan(u))) {
            (u = u.substring(e.raw.length)), _.push(e);
            continue;
          }
          if ((e = this.tokenizer.br(u))) {
            (u = u.substring(e.raw.length)), _.push(e);
            continue;
          }
          if ((e = this.tokenizer.del(u))) {
            (u = u.substring(e.raw.length)), _.push(e);
            continue;
          }
          if ((e = this.tokenizer.autolink(u, Dt))) {
            (u = u.substring(e.raw.length)), _.push(e);
            continue;
          }
          if (!this.state.inLink && (e = this.tokenizer.url(u, Dt))) {
            (u = u.substring(e.raw.length)), _.push(e);
            continue;
          }
          if (
            ((I = u),
            this.options.extensions && this.options.extensions.startInline)
          ) {
            let _e = 1 / 0;
            const ae = u.slice(1);
            let oe;
            this.options.extensions.startInline.forEach(function (te) {
              (oe = te.call({ lexer: this }, ae)),
                typeof oe == 'number' && oe >= 0 && (_e = Math.min(_e, oe));
            }),
              _e < 1 / 0 && _e >= 0 && (I = u.substring(0, _e + 1));
          }
          if ((e = this.tokenizer.inlineText(I, kn))) {
            (u = u.substring(e.raw.length)),
              e.raw.slice(-1) !== '_' && (de = e.raw.slice(-1)),
              (K = !0),
              (h = _[_.length - 1]),
              h && h.type === 'text'
                ? ((h.raw += e.raw), (h.text += e.text))
                : _.push(e);
            continue;
          }
          if (u) {
            const _e = 'Infinite loop on byte: ' + u.charCodeAt(0);
            if (this.options.silent) {
              console.error(_e);
              break;
            } else throw new Error(_e);
          }
        }
      return _;
    }
  }
  class bt {
    constructor(u) {
      this.options = u || Ye;
    }
    code(u, _, e) {
      const h = (_ || '').match(/\S*/)[0];
      if (this.options.highlight) {
        const I = this.options.highlight(u, h);
        I != null && I !== u && ((e = !0), (u = I));
      }
      return (
        (u =
          u.replace(/\n$/, '') +
          `
`),
        h
          ? '<pre><code class="' +
            this.options.langPrefix +
            Le(h) +
            '">' +
            (e ? u : Le(u, !0)) +
            `</code></pre>
`
          : '<pre><code>' +
            (e ? u : Le(u, !0)) +
            `</code></pre>
`
      );
    }
    blockquote(u) {
      return `<blockquote>
${u}</blockquote>
`;
    }
    html(u, _) {
      return u;
    }
    heading(u, _, e, h) {
      if (this.options.headerIds) {
        const I = this.options.headerPrefix + h.slug(e);
        return `<h${_} id="${I}">${u}</h${_}>
`;
      }
      return `<h${_}>${u}</h${_}>
`;
    }
    hr() {
      return this.options.xhtml
        ? `<hr/>
`
        : `<hr>
`;
    }
    list(u, _, e) {
      const h = _ ? 'ol' : 'ul',
        I = _ && e !== 1 ? ' start="' + e + '"' : '';
      return (
        '<' +
        h +
        I +
        `>
` +
        u +
        '</' +
        h +
        `>
`
      );
    }
    listitem(u) {
      return `<li>${u}</li>
`;
    }
    checkbox(u) {
      return (
        '<input ' +
        (u ? 'checked="" ' : '') +
        'disabled="" type="checkbox"' +
        (this.options.xhtml ? ' /' : '') +
        '> '
      );
    }
    paragraph(u) {
      return `<p>${u}</p>
`;
    }
    table(u, _) {
      return (
        _ && (_ = `<tbody>${_}</tbody>`),
        `<table>
<thead>
` +
          u +
          `</thead>
` +
          _ +
          `</table>
`
      );
    }
    tablerow(u) {
      return `<tr>
${u}</tr>
`;
    }
    tablecell(u, _) {
      const e = _.header ? 'th' : 'td';
      return (
        (_.align ? `<${e} align="${_.align}">` : `<${e}>`) +
        u +
        `</${e}>
`
      );
    }
    strong(u) {
      return `<strong>${u}</strong>`;
    }
    em(u) {
      return `<em>${u}</em>`;
    }
    codespan(u) {
      return `<code>${u}</code>`;
    }
    br() {
      return this.options.xhtml ? '<br/>' : '<br>';
    }
    del(u) {
      return `<del>${u}</del>`;
    }
    link(u, _, e) {
      if (
        ((u = Ot(this.options.sanitize, this.options.baseUrl, u)), u === null)
      )
        return e;
      let h = '<a href="' + u + '"';
      return _ && (h += ' title="' + _ + '"'), (h += '>' + e + '</a>'), h;
    }
    image(u, _, e) {
      if (
        ((u = Ot(this.options.sanitize, this.options.baseUrl, u)), u === null)
      )
        return e;
      let h = `<img src="${u}" alt="${e}"`;
      return (
        _ && (h += ` title="${_}"`), (h += this.options.xhtml ? '/>' : '>'), h
      );
    }
    text(u) {
      return u;
    }
  }
  class Ct {
    strong(u) {
      return u;
    }
    em(u) {
      return u;
    }
    codespan(u) {
      return u;
    }
    del(u) {
      return u;
    }
    html(u) {
      return u;
    }
    text(u) {
      return u;
    }
    link(u, _, e) {
      return '' + e;
    }
    image(u, _, e) {
      return '' + e;
    }
    br() {
      return '';
    }
  }
  class zt {
    constructor() {
      this.seen = {};
    }
    serialize(u) {
      return u
        .toLowerCase()
        .trim()
        .replace(/<[!\/a-z].*?>/gi, '')
        .replace(
          /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
          '',
        )
        .replace(/\s/g, '-');
    }
    getNextSafeSlug(u, _) {
      let e = u,
        h = 0;
      if (this.seen.hasOwnProperty(e)) {
        h = this.seen[u];
        do h++, (e = u + '-' + h);
        while (this.seen.hasOwnProperty(e));
      }
      return _ || ((this.seen[u] = h), (this.seen[e] = 0)), e;
    }
    slug(u, _ = {}) {
      const e = this.serialize(u);
      return this.getNextSafeSlug(e, _.dryrun);
    }
  }
  class Je {
    constructor(u) {
      (this.options = u || Ye),
        (this.options.renderer = this.options.renderer || new bt()),
        (this.renderer = this.options.renderer),
        (this.renderer.options = this.options),
        (this.textRenderer = new Ct()),
        (this.slugger = new zt());
    }
    static parse(u, _) {
      return new Je(_).parse(u);
    }
    static parseInline(u, _) {
      return new Je(_).parseInline(u);
    }
    parse(u, _ = !0) {
      let e = '',
        h,
        I,
        D,
        N,
        K,
        de,
        _e,
        ae,
        oe,
        te,
        Ce,
        De,
        je,
        we,
        Ee,
        Be,
        Oe,
        ze,
        Ue;
      const Xe = u.length;
      for (h = 0; h < Xe; h++) {
        if (
          ((te = u[h]),
          this.options.extensions &&
            this.options.extensions.renderers &&
            this.options.extensions.renderers[te.type] &&
            ((Ue = this.options.extensions.renderers[te.type].call(
              { parser: this },
              te,
            )),
            Ue !== !1 ||
              ![
                'space',
                'hr',
                'heading',
                'code',
                'table',
                'blockquote',
                'list',
                'html',
                'paragraph',
                'text',
              ].includes(te.type)))
        ) {
          e += Ue || '';
          continue;
        }
        switch (te.type) {
          case 'space':
            continue;
          case 'hr': {
            e += this.renderer.hr();
            continue;
          }
          case 'heading': {
            e += this.renderer.heading(
              this.parseInline(te.tokens),
              te.depth,
              Ft(this.parseInline(te.tokens, this.textRenderer)),
              this.slugger,
            );
            continue;
          }
          case 'code': {
            e += this.renderer.code(te.text, te.lang, te.escaped);
            continue;
          }
          case 'table': {
            for (ae = '', _e = '', N = te.header.length, I = 0; I < N; I++)
              _e += this.renderer.tablecell(
                this.parseInline(te.header[I].tokens),
                { header: !0, align: te.align[I] },
              );
            for (
              ae += this.renderer.tablerow(_e),
                oe = '',
                N = te.rows.length,
                I = 0;
              I < N;
              I++
            ) {
              for (de = te.rows[I], _e = '', K = de.length, D = 0; D < K; D++)
                _e += this.renderer.tablecell(this.parseInline(de[D].tokens), {
                  header: !1,
                  align: te.align[D],
                });
              oe += this.renderer.tablerow(_e);
            }
            e += this.renderer.table(ae, oe);
            continue;
          }
          case 'blockquote': {
            (oe = this.parse(te.tokens)), (e += this.renderer.blockquote(oe));
            continue;
          }
          case 'list': {
            for (
              Ce = te.ordered,
                De = te.start,
                je = te.loose,
                N = te.items.length,
                oe = '',
                I = 0;
              I < N;
              I++
            )
              (Ee = te.items[I]),
                (Be = Ee.checked),
                (Oe = Ee.task),
                (we = ''),
                Ee.task &&
                  ((ze = this.renderer.checkbox(Be)),
                  je
                    ? Ee.tokens.length > 0 && Ee.tokens[0].type === 'paragraph'
                      ? ((Ee.tokens[0].text = ze + ' ' + Ee.tokens[0].text),
                        Ee.tokens[0].tokens &&
                          Ee.tokens[0].tokens.length > 0 &&
                          Ee.tokens[0].tokens[0].type === 'text' &&
                          (Ee.tokens[0].tokens[0].text =
                            ze + ' ' + Ee.tokens[0].tokens[0].text))
                      : Ee.tokens.unshift({ type: 'text', text: ze })
                    : (we += ze)),
                (we += this.parse(Ee.tokens, je)),
                (oe += this.renderer.listitem(we, Oe, Be));
            e += this.renderer.list(oe, Ce, De);
            continue;
          }
          case 'html': {
            e += this.renderer.html(te.text, te.block);
            continue;
          }
          case 'paragraph': {
            e += this.renderer.paragraph(this.parseInline(te.tokens));
            continue;
          }
          case 'text': {
            for (
              oe = te.tokens ? this.parseInline(te.tokens) : te.text;
              h + 1 < Xe && u[h + 1].type === 'text';

            )
              (te = u[++h]),
                (oe +=
                  `
` + (te.tokens ? this.parseInline(te.tokens) : te.text));
            e += _ ? this.renderer.paragraph(oe) : oe;
            continue;
          }
          default: {
            const He = 'Token with "' + te.type + '" type was not found.';
            if (this.options.silent) {
              console.error(He);
              return;
            } else throw new Error(He);
          }
        }
      }
      return e;
    }
    parseInline(u, _) {
      _ = _ || this.renderer;
      let e = '',
        h,
        I,
        D;
      const N = u.length;
      for (h = 0; h < N; h++) {
        if (
          ((I = u[h]),
          this.options.extensions &&
            this.options.extensions.renderers &&
            this.options.extensions.renderers[I.type] &&
            ((D = this.options.extensions.renderers[I.type].call(
              { parser: this },
              I,
            )),
            D !== !1 ||
              ![
                'escape',
                'html',
                'link',
                'image',
                'strong',
                'em',
                'codespan',
                'br',
                'del',
                'text',
              ].includes(I.type)))
        ) {
          e += D || '';
          continue;
        }
        switch (I.type) {
          case 'escape': {
            e += _.text(I.text);
            break;
          }
          case 'html': {
            e += _.html(I.text);
            break;
          }
          case 'link': {
            e += _.link(I.href, I.title, this.parseInline(I.tokens, _));
            break;
          }
          case 'image': {
            e += _.image(I.href, I.title, I.text);
            break;
          }
          case 'strong': {
            e += _.strong(this.parseInline(I.tokens, _));
            break;
          }
          case 'em': {
            e += _.em(this.parseInline(I.tokens, _));
            break;
          }
          case 'codespan': {
            e += _.codespan(I.text);
            break;
          }
          case 'br': {
            e += _.br();
            break;
          }
          case 'del': {
            e += _.del(this.parseInline(I.tokens, _));
            break;
          }
          case 'text': {
            e += _.text(I.text);
            break;
          }
          default: {
            const K = 'Token with "' + I.type + '" type was not found.';
            if (this.options.silent) {
              console.error(K);
              return;
            } else throw new Error(K);
          }
        }
      }
      return e;
    }
  }
  class yt {
    constructor(u) {
      this.options = u || Ye;
    }
    static passThroughHooks = new Set(['preprocess', 'postprocess']);
    preprocess(u) {
      return u;
    }
    postprocess(u) {
      return u;
    }
  }
  function Sn(P, u, _) {
    return (e) => {
      if (
        ((e.message += `
Please report this to https://github.com/markedjs/marked.`),
        P)
      ) {
        const h =
          '<p>An error occurred:</p><pre>' + Le(e.message + '', !0) + '</pre>';
        if (u) return Promise.resolve(h);
        if (_) {
          _(null, h);
          return;
        }
        return h;
      }
      if (u) return Promise.reject(e);
      if (_) {
        _(e);
        return;
      }
      throw e;
    };
  }
  function Mt(P, u) {
    return (_, e, h) => {
      typeof e == 'function' && ((h = e), (e = null));
      const I = { ...e };
      e = { ...ie.defaults, ...I };
      const D = Sn(e.silent, e.async, h);
      if (typeof _ > 'u' || _ === null)
        return D(new Error('marked(): input parameter is undefined or null'));
      if (typeof _ != 'string')
        return D(
          new Error(
            'marked(): input parameter is of type ' +
              Object.prototype.toString.call(_) +
              ', string expected',
          ),
        );
      if ((vn(e, h), e.hooks && (e.hooks.options = e), h)) {
        const N = e.highlight;
        let K;
        try {
          e.hooks && (_ = e.hooks.preprocess(_)), (K = P(_, e));
        } catch (ae) {
          return D(ae);
        }
        const de = function (ae) {
          let oe;
          if (!ae)
            try {
              e.walkTokens && ie.walkTokens(K, e.walkTokens),
                (oe = u(K, e)),
                e.hooks && (oe = e.hooks.postprocess(oe));
            } catch (te) {
              ae = te;
            }
          return (e.highlight = N), ae ? D(ae) : h(null, oe);
        };
        if (!N || N.length < 3 || (delete e.highlight, !K.length)) return de();
        let _e = 0;
        ie.walkTokens(K, function (ae) {
          ae.type === 'code' &&
            (_e++,
            setTimeout(() => {
              N(ae.text, ae.lang, function (oe, te) {
                if (oe) return de(oe);
                te != null &&
                  te !== ae.text &&
                  ((ae.text = te), (ae.escaped = !0)),
                  _e--,
                  _e === 0 && de();
              });
            }, 0));
        }),
          _e === 0 && de();
        return;
      }
      if (e.async)
        return Promise.resolve(e.hooks ? e.hooks.preprocess(_) : _)
          .then((N) => P(N, e))
          .then((N) =>
            e.walkTokens
              ? Promise.all(ie.walkTokens(N, e.walkTokens)).then(() => N)
              : N,
          )
          .then((N) => u(N, e))
          .then((N) => (e.hooks ? e.hooks.postprocess(N) : N))
          .catch(D);
      try {
        e.hooks && (_ = e.hooks.preprocess(_));
        const N = P(_, e);
        e.walkTokens && ie.walkTokens(N, e.walkTokens);
        let K = u(N, e);
        return e.hooks && (K = e.hooks.postprocess(K)), K;
      } catch (N) {
        return D(N);
      }
    };
  }
  function ie(P, u, _) {
    return Mt(Ke.lex, Je.parse)(P, u, _);
  }
  (ie.options = ie.setOptions =
    function (P) {
      return (ie.defaults = { ...ie.defaults, ...P }), un(ie.defaults), ie;
    }),
    (ie.getDefaults = St),
    (ie.defaults = Ye),
    (ie.use = function (...P) {
      const u = ie.defaults.extensions || { renderers: {}, childTokens: {} };
      P.forEach((_) => {
        const e = { ..._ };
        if (
          ((e.async = ie.defaults.async || e.async || !1),
          _.extensions &&
            (_.extensions.forEach((h) => {
              if (!h.name) throw new Error('extension name required');
              if (h.renderer) {
                const I = u.renderers[h.name];
                I
                  ? (u.renderers[h.name] = function (...D) {
                      let N = h.renderer.apply(this, D);
                      return N === !1 && (N = I.apply(this, D)), N;
                    })
                  : (u.renderers[h.name] = h.renderer);
              }
              if (h.tokenizer) {
                if (!h.level || (h.level !== 'block' && h.level !== 'inline'))
                  throw new Error(
                    "extension level must be 'block' or 'inline'",
                  );
                u[h.level]
                  ? u[h.level].unshift(h.tokenizer)
                  : (u[h.level] = [h.tokenizer]),
                  h.start &&
                    (h.level === 'block'
                      ? u.startBlock
                        ? u.startBlock.push(h.start)
                        : (u.startBlock = [h.start])
                      : h.level === 'inline' &&
                        (u.startInline
                          ? u.startInline.push(h.start)
                          : (u.startInline = [h.start])));
              }
              h.childTokens && (u.childTokens[h.name] = h.childTokens);
            }),
            (e.extensions = u)),
          _.renderer)
        ) {
          const h = ie.defaults.renderer || new bt();
          for (const I in _.renderer) {
            const D = h[I];
            h[I] = (...N) => {
              let K = _.renderer[I].apply(h, N);
              return K === !1 && (K = D.apply(h, N)), K;
            };
          }
          e.renderer = h;
        }
        if (_.tokenizer) {
          const h = ie.defaults.tokenizer || new gt();
          for (const I in _.tokenizer) {
            const D = h[I];
            h[I] = (...N) => {
              let K = _.tokenizer[I].apply(h, N);
              return K === !1 && (K = D.apply(h, N)), K;
            };
          }
          e.tokenizer = h;
        }
        if (_.hooks) {
          const h = ie.defaults.hooks || new yt();
          for (const I in _.hooks) {
            const D = h[I];
            yt.passThroughHooks.has(I)
              ? (h[I] = (N) => {
                  if (ie.defaults.async)
                    return Promise.resolve(_.hooks[I].call(h, N)).then((de) =>
                      D.call(h, de),
                    );
                  const K = _.hooks[I].call(h, N);
                  return D.call(h, K);
                })
              : (h[I] = (...N) => {
                  let K = _.hooks[I].apply(h, N);
                  return K === !1 && (K = D.apply(h, N)), K;
                });
          }
          e.hooks = h;
        }
        if (_.walkTokens) {
          const h = ie.defaults.walkTokens;
          e.walkTokens = function (I) {
            let D = [];
            return (
              D.push(_.walkTokens.call(this, I)),
              h && (D = D.concat(h.call(this, I))),
              D
            );
          };
        }
        ie.setOptions(e);
      });
    }),
    (ie.walkTokens = function (P, u) {
      let _ = [];
      for (const e of P)
        switch (((_ = _.concat(u.call(ie, e))), e.type)) {
          case 'table': {
            for (const h of e.header) _ = _.concat(ie.walkTokens(h.tokens, u));
            for (const h of e.rows)
              for (const I of h) _ = _.concat(ie.walkTokens(I.tokens, u));
            break;
          }
          case 'list': {
            _ = _.concat(ie.walkTokens(e.items, u));
            break;
          }
          default:
            ie.defaults.extensions &&
            ie.defaults.extensions.childTokens &&
            ie.defaults.extensions.childTokens[e.type]
              ? ie.defaults.extensions.childTokens[e.type].forEach(function (
                  h,
                ) {
                  _ = _.concat(ie.walkTokens(e[h], u));
                })
              : e.tokens && (_ = _.concat(ie.walkTokens(e.tokens, u)));
        }
      return _;
    }),
    (ie.parseInline = Mt(Ke.lexInline, Je.parseInline)),
    (ie.Parser = Je),
    (ie.parser = Je.parse),
    (ie.Renderer = bt),
    (ie.TextRenderer = Ct),
    (ie.Lexer = Ke),
    (ie.lexer = Ke.lex),
    (ie.Tokenizer = gt),
    (ie.Slugger = zt),
    (ie.Hooks = yt),
    (ie.parse = ie),
    ie.options,
    ie.setOptions,
    ie.use,
    ie.walkTokens,
    ie.parseInline,
    Je.parse,
    Ke.lex;
  let _t;
  const Nt = async (P) => {
      try {
        const _ = await (
          await navigator.storage.getDirectory()
        ).getFileHandle(P);
        await An(_);
      } catch (u) {
        console.log(u.name, u.message),
          u.name === 'NotFoundError' &&
            self.postMessage({ showOpenFilePicker: !0 });
      }
    },
    An = async (P) => {
      const u = await cn({
        print: (..._) => console.log(..._),
        printErr: (..._) => console.error(..._),
      });
      (_t = new u.oo1.OpfsDb(P.name)), self.postMessage({ ready: P.name });
    };
  self.addEventListener('message', async (P) => {
    if (P.data.handle)
      try {
        const e = await (
          await (
            await navigator.storage.getDirectory()
          ).getFileHandle(P.data.handle.name, { create: !0 })
        ).createWritable();
        await (await P.data.handle.getFile()).stream().pipeTo(e),
          await Nt(P.data.handle.name);
      } catch (u) {
        self.postMessage({ error: `${u.name}: ${u.message}` });
      }
    else
      P.data.search
        ? await Bt(P.data.search)
        : P.data.query
        ? await Tn(P.data.query)
        : P.data.searchRandom
        ? await In()
        : P.data.checkIfFileExists && (await Nt(P.data.checkIfFileExists));
  });
  const jt = async ({ title: P, text: u, redirect: _ }) => {
      if (_) return await Bt(_);
      const e = ie
        .parse(u, { mangle: !1, headerIds: !1 })
        .replaceAll(/<img[^>]*>/g, '');
      self.postMessage({ html: e, title: P });
    },
    In = async () => {
      const P =
        'SELECT * FROM wiki_articles WHERE redirect IS NULL LIMIT 1 OFFSET ABS(RANDOM()) % MAX((SELECT COUNT(*) FROM wiki_articles WHERE redirect IS NULL), 1)';
      console.log(P), _t.exec({ sql: P, rowMode: 'object', callback: jt });
    },
    Bt = async (P) => {
      P = P.replaceAll(/'/g, "''");
      const u = `SELECT * FROM wiki_articles WHERE title = '${P}' COLLATE NOCASE`;
      console.log(u), _t.exec({ sql: u, rowMode: 'object', callback: jt });
    },
    Tn = async (P) => {
      P = P.replaceAll(/'/g, "''");
      const u = `SELECT title FROM wiki_articles WHERE title LIKE '%${P}%' COLLATE NOCASE`;
      console.log(u),
        _t.exec({
          sql: u,
          rowMode: 'object',
          callback: ({ title: _ }) => {
            self.postMessage({ titleSearch: _ });
          },
        });
    };
})();
