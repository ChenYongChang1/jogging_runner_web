import { getCurrentInstance, inject, computed, unref, ref, hasInjectionContext, readonly, getCurrentScope, onScopeDispose, nextTick, shallowRef, watchEffect, toRef, isRef, version, defineComponent, h, defineAsyncComponent, provide, shallowReactive, watch, Suspense, Fragment, createApp, onErrorCaptured, onServerPrefetch, createVNode, resolveDynamicComponent, reactive, effectScope, isReadonly, isShallow, isReactive, toRaw, mergeProps, withCtx, useSSRContext, Text } from 'vue';
import ft from 'node:http';
import Qa from 'node:https';
import Ye from 'node:zlib';
import ie, { PassThrough, pipeline } from 'node:stream';
import { Buffer as Buffer$1 } from 'node:buffer';
import { promisify, deprecate, types } from 'node:util';
import { format as format$1 } from 'node:url';
import { isIP } from 'node:net';
import { promises, statSync, createReadStream } from 'node:fs';
import { basename } from 'node:path';
import { b as baseURL } from '../routes/renderer.mjs';
import { c as createError$1, s as sanitizeStatusCode, h as getContext, i as createHooks, t as toRouteMatcher, k as createRouter$1, l as getRequestHeaders, m as getRequestHeader, n as setCookie, o as getCookie, p as deleteCookie } from '../nitro/nitro.mjs';
import { getActiveHead, CapoPlugin } from 'unhead';
import { useRoute as useRoute$1, RouterView, createMemoryHistory, createRouter, START_LOCATION, isNavigationFailure } from 'vue-router';
import { ssrRenderSuspense, ssrRenderComponent, ssrRenderVNode } from 'vue/server-renderer';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import '@unhead/shared';

var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), member.set(obj, value), value);
var _e, _t, _r, _n, _a, _e2, _t2, _b, _e3, _c, _d, _e4, _t3, _e5, _f, _g;
var t = Object.defineProperty;
var o$1 = (e, l) => t(e, "name", { value: l, configurable: true });
var n$2 = typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : typeof self < "u" ? self : {};
function f(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
o$1(f, "getDefaultExportFromCjs");
var Va = Object.defineProperty;
var n$1 = (i, o2) => Va(i, "name", { value: o2, configurable: true });
function ts(i) {
  if (!/^data:/i.test(i)) throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
  i = i.replace(/\r?\n/g, "");
  const o2 = i.indexOf(",");
  if (o2 === -1 || o2 <= 4) throw new TypeError("malformed data: URI");
  const a = i.substring(5, o2).split(";");
  let l = "", u = false;
  const m = a[0] || "text/plain";
  let h2 = m;
  for (let A = 1; A < a.length; A++) a[A] === "base64" ? u = true : a[A] && (h2 += `;${a[A]}`, a[A].indexOf("charset=") === 0 && (l = a[A].substring(8)));
  !a[0] && !l.length && (h2 += ";charset=US-ASCII", l = "US-ASCII");
  const S = u ? "base64" : "ascii", E = unescape(i.substring(o2 + 1)), w = Buffer.from(E, S);
  return w.type = m, w.typeFull = h2, w.charset = l, w;
}
n$1(ts, "dataUriToBuffer");
var Eo = {}, ct = { exports: {} };
/**
* @license
* web-streams-polyfill v3.3.3
* Copyright 2024 Mattias Buelens, Diwank Singh Tomer and other contributors.
* This code is released under the MIT license.
* SPDX-License-Identifier: MIT
*/
var rs = ct.exports, vo;
function ns() {
  return vo || (vo = 1, function(i, o2) {
    (function(a, l) {
      l(o2);
    })(rs, function(a) {
      function l() {
      }
      n$1(l, "noop");
      function u(e) {
        return typeof e == "object" && e !== null || typeof e == "function";
      }
      n$1(u, "typeIsObject");
      const m = l;
      function h2(e, t2) {
        try {
          Object.defineProperty(e, "name", { value: t2, configurable: true });
        } catch {
        }
      }
      n$1(h2, "setFunctionName");
      const S = Promise, E = Promise.prototype.then, w = Promise.reject.bind(S);
      function A(e) {
        return new S(e);
      }
      n$1(A, "newPromise");
      function T2(e) {
        return A((t2) => t2(e));
      }
      n$1(T2, "promiseResolvedWith");
      function b(e) {
        return w(e);
      }
      n$1(b, "promiseRejectedWith");
      function q(e, t2, r2) {
        return E.call(e, t2, r2);
      }
      n$1(q, "PerformPromiseThen");
      function g(e, t2, r2) {
        q(q(e, t2, r2), void 0, m);
      }
      n$1(g, "uponPromise");
      function V(e, t2) {
        g(e, t2);
      }
      n$1(V, "uponFulfillment");
      function I(e, t2) {
        g(e, void 0, t2);
      }
      n$1(I, "uponRejection");
      function F(e, t2, r2) {
        return q(e, t2, r2);
      }
      n$1(F, "transformPromiseWith");
      function Q(e) {
        q(e, void 0, m);
      }
      n$1(Q, "setPromiseIsHandledToTrue");
      let se = n$1((e) => {
        if (typeof queueMicrotask == "function") se = queueMicrotask;
        else {
          const t2 = T2(void 0);
          se = n$1((r2) => q(t2, r2), "_queueMicrotask");
        }
        return se(e);
      }, "_queueMicrotask");
      function O(e, t2, r2) {
        if (typeof e != "function") throw new TypeError("Argument is not a function");
        return Function.prototype.apply.call(e, t2, r2);
      }
      n$1(O, "reflectCall");
      function z(e, t2, r2) {
        try {
          return T2(O(e, t2, r2));
        } catch (s) {
          return b(s);
        }
      }
      n$1(z, "promiseCall");
      const $ = 16384;
      const _M = class _M {
        constructor() {
          this._cursor = 0, this._size = 0, this._front = { _elements: [], _next: void 0 }, this._back = this._front, this._cursor = 0, this._size = 0;
        }
        get length() {
          return this._size;
        }
        push(t2) {
          const r2 = this._back;
          let s = r2;
          r2._elements.length === $ - 1 && (s = { _elements: [], _next: void 0 }), r2._elements.push(t2), s !== r2 && (this._back = s, r2._next = s), ++this._size;
        }
        shift() {
          const t2 = this._front;
          let r2 = t2;
          const s = this._cursor;
          let f2 = s + 1;
          const c = t2._elements, d = c[s];
          return f2 === $ && (r2 = t2._next, f2 = 0), --this._size, this._cursor = f2, t2 !== r2 && (this._front = r2), c[s] = void 0, d;
        }
        forEach(t2) {
          let r2 = this._cursor, s = this._front, f2 = s._elements;
          for (; (r2 !== f2.length || s._next !== void 0) && !(r2 === f2.length && (s = s._next, f2 = s._elements, r2 = 0, f2.length === 0)); ) t2(f2[r2]), ++r2;
        }
        peek() {
          const t2 = this._front, r2 = this._cursor;
          return t2._elements[r2];
        }
      };
      n$1(_M, "SimpleQueue");
      let M = _M;
      const pt = Symbol("[[AbortSteps]]"), an = Symbol("[[ErrorSteps]]"), ar = Symbol("[[CancelSteps]]"), sr = Symbol("[[PullSteps]]"), ur = Symbol("[[ReleaseSteps]]");
      function sn(e, t2) {
        e._ownerReadableStream = t2, t2._reader = e, t2._state === "readable" ? fr(e) : t2._state === "closed" ? ri(e) : un(e, t2._storedError);
      }
      n$1(sn, "ReadableStreamReaderGenericInitialize");
      function lr(e, t2) {
        const r2 = e._ownerReadableStream;
        return X(r2, t2);
      }
      n$1(lr, "ReadableStreamReaderGenericCancel");
      function ue(e) {
        const t2 = e._ownerReadableStream;
        t2._state === "readable" ? cr(e, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")) : ni(e, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")), t2._readableStreamController[ur](), t2._reader = void 0, e._ownerReadableStream = void 0;
      }
      n$1(ue, "ReadableStreamReaderGenericRelease");
      function yt(e) {
        return new TypeError("Cannot " + e + " a stream using a released reader");
      }
      n$1(yt, "readerLockException");
      function fr(e) {
        e._closedPromise = A((t2, r2) => {
          e._closedPromise_resolve = t2, e._closedPromise_reject = r2;
        });
      }
      n$1(fr, "defaultReaderClosedPromiseInitialize");
      function un(e, t2) {
        fr(e), cr(e, t2);
      }
      n$1(un, "defaultReaderClosedPromiseInitializeAsRejected");
      function ri(e) {
        fr(e), ln(e);
      }
      n$1(ri, "defaultReaderClosedPromiseInitializeAsResolved");
      function cr(e, t2) {
        e._closedPromise_reject !== void 0 && (Q(e._closedPromise), e._closedPromise_reject(t2), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0);
      }
      n$1(cr, "defaultReaderClosedPromiseReject");
      function ni(e, t2) {
        un(e, t2);
      }
      n$1(ni, "defaultReaderClosedPromiseResetToRejected");
      function ln(e) {
        e._closedPromise_resolve !== void 0 && (e._closedPromise_resolve(void 0), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0);
      }
      n$1(ln, "defaultReaderClosedPromiseResolve");
      const fn = Number.isFinite || function(e) {
        return typeof e == "number" && isFinite(e);
      }, oi = Math.trunc || function(e) {
        return e < 0 ? Math.ceil(e) : Math.floor(e);
      };
      function ii(e) {
        return typeof e == "object" || typeof e == "function";
      }
      n$1(ii, "isDictionary");
      function ne(e, t2) {
        if (e !== void 0 && !ii(e)) throw new TypeError(`${t2} is not an object.`);
      }
      n$1(ne, "assertDictionary");
      function G(e, t2) {
        if (typeof e != "function") throw new TypeError(`${t2} is not a function.`);
      }
      n$1(G, "assertFunction");
      function ai(e) {
        return typeof e == "object" && e !== null || typeof e == "function";
      }
      n$1(ai, "isObject");
      function cn(e, t2) {
        if (!ai(e)) throw new TypeError(`${t2} is not an object.`);
      }
      n$1(cn, "assertObject");
      function le(e, t2, r2) {
        if (e === void 0) throw new TypeError(`Parameter ${t2} is required in '${r2}'.`);
      }
      n$1(le, "assertRequiredArgument");
      function dr(e, t2, r2) {
        if (e === void 0) throw new TypeError(`${t2} is required in '${r2}'.`);
      }
      n$1(dr, "assertRequiredField");
      function hr(e) {
        return Number(e);
      }
      n$1(hr, "convertUnrestrictedDouble");
      function dn(e) {
        return e === 0 ? 0 : e;
      }
      n$1(dn, "censorNegativeZero");
      function si(e) {
        return dn(oi(e));
      }
      n$1(si, "integerPart");
      function mr(e, t2) {
        const s = Number.MAX_SAFE_INTEGER;
        let f2 = Number(e);
        if (f2 = dn(f2), !fn(f2)) throw new TypeError(`${t2} is not a finite number`);
        if (f2 = si(f2), f2 < 0 || f2 > s) throw new TypeError(`${t2} is outside the accepted range of 0 to ${s}, inclusive`);
        return !fn(f2) || f2 === 0 ? 0 : f2;
      }
      n$1(mr, "convertUnsignedLongLongWithEnforceRange");
      function br(e, t2) {
        if (!Te(e)) throw new TypeError(`${t2} is not a ReadableStream.`);
      }
      n$1(br, "assertReadableStream");
      function ze(e) {
        return new ye(e);
      }
      n$1(ze, "AcquireReadableStreamDefaultReader");
      function hn(e, t2) {
        e._reader._readRequests.push(t2);
      }
      n$1(hn, "ReadableStreamAddReadRequest");
      function pr(e, t2, r2) {
        const f2 = e._reader._readRequests.shift();
        r2 ? f2._closeSteps() : f2._chunkSteps(t2);
      }
      n$1(pr, "ReadableStreamFulfillReadRequest");
      function gt(e) {
        return e._reader._readRequests.length;
      }
      n$1(gt, "ReadableStreamGetNumReadRequests");
      function mn(e) {
        const t2 = e._reader;
        return !(t2 === void 0 || !ge(t2));
      }
      n$1(mn, "ReadableStreamHasDefaultReader");
      const _ye = class _ye {
        constructor(t2) {
          if (le(t2, 1, "ReadableStreamDefaultReader"), br(t2, "First parameter"), Ce(t2)) throw new TypeError("This stream has already been locked for exclusive reading by another reader");
          sn(this, t2), this._readRequests = new M();
        }
        get closed() {
          return ge(this) ? this._closedPromise : b(_t4("closed"));
        }
        cancel(t2 = void 0) {
          return ge(this) ? this._ownerReadableStream === void 0 ? b(yt("cancel")) : lr(this, t2) : b(_t4("cancel"));
        }
        read() {
          if (!ge(this)) return b(_t4("read"));
          if (this._ownerReadableStream === void 0) return b(yt("read from"));
          let t2, r2;
          const s = A((c, d) => {
            t2 = c, r2 = d;
          });
          return et(this, { _chunkSteps: n$1((c) => t2({ value: c, done: false }), "_chunkSteps"), _closeSteps: n$1(() => t2({ value: void 0, done: true }), "_closeSteps"), _errorSteps: n$1((c) => r2(c), "_errorSteps") }), s;
        }
        releaseLock() {
          if (!ge(this)) throw _t4("releaseLock");
          this._ownerReadableStream !== void 0 && ui(this);
        }
      };
      n$1(_ye, "ReadableStreamDefaultReader");
      let ye = _ye;
      Object.defineProperties(ye.prototype, { cancel: { enumerable: true }, read: { enumerable: true }, releaseLock: { enumerable: true }, closed: { enumerable: true } }), h2(ye.prototype.cancel, "cancel"), h2(ye.prototype.read, "read"), h2(ye.prototype.releaseLock, "releaseLock"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(ye.prototype, Symbol.toStringTag, { value: "ReadableStreamDefaultReader", configurable: true });
      function ge(e) {
        return !u(e) || !Object.prototype.hasOwnProperty.call(e, "_readRequests") ? false : e instanceof ye;
      }
      n$1(ge, "IsReadableStreamDefaultReader");
      function et(e, t2) {
        const r2 = e._ownerReadableStream;
        r2._disturbed = true, r2._state === "closed" ? t2._closeSteps() : r2._state === "errored" ? t2._errorSteps(r2._storedError) : r2._readableStreamController[sr](t2);
      }
      n$1(et, "ReadableStreamDefaultReaderRead");
      function ui(e) {
        ue(e);
        const t2 = new TypeError("Reader was released");
        bn(e, t2);
      }
      n$1(ui, "ReadableStreamDefaultReaderRelease");
      function bn(e, t2) {
        const r2 = e._readRequests;
        e._readRequests = new M(), r2.forEach((s) => {
          s._errorSteps(t2);
        });
      }
      n$1(bn, "ReadableStreamDefaultReaderErrorReadRequests");
      function _t4(e) {
        return new TypeError(`ReadableStreamDefaultReader.prototype.${e} can only be used on a ReadableStreamDefaultReader`);
      }
      n$1(_t4, "defaultReaderBrandCheckException");
      const li = Object.getPrototypeOf(Object.getPrototypeOf(async function* () {
      }).prototype);
      const _pn = class _pn {
        constructor(t2, r2) {
          this._ongoingPromise = void 0, this._isFinished = false, this._reader = t2, this._preventCancel = r2;
        }
        next() {
          const t2 = n$1(() => this._nextSteps(), "nextSteps");
          return this._ongoingPromise = this._ongoingPromise ? F(this._ongoingPromise, t2, t2) : t2(), this._ongoingPromise;
        }
        return(t2) {
          const r2 = n$1(() => this._returnSteps(t2), "returnSteps");
          return this._ongoingPromise ? F(this._ongoingPromise, r2, r2) : r2();
        }
        _nextSteps() {
          if (this._isFinished) return Promise.resolve({ value: void 0, done: true });
          const t2 = this._reader;
          let r2, s;
          const f2 = A((d, p) => {
            r2 = d, s = p;
          });
          return et(t2, { _chunkSteps: n$1((d) => {
            this._ongoingPromise = void 0, se(() => r2({ value: d, done: false }));
          }, "_chunkSteps"), _closeSteps: n$1(() => {
            this._ongoingPromise = void 0, this._isFinished = true, ue(t2), r2({ value: void 0, done: true });
          }, "_closeSteps"), _errorSteps: n$1((d) => {
            this._ongoingPromise = void 0, this._isFinished = true, ue(t2), s(d);
          }, "_errorSteps") }), f2;
        }
        _returnSteps(t2) {
          if (this._isFinished) return Promise.resolve({ value: t2, done: true });
          this._isFinished = true;
          const r2 = this._reader;
          if (!this._preventCancel) {
            const s = lr(r2, t2);
            return ue(r2), F(s, () => ({ value: t2, done: true }));
          }
          return ue(r2), T2({ value: t2, done: true });
        }
      };
      n$1(_pn, "ReadableStreamAsyncIteratorImpl");
      let pn = _pn;
      const yn = { next() {
        return gn(this) ? this._asyncIteratorImpl.next() : b(_n2("next"));
      }, return(e) {
        return gn(this) ? this._asyncIteratorImpl.return(e) : b(_n2("return"));
      } };
      Object.setPrototypeOf(yn, li);
      function fi(e, t2) {
        const r2 = ze(e), s = new pn(r2, t2), f2 = Object.create(yn);
        return f2._asyncIteratorImpl = s, f2;
      }
      n$1(fi, "AcquireReadableStreamAsyncIterator");
      function gn(e) {
        if (!u(e) || !Object.prototype.hasOwnProperty.call(e, "_asyncIteratorImpl")) return false;
        try {
          return e._asyncIteratorImpl instanceof pn;
        } catch {
          return false;
        }
      }
      n$1(gn, "IsReadableStreamAsyncIterator");
      function _n2(e) {
        return new TypeError(`ReadableStreamAsyncIterator.${e} can only be used on a ReadableSteamAsyncIterator`);
      }
      n$1(_n2, "streamAsyncIteratorBrandCheckException");
      const Sn = Number.isNaN || function(e) {
        return e !== e;
      };
      var yr, gr, _r2;
      function tt(e) {
        return e.slice();
      }
      n$1(tt, "CreateArrayFromList");
      function wn(e, t2, r2, s, f2) {
        new Uint8Array(e).set(new Uint8Array(r2, s, f2), t2);
      }
      n$1(wn, "CopyDataBlockBytes");
      let fe = n$1((e) => (typeof e.transfer == "function" ? fe = n$1((t2) => t2.transfer(), "TransferArrayBuffer") : typeof structuredClone == "function" ? fe = n$1((t2) => structuredClone(t2, { transfer: [t2] }), "TransferArrayBuffer") : fe = n$1((t2) => t2, "TransferArrayBuffer"), fe(e)), "TransferArrayBuffer"), _e6 = n$1((e) => (typeof e.detached == "boolean" ? _e6 = n$1((t2) => t2.detached, "IsDetachedBuffer") : _e6 = n$1((t2) => t2.byteLength === 0, "IsDetachedBuffer"), _e6(e)), "IsDetachedBuffer");
      function Rn(e, t2, r2) {
        if (e.slice) return e.slice(t2, r2);
        const s = r2 - t2, f2 = new ArrayBuffer(s);
        return wn(f2, 0, e, t2, s), f2;
      }
      n$1(Rn, "ArrayBufferSlice");
      function St(e, t2) {
        const r2 = e[t2];
        if (r2 != null) {
          if (typeof r2 != "function") throw new TypeError(`${String(t2)} is not a function`);
          return r2;
        }
      }
      n$1(St, "GetMethod");
      function ci(e) {
        const t2 = { [Symbol.iterator]: () => e.iterator }, r2 = async function* () {
          return yield* t2;
        }(), s = r2.next;
        return { iterator: r2, nextMethod: s, done: false };
      }
      n$1(ci, "CreateAsyncFromSyncIterator");
      const Sr = (_r2 = (yr = Symbol.asyncIterator) !== null && yr !== void 0 ? yr : (gr = Symbol.for) === null || gr === void 0 ? void 0 : gr.call(Symbol, "Symbol.asyncIterator")) !== null && _r2 !== void 0 ? _r2 : "@@asyncIterator";
      function Tn(e, t2 = "sync", r2) {
        if (r2 === void 0) if (t2 === "async") {
          if (r2 = St(e, Sr), r2 === void 0) {
            const c = St(e, Symbol.iterator), d = Tn(e, "sync", c);
            return ci(d);
          }
        } else r2 = St(e, Symbol.iterator);
        if (r2 === void 0) throw new TypeError("The object is not iterable");
        const s = O(r2, e, []);
        if (!u(s)) throw new TypeError("The iterator method must return an object");
        const f2 = s.next;
        return { iterator: s, nextMethod: f2, done: false };
      }
      n$1(Tn, "GetIterator");
      function di(e) {
        const t2 = O(e.nextMethod, e.iterator, []);
        if (!u(t2)) throw new TypeError("The iterator.next() method must return an object");
        return t2;
      }
      n$1(di, "IteratorNext");
      function hi(e) {
        return !!e.done;
      }
      n$1(hi, "IteratorComplete");
      function mi(e) {
        return e.value;
      }
      n$1(mi, "IteratorValue");
      function bi(e) {
        return !(typeof e != "number" || Sn(e) || e < 0);
      }
      n$1(bi, "IsNonNegativeNumber");
      function Cn(e) {
        const t2 = Rn(e.buffer, e.byteOffset, e.byteOffset + e.byteLength);
        return new Uint8Array(t2);
      }
      n$1(Cn, "CloneAsUint8Array");
      function wr(e) {
        const t2 = e._queue.shift();
        return e._queueTotalSize -= t2.size, e._queueTotalSize < 0 && (e._queueTotalSize = 0), t2.value;
      }
      n$1(wr, "DequeueValue");
      function Rr(e, t2, r2) {
        if (!bi(r2) || r2 === 1 / 0) throw new RangeError("Size must be a finite, non-NaN, non-negative number.");
        e._queue.push({ value: t2, size: r2 }), e._queueTotalSize += r2;
      }
      n$1(Rr, "EnqueueValueWithSize");
      function pi(e) {
        return e._queue.peek().value;
      }
      n$1(pi, "PeekQueueValue");
      function Se(e) {
        e._queue = new M(), e._queueTotalSize = 0;
      }
      n$1(Se, "ResetQueue");
      function Pn(e) {
        return e === DataView;
      }
      n$1(Pn, "isDataViewConstructor");
      function yi(e) {
        return Pn(e.constructor);
      }
      n$1(yi, "isDataView");
      function gi(e) {
        return Pn(e) ? 1 : e.BYTES_PER_ELEMENT;
      }
      n$1(gi, "arrayBufferViewElementSize");
      const _ve = class _ve {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get view() {
          if (!Tr(this)) throw Ar("view");
          return this._view;
        }
        respond(t2) {
          if (!Tr(this)) throw Ar("respond");
          if (le(t2, 1, "respond"), t2 = mr(t2, "First parameter"), this._associatedReadableByteStreamController === void 0) throw new TypeError("This BYOB request has been invalidated");
          if (_e6(this._view.buffer)) throw new TypeError("The BYOB request's buffer has been detached and so cannot be used as a response");
          Ct(this._associatedReadableByteStreamController, t2);
        }
        respondWithNewView(t2) {
          if (!Tr(this)) throw Ar("respondWithNewView");
          if (le(t2, 1, "respondWithNewView"), !ArrayBuffer.isView(t2)) throw new TypeError("You can only respond with array buffer views");
          if (this._associatedReadableByteStreamController === void 0) throw new TypeError("This BYOB request has been invalidated");
          if (_e6(t2.buffer)) throw new TypeError("The given view's buffer has been detached and so cannot be used as a response");
          Pt(this._associatedReadableByteStreamController, t2);
        }
      };
      n$1(_ve, "ReadableStreamBYOBRequest");
      let ve = _ve;
      Object.defineProperties(ve.prototype, { respond: { enumerable: true }, respondWithNewView: { enumerable: true }, view: { enumerable: true } }), h2(ve.prototype.respond, "respond"), h2(ve.prototype.respondWithNewView, "respondWithNewView"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(ve.prototype, Symbol.toStringTag, { value: "ReadableStreamBYOBRequest", configurable: true });
      const _ce = class _ce {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get byobRequest() {
          if (!Ae(this)) throw nt("byobRequest");
          return vr(this);
        }
        get desiredSize() {
          if (!Ae(this)) throw nt("desiredSize");
          return Fn(this);
        }
        close() {
          if (!Ae(this)) throw nt("close");
          if (this._closeRequested) throw new TypeError("The stream has already been closed; do not close it again!");
          const t2 = this._controlledReadableByteStream._state;
          if (t2 !== "readable") throw new TypeError(`The stream (in ${t2} state) is not in the readable state and cannot be closed`);
          rt(this);
        }
        enqueue(t2) {
          if (!Ae(this)) throw nt("enqueue");
          if (le(t2, 1, "enqueue"), !ArrayBuffer.isView(t2)) throw new TypeError("chunk must be an array buffer view");
          if (t2.byteLength === 0) throw new TypeError("chunk must have non-zero byteLength");
          if (t2.buffer.byteLength === 0) throw new TypeError("chunk's buffer must have non-zero byteLength");
          if (this._closeRequested) throw new TypeError("stream is closed or draining");
          const r2 = this._controlledReadableByteStream._state;
          if (r2 !== "readable") throw new TypeError(`The stream (in ${r2} state) is not in the readable state and cannot be enqueued to`);
          Tt(this, t2);
        }
        error(t2 = void 0) {
          if (!Ae(this)) throw nt("error");
          Z(this, t2);
        }
        [ar](t2) {
          En(this), Se(this);
          const r2 = this._cancelAlgorithm(t2);
          return Rt(this), r2;
        }
        [sr](t2) {
          const r2 = this._controlledReadableByteStream;
          if (this._queueTotalSize > 0) {
            In(this, t2);
            return;
          }
          const s = this._autoAllocateChunkSize;
          if (s !== void 0) {
            let f2;
            try {
              f2 = new ArrayBuffer(s);
            } catch (d) {
              t2._errorSteps(d);
              return;
            }
            const c = { buffer: f2, bufferByteLength: s, byteOffset: 0, byteLength: s, bytesFilled: 0, minimumFill: 1, elementSize: 1, viewConstructor: Uint8Array, readerType: "default" };
            this._pendingPullIntos.push(c);
          }
          hn(r2, t2), Be(this);
        }
        [ur]() {
          if (this._pendingPullIntos.length > 0) {
            const t2 = this._pendingPullIntos.peek();
            t2.readerType = "none", this._pendingPullIntos = new M(), this._pendingPullIntos.push(t2);
          }
        }
      };
      n$1(_ce, "ReadableByteStreamController");
      let ce = _ce;
      Object.defineProperties(ce.prototype, { close: { enumerable: true }, enqueue: { enumerable: true }, error: { enumerable: true }, byobRequest: { enumerable: true }, desiredSize: { enumerable: true } }), h2(ce.prototype.close, "close"), h2(ce.prototype.enqueue, "enqueue"), h2(ce.prototype.error, "error"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(ce.prototype, Symbol.toStringTag, { value: "ReadableByteStreamController", configurable: true });
      function Ae(e) {
        return !u(e) || !Object.prototype.hasOwnProperty.call(e, "_controlledReadableByteStream") ? false : e instanceof ce;
      }
      n$1(Ae, "IsReadableByteStreamController");
      function Tr(e) {
        return !u(e) || !Object.prototype.hasOwnProperty.call(e, "_associatedReadableByteStreamController") ? false : e instanceof ve;
      }
      n$1(Tr, "IsReadableStreamBYOBRequest");
      function Be(e) {
        if (!Ti(e)) return;
        if (e._pulling) {
          e._pullAgain = true;
          return;
        }
        e._pulling = true;
        const r2 = e._pullAlgorithm();
        g(r2, () => (e._pulling = false, e._pullAgain && (e._pullAgain = false, Be(e)), null), (s) => (Z(e, s), null));
      }
      n$1(Be, "ReadableByteStreamControllerCallPullIfNeeded");
      function En(e) {
        Pr(e), e._pendingPullIntos = new M();
      }
      n$1(En, "ReadableByteStreamControllerClearPendingPullIntos");
      function Cr(e, t2) {
        let r2 = false;
        e._state === "closed" && (r2 = true);
        const s = vn(t2);
        t2.readerType === "default" ? pr(e, s, r2) : Bi(e, s, r2);
      }
      n$1(Cr, "ReadableByteStreamControllerCommitPullIntoDescriptor");
      function vn(e) {
        const t2 = e.bytesFilled, r2 = e.elementSize;
        return new e.viewConstructor(e.buffer, e.byteOffset, t2 / r2);
      }
      n$1(vn, "ReadableByteStreamControllerConvertPullIntoDescriptor");
      function wt(e, t2, r2, s) {
        e._queue.push({ buffer: t2, byteOffset: r2, byteLength: s }), e._queueTotalSize += s;
      }
      n$1(wt, "ReadableByteStreamControllerEnqueueChunkToQueue");
      function An(e, t2, r2, s) {
        let f2;
        try {
          f2 = Rn(t2, r2, r2 + s);
        } catch (c) {
          throw Z(e, c), c;
        }
        wt(e, f2, 0, s);
      }
      n$1(An, "ReadableByteStreamControllerEnqueueClonedChunkToQueue");
      function Bn(e, t2) {
        t2.bytesFilled > 0 && An(e, t2.buffer, t2.byteOffset, t2.bytesFilled), je(e);
      }
      n$1(Bn, "ReadableByteStreamControllerEnqueueDetachedPullIntoToQueue");
      function Wn(e, t2) {
        const r2 = Math.min(e._queueTotalSize, t2.byteLength - t2.bytesFilled), s = t2.bytesFilled + r2;
        let f2 = r2, c = false;
        const d = s % t2.elementSize, p = s - d;
        p >= t2.minimumFill && (f2 = p - t2.bytesFilled, c = true);
        const R = e._queue;
        for (; f2 > 0; ) {
          const y = R.peek(), C = Math.min(f2, y.byteLength), P = t2.byteOffset + t2.bytesFilled;
          wn(t2.buffer, P, y.buffer, y.byteOffset, C), y.byteLength === C ? R.shift() : (y.byteOffset += C, y.byteLength -= C), e._queueTotalSize -= C, kn(e, C, t2), f2 -= C;
        }
        return c;
      }
      n$1(Wn, "ReadableByteStreamControllerFillPullIntoDescriptorFromQueue");
      function kn(e, t2, r2) {
        r2.bytesFilled += t2;
      }
      n$1(kn, "ReadableByteStreamControllerFillHeadPullIntoDescriptor");
      function qn(e) {
        e._queueTotalSize === 0 && e._closeRequested ? (Rt(e), lt(e._controlledReadableByteStream)) : Be(e);
      }
      n$1(qn, "ReadableByteStreamControllerHandleQueueDrain");
      function Pr(e) {
        e._byobRequest !== null && (e._byobRequest._associatedReadableByteStreamController = void 0, e._byobRequest._view = null, e._byobRequest = null);
      }
      n$1(Pr, "ReadableByteStreamControllerInvalidateBYOBRequest");
      function Er(e) {
        for (; e._pendingPullIntos.length > 0; ) {
          if (e._queueTotalSize === 0) return;
          const t2 = e._pendingPullIntos.peek();
          Wn(e, t2) && (je(e), Cr(e._controlledReadableByteStream, t2));
        }
      }
      n$1(Er, "ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue");
      function _i(e) {
        const t2 = e._controlledReadableByteStream._reader;
        for (; t2._readRequests.length > 0; ) {
          if (e._queueTotalSize === 0) return;
          const r2 = t2._readRequests.shift();
          In(e, r2);
        }
      }
      n$1(_i, "ReadableByteStreamControllerProcessReadRequestsUsingQueue");
      function Si(e, t2, r2, s) {
        const f2 = e._controlledReadableByteStream, c = t2.constructor, d = gi(c), { byteOffset: p, byteLength: R } = t2, y = r2 * d;
        let C;
        try {
          C = fe(t2.buffer);
        } catch (B) {
          s._errorSteps(B);
          return;
        }
        const P = { buffer: C, bufferByteLength: C.byteLength, byteOffset: p, byteLength: R, bytesFilled: 0, minimumFill: y, elementSize: d, viewConstructor: c, readerType: "byob" };
        if (e._pendingPullIntos.length > 0) {
          e._pendingPullIntos.push(P), Ln(f2, s);
          return;
        }
        if (f2._state === "closed") {
          const B = new c(P.buffer, P.byteOffset, 0);
          s._closeSteps(B);
          return;
        }
        if (e._queueTotalSize > 0) {
          if (Wn(e, P)) {
            const B = vn(P);
            qn(e), s._chunkSteps(B);
            return;
          }
          if (e._closeRequested) {
            const B = new TypeError("Insufficient bytes to fill elements in the given buffer");
            Z(e, B), s._errorSteps(B);
            return;
          }
        }
        e._pendingPullIntos.push(P), Ln(f2, s), Be(e);
      }
      n$1(Si, "ReadableByteStreamControllerPullInto");
      function wi(e, t2) {
        t2.readerType === "none" && je(e);
        const r2 = e._controlledReadableByteStream;
        if (Br(r2)) for (; Dn(r2) > 0; ) {
          const s = je(e);
          Cr(r2, s);
        }
      }
      n$1(wi, "ReadableByteStreamControllerRespondInClosedState");
      function Ri(e, t2, r2) {
        if (kn(e, t2, r2), r2.readerType === "none") {
          Bn(e, r2), Er(e);
          return;
        }
        if (r2.bytesFilled < r2.minimumFill) return;
        je(e);
        const s = r2.bytesFilled % r2.elementSize;
        if (s > 0) {
          const f2 = r2.byteOffset + r2.bytesFilled;
          An(e, r2.buffer, f2 - s, s);
        }
        r2.bytesFilled -= s, Cr(e._controlledReadableByteStream, r2), Er(e);
      }
      n$1(Ri, "ReadableByteStreamControllerRespondInReadableState");
      function On(e, t2) {
        const r2 = e._pendingPullIntos.peek();
        Pr(e), e._controlledReadableByteStream._state === "closed" ? wi(e, r2) : Ri(e, t2, r2), Be(e);
      }
      n$1(On, "ReadableByteStreamControllerRespondInternal");
      function je(e) {
        return e._pendingPullIntos.shift();
      }
      n$1(je, "ReadableByteStreamControllerShiftPendingPullInto");
      function Ti(e) {
        const t2 = e._controlledReadableByteStream;
        return t2._state !== "readable" || e._closeRequested || !e._started ? false : !!(mn(t2) && gt(t2) > 0 || Br(t2) && Dn(t2) > 0 || Fn(e) > 0);
      }
      n$1(Ti, "ReadableByteStreamControllerShouldCallPull");
      function Rt(e) {
        e._pullAlgorithm = void 0, e._cancelAlgorithm = void 0;
      }
      n$1(Rt, "ReadableByteStreamControllerClearAlgorithms");
      function rt(e) {
        const t2 = e._controlledReadableByteStream;
        if (!(e._closeRequested || t2._state !== "readable")) {
          if (e._queueTotalSize > 0) {
            e._closeRequested = true;
            return;
          }
          if (e._pendingPullIntos.length > 0) {
            const r2 = e._pendingPullIntos.peek();
            if (r2.bytesFilled % r2.elementSize !== 0) {
              const s = new TypeError("Insufficient bytes to fill elements in the given buffer");
              throw Z(e, s), s;
            }
          }
          Rt(e), lt(t2);
        }
      }
      n$1(rt, "ReadableByteStreamControllerClose");
      function Tt(e, t2) {
        const r2 = e._controlledReadableByteStream;
        if (e._closeRequested || r2._state !== "readable") return;
        const { buffer: s, byteOffset: f2, byteLength: c } = t2;
        if (_e6(s)) throw new TypeError("chunk's buffer is detached and so cannot be enqueued");
        const d = fe(s);
        if (e._pendingPullIntos.length > 0) {
          const p = e._pendingPullIntos.peek();
          if (_e6(p.buffer)) throw new TypeError("The BYOB request's buffer has been detached and so cannot be filled with an enqueued chunk");
          Pr(e), p.buffer = fe(p.buffer), p.readerType === "none" && Bn(e, p);
        }
        if (mn(r2)) if (_i(e), gt(r2) === 0) wt(e, d, f2, c);
        else {
          e._pendingPullIntos.length > 0 && je(e);
          const p = new Uint8Array(d, f2, c);
          pr(r2, p, false);
        }
        else Br(r2) ? (wt(e, d, f2, c), Er(e)) : wt(e, d, f2, c);
        Be(e);
      }
      n$1(Tt, "ReadableByteStreamControllerEnqueue");
      function Z(e, t2) {
        const r2 = e._controlledReadableByteStream;
        r2._state === "readable" && (En(e), Se(e), Rt(e), lo(r2, t2));
      }
      n$1(Z, "ReadableByteStreamControllerError");
      function In(e, t2) {
        const r2 = e._queue.shift();
        e._queueTotalSize -= r2.byteLength, qn(e);
        const s = new Uint8Array(r2.buffer, r2.byteOffset, r2.byteLength);
        t2._chunkSteps(s);
      }
      n$1(In, "ReadableByteStreamControllerFillReadRequestFromQueue");
      function vr(e) {
        if (e._byobRequest === null && e._pendingPullIntos.length > 0) {
          const t2 = e._pendingPullIntos.peek(), r2 = new Uint8Array(t2.buffer, t2.byteOffset + t2.bytesFilled, t2.byteLength - t2.bytesFilled), s = Object.create(ve.prototype);
          Pi(s, e, r2), e._byobRequest = s;
        }
        return e._byobRequest;
      }
      n$1(vr, "ReadableByteStreamControllerGetBYOBRequest");
      function Fn(e) {
        const t2 = e._controlledReadableByteStream._state;
        return t2 === "errored" ? null : t2 === "closed" ? 0 : e._strategyHWM - e._queueTotalSize;
      }
      n$1(Fn, "ReadableByteStreamControllerGetDesiredSize");
      function Ct(e, t2) {
        const r2 = e._pendingPullIntos.peek();
        if (e._controlledReadableByteStream._state === "closed") {
          if (t2 !== 0) throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");
        } else {
          if (t2 === 0) throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");
          if (r2.bytesFilled + t2 > r2.byteLength) throw new RangeError("bytesWritten out of range");
        }
        r2.buffer = fe(r2.buffer), On(e, t2);
      }
      n$1(Ct, "ReadableByteStreamControllerRespond");
      function Pt(e, t2) {
        const r2 = e._pendingPullIntos.peek();
        if (e._controlledReadableByteStream._state === "closed") {
          if (t2.byteLength !== 0) throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream");
        } else if (t2.byteLength === 0) throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");
        if (r2.byteOffset + r2.bytesFilled !== t2.byteOffset) throw new RangeError("The region specified by view does not match byobRequest");
        if (r2.bufferByteLength !== t2.buffer.byteLength) throw new RangeError("The buffer of view has different capacity than byobRequest");
        if (r2.bytesFilled + t2.byteLength > r2.byteLength) throw new RangeError("The region specified by view is larger than byobRequest");
        const f2 = t2.byteLength;
        r2.buffer = fe(t2.buffer), On(e, f2);
      }
      n$1(Pt, "ReadableByteStreamControllerRespondWithNewView");
      function zn(e, t2, r2, s, f2, c, d) {
        t2._controlledReadableByteStream = e, t2._pullAgain = false, t2._pulling = false, t2._byobRequest = null, t2._queue = t2._queueTotalSize = void 0, Se(t2), t2._closeRequested = false, t2._started = false, t2._strategyHWM = c, t2._pullAlgorithm = s, t2._cancelAlgorithm = f2, t2._autoAllocateChunkSize = d, t2._pendingPullIntos = new M(), e._readableStreamController = t2;
        const p = r2();
        g(T2(p), () => (t2._started = true, Be(t2), null), (R) => (Z(t2, R), null));
      }
      n$1(zn, "SetUpReadableByteStreamController");
      function Ci(e, t2, r2) {
        const s = Object.create(ce.prototype);
        let f2, c, d;
        t2.start !== void 0 ? f2 = n$1(() => t2.start(s), "startAlgorithm") : f2 = n$1(() => {
        }, "startAlgorithm"), t2.pull !== void 0 ? c = n$1(() => t2.pull(s), "pullAlgorithm") : c = n$1(() => T2(void 0), "pullAlgorithm"), t2.cancel !== void 0 ? d = n$1((R) => t2.cancel(R), "cancelAlgorithm") : d = n$1(() => T2(void 0), "cancelAlgorithm");
        const p = t2.autoAllocateChunkSize;
        if (p === 0) throw new TypeError("autoAllocateChunkSize must be greater than 0");
        zn(e, s, f2, c, d, r2, p);
      }
      n$1(Ci, "SetUpReadableByteStreamControllerFromUnderlyingSource");
      function Pi(e, t2, r2) {
        e._associatedReadableByteStreamController = t2, e._view = r2;
      }
      n$1(Pi, "SetUpReadableStreamBYOBRequest");
      function Ar(e) {
        return new TypeError(`ReadableStreamBYOBRequest.prototype.${e} can only be used on a ReadableStreamBYOBRequest`);
      }
      n$1(Ar, "byobRequestBrandCheckException");
      function nt(e) {
        return new TypeError(`ReadableByteStreamController.prototype.${e} can only be used on a ReadableByteStreamController`);
      }
      n$1(nt, "byteStreamControllerBrandCheckException");
      function Ei(e, t2) {
        ne(e, t2);
        const r2 = e == null ? void 0 : e.mode;
        return { mode: r2 === void 0 ? void 0 : vi(r2, `${t2} has member 'mode' that`) };
      }
      n$1(Ei, "convertReaderOptions");
      function vi(e, t2) {
        if (e = `${e}`, e !== "byob") throw new TypeError(`${t2} '${e}' is not a valid enumeration value for ReadableStreamReaderMode`);
        return e;
      }
      n$1(vi, "convertReadableStreamReaderMode");
      function Ai(e, t2) {
        var r2;
        ne(e, t2);
        const s = (r2 = e == null ? void 0 : e.min) !== null && r2 !== void 0 ? r2 : 1;
        return { min: mr(s, `${t2} has member 'min' that`) };
      }
      n$1(Ai, "convertByobReadOptions");
      function jn(e) {
        return new we(e);
      }
      n$1(jn, "AcquireReadableStreamBYOBReader");
      function Ln(e, t2) {
        e._reader._readIntoRequests.push(t2);
      }
      n$1(Ln, "ReadableStreamAddReadIntoRequest");
      function Bi(e, t2, r2) {
        const f2 = e._reader._readIntoRequests.shift();
        r2 ? f2._closeSteps(t2) : f2._chunkSteps(t2);
      }
      n$1(Bi, "ReadableStreamFulfillReadIntoRequest");
      function Dn(e) {
        return e._reader._readIntoRequests.length;
      }
      n$1(Dn, "ReadableStreamGetNumReadIntoRequests");
      function Br(e) {
        const t2 = e._reader;
        return !(t2 === void 0 || !We(t2));
      }
      n$1(Br, "ReadableStreamHasBYOBReader");
      const _we = class _we {
        constructor(t2) {
          if (le(t2, 1, "ReadableStreamBYOBReader"), br(t2, "First parameter"), Ce(t2)) throw new TypeError("This stream has already been locked for exclusive reading by another reader");
          if (!Ae(t2._readableStreamController)) throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");
          sn(this, t2), this._readIntoRequests = new M();
        }
        get closed() {
          return We(this) ? this._closedPromise : b(Et("closed"));
        }
        cancel(t2 = void 0) {
          return We(this) ? this._ownerReadableStream === void 0 ? b(yt("cancel")) : lr(this, t2) : b(Et("cancel"));
        }
        read(t2, r2 = {}) {
          if (!We(this)) return b(Et("read"));
          if (!ArrayBuffer.isView(t2)) return b(new TypeError("view must be an array buffer view"));
          if (t2.byteLength === 0) return b(new TypeError("view must have non-zero byteLength"));
          if (t2.buffer.byteLength === 0) return b(new TypeError("view's buffer must have non-zero byteLength"));
          if (_e6(t2.buffer)) return b(new TypeError("view's buffer has been detached"));
          let s;
          try {
            s = Ai(r2, "options");
          } catch (y) {
            return b(y);
          }
          const f2 = s.min;
          if (f2 === 0) return b(new TypeError("options.min must be greater than 0"));
          if (yi(t2)) {
            if (f2 > t2.byteLength) return b(new RangeError("options.min must be less than or equal to view's byteLength"));
          } else if (f2 > t2.length) return b(new RangeError("options.min must be less than or equal to view's length"));
          if (this._ownerReadableStream === void 0) return b(yt("read from"));
          let c, d;
          const p = A((y, C) => {
            c = y, d = C;
          });
          return $n(this, t2, f2, { _chunkSteps: n$1((y) => c({ value: y, done: false }), "_chunkSteps"), _closeSteps: n$1((y) => c({ value: y, done: true }), "_closeSteps"), _errorSteps: n$1((y) => d(y), "_errorSteps") }), p;
        }
        releaseLock() {
          if (!We(this)) throw Et("releaseLock");
          this._ownerReadableStream !== void 0 && Wi(this);
        }
      };
      n$1(_we, "ReadableStreamBYOBReader");
      let we = _we;
      Object.defineProperties(we.prototype, { cancel: { enumerable: true }, read: { enumerable: true }, releaseLock: { enumerable: true }, closed: { enumerable: true } }), h2(we.prototype.cancel, "cancel"), h2(we.prototype.read, "read"), h2(we.prototype.releaseLock, "releaseLock"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(we.prototype, Symbol.toStringTag, { value: "ReadableStreamBYOBReader", configurable: true });
      function We(e) {
        return !u(e) || !Object.prototype.hasOwnProperty.call(e, "_readIntoRequests") ? false : e instanceof we;
      }
      n$1(We, "IsReadableStreamBYOBReader");
      function $n(e, t2, r2, s) {
        const f2 = e._ownerReadableStream;
        f2._disturbed = true, f2._state === "errored" ? s._errorSteps(f2._storedError) : Si(f2._readableStreamController, t2, r2, s);
      }
      n$1($n, "ReadableStreamBYOBReaderRead");
      function Wi(e) {
        ue(e);
        const t2 = new TypeError("Reader was released");
        Mn(e, t2);
      }
      n$1(Wi, "ReadableStreamBYOBReaderRelease");
      function Mn(e, t2) {
        const r2 = e._readIntoRequests;
        e._readIntoRequests = new M(), r2.forEach((s) => {
          s._errorSteps(t2);
        });
      }
      n$1(Mn, "ReadableStreamBYOBReaderErrorReadIntoRequests");
      function Et(e) {
        return new TypeError(`ReadableStreamBYOBReader.prototype.${e} can only be used on a ReadableStreamBYOBReader`);
      }
      n$1(Et, "byobReaderBrandCheckException");
      function ot(e, t2) {
        const { highWaterMark: r2 } = e;
        if (r2 === void 0) return t2;
        if (Sn(r2) || r2 < 0) throw new RangeError("Invalid highWaterMark");
        return r2;
      }
      n$1(ot, "ExtractHighWaterMark");
      function vt(e) {
        const { size: t2 } = e;
        return t2 || (() => 1);
      }
      n$1(vt, "ExtractSizeAlgorithm");
      function At(e, t2) {
        ne(e, t2);
        const r2 = e == null ? void 0 : e.highWaterMark, s = e == null ? void 0 : e.size;
        return { highWaterMark: r2 === void 0 ? void 0 : hr(r2), size: s === void 0 ? void 0 : ki(s, `${t2} has member 'size' that`) };
      }
      n$1(At, "convertQueuingStrategy");
      function ki(e, t2) {
        return G(e, t2), (r2) => hr(e(r2));
      }
      n$1(ki, "convertQueuingStrategySize");
      function qi(e, t2) {
        ne(e, t2);
        const r2 = e == null ? void 0 : e.abort, s = e == null ? void 0 : e.close, f2 = e == null ? void 0 : e.start, c = e == null ? void 0 : e.type, d = e == null ? void 0 : e.write;
        return { abort: r2 === void 0 ? void 0 : Oi(r2, e, `${t2} has member 'abort' that`), close: s === void 0 ? void 0 : Ii(s, e, `${t2} has member 'close' that`), start: f2 === void 0 ? void 0 : Fi(f2, e, `${t2} has member 'start' that`), write: d === void 0 ? void 0 : zi(d, e, `${t2} has member 'write' that`), type: c };
      }
      n$1(qi, "convertUnderlyingSink");
      function Oi(e, t2, r2) {
        return G(e, r2), (s) => z(e, t2, [s]);
      }
      n$1(Oi, "convertUnderlyingSinkAbortCallback");
      function Ii(e, t2, r2) {
        return G(e, r2), () => z(e, t2, []);
      }
      n$1(Ii, "convertUnderlyingSinkCloseCallback");
      function Fi(e, t2, r2) {
        return G(e, r2), (s) => O(e, t2, [s]);
      }
      n$1(Fi, "convertUnderlyingSinkStartCallback");
      function zi(e, t2, r2) {
        return G(e, r2), (s, f2) => z(e, t2, [s, f2]);
      }
      n$1(zi, "convertUnderlyingSinkWriteCallback");
      function Un(e, t2) {
        if (!Le(e)) throw new TypeError(`${t2} is not a WritableStream.`);
      }
      n$1(Un, "assertWritableStream");
      function ji(e) {
        if (typeof e != "object" || e === null) return false;
        try {
          return typeof e.aborted == "boolean";
        } catch {
          return false;
        }
      }
      n$1(ji, "isAbortSignal");
      const Li = typeof AbortController == "function";
      function Di() {
        if (Li) return new AbortController();
      }
      n$1(Di, "createAbortController");
      const _Re = class _Re {
        constructor(t2 = {}, r2 = {}) {
          t2 === void 0 ? t2 = null : cn(t2, "First parameter");
          const s = At(r2, "Second parameter"), f2 = qi(t2, "First parameter");
          if (Nn(this), f2.type !== void 0) throw new RangeError("Invalid type is specified");
          const d = vt(s), p = ot(s, 1);
          Xi(this, f2, p, d);
        }
        get locked() {
          if (!Le(this)) throw Ot("locked");
          return De(this);
        }
        abort(t2 = void 0) {
          return Le(this) ? De(this) ? b(new TypeError("Cannot abort a stream that already has a writer")) : Bt(this, t2) : b(Ot("abort"));
        }
        close() {
          return Le(this) ? De(this) ? b(new TypeError("Cannot close a stream that already has a writer")) : oe(this) ? b(new TypeError("Cannot close an already-closing stream")) : Hn(this) : b(Ot("close"));
        }
        getWriter() {
          if (!Le(this)) throw Ot("getWriter");
          return xn(this);
        }
      };
      n$1(_Re, "WritableStream");
      let Re = _Re;
      Object.defineProperties(Re.prototype, { abort: { enumerable: true }, close: { enumerable: true }, getWriter: { enumerable: true }, locked: { enumerable: true } }), h2(Re.prototype.abort, "abort"), h2(Re.prototype.close, "close"), h2(Re.prototype.getWriter, "getWriter"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(Re.prototype, Symbol.toStringTag, { value: "WritableStream", configurable: true });
      function xn(e) {
        return new de(e);
      }
      n$1(xn, "AcquireWritableStreamDefaultWriter");
      function $i(e, t2, r2, s, f2 = 1, c = () => 1) {
        const d = Object.create(Re.prototype);
        Nn(d);
        const p = Object.create($e.prototype);
        return Kn(d, p, e, t2, r2, s, f2, c), d;
      }
      n$1($i, "CreateWritableStream");
      function Nn(e) {
        e._state = "writable", e._storedError = void 0, e._writer = void 0, e._writableStreamController = void 0, e._writeRequests = new M(), e._inFlightWriteRequest = void 0, e._closeRequest = void 0, e._inFlightCloseRequest = void 0, e._pendingAbortRequest = void 0, e._backpressure = false;
      }
      n$1(Nn, "InitializeWritableStream");
      function Le(e) {
        return !u(e) || !Object.prototype.hasOwnProperty.call(e, "_writableStreamController") ? false : e instanceof Re;
      }
      n$1(Le, "IsWritableStream");
      function De(e) {
        return e._writer !== void 0;
      }
      n$1(De, "IsWritableStreamLocked");
      function Bt(e, t2) {
        var r2;
        if (e._state === "closed" || e._state === "errored") return T2(void 0);
        e._writableStreamController._abortReason = t2, (r2 = e._writableStreamController._abortController) === null || r2 === void 0 || r2.abort(t2);
        const s = e._state;
        if (s === "closed" || s === "errored") return T2(void 0);
        if (e._pendingAbortRequest !== void 0) return e._pendingAbortRequest._promise;
        let f2 = false;
        s === "erroring" && (f2 = true, t2 = void 0);
        const c = A((d, p) => {
          e._pendingAbortRequest = { _promise: void 0, _resolve: d, _reject: p, _reason: t2, _wasAlreadyErroring: f2 };
        });
        return e._pendingAbortRequest._promise = c, f2 || kr(e, t2), c;
      }
      n$1(Bt, "WritableStreamAbort");
      function Hn(e) {
        const t2 = e._state;
        if (t2 === "closed" || t2 === "errored") return b(new TypeError(`The stream (in ${t2} state) is not in the writable state and cannot be closed`));
        const r2 = A((f2, c) => {
          const d = { _resolve: f2, _reject: c };
          e._closeRequest = d;
        }), s = e._writer;
        return s !== void 0 && e._backpressure && t2 === "writable" && Dr(s), ea(e._writableStreamController), r2;
      }
      n$1(Hn, "WritableStreamClose");
      function Mi(e) {
        return A((r2, s) => {
          const f2 = { _resolve: r2, _reject: s };
          e._writeRequests.push(f2);
        });
      }
      n$1(Mi, "WritableStreamAddWriteRequest");
      function Wr(e, t2) {
        if (e._state === "writable") {
          kr(e, t2);
          return;
        }
        qr(e);
      }
      n$1(Wr, "WritableStreamDealWithRejection");
      function kr(e, t2) {
        const r2 = e._writableStreamController;
        e._state = "erroring", e._storedError = t2;
        const s = e._writer;
        s !== void 0 && Qn(s, t2), !Vi(e) && r2._started && qr(e);
      }
      n$1(kr, "WritableStreamStartErroring");
      function qr(e) {
        e._state = "errored", e._writableStreamController[an]();
        const t2 = e._storedError;
        if (e._writeRequests.forEach((f2) => {
          f2._reject(t2);
        }), e._writeRequests = new M(), e._pendingAbortRequest === void 0) {
          Wt(e);
          return;
        }
        const r2 = e._pendingAbortRequest;
        if (e._pendingAbortRequest = void 0, r2._wasAlreadyErroring) {
          r2._reject(t2), Wt(e);
          return;
        }
        const s = e._writableStreamController[pt](r2._reason);
        g(s, () => (r2._resolve(), Wt(e), null), (f2) => (r2._reject(f2), Wt(e), null));
      }
      n$1(qr, "WritableStreamFinishErroring");
      function Ui(e) {
        e._inFlightWriteRequest._resolve(void 0), e._inFlightWriteRequest = void 0;
      }
      n$1(Ui, "WritableStreamFinishInFlightWrite");
      function xi(e, t2) {
        e._inFlightWriteRequest._reject(t2), e._inFlightWriteRequest = void 0, Wr(e, t2);
      }
      n$1(xi, "WritableStreamFinishInFlightWriteWithError");
      function Ni(e) {
        e._inFlightCloseRequest._resolve(void 0), e._inFlightCloseRequest = void 0, e._state === "erroring" && (e._storedError = void 0, e._pendingAbortRequest !== void 0 && (e._pendingAbortRequest._resolve(), e._pendingAbortRequest = void 0)), e._state = "closed";
        const r2 = e._writer;
        r2 !== void 0 && to(r2);
      }
      n$1(Ni, "WritableStreamFinishInFlightClose");
      function Hi(e, t2) {
        e._inFlightCloseRequest._reject(t2), e._inFlightCloseRequest = void 0, e._pendingAbortRequest !== void 0 && (e._pendingAbortRequest._reject(t2), e._pendingAbortRequest = void 0), Wr(e, t2);
      }
      n$1(Hi, "WritableStreamFinishInFlightCloseWithError");
      function oe(e) {
        return !(e._closeRequest === void 0 && e._inFlightCloseRequest === void 0);
      }
      n$1(oe, "WritableStreamCloseQueuedOrInFlight");
      function Vi(e) {
        return !(e._inFlightWriteRequest === void 0 && e._inFlightCloseRequest === void 0);
      }
      n$1(Vi, "WritableStreamHasOperationMarkedInFlight");
      function Qi(e) {
        e._inFlightCloseRequest = e._closeRequest, e._closeRequest = void 0;
      }
      n$1(Qi, "WritableStreamMarkCloseRequestInFlight");
      function Yi(e) {
        e._inFlightWriteRequest = e._writeRequests.shift();
      }
      n$1(Yi, "WritableStreamMarkFirstWriteRequestInFlight");
      function Wt(e) {
        e._closeRequest !== void 0 && (e._closeRequest._reject(e._storedError), e._closeRequest = void 0);
        const t2 = e._writer;
        t2 !== void 0 && jr(t2, e._storedError);
      }
      n$1(Wt, "WritableStreamRejectCloseAndClosedPromiseIfNeeded");
      function Or(e, t2) {
        const r2 = e._writer;
        r2 !== void 0 && t2 !== e._backpressure && (t2 ? sa(r2) : Dr(r2)), e._backpressure = t2;
      }
      n$1(Or, "WritableStreamUpdateBackpressure");
      const _de = class _de {
        constructor(t2) {
          if (le(t2, 1, "WritableStreamDefaultWriter"), Un(t2, "First parameter"), De(t2)) throw new TypeError("This stream has already been locked for exclusive writing by another writer");
          this._ownerWritableStream = t2, t2._writer = this;
          const r2 = t2._state;
          if (r2 === "writable") !oe(t2) && t2._backpressure ? Ft(this) : ro(this), It(this);
          else if (r2 === "erroring") Lr(this, t2._storedError), It(this);
          else if (r2 === "closed") ro(this), ia(this);
          else {
            const s = t2._storedError;
            Lr(this, s), eo(this, s);
          }
        }
        get closed() {
          return ke(this) ? this._closedPromise : b(qe("closed"));
        }
        get desiredSize() {
          if (!ke(this)) throw qe("desiredSize");
          if (this._ownerWritableStream === void 0) throw at("desiredSize");
          return Ji(this);
        }
        get ready() {
          return ke(this) ? this._readyPromise : b(qe("ready"));
        }
        abort(t2 = void 0) {
          return ke(this) ? this._ownerWritableStream === void 0 ? b(at("abort")) : Gi(this, t2) : b(qe("abort"));
        }
        close() {
          if (!ke(this)) return b(qe("close"));
          const t2 = this._ownerWritableStream;
          return t2 === void 0 ? b(at("close")) : oe(t2) ? b(new TypeError("Cannot close an already-closing stream")) : Vn(this);
        }
        releaseLock() {
          if (!ke(this)) throw qe("releaseLock");
          this._ownerWritableStream !== void 0 && Yn(this);
        }
        write(t2 = void 0) {
          return ke(this) ? this._ownerWritableStream === void 0 ? b(at("write to")) : Gn(this, t2) : b(qe("write"));
        }
      };
      n$1(_de, "WritableStreamDefaultWriter");
      let de = _de;
      Object.defineProperties(de.prototype, { abort: { enumerable: true }, close: { enumerable: true }, releaseLock: { enumerable: true }, write: { enumerable: true }, closed: { enumerable: true }, desiredSize: { enumerable: true }, ready: { enumerable: true } }), h2(de.prototype.abort, "abort"), h2(de.prototype.close, "close"), h2(de.prototype.releaseLock, "releaseLock"), h2(de.prototype.write, "write"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(de.prototype, Symbol.toStringTag, { value: "WritableStreamDefaultWriter", configurable: true });
      function ke(e) {
        return !u(e) || !Object.prototype.hasOwnProperty.call(e, "_ownerWritableStream") ? false : e instanceof de;
      }
      n$1(ke, "IsWritableStreamDefaultWriter");
      function Gi(e, t2) {
        const r2 = e._ownerWritableStream;
        return Bt(r2, t2);
      }
      n$1(Gi, "WritableStreamDefaultWriterAbort");
      function Vn(e) {
        const t2 = e._ownerWritableStream;
        return Hn(t2);
      }
      n$1(Vn, "WritableStreamDefaultWriterClose");
      function Zi(e) {
        const t2 = e._ownerWritableStream, r2 = t2._state;
        return oe(t2) || r2 === "closed" ? T2(void 0) : r2 === "errored" ? b(t2._storedError) : Vn(e);
      }
      n$1(Zi, "WritableStreamDefaultWriterCloseWithErrorPropagation");
      function Ki(e, t2) {
        e._closedPromiseState === "pending" ? jr(e, t2) : aa(e, t2);
      }
      n$1(Ki, "WritableStreamDefaultWriterEnsureClosedPromiseRejected");
      function Qn(e, t2) {
        e._readyPromiseState === "pending" ? no(e, t2) : ua(e, t2);
      }
      n$1(Qn, "WritableStreamDefaultWriterEnsureReadyPromiseRejected");
      function Ji(e) {
        const t2 = e._ownerWritableStream, r2 = t2._state;
        return r2 === "errored" || r2 === "erroring" ? null : r2 === "closed" ? 0 : Jn(t2._writableStreamController);
      }
      n$1(Ji, "WritableStreamDefaultWriterGetDesiredSize");
      function Yn(e) {
        const t2 = e._ownerWritableStream, r2 = new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");
        Qn(e, r2), Ki(e, r2), t2._writer = void 0, e._ownerWritableStream = void 0;
      }
      n$1(Yn, "WritableStreamDefaultWriterRelease");
      function Gn(e, t2) {
        const r2 = e._ownerWritableStream, s = r2._writableStreamController, f2 = ta(s, t2);
        if (r2 !== e._ownerWritableStream) return b(at("write to"));
        const c = r2._state;
        if (c === "errored") return b(r2._storedError);
        if (oe(r2) || c === "closed") return b(new TypeError("The stream is closing or closed and cannot be written to"));
        if (c === "erroring") return b(r2._storedError);
        const d = Mi(r2);
        return ra(s, t2, f2), d;
      }
      n$1(Gn, "WritableStreamDefaultWriterWrite");
      const Zn = {};
      const _$e = class _$e {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get abortReason() {
          if (!Ir(this)) throw zr("abortReason");
          return this._abortReason;
        }
        get signal() {
          if (!Ir(this)) throw zr("signal");
          if (this._abortController === void 0) throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");
          return this._abortController.signal;
        }
        error(t2 = void 0) {
          if (!Ir(this)) throw zr("error");
          this._controlledWritableStream._state === "writable" && Xn(this, t2);
        }
        [pt](t2) {
          const r2 = this._abortAlgorithm(t2);
          return kt(this), r2;
        }
        [an]() {
          Se(this);
        }
      };
      n$1(_$e, "WritableStreamDefaultController");
      let $e = _$e;
      Object.defineProperties($e.prototype, { abortReason: { enumerable: true }, signal: { enumerable: true }, error: { enumerable: true } }), typeof Symbol.toStringTag == "symbol" && Object.defineProperty($e.prototype, Symbol.toStringTag, { value: "WritableStreamDefaultController", configurable: true });
      function Ir(e) {
        return !u(e) || !Object.prototype.hasOwnProperty.call(e, "_controlledWritableStream") ? false : e instanceof $e;
      }
      n$1(Ir, "IsWritableStreamDefaultController");
      function Kn(e, t2, r2, s, f2, c, d, p) {
        t2._controlledWritableStream = e, e._writableStreamController = t2, t2._queue = void 0, t2._queueTotalSize = void 0, Se(t2), t2._abortReason = void 0, t2._abortController = Di(), t2._started = false, t2._strategySizeAlgorithm = p, t2._strategyHWM = d, t2._writeAlgorithm = s, t2._closeAlgorithm = f2, t2._abortAlgorithm = c;
        const R = Fr(t2);
        Or(e, R);
        const y = r2(), C = T2(y);
        g(C, () => (t2._started = true, qt(t2), null), (P) => (t2._started = true, Wr(e, P), null));
      }
      n$1(Kn, "SetUpWritableStreamDefaultController");
      function Xi(e, t2, r2, s) {
        const f2 = Object.create($e.prototype);
        let c, d, p, R;
        t2.start !== void 0 ? c = n$1(() => t2.start(f2), "startAlgorithm") : c = n$1(() => {
        }, "startAlgorithm"), t2.write !== void 0 ? d = n$1((y) => t2.write(y, f2), "writeAlgorithm") : d = n$1(() => T2(void 0), "writeAlgorithm"), t2.close !== void 0 ? p = n$1(() => t2.close(), "closeAlgorithm") : p = n$1(() => T2(void 0), "closeAlgorithm"), t2.abort !== void 0 ? R = n$1((y) => t2.abort(y), "abortAlgorithm") : R = n$1(() => T2(void 0), "abortAlgorithm"), Kn(e, f2, c, d, p, R, r2, s);
      }
      n$1(Xi, "SetUpWritableStreamDefaultControllerFromUnderlyingSink");
      function kt(e) {
        e._writeAlgorithm = void 0, e._closeAlgorithm = void 0, e._abortAlgorithm = void 0, e._strategySizeAlgorithm = void 0;
      }
      n$1(kt, "WritableStreamDefaultControllerClearAlgorithms");
      function ea(e) {
        Rr(e, Zn, 0), qt(e);
      }
      n$1(ea, "WritableStreamDefaultControllerClose");
      function ta(e, t2) {
        try {
          return e._strategySizeAlgorithm(t2);
        } catch (r2) {
          return it(e, r2), 1;
        }
      }
      n$1(ta, "WritableStreamDefaultControllerGetChunkSize");
      function Jn(e) {
        return e._strategyHWM - e._queueTotalSize;
      }
      n$1(Jn, "WritableStreamDefaultControllerGetDesiredSize");
      function ra(e, t2, r2) {
        try {
          Rr(e, t2, r2);
        } catch (f2) {
          it(e, f2);
          return;
        }
        const s = e._controlledWritableStream;
        if (!oe(s) && s._state === "writable") {
          const f2 = Fr(e);
          Or(s, f2);
        }
        qt(e);
      }
      n$1(ra, "WritableStreamDefaultControllerWrite");
      function qt(e) {
        const t2 = e._controlledWritableStream;
        if (!e._started || t2._inFlightWriteRequest !== void 0) return;
        if (t2._state === "erroring") {
          qr(t2);
          return;
        }
        if (e._queue.length === 0) return;
        const s = pi(e);
        s === Zn ? na(e) : oa(e, s);
      }
      n$1(qt, "WritableStreamDefaultControllerAdvanceQueueIfNeeded");
      function it(e, t2) {
        e._controlledWritableStream._state === "writable" && Xn(e, t2);
      }
      n$1(it, "WritableStreamDefaultControllerErrorIfNeeded");
      function na(e) {
        const t2 = e._controlledWritableStream;
        Qi(t2), wr(e);
        const r2 = e._closeAlgorithm();
        kt(e), g(r2, () => (Ni(t2), null), (s) => (Hi(t2, s), null));
      }
      n$1(na, "WritableStreamDefaultControllerProcessClose");
      function oa(e, t2) {
        const r2 = e._controlledWritableStream;
        Yi(r2);
        const s = e._writeAlgorithm(t2);
        g(s, () => {
          Ui(r2);
          const f2 = r2._state;
          if (wr(e), !oe(r2) && f2 === "writable") {
            const c = Fr(e);
            Or(r2, c);
          }
          return qt(e), null;
        }, (f2) => (r2._state === "writable" && kt(e), xi(r2, f2), null));
      }
      n$1(oa, "WritableStreamDefaultControllerProcessWrite");
      function Fr(e) {
        return Jn(e) <= 0;
      }
      n$1(Fr, "WritableStreamDefaultControllerGetBackpressure");
      function Xn(e, t2) {
        const r2 = e._controlledWritableStream;
        kt(e), kr(r2, t2);
      }
      n$1(Xn, "WritableStreamDefaultControllerError");
      function Ot(e) {
        return new TypeError(`WritableStream.prototype.${e} can only be used on a WritableStream`);
      }
      n$1(Ot, "streamBrandCheckException$2");
      function zr(e) {
        return new TypeError(`WritableStreamDefaultController.prototype.${e} can only be used on a WritableStreamDefaultController`);
      }
      n$1(zr, "defaultControllerBrandCheckException$2");
      function qe(e) {
        return new TypeError(`WritableStreamDefaultWriter.prototype.${e} can only be used on a WritableStreamDefaultWriter`);
      }
      n$1(qe, "defaultWriterBrandCheckException");
      function at(e) {
        return new TypeError("Cannot " + e + " a stream using a released writer");
      }
      n$1(at, "defaultWriterLockException");
      function It(e) {
        e._closedPromise = A((t2, r2) => {
          e._closedPromise_resolve = t2, e._closedPromise_reject = r2, e._closedPromiseState = "pending";
        });
      }
      n$1(It, "defaultWriterClosedPromiseInitialize");
      function eo(e, t2) {
        It(e), jr(e, t2);
      }
      n$1(eo, "defaultWriterClosedPromiseInitializeAsRejected");
      function ia(e) {
        It(e), to(e);
      }
      n$1(ia, "defaultWriterClosedPromiseInitializeAsResolved");
      function jr(e, t2) {
        e._closedPromise_reject !== void 0 && (Q(e._closedPromise), e._closedPromise_reject(t2), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0, e._closedPromiseState = "rejected");
      }
      n$1(jr, "defaultWriterClosedPromiseReject");
      function aa(e, t2) {
        eo(e, t2);
      }
      n$1(aa, "defaultWriterClosedPromiseResetToRejected");
      function to(e) {
        e._closedPromise_resolve !== void 0 && (e._closedPromise_resolve(void 0), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0, e._closedPromiseState = "resolved");
      }
      n$1(to, "defaultWriterClosedPromiseResolve");
      function Ft(e) {
        e._readyPromise = A((t2, r2) => {
          e._readyPromise_resolve = t2, e._readyPromise_reject = r2;
        }), e._readyPromiseState = "pending";
      }
      n$1(Ft, "defaultWriterReadyPromiseInitialize");
      function Lr(e, t2) {
        Ft(e), no(e, t2);
      }
      n$1(Lr, "defaultWriterReadyPromiseInitializeAsRejected");
      function ro(e) {
        Ft(e), Dr(e);
      }
      n$1(ro, "defaultWriterReadyPromiseInitializeAsResolved");
      function no(e, t2) {
        e._readyPromise_reject !== void 0 && (Q(e._readyPromise), e._readyPromise_reject(t2), e._readyPromise_resolve = void 0, e._readyPromise_reject = void 0, e._readyPromiseState = "rejected");
      }
      n$1(no, "defaultWriterReadyPromiseReject");
      function sa(e) {
        Ft(e);
      }
      n$1(sa, "defaultWriterReadyPromiseReset");
      function ua(e, t2) {
        Lr(e, t2);
      }
      n$1(ua, "defaultWriterReadyPromiseResetToRejected");
      function Dr(e) {
        e._readyPromise_resolve !== void 0 && (e._readyPromise_resolve(void 0), e._readyPromise_resolve = void 0, e._readyPromise_reject = void 0, e._readyPromiseState = "fulfilled");
      }
      n$1(Dr, "defaultWriterReadyPromiseResolve");
      function la() {
        if (typeof globalThis < "u") return globalThis;
        if (typeof self < "u") return self;
        if (typeof n$2 < "u") return n$2;
      }
      n$1(la, "getGlobals");
      const $r = la();
      function fa(e) {
        if (!(typeof e == "function" || typeof e == "object") || e.name !== "DOMException") return false;
        try {
          return new e(), true;
        } catch {
          return false;
        }
      }
      n$1(fa, "isDOMExceptionConstructor");
      function ca() {
        const e = $r == null ? void 0 : $r.DOMException;
        return fa(e) ? e : void 0;
      }
      n$1(ca, "getFromGlobal");
      function da() {
        const e = n$1(function(r2, s) {
          this.message = r2 || "", this.name = s || "Error", Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
        }, "DOMException");
        return h2(e, "DOMException"), e.prototype = Object.create(Error.prototype), Object.defineProperty(e.prototype, "constructor", { value: e, writable: true, configurable: true }), e;
      }
      n$1(da, "createPolyfill");
      const ha = ca() || da();
      function oo(e, t2, r2, s, f2, c) {
        const d = ze(e), p = xn(t2);
        e._disturbed = true;
        let R = false, y = T2(void 0);
        return A((C, P) => {
          let B;
          if (c !== void 0) {
            if (B = n$1(() => {
              const _ = c.reason !== void 0 ? c.reason : new ha("Aborted", "AbortError"), v = [];
              s || v.push(() => t2._state === "writable" ? Bt(t2, _) : T2(void 0)), f2 || v.push(() => e._state === "readable" ? X(e, _) : T2(void 0)), x(() => Promise.all(v.map((W2) => W2())), true, _);
            }, "abortAlgorithm"), c.aborted) {
              B();
              return;
            }
            c.addEventListener("abort", B);
          }
          function ee() {
            return A((_, v) => {
              function W2(Y) {
                Y ? _() : q(Ne(), W2, v);
              }
              n$1(W2, "next"), W2(false);
            });
          }
          n$1(ee, "pipeLoop");
          function Ne() {
            return R ? T2(true) : q(p._readyPromise, () => A((_, v) => {
              et(d, { _chunkSteps: n$1((W2) => {
                y = q(Gn(p, W2), void 0, l), _(false);
              }, "_chunkSteps"), _closeSteps: n$1(() => _(true), "_closeSteps"), _errorSteps: v });
            }));
          }
          if (n$1(Ne, "pipeStep"), me(e, d._closedPromise, (_) => (s ? K2(true, _) : x(() => Bt(t2, _), true, _), null)), me(t2, p._closedPromise, (_) => (f2 ? K2(true, _) : x(() => X(e, _), true, _), null)), U(e, d._closedPromise, () => (r2 ? K2() : x(() => Zi(p)), null)), oe(t2) || t2._state === "closed") {
            const _ = new TypeError("the destination writable stream closed before all data could be piped to it");
            f2 ? K2(true, _) : x(() => X(e, _), true, _);
          }
          Q(ee());
          function Ee() {
            const _ = y;
            return q(y, () => _ !== y ? Ee() : void 0);
          }
          n$1(Ee, "waitForWritesToFinish");
          function me(_, v, W2) {
            _._state === "errored" ? W2(_._storedError) : I(v, W2);
          }
          n$1(me, "isOrBecomesErrored");
          function U(_, v, W2) {
            _._state === "closed" ? W2() : V(v, W2);
          }
          n$1(U, "isOrBecomesClosed");
          function x(_, v, W2) {
            if (R) return;
            R = true, t2._state === "writable" && !oe(t2) ? V(Ee(), Y) : Y();
            function Y() {
              return g(_(), () => be(v, W2), (He) => be(true, He)), null;
            }
            n$1(Y, "doTheRest");
          }
          n$1(x, "shutdownWithAction");
          function K2(_, v) {
            R || (R = true, t2._state === "writable" && !oe(t2) ? V(Ee(), () => be(_, v)) : be(_, v));
          }
          n$1(K2, "shutdown");
          function be(_, v) {
            return Yn(p), ue(d), c !== void 0 && c.removeEventListener("abort", B), _ ? P(v) : C(void 0), null;
          }
          n$1(be, "finalize");
        });
      }
      n$1(oo, "ReadableStreamPipeTo");
      const _he = class _he {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get desiredSize() {
          if (!zt(this)) throw Lt("desiredSize");
          return Mr(this);
        }
        close() {
          if (!zt(this)) throw Lt("close");
          if (!Ue(this)) throw new TypeError("The stream is not in a state that permits close");
          Oe(this);
        }
        enqueue(t2 = void 0) {
          if (!zt(this)) throw Lt("enqueue");
          if (!Ue(this)) throw new TypeError("The stream is not in a state that permits enqueue");
          return Me(this, t2);
        }
        error(t2 = void 0) {
          if (!zt(this)) throw Lt("error");
          J(this, t2);
        }
        [ar](t2) {
          Se(this);
          const r2 = this._cancelAlgorithm(t2);
          return jt(this), r2;
        }
        [sr](t2) {
          const r2 = this._controlledReadableStream;
          if (this._queue.length > 0) {
            const s = wr(this);
            this._closeRequested && this._queue.length === 0 ? (jt(this), lt(r2)) : st(this), t2._chunkSteps(s);
          } else hn(r2, t2), st(this);
        }
        [ur]() {
        }
      };
      n$1(_he, "ReadableStreamDefaultController");
      let he = _he;
      Object.defineProperties(he.prototype, { close: { enumerable: true }, enqueue: { enumerable: true }, error: { enumerable: true }, desiredSize: { enumerable: true } }), h2(he.prototype.close, "close"), h2(he.prototype.enqueue, "enqueue"), h2(he.prototype.error, "error"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(he.prototype, Symbol.toStringTag, { value: "ReadableStreamDefaultController", configurable: true });
      function zt(e) {
        return !u(e) || !Object.prototype.hasOwnProperty.call(e, "_controlledReadableStream") ? false : e instanceof he;
      }
      n$1(zt, "IsReadableStreamDefaultController");
      function st(e) {
        if (!io(e)) return;
        if (e._pulling) {
          e._pullAgain = true;
          return;
        }
        e._pulling = true;
        const r2 = e._pullAlgorithm();
        g(r2, () => (e._pulling = false, e._pullAgain && (e._pullAgain = false, st(e)), null), (s) => (J(e, s), null));
      }
      n$1(st, "ReadableStreamDefaultControllerCallPullIfNeeded");
      function io(e) {
        const t2 = e._controlledReadableStream;
        return !Ue(e) || !e._started ? false : !!(Ce(t2) && gt(t2) > 0 || Mr(e) > 0);
      }
      n$1(io, "ReadableStreamDefaultControllerShouldCallPull");
      function jt(e) {
        e._pullAlgorithm = void 0, e._cancelAlgorithm = void 0, e._strategySizeAlgorithm = void 0;
      }
      n$1(jt, "ReadableStreamDefaultControllerClearAlgorithms");
      function Oe(e) {
        if (!Ue(e)) return;
        const t2 = e._controlledReadableStream;
        e._closeRequested = true, e._queue.length === 0 && (jt(e), lt(t2));
      }
      n$1(Oe, "ReadableStreamDefaultControllerClose");
      function Me(e, t2) {
        if (!Ue(e)) return;
        const r2 = e._controlledReadableStream;
        if (Ce(r2) && gt(r2) > 0) pr(r2, t2, false);
        else {
          let s;
          try {
            s = e._strategySizeAlgorithm(t2);
          } catch (f2) {
            throw J(e, f2), f2;
          }
          try {
            Rr(e, t2, s);
          } catch (f2) {
            throw J(e, f2), f2;
          }
        }
        st(e);
      }
      n$1(Me, "ReadableStreamDefaultControllerEnqueue");
      function J(e, t2) {
        const r2 = e._controlledReadableStream;
        r2._state === "readable" && (Se(e), jt(e), lo(r2, t2));
      }
      n$1(J, "ReadableStreamDefaultControllerError");
      function Mr(e) {
        const t2 = e._controlledReadableStream._state;
        return t2 === "errored" ? null : t2 === "closed" ? 0 : e._strategyHWM - e._queueTotalSize;
      }
      n$1(Mr, "ReadableStreamDefaultControllerGetDesiredSize");
      function ma(e) {
        return !io(e);
      }
      n$1(ma, "ReadableStreamDefaultControllerHasBackpressure");
      function Ue(e) {
        const t2 = e._controlledReadableStream._state;
        return !e._closeRequested && t2 === "readable";
      }
      n$1(Ue, "ReadableStreamDefaultControllerCanCloseOrEnqueue");
      function ao(e, t2, r2, s, f2, c, d) {
        t2._controlledReadableStream = e, t2._queue = void 0, t2._queueTotalSize = void 0, Se(t2), t2._started = false, t2._closeRequested = false, t2._pullAgain = false, t2._pulling = false, t2._strategySizeAlgorithm = d, t2._strategyHWM = c, t2._pullAlgorithm = s, t2._cancelAlgorithm = f2, e._readableStreamController = t2;
        const p = r2();
        g(T2(p), () => (t2._started = true, st(t2), null), (R) => (J(t2, R), null));
      }
      n$1(ao, "SetUpReadableStreamDefaultController");
      function ba(e, t2, r2, s) {
        const f2 = Object.create(he.prototype);
        let c, d, p;
        t2.start !== void 0 ? c = n$1(() => t2.start(f2), "startAlgorithm") : c = n$1(() => {
        }, "startAlgorithm"), t2.pull !== void 0 ? d = n$1(() => t2.pull(f2), "pullAlgorithm") : d = n$1(() => T2(void 0), "pullAlgorithm"), t2.cancel !== void 0 ? p = n$1((R) => t2.cancel(R), "cancelAlgorithm") : p = n$1(() => T2(void 0), "cancelAlgorithm"), ao(e, f2, c, d, p, r2, s);
      }
      n$1(ba, "SetUpReadableStreamDefaultControllerFromUnderlyingSource");
      function Lt(e) {
        return new TypeError(`ReadableStreamDefaultController.prototype.${e} can only be used on a ReadableStreamDefaultController`);
      }
      n$1(Lt, "defaultControllerBrandCheckException$1");
      function pa(e, t2) {
        return Ae(e._readableStreamController) ? ga(e) : ya(e);
      }
      n$1(pa, "ReadableStreamTee");
      function ya(e, t2) {
        const r2 = ze(e);
        let s = false, f2 = false, c = false, d = false, p, R, y, C, P;
        const B = A((U) => {
          P = U;
        });
        function ee() {
          return s ? (f2 = true, T2(void 0)) : (s = true, et(r2, { _chunkSteps: n$1((x) => {
            se(() => {
              f2 = false;
              const K2 = x, be = x;
              c || Me(y._readableStreamController, K2), d || Me(C._readableStreamController, be), s = false, f2 && ee();
            });
          }, "_chunkSteps"), _closeSteps: n$1(() => {
            s = false, c || Oe(y._readableStreamController), d || Oe(C._readableStreamController), (!c || !d) && P(void 0);
          }, "_closeSteps"), _errorSteps: n$1(() => {
            s = false;
          }, "_errorSteps") }), T2(void 0));
        }
        n$1(ee, "pullAlgorithm");
        function Ne(U) {
          if (c = true, p = U, d) {
            const x = tt([p, R]), K2 = X(e, x);
            P(K2);
          }
          return B;
        }
        n$1(Ne, "cancel1Algorithm");
        function Ee(U) {
          if (d = true, R = U, c) {
            const x = tt([p, R]), K2 = X(e, x);
            P(K2);
          }
          return B;
        }
        n$1(Ee, "cancel2Algorithm");
        function me() {
        }
        return n$1(me, "startAlgorithm"), y = ut(me, ee, Ne), C = ut(me, ee, Ee), I(r2._closedPromise, (U) => (J(y._readableStreamController, U), J(C._readableStreamController, U), (!c || !d) && P(void 0), null)), [y, C];
      }
      n$1(ya, "ReadableStreamDefaultTee");
      function ga(e) {
        let t2 = ze(e), r2 = false, s = false, f2 = false, c = false, d = false, p, R, y, C, P;
        const B = A((_) => {
          P = _;
        });
        function ee(_) {
          I(_._closedPromise, (v) => (_ !== t2 || (Z(y._readableStreamController, v), Z(C._readableStreamController, v), (!c || !d) && P(void 0)), null));
        }
        n$1(ee, "forwardReaderError");
        function Ne() {
          We(t2) && (ue(t2), t2 = ze(e), ee(t2)), et(t2, { _chunkSteps: n$1((v) => {
            se(() => {
              s = false, f2 = false;
              const W2 = v;
              let Y = v;
              if (!c && !d) try {
                Y = Cn(v);
              } catch (He) {
                Z(y._readableStreamController, He), Z(C._readableStreamController, He), P(X(e, He));
                return;
              }
              c || Tt(y._readableStreamController, W2), d || Tt(C._readableStreamController, Y), r2 = false, s ? me() : f2 && U();
            });
          }, "_chunkSteps"), _closeSteps: n$1(() => {
            r2 = false, c || rt(y._readableStreamController), d || rt(C._readableStreamController), y._readableStreamController._pendingPullIntos.length > 0 && Ct(y._readableStreamController, 0), C._readableStreamController._pendingPullIntos.length > 0 && Ct(C._readableStreamController, 0), (!c || !d) && P(void 0);
          }, "_closeSteps"), _errorSteps: n$1(() => {
            r2 = false;
          }, "_errorSteps") });
        }
        n$1(Ne, "pullWithDefaultReader");
        function Ee(_, v) {
          ge(t2) && (ue(t2), t2 = jn(e), ee(t2));
          const W2 = v ? C : y, Y = v ? y : C;
          $n(t2, _, 1, { _chunkSteps: n$1((Ve) => {
            se(() => {
              s = false, f2 = false;
              const Qe = v ? d : c;
              if (v ? c : d) Qe || Pt(W2._readableStreamController, Ve);
              else {
                let To;
                try {
                  To = Cn(Ve);
                } catch (Vr) {
                  Z(W2._readableStreamController, Vr), Z(Y._readableStreamController, Vr), P(X(e, Vr));
                  return;
                }
                Qe || Pt(W2._readableStreamController, Ve), Tt(Y._readableStreamController, To);
              }
              r2 = false, s ? me() : f2 && U();
            });
          }, "_chunkSteps"), _closeSteps: n$1((Ve) => {
            r2 = false;
            const Qe = v ? d : c, Vt = v ? c : d;
            Qe || rt(W2._readableStreamController), Vt || rt(Y._readableStreamController), Ve !== void 0 && (Qe || Pt(W2._readableStreamController, Ve), !Vt && Y._readableStreamController._pendingPullIntos.length > 0 && Ct(Y._readableStreamController, 0)), (!Qe || !Vt) && P(void 0);
          }, "_closeSteps"), _errorSteps: n$1(() => {
            r2 = false;
          }, "_errorSteps") });
        }
        n$1(Ee, "pullWithBYOBReader");
        function me() {
          if (r2) return s = true, T2(void 0);
          r2 = true;
          const _ = vr(y._readableStreamController);
          return _ === null ? Ne() : Ee(_._view, false), T2(void 0);
        }
        n$1(me, "pull1Algorithm");
        function U() {
          if (r2) return f2 = true, T2(void 0);
          r2 = true;
          const _ = vr(C._readableStreamController);
          return _ === null ? Ne() : Ee(_._view, true), T2(void 0);
        }
        n$1(U, "pull2Algorithm");
        function x(_) {
          if (c = true, p = _, d) {
            const v = tt([p, R]), W2 = X(e, v);
            P(W2);
          }
          return B;
        }
        n$1(x, "cancel1Algorithm");
        function K2(_) {
          if (d = true, R = _, c) {
            const v = tt([p, R]), W2 = X(e, v);
            P(W2);
          }
          return B;
        }
        n$1(K2, "cancel2Algorithm");
        function be() {
        }
        return n$1(be, "startAlgorithm"), y = uo(be, me, x), C = uo(be, U, K2), ee(t2), [y, C];
      }
      n$1(ga, "ReadableByteStreamTee");
      function _a2(e) {
        return u(e) && typeof e.getReader < "u";
      }
      n$1(_a2, "isReadableStreamLike");
      function Sa(e) {
        return _a2(e) ? Ra(e.getReader()) : wa(e);
      }
      n$1(Sa, "ReadableStreamFrom");
      function wa(e) {
        let t2;
        const r2 = Tn(e, "async"), s = l;
        function f2() {
          let d;
          try {
            d = di(r2);
          } catch (R) {
            return b(R);
          }
          const p = T2(d);
          return F(p, (R) => {
            if (!u(R)) throw new TypeError("The promise returned by the iterator.next() method must fulfill with an object");
            if (hi(R)) Oe(t2._readableStreamController);
            else {
              const C = mi(R);
              Me(t2._readableStreamController, C);
            }
          });
        }
        n$1(f2, "pullAlgorithm");
        function c(d) {
          const p = r2.iterator;
          let R;
          try {
            R = St(p, "return");
          } catch (P) {
            return b(P);
          }
          if (R === void 0) return T2(void 0);
          let y;
          try {
            y = O(R, p, [d]);
          } catch (P) {
            return b(P);
          }
          const C = T2(y);
          return F(C, (P) => {
            if (!u(P)) throw new TypeError("The promise returned by the iterator.return() method must fulfill with an object");
          });
        }
        return n$1(c, "cancelAlgorithm"), t2 = ut(s, f2, c, 0), t2;
      }
      n$1(wa, "ReadableStreamFromIterable");
      function Ra(e) {
        let t2;
        const r2 = l;
        function s() {
          let c;
          try {
            c = e.read();
          } catch (d) {
            return b(d);
          }
          return F(c, (d) => {
            if (!u(d)) throw new TypeError("The promise returned by the reader.read() method must fulfill with an object");
            if (d.done) Oe(t2._readableStreamController);
            else {
              const p = d.value;
              Me(t2._readableStreamController, p);
            }
          });
        }
        n$1(s, "pullAlgorithm");
        function f2(c) {
          try {
            return T2(e.cancel(c));
          } catch (d) {
            return b(d);
          }
        }
        return n$1(f2, "cancelAlgorithm"), t2 = ut(r2, s, f2, 0), t2;
      }
      n$1(Ra, "ReadableStreamFromDefaultReader");
      function Ta(e, t2) {
        ne(e, t2);
        const r2 = e, s = r2 == null ? void 0 : r2.autoAllocateChunkSize, f2 = r2 == null ? void 0 : r2.cancel, c = r2 == null ? void 0 : r2.pull, d = r2 == null ? void 0 : r2.start, p = r2 == null ? void 0 : r2.type;
        return { autoAllocateChunkSize: s === void 0 ? void 0 : mr(s, `${t2} has member 'autoAllocateChunkSize' that`), cancel: f2 === void 0 ? void 0 : Ca(f2, r2, `${t2} has member 'cancel' that`), pull: c === void 0 ? void 0 : Pa(c, r2, `${t2} has member 'pull' that`), start: d === void 0 ? void 0 : Ea(d, r2, `${t2} has member 'start' that`), type: p === void 0 ? void 0 : va(p, `${t2} has member 'type' that`) };
      }
      n$1(Ta, "convertUnderlyingDefaultOrByteSource");
      function Ca(e, t2, r2) {
        return G(e, r2), (s) => z(e, t2, [s]);
      }
      n$1(Ca, "convertUnderlyingSourceCancelCallback");
      function Pa(e, t2, r2) {
        return G(e, r2), (s) => z(e, t2, [s]);
      }
      n$1(Pa, "convertUnderlyingSourcePullCallback");
      function Ea(e, t2, r2) {
        return G(e, r2), (s) => O(e, t2, [s]);
      }
      n$1(Ea, "convertUnderlyingSourceStartCallback");
      function va(e, t2) {
        if (e = `${e}`, e !== "bytes") throw new TypeError(`${t2} '${e}' is not a valid enumeration value for ReadableStreamType`);
        return e;
      }
      n$1(va, "convertReadableStreamType");
      function Aa(e, t2) {
        return ne(e, t2), { preventCancel: !!(e == null ? void 0 : e.preventCancel) };
      }
      n$1(Aa, "convertIteratorOptions");
      function so(e, t2) {
        ne(e, t2);
        const r2 = e == null ? void 0 : e.preventAbort, s = e == null ? void 0 : e.preventCancel, f2 = e == null ? void 0 : e.preventClose, c = e == null ? void 0 : e.signal;
        return c !== void 0 && Ba(c, `${t2} has member 'signal' that`), { preventAbort: !!r2, preventCancel: !!s, preventClose: !!f2, signal: c };
      }
      n$1(so, "convertPipeOptions");
      function Ba(e, t2) {
        if (!ji(e)) throw new TypeError(`${t2} is not an AbortSignal.`);
      }
      n$1(Ba, "assertAbortSignal");
      function Wa(e, t2) {
        ne(e, t2);
        const r2 = e == null ? void 0 : e.readable;
        dr(r2, "readable", "ReadableWritablePair"), br(r2, `${t2} has member 'readable' that`);
        const s = e == null ? void 0 : e.writable;
        return dr(s, "writable", "ReadableWritablePair"), Un(s, `${t2} has member 'writable' that`), { readable: r2, writable: s };
      }
      n$1(Wa, "convertReadableWritablePair");
      const _L = class _L {
        constructor(t2 = {}, r2 = {}) {
          t2 === void 0 ? t2 = null : cn(t2, "First parameter");
          const s = At(r2, "Second parameter"), f2 = Ta(t2, "First parameter");
          if (Ur(this), f2.type === "bytes") {
            if (s.size !== void 0) throw new RangeError("The strategy for a byte stream cannot have a size function");
            const c = ot(s, 0);
            Ci(this, f2, c);
          } else {
            const c = vt(s), d = ot(s, 1);
            ba(this, f2, d, c);
          }
        }
        get locked() {
          if (!Te(this)) throw Ie("locked");
          return Ce(this);
        }
        cancel(t2 = void 0) {
          return Te(this) ? Ce(this) ? b(new TypeError("Cannot cancel a stream that already has a reader")) : X(this, t2) : b(Ie("cancel"));
        }
        getReader(t2 = void 0) {
          if (!Te(this)) throw Ie("getReader");
          return Ei(t2, "First parameter").mode === void 0 ? ze(this) : jn(this);
        }
        pipeThrough(t2, r2 = {}) {
          if (!Te(this)) throw Ie("pipeThrough");
          le(t2, 1, "pipeThrough");
          const s = Wa(t2, "First parameter"), f2 = so(r2, "Second parameter");
          if (Ce(this)) throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");
          if (De(s.writable)) throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");
          const c = oo(this, s.writable, f2.preventClose, f2.preventAbort, f2.preventCancel, f2.signal);
          return Q(c), s.readable;
        }
        pipeTo(t2, r2 = {}) {
          if (!Te(this)) return b(Ie("pipeTo"));
          if (t2 === void 0) return b("Parameter 1 is required in 'pipeTo'.");
          if (!Le(t2)) return b(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));
          let s;
          try {
            s = so(r2, "Second parameter");
          } catch (f2) {
            return b(f2);
          }
          return Ce(this) ? b(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream")) : De(t2) ? b(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream")) : oo(this, t2, s.preventClose, s.preventAbort, s.preventCancel, s.signal);
        }
        tee() {
          if (!Te(this)) throw Ie("tee");
          const t2 = pa(this);
          return tt(t2);
        }
        values(t2 = void 0) {
          if (!Te(this)) throw Ie("values");
          const r2 = Aa(t2, "First parameter");
          return fi(this, r2.preventCancel);
        }
        [Sr](t2) {
          return this.values(t2);
        }
        static from(t2) {
          return Sa(t2);
        }
      };
      n$1(_L, "ReadableStream");
      let L = _L;
      Object.defineProperties(L, { from: { enumerable: true } }), Object.defineProperties(L.prototype, { cancel: { enumerable: true }, getReader: { enumerable: true }, pipeThrough: { enumerable: true }, pipeTo: { enumerable: true }, tee: { enumerable: true }, values: { enumerable: true }, locked: { enumerable: true } }), h2(L.from, "from"), h2(L.prototype.cancel, "cancel"), h2(L.prototype.getReader, "getReader"), h2(L.prototype.pipeThrough, "pipeThrough"), h2(L.prototype.pipeTo, "pipeTo"), h2(L.prototype.tee, "tee"), h2(L.prototype.values, "values"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(L.prototype, Symbol.toStringTag, { value: "ReadableStream", configurable: true }), Object.defineProperty(L.prototype, Sr, { value: L.prototype.values, writable: true, configurable: true });
      function ut(e, t2, r2, s = 1, f2 = () => 1) {
        const c = Object.create(L.prototype);
        Ur(c);
        const d = Object.create(he.prototype);
        return ao(c, d, e, t2, r2, s, f2), c;
      }
      n$1(ut, "CreateReadableStream");
      function uo(e, t2, r2) {
        const s = Object.create(L.prototype);
        Ur(s);
        const f2 = Object.create(ce.prototype);
        return zn(s, f2, e, t2, r2, 0, void 0), s;
      }
      n$1(uo, "CreateReadableByteStream");
      function Ur(e) {
        e._state = "readable", e._reader = void 0, e._storedError = void 0, e._disturbed = false;
      }
      n$1(Ur, "InitializeReadableStream");
      function Te(e) {
        return !u(e) || !Object.prototype.hasOwnProperty.call(e, "_readableStreamController") ? false : e instanceof L;
      }
      n$1(Te, "IsReadableStream");
      function Ce(e) {
        return e._reader !== void 0;
      }
      n$1(Ce, "IsReadableStreamLocked");
      function X(e, t2) {
        if (e._disturbed = true, e._state === "closed") return T2(void 0);
        if (e._state === "errored") return b(e._storedError);
        lt(e);
        const r2 = e._reader;
        if (r2 !== void 0 && We(r2)) {
          const f2 = r2._readIntoRequests;
          r2._readIntoRequests = new M(), f2.forEach((c) => {
            c._closeSteps(void 0);
          });
        }
        const s = e._readableStreamController[ar](t2);
        return F(s, l);
      }
      n$1(X, "ReadableStreamCancel");
      function lt(e) {
        e._state = "closed";
        const t2 = e._reader;
        if (t2 !== void 0 && (ln(t2), ge(t2))) {
          const r2 = t2._readRequests;
          t2._readRequests = new M(), r2.forEach((s) => {
            s._closeSteps();
          });
        }
      }
      n$1(lt, "ReadableStreamClose");
      function lo(e, t2) {
        e._state = "errored", e._storedError = t2;
        const r2 = e._reader;
        r2 !== void 0 && (cr(r2, t2), ge(r2) ? bn(r2, t2) : Mn(r2, t2));
      }
      n$1(lo, "ReadableStreamError");
      function Ie(e) {
        return new TypeError(`ReadableStream.prototype.${e} can only be used on a ReadableStream`);
      }
      n$1(Ie, "streamBrandCheckException$1");
      function fo(e, t2) {
        ne(e, t2);
        const r2 = e == null ? void 0 : e.highWaterMark;
        return dr(r2, "highWaterMark", "QueuingStrategyInit"), { highWaterMark: hr(r2) };
      }
      n$1(fo, "convertQueuingStrategyInit");
      const co = n$1((e) => e.byteLength, "byteLengthSizeFunction");
      h2(co, "size");
      const _Dt = class _Dt {
        constructor(t2) {
          le(t2, 1, "ByteLengthQueuingStrategy"), t2 = fo(t2, "First parameter"), this._byteLengthQueuingStrategyHighWaterMark = t2.highWaterMark;
        }
        get highWaterMark() {
          if (!mo(this)) throw ho("highWaterMark");
          return this._byteLengthQueuingStrategyHighWaterMark;
        }
        get size() {
          if (!mo(this)) throw ho("size");
          return co;
        }
      };
      n$1(_Dt, "ByteLengthQueuingStrategy");
      let Dt = _Dt;
      Object.defineProperties(Dt.prototype, { highWaterMark: { enumerable: true }, size: { enumerable: true } }), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(Dt.prototype, Symbol.toStringTag, { value: "ByteLengthQueuingStrategy", configurable: true });
      function ho(e) {
        return new TypeError(`ByteLengthQueuingStrategy.prototype.${e} can only be used on a ByteLengthQueuingStrategy`);
      }
      n$1(ho, "byteLengthBrandCheckException");
      function mo(e) {
        return !u(e) || !Object.prototype.hasOwnProperty.call(e, "_byteLengthQueuingStrategyHighWaterMark") ? false : e instanceof Dt;
      }
      n$1(mo, "IsByteLengthQueuingStrategy");
      const bo = n$1(() => 1, "countSizeFunction");
      h2(bo, "size");
      const _$t = class _$t {
        constructor(t2) {
          le(t2, 1, "CountQueuingStrategy"), t2 = fo(t2, "First parameter"), this._countQueuingStrategyHighWaterMark = t2.highWaterMark;
        }
        get highWaterMark() {
          if (!yo(this)) throw po("highWaterMark");
          return this._countQueuingStrategyHighWaterMark;
        }
        get size() {
          if (!yo(this)) throw po("size");
          return bo;
        }
      };
      n$1(_$t, "CountQueuingStrategy");
      let $t = _$t;
      Object.defineProperties($t.prototype, { highWaterMark: { enumerable: true }, size: { enumerable: true } }), typeof Symbol.toStringTag == "symbol" && Object.defineProperty($t.prototype, Symbol.toStringTag, { value: "CountQueuingStrategy", configurable: true });
      function po(e) {
        return new TypeError(`CountQueuingStrategy.prototype.${e} can only be used on a CountQueuingStrategy`);
      }
      n$1(po, "countBrandCheckException");
      function yo(e) {
        return !u(e) || !Object.prototype.hasOwnProperty.call(e, "_countQueuingStrategyHighWaterMark") ? false : e instanceof $t;
      }
      n$1(yo, "IsCountQueuingStrategy");
      function ka(e, t2) {
        ne(e, t2);
        const r2 = e == null ? void 0 : e.cancel, s = e == null ? void 0 : e.flush, f2 = e == null ? void 0 : e.readableType, c = e == null ? void 0 : e.start, d = e == null ? void 0 : e.transform, p = e == null ? void 0 : e.writableType;
        return { cancel: r2 === void 0 ? void 0 : Fa(r2, e, `${t2} has member 'cancel' that`), flush: s === void 0 ? void 0 : qa(s, e, `${t2} has member 'flush' that`), readableType: f2, start: c === void 0 ? void 0 : Oa(c, e, `${t2} has member 'start' that`), transform: d === void 0 ? void 0 : Ia(d, e, `${t2} has member 'transform' that`), writableType: p };
      }
      n$1(ka, "convertTransformer");
      function qa(e, t2, r2) {
        return G(e, r2), (s) => z(e, t2, [s]);
      }
      n$1(qa, "convertTransformerFlushCallback");
      function Oa(e, t2, r2) {
        return G(e, r2), (s) => O(e, t2, [s]);
      }
      n$1(Oa, "convertTransformerStartCallback");
      function Ia(e, t2, r2) {
        return G(e, r2), (s, f2) => z(e, t2, [s, f2]);
      }
      n$1(Ia, "convertTransformerTransformCallback");
      function Fa(e, t2, r2) {
        return G(e, r2), (s) => z(e, t2, [s]);
      }
      n$1(Fa, "convertTransformerCancelCallback");
      const _Mt = class _Mt {
        constructor(t2 = {}, r2 = {}, s = {}) {
          t2 === void 0 && (t2 = null);
          const f2 = At(r2, "Second parameter"), c = At(s, "Third parameter"), d = ka(t2, "First parameter");
          if (d.readableType !== void 0) throw new RangeError("Invalid readableType specified");
          if (d.writableType !== void 0) throw new RangeError("Invalid writableType specified");
          const p = ot(c, 0), R = vt(c), y = ot(f2, 1), C = vt(f2);
          let P;
          const B = A((ee) => {
            P = ee;
          });
          za(this, B, y, C, p, R), La(this, d), d.start !== void 0 ? P(d.start(this._transformStreamController)) : P(void 0);
        }
        get readable() {
          if (!go(this)) throw Ro("readable");
          return this._readable;
        }
        get writable() {
          if (!go(this)) throw Ro("writable");
          return this._writable;
        }
      };
      n$1(_Mt, "TransformStream");
      let Mt = _Mt;
      Object.defineProperties(Mt.prototype, { readable: { enumerable: true }, writable: { enumerable: true } }), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(Mt.prototype, Symbol.toStringTag, { value: "TransformStream", configurable: true });
      function za(e, t2, r2, s, f2, c) {
        function d() {
          return t2;
        }
        n$1(d, "startAlgorithm");
        function p(B) {
          return Ma(e, B);
        }
        n$1(p, "writeAlgorithm");
        function R(B) {
          return Ua(e, B);
        }
        n$1(R, "abortAlgorithm");
        function y() {
          return xa(e);
        }
        n$1(y, "closeAlgorithm"), e._writable = $i(d, p, y, R, r2, s);
        function C() {
          return Na(e);
        }
        n$1(C, "pullAlgorithm");
        function P(B) {
          return Ha(e, B);
        }
        n$1(P, "cancelAlgorithm"), e._readable = ut(d, C, P, f2, c), e._backpressure = void 0, e._backpressureChangePromise = void 0, e._backpressureChangePromise_resolve = void 0, Ut(e, true), e._transformStreamController = void 0;
      }
      n$1(za, "InitializeTransformStream");
      function go(e) {
        return !u(e) || !Object.prototype.hasOwnProperty.call(e, "_transformStreamController") ? false : e instanceof Mt;
      }
      n$1(go, "IsTransformStream");
      function _o(e, t2) {
        J(e._readable._readableStreamController, t2), xr(e, t2);
      }
      n$1(_o, "TransformStreamError");
      function xr(e, t2) {
        Nt(e._transformStreamController), it(e._writable._writableStreamController, t2), Nr(e);
      }
      n$1(xr, "TransformStreamErrorWritableAndUnblockWrite");
      function Nr(e) {
        e._backpressure && Ut(e, false);
      }
      n$1(Nr, "TransformStreamUnblockWrite");
      function Ut(e, t2) {
        e._backpressureChangePromise !== void 0 && e._backpressureChangePromise_resolve(), e._backpressureChangePromise = A((r2) => {
          e._backpressureChangePromise_resolve = r2;
        }), e._backpressure = t2;
      }
      n$1(Ut, "TransformStreamSetBackpressure");
      const _Pe = class _Pe {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get desiredSize() {
          if (!xt(this)) throw Ht("desiredSize");
          const t2 = this._controlledTransformStream._readable._readableStreamController;
          return Mr(t2);
        }
        enqueue(t2 = void 0) {
          if (!xt(this)) throw Ht("enqueue");
          So(this, t2);
        }
        error(t2 = void 0) {
          if (!xt(this)) throw Ht("error");
          Da(this, t2);
        }
        terminate() {
          if (!xt(this)) throw Ht("terminate");
          $a(this);
        }
      };
      n$1(_Pe, "TransformStreamDefaultController");
      let Pe = _Pe;
      Object.defineProperties(Pe.prototype, { enqueue: { enumerable: true }, error: { enumerable: true }, terminate: { enumerable: true }, desiredSize: { enumerable: true } }), h2(Pe.prototype.enqueue, "enqueue"), h2(Pe.prototype.error, "error"), h2(Pe.prototype.terminate, "terminate"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(Pe.prototype, Symbol.toStringTag, { value: "TransformStreamDefaultController", configurable: true });
      function xt(e) {
        return !u(e) || !Object.prototype.hasOwnProperty.call(e, "_controlledTransformStream") ? false : e instanceof Pe;
      }
      n$1(xt, "IsTransformStreamDefaultController");
      function ja(e, t2, r2, s, f2) {
        t2._controlledTransformStream = e, e._transformStreamController = t2, t2._transformAlgorithm = r2, t2._flushAlgorithm = s, t2._cancelAlgorithm = f2, t2._finishPromise = void 0, t2._finishPromise_resolve = void 0, t2._finishPromise_reject = void 0;
      }
      n$1(ja, "SetUpTransformStreamDefaultController");
      function La(e, t2) {
        const r2 = Object.create(Pe.prototype);
        let s, f2, c;
        t2.transform !== void 0 ? s = n$1((d) => t2.transform(d, r2), "transformAlgorithm") : s = n$1((d) => {
          try {
            return So(r2, d), T2(void 0);
          } catch (p) {
            return b(p);
          }
        }, "transformAlgorithm"), t2.flush !== void 0 ? f2 = n$1(() => t2.flush(r2), "flushAlgorithm") : f2 = n$1(() => T2(void 0), "flushAlgorithm"), t2.cancel !== void 0 ? c = n$1((d) => t2.cancel(d), "cancelAlgorithm") : c = n$1(() => T2(void 0), "cancelAlgorithm"), ja(e, r2, s, f2, c);
      }
      n$1(La, "SetUpTransformStreamDefaultControllerFromTransformer");
      function Nt(e) {
        e._transformAlgorithm = void 0, e._flushAlgorithm = void 0, e._cancelAlgorithm = void 0;
      }
      n$1(Nt, "TransformStreamDefaultControllerClearAlgorithms");
      function So(e, t2) {
        const r2 = e._controlledTransformStream, s = r2._readable._readableStreamController;
        if (!Ue(s)) throw new TypeError("Readable side is not in a state that permits enqueue");
        try {
          Me(s, t2);
        } catch (c) {
          throw xr(r2, c), r2._readable._storedError;
        }
        ma(s) !== r2._backpressure && Ut(r2, true);
      }
      n$1(So, "TransformStreamDefaultControllerEnqueue");
      function Da(e, t2) {
        _o(e._controlledTransformStream, t2);
      }
      n$1(Da, "TransformStreamDefaultControllerError");
      function wo(e, t2) {
        const r2 = e._transformAlgorithm(t2);
        return F(r2, void 0, (s) => {
          throw _o(e._controlledTransformStream, s), s;
        });
      }
      n$1(wo, "TransformStreamDefaultControllerPerformTransform");
      function $a(e) {
        const t2 = e._controlledTransformStream, r2 = t2._readable._readableStreamController;
        Oe(r2);
        const s = new TypeError("TransformStream terminated");
        xr(t2, s);
      }
      n$1($a, "TransformStreamDefaultControllerTerminate");
      function Ma(e, t2) {
        const r2 = e._transformStreamController;
        if (e._backpressure) {
          const s = e._backpressureChangePromise;
          return F(s, () => {
            const f2 = e._writable;
            if (f2._state === "erroring") throw f2._storedError;
            return wo(r2, t2);
          });
        }
        return wo(r2, t2);
      }
      n$1(Ma, "TransformStreamDefaultSinkWriteAlgorithm");
      function Ua(e, t2) {
        const r2 = e._transformStreamController;
        if (r2._finishPromise !== void 0) return r2._finishPromise;
        const s = e._readable;
        r2._finishPromise = A((c, d) => {
          r2._finishPromise_resolve = c, r2._finishPromise_reject = d;
        });
        const f2 = r2._cancelAlgorithm(t2);
        return Nt(r2), g(f2, () => (s._state === "errored" ? xe(r2, s._storedError) : (J(s._readableStreamController, t2), Hr(r2)), null), (c) => (J(s._readableStreamController, c), xe(r2, c), null)), r2._finishPromise;
      }
      n$1(Ua, "TransformStreamDefaultSinkAbortAlgorithm");
      function xa(e) {
        const t2 = e._transformStreamController;
        if (t2._finishPromise !== void 0) return t2._finishPromise;
        const r2 = e._readable;
        t2._finishPromise = A((f2, c) => {
          t2._finishPromise_resolve = f2, t2._finishPromise_reject = c;
        });
        const s = t2._flushAlgorithm();
        return Nt(t2), g(s, () => (r2._state === "errored" ? xe(t2, r2._storedError) : (Oe(r2._readableStreamController), Hr(t2)), null), (f2) => (J(r2._readableStreamController, f2), xe(t2, f2), null)), t2._finishPromise;
      }
      n$1(xa, "TransformStreamDefaultSinkCloseAlgorithm");
      function Na(e) {
        return Ut(e, false), e._backpressureChangePromise;
      }
      n$1(Na, "TransformStreamDefaultSourcePullAlgorithm");
      function Ha(e, t2) {
        const r2 = e._transformStreamController;
        if (r2._finishPromise !== void 0) return r2._finishPromise;
        const s = e._writable;
        r2._finishPromise = A((c, d) => {
          r2._finishPromise_resolve = c, r2._finishPromise_reject = d;
        });
        const f2 = r2._cancelAlgorithm(t2);
        return Nt(r2), g(f2, () => (s._state === "errored" ? xe(r2, s._storedError) : (it(s._writableStreamController, t2), Nr(e), Hr(r2)), null), (c) => (it(s._writableStreamController, c), Nr(e), xe(r2, c), null)), r2._finishPromise;
      }
      n$1(Ha, "TransformStreamDefaultSourceCancelAlgorithm");
      function Ht(e) {
        return new TypeError(`TransformStreamDefaultController.prototype.${e} can only be used on a TransformStreamDefaultController`);
      }
      n$1(Ht, "defaultControllerBrandCheckException");
      function Hr(e) {
        e._finishPromise_resolve !== void 0 && (e._finishPromise_resolve(), e._finishPromise_resolve = void 0, e._finishPromise_reject = void 0);
      }
      n$1(Hr, "defaultControllerFinishPromiseResolve");
      function xe(e, t2) {
        e._finishPromise_reject !== void 0 && (Q(e._finishPromise), e._finishPromise_reject(t2), e._finishPromise_resolve = void 0, e._finishPromise_reject = void 0);
      }
      n$1(xe, "defaultControllerFinishPromiseReject");
      function Ro(e) {
        return new TypeError(`TransformStream.prototype.${e} can only be used on a TransformStream`);
      }
      n$1(Ro, "streamBrandCheckException"), a.ByteLengthQueuingStrategy = Dt, a.CountQueuingStrategy = $t, a.ReadableByteStreamController = ce, a.ReadableStream = L, a.ReadableStreamBYOBReader = we, a.ReadableStreamBYOBRequest = ve, a.ReadableStreamDefaultController = he, a.ReadableStreamDefaultReader = ye, a.TransformStream = Mt, a.TransformStreamDefaultController = Pe, a.WritableStream = Re, a.WritableStreamDefaultController = $e, a.WritableStreamDefaultWriter = de;
    });
  }(ct, ct.exports)), ct.exports;
}
n$1(ns, "requirePonyfill_es2018");
var Ao;
function os() {
  if (Ao) return Eo;
  Ao = 1;
  const i = 65536;
  if (!globalThis.ReadableStream) try {
    const o2 = require("node:process"), { emitWarning: a } = o2;
    try {
      o2.emitWarning = () => {
      }, Object.assign(globalThis, require("node:stream/web")), o2.emitWarning = a;
    } catch (l) {
      throw o2.emitWarning = a, l;
    }
  } catch {
    Object.assign(globalThis, ns());
  }
  try {
    const { Blob: o2 } = require("buffer");
    o2 && !o2.prototype.stream && (o2.prototype.stream = n$1(function(l) {
      let u = 0;
      const m = this;
      return new ReadableStream({ type: "bytes", async pull(h2) {
        const E = await m.slice(u, Math.min(m.size, u + i)).arrayBuffer();
        u += E.byteLength, h2.enqueue(new Uint8Array(E)), u === m.size && h2.close();
      } });
    }, "name"));
  } catch {
  }
  return Eo;
}
n$1(os, "requireStreams"), os();
/*! fetch-blob. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
const Bo = 65536;
async function* Qr(i, o2 = true) {
  for (const a of i) if ("stream" in a) yield* a.stream();
  else if (ArrayBuffer.isView(a)) if (o2) {
    let l = a.byteOffset;
    const u = a.byteOffset + a.byteLength;
    for (; l !== u; ) {
      const m = Math.min(u - l, Bo), h2 = a.buffer.slice(l, l + m);
      l += h2.byteLength, yield new Uint8Array(h2);
    }
  } else yield a;
  else {
    let l = 0, u = a;
    for (; l !== u.size; ) {
      const h2 = await u.slice(l, Math.min(u.size, l + Bo)).arrayBuffer();
      l += h2.byteLength, yield new Uint8Array(h2);
    }
  }
}
n$1(Qr, "toIterator");
const Wo = (_a = class {
  constructor(o2 = [], a = {}) {
    __privateAdd(this, _e, []);
    __privateAdd(this, _t, "");
    __privateAdd(this, _r, 0);
    __privateAdd(this, _n, "transparent");
    if (typeof o2 != "object" || o2 === null) throw new TypeError("Failed to construct 'Blob': The provided value cannot be converted to a sequence.");
    if (typeof o2[Symbol.iterator] != "function") throw new TypeError("Failed to construct 'Blob': The object must have a callable @@iterator property.");
    if (typeof a != "object" && typeof a != "function") throw new TypeError("Failed to construct 'Blob': parameter 2 cannot convert to dictionary.");
    a === null && (a = {});
    const l = new TextEncoder();
    for (const m of o2) {
      let h2;
      ArrayBuffer.isView(m) ? h2 = new Uint8Array(m.buffer.slice(m.byteOffset, m.byteOffset + m.byteLength)) : m instanceof ArrayBuffer ? h2 = new Uint8Array(m.slice(0)) : m instanceof _a ? h2 = m : h2 = l.encode(`${m}`), __privateSet(this, _r, __privateGet(this, _r) + (ArrayBuffer.isView(h2) ? h2.byteLength : h2.size)), __privateGet(this, _e).push(h2);
    }
    __privateSet(this, _n, `${a.endings === void 0 ? "transparent" : a.endings}`);
    const u = a.type === void 0 ? "" : String(a.type);
    __privateSet(this, _t, /^[\x20-\x7E]*$/.test(u) ? u : "");
  }
  get size() {
    return __privateGet(this, _r);
  }
  get type() {
    return __privateGet(this, _t);
  }
  async text() {
    const o2 = new TextDecoder();
    let a = "";
    for await (const l of Qr(__privateGet(this, _e), false)) a += o2.decode(l, { stream: true });
    return a += o2.decode(), a;
  }
  async arrayBuffer() {
    const o2 = new Uint8Array(this.size);
    let a = 0;
    for await (const l of Qr(__privateGet(this, _e), false)) o2.set(l, a), a += l.length;
    return o2.buffer;
  }
  stream() {
    const o2 = Qr(__privateGet(this, _e), true);
    return new globalThis.ReadableStream({ type: "bytes", async pull(a) {
      const l = await o2.next();
      l.done ? a.close() : a.enqueue(l.value);
    }, async cancel() {
      await o2.return();
    } });
  }
  slice(o2 = 0, a = this.size, l = "") {
    const { size: u } = this;
    let m = o2 < 0 ? Math.max(u + o2, 0) : Math.min(o2, u), h2 = a < 0 ? Math.max(u + a, 0) : Math.min(a, u);
    const S = Math.max(h2 - m, 0), E = __privateGet(this, _e), w = [];
    let A = 0;
    for (const b of E) {
      if (A >= S) break;
      const q = ArrayBuffer.isView(b) ? b.byteLength : b.size;
      if (m && q <= m) m -= q, h2 -= q;
      else {
        let g;
        ArrayBuffer.isView(b) ? (g = b.subarray(m, Math.min(q, h2)), A += g.byteLength) : (g = b.slice(m, Math.min(q, h2)), A += g.size), h2 -= q, w.push(g), m = 0;
      }
    }
    const T2 = new _a([], { type: String(l).toLowerCase() });
    return __privateSet(T2, _r, S), __privateSet(T2, _e, w), T2;
  }
  get [Symbol.toStringTag]() {
    return "Blob";
  }
  static [Symbol.hasInstance](o2) {
    return o2 && typeof o2 == "object" && typeof o2.constructor == "function" && (typeof o2.stream == "function" || typeof o2.arrayBuffer == "function") && /^(Blob|File)$/.test(o2[Symbol.toStringTag]);
  }
}, _e = new WeakMap(), _t = new WeakMap(), _r = new WeakMap(), _n = new WeakMap(), n$1(_a, "Blob"), _a);
Object.defineProperties(Wo.prototype, { size: { enumerable: true }, type: { enumerable: true }, slice: { enumerable: true } });
const Ze = Wo, is = (_b = class extends Ze {
  constructor(o2, a, l = {}) {
    if (arguments.length < 2) throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`);
    super(o2, l);
    __privateAdd(this, _e2, 0);
    __privateAdd(this, _t2, "");
    l === null && (l = {});
    const u = l.lastModified === void 0 ? Date.now() : Number(l.lastModified);
    Number.isNaN(u) || __privateSet(this, _e2, u), __privateSet(this, _t2, String(a));
  }
  get name() {
    return __privateGet(this, _t2);
  }
  get lastModified() {
    return __privateGet(this, _e2);
  }
  get [Symbol.toStringTag]() {
    return "File";
  }
  static [Symbol.hasInstance](o2) {
    return !!o2 && o2 instanceof Ze && /^(File)$/.test(o2[Symbol.toStringTag]);
  }
}, _e2 = new WeakMap(), _t2 = new WeakMap(), n$1(_b, "File"), _b), Yr = is;
/*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
var { toStringTag: dt, iterator: as, hasInstance: ss } = Symbol, ko = Math.random, us = "append,set,get,getAll,delete,keys,values,entries,forEach,constructor".split(","), qo = n$1((i, o2, a) => (i += "", /^(Blob|File)$/.test(o2 && o2[dt]) ? [(a = a !== void 0 ? a + "" : o2[dt] == "File" ? o2.name : "blob", i), o2.name !== a || o2[dt] == "blob" ? new Yr([o2], a, o2) : o2] : [i, o2 + ""]), "f"), Gr = n$1((i, o2) => (o2 ? i : i.replace(/\r?\n|\r/g, `\r
`)).replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22"), "e$1"), Fe = n$1((i, o2, a) => {
  if (o2.length < a) throw new TypeError(`Failed to execute '${i}' on 'FormData': ${a} arguments required, but only ${o2.length} present.`);
}, "x");
const Zt = (_c = class {
  constructor(...o2) {
    __privateAdd(this, _e3, []);
    if (o2.length) throw new TypeError("Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.");
  }
  get [dt]() {
    return "FormData";
  }
  [as]() {
    return this.entries();
  }
  static [ss](o2) {
    return o2 && typeof o2 == "object" && o2[dt] === "FormData" && !us.some((a) => typeof o2[a] != "function");
  }
  append(...o2) {
    Fe("append", arguments, 2), __privateGet(this, _e3).push(qo(...o2));
  }
  delete(o2) {
    Fe("delete", arguments, 1), o2 += "", __privateSet(this, _e3, __privateGet(this, _e3).filter(([a]) => a !== o2));
  }
  get(o2) {
    Fe("get", arguments, 1), o2 += "";
    for (var a = __privateGet(this, _e3), l = a.length, u = 0; u < l; u++) if (a[u][0] === o2) return a[u][1];
    return null;
  }
  getAll(o2, a) {
    return Fe("getAll", arguments, 1), a = [], o2 += "", __privateGet(this, _e3).forEach((l) => l[0] === o2 && a.push(l[1])), a;
  }
  has(o2) {
    return Fe("has", arguments, 1), o2 += "", __privateGet(this, _e3).some((a) => a[0] === o2);
  }
  forEach(o2, a) {
    Fe("forEach", arguments, 1);
    for (var [l, u] of this) o2.call(a, u, l, this);
  }
  set(...o2) {
    Fe("set", arguments, 2);
    var a = [], l = true;
    o2 = qo(...o2), __privateGet(this, _e3).forEach((u) => {
      u[0] === o2[0] ? l && (l = !a.push(o2)) : a.push(u);
    }), l && a.push(o2), __privateSet(this, _e3, a);
  }
  *entries() {
    yield* __privateGet(this, _e3);
  }
  *keys() {
    for (var [o2] of this) yield o2;
  }
  *values() {
    for (var [, o2] of this) yield o2;
  }
}, _e3 = new WeakMap(), n$1(_c, "FormData"), _c);
function ls(i, o2 = Ze) {
  var a = `${ko()}${ko()}`.replace(/\./g, "").slice(-28).padStart(32, "-"), l = [], u = `--${a}\r
Content-Disposition: form-data; name="`;
  return i.forEach((m, h2) => typeof m == "string" ? l.push(u + Gr(h2) + `"\r
\r
${m.replace(new RegExp("\\r(?!\\n)|(?<!\\r)\\n", "g"), `\r
`)}\r
`) : l.push(u + Gr(h2) + `"; filename="${Gr(m.name, 1)}"\r
Content-Type: ${m.type || "application/octet-stream"}\r
\r
`, m, `\r
`)), l.push(`--${a}--`), new o2(l, { type: "multipart/form-data; boundary=" + a });
}
n$1(ls, "formDataToBlob");
const _Kt = class _Kt extends Error {
  constructor(o2, a) {
    super(o2), Error.captureStackTrace(this, this.constructor), this.type = a;
  }
  get name() {
    return this.constructor.name;
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
};
n$1(_Kt, "FetchBaseError");
let Kt = _Kt;
const _te = class _te extends Kt {
  constructor(o2, a, l) {
    super(o2, a), l && (this.code = this.errno = l.code, this.erroredSysCall = l.syscall);
  }
};
n$1(_te, "FetchError");
let te = _te;
const Jt = Symbol.toStringTag, Oo = n$1((i) => typeof i == "object" && typeof i.append == "function" && typeof i.delete == "function" && typeof i.get == "function" && typeof i.getAll == "function" && typeof i.has == "function" && typeof i.set == "function" && typeof i.sort == "function" && i[Jt] === "URLSearchParams", "isURLSearchParameters"), Xt = n$1((i) => i && typeof i == "object" && typeof i.arrayBuffer == "function" && typeof i.type == "string" && typeof i.stream == "function" && typeof i.constructor == "function" && /^(Blob|File)$/.test(i[Jt]), "isBlob"), fs = n$1((i) => typeof i == "object" && (i[Jt] === "AbortSignal" || i[Jt] === "EventTarget"), "isAbortSignal"), cs = n$1((i, o2) => {
  const a = new URL(o2).hostname, l = new URL(i).hostname;
  return a === l || a.endsWith(`.${l}`);
}, "isDomainOrSubdomain"), ds = n$1((i, o2) => {
  const a = new URL(o2).protocol, l = new URL(i).protocol;
  return a === l;
}, "isSameProtocol"), hs = promisify(ie.pipeline), N = Symbol("Body internals");
const _ht = class _ht {
  constructor(o2, { size: a = 0 } = {}) {
    let l = null;
    o2 === null ? o2 = null : Oo(o2) ? o2 = Buffer$1.from(o2.toString()) : Xt(o2) || Buffer$1.isBuffer(o2) || (types.isAnyArrayBuffer(o2) ? o2 = Buffer$1.from(o2) : ArrayBuffer.isView(o2) ? o2 = Buffer$1.from(o2.buffer, o2.byteOffset, o2.byteLength) : o2 instanceof ie || (o2 instanceof Zt ? (o2 = ls(o2), l = o2.type.split("=")[1]) : o2 = Buffer$1.from(String(o2))));
    let u = o2;
    Buffer$1.isBuffer(o2) ? u = ie.Readable.from(o2) : Xt(o2) && (u = ie.Readable.from(o2.stream())), this[N] = { body: o2, stream: u, boundary: l, disturbed: false, error: null }, this.size = a, o2 instanceof ie && o2.on("error", (m) => {
      const h2 = m instanceof Kt ? m : new te(`Invalid response body while trying to fetch ${this.url}: ${m.message}`, "system", m);
      this[N].error = h2;
    });
  }
  get body() {
    return this[N].stream;
  }
  get bodyUsed() {
    return this[N].disturbed;
  }
  async arrayBuffer() {
    const { buffer: o2, byteOffset: a, byteLength: l } = await Zr(this);
    return o2.slice(a, a + l);
  }
  async formData() {
    const o2 = this.headers.get("content-type");
    if (o2.startsWith("application/x-www-form-urlencoded")) {
      const l = new Zt(), u = new URLSearchParams(await this.text());
      for (const [m, h2] of u) l.append(m, h2);
      return l;
    }
    const { toFormData: a } = await import('./multipart-parser-BGZciX6u.mjs');
    return a(this.body, o2);
  }
  async blob() {
    const o2 = this.headers && this.headers.get("content-type") || this[N].body && this[N].body.type || "", a = await this.arrayBuffer();
    return new Ze([a], { type: o2 });
  }
  async json() {
    const o2 = await this.text();
    return JSON.parse(o2);
  }
  async text() {
    const o2 = await Zr(this);
    return new TextDecoder().decode(o2);
  }
  buffer() {
    return Zr(this);
  }
};
n$1(_ht, "Body");
let ht = _ht;
ht.prototype.buffer = deprecate(ht.prototype.buffer, "Please use 'response.arrayBuffer()' instead of 'response.buffer()'", "node-fetch#buffer"), Object.defineProperties(ht.prototype, { body: { enumerable: true }, bodyUsed: { enumerable: true }, arrayBuffer: { enumerable: true }, blob: { enumerable: true }, json: { enumerable: true }, text: { enumerable: true }, data: { get: deprecate(() => {
}, "data doesn't exist, use json(), text(), arrayBuffer(), or body instead", "https://github.com/node-fetch/node-fetch/issues/1000 (response)") } });
async function Zr(i) {
  if (i[N].disturbed) throw new TypeError(`body used already for: ${i.url}`);
  if (i[N].disturbed = true, i[N].error) throw i[N].error;
  const { body: o2 } = i;
  if (o2 === null) return Buffer$1.alloc(0);
  if (!(o2 instanceof ie)) return Buffer$1.alloc(0);
  const a = [];
  let l = 0;
  try {
    for await (const u of o2) {
      if (i.size > 0 && l + u.length > i.size) {
        const m = new te(`content size at ${i.url} over limit: ${i.size}`, "max-size");
        throw o2.destroy(m), m;
      }
      l += u.length, a.push(u);
    }
  } catch (u) {
    throw u instanceof Kt ? u : new te(`Invalid response body while trying to fetch ${i.url}: ${u.message}`, "system", u);
  }
  if (o2.readableEnded === true || o2._readableState.ended === true) try {
    return a.every((u) => typeof u == "string") ? Buffer$1.from(a.join("")) : Buffer$1.concat(a, l);
  } catch (u) {
    throw new te(`Could not create Buffer from response body for ${i.url}: ${u.message}`, "system", u);
  }
  else throw new te(`Premature close of server response while trying to fetch ${i.url}`);
}
n$1(Zr, "consumeBody");
const Kr = n$1((i, o2) => {
  let a, l, { body: u } = i[N];
  if (i.bodyUsed) throw new Error("cannot clone body after it is used");
  return u instanceof ie && typeof u.getBoundary != "function" && (a = new PassThrough({ highWaterMark: o2 }), l = new PassThrough({ highWaterMark: o2 }), u.pipe(a), u.pipe(l), i[N].stream = a, u = l), u;
}, "clone"), ms = deprecate((i) => i.getBoundary(), "form-data doesn't follow the spec and requires special treatment. Use alternative package", "https://github.com/node-fetch/node-fetch/issues/1167"), Io = n$1((i, o2) => i === null ? null : typeof i == "string" ? "text/plain;charset=UTF-8" : Oo(i) ? "application/x-www-form-urlencoded;charset=UTF-8" : Xt(i) ? i.type || null : Buffer$1.isBuffer(i) || types.isAnyArrayBuffer(i) || ArrayBuffer.isView(i) ? null : i instanceof Zt ? `multipart/form-data; boundary=${o2[N].boundary}` : i && typeof i.getBoundary == "function" ? `multipart/form-data;boundary=${ms(i)}` : i instanceof ie ? null : "text/plain;charset=UTF-8", "extractContentType"), bs = n$1((i) => {
  const { body: o2 } = i[N];
  return o2 === null ? 0 : Xt(o2) ? o2.size : Buffer$1.isBuffer(o2) ? o2.length : o2 && typeof o2.getLengthSync == "function" && o2.hasKnownLength && o2.hasKnownLength() ? o2.getLengthSync() : null;
}, "getTotalBytes"), ps = n$1(async (i, { body: o2 }) => {
  o2 === null ? i.end() : await hs(o2, i);
}, "writeToStream"), er = typeof ft.validateHeaderName == "function" ? ft.validateHeaderName : (i) => {
  if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(i)) {
    const o2 = new TypeError(`Header name must be a valid HTTP token [${i}]`);
    throw Object.defineProperty(o2, "code", { value: "ERR_INVALID_HTTP_TOKEN" }), o2;
  }
}, Jr = typeof ft.validateHeaderValue == "function" ? ft.validateHeaderValue : (i, o2) => {
  if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(o2)) {
    const a = new TypeError(`Invalid character in header content ["${i}"]`);
    throw Object.defineProperty(a, "code", { value: "ERR_INVALID_CHAR" }), a;
  }
};
const _ae = class _ae extends URLSearchParams {
  constructor(o2) {
    let a = [];
    if (o2 instanceof _ae) {
      const l = o2.raw();
      for (const [u, m] of Object.entries(l)) a.push(...m.map((h2) => [u, h2]));
    } else if (o2 != null) if (typeof o2 == "object" && !types.isBoxedPrimitive(o2)) {
      const l = o2[Symbol.iterator];
      if (l == null) a.push(...Object.entries(o2));
      else {
        if (typeof l != "function") throw new TypeError("Header pairs must be iterable");
        a = [...o2].map((u) => {
          if (typeof u != "object" || types.isBoxedPrimitive(u)) throw new TypeError("Each header pair must be an iterable object");
          return [...u];
        }).map((u) => {
          if (u.length !== 2) throw new TypeError("Each header pair must be a name/value tuple");
          return [...u];
        });
      }
    } else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");
    return a = a.length > 0 ? a.map(([l, u]) => (er(l), Jr(l, String(u)), [String(l).toLowerCase(), String(u)])) : void 0, super(a), new Proxy(this, { get(l, u, m) {
      switch (u) {
        case "append":
        case "set":
          return (h2, S) => (er(h2), Jr(h2, String(S)), URLSearchParams.prototype[u].call(l, String(h2).toLowerCase(), String(S)));
        case "delete":
        case "has":
        case "getAll":
          return (h2) => (er(h2), URLSearchParams.prototype[u].call(l, String(h2).toLowerCase()));
        case "keys":
          return () => (l.sort(), new Set(URLSearchParams.prototype.keys.call(l)).keys());
        default:
          return Reflect.get(l, u, m);
      }
    } });
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
  toString() {
    return Object.prototype.toString.call(this);
  }
  get(o2) {
    const a = this.getAll(o2);
    if (a.length === 0) return null;
    let l = a.join(", ");
    return /^content-encoding$/i.test(o2) && (l = l.toLowerCase()), l;
  }
  forEach(o2, a = void 0) {
    for (const l of this.keys()) Reflect.apply(o2, a, [this.get(l), l, this]);
  }
  *values() {
    for (const o2 of this.keys()) yield this.get(o2);
  }
  *entries() {
    for (const o2 of this.keys()) yield [o2, this.get(o2)];
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  raw() {
    return [...this.keys()].reduce((o2, a) => (o2[a] = this.getAll(a), o2), {});
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return [...this.keys()].reduce((o2, a) => {
      const l = this.getAll(a);
      return a === "host" ? o2[a] = l[0] : o2[a] = l.length > 1 ? l : l[0], o2;
    }, {});
  }
};
n$1(_ae, "Headers");
let ae = _ae;
Object.defineProperties(ae.prototype, ["get", "entries", "forEach", "values"].reduce((i, o2) => (i[o2] = { enumerable: true }, i), {}));
function ys(i = []) {
  return new ae(i.reduce((o2, a, l, u) => (l % 2 === 0 && o2.push(u.slice(l, l + 2)), o2), []).filter(([o2, a]) => {
    try {
      return er(o2), Jr(o2, String(a)), true;
    } catch {
      return false;
    }
  }));
}
n$1(ys, "fromRawHeaders");
const gs = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]), Xr = n$1((i) => gs.has(i), "isRedirect"), re = Symbol("Response internals");
let H$1 = (_d = class extends ht {
  constructor(o2 = null, a = {}) {
    super(o2, a);
    const l = a.status != null ? a.status : 200, u = new ae(a.headers);
    if (o2 !== null && !u.has("Content-Type")) {
      const m = Io(o2, this);
      m && u.append("Content-Type", m);
    }
    this[re] = { type: "default", url: a.url, status: l, statusText: a.statusText || "", headers: u, counter: a.counter, highWaterMark: a.highWaterMark };
  }
  get type() {
    return this[re].type;
  }
  get url() {
    return this[re].url || "";
  }
  get status() {
    return this[re].status;
  }
  get ok() {
    return this[re].status >= 200 && this[re].status < 300;
  }
  get redirected() {
    return this[re].counter > 0;
  }
  get statusText() {
    return this[re].statusText;
  }
  get headers() {
    return this[re].headers;
  }
  get highWaterMark() {
    return this[re].highWaterMark;
  }
  clone() {
    return new _d(Kr(this, this.highWaterMark), { type: this.type, url: this.url, status: this.status, statusText: this.statusText, headers: this.headers, ok: this.ok, redirected: this.redirected, size: this.size, highWaterMark: this.highWaterMark });
  }
  static redirect(o2, a = 302) {
    if (!Xr(a)) throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
    return new _d(null, { headers: { location: new URL(o2).toString() }, status: a });
  }
  static error() {
    const o2 = new _d(null, { status: 0, statusText: "" });
    return o2[re].type = "error", o2;
  }
  static json(o2 = void 0, a = {}) {
    const l = JSON.stringify(o2);
    if (l === void 0) throw new TypeError("data is not JSON serializable");
    const u = new ae(a && a.headers);
    return u.has("content-type") || u.set("content-type", "application/json"), new _d(l, { ...a, headers: u });
  }
  get [Symbol.toStringTag]() {
    return "Response";
  }
}, n$1(_d, "Response"), _d);
Object.defineProperties(H$1.prototype, { type: { enumerable: true }, url: { enumerable: true }, status: { enumerable: true }, ok: { enumerable: true }, redirected: { enumerable: true }, statusText: { enumerable: true }, headers: { enumerable: true }, clone: { enumerable: true } });
const _s = n$1((i) => {
  if (i.search) return i.search;
  const o2 = i.href.length - 1, a = i.hash || (i.href[o2] === "#" ? "#" : "");
  return i.href[o2 - a.length] === "?" ? "?" : "";
}, "getSearch");
function Fo(i, o2 = false) {
  return i == null || (i = new URL(i), /^(about|blob|data):$/.test(i.protocol)) ? "no-referrer" : (i.username = "", i.password = "", i.hash = "", o2 && (i.pathname = "", i.search = ""), i);
}
n$1(Fo, "stripURLForUseAsAReferrer");
const zo = /* @__PURE__ */ new Set(["", "no-referrer", "no-referrer-when-downgrade", "same-origin", "origin", "strict-origin", "origin-when-cross-origin", "strict-origin-when-cross-origin", "unsafe-url"]), Ss = "strict-origin-when-cross-origin";
function ws(i) {
  if (!zo.has(i)) throw new TypeError(`Invalid referrerPolicy: ${i}`);
  return i;
}
n$1(ws, "validateReferrerPolicy");
function Rs(i) {
  if (/^(http|ws)s:$/.test(i.protocol)) return true;
  const o2 = i.host.replace(/(^\[)|(]$)/g, ""), a = isIP(o2);
  return a === 4 && /^127\./.test(o2) || a === 6 && /^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(o2) ? true : i.host === "localhost" || i.host.endsWith(".localhost") ? false : i.protocol === "file:";
}
n$1(Rs, "isOriginPotentiallyTrustworthy");
function Ke(i) {
  return /^about:(blank|srcdoc)$/.test(i) || i.protocol === "data:" || /^(blob|filesystem):$/.test(i.protocol) ? true : Rs(i);
}
n$1(Ke, "isUrlPotentiallyTrustworthy");
function Ts(i, { referrerURLCallback: o2, referrerOriginCallback: a } = {}) {
  if (i.referrer === "no-referrer" || i.referrerPolicy === "") return null;
  const l = i.referrerPolicy;
  if (i.referrer === "about:client") return "no-referrer";
  const u = i.referrer;
  let m = Fo(u), h2 = Fo(u, true);
  m.toString().length > 4096 && (m = h2), o2 && (m = o2(m)), a && (h2 = a(h2));
  const S = new URL(i.url);
  switch (l) {
    case "no-referrer":
      return "no-referrer";
    case "origin":
      return h2;
    case "unsafe-url":
      return m;
    case "strict-origin":
      return Ke(m) && !Ke(S) ? "no-referrer" : h2.toString();
    case "strict-origin-when-cross-origin":
      return m.origin === S.origin ? m : Ke(m) && !Ke(S) ? "no-referrer" : h2;
    case "same-origin":
      return m.origin === S.origin ? m : "no-referrer";
    case "origin-when-cross-origin":
      return m.origin === S.origin ? m : h2;
    case "no-referrer-when-downgrade":
      return Ke(m) && !Ke(S) ? "no-referrer" : m;
    default:
      throw new TypeError(`Invalid referrerPolicy: ${l}`);
  }
}
n$1(Ts, "determineRequestsReferrer");
function Cs(i) {
  const o2 = (i.get("referrer-policy") || "").split(/[,\s]+/);
  let a = "";
  for (const l of o2) l && zo.has(l) && (a = l);
  return a;
}
n$1(Cs, "parseReferrerPolicyFromHeader");
const j = Symbol("Request internals"), mt = n$1((i) => typeof i == "object" && typeof i[j] == "object", "isRequest"), Ps = deprecate(() => {
}, ".data is not a valid RequestInit property, use .body instead", "https://github.com/node-fetch/node-fetch/issues/1000 (request)");
const _Xe = class _Xe extends ht {
  constructor(o2, a = {}) {
    let l;
    if (mt(o2) ? l = new URL(o2.url) : (l = new URL(o2), o2 = {}), l.username !== "" || l.password !== "") throw new TypeError(`${l} is an url with embedded credentials.`);
    let u = a.method || o2.method || "GET";
    if (/^(delete|get|head|options|post|put)$/i.test(u) && (u = u.toUpperCase()), !mt(a) && "data" in a && Ps(), (a.body != null || mt(o2) && o2.body !== null) && (u === "GET" || u === "HEAD")) throw new TypeError("Request with GET/HEAD method cannot have body");
    const m = a.body ? a.body : mt(o2) && o2.body !== null ? Kr(o2) : null;
    super(m, { size: a.size || o2.size || 0 });
    const h2 = new ae(a.headers || o2.headers || {});
    if (m !== null && !h2.has("Content-Type")) {
      const w = Io(m, this);
      w && h2.set("Content-Type", w);
    }
    let S = mt(o2) ? o2.signal : null;
    if ("signal" in a && (S = a.signal), S != null && !fs(S)) throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");
    let E = a.referrer == null ? o2.referrer : a.referrer;
    if (E === "") E = "no-referrer";
    else if (E) {
      const w = new URL(E);
      E = /^about:(\/\/)?client$/.test(w) ? "client" : w;
    } else E = void 0;
    this[j] = { method: u, redirect: a.redirect || o2.redirect || "follow", headers: h2, parsedURL: l, signal: S, referrer: E }, this.follow = a.follow === void 0 ? o2.follow === void 0 ? 20 : o2.follow : a.follow, this.compress = a.compress === void 0 ? o2.compress === void 0 ? true : o2.compress : a.compress, this.counter = a.counter || o2.counter || 0, this.agent = a.agent || o2.agent, this.highWaterMark = a.highWaterMark || o2.highWaterMark || 16384, this.insecureHTTPParser = a.insecureHTTPParser || o2.insecureHTTPParser || false, this.referrerPolicy = a.referrerPolicy || o2.referrerPolicy || "";
  }
  get method() {
    return this[j].method;
  }
  get url() {
    return format$1(this[j].parsedURL);
  }
  get headers() {
    return this[j].headers;
  }
  get redirect() {
    return this[j].redirect;
  }
  get signal() {
    return this[j].signal;
  }
  get referrer() {
    if (this[j].referrer === "no-referrer") return "";
    if (this[j].referrer === "client") return "about:client";
    if (this[j].referrer) return this[j].referrer.toString();
  }
  get referrerPolicy() {
    return this[j].referrerPolicy;
  }
  set referrerPolicy(o2) {
    this[j].referrerPolicy = ws(o2);
  }
  clone() {
    return new _Xe(this);
  }
  get [Symbol.toStringTag]() {
    return "Request";
  }
};
n$1(_Xe, "Request");
let Xe = _Xe;
Object.defineProperties(Xe.prototype, { method: { enumerable: true }, url: { enumerable: true }, headers: { enumerable: true }, redirect: { enumerable: true }, clone: { enumerable: true }, signal: { enumerable: true }, referrer: { enumerable: true }, referrerPolicy: { enumerable: true } });
const Es = n$1((i) => {
  const { parsedURL: o2 } = i[j], a = new ae(i[j].headers);
  a.has("Accept") || a.set("Accept", "*/*");
  let l = null;
  if (i.body === null && /^(post|put)$/i.test(i.method) && (l = "0"), i.body !== null) {
    const S = bs(i);
    typeof S == "number" && !Number.isNaN(S) && (l = String(S));
  }
  l && a.set("Content-Length", l), i.referrerPolicy === "" && (i.referrerPolicy = Ss), i.referrer && i.referrer !== "no-referrer" ? i[j].referrer = Ts(i) : i[j].referrer = "no-referrer", i[j].referrer instanceof URL && a.set("Referer", i.referrer), a.has("User-Agent") || a.set("User-Agent", "node-fetch"), i.compress && !a.has("Accept-Encoding") && a.set("Accept-Encoding", "gzip, deflate, br");
  let { agent: u } = i;
  typeof u == "function" && (u = u(o2));
  const m = _s(o2), h2 = { path: o2.pathname + m, method: i.method, headers: a[Symbol.for("nodejs.util.inspect.custom")](), insecureHTTPParser: i.insecureHTTPParser, agent: u };
  return { parsedURL: o2, options: h2 };
}, "getNodeRequestOptions");
const _jo = class _jo extends Kt {
  constructor(o2, a = "aborted") {
    super(o2, a);
  }
};
n$1(_jo, "AbortError");
let jo = _jo;
/*! node-domexception. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
var en, Lo;
function vs() {
  if (Lo) return en;
  if (Lo = 1, !globalThis.DOMException) try {
    const { MessageChannel: i } = require("worker_threads"), o2 = new i().port1, a = new ArrayBuffer();
    o2.postMessage(a, [a, a]);
  } catch (i) {
    i.constructor.name === "DOMException" && (globalThis.DOMException = i.constructor);
  }
  return en = globalThis.DOMException, en;
}
n$1(vs, "requireNodeDomexception");
var As = vs();
const Bs = f(As), { stat: tn } = promises;
n$1((i, o2) => Do(statSync(i), i, o2), "blobFromSync");
n$1((i, o2) => tn(i).then((a) => Do(a, i, o2)), "blobFrom");
n$1((i, o2) => tn(i).then((a) => $o(a, i, o2)), "fileFrom");
n$1((i, o2) => $o(statSync(i), i, o2), "fileFromSync");
const Do = n$1((i, o2, a = "") => new Ze([new ir({ path: o2, size: i.size, lastModified: i.mtimeMs, start: 0 })], { type: a }), "fromBlob"), $o = n$1((i, o2, a = "") => new Yr([new ir({ path: o2, size: i.size, lastModified: i.mtimeMs, start: 0 })], basename(o2), { type: a, lastModified: i.mtimeMs }), "fromFile");
const _ir = class _ir {
  constructor(o2) {
    __privateAdd(this, _e4);
    __privateAdd(this, _t3);
    __privateSet(this, _e4, o2.path), __privateSet(this, _t3, o2.start), this.size = o2.size, this.lastModified = o2.lastModified;
  }
  slice(o2, a) {
    return new _ir({ path: __privateGet(this, _e4), lastModified: this.lastModified, size: a - o2, start: __privateGet(this, _t3) + o2 });
  }
  async *stream() {
    const { mtimeMs: o2 } = await tn(__privateGet(this, _e4));
    if (o2 > this.lastModified) throw new Bs("The requested file could not be read, typically due to permission problems that have occurred after a reference to a file was acquired.", "NotReadableError");
    yield* createReadStream(__privateGet(this, _e4), { start: __privateGet(this, _t3), end: __privateGet(this, _t3) + this.size - 1 });
  }
  get [Symbol.toStringTag]() {
    return "Blob";
  }
};
_e4 = new WeakMap();
_t3 = new WeakMap();
n$1(_ir, "BlobDataItem");
let ir = _ir;
const Is = /* @__PURE__ */ new Set(["data:", "http:", "https:"]);
async function Mo(i, o2) {
  return new Promise((a, l) => {
    const u = new Xe(i, o2), { parsedURL: m, options: h2 } = Es(u);
    if (!Is.has(m.protocol)) throw new TypeError(`node-fetch cannot load ${i}. URL scheme "${m.protocol.replace(/:$/, "")}" is not supported.`);
    if (m.protocol === "data:") {
      const g = ts(u.url), V = new H$1(g, { headers: { "Content-Type": g.typeFull } });
      a(V);
      return;
    }
    const S = (m.protocol === "https:" ? Qa : ft).request, { signal: E } = u;
    let w = null;
    const A = n$1(() => {
      const g = new jo("The operation was aborted.");
      l(g), u.body && u.body instanceof ie.Readable && u.body.destroy(g), !(!w || !w.body) && w.body.emit("error", g);
    }, "abort");
    if (E && E.aborted) {
      A();
      return;
    }
    const T2 = n$1(() => {
      A(), q();
    }, "abortAndFinalize"), b = S(m.toString(), h2);
    E && E.addEventListener("abort", T2);
    const q = n$1(() => {
      b.abort(), E && E.removeEventListener("abort", T2);
    }, "finalize");
    b.on("error", (g) => {
      l(new te(`request to ${u.url} failed, reason: ${g.message}`, "system", g)), q();
    }), Fs(b, (g) => {
      w && w.body && w.body.destroy(g);
    }), process.version < "v14" && b.on("socket", (g) => {
      let V;
      g.prependListener("end", () => {
        V = g._eventsCount;
      }), g.prependListener("close", (I) => {
        if (w && V < g._eventsCount && !I) {
          const F = new Error("Premature close");
          F.code = "ERR_STREAM_PREMATURE_CLOSE", w.body.emit("error", F);
        }
      });
    }), b.on("response", (g) => {
      b.setTimeout(0);
      const V = ys(g.rawHeaders);
      if (Xr(g.statusCode)) {
        const O = V.get("Location");
        let z = null;
        try {
          z = O === null ? null : new URL(O, u.url);
        } catch {
          if (u.redirect !== "manual") {
            l(new te(`uri requested responds with an invalid redirect URL: ${O}`, "invalid-redirect")), q();
            return;
          }
        }
        switch (u.redirect) {
          case "error":
            l(new te(`uri requested responds with a redirect, redirect mode is set to error: ${u.url}`, "no-redirect")), q();
            return;
          case "manual":
            break;
          case "follow": {
            if (z === null) break;
            if (u.counter >= u.follow) {
              l(new te(`maximum redirect reached at: ${u.url}`, "max-redirect")), q();
              return;
            }
            const $ = { headers: new ae(u.headers), follow: u.follow, counter: u.counter + 1, agent: u.agent, compress: u.compress, method: u.method, body: Kr(u), signal: u.signal, size: u.size, referrer: u.referrer, referrerPolicy: u.referrerPolicy };
            if (!cs(u.url, z) || !ds(u.url, z)) for (const pt of ["authorization", "www-authenticate", "cookie", "cookie2"]) $.headers.delete(pt);
            if (g.statusCode !== 303 && u.body && o2.body instanceof ie.Readable) {
              l(new te("Cannot follow redirect with body being a readable stream", "unsupported-redirect")), q();
              return;
            }
            (g.statusCode === 303 || (g.statusCode === 301 || g.statusCode === 302) && u.method === "POST") && ($.method = "GET", $.body = void 0, $.headers.delete("content-length"));
            const M = Cs(V);
            M && ($.referrerPolicy = M), a(Mo(new Xe(z, $))), q();
            return;
          }
          default:
            return l(new TypeError(`Redirect option '${u.redirect}' is not a valid value of RequestRedirect`));
        }
      }
      E && g.once("end", () => {
        E.removeEventListener("abort", T2);
      });
      let I = pipeline(g, new PassThrough(), (O) => {
        O && l(O);
      });
      process.version < "v12.10" && g.on("aborted", T2);
      const F = { url: u.url, status: g.statusCode, statusText: g.statusMessage, headers: V, size: u.size, counter: u.counter, highWaterMark: u.highWaterMark }, Q = V.get("Content-Encoding");
      if (!u.compress || u.method === "HEAD" || Q === null || g.statusCode === 204 || g.statusCode === 304) {
        w = new H$1(I, F), a(w);
        return;
      }
      const se = { flush: Ye.Z_SYNC_FLUSH, finishFlush: Ye.Z_SYNC_FLUSH };
      if (Q === "gzip" || Q === "x-gzip") {
        I = pipeline(I, Ye.createGunzip(se), (O) => {
          O && l(O);
        }), w = new H$1(I, F), a(w);
        return;
      }
      if (Q === "deflate" || Q === "x-deflate") {
        const O = pipeline(g, new PassThrough(), (z) => {
          z && l(z);
        });
        O.once("data", (z) => {
          (z[0] & 15) === 8 ? I = pipeline(I, Ye.createInflate(), ($) => {
            $ && l($);
          }) : I = pipeline(I, Ye.createInflateRaw(), ($) => {
            $ && l($);
          }), w = new H$1(I, F), a(w);
        }), O.once("end", () => {
          w || (w = new H$1(I, F), a(w));
        });
        return;
      }
      if (Q === "br") {
        I = pipeline(I, Ye.createBrotliDecompress(), (O) => {
          O && l(O);
        }), w = new H$1(I, F), a(w);
        return;
      }
      w = new H$1(I, F), a(w);
    }), ps(b, u).catch(l);
  });
}
n$1(Mo, "fetch$1");
function Fs(i, o2) {
  const a = Buffer$1.from(`0\r
\r
`);
  let l = false, u = false, m;
  i.on("response", (h2) => {
    const { headers: S } = h2;
    l = S["transfer-encoding"] === "chunked" && !S["content-length"];
  }), i.on("socket", (h2) => {
    const S = n$1(() => {
      if (l && !u) {
        const w = new Error("Premature close");
        w.code = "ERR_STREAM_PREMATURE_CLOSE", o2(w);
      }
    }, "onSocketClose"), E = n$1((w) => {
      u = Buffer$1.compare(w.slice(-5), a) === 0, !u && m && (u = Buffer$1.compare(m.slice(-3), a.slice(0, 3)) === 0 && Buffer$1.compare(w.slice(-2), a.slice(3)) === 0), m = w;
    }, "onData");
    h2.prependListener("close", S), h2.on("data", E), i.on("close", () => {
      h2.removeListener("close", S), h2.removeListener("data", E);
    });
  });
}
n$1(Fs, "fixResponseChunkedTransferBadEnding");
const Uo = /* @__PURE__ */ new WeakMap(), rn = /* @__PURE__ */ new WeakMap();
function k(i) {
  const o2 = Uo.get(i);
  return console.assert(o2 != null, "'this' is expected an Event object, but got", i), o2;
}
n$1(k, "pd");
function xo(i) {
  if (i.passiveListener != null) {
    typeof console < "u" && typeof console.error == "function" && console.error("Unable to preventDefault inside passive event listener invocation.", i.passiveListener);
    return;
  }
  i.event.cancelable && (i.canceled = true, typeof i.event.preventDefault == "function" && i.event.preventDefault());
}
n$1(xo, "setCancelFlag");
function Je(i, o2) {
  Uo.set(this, { eventTarget: i, event: o2, eventPhase: 2, currentTarget: i, canceled: false, stopped: false, immediateStopped: false, passiveListener: null, timeStamp: o2.timeStamp || Date.now() }), Object.defineProperty(this, "isTrusted", { value: false, enumerable: true });
  const a = Object.keys(o2);
  for (let l = 0; l < a.length; ++l) {
    const u = a[l];
    u in this || Object.defineProperty(this, u, No(u));
  }
}
n$1(Je, "Event"), Je.prototype = { get type() {
  return k(this).event.type;
}, get target() {
  return k(this).eventTarget;
}, get currentTarget() {
  return k(this).currentTarget;
}, composedPath() {
  const i = k(this).currentTarget;
  return i == null ? [] : [i];
}, get NONE() {
  return 0;
}, get CAPTURING_PHASE() {
  return 1;
}, get AT_TARGET() {
  return 2;
}, get BUBBLING_PHASE() {
  return 3;
}, get eventPhase() {
  return k(this).eventPhase;
}, stopPropagation() {
  const i = k(this);
  i.stopped = true, typeof i.event.stopPropagation == "function" && i.event.stopPropagation();
}, stopImmediatePropagation() {
  const i = k(this);
  i.stopped = true, i.immediateStopped = true, typeof i.event.stopImmediatePropagation == "function" && i.event.stopImmediatePropagation();
}, get bubbles() {
  return !!k(this).event.bubbles;
}, get cancelable() {
  return !!k(this).event.cancelable;
}, preventDefault() {
  xo(k(this));
}, get defaultPrevented() {
  return k(this).canceled;
}, get composed() {
  return !!k(this).event.composed;
}, get timeStamp() {
  return k(this).timeStamp;
}, get srcElement() {
  return k(this).eventTarget;
}, get cancelBubble() {
  return k(this).stopped;
}, set cancelBubble(i) {
  if (!i) return;
  const o2 = k(this);
  o2.stopped = true, typeof o2.event.cancelBubble == "boolean" && (o2.event.cancelBubble = true);
}, get returnValue() {
  return !k(this).canceled;
}, set returnValue(i) {
  i || xo(k(this));
}, initEvent() {
} }, Object.defineProperty(Je.prototype, "constructor", { value: Je, configurable: true, writable: true });
function No(i) {
  return { get() {
    return k(this).event[i];
  }, set(o2) {
    k(this).event[i] = o2;
  }, configurable: true, enumerable: true };
}
n$1(No, "defineRedirectDescriptor");
function zs(i) {
  return { value() {
    const o2 = k(this).event;
    return o2[i].apply(o2, arguments);
  }, configurable: true, enumerable: true };
}
n$1(zs, "defineCallDescriptor");
function js(i, o2) {
  const a = Object.keys(o2);
  if (a.length === 0) return i;
  function l(u, m) {
    i.call(this, u, m);
  }
  n$1(l, "CustomEvent"), l.prototype = Object.create(i.prototype, { constructor: { value: l, configurable: true, writable: true } });
  for (let u = 0; u < a.length; ++u) {
    const m = a[u];
    if (!(m in i.prototype)) {
      const S = typeof Object.getOwnPropertyDescriptor(o2, m).value == "function";
      Object.defineProperty(l.prototype, m, S ? zs(m) : No(m));
    }
  }
  return l;
}
n$1(js, "defineWrapper");
function Ho(i) {
  if (i == null || i === Object.prototype) return Je;
  let o2 = rn.get(i);
  return o2 == null && (o2 = js(Ho(Object.getPrototypeOf(i)), i), rn.set(i, o2)), o2;
}
n$1(Ho, "getWrapper");
function Ls(i, o2) {
  const a = Ho(Object.getPrototypeOf(o2));
  return new a(i, o2);
}
n$1(Ls, "wrapEvent");
function Ds(i) {
  return k(i).immediateStopped;
}
n$1(Ds, "isStopped");
function $s(i, o2) {
  k(i).eventPhase = o2;
}
n$1($s, "setEventPhase");
function Ms(i, o2) {
  k(i).currentTarget = o2;
}
n$1(Ms, "setCurrentTarget");
function Vo(i, o2) {
  k(i).passiveListener = o2;
}
n$1(Vo, "setPassiveListener");
const Qo = /* @__PURE__ */ new WeakMap(), Yo = 1, Go = 2, tr = 3;
function rr(i) {
  return i !== null && typeof i == "object";
}
n$1(rr, "isObject");
function bt(i) {
  const o2 = Qo.get(i);
  if (o2 == null) throw new TypeError("'this' is expected an EventTarget object, but got another value.");
  return o2;
}
n$1(bt, "getListeners");
function Us(i) {
  return { get() {
    let a = bt(this).get(i);
    for (; a != null; ) {
      if (a.listenerType === tr) return a.listener;
      a = a.next;
    }
    return null;
  }, set(o2) {
    typeof o2 != "function" && !rr(o2) && (o2 = null);
    const a = bt(this);
    let l = null, u = a.get(i);
    for (; u != null; ) u.listenerType === tr ? l !== null ? l.next = u.next : u.next !== null ? a.set(i, u.next) : a.delete(i) : l = u, u = u.next;
    if (o2 !== null) {
      const m = { listener: o2, listenerType: tr, passive: false, once: false, next: null };
      l === null ? a.set(i, m) : l.next = m;
    }
  }, configurable: true, enumerable: true };
}
n$1(Us, "defineEventAttributeDescriptor");
function Zo(i, o2) {
  Object.defineProperty(i, `on${o2}`, Us(o2));
}
n$1(Zo, "defineEventAttribute");
function Ko(i) {
  function o2() {
    pe.call(this);
  }
  n$1(o2, "CustomEventTarget"), o2.prototype = Object.create(pe.prototype, { constructor: { value: o2, configurable: true, writable: true } });
  for (let a = 0; a < i.length; ++a) Zo(o2.prototype, i[a]);
  return o2;
}
n$1(Ko, "defineCustomEventTarget");
function pe() {
  if (this instanceof pe) {
    Qo.set(this, /* @__PURE__ */ new Map());
    return;
  }
  if (arguments.length === 1 && Array.isArray(arguments[0])) return Ko(arguments[0]);
  if (arguments.length > 0) {
    const i = new Array(arguments.length);
    for (let o2 = 0; o2 < arguments.length; ++o2) i[o2] = arguments[o2];
    return Ko(i);
  }
  throw new TypeError("Cannot call a class as a function");
}
n$1(pe, "EventTarget"), pe.prototype = { addEventListener(i, o2, a) {
  if (o2 == null) return;
  if (typeof o2 != "function" && !rr(o2)) throw new TypeError("'listener' should be a function or an object.");
  const l = bt(this), u = rr(a), h2 = (u ? !!a.capture : !!a) ? Yo : Go, S = { listener: o2, listenerType: h2, passive: u && !!a.passive, once: u && !!a.once, next: null };
  let E = l.get(i);
  if (E === void 0) {
    l.set(i, S);
    return;
  }
  let w = null;
  for (; E != null; ) {
    if (E.listener === o2 && E.listenerType === h2) return;
    w = E, E = E.next;
  }
  w.next = S;
}, removeEventListener(i, o2, a) {
  if (o2 == null) return;
  const l = bt(this), m = (rr(a) ? !!a.capture : !!a) ? Yo : Go;
  let h2 = null, S = l.get(i);
  for (; S != null; ) {
    if (S.listener === o2 && S.listenerType === m) {
      h2 !== null ? h2.next = S.next : S.next !== null ? l.set(i, S.next) : l.delete(i);
      return;
    }
    h2 = S, S = S.next;
  }
}, dispatchEvent(i) {
  if (i == null || typeof i.type != "string") throw new TypeError('"event.type" should be a string.');
  const o2 = bt(this), a = i.type;
  let l = o2.get(a);
  if (l == null) return true;
  const u = Ls(this, i);
  let m = null;
  for (; l != null; ) {
    if (l.once ? m !== null ? m.next = l.next : l.next !== null ? o2.set(a, l.next) : o2.delete(a) : m = l, Vo(u, l.passive ? l.listener : null), typeof l.listener == "function") try {
      l.listener.call(this, u);
    } catch (h2) {
      typeof console < "u" && typeof console.error == "function" && console.error(h2);
    }
    else l.listenerType !== tr && typeof l.listener.handleEvent == "function" && l.listener.handleEvent(u);
    if (Ds(u)) break;
    l = l.next;
  }
  return Vo(u, null), $s(u, 0), Ms(u, null), !u.defaultPrevented;
} }, Object.defineProperty(pe.prototype, "constructor", { value: pe, configurable: true, writable: true });
const _nr = class _nr extends pe {
  constructor() {
    throw super(), new TypeError("AbortSignal cannot be constructed directly");
  }
  get aborted() {
    const o2 = or.get(this);
    if (typeof o2 != "boolean") throw new TypeError(`Expected 'this' to be an 'AbortSignal' object, but got ${this === null ? "null" : typeof this}`);
    return o2;
  }
};
n$1(_nr, "AbortSignal");
let nr = _nr;
Zo(nr.prototype, "abort");
function xs() {
  const i = Object.create(nr.prototype);
  return pe.call(i), or.set(i, false), i;
}
n$1(xs, "createAbortSignal");
function Ns(i) {
  or.get(i) === false && (or.set(i, true), i.dispatchEvent({ type: "abort" }));
}
n$1(Ns, "abortSignal");
const or = /* @__PURE__ */ new WeakMap();
Object.defineProperties(nr.prototype, { aborted: { enumerable: true } }), typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol" && Object.defineProperty(nr.prototype, Symbol.toStringTag, { configurable: true, value: "AbortSignal" });
let nn = (_e5 = class {
  constructor() {
    Jo.set(this, xs());
  }
  get signal() {
    return Xo(this);
  }
  abort() {
    Ns(Xo(this));
  }
}, n$1(_e5, "AbortController"), _e5);
const Jo = /* @__PURE__ */ new WeakMap();
function Xo(i) {
  const o2 = Jo.get(i);
  if (o2 == null) throw new TypeError(`Expected 'this' to be an 'AbortController' object, but got ${i === null ? "null" : typeof i}`);
  return o2;
}
n$1(Xo, "getSignal"), Object.defineProperties(nn.prototype, { signal: { enumerable: true }, abort: { enumerable: true } }), typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol" && Object.defineProperty(nn.prototype, Symbol.toStringTag, { configurable: true, value: "AbortController" });
var Hs = Object.defineProperty, Vs = n$1((i, o2) => Hs(i, "name", { value: o2, configurable: true }), "e");
const ei = Mo;
ti();
function ti() {
  var _a2, _b2, _c2, _d2;
  !((_b2 = (_a2 = globalThis.process) == null ? void 0 : _a2.versions) == null ? void 0 : _b2.node) && !((_d2 = (_c2 = globalThis.process) == null ? void 0 : _c2.env) == null ? void 0 : _d2.DISABLE_NODE_FETCH_NATIVE_WARN) && console.warn("[node-fetch-native] Node.js compatible build of `node-fetch-native` is being used in a non-Node.js environment. Please make sure you are using proper export conditions or report this issue to https://github.com/unjs/node-fetch-native. You can set `process.env.DISABLE_NODE_FETCH_NATIVE_WARN` to disable this warning.");
}
n$1(ti, "s"), Vs(ti, "checkNodeEnvironment");
const o = !!((_g = (_f = globalThis.process) == null ? void 0 : _f.env) == null ? void 0 : _g.FORCE_NODE_FETCH), r = !o && globalThis.fetch || ei, n = !o && globalThis.Headers || ae, T = !o && globalThis.AbortController || nn;
const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  const _value = value.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    value[0] === '"' && value.endsWith('"') && !value.includes("\\")
  ) {
    return _value.slice(1, -1);
  }
  if (_value.length <= 9) {
    const _lval = _value.toLowerCase();
    if (_lval === "true") {
      return true;
    }
    if (_lval === "false") {
      return false;
    }
    if (_lval === "undefined") {
      return void 0;
    }
    if (_lval === "null") {
      return null;
    }
    if (_lval === "nan") {
      return Number.NaN;
    }
    if (_lval === "infinity") {
      return Number.POSITIVE_INFINITY;
    }
    if (_lval === "-infinity") {
      return Number.NEGATIVE_INFINITY;
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}
const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^").replace(SLASH_RE, "%2F");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function decode$1(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodeQueryKey(text) {
  return decode$1(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode$1(text.replace(PLUS_RE, " "));
}
function parseQuery(parametersString = "") {
  const object = {};
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decodeQueryKey(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map((_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k2) => query[k2] !== void 0).map((k2) => encodeQueryItem(k2, query[k2])).filter(Boolean).join("&");
}
const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
const PROTOCOL_SCRIPT_RE = /^[\s\0]*(blob|data|javascript|vbscript):$/i;
const TRAILING_SLASH_RE = /\/$|\/\?|\/#/;
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
function isScriptProtocol(protocol) {
  return !!protocol && PROTOCOL_SCRIPT_RE.test(protocol);
}
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex >= 0) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
  }
  const [s0, ...s] = path.split("?");
  const cleanPath = s0.endsWith("/") ? s0.slice(0, -1) : s0;
  return (cleanPath || "/") + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex >= 0) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
    if (!path) {
      return fragment;
    }
  }
  const [s0, ...s] = path.split("?");
  return s0 + "/" + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}
function isEqual$1(a, b, options = {}) {
  if (!options.trailingSlash) {
    a = withTrailingSlash(a);
    b = withTrailingSlash(b);
  }
  if (!options.leadingSlash) {
    a = withLeadingSlash(a);
    b = withLeadingSlash(b);
  }
  if (!options.encoding) {
    a = decode$1(a);
    b = decode$1(b);
  }
  return a === b;
}
const protocolRelative = Symbol.for("ufo:protocolRelative");
function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  if (protocol === "file:") {
    path = path.replace(/\/(?=[A-Za-z]:)/, "");
  }
  const { pathname, search, hash: hash2 } = parsePath(path);
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash: hash2,
    [protocolRelative]: !protocol
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash2 = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash: hash2
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash2 = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol || parsed[protocolRelative] ? (parsed.protocol || "") + "//" : "";
  return proto + auth + host + pathname + search + hash2;
}
class FetchError extends Error {
  constructor(message, opts) {
    super(message, opts);
    this.name = "FetchError";
    if ((opts == null ? void 0 : opts.cause) && !this.cause) {
      this.cause = opts.cause;
    }
  }
}
function createFetchError(ctx) {
  var _a2, _b2, _c2, _d2, _e6;
  const errorMessage = ((_a2 = ctx.error) == null ? void 0 : _a2.message) || ((_b2 = ctx.error) == null ? void 0 : _b2.toString()) || "";
  const method = ((_c2 = ctx.request) == null ? void 0 : _c2.method) || ((_d2 = ctx.options) == null ? void 0 : _d2.method) || "GET";
  const url = ((_e6 = ctx.request) == null ? void 0 : _e6.url) || String(ctx.request) || "/";
  const requestStr = `[${method}] ${JSON.stringify(url)}`;
  const statusStr = ctx.response ? `${ctx.response.status} ${ctx.response.statusText}` : "<no response>";
  const message = `${requestStr}: ${statusStr}${errorMessage ? ` ${errorMessage}` : ""}`;
  const fetchError = new FetchError(
    message,
    ctx.error ? { cause: ctx.error } : void 0
  );
  for (const key of ["request", "options", "response"]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx[key];
      }
    });
  }
  for (const [key, refKey] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"]
  ]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx.response && ctx.response[refKey];
      }
    });
  }
  return fetchError;
}
const payloadMethods = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(value) {
  if (value === void 0) {
    return false;
  }
  const t2 = typeof value;
  if (t2 === "string" || t2 === "number" || t2 === "boolean" || t2 === null) {
    return true;
  }
  if (t2 !== "object") {
    return false;
  }
  if (Array.isArray(value)) {
    return true;
  }
  if (value.buffer) {
    return false;
  }
  return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift() || "";
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
function resolveFetchOptions(request, input, defaults2, Headers2) {
  const headers = mergeHeaders(
    (input == null ? void 0 : input.headers) ?? (request == null ? void 0 : request.headers),
    defaults2 == null ? void 0 : defaults2.headers,
    Headers2
  );
  let query;
  if ((defaults2 == null ? void 0 : defaults2.query) || (defaults2 == null ? void 0 : defaults2.params) || (input == null ? void 0 : input.params) || (input == null ? void 0 : input.query)) {
    query = {
      ...defaults2 == null ? void 0 : defaults2.params,
      ...defaults2 == null ? void 0 : defaults2.query,
      ...input == null ? void 0 : input.params,
      ...input == null ? void 0 : input.query
    };
  }
  return {
    ...defaults2,
    ...input,
    query,
    params: query,
    headers
  };
}
function mergeHeaders(input, defaults2, Headers2) {
  if (!defaults2) {
    return new Headers2(input);
  }
  const headers = new Headers2(defaults2);
  if (input) {
    for (const [key, value] of Symbol.iterator in input || Array.isArray(input) ? input : new Headers2(input)) {
      headers.set(key, value);
    }
  }
  return headers;
}
async function callHooks(context, hooks) {
  if (hooks) {
    if (Array.isArray(hooks)) {
      for (const hook of hooks) {
        await hook(context);
      }
    } else {
      await hooks(context);
    }
  }
}
const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early (Experimental)
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  // Gateway Timeout
]);
const nullBodyResponses = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createFetch(globalOptions = {}) {
  const {
    fetch: fetch2 = globalThis.fetch,
    Headers: Headers2 = globalThis.Headers,
    AbortController: AbortController2 = globalThis.AbortController
  } = globalOptions;
  async function onError(context) {
    const isAbort = context.error && context.error.name === "AbortError" && !context.options.timeout || false;
    if (context.options.retry !== false && !isAbort) {
      let retries;
      if (typeof context.options.retry === "number") {
        retries = context.options.retry;
      } else {
        retries = isPayloadMethod(context.options.method) ? 0 : 1;
      }
      const responseCode = context.response && context.response.status || 500;
      if (retries > 0 && (Array.isArray(context.options.retryStatusCodes) ? context.options.retryStatusCodes.includes(responseCode) : retryStatusCodes.has(responseCode))) {
        const retryDelay = typeof context.options.retryDelay === "function" ? context.options.retryDelay(context) : context.options.retryDelay || 0;
        if (retryDelay > 0) {
          await new Promise((resolve2) => setTimeout(resolve2, retryDelay));
        }
        return $fetchRaw(context.request, {
          ...context.options,
          retry: retries - 1
        });
      }
    }
    const error = createFetchError(context);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, $fetchRaw);
    }
    throw error;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _options = {}) {
    const context = {
      request: _request,
      options: resolveFetchOptions(
        _request,
        _options,
        globalOptions.defaults,
        Headers2
      ),
      response: void 0,
      error: void 0
    };
    if (context.options.method) {
      context.options.method = context.options.method.toUpperCase();
    }
    if (context.options.onRequest) {
      await callHooks(context, context.options.onRequest);
    }
    if (typeof context.request === "string") {
      if (context.options.baseURL) {
        context.request = withBase(context.request, context.options.baseURL);
      }
      if (context.options.query) {
        context.request = withQuery(context.request, context.options.query);
        delete context.options.query;
      }
      if ("query" in context.options) {
        delete context.options.query;
      }
      if ("params" in context.options) {
        delete context.options.params;
      }
    }
    if (context.options.body && isPayloadMethod(context.options.method)) {
      if (isJSONSerializable(context.options.body)) {
        context.options.body = typeof context.options.body === "string" ? context.options.body : JSON.stringify(context.options.body);
        context.options.headers = new Headers2(context.options.headers || {});
        if (!context.options.headers.has("content-type")) {
          context.options.headers.set("content-type", "application/json");
        }
        if (!context.options.headers.has("accept")) {
          context.options.headers.set("accept", "application/json");
        }
      } else if (
        // ReadableStream Body
        "pipeTo" in context.options.body && typeof context.options.body.pipeTo === "function" || // Node.js Stream Body
        typeof context.options.body.pipe === "function"
      ) {
        if (!("duplex" in context.options)) {
          context.options.duplex = "half";
        }
      }
    }
    let abortTimeout;
    if (!context.options.signal && context.options.timeout) {
      const controller = new AbortController2();
      abortTimeout = setTimeout(() => {
        const error = new Error(
          "[TimeoutError]: The operation was aborted due to timeout"
        );
        error.name = "TimeoutError";
        error.code = 23;
        controller.abort(error);
      }, context.options.timeout);
      context.options.signal = controller.signal;
    }
    try {
      context.response = await fetch2(
        context.request,
        context.options
      );
    } catch (error) {
      context.error = error;
      if (context.options.onRequestError) {
        await callHooks(
          context,
          context.options.onRequestError
        );
      }
      return await onError(context);
    } finally {
      if (abortTimeout) {
        clearTimeout(abortTimeout);
      }
    }
    const hasBody = (context.response.body || // https://github.com/unjs/ofetch/issues/324
    // https://github.com/unjs/ofetch/issues/294
    // https://github.com/JakeChampion/fetch/issues/1454
    context.response._bodyInit) && !nullBodyResponses.has(context.response.status) && context.options.method !== "HEAD";
    if (hasBody) {
      const responseType = (context.options.parseResponse ? "json" : context.options.responseType) || detectResponseType(context.response.headers.get("content-type") || "");
      switch (responseType) {
        case "json": {
          const data = await context.response.text();
          const parseFunction = context.options.parseResponse || destr;
          context.response._data = parseFunction(data);
          break;
        }
        case "stream": {
          context.response._data = context.response.body || context.response._bodyInit;
          break;
        }
        default: {
          context.response._data = await context.response[responseType]();
        }
      }
    }
    if (context.options.onResponse) {
      await callHooks(
        context,
        context.options.onResponse
      );
    }
    if (!context.options.ignoreResponseError && context.response.status >= 400 && context.response.status < 600) {
      if (context.options.onResponseError) {
        await callHooks(
          context,
          context.options.onResponseError
        );
      }
      return await onError(context);
    }
    return context.response;
  };
  const $fetch2 = async function $fetch22(request, options) {
    const r2 = await $fetchRaw(request, options);
    return r2._data;
  };
  $fetch2.raw = $fetchRaw;
  $fetch2.native = (...args) => fetch2(...args);
  $fetch2.create = (defaultOptions = {}, customGlobalOptions = {}) => createFetch({
    ...globalOptions,
    ...customGlobalOptions,
    defaults: {
      ...globalOptions.defaults,
      ...customGlobalOptions.defaults,
      ...defaultOptions
    }
  });
  return $fetch2;
}
function createNodeFetch() {
  const useKeepAlive = JSON.parse(process.env.FETCH_KEEP_ALIVE || "false");
  if (!useKeepAlive) {
    return r;
  }
  const agentOptions = { keepAlive: true };
  const httpAgent = new ft.Agent(agentOptions);
  const httpsAgent = new Qa.Agent(agentOptions);
  const nodeFetchOptions = {
    agent(parsedURL) {
      return parsedURL.protocol === "http:" ? httpAgent : httpsAgent;
    }
  };
  return function nodeFetchWithKeepAlive(input, init) {
    return r(input, { ...nodeFetchOptions, ...init });
  };
}
const fetch = globalThis.fetch ? (...args) => globalThis.fetch(...args) : createNodeFetch();
const Headers = globalThis.Headers || n;
const AbortController$1 = globalThis.AbortController || T;
const ofetch = createFetch({ fetch, Headers, AbortController: AbortController$1 });
const $fetch = ofetch;
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
const appLayoutTransition = false;
const appPageTransition = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const asyncDataDefaults = { "value": null, "errorValue": null, "deep": true };
const fetchDefaults = {};
const appId = "nuxt-app";
function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  var _a2;
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.15.4";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...((_a2 = options.ssrContext) == null ? void 0 : _a2.payload) || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter$1(nuxtApp, $name, value);
    defineGetter$1(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter$1(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter$1(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a2, _b2, _c2, _d2;
  const resolvedPlugins = [];
  const unresolvedPlugins = [];
  const parallels = [];
  const errors = [];
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    var _a3;
    const unresolvedPluginsForThisPlugin = ((_a3 = plugin2.dependsOn) == null ? void 0 : _a3.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.includes(name))) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.push(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      });
      if (plugin2.parallel) {
        parallels.push(promise.catch((e) => errors.push(e)));
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext) && ((_b2 = plugin2.env) == null ? void 0 : _b2.islands) === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin2);
  }
  for (const plugin2 of plugins2) {
    if (((_c2 = nuxtApp.ssrContext) == null ? void 0 : _c2.islandContext) && ((_d2 = plugin2.env) == null ? void 0 : _d2.islands) === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (errors.length) {
    throw errors[0];
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(id) {
  var _a2;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a2 = getCurrentInstance()) == null ? void 0 : _a2.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || getNuxtAppCtx(id).tryUse();
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter$1(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a2;
  return (_a2 = useNuxtApp()) == null ? void 0 : _a2.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const addRouteMiddleware = (name, middleware, options = {}) => {
  const nuxtApp = useNuxtApp();
  const global2 = options.global || false;
  const mw = middleware;
  if (!mw) {
    console.warn("[nuxt] No route middleware passed to `addRouteMiddleware`.", name);
    return;
  }
  if (global2) {
    nuxtApp._middleware.global.push(mw);
  } else {
    nuxtApp._middleware.named[name] = mw;
  }
};
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const URL_QUOTE_RE = /"/g;
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject$1(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = (options == null ? void 0 : options.external) || isExternalHost;
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(URL_QUOTE_RE, "%22");
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? void 0 : options.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
const setPageLayout = (layout) => {
  const nuxtApp = useNuxtApp();
  {
    nuxtApp.payload.state._layout = layout;
  }
  const inMiddleware = isProcessingMiddleware();
  {
    const unsubscribe = useRouter().beforeResolve((to) => {
      to.meta.layout = layout;
      unsubscribe();
    });
  }
  if (!inMiddleware) {
    useRoute().meta.layout = layout;
  }
};
function resolveRouteObject$1(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const nuxtApp = useNuxtApp();
    const error2 = useError();
    if (false) ;
    error2.value = error2.value || nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
version[0] === "3";
function resolveUnref$1(r2) {
  return typeof r2 === "function" ? r2() : unref(r2);
}
function resolveUnrefHeadInput(ref2) {
  if (ref2 instanceof Promise || ref2 instanceof Date || ref2 instanceof RegExp)
    return ref2;
  const root = resolveUnref$1(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r2) => resolveUnrefHeadInput(r2));
  if (typeof root === "object") {
    const resolved = {};
    for (const k2 in root) {
      if (!Object.prototype.hasOwnProperty.call(root, k2)) {
        continue;
      }
      if (k2 === "titleTemplate" || k2[0] === "o" && k2[1] === "n") {
        resolved[k2] = unref(root[k2]);
        continue;
      }
      resolved[k2] = resolveUnrefHeadInput(root[k2]);
    }
    return resolved;
  }
  return root;
}
const headSymbol = "usehead";
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey$1 = "__unhead_injection_handler__";
function setHeadInjectionHandler(handler) {
  _global[globalKey$1] = handler;
}
function injectHead() {
  if (globalKey$1 in _global) {
    return _global[globalKey$1]();
  }
  const head = inject(headSymbol);
  return head || getActiveHead();
}
[CapoPlugin({ track: true })];
const unhead_rqQYbVY9CT = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    setHeadInjectionHandler(
      // need a fresh instance of the nuxt app to avoid parallel requests interfering with each other
      () => useNuxtApp().vueApp._context.provides.usehead
    );
    nuxtApp.vueApp.use(head);
  }
});
function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r2 = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r2;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      return contexts[key];
    }
  };
}
const _globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
_globalThis$1[globalKey] || (_globalThis$1[globalKey] = createNamespace());
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis$1[asyncHandlersKey] || (_globalThis$1[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error) => {
      restore();
      throw error;
    });
  }
  return [awaitable, restore];
}
const ROUTE_KEY_PARENTHESES_RE$1 = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE$1 = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE$1 = /:\w+/g;
const interpolatePath = (route, match) => {
  return match.path.replace(ROUTE_KEY_PARENTHESES_RE$1, "$1").replace(ROUTE_KEY_SYMBOLS_RE$1, "$1").replace(ROUTE_KEY_NORMAL_RE$1, (r2) => {
    var _a2;
    return ((_a2 = route.params[r2.slice(1)]) == null ? void 0 : _a2.toString()) || "";
  });
};
const generateRouteKey$1 = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a2;
    return ((_a2 = m.components) == null ? void 0 : _a2.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? void 0 : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
function isPlainObject$1(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}
function _defu(baseObject, defaults2, namespace = ".", merger) {
  if (!isPlainObject$1(defaults2)) {
    return _defu(baseObject, {}, namespace);
  }
  const object = Object.assign({}, defaults2);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject$1(value) && isPlainObject$1(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString());
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, ""), {})
  );
}
const defu = createDefu();
async function getRouteRules(arg) {
  const path = typeof arg === "string" ? arg : arg.path;
  {
    useNuxtApp().ssrContext._preloadManifest = true;
    const _routeRulesMatcher = toRouteMatcher(
      createRouter$1({ routes: (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules })
    );
    return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
  }
}
function handleHotUpdate(_router, _generateRoutes) {
}
const _routes = [
  {
    name: "lang-404___zh___default",
    path: "/:lang()/404",
    component: () => import('./404-CI30Dv4w.mjs')
  },
  {
    name: "lang-404___zh",
    path: "/zh/:lang()/404",
    component: () => import('./404-CI30Dv4w.mjs')
  },
  {
    name: "lang-404___zht",
    path: "/zht/:lang()/404",
    component: () => import('./404-CI30Dv4w.mjs')
  },
  {
    name: "lang-download___zh___default",
    path: "/:lang()/download",
    component: () => import('./download-xuq-67ag.mjs')
  },
  {
    name: "lang-download___zh",
    path: "/zh/:lang()/download",
    component: () => import('./download-xuq-67ag.mjs')
  },
  {
    name: "lang-download___zht",
    path: "/zht/:lang()/download",
    component: () => import('./download-xuq-67ag.mjs')
  },
  {
    name: "lang-equipment___zh___default",
    path: "/:lang()/equipment",
    component: () => import('./equipment-BAdo3BEI.mjs')
  },
  {
    name: "lang-equipment___zh",
    path: "/zh/:lang()/equipment",
    component: () => import('./equipment-BAdo3BEI.mjs')
  },
  {
    name: "lang-equipment___zht",
    path: "/zht/:lang()/equipment",
    component: () => import('./equipment-BAdo3BEI.mjs')
  },
  {
    name: "lang___zh___default",
    path: "/:lang()",
    component: () => import('./index-DguTmNu6.mjs')
  },
  {
    name: "lang___zh",
    path: "/zh/:lang()",
    component: () => import('./index-DguTmNu6.mjs')
  },
  {
    name: "lang___zht",
    path: "/zht/:lang()",
    component: () => import('./index-DguTmNu6.mjs')
  },
  {
    name: "lang-moblie-info-id___zh___default",
    path: "/:lang()/moblie/info-:id()",
    component: () => import('./info-_id_-BbiuQqJx.mjs')
  },
  {
    name: "lang-moblie-info-id___zh",
    path: "/zh/:lang()/moblie/info-:id()",
    component: () => import('./info-_id_-BbiuQqJx.mjs')
  },
  {
    name: "lang-moblie-info-id___zht",
    path: "/zht/:lang()/moblie/info-:id()",
    component: () => import('./info-_id_-BbiuQqJx.mjs')
  },
  {
    name: "lang-post-id.html___zh___default",
    path: "/:lang()/post/:id().html",
    component: () => import('./_id_.html-CaFNh9yE.mjs')
  },
  {
    name: "lang-post-id.html___zh",
    path: "/zh/:lang()/post/:id().html",
    component: () => import('./_id_.html-CaFNh9yE.mjs')
  },
  {
    name: "lang-post-id.html___zht",
    path: "/zht/:lang()/post/:id().html",
    component: () => import('./_id_.html-CaFNh9yE.mjs')
  },
  {
    name: "lang-search___zh___default",
    path: "/:lang()/search",
    component: () => import('./search-CGVfkTHl.mjs')
  },
  {
    name: "lang-search___zh",
    path: "/zh/:lang()/search",
    component: () => import('./search-CGVfkTHl.mjs')
  },
  {
    name: "lang-search___zht",
    path: "/zht/:lang()/search",
    component: () => import('./search-CGVfkTHl.mjs')
  },
  {
    name: "lang-tag-keyword-page___zh___default",
    path: "/:lang()/tag/:keyword()/:page()",
    component: () => import('./_page_-BuWVq1Pz.mjs')
  },
  {
    name: "lang-tag-keyword-page___zh",
    path: "/zh/:lang()/tag/:keyword()/:page()",
    component: () => import('./_page_-BuWVq1Pz.mjs')
  },
  {
    name: "lang-tag-keyword-page___zht",
    path: "/zht/:lang()/tag/:keyword()/:page()",
    component: () => import('./_page_-BuWVq1Pz.mjs')
  },
  {
    name: "lang-tag-keyword___zh___default",
    path: "/:lang()/tag/:keyword()",
    component: () => import('./index-B5_Pj5PX.mjs')
  },
  {
    name: "lang-tag-keyword___zh",
    path: "/zh/:lang()/tag/:keyword()",
    component: () => import('./index-B5_Pj5PX.mjs')
  },
  {
    name: "lang-tag-keyword___zht",
    path: "/zht/:lang()/tag/:keyword()",
    component: () => import('./index-B5_Pj5PX.mjs')
  },
  {
    name: "404___zh___default",
    path: "/404",
    component: () => import('./404-DQli9DuG.mjs')
  },
  {
    name: "404___zh",
    path: "/zh/404",
    component: () => import('./404-DQli9DuG.mjs')
  },
  {
    name: "404___zht",
    path: "/zht/404",
    component: () => import('./404-DQli9DuG.mjs')
  },
  {
    name: "download___zh___default",
    path: "/download",
    component: () => import('./download-RlFGSm92.mjs')
  },
  {
    name: "download___zh",
    path: "/zh/download",
    component: () => import('./download-RlFGSm92.mjs')
  },
  {
    name: "download___zht",
    path: "/zht/download",
    component: () => import('./download-RlFGSm92.mjs')
  },
  {
    name: "equipment___zh___default",
    path: "/equipment",
    component: () => import('./equipment-CzB2n1xy.mjs')
  },
  {
    name: "equipment___zh",
    path: "/zh/equipment",
    component: () => import('./equipment-CzB2n1xy.mjs')
  },
  {
    name: "equipment___zht",
    path: "/zht/equipment",
    component: () => import('./equipment-CzB2n1xy.mjs')
  },
  {
    name: "home___zh___default",
    path: "/home",
    component: () => import('./home-BCtlESJ9.mjs')
  },
  {
    name: "home___zh",
    path: "/zh/home",
    component: () => import('./home-BCtlESJ9.mjs')
  },
  {
    name: "home___zht",
    path: "/zht/home",
    component: () => import('./home-BCtlESJ9.mjs')
  },
  {
    name: "index___zh___default",
    path: "/",
    component: () => import('./index-CNSdSEWM.mjs')
  },
  {
    name: "index___zh",
    path: "/zh",
    component: () => import('./index-CNSdSEWM.mjs')
  },
  {
    name: "index___zht",
    path: "/zht",
    component: () => import('./index-CNSdSEWM.mjs')
  },
  {
    name: "moblie-info-id___zh___default",
    path: "/moblie/info-:id()",
    component: () => import('./info-_id_-pnjJ9t1W.mjs')
  },
  {
    name: "moblie-info-id___zh",
    path: "/zh/moblie/info-:id()",
    component: () => import('./info-_id_-pnjJ9t1W.mjs')
  },
  {
    name: "moblie-info-id___zht",
    path: "/zht/moblie/info-:id()",
    component: () => import('./info-_id_-pnjJ9t1W.mjs')
  },
  {
    name: "post-id.html___zh___default",
    path: "/post/:id().html",
    component: () => import('./_id_.html-QvODcWUj.mjs')
  },
  {
    name: "post-id.html___zh",
    path: "/zh/post/:id().html",
    component: () => import('./_id_.html-QvODcWUj.mjs')
  },
  {
    name: "post-id.html___zht",
    path: "/zht/post/:id().html",
    component: () => import('./_id_.html-QvODcWUj.mjs')
  },
  {
    name: "search___zh___default",
    path: "/search",
    component: () => import('./search-lq5pfR1c.mjs')
  },
  {
    name: "search___zh",
    path: "/zh/search",
    component: () => import('./search-lq5pfR1c.mjs')
  },
  {
    name: "search___zht",
    path: "/zht/search",
    component: () => import('./search-lq5pfR1c.mjs')
  },
  {
    name: "tag-keyword-page___zh___default",
    path: "/tag/:keyword()/:page()",
    component: () => import('./_page_-VO3MRiMO.mjs')
  },
  {
    name: "tag-keyword-page___zh",
    path: "/zh/tag/:keyword()/:page()",
    component: () => import('./_page_-VO3MRiMO.mjs')
  },
  {
    name: "tag-keyword-page___zht",
    path: "/zht/tag/:keyword()/:page()",
    component: () => import('./_page_-VO3MRiMO.mjs')
  },
  {
    name: "tag-keyword___zh___default",
    path: "/tag/:keyword()",
    component: () => import('./index-nuoRMU_l.mjs')
  },
  {
    name: "tag-keyword___zh",
    path: "/zh/tag/:keyword()",
    component: () => import('./index-nuoRMU_l.mjs')
  },
  {
    name: "tag-keyword___zht",
    path: "/zht/tag/:keyword()",
    component: () => import('./index-nuoRMU_l.mjs')
  }
];
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var shared_cjs_prod = {};
var hasRequiredShared_cjs_prod;
function requireShared_cjs_prod() {
  if (hasRequiredShared_cjs_prod) return shared_cjs_prod;
  hasRequiredShared_cjs_prod = 1;
  /**
  * @vue/shared v3.5.13
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **/
  Object.defineProperty(shared_cjs_prod, "__esModule", { value: true });
  /*! #__NO_SIDE_EFFECTS__ */
  // @__NO_SIDE_EFFECTS__
  function makeMap(str) {
    const map = /* @__PURE__ */ Object.create(null);
    for (const key of str.split(",")) map[key] = 1;
    return (val) => val in map;
  }
  const EMPTY_OBJ = {};
  const EMPTY_ARR = [];
  const NOOP = () => {
  };
  const NO = () => false;
  const isOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // uppercase letter
  (key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
  const isModelListener = (key) => key.startsWith("onUpdate:");
  const extend = Object.assign;
  const remove = (arr, el) => {
    const i = arr.indexOf(el);
    if (i > -1) {
      arr.splice(i, 1);
    }
  };
  const hasOwnProperty2 = Object.prototype.hasOwnProperty;
  const hasOwn2 = (val, key) => hasOwnProperty2.call(val, key);
  const isArray2 = Array.isArray;
  const isMap = (val) => toTypeString2(val) === "[object Map]";
  const isSet = (val) => toTypeString2(val) === "[object Set]";
  const isDate2 = (val) => toTypeString2(val) === "[object Date]";
  const isRegExp2 = (val) => toTypeString2(val) === "[object RegExp]";
  const isFunction2 = (val) => typeof val === "function";
  const isString2 = (val) => typeof val === "string";
  const isSymbol = (val) => typeof val === "symbol";
  const isObject2 = (val) => val !== null && typeof val === "object";
  const isPromise2 = (val) => {
    return (isObject2(val) || isFunction2(val)) && isFunction2(val.then) && isFunction2(val.catch);
  };
  const objectToString2 = Object.prototype.toString;
  const toTypeString2 = (value) => objectToString2.call(value);
  const toRawType = (value) => {
    return toTypeString2(value).slice(8, -1);
  };
  const isPlainObject2 = (val) => toTypeString2(val) === "[object Object]";
  const isIntegerKey = (key) => isString2(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
  const isReservedProp = /* @__PURE__ */ makeMap(
    // the leading comma is intentional so empty string "" is also included
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  );
  const isBuiltInDirective = /* @__PURE__ */ makeMap(
    "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
  );
  const cacheStringFunction = (fn) => {
    const cache2 = /* @__PURE__ */ Object.create(null);
    return (str) => {
      const hit = cache2[str];
      return hit || (cache2[str] = fn(str));
    };
  };
  const camelizeRE = /-(\w)/g;
  const camelize = cacheStringFunction(
    (str) => {
      return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
    }
  );
  const hyphenateRE = /\B([A-Z])/g;
  const hyphenate = cacheStringFunction(
    (str) => str.replace(hyphenateRE, "-$1").toLowerCase()
  );
  const capitalize2 = cacheStringFunction((str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
  const toHandlerKey = cacheStringFunction(
    (str) => {
      const s = str ? `on${capitalize2(str)}` : ``;
      return s;
    }
  );
  const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
  const invokeArrayFns = (fns, ...arg) => {
    for (let i = 0; i < fns.length; i++) {
      fns[i](...arg);
    }
  };
  const def = (obj, key, value, writable = false) => {
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: false,
      writable,
      value
    });
  };
  const looseToNumber = (val) => {
    const n2 = parseFloat(val);
    return isNaN(n2) ? val : n2;
  };
  const toNumber = (val) => {
    const n2 = isString2(val) ? Number(val) : NaN;
    return isNaN(n2) ? val : n2;
  };
  let _globalThis2;
  const getGlobalThis2 = () => {
    return _globalThis2 || (_globalThis2 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof commonjsGlobal !== "undefined" ? commonjsGlobal : {});
  };
  const identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
  function genPropsAccessExp(name) {
    return identRE.test(name) ? `__props.${name}` : `__props[${JSON.stringify(name)}]`;
  }
  function genCacheKey(source, options) {
    return source + JSON.stringify(
      options,
      (_, val) => typeof val === "function" ? val.toString() : val
    );
  }
  const PatchFlags = {
    "TEXT": 1,
    "1": "TEXT",
    "CLASS": 2,
    "2": "CLASS",
    "STYLE": 4,
    "4": "STYLE",
    "PROPS": 8,
    "8": "PROPS",
    "FULL_PROPS": 16,
    "16": "FULL_PROPS",
    "NEED_HYDRATION": 32,
    "32": "NEED_HYDRATION",
    "STABLE_FRAGMENT": 64,
    "64": "STABLE_FRAGMENT",
    "KEYED_FRAGMENT": 128,
    "128": "KEYED_FRAGMENT",
    "UNKEYED_FRAGMENT": 256,
    "256": "UNKEYED_FRAGMENT",
    "NEED_PATCH": 512,
    "512": "NEED_PATCH",
    "DYNAMIC_SLOTS": 1024,
    "1024": "DYNAMIC_SLOTS",
    "DEV_ROOT_FRAGMENT": 2048,
    "2048": "DEV_ROOT_FRAGMENT",
    "CACHED": -1,
    "-1": "CACHED",
    "BAIL": -2,
    "-2": "BAIL"
  };
  const PatchFlagNames = {
    [1]: `TEXT`,
    [2]: `CLASS`,
    [4]: `STYLE`,
    [8]: `PROPS`,
    [16]: `FULL_PROPS`,
    [32]: `NEED_HYDRATION`,
    [64]: `STABLE_FRAGMENT`,
    [128]: `KEYED_FRAGMENT`,
    [256]: `UNKEYED_FRAGMENT`,
    [512]: `NEED_PATCH`,
    [1024]: `DYNAMIC_SLOTS`,
    [2048]: `DEV_ROOT_FRAGMENT`,
    [-1]: `HOISTED`,
    [-2]: `BAIL`
  };
  const ShapeFlags = {
    "ELEMENT": 1,
    "1": "ELEMENT",
    "FUNCTIONAL_COMPONENT": 2,
    "2": "FUNCTIONAL_COMPONENT",
    "STATEFUL_COMPONENT": 4,
    "4": "STATEFUL_COMPONENT",
    "TEXT_CHILDREN": 8,
    "8": "TEXT_CHILDREN",
    "ARRAY_CHILDREN": 16,
    "16": "ARRAY_CHILDREN",
    "SLOTS_CHILDREN": 32,
    "32": "SLOTS_CHILDREN",
    "TELEPORT": 64,
    "64": "TELEPORT",
    "SUSPENSE": 128,
    "128": "SUSPENSE",
    "COMPONENT_SHOULD_KEEP_ALIVE": 256,
    "256": "COMPONENT_SHOULD_KEEP_ALIVE",
    "COMPONENT_KEPT_ALIVE": 512,
    "512": "COMPONENT_KEPT_ALIVE",
    "COMPONENT": 6,
    "6": "COMPONENT"
  };
  const SlotFlags = {
    "STABLE": 1,
    "1": "STABLE",
    "DYNAMIC": 2,
    "2": "DYNAMIC",
    "FORWARDED": 3,
    "3": "FORWARDED"
  };
  const slotFlagsText = {
    [1]: "STABLE",
    [2]: "DYNAMIC",
    [3]: "FORWARDED"
  };
  const GLOBALS_ALLOWED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol";
  const isGloballyAllowed = /* @__PURE__ */ makeMap(GLOBALS_ALLOWED);
  const isGloballyWhitelisted = isGloballyAllowed;
  const range = 2;
  function generateCodeFrame2(source, start = 0, end = source.length) {
    start = Math.max(0, Math.min(start, source.length));
    end = Math.max(0, Math.min(end, source.length));
    if (start > end) return "";
    let lines = source.split(/(\r?\n)/);
    const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
    lines = lines.filter((_, idx) => idx % 2 === 0);
    let count = 0;
    const res = [];
    for (let i = 0; i < lines.length; i++) {
      count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
      if (count >= start) {
        for (let j2 = i - range; j2 <= i + range || end > count; j2++) {
          if (j2 < 0 || j2 >= lines.length) continue;
          const line = j2 + 1;
          res.push(
            `${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j2]}`
          );
          const lineLength = lines[j2].length;
          const newLineSeqLength = newlineSequences[j2] && newlineSequences[j2].length || 0;
          if (j2 === i) {
            const pad = start - (count - (lineLength + newLineSeqLength));
            const length = Math.max(
              1,
              end > count ? lineLength - pad : end - start
            );
            res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
          } else if (j2 > i) {
            if (end > count) {
              const length = Math.max(Math.min(end - count, lineLength), 1);
              res.push(`   |  ` + "^".repeat(length));
            }
            count += lineLength + newLineSeqLength;
          }
        }
        break;
      }
    }
    return res.join("\n");
  }
  function normalizeStyle(value) {
    if (isArray2(value)) {
      const res = {};
      for (let i = 0; i < value.length; i++) {
        const item = value[i];
        const normalized = isString2(item) ? parseStringStyle(item) : normalizeStyle(item);
        if (normalized) {
          for (const key in normalized) {
            res[key] = normalized[key];
          }
        }
      }
      return res;
    } else if (isString2(value) || isObject2(value)) {
      return value;
    }
  }
  const listDelimiterRE = /;(?![^(]*\))/g;
  const propertyDelimiterRE = /:([^]+)/;
  const styleCommentRE = /\/\*[^]*?\*\//g;
  function parseStringStyle(cssText) {
    const ret = {};
    cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
      if (item) {
        const tmp = item.split(propertyDelimiterRE);
        tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return ret;
  }
  function stringifyStyle(styles) {
    if (!styles) return "";
    if (isString2(styles)) return styles;
    let ret = "";
    for (const key in styles) {
      const value = styles[key];
      if (isString2(value) || typeof value === "number") {
        const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
        ret += `${normalizedKey}:${value};`;
      }
    }
    return ret;
  }
  function normalizeClass(value) {
    let res = "";
    if (isString2(value)) {
      res = value;
    } else if (isArray2(value)) {
      for (let i = 0; i < value.length; i++) {
        const normalized = normalizeClass(value[i]);
        if (normalized) {
          res += normalized + " ";
        }
      }
    } else if (isObject2(value)) {
      for (const name in value) {
        if (value[name]) {
          res += name + " ";
        }
      }
    }
    return res.trim();
  }
  function normalizeProps(props) {
    if (!props) return null;
    let { class: klass, style } = props;
    if (klass && !isString2(klass)) {
      props.class = normalizeClass(klass);
    }
    if (style) {
      props.style = normalizeStyle(style);
    }
    return props;
  }
  const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
  const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
  const MATH_TAGS = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics";
  const VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
  const isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
  const isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
  const isMathMLTag = /* @__PURE__ */ makeMap(MATH_TAGS);
  const isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
  const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
  const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
  const isBooleanAttr = /* @__PURE__ */ makeMap(
    specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`
  );
  function includeBooleanAttr(value) {
    return !!value || value === "";
  }
  const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
  const attrValidationCache = {};
  function isSSRSafeAttrName(name) {
    if (attrValidationCache.hasOwnProperty(name)) {
      return attrValidationCache[name];
    }
    const isUnsafe = unsafeAttrCharRE.test(name);
    if (isUnsafe) {
      console.error(`unsafe attribute name: ${name}`);
    }
    return attrValidationCache[name] = !isUnsafe;
  }
  const propsToAttrMap = {
    acceptCharset: "accept-charset",
    className: "class",
    htmlFor: "for",
    httpEquiv: "http-equiv"
  };
  const isKnownHtmlAttr = /* @__PURE__ */ makeMap(
    `accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`
  );
  const isKnownSvgAttr = /* @__PURE__ */ makeMap(
    `xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`
  );
  const isKnownMathMLAttr = /* @__PURE__ */ makeMap(
    `accent,accentunder,actiontype,align,alignmentscope,altimg,altimg-height,altimg-valign,altimg-width,alttext,bevelled,close,columnsalign,columnlines,columnspan,denomalign,depth,dir,display,displaystyle,encoding,equalcolumns,equalrows,fence,fontstyle,fontweight,form,frame,framespacing,groupalign,height,href,id,indentalign,indentalignfirst,indentalignlast,indentshift,indentshiftfirst,indentshiftlast,indextype,justify,largetop,largeop,lquote,lspace,mathbackground,mathcolor,mathsize,mathvariant,maxsize,minlabelspacing,mode,other,overflow,position,rowalign,rowlines,rowspan,rquote,rspace,scriptlevel,scriptminsize,scriptsizemultiplier,selection,separator,separators,shift,side,src,stackalign,stretchy,subscriptshift,superscriptshift,symmetric,voffset,width,widths,xlink:href,xlink:show,xlink:type,xmlns`
  );
  function isRenderableAttrValue(value) {
    if (value == null) {
      return false;
    }
    const type = typeof value;
    return type === "string" || type === "number" || type === "boolean";
  }
  const escapeRE = /["'&<>]/;
  function escapeHtml2(string) {
    const str = "" + string;
    const match = escapeRE.exec(str);
    if (!match) {
      return str;
    }
    let html = "";
    let escaped;
    let index;
    let lastIndex = 0;
    for (index = match.index; index < str.length; index++) {
      switch (str.charCodeAt(index)) {
        case 34:
          escaped = "&quot;";
          break;
        case 38:
          escaped = "&amp;";
          break;
        case 39:
          escaped = "&#39;";
          break;
        case 60:
          escaped = "&lt;";
          break;
        case 62:
          escaped = "&gt;";
          break;
        default:
          continue;
      }
      if (lastIndex !== index) {
        html += str.slice(lastIndex, index);
      }
      lastIndex = index + 1;
      html += escaped;
    }
    return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
  }
  const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
  function escapeHtmlComment(src) {
    return src.replace(commentStripRE, "");
  }
  const cssVarNameEscapeSymbolsRE = /[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;
  function getEscapedCssVarName(key, doubleEscape) {
    return key.replace(
      cssVarNameEscapeSymbolsRE,
      (s) => doubleEscape ? s === '"' ? '\\\\\\"' : `\\\\${s}` : `\\${s}`
    );
  }
  function looseCompareArrays(a, b) {
    if (a.length !== b.length) return false;
    let equal = true;
    for (let i = 0; equal && i < a.length; i++) {
      equal = looseEqual(a[i], b[i]);
    }
    return equal;
  }
  function looseEqual(a, b) {
    if (a === b) return true;
    let aValidType = isDate2(a);
    let bValidType = isDate2(b);
    if (aValidType || bValidType) {
      return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    }
    aValidType = isSymbol(a);
    bValidType = isSymbol(b);
    if (aValidType || bValidType) {
      return a === b;
    }
    aValidType = isArray2(a);
    bValidType = isArray2(b);
    if (aValidType || bValidType) {
      return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    }
    aValidType = isObject2(a);
    bValidType = isObject2(b);
    if (aValidType || bValidType) {
      if (!aValidType || !bValidType) {
        return false;
      }
      const aKeysCount = Object.keys(a).length;
      const bKeysCount = Object.keys(b).length;
      if (aKeysCount !== bKeysCount) {
        return false;
      }
      for (const key in a) {
        const aHasKey = a.hasOwnProperty(key);
        const bHasKey = b.hasOwnProperty(key);
        if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
          return false;
        }
      }
    }
    return String(a) === String(b);
  }
  function looseIndexOf(arr, val) {
    return arr.findIndex((item) => looseEqual(item, val));
  }
  const isRef2 = (val) => {
    return !!(val && val["__v_isRef"] === true);
  };
  const toDisplayString2 = (val) => {
    return isString2(val) ? val : val == null ? "" : isArray2(val) || isObject2(val) && (val.toString === objectToString2 || !isFunction2(val.toString)) ? isRef2(val) ? toDisplayString2(val.value) : JSON.stringify(val, replacer, 2) : String(val);
  };
  const replacer = (_key, val) => {
    if (isRef2(val)) {
      return replacer(_key, val.value);
    } else if (isMap(val)) {
      return {
        [`Map(${val.size})`]: [...val.entries()].reduce(
          (entries, [key, val2], i) => {
            entries[stringifySymbol(key, i) + " =>"] = val2;
            return entries;
          },
          {}
        )
      };
    } else if (isSet(val)) {
      return {
        [`Set(${val.size})`]: [...val.values()].map((v) => stringifySymbol(v))
      };
    } else if (isSymbol(val)) {
      return stringifySymbol(val);
    } else if (isObject2(val) && !isArray2(val) && !isPlainObject2(val)) {
      return String(val);
    }
    return val;
  };
  const stringifySymbol = (v, i = "") => {
    var _a2;
    return (
      // Symbol.description in es2019+ so we need to cast here to pass
      // the lib: es2016 check
      isSymbol(v) ? `Symbol(${(_a2 = v.description) != null ? _a2 : i})` : v
    );
  };
  shared_cjs_prod.EMPTY_ARR = EMPTY_ARR;
  shared_cjs_prod.EMPTY_OBJ = EMPTY_OBJ;
  shared_cjs_prod.NO = NO;
  shared_cjs_prod.NOOP = NOOP;
  shared_cjs_prod.PatchFlagNames = PatchFlagNames;
  shared_cjs_prod.PatchFlags = PatchFlags;
  shared_cjs_prod.ShapeFlags = ShapeFlags;
  shared_cjs_prod.SlotFlags = SlotFlags;
  shared_cjs_prod.camelize = camelize;
  shared_cjs_prod.capitalize = capitalize2;
  shared_cjs_prod.cssVarNameEscapeSymbolsRE = cssVarNameEscapeSymbolsRE;
  shared_cjs_prod.def = def;
  shared_cjs_prod.escapeHtml = escapeHtml2;
  shared_cjs_prod.escapeHtmlComment = escapeHtmlComment;
  shared_cjs_prod.extend = extend;
  shared_cjs_prod.genCacheKey = genCacheKey;
  shared_cjs_prod.genPropsAccessExp = genPropsAccessExp;
  shared_cjs_prod.generateCodeFrame = generateCodeFrame2;
  shared_cjs_prod.getEscapedCssVarName = getEscapedCssVarName;
  shared_cjs_prod.getGlobalThis = getGlobalThis2;
  shared_cjs_prod.hasChanged = hasChanged;
  shared_cjs_prod.hasOwn = hasOwn2;
  shared_cjs_prod.hyphenate = hyphenate;
  shared_cjs_prod.includeBooleanAttr = includeBooleanAttr;
  shared_cjs_prod.invokeArrayFns = invokeArrayFns;
  shared_cjs_prod.isArray = isArray2;
  shared_cjs_prod.isBooleanAttr = isBooleanAttr;
  shared_cjs_prod.isBuiltInDirective = isBuiltInDirective;
  shared_cjs_prod.isDate = isDate2;
  shared_cjs_prod.isFunction = isFunction2;
  shared_cjs_prod.isGloballyAllowed = isGloballyAllowed;
  shared_cjs_prod.isGloballyWhitelisted = isGloballyWhitelisted;
  shared_cjs_prod.isHTMLTag = isHTMLTag;
  shared_cjs_prod.isIntegerKey = isIntegerKey;
  shared_cjs_prod.isKnownHtmlAttr = isKnownHtmlAttr;
  shared_cjs_prod.isKnownMathMLAttr = isKnownMathMLAttr;
  shared_cjs_prod.isKnownSvgAttr = isKnownSvgAttr;
  shared_cjs_prod.isMap = isMap;
  shared_cjs_prod.isMathMLTag = isMathMLTag;
  shared_cjs_prod.isModelListener = isModelListener;
  shared_cjs_prod.isObject = isObject2;
  shared_cjs_prod.isOn = isOn;
  shared_cjs_prod.isPlainObject = isPlainObject2;
  shared_cjs_prod.isPromise = isPromise2;
  shared_cjs_prod.isRegExp = isRegExp2;
  shared_cjs_prod.isRenderableAttrValue = isRenderableAttrValue;
  shared_cjs_prod.isReservedProp = isReservedProp;
  shared_cjs_prod.isSSRSafeAttrName = isSSRSafeAttrName;
  shared_cjs_prod.isSVGTag = isSVGTag;
  shared_cjs_prod.isSet = isSet;
  shared_cjs_prod.isSpecialBooleanAttr = isSpecialBooleanAttr;
  shared_cjs_prod.isString = isString2;
  shared_cjs_prod.isSymbol = isSymbol;
  shared_cjs_prod.isVoidTag = isVoidTag;
  shared_cjs_prod.looseEqual = looseEqual;
  shared_cjs_prod.looseIndexOf = looseIndexOf;
  shared_cjs_prod.looseToNumber = looseToNumber;
  shared_cjs_prod.makeMap = makeMap;
  shared_cjs_prod.normalizeClass = normalizeClass;
  shared_cjs_prod.normalizeProps = normalizeProps;
  shared_cjs_prod.normalizeStyle = normalizeStyle;
  shared_cjs_prod.objectToString = objectToString2;
  shared_cjs_prod.parseStringStyle = parseStringStyle;
  shared_cjs_prod.propsToAttrMap = propsToAttrMap;
  shared_cjs_prod.remove = remove;
  shared_cjs_prod.slotFlagsText = slotFlagsText;
  shared_cjs_prod.stringifyStyle = stringifyStyle;
  shared_cjs_prod.toDisplayString = toDisplayString2;
  shared_cjs_prod.toHandlerKey = toHandlerKey;
  shared_cjs_prod.toNumber = toNumber;
  shared_cjs_prod.toRawType = toRawType;
  shared_cjs_prod.toTypeString = toTypeString2;
  return shared_cjs_prod;
}
var shared_cjs_prodExports = /* @__PURE__ */ requireShared_cjs_prod();
const _wrapInTransition = (props, children) => {
  return { default: () => {
    var _a2;
    return (_a2 = children.default) == null ? void 0 : _a2.call(children);
  } };
};
const ROUTE_KEY_PARENTHESES_RE = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE = /:\w+/g;
function generateRouteKey(route) {
  const source = (route == null ? void 0 : route.meta.key) ?? route.path.replace(ROUTE_KEY_PARENTHESES_RE, "$1").replace(ROUTE_KEY_SYMBOLS_RE, "$1").replace(ROUTE_KEY_NORMAL_RE, (r2) => {
    var _a2;
    return ((_a2 = route.params[r2.slice(1)]) == null ? void 0 : _a2.toString()) || "";
  });
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => {
      var _a2, _b2;
      return comp.components && comp.components.default === ((_b2 = (_a2 = from.matched[index]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default);
    }
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    var _a2;
    const nuxtApp = useNuxtApp();
    const behavior = ((_a2 = useRouter().options) == null ? void 0 : _a2.scrollBehaviorType) ?? "auto";
    let position = savedPosition || void 0;
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (!position && from && to && routeAllowsScrollToTop !== false && isChangingPage(to, from)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
      return false;
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve2) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await new Promise((resolve22) => setTimeout(resolve22, 0));
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
        }
        resolve2(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
    }
  } catch {
  }
  return 0;
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  var _a2;
  let __temp, __restore;
  if (!((_a2 = to.meta) == null ? void 0 : _a2.validate)) {
    return;
  }
  const nuxtApp = useNuxtApp();
  const router = useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  const error = createError({
    statusCode: result && result.statusCode || 404,
    statusMessage: result && result.statusMessage || `Page Not Found: ${to.fullPath}`,
    data: {
      path: to.fullPath
    }
  });
  const unsub = router.beforeResolve((final) => {
    unsub();
    if (final === to) {
      const unsub2 = router.afterEach(async () => {
        unsub2();
        await nuxtApp.runWithContext(() => showError(error));
      });
      return false;
    }
  });
});
const languageList = [
  {
    value: "zh",
    label: "common.中文"
  },
  {
    value: "zht",
    label: "common.中文繁体"
  }
];
const redirect_45global = /* @__PURE__ */ defineNuxtRouteMiddleware((to, from) => {
  var _a2, _b2;
  useRouter();
  if (!((_a2 = to.matched) == null ? void 0 : _a2.length)) {
    return navigateTo("/404");
  }
  const lang = (_b2 = to.params.lang) == null ? void 0 : _b2.toString();
  const keyLanguage = languageList.map((i) => i.value);
  if (lang && !keyLanguage.includes(lang)) {
    return navigateTo("/404");
  }
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  redirect_45global,
  manifest_45route_45rule
];
const namedMiddleware = {};
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a2, _b2, _c2;
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    const history = ((_a2 = routerOptions.history) == null ? void 0 : _a2.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = routerOptions.routes ? ([__temp, __restore] = executeAsync(() => routerOptions.routes(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes : _routes;
    let startPosition;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes
    });
    handleHotUpdate(router, routerOptions.routes ? routerOptions.routes : (routes2) => routes2);
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a3, _b3, _c3, _d2;
      if (((_b3 = (_a3 = to.matched[0]) == null ? void 0 : _a3.components) == null ? void 0 : _b3.default) === ((_d2 = (_c3 = from.matched[0]) == null ? void 0 : _c3.components) == null ? void 0 : _d2.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key],
        enumerable: true
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    useError();
    if (!((_b2 = nuxtApp.ssrContext) == null ? void 0 : _b2.islandContext)) {
      router.afterEach(async (to, _from, failure) => {
        delete nuxtApp._processingMiddleware;
        if (failure) {
          await nuxtApp.callHook("page:loading:end");
        }
        if ((failure == null ? void 0 : failure.type) === 4) {
          return;
        }
        if (to.redirectedFrom && to.fullPath !== initialURL) {
          await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
        }
      });
    }
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    syncCurrentRoute();
    if ((_c2 = nuxtApp.ssrContext) == null ? void 0 : _c2.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      var _a3, _b3;
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a3 = nuxtApp.ssrContext) == null ? void 0 : _a3.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        {
          const routeRules = await nuxtApp.runWithContext(() => getRouteRules({ path: to.path }));
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              if (routeRules.appMiddleware[key]) {
                middlewareEntries.add(key);
              } else {
                middlewareEntries.delete(key);
              }
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b3 = namedMiddleware[entry2]) == null ? void 0 : _b3.call(namedMiddleware).then((r2) => r2.default || r2)) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          const result = await nuxtApp.runWithContext(() => middleware(to, from));
          {
            if (result === false || result instanceof Error) {
              const error2 = result || createError$1({
                statusCode: 404,
                statusMessage: `Page Not Found: ${initialURL}`
              });
              await nuxtApp.runWithContext(() => showError(error2));
              return false;
            }
          }
          if (result === true) {
            continue;
          }
          if (result || result === false) {
            return result;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    router.afterEach(async (to, _from) => {
      if (to.matched.length === 0) {
        await nuxtApp.runWithContext(() => showError(createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        await router.replace({
          ...resolvedInitialRoute,
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}
const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
const revive_payload_server_dpJiw8U0l1 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn] of reducers) {
      definePayloadReducer(reducer, fn);
    }
  }
});
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
const element_plus_teleports_plugin_h4Dmekbj62 = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:rendered", (ctx) => {
    var _a2;
    if ((_a2 = ctx.ssrContext) == null ? void 0 : _a2.teleports) {
      ctx.ssrContext.teleports = renderTeleports(ctx.ssrContext.teleports);
    }
  });
});
function renderTeleports(teleports) {
  const body = Object.entries(teleports).reduce((all, [key, value]) => {
    if (key.startsWith("#el-popper-container-") || [].includes(key)) {
      return `${all}<div id="${key.slice(1)}">${value}</div>`;
    }
    return all;
  }, teleports.body || "");
  return { ...teleports, body };
}
var __defProp$9 = Object.defineProperty;
var __defProps$6 = Object.defineProperties;
var __getOwnPropDescs$6 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$b = Object.getOwnPropertySymbols;
var __hasOwnProp$b = Object.prototype.hasOwnProperty;
var __propIsEnum$b = Object.prototype.propertyIsEnumerable;
var __defNormalProp$9 = (obj, key, value) => key in obj ? __defProp$9(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$9 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$b.call(b, prop))
      __defNormalProp$9(a, prop, b[prop]);
  if (__getOwnPropSymbols$b)
    for (var prop of __getOwnPropSymbols$b(b)) {
      if (__propIsEnum$b.call(b, prop))
        __defNormalProp$9(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$6 = (a, b) => __defProps$6(a, __getOwnPropDescs$6(b));
function computedEager(fn, options) {
  var _a2;
  const result = shallowRef();
  watchEffect(() => {
    result.value = fn();
  }, __spreadProps$6(__spreadValues$9({}, options), {
    flush: (_a2 = void 0) != null ? _a2 : "sync"
  }));
  return readonly(result);
}
const isClient = false;
const isString$1 = (val) => typeof val === "string";
const noop = () => {
};
function resolveUnref(r2) {
  return typeof r2 === "function" ? r2() : unref(r2);
}
function identity(arg) {
  return arg;
}
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function tryOnMounted(fn, sync = true) {
  if (getCurrentInstance())
    ;
  else if (sync)
    fn();
  else
    nextTick(fn);
}
function useTimeoutFn(cb, interval, options = {}) {
  const {
    immediate = true
  } = options;
  const isPending = ref(false);
  let timer = null;
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function stop() {
    isPending.value = false;
    clear();
  }
  function start(...args) {
    clear();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = null;
      cb(...args);
    }, resolveUnref(interval));
  }
  if (immediate) {
    isPending.value = true;
  }
  tryOnScopeDispose(stop);
  return {
    isPending: readonly(isPending),
    start,
    stop
  };
}
const defaultNamespace = "el";
const statePrefix = "is-";
const _bem = (namespace, block, blockSuffix, element, modifier) => {
  let cls = `${namespace}-${block}`;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};
const namespaceContextKey = Symbol("namespaceContextKey");
const useGetDerivedNamespace = (namespaceOverrides) => {
  const derivedNamespace = getCurrentInstance() ? inject(namespaceContextKey, ref(defaultNamespace)) : ref(defaultNamespace);
  const namespace = computed(() => {
    return unref(derivedNamespace) || defaultNamespace;
  });
  return namespace;
};
const useNamespace = (block, namespaceOverrides) => {
  const namespace = useGetDerivedNamespace();
  const b = (blockSuffix = "") => _bem(namespace.value, block, blockSuffix, "", "");
  const e = (element) => element ? _bem(namespace.value, block, "", element, "") : "";
  const m = (modifier) => modifier ? _bem(namespace.value, block, "", "", modifier) : "";
  const be = (blockSuffix, element) => blockSuffix && element ? _bem(namespace.value, block, blockSuffix, element, "") : "";
  const em = (element, modifier) => element && modifier ? _bem(namespace.value, block, "", element, modifier) : "";
  const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem(namespace.value, block, blockSuffix, "", modifier) : "";
  const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem(namespace.value, block, blockSuffix, element, modifier) : "";
  const is2 = (name, ...args) => {
    const state = args.length >= 1 ? args[0] : true;
    return name && state ? `${statePrefix}${name}` : "";
  };
  const cssVar = (object) => {
    const styles = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${key}`] = object[key];
      }
    }
    return styles;
  };
  const cssVarBlock = (object) => {
    const styles = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${block}-${key}`] = object[key];
      }
    }
    return styles;
  };
  const cssVarName = (name) => `--${namespace.value}-${name}`;
  const cssVarBlockName = (name) => `--${namespace.value}-${block}-${name}`;
  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is: is2,
    cssVar,
    cssVarName,
    cssVarBlock,
    cssVarBlockName
  };
};
class ElementPlusError extends Error {
  constructor(m) {
    super(m);
    this.name = "ElementPlusError";
  }
}
function throwError(scope, m) {
  throw new ElementPlusError(`[${scope}] ${m}`);
}
function debugWarn(scope, message) {
}
const defaultIdInjection = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
};
const ID_INJECTION_KEY = Symbol("elIdInjection");
const useIdInjection = () => {
  return getCurrentInstance() ? inject(ID_INJECTION_KEY, defaultIdInjection) : defaultIdInjection;
};
const useId = (deterministicId) => {
  const idInjection = useIdInjection();
  const namespace = useGetDerivedNamespace();
  const idRef = computedEager(() => unref(deterministicId) || `${namespace.value}-id-${idInjection.prefix}-${idInjection.current++}`);
  return idRef;
};
const isUndefined = (val) => val === void 0;
const isBoolean$1 = (val) => typeof val === "boolean";
const isNumber$1 = (val) => typeof val === "number";
const isElement = (e) => {
  if (typeof Element === "undefined")
    return false;
  return e instanceof Element;
};
const isStringNumber = (val) => {
  if (!shared_cjs_prodExports.isString(val)) {
    return false;
  }
  return !Number.isNaN(Number(val));
};
const initial = {
  current: 0
};
const zIndex = ref(0);
const defaultInitialZIndex = 2e3;
const ZINDEX_INJECTION_KEY = Symbol("elZIndexContextKey");
const zIndexContextKey = Symbol("zIndexContextKey");
const useZIndex = (zIndexOverrides) => {
  const increasingInjection = getCurrentInstance() ? inject(ZINDEX_INJECTION_KEY, initial) : initial;
  const zIndexInjection = getCurrentInstance() ? inject(zIndexContextKey, void 0) : void 0;
  const initialZIndex = computed(() => {
    const zIndexFromInjection = unref(zIndexInjection);
    return isNumber$1(zIndexFromInjection) ? zIndexFromInjection : defaultInitialZIndex;
  });
  const currentZIndex = computed(() => initialZIndex.value + zIndex.value);
  const nextZIndex = () => {
    increasingInjection.current++;
    zIndex.value = increasingInjection.current;
    return currentZIndex.value;
  };
  if (!inject(ZINDEX_INJECTION_KEY)) ;
  return {
    initialZIndex,
    currentZIndex,
    nextZIndex
  };
};
const element_plus_injection_plugin_1RNPi6ogby = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.provide(ID_INJECTION_KEY, { "prefix": 1024, "current": 0 }).provide(ZINDEX_INJECTION_KEY, { "current": 0 });
});
const makeSymbol = (name, shareable = false) => !shareable ? Symbol(name) : Symbol.for(name);
const generateFormatCacheKey = (locale, key, source) => friendlyJSONstringify({ l: locale, k: key, s: source });
const friendlyJSONstringify = (json) => JSON.stringify(json).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027");
const isNumber = (val) => typeof val === "number" && isFinite(val);
const isDate = (val) => toTypeString(val) === "[object Date]";
const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
const isEmptyObject = (val) => isPlainObject(val) && Object.keys(val).length === 0;
const assign = Object.assign;
const _create = Object.create;
const create = (obj = null) => _create(obj);
function escapeHtml(rawText) {
  return rawText.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
const isArray = Array.isArray;
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isBoolean = (val) => typeof val === "boolean";
const isObject = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
const toDisplayString = (val) => {
  return val == null ? "" : isArray(val) || isPlainObject(val) && val.toString === objectToString ? JSON.stringify(val, null, 2) : String(val);
};
function join(items, separator = "") {
  return items.reduce((str, item, index) => index === 0 ? str + item : str + separator + item, "");
}
function warn(msg, err) {
  if (typeof console !== "undefined") {
    console.warn(`[intlify] ` + msg);
    if (err) {
      console.warn(err.stack);
    }
  }
}
const isNotObjectOrIsArray = (val) => !isObject(val) || isArray(val);
function deepCopy(src, des) {
  if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
    throw new Error("Invalid value");
  }
  const stack = [{ src, des }];
  while (stack.length) {
    const { src: src2, des: des2 } = stack.pop();
    Object.keys(src2).forEach((key) => {
      if (key === "__proto__") {
        return;
      }
      if (isObject(src2[key]) && !isObject(des2[key])) {
        des2[key] = Array.isArray(src2[key]) ? [] : create();
      }
      if (isNotObjectOrIsArray(des2[key]) || isNotObjectOrIsArray(src2[key])) {
        des2[key] = src2[key];
      } else {
        stack.push({ src: src2[key], des: des2[key] });
      }
    });
  }
}
function isHTTPS(req, trustProxy = true) {
  const _xForwardedProto = trustProxy && req.headers ? req.headers["x-forwarded-proto"] : void 0;
  const protoCheck = typeof _xForwardedProto === "string" ? _xForwardedProto.includes("https") : void 0;
  if (protoCheck) {
    return true;
  }
  const _encrypted = req.connection ? req.connection.encrypted : void 0;
  const encryptedCheck = _encrypted !== void 0 ? _encrypted === true : void 0;
  if (encryptedCheck) {
    return true;
  }
  if (protoCheck === void 0 && encryptedCheck === void 0) {
    return void 0;
  }
  return false;
}
const localeCodes = [
  "zh",
  "zht"
];
const localeLoaders = {
  "zh": [],
  "zht": []
};
const vueI18nConfigs = [
  () => import(
    './config-lSr9FcpM.mjs'
    /* webpackChunkName: "__locales_config_js_655c051e" */
  )
];
const normalizedLocales = [
  {
    "language": "zh",
    "code": "zh"
  },
  {
    "language": "zht",
    "code": "zht"
  }
];
const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n";
const parallelPlugin = false;
const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18nInternal";
const DEFAULT_COOKIE_KEY = "i18n_redirected";
const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp";
const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const defaults = Object.freeze({
  ignoreUnknown: false,
  respectType: false,
  respectFunctionNames: false,
  respectFunctionProperties: false,
  unorderedObjects: true,
  unorderedArrays: false,
  unorderedSets: false,
  excludeKeys: void 0,
  excludeValues: void 0,
  replacer: void 0
});
function objectHash(object, options) {
  if (options) {
    options = { ...defaults, ...options };
  } else {
    options = defaults;
  }
  const hasher = createHasher(options);
  hasher.dispatch(object);
  return hasher.toString();
}
const defaultPrototypesKeys = Object.freeze([
  "prototype",
  "__proto__",
  "constructor"
]);
function createHasher(options) {
  let buff = "";
  let context = /* @__PURE__ */ new Map();
  const write = (str) => {
    buff += str;
  };
  return {
    toString() {
      return buff;
    },
    getContext() {
      return context;
    },
    dispatch(value) {
      if (options.replacer) {
        value = options.replacer(value);
      }
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    },
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      if (objectLength < 10) {
        objType = "unknown:[" + objString + "]";
      } else {
        objType = objString.slice(8, objectLength - 1);
      }
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = context.get(object)) === void 0) {
        context.set(object, context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        write("buffer:");
        return write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else if (!options.ignoreUnknown) {
          this.unkown(object, objType);
        }
      } else {
        let keys = Object.keys(object);
        if (options.unorderedObjects) {
          keys = keys.sort();
        }
        let extraKeys = [];
        if (options.respectType !== false && !isNativeFunction(object)) {
          extraKeys = defaultPrototypesKeys;
        }
        if (options.excludeKeys) {
          keys = keys.filter((key) => {
            return !options.excludeKeys(key);
          });
          extraKeys = extraKeys.filter((key) => {
            return !options.excludeKeys(key);
          });
        }
        write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          write(":");
          if (!options.excludeValues) {
            this.dispatch(object[key]);
          }
          write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    },
    array(arr, unordered) {
      unordered = unordered === void 0 ? options.unorderedArrays !== false : unordered;
      write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry2 of arr) {
          this.dispatch(entry2);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry2) => {
        const hasher = createHasher(options);
        hasher.dispatch(entry2);
        for (const [key, value] of hasher.getContext()) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    },
    date(date) {
      return write("date:" + date.toJSON());
    },
    symbol(sym) {
      return write("symbol:" + sym.toString());
    },
    unkown(value, type) {
      write(type);
      if (!value) {
        return;
      }
      write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          Array.from(value.entries()),
          true
          /* ordered */
        );
      }
    },
    error(err) {
      return write("error:" + err.toString());
    },
    boolean(bool) {
      return write("bool:" + bool);
    },
    string(string) {
      write("string:" + string.length + ":");
      write(string);
    },
    function(fn) {
      write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
      if (options.respectFunctionNames !== false) {
        this.dispatch("function-name:" + String(fn.name));
      }
      if (options.respectFunctionProperties) {
        this.object(fn);
      }
    },
    number(number2) {
      return write("number:" + number2);
    },
    xml(xml) {
      return write("xml:" + xml.toString());
    },
    null() {
      return write("Null");
    },
    undefined() {
      return write("Undefined");
    },
    regexp(regex) {
      return write("regex:" + regex.toString());
    },
    uint8array(arr) {
      write("uint8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint8clampedarray(arr) {
      write("uint8clampedarray:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int8array(arr) {
      write("int8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint16array(arr) {
      write("uint16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int16array(arr) {
      write("int16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint32array(arr) {
      write("uint32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int32array(arr) {
      write("int32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float32array(arr) {
      write("float32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float64array(arr) {
      write("float64array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    arraybuffer(arr) {
      write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    },
    url(url) {
      return write("url:" + url.toString());
    },
    map(map) {
      write("map:");
      const arr = [...map];
      return this.array(arr, options.unorderedSets !== false);
    },
    set(set) {
      write("set:");
      const arr = [...set];
      return this.array(arr, options.unorderedSets !== false);
    },
    file(file) {
      write("file:");
      return this.dispatch([file.name, file.size, file.type, file.lastModfied]);
    },
    blob() {
      if (options.ignoreUnknown) {
        return write("[blob]");
      }
      throw new Error(
        'Hashing Blob objects is currently not supported\nUse "options.replacer" or "options.ignoreUnknown"\n'
      );
    },
    domwindow() {
      return write("domwindow");
    },
    bigint(number2) {
      return write("bigint:" + number2.toString());
    },
    /* Node.js standard native objects */
    process() {
      return write("process");
    },
    timer() {
      return write("timer");
    },
    pipe() {
      return write("pipe");
    },
    tcp() {
      return write("tcp");
    },
    udp() {
      return write("udp");
    },
    tty() {
      return write("tty");
    },
    statwatcher() {
      return write("statwatcher");
    },
    securecontext() {
      return write("securecontext");
    },
    connection() {
      return write("connection");
    },
    zlib() {
      return write("zlib");
    },
    context() {
      return write("context");
    },
    nodescript() {
      return write("nodescript");
    },
    httpparser() {
      return write("httpparser");
    },
    dataview() {
      return write("dataview");
    },
    signal() {
      return write("signal");
    },
    fsevent() {
      return write("fsevent");
    },
    tlswrap() {
      return write("tlswrap");
    }
  };
}
const nativeFunc = "[native code] }";
const nativeFuncLength = nativeFunc.length;
function isNativeFunction(f2) {
  if (typeof f2 !== "function") {
    return false;
  }
  return Function.prototype.toString.call(f2).slice(-nativeFuncLength) === nativeFunc;
}
class WordArray {
  constructor(words, sigBytes) {
    __publicField(this, "words");
    __publicField(this, "sigBytes");
    words = this.words = words || [];
    this.sigBytes = sigBytes === void 0 ? words.length * 4 : sigBytes;
  }
  toString(encoder) {
    return (encoder || Hex).stringify(this);
  }
  concat(wordArray) {
    this.clamp();
    if (this.sigBytes % 4) {
      for (let i = 0; i < wordArray.sigBytes; i++) {
        const thatByte = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
        this.words[this.sigBytes + i >>> 2] |= thatByte << 24 - (this.sigBytes + i) % 4 * 8;
      }
    } else {
      for (let j2 = 0; j2 < wordArray.sigBytes; j2 += 4) {
        this.words[this.sigBytes + j2 >>> 2] = wordArray.words[j2 >>> 2];
      }
    }
    this.sigBytes += wordArray.sigBytes;
    return this;
  }
  clamp() {
    this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8;
    this.words.length = Math.ceil(this.sigBytes / 4);
  }
  clone() {
    return new WordArray([...this.words]);
  }
}
const Hex = {
  stringify(wordArray) {
    const hexChars = [];
    for (let i = 0; i < wordArray.sigBytes; i++) {
      const bite = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      hexChars.push((bite >>> 4).toString(16), (bite & 15).toString(16));
    }
    return hexChars.join("");
  }
};
const Base64 = {
  stringify(wordArray) {
    const keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const base64Chars = [];
    for (let i = 0; i < wordArray.sigBytes; i += 3) {
      const byte1 = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      const byte2 = wordArray.words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
      const byte3 = wordArray.words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
      const triplet = byte1 << 16 | byte2 << 8 | byte3;
      for (let j2 = 0; j2 < 4 && i * 8 + j2 * 6 < wordArray.sigBytes * 8; j2++) {
        base64Chars.push(keyStr.charAt(triplet >>> 6 * (3 - j2) & 63));
      }
    }
    return base64Chars.join("");
  }
};
const Latin1 = {
  parse(latin1Str) {
    const latin1StrLength = latin1Str.length;
    const words = [];
    for (let i = 0; i < latin1StrLength; i++) {
      words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
    }
    return new WordArray(words, latin1StrLength);
  }
};
const Utf8 = {
  parse(utf8Str) {
    return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
  }
};
class BufferedBlockAlgorithm {
  constructor() {
    __publicField(this, "_data", new WordArray());
    __publicField(this, "_nDataBytes", 0);
    __publicField(this, "_minBufferSize", 0);
    __publicField(this, "blockSize", 512 / 32);
  }
  reset() {
    this._data = new WordArray();
    this._nDataBytes = 0;
  }
  _append(data) {
    if (typeof data === "string") {
      data = Utf8.parse(data);
    }
    this._data.concat(data);
    this._nDataBytes += data.sigBytes;
  }
  _doProcessBlock(_dataWords, _offset) {
  }
  _process(doFlush) {
    let processedWords;
    let nBlocksReady = this._data.sigBytes / (this.blockSize * 4);
    if (doFlush) {
      nBlocksReady = Math.ceil(nBlocksReady);
    } else {
      nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
    }
    const nWordsReady = nBlocksReady * this.blockSize;
    const nBytesReady = Math.min(nWordsReady * 4, this._data.sigBytes);
    if (nWordsReady) {
      for (let offset = 0; offset < nWordsReady; offset += this.blockSize) {
        this._doProcessBlock(this._data.words, offset);
      }
      processedWords = this._data.words.splice(0, nWordsReady);
      this._data.sigBytes -= nBytesReady;
    }
    return new WordArray(processedWords, nBytesReady);
  }
}
class Hasher extends BufferedBlockAlgorithm {
  update(messageUpdate) {
    this._append(messageUpdate);
    this._process();
    return this;
  }
  finalize(messageUpdate) {
    if (messageUpdate) {
      this._append(messageUpdate);
    }
  }
}
const H = [
  1779033703,
  -1150833019,
  1013904242,
  -1521486534,
  1359893119,
  -1694144372,
  528734635,
  1541459225
];
const K = [
  1116352408,
  1899447441,
  -1245643825,
  -373957723,
  961987163,
  1508970993,
  -1841331548,
  -1424204075,
  -670586216,
  310598401,
  607225278,
  1426881987,
  1925078388,
  -2132889090,
  -1680079193,
  -1046744716,
  -459576895,
  -272742522,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  -1740746414,
  -1473132947,
  -1341970488,
  -1084653625,
  -958395405,
  -710438585,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  -2117940946,
  -1838011259,
  -1564481375,
  -1474664885,
  -1035236496,
  -949202525,
  -778901479,
  -694614492,
  -200395387,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  -2067236844,
  -1933114872,
  -1866530822,
  -1538233109,
  -1090935817,
  -965641998
];
const W = [];
class SHA256 extends Hasher {
  constructor() {
    super(...arguments);
    __publicField(this, "_hash", new WordArray([...H]));
  }
  /**
   * Resets the internal state of the hash object to initial values.
   */
  reset() {
    super.reset();
    this._hash = new WordArray([...H]);
  }
  _doProcessBlock(M, offset) {
    const H2 = this._hash.words;
    let a = H2[0];
    let b = H2[1];
    let c = H2[2];
    let d = H2[3];
    let e = H2[4];
    let f2 = H2[5];
    let g = H2[6];
    let h2 = H2[7];
    for (let i = 0; i < 64; i++) {
      if (i < 16) {
        W[i] = M[offset + i] | 0;
      } else {
        const gamma0x = W[i - 15];
        const gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
        const gamma1x = W[i - 2];
        const gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
        W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
      }
      const ch = e & f2 ^ ~e & g;
      const maj = a & b ^ a & c ^ b & c;
      const sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
      const sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
      const t1 = h2 + sigma1 + ch + K[i] + W[i];
      const t2 = sigma0 + maj;
      h2 = g;
      g = f2;
      f2 = e;
      e = d + t1 | 0;
      d = c;
      c = b;
      b = a;
      a = t1 + t2 | 0;
    }
    H2[0] = H2[0] + a | 0;
    H2[1] = H2[1] + b | 0;
    H2[2] = H2[2] + c | 0;
    H2[3] = H2[3] + d | 0;
    H2[4] = H2[4] + e | 0;
    H2[5] = H2[5] + f2 | 0;
    H2[6] = H2[6] + g | 0;
    H2[7] = H2[7] + h2 | 0;
  }
  /**
   * Finishes the hash calculation and returns the hash as a WordArray.
   *
   * @param {string} messageUpdate - Additional message content to include in the hash.
   * @returns {WordArray} The finalised hash as a WordArray.
   */
  finalize(messageUpdate) {
    super.finalize(messageUpdate);
    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = this._data.sigBytes * 8;
    this._data.words[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(
      nBitsTotal / 4294967296
    );
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
    this._data.sigBytes = this._data.words.length * 4;
    this._process();
    return this._hash;
  }
}
function sha256base64(message) {
  return new SHA256().finalize(message).toString(Base64);
}
function hash(object, options = {}) {
  const hashed = typeof object === "string" ? object : objectHash(object, options);
  return sha256base64(hashed).slice(0, 10);
}
function isEqual(object1, object2, hashOptions = {}) {
  if (object1 === object2) {
    return true;
  }
  if (objectHash(object1, hashOptions) === objectHash(object2, hashOptions)) {
    return true;
  }
  return false;
}
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a2;
  return (_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.event;
}
function useRequestHeaders(include) {
  const event = useRequestEvent();
  const _headers = event ? getRequestHeaders(event) : {};
  if (!include || !event) {
    return _headers;
  }
  const headers = /* @__PURE__ */ Object.create(null);
  for (const _key of include) {
    const key = _key.toLowerCase();
    const header = _headers[key];
    if (header) {
      headers[key] = header;
    }
  }
  return headers;
}
function useRequestFetch() {
  var _a2;
  return ((_a2 = useRequestEvent()) == null ? void 0 : _a2.$fetch) || globalThis.$fetch;
}
function parse$1(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  const obj = {};
  const opt = options || {};
  const dec = opt.decode || decode;
  let index = 0;
  while (index < str.length) {
    const eqIdx = str.indexOf("=", index);
    if (eqIdx === -1) {
      break;
    }
    let endIdx = str.indexOf(";", index);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    const key = str.slice(index, eqIdx).trim();
    if ((opt == null ? void 0 : opt.filter) && !(opt == null ? void 0 : opt.filter(key))) {
      index = endIdx + 1;
      continue;
    }
    if (void 0 === obj[key]) {
      let val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.codePointAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key] = tryDecode(val, dec);
    }
    index = endIdx + 1;
  }
  return obj;
}
function decode(str) {
  return str.includes("%") ? decodeURIComponent(str) : str;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch {
    return str;
  }
}
function klona(x) {
  if (typeof x !== "object") return x;
  var k2, tmp, str = Object.prototype.toString.call(x);
  if (str === "[object Object]") {
    if (x.constructor !== Object && typeof x.constructor === "function") {
      tmp = new x.constructor();
      for (k2 in x) {
        if (x.hasOwnProperty(k2) && tmp[k2] !== x[k2]) {
          tmp[k2] = klona(x[k2]);
        }
      }
    } else {
      tmp = {};
      for (k2 in x) {
        if (k2 === "__proto__") {
          Object.defineProperty(tmp, k2, {
            value: klona(x[k2]),
            configurable: true,
            enumerable: true,
            writable: true
          });
        } else {
          tmp[k2] = klona(x[k2]);
        }
      }
    }
    return tmp;
  }
  if (str === "[object Array]") {
    k2 = x.length;
    for (tmp = Array(k2); k2--; ) {
      tmp[k2] = klona(x[k2]);
    }
    return tmp;
  }
  if (str === "[object Set]") {
    tmp = /* @__PURE__ */ new Set();
    x.forEach(function(val) {
      tmp.add(klona(val));
    });
    return tmp;
  }
  if (str === "[object Map]") {
    tmp = /* @__PURE__ */ new Map();
    x.forEach(function(val, key) {
      tmp.set(klona(key), klona(val));
    });
    return tmp;
  }
  if (str === "[object Date]") {
    return /* @__PURE__ */ new Date(+x);
  }
  if (str === "[object RegExp]") {
    tmp = new RegExp(x.source, x.flags);
    tmp.lastIndex = x.lastIndex;
    return tmp;
  }
  if (str === "[object DataView]") {
    return new x.constructor(klona(x.buffer));
  }
  if (str === "[object ArrayBuffer]") {
    return x.slice(0);
  }
  if (str.slice(-6) === "Array]") {
    return new x.constructor(x);
  }
  return x;
}
const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a2;
  const opts = { ...CookieDefaults, ..._opts };
  opts.filter ?? (opts.filter = (key) => key === name);
  const cookies = readRawCookies(opts) || {};
  let delay;
  if (opts.maxAge !== void 0) {
    delay = opts.maxAge * 1e3;
  } else if (opts.expires) {
    delay = opts.expires.getTime() - Date.now();
  }
  const hasExpired = delay !== void 0 && delay <= 0;
  const cookieValue = klona(hasExpired ? void 0 : cookies[name] ?? ((_a2 = opts.default) == null ? void 0 : _a2.call(opts)));
  const cookie = ref(cookieValue);
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (opts.readonly || isEqual(cookie.value, cookies[name])) {
        return;
      }
      nuxtApp._cookies || (nuxtApp._cookies = {});
      if (name in nuxtApp._cookies) {
        if (isEqual(cookie.value, nuxtApp._cookies[name])) {
          return;
        }
      }
      nuxtApp._cookies[name] = cookie.value;
      writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  {
    return parse$1(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== void 0) {
      return deleteCookie(event, name, opts);
    }
  }
}
function getNormalizedLocales(locales) {
  return locales.map((x) => typeof x === "string" ? { code: x } : x);
}
function getRouteName(routeName) {
  if (typeof routeName === "string") return routeName;
  if (routeName != null) return routeName.toString();
  return "(null)";
}
function getLocaleRouteName(routeName, locale, {
  defaultLocale,
  strategy,
  routesNameSeparator,
  defaultLocaleRouteNameSuffix,
  differentDomains
}) {
  const localizedRoutes = strategy !== "no_prefix" || differentDomains;
  let name = getRouteName(routeName) + (localizedRoutes ? routesNameSeparator + locale : "");
  if (locale === defaultLocale && strategy === "prefix_and_default") {
    name += routesNameSeparator + defaultLocaleRouteNameSuffix;
  }
  return name;
}
function resolveBaseUrl(baseUrl, context) {
  if (isFunction(baseUrl)) {
    return baseUrl(context);
  }
  return baseUrl;
}
function matchBrowserLocale(locales, browserLocales) {
  const matchedLocales = [];
  for (const [index, browserCode] of browserLocales.entries()) {
    const matchedLocale = locales.find((l) => l.language.toLowerCase() === browserCode.toLowerCase());
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 1 - index / browserLocales.length });
      break;
    }
  }
  for (const [index, browserCode] of browserLocales.entries()) {
    const languageCode = browserCode.split("-")[0].toLowerCase();
    const matchedLocale = locales.find((l) => l.language.split("-")[0].toLowerCase() === languageCode);
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 0.999 - index / browserLocales.length });
      break;
    }
  }
  return matchedLocales;
}
function compareBrowserLocale(a, b) {
  if (a.score === b.score) {
    return b.code.length - a.code.length;
  }
  return b.score - a.score;
}
function findBrowserLocale(locales, browserLocales, {
  matcher = matchBrowserLocale,
  comparer = compareBrowserLocale
} = {}) {
  const normalizedLocales2 = [];
  for (const l of locales) {
    const { code } = l;
    const language = l.language || code;
    normalizedLocales2.push({ code, language });
  }
  const matchedLocales = matcher(normalizedLocales2, browserLocales);
  if (matchedLocales.length === 0) {
    return "";
  }
  if (matchedLocales.length > 1) {
    matchedLocales.sort(comparer);
  }
  return matchedLocales[0].code;
}
function getLocalesRegex(localeCodes2) {
  return new RegExp(`^/(${localeCodes2.join("|")})(?:/|$)`, "i");
}
const localesPattern = `(${localeCodes.join("|")})`;
const regexpPath = getLocalesRegex(localeCodes);
function createLocaleFromRouteGetter() {
  const { routesNameSeparator, defaultLocaleRouteNameSuffix } = (/* @__PURE__ */ useRuntimeConfig()).public.i18n;
  const defaultSuffixPattern = `(?:${routesNameSeparator}${defaultLocaleRouteNameSuffix})?`;
  const regexpName = new RegExp(`${routesNameSeparator}${localesPattern}${defaultSuffixPattern}$`, "i");
  const getLocaleFromRoute = (route) => {
    let matches = null;
    if (typeof route === "string") {
      matches = route.match(regexpPath);
      return (matches == null ? void 0 : matches[1]) ?? "";
    }
    if (route.name) {
      matches = getRouteName(route.name).match(regexpName);
    } else if (route.path) {
      matches = route.path.match(regexpPath);
    }
    return (matches == null ? void 0 : matches[1]) ?? "";
  };
  return getLocaleFromRoute;
}
const cacheMessages = /* @__PURE__ */ new Map();
async function loadVueI18nOptions(vueI18nConfigs2, nuxt) {
  const vueI18nOptions = { messages: {} };
  for (const configFile of vueI18nConfigs2) {
    const { default: resolver } = await configFile();
    const resolved = isFunction(resolver) ? await nuxt.runWithContext(() => resolver()) : resolver;
    deepCopy(resolved, vueI18nOptions);
  }
  return vueI18nOptions;
}
function makeFallbackLocaleCodes(fallback, locales) {
  if (fallback === false) return [];
  if (Array.isArray(fallback)) return fallback;
  let fallbackLocales = [];
  if (typeof fallback === "string") {
    if (locales.every((locale) => locale !== fallback)) {
      fallbackLocales.push(fallback);
    }
    return fallbackLocales;
  }
  const targets = [...locales, "default"];
  for (const locale of targets) {
    if (locale in fallback == false) continue;
    fallbackLocales = [...fallbackLocales, ...fallback[locale].filter(Boolean)];
  }
  return fallbackLocales;
}
async function loadMessage(locale, { key, load }, nuxt) {
  let message = null;
  try {
    const getter = await load().then((r2) => "default" in r2 ? r2.default : r2);
    if (isFunction(getter)) {
      message = await nuxt.runWithContext(() => getter(locale));
    } else {
      message = getter;
      if (message != null && cacheMessages) {
        cacheMessages.set(key, message);
      }
    }
  } catch (e) {
    console.error("Failed locale loading: " + e.message);
  }
  return message;
}
async function loadLocale(locale, localeLoaders2, setter, nuxt) {
  const loaders = localeLoaders2[locale];
  if (loaders == null) {
    return;
  }
  const targetMessage = {};
  for (const loader of loaders) {
    let message = null;
    if (cacheMessages && cacheMessages.has(loader.key) && loader.cache) {
      message = cacheMessages.get(loader.key);
    } else {
      message = await nuxt.runWithContext(() => loadMessage(locale, loader, nuxt));
    }
    if (message != null) {
      deepCopy(message, targetMessage);
    }
  }
  setter(locale, targetMessage);
}
function isI18nInstance(i18n) {
  return i18n != null && "global" in i18n && "mode" in i18n;
}
function isComposer(target) {
  return target != null && !("__composer" in target) && "locale" in target && isRef(target.locale);
}
function isVueI18n(target) {
  return target != null && "__composer" in target;
}
function getI18nTarget(i18n) {
  return isI18nInstance(i18n) ? i18n.global : i18n;
}
function getComposer$3(i18n) {
  const target = getI18nTarget(i18n);
  if (isComposer(target)) return target;
  if (isVueI18n(target)) return target.__composer;
  return target;
}
function getRouteBaseName(common, route) {
  const _route = unref(route);
  if (_route == null || !_route.name) {
    return;
  }
  const name = getRouteName(_route.name);
  return name.split(common.runtimeConfig.public.i18n.routesNameSeparator)[0];
}
function localePath(common, route, locale) {
  var _a2;
  if (typeof route === "string" && hasProtocol(route, { acceptRelative: true })) {
    return route;
  }
  const localizedRoute = resolveRoute(common, route, locale);
  return localizedRoute == null ? "" : ((_a2 = localizedRoute.redirectedFrom) == null ? void 0 : _a2.fullPath) || localizedRoute.fullPath;
}
function localeRoute(common, route, locale) {
  return resolveRoute(common, route, locale) ?? void 0;
}
function normalizeRawLocation(route) {
  if (typeof route !== "string") {
    return Object.assign({}, route);
  }
  if (route[0] === "/") {
    const { pathname: path, search, hash: hash2 } = parsePath(route);
    return { path, query: parseQuery(search), hash: hash2 };
  }
  return { name: route };
}
const isRouteLocationPathRaw = (val) => !!val.path && !val.name;
function resolveRouteObject(common, route, locale) {
  const runtimeI18n = common.runtimeConfig.public.i18n;
  if (isRouteLocationPathRaw(route)) {
    const resolved = resolve(common, route, locale);
    const resolvedName = getRouteBaseName(common, resolved);
    if (resolvedName) {
      resolved.name = getLocaleRouteName(resolvedName, locale, runtimeI18n);
      return resolved;
    }
    const prefixable2 = extendPrefixable(common.runtimeConfig);
    if (prefixable2({ ...runtimeI18n, currentLocale: locale })) {
      route.path = "/" + locale + route.path;
    }
    route.path = (runtimeI18n.trailingSlash ? withTrailingSlash : withoutTrailingSlash)(route.path, true);
    return route;
  }
  route.name || (route.name = getRouteBaseName(common, common.router.currentRoute.value));
  const localizedName = getLocaleRouteName(route.name, locale, runtimeI18n);
  if (common.router.hasRoute(localizedName)) {
    route.name = localizedName;
  }
  return route;
}
function resolveRoute(common, route, locale) {
  try {
    const _locale = locale || unref(getI18nTarget(common.i18n).locale);
    const normalized = normalizeRawLocation(route);
    const resolved = common.router.resolve(resolveRouteObject(common, normalized, _locale));
    if (resolved.name) {
      return resolved;
    }
    return common.router.resolve(route);
  } catch (e) {
    if (isNavigationFailure(
      e,
      1
      /* No match */
    )) {
      return null;
    }
  }
}
function getLocalizableMetaFromDynamicParams(common, route) {
  var _a2;
  if (common.runtimeConfig.public.i18n.experimental.switchLocalePathLinkSSR) {
    return unref(common.metaState.value);
  }
  const meta = route.meta || {};
  return ((_a2 = unref(meta)) == null ? void 0 : _a2[DEFAULT_DYNAMIC_PARAMS_KEY]) || {};
}
function switchLocalePath(common, locale, _route) {
  const route = _route ?? common.router.currentRoute.value;
  const name = getRouteBaseName(common, route);
  if (!name) {
    return "";
  }
  const resolvedParams = getLocalizableMetaFromDynamicParams(common, route)[locale];
  const routeCopy = {
    name,
    params: Object.assign({}, route.params, resolvedParams),
    fullPath: route.fullPath,
    query: route.query,
    hash: route.hash,
    path: route.path,
    meta: route.meta
    // matched: route.matched,
    // redirectedFrom: route.redirectedFrom
  };
  const path = localePath(common, routeCopy, locale);
  const switchLocalePathIntercepter = extendSwitchLocalePathIntercepter(common.runtimeConfig);
  return switchLocalePathIntercepter(path, locale);
}
function resolve(common, route, locale) {
  if (common.runtimeConfig.public.i18n.strategy === "no_prefix") {
    return route;
  }
  if (common.runtimeConfig.public.i18n.strategy !== "prefix") {
    return common.router.resolve(route);
  }
  const restPath = route.path.slice(1);
  const targetPath = route.path[0] + locale + (restPath && "/" + restPath);
  const _route = common.router.options.routes.find((r2) => r2.path === targetPath);
  if (_route == null) {
    return route;
  }
  return common.router.resolve(Object.assign({}, route, _route, { path: targetPath }));
}
function initCommonComposableOptions(i18n) {
  return {
    i18n: i18n ?? useNuxtApp().$i18n,
    router: useRouter(),
    runtimeConfig: /* @__PURE__ */ useRuntimeConfig(),
    metaState: useState("nuxt-i18n-meta", () => ({}))
  };
}
async function loadAndSetLocale(newLocale, initial2 = false) {
  const nuxtApp = useNuxtApp();
  const { differentDomains, skipSettingLocaleOnNavigate } = nuxtApp.$config.public.i18n;
  const opts = runtimeDetectBrowserLanguage();
  const oldLocale = unref(nuxtApp.$i18n.locale);
  const localeCodes2 = unref(nuxtApp.$i18n.localeCodes);
  function syncCookie(locale = oldLocale) {
    if (opts === false || !opts.useCookie) return;
    if (skipSettingLocaleOnNavigate) return;
    nuxtApp.$i18n.setLocaleCookie(locale);
  }
  const localeOverride = await nuxtApp.$i18n.onBeforeLanguageSwitch(oldLocale, newLocale, initial2, nuxtApp);
  if (localeOverride && localeCodes2.includes(localeOverride)) {
    if (oldLocale === localeOverride) {
      syncCookie();
      return false;
    }
    newLocale = localeOverride;
  }
  if (!newLocale) {
    syncCookie();
    return false;
  }
  if (!initial2 && differentDomains) {
    syncCookie();
    return false;
  }
  if (oldLocale === newLocale) {
    syncCookie();
    return false;
  }
  const i18nFallbackLocales = unref(nuxtApp.$i18n.fallbackLocale);
  const setter = nuxtApp.$i18n.mergeLocaleMessage.bind(nuxtApp.$i18n);
  if (i18nFallbackLocales) {
    const fallbackLocales = makeFallbackLocaleCodes(i18nFallbackLocales, [newLocale]);
    await Promise.all(fallbackLocales.map((locale) => loadLocale(locale, localeLoaders, setter, nuxtApp)));
  }
  await loadLocale(newLocale, localeLoaders, setter, nuxtApp);
  if (skipSettingLocaleOnNavigate) {
    return false;
  }
  syncCookie(newLocale);
  nuxtApp._vueI18n.__setLocale(newLocale);
  await nuxtApp.$i18n.onLanguageSwitched(oldLocale, newLocale);
  return true;
}
function detectLocale(route, routeLocale, currentLocale, localeCookie) {
  const nuxtApp = useNuxtApp();
  const { strategy, defaultLocale, differentDomains, multiDomainLocales } = nuxtApp.$config.public.i18n;
  const _detectBrowserLanguage = runtimeDetectBrowserLanguage();
  const detectedBrowser = detectBrowserLanguage(route, localeCookie, currentLocale);
  if (detectedBrowser.locale && detectedBrowser.from != null && localeCodes.includes(detectedBrowser.locale)) {
    return detectedBrowser.locale;
  }
  let detected = "";
  if (differentDomains || multiDomainLocales) {
    detected || (detected = getLocaleDomain(normalizedLocales, strategy, route));
  } else if (strategy !== "no_prefix") {
    detected || (detected = routeLocale);
  }
  const cookieLocale = (localeCodes.includes(detectedBrowser.locale) || localeCookie && localeCodes.includes(localeCookie)) && _detectBrowserLanguage && _detectBrowserLanguage.useCookie && localeCookie;
  detected || (detected = cookieLocale || currentLocale || defaultLocale || "");
  return detected;
}
function detectRedirect({ to, from, locale, routeLocale }, inMiddleware = false) {
  if (routeLocale === locale || useNuxtApp().$i18n.strategy === "no_prefix") {
    return "";
  }
  const common = initCommonComposableOptions();
  let redirectPath = switchLocalePath(common, locale, to);
  if (inMiddleware && !redirectPath) {
    redirectPath = localePath(common, to.fullPath, locale);
  }
  if (isEqual$1(redirectPath, to.fullPath) || from && isEqual$1(redirectPath, from.fullPath)) {
    return "";
  }
  return redirectPath;
}
function isRootRedirectOptions(rootRedirect) {
  return isObject(rootRedirect) && "path" in rootRedirect && "statusCode" in rootRedirect;
}
const useRedirectState = () => useState(NUXT_I18N_MODULE_ID + ":redirect", () => "");
function _navigate(redirectPath, status) {
  return navigateTo(redirectPath, { redirectCode: status });
}
async function navigate({ nuxtApp, locale, route, redirectPath }, { status = 302, enableNavigate = false } = {}) {
  const { rootRedirect, differentDomains, multiDomainLocales, skipSettingLocaleOnNavigate, locales, strategy } = nuxtApp.$config.public.i18n;
  if (route.path === "/" && rootRedirect) {
    if (isString(rootRedirect)) {
      redirectPath = "/" + rootRedirect;
    } else if (isRootRedirectOptions(rootRedirect)) {
      redirectPath = "/" + rootRedirect.path;
      status = rootRedirect.statusCode;
    }
    redirectPath = nuxtApp.$localePath(redirectPath, locale);
    return _navigate(redirectPath, status);
  }
  if (multiDomainLocales && strategy === "prefix_except_default") {
    const host = getHost();
    const currentDomain = locales.find((locale2) => {
      var _a2;
      if (typeof locale2 !== "string") {
        return (_a2 = locale2.defaultForDomains) == null ? void 0 : _a2.find((domain) => domain === host);
      }
      return false;
    });
    const defaultLocaleForDomain = typeof currentDomain !== "string" ? currentDomain == null ? void 0 : currentDomain.code : void 0;
    if (route.path.startsWith(`/${defaultLocaleForDomain}`)) {
      return _navigate(route.path.replace(`/${defaultLocaleForDomain}`, ""), status);
    } else if (!route.path.startsWith(`/${locale}`) && locale !== defaultLocaleForDomain) {
      const getLocaleFromRoute = createLocaleFromRouteGetter();
      const oldLocale = getLocaleFromRoute(route.path);
      if (oldLocale !== "") {
        return _navigate(`/${locale + route.path.replace(`/${oldLocale}`, "")}`, status);
      } else {
        return _navigate(`/${locale + (route.path === "/" ? "" : route.path)}`, status);
      }
    } else if (redirectPath && route.path !== redirectPath) {
      return _navigate(redirectPath, status);
    }
    return;
  }
  if (!differentDomains) {
    if (redirectPath) {
      return _navigate(redirectPath, status);
    }
  } else {
    const state = useRedirectState();
    if (state.value && state.value !== redirectPath) {
      {
        state.value = redirectPath;
      }
    }
  }
}
function prefixable({ currentLocale, defaultLocale, strategy }) {
  return (
    // strategy has no prefixes
    strategy !== "no_prefix" && // strategy should not prefix default locale
    !(currentLocale === defaultLocale && (strategy === "prefix_and_default" || strategy === "prefix_except_default"))
  );
}
function extendPrefixable(runtimeConfig = /* @__PURE__ */ useRuntimeConfig()) {
  return (opts) => {
    return prefixable(opts) && !runtimeConfig.public.i18n.differentDomains;
  };
}
function extendSwitchLocalePathIntercepter(runtimeConfig = /* @__PURE__ */ useRuntimeConfig()) {
  return (path, locale) => {
    if (!runtimeConfig.public.i18n.differentDomains) {
      return path;
    }
    const domain = getDomainFromLocale(locale);
    return domain && joinURL(domain, path) || path;
  };
}
function extendBaseUrl() {
  return () => {
    const ctx = useNuxtApp();
    const { baseUrl, defaultLocale, differentDomains } = ctx.$config.public.i18n;
    if (isFunction(baseUrl)) {
      const baseUrlResult = baseUrl(ctx);
      return baseUrlResult;
    }
    const localeCode = isFunction(defaultLocale) ? defaultLocale() : defaultLocale;
    if (differentDomains && localeCode) {
      const domain = getDomainFromLocale(localeCode);
      if (domain) {
        return domain;
      }
    }
    if (baseUrl) {
      return baseUrl;
    }
    return baseUrl;
  };
}
function formatMessage(message) {
  return NUXT_I18N_MODULE_ID + " " + message;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
function wrapComposable(fn, common = initCommonComposableOptions()) {
  return (...args) => fn(common, ...args);
}
function parseAcceptLanguage(input) {
  return input.split(",").map((tag) => tag.split(";")[0]);
}
function getBrowserLocale() {
  let ret;
  {
    const header = useRequestHeaders(["accept-language"]);
    const accept = header["accept-language"];
    if (accept) {
      ret = findBrowserLocale(normalizedLocales, parseAcceptLanguage(accept));
    }
  }
  return ret;
}
function getI18nCookie() {
  const detect = runtimeDetectBrowserLanguage();
  const cookieKey = detect && detect.cookieKey || DEFAULT_COOKIE_KEY;
  const date = /* @__PURE__ */ new Date();
  const cookieOptions = {
    expires: new Date(date.setDate(date.getDate() + 365)),
    path: "/",
    sameSite: detect && detect.cookieCrossOrigin ? "none" : "lax",
    secure: detect && detect.cookieCrossOrigin || detect && detect.cookieSecure
  };
  if (detect && detect.cookieDomain) {
    cookieOptions.domain = detect.cookieDomain;
  }
  return useCookie(cookieKey, cookieOptions);
}
function getLocaleCookie(cookieRef, detect, defaultLocale) {
  if (detect === false || !detect.useCookie) {
    return;
  }
  const localeCode = cookieRef.value ?? void 0;
  if (localeCode == null) {
    return;
  }
  if (localeCodes.includes(localeCode)) {
    return localeCode;
  }
  if (defaultLocale) {
    cookieRef.value = defaultLocale;
    return defaultLocale;
  }
  cookieRef.value = void 0;
  return;
}
function setLocaleCookie(cookieRef, locale, detect) {
  if (detect === false || !detect.useCookie) {
    return;
  }
  cookieRef.value = locale;
}
const DefaultDetectBrowserLanguageFromResult = {
  locale: "",
  reason: "disabled"
  /* DISABLED */
};
function detectBrowserLanguage(route, localeCookie, locale = "") {
  const _detect = runtimeDetectBrowserLanguage();
  if (!_detect) {
    return DefaultDetectBrowserLanguageFromResult;
  }
  const nuxtApp = useNuxtApp();
  const strategy = nuxtApp.$i18n.strategy;
  const firstAccess = nuxtApp._vueI18n.__firstAccess;
  if (!firstAccess) {
    return {
      locale: strategy === "no_prefix" ? locale : "",
      reason: "first_access_only"
      /* FIRST_ACCESS */
    };
  }
  const { redirectOn, alwaysRedirect, useCookie: useCookie2, fallbackLocale } = _detect;
  const path = isString(route) ? route : route.path;
  if (strategy !== "no_prefix") {
    if (redirectOn === "root" && path !== "/") {
      return {
        locale: "",
        reason: "not_redirect_on_root"
        /* NO_REDIRECT_ROOT */
      };
    }
    if (redirectOn === "no prefix" && !alwaysRedirect && path.match(getLocalesRegex(localeCodes))) {
      return {
        locale: "",
        reason: "not_redirect_on_no_prefix"
        /* NO_REDIRECT_NO_PREFIX */
      };
    }
  }
  let from;
  const cookieMatch = useCookie2 && localeCookie || void 0;
  if (useCookie2) {
    from = "cookie";
  }
  const browserMatch = nuxtApp.$i18n.getBrowserLocale();
  if (!cookieMatch) {
    from = "navigator_or_header";
  }
  const matchedLocale = cookieMatch || browserMatch;
  const resolved = matchedLocale || fallbackLocale || "";
  if (!matchedLocale && fallbackLocale) {
    from = "fallback";
  }
  return { locale: resolved, from };
}
function getHost() {
  let host;
  {
    const header = useRequestHeaders(["x-forwarded-host", "host"]);
    let detectedHost;
    if ("x-forwarded-host" in header) {
      detectedHost = header["x-forwarded-host"];
    } else if ("host" in header) {
      detectedHost = header["host"];
    }
    host = isArray(detectedHost) ? detectedHost[0] : detectedHost;
  }
  return host;
}
function getLocaleDomain(locales, strategy, route) {
  let host = getHost() || "";
  const routePath = isObject(route) ? route.path : isString(route) ? route : "";
  if (host) {
    let matchingLocale;
    const matchingLocales = locales.filter((locale) => {
      if (locale && locale.domain) {
        let domain = locale.domain;
        if (hasProtocol(locale.domain)) {
          domain = locale.domain.replace(/(http|https):\/\//, "");
        }
        return domain === host;
      } else if (Array.isArray(locale == null ? void 0 : locale.domains)) {
        return locale.domains.includes(host);
      }
      return false;
    });
    if (matchingLocales.length === 1) {
      matchingLocale = matchingLocales[0];
    } else if (matchingLocales.length > 1) {
      if (strategy === "no_prefix") {
        console.warn(
          formatMessage(
            "Multiple matching domains found! This is not supported for no_prefix strategy in combination with differentDomains!"
          )
        );
        matchingLocale = matchingLocales[0];
      } else {
        if (route) {
          if (routePath && routePath !== "") {
            const matches = routePath.match(getLocalesRegex(matchingLocales.map((l) => l.code)));
            if (matches && matches.length > 1) {
              matchingLocale = matchingLocales.find((l) => l.code === matches[1]);
            }
          }
        }
        if (!matchingLocale) {
          matchingLocale = matchingLocales.find(
            (l) => Array.isArray(l.defaultForDomains) ? l.defaultForDomains.includes(host) : l.domainDefault
          );
        }
      }
    }
    if (matchingLocale) {
      return matchingLocale.code;
    } else {
      host = "";
    }
  }
  return host;
}
function getDomainFromLocale(localeCode) {
  var _a2, _b2, _c2;
  const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  const host = getHost();
  const config = runtimeConfig.public.i18n;
  const lang = normalizedLocales.find((locale) => locale.code === localeCode);
  const domain = ((_b2 = (_a2 = config == null ? void 0 : config.domainLocales) == null ? void 0 : _a2[localeCode]) == null ? void 0 : _b2.domain) || (lang == null ? void 0 : lang.domain) || ((_c2 = lang == null ? void 0 : lang.domains) == null ? void 0 : _c2.find((v) => v === host));
  if (domain) {
    if (hasProtocol(domain, { strict: true })) {
      return domain;
    }
    let protocol;
    {
      const {
        node: { req }
      } = useRequestEvent(nuxtApp);
      protocol = req && isHTTPS(req) ? "https:" : "http:";
    }
    return protocol + "//" + domain;
  }
  console.warn(formatMessage("Could not find domain name for locale " + localeCode));
}
const runtimeDetectBrowserLanguage = (opts = (/* @__PURE__ */ useRuntimeConfig()).public.i18n) => {
  if ((opts == null ? void 0 : opts.detectBrowserLanguage) === false) return false;
  return opts == null ? void 0 : opts.detectBrowserLanguage;
};
function setupMultiDomainLocales(nuxtContext, defaultLocaleDomain) {
  const { multiDomainLocales, strategy, routesNameSeparator, defaultLocaleRouteNameSuffix } = nuxtContext.$config.public.i18n;
  if (!multiDomainLocales) return;
  if (!(strategy === "prefix_except_default" || strategy === "prefix_and_default")) return;
  const router = useRouter();
  const defaultRouteSuffix = [routesNameSeparator, defaultLocaleRouteNameSuffix].join("");
  for (const route of router.getRoutes()) {
    const routeName = getRouteName(route.name);
    if (routeName.endsWith(defaultRouteSuffix)) {
      router.removeRoute(routeName);
      continue;
    }
    const routeNameLocale = routeName.split(routesNameSeparator)[1];
    if (routeNameLocale === defaultLocaleDomain) {
      router.addRoute({
        ...route,
        path: route.path === `/${routeNameLocale}` ? "/" : route.path.replace(`/${routeNameLocale}`, "")
      });
    }
  }
}
function getDefaultLocaleForDomain(nuxtContext) {
  const { locales, defaultLocale, multiDomainLocales } = nuxtContext.$config.public.i18n;
  let defaultLocaleDomain = defaultLocale || "";
  if (!multiDomainLocales) {
    return defaultLocaleDomain;
  }
  const host = getHost();
  const hasDefaultForDomains = locales.some(
    (l) => typeof l !== "string" && Array.isArray(l.defaultForDomains)
  );
  if (hasDefaultForDomains) {
    const findDefaultLocale = locales.find(
      (l) => typeof l === "string" || !Array.isArray(l.defaultForDomains) ? false : l.defaultForDomains.includes(host ?? "")
    );
    defaultLocaleDomain = (findDefaultLocale == null ? void 0 : findDefaultLocale.code) ?? "";
  }
  return defaultLocaleDomain;
}
function creatHeadContext({ key, seo }) {
  const nuxtApp = useNuxtApp();
  const { defaultDirection } = (/* @__PURE__ */ useRuntimeConfig()).public.i18n;
  const locale = unref(nuxtApp.$i18n.locale);
  const locales = getNormalizedLocales(unref(nuxtApp.$i18n.locales));
  const currentLocale = locales.find((l) => l.code === locale) || { code: locale };
  return {
    key,
    seo,
    locale,
    locales,
    currentDir: currentLocale.dir || defaultDirection,
    currentLocale,
    currentLanguage: currentLocale.language,
    baseUrl: getBaseUrl()
  };
}
function localeHead(common, { dir = true, lang = true, seo = true, key = "hid" }) {
  const metaObject = {
    htmlAttrs: {},
    link: [],
    meta: []
  };
  const ctx = creatHeadContext({ seo, key });
  if (!ctx.baseUrl) {
    console.warn("I18n `baseUrl` is required to generate valid SEO tag links.");
  }
  if (ctx.locales == null || ctx.baseUrl == null) {
    return metaObject;
  }
  if (dir) {
    metaObject.htmlAttrs.dir = ctx.currentDir;
  }
  if (lang && ctx.currentLanguage) {
    metaObject.htmlAttrs.lang = ctx.currentLanguage;
  }
  if (seo && ctx.locale && ctx.locales) {
    metaObject.link.push(
      ...getHreflangLinks(common, ctx),
      ...getCanonicalLink(common, ctx)
    );
    metaObject.meta.push(
      ...getOgUrl(common, ctx),
      ...getCurrentOgLocale(ctx),
      ...getAlternateOgLocales(ctx)
    );
  }
  return metaObject;
}
function getBaseUrl() {
  const nuxtApp = useNuxtApp();
  const i18n = getComposer$3(nuxtApp.$i18n);
  return joinURL(unref(i18n.baseUrl), nuxtApp.$config.app.baseURL);
}
function getHreflangLinks(common, ctx) {
  const { defaultLocale, strategy } = (/* @__PURE__ */ useRuntimeConfig()).public.i18n;
  const links = [];
  if (strategy === "no_prefix") return links;
  const localeMap = /* @__PURE__ */ new Map();
  for (const locale of ctx.locales) {
    if (!locale.language) {
      console.warn("Locale `language` ISO code is required to generate alternate link");
      continue;
    }
    const [language, region] = locale.language.split("-");
    if (language && region && (locale.isCatchallLocale || !localeMap.has(language))) {
      localeMap.set(language, locale);
    }
    localeMap.set(locale.language, locale);
  }
  const strictCanonicals = common.runtimeConfig.public.i18n.experimental.alternateLinkCanonicalQueries === true;
  const routeWithoutQuery = strictCanonicals ? common.router.resolve({ query: {} }) : void 0;
  if (!common.runtimeConfig.public.i18n.experimental.switchLocalePathLinkSSR && strictCanonicals) {
    routeWithoutQuery.meta = common.router.currentRoute.value.meta;
  }
  for (const [language, mapLocale] of localeMap.entries()) {
    const localePath2 = switchLocalePath(common, mapLocale.code, routeWithoutQuery);
    const canonicalQueryParams = getCanonicalQueryParams(common, ctx);
    let href = toAbsoluteUrl(localePath2, ctx.baseUrl);
    if (canonicalQueryParams && strictCanonicals) {
      href = `${href}?${canonicalQueryParams}`;
    }
    if (localePath2) {
      links.push({
        [ctx.key]: `i18n-alt-${language}`,
        rel: "alternate",
        href,
        hreflang: language
      });
    }
  }
  if (defaultLocale) {
    const localePath2 = switchLocalePath(common, defaultLocale, routeWithoutQuery);
    const canonicalQueryParams = getCanonicalQueryParams(common, ctx);
    let href = toAbsoluteUrl(localePath2, ctx.baseUrl);
    if (canonicalQueryParams && strictCanonicals) {
      href = `${href}?${canonicalQueryParams}`;
    }
    if (localePath2) {
      links.push({
        [ctx.key]: "i18n-xd",
        rel: "alternate",
        href,
        hreflang: "x-default"
      });
    }
  }
  return links;
}
function getCanonicalUrl(common, ctx) {
  const route = common.router.currentRoute.value;
  const currentRoute = localeRoute(common, {
    ...route,
    path: void 0,
    name: getRouteBaseName(common, route)
  });
  if (!currentRoute) return "";
  let href = toAbsoluteUrl(currentRoute.path, ctx.baseUrl);
  const canonicalQueryParams = getCanonicalQueryParams(common, ctx);
  if (canonicalQueryParams) {
    href = `${href}?${canonicalQueryParams}`;
  }
  return href;
}
function getCanonicalLink(common, ctx) {
  const href = getCanonicalUrl(common, ctx);
  if (!href) return [];
  return [{ [ctx.key]: "i18n-can", rel: "canonical", href }];
}
function getCanonicalQueryParams(common, ctx) {
  const route = common.router.currentRoute.value;
  const currentRoute = localeRoute(common, {
    ...route,
    path: void 0,
    name: getRouteBaseName(common, route)
  });
  const canonicalQueries = isObject(ctx.seo) && ctx.seo.canonicalQueries || [];
  const currentRouteQueryParams = (currentRoute == null ? void 0 : currentRoute.query) || {};
  const params = new URLSearchParams();
  for (const queryParamName of canonicalQueries) {
    if (queryParamName in currentRouteQueryParams) {
      const queryParamValue = currentRouteQueryParams[queryParamName];
      if (isArray(queryParamValue)) {
        queryParamValue.forEach((v) => params.append(queryParamName, v || ""));
      } else {
        params.append(queryParamName, queryParamValue || "");
      }
    }
  }
  return params.toString() || void 0;
}
function getOgUrl(common, ctx) {
  const href = getCanonicalUrl(common, ctx);
  if (!href) return [];
  return [{ [ctx.key]: "i18n-og-url", property: "og:url", content: href }];
}
function getCurrentOgLocale(ctx) {
  if (!ctx.currentLocale || !ctx.currentLanguage) return [];
  return [{ [ctx.key]: "i18n-og", property: "og:locale", content: hyphenToUnderscore(ctx.currentLanguage) }];
}
function getAlternateOgLocales(ctx) {
  const alternateLocales = ctx.locales.filter((locale) => locale.language && locale.language !== ctx.currentLanguage);
  return alternateLocales.map((locale) => ({
    [ctx.key]: `i18n-og-alt-${locale.language}`,
    property: "og:locale:alternate",
    content: hyphenToUnderscore(locale.language)
  }));
}
function hyphenToUnderscore(str) {
  return (str || "").replace(/-/g, "_");
}
function toAbsoluteUrl(urlOrPath, baseUrl) {
  if (urlOrPath.match(/^https?:\/\//)) return urlOrPath;
  return joinURL(baseUrl, urlOrPath);
}
/*!
  * message-compiler v11.0.0-rc.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function createPosition(line, column, offset) {
  return { line, column, offset };
}
function createLocation(start, end, source) {
  const loc = { start, end };
  return loc;
}
const CompileErrorCodes = {
  // tokenizer error codes
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  // parser error codes
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14};
const COMPILE_ERROR_CODES_EXTEND_POINT = 17;
function createCompileError(code, loc, options = {}) {
  const { domain, messages, args } = options;
  const msg = code;
  const error = new SyntaxError(String(msg));
  error.code = code;
  if (loc) {
    error.location = loc;
  }
  error.domain = domain;
  return error;
}
function defaultOnError(error) {
  throw error;
}
const CHAR_SP = " ";
const CHAR_CR = "\r";
const CHAR_LF = "\n";
const CHAR_LS = String.fromCharCode(8232);
const CHAR_PS = String.fromCharCode(8233);
function createScanner(str) {
  const _buf = str;
  let _index = 0;
  let _line = 1;
  let _column = 1;
  let _peekOffset = 0;
  const isCRLF = (index2) => _buf[index2] === CHAR_CR && _buf[index2 + 1] === CHAR_LF;
  const isLF = (index2) => _buf[index2] === CHAR_LF;
  const isPS = (index2) => _buf[index2] === CHAR_PS;
  const isLS = (index2) => _buf[index2] === CHAR_LS;
  const isLineEnd = (index2) => isCRLF(index2) || isLF(index2) || isPS(index2) || isLS(index2);
  const index = () => _index;
  const line = () => _line;
  const column = () => _column;
  const peekOffset = () => _peekOffset;
  const charAt = (offset) => isCRLF(offset) || isPS(offset) || isLS(offset) ? CHAR_LF : _buf[offset];
  const currentChar = () => charAt(_index);
  const currentPeek = () => charAt(_index + _peekOffset);
  function next() {
    _peekOffset = 0;
    if (isLineEnd(_index)) {
      _line++;
      _column = 0;
    }
    if (isCRLF(_index)) {
      _index++;
    }
    _index++;
    _column++;
    return _buf[_index];
  }
  function peek() {
    if (isCRLF(_index + _peekOffset)) {
      _peekOffset++;
    }
    _peekOffset++;
    return _buf[_index + _peekOffset];
  }
  function reset() {
    _index = 0;
    _line = 1;
    _column = 1;
    _peekOffset = 0;
  }
  function resetPeek(offset = 0) {
    _peekOffset = offset;
  }
  function skipToPeek() {
    const target = _index + _peekOffset;
    while (target !== _index) {
      next();
    }
    _peekOffset = 0;
  }
  return {
    index,
    line,
    column,
    peekOffset,
    charAt,
    currentChar,
    currentPeek,
    next,
    peek,
    reset,
    resetPeek,
    skipToPeek
  };
}
const EOF = void 0;
const DOT = ".";
const LITERAL_DELIMITER = "'";
const ERROR_DOMAIN$3 = "tokenizer";
function createTokenizer(source, options = {}) {
  const location = options.location !== false;
  const _scnr = createScanner(source);
  const currentOffset = () => _scnr.index();
  const currentPosition = () => createPosition(_scnr.line(), _scnr.column(), _scnr.index());
  const _initLoc = currentPosition();
  const _initOffset = currentOffset();
  const _context = {
    currentType: 13,
    offset: _initOffset,
    startLoc: _initLoc,
    endLoc: _initLoc,
    lastType: 13,
    lastOffset: _initOffset,
    lastStartLoc: _initLoc,
    lastEndLoc: _initLoc,
    braceNest: 0,
    inLinked: false,
    text: ""
  };
  const context = () => _context;
  const { onError } = options;
  function emitError(code, pos, offset, ...args) {
    const ctx = context();
    pos.column += offset;
    pos.offset += offset;
    if (onError) {
      const loc = location ? createLocation(ctx.startLoc, pos) : null;
      const err = createCompileError(code, loc, {
        domain: ERROR_DOMAIN$3,
        args
      });
      onError(err);
    }
  }
  function getToken(context2, type, value) {
    context2.endLoc = currentPosition();
    context2.currentType = type;
    const token = { type };
    if (location) {
      token.loc = createLocation(context2.startLoc, context2.endLoc);
    }
    if (value != null) {
      token.value = value;
    }
    return token;
  }
  const getEndToken = (context2) => getToken(
    context2,
    13
    /* TokenTypes.EOF */
  );
  function eat(scnr, ch) {
    if (scnr.currentChar() === ch) {
      scnr.next();
      return ch;
    } else {
      emitError(CompileErrorCodes.EXPECTED_TOKEN, currentPosition(), 0, ch);
      return "";
    }
  }
  function peekSpaces(scnr) {
    let buf = "";
    while (scnr.currentPeek() === CHAR_SP || scnr.currentPeek() === CHAR_LF) {
      buf += scnr.currentPeek();
      scnr.peek();
    }
    return buf;
  }
  function skipSpaces(scnr) {
    const buf = peekSpaces(scnr);
    scnr.skipToPeek();
    return buf;
  }
  function isIdentifierStart(ch) {
    if (ch === EOF) {
      return false;
    }
    const cc = ch.charCodeAt(0);
    return cc >= 97 && cc <= 122 || // a-z
    cc >= 65 && cc <= 90 || // A-Z
    cc === 95;
  }
  function isNumberStart(ch) {
    if (ch === EOF) {
      return false;
    }
    const cc = ch.charCodeAt(0);
    return cc >= 48 && cc <= 57;
  }
  function isNamedIdentifierStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 2) {
      return false;
    }
    peekSpaces(scnr);
    const ret = isIdentifierStart(scnr.currentPeek());
    scnr.resetPeek();
    return ret;
  }
  function isListIdentifierStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 2) {
      return false;
    }
    peekSpaces(scnr);
    const ch = scnr.currentPeek() === "-" ? scnr.peek() : scnr.currentPeek();
    const ret = isNumberStart(ch);
    scnr.resetPeek();
    return ret;
  }
  function isLiteralStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 2) {
      return false;
    }
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === LITERAL_DELIMITER;
    scnr.resetPeek();
    return ret;
  }
  function isLinkedDotStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 7) {
      return false;
    }
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === ".";
    scnr.resetPeek();
    return ret;
  }
  function isLinkedModifierStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 8) {
      return false;
    }
    peekSpaces(scnr);
    const ret = isIdentifierStart(scnr.currentPeek());
    scnr.resetPeek();
    return ret;
  }
  function isLinkedDelimiterStart(scnr, context2) {
    const { currentType } = context2;
    if (!(currentType === 7 || currentType === 11)) {
      return false;
    }
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === ":";
    scnr.resetPeek();
    return ret;
  }
  function isLinkedReferStart(scnr, context2) {
    const { currentType } = context2;
    if (currentType !== 9) {
      return false;
    }
    const fn = () => {
      const ch = scnr.currentPeek();
      if (ch === "{") {
        return isIdentifierStart(scnr.peek());
      } else if (ch === "@" || ch === "|" || ch === ":" || ch === "." || ch === CHAR_SP || !ch) {
        return false;
      } else if (ch === CHAR_LF) {
        scnr.peek();
        return fn();
      } else {
        return isTextStart(scnr, false);
      }
    };
    const ret = fn();
    scnr.resetPeek();
    return ret;
  }
  function isPluralStart(scnr) {
    peekSpaces(scnr);
    const ret = scnr.currentPeek() === "|";
    scnr.resetPeek();
    return ret;
  }
  function isTextStart(scnr, reset = true) {
    const fn = (hasSpace = false, prev = "") => {
      const ch = scnr.currentPeek();
      if (ch === "{") {
        return hasSpace;
      } else if (ch === "@" || !ch) {
        return hasSpace;
      } else if (ch === "|") {
        return !(prev === CHAR_SP || prev === CHAR_LF);
      } else if (ch === CHAR_SP) {
        scnr.peek();
        return fn(true, CHAR_SP);
      } else if (ch === CHAR_LF) {
        scnr.peek();
        return fn(true, CHAR_LF);
      } else {
        return true;
      }
    };
    const ret = fn();
    reset && scnr.resetPeek();
    return ret;
  }
  function takeChar(scnr, fn) {
    const ch = scnr.currentChar();
    if (ch === EOF) {
      return EOF;
    }
    if (fn(ch)) {
      scnr.next();
      return ch;
    }
    return null;
  }
  function isIdentifier(ch) {
    const cc = ch.charCodeAt(0);
    return cc >= 97 && cc <= 122 || // a-z
    cc >= 65 && cc <= 90 || // A-Z
    cc >= 48 && cc <= 57 || // 0-9
    cc === 95 || // _
    cc === 36;
  }
  function takeIdentifierChar(scnr) {
    return takeChar(scnr, isIdentifier);
  }
  function isNamedIdentifier(ch) {
    const cc = ch.charCodeAt(0);
    return cc >= 97 && cc <= 122 || // a-z
    cc >= 65 && cc <= 90 || // A-Z
    cc >= 48 && cc <= 57 || // 0-9
    cc === 95 || // _
    cc === 36 || // $
    cc === 45;
  }
  function takeNamedIdentifierChar(scnr) {
    return takeChar(scnr, isNamedIdentifier);
  }
  function isDigit(ch) {
    const cc = ch.charCodeAt(0);
    return cc >= 48 && cc <= 57;
  }
  function takeDigit(scnr) {
    return takeChar(scnr, isDigit);
  }
  function isHexDigit(ch) {
    const cc = ch.charCodeAt(0);
    return cc >= 48 && cc <= 57 || // 0-9
    cc >= 65 && cc <= 70 || // A-F
    cc >= 97 && cc <= 102;
  }
  function takeHexDigit(scnr) {
    return takeChar(scnr, isHexDigit);
  }
  function getDigits(scnr) {
    let ch = "";
    let num = "";
    while (ch = takeDigit(scnr)) {
      num += ch;
    }
    return num;
  }
  function readText(scnr) {
    let buf = "";
    while (true) {
      const ch = scnr.currentChar();
      if (ch === "{" || ch === "}" || ch === "@" || ch === "|" || !ch) {
        break;
      } else if (ch === CHAR_SP || ch === CHAR_LF) {
        if (isTextStart(scnr)) {
          buf += ch;
          scnr.next();
        } else if (isPluralStart(scnr)) {
          break;
        } else {
          buf += ch;
          scnr.next();
        }
      } else {
        buf += ch;
        scnr.next();
      }
    }
    return buf;
  }
  function readNamedIdentifier(scnr) {
    skipSpaces(scnr);
    let ch = "";
    let name = "";
    while (ch = takeNamedIdentifierChar(scnr)) {
      name += ch;
    }
    if (scnr.currentChar() === EOF) {
      emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
    }
    return name;
  }
  function readListIdentifier(scnr) {
    skipSpaces(scnr);
    let value = "";
    if (scnr.currentChar() === "-") {
      scnr.next();
      value += `-${getDigits(scnr)}`;
    } else {
      value += getDigits(scnr);
    }
    if (scnr.currentChar() === EOF) {
      emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
    }
    return value;
  }
  function isLiteral2(ch) {
    return ch !== LITERAL_DELIMITER && ch !== CHAR_LF;
  }
  function readLiteral(scnr) {
    skipSpaces(scnr);
    eat(scnr, `'`);
    let ch = "";
    let literal = "";
    while (ch = takeChar(scnr, isLiteral2)) {
      if (ch === "\\") {
        literal += readEscapeSequence(scnr);
      } else {
        literal += ch;
      }
    }
    const current = scnr.currentChar();
    if (current === CHAR_LF || current === EOF) {
      emitError(CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, currentPosition(), 0);
      if (current === CHAR_LF) {
        scnr.next();
        eat(scnr, `'`);
      }
      return literal;
    }
    eat(scnr, `'`);
    return literal;
  }
  function readEscapeSequence(scnr) {
    const ch = scnr.currentChar();
    switch (ch) {
      case "\\":
      case `'`:
        scnr.next();
        return `\\${ch}`;
      case "u":
        return readUnicodeEscapeSequence(scnr, ch, 4);
      case "U":
        return readUnicodeEscapeSequence(scnr, ch, 6);
      default:
        emitError(CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE, currentPosition(), 0, ch);
        return "";
    }
  }
  function readUnicodeEscapeSequence(scnr, unicode, digits) {
    eat(scnr, unicode);
    let sequence = "";
    for (let i = 0; i < digits; i++) {
      const ch = takeHexDigit(scnr);
      if (!ch) {
        emitError(CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE, currentPosition(), 0, `\\${unicode}${sequence}${scnr.currentChar()}`);
        break;
      }
      sequence += ch;
    }
    return `\\${unicode}${sequence}`;
  }
  function isInvalidIdentifier(ch) {
    return ch !== "{" && ch !== "}" && ch !== CHAR_SP && ch !== CHAR_LF;
  }
  function readInvalidIdentifier(scnr) {
    skipSpaces(scnr);
    let ch = "";
    let identifiers = "";
    while (ch = takeChar(scnr, isInvalidIdentifier)) {
      identifiers += ch;
    }
    return identifiers;
  }
  function readLinkedModifier(scnr) {
    let ch = "";
    let name = "";
    while (ch = takeIdentifierChar(scnr)) {
      name += ch;
    }
    return name;
  }
  function readLinkedRefer(scnr) {
    const fn = (buf) => {
      const ch = scnr.currentChar();
      if (ch === "{" || ch === "@" || ch === "|" || ch === "(" || ch === ")" || !ch) {
        return buf;
      } else if (ch === CHAR_SP) {
        return buf;
      } else if (ch === CHAR_LF || ch === DOT) {
        buf += ch;
        scnr.next();
        return fn(buf);
      } else {
        buf += ch;
        scnr.next();
        return fn(buf);
      }
    };
    return fn("");
  }
  function readPlural(scnr) {
    skipSpaces(scnr);
    const plural = eat(
      scnr,
      "|"
      /* TokenChars.Pipe */
    );
    skipSpaces(scnr);
    return plural;
  }
  function readTokenInPlaceholder(scnr, context2) {
    let token = null;
    const ch = scnr.currentChar();
    switch (ch) {
      case "{":
        if (context2.braceNest >= 1) {
          emitError(CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER, currentPosition(), 0);
        }
        scnr.next();
        token = getToken(
          context2,
          2,
          "{"
          /* TokenChars.BraceLeft */
        );
        skipSpaces(scnr);
        context2.braceNest++;
        return token;
      case "}":
        if (context2.braceNest > 0 && context2.currentType === 2) {
          emitError(CompileErrorCodes.EMPTY_PLACEHOLDER, currentPosition(), 0);
        }
        scnr.next();
        token = getToken(
          context2,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
        context2.braceNest--;
        context2.braceNest > 0 && skipSpaces(scnr);
        if (context2.inLinked && context2.braceNest === 0) {
          context2.inLinked = false;
        }
        return token;
      case "@":
        if (context2.braceNest > 0) {
          emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
        }
        token = readTokenInLinked(scnr, context2) || getEndToken(context2);
        context2.braceNest = 0;
        return token;
      default: {
        let validNamedIdentifier = true;
        let validListIdentifier = true;
        let validLiteral = true;
        if (isPluralStart(scnr)) {
          if (context2.braceNest > 0) {
            emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
          }
          token = getToken(context2, 1, readPlural(scnr));
          context2.braceNest = 0;
          context2.inLinked = false;
          return token;
        }
        if (context2.braceNest > 0 && (context2.currentType === 4 || context2.currentType === 5 || context2.currentType === 6)) {
          emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
          context2.braceNest = 0;
          return readToken(scnr, context2);
        }
        if (validNamedIdentifier = isNamedIdentifierStart(scnr, context2)) {
          token = getToken(context2, 4, readNamedIdentifier(scnr));
          skipSpaces(scnr);
          return token;
        }
        if (validListIdentifier = isListIdentifierStart(scnr, context2)) {
          token = getToken(context2, 5, readListIdentifier(scnr));
          skipSpaces(scnr);
          return token;
        }
        if (validLiteral = isLiteralStart(scnr, context2)) {
          token = getToken(context2, 6, readLiteral(scnr));
          skipSpaces(scnr);
          return token;
        }
        if (!validNamedIdentifier && !validListIdentifier && !validLiteral) {
          token = getToken(context2, 12, readInvalidIdentifier(scnr));
          emitError(CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER, currentPosition(), 0, token.value);
          skipSpaces(scnr);
          return token;
        }
        break;
      }
    }
    return token;
  }
  function readTokenInLinked(scnr, context2) {
    const { currentType } = context2;
    let token = null;
    const ch = scnr.currentChar();
    if ((currentType === 7 || currentType === 8 || currentType === 11 || currentType === 9) && (ch === CHAR_LF || ch === CHAR_SP)) {
      emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
    }
    switch (ch) {
      case "@":
        scnr.next();
        token = getToken(
          context2,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        );
        context2.inLinked = true;
        return token;
      case ".":
        skipSpaces(scnr);
        scnr.next();
        return getToken(
          context2,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        skipSpaces(scnr);
        scnr.next();
        return getToken(
          context2,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        if (isPluralStart(scnr)) {
          token = getToken(context2, 1, readPlural(scnr));
          context2.braceNest = 0;
          context2.inLinked = false;
          return token;
        }
        if (isLinkedDotStart(scnr, context2) || isLinkedDelimiterStart(scnr, context2)) {
          skipSpaces(scnr);
          return readTokenInLinked(scnr, context2);
        }
        if (isLinkedModifierStart(scnr, context2)) {
          skipSpaces(scnr);
          return getToken(context2, 11, readLinkedModifier(scnr));
        }
        if (isLinkedReferStart(scnr, context2)) {
          skipSpaces(scnr);
          if (ch === "{") {
            return readTokenInPlaceholder(scnr, context2) || token;
          } else {
            return getToken(context2, 10, readLinkedRefer(scnr));
          }
        }
        if (currentType === 7) {
          emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
        }
        context2.braceNest = 0;
        context2.inLinked = false;
        return readToken(scnr, context2);
    }
  }
  function readToken(scnr, context2) {
    let token = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (context2.braceNest > 0) {
      return readTokenInPlaceholder(scnr, context2) || getEndToken(context2);
    }
    if (context2.inLinked) {
      return readTokenInLinked(scnr, context2) || getEndToken(context2);
    }
    const ch = scnr.currentChar();
    switch (ch) {
      case "{":
        return readTokenInPlaceholder(scnr, context2) || getEndToken(context2);
      case "}":
        emitError(CompileErrorCodes.UNBALANCED_CLOSING_BRACE, currentPosition(), 0);
        scnr.next();
        return getToken(
          context2,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return readTokenInLinked(scnr, context2) || getEndToken(context2);
      default: {
        if (isPluralStart(scnr)) {
          token = getToken(context2, 1, readPlural(scnr));
          context2.braceNest = 0;
          context2.inLinked = false;
          return token;
        }
        if (isTextStart(scnr)) {
          return getToken(context2, 0, readText(scnr));
        }
        break;
      }
    }
    return token;
  }
  function nextToken() {
    const { currentType, offset, startLoc, endLoc } = _context;
    _context.lastType = currentType;
    _context.lastOffset = offset;
    _context.lastStartLoc = startLoc;
    _context.lastEndLoc = endLoc;
    _context.offset = currentOffset();
    _context.startLoc = currentPosition();
    if (_scnr.currentChar() === EOF) {
      return getToken(
        _context,
        13
        /* TokenTypes.EOF */
      );
    }
    return readToken(_scnr, _context);
  }
  return {
    nextToken,
    currentOffset,
    currentPosition,
    context
  };
}
const ERROR_DOMAIN$2 = "parser";
const KNOWN_ESCAPES = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function fromEscapeSequence(match, codePoint4, codePoint6) {
  switch (match) {
    case `\\\\`:
      return `\\`;
    // eslint-disable-next-line no-useless-escape
    case `\\'`:
      return `'`;
    default: {
      const codePoint = parseInt(codePoint4 || codePoint6, 16);
      if (codePoint <= 55295 || codePoint >= 57344) {
        return String.fromCodePoint(codePoint);
      }
      return "�";
    }
  }
}
function createParser(options = {}) {
  const location = options.location !== false;
  const { onError } = options;
  function emitError(tokenzer, code, start, offset, ...args) {
    const end = tokenzer.currentPosition();
    end.offset += offset;
    end.column += offset;
    if (onError) {
      const loc = location ? createLocation(start, end) : null;
      const err = createCompileError(code, loc, {
        domain: ERROR_DOMAIN$2,
        args
      });
      onError(err);
    }
  }
  function startNode(type, offset, loc) {
    const node = { type };
    if (location) {
      node.start = offset;
      node.end = offset;
      node.loc = { start: loc, end: loc };
    }
    return node;
  }
  function endNode(node, offset, pos, type) {
    if (location) {
      node.end = offset;
      if (node.loc) {
        node.loc.end = pos;
      }
    }
  }
  function parseText(tokenizer, value) {
    const context = tokenizer.context();
    const node = startNode(3, context.offset, context.startLoc);
    node.value = value;
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseList(tokenizer, index) {
    const context = tokenizer.context();
    const { lastOffset: offset, lastStartLoc: loc } = context;
    const node = startNode(5, offset, loc);
    node.index = parseInt(index, 10);
    tokenizer.nextToken();
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseNamed(tokenizer, key) {
    const context = tokenizer.context();
    const { lastOffset: offset, lastStartLoc: loc } = context;
    const node = startNode(4, offset, loc);
    node.key = key;
    tokenizer.nextToken();
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseLiteral(tokenizer, value) {
    const context = tokenizer.context();
    const { lastOffset: offset, lastStartLoc: loc } = context;
    const node = startNode(9, offset, loc);
    node.value = value.replace(KNOWN_ESCAPES, fromEscapeSequence);
    tokenizer.nextToken();
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseLinkedModifier(tokenizer) {
    const token = tokenizer.nextToken();
    const context = tokenizer.context();
    const { lastOffset: offset, lastStartLoc: loc } = context;
    const node = startNode(8, offset, loc);
    if (token.type !== 11) {
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER, context.lastStartLoc, 0);
      node.value = "";
      endNode(node, offset, loc);
      return {
        nextConsumeToken: token,
        node
      };
    }
    if (token.value == null) {
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
    }
    node.value = token.value || "";
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return {
      node
    };
  }
  function parseLinkedKey(tokenizer, value) {
    const context = tokenizer.context();
    const node = startNode(7, context.offset, context.startLoc);
    node.value = value;
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseLinked(tokenizer) {
    const context = tokenizer.context();
    const linkedNode = startNode(6, context.offset, context.startLoc);
    let token = tokenizer.nextToken();
    if (token.type === 8) {
      const parsed = parseLinkedModifier(tokenizer);
      linkedNode.modifier = parsed.node;
      token = parsed.nextConsumeToken || tokenizer.nextToken();
    }
    if (token.type !== 9) {
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
    }
    token = tokenizer.nextToken();
    if (token.type === 2) {
      token = tokenizer.nextToken();
    }
    switch (token.type) {
      case 10:
        if (token.value == null) {
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        linkedNode.key = parseLinkedKey(tokenizer, token.value || "");
        break;
      case 4:
        if (token.value == null) {
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        linkedNode.key = parseNamed(tokenizer, token.value || "");
        break;
      case 5:
        if (token.value == null) {
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        linkedNode.key = parseList(tokenizer, token.value || "");
        break;
      case 6:
        if (token.value == null) {
          emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
        }
        linkedNode.key = parseLiteral(tokenizer, token.value || "");
        break;
      default: {
        emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY, context.lastStartLoc, 0);
        const nextContext = tokenizer.context();
        const emptyLinkedKeyNode = startNode(7, nextContext.offset, nextContext.startLoc);
        emptyLinkedKeyNode.value = "";
        endNode(emptyLinkedKeyNode, nextContext.offset, nextContext.startLoc);
        linkedNode.key = emptyLinkedKeyNode;
        endNode(linkedNode, nextContext.offset, nextContext.startLoc);
        return {
          nextConsumeToken: token,
          node: linkedNode
        };
      }
    }
    endNode(linkedNode, tokenizer.currentOffset(), tokenizer.currentPosition());
    return {
      node: linkedNode
    };
  }
  function parseMessage(tokenizer) {
    const context = tokenizer.context();
    const startOffset = context.currentType === 1 ? tokenizer.currentOffset() : context.offset;
    const startLoc = context.currentType === 1 ? context.endLoc : context.startLoc;
    const node = startNode(2, startOffset, startLoc);
    node.items = [];
    let nextToken = null;
    do {
      const token = nextToken || tokenizer.nextToken();
      nextToken = null;
      switch (token.type) {
        case 0:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.items.push(parseText(tokenizer, token.value || ""));
          break;
        case 5:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.items.push(parseList(tokenizer, token.value || ""));
          break;
        case 4:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.items.push(parseNamed(tokenizer, token.value || ""));
          break;
        case 6:
          if (token.value == null) {
            emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
          }
          node.items.push(parseLiteral(tokenizer, token.value || ""));
          break;
        case 7: {
          const parsed = parseLinked(tokenizer);
          node.items.push(parsed.node);
          nextToken = parsed.nextConsumeToken || null;
          break;
        }
      }
    } while (context.currentType !== 13 && context.currentType !== 1);
    const endOffset = context.currentType === 1 ? context.lastOffset : tokenizer.currentOffset();
    const endLoc = context.currentType === 1 ? context.lastEndLoc : tokenizer.currentPosition();
    endNode(node, endOffset, endLoc);
    return node;
  }
  function parsePlural(tokenizer, offset, loc, msgNode) {
    const context = tokenizer.context();
    let hasEmptyMessage = msgNode.items.length === 0;
    const node = startNode(1, offset, loc);
    node.cases = [];
    node.cases.push(msgNode);
    do {
      const msg = parseMessage(tokenizer);
      if (!hasEmptyMessage) {
        hasEmptyMessage = msg.items.length === 0;
      }
      node.cases.push(msg);
    } while (context.currentType !== 13);
    if (hasEmptyMessage) {
      emitError(tokenizer, CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL, loc, 0);
    }
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  function parseResource(tokenizer) {
    const context = tokenizer.context();
    const { offset, startLoc } = context;
    const msgNode = parseMessage(tokenizer);
    if (context.currentType === 13) {
      return msgNode;
    } else {
      return parsePlural(tokenizer, offset, startLoc, msgNode);
    }
  }
  function parse2(source) {
    const tokenizer = createTokenizer(source, assign({}, options));
    const context = tokenizer.context();
    const node = startNode(0, context.offset, context.startLoc);
    if (location && node.loc) {
      node.loc.source = source;
    }
    node.body = parseResource(tokenizer);
    if (options.onCacheKey) {
      node.cacheKey = options.onCacheKey(source);
    }
    if (context.currentType !== 13) {
      emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, source[context.offset] || "");
    }
    endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
    return node;
  }
  return { parse: parse2 };
}
function getTokenCaption(token) {
  if (token.type === 13) {
    return "EOF";
  }
  const name = (token.value || "").replace(/\r?\n/gu, "\\n");
  return name.length > 10 ? name.slice(0, 9) + "…" : name;
}
function createTransformer(ast, options = {}) {
  const _context = {
    ast,
    helpers: /* @__PURE__ */ new Set()
  };
  const context = () => _context;
  const helper = (name) => {
    _context.helpers.add(name);
    return name;
  };
  return { context, helper };
}
function traverseNodes(nodes, transformer) {
  for (let i = 0; i < nodes.length; i++) {
    traverseNode(nodes[i], transformer);
  }
}
function traverseNode(node, transformer) {
  switch (node.type) {
    case 1:
      traverseNodes(node.cases, transformer);
      transformer.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      traverseNodes(node.items, transformer);
      break;
    case 6: {
      const linked = node;
      traverseNode(linked.key, transformer);
      transformer.helper(
        "linked"
        /* HelperNameMap.LINKED */
      );
      transformer.helper(
        "type"
        /* HelperNameMap.TYPE */
      );
      break;
    }
    case 5:
      transformer.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      );
      transformer.helper(
        "list"
        /* HelperNameMap.LIST */
      );
      break;
    case 4:
      transformer.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      );
      transformer.helper(
        "named"
        /* HelperNameMap.NAMED */
      );
      break;
  }
}
function transform(ast, options = {}) {
  const transformer = createTransformer(ast);
  transformer.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  );
  ast.body && traverseNode(ast.body, transformer);
  const context = transformer.context();
  ast.helpers = Array.from(context.helpers);
}
function optimize(ast) {
  const body = ast.body;
  if (body.type === 2) {
    optimizeMessageNode(body);
  } else {
    body.cases.forEach((c) => optimizeMessageNode(c));
  }
  return ast;
}
function optimizeMessageNode(message) {
  if (message.items.length === 1) {
    const item = message.items[0];
    if (item.type === 3 || item.type === 9) {
      message.static = item.value;
      delete item.value;
    }
  } else {
    const values = [];
    for (let i = 0; i < message.items.length; i++) {
      const item = message.items[i];
      if (!(item.type === 3 || item.type === 9)) {
        break;
      }
      if (item.value == null) {
        break;
      }
      values.push(item.value);
    }
    if (values.length === message.items.length) {
      message.static = join(values);
      for (let i = 0; i < message.items.length; i++) {
        const item = message.items[i];
        if (item.type === 3 || item.type === 9) {
          delete item.value;
        }
      }
    }
  }
}
function minify(node) {
  node.t = node.type;
  switch (node.type) {
    case 0: {
      const resource = node;
      minify(resource.body);
      resource.b = resource.body;
      delete resource.body;
      break;
    }
    case 1: {
      const plural = node;
      const cases = plural.cases;
      for (let i = 0; i < cases.length; i++) {
        minify(cases[i]);
      }
      plural.c = cases;
      delete plural.cases;
      break;
    }
    case 2: {
      const message = node;
      const items = message.items;
      for (let i = 0; i < items.length; i++) {
        minify(items[i]);
      }
      message.i = items;
      delete message.items;
      if (message.static) {
        message.s = message.static;
        delete message.static;
      }
      break;
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      const valueNode = node;
      if (valueNode.value) {
        valueNode.v = valueNode.value;
        delete valueNode.value;
      }
      break;
    }
    case 6: {
      const linked = node;
      minify(linked.key);
      linked.k = linked.key;
      delete linked.key;
      if (linked.modifier) {
        minify(linked.modifier);
        linked.m = linked.modifier;
        delete linked.modifier;
      }
      break;
    }
    case 5: {
      const list = node;
      list.i = list.index;
      delete list.index;
      break;
    }
    case 4: {
      const named = node;
      named.k = named.key;
      delete named.key;
      break;
    }
  }
  delete node.type;
}
function createCodeGenerator(ast, options) {
  const { filename, breakLineCode, needIndent: _needIndent } = options;
  const location = options.location !== false;
  const _context = {
    filename,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode,
    needIndent: _needIndent,
    indentLevel: 0
  };
  if (location && ast.loc) {
    _context.source = ast.loc.source;
  }
  const context = () => _context;
  function push(code, node) {
    _context.code += code;
  }
  function _newline(n2, withBreakLine = true) {
    const _breakLineCode = withBreakLine ? breakLineCode : "";
    push(_needIndent ? _breakLineCode + `  `.repeat(n2) : _breakLineCode);
  }
  function indent(withNewLine = true) {
    const level = ++_context.indentLevel;
    withNewLine && _newline(level);
  }
  function deindent(withNewLine = true) {
    const level = --_context.indentLevel;
    withNewLine && _newline(level);
  }
  function newline() {
    _newline(_context.indentLevel);
  }
  const helper = (key) => `_${key}`;
  const needIndent = () => _context.needIndent;
  return {
    context,
    push,
    indent,
    deindent,
    newline,
    helper,
    needIndent
  };
}
function generateLinkedNode(generator, node) {
  const { helper } = generator;
  generator.push(`${helper(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`);
  generateNode(generator, node.key);
  if (node.modifier) {
    generator.push(`, `);
    generateNode(generator, node.modifier);
    generator.push(`, _type`);
  } else {
    generator.push(`, undefined, _type`);
  }
  generator.push(`)`);
}
function generateMessageNode(generator, node) {
  const { helper, needIndent } = generator;
  generator.push(`${helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`);
  generator.indent(needIndent());
  const length = node.items.length;
  for (let i = 0; i < length; i++) {
    generateNode(generator, node.items[i]);
    if (i === length - 1) {
      break;
    }
    generator.push(", ");
  }
  generator.deindent(needIndent());
  generator.push("])");
}
function generatePluralNode(generator, node) {
  const { helper, needIndent } = generator;
  if (node.cases.length > 1) {
    generator.push(`${helper(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`);
    generator.indent(needIndent());
    const length = node.cases.length;
    for (let i = 0; i < length; i++) {
      generateNode(generator, node.cases[i]);
      if (i === length - 1) {
        break;
      }
      generator.push(", ");
    }
    generator.deindent(needIndent());
    generator.push(`])`);
  }
}
function generateResource(generator, node) {
  if (node.body) {
    generateNode(generator, node.body);
  } else {
    generator.push("null");
  }
}
function generateNode(generator, node) {
  const { helper } = generator;
  switch (node.type) {
    case 0:
      generateResource(generator, node);
      break;
    case 1:
      generatePluralNode(generator, node);
      break;
    case 2:
      generateMessageNode(generator, node);
      break;
    case 6:
      generateLinkedNode(generator, node);
      break;
    case 8:
      generator.push(JSON.stringify(node.value), node);
      break;
    case 7:
      generator.push(JSON.stringify(node.value), node);
      break;
    case 5:
      generator.push(`${helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${helper(
        "list"
        /* HelperNameMap.LIST */
      )}(${node.index}))`, node);
      break;
    case 4:
      generator.push(`${helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${helper(
        "named"
        /* HelperNameMap.NAMED */
      )}(${JSON.stringify(node.key)}))`, node);
      break;
    case 9:
      generator.push(JSON.stringify(node.value), node);
      break;
    case 3:
      generator.push(JSON.stringify(node.value), node);
      break;
  }
}
const generate = (ast, options = {}) => {
  const mode = isString(options.mode) ? options.mode : "normal";
  const filename = isString(options.filename) ? options.filename : "message.intl";
  !!options.sourceMap;
  const breakLineCode = options.breakLineCode != null ? options.breakLineCode : mode === "arrow" ? ";" : "\n";
  const needIndent = options.needIndent ? options.needIndent : mode !== "arrow";
  const helpers = ast.helpers || [];
  const generator = createCodeGenerator(ast, {
    filename,
    breakLineCode,
    needIndent
  });
  generator.push(mode === "normal" ? `function __msg__ (ctx) {` : `(ctx) => {`);
  generator.indent(needIndent);
  if (helpers.length > 0) {
    generator.push(`const { ${join(helpers.map((s) => `${s}: _${s}`), ", ")} } = ctx`);
    generator.newline();
  }
  generator.push(`return `);
  generateNode(generator, ast);
  generator.deindent(needIndent);
  generator.push(`}`);
  delete ast.helpers;
  const { code, map } = generator.context();
  return {
    ast,
    code,
    map: map ? map.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function baseCompile$1(source, options = {}) {
  const assignedOptions = assign({}, options);
  const jit = !!assignedOptions.jit;
  const enalbeMinify = !!assignedOptions.minify;
  const enambeOptimize = assignedOptions.optimize == null ? true : assignedOptions.optimize;
  const parser = createParser(assignedOptions);
  const ast = parser.parse(source);
  if (!jit) {
    transform(ast, assignedOptions);
    return generate(ast, assignedOptions);
  } else {
    enambeOptimize && optimize(ast);
    enalbeMinify && minify(ast);
    return { ast, code: "" };
  }
}
function format(ast) {
  const msg = (ctx) => formatParts(ctx, ast);
  return msg;
}
function formatParts(ctx, ast) {
  const body = resolveBody(ast);
  if (body == null) {
    throw createUnhandleNodeError(
      0
      /* NodeTypes.Resource */
    );
  }
  const type = resolveType(body);
  if (type === 1) {
    const plural = body;
    const cases = resolveCases(plural);
    return ctx.plural(cases.reduce((messages, c) => [
      ...messages,
      formatMessageParts(ctx, c)
    ], []));
  } else {
    return formatMessageParts(ctx, body);
  }
}
const PROPS_BODY = ["b", "body"];
function resolveBody(node) {
  return resolveProps(node, PROPS_BODY);
}
const PROPS_CASES = ["c", "cases"];
function resolveCases(node) {
  return resolveProps(node, PROPS_CASES, []);
}
function formatMessageParts(ctx, node) {
  const static_ = resolveStatic(node);
  if (static_ != null) {
    return ctx.type === "text" ? static_ : ctx.normalize([static_]);
  } else {
    const messages = resolveItems(node).reduce((acm, c) => [...acm, formatMessagePart(ctx, c)], []);
    return ctx.normalize(messages);
  }
}
const PROPS_STATIC = ["s", "static"];
function resolveStatic(node) {
  return resolveProps(node, PROPS_STATIC);
}
const PROPS_ITEMS = ["i", "items"];
function resolveItems(node) {
  return resolveProps(node, PROPS_ITEMS, []);
}
function formatMessagePart(ctx, node) {
  const type = resolveType(node);
  switch (type) {
    case 3: {
      return resolveValue$1(node, type);
    }
    case 9: {
      return resolveValue$1(node, type);
    }
    case 4: {
      const named = node;
      if (hasOwn(named, "k") && named.k) {
        return ctx.interpolate(ctx.named(named.k));
      }
      if (hasOwn(named, "key") && named.key) {
        return ctx.interpolate(ctx.named(named.key));
      }
      throw createUnhandleNodeError(type);
    }
    case 5: {
      const list = node;
      if (hasOwn(list, "i") && isNumber(list.i)) {
        return ctx.interpolate(ctx.list(list.i));
      }
      if (hasOwn(list, "index") && isNumber(list.index)) {
        return ctx.interpolate(ctx.list(list.index));
      }
      throw createUnhandleNodeError(type);
    }
    case 6: {
      const linked = node;
      const modifier = resolveLinkedModifier(linked);
      const key = resolveLinkedKey(linked);
      return ctx.linked(formatMessagePart(ctx, key), modifier ? formatMessagePart(ctx, modifier) : void 0, ctx.type);
    }
    case 7: {
      return resolveValue$1(node, type);
    }
    case 8: {
      return resolveValue$1(node, type);
    }
    default:
      throw new Error(`unhandled node on format message part: ${type}`);
  }
}
const PROPS_TYPE = ["t", "type"];
function resolveType(node) {
  return resolveProps(node, PROPS_TYPE);
}
const PROPS_VALUE = ["v", "value"];
function resolveValue$1(node, type) {
  const resolved = resolveProps(node, PROPS_VALUE);
  if (resolved) {
    return resolved;
  } else {
    throw createUnhandleNodeError(type);
  }
}
const PROPS_MODIFIER = ["m", "modifier"];
function resolveLinkedModifier(node) {
  return resolveProps(node, PROPS_MODIFIER);
}
const PROPS_KEY = ["k", "key"];
function resolveLinkedKey(node) {
  const resolved = resolveProps(node, PROPS_KEY);
  if (resolved) {
    return resolved;
  } else {
    throw createUnhandleNodeError(
      6
      /* NodeTypes.Linked */
    );
  }
}
function resolveProps(node, props, defaultValue) {
  for (let i = 0; i < props.length; i++) {
    const prop = props[i];
    if (hasOwn(node, prop) && node[prop] != null) {
      return node[prop];
    }
  }
  return defaultValue;
}
function createUnhandleNodeError(type) {
  return new Error(`unhandled node type: ${type}`);
}
const defaultOnCacheKey = (message) => message;
let compileCache = create();
function isMessageAST(val) {
  return isObject(val) && resolveType(val) === 0 && (hasOwn(val, "b") || hasOwn(val, "body"));
}
function baseCompile(message, options = {}) {
  let detectError = false;
  const onError = options.onError || defaultOnError;
  options.onError = (err) => {
    detectError = true;
    onError(err);
  };
  return { ...baseCompile$1(message, options), detectError };
}
// @__NO_SIDE_EFFECTS__
function compile(message, context) {
  if (isString(message)) {
    isBoolean(context.warnHtmlMessage) ? context.warnHtmlMessage : true;
    const onCacheKey = context.onCacheKey || defaultOnCacheKey;
    const cacheKey = onCacheKey(message);
    const cached = compileCache[cacheKey];
    if (cached) {
      return cached;
    }
    const { ast, detectError } = baseCompile(message, {
      ...context,
      location: "production" !== "production",
      jit: true
    });
    const msg = format(ast);
    return !detectError ? compileCache[cacheKey] = msg : msg;
  } else {
    const cacheKey = message.cacheKey;
    if (cacheKey) {
      const cached = compileCache[cacheKey];
      if (cached) {
        return cached;
      }
      return compileCache[cacheKey] = format(message);
    } else {
      return format(message);
    }
  }
}
const CoreErrorCodes = {
  INVALID_ARGUMENT: COMPILE_ERROR_CODES_EXTEND_POINT,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
};
const CORE_ERROR_CODES_EXTEND_POINT = 24;
function createCoreError(code) {
  return createCompileError(code, null, void 0);
}
function getLocale(context, options) {
  return options.locale != null ? resolveLocale(options.locale) : resolveLocale(context.locale);
}
let _resolveLocale;
function resolveLocale(locale) {
  if (isString(locale)) {
    return locale;
  } else {
    if (isFunction(locale)) {
      if (locale.resolvedOnce && _resolveLocale != null) {
        return _resolveLocale;
      } else if (locale.constructor.name === "Function") {
        const resolve2 = locale();
        if (isPromise(resolve2)) {
          throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
        }
        return _resolveLocale = resolve2;
      } else {
        throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
      }
    } else {
      throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_TYPE);
    }
  }
}
function fallbackWithSimple(ctx, fallback, start) {
  return [.../* @__PURE__ */ new Set([
    start,
    ...isArray(fallback) ? fallback : isObject(fallback) ? Object.keys(fallback) : isString(fallback) ? [fallback] : [start]
  ])];
}
function fallbackWithLocaleChain(ctx, fallback, start) {
  const startLocale = isString(start) ? start : DEFAULT_LOCALE;
  const context = ctx;
  if (!context.__localeChainCache) {
    context.__localeChainCache = /* @__PURE__ */ new Map();
  }
  let chain = context.__localeChainCache.get(startLocale);
  if (!chain) {
    chain = [];
    let block = [start];
    while (isArray(block)) {
      block = appendBlockToChain(chain, block, fallback);
    }
    const defaults2 = isArray(fallback) || !isPlainObject(fallback) ? fallback : fallback["default"] ? fallback["default"] : null;
    block = isString(defaults2) ? [defaults2] : defaults2;
    if (isArray(block)) {
      appendBlockToChain(chain, block, false);
    }
    context.__localeChainCache.set(startLocale, chain);
  }
  return chain;
}
function appendBlockToChain(chain, block, blocks) {
  let follow = true;
  for (let i = 0; i < block.length && isBoolean(follow); i++) {
    const locale = block[i];
    if (isString(locale)) {
      follow = appendLocaleToChain(chain, block[i], blocks);
    }
  }
  return follow;
}
function appendLocaleToChain(chain, locale, blocks) {
  let follow;
  const tokens = locale.split("-");
  do {
    const target = tokens.join("-");
    follow = appendItemToChain(chain, target, blocks);
    tokens.splice(-1, 1);
  } while (tokens.length && follow === true);
  return follow;
}
function appendItemToChain(chain, target, blocks) {
  let follow = false;
  if (!chain.includes(target)) {
    follow = true;
    if (target) {
      follow = target[target.length - 1] !== "!";
      const locale = target.replace(/!/g, "");
      chain.push(locale);
      if ((isArray(blocks) || isPlainObject(blocks)) && blocks[locale]) {
        follow = blocks[locale];
      }
    }
  }
  return follow;
}
const pathStateMachine = [];
pathStateMachine[
  0
  /* States.BEFORE_PATH */
] = {
  [
    "w"
    /* PathCharTypes.WORKSPACE */
  ]: [
    0
    /* States.BEFORE_PATH */
  ],
  [
    "i"
    /* PathCharTypes.IDENT */
  ]: [
    3,
    0
    /* Actions.APPEND */
  ],
  [
    "["
    /* PathCharTypes.LEFT_BRACKET */
  ]: [
    4
    /* States.IN_SUB_PATH */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: [
    7
    /* States.AFTER_PATH */
  ]
};
pathStateMachine[
  1
  /* States.IN_PATH */
] = {
  [
    "w"
    /* PathCharTypes.WORKSPACE */
  ]: [
    1
    /* States.IN_PATH */
  ],
  [
    "."
    /* PathCharTypes.DOT */
  ]: [
    2
    /* States.BEFORE_IDENT */
  ],
  [
    "["
    /* PathCharTypes.LEFT_BRACKET */
  ]: [
    4
    /* States.IN_SUB_PATH */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: [
    7
    /* States.AFTER_PATH */
  ]
};
pathStateMachine[
  2
  /* States.BEFORE_IDENT */
] = {
  [
    "w"
    /* PathCharTypes.WORKSPACE */
  ]: [
    2
    /* States.BEFORE_IDENT */
  ],
  [
    "i"
    /* PathCharTypes.IDENT */
  ]: [
    3,
    0
    /* Actions.APPEND */
  ],
  [
    "0"
    /* PathCharTypes.ZERO */
  ]: [
    3,
    0
    /* Actions.APPEND */
  ]
};
pathStateMachine[
  3
  /* States.IN_IDENT */
] = {
  [
    "i"
    /* PathCharTypes.IDENT */
  ]: [
    3,
    0
    /* Actions.APPEND */
  ],
  [
    "0"
    /* PathCharTypes.ZERO */
  ]: [
    3,
    0
    /* Actions.APPEND */
  ],
  [
    "w"
    /* PathCharTypes.WORKSPACE */
  ]: [
    1,
    1
    /* Actions.PUSH */
  ],
  [
    "."
    /* PathCharTypes.DOT */
  ]: [
    2,
    1
    /* Actions.PUSH */
  ],
  [
    "["
    /* PathCharTypes.LEFT_BRACKET */
  ]: [
    4,
    1
    /* Actions.PUSH */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: [
    7,
    1
    /* Actions.PUSH */
  ]
};
pathStateMachine[
  4
  /* States.IN_SUB_PATH */
] = {
  [
    "'"
    /* PathCharTypes.SINGLE_QUOTE */
  ]: [
    5,
    0
    /* Actions.APPEND */
  ],
  [
    '"'
    /* PathCharTypes.DOUBLE_QUOTE */
  ]: [
    6,
    0
    /* Actions.APPEND */
  ],
  [
    "["
    /* PathCharTypes.LEFT_BRACKET */
  ]: [
    4,
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ],
  [
    "]"
    /* PathCharTypes.RIGHT_BRACKET */
  ]: [
    1,
    3
    /* Actions.PUSH_SUB_PATH */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: 8,
  [
    "l"
    /* PathCharTypes.ELSE */
  ]: [
    4,
    0
    /* Actions.APPEND */
  ]
};
pathStateMachine[
  5
  /* States.IN_SINGLE_QUOTE */
] = {
  [
    "'"
    /* PathCharTypes.SINGLE_QUOTE */
  ]: [
    4,
    0
    /* Actions.APPEND */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: 8,
  [
    "l"
    /* PathCharTypes.ELSE */
  ]: [
    5,
    0
    /* Actions.APPEND */
  ]
};
pathStateMachine[
  6
  /* States.IN_DOUBLE_QUOTE */
] = {
  [
    '"'
    /* PathCharTypes.DOUBLE_QUOTE */
  ]: [
    4,
    0
    /* Actions.APPEND */
  ],
  [
    "o"
    /* PathCharTypes.END_OF_FAIL */
  ]: 8,
  [
    "l"
    /* PathCharTypes.ELSE */
  ]: [
    6,
    0
    /* Actions.APPEND */
  ]
};
const literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral(exp) {
  return literalValueRE.test(exp);
}
function stripQuotes(str) {
  const a = str.charCodeAt(0);
  const b = str.charCodeAt(str.length - 1);
  return a === b && (a === 34 || a === 39) ? str.slice(1, -1) : str;
}
function getPathCharType(ch) {
  if (ch === void 0 || ch === null) {
    return "o";
  }
  const code = ch.charCodeAt(0);
  switch (code) {
    case 91:
    // [
    case 93:
    // ]
    case 46:
    // .
    case 34:
    // "
    case 39:
      return ch;
    case 95:
    // _
    case 36:
    // $
    case 45:
      return "i";
    case 9:
    // Tab (HT)
    case 10:
    // Newline (LF)
    case 13:
    // Return (CR)
    case 160:
    // No-break space (NBSP)
    case 65279:
    // Byte Order Mark (BOM)
    case 8232:
    // Line Separator (LS)
    case 8233:
      return "w";
  }
  return "i";
}
function formatSubPath(path) {
  const trimmed = path.trim();
  if (path.charAt(0) === "0" && isNaN(parseInt(path))) {
    return false;
  }
  return isLiteral(trimmed) ? stripQuotes(trimmed) : "*" + trimmed;
}
function parse(path) {
  const keys = [];
  let index = -1;
  let mode = 0;
  let subPathDepth = 0;
  let c;
  let key;
  let newChar;
  let type;
  let transition;
  let action;
  let typeMap;
  const actions = [];
  actions[
    0
    /* Actions.APPEND */
  ] = () => {
    if (key === void 0) {
      key = newChar;
    } else {
      key += newChar;
    }
  };
  actions[
    1
    /* Actions.PUSH */
  ] = () => {
    if (key !== void 0) {
      keys.push(key);
      key = void 0;
    }
  };
  actions[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    actions[
      0
      /* Actions.APPEND */
    ]();
    subPathDepth++;
  };
  actions[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = 4;
      actions[
        0
        /* Actions.APPEND */
      ]();
    } else {
      subPathDepth = 0;
      if (key === void 0) {
        return false;
      }
      key = formatSubPath(key);
      if (key === false) {
        return false;
      } else {
        actions[
          1
          /* Actions.PUSH */
        ]();
      }
    }
  };
  function maybeUnescapeQuote() {
    const nextChar = path[index + 1];
    if (mode === 5 && nextChar === "'" || mode === 6 && nextChar === '"') {
      index++;
      newChar = "\\" + nextChar;
      actions[
        0
        /* Actions.APPEND */
      ]();
      return true;
    }
  }
  while (mode !== null) {
    index++;
    c = path[index];
    if (c === "\\" && maybeUnescapeQuote()) {
      continue;
    }
    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap[
      "l"
      /* PathCharTypes.ELSE */
    ] || 8;
    if (transition === 8) {
      return;
    }
    mode = transition[0];
    if (transition[1] !== void 0) {
      action = actions[transition[1]];
      if (action) {
        newChar = c;
        if (action() === false) {
          return;
        }
      }
    }
    if (mode === 7) {
      return keys;
    }
  }
}
const cache = /* @__PURE__ */ new Map();
function resolveWithKeyValue(obj, path) {
  return isObject(obj) ? obj[path] : null;
}
function resolveValue(obj, path) {
  if (!isObject(obj)) {
    return null;
  }
  let hit = cache.get(path);
  if (!hit) {
    hit = parse(path);
    if (hit) {
      cache.set(path, hit);
    }
  }
  if (!hit) {
    return null;
  }
  const len = hit.length;
  let last = obj;
  let i = 0;
  while (i < len) {
    const val = last[hit[i]];
    if (val === void 0) {
      return null;
    }
    if (isFunction(last)) {
      return null;
    }
    last = val;
    i++;
  }
  return last;
}
const VERSION$1 = "10.0.5";
const NOT_REOSLVED = -1;
const DEFAULT_LOCALE = "en-US";
const MISSING_RESOLVE_VALUE = "";
const capitalize = (str) => `${str.charAt(0).toLocaleUpperCase()}${str.substr(1)}`;
function getDefaultLinkedModifiers() {
  return {
    upper: (val, type) => {
      return type === "text" && isString(val) ? val.toUpperCase() : type === "vnode" && isObject(val) && "__v_isVNode" in val ? val.children.toUpperCase() : val;
    },
    lower: (val, type) => {
      return type === "text" && isString(val) ? val.toLowerCase() : type === "vnode" && isObject(val) && "__v_isVNode" in val ? val.children.toLowerCase() : val;
    },
    capitalize: (val, type) => {
      return type === "text" && isString(val) ? capitalize(val) : type === "vnode" && isObject(val) && "__v_isVNode" in val ? capitalize(val.children) : val;
    }
  };
}
let _compiler;
function registerMessageCompiler(compiler) {
  _compiler = compiler;
}
let _resolver;
function registerMessageResolver(resolver) {
  _resolver = resolver;
}
let _fallbacker;
function registerLocaleFallbacker(fallbacker) {
  _fallbacker = fallbacker;
}
const setAdditionalMeta = /* @__NO_SIDE_EFFECTS__ */ (meta) => {
};
let _fallbackContext = null;
const setFallbackContext = (context) => {
  _fallbackContext = context;
};
const getFallbackContext = () => _fallbackContext;
let _cid = 0;
function createCoreContext(options = {}) {
  const onWarn = isFunction(options.onWarn) ? options.onWarn : warn;
  const version2 = isString(options.version) ? options.version : VERSION$1;
  const locale = isString(options.locale) || isFunction(options.locale) ? options.locale : DEFAULT_LOCALE;
  const _locale = isFunction(locale) ? DEFAULT_LOCALE : locale;
  const fallbackLocale = isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || isString(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale;
  const messages = isPlainObject(options.messages) ? options.messages : createResources(_locale);
  const datetimeFormats = isPlainObject(options.datetimeFormats) ? options.datetimeFormats : createResources(_locale);
  const numberFormats = isPlainObject(options.numberFormats) ? options.numberFormats : createResources(_locale);
  const modifiers = assign(create(), options.modifiers, getDefaultLinkedModifiers());
  const pluralRules = options.pluralRules || create();
  const missing = isFunction(options.missing) ? options.missing : null;
  const missingWarn = isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  const fallbackWarn = isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  const fallbackFormat = !!options.fallbackFormat;
  const unresolving = !!options.unresolving;
  const postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
  const processor = isPlainObject(options.processor) ? options.processor : null;
  const warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  const escapeParameter = !!options.escapeParameter;
  const messageCompiler = isFunction(options.messageCompiler) ? options.messageCompiler : _compiler;
  const messageResolver = isFunction(options.messageResolver) ? options.messageResolver : _resolver || resolveWithKeyValue;
  const localeFallbacker = isFunction(options.localeFallbacker) ? options.localeFallbacker : _fallbacker || fallbackWithSimple;
  const fallbackContext = isObject(options.fallbackContext) ? options.fallbackContext : void 0;
  const internalOptions = options;
  const __datetimeFormatters = isObject(internalOptions.__datetimeFormatters) ? internalOptions.__datetimeFormatters : /* @__PURE__ */ new Map();
  const __numberFormatters = isObject(internalOptions.__numberFormatters) ? internalOptions.__numberFormatters : /* @__PURE__ */ new Map();
  const __meta = isObject(internalOptions.__meta) ? internalOptions.__meta : {};
  _cid++;
  const context = {
    version: version2,
    cid: _cid,
    locale,
    fallbackLocale,
    messages,
    modifiers,
    pluralRules,
    missing,
    missingWarn,
    fallbackWarn,
    fallbackFormat,
    unresolving,
    postTranslation,
    processor,
    warnHtmlMessage,
    escapeParameter,
    messageCompiler,
    messageResolver,
    localeFallbacker,
    fallbackContext,
    onWarn,
    __meta
  };
  {
    context.datetimeFormats = datetimeFormats;
    context.numberFormats = numberFormats;
    context.__datetimeFormatters = __datetimeFormatters;
    context.__numberFormatters = __numberFormatters;
  }
  return context;
}
const createResources = (locale) => ({ [locale]: create() });
function handleMissing(context, key, locale, missingWarn, type) {
  const { missing, onWarn } = context;
  if (missing !== null) {
    const ret = missing(context, locale, key, type);
    return isString(ret) ? ret : key;
  } else {
    return key;
  }
}
function updateFallbackLocale(ctx, locale, fallback) {
  const context = ctx;
  context.__localeChainCache = /* @__PURE__ */ new Map();
  ctx.localeFallbacker(ctx, fallback, locale);
}
function isAlmostSameLocale(locale, compareLocale) {
  if (locale === compareLocale)
    return false;
  return locale.split("-")[0] === compareLocale.split("-")[0];
}
function isImplicitFallback(targetLocale, locales) {
  const index = locales.indexOf(targetLocale);
  if (index === -1) {
    return false;
  }
  for (let i = index + 1; i < locales.length; i++) {
    if (isAlmostSameLocale(targetLocale, locales[i])) {
      return true;
    }
  }
  return false;
}
function datetime(context, ...args) {
  const { datetimeFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
  const { __datetimeFormatters } = context;
  const [key, value, options, overrides] = parseDateTimeArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale = getLocale(context, options);
  const locales = localeFallbacker(
    context,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    fallbackLocale,
    locale
  );
  if (!isString(key) || key === "") {
    return new Intl.DateTimeFormat(locale, overrides).format(value);
  }
  let datetimeFormat = {};
  let targetLocale;
  let format2 = null;
  const type = "datetime format";
  for (let i = 0; i < locales.length; i++) {
    targetLocale = locales[i];
    datetimeFormat = datetimeFormats[targetLocale] || {};
    format2 = datetimeFormat[key];
    if (isPlainObject(format2))
      break;
    handleMissing(context, key, targetLocale, missingWarn, type);
  }
  if (!isPlainObject(format2) || !isString(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let id = `${targetLocale}__${key}`;
  if (!isEmptyObject(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __datetimeFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat(targetLocale, assign({}, format2, overrides));
    __datetimeFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
const DATETIME_FORMAT_OPTIONS_KEYS = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits"
];
function parseDateTimeArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  const options = create();
  let overrides = create();
  let value;
  if (isString(arg1)) {
    const matches = arg1.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!matches) {
      throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
    }
    const dateTime = matches[3] ? matches[3].trim().startsWith("T") ? `${matches[1].trim()}${matches[3].trim()}` : `${matches[1].trim()}T${matches[3].trim()}` : matches[1].trim();
    value = new Date(dateTime);
    try {
      value.toISOString();
    } catch {
      throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (isDate(arg1)) {
    if (isNaN(arg1.getTime())) {
      throw createCoreError(CoreErrorCodes.INVALID_DATE_ARGUMENT);
    }
    value = arg1;
  } else if (isNumber(arg1)) {
    value = arg1;
  } else {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  if (isString(arg2)) {
    options.key = arg2;
  } else if (isPlainObject(arg2)) {
    Object.keys(arg2).forEach((key) => {
      if (DATETIME_FORMAT_OPTIONS_KEYS.includes(key)) {
        overrides[key] = arg2[key];
      } else {
        options[key] = arg2[key];
      }
    });
  }
  if (isString(arg3)) {
    options.locale = arg3;
  } else if (isPlainObject(arg3)) {
    overrides = arg3;
  }
  if (isPlainObject(arg4)) {
    overrides = arg4;
  }
  return [options.key || "", value, options, overrides];
}
function clearDateTimeFormat(ctx, locale, format2) {
  const context = ctx;
  for (const key in format2) {
    const id = `${locale}__${key}`;
    if (!context.__datetimeFormatters.has(id)) {
      continue;
    }
    context.__datetimeFormatters.delete(id);
  }
}
function number(context, ...args) {
  const { numberFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
  const { __numberFormatters } = context;
  const [key, value, options, overrides] = parseNumberArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale = getLocale(context, options);
  const locales = localeFallbacker(
    context,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    fallbackLocale,
    locale
  );
  if (!isString(key) || key === "") {
    return new Intl.NumberFormat(locale, overrides).format(value);
  }
  let numberFormat = {};
  let targetLocale;
  let format2 = null;
  const type = "number format";
  for (let i = 0; i < locales.length; i++) {
    targetLocale = locales[i];
    numberFormat = numberFormats[targetLocale] || {};
    format2 = numberFormat[key];
    if (isPlainObject(format2))
      break;
    handleMissing(context, key, targetLocale, missingWarn, type);
  }
  if (!isPlainObject(format2) || !isString(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let id = `${targetLocale}__${key}`;
  if (!isEmptyObject(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __numberFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.NumberFormat(targetLocale, assign({}, format2, overrides));
    __numberFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
const NUMBER_FORMAT_OPTIONS_KEYS = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay"
];
function parseNumberArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  const options = create();
  let overrides = create();
  if (!isNumber(arg1)) {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  const value = arg1;
  if (isString(arg2)) {
    options.key = arg2;
  } else if (isPlainObject(arg2)) {
    Object.keys(arg2).forEach((key) => {
      if (NUMBER_FORMAT_OPTIONS_KEYS.includes(key)) {
        overrides[key] = arg2[key];
      } else {
        options[key] = arg2[key];
      }
    });
  }
  if (isString(arg3)) {
    options.locale = arg3;
  } else if (isPlainObject(arg3)) {
    overrides = arg3;
  }
  if (isPlainObject(arg4)) {
    overrides = arg4;
  }
  return [options.key || "", value, options, overrides];
}
function clearNumberFormat(ctx, locale, format2) {
  const context = ctx;
  for (const key in format2) {
    const id = `${locale}__${key}`;
    if (!context.__numberFormatters.has(id)) {
      continue;
    }
    context.__numberFormatters.delete(id);
  }
}
const DEFAULT_MODIFIER = (str) => str;
const DEFAULT_MESSAGE = (ctx) => "";
const DEFAULT_MESSAGE_DATA_TYPE = "text";
const DEFAULT_NORMALIZE = (values) => values.length === 0 ? "" : join(values);
const DEFAULT_INTERPOLATE = toDisplayString;
function pluralDefault(choice, choicesLength) {
  choice = Math.abs(choice);
  if (choicesLength === 2) {
    return choice ? choice > 1 ? 1 : 0 : 1;
  }
  return choice ? Math.min(choice, 2) : 0;
}
function getPluralIndex(options) {
  const index = isNumber(options.pluralIndex) ? options.pluralIndex : -1;
  return options.named && (isNumber(options.named.count) || isNumber(options.named.n)) ? isNumber(options.named.count) ? options.named.count : isNumber(options.named.n) ? options.named.n : index : index;
}
function normalizeNamed(pluralIndex, props) {
  if (!props.count) {
    props.count = pluralIndex;
  }
  if (!props.n) {
    props.n = pluralIndex;
  }
}
function createMessageContext(options = {}) {
  const locale = options.locale;
  const pluralIndex = getPluralIndex(options);
  const pluralRule = isObject(options.pluralRules) && isString(locale) && isFunction(options.pluralRules[locale]) ? options.pluralRules[locale] : pluralDefault;
  const orgPluralRule = isObject(options.pluralRules) && isString(locale) && isFunction(options.pluralRules[locale]) ? pluralDefault : void 0;
  const plural = (messages) => {
    return messages[pluralRule(pluralIndex, messages.length, orgPluralRule)];
  };
  const _list = options.list || [];
  const list = (index) => _list[index];
  const _named = options.named || create();
  isNumber(options.pluralIndex) && normalizeNamed(pluralIndex, _named);
  const named = (key) => _named[key];
  function message(key, useLinked) {
    const msg = isFunction(options.messages) ? options.messages(key, !!useLinked) : isObject(options.messages) ? options.messages[key] : false;
    return !msg ? options.parent ? options.parent.message(key) : DEFAULT_MESSAGE : msg;
  }
  const _modifier = (name) => options.modifiers ? options.modifiers[name] : DEFAULT_MODIFIER;
  const normalize = isPlainObject(options.processor) && isFunction(options.processor.normalize) ? options.processor.normalize : DEFAULT_NORMALIZE;
  const interpolate = isPlainObject(options.processor) && isFunction(options.processor.interpolate) ? options.processor.interpolate : DEFAULT_INTERPOLATE;
  const type = isPlainObject(options.processor) && isString(options.processor.type) ? options.processor.type : DEFAULT_MESSAGE_DATA_TYPE;
  const linked = (key, ...args) => {
    const [arg1, arg2] = args;
    let type2 = "text";
    let modifier = "";
    if (args.length === 1) {
      if (isObject(arg1)) {
        modifier = arg1.modifier || modifier;
        type2 = arg1.type || type2;
      } else if (isString(arg1)) {
        modifier = arg1 || modifier;
      }
    } else if (args.length === 2) {
      if (isString(arg1)) {
        modifier = arg1 || modifier;
      }
      if (isString(arg2)) {
        type2 = arg2 || type2;
      }
    }
    const ret = message(key, true)(ctx);
    const msg = (
      // The message in vnode resolved with linked are returned as an array by processor.nomalize
      type2 === "vnode" && isArray(ret) && modifier ? ret[0] : ret
    );
    return modifier ? _modifier(modifier)(msg, type2) : msg;
  };
  const ctx = {
    [
      "list"
      /* HelperNameMap.LIST */
    ]: list,
    [
      "named"
      /* HelperNameMap.NAMED */
    ]: named,
    [
      "plural"
      /* HelperNameMap.PLURAL */
    ]: plural,
    [
      "linked"
      /* HelperNameMap.LINKED */
    ]: linked,
    [
      "message"
      /* HelperNameMap.MESSAGE */
    ]: message,
    [
      "type"
      /* HelperNameMap.TYPE */
    ]: type,
    [
      "interpolate"
      /* HelperNameMap.INTERPOLATE */
    ]: interpolate,
    [
      "normalize"
      /* HelperNameMap.NORMALIZE */
    ]: normalize,
    [
      "values"
      /* HelperNameMap.VALUES */
    ]: assign(create(), _list, _named)
  };
  return ctx;
}
const NOOP_MESSAGE_FUNCTION = () => "";
const isMessageFunction = (val) => isFunction(val);
function translate(context, ...args) {
  const { fallbackFormat, postTranslation, unresolving, messageCompiler, fallbackLocale, messages } = context;
  const [key, options] = parseTranslateArgs(...args);
  const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
  const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const escapeParameter = isBoolean(options.escapeParameter) ? options.escapeParameter : context.escapeParameter;
  const resolvedMessage = !!options.resolvedMessage;
  const defaultMsgOrKey = isString(options.default) || isBoolean(options.default) ? !isBoolean(options.default) ? options.default : !messageCompiler ? () => key : key : fallbackFormat ? !messageCompiler ? () => key : key : null;
  const enableDefaultMsg = fallbackFormat || defaultMsgOrKey != null && (isString(defaultMsgOrKey) || isFunction(defaultMsgOrKey));
  const locale = getLocale(context, options);
  escapeParameter && escapeParams(options);
  let [formatScope, targetLocale, message] = !resolvedMessage ? resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) : [
    key,
    locale,
    messages[locale] || create()
  ];
  let format2 = formatScope;
  let cacheBaseKey = key;
  if (!resolvedMessage && !(isString(format2) || isMessageAST(format2) || isMessageFunction(format2))) {
    if (enableDefaultMsg) {
      format2 = defaultMsgOrKey;
      cacheBaseKey = format2;
    }
  }
  if (!resolvedMessage && (!(isString(format2) || isMessageAST(format2) || isMessageFunction(format2)) || !isString(targetLocale))) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let occurred = false;
  const onError = () => {
    occurred = true;
  };
  const msg = !isMessageFunction(format2) ? compileMessageFormat(context, key, targetLocale, format2, cacheBaseKey, onError) : format2;
  if (occurred) {
    return format2;
  }
  const ctxOptions = getMessageContextOptions(context, targetLocale, message, options);
  const msgContext = createMessageContext(ctxOptions);
  const messaged = evaluateMessage(context, msg, msgContext);
  const ret = postTranslation ? postTranslation(messaged, key) : messaged;
  return ret;
}
function escapeParams(options) {
  if (isArray(options.list)) {
    options.list = options.list.map((item) => isString(item) ? escapeHtml(item) : item);
  } else if (isObject(options.named)) {
    Object.keys(options.named).forEach((key) => {
      if (isString(options.named[key])) {
        options.named[key] = escapeHtml(options.named[key]);
      }
    });
  }
}
function resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) {
  const { messages, onWarn, messageResolver: resolveValue2, localeFallbacker } = context;
  const locales = localeFallbacker(context, fallbackLocale, locale);
  let message = create();
  let targetLocale;
  let format2 = null;
  const type = "translate";
  for (let i = 0; i < locales.length; i++) {
    targetLocale = locales[i];
    message = messages[targetLocale] || create();
    if ((format2 = resolveValue2(message, key)) === null) {
      format2 = message[key];
    }
    if (isString(format2) || isMessageAST(format2) || isMessageFunction(format2)) {
      break;
    }
    if (!isImplicitFallback(targetLocale, locales)) {
      const missingRet = handleMissing(
        context,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        key,
        targetLocale,
        missingWarn,
        type
      );
      if (missingRet !== key) {
        format2 = missingRet;
      }
    }
  }
  return [format2, targetLocale, message];
}
function compileMessageFormat(context, key, targetLocale, format2, cacheBaseKey, onError) {
  const { messageCompiler, warnHtmlMessage } = context;
  if (isMessageFunction(format2)) {
    const msg2 = format2;
    msg2.locale = msg2.locale || targetLocale;
    msg2.key = msg2.key || key;
    return msg2;
  }
  if (messageCompiler == null) {
    const msg2 = () => format2;
    msg2.locale = targetLocale;
    msg2.key = key;
    return msg2;
  }
  const msg = messageCompiler(format2, getCompileContext(context, targetLocale, cacheBaseKey, format2, warnHtmlMessage, onError));
  msg.locale = targetLocale;
  msg.key = key;
  msg.source = format2;
  return msg;
}
function evaluateMessage(context, msg, msgCtx) {
  const messaged = msg(msgCtx);
  return messaged;
}
function parseTranslateArgs(...args) {
  const [arg1, arg2, arg3] = args;
  const options = create();
  if (!isString(arg1) && !isNumber(arg1) && !isMessageFunction(arg1) && !isMessageAST(arg1)) {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  const key = isNumber(arg1) ? String(arg1) : isMessageFunction(arg1) ? arg1 : arg1;
  if (isNumber(arg2)) {
    options.plural = arg2;
  } else if (isString(arg2)) {
    options.default = arg2;
  } else if (isPlainObject(arg2) && !isEmptyObject(arg2)) {
    options.named = arg2;
  } else if (isArray(arg2)) {
    options.list = arg2;
  }
  if (isNumber(arg3)) {
    options.plural = arg3;
  } else if (isString(arg3)) {
    options.default = arg3;
  } else if (isPlainObject(arg3)) {
    assign(options, arg3);
  }
  return [key, options];
}
function getCompileContext(context, locale, key, source, warnHtmlMessage, onError) {
  return {
    locale,
    key,
    warnHtmlMessage,
    onError: (err) => {
      onError && onError(err);
      {
        throw err;
      }
    },
    onCacheKey: (source2) => generateFormatCacheKey(locale, key, source2)
  };
}
function getMessageContextOptions(context, locale, message, options) {
  const { modifiers, pluralRules, messageResolver: resolveValue2, fallbackLocale, fallbackWarn, missingWarn, fallbackContext } = context;
  const resolveMessage = (key, useLinked) => {
    let val = resolveValue2(message, key);
    if (val == null && (fallbackContext || useLinked)) {
      const [, , message2] = resolveMessageFormat(
        fallbackContext || context,
        // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
        key,
        locale,
        fallbackLocale,
        fallbackWarn,
        missingWarn
      );
      val = resolveValue2(message2, key);
    }
    if (isString(val) || isMessageAST(val)) {
      let occurred = false;
      const onError = () => {
        occurred = true;
      };
      const msg = compileMessageFormat(context, key, locale, val, key, onError);
      return !occurred ? msg : NOOP_MESSAGE_FUNCTION;
    } else if (isMessageFunction(val)) {
      return val;
    } else {
      return NOOP_MESSAGE_FUNCTION;
    }
  };
  const ctxOptions = {
    locale,
    modifiers,
    pluralRules,
    messages: resolveMessage
  };
  if (context.processor) {
    ctxOptions.processor = context.processor;
  }
  if (options.list) {
    ctxOptions.list = options.list;
  }
  if (options.named) {
    ctxOptions.named = options.named;
  }
  if (isNumber(options.plural)) {
    ctxOptions.pluralIndex = options.plural;
  }
  return ctxOptions;
}
/*!
  * vue-i18n v10.0.5
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const VERSION = "10.0.5";
const I18nErrorCodes = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: CORE_ERROR_CODES_EXTEND_POINT,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: 25,
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: 26,
  NOT_INSTALLED: 27,
  // directive module errors
  REQUIRED_VALUE: 28,
  INVALID_VALUE: 29,
  NOT_INSTALLED_WITH_PROVIDE: 31,
  // unexpected error
  UNEXPECTED_ERROR: 32};
function createI18nError(code, ...args) {
  return createCompileError(code, null, void 0);
}
const TranslateVNodeSymbol = /* @__PURE__ */ makeSymbol("__translateVNode");
const DatetimePartsSymbol = /* @__PURE__ */ makeSymbol("__datetimeParts");
const NumberPartsSymbol = /* @__PURE__ */ makeSymbol("__numberParts");
const SetPluralRulesSymbol = makeSymbol("__setPluralRules");
const InejctWithOptionSymbol = /* @__PURE__ */ makeSymbol("__injectWithOption");
const DisposeSymbol = /* @__PURE__ */ makeSymbol("__dispose");
function handleFlatJson(obj) {
  if (!isObject(obj)) {
    return obj;
  }
  for (const key in obj) {
    if (!hasOwn(obj, key)) {
      continue;
    }
    if (!key.includes(".")) {
      if (isObject(obj[key])) {
        handleFlatJson(obj[key]);
      }
    } else {
      const subKeys = key.split(".");
      const lastIndex = subKeys.length - 1;
      let currentObj = obj;
      let hasStringValue = false;
      for (let i = 0; i < lastIndex; i++) {
        if (!(subKeys[i] in currentObj)) {
          currentObj[subKeys[i]] = create();
        }
        if (!isObject(currentObj[subKeys[i]])) {
          hasStringValue = true;
          break;
        }
        currentObj = currentObj[subKeys[i]];
      }
      if (!hasStringValue) {
        currentObj[subKeys[lastIndex]] = obj[key];
        delete obj[key];
      }
      if (isObject(currentObj[subKeys[lastIndex]])) {
        handleFlatJson(currentObj[subKeys[lastIndex]]);
      }
    }
  }
  return obj;
}
function getLocaleMessages(locale, options) {
  const { messages, __i18n, messageResolver, flatJson } = options;
  const ret = isPlainObject(messages) ? messages : isArray(__i18n) ? create() : { [locale]: create() };
  if (isArray(__i18n)) {
    __i18n.forEach((custom) => {
      if ("locale" in custom && "resource" in custom) {
        const { locale: locale2, resource } = custom;
        if (locale2) {
          ret[locale2] = ret[locale2] || create();
          deepCopy(resource, ret[locale2]);
        } else {
          deepCopy(resource, ret);
        }
      } else {
        isString(custom) && deepCopy(JSON.parse(custom), ret);
      }
    });
  }
  if (messageResolver == null && flatJson) {
    for (const key in ret) {
      if (hasOwn(ret, key)) {
        handleFlatJson(ret[key]);
      }
    }
  }
  return ret;
}
function getComponentOptions(instance) {
  return instance.type;
}
function adjustI18nResources(gl, options, componentOptions) {
  let messages = isObject(options.messages) ? options.messages : create();
  if ("__i18nGlobal" in componentOptions) {
    messages = getLocaleMessages(gl.locale.value, {
      messages,
      __i18n: componentOptions.__i18nGlobal
    });
  }
  const locales = Object.keys(messages);
  if (locales.length) {
    locales.forEach((locale) => {
      gl.mergeLocaleMessage(locale, messages[locale]);
    });
  }
  {
    if (isObject(options.datetimeFormats)) {
      const locales2 = Object.keys(options.datetimeFormats);
      if (locales2.length) {
        locales2.forEach((locale) => {
          gl.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
        });
      }
    }
    if (isObject(options.numberFormats)) {
      const locales2 = Object.keys(options.numberFormats);
      if (locales2.length) {
        locales2.forEach((locale) => {
          gl.mergeNumberFormat(locale, options.numberFormats[locale]);
        });
      }
    }
  }
}
function createTextNode(key) {
  return createVNode(Text, null, key, 0);
}
const DEVTOOLS_META = "__INTLIFY_META__";
const NOOP_RETURN_ARRAY = () => [];
const NOOP_RETURN_FALSE = () => false;
let composerID = 0;
function defineCoreMissingHandler(missing) {
  return (ctx, locale, key, type) => {
    return missing(locale, key, getCurrentInstance() || void 0, type);
  };
}
const getMetaInfo = /* @__NO_SIDE_EFFECTS__ */ () => {
  const instance = getCurrentInstance();
  let meta = null;
  return instance && (meta = getComponentOptions(instance)[DEVTOOLS_META]) ? { [DEVTOOLS_META]: meta } : null;
};
function createComposer(options = {}) {
  const { __root, __injectWithOption } = options;
  const _isGlobal = __root === void 0;
  const flatJson = options.flatJson;
  const _ref = shallowRef;
  let _inheritLocale = isBoolean(options.inheritLocale) ? options.inheritLocale : true;
  const _locale = _ref(
    // prettier-ignore
    __root && _inheritLocale ? __root.locale.value : isString(options.locale) ? options.locale : DEFAULT_LOCALE
  );
  const _fallbackLocale = _ref(
    // prettier-ignore
    __root && _inheritLocale ? __root.fallbackLocale.value : isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value
  );
  const _messages = _ref(getLocaleMessages(_locale.value, options));
  const _datetimeFormats = _ref(isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
  const _numberFormats = _ref(isPlainObject(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
  let _missingWarn = __root ? __root.missingWarn : isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  let _fallbackWarn = __root ? __root.fallbackWarn : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  let _fallbackRoot = __root ? __root.fallbackRoot : isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
  let _fallbackFormat = !!options.fallbackFormat;
  let _missing = isFunction(options.missing) ? options.missing : null;
  let _runtimeMissing = isFunction(options.missing) ? defineCoreMissingHandler(options.missing) : null;
  let _postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
  let _warnHtmlMessage = __root ? __root.warnHtmlMessage : isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  let _escapeParameter = !!options.escapeParameter;
  const _modifiers = __root ? __root.modifiers : isPlainObject(options.modifiers) ? options.modifiers : {};
  let _pluralRules = options.pluralRules || __root && __root.pluralRules;
  let _context;
  const getCoreContext = () => {
    _isGlobal && setFallbackContext(null);
    const ctxOptions = {
      version: VERSION,
      locale: _locale.value,
      fallbackLocale: _fallbackLocale.value,
      messages: _messages.value,
      modifiers: _modifiers,
      pluralRules: _pluralRules,
      missing: _runtimeMissing === null ? void 0 : _runtimeMissing,
      missingWarn: _missingWarn,
      fallbackWarn: _fallbackWarn,
      fallbackFormat: _fallbackFormat,
      unresolving: true,
      postTranslation: _postTranslation === null ? void 0 : _postTranslation,
      warnHtmlMessage: _warnHtmlMessage,
      escapeParameter: _escapeParameter,
      messageResolver: options.messageResolver,
      messageCompiler: options.messageCompiler,
      __meta: { framework: "vue" }
    };
    {
      ctxOptions.datetimeFormats = _datetimeFormats.value;
      ctxOptions.numberFormats = _numberFormats.value;
      ctxOptions.__datetimeFormatters = isPlainObject(_context) ? _context.__datetimeFormatters : void 0;
      ctxOptions.__numberFormatters = isPlainObject(_context) ? _context.__numberFormatters : void 0;
    }
    const ctx = createCoreContext(ctxOptions);
    _isGlobal && setFallbackContext(ctx);
    return ctx;
  };
  _context = getCoreContext();
  updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
  function trackReactivityValues() {
    return [
      _locale.value,
      _fallbackLocale.value,
      _messages.value,
      _datetimeFormats.value,
      _numberFormats.value
    ];
  }
  const locale = computed({
    get: () => _locale.value,
    set: (val) => {
      _locale.value = val;
      _context.locale = _locale.value;
    }
  });
  const fallbackLocale = computed({
    get: () => _fallbackLocale.value,
    set: (val) => {
      _fallbackLocale.value = val;
      _context.fallbackLocale = _fallbackLocale.value;
      updateFallbackLocale(_context, _locale.value, val);
    }
  });
  const messages = computed(() => _messages.value);
  const datetimeFormats = /* @__PURE__ */ computed(() => _datetimeFormats.value);
  const numberFormats = /* @__PURE__ */ computed(() => _numberFormats.value);
  function getPostTranslationHandler() {
    return isFunction(_postTranslation) ? _postTranslation : null;
  }
  function setPostTranslationHandler(handler) {
    _postTranslation = handler;
    _context.postTranslation = handler;
  }
  function getMissingHandler() {
    return _missing;
  }
  function setMissingHandler(handler) {
    if (handler !== null) {
      _runtimeMissing = defineCoreMissingHandler(handler);
    }
    _missing = handler;
    _context.missing = _runtimeMissing;
  }
  const wrapWithDeps = (fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) => {
    trackReactivityValues();
    let ret;
    try {
      if ("production" !== "production" || false) ;
      if (!_isGlobal) {
        _context.fallbackContext = __root ? getFallbackContext() : void 0;
      }
      ret = fn(_context);
    } finally {
      if (!_isGlobal) {
        _context.fallbackContext = void 0;
      }
    }
    if (warnType !== "translate exists" && // for not `te` (e.g `t`)
    isNumber(ret) && ret === NOT_REOSLVED || warnType === "translate exists" && !ret) {
      const [key, arg2] = argumentParser();
      return __root && _fallbackRoot ? fallbackSuccess(__root) : fallbackFail(key);
    } else if (successCondition(ret)) {
      return ret;
    } else {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_RETURN_TYPE);
    }
  };
  function t2(...args) {
    return wrapWithDeps((context) => Reflect.apply(translate, null, [context, ...args]), () => parseTranslateArgs(...args), "translate", (root) => Reflect.apply(root.t, root, [...args]), (key) => key, (val) => isString(val));
  }
  function rt(...args) {
    const [arg1, arg2, arg3] = args;
    if (arg3 && !isObject(arg3)) {
      throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
    }
    return t2(...[arg1, arg2, assign({ resolvedMessage: true }, arg3 || {})]);
  }
  function d(...args) {
    return wrapWithDeps((context) => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), "datetime format", (root) => Reflect.apply(root.d, root, [...args]), () => MISSING_RESOLVE_VALUE, (val) => isString(val));
  }
  function n2(...args) {
    return wrapWithDeps((context) => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), "number format", (root) => Reflect.apply(root.n, root, [...args]), () => MISSING_RESOLVE_VALUE, (val) => isString(val));
  }
  function normalize(values) {
    return values.map((val) => isString(val) || isNumber(val) || isBoolean(val) ? createTextNode(String(val)) : val);
  }
  const interpolate = (val) => val;
  const processor = {
    normalize,
    interpolate,
    type: "vnode"
  };
  function translateVNode(...args) {
    return wrapWithDeps((context) => {
      let ret;
      const _context2 = context;
      try {
        _context2.processor = processor;
        ret = Reflect.apply(translate, null, [_context2, ...args]);
      } finally {
        _context2.processor = null;
      }
      return ret;
    }, () => parseTranslateArgs(...args), "translate", (root) => root[TranslateVNodeSymbol](...args), (key) => [createTextNode(key)], (val) => isArray(val));
  }
  function numberParts(...args) {
    return wrapWithDeps((context) => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), "number format", (root) => root[NumberPartsSymbol](...args), NOOP_RETURN_ARRAY, (val) => isString(val) || isArray(val));
  }
  function datetimeParts(...args) {
    return wrapWithDeps((context) => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), "datetime format", (root) => root[DatetimePartsSymbol](...args), NOOP_RETURN_ARRAY, (val) => isString(val) || isArray(val));
  }
  function setPluralRules(rules) {
    _pluralRules = rules;
    _context.pluralRules = _pluralRules;
  }
  function te2(key, locale2) {
    return wrapWithDeps(() => {
      if (!key) {
        return false;
      }
      const targetLocale = isString(locale2) ? locale2 : _locale.value;
      const message = getLocaleMessage(targetLocale);
      const resolved = _context.messageResolver(message, key);
      return isMessageAST(resolved) || isMessageFunction(resolved) || isString(resolved);
    }, () => [key], "translate exists", (root) => {
      return Reflect.apply(root.te, root, [key, locale2]);
    }, NOOP_RETURN_FALSE, (val) => isBoolean(val));
  }
  function resolveMessages(key) {
    let messages2 = null;
    const locales = fallbackWithLocaleChain(_context, _fallbackLocale.value, _locale.value);
    for (let i = 0; i < locales.length; i++) {
      const targetLocaleMessages = _messages.value[locales[i]] || {};
      const messageValue = _context.messageResolver(targetLocaleMessages, key);
      if (messageValue != null) {
        messages2 = messageValue;
        break;
      }
    }
    return messages2;
  }
  function tm(key) {
    const messages2 = resolveMessages(key);
    return messages2 != null ? messages2 : __root ? __root.tm(key) || {} : {};
  }
  function getLocaleMessage(locale2) {
    return _messages.value[locale2] || {};
  }
  function setLocaleMessage(locale2, message) {
    if (flatJson) {
      const _message = { [locale2]: message };
      for (const key in _message) {
        if (hasOwn(_message, key)) {
          handleFlatJson(_message[key]);
        }
      }
      message = _message[locale2];
    }
    _messages.value[locale2] = message;
    _context.messages = _messages.value;
  }
  function mergeLocaleMessage(locale2, message) {
    _messages.value[locale2] = _messages.value[locale2] || {};
    const _message = { [locale2]: message };
    if (flatJson) {
      for (const key in _message) {
        if (hasOwn(_message, key)) {
          handleFlatJson(_message[key]);
        }
      }
    }
    message = _message[locale2];
    deepCopy(message, _messages.value[locale2]);
    _context.messages = _messages.value;
  }
  function getDateTimeFormat(locale2) {
    return _datetimeFormats.value[locale2] || {};
  }
  function setDateTimeFormat(locale2, format2) {
    _datetimeFormats.value[locale2] = format2;
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale2, format2);
  }
  function mergeDateTimeFormat(locale2, format2) {
    _datetimeFormats.value[locale2] = assign(_datetimeFormats.value[locale2] || {}, format2);
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale2, format2);
  }
  function getNumberFormat(locale2) {
    return _numberFormats.value[locale2] || {};
  }
  function setNumberFormat(locale2, format2) {
    _numberFormats.value[locale2] = format2;
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale2, format2);
  }
  function mergeNumberFormat(locale2, format2) {
    _numberFormats.value[locale2] = assign(_numberFormats.value[locale2] || {}, format2);
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale2, format2);
  }
  composerID++;
  const composer = {
    id: composerID,
    locale,
    fallbackLocale,
    get inheritLocale() {
      return _inheritLocale;
    },
    set inheritLocale(val) {
      _inheritLocale = val;
      if (val && __root) {
        _locale.value = __root.locale.value;
        _fallbackLocale.value = __root.fallbackLocale.value;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    },
    get availableLocales() {
      return Object.keys(_messages.value).sort();
    },
    messages,
    get modifiers() {
      return _modifiers;
    },
    get pluralRules() {
      return _pluralRules || {};
    },
    get isGlobal() {
      return _isGlobal;
    },
    get missingWarn() {
      return _missingWarn;
    },
    set missingWarn(val) {
      _missingWarn = val;
      _context.missingWarn = _missingWarn;
    },
    get fallbackWarn() {
      return _fallbackWarn;
    },
    set fallbackWarn(val) {
      _fallbackWarn = val;
      _context.fallbackWarn = _fallbackWarn;
    },
    get fallbackRoot() {
      return _fallbackRoot;
    },
    set fallbackRoot(val) {
      _fallbackRoot = val;
    },
    get fallbackFormat() {
      return _fallbackFormat;
    },
    set fallbackFormat(val) {
      _fallbackFormat = val;
      _context.fallbackFormat = _fallbackFormat;
    },
    get warnHtmlMessage() {
      return _warnHtmlMessage;
    },
    set warnHtmlMessage(val) {
      _warnHtmlMessage = val;
      _context.warnHtmlMessage = val;
    },
    get escapeParameter() {
      return _escapeParameter;
    },
    set escapeParameter(val) {
      _escapeParameter = val;
      _context.escapeParameter = val;
    },
    t: t2,
    getLocaleMessage,
    setLocaleMessage,
    mergeLocaleMessage,
    getPostTranslationHandler,
    setPostTranslationHandler,
    getMissingHandler,
    setMissingHandler,
    [SetPluralRulesSymbol]: setPluralRules
  };
  {
    composer.datetimeFormats = datetimeFormats;
    composer.numberFormats = numberFormats;
    composer.rt = rt;
    composer.te = te2;
    composer.tm = tm;
    composer.d = d;
    composer.n = n2;
    composer.getDateTimeFormat = getDateTimeFormat;
    composer.setDateTimeFormat = setDateTimeFormat;
    composer.mergeDateTimeFormat = mergeDateTimeFormat;
    composer.getNumberFormat = getNumberFormat;
    composer.setNumberFormat = setNumberFormat;
    composer.mergeNumberFormat = mergeNumberFormat;
    composer[InejctWithOptionSymbol] = __injectWithOption;
    composer[TranslateVNodeSymbol] = translateVNode;
    composer[DatetimePartsSymbol] = datetimeParts;
    composer[NumberPartsSymbol] = numberParts;
  }
  return composer;
}
const baseFormatProps = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    validator: (val) => val === "parent" || val === "global",
    default: "parent"
    /* ComponentI18nScope */
  },
  i18n: {
    type: Object
  }
};
function getInterpolateArg({ slots }, keys) {
  if (keys.length === 1 && keys[0] === "default") {
    const ret = slots.default ? slots.default() : [];
    return ret.reduce((slot, current) => {
      return [
        ...slot,
        // prettier-ignore
        ...current.type === Fragment ? current.children : [current]
      ];
    }, []);
  } else {
    return keys.reduce((arg, key) => {
      const slot = slots[key];
      if (slot) {
        arg[key] = slot();
      }
      return arg;
    }, create());
  }
}
function getFragmentableTag() {
  return Fragment;
}
const TranslationImpl = /* @__PURE__ */ defineComponent({
  /* eslint-disable */
  name: "i18n-t",
  props: assign({
    keypath: {
      type: String,
      required: true
    },
    plural: {
      type: [Number, String],
      validator: (val) => isNumber(val) || !isNaN(val)
    }
  }, baseFormatProps),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(props, context) {
    const { slots, attrs } = context;
    const i18n = props.i18n || useI18n({
      useScope: props.scope,
      __useComponent: true
    });
    return () => {
      const keys = Object.keys(slots).filter((key) => key !== "_");
      const options = create();
      if (props.locale) {
        options.locale = props.locale;
      }
      if (props.plural !== void 0) {
        options.plural = isString(props.plural) ? +props.plural : props.plural;
      }
      const arg = getInterpolateArg(context, keys);
      const children = i18n[TranslateVNodeSymbol](props.keypath, arg, options);
      const assignedAttrs = assign(create(), attrs);
      const tag = isString(props.tag) || isObject(props.tag) ? props.tag : getFragmentableTag();
      return h(tag, assignedAttrs, children);
    };
  }
});
const Translation = TranslationImpl;
function isVNode(target) {
  return isArray(target) && !isString(target[0]);
}
function renderFormatter(props, context, slotKeys, partFormatter) {
  const { slots, attrs } = context;
  return () => {
    const options = { part: true };
    let overrides = create();
    if (props.locale) {
      options.locale = props.locale;
    }
    if (isString(props.format)) {
      options.key = props.format;
    } else if (isObject(props.format)) {
      if (isString(props.format.key)) {
        options.key = props.format.key;
      }
      overrides = Object.keys(props.format).reduce((options2, prop) => {
        return slotKeys.includes(prop) ? assign(create(), options2, { [prop]: props.format[prop] }) : options2;
      }, create());
    }
    const parts = partFormatter(...[props.value, options, overrides]);
    let children = [options.key];
    if (isArray(parts)) {
      children = parts.map((part, index) => {
        const slot = slots[part.type];
        const node = slot ? slot({ [part.type]: part.value, index, parts }) : [part.value];
        if (isVNode(node)) {
          node[0].key = `${part.type}-${index}`;
        }
        return node;
      });
    } else if (isString(parts)) {
      children = [parts];
    }
    const assignedAttrs = assign(create(), attrs);
    const tag = isString(props.tag) || isObject(props.tag) ? props.tag : getFragmentableTag();
    return h(tag, assignedAttrs, children);
  };
}
const NumberFormatImpl = /* @__PURE__ */ defineComponent({
  /* eslint-disable */
  name: "i18n-n",
  props: assign({
    value: {
      type: Number,
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(props, context) {
    const i18n = props.i18n || useI18n({
      useScope: props.scope,
      __useComponent: true
    });
    return renderFormatter(props, context, NUMBER_FORMAT_OPTIONS_KEYS, (...args) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      i18n[NumberPartsSymbol](...args)
    ));
  }
});
const NumberFormat = NumberFormatImpl;
const DatetimeFormatImpl = /* @__PURE__ */ defineComponent({
  /* eslint-disable */
  name: "i18n-d",
  props: assign({
    value: {
      type: [Number, Date],
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(props, context) {
    const i18n = props.i18n || useI18n({
      useScope: props.scope,
      __useComponent: true
    });
    return renderFormatter(props, context, DATETIME_FORMAT_OPTIONS_KEYS, (...args) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      i18n[DatetimePartsSymbol](...args)
    ));
  }
});
const DatetimeFormat = DatetimeFormatImpl;
function getComposer$1(i18n, instance) {
  const i18nInternal = i18n;
  if (i18n.mode === "composition") {
    return i18nInternal.__getInstance(instance) || i18n.global;
  } else {
    const vueI18n = i18nInternal.__getInstance(instance);
    return vueI18n != null ? vueI18n.__composer : i18n.global.__composer;
  }
}
function vTDirective(i18n) {
  const _process = (binding) => {
    const { instance, value } = binding;
    if (!instance || !instance.$) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const composer = getComposer$1(i18n, instance.$);
    const parsedValue = parseValue(value);
    return [
      Reflect.apply(composer.t, composer, [...makeParams(parsedValue)]),
      composer
    ];
  };
  const register = (el, binding) => {
    const [textContent, composer] = _process(binding);
    el.__composer = composer;
    el.textContent = textContent;
  };
  const unregister = (el) => {
    if (el.__composer) {
      el.__composer = void 0;
      delete el.__composer;
    }
  };
  const update = (el, { value }) => {
    if (el.__composer) {
      const composer = el.__composer;
      const parsedValue = parseValue(value);
      el.textContent = Reflect.apply(composer.t, composer, [
        ...makeParams(parsedValue)
      ]);
    }
  };
  const getSSRProps = (binding) => {
    const [textContent] = _process(binding);
    return { textContent };
  };
  return {
    created: register,
    unmounted: unregister,
    beforeUpdate: update,
    getSSRProps
  };
}
function parseValue(value) {
  if (isString(value)) {
    return { path: value };
  } else if (isPlainObject(value)) {
    if (!("path" in value)) {
      throw createI18nError(I18nErrorCodes.REQUIRED_VALUE, "path");
    }
    return value;
  } else {
    throw createI18nError(I18nErrorCodes.INVALID_VALUE);
  }
}
function makeParams(value) {
  const { path, locale, args, choice, plural } = value;
  const options = {};
  const named = args || {};
  if (isString(locale)) {
    options.locale = locale;
  }
  if (isNumber(choice)) {
    options.plural = choice;
  }
  if (isNumber(plural)) {
    options.plural = plural;
  }
  return [path, named, options];
}
function apply(app, i18n, ...options) {
  const pluginOptions = isPlainObject(options[0]) ? options[0] : {};
  const globalInstall = isBoolean(pluginOptions.globalInstall) ? pluginOptions.globalInstall : true;
  if (globalInstall) {
    [Translation.name, "I18nT"].forEach((name) => app.component(name, Translation));
    [NumberFormat.name, "I18nN"].forEach((name) => app.component(name, NumberFormat));
    [DatetimeFormat.name, "I18nD"].forEach((name) => app.component(name, DatetimeFormat));
  }
  {
    app.directive("t", vTDirective(i18n));
  }
}
const I18nInjectionKey = /* @__PURE__ */ makeSymbol("global-vue-i18n");
function createI18n(options = {}, VueI18nLegacy) {
  const __globalInjection = isBoolean(options.globalInjection) ? options.globalInjection : true;
  const __instances = /* @__PURE__ */ new Map();
  const [globalScope, __global] = createGlobal(options);
  const symbol = /* @__PURE__ */ makeSymbol("");
  function __getInstance(component) {
    return __instances.get(component) || null;
  }
  function __setInstance(component, instance) {
    __instances.set(component, instance);
  }
  function __deleteInstance(component) {
    __instances.delete(component);
  }
  const i18n = {
    // mode
    get mode() {
      return "composition";
    },
    // install plugin
    async install(app, ...options2) {
      app.__VUE_I18N_SYMBOL__ = symbol;
      app.provide(app.__VUE_I18N_SYMBOL__, i18n);
      if (isPlainObject(options2[0])) {
        const opts = options2[0];
        i18n.__composerExtend = opts.__composerExtend;
        i18n.__vueI18nExtend = opts.__vueI18nExtend;
      }
      let globalReleaseHandler = null;
      if (__globalInjection) {
        globalReleaseHandler = injectGlobalFields(app, i18n.global);
      }
      {
        apply(app, i18n, ...options2);
      }
      const unmountApp = app.unmount;
      app.unmount = () => {
        globalReleaseHandler && globalReleaseHandler();
        i18n.dispose();
        unmountApp();
      };
    },
    // global accessor
    get global() {
      return __global;
    },
    dispose() {
      globalScope.stop();
    },
    // @internal
    __instances,
    // @internal
    __getInstance,
    // @internal
    __setInstance,
    // @internal
    __deleteInstance
  };
  return i18n;
}
function useI18n(options = {}) {
  const instance = getCurrentInstance();
  if (instance == null) {
    throw createI18nError(I18nErrorCodes.MUST_BE_CALL_SETUP_TOP);
  }
  if (!instance.isCE && instance.appContext.app != null && !instance.appContext.app.__VUE_I18N_SYMBOL__) {
    throw createI18nError(I18nErrorCodes.NOT_INSTALLED);
  }
  const i18n = getI18nInstance(instance);
  const gl = getGlobalComposer(i18n);
  const componentOptions = getComponentOptions(instance);
  const scope = getScope(options, componentOptions);
  if (scope === "global") {
    adjustI18nResources(gl, options, componentOptions);
    return gl;
  }
  if (scope === "parent") {
    let composer2 = getComposer(i18n, instance, options.__useComponent);
    if (composer2 == null) {
      composer2 = gl;
    }
    return composer2;
  }
  const i18nInternal = i18n;
  let composer = i18nInternal.__getInstance(instance);
  if (composer == null) {
    const composerOptions = assign({}, options);
    if ("__i18n" in componentOptions) {
      composerOptions.__i18n = componentOptions.__i18n;
    }
    if (gl) {
      composerOptions.__root = gl;
    }
    composer = createComposer(composerOptions);
    if (i18nInternal.__composerExtend) {
      composer[DisposeSymbol] = i18nInternal.__composerExtend(composer);
    }
    i18nInternal.__setInstance(instance, composer);
  }
  return composer;
}
function createGlobal(options, legacyMode, VueI18nLegacy) {
  const scope = effectScope();
  const obj = scope.run(() => createComposer(options));
  if (obj == null) {
    throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
  }
  return [scope, obj];
}
function getI18nInstance(instance) {
  const i18n = inject(!instance.isCE ? instance.appContext.app.__VUE_I18N_SYMBOL__ : I18nInjectionKey);
  if (!i18n) {
    throw createI18nError(!instance.isCE ? I18nErrorCodes.UNEXPECTED_ERROR : I18nErrorCodes.NOT_INSTALLED_WITH_PROVIDE);
  }
  return i18n;
}
function getScope(options, componentOptions) {
  return isEmptyObject(options) ? "__i18n" in componentOptions ? "local" : "global" : !options.useScope ? "local" : options.useScope;
}
function getGlobalComposer(i18n) {
  return i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
}
function getComposer(i18n, target, useComponent = false) {
  let composer = null;
  const root = target.root;
  let current = getParentComponentInstance(target, useComponent);
  while (current != null) {
    const i18nInternal = i18n;
    if (i18n.mode === "composition") {
      composer = i18nInternal.__getInstance(current);
    }
    if (composer != null) {
      break;
    }
    if (root === current) {
      break;
    }
    current = current.parent;
  }
  return composer;
}
function getParentComponentInstance(target, useComponent = false) {
  if (target == null) {
    return null;
  }
  return !useComponent ? target.parent : target.vnode.ctx || target.parent;
}
const globalExportProps = [
  "locale",
  "fallbackLocale",
  "availableLocales"
];
const globalExportMethods = ["t", "rt", "d", "n", "tm", "te"];
function injectGlobalFields(app, composer) {
  const i18n = /* @__PURE__ */ Object.create(null);
  globalExportProps.forEach((prop) => {
    const desc = Object.getOwnPropertyDescriptor(composer, prop);
    if (!desc) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const wrap = isRef(desc.value) ? {
      get() {
        return desc.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(val) {
        desc.value.value = val;
      }
    } : {
      get() {
        return desc.get && desc.get();
      }
    };
    Object.defineProperty(i18n, prop, wrap);
  });
  app.config.globalProperties.$i18n = i18n;
  globalExportMethods.forEach((method) => {
    const desc = Object.getOwnPropertyDescriptor(composer, method);
    if (!desc || !desc.value) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    Object.defineProperty(app.config.globalProperties, `$${method}`, desc);
  });
  const dispose = () => {
    delete app.config.globalProperties.$i18n;
    globalExportMethods.forEach((method) => {
      delete app.config.globalProperties[`$${method}`];
    });
  };
  return dispose;
}
registerMessageCompiler(compile);
registerMessageResolver(resolveValue);
registerLocaleFallbacker(fallbackWithLocaleChain);
function useRouteBaseName() {
  return wrapComposable(getRouteBaseName);
}
function useLocalePath() {
  return wrapComposable(localePath);
}
function useLocaleRoute() {
  return wrapComposable(localeRoute);
}
function useLocaleLocation() {
  return wrapComposable(localeRoute);
}
function useSwitchLocalePath() {
  return wrapComposable(switchLocalePath);
}
const switch_locale_path_ssr_IIA4fiKGsT = /* @__PURE__ */ defineNuxtPlugin({
  name: "i18n:plugin:switch-locale-path-ssr",
  dependsOn: ["i18n:plugin"],
  setup(nuxt) {
    if (nuxt.$config.public.i18n.experimental.switchLocalePathLinkSSR !== true) return;
    const switchLocalePath2 = useSwitchLocalePath();
    const switchLocalePathLinkWrapperExpr = new RegExp(
      [
        `<!--${SWITCH_LOCALE_PATH_LINK_IDENTIFIER}-\\[(\\w+)\\]-->`,
        `.+?`,
        `<!--/${SWITCH_LOCALE_PATH_LINK_IDENTIFIER}-->`
      ].join(""),
      "g"
    );
    nuxt.hook("app:rendered", (ctx) => {
      var _a2;
      if (((_a2 = ctx.renderResult) == null ? void 0 : _a2.html) == null) return;
      ctx.renderResult.html = ctx.renderResult.html.replaceAll(
        switchLocalePathLinkWrapperExpr,
        (match, p1) => match.replace(/href="([^"]+)"/, `href="${encodeURI(switchLocalePath2(p1 ?? ""))}"`)
      );
    });
  }
});
const route_locale_detect_30kFTI8AcI = /* @__PURE__ */ defineNuxtPlugin({
  name: "i18n:plugin:route-locale-detect",
  dependsOn: ["i18n:plugin"],
  async setup(nuxt) {
    let __temp, __restore;
    const nuxtApp = nuxt;
    const currentRoute = nuxtApp.$router.currentRoute;
    const getRouteLocale = createLocaleFromRouteGetter();
    async function handleRouteDetect(to) {
      let detected = detectLocale(to, getRouteLocale(to), unref(nuxtApp.$i18n.locale), nuxtApp.$i18n.getLocaleCookie());
      if (nuxtApp._vueI18n.__firstAccess) {
        nuxtApp._vueI18n.__setLocale(detected);
        const fallbackLocales = makeFallbackLocaleCodes(unref(nuxtApp._vueI18n.global.fallbackLocale), [detected]);
        await Promise.all(fallbackLocales.map((x) => nuxtApp.$i18n.loadLocaleMessages(x)));
        await nuxtApp.$i18n.loadLocaleMessages(detected);
      }
      const modified = await nuxtApp.runWithContext(() => loadAndSetLocale(detected, nuxtApp._vueI18n.__firstAccess));
      if (modified) {
        detected = unref(nuxtApp.$i18n.locale);
      }
      return detected;
    }
    [__temp, __restore] = executeAsync(() => handleRouteDetect(currentRoute.value)), await __temp, __restore();
    const localeChangeMiddleware = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to, from) => {
      let __temp2, __restore2;
      const locale = ([__temp2, __restore2] = executeAsync(() => nuxtApp.runWithContext(() => handleRouteDetect(to))), __temp2 = await __temp2, __restore2(), __temp2);
      const redirectPath = ([__temp2, __restore2] = executeAsync(() => nuxtApp.runWithContext(
        () => detectRedirect({ to, from, locale, routeLocale: getRouteLocale(to) }, true)
      )), __temp2 = await __temp2, __restore2(), __temp2);
      nuxtApp._vueI18n.__firstAccess = false;
      return [__temp2, __restore2] = executeAsync(() => nuxtApp.runWithContext(() => navigate({ nuxtApp, redirectPath, locale, route: to }))), __temp2 = await __temp2, __restore2(), __temp2;
    });
    addRouteMiddleware("locale-changing", localeChangeMiddleware, { global: true });
  }
});
function extendI18n(i18n, { extendComposer, extendComposerInstance }) {
  const scope = effectScope();
  const installI18n = i18n.install.bind(i18n);
  i18n.install = (app, ...options) => {
    const pluginOptions = Object.assign({}, options[0]);
    pluginOptions.__composerExtend = (c) => {
      extendComposerInstance(c, getComposer$3(i18n));
      return () => {
      };
    };
    if (i18n.mode === "legacy") {
      pluginOptions.__vueI18nExtend = (vueI18n) => {
        extendComposerInstance(vueI18n, getComposer$3(vueI18n));
        return () => {
        };
      };
    }
    Reflect.apply(installI18n, i18n, [app, pluginOptions]);
    const globalComposer = getComposer$3(i18n);
    scope.run(() => {
      extendComposer(globalComposer);
      if (i18n.mode === "legacy" && isVueI18n(i18n.global)) {
        extendComposerInstance(i18n.global, getComposer$3(i18n.global));
      }
    });
    if (i18n.mode === "composition" && app.config.globalProperties.$i18n != null) {
      extendComposerInstance(app.config.globalProperties.$i18n, globalComposer);
    }
    if (app.unmount) {
      const unmountApp = app.unmount.bind(app);
      app.unmount = () => {
        scope.stop();
        unmountApp();
      };
    }
  };
  return scope;
}
const i18n_tNtEDWo6oK = /* @__PURE__ */ defineNuxtPlugin({
  name: "i18n:plugin",
  parallel: parallelPlugin,
  async setup(nuxt) {
    var _a2;
    let __temp, __restore;
    const nuxtApp = nuxt;
    const currentRoute = nuxtApp.$router.currentRoute;
    const defaultLocaleDomain = getDefaultLocaleForDomain(nuxtApp);
    setupMultiDomainLocales(nuxtApp, defaultLocaleDomain);
    const runtimeI18n = {
      ...nuxtApp.$config.public.i18n,
      defaultLocale: defaultLocaleDomain
    };
    nuxtApp.$config.public.i18n.defaultLocale = defaultLocaleDomain;
    runtimeI18n.baseUrl = extendBaseUrl();
    const _detectBrowserLanguage = runtimeDetectBrowserLanguage();
    const vueI18nOptions = ([__temp, __restore] = executeAsync(() => loadVueI18nOptions(vueI18nConfigs, useNuxtApp())), __temp = await __temp, __restore(), __temp);
    vueI18nOptions.messages = vueI18nOptions.messages || {};
    for (const l of localeCodes) {
      (_a2 = vueI18nOptions.messages)[l] ?? (_a2[l] = {});
    }
    vueI18nOptions.fallbackLocale = vueI18nOptions.fallbackLocale ?? false;
    if (defaultLocaleDomain) {
      vueI18nOptions.locale = defaultLocaleDomain;
    }
    const getRouteLocale = createLocaleFromRouteGetter();
    const localeCookie = getI18nCookie();
    const i18n = createI18n(vueI18nOptions);
    i18n.__firstAccess = true;
    i18n.__setLocale = (locale) => {
      const i = getI18nTarget(i18n);
      if (isRef(i.locale)) {
        i.locale.value = locale;
      } else {
        i.locale = locale;
      }
    };
    nuxtApp._vueI18n = i18n;
    extendI18n(i18n, {
      extendComposer(composer) {
        const _locales = ref(runtimeI18n.locales);
        const _localeCodes = ref(localeCodes);
        const _baseUrl = ref("");
        composer.locales = computed(() => _locales.value);
        composer.localeCodes = computed(() => _localeCodes.value);
        composer.baseUrl = computed(() => _baseUrl.value);
        {
          _baseUrl.value = resolveBaseUrl(runtimeI18n.baseUrl, nuxtApp);
        }
        composer.strategy = runtimeI18n.strategy;
        composer.localeProperties = computed(
          () => normalizedLocales.find((l) => l.code === composer.locale.value) || { code: composer.locale.value }
        );
        composer.setLocale = async (locale) => {
          await loadAndSetLocale(locale, i18n.__firstAccess);
          if (composer.strategy === "no_prefix" || false) {
            await composer.loadLocaleMessages(locale);
            i18n.__setLocale(locale);
            return;
          }
          const route = currentRoute.value;
          const redirectPath = await nuxtApp.runWithContext(
            () => detectRedirect({ to: route, locale, routeLocale: getRouteLocale(route) })
          );
          await nuxtApp.runWithContext(
            () => navigate({ nuxtApp, redirectPath, locale, route }, { enableNavigate: true })
          );
        };
        composer.loadLocaleMessages = async (locale) => await loadLocale(locale, localeLoaders, composer.mergeLocaleMessage.bind(composer), nuxtApp);
        composer.differentDomains = runtimeI18n.differentDomains;
        composer.defaultLocale = runtimeI18n.defaultLocale;
        composer.getBrowserLocale = () => getBrowserLocale();
        composer.getLocaleCookie = () => getLocaleCookie(localeCookie, _detectBrowserLanguage, composer.defaultLocale);
        composer.setLocaleCookie = (locale) => setLocaleCookie(localeCookie, locale, _detectBrowserLanguage);
        composer.onBeforeLanguageSwitch = (oldLocale, newLocale, initialSetup, context) => nuxt.callHook("i18n:beforeLocaleSwitch", {
          oldLocale,
          newLocale,
          initialSetup,
          context
        });
        composer.onLanguageSwitched = (oldLocale, newLocale) => nuxt.callHook("i18n:localeSwitched", { oldLocale, newLocale });
        composer.finalizePendingLocaleChange = async () => {
          var _a3;
          if (!i18n.__pendingLocale) return;
          i18n.__setLocale(i18n.__pendingLocale);
          (_a3 = i18n.__resolvePendingLocalePromise) == null ? void 0 : _a3.call(i18n);
          i18n.__pendingLocale = void 0;
        };
        composer.waitForPendingLocaleChange = async () => {
          if (i18n.__pendingLocale && i18n.__pendingLocalePromise) {
            await i18n.__pendingLocalePromise;
          }
        };
      },
      extendComposerInstance(instance, c) {
        const props = [
          ["locales", () => c.locales],
          ["localeCodes", () => c.localeCodes],
          ["baseUrl", () => c.baseUrl],
          ["strategy", () => c.strategy],
          ["localeProperties", () => c.localeProperties],
          ["setLocale", () => async (locale) => Reflect.apply(c.setLocale, c, [locale])],
          ["loadLocaleMessages", () => async (locale) => Reflect.apply(c.loadLocaleMessages, c, [locale])],
          ["differentDomains", () => c.differentDomains],
          ["defaultLocale", () => c.defaultLocale],
          ["getBrowserLocale", () => () => Reflect.apply(c.getBrowserLocale, c, [])],
          ["getLocaleCookie", () => () => Reflect.apply(c.getLocaleCookie, c, [])],
          ["setLocaleCookie", () => (locale) => Reflect.apply(c.setLocaleCookie, c, [locale])],
          [
            "onBeforeLanguageSwitch",
            () => (oldLocale, newLocale, initialSetup, context) => Reflect.apply(c.onBeforeLanguageSwitch, c, [oldLocale, newLocale, initialSetup, context])
          ],
          [
            "onLanguageSwitched",
            () => (oldLocale, newLocale) => Reflect.apply(c.onLanguageSwitched, c, [oldLocale, newLocale])
          ],
          ["finalizePendingLocaleChange", () => () => Reflect.apply(c.finalizePendingLocaleChange, c, [])],
          ["waitForPendingLocaleChange", () => () => Reflect.apply(c.waitForPendingLocaleChange, c, [])]
        ];
        for (const [key, get] of props) {
          Object.defineProperty(instance, key, { get });
        }
      }
    });
    nuxt.vueApp.use(i18n);
    defineGetter(nuxtApp, "$i18n", getI18nTarget(i18n));
    return {
      provide: {
        /**
         * TODO: remove type assertions while type narrowing based on generated types
         */
        localeHead: wrapComposable(localeHead),
        localePath: useLocalePath(),
        localeRoute: useLocaleRoute(),
        getRouteBaseName: useRouteBaseName(),
        switchLocalePath: useSwitchLocalePath(),
        // TODO: remove in v10
        resolveRoute: wrapComposable(resolveRoute),
        // TODO: remove in v10
        localeLocation: useLocaleLocation()
      }
    };
  }
});
function axios_fNh7DeeWJg({ $axios, redirect }) {
}
const ssg_detect_ILLiyXiR2v = /* @__PURE__ */ defineNuxtPlugin({
  name: "i18n:plugin:ssg-detect",
  dependsOn: ["i18n:plugin", "i18n:plugin:route-locale-detect"],
  enforce: "post",
  setup(nuxt) {
    return;
  }
});
const plugins = [
  unhead_rqQYbVY9CT,
  plugin,
  revive_payload_server_dpJiw8U0l1,
  components_plugin_KR1HBZs4kY,
  element_plus_teleports_plugin_h4Dmekbj62,
  element_plus_injection_plugin_1RNPi6ogby,
  switch_locale_path_ssr_IIA4fiKGsT,
  route_locale_detect_30kFTI8AcI,
  i18n_tNtEDWo6oK,
  axios_fNh7DeeWJg,
  ssg_detect_ILLiyXiR2v
];
const layouts = {
  default: defineAsyncComponent(() => import('./default-CytnepfQ.mjs').then((m) => m.default || m)),
  none: defineAsyncComponent(() => import('./none-cc0xkfyx.mjs').then((m) => m.default || m))
};
const LayoutLoader = defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  setup(props, context) {
    return () => h(layouts[props.name], props.layoutProps, context.slots);
  }
});
const __nuxt_component_0 = defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    },
    fallback: {
      type: [String, Object],
      default: null
    }
  },
  setup(props, context) {
    const nuxtApp = useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => {
      let layout2 = unref(props.name) ?? route.meta.layout ?? "default";
      if (layout2 && !(layout2 in layouts)) {
        if (props.fallback) {
          layout2 = unref(props.fallback);
        }
      }
      return layout2;
    });
    const layoutRef = ref();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    return () => {
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = route.meta.layoutTransition ?? appLayoutTransition;
      return _wrapInTransition(hasLayout && transitionProps, {
        default: () => h(Suspense, { suspensible: true, onResolve: () => {
          nextTick(done);
        } }, {
          default: () => h(
            LayoutProvider,
            {
              layoutProps: mergeProps(context.attrs, { ref: layoutRef }),
              key: layout.value || void 0,
              name: layout.value,
              shouldProvide: !props.name,
              hasTransition: !!transitionProps
            },
            context.slots
          )
        })
      }).default();
    };
  }
});
const LayoutProvider = defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        isCurrent: (route) => name === (route.meta.layout ?? "default")
      });
    }
    return () => {
      var _a2, _b2;
      if (!name || typeof name === "string" && !(name in layouts)) {
        return (_b2 = (_a2 = context.slots).default) == null ? void 0 : _b2.call(_a2);
      }
      return h(
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});
const RouteProvider = defineComponent({
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
        enumerable: true
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const __nuxt_component_1 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    const forkRoute = inject(PageRouteSymbol, null);
    let previousPageKey;
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    if (props.pageKey) {
      watch(() => props.pageKey, (next, prev) => {
        if (next !== prev) {
          nuxtApp.callHook("page:loading:start");
        }
      });
    }
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            done();
            return;
          }
          const key = generateRouteKey$1(routeProps, props.pageKey);
          if (!nuxtApp.isHydrating && !hasChildrenRoutes(forkRoute, routeProps.route, routeProps.Component) && previousPageKey === key) {
            nuxtApp.callHook("page:loading:end");
          }
          previousPageKey = key;
          {
            vnode = h(Suspense, {
              suspensible: true
            }, {
              default: () => {
                const providerVNode = h(RouteProvider, {
                  key: key || void 0,
                  vnode: slots.default ? h(Fragment, void 0, slots.default(routeProps)) : routeProps.Component,
                  route: routeProps.route,
                  renderKey: key || void 0,
                  vnodeRef: pageRef
                });
                return providerVNode;
              }
            });
            return vnode;
          }
        }
      });
    };
  }
});
function hasChildrenRoutes(fork, newRoute, Component) {
  if (!fork) {
    return false;
  }
  const index = newRoute.matched.findIndex((m) => {
    var _a2;
    return ((_a2 = m.components) == null ? void 0 : _a2.default) === (Component == null ? void 0 : Component.type);
  });
  return index < newRoute.matched.length - 1;
}
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0;
  const _component_NuxtPage = __nuxt_component_1;
  _push(ssrRenderComponent(_component_NuxtLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtPage)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    _error.stack ? _error.stack.split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n") : "";
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = defineAsyncComponent(() => import('./error-404-YAqpx8vg.mjs'));
    const _Error = defineAsyncComponent(() => import('./error-500-COlCbDyA.mjs'));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.2.4_eslint@9.21.0_jiti@2.4._dff270f4def6dc5620d973dea8099f72/node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.9_db0@0.2.4_eslint@9.21.0_jiti@2.4._dff270f4def6dc5620d973dea8099f72/node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error = nuxt.payload.error || createError(error);
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ssrContext) => entry(ssrContext);

export { isElement as A, useZIndex as B, isClient as C, useGetDerivedNamespace as D, useIdInjection as E, useId as F, asyncDataDefaults as G, createError as H, hash as I, fetchDefaults as J, useRequestFetch as K, useLocalePath as L, useRoute as M, setPageLayout as N, throwError as O, defaultNamespace as P, useTimeoutFn as Q, useSwitchLocalePath as R, languageList as S, Yr as Y, Zt as Z, _export_sfc as _, useNuxtApp as a, resolveRouteObject$1 as b, useRuntimeConfig as c, withoutTrailingSlash as d, entry$1 as default, nuxtLinkDefaults as e, isBoolean$1 as f, useNamespace as g, hasProtocol as h, injectHead as i, joinURL as j, isNumber$1 as k, isStringNumber as l, debugWarn as m, navigateTo as n, isUndefined as o, parseQuery as p, isString$1 as q, resolveUnrefHeadInput as r, shared_cjs_prodExports as s, tryOnScopeDispose as t, useRouter as u, noop as v, withTrailingSlash as w, resolveUnref as x, tryOnMounted as y, identity as z };
//# sourceMappingURL=server.mjs.map
