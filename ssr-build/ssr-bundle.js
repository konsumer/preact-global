module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JkW7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "EBst":
/***/ (function(module, exports, __webpack_require__) {

!function () {
  "use strict";
  function e(e, t) {
    var n,
        o,
        r,
        i,
        l = M;for (i = arguments.length; i-- > 2;) {
      T.push(arguments[i]);
    }t && null != t.children && (T.length || T.push(t.children), delete t.children);while (T.length) {
      if ((o = T.pop()) && void 0 !== o.pop) for (i = o.length; i--;) {
        T.push(o[i]);
      } else "boolean" == typeof o && (o = null), (r = "function" != typeof e) && (null == o ? o = "" : "number" == typeof o ? o += "" : "string" != typeof o && (r = !1)), r && n ? l[l.length - 1] += o : l === M ? l = [o] : l.push(o), n = r;
    }var a = new S();return a.nodeName = e, a.children = l, a.attributes = null == t ? void 0 : t, a.key = null == t ? void 0 : t.key, void 0 !== L.vnode && L.vnode(a), a;
  }function t(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function n(n, o) {
    return e(n.nodeName, t(t({}, n.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : n.children);
  }function o(e) {
    !e.__d && (e.__d = !0) && 1 == D.push(e) && (L.debounceRendering || P)(r);
  }function r() {
    var e,
        t = D;D = [];while (e = t.pop()) {
      e.__d && C(e);
    }
  }function i(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && l(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function l(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function a(e) {
    var n = t({}, e.attributes);n.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === n[r] && (n[r] = o[r]);
    }return n;
  }function p(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function s(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function u(e, t, n, o, r) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n && n(null), o && o(e);else if ("class" !== t || r) {
      if ("style" === t) {
        if (o && "string" != typeof o && "string" != typeof n || (e.style.cssText = o || ""), o && "object" == typeof o) {
          if ("string" != typeof n) for (var i in n) {
            i in o || (e.style[i] = "");
          }for (var i in o) {
            e.style[i] = "number" == typeof o[i] && !1 === W.test(i) ? o[i] + "px" : o[i];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) o && (e.innerHTML = o.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var l = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), o ? n || e.addEventListener(t, c, l) : e.removeEventListener(t, c, l), (e.__l || (e.__l = {}))[t] = o;
      } else if ("list" !== t && "type" !== t && !r && t in e) {
        try {
          e[t] = null == o ? "" : o;
        } catch (e) {}null != o && !1 !== o || "spellcheck" == t || e.removeAttribute(t);
      } else {
        var a = r && t !== (t = t.replace(/^xlink:?/, ""));null == o || !1 === o ? a ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof o && (a ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), o) : e.setAttribute(t, o));
      }
    } else e.className = o || "";
  }function c(e) {
    return this.__l[e.type](L.event && L.event(e) || e);
  }function _() {
    var e;while (e = E.pop()) {
      L.afterMount && L.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function d(e, t, n, o, r, i) {
    V++ || (A = null != r && void 0 !== r.ownerSVGElement, H = null != e && !("__preactattr_" in e));var l = f(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --V || (H = !1, i || _()), l;
  }function f(e, t, n, o, r) {
    var i = e,
        a = A;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), m(e, !0))), i.__preactattr_ = !0, i;var s = t.nodeName;if ("function" == typeof s) return x(e, t, n, o);if (A = "svg" === s || "foreignObject" !== s && A, s += "", (!e || !l(e, s)) && (i = p(s, A), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), m(e, !0);
    }var u = i.firstChild,
        c = i.__preactattr_,
        _ = t.children;if (null == c) {
      c = i.__preactattr_ = {};for (var d = i.attributes, f = d.length; f--;) {
        c[d[f].name] = d[f].value;
      }
    }return !H && _ && 1 === _.length && "string" == typeof _[0] && null != u && void 0 !== u.splitText && null == u.nextSibling ? u.nodeValue != _[0] && (u.nodeValue = _[0]) : (_ && _.length || null != u) && h(i, _, n, o, H || null != c.dangerouslySetInnerHTML), b(i, t.attributes, c), A = a, i;
  }function h(e, t, n, o, r) {
    var l,
        a,
        p,
        u,
        c,
        _ = e.childNodes,
        d = [],
        h = {},
        v = 0,
        b = 0,
        y = _.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = _[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (v++, h[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (d[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      u = t[C], c = null;var k = u.key;if (null != k) v && void 0 !== h[k] && (c = h[k], h[k] = void 0, v--);else if (b < g) for (l = b; l < g; l++) {
        if (void 0 !== d[l] && i(a = d[l], u, r)) {
          c = a, d[l] = void 0, l === g - 1 && g--, l === b && b++;break;
        }
      }c = f(c, u, n, o), p = _[C], c && c !== e && c !== p && (null == p ? e.appendChild(c) : c === p.nextSibling ? s(p) : e.insertBefore(c, p));
    }if (v) for (var C in h) {
      void 0 !== h[C] && m(h[C], !1);
    }while (b <= g) {
      void 0 !== (c = d[g--]) && m(c, !1);
    }
  }function m(e, t) {
    var n = e._component;n ? N(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || s(e), v(e));
  }function v(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;m(e, !0), e = t;
    }
  }function b(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || u(e, o, n[o], n[o] = void 0, A);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || u(e, o, n[o], n[o] = t[o], A);
    }
  }function y(e, t, n) {
    var o,
        r = B.length;e.prototype && e.prototype.render ? (o = new e(t, n), k.call(o, t, n)) : (o = new k(t, n), o.constructor = e, o.render = g);while (r--) {
      if (B[r].constructor === e) return o.__b = B[r].__b, B.splice(r, 1), o;
    }return o;
  }function g(e, t, n) {
    return this.constructor(e, n);
  }function w(e, t, n, r, i) {
    e.__x || (e.__x = !0, e.__r = t.ref, e.__k = t.key, delete t.ref, delete t.key, void 0 === e.constructor.getDerivedStateFromProps && (!e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, r)), r && r !== e.context && (e.__c || (e.__c = e.context), e.context = r), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== n && (1 !== n && !1 === L.syncComponentUpdates && e.base ? o(e) : C(e, 1, i)), e.__r && e.__r(e));
  }function C(e, n, o, r) {
    if (!e.__x) {
      var i,
          l,
          p,
          s = e.props,
          u = e.state,
          c = e.context,
          f = e.__p || s,
          h = e.__s || u,
          v = e.__c || c,
          b = e.base,
          g = e.__b,
          x = b || g,
          k = e._component,
          U = !1,
          S = v;if (e.constructor.getDerivedStateFromProps && (u = t(t({}, u), e.constructor.getDerivedStateFromProps(s, u)), e.state = u), b && (e.props = f, e.state = h, e.context = v, 2 !== n && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(s, u, c) ? U = !0 : e.componentWillUpdate && e.componentWillUpdate(s, u, c), e.props = s, e.state = u, e.context = c), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !U) {
        i = e.render(s, u, c), e.getChildContext && (c = t(t({}, c), e.getChildContext())), b && e.getSnapshotBeforeUpdate && (S = e.getSnapshotBeforeUpdate(f, h));var T,
            M,
            P = i && i.nodeName;if ("function" == typeof P) {
          var W = a(i);l = k, l && l.constructor === P && W.key == l.__k ? w(l, W, 1, c, !1) : (T = l, e._component = l = y(P, W, c), l.__b = l.__b || g, l.__u = e, w(l, W, 0, c, !1), C(l, 1, o, !0)), M = l.base;
        } else p = x, T = k, T && (p = e._component = null), (x || 1 === n) && (p && (p._component = null), M = d(p, i, c, o || !b, x && x.parentNode, !0));if (x && M !== x && l !== k) {
          var D = x.parentNode;D && M !== D && (D.replaceChild(M, x), T || (x._component = null, m(x, !1)));
        }if (T && N(T), e.base = M, M && !r) {
          var A = e,
              H = e;while (H = H.__u) {
            (A = H).base = M;
          }M._component = A, M._componentConstructor = A.constructor;
        }
      }!b || o ? E.unshift(e) : U || (e.componentDidUpdate && e.componentDidUpdate(f, h, S), L.afterUpdate && L.afterUpdate(e));while (e.__h.length) {
        e.__h.pop().call(e);
      }V || r || _();
    }
  }function x(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        p = r && e._componentConstructor === t.nodeName,
        s = p,
        u = a(t);while (r && !s && (r = r.__u)) {
      s = r.constructor === t.nodeName;
    }return r && s && (!o || r._component) ? (w(r, u, 3, n, o), e = r.base) : (i && !p && (N(i), e = l = null), r = y(t.nodeName, u, n), e && !r.__b && (r.__b = e, l = null), w(r, u, 1, n, o), e = r.base, l && e !== l && (l._component = null, m(l, !1))), e;
  }function N(e) {
    L.beforeUnmount && L.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var n = e._component;n ? N(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.__b = t, s(t), B.push(e), v(t)), e.__r && e.__r(null);
  }function k(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {}, this.__h = [];
  }function U(e, t, n) {
    return d(n, e, {}, !1, t, !1);
  }var S = function S() {},
      L = {},
      T = [],
      M = [],
      P = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      W = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      D = [],
      E = [],
      V = 0,
      A = !1,
      H = !1,
      B = [];t(k.prototype, { setState: function setState(e, n) {
      this.__s || (this.__s = this.state), this.state = t(t({}, this.state), "function" == typeof e ? e(this.state, this.props) : e), n && this.__h.push(n), o(this);
    }, forceUpdate: function forceUpdate(e) {
      e && this.__h.push(e), C(this, 2);
    }, render: function render() {} });var F = { h: e, createElement: e, cloneElement: n, Component: k, render: U, rerender: r, options: L }; true ? module.exports = F : self.preact = F;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("EBst");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_global__ = __webpack_require__("S3PC");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_global___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact_global__);


function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/** @jsx h */




var emojis = ['😀', '😬', '😂', '😄', '😅', '😇', '☺️', '😋', '😘', '😚', '😜', '🤑', '😎', '🤗', '😳', '🙄', '😤', '😱', '😨', '😰', '😥', '🤒', '😭', '💩', '👹', '💀', '👻', '👽', '🤖', '😺', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '🙌', '👏', '👋', '👍', '👊', '✊', '✌️', '👌', '✋', '👐', '💪', '☝️', '🙏', '👆', '🖐', '🤘', '🖖', '✍️', '💅', '👄', '👅', '👂', '👁', '👀', '👶', '👦', '👧', '👨', '👩', '👱', '👴', '👵', '👲', '👳', '👷', '💂', '🕵', '🎅', '👼', '👸', '👰', '🚶', '🏃', '💃', '👯', '👫', '👬', '👭', '🙇', '💁', '🙅', '🙆', '🙋', '🙎', '🙍', '💇', '💆', '💑', '👨‍❤️‍👨', '💏', '👩‍❤️‍💋‍👩', '👨‍❤️‍💋‍👨', '👩‍👩‍👦', '👨‍👨‍👦', '👮', '👚', '👕', '👖', '👔', '👗', '👙', '👘', '💄', '💋', '🎩', '👟', '👞', '👢', '👡', '👠', '👣', '⛑', '🎓', '👑', '🎒', '👝', '👛', '👜', '💼', '🌂', '💍', '🕶', '👓', '🐯', '🦁', '🐮', '🐷', '🐽', '🐸', '🐙', '🐵', '🐦', '🐧', '🐔', '🐒', '🙉', '🙈', '🐣', '🐥', '🐺', '🐗', '🐴', '🦄', '🐝', '🐛', '🐢', '🦀', '🦂', '🕷', '🐜', '🐞', '🐌', '🐠', '🐟', '🐡', '🐬', '🐋', '🐊', '🐆', '🐘', '🐫', '🐪', '🐄', '🐂', '🐃', '🐏', '🐑', '🐀', '🐁', '🐓', '🦃', '🐉', '🐾', '🐿', '🐇', '🐈', '🐩', '🐕', '🐲', '🌵', '🎄', '🌲', '🌴', '🌱', '🌿', '🌾', '🍁', '🍂', '🍃', '🎋', '🎍', '🍀', '🌺', '🌻', '🌹', '🌷', '🌼', '🌸', '💐', '🍄', '🎃', '🐚', '🌎', '🌍', '🌏', '🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌚', '🌝', '🌛', '🌜', '🌞', '⭐️', '🌟', '💫', '✨', '☄️', '🌥', '🌦', '🌧', '⛈', '⚡️', '🔥', '❄️', '🌨', '☔️', '☂️', '🌪', '💨', '☃️', '⛄️', '💧', '💦', '🌊', '🍏', '🍎', '🍐', '🍋', '🍌', '🍉', '🍇', '🌶', '🍅', '🍍', '🍑', '🍈', '🍓', '🌽', '🍠', '🍯', '🍞', '🍗', '🧀', '🍖', '🍤', '🌯', '🌮', '🍝', '🍕', '🌭', '🍟', '🍔', '🍳', '🍜', '🍲', '🍥', '🍣', '🍱', '🍛', '🍙', '🍚', '🎂', '🍰', '🍦', '🍨', '🍧', '🍡', '🍢', '🍘', '🍮', '🍬', '🍭', '🍫', '🍿', '🍩', '🍪', '🍺', '☕️', '🍵', '🍶', '🍹', '🍻', '🍼', '🍴', '🍷', '🍽', '⚽️', '🏀', '🏈', '⚾️', '🎾', '🏐', '🏉', '🎱', '🎿', '🏏', '🏑', '🏓', '🏌', '⛳️', '⛷', '🏂', '⛸', '🏹', '🎣', '🚣', '🏊🏼', '🏄', '🏆', '🕴', '🏇', '🚵', '🚴', '🏋', '⛹', '🛀', '🎽', '🏅', '🎖', '🎗', '🏵', '🎫', '🎟', '🎭', '🎺', '🎷', '🎹', '🎤', '🎪', '🎨', '🎸', '🎻', '🎬', '🎮', '👾', '🎯', '🎲', '🎰', '🎳', '🚗', '🚕', '🚙', '🚌', '🚎', '🏎', '🚓', '🚒', '🚐', '🚛', '🚜', '🏍', '🚲', '🚨', '🚃', '🚟', '🚠', '🚡', '🚖', '🚘', '🚍', '🚔', '🚋', '🚝', '🚄', '🚅', '🚈', '🚞', '🚂', '🚆', '🛬', '🛫', '✈️', '🛩', '🚁', '🚉', '🚊', '🚇', '⛵️', '🛥', '🚤', '⛴', '🚀', '🛳', '🛰', '💺', '🏁', '🚥', '🚦', '🚏', '⛽️', '🚧', '⚓️', '🎡', '🎢', '🎠', '🏗', '🌁', '🗼', '🏭', '⛲️', '⛺️', '🏕', '🗾', '🌋', '🗻', '🏔', '⛰', '🎑', '🏞', '🛣', '🛤', '🌅', '🌄', '🏜', '🏖', '🏝', '🎇', '🌠', '🌌', '🌉', '🌃', '🏙', '🌆', '🌇', '🎆', '🌈', '🏘', '🏰', '🏯', '🏠', '🗽', '🏟', '🏡', '🏚', '🏢', '🏬', '🏣', '🏤', '🏥', '🏦', '🕌', '⛪️', '🏛', '💒', '🏩', '🏫', '🏪', '🏨', '🕍', '🕋', '⛩', '🕹', '💽', '💾', '💿', '📼', '📷', '📹', '🎥', '☎️', '⏱', '🎙', '📻', '📺', '📠', '📟', '⏲', '⏰', '🕰', '⏳', '📡', '🔋', '💴', '💵', '💸', '🛢', '🔦', '💡', '💶', '💷', '💰', '💳', '💎', '🔨', '💣', '🔫', '🔪', '☠️', '🔮', '💈', '💊', '💉', '🔖', '🚿', '🔑', '🛋', '🚪', '🛎', '🖼', '🎁', '🎀', '🎏', '🎈', '🛍', '⛱', '🗺', '🎊', '🎉', '🎎', '🎐', '🎌', '🏮', '📮', '📫', '📯', '📊', '🗃', '📇', '📅', '📉', '📈', '📰', '📕', '📙', '📒', '✂️', '🖇', '📖', '📚', '📌', '📍', '🚩', '❤️', '💔', '❣️', '💕', '💓', '💗', '💖', '💘', '💝', '💠', '🔔'];
var randomEmoji = function randomEmoji() {
  return emojis[Math.random() * emojis.length | 0];
};

var _ref2 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('meta', { charset: 'utf-8' });

var _Demo = function _Demo(props, _ref) {
  var setGlobal = _ref.setGlobal,
      globals = _objectWithoutProperties(_ref, ['setGlobal']);

  return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
    'div',
    null,
    _ref2,
    Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
      'h1',
      null,
      globals.whatever
    ),
    Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
      'button',
      { onClick: function onClick(e) {
          return setGlobal('whatever', randomEmoji() + ' COOL! ' + randomEmoji());
        } },
      'COOL IT'
    )
  );
};

// wrap all your components that use global-state:
var Demo = Object(__WEBPACK_IMPORTED_MODULE_1_preact_global__["withGlobal"])(_Demo);

// setup the global provider in your app, somewhere at the top

var _ref3 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  __WEBPACK_IMPORTED_MODULE_1_preact_global__["GlobalProvider"],
  { whatever: 'initial whatever value' },
  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
    'div',
    null,
    Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Demo, null)
  )
);

var App = function App() {
  return _ref3;
};

if (typeof window !== 'undefined') {
  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["render"])(Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(App, null), document.body, document.body.firstChild);
}

/***/ }),

/***/ "S3PC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.withGlobal = exports.GlobalProvider = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _preact = __webpack_require__("EBst");

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} /** @jsx h */

var GlobalProvider = exports.GlobalProvider = function (_Component) {
  _inherits(GlobalProvider, _Component);

  function GlobalProvider() {
    var _temp, _this, _ret;

    _classCallCheck(this, GlobalProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.getChildContext = function () {
      var _this$props = _this.props,
          children = _this$props.children,
          context = _objectWithoutProperties(_this$props, ['children']);

      context.setGlobal = function (k, v) {
        var _extends2;

        return _this.setState(_extends({}, _this.state, (_extends2 = {}, _extends2[k] = v, _extends2)));
      };
      return _extends({}, context, _this.state);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  GlobalProvider.prototype.render = function render(_ref) {
    var children = _ref.children;

    return children && children[0] || null;
  };

  return GlobalProvider;
}(_preact.Component);

var withGlobal = exports.withGlobal = function withGlobal(OrigComponent) {
  OrigComponent.getChildContext = OrigComponent.getChildContext || function () {};

  var GlobalizedComponent = function (_Component2) {
    _inherits(GlobalizedComponent, _Component2);

    function GlobalizedComponent() {
      _classCallCheck(this, GlobalizedComponent);

      return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
    }

    GlobalizedComponent.prototype.render = function render() {
      var newProps = _extends({}, OrigComponent.getChildContext(), this.props);
      return (0, _preact.h)(OrigComponent, newProps);
    };

    return GlobalizedComponent;
  }(_preact.Component);

  return GlobalizedComponent;
};

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map