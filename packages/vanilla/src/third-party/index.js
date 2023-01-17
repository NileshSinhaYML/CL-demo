(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) i(o);
  new MutationObserver((o) => {
    for (const n of o)
      if (n.type === "childList")
        for (const r of n.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && i(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function e(o) {
    const n = {};
    return (
      o.integrity && (n.integrity = o.integrity),
      o.referrerpolicy && (n.referrerPolicy = o.referrerpolicy),
      o.crossorigin === "use-credentials"
        ? (n.credentials = "include")
        : o.crossorigin === "anonymous"
        ? (n.credentials = "omit")
        : (n.credentials = "same-origin"),
      n
    );
  }
  function i(o) {
    if (o.ep) return;
    o.ep = !0;
    const n = e(o);
    fetch(o.href, n);
  }
})();
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $t = (s, ...t) => ({ strTag: !0, strings: s, values: t }),
  E = $t,
  yt = (s) => typeof s != "string" && "strTag" in s,
  xt = (s, t, e) => {
    let i = s[0];
    for (let o = 1; o < s.length; o++)
      (i += t[e ? e[o - 1] : o - 1]), (i += s[o]);
    return i;
  };
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const _t = (s) => (yt(s) ? xt(s.strings, s.values) : s);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class At {
  constructor() {
    (this.settled = !1),
      (this.promise = new Promise((t, e) => {
        (this._resolve = t), (this._reject = e);
      }));
  }
  resolve(t) {
    (this.settled = !0), this._resolve(t);
  }
  reject(t) {
    (this.settled = !0), this._reject(t);
  }
}
/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */ for (let s = 0; s < 256; s++)
  ((s >> 4) & 15).toString(16) + (s & 15).toString(16);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ let kt = new At();
kt.resolve();
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ let O = _t;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const T = window,
  K =
    T.ShadowRoot &&
    (T.ShadyCSS === void 0 || T.ShadyCSS.nativeShadow) &&
    "adoptedStyleSheets" in Document.prototype &&
    "replace" in CSSStyleSheet.prototype,
  mt = Symbol(),
  it = new WeakMap();
class Ct {
  constructor(t, e, i) {
    if (((this._$cssResult$ = !0), i !== mt))
      throw Error(
        "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
      );
    (this.cssText = t), (this.t = e);
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (K && t === void 0) {
      const i = e !== void 0 && e.length === 1;
      i && (t = it.get(e)),
        t === void 0 &&
          ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText),
          i && it.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
}
const F = (s) => new Ct(typeof s == "string" ? s : s + "", void 0, mt),
  Et = (s, t) => {
    K
      ? (s.adoptedStyleSheets = t.map((e) =>
          e instanceof CSSStyleSheet ? e : e.styleSheet
        ))
      : t.forEach((e) => {
          const i = document.createElement("style"),
            o = T.litNonce;
          o !== void 0 && i.setAttribute("nonce", o),
            (i.textContent = e.cssText),
            s.appendChild(i);
        });
  },
  ot = K
    ? (s) => s
    : (s) =>
        s instanceof CSSStyleSheet
          ? ((t) => {
              let e = "";
              for (const i of t.cssRules) e += i.cssText;
              return F(e);
            })(s)
          : s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var L;
const U = window,
  st = U.trustedTypes,
  Ot = st ? st.emptyScript : "",
  nt = U.reactiveElementPolyfillSupport,
  q = {
    toAttribute(s, t) {
      switch (t) {
        case Boolean:
          s = s ? Ot : null;
          break;
        case Object:
        case Array:
          s = s == null ? s : JSON.stringify(s);
      }
      return s;
    },
    fromAttribute(s, t) {
      let e = s;
      switch (t) {
        case Boolean:
          e = s !== null;
          break;
        case Number:
          e = s === null ? null : Number(s);
          break;
        case Object:
        case Array:
          try {
            e = JSON.parse(s);
          } catch {
            e = null;
          }
      }
      return e;
    },
  },
  vt = (s, t) => t !== s && (t == t || s == s),
  I = {
    attribute: !0,
    type: String,
    converter: q,
    reflect: !1,
    hasChanged: vt,
  };
class $ extends HTMLElement {
  constructor() {
    super(),
      (this._$Ei = new Map()),
      (this.isUpdatePending = !1),
      (this.hasUpdated = !1),
      (this._$El = null),
      this.u();
  }
  static addInitializer(t) {
    var e;
    this.finalize(),
      ((e = this.h) !== null && e !== void 0 ? e : (this.h = [])).push(t);
  }
  static get observedAttributes() {
    this.finalize();
    const t = [];
    return (
      this.elementProperties.forEach((e, i) => {
        const o = this._$Ep(i, e);
        o !== void 0 && (this._$Ev.set(o, i), t.push(o));
      }),
      t
    );
  }
  static createProperty(t, e = I) {
    if (
      (e.state && (e.attribute = !1),
      this.finalize(),
      this.elementProperties.set(t, e),
      !e.noAccessor && !this.prototype.hasOwnProperty(t))
    ) {
      const i = typeof t == "symbol" ? Symbol() : "__" + t,
        o = this.getPropertyDescriptor(t, i, e);
      o !== void 0 && Object.defineProperty(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, e, i) {
    return {
      get() {
        return this[e];
      },
      set(o) {
        const n = this[t];
        (this[e] = o), this.requestUpdate(t, n, i);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || I;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized")) return !1;
    this.finalized = !0;
    const t = Object.getPrototypeOf(this);
    if (
      (t.finalize(),
      t.h !== void 0 && (this.h = [...t.h]),
      (this.elementProperties = new Map(t.elementProperties)),
      (this._$Ev = new Map()),
      this.hasOwnProperty("properties"))
    ) {
      const e = this.properties,
        i = [
          ...Object.getOwnPropertyNames(e),
          ...Object.getOwnPropertySymbols(e),
        ];
      for (const o of i) this.createProperty(o, e[o]);
    }
    return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const o of i) e.unshift(ot(o));
    } else t !== void 0 && e.push(ot(t));
    return e;
  }
  static _$Ep(t, e) {
    const i = e.attribute;
    return i === !1
      ? void 0
      : typeof i == "string"
      ? i
      : typeof t == "string"
      ? t.toLowerCase()
      : void 0;
  }
  u() {
    var t;
    (this._$E_ = new Promise((e) => (this.enableUpdating = e))),
      (this._$AL = new Map()),
      this._$Eg(),
      this.requestUpdate(),
      (t = this.constructor.h) === null ||
        t === void 0 ||
        t.forEach((e) => e(this));
  }
  addController(t) {
    var e, i;
    ((e = this._$ES) !== null && e !== void 0 ? e : (this._$ES = [])).push(t),
      this.renderRoot !== void 0 &&
        this.isConnected &&
        ((i = t.hostConnected) === null || i === void 0 || i.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$ES) === null ||
      e === void 0 ||
      e.splice(this._$ES.indexOf(t) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((t, e) => {
      this.hasOwnProperty(e) && (this._$Ei.set(e, this[e]), delete this[e]);
    });
  }
  createRenderRoot() {
    var t;
    const e =
      (t = this.shadowRoot) !== null && t !== void 0
        ? t
        : this.attachShadow(this.constructor.shadowRootOptions);
    return Et(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var t;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()),
      this.enableUpdating(!0),
      (t = this._$ES) === null ||
        t === void 0 ||
        t.forEach((e) => {
          var i;
          return (i = e.hostConnected) === null || i === void 0
            ? void 0
            : i.call(e);
        });
  }
  enableUpdating(t) {}
  disconnectedCallback() {
    var t;
    (t = this._$ES) === null ||
      t === void 0 ||
      t.forEach((e) => {
        var i;
        return (i = e.hostDisconnected) === null || i === void 0
          ? void 0
          : i.call(e);
      });
  }
  attributeChangedCallback(t, e, i) {
    this._$AK(t, i);
  }
  _$EO(t, e, i = I) {
    var o;
    const n = this.constructor._$Ep(t, i);
    if (n !== void 0 && i.reflect === !0) {
      const r = (
        ((o = i.converter) === null || o === void 0
          ? void 0
          : o.toAttribute) !== void 0
          ? i.converter
          : q
      ).toAttribute(e, i.type);
      (this._$El = t),
        r == null ? this.removeAttribute(n) : this.setAttribute(n, r),
        (this._$El = null);
    }
  }
  _$AK(t, e) {
    var i;
    const o = this.constructor,
      n = o._$Ev.get(t);
    if (n !== void 0 && this._$El !== n) {
      const r = o.getPropertyOptions(n),
        d =
          typeof r.converter == "function"
            ? { fromAttribute: r.converter }
            : ((i = r.converter) === null || i === void 0
                ? void 0
                : i.fromAttribute) !== void 0
            ? r.converter
            : q;
      (this._$El = n),
        (this[n] = d.fromAttribute(e, r.type)),
        (this._$El = null);
    }
  }
  requestUpdate(t, e, i) {
    let o = !0;
    t !== void 0 &&
      (((i = i || this.constructor.getPropertyOptions(t)).hasChanged || vt)(
        this[t],
        e
      )
        ? (this._$AL.has(t) || this._$AL.set(t, e),
          i.reflect === !0 &&
            this._$El !== t &&
            (this._$EC === void 0 && (this._$EC = new Map()),
            this._$EC.set(t, i)))
        : (o = !1)),
      !this.isUpdatePending && o && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && (await t), !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t;
    if (!this.isUpdatePending) return;
    this.hasUpdated,
      this._$Ei &&
        (this._$Ei.forEach((o, n) => (this[n] = o)), (this._$Ei = void 0));
    let e = !1;
    const i = this._$AL;
    try {
      (e = this.shouldUpdate(i)),
        e
          ? (this.willUpdate(i),
            (t = this._$ES) === null ||
              t === void 0 ||
              t.forEach((o) => {
                var n;
                return (n = o.hostUpdate) === null || n === void 0
                  ? void 0
                  : n.call(o);
              }),
            this.update(i))
          : this._$Ek();
    } catch (o) {
      throw ((e = !1), this._$Ek(), o);
    }
    e && this._$AE(i);
  }
  willUpdate(t) {}
  _$AE(t) {
    var e;
    (e = this._$ES) === null ||
      e === void 0 ||
      e.forEach((i) => {
        var o;
        return (o = i.hostUpdated) === null || o === void 0
          ? void 0
          : o.call(i);
      }),
      this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(t)),
      this.updated(t);
  }
  _$Ek() {
    (this._$AL = new Map()), (this.isUpdatePending = !1);
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$EC !== void 0 &&
      (this._$EC.forEach((e, i) => this._$EO(i, this[i], e)),
      (this._$EC = void 0)),
      this._$Ek();
  }
  updated(t) {}
  firstUpdated(t) {}
}
($.finalized = !0),
  ($.elementProperties = new Map()),
  ($.elementStyles = []),
  ($.shadowRootOptions = { mode: "open" }),
  nt == null || nt({ ReactiveElement: $ }),
  ((L = U.reactiveElementVersions) !== null && L !== void 0
    ? L
    : (U.reactiveElementVersions = [])
  ).push("1.5.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var D;
const j = window,
  x = j.trustedTypes,
  rt = x ? x.createPolicy("lit-html", { createHTML: (s) => s }) : void 0,
  b = `lit$${(Math.random() + "").slice(9)}$`,
  gt = "?" + b,
  St = `<${gt}>`,
  _ = document,
  M = (s = "") => _.createComment(s),
  H = (s) => s === null || (typeof s != "object" && typeof s != "function"),
  ft = Array.isArray,
  Mt = (s) =>
    ft(s) || typeof (s == null ? void 0 : s[Symbol.iterator]) == "function",
  C = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  lt = /-->/g,
  at = />/g,
  w = RegExp(
    `>|[ 	
  \f\r](?:([^\\s"'>=/]+)([ 	
  \f\r]*=[ 	
  \f\r]*(?:[^ 	
  \f\r"'\`<>=]|("|')|))|$)`,
    "g"
  ),
  ht = /'/g,
  dt = /"/g,
  bt = /^(?:script|style|textarea|title)$/i,
  Ht =
    (s) =>
    (t, ...e) => ({ _$litType$: s, strings: t, values: e }),
  f = Ht(1),
  A = Symbol.for("lit-noChange"),
  p = Symbol.for("lit-nothing"),
  ct = new WeakMap(),
  y = _.createTreeWalker(_, 129, null, !1),
  Nt = (s, t) => {
    const e = s.length - 1,
      i = [];
    let o,
      n = t === 2 ? "<svg>" : "",
      r = C;
    for (let l = 0; l < e; l++) {
      const a = s[l];
      let m,
        h,
        c = -1,
        u = 0;
      for (; u < a.length && ((r.lastIndex = u), (h = r.exec(a)), h !== null); )
        (u = r.lastIndex),
          r === C
            ? h[1] === "!--"
              ? (r = lt)
              : h[1] !== void 0
              ? (r = at)
              : h[2] !== void 0
              ? (bt.test(h[2]) && (o = RegExp("</" + h[2], "g")), (r = w))
              : h[3] !== void 0 && (r = w)
            : r === w
            ? h[0] === ">"
              ? ((r = o != null ? o : C), (c = -1))
              : h[1] === void 0
              ? (c = -2)
              : ((c = r.lastIndex - h[2].length),
                (m = h[1]),
                (r = h[3] === void 0 ? w : h[3] === '"' ? dt : ht))
            : r === dt || r === ht
            ? (r = w)
            : r === lt || r === at
            ? (r = C)
            : ((r = w), (o = void 0));
      const v = r === w && s[l + 1].startsWith("/>") ? " " : "";
      n +=
        r === C
          ? a + St
          : c >= 0
          ? (i.push(m), a.slice(0, c) + "$lit$" + a.slice(c) + b + v)
          : a + b + (c === -2 ? (i.push(void 0), l) : v);
    }
    const d = n + (s[e] || "<?>") + (t === 2 ? "</svg>" : "");
    if (!Array.isArray(s) || !s.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return [rt !== void 0 ? rt.createHTML(d) : d, i];
  };
class N {
  constructor({ strings: t, _$litType$: e }, i) {
    let o;
    this.parts = [];
    let n = 0,
      r = 0;
    const d = t.length - 1,
      l = this.parts,
      [a, m] = Nt(t, e);
    if (
      ((this.el = N.createElement(a, i)),
      (y.currentNode = this.el.content),
      e === 2)
    ) {
      const h = this.el.content,
        c = h.firstChild;
      c.remove(), h.append(...c.childNodes);
    }
    for (; (o = y.nextNode()) !== null && l.length < d; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) {
          const h = [];
          for (const c of o.getAttributeNames())
            if (c.endsWith("$lit$") || c.startsWith(b)) {
              const u = m[r++];
              if ((h.push(c), u !== void 0)) {
                const v = o.getAttribute(u.toLowerCase() + "$lit$").split(b),
                  g = /([.?@])?(.*)/.exec(u);
                l.push({
                  type: 1,
                  index: n,
                  name: g[2],
                  strings: v,
                  ctor:
                    g[1] === "."
                      ? Tt
                      : g[1] === "?"
                      ? jt
                      : g[1] === "@"
                      ? zt
                      : R,
                });
              } else l.push({ type: 6, index: n });
            }
          for (const c of h) o.removeAttribute(c);
        }
        if (bt.test(o.tagName)) {
          const h = o.textContent.split(b),
            c = h.length - 1;
          if (c > 0) {
            o.textContent = x ? x.emptyScript : "";
            for (let u = 0; u < c; u++)
              o.append(h[u], M()),
                y.nextNode(),
                l.push({ type: 2, index: ++n });
            o.append(h[c], M());
          }
        }
      } else if (o.nodeType === 8)
        if (o.data === gt) l.push({ type: 2, index: n });
        else {
          let h = -1;
          for (; (h = o.data.indexOf(b, h + 1)) !== -1; )
            l.push({ type: 7, index: n }), (h += b.length - 1);
        }
      n++;
    }
  }
  static createElement(t, e) {
    const i = _.createElement("template");
    return (i.innerHTML = t), i;
  }
}
function k(s, t, e = s, i) {
  var o, n, r, d;
  if (t === A) return t;
  let l =
    i !== void 0
      ? (o = e._$Co) === null || o === void 0
        ? void 0
        : o[i]
      : e._$Cl;
  const a = H(t) ? void 0 : t._$litDirective$;
  return (
    (l == null ? void 0 : l.constructor) !== a &&
      ((n = l == null ? void 0 : l._$AO) === null ||
        n === void 0 ||
        n.call(l, !1),
      a === void 0 ? (l = void 0) : ((l = new a(s)), l._$AT(s, e, i)),
      i !== void 0
        ? (((r = (d = e)._$Co) !== null && r !== void 0 ? r : (d._$Co = []))[
            i
          ] = l)
        : (e._$Cl = l)),
    l !== void 0 && (t = k(s, l._$AS(s, t.values), l, i)),
    t
  );
}
class Pt {
  constructor(t, e) {
    (this.u = []), (this._$AN = void 0), (this._$AD = t), (this._$AM = e);
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  v(t) {
    var e;
    const {
        el: { content: i },
        parts: o,
      } = this._$AD,
      n = (
        (e = t == null ? void 0 : t.creationScope) !== null && e !== void 0
          ? e
          : _
      ).importNode(i, !0);
    y.currentNode = n;
    let r = y.nextNode(),
      d = 0,
      l = 0,
      a = o[0];
    for (; a !== void 0; ) {
      if (d === a.index) {
        let m;
        a.type === 2
          ? (m = new P(r, r.nextSibling, this, t))
          : a.type === 1
          ? (m = new a.ctor(r, a.name, a.strings, this, t))
          : a.type === 6 && (m = new Rt(r, this, t)),
          this.u.push(m),
          (a = o[++l]);
      }
      d !== (a == null ? void 0 : a.index) && ((r = y.nextNode()), d++);
    }
    return n;
  }
  p(t) {
    let e = 0;
    for (const i of this.u)
      i !== void 0 &&
        (i.strings !== void 0
          ? (i._$AI(t, i, e), (e += i.strings.length - 2))
          : i._$AI(t[e])),
        e++;
  }
}
class P {
  constructor(t, e, i, o) {
    var n;
    (this.type = 2),
      (this._$AH = p),
      (this._$AN = void 0),
      (this._$AA = t),
      (this._$AB = e),
      (this._$AM = i),
      (this.options = o),
      (this._$Cm =
        (n = o == null ? void 0 : o.isConnected) === null || n === void 0 || n);
  }
  get _$AU() {
    var t, e;
    return (e = (t = this._$AM) === null || t === void 0 ? void 0 : t._$AU) !==
      null && e !== void 0
      ? e
      : this._$Cm;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && t.nodeType === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    (t = k(this, t, e)),
      H(t)
        ? t === p || t == null || t === ""
          ? (this._$AH !== p && this._$AR(), (this._$AH = p))
          : t !== this._$AH && t !== A && this.g(t)
        : t._$litType$ !== void 0
        ? this.$(t)
        : t.nodeType !== void 0
        ? this.T(t)
        : Mt(t)
        ? this.k(t)
        : this.g(t);
  }
  O(t, e = this._$AB) {
    return this._$AA.parentNode.insertBefore(t, e);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), (this._$AH = this.O(t)));
  }
  g(t) {
    this._$AH !== p && H(this._$AH)
      ? (this._$AA.nextSibling.data = t)
      : this.T(_.createTextNode(t)),
      (this._$AH = t);
  }
  $(t) {
    var e;
    const { values: i, _$litType$: o } = t,
      n =
        typeof o == "number"
          ? this._$AC(t)
          : (o.el === void 0 && (o.el = N.createElement(o.h, this.options)), o);
    if (((e = this._$AH) === null || e === void 0 ? void 0 : e._$AD) === n)
      this._$AH.p(i);
    else {
      const r = new Pt(n, this),
        d = r.v(this.options);
      r.p(i), this.T(d), (this._$AH = r);
    }
  }
  _$AC(t) {
    let e = ct.get(t.strings);
    return e === void 0 && ct.set(t.strings, (e = new N(t))), e;
  }
  k(t) {
    ft(this._$AH) || ((this._$AH = []), this._$AR());
    const e = this._$AH;
    let i,
      o = 0;
    for (const n of t)
      o === e.length
        ? e.push((i = new P(this.O(M()), this.O(M()), this, this.options)))
        : (i = e[o]),
        i._$AI(n),
        o++;
    o < e.length && (this._$AR(i && i._$AB.nextSibling, o), (e.length = o));
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var i;
    for (
      (i = this._$AP) === null || i === void 0 || i.call(this, !1, !0, e);
      t && t !== this._$AB;

    ) {
      const o = t.nextSibling;
      t.remove(), (t = o);
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 &&
      ((this._$Cm = t),
      (e = this._$AP) === null || e === void 0 || e.call(this, t));
  }
}
class R {
  constructor(t, e, i, o, n) {
    (this.type = 1),
      (this._$AH = p),
      (this._$AN = void 0),
      (this.element = t),
      (this.name = e),
      (this._$AM = o),
      (this.options = n),
      i.length > 2 || i[0] !== "" || i[1] !== ""
        ? ((this._$AH = Array(i.length - 1).fill(new String())),
          (this.strings = i))
        : (this._$AH = p);
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, e = this, i, o) {
    const n = this.strings;
    let r = !1;
    if (n === void 0)
      (t = k(this, t, e, 0)),
        (r = !H(t) || (t !== this._$AH && t !== A)),
        r && (this._$AH = t);
    else {
      const d = t;
      let l, a;
      for (t = n[0], l = 0; l < n.length - 1; l++)
        (a = k(this, d[i + l], e, l)),
          a === A && (a = this._$AH[l]),
          r || (r = !H(a) || a !== this._$AH[l]),
          a === p ? (t = p) : t !== p && (t += (a != null ? a : "") + n[l + 1]),
          (this._$AH[l] = a);
    }
    r && !o && this.j(t);
  }
  j(t) {
    t === p
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, t != null ? t : "");
  }
}
class Tt extends R {
  constructor() {
    super(...arguments), (this.type = 3);
  }
  j(t) {
    this.element[this.name] = t === p ? void 0 : t;
  }
}
const Ut = x ? x.emptyScript : "";
class jt extends R {
  constructor() {
    super(...arguments), (this.type = 4);
  }
  j(t) {
    t && t !== p
      ? this.element.setAttribute(this.name, Ut)
      : this.element.removeAttribute(this.name);
  }
}
class zt extends R {
  constructor(t, e, i, o, n) {
    super(t, e, i, o, n), (this.type = 5);
  }
  _$AI(t, e = this) {
    var i;
    if ((t = (i = k(this, t, e, 0)) !== null && i !== void 0 ? i : p) === A)
      return;
    const o = this._$AH,
      n =
        (t === p && o !== p) ||
        t.capture !== o.capture ||
        t.once !== o.once ||
        t.passive !== o.passive,
      r = t !== p && (o === p || n);
    n && this.element.removeEventListener(this.name, this, o),
      r && this.element.addEventListener(this.name, this, t),
      (this._$AH = t);
  }
  handleEvent(t) {
    var e, i;
    typeof this._$AH == "function"
      ? this._$AH.call(
          (i =
            (e = this.options) === null || e === void 0 ? void 0 : e.host) !==
            null && i !== void 0
            ? i
            : this.element,
          t
        )
      : this._$AH.handleEvent(t);
  }
}
class Rt {
  constructor(t, e, i) {
    (this.element = t),
      (this.type = 6),
      (this._$AN = void 0),
      (this._$AM = e),
      (this.options = i);
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    k(this, t);
  }
}
const pt = j.litHtmlPolyfillSupport;
pt == null || pt(N, P),
  ((D = j.litHtmlVersions) !== null && D !== void 0
    ? D
    : (j.litHtmlVersions = [])
  ).push("2.5.0");
const Lt = (s, t, e) => {
  var i, o;
  const n =
    (i = e == null ? void 0 : e.renderBefore) !== null && i !== void 0 ? i : t;
  let r = n._$litPart$;
  if (r === void 0) {
    const d =
      (o = e == null ? void 0 : e.renderBefore) !== null && o !== void 0
        ? o
        : null;
    n._$litPart$ = r = new P(
      t.insertBefore(M(), d),
      d,
      void 0,
      e != null ? e : {}
    );
  }
  return r._$AI(s), r;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var B, V;
class S extends $ {
  constructor() {
    super(...arguments),
      (this.renderOptions = { host: this }),
      (this._$Do = void 0);
  }
  createRenderRoot() {
    var t, e;
    const i = super.createRenderRoot();
    return (
      ((t = (e = this.renderOptions).renderBefore) !== null && t !== void 0) ||
        (e.renderBefore = i.firstChild),
      i
    );
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
      super.update(t),
      (this._$Do = Lt(e, this.renderRoot, this.renderOptions));
  }
  connectedCallback() {
    var t;
    super.connectedCallback(),
      (t = this._$Do) === null || t === void 0 || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(),
      (t = this._$Do) === null || t === void 0 || t.setConnected(!1);
  }
  render() {
    return A;
  }
}
(S.finalized = !0),
  (S._$litElement$ = !0),
  (B = globalThis.litElementHydrateSupport) === null ||
    B === void 0 ||
    B.call(globalThis, { LitElement: S });
const ut = globalThis.litElementPolyfillSupport;
ut == null || ut({ LitElement: S });
((V = globalThis.litElementVersions) !== null && V !== void 0
  ? V
  : (globalThis.litElementVersions = [])
).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const It = (s) => (t) =>
  typeof t == "function"
    ? ((e, i) => (customElements.define(e, i), i))(s, t)
    : ((e, i) => {
        const { kind: o, elements: n } = i;
        return {
          kind: o,
          elements: n,
          finisher(r) {
            customElements.define(e, r);
          },
        };
      })(s, t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const Dt = (s, t) =>
  t.kind === "method" && t.descriptor && !("value" in t.descriptor)
    ? {
        ...t,
        finisher(e) {
          e.createProperty(t.key, s);
        },
      }
    : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        originalKey: t.key,
        initializer() {
          typeof t.initializer == "function" &&
            (this[t.key] = t.initializer.call(this));
        },
        finisher(e) {
          e.createProperty(t.key, s);
        },
      };
function wt(s) {
  return (t, e) =>
    e !== void 0
      ? ((i, o, n) => {
          o.constructor.createProperty(n, i);
        })(s, t, e)
      : Dt(s, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function Bt(s) {
  return wt({ ...s, state: !0 });
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var W;
((W = window.HTMLSlotElement) === null || W === void 0
  ? void 0
  : W.prototype.assignedElements) != null;
const Vt = `*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.static{position:static}.absolute{position:absolute}.relative{position:relative}.inset-y-0{top:0px;bottom:0px}.left-0{left:0px}.right-0{right:0px}.mx-auto{margin-left:auto;margin-right:auto}.block{display:block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.hidden{display:none}.h-16{height:4rem}.h-6{height:1.5rem}.h-8{height:2rem}.w-full{width:100%}.w-6{width:1.5rem}.w-8{width:2rem}.flex-1{flex:1 1 0%}.flex-shrink-0{flex-shrink:0}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.25rem * var(--tw-space-y-reverse))}.rounded-md{border-radius:.375rem}.bg-black{--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}.bg-grey{--tw-bg-opacity: 1;background-color:rgb(211 220 230 / var(--tw-bg-opacity))}.p-2{padding:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.pl-4{padding-left:1rem}.pl-10{padding-left:2.5rem}.pr-2{padding-right:.5rem}.pt-2{padding-top:.5rem}.pb-3{padding-bottom:.75rem}.text-left{text-align:left}.text-sm{font-size:.875rem;line-height:1.25rem}.text-base{font-size:1rem;line-height:1.5rem}.font-medium{font-weight:500}.font-bold{font-weight:700}.text-grey{--tw-text-opacity: 1;color:rgb(211 220 230 / var(--tw-text-opacity))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.text-brown{--tw-text-opacity: 1;color:rgb(54 69 70 / var(--tw-text-opacity))}.text-black{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.hover\\:bg-light-gray:hover{--tw-bg-opacity: 1;background-color:rgb(211 211 211 / var(--tw-bg-opacity))}.hover\\:bg-brown:hover{--tw-bg-opacity: 1;background-color:rgb(54 69 70 / var(--tw-bg-opacity))}.hover\\:text-white:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.hover\\:text-black:hover{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}@media (min-width: 640px){.sm\\:static{position:static}.sm\\:inset-auto{top:auto;right:auto;bottom:auto;left:auto}.sm\\:ml-6{margin-left:1.5rem}.sm\\:block{display:block}.sm\\:hidden{display:none}.sm\\:items-stretch{align-items:stretch}.sm\\:justify-start{justify-content:flex-start}.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.sm\\:pr-0{padding-right:0}}@media (min-width: 1024px){.lg\\:block{display:block}.lg\\:px-4{padding-left:1rem;padding-right:1rem}}
  `,
  Wt = F(Vt),
  qt = (s) => {
    var t;
    return (t = class extends S {}), (t.styles = [Wt, F(s)]), t;
  },
  Kt = f` <svg
    class="block h-6 w-6"
    aria-label=${O(E`Open menu`)}
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>`,
  Ft = f`<svg
    class="block h-6 w-6"
    aria-label=${O(E`Close menu`)}
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg> `,
  Zt = `.btn-tap-color{-webkit-tap-highlight-color:transparent}
  `;
var Jt = Object.defineProperty,
  Yt = Object.getOwnPropertyDescriptor,
  Z = (s, t, e, i) => {
    for (
      var o = i > 1 ? void 0 : i ? Yt(t, e) : t, n = s.length - 1, r;
      n >= 0;
      n--
    )
      (r = s[n]) && (o = (i ? r(t, e, o) : r(o)) || o);
    return i && o && Jt(t, e, o), o;
  };
let z = class extends qt(Zt) {
  constructor() {
    var s;
    super(...arguments),
      (this.navOptions = {
        mode: "dark",
        logo: "https://ymedialabs.atlassian.net/s/1jmxwi/b/8/d35727372e299c952e88a10ef82bbaf6/_/jira-logo-scaled.png",
        headerText: "YML",
        openMenuIcon: { slotName: "" },
        closeMenuIcon: { slotName: "" },
        menuLinks: [],
        isMenuOpen: !1,
        topRightSlot: { slotName: "bell" },
      }),
      (this.themeOptions = {
        dark: {
          bgColor: "bg-black",
          textColor: "text-grey",
          textHoverColorDesktop: "hover:text-white",
          textHoverColorMobile: "hover:text-black",
          bgHoverColor: "hover:bg-light-gray",
          headerTextColor: "text-white",
        },
        light: {
          bgColor: "bg-grey",
          textColor: "text-brown",
          textHoverColorDesktop: "hover:text-black",
          textHoverColorMobile: "hover:text-white",
          bgHoverColor: "hover:bg-brown",
          headerTextColor: "text-black",
        },
      }),
      (this.openMenu = (s = this.navOptions) == null ? void 0 : s.isMenuOpen);
  }
  setMenuOpen() {
    this.openMenu = !this.openMenu;
  }
  displayMenuLinks(s) {
    var t, e;
    return f` ${
      (e = (t = this.navOptions) == null ? void 0 : t.menuLinks) == null
        ? void 0
        : e.map((i) => {
            var o, n, r, d, l, a, m, h, c, u, v, g;
            return i.type === "link"
              ? f`<a
              href=${i.url}
              part="a-menu-link-${i.label}"
              class="${
                s === "desktop"
                  ? `${
                      ((n =
                        this.themeOptions[
                          (o = this.navOptions) == null ? void 0 : o.mode
                        ]) == null
                        ? void 0
                        : n.textHoverColorDesktop) ||
                      this.themeOptions.dark.textHoverColorDesktop
                    } px-3 py-2 rounded-md text-sm font-medium`
                  : `text-left ${
                      ((d =
                        this.themeOptions[
                          (r = this.navOptions) == null ? void 0 : r.mode
                        ]) == null
                        ? void 0
                        : d.textHoverColorMobile) ||
                      this.themeOptions.dark.textHoverColorMobile
                    } ${
                      ((a =
                        this.themeOptions[
                          (l = this.navOptions) == null ? void 0 : l.mode
                        ]) == null
                        ? void 0
                        : a.bgHoverColor) || this.themeOptions.dark.bgHoverColor
                    } block px-3 py-2 rounded-md text-base font-medium`
              }"
              aria-current=${i.label}
            >
              ${i.label}
            </a>`
              : f`<button
              part="btn-menu-link-${i.label}"
              class="${
                s === "desktop"
                  ? `${
                      ((h =
                        this.themeOptions[
                          (m = this.navOptions) == null ? void 0 : m.mode
                        ]) == null
                        ? void 0
                        : h.textHoverColorDesktop) ||
                      this.themeOptions.dark.textHoverColorDesktop
                    } px-3 py-2 rounded-md text-sm font-medium`
                  : ` w-full text-left ${
                      ((u =
                        this.themeOptions[
                          (c = this.navOptions) == null ? void 0 : c.mode
                        ]) == null
                        ? void 0
                        : u.textHoverColorMobile) ||
                      this.themeOptions.dark.textHoverColorMobile
                    } ${
                      ((g =
                        this.themeOptions[
                          (v = this.navOptions) == null ? void 0 : v.mode
                        ]) == null
                        ? void 0
                        : g.bgHoverColor) || this.themeOptions.dark.bgHoverColor
                    } block px-3 py-2 rounded-md text-base font-medium`
              }"
              @click=${() => {
                this.dispatchEvent(new CustomEvent(i.eventName)),
                  (this.openMenu = !1);
              }}
            >
              ${i.label}
            </button>`;
          })
    }`;
  }
  render() {
    var s, t, e, i, o, n, r, d, l, a, m, h, c, u, v, g, J, Y, G, Q, X, tt, et;
    return f`
        <nav class="${
          ((t =
            this.themeOptions[
              (s = this.navOptions) == null ? void 0 : s.mode
            ]) == null
            ? void 0
            : t.bgColor) || this.themeOptions.dark.bgColor
        }
        ${
          ((i =
            this.themeOptions[
              (e = this.navOptions) == null ? void 0 : e.mode
            ]) == null
            ? void 0
            : i.textColor) || this.themeOptions.dark.textColor
        } " part="nav">
          
          <div class="mx-auto max-w-8xl px-2 sm:px-6 lg:px-4" >
            
            <div class="relative flex h-16 items-center justify-between">
              
              <div class="absolute inset-y-0 left-0 flex items-center sm:hidden" part="menu-icon-container" >
                
                <!-- Mobile menu button-->
                <button
                  type="button"
                  class="inline-flex items-center justify-center rounded-md p-2 ${
                    ((n =
                      this.themeOptions[
                        (o = this.navOptions) == null ? void 0 : o.mode
                      ]) == null
                      ? void 0
                      : n.textHoverColorDesktop) ||
                    this.themeOptions.dark.textHoverColorDesktop
                  } focus:outline-none btn-tap-color"
                  aria-controls=${O(E`mobile menu`)}
                  aria-expanded="${this.navOptions.isMenuOpen}"
                  aria-label=${O(E`mobile button`)}
                  @click=${this.setMenuOpen}
                  part="menu-icon-button">
                  ${
                    this.openMenu
                      ? (d =
                          (r = this.navOptions) == null
                            ? void 0
                            : r.closeMenuIcon) != null && d.slotName
                        ? f`<div class="h-6 w-6" part="menu-close-icon">
                            <slot
                              name=${
                                (a =
                                  (l = this.navOptions) == null
                                    ? void 0
                                    : l.closeMenuIcon) == null
                                  ? void 0
                                  : a.slotName
                              }
                            ></slot>
                          </div>`
                        : Ft
                      : (h =
                          (m = this.navOptions) == null
                            ? void 0
                            : m.openMenuIcon) != null && h.slotName
                      ? f`<div class="h-6 w-6" part="menu-open-icon">
                          <slot
                            name=${
                              (u =
                                (c = this.navOptions) == null
                                  ? void 0
                                  : c.openMenuIcon) == null
                                ? void 0
                                : u.slotName
                            }
                          ></slot>
                        </div>`
                      : Kt
                  }
                </button>
              </div>
  
              <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div class="flex flex-shrink-0 items-center" part="logo-container">
                  ${
                    ((v = this.navOptions) == null ? void 0 : v.logo) &&
                    f`<img
                      part="logo"
                      class="hidden h-8 w-8 lg:block"
                      src=${(g = this.navOptions) == null ? void 0 : g.logo}
                      alt="${
                        (J = this.navOptions) != null && J.logoAltText
                          ? (Y = this.navOptions) == null
                            ? void 0
                            : Y.logoAltText
                          : O(E`Company logo`)
                      }"
                    />`
                  }
                </div> 
           
              <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                
                <div class="flex flex-shrink-0 items-center font-bold  pl-4 ${
                  ((Q =
                    this.themeOptions[
                      (G = this.navOptions) == null ? void 0 : G.mode
                    ]) == null
                    ? void 0
                    : Q.headerTextColor) ||
                  this.themeOptions.dark.headerTextColor
                } " part="headerText-container">
                  <h2 part="headerText">${
                    (X = this.navOptions) == null ? void 0 : X.headerText
                  }</h2>
                </div>
  
                <div class="hidden sm:ml-6 sm:block">
                  <div class="flex space-x-4 pl-10" part="menu-link-container">
                   
                  ${this.displayMenuLinks("desktop")}
                  </div>
                </div>
  
              </div>
  
              <div class="inset-y-0 right-0 flex pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0" part="right-icons-container">
                  <slot name=${
                    (et =
                      (tt = this.navOptions) == null
                        ? void 0
                        : tt.topRightSlot) == null
                      ? void 0
                      : et.slotName
                  }></slot>
              </div>
  
            </div>
  
          </div>
  
          <!-- Mobile menu, show/hide based on menu state. -->
  
          <div class="sm:hidden" id="mobile-menu" ?hidden=${!this.openMenu}>
            
            <div class="space-y-1 px-2 pt-2 pb-3" part="menu-link-container-mobile">
            ${this.displayMenuLinks("mobile")}
            </div>
  
          </div>
  
        </nav>
      `;
  }
};
Z([wt()], z.prototype, "navOptions", 2);
Z([Bt()], z.prototype, "openMenu", 2);
z = Z([It("header-component")], z);
