/*
 * Copyright 2013 Google Inc.
 *
 * Swiffy runtime version 7.0.0
 *
 * In addition to the Google Terms of Service (http://www.google.com/accounts/TOS),
 * Google grants you and the Google Swiffy end users a personal, worldwide,
 * royalty-free, non-assignable and non-exclusive license to use the Google Swiffy
 * runtime to host it for Google Swiffy end users and to use it in connection with
 * the Google Swiffy service.
 */
(function() {
    var g;
    Object.defineProperty && !Object.defineProperties && (Object.defineProperties = function(a, b) {
        for (var c in b) Object.defineProperty(a, c, b[c]);
        return a
    });
    "Uint32Array" in window || (window.Uint32Array = Array);
    "Uint8Array" in window || (window.Uint8Array = Array);
    "Float32Array" in window || (window.Float32Array = Array);
    var aa = this,
        l = function(a) {
            return void 0 !== a
        },
        ba = function(a, b, c) {
            a = a.split(".");
            c = c || aa;
            a[0] in c || !c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());)!a.length && l(b) ? c[d] = b : c = c[d] ? c[d] : c[d] = {}
        },
        ca = function(a) {
            a.Jb = function() {
                return a.Ys ? a.Ys : a.Ys = new a
            }
        },
        da = function(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" ==
                        typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        },
        ea = function(a) {
            return "array" == da(a)
        },
        fa = function(a) {
            var b = da(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        m = function(a) {
            return "string" == typeof a
        },
        ga = function(a) {
            return "boolean" == typeof a
        },
        ha = function(a) {
            return "number" == typeof a
        },
        q = function(a) {
            return "function" == da(a)
        },
        ia = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        ja = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ka = 0,
        la = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        ma = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        na = function(a, b, c) {
            na = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? la : ma;
            return na.apply(null, arguments)
        },
        oa = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var b = c.slice();
                b.push.apply(b, arguments);
                return a.apply(this, b)
            }
        },
        pa = Date.now || function() {
            return +new Date
        },
        v = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.fa = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.Jk = function(a, c, f) {
                return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2))
            }
        };
    var xa = function(a, b) {
            if (b) a = a.replace(qa, "&amp;").replace(ra, "&lt;").replace(sa, "&gt;").replace(ta, "&quot;").replace(ua, "&#39;").replace(va, "&#0;");
            else {
                if (!wa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(qa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(ra, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(sa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(ta, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(ua, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(va, "&#0;"))
            }
            return a
        },
        qa = /&/g,
        ra = /</g,
        sa = />/g,
        ta = /"/g,
        ua = /'/g,
        va = /\x00/g,
        wa = /[\x00&<>"']/,
        ya = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\x0B",
            '"': '\\"',
            "\\": "\\\\"
        },
        za = {
            "'": "\\'"
        },
        Aa = function(a) {
            a = String(a);
            if (a.quote) return a.quote();
            for (var b = ['"'], c = 0; c < a.length; c++) {
                var d = a.charAt(c),
                    e = d.charCodeAt(0),
                    f = c + 1,
                    h;
                if (!(h = ya[d])) {
                    if (!(31 < e && 127 > e))
                        if (d in za) d = za[d];
                        else if (d in ya) d = za[d] = ya[d];
                    else {
                        e = d;
                        h = d.charCodeAt(0);
                        if (31 < h && 127 > h) e = d;
                        else {
                            if (256 > h) {
                                if (e = "\\x", 16 > h || 256 < h) e += "0"
                            } else e = "\\u", 4096 > h && (e += "0");
                            e += h.toString(16).toUpperCase()
                        }
                        d =
                            za[d] = e
                    }
                    h = d
                }
                b[f] = h
            }
            b.push('"');
            return b.join("")
        },
        Ba = function(a, b) {
            return -1 != a.indexOf(b)
        },
        Ca = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var Da = Array.prototype,
        Ea = Da.indexOf ? function(a, b, c) {
            return Da.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (m(a)) return m(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        Fa = Da.forEach ? function(a, b, c) {
            Da.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = m(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        Ga = Da.map ? function(a, b, c) {
            return Da.map.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = Array(d), f =
                m(a) ? a.split("") : a, h = 0; h < d; h++) h in f && (e[h] = b.call(c, f[h], h, a));
            return e
        },
        Ha = Da.every ? function(a, b, c) {
            return Da.every.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = m(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && !b.call(c, e[f], f, a)) return !1;
            return !0
        },
        Ia = function(a, b) {
            var c = Ea(a, b),
                d;
            (d = 0 <= c) && Da.splice.call(a, c, 1);
            return d
        },
        Ja = function(a, b, c) {
            t: {
                for (var d = a.length, e = m(a) ? a.split("") : a, f = 0; f < d; f++)
                    if (f in e && b.call(c, e[f], f, a)) {
                        b = f;
                        break t
                    }
                b = -1
            }
            return 0 <= b ? (Da.splice.call(a, b, 1), !0) : !1
        },
        Ka = function(a) {
            return Da.concat.apply(Da,
                arguments)
        },
        La = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        },
        Ma = function(a, b, c) {
            return 2 >= arguments.length ? Da.slice.call(a, b) : Da.slice.call(a, b, c)
        },
        Oa = function(a, b, c) {
            c = c || Na;
            for (var d = 0, e = a.length, f; d < e;) {
                var h = d + e >> 1,
                    k;
                k = c(b, a[h]);
                0 < k ? d = h + 1 : (e = h, f = !k)
            }
            return f ? d : ~d
        },
        Na = function(a, b) {
            return a > b ? 1 : a < b ? -1 : 0
        };
    var Pa = function(a) {
        return a
    };
    var Qa = function(a, b, c) {
            for (var d in a) b.call(c, a[d], d, a)
        },
        Ra = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = a[d];
            return b
        },
        Sa = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = d;
            return b
        },
        Ta = function(a) {
            var b = da(a);
            if ("object" == b || "array" == b) {
                if (a.clone) return a.clone();
                var b = "array" == b ? [] : {},
                    c;
                for (c in a) b[c] = Ta(a[c]);
                return b
            }
            return a
        },
        Ua = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        Va = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d =
                    arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < Ua.length; f++) c = Ua[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        };
    var Wa;
    t: {
        var Xa = aa.navigator;
        if (Xa) {
            var Ya = Xa.userAgent;
            if (Ya) {
                Wa = Ya;
                break t
            }
        }
        Wa = ""
    };
    var Za, $a, ab, bb = Ba(Wa, "Opera") || Ba(Wa, "OPR"),
        cb = Ba(Wa, "Trident") || Ba(Wa, "MSIE"),
        db = Ba(Wa, "Gecko") && !Ba(Wa.toLowerCase(), "webkit") && !(Ba(Wa, "Trident") || Ba(Wa, "MSIE")),
        eb = Ba(Wa.toLowerCase(), "webkit"),
        fb = eb && Ba(Wa, "Mobile"),
        hb = aa.navigator || null,
        ib = hb && hb.platform || "";
    Za = Ba(ib, "Mac");
    $a = Ba(ib, "Win");
    ab = Ba(ib, "Linux");
    var jb = Wa,
        kb = !!jb && Ba(jb, "Android"),
        lb = function() {
            var a = aa.document;
            return a ? a.documentMode : void 0
        },
        mb = function() {
            var a = "",
                b;
            if (bb && aa.opera) return a = aa.opera.version, q(a) ? a() : a;
            db ? b = /rv\:([^\);]+)(\)|;)/ : cb ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : eb && (b = /WebKit\/(\S+)/);
            b && (a = (a = b.exec(Wa)) ? a[1] : "");
            return cb && (b = lb(), b > parseFloat(a)) ? String(b) : a
        }(),
        nb = {},
        ob = function(a) {
            var b;
            if (!(b = nb[a])) {
                b = 0;
                for (var c = String(mb).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,
                    "").split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                    var h = c[f] || "",
                        k = d[f] || "",
                        n = RegExp("(\\d*)(\\D*)", "g"),
                        r = RegExp("(\\d*)(\\D*)", "g");
                    do {
                        var t = n.exec(h) || ["", "", ""],
                            p = r.exec(k) || ["", "", ""];
                        if (0 == t[0].length && 0 == p[0].length) break;
                        b = Ca(0 == t[1].length ? 0 : parseInt(t[1], 10), 0 == p[1].length ? 0 : parseInt(p[1], 10)) || Ca(0 == t[2].length, 0 == p[2].length) || Ca(t[2], p[2])
                    } while (0 == b)
                }
                b = nb[a] = 0 <= b
            }
            return b
        },
        pb = aa.document,
        qb = pb && cb ? lb() || ("CSS1Compat" == pb.compatMode ? parseInt(mb, 10) : 5) : void 0;
    var rb = !cb || cb && 9 <= qb;
    !db && !cb || cb && cb && 9 <= qb || db && ob("1.9.1");
    cb && ob("9");
    var tb = function(a, b) {
            Qa(b, function(b, d) {
                "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in sb ? a.setAttribute(sb[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
            })
        },
        sb = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        },
        vb = function(a, b, c) {
            var d = arguments,
                e = d[0],
                f = d[1];
            if (!rb && f && (f.name || f.type)) {
                e = ["<", e];
                f.name && e.push(' name="', xa(f.name), '"');
                if (f.type) {
                    e.push(' type="', xa(f.type), '"');
                    var h = {};
                    Va(h, f);
                    delete h.type;
                    f = h
                }
                e.push(">");
                e = e.join("")
            }
            e = document.createElement(e);
            f && (m(f) ? e.className = f : ea(f) ? e.className = f.join(" ") : tb(e, f));
            2 < d.length && ub(document, e, d, 2);
            return e
        },
        ub = function(a, b, c, d) {
            function e(c) {
                c && b.appendChild(m(c) ? a.createTextNode(c) : c)
            }
            for (; d < c.length; d++) {
                var f = c[d];
                !fa(f) || ia(f) && 0 < f.nodeType ? e(f) : Fa(wb(f) ? La(f) : f, e)
            }
        },
        yb = function(a) {
            for (var b; b =
                a.firstChild;) a.removeChild(b)
        },
        zb = function(a) {
            return a && a.parentNode ? a.parentNode.removeChild(a) : null
        },
        Ab = function(a, b) {
            var c = b.parentNode;
            c && c.replaceChild(a, b)
        },
        wb = function(a) {
            if (a && "number" == typeof a.length) {
                if (ia(a)) return "function" == typeof a.item || "string" == typeof a.item;
                if (q(a)) return "function" == typeof a.item
            }
            return !1
        };
    var Bb = function(a) {
        Bb[" "](a);
        return a
    };
    Bb[" "] = function() {};
    var Cb = !cb || cb && 9 <= qb,
        Db = cb && !ob("9");
    !eb || ob("528");
    db && ob("1.9b") || cb && ob("8") || bb && ob("9.5") || eb && ob("528");
    db && !ob("8") || cb && ob("9");
    var Eb = function() {};
    Eb.prototype.lt = !1;
    Eb.prototype.Rl = function() {
        this.lt || (this.lt = !0, this.kg())
    };
    Eb.prototype.kg = function() {
        if (this.St)
            for (; this.St.length;) this.St.shift()()
    };
    var Fb = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.ng = !1;
        this.Gr = !0
    };
    Fb.prototype.kg = function() {};
    Fb.prototype.Rl = function() {};
    Fb.prototype.stopPropagation = function() {
        this.ng = !0
    };
    Fb.prototype.preventDefault = function() {
        this.defaultPrevented = !0;
        this.Gr = !1
    };
    var Hb = function(a, b) {
        Fb.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.Fc = this.state = null;
        a && this.init(a, b)
    };
    v(Hb, Fb);
    Hb.prototype.init = function(a, b) {
        var c = this.type = a.type;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var d = a.relatedTarget;
        if (d) {
            if (db) {
                var e;
                t: {
                    try {
                        Bb(d.nodeName);
                        e = !0;
                        break t
                    } catch (f) {}
                    e = !1
                }
                e || (d = null)
            }
        } else "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
        this.relatedTarget = d;
        this.offsetX = eb || void 0 !== a.offsetX ? a.offsetX : a.layerX;
        this.offsetY = eb || void 0 !== a.offsetY ? a.offsetY : a.layerY;
        this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
        this.clientY = void 0 !== a.clientY ? a.clientY :
            a.pageY;
        this.screenX = a.screenX || 0;
        this.screenY = a.screenY || 0;
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.state = a.state;
        this.Fc = a;
        a.defaultPrevented && this.preventDefault()
    };
    Hb.prototype.stopPropagation = function() {
        Hb.fa.stopPropagation.call(this);
        this.Fc.stopPropagation ? this.Fc.stopPropagation() : this.Fc.cancelBubble = !0
    };
    Hb.prototype.preventDefault = function() {
        Hb.fa.preventDefault.call(this);
        var a = this.Fc;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, Db) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    Hb.prototype.kg = function() {};
    var Ib = "closure_listenable_" + (1E6 * Math.random() | 0),
        Jb = 0;
    var Kb = function(a, b, c, d, e, f) {
        this.wd = a;
        this.dl = b;
        this.src = c;
        this.type = d;
        this.Vk = !!e;
        this.Yf = f;
        this.key = ++Jb;
        this.wh = this.Yk = !1
    };
    Kb.prototype.il = function() {
        this.wh = !0;
        this.Yf = this.src = this.dl = this.wd = null
    };
    var Lb = function(a) {
        this.src = a;
        this.Tb = {};
        this.ij = 0
    };
    g = Lb.prototype;
    g.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.Tb[f];
        a || (a = this.Tb[f] = [], this.ij++);
        var h = Mb(a, b, d, e); - 1 < h ? (b = a[h], c || (b.Yk = !1)) : (b = new Kb(b, null, this.src, f, !!d, e), b.Yk = c, a.push(b));
        return b
    };
    g.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.Tb)) return !1;
        var e = this.Tb[a];
        b = Mb(e, b, c, d);
        return -1 < b ? (e[b].il(), Da.splice.call(e, b, 1), 0 == e.length && (delete this.Tb[a], this.ij--), !0) : !1
    };
    g.qs = function(a) {
        var b = a.type;
        if (!(b in this.Tb)) return !1;
        var c = Ia(this.Tb[b], a);
        c && (a.il(), 0 == this.Tb[b].length && (delete this.Tb[b], this.ij--));
        return c
    };
    g.ot = function(a) {
        a = a && a.toString();
        var b = 0,
            c;
        for (c in this.Tb)
            if (!a || c == a) {
                for (var d = this.Tb[c], e = 0; e < d.length; e++)++b, d[e].il();
                delete this.Tb[c];
                this.ij--
            }
        return b
    };
    g.Ho = function(a, b, c, d) {
        a = this.Tb[a.toString()];
        var e = -1;
        a && (e = Mb(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    var Mb = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.wh && f.wd == b && f.Vk == !!c && f.Yf == d) return e
        }
        return -1
    };
    var Nb = "closure_lm_" + (1E6 * Math.random() | 0),
        Ob = {},
        Pb = 0,
        Qb = function(a, b, c, d, e) {
            if (ea(b)) {
                for (var f = 0; f < b.length; f++) Qb(a, b[f], c, d, e);
                return null
            }
            c = Rb(c);
            if (a && a[Ib]) a = a.Cx(b, c, d, e);
            else {
                if (!b) throw Error("Invalid event type");
                var f = !!d,
                    h = Sb(a);
                h || (a[Nb] = h = new Lb(a));
                c = h.add(b, c, !1, d, e);
                c.dl || (d = Tb(), c.dl = d, d.src = a, d.wd = c, a.addEventListener ? a.addEventListener(b.toString(), d, f) : a.attachEvent(Ub(b.toString()), d), Pb++);
                a = c
            }
            return a
        },
        Tb = function() {
            var a = Vb,
                b = Cb ? function(c) {
                    return a.call(b.src, b.wd, c)
                } : function(c) {
                    c =
                        a.call(b.src, b.wd, c);
                    if (!c) return c
                };
            return b
        },
        Wb = function(a, b, c, d, e) {
            if (ea(b)) {
                for (var f = 0; f < b.length; f++) Wb(a, b[f], c, d, e);
                return null
            }
            c = Rb(c);
            if (a && a[Ib]) return a.dy(b, c, d, e);
            if (!a) return !1;
            if (a = Sb(a))
                if (b = a.Ho(b, c, !!d, e)) return Xb(b);
            return !1
        },
        Xb = function(a) {
            if (ha(a) || !a || a.wh) return !1;
            var b = a.src;
            if (b && b[Ib]) return b.wr(a);
            var c = a.type,
                d = a.dl;
            b.removeEventListener ? b.removeEventListener(c, d, a.Vk) : b.detachEvent && b.detachEvent(Ub(c), d);
            Pb--;
            (c = Sb(b)) ? (c.qs(a), 0 == c.ij && (c.src = null, b[Nb] = null)) : a.il();
            return !0
        },
        Yb = function(a, b) {
            if (!a) return 0;
            if (a && a[Ib]) return a.Er(b);
            var c = Sb(a);
            if (!c) return 0;
            var d = 0,
                e = b && b.toString(),
                f;
            for (f in c.Tb)
                if (!e || f == e)
                    for (var h = c.Tb[f].concat(), k = 0; k < h.length; ++k) Xb(h[k]) && ++d;
            return d
        },
        Ub = function(a) {
            return a in Ob ? Ob[a] : Ob[a] = "on" + a
        },
        $b = function(a, b, c, d) {
            var e = 1;
            if (a = Sb(a))
                if (b = a.Tb[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                        var f = b[a];
                        f && f.Vk == c && !f.wh && (e &= !1 !== Zb(f, d))
                    }
                return Boolean(e)
        },
        Zb = function(a, b) {
            var c = a.wd,
                d = a.Yf || a.src;
            a.Yk && Xb(a);
            return c.call(d,
                b)
        },
        Vb = function(a, b) {
            if (a.wh) return !0;
            if (!Cb) {
                var c;
                if (!(c = b)) t: {
                    c = ["window", "event"];
                    for (var d = aa, e; e = c.shift();)
                        if (null != d[e]) d = d[e];
                        else {
                            c = null;
                            break t
                        }
                    c = d
                }
                e = c;
                c = new Hb(e, this);
                d = !0;
                if (!(0 > e.keyCode || void 0 != e.returnValue)) {
                    t: {
                        var f = !1;
                        if (0 == e.keyCode) try {
                            e.keyCode = -1;
                            break t
                        } catch (h) {
                            f = !0
                        }
                        if (f || void 0 == e.returnValue) e.returnValue = !0
                    }
                    e = [];
                    for (f = c.currentTarget; f; f = f.parentNode) e.push(f);
                    for (var f = a.type, k = e.length - 1; !c.ng && 0 <= k; k--) c.currentTarget = e[k], d &= $b(e[k], f, !0, c);
                    for (k = 0; !c.ng && k < e.length; k++) c.currentTarget =
                        e[k], d &= $b(e[k], f, !1, c)
                }
                return d
            }
            return Zb(a, new Hb(b, this))
        },
        Sb = function(a) {
            a = a[Nb];
            return a instanceof Lb ? a : null
        },
        ac = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        Rb = function(a) {
            if (q(a)) return a;
            a[ac] || (a[ac] = function(b) {
                return a.handleEvent(b)
            });
            return a[ac]
        };
    var bc = function() {
        this.fg = new Lb(this);
        this.dx = this;
        this.Pn = null
    };
    v(bc, Eb);
    bc.prototype[Ib] = !0;
    g = bc.prototype;
    g.addEventListener = function(a, b, c, d) {
        Qb(this, a, b, c, d)
    };
    g.removeEventListener = function(a, b, c, d) {
        Wb(this, a, b, c, d)
    };
    g.dispatchEvent = function(a) {
        var b, c = this.Pn;
        if (c)
            for (b = []; c; c = c.Pn) b.push(c);
        var c = this.dx,
            d = a.type || a;
        if (m(a)) a = new Fb(a, c);
        else if (a instanceof Fb) a.target = a.target || c;
        else {
            var e = a;
            a = new Fb(d, c);
            Va(a, e)
        }
        var e = !0,
            f;
        if (b)
            for (var h = b.length - 1; !a.ng && 0 <= h; h--) f = a.currentTarget = b[h], e = f.Hl(d, !0, a) && e;
        a.ng || (f = a.currentTarget = c, e = f.Hl(d, !0, a) && e, a.ng || (e = f.Hl(d, !1, a) && e));
        if (b)
            for (h = 0; !a.ng && h < b.length; h++) f = a.currentTarget = b[h], e = f.Hl(d, !1, a) && e;
        return e
    };
    g.kg = function() {
        bc.fa.kg.call(this);
        this.Er();
        this.Pn = null
    };
    g.Cx = function(a, b, c, d) {
        return this.fg.add(String(a), b, !1, c, d)
    };
    g.dy = function(a, b, c, d) {
        return this.fg.remove(String(a), b, c, d)
    };
    g.wr = function(a) {
        return this.fg.qs(a)
    };
    g.Er = function(a) {
        return this.fg ? this.fg.ot(a) : 0
    };
    g.Hl = function(a, b, c) {
        a = this.fg.Tb[String(a)];
        if (!a) return !0;
        a = a.concat();
        for (var d = !0, e = 0; e < a.length; ++e) {
            var f = a[e];
            if (f && !f.wh && f.Vk == b) {
                var h = f.wd,
                    k = f.Yf || f.src;
                f.Yk && this.wr(f);
                d = !1 !== h.call(k, c) && d
            }
        }
        return d && 0 != c.Gr
    };
    g.Ho = function(a, b, c, d) {
        return this.fg.Ho(String(a), b, c, d)
    };
    var hc = function(a, b, c, d, e) {
            if (!(cb || eb && ob("525"))) return !0;
            if (Za && e) return cc(a);
            if (e && !d) return !1;
            ha(b) && (b = dc(b));
            if (!c && (17 == b || 18 == b || Za && 91 == b)) return !1;
            if (eb && d && c) switch (a) {
                case 220:
                case 219:
                case 221:
                case 192:
                case 186:
                case 189:
                case 187:
                case 188:
                case 190:
                case 191:
                case 192:
                case 222:
                    return !1
            }
            if (cb && d && b == a) return !1;
            switch (a) {
                case 13:
                    return !0;
                case 27:
                    return !eb
            }
            return cc(a)
        },
        cc = function(a) {
            if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || eb && 0 == a) return !0;
            switch (a) {
                case 32:
                case 63:
                case 107:
                case 109:
                case 110:
                case 111:
                case 186:
                case 59:
                case 189:
                case 187:
                case 61:
                case 188:
                case 190:
                case 191:
                case 192:
                case 222:
                case 219:
                case 220:
                case 221:
                    return !0;
                default:
                    return !1
            }
        },
        dc = function(a) {
            if (db) a = ic(a);
            else if (Za && eb) t: switch (a) {
                case 93:
                    a = 91;
                    break t
            }
            return a
        },
        ic = function(a) {
            switch (a) {
                case 61:
                    return 187;
                case 59:
                    return 186;
                case 173:
                    return 189;
                case 224:
                    return 91;
                case 0:
                    return 224;
                default:
                    return a
            }
        };
    var jc = function(a, b) {
        bc.call(this);
        a && this.Zi(a, b)
    };
    v(jc, bc);
    g = jc.prototype;
    g.oj = null;
    g.ml = null;
    g.$n = null;
    g.nl = null;
    g.Lc = -1;
    g.ff = -1;
    g.io = !1;
    var kc = {
            3: 13,
            12: 144,
            63232: 38,
            63233: 40,
            63234: 37,
            63235: 39,
            63236: 112,
            63237: 113,
            63238: 114,
            63239: 115,
            63240: 116,
            63241: 117,
            63242: 118,
            63243: 119,
            63244: 120,
            63245: 121,
            63246: 122,
            63247: 123,
            63248: 44,
            63272: 46,
            63273: 36,
            63275: 35,
            63276: 33,
            63277: 34,
            63289: 144,
            63302: 45
        },
        lc = {
            Up: 38,
            Down: 40,
            Left: 37,
            Right: 39,
            Enter: 13,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            "U+007F": 46,
            Home: 36,
            End: 35,
            PageUp: 33,
            PageDown: 34,
            Insert: 45
        },
        mc = cb || eb && ob("525"),
        nc = Za && db;
    g = jc.prototype;
    g.ix = function(a) {
        eb && (17 == this.Lc && !a.ctrlKey || 18 == this.Lc && !a.altKey || Za && 91 == this.Lc && !a.metaKey) && (this.ff = this.Lc = -1); - 1 == this.Lc && (a.ctrlKey && 17 != a.keyCode ? this.Lc = 17 : a.altKey && 18 != a.keyCode ? this.Lc = 18 : a.metaKey && 91 != a.keyCode && (this.Lc = 91));
        mc && !hc(a.keyCode, this.Lc, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.ff = dc(a.keyCode), nc && (this.io = a.altKey))
    };
    g.cy = function() {
        this.ff = this.Lc = -1
    };
    g.jx = function(a) {
        this.cy();
        this.io = a.altKey
    };
    g.handleEvent = function(a) {
        var b = a.Fc,
            c, d, e = b.altKey;
        cb && "keypress" == a.type ? (c = this.ff, d = 13 != c && 27 != c ? b.keyCode : 0) : eb && "keypress" == a.type ? (c = this.ff, d = 0 <= b.charCode && 63232 > b.charCode && cc(c) ? b.charCode : 0) : bb ? (c = this.ff, d = cc(c) ? b.keyCode : 0) : (c = b.keyCode || this.ff, d = b.charCode || 0, nc && (e = this.io), Za && 63 == d && 224 == c && (c = 191));
        var f = c = dc(c),
            h = b.keyIdentifier;
        c ? 63232 <= c && c in kc ? f = kc[c] : 25 == c && a.shiftKey && (f = 9) : h && h in lc && (f = lc[h]);
        a = f == this.Lc;
        this.Lc = f;
        b = new oc(f, d, a, b);
        b.altKey = e;
        this.dispatchEvent(b)
    };
    g.Zi = function(a, b) {
        this.nl && this.detach();
        this.oj = a;
        this.ml = Qb(this.oj, "keypress", this, b);
        this.$n = Qb(this.oj, "keydown", this.ix, b, this);
        this.nl = Qb(this.oj, "keyup", this.jx, b, this)
    };
    g.detach = function() {
        this.ml && (Xb(this.ml), Xb(this.$n), Xb(this.nl), this.nl = this.$n = this.ml = null);
        this.oj = null;
        this.ff = this.Lc = -1
    };
    g.kg = function() {
        jc.fa.kg.call(this);
        this.detach()
    };
    var oc = function(a, b, c, d) {
        Hb.call(this, d);
        this.type = "key";
        this.keyCode = a;
        this.charCode = b;
        this.repeat = c
    };
    v(oc, Hb);
    var pc = "StopIteration" in aa ? aa.StopIteration : Error("StopIteration"),
        qc = function() {};
    qc.prototype.next = function() {
        throw pc;
    };
    qc.prototype.no = function() {
        return this
    };
    var rc = function(a, b) {
        this.Ga = {};
        this.$a = [];
        this.Yi = this.jb = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else a && this.$i(a)
    };
    g = rc.prototype;
    g.vd = function() {
        return this.jb
    };
    g.Ic = function() {
        this.Vi();
        for (var a = [], b = 0; b < this.$a.length; b++) a.push(this.Ga[this.$a[b]]);
        return a
    };
    g.hf = function() {
        this.Vi();
        return this.$a.concat()
    };
    g.se = function(a) {
        return sc(this.Ga, a)
    };
    g.Fo = function(a) {
        for (var b = 0; b < this.$a.length; b++) {
            var c = this.$a[b];
            if (sc(this.Ga, c) && this.Ga[c] == a) return !0
        }
        return !1
    };
    g.Sc = function(a, b) {
        if (this === a) return !0;
        if (this.jb != a.vd()) return !1;
        var c = b || tc;
        this.Vi();
        for (var d, e = 0; d = this.$a[e]; e++)
            if (!c(this.get(d), a.get(d))) return !1;
        return !0
    };
    var tc = function(a, b) {
        return a === b
    };
    g = rc.prototype;
    g.sb = function() {
        return 0 == this.jb
    };
    g.clear = function() {
        this.Ga = {};
        this.Yi = this.jb = this.$a.length = 0
    };
    g.remove = function(a) {
        return sc(this.Ga, a) ? (delete this.Ga[a], this.jb--, this.Yi++, this.$a.length > 2 * this.jb && this.Vi(), !0) : !1
    };
    g.Vi = function() {
        if (this.jb != this.$a.length) {
            for (var a = 0, b = 0; a < this.$a.length;) {
                var c = this.$a[a];
                sc(this.Ga, c) && (this.$a[b++] = c);
                a++
            }
            this.$a.length = b
        }
        if (this.jb != this.$a.length) {
            for (var d = {}, b = a = 0; a < this.$a.length;) c = this.$a[a], sc(d, c) || (this.$a[b++] = c, d[c] = 1), a++;
            this.$a.length = b
        }
    };
    g.get = function(a, b) {
        return sc(this.Ga, a) ? this.Ga[a] : b
    };
    g.set = function(a, b) {
        sc(this.Ga, a) || (this.jb++, this.$a.push(a), this.Yi++);
        this.Ga[a] = b
    };
    g.$i = function(a) {
        var b;
        a instanceof rc ? (b = a.hf(), a = a.Ic()) : (b = Sa(a), a = Ra(a));
        for (var c = 0; c < b.length; c++) this.set(b[c], a[c])
    };
    g.forEach = function(a, b) {
        for (var c = this.hf(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    g.clone = function() {
        return new rc(this)
    };
    g.no = function(a) {
        this.Vi();
        var b = 0,
            c = this.$a,
            d = this.Ga,
            e = this.Yi,
            f = this,
            h = new qc;
        h.next = function() {
            for (;;) {
                if (e != f.Yi) throw Error("The map has changed since the iterator was created");
                if (b >= c.length) throw pc;
                var h = c[b++];
                return a ? h : d[h]
            }
        };
        return h
    };
    var sc = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var uc = function(a) {
            if ("function" == typeof a.vd) a = a.vd();
            else if (fa(a) || m(a)) a = a.length;
            else {
                var b = 0,
                    c;
                for (c in a) b++;
                a = b
            }
            return a
        },
        vc = function(a) {
            if ("function" == typeof a.Ic) return a.Ic();
            if (m(a)) return a.split("");
            if (fa(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return Ra(a)
        },
        wc = function(a, b, c) {
            if ("function" == typeof a.every) return a.every(b, c);
            if (fa(a) || m(a)) return Ha(a, b, c);
            var d;
            if ("function" == typeof a.hf) d = a.hf();
            else if ("function" != typeof a.Ic)
                if (fa(a) || m(a)) {
                    d = [];
                    for (var e =
                        a.length, f = 0; f < e; f++) d.push(f)
                } else d = Sa(a);
            else d = void 0;
            for (var e = vc(a), f = e.length, h = 0; h < f; h++)
                if (!b.call(c, e[h], d && d[h], a)) return !1;
            return !0
        };
    var xc = function(a) {
            this.Ga = new rc;
            a && this.$i(a)
        },
        yc = function(a) {
            var b = typeof a;
            return "object" == b && a || "function" == b ? "o" + (a[ja] || (a[ja] = ++ka)) : b.substr(0, 1) + a
        };
    g = xc.prototype;
    g.vd = function() {
        return this.Ga.vd()
    };
    g.add = function(a) {
        this.Ga.set(yc(a), a)
    };
    g.$i = function(a) {
        a = vc(a);
        for (var b = a.length, c = 0; c < b; c++) this.add(a[c])
    };
    g.ot = function(a) {
        a = vc(a);
        for (var b = a.length, c = 0; c < b; c++) this.remove(a[c])
    };
    g.remove = function(a) {
        return this.Ga.remove(yc(a))
    };
    g.clear = function() {
        this.Ga.clear()
    };
    g.sb = function() {
        return this.Ga.sb()
    };
    g.contains = function(a) {
        return this.Ga.se(yc(a))
    };
    g.Ic = function() {
        return this.Ga.Ic()
    };
    g.clone = function() {
        return new xc(this)
    };
    g.Sc = function(a) {
        return this.vd() == uc(a) && this.Ox(a)
    };
    g.Ox = function(a) {
        var b = uc(a);
        if (this.vd() > b) return !1;
        !(a instanceof xc) && 5 < b && (a = new xc(a));
        return wc(this, function(b) {
            var d = a;
            if ("function" == typeof d.contains) b = d.contains(b);
            else if ("function" == typeof d.Fo) b = d.Fo(b);
            else if (fa(d) || m(d)) b = 0 <= Ea(d, b);
            else t: {
                for (var e in d)
                    if (d[e] == b) {
                        b = !0;
                        break t
                    }
                b = !1
            }
            return b
        })
    };
    g.no = function() {
        return this.Ga.no(!1)
    };
    var zc = function() {};
    ca(zc);
    zc.prototype.mz = 0;
    zc.prototype.Kb = function() {
        return ":" + (this.mz++).toString(36)
    };
    var Ac = function(a, b, c) {
        this.cf = a || null;
        this.Wx = !!c
    };
    g = Ac.prototype;
    g.Ze = function() {
        if (!this.wb && (this.wb = new rc, this.jb = 0, this.cf))
            for (var a = this.cf.split("&"), b = 0; b < a.length; b++) {
                var c = a[b].indexOf("="),
                    d = null,
                    e = null;
                0 <= c ? (d = a[b].substring(0, c), e = a[b].substring(c + 1)) : d = a[b];
                d = decodeURIComponent(d.replace(/\+/g, " "));
                d = this.yh(d);
                this.add(d, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
            }
    };
    g.wb = null;
    g.jb = null;
    g.vd = function() {
        this.Ze();
        return this.jb
    };
    g.add = function(a, b) {
        this.Ze();
        this.$k();
        a = this.yh(a);
        var c = this.wb.get(a);
        c || this.wb.set(a, c = []);
        c.push(b);
        this.jb++;
        return this
    };
    g.remove = function(a) {
        this.Ze();
        a = this.yh(a);
        return this.wb.se(a) ? (this.$k(), this.jb -= this.wb.get(a).length, this.wb.remove(a)) : !1
    };
    g.clear = function() {
        this.$k();
        this.wb = null;
        this.jb = 0
    };
    g.sb = function() {
        this.Ze();
        return 0 == this.jb
    };
    g.se = function(a) {
        this.Ze();
        a = this.yh(a);
        return this.wb.se(a)
    };
    g.Fo = function(a) {
        var b = this.Ic();
        return 0 <= Ea(b, a)
    };
    g.hf = function() {
        this.Ze();
        for (var a = this.wb.Ic(), b = this.wb.hf(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    g.Ic = function(a) {
        this.Ze();
        var b = [];
        if (m(a)) this.se(a) && (b = Ka(b, this.wb.get(this.yh(a))));
        else {
            a = this.wb.Ic();
            for (var c = 0; c < a.length; c++) b = Ka(b, a[c])
        }
        return b
    };
    g.set = function(a, b) {
        this.Ze();
        this.$k();
        a = this.yh(a);
        this.se(a) && (this.jb -= this.wb.get(a).length);
        this.wb.set(a, [b]);
        this.jb++;
        return this
    };
    g.get = function(a, b) {
        var c = a ? this.Ic(a) : [];
        return 0 < c.length ? String(c[0]) : b
    };
    g.toString = function() {
        if (this.cf) return this.cf;
        if (!this.wb) return "";
        for (var a = [], b = this.wb.hf(), c = 0; c < b.length; c++)
            for (var d = b[c], e = encodeURIComponent(String(d)), d = this.Ic(d), f = 0; f < d.length; f++) {
                var h = e;
                "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
                a.push(h)
            }
        return this.cf = a.join("&")
    };
    g.$k = function() {
        this.cf = null
    };
    g.clone = function() {
        var a = new Ac;
        a.cf = this.cf;
        this.wb && (a.wb = this.wb.clone(), a.jb = this.jb);
        return a
    };
    g.yh = function(a) {
        a = String(a);
        this.Wx && (a = a.toLowerCase());
        return a
    };
    var Bc = null,
        Cc = null,
        Dc = db || eb || bb || "function" == typeof aa.atob,
        Ec = function() {
            if (!Bc) {
                Bc = {};
                Cc = {};
                for (var a = 0; 65 > a; a++) Bc[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a), Cc[Bc[a]] = a, 62 <= a && (Cc["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)] = a)
            }
        };
    var Fc = function(a) {
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
            return eval("(" + a + ")")
        } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    };
    var Hc = function(a, b) {
        this.Ar = a || null;
        this.Zc = !!b;
        this.Ga = new rc;
        this.kb = new Gc("", void 0);
        this.kb.next = this.kb.bd = this.kb
    };
    g = Hc.prototype;
    g.Fs = function(a) {
        (a = this.Ga.get(a)) && this.Zc && (a.remove(), this.gs(a));
        return a
    };
    g.get = function(a, b) {
        var c = this.Fs(a);
        return c ? c.value : b
    };
    g.set = function(a, b) {
        var c = this.Fs(a);
        c ? c.value = b : (c = new Gc(a, b), this.Ga.set(a, c), this.gs(c))
    };
    g.shift = function() {
        return this.Ds(this.kb.next)
    };
    g.pop = function() {
        return this.Ds(this.kb.bd)
    };
    g.remove = function(a) {
        return (a = this.Ga.get(a)) ? (this.removeNode(a), !0) : !1
    };
    g.removeNode = function(a) {
        a.remove();
        this.Ga.remove(a.key)
    };
    g.vd = function() {
        return this.Ga.vd()
    };
    g.sb = function() {
        return this.Ga.sb()
    };
    g.hf = function() {
        return this.map(function(a, b) {
            return b
        })
    };
    g.Ic = function() {
        return this.map(function(a) {
            return a
        })
    };
    g.contains = function(a) {
        return this.some(function(b) {
            return b == a
        })
    };
    g.se = function(a) {
        return this.Ga.se(a)
    };
    g.clear = function() {
        this.cs(0)
    };
    g.forEach = function(a, b) {
        for (var c = this.kb.next; c != this.kb; c = c.next) a.call(b, c.value, c.key, this)
    };
    g.map = function(a, b) {
        for (var c = [], d = this.kb.next; d != this.kb; d = d.next) c.push(a.call(b, d.value, d.key, this));
        return c
    };
    g.some = function(a, b) {
        for (var c = this.kb.next; c != this.kb; c = c.next)
            if (a.call(b, c.value, c.key, this)) return !0;
        return !1
    };
    g.every = function(a, b) {
        for (var c = this.kb.next; c != this.kb; c = c.next)
            if (!a.call(b, c.value, c.key, this)) return !1;
        return !0
    };
    g.gs = function(a) {
        this.Zc ? (a.next = this.kb.next, a.bd = this.kb, this.kb.next = a, a.next.bd = a) : (a.bd = this.kb.bd, a.next = this.kb, this.kb.bd = a, a.bd.next = a);
        null != this.Ar && this.cs(this.Ar)
    };
    g.cs = function(a) {
        for (var b = this.Ga.vd(); b > a; b--) this.removeNode(this.Zc ? this.kb.bd : this.kb.next)
    };
    g.Ds = function(a) {
        this.kb != a && this.removeNode(a);
        return a.value
    };
    var Gc = function(a, b) {
        this.key = a;
        this.value = b
    };
    Gc.prototype.remove = function() {
        this.bd.next = this.next;
        this.next.bd = this.bd;
        delete this.bd;
        delete this.next
    };
    var Ic, Jc, Kc;
    Kc = Jc = Ic = !1;
    var Lc = Wa;
    Lc && (-1 != Lc.indexOf("Firefox") || -1 != Lc.indexOf("Camino") || (-1 != Lc.indexOf("iPhone") || -1 != Lc.indexOf("iPod") ? Ic = !0 : -1 != Lc.indexOf("iPad") ? Jc = !0 : -1 != Lc.indexOf("Chrome") || -1 != Lc.indexOf("Android") || -1 != Lc.indexOf("Safari") && (Kc = !0)));
    var Mc = Ic,
        Nc = Jc,
        Oc = Kc;
    var Pc = /iPhone|iPod/,
        Qc = function(a, b, c, d) {
            return a << 21 | b << 14 | c << 7 | d
        },
        Rc = /OS (\d)_(\d)(?:_(\d))?/;
    var Sc = function(a, b, c, d, e) {
        this.clip = a;
        c || (a = a.Fa(), d = this.op(d, e), this.mp = a.p - d.x, this.np = a.q - d.y);
        this.mi = b
    };
    Sc.prototype.mp = 0;
    Sc.prototype.np = 0;
    Sc.prototype.op = function(a, b) {
        var c = this.clip.getParent() ? this.clip.getParent().Da() : Tc,
            d = new Uc(a, b);
        d.ja(c.Bd());
        return d
    };
    Sc.prototype.xv = function(a, b) {
        var c = this.op(a, b),
            d = c.x + this.mp,
            c = c.y + this.np;
        this.mi && (d = Math.max(Math.min(d, this.mi.t), this.mi.k), c = Math.max(Math.min(c, this.mi.s), this.mi.j));
        this.clip.setTransform(this.clip.Fa().gd(d, c))
    };
    var Vc = function(a, b) {
            this.type = a;
            this.Qf = b || null
        },
        Wc = {
            iC: 0,
            gC: 1,
            AC: 2,
            wC: 3,
            xC: 4,
            nE: 5,
            cB: 6,
            tC: 7,
            uD: 8,
            vD: 9,
            nD: 10,
            mD: 11,
            PC: 12,
            XA: 13,
            ZA: 14,
            WA: 15,
            YA: 16,
            XB: 17,
            GA: 18,
            jg: 19,
            hC: 20,
            Uz: 21,
            yC: 22,
            zC: 23,
            Sz: 24,
            VA: 25,
            pD: 26,
            Tz: 27,
            oD: 28
        };
    var Xc = {
            normal: 0,
            layer: 1,
            multiply: 2,
            screen: 3,
            lighten: 4,
            darken: 5,
            difference: 6,
            add: 7,
            subtract: 8,
            invert: 9,
            alpha: 10,
            erase: 11,
            overlay: 12,
            hardlight: 13,
            ignore_source: 100
        },
        Yc = "normal layer multiply screen lighten darken difference add subtract invert alpha erase overlay hardlight".split(" "),
        Zc = {
            LC: 2,
            Lh: 3,
            fj: 4,
            kj: 5,
            Jh: 6,
            aB: 7,
            jC: 8,
            kC: 9,
            OB: 12,
            NB: 13,
            MB: 14,
            LB: 15,
            py: 16,
            RB: 17,
            FB: 18,
            EB: 19,
            KB: 20,
            JB: 21,
            IB: 22,
            HB: 23,
            GB: 24,
            PB: 25,
            QB: 26,
            uC: 27,
            cD: 28,
            OC: 29,
            IC: 30,
            Sn: 31,
            WC: 32,
            bD: 33,
            JC: 35,
            RC: 36,
            YC: 37,
            $C: 38,
            TC: 39,
            VC: 40,
            ty: 41,
            $A: 42,
            cE: 43,
            ZC: 44,
            UC: 45,
            aD: 46,
            SC: 47,
            XC: 48,
            Fh: 49,
            cj: 50,
            sC: 53,
            qC: 54,
            rC: 55,
            oC: 56,
            pC: 57,
            ND: 58,
            LD: 59,
            MD: 60,
            JD: 61,
            KD: 62,
            Eh: 64,
            ig: 65,
            jg: 66,
            nA: 69,
            lA: 70,
            tD: 71,
            sD: 72,
            Ih: 73,
            zA: 74,
            gg: 76,
            oA: 78,
            mA: 79,
            dE: 80,
            fE: 81,
            eE: 82,
            ej: 83,
            FC: 85,
            EC: 86,
            gl: 87,
            Dh: 88,
            kB: 89,
            Ch: 90,
            jB: 93,
            iB: 94,
            lB: 96,
            CD: 97,
            mB: 98,
            xD: 99,
            hj: 100,
            Bh: 101,
            rB: 102,
            YB: 104,
            TA: 106,
            Rh: 108,
            ED: 109,
            DA: 112,
            gB: 113,
            fB: 114,
            CA: 115,
            EA: 116,
            BA: 117,
            AA: 118,
            tl: 119,
            sl: 120,
            ef: 128,
            vA: 130,
            xA: 133,
            Zz: 134,
            $z: 135,
            wA: 137,
            CC: 144,
            oy: 145,
            UB: 146,
            ly: 147,
            KA: 148,
            lE: 149,
            sy: 150,
            bA: 151,
            jy: 160,
            uy: 161,
            ry: 162,
            my: 163,
            qy: 164,
            vC: 165,
            wD: 166,
            oE: 167,
            aA: 168,
            cA: 169,
            dA: 170,
            ny: 171,
            TD: 172,
            mC: 173,
            lC: 174,
            CB: 175,
            BB: 176,
            fl: 177,
            eC: 178,
            fC: 179,
            el: 180,
            WB: 192,
            MA: 193,
            VB: 194,
            LA: 195,
            DC: 196,
            Wz: 197,
            bE: 198,
            BC: 199,
            nB: 208,
            oB: 209,
            pB: 210,
            qB: 211,
            yD: 212,
            zD: 213,
            AD: 214,
            BD: 215,
            HA: 239,
            JA: 240,
            IA: 241,
            $s: 256,
            Sq: 257,
            Zr: 258,
            Tn: 259,
            Tr: 260,
            Ur: 261,
            Cr: 262,
            ky: 263
        };
    var Uc = function(a, b) {
        this.x = a;
        this.y = b
    };
    Uc.prototype.ja = function(a) {
        if (!a.kc()) {
            var b = this.x * a.u + this.y * a.l + a.q;
            this.x = this.x * a.n + this.y * a.o + a.p;
            this.y = b
        }
    };
    Uc.prototype.clone = function() {
        return new Uc(this.x, this.y)
    };
    Uc.prototype.xr = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y)
    };
    var $c = function(a, b) {
            return Math.sqrt(a * a + b * b)
        },
        ad = function(a, b, c, d, e, f) {
            this.n = a;
            this.u = b;
            this.o = c;
            this.l = d;
            this.p = e;
            this.q = f
        },
        Tc = new ad(1, 0, 0, 1, 0, 0),
        bd = new ad(20, 0, 0, 20, 0, 0),
        cd = new ad(.05, 0, 0, .05, 0, 0),
        dd = function(a, b, c, d, e, f) {
            if (0 === e && 0 === f && 0 === b && 0 === c) {
                if (1 === a && 1 === d) return Tc;
                if (.05 === a && .05 === d) return cd;
                if (20 === a && 20 === d) return bd
            }
            return new ad(a, b, c, d, e, f)
        };
    g = ad.prototype;
    g.Bd = function() {
        if (this.kc()) return this;
        var a = this.n * this.l - this.u * this.o;
        return 0 == a ? Tc : dd(this.l / a, -this.u / a, -this.o / a, this.n / a, (this.o * this.q - this.l * this.p) / a, (this.u * this.p - this.n * this.q) / a)
    };
    g.Mn = function() {
        return this.kc() ? !0 : 0 != this.n * this.l - this.u * this.o
    };
    g.multiply = function(a) {
        return this.kc() ? a : a.kc() ? this : dd(this.n * a.n + this.u * a.o, this.n * a.u + this.u * a.l, this.o * a.n + this.l * a.o, this.o * a.u + this.l * a.l, this.p * a.n + this.q * a.o + a.p, this.p * a.u + this.q * a.l + a.q)
    };
    g.Mi = function(a, b) {
        return 1 === a && 1 === b ? this : dd(this.n * a, this.u * a, this.o * b, this.l * b, this.p, this.q)
    };
    g.wj = function(a) {
        if (0 === a) return this;
        var b = Math.cos(a);
        a = Math.sin(a);
        return dd(this.n * b + this.u * a, this.u * b - this.n * a, this.o * b + this.l * a, this.l * b - this.o * a, this.p * b + this.q * a, this.q * b - this.p * a)
    };
    g.qf = function(a, b) {
        return 1 === a && 1 === b ? this : dd(this.n * a, this.u * b, this.o * a, this.l * b, this.p * a, this.q * b)
    };
    g.Hj = function() {
        return this.kc() ? 1 : Math.sqrt(this.n * this.n + this.u * this.u)
    };
    g.Ij = function() {
        return this.kc() ? 1 : Math.sqrt(this.o * this.o + this.l * this.l)
    };
    g.Jd = function(a, b) {
        return 0 === a && 0 === b ? this : dd(this.n, this.u, this.o, this.l, this.p + a, this.q + b)
    };
    g.ay = function(a, b) {
        return 0 === a && 0 === b ? this : dd(this.n, this.u, this.o, this.l, a * this.n + b * this.o + this.p, a * this.u + b * this.l + this.q)
    };
    g.gd = function(a, b) {
        return this.p === a && this.q === b ? this : dd(this.n, this.u, this.o, this.l, a, b)
    };
    g.toString = function() {
        return "matrix(" + this.n + "," + this.u + "," + this.o + "," + this.l + "," + this.p + "," + this.q + ")"
    };
    g.Ex = function() {
        var a = this.Hj(),
            b = this.Ij();
        if (!a || !b || this.kc()) return {
            fe: 1,
            sf: 1,
            angle: 0,
            o: 0,
            l: 1
        };
        var c = this.n / a,
            d = this.u / a;
        return {
            fe: a,
            sf: b,
            angle: -Math.atan2(this.u, this.n),
            o: (c * this.o + d * this.l) / a,
            l: (c * this.l - d * this.o) / b
        }
    };
    g.kc = function() {
        return this === Tc
    };
    g.Sc = function(a) {
        return a === this ? !0 : !a || a.kc() || this.kc() ? !1 : this.n == a.n && this.u == a.u && this.o == a.o && this.l == a.l && this.p == a.p && this.q == a.q
    };
    g.Cc = function(a) {
        this.kc() || a.transform(this.n, this.u, this.o, this.l, this.p, this.q)
    };
    var ed = function(a, b, c, d) {
        this.Na = a;
        this.Ma = b;
        this.La = c;
        this.lb = d
    };
    ed.prototype.toString = function() {
        return "rgb(" + this.Na.toFixed() + "," + this.Ma.toFixed() + "," + this.La.toFixed() + ")"
    };
    ed.prototype.Cd = function() {
        return "rgba(" + this.Na.toFixed() + "," + this.Ma.toFixed() + "," + this.La.toFixed() + "," + this.lb.toFixed(3) + ")"
    };
    var gd = function(a, b) {
            var c = a | 0,
                d = c & 255,
                c = c >> 8,
                e = c & 255,
                f = b / 100;
            return new ed(c >> 8 & 255, e, d, 1 >= f ? 0 <= f ? f : 0 : 1)
        },
        hd = function(a, b) {
            return a | (255 * b | 0) << 24
        },
        id = function(a, b, c, d, e, f, h, k) {
            this.Ca = a;
            this.xa = b;
            this.Ba = c;
            this.wa = d;
            this.Aa = e;
            this.va = f;
            this.sa = h;
            this.ya = k
        },
        jd = new id(1, 0, 1, 0, 1, 0, 1, 0);
    g = id.prototype;
    g.Gn = function(a) {
        return new id(this.Ca * a.Ca, this.Ca * a.xa + this.xa, this.Ba * a.Ba, this.Ba * a.wa + this.wa, this.Aa * a.Aa, this.Aa * a.va + this.va, this.sa * a.sa, this.sa * a.ya + this.ya)
    };
    g.apply = function(a) {
        return new ed(a.Na * this.Ca + this.xa, a.Ma * this.Ba + this.wa, a.La * this.Aa + this.va, this.fm(a.lb))
    };
    g.fm = function(a) {
        return Math.max(Math.min(this.sa * a + this.ya / 255, 1), 0)
    };
    g.Sc = function(a) {
        return null != a && this.Ca == a.Ca && this.xa == a.xa && this.Ba == a.Ba && this.wa == a.wa && this.Aa == a.Aa && this.va == a.va && this.sa == a.sa && this.ya == a.ya
    };
    g.ai = function() {
        return 1 == this.Ca && 0 == this.xa && 1 == this.Ba && 0 == this.wa && 1 == this.Aa && 0 == this.va && 0 == this.ya
    };
    var w = function(a, b, c, d) {
        this.k = a;
        this.j = b;
        this.t = c;
        this.s = d;
        this.sb() && this.reset()
    };
    g = w.prototype;
    g.reset = function() {
        this.j = this.k = Number.POSITIVE_INFINITY;
        this.s = this.t = Number.NEGATIVE_INFINITY
    };
    g.clone = function() {
        return new w(this.k, this.j, this.t, this.s)
    };
    g.expand = function(a, b) {
        this.ie(a, b, 0, 0)
    };
    g.ie = function(a, b, c, d) {
        this.k = Math.min(this.k, a - c);
        this.t = Math.max(this.t, a + c);
        this.j = Math.min(this.j, b - d);
        this.s = Math.max(this.s, b + d)
    };
    g.Wl = function() {
        this.k = Math.floor(this.k);
        this.j = Math.floor(this.j);
        this.t = Math.ceil(this.t);
        this.s = Math.ceil(this.s)
    };
    g.xr = function() {
        this.k = Math.round(this.k);
        this.j = Math.round(this.j);
        this.t = Math.round(this.t);
        this.s = Math.round(this.s)
    };
    g.add = function(a) {
        this.j += a.j;
        this.s += a.s;
        this.k += a.k;
        this.t += a.t
    };
    g.translate = function(a, b) {
        this.k += a;
        this.j += b;
        this.t += a;
        this.s += b
    };
    g.scale = function(a, b) {
        this.k *= a;
        this.j *= b;
        this.t *= a;
        this.s *= b
    };
    g.ja = function(a) {
        if (!a.kc() && !this.sb()) {
            var b = new Uc(this.k, this.j),
                c = this.t - this.k,
                d = this.s - this.j;
            this.reset();
            b.ja(a);
            var e = c * a.u,
                c = c * a.n,
                f = d * a.o;
            a = d * a.l;
            this.expand(b.x, b.y);
            this.expand(b.x + c, b.y + e);
            this.expand(b.x + f, b.y + a);
            this.expand(b.x + c + f, b.y + e + a)
        }
    };
    g.jp = function(a) {
        return this.t >= a.k && a.t >= this.k && this.s >= a.j && a.s >= this.j
    };
    g.Xl = function(a) {
        return a.k >= this.k && a.t <= this.t && a.j >= this.j && a.s <= this.s
    };
    g.Sc = function(a) {
        return a.k == this.k && a.t == this.t && a.j == this.j && a.s == this.s
    };
    g.contains = function(a, b) {
        return a >= this.k && a <= this.t && b >= this.j && b <= this.s
    };
    g.Ed = function(a) {
        this.k = Math.min(this.k, a.k);
        this.t = Math.max(this.t, a.t);
        this.j = Math.min(this.j, a.j);
        this.s = Math.max(this.s, a.s)
    };
    g.Wh = function(a) {
        this.k = Math.max(this.k, a.k);
        this.t = Math.min(this.t, a.t);
        this.j = Math.max(this.j, a.j);
        this.s = Math.min(this.s, a.s);
        this.sb() && this.reset()
    };
    g.sb = function() {
        return !(this.k <= this.t && this.j <= this.s)
    };
    g.gp = function() {
        return new w(-this.t, -this.s, -this.k, -this.j)
    };
    g.width = function() {
        return Math.max(this.t - this.k, 0)
    };
    g.height = function() {
        return Math.max(this.s - this.j, 0)
    };
    var kd = function(a) {
        return new w(a.xmin, a.ymin, a.xmax, a.ymax)
    };
    w.prototype.toString = function() {
        return "" + this.k + " " + this.j + " " + this.width() + " " + this.height()
    };
    w.prototype.Wd = function(a) {
        this.sb() ? (a.setAttribute("x", 0), a.setAttribute("y", 0), a.setAttribute("width", 0), a.setAttribute("height", 0)) : (a.setAttribute("x", this.k), a.setAttribute("y", this.j), a.setAttribute("width", this.t - this.k), a.setAttribute("height", this.s - this.j))
    };
    var ld = function(a, b, c) {
        this.qb = a ? a : new w;
        this.Rb = b;
        this.Gc = c
    };
    g = ld.prototype;
    g.Ed = function(a) {
        this.Rb ? a.Rb ? this.Rb.Ed(a.Rb) : this.Rb.Ed(a.qb) : a.Rb && (this.Rb = this.qb.clone(), this.Rb.Ed(a.Rb));
        this.qb.Ed(a.qb);
        this.pq(a.Gc, !0)
    };
    g.pq = function(a, b) {
        a && !this.qb.Xl(a) ? (this.Gc || (this.Gc = this.qb.clone()), this.Gc.Ed(a)) : b && this.Gc && this.qb.Xl(this.Gc) && (this.Gc = void 0)
    };
    g.ja = function(a) {
        a.kc() || (this.Rb && this.Rb.ja(a), this.Gc && this.Gc.ja(a), this.qb.ja(a))
    };
    g.clone = function() {
        return new ld(this.qb.clone(), this.Rb ? this.Rb.clone() : void 0, this.Gc ? this.Gc.clone() : void 0)
    };
    g.Xd = function() {
        return this.Rb ? this.Rb : this.qb
    };
    g.xg = function() {
        return this.Gc ? this.Gc : this.qb
    };
    g.dv = function(a) {
        this.Rb || (this.Rb = this.qb.clone());
        this.qb = a
    };
    var md = function() {
        this.Th = []
    };
    md.prototype.rh = function(a) {
        a = this.nt(a);
        this.Th.push({
            x: a.x,
            y: a.y,
            time: pa()
        })
    };
    md.prototype.Ti = function(a) {
        var b = this.Th.length - 1,
            c = this.nt(a);
        a = c.x;
        for (var c = c.y, d = !1; 0 <= b && 600 > pa() - this.Th[b].time;) {
            var e = Math.abs(c - this.Th[b].y);
            5 > Math.abs(a - this.Th[b].x) && 5 > e && (d = !0);
            b--
        }
        0 <= b && this.Th.splice(0, b + 1);
        return d
    };
    md.prototype.nt = function(a) {
        var b = a,
            c = a.Fc.touches;
        c && 1 == c.length ? b = c[0] : (c = a.Fc.changedTouches) && 1 == c.length && (b = c[0]);
        return {
            x: b.clientX,
            y: b.clientY
        }
    };
    var pd = function(a, b, c) {
            var d = a.c,
                e = new nd,
                f = od(b, d, e);
            d.Gj(e, function() {
                a.nn(f);
                a.fireEvent(new Vc(18));
                d.fb();
                c && c()
            })
        },
        qd = function(a, b, c, d, e) {
            var f = new nd,
                h = od(c, a, f);
            a.Gj(f, function() {
                var c = new z(h, a, null);
                d && d(c);
                a.$l(c, b);
                c.Ja();
                c.Dd = !0;
                a.fb();
                e && e()
            })
        },
        rd = function(a, b, c, d) {
            var e = !1;
            if (ea(c))
                for (var f = 0; f < c.length; ++f) {
                    var h = c[f];
                    switch (h.name && h.name.toLowerCase()) {
                        case "content-type":
                            e = !0
                    }
                    a.setRequestHeader(h.name, h.value)
                }
            e || ("POST" == b && (d = d || "application/x-www-form-urlencoded"), d && a.setRequestHeader("Content-Type",
                d))
        },
        vd = function(a, b, c, d, e, f, h) {
            d = String(d).toUpperCase();
            switch (d) {
                case "POST":
                    if ("function" == typeof ArrayBuffer) {
                        sd(a, b, c, "POST", td(e), f, h);
                        break
                    }
                case "GET":
                    b = td(e, b);
                default:
                    USING_XML_HTTP_MOCK ? sd(a, b, c, "GET", null, f, h) : ud(b, c, f)
            }
        },
        sd = function(a, b, c, d, e, f, h) {
            c && c.Pk();
            var k = new XMLHttpRequest;
            k.open(d, b);
            k.responseType = "arraybuffer";
            k.onreadystatechange = function() {
                if (4 == k.readyState) {
                    if (200 == k.status || 0 == k.status && k.response) {
                        var b = new Uint8Array(k.response);
                        if (!fa(b)) throw Error("encodeByteArray takes an array as a parameter");
                        Ec();
                        for (var d = Bc, e = [], h = 0; h < b.length; h += 3) {
                            var s = b[h],
                                u = h + 1 < b.length,
                                x = u ? b[h + 1] : 0,
                                y = h + 2 < b.length,
                                C = y ? b[h + 2] : 0,
                                F = s >> 2,
                                s = (s & 3) << 4 | x >> 4,
                                x = (x & 15) << 2 | C >> 6,
                                C = C & 63;
                            y || (C = 64, u || (x = 64));
                            e.push(d[F], d[s], d[x], d[C])
                        }
                        ud("data:image/" + a + ";base64," + e.join(""), c, f)
                    } else f.ee(k.status);
                    c && c.uh()
                }
            };
            rd(k, d, h);
            k.send(e)
        },
        ud = function(a, b, c) {
            b && b.Pk();
            var d = new Image;
            d.onload = function() {
                c.yc({
                    tags: [{
                        type: 8,
                        id: 1,
                        data: d.src,
                        width: d.width,
                        height: d.height
                    }, {
                        type: 3,
                        id: 1,
                        depth: 1
                    }, {
                        type: 2
                    }],
                    frameCount: 1,
                    id: 0
                }, 200);
                b && b.uh()
            };
            d.onerror = function() {
                c.ee(404);
                b && b.uh()
            };
            d.src = a
        },
        wd = function(a, b, c, d, e, f, h) {
            b && b.Pk();
            var k = new XMLHttpRequest;
            c = String(c).toUpperCase();
            var n = null;
            switch (c) {
                case "POST":
                    k.open(c, a);
                    n = td(d);
                    break;
                case "GET":
                    a = td(d, a);
                default:
                    k.open("GET", a)
            }
            k.onreadystatechange = function() {
                4 == k.readyState && (200 == k.status || 0 == k.status && k.response ? e.yc(k.responseText, k.status) : e.ee(k.status), b && b.uh())
            };
            rd(k, c, f, h);
            k.send(n)
        },
        zd = function(a, b, c, d, e, f) {
            var h = new xd;
            h.yc = function(a) {
                var b = e(),
                    c = b.ea;
                a = yd(a);
                for (var d =
                    Object.keys(a), f = 0; f < d.length; f++) {
                    var h = a[d[f]];
                    c[d[f]] = h[h.length - 1]
                }
                b.fireEvent(new Vc(18));
                c.onData && c.onData.call(c)
            };
            wd(a, b, c, d, h, f)
        },
        Bd = {
            png: oa(vd, "png"),
            gif: oa(vd, "gif"),
            jpg: oa(vd, "jpeg"),
            jpeg: oa(vd, "jpeg"),
            swf: function(a, b, c, d, e, f) {
                USING_XML_HTTP_MOCK || (a = a.replace(/^([^?#]+)([?#].*)?$/g, "$1.json$2"));
                var h = new xd(e);
                h.yc = function(a, b) {
                    var c = {};
                    a && (c = Fc(a), Ad(c));
                    e.yc(c, b)
                };
                wd(a, b, c, d, h, f)
            }
        },
        Cd = function(a, b, c, d, e, f) {
            var h = a.match(/\.([^.?#]+)(?:#.*$|\?.*$|$)/);
            (h = Bd[h && h[1] || ""]) && h(a, b,
                c, d, e, f)
        },
        Dd = function(a) {
            var b = document.createElement("a");
            b.href = a;
            return b.href
        },
        xd = function(a) {
            this.Ks = function() {
                l(a) && q(a.Ks) && a.Ks()
            };
            this.ee = function(b) {
                l(a) && q(a.ee) && a.ee(b)
            };
            this.Js = function(b, c) {
                l(a) && q(a.Js) && a.Js(b, c)
            };
            this.yc = function(b, c) {
                l(a) && q(a.yc) && a.yc(b, c)
            }
        };
    var Gd = function(a) {
            this.zs = a || ":" + (Fd++).toString(36)
        },
        Fd = 0,
        Hd = new Gd,
        Id = {};
    Gd.prototype.ey = 0;
    Gd.prototype.xm = function() {
        return this.zs + "-" + (this.ey++).toString(36)
    };
    var Jd = !!aa.SVGFilterElement,
        Kd = !!aa.Audio,
        Ld = !eb || !Jd,
        Md;
    if (Md = Ba(navigator.userAgent, "iPad") || Pc.test(navigator.userAgent)) {
        var Nd = Rc.exec(navigator.userAgent) || [];
        Nd.shift();
        Md = Qc.apply(null, Nd) < Qc(7)
    }
    var Od = Md,
        Pd = Mc || Nc ? function() {
            return window.outerWidth * window.devicePixelRatio / (90 == Math.abs(window.orientation) ? screen.height : screen.width)
        } : fb || kb ? function() {
            return window.frameElement ? window.devicePixelRatio : window.outerWidth * window.devicePixelRatio / window.innerWidth
        } : !cb || "devicePixelRatio" in window ? function() {
            return window.devicePixelRatio || 1
        } : function() {
            return window.screen.deviceXDPI / window.screen.logicalXDPI
        };
    var Qd = function() {
        this.it = [];
        this.Px = [];
        this.zj = []
    };
    Qd.prototype.Yx = function(a, b, c) {
        this.it[a] = b;
        this.Px[a] = c
    };
    Qd.prototype.Yp = function(a) {
        Kd && (this.zj[a] = new Audio(this.it[a]), this.zj[a].play())
    };
    Qd.prototype.Vq = function() {
        for (var a = 0; a < this.zj.length; a++) l(this.zj[a]) && this.zj[a].pause()
    };
    var Rd = RegExp("^[A-Z_a-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c-\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd][A-Z_a-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c-\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd.0-9\u00b7\u0300-\u036f\u203f-\u2040-]*$"),
        Sd = function(a) {
            if (null != a && (a = String(a), a.match(Rd))) return a
        },
        Td = {
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            '"': "&quot;",
            "'": "&apos;",
            "\t": "&#x9;",
            "\n": "&#xA;",
            "\r": "&#xD;"
        },
        Ud = function(a) {
            return Td[a] || a
        },
        Vd = function(a) {
            return String(a).replace(/[<>&]/g, Ud)
        },
        Wd = function(a) {
            return String(a).replace(/[<&"\t\n\r]/g, Ud)
        },
        Xd = {},
        Yd;
    for (Yd in Td) Xd[Td[Yd]] = Yd;
    var Zd = "&nbsp; &iexcl; &cent; &pound; &curren; &yen; &brvbar; &sect; &uml; &copy; &ordf; &laquo; &not; &shy; &reg; &macr; &deg; &plusmn; &sup2; &sup3; &acute; &micro; &para; &middot; &cedil; &sup1; &ordm; &raquo; &frac14; &frac12; &frac34; &iquest; &Agrave; &Aacute; &Acirc; &Atilde; &Auml; &Aring; &AElig; &Ccedil; &Egrave; &Eacute; &Ecirc; &Euml; &Igrave; &Iacute; &Icirc; &Iuml; &ETH; &Ntilde; &Ograve; &Oacute; &Ocirc; &Otilde; &Ouml; &times; &Oslash; &Ugrave; &Uacute; &Ucirc; &Uuml; &Yacute; &THORN; &szlig; &agrave; &aacute; &acirc; &atilde; &auml; &aring; &aelig; &ccedil; &egrave; &eacute; &ecirc; &euml; &igrave; &iacute; &icirc; &iuml; &eth; &ntilde; &ograve; &oacute; &ocirc; &otilde; &ouml; &divide; &oslash; &ugrave; &uacute; &ucirc; &uuml; &yacute; &thorn; &yuml;".split(" "),
        $d = {},
        ae;
    for (ae in Xd) $d[ae] = Xd[ae];
    for (var be = 0; be < Zd.length; ++be) $d[Zd[be]] = String.fromCharCode(be + 160);
    var ce = function(a, b, c, d) {
        this.Hc = a;
        this.eb = 0;
        this.sw = b;
        this.Jv = c;
        this.Ew = d ? $d : Xd;
        this.next = this.Xi
    };
    g = ce.prototype;
    g.bs = function() {
        this.next = this.bs;
        return null
    };
    g.xd = function(a) {
        this.next = function() {
            throw this.xd(a);
        };
        throw new de(a);
    };
    g.Lr = function(a) {
        var b = this.Ew;
        return a.replace(/&(#?)([^\s]+?);/g, function(a, d, e) {
            return d && (d = Number("0" + e), d === d) ? String.fromCharCode(d) : b[a] || a
        })
    };
    g.Xi = function() {
        var a = this.al("<"),
            b;
        0 > a ? (b = this.Hc.substring(this.eb), this.next = this.bs) : (b = this.Hc.substring(this.eb, a), this.eb = a, this.next = this.yw);
        this.sw && (b = b.trim());
        return b ? (b = this.Lr(b), {
            type: "text",
            value: b
        }) : this.next()
    };
    g.yw = function() {
        var a = this.aj("<![CDATA[", "]]\x3e", !1, "cdata");
        if (a || (a = this.aj("\x3c!--", "--\x3e", !1, "comment")) || (a = this.aj("<!DOCTYPE", ">", !0, "doctype")) || (a = this.aj("<?XML", "?>", !0, "xml_declaration")) || !this.Jv && (a = this.aj("<?", "?>", !1, "processing_instruction"))) return a;
        if ("/" == this.Hc.charAt(this.eb + 1)) return this.next = this.Xi, {
            type: "close",
            value: this.Sv()
        };
        for (a = {
            type: "tag",
            value: this.Tv(),
            attributes: []
        };;) {
            this.vr();
            if (this.Vv()) throw this.xd("tag");
            if (this.Kn(">")) {
                this.next = this.Xi;
                break
            }
            if (this.Kn("/>")) {
                this.next =
                    this.Uv(a.value);
                break
            }
            a.attributes.push({
                name: this.Qv(),
                value: this.Rv()
            })
        }
        return a
    };
    g.Uv = function(a) {
        return function() {
            this.next = this.Xi;
            return {
                type: "close",
                value: a
            }
        }
    };
    g.al = function(a) {
        return this.Hc.indexOf(a, this.eb)
    };
    g.Vv = function() {
        return this.eb >= this.Hc.length
    };
    g.Kn = function(a) {
        return this.Hc.substr(this.eb, a.length).toUpperCase() == a ? (this.eb += a.length, !0) : !1
    };
    g.vr = function() {
        for (var a = this.Hc; this.eb < a.length; this.eb++) switch (a.charAt(this.eb)) {
            case " ":
            case "\t":
            case "\r":
            case "\n":
                break;
            default:
                return
        }
    };
    g.aj = function(a, b, c, d) {
        var e = this.eb;
        if (!this.Kn(a)) return null;
        a = this.al(b);
        if (0 > a) throw this.xd(d);
        c = c ? this.Hc.substring(e, a + b.length) : this.Hc.substring(this.eb, a);
        this.eb = a + b.length;
        this.next = this.Xi;
        return {
            type: d,
            value: c
        }
    };
    g.Tv = function() {
        for (var a = this.Hc, b = this.eb + 1, c = b; c < a.length; c++) switch (a.charAt(c)) {
            case "/":
                if (">" != a.charAt(c + 1)) break;
            case " ":
            case "\t":
            case "\r":
            case "\n":
            case ">":
                if (c == b) throw this.xd("tag");
                this.eb = c;
                return a.substring(b, c)
        }
        throw this.xd("tag");
    };
    g.Sv = function() {
        for (var a = this.Hc, b = this.eb + 2, c = !1, d = b; d < a.length; d++) switch (a.charAt(d)) {
            case " ":
            case "\t":
            case "\r":
            case "\n":
                c = !0;
                break;
            case ">":
                if (d == b) throw this.xd("close");
                this.eb = d + 1;
                return a.substring(b, d).trim();
            default:
                if (c) throw this.xd("close");
        }
        throw this.xd("close");
    };
    g.Qv = function() {
        var a = this.al(">");
        if (0 > a) throw this.xd("tag");
        var b = this.al("="),
            c = this.eb;
        if (0 > b || b == c || b > a) throw this.xd("attribute");
        this.eb = b + 1;
        return this.Hc.substring(c, b).trim()
    };
    g.Rv = function() {
        this.vr();
        var a = this.Hc,
            b = this.eb,
            c = a.charAt(b++);
        if ('"' == c || "'" == c)
            for (var d = b; d < a.length; d++)
                if (a.charAt(d) == c) return this.eb = d + 1, this.Lr(a.substring(b, d));
        throw this.xd("attribute");
    };
    var de = function(a) {
        this.type = a
    };
    var ee = function() {
        this.ia = !0;
        this.Vc = this.Mg = null
    };
    ee.prototype.update = function() {
        return !1
    };
    ee.prototype.Xb = function(a) {
        this.Mg != a && (this.Vc && this.Vc.ka(), this.ia = !0, this.Vc = a.uc(this), this.Mg = a);
        return this.Vc
    };
    var fe = [];
    ee.prototype.Sb = function() {
        return new ee
    };
    var ge = function(a) {
        return (0, fe[a.type])(a)
    };
    ee.prototype.lg = function() {
        return new w(0, 0, 0, 0)
    };
    var ie = function(a, b, c, d) {
            var e = new w;
            c = he(b, c);
            b = he(b, d);
            e.expand(3 * -c, 3 * -b);
            e.expand(3 * +c, 3 * +b);
            a.add(e)
        },
        je = function(a, b, c) {
            a.expand(Math.cos(b) * c * 20, Math.sin(b) * c * 20)
        };
    ee.prototype.Nq = function() {
        return 1
    };
    var ke = 3 * Math.sqrt(2 * Math.PI) / 4,
        he = function(a, b) {
            var c = 1;
            switch (a) {
                case 1:
                    c = 2 * ke;
                    break;
                case 2:
                    c = 1.5 * ke;
                    break;
                case 3:
                    c = ke
            }
            return Math.abs(20 * b / c)
        };
    var le = function(a) {
        ee.call(this);
        this.mode = a
    };
    v(le, ee);
    le.prototype.update = function(a) {
        this.ia = !1;
        return Object.getPrototypeOf(this) == Object.getPrototypeOf(a) ? (this.mode = a.mode, !0) : !1
    };
    le.prototype.Sb = function() {
        return new le(this.mode)
    };
    le.prototype.ov = function(a) {
        this.mode = a
    };
    var me = function(a, b, c) {
        ee.call(this);
        this.quality = a;
        this.x = b;
        this.y = c
    };
    v(me, ee);
    fe[2] = function(a) {
        return new me(a.quality, a.x, a.y)
    };
    g = me.prototype;
    g.Sb = function() {
        return new me(this.quality, this.x, this.y)
    };
    g.update = function(a) {
        return Object.getPrototypeOf(this) == Object.getPrototypeOf(a) ? (this.ia = !0, this.x = a.x, this.y = a.y, this.quality = a.quality, !0) : !1
    };
    g.og = function() {
        return new ne(this.x, this.y, this.quality)
    };
    g.pg = function() {
        return new qe(this.x, this.y, this.quality)
    };
    g.Nq = function() {
        return 1 < this.x && 1 < this.y ? 2 : 1
    };
    g.lg = function() {
        var a = new w(0, 0, 0, 0);
        ie(a, this.quality, this.x, this.y);
        return a
    };
    var re = function(a) {
        ee.call(this);
        this.matrix = a;
        this.matrix[4] /= 255;
        this.matrix[9] /= 255;
        this.matrix[14] /= 255;
        this.matrix[19] /= 255
    };
    v(re, ee);
    fe[3] = function(a) {
        return new re(a.matrix)
    };
    g = re.prototype;
    g.Sb = function() {
        return new re(this.Uo())
    };
    g.update = function(a) {
        return Object.getPrototypeOf(this) == Object.getPrototypeOf(a) ? (this.ia = !0, this.matrix = a.matrix, !0) : !1
    };
    g.og = function() {
        return new se(this.Uo())
    };
    g.pg = function() {
        return new te(this.Uo())
    };
    g.Uo = function() {
        var a = this.matrix.slice();
        a[4] *= 255;
        a[9] *= 255;
        a[14] *= 255;
        a[19] *= 255;
        return a
    };
    var ue = function(a, b, c, d, e, f, h) {
        ee.call(this);
        this.angle = a;
        this.distance = b;
        this.strength = c;
        this.quality = d;
        this.x = e;
        this.y = f;
        this.Ea = h
    };
    v(ue, ee);
    ue.prototype.update = function(a) {
        return Object.getPrototypeOf(this) == Object.getPrototypeOf(a) ? (this.ia = !0, this.angle = a.angle, this.distance = a.distance, this.strength = a.strength, this.quality = a.quality, this.x = a.x, this.y = a.y, this.Ea = a.Ea, !0) : !1
    };
    var ve = {
            type: "inner",
            knockout: !1,
            apply: function(a, b, c) {
                a.ac("atop", b, c)
            },
            ge: "source-atop"
        },
        we = {
            type: "inner",
            knockout: !0,
            apply: function(a, b, c) {
                a.ac("in", b, c)
            },
            ge: "source-in"
        },
        xe = [ve, we, {
            type: "outer",
            knockout: !1,
            apply: function(a, b, c) {
                a.ac("over", c, b)
            },
            ge: "destination-over"
        }, {
            type: "outer",
            knockout: !0,
            apply: function(a, b, c) {
                a.ac("out", b, c)
            },
            ge: "source-out"
        }, {
            type: "full",
            knockout: !1,
            apply: function(a, b, c) {
                a.ac("over", b, c)
            },
            ge: "source-over"
        }, {
            type: "full",
            knockout: !0,
            apply: function() {},
            ge: "copy"
        }],
        ze = function(a,
            b, c) {
            return ye(b ? "inner" : a ? "full" : "outer", c)
        },
        ye = function(a, b) {
            for (var c = 0; c < xe.length; ++c)
                if (a == xe[c].type && !!b == xe[c].knockout) return xe[c];
            return b ? we : ve
        };
    ue.prototype.Lo = function(a, b) {
        var c = 20 * this.distance * b;
        a.ie(Math.cos(this.angle) * c, Math.sin(this.angle) * c, this.quality * this.x * 10, this.quality * this.y * 10)
    };
    ue.prototype.cr = function() {
        var a = 20 * this.distance;
        return Math.abs(Math.cos(this.angle) * a) > 3 * he(this.quality, this.x) || Math.abs(Math.sin(this.angle) * a) > 3 * he(this.quality, this.y) ? !1 : !0
    };
    var Ae = function(a, b, c, d, e, f, h, k, n) {
        ue.call(this, a, d, e, f, h, k, n);
        this.highlight = b;
        this.shadow = c
    };
    v(Ae, ue);
    fe[4] = function(a) {
        return new Ae(a.angle, a.highlight, a.shadow, a.distance, a.strength, a.quality, a.x, a.y, ze(a.onTop, a.inner, a.knockout))
    };
    g = Ae.prototype;
    g.Sb = function() {
        return new Ae(this.angle, this.highlight, this.shadow, this.distance, this.strength, this.quality, this.x, this.y, this.Ea)
    };
    g.update = function(a) {
        return Object.getPrototypeOf(this) == Object.getPrototypeOf(a) ? (Ae.fa.update.call(this, a), this.highlight = a.highlight, this.shadow = a.shadow, !0) : !1
    };
    g.og = function() {
        return new Be(this.distance, 180 * this.angle / Math.PI, this.highlight & 16777215, (this.highlight >>> 24) / 255, this.shadow & 16777215, (this.shadow >>> 24) / 255, this.x, this.y, this.strength, this.quality, this.Ea.type, this.Ea.knockout)
    };
    g.pg = function() {
        return new Ce(this.distance, 180 * this.angle / Math.PI, this.highlight & 16777215, (this.highlight >>> 24) / 255, this.shadow & 16777215, (this.shadow >>> 24) / 255, this.x, this.y, this.strength, this.quality, this.Ea.type, this.Ea.knockout)
    };
    g.lg = function() {
        var a = new w(0, 0, 0, 0);
        je(a, this.angle, -this.distance);
        je(a, this.angle, this.distance);
        ie(a, this.quality, this.x, this.y);
        return a
    };
    var De = function(a, b, c, d, e, f, h, k) {
        ee.call(this);
        this.bias = a;
        this.clamp = b;
        this.color = c;
        this.divisor = d;
        this.matrix = e;
        this.matrixX = f;
        this.matrixY = h;
        this.preserveAlpha = k
    };
    v(De, ee);
    fe[5] = function(a) {
        return new De(a.bias, a.clamp, a.color, a.divisor, a.matrix, a.matrixX, a.matrixY, a.preserveAlpha)
    };
    De.prototype.Sb = function() {
        return new De(this.bias, this.clamp, this.color, this.divisor, this.matrix, this.matrixX, this.matrixY, this.preserveAlpha)
    };
    De.prototype.update = function(a) {
        return Object.getPrototypeOf(this) == Object.getPrototypeOf(a) ? (this.ia = !0, this.bias = a.bias, this.clamp = a.clamp, this.color = a.color, this.divisor = a.divisor, this.matrix = a.matrix, this.matrixX = a.matrixX, this.matrixY = a.matrixY, this.preserveAlpha = a.preserveAlpha, !0) : !1
    };
    De.prototype.og = function() {
        return new Ee(this.matrixX, this.matrixY, this.matrix, this.divisor, this.bias, this.preserveAlpha, this.clamp, this.color & 16777215, (this.color >>> 24) / 255)
    };
    De.prototype.pg = function() {
        return new Fe(this.matrixX, this.matrixY, this.matrix, this.divisor, this.bias, this.preserveAlpha, this.clamp, this.color & 16777215, (this.color >>> 24) / 255)
    };
    var Ge = function(a, b, c, d, e, f, h, k) {
        ue.call(this, a, c, d, e, f, h, k);
        this.color = b
    };
    v(Ge, ue);
    var He = function(a, b, c) {
        return ye(b ? "inner" : a && !c ? "full" : "outer", c || a)
    };
    fe[1] = function(a) {
        return new Ge(a.angle, a.color, a.distance, a.strength, a.quality, a.x, a.y, He(a.hideObject, a.inner, a.knockout))
    };
    g = Ge.prototype;
    g.Sb = function() {
        return new Ge(this.angle, this.color, this.distance, this.strength, this.quality, this.x, this.y, this.Ea)
    };
    g.update = function(a) {
        return Object.getPrototypeOf(this) == Object.getPrototypeOf(a) ? (Ge.fa.update.call(this, a), this.color = a.color, !0) : !1
    };
    g.og = function() {
        return new Ie(this.distance, 180 * this.angle / Math.PI, this.color & 16777215, (this.color >>> 24) / 255, this.x, this.y, this.strength, this.quality, "inner" == this.Ea.type, this.Ea.knockout && "outer" == this.Ea.type, this.Ea.knockout)
    };
    g.pg = function() {
        return new Je(this.distance, 180 * this.angle / Math.PI, this.color & 16777215, (this.color >>> 24) / 255, this.x, this.y, this.strength, this.quality, "inner" == this.Ea.type, this.Ea.knockout && "outer" == this.Ea.type, this.Ea.knockout)
    };
    g.lg = function() {
        var a = new w(0, 0, 0, 0);
        je(a, this.angle, this.distance);
        ie(a, this.quality, this.x, this.y);
        return a
    };
    var Ke = function(a, b, c, d, e, f, h, k, n, r) {
        ue.call(this, a, e, f, h, k, n, r);
        this.ec = b;
        this.Zb = c;
        this.fc = d
    };
    v(Ke, ue);
    fe[7] = function(a) {
        for (var b = Le(a.ratios), c = Le(a.colors), d = Array(c.length), e = 0; e < c.length; ++e) d[e] = (c[e] >>> 24) / 255, c[e] &= 16777215;
        return new Ke(a.angle, c, d, b, a.distance, a.strength, a.quality, a.x, a.y, ze(a.onTop, a.inner, a.knockout))
    };
    g = Ke.prototype;
    g.Sb = function() {
        return new Ke(this.angle, this.ec, this.Zb, this.fc, this.distance, this.strength, this.quality, this.x, this.y, this.Ea)
    };
    g.update = function(a) {
        return Object.getPrototypeOf(this) == Object.getPrototypeOf(a) ? (Ke.fa.update.call(this, a), this.ec = a.ec, this.Zb = a.Zb, this.fc = a.fc, !0) : !1
    };
    g.og = function() {
        return new Me(this.distance, 180 * this.angle / Math.PI, this.ec, this.Zb, this.fc, this.x, this.y, this.strength, this.quality, this.Ea.type, this.Ea.knockout)
    };
    g.pg = function() {
        return new Ne(this.distance, 180 * this.angle / Math.PI, this.ec, this.Zb, this.fc, this.x, this.y, this.strength, this.quality, this.Ea.type, this.Ea.knockout)
    };
    g.lg = function() {
        var a = new w(0, 0, 0, 0);
        this.Lo(a, 1);
        this.Lo(a, -1);
        return a
    };
    var Oe = function(a, b, c, d, e, f, h, k, n, r) {
        ue.call(this, a, e, f, h, k, n, r);
        this.ec = b;
        this.Zb = c;
        this.fc = d
    };
    v(Oe, ue);
    fe[6] = function(a) {
        for (var b = Le(a.ratios), c = Le(a.colors), d = Array(c.length), e = 0; e < c.length; ++e) d[e] = (c[e] >>> 24) / 255, c[e] &= 16777215;
        return new Oe(a.angle, c, d, b, a.distance, a.strength, a.quality, a.x, a.y, ze(a.onTop, a.inner, a.knockout))
    };
    g = Oe.prototype;
    g.Sb = function() {
        return new Oe(this.angle, this.ec, this.Zb, this.fc, this.distance, this.strength, this.quality, this.x, this.y, this.Ea)
    };
    g.update = function(a) {
        return Object.getPrototypeOf(this) == Object.getPrototypeOf(a) ? (Oe.fa.update.call(this, a), this.ec = a.ec, this.Zb = a.Zb, this.fc = a.fc, !0) : !1
    };
    g.og = function() {
        return new Pe(this.distance, 180 * this.angle / Math.PI, this.ec, this.Zb, this.fc, this.x, this.y, this.strength, this.quality, this.Ea.type, this.Ea.knockout)
    };
    g.pg = function() {
        return new Re(this.distance, 180 * this.angle / Math.PI, this.ec, this.Zb, this.fc, this.x, this.y, this.strength, this.quality, this.Ea.type, this.Ea.knockout)
    };
    g.lg = function() {
        var a = new w(0, 0, 0, 0);
        this.Lo(a, 1);
        return a
    };
    var Se = function() {
        ee.call(this)
    };
    v(Se, ee);
    fe[0] = function(a) {
        return new Se(a)
    };
    Se.prototype.lg = function() {
        return new w(0, 0, 0, 0)
    };
    Se.prototype.Sb = function() {
        return this
    };
    var Te = function(a) {
        this.Zc = this.Ve = this.Ra = null;
        this.oh = 0;
        this.ea = a || null;
        this.Oi = []
    };
    g = Te.prototype;
    g.Gl = function(a) {
        if (!this.Ra || this.Ra.depth > a) return this.Zc = null;
        var b = this.Ra;
        this.Zc && a >= this.Zc.depth && (b = this.Zc);
        for (; b.nextSibling && !(b.nextSibling.depth >= a);) b = b.nextSibling;
        b.nextSibling && b.nextSibling.depth == a && (b = b.nextSibling);
        return this.Zc = b
    };
    g.Xk = function(a, b) {
        this.ft(a, this.Gl(b));
        a.depth = b
    };
    g.ft = function(a, b) {
        b ? (b.nextSibling ? b.nextSibling.Wc = a : this.Ve = a, a.Wc = b, a.nextSibling = b.nextSibling, b.nextSibling = a) : (this.Ra && (this.Ra.Wc = a, a.nextSibling = this.Ra), this.Ra = a, this.Ve || (this.Ve = a));
        a.Gd || ++this.oh
    };
    g.Hh = function(a) {
        this.Zc === a && (this.Zc = this.Zc.nextSibling);
        a.Wc ? a.Wc.nextSibling = a.nextSibling : this.Ra = a.nextSibling;
        a.nextSibling ? a.nextSibling.Wc = a.Wc : this.Ve = a.Wc;
        a.nextSibling = null;
        a.Wc = null;
        a.depth = void 0;
        a.Gd || --this.oh
    };
    g.pm = function(a, b) {
        this.Xk(a, b);
        Ue(this.ea, a)
    };
    g.Cp = function(a) {
        return (a = this.hd(a)) ? this.pn(a) : null
    };
    g.pn = function(a) {
        this.Hh(a);
        a.zx(5) ? this.Oi.push(a) : this.co(a);
        return a
    };
    g.Ju = function(a) {
        for (var b = this.Ra; b;) {
            var c = b,
                b = b.nextSibling;
            c.Gd || a(c) || this.pn(c)
        }
    };
    g.hd = function(a) {
        var b = this.Gl(a);
        return b && b.depth == a ? b : null
    };
    g.forEach = function(a) {
        for (var b = this.Ra; b;) {
            if (a(b)) return !0;
            b = b.nextSibling
        }
        return !1
    };
    g.gx = function(a) {
        for (var b = this.Ve; b;) {
            if (a(b)) return !0;
            b = b.Wc
        }
        return !1
    };
    g.rs = function(a) {
        for (var b = this.Ra; b;) {
            if (b.getName() == a) return b;
            b = b.nextSibling
        }
        return null
    };
    g.Kw = function() {
        return this.Ve ? Math.max(0, this.Ve.depth + 1) : 0
    };
    g.co = function(a) {
        Ve(this.ea, a);
        a.ka();
        a.depth = void 0
    };
    g.ka = function() {
        for (; this.Ra;) {
            var a = this.Ra;
            this.Hh(a);
            this.co(a)
        }
    };
    g.De = function() {
        for (var a = this.Ra; a;) a.De(), a = a.nextSibling
    };
    g.Bw = function() {
        if (0 < this.Oi.length) {
            for (var a = 0; a < this.Oi.length; a++) this.co(this.Oi[a]);
            this.Oi = []
        }
    };
    g.Iu = function(a) {
        this.ea = a.ea;
        for (a = this.Ra; a;) Ue(this.ea, a), a = a.nextSibling
    };
    g.Un = function(a, b) {
        this.ea && (Ve(this.ea, a), b && Ue(this.ea, a, b))
    };
    g.Qn = function(a, b) {
        b < a && (b = a = b);
        var c = this.Gl(a),
            d = this.Gl(b);
        c && c.depth == a ? this.Hh(c) : c = null;
        d && d.depth == b ? this.Hh(d) : d = null;
        c && this.Xk(c, b);
        d && this.Xk(d, a)
    };
    g.tv = function(a) {
        var b = Math.min(-16384, this.Ra.depth) - 1;
        this.Hh(a);
        this.Xk(a, b)
    };
    g.kl = function() {
        return this.oh
    };
    g.$f = function(a) {
        if (0 > a || a >= this.oh) return null;
        if (a <= this.oh - a) {
            for (var b = this.Ra; 1 <= a;) b = b.nextSibling, b.Gd || --a;
            for (; b.Gd;) b = b.nextSibling
        } else {
            b = this.Ve;
            for (a = this.oh - 1 - a; 1 <= a;) b = b.Wc, b.Gd || --a;
            for (; b.Gd;) b = b.Wc
        }
        return b
    };
    g.Kh = function(a) {
        for (var b = 0, c = this.Ra; c; c = c.nextSibling) {
            if (c == a) return b;
            c.Gd || ++b
        }
    };
    g.Xf = function(a, b) {
        var c = this.$f(b - 1);
        a.depth = NaN;
        this.ft(a, c)
    };
    g.Ei = function(a) {
        this.Hh(a)
    };
    var Ue = function(a, b, c) {
            if (a && (c = l(c) ? c : b.getName())) {
                var d = b.c.pa();
                b = b.Sa() ? b.ea : a;
                d.gq(a, c, b)
            }
        },
        Ve = function(a, b) {
            if (a) {
                var c = b.getName();
                if (c) {
                    var d = b.c.pa(),
                        e = b.Sa() ? b.ea : a;
                    d.hq(a, c, e)
                }
            }
        };
    Te.prototype.Yb = function() {
        for (var a = this.Ra; a;) {
            if (!a.Yb()) return !1;
            a = a.nextSibling
        }
        return !0
    };
    var We = function() {
            return !0
        },
        Ze = function(a, b, c, d) {
            var e = Xe.c.Yq();
            if (!e) return !1;
            var f = e[a];
            if (!f || f.__swiffy_external) c ? (f = function() {
                try {
                    var a = Ga(arguments, Ye),
                        e = c.apply(b, a);
                    return Ye(e)
                } catch (f) {
                    return d ? d(f) : null
                }
            }, Object.defineProperty(f, "__swiffy_external", {
                value: !0
            }), e[a] = f) : delete e[a];
            return !0
        },
        af = function(a, b, c) {
            if (Xe.c.Yq()) try {
                var d = $e(b),
                    e = Function("return (" + a + ")(" + d + ");")();
                return Ye(e)
            } catch (f) {
                return c ? c(f) : null
            }
        },
        $e = function(a) {
            a = a.map(bf);
            return a.join(",")
        },
        bf = function(a) {
            switch (da(a)) {
                case "undefined":
                case "null":
                case "boolean":
                case "number":
                    return String(a);
                case "string":
                    return Aa(a);
                case "array":
                    return "[" + $e(a) + "]";
                case "object":
                    if (a instanceof Date) return "new Date(" + a.getTime() + ")";
                    var b = [],
                        c;
                    for (c in a) b.push(Aa(c) + ":" + bf(a[c]));
                    return "{" + b.join(",") + "}";
                default:
                    return "null"
            }
        },
        Ye = function(a) {
            switch (da(a)) {
                case "undefined":
                case "null":
                case "boolean":
                case "number":
                case "string":
                    return a;
                case "array":
                    return Ga(a, Ye);
                case "object":
                    if (a instanceof Date) a = new Date(a.getTime());
                    else {
                        var b = Ye,
                            c = {},
                            d;
                        for (d in a) c[d] = b.call(void 0, a[d], d, a);
                        a = c
                    }
                    return a;
                default:
                    return null
            }
        };
    var cf = function() {
        var a = document.createElement("canvas");
        a.width = 1;
        a.height = 1;
        this.canvas = a
    };
    cf.prototype.Tk = function(a, b, c) {
        b = new df(this.canvas, b, c, void 0, void 0);
        c = ef.uc(a);
        var d = !1;
        c.ed(a, b, 8) && (d = 0 < b.getImageData().data[3]) && (this.canvas.width = 1);
        c.ka();
        return d
    };
    var ff = function(a) {
        this.xf = a || null;
        this.Ms = this.je = "";
        this.sp = {};
        this.Cs = this.content = null
    };
    ff.prototype.Uy = function() {
        return this.Ms || this.je
    };
    ff.prototype.vx = function(a) {
        this.Ms = a
    };
    ff.prototype.Ig = function(a) {
        this.je = a
    };
    var A = function(a) {
            return a.__swiffy_v
        },
        gf = function(a, b) {
            Object.defineProperty(a, "__swiffy_v", {
                value: b
            })
        };
    var hf = function(a, b, c) {
        this.c = a;
        this.definition = b;
        this.ea = c || this.Pa();
        this.ea.__swiffy_d = this;
        this.ea.__swiffy_child_ref = {}
    };
    hf.prototype.Ja = function(a, b) {
        this.c.pa().Lq(this, a, b)
    };
    hf.prototype.ti = function() {};
    hf.prototype.ih = function() {};
    var jf = function(a, b, c) {
        hf.call(this, a, b, c);
        this.depth = this.Zj = void 0;
        this.Bf = "";
        this.Wc = this.nextSibling = this.Ka = null;
        this.Qj = this.ia = 4100;
        this.Za = 31;
        this.Fb = [];
        this.Cm = null;
        this.ze = !0;
        this.Ip = 0;
        this.Lj = void 0;
        this.Dd = !1;
        this.Be = Tc;
        this.zg = null;
        this.Wb = jd;
        this.vp = this.xp = null;
        this.wm = this.Wb;
        this.vm = jd;
        this.Am = void 0;
        this.Hp = !1;
        this.Eb = this.Oc = this.Rj = null;
        this.Mj = !1;
        this.je = null;
        this.Gd = !1;
        this.Vl = this.Vc = this.Mg = null;
        this.zm = !1;
        this.ye = null;
        this.jd = 471859200
    };
    v(jf, hf);
    var kf = function(a, b) {
        if (!b && a.Za & 16) return !1;
        a.Za |= 16;
        a.la(4096);
        !b && a.xc() || a.An(kf);
        return !1
    };
    g = jf.prototype;
    g.kt = function() {
        if (this.Za & 16) {
            var a = this.Ka,
                a = a ? a.Mc().Gn(this.Wb) : this.Wb;
            this.xc() ? (this.vm = a, this.wm = jd) : (this.vm = jd, this.wm = a);
            this.Za &= -17
        }
    };
    g.Mc = function() {
        this.kt();
        return this.wm
    };
    g.Xj = function() {
        this.kt();
        return this.vm
    };
    g.Da = function() {
        if (this.Za & 1) {
            var a = this.Ka || this.Eb && this.Eb.Ka;
            this.xp = a ? this.Be.multiply(a.Da()) : this.Be;
            this.Za ^= 1
        }
        return this.xp
    };
    g.wc = function() {
        this.Za & 2 && (this.vp = this.Da().Bd(), this.Za ^= 2);
        return this.vp
    };
    g.An = function() {
        return !1
    };
    g.map = function(a) {
        return a(this)
    };
    g.hb = function() {
        this.Hp = !0
    };
    g.Zp = function() {
        return !!this.Hp
    };
    g.setTransform = function(a) {
        this.Be.Sc(a) || (this.la(1), this.Be = a, this.zg = null, lf(this), this.Ka && this.Ka.Dc())
    };
    g.dd = function() {
        this.zg || (this.zg = this.Be.Ex());
        return this.zg
    };
    g.Ah = function() {
        var a = this.zg;
        if (a) {
            var b = Math.cos(a.angle),
                c = Math.sin(a.angle);
            this.setTransform(dd(a.fe * b, -a.fe * c, a.fe * b * a.o + a.sf * c * a.l, a.sf * b * a.l - a.fe * c * a.o, this.Be.p, this.Be.q));
            this.zg = a
        }
    };
    g.Ia = function() {
        var a = this.pb().Xd();
        if (a.sb()) return 0;
        a = a.clone();
        a.ja(this.Fa());
        return (a.t - a.k) / 20
    };
    g.vo = function(a) {
        if (0 <= a) {
            var b = this.Ia(),
                c = this.Fa();
            0 == b ? (b = this.pb().Xd().width() / 20, 0 == b && (b = 1), this.setTransform(dd(a / b, c.u, 0, c.l, c.p, c.q))) : (0 == a && (a = 1 / 1024), this.setTransform(c.qf(a / b, 1).gd(c.p, c.q)))
        }
    };
    g.Xa = function() {
        var a = this.pb().Xd();
        if (a.sb()) return 0;
        a = a.clone();
        a.ja(this.Fa());
        return (a.s - a.j) / 20
    };
    g.uo = function(a) {
        if (0 <= a) {
            var b = this.Xa(),
                c = this.Fa();
            0 == b ? (b = this.pb().Xd().height() / 20, 0 == b && (b = 1), this.setTransform(dd(c.n, 0, c.o, a / b, c.p, c.q))) : (0 == a && (a = 1 / 1024), this.setTransform(c.qf(1, a / b).gd(c.p, c.q)))
        }
    };
    var lf = function(a) {
        a.Za |= 3;
        a.la(2048);
        a.An(lf);
        0 < a.Fb.length && a.Dc();
        return !1
    };
    g = jf.prototype;
    g.Dc = function() {
        this.Za |= 4;
        this.la(16384);
        this.Ka && this.Ka.Dc()
    };
    g.Ev = function() {
        this.Za |= 8;
        this.Dc()
    };
    g.Fa = function() {
        return this.Be
    };
    g.Pc = function() {
        return this.Zj
    };
    g.ci = function() {
        return l(this.Zj)
    };
    g.am = function(a) {
        this.Zj != a && (this.la(32768), this.Zj = a)
    };
    g.vc = function() {
        return this.Ip
    };
    g.la = function(a) {
        (this.ia & a) != a && (this.ia |= a, this.Qj |= a, this.Eb ? this.Eb.la(32768) : this.Ka && this.Ka.la(65536))
    };
    g.dk = function(a) {
        this.Ip = a
    };
    g.ka = function() {
        this.Lj = !0;
        this.Eb && this.Eb.Nf(null);
        this.c.Lu(this) && this.c.tk();
        this.c.pa().qq(this)
    };
    g.De = function() {};
    g.Nc = function(a) {
        this.Wb.Sc(a) || (this.la(4), this.Wb = a, kf(this))
    };
    g.Hi = function(a) {
        a != this.mc() && (this.la(8192), kf(this, !0), (a = (1 < a ? -1 : 0) + (1 < this.mc() ? 1 : 0)) && this.Ka && this.Ka.fh(a))
    };
    g.gi = function(a) {
        var b = this.mc();
        this.Am = a;
        this.Hi(b)
    };
    g.mc = function() {
        return !this.Am && (0 < this.Fb.length || this.zm) ? 1 : this.Am | 0
    };
    g.Zl = function() {
        var a = this.mc();
        switch (a) {
            case 10:
            case 11:
                var b = this;
                do b = b.getParent(); while (b && !b.xc());
                return b && !b.getParent() ? 100 : a;
            default:
                return a
        }
    };
    g.Nf = function(a) {
        if (this.Oc != a) {
            this.la(32768);
            var b = this.Oc;
            this.Eb && this.Eb.Nf(null);
            b && (b.la(32768), b.Eb = null, b.getParent() ? b.getParent().la(65536) : lf(b));
            a && (a.la(32768), a.Nf(null), a.am(void 0), a.Eb && a.Eb.Nf(null), a.Eb = this, a.getParent() || lf(a));
            this.Oc = a
        }
    };
    g.Eg = function(a) {
        if (this.Fb != a && (0 < this.Fb.length || 0 < a.length)) {
            var b = this.mc();
            this.la(2);
            var c = this.Fb;
            this.Fb = [];
            for (var d = 0, e = 0; e < a.length; e++) {
                for (var f = !1; !f && d < c.length;) c[d].update(a[e]) && (this.Fb.push(c[d]), f = !0), d++;
                f || this.Fb.push(a[e].Sb())
            }
            this.Ev();
            this.Hi(b)
        }
    };
    g.dm = function() {
        if (this.Za & 8) {
            this.Cm = new w(0, 0, 0, 0);
            for (var a = 0; a < this.Fb.length; a++) this.Cm.add(this.Fb[a].lg());
            this.Za ^= 8
        }
        return this.Cm
    };
    g.jc = function(a) {
        a = String(a);
        a != this.Bf && this.Ka && this.Ka.Un(this, a);
        this.Bf = a
    };
    g.getName = function() {
        return this.Bf
    };
    g.Kg = function(a) {
        if (this.Ka != a) {
            var b = (1 < this.mc() ? 1 : 0) + (this.xc() ? 0 : this.qn());
            this.Ka && (this.ia || b) && (b && this.Ka.fh(-b), this.Ka.la(65536));
            (this.Ka = a) && (this.ia || b) && (b && this.Ka.fh(b), this.Ka.la(65536))
        }
    };
    g.getParent = function() {
        return this.Ka
    };
    g.ho = function() {
        for (var a = [], b = this; b; b = b.getParent()) a.push(b);
        return a
    };
    g.Mw = function() {
        return this.c.ha.contains(this)
    };
    g.Tl = function() {
        for (var a = "", b = this; b && b.getName();) a = "." + b.getName() + a, b = b.getParent();
        b && b.getParent() == b.c.ha && (a = "_level" + (b.depth - -16384) + a);
        return a
    };
    g.en = function() {
        return this.ye ? this.ye : this.getParent() && this.getParent().en() || this.c.pa().yg()
    };
    g.dp = function(a) {
        this.ye = a
    };
    g.ok = function(a) {
        this.ze != a && (this.la(8), this.ze = a)
    };
    g.Sa = function() {
        return !1
    };
    g.Lw = function() {
        return !1 === this.Lj
    };
    g.be = function() {
        return !0 === this.Lj
    };
    g.bi = function(a) {
        this.jd |= 1 << a
    };
    g.su = function(a) {
        this.jd &= ~(1 << a)
    };
    g.fireEvent = function(a, b) {
        var c = !1;
        !this.Gd && this.jd & 1 << a.type && ((c = this.Rm(a.type)) && c.sound && this.c.yf().Yp(c.sound), c = this.c.pa().fireEvent(this.ea, c, a, b));
        return c
    };
    g.Rm = function() {
        return null
    };
    g.zx = function(a) {
        return !!this.Rm(a, !0)
    };
    g.pb = function() {
        if (this.Za & 4) {
            this.Rj = this.Kd();
            if (0 < this.Fb.length) {
                var a = this.Rj.qb.clone();
                a.ja(this.Da());
                a.add(this.dm());
                a.ja(this.wc());
                this.Rj.dv(a)
            }
            this.Za ^= 4
        }
        return this.Rj
    };
    g.Bg = function() {
        return this.pb().qb
    };
    g.Ja = function(a, b) {
        this.Lj = !1;
        jf.fa.Ja.call(this, a, b)
    };
    g.Ig = function(a) {
        this.je = a
    };
    g.ou = function() {
        var a = this.pb().qb.clone();
        a.ja(this.Da());
        var b = new w(0, 0, 20 * this.c.ha.ei, 20 * this.c.ha.di);
        b.add(this.dm().gp());
        a.Wh(b);
        return a
    };
    g.kk = function() {
        return this.c.pa().kk(this)
    };
    g.up = function(a) {
        this.Mj = a
    };
    g.contains = function(a) {
        for (; a && a != this;) a = a.getParent();
        return a == this
    };
    g.Xb = function(a) {
        this.Mg != a && (this.Vc && this.Vc.ka(), this.ia = this.Qj, this.Vc = a.uc(this), this.Mg = a);
        return this.Vc
    };
    g.Ai = function() {
        this.Vc && this.Vc.ka();
        this.Vc = this.Mg = null
    };
    g.Jz = function(a) {
        this.Vl = a
    };
    g.Eq = function() {
        var a = this.Da(),
            b = this.Vl;
        if (!b || !this.Yb() || 0 > a.n || 0 > a.l || a.u || a.o) return null;
        var a = this.Fa(),
            c = this.pb().qb;
        return {
            x: {
                scale: a.n,
                translate: a.p,
                offset: c.k,
                size: c.t - c.k,
                yb: [b.k - c.k, b.t - b.k, c.t - b.t]
            },
            y: {
                scale: a.l,
                translate: a.q,
                offset: c.j,
                size: c.s - c.j,
                yb: [b.j - c.j, b.s - b.j, c.s - b.s]
            }
        }
    };
    g.Pj = function() {
        return !1
    };
    g.qn = function() {
        return 0
    };
    g.xc = function() {
        return 1 <= this.mc()
    };
    g.fh = function() {};
    g.Bu = function(a, b) {
        return (new cf).Tk(this, a, b)
    };
    g.Je = function(a, b, c, d, e) {
        return this.pl(a, b) && e.Tk(this, a, b) ? c(this) ? this : d : null
    };
    g.pl = function(a, b) {
        if (this.ze) {
            var c = new Uc(a, b);
            c.ja(this.wc());
            if (this.pb().xg().contains(c.x, c.y)) return c
        }
        return null
    };
    g.xg = function(a, b, c) {
        var d = new cf;
        return this.Je(a, b, c, null, d)
    };
    g.$m = function(a) {
        var b = this.mc();
        this.zm = a;
        this.Hi(b)
    };
    g.Qt = function() {
        return this.zm || 0 < this.Fb.length
    };
    var mf = {
            vs: 27,
            xs: 21
        },
        nf = {
            vs: 28,
            xs: 26
        };
    jf.prototype.ih = function(a, b, c) {
        c != this.Ka && this.Lw() && (this.fireEvent(new Vc(a.vs), !0), this.Mw() && this.map(function(c) {
            c.fireEvent(new Vc(a.xs), !0);
            return b
        }))
    };
    var pf = function(a, b, c) {
        jf.call(this, b, of, c);
        this.pc = a;
        this.bt = "auto";
        this.smoothing = !1
    };
    v(pf, jf);
    g = pf.prototype;
    g.mc = function() {
        return Math.max(1, pf.fa.mc.call(this))
    };
    g.wz = function(a) {
        a !== this.pc && (this.pc && this.pc.gr(this), (this.pc = a) && this.pc.or(this), this.ms())
    };
    g.ms = function() {
        this.la(262144)
    };
    g.Ja = function(a, b) {
        pf.fa.Ja.call(this, a, b);
        this.pc && this.pc.or(this)
    };
    g.ka = function() {
        pf.fa.ka.call(this);
        this.pc && this.pc.gr(this)
    };
    g.Kd = function() {
        var a = this.pc,
            b = a ? 20 * a.Ia() : 0,
            a = a ? 20 * a.Xa() : 0;
        return new ld(new w(0, 0, b, a))
    };
    var qf = function(a, b, c) {
        jf.call(this, b, a, c)
    };
    v(qf, jf);
    qf.prototype.Kd = function() {
        return this.definition.Kd(this)
    };
    qf.prototype.dk = function(a) {
        a != this.vc() && (this.la(512), this.Dc());
        qf.fa.dk.call(this, a)
    };
    qf.prototype.Yb = function() {
        for (var a = this.definition.fillstyles, b = 0; b < a.length; b++)
            if (!a[b].Yb) return !1;
        return !0
    };
    qf.prototype.kp = function(a, b) {
        if (!fb || !this.definition.Oj || !this.Mc().Sc(jd)) return !1;
        var c = this.Da(),
            d = c.Hj() * a,
            c = c.Ij() * b,
            e = this.definition.Sj,
            f = .5 * e;
        return d >= f && d <= e && c >= f && c <= e
    };
    var sf = function(a, b) {
        jf.call(this, a, new rf(-1, [], null, [], []), b);
        this.clear();
        this.Di = this.kh = null;
        this.hb()
    };
    v(sf, qf);
    g = sf.prototype;
    g.ob = function() {
        return this
    };
    g.duplicate = function() {
        var a = new sf(this.c);
        a.definition = Ta(this.definition);
        return a
    };
    g.clear = function() {
        this.definition.fillstyles = [];
        this.definition.linestyles = [];
        this.definition.paths = [];
        this.Pd = this.Qd = this.Pe = this.Qe = 0;
        this.la(1024);
        this.Dc()
    };
    g.bg = function() {
        var a = this.kh,
            b = this.Di,
            c;
        b && (c = b);
        a && a != b && (c = a);
        return c ? (this.la(1024), this.Dc(), c.data.value) : new tf
    };
    g.moveTo = function(a, b) {
        l(a) && l(b) && (a *= 20, b *= 20, this.bg().Pi(a, b), this.Pd = a, this.Qd = b, this.Pe = a, this.Qe = b)
    };
    g.lineTo = function(a, b) {
        l(a) && l(b) && (a *= 20, b *= 20, a != this.Pd || b != this.Qd || this.Di ? this.bg().Rd(a, b) : this.bg().close(), this.Pe = a, this.Qe = b)
    };
    g.Qs = function(a, b, c, d) {
        l(c) && l(d) && l(a) && l(b) && (a *= 20, b *= 20, c *= 20, d *= 20, this.bg().Jc(a, b, c, d), this.Pe = c, this.Qe = d)
    };
    g.rx = function(a, b, c, d) {
        l(a) && l(b) && l(c) && l(d) && (a *= 20, b *= 20, c *= 20, d *= 20, this.bg().Pi(a, b).Rd(a, b + d).Rd(a + c, b + d).Rd(a + c, b).Rd(a, b), this.Pd = this.Pe = a, this.Qd = this.Qe = b)
    };
    var uf = Math.sqrt(2);
    g = sf.prototype;
    g.Rs = function(a, b, c, d) {
        if (l(a) && l(b) && l(c) && l(d)) {
            a *= 20;
            b *= 20;
            c *= 20;
            d *= 20;
            var e = c / uf,
                f = d / uf,
                h = c * (uf - 1),
                k = d * (uf - 1);
            this.bg().Pi(a + c, b).Jc(a + c, b + k, a + e, b + f).Jc(a + h, b + d, a, b + d).Jc(a - h, b + d, a - e, b + f).Jc(a - c, b + k, a - c, b).Jc(a - c, b - k, a - e, b - f).Jc(a - h, b - d, a, b - d).Jc(a + h, b - d, a + e, b - f).Jc(a + c, b - k, a + c, b);
            this.Pd = this.Pe = a + c;
            this.Qd = this.Qe = b
        }
    };
    g.sx = function(a, b, c, d, e, f) {
        l(a) && l(b) && l(c) && l(d) && l(e) && l(f) && (e && f ? (e > c && (e = c), f > d && (f = d)) : e = f = 0, a *= 20, b *= 20, c *= 20, d *= 20, e *= 10, f *= 10, this.bg().Pi(a + c, b + d - f).Jc(a + c, b + d, a + c - e, b + d).Rd(a + e, b + d).Jc(a, b + d, a, b + d - f).Rd(a, b + f).Jc(a, b, a + e, b).Rd(a + c - e, b).Jc(a + c, b, a + c, b + f).Rd(a + c, b + d - f), this.Pd = this.Pe = a + c, this.Qd = this.Qe = b + d - f)
    };
    g.Li = function(a, b, c, d) {
        var e = this.definition.paths,
            f = e[e.length - 1],
            h = new tf;
        h.Pi(a, b);
        a = new vf(new wf(h), d, c);
        f && f.data.value.sb() ? e[e.length - 1] = a : e.push(a);
        return a
    };
    g.lz = function(a) {
        var b = this.kh,
            c = this.Di;
        if (c) {
            if (c.data.value.sb()) {
                b = c;
                b.line = a;
                this.kh = b;
                return
            }
            b == c && (b = this.Li(0, 0, c.line, void 0), b.data = c.data, delete c.line)
        }
        this.kh = b = l(a) ? this.Li(this.Pe, this.Qe, a, void 0) : null
    };
    g.Sh = function(a) {
        var b = this.Di;
        b && b.data.value.close();
        var c = this.kh;
        b && c && c != b ? (c.data.value.Rd(this.Pd, this.Qd), l(a) ? c = b = this.Li(this.Pd, this.Qd, c.line, a) : b = null) : (b = l(a) ? this.Li(this.Pd, this.Qd, void 0, a) : null, c && (b ? (b.line = c.line, c = b) : c = this.Li(this.Pd, this.Qd, c.line, void 0)));
        this.Di = b;
        this.kh = c;
        this.Pe = this.Pd;
        this.Qe = this.Qd;
        this.la(1024)
    };
    g.Ts = function(a, b, c, d, e, f, h, k) {
        d = void 0;
        l(a) && (e = this.definition.linestyles, d = e.length, f = xf(yf, f, 0), e.push(new zf(new wf(20 * a), new wf(gd(b, c)), null, f, f, xf(Af, h, 0), k)));
        this.lz(d)
    };
    var xf = function(a, b, c) {
        return b && (a = a.indexOf(b), 0 <= a) ? a : c
    };
    sf.prototype.Ps = function(a, b) {
        if (l(a)) {
            var c = this.definition.fillstyles;
            c.push(new Bf(new wf(gd(a, b))));
            this.Sh(c.length - 1)
        } else this.Sh()
    };
    sf.prototype.Wq = function(a, b, c, d, e, f, h, k) {
        if (l(b) && ea(b) && ea(c) && ea(d)) {
            for (var n = b.length, r = [], t = 0; t < n; ++t) {
                var p = Number(d[t]);
                0 <= p && 255 >= p && r.push({
                    color: new wf(gd(b[t], c[t])),
                    offset: new wf(p / 255)
                })
            }
            var s;
            switch (a) {
                case "linear":
                    s = Cf;
                    break;
                case "radial":
                    s = Df
            }
            s ? (a = this.definition.fillstyles, a.push(new s(e ? new wf(e.Mi(16384, 16384)) : Ef, r, xf(Ff, f, 0), xf(Gf, h, 0), new wf(k || 0))), this.Sh(a.length - 1)) : this.Sh()
        } else this.Sh()
    };
    sf.prototype.Ss = function() {
        this.Sh()
    };
    var Hf = function(a, b, c) {
        jf.call(this, b, a, c)
    };
    v(Hf, jf);
    Hf.prototype.Kd = function() {
        return new ld(this.definition.bounds)
    };
    Hf.prototype.Yb = function() {
        return !1
    };
    var If = function() {
            this.color = this.bold = this.Cb = null;
            this.Tf = !1;
            this.letterSpacing = this.Kc = this.leading = this.leftMargin = this.rightMargin = this.indent = this.target = this.url = this.Pr = this.Or = this.Mb = this.Nr = this.size = this.italic = this.font = null
        },
        Jf = function() {
            var a = new If;
            a.bold = !1;
            a.italic = !1;
            a.Mb = !1;
            a.font = "_serif";
            a.color = 0;
            a.size = 240;
            a.indent = 0;
            a.rightMargin = 0;
            a.leftMargin = 0;
            a.leading = 0;
            a.Cb = 0;
            a.Kc = !1;
            a.letterSpacing = 0;
            return a
        },
        Lf = function(a) {
            var b = Jf(),
                c = a.font && a.font.get();
            c instanceof Kf && (b.font =
                c);
            l(a.color) && (b.color = 16777215 & a.color);
            l(a.height) && (b.size = a.height);
            l(a.indent) && (b.indent = a.indent);
            l(a.align) && (b.Cb = a.align);
            l(a.leftMargin) && (b.leftMargin = a.leftMargin);
            l(a.rightMargin) && (b.rightMargin = a.rightMargin);
            l(a.leading) && (b.leading = a.leading);
            return b
        },
        Mf = function(a) {
            var b = new If;
            b.color = a;
            b.Tf = !0;
            return b
        };
    g = If.prototype;
    g.Ji = function(a) {
        this.Tf = a.Tf;
        null != a.color && (this.color = a.color, this.Tf = !0);
        this.bold = null != a.bold ? a.bold : this.bold;
        this.font = null != a.font ? a.font : this.font;
        this.italic = null != a.italic ? a.italic : this.italic;
        this.size = null != a.size ? a.size : this.size;
        this.Mb = null != a.Mb ? a.Mb : this.Mb;
        this.Cb = null != a.Cb ? a.Cb : this.Cb;
        this.target = null != a.target ? a.target : this.target;
        this.url = null != a.url ? a.url : this.url;
        this.indent = null != a.indent ? a.indent : this.indent;
        this.rightMargin = null != a.rightMargin ? a.rightMargin : this.rightMargin;
        this.leftMargin = null != a.leftMargin ? a.leftMargin : this.leftMargin;
        this.leading = null != a.leading ? a.leading : this.leading;
        this.Kc = null != a.Kc ? a.Kc : this.Kc;
        this.letterSpacing = null != a.letterSpacing ? a.letterSpacing : this.letterSpacing
    };
    g.mh = function() {
        return !!this.font && this.font instanceof Kf
    };
    g.ah = function() {
        return !!this.font && this.font instanceof Kf && (0 < this.font.glyphs.length || this.font == Nf)
    };
    g.clone = function() {
        var a = new If;
        a.bold = this.bold;
        a.color = this.color;
        a.font = this.font;
        a.italic = this.italic;
        a.size = this.size;
        a.Mb = this.Mb;
        a.Tf = this.Tf;
        a.Cb = this.Cb;
        a.url = this.url;
        a.target = this.target;
        a.indent = this.indent;
        a.rightMargin = this.rightMargin;
        a.leftMargin = this.leftMargin;
        a.leading = this.leading;
        a.Kc = this.Kc;
        a.letterSpacing = this.letterSpacing;
        return a
    };
    g.Jw = function(a) {
        this.bold = this.bold == a.bold ? this.bold : null;
        this.color = this.color == a.color ? this.color : null;
        this.font = this.font == a.font ? this.font : null;
        this.italic = this.italic == a.italic ? this.italic : null;
        this.size = this.size == a.size ? this.size : null;
        this.Mb = this.Mb == a.Mb ? this.Mb : null;
        this.Cb = this.Cb == a.Cb ? this.Cb : null;
        this.url = this.url == a.url ? this.url : null;
        this.target = this.target == a.target ? this.target : null;
        this.Kc = this.Kc == a.Kc ? this.Kc : null;
        this.indent = this.indent == a.indent ? this.indent : null;
        this.rightMargin =
            this.rightMargin == a.rightMargin ? this.rightMargin : null;
        this.leftMargin = this.leftMargin == a.leftMargin ? this.leftMargin : null;
        this.leading = this.leading == a.leading ? this.leading : null;
        this.letterSpacing = this.letterSpacing == a.letterSpacing ? this.letterSpacing : null
    };
    g.ln = function() {
        var a = this.mh() ? this.font.name : this.font;
        switch (a) {
            case "_sans":
                return "Arial, Helvetica, sans-serif";
            case "_serif":
                return "Times, serif";
            case "_typewriter":
                return "monospace";
            default:
                return '"' + a + '", sans-serif'
        }
    };
    var Of = function(a) {
            if (null == a) return null;
            a = Math.round(Number(a));
            a != a && (a = -2147483648);
            return 20 * a
        },
        Pf = function(a) {
            return null == a ? null : a / 20
        },
        Qf = function(a) {
            if (null == a) return null;
            switch (String(a)) {
                case "left":
                    return 0;
                case "center":
                    return 2;
                case "right":
                    return 1;
                case "justify":
                    return 3
            }
        },
        Rf = function() {
            switch (A(this).Cb) {
                case 0:
                    return "left";
                case 2:
                    return "center";
                case 1:
                    return "right";
                case 3:
                    return "justify";
                default:
                    return null
            }
        },
        Sf = function(a) {
            a = Qf(a);
            if (!l(a)) return !1;
            A(this).Cb = a;
            return !0
        },
        Tf = function() {
            return Pf(A(this).Nr)
        },
        Uf = function(a) {
            A(this).Nr = Of(a)
        },
        Vf = function() {
            return A(this).bold
        },
        Wf = function(a) {
            A(this).bold = null == a ? null : !!a
        },
        Xf = function() {
            return A(this).Or
        },
        bg = function(a) {
            A(this).Or = null == a ? null : !!a
        },
        cg = function() {
            var a = A(this).color;
            return null == a ? null : a & 16777215
        },
        dg = function(a) {
            A(this).color = null == a ? null : Number(a) & 16777215
        },
        eg = function() {
            var a = A(this).font;
            a instanceof Kf && (a = a.name);
            return a
        },
        fg = function(a) {
            A(this).font = null == a ? null : String(a)
        },
        gg = function() {
            return Pf(A(this).indent)
        },
        hg = function(a) {
            A(this).indent =
                Of(a)
        },
        ig = function() {
            return A(this).italic
        },
        jg = function(a) {
            A(this).italic = null == a ? null : !!a
        },
        kg = function() {
            return A(this).Kc
        },
        lg = function(a) {
            A(this).Kc = null == a ? null : !!a
        },
        mg = function() {
            return Pf(A(this).leading)
        },
        ng = function(a) {
            A(this).leading = Of(a)
        },
        og = function() {
            return Pf(A(this).leftMargin)
        },
        pg = function(a) {
            A(this).leftMargin = Of(a)
        },
        qg = function() {
            return Pf(A(this).letterSpacing)
        },
        rg = function(a) {
            null == a ? a = null : (a = Number(a), a != a && (a = -2147483648), a *= 20);
            A(this).letterSpacing = a
        },
        sg = function() {
            return Pf(A(this).rightMargin)
        },
        tg = function(a) {
            A(this).rightMargin = Of(a)
        },
        ug = function() {
            return Pf(A(this).size)
        },
        vg = function(a) {
            A(this).size = Of(a)
        },
        wg = function() {
            return A(this).target
        },
        xg = function(a) {
            A(this).target = null == a ? null : String(a)
        },
        yg = function() {
            var a = A(this).Pr;
            return a && a.map(Pf)
        },
        zg = function(a) {
            var b = null;
            if (a && a.length)
                for (var b = [], c = 0; c < a.length; ++c) b.push(Of(a[c]) | 0);
            A(this).Pr = b
        },
        Ag = function() {
            return A(this).Mb
        },
        Bg = function(a) {
            A(this).Mb = null == a ? null : !!a
        },
        Cg = function() {
            return A(this).url
        },
        Dg = function(a) {
            A(this).url =
                null == a ? null : String(a)
        };
    var Eg = function(a, b, c) {
        jf.call(this, b, a, c)
    };
    v(Eg, jf);
    Eg.prototype.Sa = function() {
        return !0
    };
    Eg.prototype.Kd = function() {
        return new ld(new w(0, 0, this.definition.width, this.definition.height))
    };
    var Fg = {};
    var Gg = function() {
        this.Ol = [];
        this.vt = null
    };
    Gg.prototype.uc = function(a) {
        return new(this.Ol[Hg(a.constructor)])(a)
    };
    Gg.prototype.ru = function(a) {
        return new this.vt(a)
    };
    Gg.prototype.i = function(a, b) {
        this.Ol[Hg(a)] = b
    };
    Gg.prototype.Yo = function(a) {
        this.vt = a
    };
    var Ig = [],
        Hg = function(a) {
            l(a.Vt) || (a.Vt = Ig.length, Ig.push(a));
            return a.Vt
        },
        Jg = function(a) {
            Gg.call(this, a)
        };
    v(Jg, Gg);
    Jg.prototype.uc = function(a) {
        return this.Ol[Hg(a.constructor)]
    };
    Jg.prototype.i = function(a, b) {
        this.Ol[Hg(a)] = new b(null)
    };
    var ef = new Jg("canvas");
    ba("swiffy.CANVAS", ef, void 0);
    var Lg = function(a) {
        var b = ef;
        a.xc() && (b = Kg);
        return a.Xb(b)
    };
    var df = function(a, b, c, d, e, f) {
            this.Qa = dd(d || 1, 0, 0, e || 1, -(b || 0), -(c || 0));
            this.zb = a.getContext("2d");
            this.zb.fillStyle = "rgb(0,0,0)";
            this.On = f || null;
            this.Nn = null
        },
        Mg = [];
    g = df.prototype;
    g.pf = function(a) {
        var b = this.Qa;
        this.zb.setTransform(a.n * b.n + a.u * b.o, a.n * b.u + a.u * b.l, a.o * b.n + a.l * b.o, a.o * b.u + a.l * b.l, a.p * b.n + a.q * b.o + b.p, a.p * b.u + a.q * b.l + b.q);
        return this.zb
    };
    g.clear = function(a) {
        var b = this.zb;
        b.setTransform(1, 0, 0, 1, 0, 0);
        a ? (b.globalCompositeOperation = "copy", b.fillStyle = a, b.fillRect(0, 0, b.canvas.width, b.canvas.height), b.globalCompositeOperation = "source-over") : b.clearRect(0, 0, b.canvas.width, b.canvas.height)
    };
    g.Ia = function() {
        return this.zb.canvas.width
    };
    g.Xa = function() {
        return this.zb.canvas.height
    };
    g.li = function() {
        var a = this.Ce();
        return new w(0, 0, a.width, a.height)
    };
    g.Ce = function() {
        return this.zb.canvas
    };
    g.nd = function() {
        return -this.Qa.p
    };
    g.od = function() {
        return -this.Qa.q
    };
    g.Uq = function(a, b) {
        var c = this.mm(a, b);
        return this.ji(c)
    };
    g.Tq = function() {
        var a = this.On,
            b = this.ji(this.li());
        b.Nn = a;
        return b
    };
    g.tn = function() {
        var a = this.Nn,
            b = this.On;
        this.qk(b, 1);
        a.Ie(this);
        b.Os();
        this.Os();
        return a
    };
    g.ji = function(a, b) {
        var c = a.width(),
            d = a.height();
        if (0 >= c || 0 >= d) c = d = 1, a = new w(this.nd() - 1, this.od() - 1, this.nd(), this.od());
        var e = b || Mg.pop() || document.createElement("canvas");
        e.width = c;
        e.height = d;
        return new df(e, a.k + this.nd(), a.j + this.od(), this.Qa.n, this.Qa.l, this)
    };
    g.Os = function() {
        var a = this.Ce();
        6 > Mg.length && Mg.push(a);
        a.width = 1;
        a.height = 1;
        this.zb = null
    };
    g.mm = function(a, b, c) {
        if (a) {
            a = a.clone();
            var d = this.Qa;
            b && (d = b.multiply(d));
            a.ja(d);
            b = this.li();
            c && (c = c.clone(), c.scale(this.Qa.n, this.Qa.l), b.add(c.gp()));
            a.Wh(b);
            a.Wl()
        } else a = this.li();
        return a
    };
    g.Uu = function(a, b) {
        return a.width() == this.Ia() && a.height() == this.Xa() && a.k + b.nd() == this.nd() && a.j + b.od() == this.od()
    };
    g.Ie = function(a) {
        var b = this.zb;
        b.setTransform(1, 0, 0, 1, 0, 0);
        b.drawImage(a.Ce(), a.nd() - this.nd(), a.od() - this.od())
    };
    g.Ou = function(a, b, c) {
        if (100 != b) {
            var d = this.Nn;
            if (1 >= b || !d) this.ls(a, b, c);
            else {
                var e = this.zb,
                    f = this.On;
                this.qk(f, 1);
                d.Ie(this);
                e.globalCompositeOperation = "copy";
                this.Ie(a);
                this.qk(f, 1);
                d.ls(this, b, c);
                this.clear();
                e.globalCompositeOperation = "source-over"
            }
        }
    };
    g.qk = function(a, b) {
        var c = this.zb;
        c.globalAlpha = b;
        c.globalCompositeOperation = "destination-in";
        this.Ie(a);
        c.globalAlpha = 1;
        c.globalCompositeOperation = "source-over"
    };
    g.ls = function(a, b, c) {
        var d = this.zb,
            e = Ng(b);
        d.globalAlpha = c;
        d.globalCompositeOperation = e;
        d.globalCompositeOperation == e ? (this.Ie(a), d.globalCompositeOperation = "source-over") : this.cx(a, b);
        d.globalAlpha = 1
    };
    g.cx = function(a, b) {
        var c = a.li(),
            d = a.nd() - this.nd(),
            e = a.od() - this.od();
        c.translate(d, e);
        c.Wh(this.li());
        var d = c.k,
            e = c.j,
            f = c.width(),
            h = c.height();
        if (!(0 >= f || 0 >= h)) {
            var c = this.zb,
                k = c.getImageData(d, e, f, h),
                n = k.data,
                r = Og[b];
            if (r) {
                for (var k = a.zb.getImageData(d - (a.nd() - this.nd()), e - (a.od() - this.od()), f, h), t = k.data, p = t.length, s = 0; s < p; s += 4) {
                    var u = n[s + 3] / 255;
                    t[s + 0] = r(t[s + 0], n[s + 0]) * u + t[s + 0] * (1 - u);
                    t[s + 1] = r(t[s + 1], n[s + 1]) * u + t[s + 1] * (1 - u);
                    t[s + 2] = r(t[s + 2], n[s + 2]) * u + t[s + 2] * (1 - u)
                }
                n = document.createElement("canvas");
                n.width = f;
                n.height = h;
                n.getContext("2d").putImageData(k, 0, 0);
                c.setTransform(1, 0, 0, 1, 0, 0);
                c.drawImage(n, d, e)
            } else c.putImageData(c.createImageData(f, h), d, e), this.Ie(a), f = c.getImageData(d, e, f, h).data, Pg(f, n, b), c.putImageData(k, d, e)
        }
    };
    var Ng = function(a) {
        switch (a) {
            case 2:
            case 4:
            case 5:
            case 3:
            case 12:
            case 6:
                return Yc[a];
            case 13:
                return "hard-light";
            case 7:
                return "lighter";
            case 10:
                return "destination-in";
            case 11:
                return "destination-out";
            case 8:
            case 9:
                return "";
            default:
                return "source-over"
        }
    };
    g = df.prototype;
    g.getImageData = function() {
        var a = this.zb;
        return a.getImageData(0, 0, a.canvas.width, a.canvas.height)
    };
    g.createImageData = function() {
        var a = this.zb;
        return a.createImageData(a.canvas.width, a.canvas.height)
    };
    g.putImageData = function(a) {
        this.zb.putImageData(a, 0, 0)
    };
    g.Tj = function(a, b) {
        var c = this.zb;
        c.setTransform(1, 0, 0, 1, 0, 0);
        c.globalCompositeOperation = b;
        c.drawImage(a, 0, 0);
        c.globalCompositeOperation = "source-over"
    };
    g.Gp = function(a, b) {
        b = b.multiply(this.Qa);
        b.Mn() && (a.ja(b), a.xr(), a.ja(b.Bd()))
    };
    g.zu = function(a, b, c, d) {
        b = b.clone();
        var e = this.Qa;
        b.ja(c.multiply(e));
        if (!(0 >= b.width() || 0 >= b.height())) {
            a = a.clone();
            a.ja(c);
            c = b.width() / a.width();
            var f = b.height() / a.height();
            this.Qa = dd(c, 0, 0, f, -(a.k * c - b.k), -(a.j * f - b.j));
            b.Wl();
            a = this.zb;
            a.save();
            a.setTransform(1, 0, 0, 1, 0, 0);
            a.beginPath();
            a.rect(b.k, b.j, b.width(), b.height());
            a.clip();
            d(this);
            a.restore();
            this.Qa = e
        }
    };
    var Qg = function(a) {
        this.c = a;
        this.$d = document.createElement("canvas");
        this.bp = 0;
        this.cp = new w(0, 0, 0, 0)
    };
    ef.Yo(Qg);
    g = Qg.prototype;
    g.Zi = function(a) {
        a.appendChild(this.$d)
    };
    g.Do = function() {};
    g.In = function() {
        var a = this.c,
            b = a.ha;
        if (b.ia & 1048576) {
            b.ia &= -1048577;
            var c = b.ia,
                d = Pd(),
                e = a.hu();
            if (!e.sb()) {
                var f = Math.max(b.Ad, b.zd);
                2048 < f * d && (d = 2048 / f);
                this.bp == d && this.cp.Xl(e) || (c |= 524288);
                c && (this.$d.width = e.width() * d, this.$d.height = e.height() * d, this.$d.style.width = e.width() + "px", this.$d.style.height = e.height() + "px", this.$d.style.position = "relative", this.$d.style.left = e.k + "px", this.$d.style.top = e.j + "px", b = b.mf, b = new df(this.$d, e.k * d - b.p, e.j * d - b.q, b.n * d, b.l * d), this.iu(b), c = c & 524288 ? 64 : 0, this.bp =
                    d, this.cp = e, ef.uc(a.ha).ed(a.ha, b, c))
            }
        }
    };
    g.iu = function(a) {
        a.clear(this.c.ha.backgroundColor)
    };
    g.um = function(a) {
        return a
    };
    g.ka = function() {
        this.c.ha.Ai()
    };
    var Rg = function(a, b, c) {
            for (var d = a.length, e = 0; e < d; e += 4) {
                var f = a[e + 3],
                    h = b[e + 3];
                b[e + 3] = f + h - f * h / 255;
                var k = 1 / (255 * b[e + 3]);
                b[e + 0] = k * (c(a[e + 0], b[e + 0]) * f * h + a[e + 0] * f * (255 - h) + b[e + 0] * h * (255 - f));
                b[e + 1] = k * (c(a[e + 1], b[e + 1]) * f * h + a[e + 1] * f * (255 - h) + b[e + 1] * h * (255 - f));
                b[e + 2] = k * (c(a[e + 2], b[e + 2]) * f * h + a[e + 2] * f * (255 - h) + b[e + 2] * h * (255 - f))
            }
        },
        Sg = function(a, b, c) {
            for (var d = a.length, e = 0; e < d; e += 4) {
                var f = a[e + 3],
                    h = b[e + 3];
                if (0 < h) {
                    var k = Math.min(255, f + h | 0);
                    b[e + 3] = k;
                    k = 1 / k;
                    f *= c;
                    b[e + 0] = (b[e + 0] * h + a[e + 0] * f) * k;
                    b[e + 1] = (b[e + 1] * h + a[e + 1] * f) *
                        k;
                    b[e + 2] = (b[e + 2] * h + a[e + 2] * f) * k
                } else b[e + 0] = a[e + 0], b[e + 1] = a[e + 1], b[e + 2] = a[e + 2], b[e + 3] = f
            }
        },
        Tg = function(a, b) {
            for (var c = a.length, d = 0; d < c; d += 4) {
                var e = a[d + 3];
                0 < b[d + 3] ? (b[d + 0] = b[d + 0] * (1 - 2 / 255 * e) + e, b[d + 1] = b[d + 1] * (1 - 2 / 255 * e) + e, b[d + 2] = b[d + 2] * (1 - 2 / 255 * e) + e) : (b[d + 0] = a[d + 0], b[d + 1] = a[d + 1], b[d + 2] = a[d + 2], b[d + 3] = e)
            }
        },
        Og = [, ,
            function(a, b) {
                return a * b / 255
            },
            function(a, b) {
                return a + b - a * b / 255
            }
        ];
    Og[5] = Math.min;
    Og[4] = Math.max;
    Og[13] = function(a, b) {
        return 127 >= a ? 2 * a * b / 255 : 2 * (a + b - a * b / 255) - 255
    };
    Og[12] = function(a, b) {
        return 127 >= b ? 2 * b * a / 255 : 2 * (b + a - b * a / 255) - 255
    };
    Og[6] = function(a, b) {
        return Math.abs(a - b)
    };
    var Pg = function(a, b, c) {
        var d = Og[c];
        if (!d) switch (d = 1, c) {
            case 8:
                d = -1;
            case 7:
                Sg(a, b, d);
                return;
            case 9:
                Tg(a, b);
                return;
            default:
                d = function(a) {
                    return a
                }
        }
        Rg(a, b, d)
    };
    var Ug = function() {};
    ef.i(Se, Ug);
    Ug.prototype.apply = function() {};
    Ug.prototype.ka = function() {};
    var Vg = function(a, b) {
        for (var c = a.length, d = b.Ca, e = b.xa, f = b.Ba, h = b.wa, k = b.Aa, n = b.va, r = b.sa, t = b.ya, p = 0; p < c; p += 4) a[p + 3] && (a[p + 0] = a[p + 0] * d + e, a[p + 1] = a[p + 1] * f + h, a[p + 2] = a[p + 2] * k + n, a[p + 3] = a[p + 3] * r + t)
    };
    var Wg = function() {};
    v(Wg, Ug);
    ef.i(me, Wg);
    var Xg = function(a, b, c, d, e, f, h, k, n) {
            for (var r = 0, t = 0; t < n; ++t) {
                for (var p = 0, s = 0, u = 0, x = 0, y = t * k * 4, C = y, F = 0; F < h; ++F) s += a[C + 0], u += a[C + 1], x += a[C + 2], p += a[C + 3], C += 4;
                for (var E = r, F = 0; F < f; ++F) b[E + 0] = s * e, b[E + 1] = u * e, b[E + 2] = x * e, b[E + 3] = p * e, F + h < k && (s += a[C + 0], u += a[C + 1], x += a[C + 2], p += a[C + 3], C += 4), E += c;
                for (; F + h + 4 <= k; F += 4) b[E + 0] = s * e, b[E + 1] = u * e, b[E + 2] = x * e, b[E + 3] = p * e, E += c, s += a[C + 0] - a[y + 0], u += a[C + 1] - a[y + 1], x += a[C + 2] - a[y + 2], p += a[C + 3] - a[y + 3], b[E + 0] = s * e, b[E + 1] = u * e, b[E + 2] = x * e, b[E + 3] = p * e, E += c, s += a[C + 4] - a[y + 4], u += a[C + 5] - a[y + 5], x +=
                    a[C + 6] - a[y + 6], p += a[C + 7] - a[y + 7], b[E + 0] = s * e, b[E + 1] = u * e, b[E + 2] = x * e, b[E + 3] = p * e, E += c, s += a[C + 8] - a[y + 8], u += a[C + 9] - a[y + 9], x += a[C + 10] - a[y + 10], p += a[C + 11] - a[y + 11], b[E + 0] = s * e, b[E + 1] = u * e, b[E + 2] = x * e, b[E + 3] = p * e, E += c, s += a[C + 12] - a[y + 12], u += a[C + 13] - a[y + 13], x += a[C + 14] - a[y + 14], p += a[C + 15] - a[y + 15], y += 16, C += 16;
                for (; F + h < k; ++F) b[E + 0] = s * e, b[E + 1] = u * e, b[E + 2] = x * e, b[E + 3] = p * e, s += a[C + 0] - a[y + 0], u += a[C + 1] - a[y + 1], x += a[C + 2] - a[y + 2], p += a[C + 3] - a[y + 3], y += 4, C += 4, E += c;
                for (; F < k; ++F) b[E + 0] = s * e, b[E + 1] = u * e, b[E + 2] = x * e, b[E + 3] = p * e, s -= a[y + 0], u -=
                    a[y + 1], x -= a[y + 2], p -= a[y + 3], y += 4, E += c;
                r += d
            }
        },
        Yg = function(a, b, c, d, e, f, h, k, n) {
            var r = 0;
            e /= 255;
            for (var t = 0; t < n; ++t) {
                for (var p = 0, s = 0, u = 0, x = 0, y = t * k * 4, C = y, F, E = 0; E < h; ++E) F = a[C + 3], s += a[C + 0] * F, u += a[C + 1] * F, x += a[C + 2] * F, p += 255 * F, C += 4;
                for (var I = r, E = 0; E < f; ++E) b[I + 0] = s * e, b[I + 1] = u * e, b[I + 2] = x * e, b[I + 3] = p * e, E + h < k && (F = a[C + 3], s += a[C + 0] * F, u += a[C + 1] * F, x += a[C + 2] * F, p += 255 * F, C += 4), I += c;
                for (; E + h + 4 <= k; E += 4) b[I + 0] = s * e, b[I + 1] = u * e, b[I + 2] = x * e, b[I + 3] = p * e, I += c, F = a[C + 3], s += a[C + 0] * F, u += a[C + 1] * F, x += a[C + 2] * F, p += 255 * F, F = a[y + 3], s -= a[y + 0] *
                    F, u -= a[y + 1] * F, x -= a[y + 2] * F, p -= 255 * F, b[I + 0] = s * e, b[I + 1] = u * e, b[I + 2] = x * e, b[I + 3] = p * e, I += c, F = a[C + 7], s += a[C + 4] * F, u += a[C + 5] * F, x += a[C + 6] * F, p += 255 * F, F = a[y + 7], s -= a[y + 4] * F, u -= a[y + 5] * F, x -= a[y + 6] * F, p -= 255 * F, b[I + 0] = s * e, b[I + 1] = u * e, b[I + 2] = x * e, b[I + 3] = p * e, I += c, F = a[C + 11], s += a[C + 8] * F, u += a[C + 9] * F, x += a[C + 10] * F, p += 255 * F, F = a[y + 11], s -= a[y + 8] * F, u -= a[y + 9] * F, x -= a[y + 10] * F, p -= 255 * F, b[I + 0] = s * e, b[I + 1] = u * e, b[I + 2] = x * e, b[I + 3] = p * e, I += c, F = a[C + 15], s += a[C + 12] * F, u += a[C + 13] * F, x += a[C + 14] * F, p += 255 * F, F = a[y + 15], s -= a[y + 12] * F, u -= a[y + 13] * F, x -= a[y +
                        14] * F, p -= 255 * F, y += 16, C += 16;
                for (; E + h < k; ++E) b[I + 0] = s * e, b[I + 1] = u * e, b[I + 2] = x * e, b[I + 3] = p * e, F = a[C + 3], s += a[C + 0] * F, u += a[C + 1] * F, x += a[C + 2] * F, p += 255 * F, F = a[y + 3], s -= a[y + 0] * F, u -= a[y + 1] * F, x -= a[y + 2] * F, p -= 255 * F, y += 4, C += 4, I += c;
                for (; E < k; ++E) b[I + 0] = s * e, b[I + 1] = u * e, b[I + 2] = x * e, b[I + 3] = p * e, F = a[y + 3], s -= a[y + 0] * F, u -= a[y + 1] * F, x -= a[y + 2] * F, p -= 255 * F, y += 4, I += c;
                r += d
            }
        },
        Zg = function(a, b, c, d, e, f, h, k, n) {
            for (var r = 0, t = 0; t < n; ++t) {
                for (var p = 0, s = 0, u = 0, x = 0, y = t * k * 4, C = y, F = 0; F < h; ++F) s += a[C + 0], u += a[C + 1], x += a[C + 2], p += a[C + 3], C += 4;
                for (var E = r, I, F =
                    0; F < f; ++F) I = 255 / p, b[E + 0] = s * I, b[E + 1] = u * I, b[E + 2] = x * I, b[E + 3] = p * e, F + h < k && (s += a[C + 0], u += a[C + 1], x += a[C + 2], p += a[C + 3], C += 4), E += c;
                for (; F + h + 4 <= k; F += 4) I = 255 / p, b[E + 0] = s * I, b[E + 1] = u * I, b[E + 2] = x * I, b[E + 3] = p * e, E += c, s += a[C + 0] - a[y + 0], u += a[C + 1] - a[y + 1], x += a[C + 2] - a[y + 2], p += a[C + 3] - a[y + 3], I = 255 / p, b[E + 0] = s * I, b[E + 1] = u * I, b[E + 2] = x * I, b[E + 3] = p * e, E += c, s += a[C + 4] - a[y + 4], u += a[C + 5] - a[y + 5], x += a[C + 6] - a[y + 6], p += a[C + 7] - a[y + 7], I = 255 / p, b[E + 0] = s * I, b[E + 1] = u * I, b[E + 2] = x * I, b[E + 3] = p * e, E += c, s += a[C + 8] - a[y + 8], u += a[C + 9] - a[y + 9], x += a[C + 10] - a[y + 10], p +=
                    a[C + 11] - a[y + 11], I = 255 / p, b[E + 0] = s * I, b[E + 1] = u * I, b[E + 2] = x * I, b[E + 3] = p * e, E += c, s += a[C + 12] - a[y + 12], u += a[C + 13] - a[y + 13], x += a[C + 14] - a[y + 14], p += a[C + 15] - a[y + 15], y += 16, C += 16;
                for (; F + h < k; ++F) I = 255 / p, b[E + 0] = s * I, b[E + 1] = u * I, b[E + 2] = x * I, b[E + 3] = p * e, s += a[C + 0] - a[y + 0], u += a[C + 1] - a[y + 1], x += a[C + 2] - a[y + 2], p += a[C + 3] - a[y + 3], y += 4, C += 4, E += c;
                for (; F < k; ++F) I = 255 / p, b[E + 0] = s * I, b[E + 1] = u * I, b[E + 2] = x * I, b[E + 3] = p * e, s -= a[y + 0], u -= a[y + 1], x -= a[y + 2], p -= a[y + 3], y += 4, E += c;
                r += d
            }
        };
    Wg.prototype.apply = function(a, b) {
        for (var c = 20 * b.Qa.l, d = Math.max(20 * a.x * b.Qa.n | 0, 1), c = Math.max(a.y * c | 0, 1), e = a.quality, f = b.Ia(), h = b.Xa(), k = b.getImageData(), n = k.data, r = b.createImageData().data, t = e & 1, p, s, u = Yg, x = 1; x < e; ++x) p = (d - t) / 2 | 0, s = d - p, u(n, r, 4, 4 * f, 1 / d, p, s, f, h), t ^= 1, p = n, n = r, r = p, u = Xg;
        e & 1 && (d = d - 1 | 1);
        p = (d - t) / 2 | 0;
        u(n, r, 4 * h, 4, 1 / d, p, d - p, f, h);
        p = n;
        n = r;
        r = p;
        u = Xg;
        t = e & 1;
        for (x = 1; x < e; ++x) p = (c - t) / 2 | 0, s = c - p, u(n, r, 4, 4 * h, 1 / c, p, s, h, f), t ^= 1, p = n, n = r, r = p;
        u = Zg;
        e & 1 && (c = c - 1 | 1);
        p = (c - t) / 2 | 0;
        u(n, r, 4 * f, 4, 1 / c, p, c - p, h, f);
        b.putImageData(k)
    };
    var $g = function() {};
    v($g, Ug);
    ef.i(re, $g);
    $g.prototype.apply = function(a, b) {
        for (var c = b.getImageData(), d = c.data, e = a.matrix, f = e[0], h = e[1], k = e[2], n = e[3], r = 255 * e[4], t = e[5], p = e[6], s = e[7], u = e[8], x = 255 * e[9], y = e[10], C = e[11], F = e[12], E = e[13], I = 255 * e[14], fd = e[15], Yf = e[16], ec = e[17], fc = e[18], e = 255 * e[19], gb = 0, Gb = d.length; gb < Gb; gb += 4) {
            var Zf = gb,
                Qe = gb + 1,
                $f = gb + 2,
                ag = gb + 3,
                Ed = d[Zf],
                xb = d[Qe],
                gc = d[$f],
                oe = d[ag];
            d[Zf] = f * Ed + h * xb + k * gc + n * oe + r;
            d[Qe] = t * Ed + p * xb + s * gc + u * oe + x;
            d[$f] = y * Ed + C * xb + F * gc + E * oe + I;
            d[ag] = fd * Ed + Yf * xb + ec * gc + fc * oe + e
        }
        b.putImageData(c)
    };
    var ah = function() {};
    v(ah, Ug);
    var bh = function(a, b, c, d, e, f, h, k, n, r) {
            for (var t = 0; t < r; ++t) {
                for (var p = 0, s = t * n * 4 + b, u = s, x = 0; x < k; ++x) p += a[u], u += 4;
                for (var y = c, x = 0; x < h; ++x) a[y] = p * f, x + k < n && (p += a[u], u += 4), y += d;
                for (; x + k + 4 <= n; x += 4) a[y] = p * f, y += d, p += a[u] - a[s], a[y] = p * f, y += d, p += a[u + 4] - a[s + 4], a[y] = p * f, y += d, p += a[u + 8] - a[s + 8], a[y] = p * f, y += d, p += a[u + 12] - a[s + 12], s += 16, u += 16;
                for (; x + k < n; ++x) a[y] = p * f, p += a[u] - a[s], s += 4, u += 4, y += d;
                for (; x < n; ++x) a[y] = p * f, p -= a[s], s += 4, y += d;
                c += e
            }
        },
        ch = function(a, b, c, d, e, f, h, k) {
            e = Math.max(a.x * e | 0, 1);
            f = Math.max(a.y * f | 0, 1);
            a = a.quality;
            if (0 < a && 1 < e * f) {
                for (var n = a & 1, r, t, p = 3, s = 2, u = 1; u < a; ++u) r = (e - n) / 2 | 0, t = e - r, bh(b, p, s, 4, 4 * c, 1 / e, r, t, c, d), n ^= 1, r = p, p = s, s = r;
                a & 1 && (e = e - 1 | 1);
                r = (e - n) / 2 | 0;
                bh(b, p, s, 4 * d, 4, 1 / e, r, e - r, c, d);
                r = p;
                p = s;
                s = r;
                n = a & 1;
                for (u = 1; u < a; ++u) r = (f - n) / 2 | 0, t = f - r, bh(b, p, s, 4, 4 * d, 1 / f, r, t, d, c), n ^= 1, r = p, p = s, s = r;
                a & 1 && (f = f - 1 | 1);
                r = (f - n) / 2 | 0;
                bh(b, p, h, 4 * c, 4, k / f, r, f - r, d, c)
            } else
                for (e = 3; e < c * d * 4; e += 4, h += 4) b[h] = b[e] * k
        },
        dh = function(a, b, c, d, e, f) {
            ch(a, b, c, d, e, f, 1, 1);
            var h = a.distance;
            e = Math.round(Math.cos(a.angle) * h * e);
            f = Math.round(Math.sin(a.angle) * h *
                f);
            a = a.strength;
            a *= .5;
            for (h = 0; h < d; ++h)
                for (var k = 0; k < c; ++k) {
                    var n = 0,
                        r = 0;
                    0 <= k + e && k + e < c && 0 <= h + f && h + f < d && (n = b[4 * ((h + f) * c + k + e) + 1]);
                    0 <= k - e && k - e < c && 0 <= h - f && h - f < d && (r = b[4 * ((h - f) * c + k - e) + 1]);
                    b[4 * (h * c + k) + 3] = (n - r) * a + 127.5
                }
        },
        fh = function(a, b, c, d) {
            for (var e = new Uint8Array(1024), f = 0, h = eh(b[f]), k = c[f], n = d[f], r = 0, t = h, p = k, s = 0; 256 > s; ++s) {
                if (s >= n && (t = h, p = k, r = n, ++f < d.length ? (h = eh(b[f]), k = c[f], n = d[f]) : n = 255, s == r)) {
                    e[4 * s + 0] = t.Na;
                    e[4 * s + 1] = t.Ma;
                    e[4 * s + 2] = t.La;
                    e[4 * s + 3] = 255 * p;
                    continue
                }
                var u = (s - r) / (n - r);
                e[4 * s + 0] = t.Na + (h.Na - t.Na) *
                    u;
                e[4 * s + 1] = t.Ma + (h.Ma - t.Ma) * u;
                e[4 * s + 2] = t.La + (h.La - t.La) * u;
                e[4 * s + 3] = 255 * (p + (k - p) * u)
            }
            b = a.length;
            for (c = 0; c < b; c += 4) d = 4 * a[c + 3], a[c + 0] = e[d + 0], a[c + 1] = e[d + 1], a[c + 2] = e[d + 2], a[c + 3] = e[d + 3]
        };
    var gh = function() {};
    v(gh, ah);
    ef.i(Ae, gh);
    gh.prototype.apply = function(a, b) {
        var c = b.Ia(),
            d = b.Xa(),
            e = document.createElement("canvas");
        e.width = c;
        e.height = d;
        var f = e.getContext("2d"),
            h = b.getImageData();
        dh(a, h.data, c, d, 20 * b.Qa.n, 20 * b.Qa.l);
        for (var k = eh(a.highlight), n = eh(a.shadow), c = h.data, d = k.Na, r = k.Ma, t = k.La, k = k.lb, p = n.Na, s = n.Ma, u = n.La, n = n.lb, x = c.length, k = 2 * k, n = 2 * n, y = 0; y < x; y += 4) 127.5 < c[y + 3] ? (c[y + 0] = d, c[y + 1] = r, c[y + 2] = t, c[y + 3] = (c[y + 3] - 127.5) * n) : (c[y + 0] = p, c[y + 1] = s, c[y + 2] = u, c[y + 3] = (127.5 - c[y + 3]) * k);
        f.putImageData(h, 0, 0);
        b.Tj(e, a.Ea.ge)
    };
    var hh = function() {};
    v(hh, Ug);
    ef.i(De, hh);
    hh.prototype.apply = function(a, b) {
        for (var c = b.Ia(), d = b.Xa(), e = b.createImageData(), f = e.data, h = b.getImageData().data, k = a.divisor || 1, n = a.matrixX, r = a.matrixY, t = new Float32Array(n * r), p = 0; p < a.matrix.length; ++p) t[p] = a.matrix[p] / k;
        var k = n / 2 | 0,
            p = r / 2 | 0,
            s = a.bias,
            u = a.preserveAlpha,
            x = a.clamp;
        if (!x) var y = a.color >> 24 & 255,
            C = a.color >> 16 & 255,
            F = a.color >> 8 & 255,
            E = a.color & 255;
        for (var I = 0, fd = 0; I < d; ++I)
            for (var Yf = 0; Yf < c; ++Yf, fd += 4) {
                for (var ec = s, fc = s, gb = s, Gb = s, Zf = 0, Qe = 0; Qe < r; ++Qe)
                    for (var $f = I + Qe - p, ag = Math.max(0, Math.min($f,
                        d - 1)), Ed = 0; Ed < n; ++Ed, ++Zf) {
                        var xb = t[Zf],
                            gc = Yf + Ed - k,
                            oe = Math.max(0, Math.min(gc, c - 1)),
                            pe = 4 * (ag * c + oe);
                        x || oe === gc && ag === $f ? u ? (ec += xb * h[pe], fc += xb * h[pe + 1], gb += xb * h[pe + 2]) : (gc = h[pe + 3], ec += xb * gc * h[pe] / 255, fc += xb * gc * h[pe + 1] / 255, gb += xb * gc * h[pe + 2] / 255, Gb += xb * gc) : (ec += xb * C, fc += xb * F, gb += xb * E, Gb += xb * y)
                    }
                u ? Gb = h[fd + 3] : 0 >= Gb ? ec = fc = gb = Gb = 0 : (255 < Gb && (Gb = 255), ec = 255 * ec / Gb, fc = 255 * fc / Gb, gb = 255 * gb / Gb);
                f[fd] = ec;
                f[fd + 1] = fc;
                f[fd + 2] = gb;
                f[fd + 3] = Gb
            }
        b.putImageData(e)
    };
    var ih = function() {};
    v(ih, ah);
    ef.i(Ke, ih);
    ih.prototype.apply = function(a, b) {
        var c = b.Ia(),
            d = b.Xa(),
            e = document.createElement("canvas");
        e.width = c;
        e.height = d;
        var f = e.getContext("2d"),
            h = b.getImageData();
        dh(a, h.data, c, d, 20 * b.Qa.n, 20 * b.Qa.l);
        fh(h.data, a.ec, a.Zb, a.fc);
        f.putImageData(h, 0, 0);
        b.Tj(e, a.Ea.ge)
    };
    var jh = function() {};
    v(jh, ah);
    ef.i(Oe, jh);
    jh.prototype.apply = function(a, b) {
        var c = 20 * b.Qa.n,
            d = 20 * b.Qa.l,
            e = b.Ia(),
            f = b.Xa(),
            h = a.distance,
            k = Math.cos(a.angle) * h * c,
            n = Math.sin(a.angle) * h * d,
            h = document.createElement("canvas");
        h.width = e;
        h.height = f;
        var r = h.getContext("2d");
        r.drawImage(b.Ce(), k, n);
        k = r.getImageData(0, 0, e, f);
        ch(a, k.data, e, f, c, d, 3, a.strength);
        fh(k.data, a.ec, a.Zb, a.fc);
        r.putImageData(k, 0, 0);
        b.Tj(h, a.Ea.ge)
    };
    var kh = new Gg("geometry");
    var lh = function(a) {
        this.m = a;
        this.vn = this.Nd = null
    };
    kh.i(jf, lh);
    lh.prototype.tq = function(a) {
        if (this.m.ia || !a.Sc(this.vn)) return this.vn = this.Nd = null, this.m.ia = 0, this.Rf(a);
        null == this.Nd && (this.Nd = this.Rf(a), this.vn = a);
        return this.Nd
    };
    lh.prototype.ka = function() {};
    var mh = function(a) {
        lh.call(this, a)
    };
    v(mh, lh);
    kh.i(qf, mh);
    kh.i(sf, mh);
    mh.prototype.Rf = function(a) {
        var b = this.m.definition;
        a = this.m.Fa().multiply(a);
        var c = "";
        if (0 == this.m.vc()) c = b.Rf().Hk(a);
        else
            for (var d = 0; d < b.paths.length; d++)
                if (null != b.paths[d].fill) var e = b.paths[d].data.tb(this.m),
                    c = c + e.Hk(a); return c
    };
    var nh = function(a) {
        lh.call(this, a)
    };
    v(nh, lh);
    kh.i(Hf, nh);
    nh.prototype.Rf = function(a) {
        for (var b = this.m.definition, c = b.records, d = new oh, e = 0; e < c.length; e++) var f = b.lm(e),
            d = d.concat(f);
        a = this.m.Fa().multiply(a);
        return d.Hk(a)
    };
    var ph = new Jg("nul");
    ba("swiffy.NUL", ph, void 0);
    var qh = function(a) {
        this.c = a
    };
    ph.Yo(qh);
    g = qh.prototype;
    g.Do = function() {};
    g.In = function() {
        var a = this.c.ha;
        a.ia & 1048576 && (a.ia &= -1048577, a.ia && a.Xb(ph).ed(a, 0))
    };
    g.um = function() {
        return null
    };
    g.Zi = function() {};
    g.ka = function() {
        this.c.ha.Ai()
    };
    var rh = function(a, b, c) {
            a.setAttribute("type", "linear");
            a.setAttribute("slope", b);
            a.setAttribute("intercept", c)
        },
        sh = function(a, b, c) {
            if (0 >= c) a.setAttribute("type", "linear"), a.setAttribute("slope", b), a.setAttribute("intercept", c), a.removeAttribute("tableValues");
            else {
                a.setAttribute("type", "table");
                a.removeAttribute("slope");
                a.removeAttribute("intercept");
                for (var d = "0", e = 1; 15 >= e; ++e) d += " ", d += Math.min(e * b / 15 + c, 1).toFixed(3);
                a.setAttribute("tableValues", d)
            }
        },
        th = function(a, b, c, d, e, f, h) {
            if (c != e || d != f)
                if (1 !=
                    c || 0 != d || b.parentNode) h(b, c, d / 255), b.parentNode || a.appendChild(b)
        },
        uh = function(a, b) {
            var c = null,
                d = null,
                e = null,
                f = null,
                h = null,
                k = null,
                n = new id(1, 0, 1, 0, 1, 0, 1, 0);
            return function() {
                var r = this.m.Mc();
                r.ai() ? (c && c.parentNode && (zb(c), a.removeAttribute("filter")), a.setAttribute("opacity", r.sa.toFixed(3))) : (c || (c = B("filter"), c.id = zc.Jb().Kb(), b ? (c.setAttribute("filterUnits", "userSpaceOnUse"), b.Wd(c)) : (c.setAttribute("filterUnits", "objectBoundingBox"), c.setAttribute("x", 0), c.setAttribute("y", 0), c.setAttribute("width",
                    1), c.setAttribute("height", 1)), k = B("feComponentTransfer"), c.appendChild(k), d = B("feFuncR"), e = B("feFuncG"), f = B("feFuncB"), h = B("feFuncA"), h.setAttribute("type", "linear")), a.removeAttribute("opacity"), c.parentNode || (a.appendChild(c), a.setAttribute("filter", "url(#" + c.id + ")")), th(k, d, r.Ca, r.xa, n.Ca, n.xa, rh), th(k, e, r.Ba, r.wa, n.Ba, n.wa, rh), th(k, f, r.Aa, r.va, n.Aa, n.va, rh), th(k, h, r.sa, r.ya, n.sa, n.ya, sh), n = r)
            }
        };
    var vh = function(a, b) {
        this.oa = a;
        this.Tc = b;
        this.lh = []
    };
    vh.prototype.Lb = function(a) {
        this.sv();
        for (var b = [], c = null, d = this.oa.Ra; d; d = d.nextSibling)
            if (this.lh.push(d), !d.Eb) {
                for (; 0 < b.length && d.depth > b[b.length - 1].Pc();) b.pop();
                var e = wh(d),
                    f = e.Lb(a, b),
                    c = xh(this.Tc, c, f);
                !d.ci() || d instanceof yh || b.push(e)
            }
        zh(this.Tc, c)
    };
    vh.prototype.sv = function() {
        for (var a = this.lh.length - 1; 0 <= a; --a) {
            var b = this.lh[a];
            b.be() && b.Ai()
        }
        this.lh = []
    };
    vh.prototype.ka = function() {
        for (var a = 0; a < this.lh.length; ++a) this.lh[a].Ai()
    };
    var Ah = new Gg("svg");
    ba("swiffy.SVG", Ah, void 0);
    var wh = function(a) {
        var b = Ah;
        a.ci() ? b = Bh : !Ld && a.Pj() && (b = Ch);
        return a.Xb(b)
    };
    var Dh = function(a) {
        this.filter = a;
        this.ic = [];
        this.Ni = [];
        this.Br = null
    };
    g = Dh.prototype;
    g.Oq = function(a, b) {
        if (this.filter.ia || this.Br != a) this.Br = a, this.ic = [], this.Ni = [], this.Td(a);
        for (var c = 0; c < this.ic.length; c++) b.appendChild(this.ic[c])
    };
    g.Td = function() {};
    g.mj = function(a, b, c, d) {
        var e = B("feBlend");
        e.setAttribute("mode", a);
        l(c) && e.setAttribute("in", c);
        e.setAttribute("in2", b);
        l(d) && e.setAttribute("result", d);
        this.ic.push(e)
    };
    g.wo = function(a, b, c, d, e) {
        var f = B("feGaussianBlur");
        l(d) && f.setAttribute("in", d);
        l(e) && f.setAttribute("result", e);
        this.Ni.push(function(d) {
            var e = new Uc(b, c);
            e.ja(d);
            f.setAttribute("stdDeviation", he(a, e.x) + " " + he(a, e.y))
        });
        this.ic.push(f)
    };
    g.rc = function(a, b, c, d, e, f, h) {
        var k = B("feComponentTransfer");
        l(f) && k.setAttribute("in", f);
        l(h) && k.setAttribute("result", h);
        l(e) || (e = "linear");
        f = ["feFuncR", "feFuncG", "feFuncB", "feFuncA"];
        a = [a, b, c, d];
        for (b = 0; 4 > b; ++b) {
            c = null;
            for (var n in a[b]) null == c && (c = B(f[b]), c.setAttribute("type", e)), c.setAttribute(n, a[b][n]);
            c && k.appendChild(c)
        }
        this.ic.push(k);
        return k
    };
    g.Lv = function(a, b, c) {
        a = eh(a);
        this.rc({
            intercept: a.Na / 255,
            slope: 0
        }, {
            intercept: a.Ma / 255,
            slope: 0
        }, {
            intercept: a.La / 255,
            slope: 0
        }, {
            intercept: 0,
            slope: a.lb * b
        }, void 0, void 0, c)
    };
    g.Mv = function(a, b, c) {
        a = eh(a);
        this.rc({
            intercept: a.Na / 255,
            slope: 0
        }, {
            intercept: a.Ma / 255,
            slope: 0
        }, {
            intercept: a.La / 255,
            slope: 0
        }, {
            intercept: a.lb * b,
            slope: -a.lb * b
        }, void 0, void 0, c)
    };
    g.ur = function(a, b, c, d, e, f) {
        var h = B("feColorMatrix");
        h.setAttribute("type", "matrix");
        h.setAttribute("values", "0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1");
        this.ic.push(h);
        if (0 == d) a = eh(a[0]), b = {
            Na: [a.Na, a.Na],
            Ma: [a.Ma, a.Ma],
            La: [a.La, a.La],
            lb: [b[0], b[0]]
        };
        else {
            for (var h = {
                Na: Array(256),
                Ma: Array(256),
                La: Array(256),
                lb: Array(256)
            }, k = 0, n = eh(a[k]), r = b[k], t = c[k] / d, p = 0, s = n, u = r, x = 0; 256 > x; ++x) {
                if (x >= t && (s = n, u = r, p = t, ++k < c.length ? (n = eh(a[k]), r = b[k], t = c[k] / d) : t = 255, x == p)) {
                    h.Na[x] = s.Na / 255;
                    h.Ma[x] = s.Ma / 255;
                    h.La[x] = s.La /
                        255;
                    h.lb[x] = u;
                    continue
                }
                var y = (x - p) / (t - p);
                h.Na[x] = (s.Na + (n.Na - s.Na) * y) / 255;
                h.Ma[x] = (s.Ma + (n.Ma - s.Ma) * y) / 255;
                h.La[x] = (s.La + (n.La - s.La) * y) / 255;
                h.lb[x] = u + (r - u) * y
            }
            b = h
        }
        this.rc({
            tableValues: b.Na.join(" ")
        }, {
            tableValues: b.Ma.join(" ")
        }, {
            tableValues: b.La.join(" ")
        }, null, "discrete", void 0, "colors");
        this.rc(null, null, null, {
            tableValues: b.lb.join(" ")
        }, "discrete", e, "alpha");
        this.ac("in", "colors", "alpha", void 0, f)
    };
    g.ac = function(a, b, c, d, e) {
        var f = B("feComposite");
        l(e) && f.setAttribute("result", e);
        l(b) && f.setAttribute("in", b);
        l(c) && f.setAttribute("in2", c);
        f.setAttribute("operator", a);
        if (l(d))
            for (var h in d) f.setAttribute(h, d[h]);
        this.ic.push(f)
    };
    g.Pv = function(a) {
        var b = B("feFlood");
        l(a) && b.setAttribute("result", a);
        b.setAttribute("flood-color", "black");
        this.ic.push(b)
    };
    g.kr = function(a, b) {
        var c = eh(a),
            d = B("feFlood");
        d.setAttribute("flood-color", c.toString());
        d.setAttribute("flood-opacity", c.lb * b);
        this.ic.push(d)
    };
    g.xo = function(a, b, c, d) {
        var e = B("feOffset");
        l(c) && e.setAttribute("in", c);
        l(d) && e.setAttribute("result", d);
        this.Gx(e, a, b);
        this.ic.push(e)
    };
    g.Gx = function(a, b, c) {
        var d = Math.cos(b) * c * 20,
            e = Math.sin(b) * c * 20;
        this.Ni.push(function(b) {
            var c = new Uc(d, e);
            c.ja(b);
            a.setAttribute("dx", c.x);
            a.setAttribute("dy", c.y)
        })
    };
    g.Lk = function(a, b) {
        var c = this.ic;
        return 0 < c.length ? (c[c.length - 1].setAttribute("result", a), a) : b
    };
    g.Lb = function(a, b) {
        if (a & 2050)
            for (var c = 0; c < this.Ni.length; ++c) this.Ni[c](b)
    };
    g.ka = function() {};
    var Eh = function(a) {
        Dh.call(this, a);
        this.Np = null
    };
    v(Eh, Dh);
    Ah.i(le, Eh);
    g = Eh.prototype;
    g.Td = function(a) {
        this.Np = this.rc({
            intercept: 0
        }, {
            intercept: 0
        }, {
            intercept: 0
        }, {
            intercept: 0
        }, "linear", a, "BlendSource");
        switch (this.filter.mode) {
            case 5:
            case 4:
            case 2:
            case 3:
                this.Ow(Yc[this.filter.mode], "BlendSource");
                break;
            case 7:
                this.Nw("BlendSource");
                break;
            case 6:
                this.Pw("BlendSource");
                break;
            case 8:
                this.Tw("BlendSource");
                break;
            case 13:
                this.Qw("BlendSource");
                break;
            case 12:
                this.Sw("BlendSource");
                break;
            case 9:
                this.Rw("BlendSource");
                break;
            case 10:
            case 100:
                this.kr(0, 0)
        }
    };
    g.wv = function(a) {
        for (var b = this.Np, c = 0; c < b.childNodes.length; ++c) {
            var d = b.childNodes[c];
            switch (d.localName) {
                case "feFuncR":
                    d.setAttribute("slope", a.Ca);
                    d.setAttribute("intercept", a.xa / 255);
                    break;
                case "feFuncG":
                    d.setAttribute("slope", a.Ba);
                    d.setAttribute("intercept", a.wa / 255);
                    break;
                case "feFuncB":
                    d.setAttribute("slope", a.Aa);
                    d.setAttribute("intercept", a.va / 255);
                    break;
                case "feFuncA":
                    sh(d, a.sa, a.ya / 255)
            }
        }
    };
    g.Ow = function(a, b) {
        var c = this.jj(b);
        this.mj(a, "BackgroundImage", c);
        this.ac("in", void 0, b, void 0, "result")
    };
    g.Nw = function(a) {
        this.ac("arithmetic", a, "BackgroundImage", {
            k2: 1,
            k3: 1
        })
    };
    g.Tw = function(a) {
        var b = this.fo(a);
        this.eo(b, "BackgroundImage");
        this.dg(a)
    };
    g.Pw = function(a) {
        var b = this.jj(a),
            c = this.fo(a),
            d = this.jj("BackgroundImage"),
            e = this.fo("BackgroundImage"),
            b = this.eo(b, e),
            c = this.eo(c, d);
        this.ac("arithmetic", b, c, {
            k2: 1,
            k3: 1
        });
        this.Sk(a)
    };
    g.Rw = function(a) {
        this.rc({
            slope: -1,
            intercept: 1
        }, {
            slope: -1,
            intercept: 1
        }, {
            slope: -1,
            intercept: 1
        }, {
            slope: 1,
            intercept: 0
        }, "linear", "BackgroundImage");
        this.dg(a)
    };
    g.Qw = function(a) {
        var b = this.jj("BackgroundImage");
        this.rc({
            slope: 2,
            intercept: -1
        }, {
            slope: 2,
            intercept: -1
        }, {
            slope: 2,
            intercept: -1
        }, {
            slope: 0,
            intercept: 1
        }, "linear", a);
        this.mj("screen", b, void 0, "blend");
        this.rc({
            slope: 2,
            intercept: 0
        }, {
            slope: 2,
            intercept: 0
        }, {
            slope: 2,
            intercept: 0
        }, {
            slope: 0,
            intercept: 1
        }, "linear", a);
        this.mj("multiply", "blend");
        this.Sk(a)
    };
    g.Sw = function(a) {
        var b = this.jj(a);
        this.rc({
            slope: 2,
            intercept: -1
        }, {
            slope: 2,
            intercept: -1
        }, {
            slope: 2,
            intercept: -1
        }, {}, "linear", "BackgroundImage");
        this.mj("screen", b, void 0, "blend");
        this.rc({
            slope: 2,
            intercept: 0
        }, {
            slope: 2,
            intercept: 0
        }, {
            slope: 2,
            intercept: 0
        }, {}, "linear", "BackgroundImage");
        this.mj("multiply", "blend");
        this.ac("in", void 0, a, void 0, "result")
    };
    g.Sk = function(a) {
        this.ac("in", void 0, "BackgroundImage");
        this.dg(a)
    };
    g.dg = function(a) {
        this.ac("atop", void 0, a, void 0, "result")
    };
    g.eo = function(a, b) {
        var c = a + b;
        this.ac("arithmetic", a, b, {
            k2: 1,
            k3: 1,
            k4: -1
        }, c);
        return c
    };
    g.jj = function(a) {
        var b = "op" + a;
        this.rc({}, {}, {}, {
            slope: 0,
            intercept: 1
        }, "linear", a, b);
        return b
    };
    g.fo = function(a) {
        var b = "not" + a;
        this.rc({
            slope: -1,
            intercept: 1
        }, {
            slope: -1,
            intercept: 1
        }, {
            slope: -1,
            intercept: 1
        }, {
            slope: 0,
            intercept: 1
        }, "linear", a, b);
        return b
    };
    var Fh = function(a) {
        Dh.call(this, a)
    };
    v(Fh, Dh);
    Ah.i(me, Fh);
    Fh.prototype.Td = function(a) {
        var b = this.filter;
        this.wo(b.quality, b.x, b.y, a, "result")
    };
    var Gh = function(a) {
        Dh.call(this, a)
    };
    v(Gh, Dh);
    Ah.i(re, Gh);
    Gh.prototype.Td = function(a) {
        var b = B("feColorMatrix");
        b.setAttribute("in", a);
        b.setAttribute("result", "result");
        b.setAttribute("type", "matrix");
        b.setAttribute("values", this.filter.matrix.join(" "));
        this.ic.push(b)
    };
    var Hh = function(a) {
        Dh.call(this, a)
    };
    v(Hh, Dh);
    Hh.prototype.br = function(a) {
        var b = this.filter;
        0 != b.distance && (this.xo(b.angle, b.distance, a), a = void 0);
        var c = b.x,
            d = b.y;
        (0 < c || 0 < d) && this.wo(b.quality, c, d, a)
    };
    Hh.prototype.Fq = function(a) {
        var b = this.filter;
        if (0 < b.x || 0 < b.y) this.wo(b.quality, b.x, b.y, a, "blur"), a = "blur";
        this.xo(b.angle, -b.distance, a, "highlight");
        this.xo(b.angle, b.distance, a, "shadow");
        this.ac("arithmetic", "highlight", "shadow", {
            k2: .5 * b.strength,
            k3: -.5 * b.strength,
            k4: .5
        })
    };
    Hh.prototype.mk = function(a, b) {
        this.filter.Ea.apply(this, a, b);
        this.Lk("result", a)
    };
    var Ih = function(a) {
        Dh.call(this, a)
    };
    v(Ih, Hh);
    Ah.i(Ae, Ih);
    Ih.prototype.Td = function(a) {
        var b = this.filter;
        this.Fq(a);
        var c = B("feColorMatrix");
        c.setAttribute("type", "matrix");
        c.setAttribute("values", "0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0");
        this.ic.push(c);
        c = eh(b.highlight);
        b = eh(b.shadow);
        this.rc({
            tableValues: b.Na / 255 + " " + c.Na / 255
        }, {
            tableValues: b.Ma / 255 + " " + c.Ma / 255
        }, {
            tableValues: b.La / 255 + " " + c.La / 255
        }, {
            tableValues: b.lb + " 0 " + c.lb
        }, "discrete", void 0, "bevel").lastChild.setAttribute("type", "table");
        this.mk("bevel", a)
    };
    var Jh = function(a) {
        Dh.call(this, a)
    };
    v(Jh, Dh);
    Ah.i(De, Jh);
    Jh.prototype.Td = function(a) {
        var b = B("feConvolveMatrix");
        b.setAttribute("in", a);
        b.setAttribute("result", "result");
        b.setAttribute("order", this.filter.matrixX + "," + this.filter.matrixY);
        b.setAttribute("divisor", this.filter.divisor);
        b.setAttribute("bias", this.filter.bias / 255);
        b.setAttribute("kernelMatrix", this.filter.matrix.slice().reverse().join(" "));
        b.setAttribute("preserveAlpha", this.filter.preserveAlpha);
        this.ic.push(b)
    };
    var Kh = function(a) {
        Dh.call(this, a)
    };
    v(Kh, Hh);
    Ah.i(Ge, Kh);
    Kh.prototype.Td = function(a) {
        var b = this.filter;
        this.br(a);
        var c = "inner" == b.Ea.type,
            d = b.strength;
        1 < d && (this.rc(null, null, null, {
            slope: d,
            intercept: c ? 1 - d : 0
        }), d = 1);
        c ? b.cr() ? this.Mv(b.color, d, "shadow") : (c = this.Lk("shadow", a), this.kr(b.color, d), this.ac("out", void 0, c, null, "shadow")) : this.Lv(b.color, d, "shadow");
        this.mk("shadow", a)
    };
    var Lh = function(a) {
        Dh.call(this, a)
    };
    v(Lh, Hh);
    Ah.i(Ke, Lh);
    Lh.prototype.Td = function(a) {
        var b = this.filter;
        this.Fq(a);
        var c = this.Lk("bevel", a);
        this.ur(b.ec, b.Zb, b.fc, 1, c, "bevel");
        this.mk("bevel", a)
    };
    var Mh = function(a) {
        Dh.call(this, a)
    };
    v(Mh, Hh);
    Ah.i(Oe, Mh);
    Mh.prototype.Td = function(a) {
        var b = this.filter;
        this.br(a);
        var c = this.Lk("shadow", a);
        0 < b.Zb[0] && !b.cr() && (this.Pv("black"), this.ac("in", c, "black", void 0, "shadow"), c = "shadow");
        this.ur(b.ec, b.Zb, b.fc, b.strength, c, "shadow");
        this.mk("shadow", a)
    };
    var Nh = function(a) {
        Dh.call(this, a)
    };
    v(Nh, Dh);
    Ah.i(Se, Nh);
    Nh.prototype.apply = function() {};
    Nh.prototype.Td = function() {};
    var Oh = {
            vc: function() {
                return 0
            }
        },
        Ph = function(a, b, c) {
            return ea(a) ? 1 == a.length ? new wf(c(a[0])) : new b(c(a[0]), c(a[1])) : new wf(c(a))
        },
        wf = function(a) {
            this.value = a
        };
    wf.prototype.Kf = !0;
    wf.prototype.tb = function() {
        return this.value
    };
    var Qh = function(a, b) {
        this.from = a;
        this.to = b
    };
    Qh.prototype.Kf = !1;
    Qh.prototype.tb = function(a) {
        return Rh(this.from, this.to, a.vc())
    };
    var Sh = function(a) {
            return Ph(a, Qh, Pa)
        },
        Th = function(a, b) {
            this.from = a;
            this.to = b
        };
    Th.prototype.Kf = !1;
    Th.prototype.tb = function(a) {
        var b = this.from,
            c = this.to;
        a = a.vc();
        return dd(Rh(b.n, c.n, a), Rh(b.u, c.u, a), Rh(b.o, c.o, a), Rh(b.l, c.l, a), Rh(b.p, c.p, a), Rh(b.q, c.q, a))
    };
    var Vh = function(a, b, c) {
            return a ? Ph(a, Th, function(a) {
                return Uh(a).Mi(b, b)
            }) : c
        },
        Wh = function(a, b) {
            this.from = a;
            this.to = b
        };
    Wh.prototype.Kf = !1;
    Wh.prototype.tb = function(a) {
        var b = this.from,
            c = this.to;
        a = a.vc();
        return new ed(Rh(b.Na, c.Na, a), Rh(b.Ma, c.Ma, a), Rh(b.La, c.La, a), Rh(b.lb, c.lb, a))
    };
    var Xh = function(a, b) {
        this.from = a;
        this.to = b;
        this.mx = a.wt();
        this.nx = b.wt()
    };
    Xh.prototype.Kf = !1;
    Xh.prototype.tb = function(a) {
        a = a.vc();
        return 0 == a ? this.from : 1 == a ? this.to : this.mx.wx(this.nx, a)
    };
    var zf = function(a, b, c, d, e, f, h) {
            this.fill = c;
            this.color = b;
            this.Ug = Yh[d];
            this.bk = Yh[e];
            this.yp = Af[f];
            this.width = a;
            this.miter = l(h) ? h : null
        },
        Yh = ["round", "butt", "square"],
        yf = ["round", "none", "square"],
        Af = ["round", "bevel", "miter"];
    g = zf.prototype;
    g.qe = function(a, b) {
        return this.fill ? this.fill.qe(a, b) : null
    };
    g.Qk = !1;
    g.Yb = !1;
    g.Hs = function(a, b, c, d, e) {
        "butt" != d && (b = B("path"), b.setAttribute("stroke-linecap", d), b.setAttribute("stroke-linejoin", "bevel"), a.appendChild(b), c.wy(b, e))
    };
    g.Wf = function(a, b, c, d, e, f) {
        if (this.Ug == this.bk) d.setAttribute("stroke-linecap", this.Ug);
        else {
            var h = B("g");
            this.Hs(h, a, c, this.Ug, function(a) {
                return a.Ap()
            });
            this.Hs(h, a, c, this.bk, function(a) {
                return a.zp()
            });
            h.appendChild(d);
            d = h
        }
        a.setAttribute(d, "stroke-width", this.width, Zh);
        d.setAttribute("stroke-linejoin", this.yp);
        null != this.miter && d.setAttribute("stroke-miterlimit", this.miter);
        if (this.fill) return this.fill.Wf(a, b, c, d, e, f);
        a.setAttribute(d, f, this.color, $h);
        return d
    };
    g.Cc = function() {
        return !1
    };
    g.Gv = function(a, b, c, d, e) {
        if (this.fill) {
            c.save();
            var f = a.Bg(),
                h = b.mm(f, a.Da()),
                k = b.ji(h),
                n = k.pf(a.Da());
            n.beginPath();
            d.wg(n);
            n.strokeStyle = "rgb(0,0,0)";
            this.Im(a, k, n, d);
            n.globalCompositeOperation = "source-in";
            !Oc || $a ? (n.beginPath(), n.rect(f.k, f.j, f.width(), f.height()), this.fill.Cc(a, n, e)) : (d = k.ji(h), h = d.pf(a.Da()), h.beginPath(), h.rect(f.k, f.j, f.width(), f.height()), this.fill.Cc(a, h, e), k.Ie(d));
            b.Ie(k);
            c.restore()
        } else f = this.color.tb(a), f = e.apply(f), c.strokeStyle = f.Cd(), this.Im(a, b, c, d);
        return !0
    };
    g.Im = function(a, b, c, d) {
        var e = this.Ug != this.bk;
        c.lineCap = e ? "butt" : this.Ug;
        c.lineJoin = this.yp;
        null != this.miter && (c.miterLimit = this.miter);
        var f = this.width.tb(a),
            h = a.Da();
        a = b.Qa.n;
        b = b.Qa.l;
        var k = h.n + h.o,
            h = h.u + h.l;
        c.lineWidth = Math.max(f * Math.sqrt((k * k + h * h) / 2), 1 / Math.max(a, b));
        ai(c, a, b);
        e && (c.lineJoin = "bevel", c.beginPath(), c.lineCap = this.Ug, d.Ap().wg(c), ai(c, a, b), c.beginPath(), c.lineCap = this.bk, d.zp().wg(c), ai(c, a, b))
    };
    var ai = function(a, b, c) {
        a.save();
        a.setTransform(b, 0, 0, c, 0, 0);
        a.stroke();
        a.restore()
    };
    var bi = function() {};
    bi.prototype.Nb = function() {};
    var ci = [];
    var di = function() {};
    v(di, bi);
    g = di.prototype;
    g.yi = function() {};
    g.on = function() {};
    g.Pf = function() {};
    g.Zm = function() {};
    g.Io = function() {};
    g.yj = function() {};
    var fi = function(a, b) {
        for (var c = 0; c < a.length; ++c) {
            var d = a[c];
            if (d instanceof ei && d.depth == b) return c
        }
        return -1
    };
    di.prototype.Nb = function(a, b, c, d) {
        a.tags[d] || (a.tags[d] = []);
        a.tags[d].push(this)
    };
    var gi = function(a) {
        this.id = a;
        this.vj = null;
        this.ek = ""
    };
    v(gi, bi);
    g = gi.prototype;
    g.Sa = !1;
    g.Ja = function() {
        return null
    };
    g.Bc = function() {
        return null
    };
    g.mo = function(a) {
        this.vj = a;
        hi(a, this)
    };
    g.Nb = function(a, b, c) {
        c.Es(this.id, this)
    };
    var ii = function(a, b) {
        gi.call(this, a);
        this.ek = "";
        this.Id = b
    };
    v(ii, gi);
    var ji = function(a, b, c, d, e) {
        gi.call(this, a);
        this.trackAsMenu = b;
        this.records = c;
        this.actions = d;
        this.sounds = e
    };
    v(ji, gi);
    ci[10] = function(a, b, c) {
        for (var d = [], e = 0; a.records && e < a.records.length; e++) {
            var f = a.records[e],
                h = f.transform ? Uh(f.transform) : null,
                k = f.colortransform ? ki(f.colortransform) : null,
                n = void 0;
            if (f.filters)
                for (var n = [], r = 0; r < f.filters.length; r++) n.push(ge(f.filters[r]));
            l(f.id) && d.push(new li(c.af(f.id), f.depth, h, f.states, k, n, f.blendmode))
        }
        c = [];
        for (e = 0; a.actions && e < a.actions.length; e++) f = b.zf(mi), h = a.actions[e], c.push(new ni(f.zl(h.actions, void 0), h.key, h.events));
        b = [];
        for (e = 0; a.sounds && e < a.sounds.length; e++) f =
            a.sounds[e], b.push(new oi(f.events, f.sound));
        return new ji(a.id, a.trackAsMenu, d, c, b)
    };
    ji.prototype.Bc = function(a, b, c) {
        return new pi(this, a, b, c)
    };
    ji.prototype.Sa = !0;
    var li = function(a, b, c, d, e, f, h) {
            this.definition = a;
            this.depth = b;
            this.transform = c;
            this.states = d;
            this.Lp = e;
            this.filters = f;
            this.blendmode = h
        },
        ni = function(a, b, c) {
            this.actions = a;
            this.key = b;
            this.events = c
        },
        oi = function(a, b) {
            this.events = a;
            this.sound = b
        };
    var qi = function(a, b, c, d, e, f) {
        ii.call(this, a, null);
        this.data = b;
        this.mask = c;
        this.width = d;
        this.height = e;
        this.transparent = f;
        this.nb = this.Od = null;
        this.sn = ""
    };
    v(qi, ii);
    ci[8] = function(a) {
        return new qi(a.id, a.data, a.mask, a.width, a.height, !(!a.transparent && !a.mask))
    };
    g = qi.prototype;
    g.Bm = function() {
        return this.nb
    };
    g.Ja = function(a) {
        var b = this.Nv(this.data);
        this.nb = b;
        a.Pk();
        this.mask ? this.Ov(b, a) : (this.Od = new Image, this.Od.onload = this.Od.onerror = function() {
            a.uh()
        }, this.Od.src = this.data);
        b.id = this.sn = zc.Jb().Kb();
        return this.nb
    };
    g.Ov = function(a, b) {
        var c = this.width,
            d = this.height,
            e = document.createElement("canvas");
        e.width = this.width;
        e.height = this.height;
        var f = new Image,
            h = new Image,
            k = !1,
            n = !1,
            r = this,
            t = function() {
                if (k && n) {
                    var p = e.getContext("2d");
                    p.clearRect(0, 0, c, d);
                    p.drawImage(f, 0, 0, c, d);
                    p.globalCompositeOperation = "destination-in";
                    p.drawImage(h, 0, 0, c, d);
                    p = e.toDataURL("image/png");
                    ri(a, p);
                    r.Od = new Image;
                    r.Od.onload = r.Od.onerror = function() {
                        b.uh()
                    };
                    r.Od.src = p
                }
            };
        f.onload = function() {
            k = !0;
            t()
        };
        h.onload = function() {
            n = !0;
            t()
        };
        f.src =
            this.data;
        h.src = this.mask
    };
    g.Nv = function(a) {
        var b = B("image");
        b.setAttribute("width", this.width);
        b.setAttribute("height", this.height);
        ri(b, a);
        return b
    };
    g.Bc = function(a, b, c) {
        return new pf(new si(this, a), a, c)
    };
    g.mo = function(a) {
        var b = this;
        b.vj = a;
        ti(a, ui(vi, a) ? function(a, d) {
            return new pf(new si(b, a), a, d)
        } : function(a, d) {
            return new si(b, a, d)
        })
    };
    g.Nb = function(a, b, c, d) {
        qi.fa.Nb.call(this, a, b, c, d);
        this.Id = c.Id
    };
    var rf = function(a, b, c, d, e) {
        gi.call(this, a);
        this.paths = b;
        this.bounds = c;
        this.fillstyles = d;
        this.linestyles = e;
        this.Oj = this.Nd = null;
        this.Sj = this.jm = this.im = this.gm = this.hm = 0
    };
    v(rf, gi);
    rf.prototype.pu = function() {
        if (!this.bounds || 1 != this.bounds.length) return !1;
        for (var a = 0, b = 0; b < this.paths.length; b++) {
            var c = this.paths[b],
                d = c.data.tb(Oh).ca.length + 3,
                e = null != c.fill ? this.fillstyles[c.fill] : null;
            if (e instanceof wi) return !1;
            a += d * (!!e + 2 * !(null == c.line || !this.linestyles[c.line]))
        }
        return 100 < a
    };
    rf.prototype.Ja = function(a) {
        if (fb && this.pu()) {
            var b = document.createElement("canvas"),
                c = this.bounds[0],
                d = Math.ceil(c.t / 20) + 1,
                e = Math.ceil(c.s / 20) + 1,
                f = Math.floor(c.k / 20) - 1,
                c = Math.floor(c.j / 20) - 1,
                h = Pd();
            this.hm = 20 * (d - f);
            this.gm = 20 * (e - c);
            this.im = 20 * f;
            this.jm = 20 * c;
            this.Sj = .05 * h;
            b.width = (d - f) * h;
            b.height = (e - c) * h;
            d = new df(b, f * h, c * h, this.Sj, this.Sj);
            e = new qf(this, a, null);
            f = ef.uc(e);
            (a = a.nf) && f.ed(e, d, 0) && (this.Oj = a.um(b));
            f.ka()
        }
        return null
    };
    ci[1] = function(a, b, c) {
        b = a.fillstyles ? a.fillstyles.map(function(a) {
            return xi(c, a)
        }) : [];
        var d = a.linestyles ? a.linestyles.map(function(a) {
            if (a) {
                var b, d;
                a.fill ? b = xi(c, a.fill) : d = Ph(a.color, Wh, eh);
                var k = a.cap | 0,
                    n = l(a.ecap) ? a.ecap : k;
                a = new zf(Sh(a.width), d, b, k, n, a.joint | 0, a.miter)
            } else a = null;
            return a
        }) : [];
        return new rf(a.id, a.paths.map(yi), a.bounds.map(kd), b, d)
    };
    rf.prototype.Bc = function(a, b, c) {
        return new qf(this, a, c)
    };
    rf.prototype.Rf = function() {
        if (!this.Nd) {
            this.Nd = new oh;
            for (var a = 0; a < this.paths.length; a++)
                if (null != this.paths[a].fill) {
                    var b = this.paths[a].data.tb(Oh);
                    this.Nd = this.Nd.concat(b)
                }
        }
        return this.Nd
    };
    rf.prototype.Kd = function(a) {
        if (this.bounds) {
            if (1 == this.bounds.length) return new ld(this.bounds[0]);
            a = a.vc();
            a = new w(Rh(this.bounds[0].k, this.bounds[1].k, a), Rh(this.bounds[0].j, this.bounds[1].j, a), Rh(this.bounds[0].t, this.bounds[1].t, a), Rh(this.bounds[0].s, this.bounds[1].s, a));
            return new ld(a, this.bounds[0])
        }
        for (var b = new w, c = this.paths, d = 0; d < c.length; ++d) {
            var e = c[d].data.tb(a),
                f = 0;
            null != c[d].line && (f = this.linestyles[c[d].line].width.tb(a) / 2);
            e.ie(b, f)
        }
        return new ld(b)
    };
    var vf = function(a, b, c) {
            this.data = a;
            this.fill = b;
            this.line = c
        },
        yi = function(a) {
            return new vf(Ph(a.data, Xh, zi), a.fill, a.line)
        };
    var Ai = function(a) {
        ji.call(this, a, !1, [], [], [])
    };
    v(Ai, ji);
    Ai.prototype.Bc = function(a, b, c) {
        return new Bi(this, a, b, c)
    };
    var Ci = function(a, b, c) {
        gi.call(this, a);
        this.sound = b;
        this.format = c
    };
    v(Ci, gi);
    ci[11] = function(a) {
        return new Ci(a.id, a.data, a.format)
    };
    Ci.prototype.Nb = function(a, b) {
        b.yf().Yx(this.id, this.sound, this.format)
    };
    var Di = function(a, b, c, d, e, f, h) {
        gi.call(this, a);
        this.numFrames = b;
        this.width = c;
        this.height = d;
        this.deblocking = e;
        this.smoothing = f;
        this.codecId = h
    };
    v(Di, gi);
    ci[24] = function(a) {
        return new Di(a.id, a.numFrames, a.width, a.height, a.deblocking, a.smoothing, a.codecId)
    };
    Di.prototype.Bc = function(a, b, c) {
        return new Eg(this, a, c)
    };
    var Ei = function(a) {
        this.definition = a
    };
    v(Ei, bi);
    ci[18] = function(a, b) {
        return new Ei(a, b)
    };
    Ei.prototype.Nb = function(a, b) {
        b.zf(Fi).Xx(this)
    };
    var Gi = function(a) {
        this.actions = a
    };
    v(Gi, di);
    ci[9] = function(a, b) {
        var c = b.zf(mi).zl(a.actions, void 0);
        return new Gi(c)
    };
    Gi.prototype.yi = function() {};
    Gi.prototype.Zm = function(a) {
        a.pa().nr(new Hi(this.actions, a))
    };
    Gi.prototype.on = function(a) {
        a.pa().Bn(new Hi(this.actions, a))
    };
    Gi.prototype.yj = function(a) {
        a.push(this)
    };
    var Ii = function(a) {
        this.actions = a
    };
    v(Ii, Gi);
    ci[20] = function(a, b) {
        var c = b.zf(mi).zl(a.actions, void 0);
        return new Ii(c)
    };
    Ii.prototype.Nb = function(a, b, c, d) {
        a.El[d] || (a.El[d] = []);
        a.El[d].push(this)
    };
    var Ji = function(a) {
        this.us = a
    };
    v(Ji, di);
    ci[16] = function(a) {
        return new Ji(a.data)
    };
    Ji.prototype.Nb = function(a, b, c) {
        for (var d in this.us)
            if (a = c.af(this.us[d]).get(), a instanceof ii) a.Id[d] = a, a.ek = d;
            else if (a instanceof Kf) {
            var e = d;
            b.Qc[e] || (b.Qc[e] = []);
            b.Qc[e].push(a)
        }
    };
    var Ki = function(a) {
        this.Nx = a
    };
    v(Ki, di);
    ci[15] = function(a) {
        return new Ki(a.label)
    };
    Ki.prototype.Nb = function(a, b, c, d) {
        a.Xg.gk[this.Nx] = d
    };
    var Li = function(a) {
        this.Ao = a
    };
    v(Li, di);
    ci[4] = function(a) {
        return new Li(a.depth)
    };
    g = Li.prototype;
    g.Pf = function(a) {
        a.Zd(this.Ao + -16384)
    };
    g.yi = Li.prototype.Pf;
    g.Io = function(a) {
        a.push(this)
    };
    g.yj = function(a) {
        var b = fi(a, this.Ao);
        if (0 <= b) {
            var c = a[b];
            c.Sx(160) ? (a[b] = c.Qx(), a.push(this.Rx())) : a.splice(b, 1)
        }
    };
    g.Rx = function() {
        return new Li(this.Ao + -65536)
    };
    var Mi = function(a, b) {
        this.qg = a;
        this.hs = {};
        for (var c = 0; c < a.length; c++) this.hs[a[c].name] = a[c].offset;
        this.gk = {};
        for (c = 0; c < b.length; c++) this.gk[b[c].name] = b[c].offset
    };
    v(Mi, di);
    ci[23] = function(a) {
        return new Mi(a.scenes, a.frames)
    };
    g = Mi.prototype;
    g.Nb = function(a) {
        a.Xg = this
    };
    g.Jo = function(a) {
        if (2 > this.qg.length) return 0;
        a = Oa(this.qg, {
            offset: a
        }, function(a, c) {
            return a.offset - c.offset
        });
        0 > a && (a = Math.max(0, -a - 2));
        return a
    };
    g.ws = function(a) {
        return 2 > this.qg.length ? 0 : this.qg[this.Jo(a)].offset
    };
    g.Xw = function(a) {
        a = this.Jo(a);
        return 0 < a ? this.qg[a - 1].offset : Number.NEGATIVE_INFINITY
    };
    g.Ww = function(a) {
        a = this.Jo(a);
        return a < this.qg.length - 1 ? this.qg[a + 1].offset : Number.POSITIVE_INFINITY
    };
    var Ni = function(a) {
        this.id = a
    };
    v(Ni, di);
    ci[12] = function(a, b) {
        return new Ni(a.id, b)
    };
    Ni.prototype.Pf = function(a) {
        a.yf().Yp(this.id)
    };
    Ni.prototype.yi = Ni.prototype.Pf;
    Ni.prototype.yj = function(a) {
        a.push(this)
    };
    var Oi = function(a) {
        this.$w = a
    };
    v(Oi, bi);
    ci[19] = function(a, b) {
        return new Oi(a.references, b)
    };
    Oi.prototype.Nb = function(a, b, c) {
        a = this.$w;
        b = b.zf(Fi).qd;
        for (var d = 0; d < a.length; d++) {
            var e = a[d],
                f = c.af(e.id).get(),
                e = b[e.name];
            f && e && f.mo(e)
        }
    };
    var Pi = function(a, b) {
        this.Qq = a ? a : 60;
        this.es = 1E3 / this.Qq;
        this.pj = 0;
        this.is = b;
        this.ol = !1
    };
    Pi.prototype.start = function() {
        this.ol || (this.ol = !0, this.pj = Date.now(), Qi(na(this.os, this)))
    };
    Pi.prototype.stop = function() {
        this.ol = !1
    };
    Pi.prototype.os = function() {
        if (this.ol) {
            var a = Date.now();
            a >= this.pj && (this.is.Hm(), this.pj += (Math.floor((a - this.pj) / this.es) + 1) * this.es);
            this.is.Lb();
            Qi(na(this.os, this))
        }
    };
    var Ri = function(a, b, c, d, e, f, h) {
        switch (arguments.length) {
            case 0:
                return new Date(Date.now());
            case 1:
                return new Date(a);
            default:
                return c = l(c) ? c : 1, d = l(d) ? d : 0, e = l(e) ? e : 0, f = l(f) ? f : 0, h = l(h) ? h : 0, new Date(a, b, c, d, e, f, h)
        }
    };
    Object.defineProperty(Date, "__swiffy_override", {
        value: Ri
    });
    Object.defineProperty(Array, "__swiffy_override", {
        value: Array
    });
    var Si = function(a) {
            Object.defineProperty(a.prototype, "__swiffy_nvr", {
                value: !0
            })
        },
        Ti = function(a) {
            window.console && window.console.log("[trace] " + a)
        },
        Ui = function(a) {
            this.value = a
        },
        Vi = function(a) {
            if (a instanceof Ui) Ti(a.value);
            else throw a;
        },
        Wi = function(a) {
            throw a;
        };
    var Xi = function() {
        this.source = ""
    };
    g = Xi.prototype;
    g.append = function(a) {
        this.source += a;
        return this
    };
    g.ar = function() {
        var a = this.source;
        this.source = "";
        return a
    };
    g.Bk = function(a) {
        return a.Ax
    };
    g.bn = function(a) {
        return this.append(this.Bk(a))
    };
    g.Qi = function(a, b) {
        this.bn(a).append("(");
        for (var c = 1; c < arguments.length; ++c) 1 < c && this.append(","), this.append(arguments[c]);
        return this.append(")")
    };
    g.qa = function(a, b) {
        return this.Qi.apply(this, arguments).append(";")
    };
    g.vw = function(a) {
        return m(a) ? Aa(a) : String(a)
    };
    Object.defineProperty(Array, "CASEINSENSITIVE", {
        value: 1
    });
    Object.defineProperty(Array, "DESCENDING", {
        value: 2
    });
    Object.defineProperty(Array, "NUMERIC", {
        value: 16
    });
    Object.defineProperty(Array, "RETURNINDEXEDARRAY", {
        value: 8
    });
    Object.defineProperty(Array, "UNIQUESORT", {
        value: 4
    });
    var Yi = function(a, b, c) {
            var d = b & Array.DESCENDING ? -1 : 1,
                e = Xe,
                f;
            f = b & Array.NUMERIC ? e.st : b & Array.CASEINSENSITIVE ? e.qt : e.rt;
            return function(b, k) {
                return d * f.call(e, b && b[a], k && k[a]) || c(b, k)
            }
        },
        Zi = function(a, b) {
            return function(c, d) {
                return b(a[c], a[d])
            }
        };
    Object.defineProperty(Array.prototype, "sortOn", {
        value: function(a, b) {
            a = ea(a) ? a : [a];
            var c;
            ea(b) && b.length == a.length ? c = b[0] >>> 0 : (c = b >>> 0, b = null);
            for (var d = c & Array.RETURNINDEXEDARRAY, e = c & Array.UNIQUESORT, f = !1, h = function() {
                f = !0;
                return 0
            }, k = a.length - 1; 0 <= k; --k) h = Yi(a[k], b ? b[k] >>> 0 : c, h);
            c = this;
            if (d || e)
                for (h = Zi(c, h), c = [], k = this.length - 1; 0 <= k; --k) c[k] = k;
            c.sort(h);
            if (e) {
                if (f) return 0;
                if (!d) {
                    for (d = 0; d < c.length; d++)
                        if (-1 != c[d]) {
                            for (var e = this[d], n, h = d; n = c[h], c[h] = -1, n != d; h = n) this[h] = this[n];
                            this[h] = e
                        }
                    return this
                }
            }
            return c
        }
    });
    var Xe = null;
    var Hi = function(a, b) {
        this.Xv = a;
        this.m = b
    };
    var $i = function(a, b, c, d) {
        jf.call(this, a, b, d);
        this.Uc = 1;
        this.Fk = !1;
        this.Yg = !0;
        this.Xn = [];
        this.Xm = !1;
        this.Ym = 0;
        this.eg = void 0;
        this.tabIndex = -1;
        this.Dg = c || Hd.xm();
        this.jd |= 65011456
    };
    v($i, jf);
    var aj = function() {
        this.actions = [];
        this.sound = null
    };
    g = $i.prototype;
    g.Rm = function(a, b) {
        var c = this.Xn[a];
        return !c || b && !c.actions.length ? null : c
    };
    g.uq = function(a) {
        var b = this.Xn[a];
        b || (b = new aj, this.Xn[a] = b);
        return b
    };
    g.tp = function(a, b, c) {
        var d = this.c.pa(),
            e;
        for (e in Wc) {
            var f = Wc[e];
            if (a & 1 << f) {
                this.bi(f);
                var h = this.uq(f),
                    k = {};
                k.Qm = new Hi(c, d.Mp(this));
                20 === f && (k.Xp = function(a) {
                    return a.getKey().Mu() == b
                }, k.stopPropagation = !0);
                h.actions.push(k);
                1 << f & 63045376 && this.ak()
            }
        }
    };
    g.rv = function(a, b) {
        for (var c in Wc) {
            var d = Wc[c];
            a & d && (this.uq(d).sound = b)
        }
    };
    g.isEnabled = function() {
        return this.Md() && this.Yg
    };
    g.Wo = function() {
        return !!this.eg
    };
    g.Md = function() {
        return this.Fk && !this.be() && 0 != this.ea.enabled
    };
    g.ak = function() {
        this.Fk || (this.la(256), this.Fk = !0)
    };
    g.$b = function(a) {
        this.Uc != a && (this.Uc = a)
    };
    g.zz = function(a) {
        this.Xm = a
    };
    g.Vp = function(a) {
        this.Yg = a;
        this.la(256)
    };
    g.trackAsMenu = function() {
        return !1
    };
    g.Kx = function(a) {
        this.Md() && (this.c.Mf() || this.fireEvent(new Vc(23, a)))
    };
    g.et = function(a) {
        if (this.Md()) {
            var b;
            this.c.Mf() || 1 != this.Uc ? this.trackAsMenu() && !this.c.jk() && 1 == this.Uc ? (this.$b(4), b = 14) : this.c.Ak(this) && 2 == this.Uc && (this.$b(4), b = 16) : (this.$b(2), b = 9);
            b && this.fireEvent(new Vc(b, a))
        }
    };
    g.Jx = function(a) {
        this.Md() && (this.c.Mf() || this.fireEvent(new Vc(22, a)))
    };
    g.dt = function(a) {
        if (this.Md()) {
            var b;
            this.c.Mf() || 2 != this.Uc ? this.trackAsMenu() && !this.c.jk() && 4 == this.Uc ? (this.$b(1), b = 13) : this.c.Ak(this) && 4 == this.Uc && (this.$b(2), b = 15) : (this.$b(1), b = 8);
            b && this.fireEvent(new Vc(b, a))
        } else this.$b(1)
    };
    g.Ge = function() {
        this.Md() ? (this.c.setCapture(this, !this.trackAsMenu()), this.$b(4), this.fireEvent(new Vc(12))) : this.$b(1)
    };
    g.nh = function() {
        if (this.Md()) {
            var a = this.trackAsMenu() && 0 == this.c.jk() || this.c.Ak(this);
            this.c.releaseCapture(this);
            this.$b(2);
            if (a) {
                var a = Date.now(),
                    b = a - this.Ym;
                this.Xm && 600 > b ? (this.fireEvent(new Vc(25)), this.Ym = 0) : (this.fireEvent(new Vc(11)), this.Ym = a)
            } else this.fireEvent(new Vc(9))
        } else this.$b(1)
    };
    g.qh = function() {
        this.isEnabled() && !this.c.Mf() && this.fireEvent(new Vc(24))
    };
    g.Hw = function() {
        this.Md() && !this.trackAsMenu() && (this.$b(1), this.fireEvent(new Vc(10)))
    };
    g.Mk = function() {
        if (!this.isEnabled()) return "default";
        var a = this.ea.useHandCursor;
        return l(a) && !a ? "default" : "pointer"
    };
    var bj = function(a, b, c, d) {
        $i.call(this, a, b, c, d);
        this.oa = new Te(this.ea);
        this.zk = void 0;
        this.xn = !0
    };
    v(bj, $i);
    g = bj.prototype;
    g.ka = function() {
        bj.fa.ka.call(this);
        this.oa.ka();
        this.la(16)
    };
    g.Kd = function() {
        var a = new ld;
        this.oa.forEach(function(b) {
            var c = b.pb().clone();
            c.ja(b.Fa());
            a.Ed(c);
            return !1
        });
        return a
    };
    g.map = function(a) {
        var b = bj.fa.map.call(this, a);
        return b = b || this.oa.forEach(function(b) {
            return b.map(a)
        })
    };
    g.An = function(a) {
        return this.oa.forEach(a)
    };
    g.Sa = function() {
        return !0
    };
    g.Cw = function(a) {
        return this.oa.rs(a)
    };
    g.Hd = function(a, b) {
        this.la(16);
        var c = a.getParent();
        c && c.removeChild(a);
        a.Kg(this);
        this.oa.pm(a, b);
        this.Dc();
        a.ih(mf, !1, c)
    };
    g.removeChild = function(a, b) {
        a.ih(nf, !1, b);
        this.la(16);
        this.oa.pn(a);
        a.De();
        a.Kg(null);
        this.Dc()
    };
    g.Fv = function() {
        for (var a = this.oa.Ra; a;) this.removeChild(a), a = this.oa.Ra
    };
    g.Zd = function(a) {
        (a = this.oa.hd(a)) && this.removeChild(a)
    };
    g.hd = function(a) {
        return this.oa.hd(a)
    };
    g.Un = function(a, b) {
        this.oa.Un(a, b)
    };
    g.Qn = function(a, b) {
        this.la(16);
        this.oa.Qn(a, b)
    };
    g.kl = function() {
        return this.oa.kl()
    };
    g.$f = function(a) {
        return this.oa.$f(a)
    };
    g.Kh = function(a) {
        return this.oa.Kh(a)
    };
    g.Xf = function(a, b) {
        this.la(16);
        var c = a.getParent();
        c && c.Ei(a, this);
        a.Kg(this);
        this.oa.Xf(a, b);
        this.Dc();
        a.ih(mf, !1, c)
    };
    g.Ei = function(a, b) {
        a.ih(nf, !1, b);
        this.la(16);
        this.oa.Ei(a);
        a.Kg(null);
        this.Dc()
    };
    g.Yb = function() {
        return this.oa.Yb()
    };
    g.Ez = function(a) {
        this.xn = a;
        this.la(256)
    };
    g.Pj = function() {
        return 0 < this.zk
    };
    g.qn = function() {
        return this.zk | 0
    };
    g.Hi = function(a) {
        bj.fa.Hi.call(this, a);
        var b = this.zk;
        (a = (1 <= a ? b : 0) + (1 <= this.mc() ? -b : 0)) && this.getParent().fh(a)
    };
    g.fh = function(a) {
        this.zk = this.qn() + a;
        this.la(131072);
        !this.xc() && this.getParent() && this.getParent().fh(a)
    };
    g.Je = function(a, b, c, d, e) {
        return this.pl(a, b) ? (c(this) && (d = this), this.Ls(a, b, c, d, e)) : null
    };
    g.Ls = function(a, b, c, d, e) {
        var f = null,
            h = [];
        this.oa.forEach(function(k) {
            if (k.Eb) return !1;
            for (; 0 < h.length && k.depth > h[h.length - 1];) h.pop();
            if (k.ci()) {
                if (k instanceof yh) return !1;
                e.Tk(k, a, b) || h.push(k.Pc())
            } else if (0 == h.length) {
                var n = k.Oc;
                if (!n || e.Tk(n, a, b)) k = k.Je(a, b, c, d, e), !k || k == d && f || (f = k)
            }
            return !1
        });
        return f
    };
    var pi = function(a, b, c, d) {
        bj.call(this, b, a, c, d);
        this.Ff = new Te
    };
    v(pi, bj);
    g = pi.prototype;
    g.Ja = function() {
        pi.fa.Ja.call(this);
        this.Cf(this.oa, 1);
        this.Cf(this.Ff, 8);
        this.ak();
        for (var a = 0; a < this.definition.actions.length; a++) {
            var b = this.definition.actions[a];
            this.tp(b.events, b.key, b.actions)
        }
        for (a = 0; a < this.definition.sounds.length; a++) b = this.definition.sounds[a], this.rv(b.events, b.sound)
    };
    g.ka = function() {
        pi.fa.ka.call(this);
        this.Ff.ka()
    };
    g.Kd = function() {
        var a = pi.fa.Kd.call(this);
        this.Ff.forEach(function(b) {
            var c = b.pb().xg().clone();
            c.ja(b.Fa());
            a.pq(c, !1);
            return !1
        });
        return a
    };
    g.$b = function(a) {
        a != this.Uc && (this.Cf(this.oa, a, this.Uc), this.c.ha.Nj());
        pi.fa.$b.call(this, a)
    };
    g.Md = function() {
        return pi.fa.Md.call(this) && this.Yg
    };
    g.trackAsMenu = function() {
        return this.definition.trackAsMenu
    };
    g.Cf = function(a, b, c) {
        this.la(16);
        var d = this.definition.records;
        if (d) {
            if (l(c))
                for (var e = 0; e < d.length; e++) {
                    var f = d[e],
                        h = f.states & c,
                        k = f.states & b;
                    h && !k && a.Cp(f.depth)
                }
            for (e = 0; e < d.length; e++)
                if (f = d[e], h = f.states & c, (k = f.states & b) && !h && (h = this.Dg + "." + f.definition.id.toString(36), f.definition.rm() && (h = f.definition.get().Bc(this.c, h)))) h.Sa() && 8 != b && h.jc(this.c.fi()), h.Kg(this), h.Ja(), a.pm(h, f.depth), f.transform && h.setTransform(f.transform), f.filters && h.Eg(f.filters), f.blendmode && h.gi(f.blendmode), f.Lp && h.Nc(f.Lp)
        }
    };
    g.Yb = function() {
        return !0
    };
    g.Je = function(a, b, c, d, e) {
        var f = null;
        if (this.pl(a, b)) {
            if ((f = this.Ls(a, b, c, d, e)) && f != d) return f;
            if (c(this)) {
                var h = this;
                if (this.Ff.gx(function(d) {
                    return !!d.Je(a, b, c, h, e)
                })) return h
            }
        }
        return f
    };
    var yh = function(a, b, c, d) {
        $i.call(this, b, a, c, d);
        this.hn = "normal";
        this.Cg = a.autoSize;
        this.wq = a.border;
        this.jn = 16777215;
        this.Zh = a.border;
        this.kn = 0;
        this.xq = !1;
        this.Ck = a.editable;
        this.Gg = a.hp;
        this.yq = "pixel";
        this.nc = a.html;
        this.zq = a.maxChars;
        this.dh = a.multiline;
        this.ui = !1;
        this.Aq = a.password;
        this.Bq = null;
        this.ii = a.selectable;
        this.Cq = 0;
        this.Oa = null;
        this.Lf = a.color;
        this.an = 0;
        this.zi = a.wrap;
        this.Ld = Lf(a);
        this.Ef = [];
        this.de = [];
        this.of = a.bounds.clone();
        this.eq = !0;
        this.Rp = !1;
        this.Qg = a.variable;
        this.links = [];
        null == this.Oa && (a = a.text, this.kd(l(a) ? a : ""))
    };
    v(yh, $i);
    g = yh.prototype;
    g.Kd = function() {
        var a = this.of;
        if ("none" != this.Cg) {
            var b = new w(a.k, a.j, a.k + this.Kq(), a.j + this.Jq());
            a.Ed(b)
        }
        return new ld(a)
    };
    g.kd = function(a) {
        this.eq && this.nc && this.Lf != this.definition.color && (this.la(64), this.Lf = this.definition.color);
        if (this.ui || this.Oa != a) this.Rp = !0, this.hr(a), this.ui = !1
    };
    g.sk = function(a) {
        this.eq = a
    };
    g.Lx = function(a) {
        this.nc != a && (this.la(64), this.nc = a)
    };
    g.fu = function(a) {
        this.Lf = 16777215 & a | this.Lf & 4278190080;
        this.Bl(Mf(this.Lf))
    };
    g.Ot = function() {
        return this.Lf & 16777215
    };
    g.Xt = function(a) {
        this.hn = a
    };
    g.lj = function(a) {
        this.wq = a
    };
    g.vz = function(a) {
        this.jn = 16777215 & a | this.jn & 4278190080
    };
    g.Py = function() {
        return this.jn & 16777215
    };
    g.Zt = function(a) {
        this.Zh = a;
        this.la(128)
    };
    g.Kj = function() {
        this.pb();
        return this.of
    };
    g.xz = function(a) {
        this.kn = 16777215 & a | this.kn & 4278190080
    };
    g.Qy = function() {
        return this.kn & 16777215
    };
    g.yz = function(a) {
        this.xq = a
    };
    g.au = function(a) {
        this.Gg = a;
        this.hr(this.Oa)
    };
    g.Bz = function(a) {
        this.yq = a
    };
    g.Cz = function(a) {
        this.zq = a
    };
    g.bu = function(a) {
        this.dh != a && (this.ui = !0);
        this.dh = a;
        this.Fg()
    };
    g.Fz = function(a) {
        this.Aq = a
    };
    g.Iz = function(a) {
        this.Bq = a
    };
    g.Kz = function(a) {
        this.Cq = a
    };
    g.Lz = function(a) {
        this.an = a
    };
    g.Ke = function() {
        return this.Qg
    };
    g.rk = function(a) {
        this.Qg && this.c.pa().Km(this.Qg, this);
        (this.Qg = a) && this.c.pa().Lm(this.Qg, this, this.definition.text)
    };
    g.gu = function(a) {
        this.zi != a && (this.ui = !0);
        this.zi = a;
        this.Fg()
    };
    g.Yt = function(a) {
        this.la(32);
        this.Cg = a;
        this.Dc()
    };
    g.eu = function(a) {
        this.ii = a
    };
    g.Zo = function(a) {
        this.Ck = a
    };
    g.Wo = function() {
        return l(this.eg) ? this.eg : this.Ck
    };
    g.Pt = function(a, b) {
        l(a) ? l(b) || (b = a + 1) : (a = 0, b = this.Oa.length);
        for (var c = null, d = 0, e, f = 0; f < this.Ef.length; f++)
            for (var h = this.Ef[f], k = 0; k < h.length; k++) {
                var n = h[k];
                e = d + n.Oa.length - 1;
                d < b && e >= a && (c ? c.Jw(n.format) : c = n.format.clone());
                d = e + 1
            }
        c ? c.font = c.mh() ? c.font.name : c.font : c = new If;
        return c
    };
    g.Nt = function() {
        var a = new If;
        a.Ji(this.Ld);
        return a
    };
    g.Bl = function(a, b, c) {
        a = a.clone();
        l(b) ? l(c) || (c = b + 1) : (b = 0, c = this.Oa.length);
        for (var d = 0, e, f = 0; f < this.Ef.length; f++)
            for (var h = this.Ef[f], k = 0; k < h.length; k++) {
                var n = h[k],
                    r = n.Oa;
                e = d + r.length - 1;
                if (d < c && e >= b) {
                    var t = Math.max(d, b) - d,
                        d = Math.min(e + 1, c) - d;
                    if (0 < t) {
                        var p = n.Bi(r.substring(0, t));
                        h.splice(k, 0, p);
                        k++
                    }
                    d < r.length && (p = n.Bi(r.substring(d)), h.splice(k + 1, 0, p));
                    n.kd(r.substring(t, d));
                    null != a.color && (a.color |= 4278190080);
                    !this.Gg && n.format.ah() && (a.font = n.format.font);
                    n.format.Ji(a);
                    n.vi(this.gn())
                }
                d = e + 1
            }
        this.Fg();
        this.la(128)
    };
    g.cu = function(a) {
        this.ui = !0;
        this.Ld.Ji(a)
    };
    g.Ja = function() {
        yh.fa.Ja.call(this);
        (this.c.pa().Tp || this.ii) && this.Vp(!0);
        this.definition.variable && this.c.pa().Lm(this.definition.variable, this, this.definition.text)
    };
    g.ka = function() {
        yh.fa.ka.call(this);
        this.definition.variable && this.c.pa().Km(this.definition.variable, this)
    };
    g.Sa = function() {
        return this.definition.Sa
    };
    g.hr = function(a) {
        this.la(32);
        this.Oa = a;
        this.Ef = [];
        this.nc || (a = cj(a));
        this.Dv(a, this.dh)
    };
    g.Dv = function(a, b) {
        var c = new dj(null, null);
        c.format = Lf(this.definition);
        if (this.Gg && this.definition.font) {
            var d = this.definition.font.get();
            d instanceof Kf && (c.format.font = d)
        } else this.definition.font && (d = this.definition.font.get(), d instanceof Kf && (c.format.font = d.name));
        c.format.color = this.Lf | 0;
        c.format.mh() && (d = c.format.font, c.format.italic = d.italic, c.format.bold = d.bold);
        this.nc && this.Ld && (c.format.italic = !!this.Ld.italic, c.format.bold = !!this.Ld.bold, c.format.size = this.Ld.size, c.format.Cb = this.Ld.Cb,
            c.format.indent = this.Ld.indent, d = this.Ld.color, c.format.color = this.Ld.Tf ? 4278190080 | d : c.format.color);
        var d = new ej(c, this.gn(), b),
            e = a.replace(/(&nbsp;)+/g, "&nbsp;").replace(/\r\n|\r|\n/g, "<br/>");
        c.vi(this.gn());
        for (c = new ce(e, !1, !1, !0); e = c.next();) switch (e.type) {
            case "tag":
                var f = {};
                if (e.attributes)
                    for (var h = 0; h < e.attributes.length; ++h) {
                        var k = e.attributes[h];
                        f[k.name.toLowerCase()] = k.value
                    }
                d.Av(e.value.toLowerCase(), f);
                break;
            case "close":
                d.zv(e.value.toLowerCase());
                break;
            case "text":
            case "cdata":
                d.yv(e.value)
        }
        this.Ef =
            d.mn;
        this.Fg()
    };
    g.Fg = function() {
        var a = this.Ef;
        if (!(this.Rp || this.dh || this.nc)) {
            var b = [];
            b.push(Array.prototype.concat.apply([], a));
            a = b
        }
        this.zi && (a = this.aw(a, this.of));
        this.de = a;
        "none" != this.Cg && this.Dc()
    };
    g.Jp = function(a, b) {
        var c = a.t - a.k - 80;
        b && (c -= b.leftMargin + b.rightMargin);
        return c
    };
    g.aw = function(a, b) {
        var c = [],
            d = 0;
        c[d] = [];
        for (var e = 0; e < a.length; e++) {
            for (var f = a[e], h = 0 < f.length ? f[0].format : null, k = this.Jp(b, h), h = h ? h.indent | 0 : 0, n = 0; n < f.length; n++)
                for (var r = f[n].Iw(h, k), t = 0; t < r.length; t++) {
                    var p = f[n].Bi(r[t]);
                    p.$j = t == r.length - 1;
                    c[d].push(p);
                    t == r.length - 1 ? h += p.Ia() : (d++, c[d] = [], h = 0)
                }
            d++;
            c[d] = []
        }
        0 == c[d].length && c.pop();
        return c
    };
    g.Ty = function(a) {
        if (0 <= a && a < this.de.length) {
            a = this.de[a];
            for (var b = "", c = 0; c < a.length; c++) b += a[0].Oa;
            return b.replace(/\n/, "")
        }
        return null
    };
    g.Uj = function(a) {
        var b = this.Kj();
        this.links = [];
        for (var c = 0, d = !0, e = 0, f = this.de, h = 0; h < f.length; h++) {
            var k = f[h],
                n = fj(k),
                r = gj(k) * n;
            if (0 != h && "none" == this.Cg && c + r > b.s) break;
            var t = 0 < k.length ? k[0].format : null;
            0 == h && t && (e = t.leading | 0, c = b.j + 40 - .5 * e, 0 > e ? c = b.j : 0 > c && (c = b.j + 40));
            for (var p = b.k + 40 + (t ? t.leftMargin : 0), s = this.Jp(b, t), u = 0, x = 0; x < k.length; x++) u += k[x].Ia();
            if (t) switch (l(t.indent) && d && (p += t.indent, s -= t.indent, d = !1), t.Cb) {
                case 2:
                    p += (s - u) / 2;
                    break;
                case 1:
                    p += s - u
            }
            for (x = 0; x < k.length; x++) k[x].Oa.length && (u = 0, t =
                k[x].Ia(), !k[k.length - 1].$j && 3 == k[x].format.Cb && h < f.length - 1 && (u = (k[x].Oa.match(/ /g) || []).length, u = (s - t) / u), a.ri(k[x], p, c, n, u), k[x].format.url && (u = new hj(p, c, t, r, k[x].format.url, k[x].format.target), this.links.push(u)), p += t, d = d || k[x].$j);
            c += r + e
        }
    };
    g.gn = function() {
        return this.Gg ? this.c.Qc : null
    };
    g.vo = function(a) {
        0 <= a && (this.of.t = this.of.k + 20 * a, this.Fg(), this.la(128))
    };
    g.uo = function(a) {
        0 <= a && (this.of.s = this.of.j + 20 * a, this.Fg(), this.la(128))
    };
    g.Ge = function() {
        var a = this.Gu();
        a ? this.c.si(new ij(this.c.pa(), "", a.Eu, a.target, 1)) : yh.fa.Ge.call(this)
    };
    g.Gu = function() {
        var a = new Uc(this.c.lc.x, this.c.lc.y);
        a.ja(this.wc());
        for (var b = 0; b < this.links.length; b++)
            if (this.links[b].Yd.contains(a.x, a.y)) return this.links[b];
        return null
    };
    var hj = function(a, b, c, d, e, f) {
            this.Yd = new w(a, b, a + c, b + d);
            this.Eu = e || "";
            this.target = f || "_self"
        },
        jj = function() {
            this.format = Jf();
            this.$j = !1;
            this.Oa = "";
            this.qj = 0
        },
        kj = document.createElement("canvas");
    g = jj.prototype;
    g.Bi = function(a) {
        var b = this.fx();
        b.Oa = a;
        return b
    };
    g.kd = function(a) {
        this.Oa = a;
        this.qj = 0
    };
    g.vi = function(a, b) {
        this.qj = 0;
        !l(b) && this.format.mh() && (b = this.format.font.name);
        if (a) {
            if (!l(b) && l(this.format.font) && (b = String(this.format.font)), !this.format.mh() || b != this.format.font.name || !!this.format.italic != !!this.format.font.italic || !!this.format.bold != !!this.format.font.bold) {
                var c = Nf;
                if (l(b) && a && a[b])
                    for (var d = a[b], e = 0; e < d.length; ++e) {
                        if (!!this.format.italic == !!d[e].italic && !!this.format.bold == !!d[e].bold) {
                            this.format.font = d[e];
                            return
                        }
                        c == Nf && (c = d[e])
                    }
                this.format.font = c
            }
        } else b && (this.format.font =
            b)
    };
    g.fx = function() {
        var a = new jj;
        a.format.Ji(this.format);
        return a
    };
    g.Ia = function() {
        this.qj || (this.qj = this.measureText(this.Oa));
        return this.qj
    };
    g.measureText = function(a) {
        if (this.format.ah()) {
            for (var b = 0, c = 0; c < a.length; c++) {
                var d = this.format.font.gj(a.charAt(c));
                l(d) && (b += d.advance ? d.advance : 0)
            }
            b = b * this.format.size / (this.format.font.emSquareSize | 0);
            return b += this.format.letterSpacing * a.length | 0
        }
        return this.Mx(a)
    };
    g.Mt = function() {
        var a = "";
        this.format.bold && (a += "bold ");
        this.format.italic && (a += "italic ");
        var a = a + (this.format.size + "px"),
            a = a + (" " + this.format.ln()),
            b = kj.getContext("2d");
        b.font = a;
        return b
    };
    g.Mx = function(a) {
        return this.Mt().measureText(a).width
    };
    g.Iw = function(a, b) {
        for (var c = [], d = 0, e = c[0] = "", f = 0, h = this.Oa.split(" "), k = 0; k < h.length; k++)
            if (!(0 < d && 0 == a && "" == h[k])) {
                h[k] = h[k].replace(/&nbsp;/g, " ");
                var n = this.measureText(h[k]);
                a + f + n > b ? n < b && 0 < k ? (d++, a = n, c[d] = h[k]) : (d || c[d] ? a = 0 : c.pop(), this.hx(h[k], b, a, c), d = c.length - 1, a = this.measureText(c[d])) : (c[d] = c[d] + e + h[k], a += f + n);
                0 == k && (e = " ", f = this.measureText("a a") - this.measureText("aa"))
            }
        return c
    };
    g.hx = function(a, b, c, d) {
        this.format.ah() ? this.Vx(a, b, c, d) : this.Ux(a, b, c, d)
    };
    g.Vx = function(a, b, c, d) {
        for (var e = 0, f = 0, h = this.format.size / (this.format.font.emSquareSize | 0), k = 0; k < a.length; k++) {
            var n = this.format.font.gj(a.charAt(k)),
                n = (l(n) && n.advance ? n.advance : 0) * h + this.format.letterSpacing;
            0 < k - f && e + n > b - c && (d.push(a.substring(f, k)), f = k, c = e = 0);
            e += n
        }
        d.push(a.substring(f))
    };
    g.Ux = function(a, b, c, d) {
        for (var e = this.Mt(), f = 0; f < a.length;) {
            for (var h = f + 1, k = a.length, n; k > h;) {
                var r = h + (k - h) / 2,
                    r = Math.ceil(r);
                n = a.substring(f, r);
                e.measureText(n).width <= b - c ? h = r : k = r - 1
            }
            d.push(a.substr(f, h));
            f = h;
            c = 0
        }
    };
    g.iy = function(a, b, c) {
        var d = this.Oa,
            e = this.format.size,
            f = [];
        f.push(b);
        if (a instanceof Kf && a.glyphs.length)
            for (var h = 1; h < d.length; h++) {
                var k = a.gj(d.charAt(h - 1)),
                    n = 0;
                l(k) && l(k.advance) && (n += k.advance, b += n * e / a.emSquareSize, this.format && (b += this.format.letterSpacing | 0), f.push(b), " " == d.charAt(h) && (b += c))
            }
        return f
    };
    g.Wm = function(a, b, c, d) {
        var e = this.format.font;
        a = this.iy(e, a, d);
        return this.gy(a, b + c * e.ascent / e.emSquareSize, d)
    };
    g.gy = function(a, b) {
        for (var c = [], d = this.Oa, e = this.format.font, f = this.format.size / e.emSquareSize, h = b / f, k = 0, n = 0; n < d.length && k < a.length; n++) {
            var r = e.mr(d.charAt(n)),
                t = a[k] / f;
            if (r) {
                if (this.format.Mb) {
                    var p = e.gj(d.charAt(n)).advance,
                        p = p + (this.format.letterSpacing | 0);
                    c.push((new oh([0, 0, e.descent / 2, 1, p, 0, 1, 0, 400, 1, -p, 0, 3])).Kk(t, h))
                }
                c.push(r.Kk(t, h));
                k++
            }
        }
        return c
    };
    var dj = function(a, b) {
        jj.call(this);
        a && this.format.Ji(a.format);
        this.parent = a;
        this.kx = b
    };
    v(dj, jj);
    var lj = function(a, b) {
            return a.replace(/<[^>]+>|&[^;]+;/g, function(a) {
                switch (a) {
                    case "&amp;":
                        return "&";
                    case "&lt;":
                        return "<";
                    case "&gt;":
                        return ">";
                    case "&quot;":
                        return '"';
                    case "&apos;":
                        return "'";
                    case "&nbsp;":
                        return " ";
                    case "</p>":
                    case "<br>":
                    case "<br/>":
                        return b ? "\n" : ""
                }
                return ""
            })
        },
        mj = function(a) {
            return a.replace(/[<>&]/g, function(a) {
                switch (a) {
                    case "&":
                        return "&amp;";
                    case "<":
                        return "&lt;";
                    case ">":
                        return "&gt;"
                }
                return a
            })
        },
        cj = function(a) {
            return a.replace(/[&<>"'\u02c6\u02dc]/g, function(a) {
                switch (a) {
                    case "&":
                        return "&amp;";
                    case "<":
                        return "&lt;";
                    case ">":
                        return "&gt;";
                    case "'":
                        return "&apos;";
                    case '"':
                        return "&quot;";
                    case "\u02c6":
                        return "&#710;";
                    case "\u02dc":
                        return "&#732;"
                }
                return a
            })
        },
        nj = function(a) {
            for (var b = /\s*<p(?: [^>]*)?>.*?<\/p>\s*/ig, c = 0, d = b.exec(a), e = ""; d;) d.index > c && (e += "<p>" + a.substring(c, d.index) + "</p>"), e += d[0], c = b.lastIndex, d = b.exec(a);
            a.length > c && (e += "<p>" + a.substring(c) + "</p>");
            return e
        };
    yh.prototype.Jq = function() {
        for (var a = 0, b = 0; b < this.de.length; b++) var c = this.de[b],
            d = fj(c),
            c = gj(c),
            a = a + c * d;
        0 < a && (a += 80);
        return a
    };
    var fj = function(a) {
            for (var b = 0, c = 0; c < a.length; c++) b = Math.max(b, a[c].format.size);
            return b
        },
        gj = function(a) {
            for (var b = 1, c = 0; c < a.length; c++) b = a[c].format.mh() && a[c].format.font.lineHeight ? Math.max(b, a[c].format.font.lineHeight) : Math.max(b, 1.14);
            return b
        },
        oj = function(a) {
            switch (a) {
                case "left":
                    return 0;
                case "center":
                    return 2;
                case "right":
                    return 1;
                case "justify":
                    return 3;
                default:
                    return 0
            }
        };
    yh.prototype.Kq = function() {
        for (var a = 0, b = 0; b < this.de.length; b++) {
            for (var c = 0, d = this.de[b], e = 0; e < d.length; e++) c += d[e].Ia();
            a = Math.max(a, c)
        }
        return a
    };
    var ej = function(a, b, c) {
        this.Ib = a;
        this.Sd = [];
        this.mn = [];
        this.mn.push(this.Sd);
        this.Qc = b;
        this.multiline = c
    };
    g = ej.prototype;
    g.zh = function(a) {
        this.Ib = new dj(this.Ib, a)
    };
    g.fy = function(a) {
        var b = this.Ib;
        b.parent && b.kx == a && (this.Ib = b.parent)
    };
    g.Av = function(a, b) {
        switch (a) {
            case "p":
                this.zh(a);
                var c = b.align;
                c && (this.Ib.format.Cb = oj(c));
                break;
            case "b":
                this.zh(a);
                this.Ib.format.bold = !0;
                this.Ib.vi(this.Qc);
                break;
            case "i":
                this.zh(a);
                this.Ib.format.italic = !0;
                this.Ib.vi(this.Qc);
                break;
            case "u":
                this.zh(a);
                this.Ib.format.Mb = !0;
                break;
            case "a":
                this.zh(a);
                if (c = b.href) this.Ib.format.url = c;
                if (c = b.target) this.Ib.format.target = c;
                break;
            case "br":
            case "sbr":
                this.zr();
                break;
            case "font":
                this.zh(a);
                if (c = b.color) this.Ib.format.color = pj(c);
                (c = b.face) && this.Ib.vi(this.Qc,
                    c);
                c = Number(b.size);
                c == c && (this.Ib.format.size = 20 * c);
                c = Number(b.letterspacing);
                c == c && (this.Ib.format.letterSpacing = 20 * c)
        }
    };
    g.zv = function(a) {
        switch (a) {
            case "p":
                this.multiline && this.zr()
        }
        this.fy(a)
    };
    g.zr = function() {
        if (this.Sd.length) {
            var a = this.Sd.length;
            a && (this.Sd[a - 1].$j = !0);
            do {
                a--;
                var b = this.Sd[a];
                b.kd(b.Oa.replace(/\s+$/g, ""))
            } while (0 < a && !this.Sd[a].Oa.length)
        } else this.Sd.push(this.Ib.Bi(""));
        this.Sd = [];
        this.mn.push(this.Sd)
    };
    g.yv = function(a) {
        this.Sd.push(this.Ib.Bi(a))
    };
    yh.prototype.Yb = function() {
        return !1
    };
    yh.prototype.Je = function(a, b, c, d) {
        if (a = this.pl(a, b)) {
            if (this.ii || c(this)) return this;
            for (c = 0; c < this.links.length; c++)
                if (this.links[c].Yd.contains(a.x, a.y)) return this;
            return d
        }
        return null
    };
    var z = function(a, b, c, d) {
        bj.call(this, b, a, c, d);
        this.Qp();
        this.ik = !1;
        this.Ci = {};
        this.Zg = null;
        this.c.Yu(this);
        this.rp = na(qj, this);
        this.jd |= 127
    };
    v(z, bj);
    g = z.prototype;
    g.Qp = function() {
        this.fs = [];
        this.ib = -1;
        this.Wk = !1;
        this.qi = !0;
        this.Dr = []
    };
    g.nn = function(a) {
        this.De();
        this.Fv();
        this.Qp();
        for (var b = this.ea, c = Object.getOwnPropertyNames(b), d = 0; d < c.length; ++d) rj(c[d]) || delete b[c[d]];
        this.definition = a;
        this.Dd = !0;
        this.Ja()
    };
    g.Ja = function(a, b) {
        this.Dd && this.bi(7);
        z.fa.Ja.call(this, a, b)
    };
    g.ti = function() {
        z.fa.ti.call(this);
        this.ik || this.c.ub === this || (this.ik = !0, this.play(), this.Wp())
    };
    g.De = function() {
        this.ik && (this.oa.De(), this.fireEvent(new Vc(5)), this.ik = !1);
        z.fa.De.call(this)
    };
    g.play = function() {
        this.Wk = !0
    };
    g.$t = function(a) {
        this.qi = a
    };
    g.Wo = function() {
        return l(this.eg) ? this.eg : this.qi
    };
    g.Hm = function() {
        this.oa.Bw();
        this.Wk && this.Wp()
    };
    g.Wp = function() {
        var a = this.ib + 1;
        if (a >= this.definition.frameCount) {
            if (this.c.ub === this && this.c.ku) return;
            a = 0
        }
        0 == this.definition.frameCount && this.c.ub == this || this.hh(a)
    };
    g.stop = function() {
        this.Wk = !1
    };
    g.Af = function(a, b) {
        0 <= a && (a >= this.definition.frameCount ? this.iq(this.definition.frameCount - 1) : this.hh(a), this.Wk = b)
    };
    g.pz = function() {
        var a = this.definition.Xg.Xw(this.ib);
        isFinite(a) && this.hh(a);
        this.stop()
    };
    g.nz = function() {
        var a = this.definition.Xg.Ww(this.ib);
        isFinite(a) && this.hh(a);
        this.stop()
    };
    g.Tg = function(a, b) {
        var c = this.definition.Xg,
            d;
        if (l(b)) {
            if (d = c.hs[b], !l(d)) return
        } else d = c.ws(this.ib);
        var e = Number(a) + d - 1;
        return 0 <= e && e == Math.floor(e) ? e : (e = c.gk[a]) && c.ws(e) != d ? void 0 : e
    };
    g.gv = function(a) {
        return this.definition.tags[a]
    };
    g.hh = function(a) {
        if (a != this.ib)
            if (a > this.ib) {
                if (this.iq(a - 1), this.ib = a, this.pa().uf(this.rp), this.jq(this.ib), a = this.definition.tags[this.ib])
                    for (var b = 0; b < a.length; b++) a[b].Pf(this), a[b].Zm(this)
            } else {
                this.ib = a;
                this.pa().uf(this.rp);
                a = this.definition.$p[this.ib];
                var c = [];
                if (a)
                    for (b = 0; b < a.length; b++) {
                        var d = a[b].yi(this);
                        d && c.push(d);
                        a[b].Zm(this)
                    }
                var e = this;
                this.oa.Ju(function(a) {
                    if (!(0 > a.depth) || 0 <= c.indexOf(a)) return !0;
                    e.la(16);
                    a.De();
                    return !1
                });
                this.ia & 16 && this.oa.Iu(this)
            }
    };
    g.iq = function(a) {
        for (; a > this.ib;) {
            this.ib++;
            this.jq(this.ib);
            var b = this.definition.tags[this.ib];
            if (b)
                for (var c = 0; c < b.length; c++) b[c].Pf(this)
        }
    };
    var qj = function() {
        var a = this.Dr[this.ib];
        if (q(a)) {
            var b = this;
            this.pa().Rr(a, function() {
                b.stop()
            })
        }
    };
    g = z.prototype;
    g.jq = function(a) {
        if (!this.fs[a]) {
            for (var b = this.definition.El[a], c = 0; b && c < b.length; c++) b[c].on(this);
            this.fs[a] = !0
        }
    };
    g.Ko = function() {
        0 < this.ib && this.hh(this.ib - 1);
        this.stop()
    };
    g.xj = function() {
        this.ib + 1 < this.definition.frameCount && this.hh(this.ib + 1);
        this.stop()
    };
    g.pa = function() {
        return this.c.pa()
    };
    g.un = function() {
        return this.c.un()
    };
    g.yf = function() {
        return this.c.yf()
    };
    g.duplicate = function(a, b, c) {
        var d = new z(this.definition, this.c, this.Dg + "_d");
        d.Dd = !0;
        d.jc(b);
        d.setTransform(this.Fa());
        this.Zg && (d.Zg = this.Zg.duplicate(d), d.Hd(d.Zg, -16385));
        d.Ja();
        a.Zd(c);
        a.Hd(d, c);
        d.Nc(this.Wb);
        return d
    };
    g.ob = function() {
        var a = this.Zg;
        a || (this.Zg = a = new sf(this.c), a.Gd = !0, this.Hd(a, -16385));
        return a
    };
    g.$b = function(a) {
        if (this.qi && a != this.Uc) {
            var b;
            switch (a) {
                case 1:
                    b = "_up";
                    break;
                case 4:
                    b = "_down";
                    break;
                case 2:
                    b = "_over"
            }
            b && (b = this.definition.Xg.gk[b], l(b) && (this.Af(b, !1), this.c.ha.Nj()))
        }
        z.fa.$b.call(this, a)
    };
    g.sq = function(a, b, c) {
        var d = new xd;
        this.Ig(Dd(a));
        var e = this;
        d.yc = function(a) {
            pd(e, a)
        };
        Cd(a, this.c, b || void 0, c, d)
    };
    g.Dw = function() {
        var a = this.c.lc,
            b = this;
        return this.c.ha.xg(a.x, a.y, function(a) {
            return !b.contains(a) && a instanceof $i
        })
    };
    g.Mk = function() {
        return this.qi ? z.fa.Mk.call(this) : "default"
    };
    var Bi = function(a, b, c, d) {
        pi.call(this, a, b, c, d);
        this.eg = !0;
        this.ud = {}
    };
    v(Bi, pi);
    Bi.prototype.Ja = function() {
        Bi.fa.Ja.call(this);
        this.Cf(this.oa, 1);
        this.Cf(this.Ff, 8)
    };
    Bi.prototype.ka = function() {
        Bi.fa.ka.call(this)
    };
    Bi.prototype.Il = function(a, b) {
        b.Kg(this);
        this.ud[a] = b;
        a != this.Uc && 8 != a || this.Cf(8 == a ? this.Ff : this.oa, a)
    };
    Bi.prototype.Cf = function(a, b) {
        var c = this.ud[b];
        c != a.hd(1) && (a.Cp(1), c && a.pm(c, 1), this.la(16))
    };
    var tj = function(a, b) {
        bj.call(this, a, new sj(0, 0, null, null), "stage");
        this.backgroundColor = eh(b.backgroundColor).toString();
        this.ei = b.frameSize.xmax / 20;
        this.di = b.frameSize.ymax / 20;
        this.pd = "showAll";
        this.vg = this.ug = this.zd = this.Ad = this.Ue = 0;
        this.Jj = this.mf = Tc;
        this.td = this.sd = 1;
        this.la(1572864)
    };
    v(tj, bj);
    g = tj.prototype;
    g.Je = function(a, b, c, d, e) {
        a = tj.fa.Je.call(this, a, b, c, d, e);
        a === this.c.ub && (a = null);
        return !a && c(this) ? this : a
    };
    g.du = function(a) {
        this.pd != a && (this.pd = a, this.Om(), "noScale" == this.pd && (a = this.zd != this.di, (this.Ad != this.ei || a) && this.c.pa().Sm()))
    };
    g.Wt = function(a) {
        a = a.toUpperCase();
        var b = 0; - 1 < a.indexOf("L") && (b |= 1); - 1 < a.indexOf("T") && (b |= 2); - 1 < a.indexOf("R") && (b |= 4); - 1 < a.indexOf("B") && (b |= 8);
        this.Ue != b && (this.Ue = b, this.Om())
    };
    g.pv = function() {
        return this.Ue & 1 ? 0 : this.Ue & 4 ? 2 : 1
    };
    g.qv = function() {
        return this.Ue & 2 ? 0 : this.Ue & 8 ? 2 : 1
    };
    g.wp = function() {
        var a = this.c.Fd.offsetWidth,
            b = this.c.Fd.offsetHeight,
            c, d = this.c.Fd,
            e = c = 0;
        if (d.offsetParent) {
            do c += d.offsetLeft, e += d.offsetTop; while (d = d.offsetParent)
        }
        c = [c, e];
        d = c[0];
        c = c[1];
        e = !1;
        if (this.ug != d || this.vg != c) this.ug = d, this.vg = c, e = !0;
        if (this.Ad != a || this.zd != b) this.Ad = a, this.zd = b, "noScale" == this.pd && this.c.pa().Sm(), e = !0;
        e && this.Om()
    };
    g.Om = function() {
        var a = this.Ad,
            b = this.zd,
            c = this.ei,
            d = this.di;
        this.sd = c ? a / c : 1;
        this.td = d ? b / d : 1;
        switch (this.pd) {
            case "noScale":
                this.sd = this.td = 1;
                break;
            case "showAll":
                this.sd < this.td ? this.td = this.sd : this.sd = this.td;
                break;
            case "noBorder":
                this.sd > this.td ? this.td = this.sd : this.sd = this.td
        }
        var e = 0,
            f = 0;
        switch (this.pv()) {
            case 1:
                e = (a - c * this.sd) / 2;
                break;
            case 2:
                e = a - c * this.sd
        }
        switch (this.qv()) {
            case 1:
                f = (b - d * this.td) / 2;
                break;
            case 2:
                f = b - d * this.td
        }
        this.mf = dd(this.sd / 20, 0, 0, this.td / 20, e, f);
        this.Jj = this.mf.Bd();
        this.la(524288)
    };
    g.xc = function() {
        return !0
    };
    g.lj = function(a) {
        this.la(524288);
        this.backgroundColor = a ? a : "rgba(0,0,0,0)"
    };
    g.Nj = function() {
        this.la(1048576)
    };
    g.Ln = function(a) {
        return this.xg(a.x, a.y, function(a) {
            return a instanceof $i && a.Fk && a.Yg
        })
    };
    g.Mk = function() {
        return "default"
    };
    var uj = function() {};
    ef.i(jf, uj);
    ef.i($i, uj);
    g = uj.prototype;
    g.ed = function(a, b, c) {
        var d = !0;
        if (c & 16) d = this.Ii(a, b, c);
        else if (a.ze || c & 8) d = this.lk(a, b, c);
        c & 8 || (a.ia = 0);
        return d
    };
    g.Ii = function(a, b, c) {
        var d = a.Eq();
        return d ? this.Bx(a, b, c, d) : this.Ec(a, b, c)
    };
    g.Bx = function(a, b, c, d) {
        var e = a.Vl,
            f = a.Bg(),
            h = a.Da(),
            k = d.x.yb[0] + d.x.yb[2],
            n = k > d.x.size * d.x.scale ? d.x.size / k : 1 / d.x.scale,
            k = d.y.yb[0] + d.y.yb[2],
            r = k > d.y.size * d.y.scale ? d.y.size / k : 1 / d.y.scale;
        d = [f.k, e.k, e.t, f.t];
        var k = [f.j, e.j, e.s, f.s],
            t = new Uc(f.k + (e.k - f.k) * n, f.j + (e.j - f.j) * r),
            n = new Uc(f.t + (e.t - f.t) * n, f.s + (e.s - f.s) * r);
        b.Gp(t, h);
        b.Gp(n, h);
        for (var e = [f.k, t.x, n.x, f.t], f = [f.j, t.y, n.y, f.s], p = !0, n = new w, t = new w, s = this, r = function(b) {
            p = s.Ec(a, b, c) && p
        }, u = 0; 3 > u; ++u) {
            n.k = d[u];
            n.t = d[u + 1];
            t.k = e[u];
            t.t = e[u + 1];
            for (var x =
                0; 3 > x; ++x) n.j = k[x], n.s = k[x + 1], t.j = f[x], t.s = f[x + 1], b.zu(n, t, h, r)
        }
        return p
    };
    g.Ec = function() {
        return !1
    };
    g.lk = function(a, b, c) {
        var d;
        d = a.Oc;
        if (!d) return this.Ii(a, b, c);
        b = b.Uq(d.Bg(), d.Da());
        d = ef.uc(d).ed(d, b, 16 | c);
        b = b.Tq();
        d = this.Ii(a, b, c) && d;
        b.tn();
        return d
    };
    g.ka = function() {};
    var vj = function() {};
    v(vj, uj);
    ef.i(pf, vj);
    vj.prototype.Ec = function(a, b, c) {
        var d = a.pc;
        a = b.pf(a.Da());
        c & 24 ? a.fillRect(0, 0, 20 * d.Ia(), 20 * d.Xa()) : a.drawImage(d.Ce(), 0, 0, 20 * d.Ia(), 20 * d.Xa());
        return !0
    };
    var wj = function() {};
    v(wj, uj);
    ef.i(yh, wj);
    wj.prototype.Ec = function(a, b, c) {
        b = b.pf(a.Da());
        var d = a.Kj();
        if (c & 8) return b.fillRect(d.k, d.j, d.width(), d.height()), !0;
        c & 16 || (b.save(), b.beginPath(), b.rect(d.k, d.j, d.width(), d.height()), a.Zh && (d = eh(4294967295), d = a.Mc().apply(d), b.fillStyle = d.Cd(), b.fill(), d = eh(4278190080), a.Mc().apply(d), b.strokeStyle = eh(4278190080).Cd(), b.lineWidth = 10, b.stroke()), b.clip());
        a.Uj(new xj(b, a, !!(c & 16)));
        c & 16 || b.restore();
        return !0
    };
    var xj = function(a, b, c) {
        this.Wu = a;
        this.Vu = c;
        this.m = b
    };
    xj.prototype.ri = function(a, b, c, d, e) {
        var f = this.Wu,
            h = this.m;
        if (!this.Vu) {
            var k = eh(a.format.color),
                k = h.Mc().apply(k);
            f.fillStyle = k.Cd()
        }
        if (a.format.ah()) {
            if (h = a.format.font, h instanceof Kf && h.ascent && h.emSquareSize) {
                h = a.format.size / h.emSquareSize;
                a = a.Wm(b, c, d, e);
                f.save();
                f.scale(h, h);
                for (e = 0; e < a.length; e++) b = a[e], f.beginPath(), b.wg(f), f.fill();
                f.restore()
            }
        } else {
            e = "";
            a.format.bold && (e += "bold ");
            a.format.italic && (e += "italic ");
            e += a.format.size + "px";
            e += " " + a.format.ln();
            f.font = e;
            c += .9 * d;
            h = a.Oa;
            if (a.format.letterSpacing)
                for (k =
                    b, e = 0; e < h.length; e++) {
                    var n = h[e];
                    f.fillText(n, k, c);
                    k += f.measureText(n).width + a.format.letterSpacing
                } else f.fillText(h, b, c);
            a.format.Mb && this.Xu(f, b, c, d, a.Ia())
        }
    };
    xj.prototype.Xu = function(a, b, c, d, e) {
        a.save();
        a.beginPath();
        d *= 1 - .9;
        a.moveTo(b, c + d);
        a.lineTo(b + e, c + d);
        a.setTransform(1, 0, 0, 1, 0, 0);
        a.lineWidth = 1;
        a.stroke();
        a.restore()
    };
    var Kg = new Gg("canvas isolate"),
        yj = function(a) {
            this.m = a;
            this.Nm = null
        };
    Kg.i(qf, yj);
    Kg.i(sf, yj);
    Kg.i(Hf, yj);
    Kg.i(yh, yj);
    Kg.i(z, yj);
    Kg.i(pi, yj);
    Kg.i(pf, yj);
    Kg.i(Eg, yj);
    Kg.i(Bi, yj);
    Kg.i(tj, yj);
    yj.prototype.ed = function(a, b, c) {
        var d = !0;
        if (a.ze) {
            var e = a.Xj(),
                f = this.Nm,
                h = b.mm(a.pb().qb, a.Da(), a.dm()),
                k = !!f && !f.Uu(h, b);
            if (!f || a.ia || k || c & 64) f = this.Nm = b.ji(h, f && f.Ce()), d = this.lk(a, f, c), this.Nu(a, f), e.ai() || (c = f.getImageData(), Vg(c.data, e), f.putImageData(c));
            c = 1;
            e.ai() && (c = e.fm(1));
            a.Eb ? b.qk(f, c) : b.Ou(f, a.Zl(), c)
        } else this.Nm = null;
        a.ia = 0;
        return d
    };
    yj.prototype.Nu = function(a, b) {
        for (var c = a.Fb, d = 0; d < c.length; ++d) c[d].Xb(ef).apply(c[d], b)
    };
    yj.prototype.lk = function(a, b, c) {
        var d = a.Oc,
            e = ef.uc(a);
        if (!d) return e.Ii(a, b, c);
        if (!d.xc()) return e.lk(a, b, c);
        a = e.Ii(a, b, c);
        return Lg(d).ed(d, b, c) && a
    };
    yj.prototype.ka = function() {};
    var zj = function() {};
    v(zj, uj);
    ef.i(qf, zj);
    ef.i(sf, zj);
    zj.prototype.Ec = function(a, b, c) {
        return c & 24 || !a.kp(b.Qa.n, b.Qa.l) ? this.fv(a, b, c) : this.ev(a, b)
    };
    zj.prototype.ev = function(a, b) {
        var c = a.definition;
        b.pf(a.Da()).drawImage(c.Oj, c.im, c.jm, c.hm, c.gm);
        return !0
    };
    zj.prototype.fv = function(a, b, c) {
        for (var d = a.definition, e = b.pf(a.Da()), f = a.Mc(), h = !0, k = 0; k < d.paths.length; k++) {
            var n = d.paths[k],
                r = n.data.tb(a),
                t = null != n.line ? d.linestyles[n.line] : null,
                n = null != n.fill ? d.fillstyles[n.fill] : null;
            e.beginPath();
            r.wg(e);
            n && (c & 24 ? e.fill() : h = n.Cc(a, e, f) && h);
            !t || c & 16 || (c & 8 ? t.Im(a, b, e, r) : h = t.Gv(a, b, e, r, f) && h)
        }
        return h
    };
    var Aj = function() {};
    v(Aj, uj);
    ef.i(Hf, Aj);
    Aj.prototype.Ec = function(a, b, c) {
        var d = a.definition;
        b = b.pf(a.Da());
        for (var e = 0; e < d.records.length; e++) {
            var f = d.records[e],
                h = d.lm(e);
            b.beginPath();
            h.wg(b);
            c & 24 || (f = eh(f.color), f = a.Mc().apply(f), b.fillStyle = f.Cd());
            b.fill()
        }
        c & 8 && 1 === d.mode && (a = d.bounds, a.sb() || b.fillRect(a.k, a.j, a.t - a.k, a.s - a.j));
        return !0
    };
    var Bj = function() {};
    v(Bj, uj);
    ef.i(Eg, Bj);
    Bj.prototype.Ec = function() {
        return !0
    };
    var Cj = function(a) {
        lh.call(this, a)
    };
    v(Cj, lh);
    kh.i(bj, Cj);
    kh.i(pi, Cj);
    kh.i(Bi, Cj);
    kh.i(z, Cj);
    Cj.prototype.Rf = function(a) {
        a = this.m.Fa().multiply(a);
        for (var b = "", c = this.m.oa.Ra; c;) b += c.Xb(kh).tq(a), c = c.nextSibling;
        return b
    };
    var Dj = function(a) {
        lh.call(this, a);
        this.er = this.Ok = null
    };
    v(Dj, lh);
    kh.i(yh, Dj);
    Dj.prototype.Rf = function(a) {
        this.Ok = "";
        this.er = a;
        this.m.Uj(this);
        return this.Ok
    };
    Dj.prototype.ri = function(a, b, c, d, e) {
        var f = a.format.font;
        if (f instanceof Kf && f.ascent && f.emSquareSize)
            for (f = a.format.size / f.emSquareSize, f = this.m.Fa().Mi(f, f).multiply(this.er), a = a.Wm(b, c, d, e), b = 0; b < a.length; b++) this.Ok += a[b].Hk(f)
    };
    var Ej = function() {};
    ph.i(jf, Ej);
    ph.i(sf, Ej);
    ph.i(Hf, Ej);
    ph.i(pf, Ej);
    ph.i(Eg, Ej);
    ph.i(qf, Ej);
    Ej.prototype.ed = function(a, b) {
        if (a.ia) {
            a.Xj();
            this.Ec(a, b);
            if (a.Oc) {
                var c = a.Oc;
                c.Xb(ph).ed(c, 16 | b)
            }
            a.ia = 0
        }
    };
    Ej.prototype.Ec = function() {};
    Ej.prototype.ka = function() {};
    var Fj = function() {};
    v(Fj, Ej);
    ph.i(bj, Fj);
    ph.i(z, Fj);
    ph.i(tj, Fj);
    ph.i(pi, Fj);
    ph.i(Bi, Fj);
    Fj.prototype.Ec = function(a, b) {
        if (a.ia & 65552)
            for (var c = a.oa.Ra; c; c = c.nextSibling) c.Eb || c.Xb(ph).ed(c, b)
    };
    var Gj = function(a) {
        this.c = a;
        a = B("svg");
        a.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        a.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
        this.gc = a;
        this.gc.setAttribute("color-interpolation-filters", "sRGB");
        this.gc.setAttribute("fill-rule", "evenodd");
        this.gc.setAttribute("pointer-events", "none");
        this.gc.setAttribute("width", "100%");
        this.gc.setAttribute("height", "100%");
        this.gc.style.MozUserSelect = "none";
        this.gc.style.webkitUserSelect = "none";
        this.gc.style.Qz =
            "none";
        this.gc.style.Rz = "none";
        this.Jm = B("g");
        this.gc.appendChild(this.Jm);
        this.Df = B("defs");
        this.gc.appendChild(this.Df)
    };
    Ah.Yo(Gj);
    g = Gj.prototype;
    g.Zi = function(a) {
        a.appendChild(this.gc)
    };
    g.Do = function(a) {
        this.Df.appendChild(a.Df)
    };
    g.In = function() {
        var a = this.c.ha;
        if (a.ia & 1048576 && (a.ia &= -1048577, a.ia)) {
            a.ia & 524288 && this.Jm.setAttribute("transform", a.mf.toString());
            var b = wh(a),
                a = this.Jm,
                b = b.Lb(0, []),
                c = a.firstChild;
            c != b && (c ? a.replaceChild(b, c) : a.appendChild(b))
        }
    };
    g.ka = function() {
        this.c.ha.Ai()
    };
    g.um = function(a) {
        a = a.toDataURL("image/png");
        return "data:image/png" == a.substr(0, 14) ? a : null
    };
    var Bh = new Gg("svg clipPath"),
        Hj = function(a) {
            this.m = a;
            this.qc = null;
            this.Mq = kh.uc(this.m);
            this.nb = null
        };
    Hj.prototype.Lb = function(a, b, c) {
        this.nb || (this.nb = B("clipPath"), this.nb.id = this.ae(), a = B("path"), this.nb.appendChild(a));
        b = this.Mq.tq(Tc);
        a = this.nb.firstChild;
        a.setAttribute("d", b || "M 0 0");
        c ? a.setAttribute("transform", c.toString()) : a.removeAttribute("transform");
        return this.nb
    };
    Hj.prototype.ae = function() {
        null == this.qc && (this.qc = zc.Jb().Kb());
        return this.qc
    };
    Hj.prototype.Pc = function() {
        return this.m.Pc()
    };
    Hj.prototype.ka = function() {
        this.Mq.ka()
    };
    Bh.i(qf, Hj);
    Bh.i(sf, Hj);
    Bh.i(Hf, Hj);
    Bh.i(yh, Hj);
    Bh.i(z, Hj);
    Bh.i(pi, Hj);
    Bh.i(Bi, Hj);
    var Ij = new Gg("svg mask"),
        Jj = function(a) {
            this.m = a;
            this.qc = null;
            this.nm = Ah.uc(this.m);
            this.Ya = this.Fe = this.nb = null
        };
    Jj.prototype.Lb = function(a, b, c) {
        if (!this.nb) {
            this.nb = B("mask");
            this.nb.setAttribute("maskUnits", "userSpaceOnUse");
            this.nb.id = this.ae();
            this.Fe = B("g");
            this.nb.appendChild(this.Fe);
            this.Ya = B("filter");
            this.Ya.setAttribute("filterUnits", "userSpaceOnUse");
            this.Ya.id = zc.Jb().Kb();
            var d = Kj(1, 1, 1, 0);
            this.Ya.appendChild(d);
            this.nb.appendChild(this.Ya);
            this.Fe.setAttribute("filter", "url(#" + this.Ya.id + ")")
        }
        d = this.m;
        if (d.ia & 16385) {
            var e = d.pb().qb,
                e = e.clone();
            e.ja(d.Fa());
            e.Wd(this.nb);
            e.Wd(this.Ya)
        }
        this.nm.Lb(a |
            4, b);
        a = this.nm.Bm();
        b = this.Fe.firstChild;
        b != a && (b ? (b.removeAttribute("filter"), this.Fe.replaceChild(a, b)) : this.Fe.appendChild(a));
        c ? this.Fe.setAttribute("transform", c.toString()) : this.Fe.removeAttribute("transform");
        return this.nb
    };
    Jj.prototype.ae = function() {
        null == this.qc && (this.qc = zc.Jb().Kb());
        return this.qc
    };
    Jj.prototype.Pc = function() {
        return this.m.Pc()
    };
    Jj.prototype.ka = function() {
        this.nm.ka()
    };
    Ij.i(qf, Jj);
    Ij.i(sf, Jj);
    Ij.i(Hf, Jj);
    Ij.i(yh, Jj);
    Ij.i(z, Jj);
    Ij.i(pi, Jj);
    Ij.i(Bi, Jj);
    var Lj = function(a, b, c, d) {
        gi.call(this, a.id);
        this.font = d || null;
        this.height = a.height;
        this.color = l(a.color) ? a.color : 4278190080;
        this.text = a.text;
        this.align = !l(a.align) || a.html && 7 >= c ? 0 : a.align;
        this.bounds = b;
        this.html = !!a.html;
        this.wrap = !!a.wrap;
        this.multiline = !!a.multiline;
        this.indent = a.indent;
        this.leading = a.leading;
        this.leftMargin = a.leftMargin;
        this.rightMargin = a.rightMargin;
        this.border = !!a.border;
        this.variable = a.variable || null;
        this.Sa = 6 <= c;
        this.selectable = !!a.selectable;
        this.editable = !!a.editable;
        this.password = !!a.password;
        this.maxChars = a.maxChars || null;
        this.hp = !!a.embed;
        this.autoSize = a.autoSize ? "left" : "none"
    };
    v(Lj, gi);
    ci[13] = function(a, b, c) {
        c = l(a.font) ? c.af(a.font) : null;
        return new Lj(a, kd(a.bounds), b.xe, c)
    };
    Lj.prototype.Bc = function(a, b, c) {
        return new yh(this, a, b, c)
    };
    var sj = function(a, b, c, d) {
        ii.call(this, a, d);
        this.$p = [];
        this.Xg = new Mi([], []);
        this.frameCount = b;
        this.scaleRect = c;
        this.tags = [];
        this.El = []
    };
    v(sj, ii);
    var od = function(a, b, c, d) {
        var e = l(a.scaleRect) ? kd(a.scaleRect) : null,
            e = new sj(a.id, a.frameCount, e, c.Id);
        l(a.id) || c.Es(0, e);
        if (!d)
            if (d = a.digest) {
                var f = Id[d],
                    h = new Gd(f);
                f || (Id[d] = h.zs);
                d = h
            } else d = Hd;
        for (var k = h = f = 0; a.tags && k < a.tags.length; k++) {
            var n = a.tags[k];
            if (2 == n.type) f++, h = 0;
            else {
                var r = ci[n.type];
                r && (h++, r(n, b, c, d, void 0).Nb(e, b, c, f))
            }
        }
        e.Zw();
        return e
    };
    ci[7] = od;
    sj.prototype.Sa = !0;
    sj.prototype.Bc = function(a, b, c) {
        a = new z(this, a, b, c);
        this.scaleRect && a.Jz(this.scaleRect);
        return a
    };
    sj.prototype.Zw = function() {
        for (var a = [], b = 0; b < this.frameCount; ++b) {
            for (var c = this.tags[b], d = [], e = 0; e < a.length; ++e) a[e].Io(d);
            if (c)
                for (e = 0; e < c.length; ++e) c[e].yj(d);
            a = this.$p[b] = d
        }
    };
    var ij = function(a, b, c, d, e, f, h) {
            this.ta = a;
            this.variables = b;
            this.url = c;
            this.target = d || "_self";
            this.method = e;
            this.rq = !!f;
            this.fn = !!h;
            this.Tm = null;
            if (this.rq || this.fn) this.Tm = this.Aw()
        },
        Mj = {
            0: void 0,
            1: "GET",
            2: "POST"
        };
    g = ij.prototype;
    g.Tx = function(a) {
        var b = this.target.match(/^\_level(\d+)$/i);
        if (this.rq) return this.fn ? b ? this.vq(Number(b[1])) : this.Tu() : this.Su(), !0;
        if (b) return this.fn ? this.vq(Number(b[1])) : this.Ru(Number(b[1])), !0;
        if ("" == this.url) return !0;
        if (this.url.match(/^fscommand:/i)) return this.Qu(), !0;
        b = this.target;
        if ("_self" != b) {
            if (!a) return !1
        } else this.ta.c.Pu() && (b = "_parent");
        a = this.url;
        switch (this.method) {
            case 2:
                var c = vb("form");
                c.acceptCharset = "utf-8";
                c.method = "post";
                m(this.variables) ? c.appendChild(vb("input", {
                    type: "hidden",
                    name: this.variables
                })) : Nj(this.variables, function(a, b) {
                    c.appendChild(vb("input", {
                        type: "hidden",
                        name: a,
                        value: b
                    }))
                });
                c.action = this.ta.c.bm(a, "POST", b);
                c.target = b;
                c.style.visibility = "hidden";
                document.body.appendChild(c);
                c.submit();
                zb(c);
                break;
            case 1:
                a = td(this.variables, a), a = a.replace(/%20/g, "+");
            default:
                window.open(this.ta.c.bm(a, "GET", b), b)
        }
        return !0
    };
    g.Qu = function() {
        var a = this.ta.c.getName();
        if (a) {
            var a = a + "_DoFSCommand",
                b = this.url.substr(10),
                c = this.target;
            if (window[a]) window[a](b, c)
        }
    };
    g.Ru = function(a) {
        var b = this.ta.c;
        b.ha.Zd(-16384 + a);
        if (this.url) {
            var c = new xd;
            c.yc = function(c) {
                qd(b, a, c)
            };
            Cd(this.url, b, Mj[this.method], this.variables, c)
        }
    };
    g.Su = function() {
        var a = this.Tm,
            b = Mj[this.method];
        if (a instanceof D) {
            var c = a.__swiffy_d;
            if (c) {
                var d = c.c.pa().Ua(this.url);
                c.sq(d, b, a)
            }
        }
    };
    g.Tu = function() {
        var a = this.Tm,
            b = Mj[this.method];
        a instanceof D && a.loadVariables.call(a, this.url, b)
    };
    g.vq = function(a) {
        var b = this.ta.c;
        zd(this.url, b, Mj[this.method], this.variables, function() {
            var c = b.Ku(a);
            c || (c = new sj(0, 0, null, {}), c = new z(c, b, null), b.$l(c, a), c.Ja(), c.Dd = !0);
            return c
        })
    };
    g.Aw = function() {
        return this.ta.Ke("_self" == this.target ? "this" : this.target)
    };
    var Oj = 1,
        Pj = function(a, b) {
            a.prototype = Object.create(b.prototype);
            a.prototype.constructor = a
        },
        G = function(a, b, c) {
            c && Pj(a, c);
            a.prototype ? (c = a.prototype.__swiffy_as2_classdef || null, Object.defineProperty(a.prototype, "__swiffy_as2_classdef", {
                value: a
            })) : c = Object;
            Object.defineProperty(a, "__swiffy_as2_typeid", {
                value: Oj++
            });
            Object.defineProperty(a, "__swiffy_as2_baseclass", {
                value: c
            });
            Object.defineProperty(a, "__swiffy_as2_name", {
                value: b
            })
        };
    G(Object, "Object");
    var H = function(a, b, c, d) {
        b = null == b ? Object.getOwnPropertyNames(a) : m(b) ? b.split(",") : b;
        var e = {};
        d & 4 && (e.writable = !0);
        d & 2 && (e.configurable = !0);
        d & 1 && (e.enumerable = !0);
        c & 4 && (e.writable = !1);
        c & 2 && (e.configurable = !1);
        c & 1 && (e.enumerable = !1);
        for (c = 0; c < b.length; ++c)(d = Object.getOwnPropertyDescriptor(a, b[c])) && d.configurable && Object.defineProperty(a, b[c], e)
    };
    var Qj = function(a) {
        Object.defineProperty(this, "__swiffy_vm", {
            value: a
        })
    };
    G(Qj, "AsBroadcaster");
    var Rj = function(a, b) {
            for (var c = Array.prototype.slice.call(arguments, 2), d = 0; d < this._listeners.length; ++d) {
                var e = this._listeners[d];
                if (null != e) {
                    var f = e[a.na(e, b)];
                    q(f) && f.apply(e, c)
                }
            }
            return 0 < this._listeners.length ? !0 : void 0
        },
        Sj = function(a) {
            null != a ? Ia(this._listeners, a) : Ja(this._listeners, function(a) {
                return null == a
            });
            this._listeners.push(a);
            return !0
        },
        Tj = function(a) {
            return Ia(this._listeners, a)
        };
    Qj.prototype.initialize = function(a) {
        ia(a) && (a._listeners = [], a.addListener = Sj, a.broadcastMessage = oa(Rj, this.__swiffy_vm), a.removeListener = Tj, H(a, ["addListener", "broadcastMessage", "removeListener", "_listeners"], 3))
    };
    H(Qj.prototype, null, 3);
    var Uj = function() {};
    G(Uj, "BitmapFilter");
    var Be = function(a, b, c, d, e, f, h, k, n, r, t, p) {
        this.angle = l(b) ? b : 45;
        this.blurX = l(h) ? h : 4;
        this.blurY = l(k) ? k : 4;
        this.distance = l(a) ? a : 4;
        this.highlightAlpha = l(d) ? d : 1;
        this.highlightColor = l(c) ? c : 16777215;
        this.knockout = l(p) ? p : !1;
        this.quality = l(r) ? r : 1;
        this.shadowAlpha = l(f) ? f : 1;
        this.shadowColor = l(e) ? e : 0;
        this.strength = l(n) ? n : 1;
        this.type = l(t) ? t : "inner";
        H(this, null, 3);
        Object.defineProperty(this, "__swiffy_v", {
            get: function() {
                return new Ae(this.angle * Math.PI / 180, hd(this.highlightColor, this.highlightAlpha), hd(this.shadowColor,
                    this.shadowAlpha), this.distance, this.strength, this.quality, this.blurX, this.blurY, ye(this.type, this.knockout))
            }
        })
    };
    G(Be, "BevelFilter", Uj);
    var ne = function(a, b, c) {
        this.blurX = l(a) ? a : 4;
        this.blurY = l(b) ? b : 4;
        this.quality = l(c) ? c : 1;
        H(this, null, 3);
        Object.defineProperty(this, "__swiffy_v", {
            get: function() {
                return new me(this.quality, this.blurX, this.blurY)
            }
        })
    };
    G(ne, "BlurFilter", Uj);
    var Vj = function(a) {
        Object.defineProperty(this, "__swiffy_v", {
            value: {
                xf: this.__swiffy_vm.eh(a),
                as: 0
            }
        })
    };
    G(Vj, "Color");
    Si(Vj);
    Vj.prototype.getRGB = function() {
        var a = this.__swiffy_v.xf;
        return a && a.__swiffy_d ? this.__swiffy_v.as : void 0
    };
    Vj.prototype.setRGB = function(a) {
        var b = this.__swiffy_v.xf;
        b && (b = b.__swiffy_d) && (this.__swiffy_v.as = a, b.Nc(new id(0, (a & 16711680) >> 16, 0, (a & 65280) >> 8, 0, a & 255, 1, 0)), b.hb())
    };
    Vj.prototype.setTransform = function(a) {
        var b = this.__swiffy_v.xf;
        if (b && a && (b = b.__swiffy_d)) {
            var c = this.__swiffy_vm,
                d = c.na(a, "ra"),
                e = c.na(a, "rb"),
                f = c.na(a, "ga"),
                h = c.na(a, "gb"),
                k = c.na(a, "ba"),
                n = c.na(a, "bb"),
                r = c.na(a, "aa"),
                c = c.na(a, "ab"),
                t = b.Wb;
            b.Nc(new id(l(a[d]) ? a[d] / 100 : t.Ca, l(a[e]) ? a[e] : t.xa, l(a[f]) ? a[f] / 100 : t.Ba, l(a[h]) ? a[h] : t.wa, l(a[k]) ? a[k] / 100 : t.Aa, l(a[n]) ? a[n] : t.va, l(a[r]) ? a[r] / 100 : t.sa, l(a[c]) ? a[c] : t.ya));
            b.hb()
        }
    };
    Vj.prototype.getTransform = function() {
        var a = this.__swiffy_v.xf;
        if (a && (a = a.__swiffy_d)) return a = a.Wb, {
            ra: 100 * a.Ca,
            rb: a.xa,
            ga: 100 * a.Ba,
            gb: a.wa,
            ba: 100 * a.Aa,
            bb: a.va,
            aa: 100 * a.sa,
            ab: a.ya
        }
    };
    H(Vj.prototype, null, 3);
    var se = function(a) {
        this.matrix = l(a) ? a : [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
        H(this, null, 3);
        Object.defineProperty(this, "__swiffy_v", {
            get: function() {
                return new re(this.matrix)
            }
        })
    };
    G(se, "ColorMatrixFilter", Uj);
    var Wj = function(a, b, c, d, e, f, h, k) {
        a = l(a) ? a : 1;
        b = l(b) ? b : 1;
        c = l(c) ? c : 1;
        d = l(d) ? d : 1;
        e = l(e) ? e : 0;
        f = l(f) ? f : 0;
        h = l(h) ? h : 0;
        k = l(k) ? k : 0;
        Object.defineProperty(this, "__swiffy_v", {
            writable: !0,
            value: new id(a, e, b, f, c, h, d, k)
        })
    };
    G(Wj, "ColorTransform", Xj);
    var Yj = function(a) {
        return new Wj(a.Ca, a.Ba, a.Aa, a.sa, a.xa, a.wa, a.va, a.ya)
    };
    Object.defineProperty(Wj.prototype, "redMultiplier", {
        get: function() {
            return this.__swiffy_v.Ca
        },
        set: function(a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = new id(Number(a), b.xa, b.Ba, b.wa, b.Aa, b.va, b.sa, b.ya)
        }
    });
    Object.defineProperty(Wj.prototype, "greenMultiplier", {
        get: function() {
            return this.__swiffy_v.Ba
        },
        set: function(a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = new id(b.Ca, b.xa, Number(a), b.wa, b.Aa, b.va, b.sa, b.ya)
        }
    });
    Object.defineProperty(Wj.prototype, "blueMultiplier", {
        get: function() {
            return this.__swiffy_v.Aa
        },
        set: function(a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = new id(b.Ca, b.xa, b.Ba, b.wa, Number(a), b.va, b.sa, b.ya)
        }
    });
    Object.defineProperty(Wj.prototype, "alphaMultiplier", {
        get: function() {
            return this.__swiffy_v.sa
        },
        set: function(a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = new id(b.Ca, b.xa, b.Ba, b.wa, b.Aa, b.va, Number(a), b.ya)
        }
    });
    Object.defineProperty(Wj.prototype, "redOffset", {
        get: function() {
            return this.__swiffy_v.xa
        },
        set: function(a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = new id(b.Ca, Number(a), b.Ba, b.wa, b.Aa, b.va, b.sa, b.ya)
        }
    });
    Object.defineProperty(Wj.prototype, "greenOffset", {
        get: function() {
            return this.__swiffy_v.wa
        },
        set: function(a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = new id(b.Ca, b.xa, b.Ba, Number(a), b.Aa, b.va, b.sa, b.ya)
        }
    });
    Object.defineProperty(Wj.prototype, "blueOffset", {
        get: function() {
            return this.__swiffy_v.va
        },
        set: function(a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = new id(b.Ca, b.xa, b.Ba, b.wa, b.Aa, Number(a), b.sa, b.ya)
        }
    });
    Object.defineProperty(Wj.prototype, "alphaOffset", {
        get: function() {
            return this.__swiffy_v.ya
        },
        set: function(a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = new id(b.Ca, b.xa, b.Ba, b.wa, b.Aa, b.va, b.sa, Number(a))
        }
    });
    Object.defineProperty(Wj.prototype, "rgb", {
        get: function() {
            return (this.__swiffy_v.xa << 16 | this.__swiffy_v.wa << 8 | this.__swiffy_v.va) >>> 0
        },
        set: function(a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = new id(0, a >> 16 & 255, 0, a >> 8 & 255, 0, a & 255, b.sa, b.ya)
        }
    });
    Wj.prototype.concat = function(a) {
        this.__swiffy_v = this.__swiffy_v.Gn(a.__swiffy_v)
    };
    Wj.prototype.toString = function() {
        return "(redMultiplier=" + this.__swiffy_v.Ca + ", greenMultiplier=" + this.__swiffy_v.Ba + ", blueMultiplier=" + this.__swiffy_v.Aa + ", alphaMultiplier=" + this.__swiffy_v.sa + ", redOffset=" + this.__swiffy_v.xa + ", greenOffset=" + this.__swiffy_v.wa + ", blueOffset=" + this.__swiffy_v.va + ", alphaOffset=" + this.__swiffy_v.ya + ")"
    };
    var Ee = function(a, b, c, d, e, f, h, k, n) {
        this.matrixX = l(a) ? a : 0;
        this.matrixY = l(b) ? b : 0;
        var r = [];
        Object.defineProperty(this, "matrix", {
            get: function() {
                return r
            },
            set: function(a) {
                var b = this.matrixY * this.matrixX;
                r = null != a ? a : [];
                if (r.length > b) r.length = b;
                else
                    for (; r.length < b;) r.push(0)
            }
        });
        this.matrix = c;
        this.bias = l(e) ? e : 0;
        this.preserveAlpha = l(f) ? f : !0;
        this.clamp = l(h) ? h : !0;
        this.color = l(k) ? k : 0;
        this.alpha = l(n) ? n : 0;
        this.divisor = l(d) ? d : 1;
        H(this, null, 3);
        Object.defineProperty(this, "__swiffy_v", {
            get: function() {
                return new De(this.bias,
                    this.clamp, hd(this.color, this.alpha), this.divisor, this.matrix, this.matrixX, this.matrixY, this.preserveAlpha)
            }
        })
    };
    G(Ee, "ConvolutionFilter", Uj);
    var Ie = function(a, b, c, d, e, f, h, k, n, r, t) {
        this.angle = l(b) ? b : 45;
        this.blurX = l(e) ? e : 4;
        this.blurY = l(f) ? f : 4;
        this.distance = l(a) ? a : 4;
        this.alpha = l(d) ? d : 1;
        this.color = l(c) ? c : 0;
        this.knockout = l(r) ? r : !1;
        this.quality = l(k) ? k : 1;
        this.strength = l(h) ? h : 1;
        this.inner = l(n) ? n : !1;
        this.hideObject = l(t) ? t : !1;
        H(this, null, 3);
        Object.defineProperty(this, "__swiffy_v", {
            get: function() {
                return new Ge(this.angle * Math.PI / 180, hd(this.color, this.alpha), this.distance, this.strength, this.quality, this.blurX, this.blurY, He(this.hideObject, this.inner,
                    this.knockout))
            }
        })
    };
    G(Ie, "DropShadowFilter", Uj);
    var Zj = function(a) {
        this.name = "Error";
        this.message = l(a) ? a : "Error"
    };
    G(Zj, "Error");
    Zj.prototype.toString = function() {
        return this.message
    };
    H(Zj.prototype, null, 3);
    var ak = function() {};
    G(ak, "ExternalInterface");
    Object.defineProperty(ak, "available", {
        get: We
    });
    ak.call = function(a, b) {
        return af(String(a), Array.prototype.slice.call(arguments, 1))
    };
    ak.addCallback = function(a, b, c) {
        return Ze(String(a), l(b) ? b : null, c)
    };
    H(ak, null, 3);
    var bk = function(a, b, c, d, e, f, h, k) {
        this.blurX = l(c) ? c : 6;
        this.blurY = l(d) ? d : 6;
        this.alpha = l(b) ? b : 1;
        this.color = l(a) ? a : 16711680;
        this.knockout = l(k) ? k : !1;
        this.quality = l(f) ? f : 1;
        this.strength = l(e) ? e : 2;
        this.inner = l(h) ? h : !1;
        H(this, null, 3);
        Object.defineProperty(this, "__swiffy_v", {
            get: function() {
                return new Ge(0, hd(this.color, this.alpha), 0, this.strength, this.quality, this.blurX, this.blurY, He(!1, this.inner, this.knockout))
            }
        })
    };
    G(bk, "GlowFilter", Uj);
    var Me = function(a, b, c, d, e, f, h, k, n, r, t) {
        this.distance = l(a) ? a : 4;
        this.angle = l(b) ? b : 45;
        var p = [];
        Object.defineProperty(this, "colors", {
            enumerable: !0,
            get: function() {
                return p
            },
            set: function(a) {
                p = ea(a) ? a : [];
                for (a = 0; a < p.length; a++) p[a] = (null != p[a] ? Number(p[a]) : 16711680) % 16777216
            }
        });
        this.colors = c;
        var s = [];
        Object.defineProperty(this, "alphas", {
            enumerable: !0,
            get: function() {
                return s
            },
            set: function(a) {
                s = ea(a) ? a : [];
                a = l(p) ? p.length : 0;
                for (var b = 0; b < a; b++) s[b] = Math.min(1, Math.floor(Number(255 * (null != s[b] ? Number(s[b]) :
                    1))) / 255);
                s.length = a
            }
        });
        this.alphas = d;
        var u = [];
        Object.defineProperty(this, "ratios", {
            enumerable: !0,
            get: function() {
                return u
            },
            set: function(a) {
                u = ea(a) ? a : [];
                a = l(p) ? p.length : 0;
                for (var b = 0; b < a; b++) {
                    var c = null != u[b] ? Number(u[b]) : 0,
                        c = Math.floor(c);
                    0 > c ? c = 0 : 255 < c && (c = 255);
                    u[b] = c
                }
                u.length = a
            }
        });
        this.ratios = e;
        this.blurX = l(f) ? f : 4;
        this.blurY = l(h) ? h : 4;
        this.quality = l(n) ? n : 1;
        this.strength = l(k) ? k : 1;
        this.knockout = l(t) ? t : !1;
        this.type = l(r) ? r : "inner";
        Object.defineProperty(this, "__swiffy_v", {
            get: function() {
                return new Ke(this.angle *
                    Math.PI / 180, p, s, u, this.distance, this.strength, this.quality, this.blurX, this.blurY, ye(this.type, this.knockout))
            }
        })
    };
    G(Me, "GradientBevelFilter", Uj);
    var Pe = function(a, b, c, d, e, f, h, k, n, r, t) {
        this.distance = l(a) ? a : 4;
        this.angle = l(b) ? b : 45;
        var p = [];
        Object.defineProperty(this, "colors", {
            enumerable: !0,
            get: function() {
                return p
            },
            set: function(a) {
                p = ea(a) ? a : [];
                for (a = 0; a < p.length; a++) p[a] = (null != p[a] ? Number(p[a]) : 16711680) % 16777216
            }
        });
        this.colors = c;
        var s = [];
        Object.defineProperty(this, "alphas", {
            enumerable: !0,
            get: function() {
                return s
            },
            set: function(a) {
                s = ea(a) ? a : [];
                a = l(p) ? p.length : 0;
                for (var b = 0; b < a; b++) s[b] = Math.min(1, Math.floor(Number(255 * (null != s[b] ? Number(s[b]) :
                    1))) / 255);
                s.length = a
            }
        });
        this.alphas = d;
        var u = [];
        Object.defineProperty(this, "ratios", {
            enumerable: !0,
            get: function() {
                return u
            },
            set: function(a) {
                u = ea(a) ? a : [];
                a = l(p) ? p.length : 0;
                for (var b = 0; b < a; b++) {
                    var c = null != u[b] ? Number(u[b]) : 0,
                        c = Math.floor(c);
                    0 > c ? c = 0 : 255 < c && (c = 255);
                    u[b] = c
                }
                u.length = a
            }
        });
        this.ratios = e;
        this.blurX = l(f) ? f : 4;
        this.blurY = l(h) ? h : 4;
        this.quality = l(n) ? n : 1;
        this.strength = l(k) ? k : 1;
        this.knockout = l(t) ? t : !1;
        this.type = l(r) ? r : "inner";
        Object.defineProperty(this, "__swiffy_v", {
            get: function() {
                return new Oe(this.angle *
                    Math.PI / 180, p, s, u, this.distance, this.strength, this.quality, this.blurX, this.blurY, ye(this.type, this.knockout))
            }
        })
    };
    G(Pe, "GradientGlowFilter", Uj);
    var ck = function() {
        this.$a = {};
        this.lo = this.wl = 0;
        H(this, null, 3)
    };
    G(ck, "Key");
    ck.prototype.getAscii = function() {
        return this.lo
    };
    ck.prototype.getCode = function() {
        return this.wl
    };
    ck.prototype.isDown = function(a) {
        return !!this.$a[a]
    };
    ck.prototype.isToggled = function() {
        return !1
    };
    Object.defineProperties(ck.prototype, {
        BACKSPACE: {
            value: 8
        },
        CAPSLOCK: {
            value: 20
        },
        CONTROL: {
            value: 17
        },
        DELETEKEY: {
            value: 46
        },
        DOWN: {
            value: 40
        },
        END: {
            value: 35
        },
        ENTER: {
            value: 13
        },
        ESCAPE: {
            value: 27
        },
        HOME: {
            value: 36
        },
        INSERT: {
            value: 45
        },
        LEFT: {
            value: 37
        },
        PGDN: {
            value: 34
        },
        PGUP: {
            value: 33
        },
        RIGHT: {
            value: 39
        },
        SHIFT: {
            value: 16
        },
        SPACE: {
            value: 32
        },
        TAB: {
            value: 9
        },
        UP: {
            value: 38
        }
    });
    ck.prototype.cl = function(a) {
        this.wl = a.keyCode;
        this.$a[a.keyCode] = !1
    };
    ck.prototype.bl = function(a) {
        this.wl = a.keyCode;
        this.lo = a.charCode;
        this.$a[a.keyCode] = !0
    };
    var dk = {
        37: 1,
        39: 2,
        36: 3,
        35: 4,
        45: 5,
        46: 6,
        8: 8,
        13: 13,
        38: 14,
        40: 15,
        33: 16,
        34: 17,
        9: 18,
        27: 19
    };
    ck.prototype.Mu = function() {
        var a = dk[this.wl];
        return a ? a : this.lo
    };
    H(ck.prototype, null, 3);
    var ek = function(a, b, c, d, e, f) {
        Object.defineProperty(this, "__swiffy_v", {
            writable: !0,
            value: dd(l(a) ? a : 1, l(b) ? b : 0, l(c) ? c : 0, l(d) ? d : 1, l(e) ? e : 0, l(f) ? f : 0)
        })
    };
    G(ek, "Matrix", Xj);
    var fk = function(a) {
            return a instanceof ek ? (a = a.__swiffy_v, a.gd(20 * a.p, 20 * a.q)) : Tc
        },
        gk = function(a) {
            return new ek(a.n, a.u, a.o, a.l, a.p / 20, a.q / 20)
        };
    Object.defineProperty(ek.prototype, "a", {
        get: function() {
            return this.__swiffy_v.n
        },
        set: function(a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = dd(a, b.u, b.o, b.l, b.p, b.q)
        }
    });
    Object.defineProperty(ek.prototype, "b", {
        get: function() {
            return this.__swiffy_v.u
        },
        set: function(a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = dd(b.n, a, b.o, b.l, b.p, b.q)
        }
    });
    Object.defineProperty(ek.prototype, "c", {
        get: function() {
            return this.__swiffy_v.o
        },
        set: function(a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = dd(b.n, b.u, a, b.l, b.p, b.q)
        }
    });
    Object.defineProperty(ek.prototype, "d", {
        get: function() {
            return this.__swiffy_v.l
        },
        set: function(a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = dd(b.n, b.u, b.o, a, b.p, b.q)
        }
    });
    Object.defineProperty(ek.prototype, "tx", {
        get: function() {
            return this.__swiffy_v.p
        },
        set: function(a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = b.gd(a, b.q)
        }
    });
    Object.defineProperty(ek.prototype, "ty", {
        get: function() {
            return this.__swiffy_v.q
        },
        set: function(a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = b.gd(b.p, a)
        }
    });
    ek.prototype.clone = function() {
        var a = new ek;
        a.__swiffy_v = this.__swiffy_v;
        return a
    };
    ek.prototype.concat = function(a) {
        this.__swiffy_v = this.__swiffy_v.multiply(a.__swiffy_v)
    };
    ek.prototype.copyFrom = function(a) {
        this.__swiffy_v = a.__swiffy_v
    };
    ek.prototype.createBox = function(a, b, c, d, e) {
        this.__swiffy_v = Tc.wj(-(c || 0)).qf(a, b).Jd(d || 0, e || 0)
    };
    ek.prototype.createGradientBox = function(a, b, c, d, e) {
        this.__swiffy_v = hk(a, b, c, d, e)
    };
    ek.prototype.deltaTransformPoint = function(a) {
        var b = this.__swiffy_v;
        return new ik(b.n * a.x + b.o * a.y, b.u * a.x + b.l * a.y)
    };
    ek.prototype.identity = function() {
        this.__swiffy_v = Tc
    };
    ek.prototype.invert = function() {
        var a = this.__swiffy_v;
        this.__swiffy_v = a.Mn() ? a.Bd() : dd(Infinity, 0, 0, Infinity, NaN, NaN)
    };
    ek.prototype.rotate = function(a) {
        this.__swiffy_v = this.__swiffy_v.wj(-a)
    };
    ek.prototype.scale = function(a, b) {
        this.__swiffy_v = this.__swiffy_v.qf(a, b)
    };
    ek.prototype.transformPoint = function(a) {
        var b = this.__swiffy_v;
        return new ik(b.n * a.x + b.o * a.y + b.p, b.u * a.x + b.l * a.y + b.q)
    };
    ek.prototype.translate = function(a, b) {
        this.__swiffy_v = this.__swiffy_v.Jd(a, b)
    };
    ek.prototype.toString = function() {
        return "(a=" + this.__swiffy_v.n + ", b=" + this.__swiffy_v.u + ", c=" + this.__swiffy_v.o + ", d=" + this.__swiffy_v.l + ", tx=" + this.__swiffy_v.p + ", ty=" + this.__swiffy_v.q + ")"
    };
    var jk = function() {
        Object.defineProperty(this, "__swiffy_mv", {
            value: !0,
            writable: !0
        });
        H(this, null, 3)
    };
    G(jk, "Mouse");
    jk.prototype.Ge = function() {
        this.broadcastMessage("onMouseDown")
    };
    jk.prototype.qh = function() {
        this.broadcastMessage("onMouseMove")
    };
    jk.prototype.nh = function() {
        this.broadcastMessage("onMouseUp")
    };
    jk.prototype.hide = function() {
        var a = this.__swiffy_mv;
        this.__swiffy_mv = !1;
        return a
    };
    jk.prototype.show = function() {
        var a = this.__swiffy_mv;
        this.__swiffy_mv = !0;
        return a
    };
    H(jk.prototype, null, 3);
    var kk = function() {
        this.__swiffy_vm.pi(this)
    };
    G(kk, "MovieClipLoader");
    Si(kk);
    kk.prototype.checkPolicyFile = !1;
    kk.prototype.loadClip = function(a, b) {
        if (a && b) {
            var c = this.__swiffy_vm;
            a = c.Ua(a);
            var d = this,
                e = b.__swiffy_d;
            ha(b) ? e = c.c.ub : m(b) ? e = c.eh(b).__swiffy_d : e.Ig(Dd(a));
            c = new xd;
            c.yc = function(c, h) {
                d.broadcastMessage("onLoadStart", b);
                d.broadcastMessage("onLoadProgress", b, 1024, 1024);
                d.broadcastMessage("onLoadComplete", b, h);
                ha(b) ? qd(e.c, b, c, function(b) {
                    b.Ig(Dd(a))
                }, function() {
                    d.broadcastMessage("onLoadInit", b)
                }) : pd(e, c, function() {
                    d.broadcastMessage("onLoadInit", b)
                })
            };
            c.ee = function(a) {
                d.broadcastMessage("onLoadError",
                    b, a)
            };
            Cd(a, e.c, "", this, c)
        }
    };
    kk.prototype.getProgress = function() {
        return {
            bytesLoaded: 1024,
            bytesTotal: 1024
        }
    };
    kk.prototype.unloadClip = function(a) {
        (a = a && a.__swiffy_d) && a.nn(new sj(0, 0, null, a.definition.Id))
    };
    var lk = function() {
        this.isConnected = !1
    };
    G(lk, "NetConnection");
    lk.prototype.connect = function() {
        return !0
    };
    var mk = function() {
        Object.defineProperty(this, "__swiffy_v", {
            value: {
                jo: 0,
                sj: .1,
                tj: 0,
                uj: 0,
                ko: 0,
                time: 0,
                paused: !1
            }
        })
    };
    G(mk, "NetStream");
    mk.prototype.play = function() {};
    mk.prototype.close = function() {};
    mk.prototype.pause = function() {};
    mk.prototype.receiveAudio = function() {};
    mk.prototype.receiveVideo = function() {};
    mk.prototype.seek = function() {};
    mk.prototype.setBufferTime = function(a) {
        this.__swiffy_v.sj = a
    };
    Object.defineProperty(mk.prototype, "bufferTime", {
        get: function() {
            return this.__swiffy_v.sj
        }
    });
    Object.defineProperty(mk.prototype, "bufferLength", {
        get: function() {
            return this.__swiffy_v.jo
        }
    });
    Object.defineProperty(mk.prototype, "bytesLoaded", {
        get: function() {
            return this.__swiffy_v.tj
        }
    });
    Object.defineProperty(mk.prototype, "bytesTotal", {
        get: function() {
            return this.__swiffy_v.uj
        }
    });
    Object.defineProperty(mk.prototype, "currentFps", {
        get: function() {
            return this.__swiffy_v.ko
        }
    });
    Object.defineProperty(mk.prototype, "time", {
        get: function() {
            return this.__swiffy_v.time
        }
    });
    var ik = function(a, b) {
        this.x = l(a) ? a : 0;
        this.y = l(b) ? b : 0
    };
    G(ik, "Point", Xj);
    Object.defineProperty(ik.prototype, "length", {
        get: function() {
            return $c(this.x, this.y)
        }
    });
    ik.prototype.add = function(a) {
        return new ik(this.x + a.x, this.y + a.y)
    };
    ik.prototype.clone = function() {
        return new ik(this.x, this.y)
    };
    ik.distance = function(a, b) {
        return $c(a.x - b.x, a.y - b.y)
    };
    ik.prototype.equals = function(a) {
        return this.x == a.x && this.y == a.y
    };
    ik.interpolate = function(a, b, c) {
        return new ik(a.x * c + b.x * (1 - c), a.y * c + b.y * (1 - c))
    };
    ik.prototype.normalize = function(a) {
        a /= this.length;
        this.x *= a;
        this.y *= a
    };
    ik.prototype.offset = function(a, b) {
        this.x += a;
        this.y += b
    };
    ik.polar = function(a, b) {
        return new ik(a * Math.cos(b), a * Math.sin(b))
    };
    ik.prototype.subtract = function(a) {
        return new ik(this.x - a.x, this.y - a.y)
    };
    ik.prototype.toString = function() {
        return "(x=" + this.x + ", y=" + this.y + ")"
    };
    var nk = function(a, b, c, d) {
        this.x = l(a) ? a : 0;
        this.y = l(b) ? b : 0;
        this.width = l(c) ? c : 0;
        this.height = l(d) ? d : 0
    };
    G(nk, "Rectangle", Xj);
    Object.defineProperty(nk.prototype, "top", {
        get: function() {
            return this.y
        },
        set: function(a) {
            this.y = a
        }
    });
    Object.defineProperty(nk.prototype, "left", {
        get: function() {
            return this.x
        },
        set: function(a) {
            this.x = a
        }
    });
    Object.defineProperty(nk.prototype, "bottom", {
        get: function() {
            return this.y + this.height
        },
        set: function(a) {
            this.height = a - this.y
        }
    });
    Object.defineProperty(nk.prototype, "right", {
        get: function() {
            return this.x + this.width
        },
        set: function(a) {
            this.width = a - this.x
        }
    });
    Object.defineProperty(nk.prototype, "topLeft", {
        get: function() {
            return new ik(this.left, this.top)
        },
        set: function(a) {
            this.left = a.x;
            this.top = a.y
        }
    });
    Object.defineProperty(nk.prototype, "bottomRight", {
        get: function() {
            return new ik(this.right, this.bottom)
        },
        set: function(a) {
            this.right = a.x;
            this.bottom = a.y
        }
    });
    Object.defineProperty(nk.prototype, "size", {
        get: function() {
            return new ik(this.width, this.height)
        },
        set: function(a) {
            this.width = a.x;
            this.height = a.y
        }
    });
    nk.prototype.clone = function() {
        return new nk(this.x, this.y, this.width, this.height)
    };
    nk.prototype.contains = function(a, b) {
        return this.x <= a && this.y <= b && a < this.right && b < this.bottom
    };
    nk.prototype.containsPoint = function(a) {
        return this.contains(a.x, a.y)
    };
    nk.prototype.containsRectangle = function(a) {
        var b = this.right,
            c = this.bottom,
            d = a.right,
            e = a.bottom;
        return this.x <= a.x && this.y <= a.y && a.x < b && a.y < c && this.x < d && this.y < e && d <= b && e <= c
    };
    nk.prototype.copyFrom = function(a) {
        this.x = a.x;
        this.y = a.y;
        this.width = a.width;
        this.height = a.height
    };
    nk.prototype.equals = function(a) {
        return this.x == a.x && this.y == a.y && this.width == a.width && this.height == a.height
    };
    nk.prototype.inflate = function(a, b) {
        this.x -= a;
        this.y -= b;
        this.width += 2 * a;
        this.height += 2 * b
    };
    nk.prototype.inflatePoint = function(a) {
        this.inflate(a.x, a.y)
    };
    nk.prototype.intersection = function(a) {
        if (this.intersects(a)) {
            var b = Math.max(this.x, a.x),
                c = Math.max(this.y, a.y),
                d = Math.min(this.right, a.right);
            a = Math.min(this.bottom, a.bottom);
            return new nk(b, c, d - b, a - c)
        }
        return new nk
    };
    nk.prototype.intersects = function(a) {
        return 0 < a.width && 0 < a.height && 0 < this.width && 0 < this.height && a.x < this.right && a.y < this.bottom && a.right > this.x && a.bottom > this.y
    };
    nk.prototype.isEmpty = function() {
        return 0 >= this.width || 0 >= this.height
    };
    nk.prototype.offset = function(a, b) {
        this.x += a;
        this.y += b
    };
    nk.prototype.offsetPoint = function(a) {
        this.offset(a.x, a.y)
    };
    nk.prototype.setEmpty = function() {
        this.height = this.width = this.y = this.x = 0
    };
    nk.prototype.union = function(a) {
        if (this.isEmpty()) return a.clone();
        if (a.isEmpty()) return this.clone();
        var b = Math.min(this.x, a.x),
            c = Math.min(this.y, a.y),
            d = Math.max(this.right, a.right);
        a = Math.max(this.bottom, a.bottom);
        return new nk(b, c, d - b, a - c)
    };
    nk.prototype.toString = function() {
        return "(x=" + this.x + ", y=" + this.y + ", w=" + this.width + ", h=" + this.height + ")"
    };
    var ok = function() {};
    ok.prototype.valueOf = function() {};
    var Xj = function(a) {
        return null != a ? Object(a) : new ok
    };
    "__proto__" in Object || Object.defineProperty(Xj.prototype, "__proto__", {
        get: function() {
            return Object.getPrototypeOf(this)
        }
    });
    var pk = function(a) {
            return null != a ? Object(a) : Object.create(Xj.prototype)
        },
        qk = {};
    Xj.registerClass = function(a, b) {
        if (2 > arguments.length) return !1;
        qk[a] = b;
        return !0
    };
    H(Xj, null, 3);
    var J = function() {};
    Pj(J, Xj);
    J.prototype.valueOf = function() {
        return this
    };
    J.prototype.getDepth = function() {
        var a = this.__swiffy_d;
        return a ? a.depth : void 0
    };
    var rk = function(a, b, c, d) {
            Object.defineProperty(a, b, {
                get: function() {
                    var a = this.__swiffy_d;
                    if (a) return c.call(this, a)
                },
                set: function(a) {
                    var c = this.__swiffy_d;
                    c ? d.call(this, c, a) : Object.defineProperty(this, b, {
                        value: a
                    })
                }
            })
        },
        sk = function(a, b, c, d) {
            rk(a, b, c, function(a, b) {
                var c = a.c.pa().ne(b);
                isNaN(c) || d.call(this, a, c)
            })
        },
        tk = function(a, b) {
            rk(a, b, function() {
                return 0
            }, function() {})
        },
        uk = function(a, b, c) {
            rk(a, b, c, function() {})
        };
    sk(J.prototype, "_x", function(a) {
        return a.Fa().p / 20
    }, function(a, b) {
        var c = a.Fa();
        a.setTransform(c.Jd(20 * b - c.p, 0));
        a.hb()
    });
    sk(J.prototype, "_y", function(a) {
        return a.Fa().q / 20
    }, function(a, b) {
        var c = a.Fa();
        a.setTransform(c.Jd(0, 20 * b - c.q));
        a.hb()
    });
    sk(J.prototype, "_xscale", function(a) {
        return 100 * a.dd().fe
    }, function(a, b) {
        a.dd().fe = b / 100;
        a.Ah();
        a.hb()
    });
    sk(J.prototype, "_yscale", function(a) {
        return 100 * a.dd().sf
    }, function(a, b) {
        a.dd().sf = b / 100;
        a.Ah();
        a.hb()
    });
    sk(J.prototype, "_alpha", function(a) {
        return (256 * a.Wb.sa | 0) / 2.56
    }, function(a, b) {
        var c = a.Wb;
        a.Nc(new id(c.Ca, c.xa, c.Ba, c.wa, c.Aa, c.va, b / 100, c.ya));
        a.hb()
    });
    sk(J.prototype, "_visible", function(a) {
        return a.ze
    }, function(a, b) {
        a.ok(Boolean(b))
    });
    sk(J.prototype, "_rotation", function(a) {
        return -180 * a.dd().angle / Math.PI
    }, function(a, b) {
        a.dd().angle = -b * Math.PI / 180;
        a.Ah();
        a.hb()
    });
    rk(J.prototype, "_name", function(a) {
        return a.getName()
    }, function(a, b) {
        a.jc(b)
    });
    tk(J.prototype, "_quality");
    tk(J.prototype, "_highquality");
    tk(J.prototype, "_soundbuftime");
    uk(J.prototype, "_parent", function(a) {
        return (a = a.getParent()) && a != a.c.ha ? a.ea : void 0
    });
    uk(J.prototype, "_xmouse", function(a) {
        var b = a.c.lc.clone();
        b.ja(a.wc());
        return b.x / 20
    });
    uk(J.prototype, "_ymouse", function(a) {
        var b = a.c.lc.clone();
        b.ja(a.wc());
        return b.y / 20
    });
    uk(J.prototype, "_url", function(a) {
        return null === a.je ? a.en().je.replace(/^([^?#]+)\.html?\b/, "$1") : a.je
    });
    sk(J.prototype, "_width", function(a) {
        return a.Ia()
    }, function(a, b) {
        a.vo(b);
        a.hb()
    });
    sk(J.prototype, "_height", function(a) {
        return a.Xa()
    }, function(a, b) {
        a.uo(b);
        a.hb()
    });
    uk(J.prototype, "_root", function(a) {
        for (; a && !a.Mj && a.getParent() != a.c.ha;) a = a.getParent();
        return a ? a.ea : void 0
    });
    uk(J.prototype, "_target", function(a) {
        for (var b = ""; a && a.getName();) b = "/" + a.getName() + b, a = a.getParent();
        a && a.getParent() == a.c.ha && (a = a.depth - -16384) && (b = "_level" + a + b);
        return b || "/"
    });
    rk(J.prototype, "filters", function(a) {
        var b = [];
        a = a.Fb;
        for (var c = 0; c < a.length; c++) b.push(a[c].og());
        return b
    }, function(a, b) {
        for (var c = [], d = 0; null != b && d < b.length; d++) {
            var e = b[d].__swiffy_v;
            c.push(e ? e : new Se)
        }
        a.Eg(c)
    });
    rk(J.prototype, "transform", function(a) {
        return new vk(a)
    }, function(a, b) {
        if (ia(b)) {
            var c = new vk(a);
            c.colorTransform = b.colorTransform;
            c.matrix = b.matrix
        }
    });
    H(J.prototype, null, 3);
    var wk, B = function(a) {
            return document.createElementNS("http://www.w3.org/2000/svg", a)
        },
        ri = function(a, b) {
            a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", b)
        },
        Uh = function(a) {
            var b = 0,
                c = xk(function() {
                    return a.charCodeAt(b++)
                });
            return dd(c() / 65536 + 1, c() / 65536, c() / 65536, c() / 65536 + 1, c(), c())
        },
        Le = function(a) {
            for (var b = [], c = 0, d = yk(function() {
                return a.charCodeAt(c++)
            }), e = 0; c < a.length;) e += parseInt(d(), 10), b.push(e);
            return b
        },
        yk = function(a) {
            return function() {
                var b = a();
                if (58 == b) return 0;
                for (var c = ""; 48 <=
                    b && 57 >= b;) c += String.fromCharCode(b), b = a();
                return (97 <= b ? b - 96 : -(b - 64)) + c
            }
        },
        xk = function(a) {
            var b = yk(a);
            return function() {
                return parseInt(b(), 10)
            }
        },
        zk = function(a) {
            a = Number(a);
            return isFinite(a) ? a : 0
        },
        ki = function(a) {
            var b = 0,
                c = xk(function() {
                    return a.charCodeAt(b++)
                });
            return new id((c() + 256) / 256, c(), (c() + 256) / 256, c(), (c() + 256) / 256, c(), (c() + 256) / 256, c())
        },
        eh = function(a, b) {
            var c = a,
                d = c & 255,
                c = c >> 8,
                e = c & 255,
                c = c >> 8,
                f = c & 255,
                c = c >> 8 & 255,
                c = c / 255;
            b && (f = f * b.Ca + b.xa, e = e * b.Ba + b.wa, d = d * b.Aa + b.va, c = c * b.sa + b.ya / 255);
            return new ed(f,
                e, d, c)
        },
        pj = function(a) {
            a = a.replace(/^ *rgb *\( *([^,]+) *, *([^,]+) *, *([^,]+) *\) *$/, function(a, c, d, e) {
                return (c << 16) + (d << 8) + (e << 0)
            });
            a = a.replace(/^ *#([0-9a-fA-F]+) *$/, function(a, c) {
                var d = parseInt(c, 16);
                return 4278190080 | d
            });
            return a | 0
        },
        Ak = function(a, b) {
            var c = new Uc(20 * b.x, 20 * b.y);
            c.ja(a);
            c.x /= 20;
            c.y /= 20;
            return c
        },
        Rh = function(a, b, c) {
            return a + (b - a) * c
        },
        Bk = function(a) {
            a = String(a).trim();
            return "0" == a.charAt(0) && "x" != a.charAt(1).toLowerCase()
        },
        Qi = function(a) {
            if (!wk) {
                var b = function(a) {
                    window.setTimeout(a,
                        1E3 / 60)
                };
                wk = Od ? b : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || b
            }
            wk.call(window, a)
        },
        rj = function(a) {
            return "__swiffy_" == a.substr(0, 9)
        },
        Nj = function(a, b, c) {
            if (a)
                for (var d in a) {
                    var e = a[d];
                    if (!("$" == d.charAt(0) || rj(d) || e instanceof J)) {
                        ea(e) || (e = [e]);
                        for (var f = 0; f < e.length; ++f) b.call(c, d, String(e[f]))
                    }
                }
        },
        td = function(a, b) {
            var c;
            m(a) ? c = a : (c = new Ac, Nj(a, c.add, c), c = c.toString());
            if (!b) return c;
            if (!c) return b;
            var d = b.indexOf("?");
            return b = -1 != d ? b.slice(0, d + 1) + c + "&" + b.slice(d + 1) : b + ("?" + c)
        },
        Ad = function(a) {
            var b = a.internedStrings;
            b && (delete a.internedStrings, Ck(a, b))
        },
        Ck = function(a, b) {
            for (var c in a) {
                var d = a[c];
                "string" == typeof d && "#" == d.charAt(0) ? a[c] = b[d.substr(1)] : d instanceof Object && Ck(d, b)
            }
        },
        Dk = function(a) {
            a = a.replace(/\+/g, " ");
            try {
                return decodeURIComponent(a)
            } catch (b) {
                for (var c = "", d = 0, e = d; e < a.length; d = e) {
                    e = a.indexOf("%", d);
                    if (0 > e) break;
                    for (var c = c + a.substring(d, e), f = d = 0; e < a.length;) {
                        var h =
                            a.charCodeAt(e++);
                        if (37 === h) {
                            if (!/[0-9a-fA-F]/.test(a.charAt(e)) || !/[0-9a-fA-F]/.test(a.charAt(++e)))
                                if (0 < f) continue;
                                else break;
                            h = parseInt(a.substr(++e - 2, 2), 16)
                        }
                        if (0 < f) d = (d << 6) + (h & 63), f--;
                        else if (192 === (h & 192)) {
                            for (; h & 64;) h <<= 1, f++;
                            d = (h & 127) >> f
                        } else d = h; if (0 === f) {
                            c += String.fromCharCode(d);
                            break
                        }
                    }
                }
                return c + a.substring(d)
            }
        },
        Ek = function(a) {
            var b = a.indexOf("?"),
                c = a.indexOf("#");
            return 0 <= b && (0 > c || c > b) ? yd(a.substring(b + 1)) : {}
        },
        yd = function(a, b) {
            var c = {};
            if (a)
                for (var d = a.split("&"), e = 0; e < d.length; e++) {
                    var f =
                        d[e],
                        h = f.indexOf("="),
                        k = 0 <= h ? f.substring(0, h) : f;
                    if (k || b) f = 0 <= h ? f.substring(h + 1) : "", k = Dk(k), f = Dk(f), k in c || (c[k] = []), c[k].push(f)
                }
            return c
        },
        Fk = function(a, b, c, d) {
            var e = B("feBlend");
            l(b) && e.setAttribute("in", b);
            l(c) && e.setAttribute("in2", c);
            e.setAttribute("mode", a);
            l(d) && e.setAttribute("result", d);
            return e
        },
        Gk = function(a, b, c, d) {
            var e = B("feComposite");
            l(b) && e.setAttribute("in", b);
            l(c) && e.setAttribute("in2", c);
            e.setAttribute("operator", a);
            l(d) && e.setAttribute("result", d);
            return e
        },
        Hk = function(a, b, c, d,
            e, f, h) {
            var k = B("feComposite");
            l(e) && k.setAttribute("in", e);
            l(f) && k.setAttribute("in2", f);
            k.setAttribute("operator", "arithmetic");
            k.setAttribute("k1", a);
            k.setAttribute("k2", b);
            k.setAttribute("k3", c);
            k.setAttribute("k4", d);
            l(h) && k.setAttribute("result", h);
            return k
        },
        Kj = function(a, b, c, d, e, f) {
            var h = B("feComponentTransfer"),
                k;
            if (1 != c || 0 != d) k = B("feFuncA"), k.setAttribute("type", "linear"), k.setAttribute("slope", c), k.setAttribute("intercept", d), h.appendChild(k);
            if (1 != a || 0 != b)
                for (c = ["feFuncR", "feFuncG", "feFuncB"],
                    d = 0; 3 > d; ++d) k = B(c[d]), k.setAttribute("type", "linear"), k.setAttribute("slope", a), k.setAttribute("intercept", b), h.appendChild(k);
            l(e) && h.setAttribute("in", e);
            l(f) && h.setAttribute("result", f);
            return h
        },
        xh = function(a, b, c) {
            b = b ? b.nextSibling : a.firstChild;
            b != c && a.insertBefore(c, b);
            return c
        },
        zh = function(a, b) {
            for (var c = b ? b.nextSibling : a.firstChild; c;) {
                var d = c,
                    c = c.nextSibling;
                a.removeChild(d)
            }
        },
        Ik = function(a, b) {
            if (b in a) {
                for (var c; !c && a; a = Object.getPrototypeOf(a)) c = Object.getOwnPropertyDescriptor(a, b);
                return c
            }
        },
        Jk = function(a, b) {
            return l(a) ? a : b
        };
    var oh = function(a, b, c) {
            this.ca = a ? a : [];
            this.Gb = b ? b : 0;
            this.Hb = c ? c : 0;
            this.sh = this.th = null
        },
        Kk = {
            0: 1,
            1: 1,
            2: 2,
            3: 0
        },
        Lk = {
            0: "m",
            1: "l",
            2: "q",
            3: "z"
        };
    g = oh.prototype;
    g.toString = function() {
        return "M " + this.Gb + " " + this.Hb + (this.ca.length ? " " : "") + this.lp()
    };
    g.lp = function() {
        if (void 0 == this.ca.Qb) {
            for (var a = this.ca.slice(0), b = 0, c = a.length; b < c;) {
                var d = a[b];
                a[b++] = Lk[d];
                b += 2 * Kk[d]
            }
            this.ca.Qb = a.join(" ")
        }
        return this.ca.Qb
    };
    g.Kk = function(a, b) {
        var c = new oh;
        c.ca = this.ca;
        c.Gb = this.Gb + a;
        c.Hb = this.Hb + b;
        c.th = this.th ? this.th.Kk(a, b) : null;
        c.sh = this.sh ? this.sh.Kk(a, b) : null;
        return c
    };
    g.ie = function(a, b) {
        for (var c = 0, d = this.Gb, e = this.Hb, f = d, h = e, k = this.ca; c < k.length;) switch (k[c++]) {
            case 0:
                d += k[c++];
                e += k[c++];
                f = d;
                h = e;
                break;
            case 1:
                a.ie(d, e, b, b);
                d += k[c++];
                e += k[c++];
                a.ie(d, e, b, b);
                break;
            case 2:
                var n = d + k[c++],
                    r = e + k[c++],
                    t = d + k[c++],
                    p = e + k[c++],
                    s = (n - d) / (2 * n - d - t),
                    u = (r - e) / (2 * r - e - p);
                0 < u && 1 > u && a.ie(d, (1 - u) * (1 - u) * e + 2 * (1 - u) * u * r + u * u * p, b, b);
                0 < s && 1 > s && a.ie((1 - s) * (1 - s) * d + 2 * (1 - s) * s * n + s * s * t, e, b, b);
                d = t;
                e = p;
                a.ie(d, e, b, b);
                break;
            case 3:
                d = f, e = h
        }
    };
    g.Hk = function(a) {
        var b = this.ca,
            c = 0,
            d = b.length,
            e = ["M", this.Gb * a.n + this.Hb * a.o + a.p, this.Gb * a.u + this.Hb * a.l + a.q];
        if (1 != a.n || 1 != a.l || 0 != a.u || 0 != a.o)
            for (; c < d;) {
                var f = b[c];
                e.push(Lk[f]);
                ++c;
                for (f = Kk[f]; 0 < f; --f) {
                    var h = b[c + 0],
                        k = b[c + 1];
                    e.push(h * a.n + k * a.o);
                    e.push(h * a.u + k * a.l);
                    c += 2
                }
            } else e.push(this.lp());
        return e.join(" ")
    };
    g.wg = function(a) {
        var b = 0,
            c = this.Gb,
            d = this.Hb,
            e = c,
            f = d,
            h = this.ca;
        for (a.moveTo(c, d); b < h.length;) switch (h[b++]) {
            case 0:
                c += h[b++];
                d += h[b++];
                e = c;
                f = d;
                a.moveTo(c, d);
                break;
            case 2:
                var k = c + h[b++],
                    n = d + h[b++],
                    c = c + h[b++],
                    d = d + h[b++];
                a.quadraticCurveTo(k, n, c, d);
                break;
            case 1:
                c += h[b++];
                d += h[b++];
                a.lineTo(c, d);
                break;
            case 3:
                a.closePath(), c = e, d = f
        }
    };
    g.ja = function(a) {
        if (a.kc()) return this;
        for (var b = 0, c = [], d = this.ca.length; b < d;) {
            var e = this.ca[b++];
            c.push(e);
            for (var f = 0; f < Kk[e]; f++) {
                var h = this.ca[b],
                    k = this.ca[b + 1];
                c.push(h * a.n + k * a.o);
                c.push(h * a.u + k * a.l);
                b += 2
            }
        }
        return new oh(c, this.Gb * a.n + this.Hb * a.o + a.p, this.Gb * a.u + this.Hb * a.l + a.q)
    };
    g.concat = function(a) {
        if (0 == a.ca.length) return this;
        if (0 == this.ca.length) return a;
        for (var b = this.Gb, c = this.Hb, d = b, e = c, f = 0; f < this.ca.length;) switch (this.ca[f++]) {
            case 0:
                b += this.ca[f++];
                c += this.ca[f++];
                d = b;
                e = c;
                break;
            case 3:
                b = d;
                c = e;
                break;
            case 2:
                f += 2;
            case 1:
                b += this.ca[f++], c += this.ca[f++]
        }
        b = a.Gb - b;
        c = a.Hb - c;
        d = this.ca.concat(0, b, c, a.ca);
        e = this.ca.Qb;
        a = a.ca.Qb;
        e && a && (d.Qb = e + " m " + b + " " + c + " " + a);
        return new oh(d, this.Gb, this.Hb)
    };
    g.Kv = function() {
        var a = this.ca;
        if (10 != a.length && 13 != a.length || 1 != a[0] || 1 != a[3] || 1 != a[6] || 3 != a[a.length - 1]) return !1;
        var b = a[1],
            c = a[2],
            d = a[4],
            e = a[5],
            f = a[7],
            h = a[8];
        if (!(0 == c && 0 == d && 0 == h && b == -f || 0 == b && 0 == e && 0 == f && c == -h)) return !1;
        if (13 == a.length) {
            if (1 != a[9]) return !1;
            b = a[11];
            if (d != -a[10] || e != -b) return !1
        }
        return !0
    };
    g.Cu = function() {
        if (this.Kv()) {
            var a = new w,
                b = this.Gb,
                c = this.Hb;
            a.expand(b, c);
            a.expand(b + this.ca[1] + this.ca[4], c + this.ca[2] + this.ca[5]);
            return a
        }
        return null
    };
    g.sb = function() {
        for (var a = 0; a < this.ca.length;) {
            var b = this.ca[a++];
            switch (b) {
                case 0:
                case 3:
                    break;
                case 1:
                case 2:
                    return !1;
                default:
                    return !1
            }
            a += 2 * Kk[b]
        }
        return !0
    };
    g.wt = function() {
        for (var a = [], b = 0; b < this.ca.length;) {
            var c = this.ca[b++];
            3 != c && a.push(c);
            for (var d = 0; d < 2 * Kk[c]; d++) a.push(this.ca[b++])
        }
        return new oh(a, this.Gb, this.Hb)
    };
    var zi = function(a) {
        for (var b = [], c = 0, d = 0, e = 0, f = xk(function() {
            return a.charCodeAt(e++)
        }), h = 0, k = 0, n = 0, r = 0, t = 0, p = 0, s = 0, u = 0, x = !0; e < a.length;) {
            n = f();
            x || b.push(n);
            switch (n) {
                case 0:
                    h += n = f();
                    k += r = f();
                    t = h;
                    p = k;
                    x ? (c = n + s, d = r + u) : (b.push(n + s), b.push(r + u));
                    break;
                case 1:
                    h += n = f();
                    k += r = f();
                    b.push(n + s);
                    b.push(r + u);
                    break;
                case 2:
                    var x = f(),
                        y = f(),
                        h = h + (n = f()),
                        k = k + (r = f());
                    b.push(x + s);
                    b.push(y + u);
                    b.push(n + s);
                    b.push(r + u);
                    break;
                case 3:
                    s = h - t;
                    u = k - p;
                    x = !1;
                    continue
            }
            x = !1;
            u = s = 0
        }
        return new oh(b, c, d)
    };
    g = oh.prototype;
    g.Fn = function(a, b, c, d, e) {
        c = a - c;
        d = b - d;
        var f = 10 * Math.max(Math.abs(c), Math.abs(d));
        c /= f;
        d /= f;
        e.push(0, a, b);
        e.push(1, -c, -d);
        e.push(1, c, d)
    };
    g.Ap = function() {
        this.th || this.at();
        return this.th
    };
    g.zp = function() {
        this.sh || this.at();
        return this.sh
    };
    g.wx = function(a, b) {
        for (var c = 0, d = []; c < this.ca.length;) {
            var e = this.ca[c++];
            d.push(e);
            for (var f = 0; f < 2 * Kk[e]; f++) d.push(Rh(this.ca[c], a.ca[c++], b))
        }
        return new oh(d, Rh(this.Gb, a.Gb, b), Rh(this.Hb, a.Hb, b))
    };
    g.at = function() {
        for (var a = [], b = [], c = 0, d = 0, e = 0, f = 0, h = 0, k = 0, n, r, t = this.ca, p = 0; p < t.length;) {
            var s = void 0 === n,
                u = t[p++];
            if (0 == u) void 0 != n && (this.Fn(h - e, k - f, n - e, r - f, b), e = h, f = k), h += t[p++], k += t[p++], n = r = void 0;
            else if (3 == u) h = c, k = d, n = r = void 0;
            else {
                n = h;
                r = k;
                var x = h + t[p++],
                    y = k + t[p++];
                s && (this.Fn(n - c, r - d, x - c, y - d, a), c = n, d = r);
                2 == u ? (n = x, r = y, h += t[p++], k += t[p++]) : (h = x, k = y)
            }
        }
        void 0 != n && this.Fn(h - e, k - f, n - e, r - f, b);
        this.th = new oh(a, this.Gb, this.Hb);
        this.sh = new oh(b, this.Gb, this.Hb)
    };
    var tf = function() {
        oh.call(this);
        this.Ye = this.Xe = this.En = this.Dn = 0
    };
    v(tf, oh);
    tf.prototype.Pi = function(a, b) {
        var c = a - this.Xe,
            d = b - this.Ye;
        this.ca.push(0, c, d);
        this.Xe = this.Dn = a;
        this.Ye = this.En = b;
        null != this.ca.Qb && (this.ca.Qb += Lk[0] + c + " " + d);
        return this
    };
    tf.prototype.Rd = function(a, b) {
        var c = a - this.Xe,
            d = b - this.Ye;
        this.ca.push(1, c, d);
        this.Xe = a;
        this.Ye = b;
        null != this.ca.Qb && (this.ca.Qb += Lk[1] + c + " " + d);
        return this
    };
    tf.prototype.close = function() {
        this.ca.push(3);
        this.Xe = this.Dn;
        this.Ye = this.En;
        null != this.ca.Qb && (this.ca.Qb += Lk[3]);
        return this
    };
    tf.prototype.Jc = function(a, b, c, d) {
        a -= this.Xe;
        b -= this.Ye;
        var e = c - this.Xe,
            f = d - this.Ye;
        this.ca.push(2, a, b, e, f);
        this.Xe = this.Dn = c;
        this.Ye = this.En = d;
        null != this.ca.Qb && (this.ca.Qb += Lk[2] + a + " " + b + " " + e + " " + f);
        return this
    };
    var nd = function() {
            this.Yn = [];
            this.Id = {};
            this.Df = B("defs")
        },
        Mk = function(a, b) {
            this.id = a;
            this.hl = b
        };
    Mk.prototype.rm = function() {
        return !!this.hl
    };
    Mk.prototype.get = function() {
        return this.hl
    };
    nd.prototype.af = function(a) {
        var b = this.Yn[a];
        b || (b = new Mk(a, null), this.Yn[a] = b);
        return b
    };
    nd.prototype.Es = function(a, b) {
        this.af(a).hl = b
    };
    nd.prototype.Dx = function(a, b) {
        for (var c = this.Yn, d = 0; d < c.length; d++)
            if (c[d] && c[d].hl) {
                var e = c[d].get().Ja(a);
                e && this.Df.appendChild(e)
            }
        b && a.Vr(b);
        a.Wr()
    };
    var si = function(a, b, c) {
        hf.call(this, b, a, c);
        this.Ui = this.$ = null;
        this.rd = !1;
        this.Hn = [];
        this.Cn = this.Rk = !1;
        a !== of && (this.$ = Nk(a.width, a.height), this.$.drawImage(a.Od, 0, 0), this.rd = a.transparent, USING_SWIFFY_MOCKS && (this.Ui = a.data))
    };
    v(si, hf);
    var of = {},
        Nk = function(a, b) {
            var c = document.createElement("canvas");
            c.width = a;
            c.height = b;
            return c.getContext("2d")
        };
    g = si.prototype;
    g.Nb = function(a, b, c, d) {
        this.$ || (this.$ = Nk(a, b), (this.rd = c) || (d = (d | 4278190080) >>> 0), this.$.fillStyle = eh(d).Cd(), this.$.fillRect(0, 0, a, b))
    };
    g.Ia = function() {
        return this.$ ? this.$.canvas.width : 0
    };
    g.Xa = function() {
        return this.$ ? this.$.canvas.height : 0
    };
    g.Ce = function() {
        return this.$.canvas
    };
    g.hv = function() {
        if (!this.Ui) {
            if (this.Rk || !this.$) return "";
            this.Ui = this.$.canvas.toDataURL("image/png")
        }
        return this.Ui
    };
    g.or = function(a) {
        var b = this.Hn;
        0 <= Ea(b, a) || b.push(a)
    };
    g.gr = function(a) {
        Ia(this.Hn, a)
    };
    g.jz = function() {
        this.Rk = !0
    };
    g.Pz = function() {
        this.Rk = !1;
        this.Cn && this.Ki()
    };
    g.Ki = function() {
        this.Rk ? this.Cn = !0 : (this.Cn = !1, this.Ui = null, this.Hn.forEach(function(a) {
            a.ms()
        }))
    };
    g.Rl = function() {
        this.$ = null;
        this.Ki()
    };
    g.yx = function(a, b) {
        return this.$.createImageData(a, b)
    };
    g.df = function(a, b, c, d) {
        return this.$.getImageData(a, b, c, d)
    };
    g.bj = function(a, b, c) {
        this.$.putImageData(a, b, c);
        this.Ki()
    };
    g.fillRect = function(a, b, c, d, e) {
        var f = this.$;
        this.rd ? 4278190080 === (e & 4278190080) || f.clearRect(a, b, c, d) : e = (e | 4278190080) >>> 0;
        0 != e && (f.fillStyle = eh(e).Cd(), f.fillRect(a, b, c, d));
        this.Ki()
    };
    g.$o = function(a, b, c) {
        var d = this.yx(1, 1),
            e = d.data;
        e[0] = c >>> 16 & 255;
        e[1] = c >>> 8 & 255;
        e[2] = c & 255;
        e[3] = this.rd ? c >>> 24 : 255;
        this.bj(d, a, b)
    };
    g.Gz = function(a, b, c) {
        var d = this.df(a, b, 1, 1),
            e = d.data;
        e[0] = c >>> 16 & 255;
        e[1] = c >>> 8 & 255;
        e[2] = c & 255;
        this.bj(d, a, b)
    };
    g.Vo = function(a, b) {
        var c = this.df(a, b, 1, 1).data;
        return (c[3] << 24 | c[0] << 16 | c[1] << 8 | c[2]) >>> 0
    };
    g.Xy = function(a, b) {
        var c = this.df(a, b, 1, 1).data;
        return (c[0] << 16 | c[1] << 8 | c[2]) >>> 0
    };
    g.Zy = function(a, b, c, d) {
        if (0 >= c || 0 >= d) return [];
        a = this.df(a, b, c, d).data;
        b = Array(Math.floor(a.length / 4));
        for (d = c = 0; d < b.length; d++) b[d] = (a[c++] << 16 | a[c++] << 8 | a[c++] | a[c++] << 24) >>> 0;
        return b
    };
    g.Hz = function(a, b, c, d, e) {
        if (!(0 >= c || 0 >= d)) {
            var f = this.df(a, b, c, d),
                h = f.data;
            c = Math.min(e.length, c * d * 4);
            d = this.rd ? 0 : 255;
            for (var k = 0, n = 0; k < c; k++) {
                var r = e[k];
                h[n++] = r >>> 16 & 255;
                h[n++] = r >>> 8 & 255;
                h[n++] = r & 255;
                h[n++] = (r >>> 24 | d) & 255
            }
            this.bj(f, a, b)
        }
    };
    g.Yy = function(a, b, c, d, e) {
        if (0 >= c || 0 >= d) return new Uint8Array(0);
        a = this.df(a, b, c, d).data;
        if (e)
            for (e = 0; e < a.length; e += 4) b = a[e], a[e] = a[e + 2], a[e + 2] = b;
        else
            for (e = 0; e < a.length; e += 4) b = a[e], a[e] = a[e + 3], a[e + 3] = a[e + 2], a[e + 2] = a[e + 1], a[e + 1] = b;
        return a
    };
    g.Gw = function(a, b, c, d, e, f) {
        if (!(0 >= c || 0 >= d)) {
            c = this.df(a, b, c, d);
            d = c.data;
            var h = 4 * Math.floor(Math.min(d.length, e.length) / 4),
                k = this.rd ? 0 : 255;
            e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
            if (f)
                for (f = 0; f < h; f += 4) d[f] = e[f + 2], d[f + 1] = e[f + 1], d[f + 2] = e[f], d[f + 3] = e[f + 3] | k;
            else
                for (f = 0; f < h; f += 4) d[f] = e[f + 1], d[f + 1] = e[f + 2], d[f + 2] = e[f + 3], d[f + 3] = e[f] | k;
            this.bj(c, a, b)
        }
    };
    g.scroll = function(a, b) {
        if (a || b) {
            var c = 0 > a ? -a : 0,
                d = 0 > b ? -b : 0,
                e = 0 > a ? 0 : a,
                f = 0 > b ? 0 : b,
                h = this.Ia() - c - e,
                k = this.Xa() - d - f;
            0 < h && 0 < k && this.bj(this.df(c, d, h, k), e, f)
        }
    };
    g.Ct = function(a, b, c, d, e, f, h, k, n, r, t) {
        d = Math.min(d, a.Ia() - b, this.Ia() - f);
        e = Math.min(e, a.Xa() - c, this.Xa() - h);
        k && (d = Math.min(d, k.Ia() - n), e = Math.min(e, k.Xa() - r));
        if (!(0 >= d || 0 >= e)) {
            var p;
            k && k.rd ? (p = Nk(d, e), p.drawImage(a.$.canvas, -b, -c), p.globalCompositeOperation = "destination-in", p.drawImage(k.$.canvas, -n, -r), c = b = 0, a = !0) : (p = a.$, a = a.rd);
            !a || !t && this.rd ? this.$.putImageData(p.getImageData(b, c, d, e), f, h) : this.$.drawImage(p.canvas, b, c, d, e, f, h, d, e);
            this.Ki()
        }
    };
    var Ok = function() {};
    v(Ok, ah);
    ef.i(Ge, Ok);
    Ok.prototype.apply = function(a, b) {
        var c = 20 * b.Qa.n,
            d = 20 * b.Qa.l,
            e = b.Ia(),
            f = b.Xa(),
            h = a.distance,
            k = Math.cos(a.angle) * h * c,
            n = Math.sin(a.angle) * h * d,
            h = document.createElement("canvas");
        h.width = e;
        h.height = f;
        var r = h.getContext("2d");
        r.drawImage(b.Ce(), k, n);
        k = r.getImageData(0, 0, e, f);
        n = eh(a.color);
        if ("inner" == a.Ea.type) {
            ch(a, k.data, e, f, c, d, 3, 1);
            for (var c = k.data, d = n.Na, e = n.Ma, f = n.La, n = n.lb, t = a.strength, p = c.length, s = 0; s < p; s += 4) c[s + 0] = d, c[s + 1] = e, c[s + 2] = f, c[s + 3] = (255 - c[s + 3]) * t, c[s + 3] *= n;
            r.putImageData(k, 0, 0)
        } else ch(a,
            k.data, e, f, c, d, 3, a.strength), r.putImageData(k, 0, 0), r.globalCompositeOperation = "source-in", n = db && ab && 254 < n.Na && 254 < n.Ma && 254 < n.La ? new ed(254, 254, 254, n.lb) : n, r.fillStyle = n.Cd(), r.fillRect(0, 0, e, f);
        b.Tj(h, a.Ea.ge)
    };
    var Pk = function() {};
    v(Pk, Ej);
    ph.i(yh, Pk);
    Pk.prototype.Ec = function(a) {
        a.Uj(this)
    };
    Pk.prototype.ri = function() {};
    Pk.prototype.ka = function() {};
    var Qk = function(a) {
        this.m = a;
        this.qc = this.Le = this.Ab = this.Tc = this.le = this.Vj = this.Vm = this.He = this.Xc = this.Ya = null;
        this.fq = 0;
        this.$h = 1;
        this.ce = [];
        this.km = !1;
        this.Hf = "";
        this.If = this.hk = this.Jf = null
    };
    Ah.i(jf, Qk);
    Ah.i($i, Qk);
    g = Qk.prototype;
    g.Bm = function() {
        return this.Tc
    };
    g.ax = function(a) {
        return eh(a, this.m.Mc())
    };
    g.aq = function(a) {
        this.Tc || (this.Tc = this.Ab = this.ad(a), this.qc && (this.Ab.id = this.qc));
        return this.Tc
    };
    g.Lb = function(a, b) {
        this.aq(a);
        var c = this.m.ia;
        c && (this.Xh(a, c), this.hc(a, c), this.nv(c), this.m.ia = 0);
        this.mv(b);
        return this.Tc
    };
    g.hc = function() {};
    g.Xh = function(a, b) {
        this.aq(a);
        var c = this.m;
        b & 8 && this.Ab.setAttribute("display", c.ze ? "inline" : "none");
        c.Oc && c.Oc.getParent() != c.getParent() && b & 2048 && (b |= 32768);
        b & 40960 && this.$u(a);
        b & 4096 && (b |= 8192);
        Ld && b & 139264 && (c.Pj() && c.xc() ? this.Ab.setAttribute("enable-background", "new") : this.Ab.removeAttribute("enable-background"));
        b & 8192 && this.Zu() && (b |= 2);
        b & 1 && ((c = c.Eq()) ? this.bv(c) : this.Ab.setAttribute("transform", this.cn()));
        b & 2 ? Jd && this.cv(!!(a & 4)) : this.Ya && (b & 2048 || b & 16384) && this.dq(!!(a & 4));
        this.av(b)
    };
    g.cv = function(a) {
        var b = "SourceGraphic",
            c = this.m.Fb;
        this.Ya && yb(this.Ya);
        this.$h = 1;
        for (var d = 0; d < c.length; ++d) c[d].Xb(Ah).Oq(b, this.em()), b = "result", this.$h = Math.max(this.$h, c[d].Nq());
        this.Xc && this.Xc.Xb(Ah).Oq(b, this.em());
        this.dq(a);
        this.Ya && 0 < this.Ya.childNodes.length ? this.Pg().setAttribute("filter", "url(#" + this.Ya.id + ")") : this.He && this.He.removeAttribute("filter")
    };
    g.bv = function(a) {
        if (!this.Le) {
            this.Le = B("g");
            var b = B("defs");
            b.appendChild(this.Ab);
            this.Le.appendChild(b);
            this.Ab.id && (this.Le.id = this.Ab.id);
            this.Ab.id = zc.Jb().Kb();
            for (b = 0; 9 > b; b++) this.Bv(this.Le, this.Ab.id);
            this.Tc = this.Ab = this.Le
        }
        var c = this.Le;
        c.setAttribute("transform", Tc.Jd(a.x.translate + a.x.offset * (a.x.scale - 1), a.y.translate + a.y.offset * (a.y.scale - 1)).toString());
        var b = [1, 0, 1],
            d = [1, 0, 1],
            e = a.x.yb[0] + a.x.yb[2];
        e > Math.abs(a.x.size * a.x.scale) ? b[0] = b[2] = a.x.scale * a.x.size / e : b[1] = 1 + (a.x.scale - 1) *
            a.x.size / a.x.yb[1];
        e = a.y.yb[0] + a.y.yb[2];
        e > Math.abs(a.y.size * a.y.scale) ? d[0] = d[2] = a.y.scale * a.y.size / e : d[1] = 1 + (a.y.scale - 1) * a.y.size / a.y.yb[1];
        for (var e = [a.x.offset * (1 - b[0]), (a.x.offset + a.x.yb[0]) * (1 - b[1]), a.x.yb[1] * (b[1] - 1) + (a.x.offset + a.x.yb[1]) * (1 - b[0])], f = [a.y.offset * (1 - d[0]), (a.y.offset + a.y.yb[0]) * (1 - d[1]), a.y.yb[1] * (d[1] - 1) + (a.y.offset + a.y.yb[1]) * (1 - d[0])], c = c.childNodes, h, k = a.y.offset, n = 0; 3 > n; ++n, k += h) {
            h = a.y.yb[n];
            for (var r, t = a.x.offset, p = 0; 3 > p; ++p, t += r) {
                r = a.x.yb[p];
                var s = 2 * (p + 3 * n) + 1;
                this.Cv(c[s],
                    c[s + 1], t, k, r, h, b[p], d[n], e[p], f[n])
            }
        }
    };
    g.Cv = function(a, b, c, d, e, f, h, k, n, r) {
        a = a.childNodes[0];
        a.setAttribute("x", c);
        a.setAttribute("y", d);
        a.setAttribute("width", e);
        a.setAttribute("height", f);
        b.setAttribute("transform", Tc.ay(n, r).Mi(h, k).toString())
    };
    g.Bv = function(a, b) {
        var c = B("clipPath");
        c.id = zc.Jb().Kb();
        var d = B("rect");
        c.appendChild(d);
        a.appendChild(c);
        d = B("use");
        ri(d, "#" + b);
        d.setAttribute("clip-path", "url(#" + c.id + ")");
        a.appendChild(d)
    };
    g.cn = function() {
        return this.m.Fa().toString()
    };
    g.Wg = function(a) {
        var b = B("g");
        Ab(b, a);
        b.appendChild(a);
        this.Tc == a && (this.Tc = b);
        return b
    };
    g.$u = function(a) {
        var b = this.m,
            c = b.Oc,
            d = this.Vj;
        if (c) {
            d || (this.Vj = d = this.Wg(this.Ab, "dynmask"));
            var e = !(c.xc() && this.m.xc()),
                f;
            f = e ? c.Xb(Bh) : c.Xb(Ij);
            var h = null,
                c = c.getParent();
            b.getParent() != c && c && (h = c.Da().multiply(b.getParent().wc()));
            a = f.Lb(a, [], h);
            this.le !== a && (this.le && this.le.parentNode == d ? Ab(a, this.le) : d.appendChild(a));
            this.le = a;
            e = e ? "clip-path" : "mask";
            e != this.Hf && this.Hf && d.removeAttribute(this.Hf);
            d.setAttribute(e, "url(#" + f.ae() + ")");
            this.Hf = e
        } else d && this.Hf && (this.le && this.le.parentNode ==
            d && (zb(this.le), this.le = null), d.removeAttribute(this.Hf), this.Hf = "")
    };
    g.mv = function(a) {
        var b = this.Vm;
        if (b || a.length) {
            var c = this.fq;
            b || (this.Vm = b = this.Wg(this.Tc, "clip-path"), c = 1);
            for (var d = 0, e = Math.min(c, a.length); d < e;) b.setAttribute("clip-path", "url(#" + a[d].ae() + ")"), b = b.firstChild, ++d;
            if (a.length > e)
                for (e = a.length; d < e;) c = this.Wg(b, "clip-path"), c.setAttribute("clip-path", "url(#" + a[d].ae() + ")"), ++d;
            else if (c > e)
                for (e = c, b == this.Vm && (b.removeAttribute("clip-path"), b = b.firstChild, ++d); d < e;) c = b.firstChild, Ab(c, b), b = c, ++d;
            this.fq = a.length
        }
    };
    g.ae = function() {
        l(this.qc) || (this.qc = zc.Jb().Kb(), this.Ab && (this.Ab.id = this.qc));
        return this.qc
    };
    g.ka = function() {};
    g.em = function() {
        null == this.Ya && (this.Ya = B("filter"), this.Ya.setAttribute("filterUnits", "userSpaceOnUse"), this.Ya.setAttribute("x", 0), this.Ya.setAttribute("y", 0), this.Ya.setAttribute("width", 0), this.Ya.setAttribute("height", 0), this.Ya.id = zc.Jb().Kb(), this.Pg().appendChild(this.Ya));
        return this.Ya
    };
    g.Pg = function() {
        null == this.He && (this.He = this.Wg(this.Vj || this.Ab, "filter"));
        return this.He
    };
    g.mu = function(a) {
        if (!cb || !Ld) return a;
        if (1 >= this.m.mc()) return this.Jf && (this.Jf.removeAttribute("transform"), this.hk.removeAttribute("transform")), a;
        var b = Tc,
            c = this.m;
        do c = c.getParent(), b = b.multiply(c.Fa()); while (!c.xc());
        b.Sc(Tc) ? this.Jf && (this.Jf.removeAttribute("transform"), this.hk.removeAttribute("transform")) : (this.Jf || (this.Jf = this.Wg(this.Vj || this.Ab, "ieforward"), this.hk = this.Wg(this.Pg(), "ieinverse"), this.If && this.Pg().appendChild(this.If)), c = b.Bd(), this.Jf.setAttribute("transform", b.toString()),
            this.hk.setAttribute("transform", c.toString()), a = a.multiply(b));
        return a
    };
    g.nu = function() {
        null == this.If && (this.If = B("rect"), this.If.setAttribute("opacity", 0), this.Pg().appendChild(this.If));
        return this.If
    };
    g.dq = function(a) {
        var b = this.m.getParent().wc(),
            b = this.mu(b),
            c = this.m.ou(),
            d = this.em();
        if (c.sb()) d.setAttribute("width", 0), d.setAttribute("height", 0);
        else {
            var e = Math.ceil((c.t - c.k) / 20),
                f = Math.ceil((c.s - c.j) / 20),
                h = e,
                k = f;
            5E4 < e * f && (h = Math.floor(h / this.$h), k = Math.floor(k / this.$h));
            c = c.clone();
            c.ja(b);
            c.Wd(d);
            h < e ? d.setAttribute("filterRes", h + " " + k) : d.removeAttribute("filterRes");
            if (db || cb || a) a = this.nu(), c.Wd(a)
        }
    };
    g.uv = function() {
        var a = this.m.getParent();
        return a ? a.wc().gd(0, 0) : Tc
    };
    g.av = function(a) {
        var b = this.m.Fb;
        if (b.length || this.Xc) {
            for (var c = this.uv(), d = 0; d < b.length; ++d) b[d].Xb(Ah).Lb(a, c);
            this.Xc && this.Xc.Xb(Ah).Lb(a, c)
        }
    };
    g.Zu = function() {
        var a = this.m,
            b = a.Xj(),
            a = a.Zl();
        Ld || (a = Math.min(a, 1));
        if (Jd && (1 < a || 1 == a && !b.ai())) return this.Xc ? this.Xc.ov(a) : (this.Xc = new le(a), this.He && this.He.removeAttribute("opacity")), !0;
        b = b.sa.toFixed(3);
        (1 != b || this.He) && this.Pg().setAttribute("opacity", b);
        return this.Xc ? (this.Xc = null, !0) : !1
    };
    g.Rg = function(a, b, c) {
        this.ce.push(function() {
            var d = this.ax(c);
            a.setAttribute(b, d.toString());
            a.setAttribute(b + "-opacity", d.lb.toFixed(3))
        })
    };
    g.nv = function(a) {
        if (a & 4098) {
            a = this.ce;
            for (var b = 0; b < a.length; ++b) a[b].call(this);
            this.Xc && this.Xc.Xb(Ah).wv(this.m.Xj())
        }
    };
    g.Pc = function() {};
    var Rk = function(a) {
        Qk.call(this, a);
        this.gh = null
    };
    v(Rk, Qk);
    Ah.i(pf, Rk);
    Rk.prototype.ad = function() {
        return B("g")
    };
    Rk.prototype.Sr = function() {
        var a = this.gh;
        a || (a = this.gh = B("image"), this.Ab.appendChild(a));
        var b = this.m.pc;
        a.setAttribute("width", 20 * b.Ia());
        a.setAttribute("height", 20 * b.Xa());
        ri(a, b.hv())
    };
    Rk.prototype.hc = function(a, b) {
        Rk.fa.hc.call(this, a, b);
        b && this.Sr()
    };
    var Sk = function(a) {
        Qk.call(this, a);
        this.yk = B("g");
        this.Pq = new vh(a.oa, this.yk)
    };
    v(Sk, Qk);
    Ah.i(bj, Sk);
    Sk.prototype.hc = function(a, b) {
        Sk.fa.hc.call(this, a, b);
        b & 65552 && this.Pq.Lb(a)
    };
    Sk.prototype.ka = function() {
        Sk.fa.ka.call(this);
        this.Pq.ka()
    };
    Sk.prototype.ad = function() {
        return this.yk
    };
    var Tk = function(a, b) {
        this.cc = a;
        this.we = 0;
        this.Yd = new w;
        this.fd = b;
        this.wi = null;
        this.ia = 0
    };
    var Uk = new Gg("blend container"),
        Vk = function(a) {
            this.m = a;
            this.zc = [];
            this.Jg = 0
        };
    g = Vk.prototype;
    g.Iq = function() {
        var a = Ah.uc(this.m),
            a = new Tk(a, a.yk);
        a.ia = this.m.Qj;
        return a
    };
    g.qp = function(a) {
        for (var b = 0; b < a; ++b) zh(this.zc[b].fd, this.zc[b].wi);
        for (; this.zc.length > a;) this.zc.pop().cc.ka()
    };
    g.pp = function(a, b, c) {
        var d = this.Jg;
        1 >= a && (a = 0);
        for (var e, f; f = this.zc[--d];) {
            if (f.Yd.jp(c)) {
                f.we == a && 0 == a && (e = f);
                break
            }
            f.we == a && (e = f)
        }
        e || ((e = this.zc[this.Jg]) ? (e.ia = this.m.ia, e.Yd.reset(), e.wi = null) : this.zc[this.Jg] = e = this.Iq(), e.we = a, ++this.Jg);
        e.wi = xh(e.fd, e.wi, b);
        e.Yd.Ed(c)
    };
    g.ap = function(a) {
        this.Jg = 0;
        for (var b = [], c = this.m.oa.Ra; c; c = c.nextSibling)
            if (!c.Eb) {
                for (; 0 < b.length && c.depth > b[b.length - 1].Pc();) b.pop();
                var d = c.ci();
                if (d || c.xc() || !c.Pj()) {
                    var e = d ? 0 : c.Zl(),
                        f = wh(c),
                        h = c.pb().xg().clone();
                    h.ja(c.Fa());
                    this.pp(e, f.Lb(a, b), h);
                    !d || c instanceof yh || b.push(f)
                } else {
                    f = c.Xb(Uk);
                    d = f.ap(a);
                    for (e = 0; e < d.length; ++e) f = d[e], c.ia = f.ia & -65553, h = f.Yd.clone(), h.ja(c.Fa()), this.pp(f.we, f.cc.Lb(a, b), h);
                    c.ia = 0
                }
            }
        this.qp(this.Jg);
        return this.zc
    };
    g.ka = function() {
        for (var a = 0; a < this.zc.length; ++a) this.zc[a].cc.ka()
    };
    Uk.i(z, Vk);
    Uk.i(pi, Vk);
    Uk.i(Bi, Vk);
    var Ch = new Gg("blend context"),
        Wk = function(a) {
            Vk.call(this, a);
            this.cc = Ah.uc(this.m);
            this.target = B("g");
            this.cc.yk.appendChild(this.target);
            this.filters = B("filter");
            this.filters.setAttribute("filterUnits", "userSpaceOnUse");
            this.filters.setAttribute("primitiveUnits", "userSpaceOnUse");
            this.filters.id = zc.Jb().Kb();
            this.target.setAttribute("filter", "url(#" + this.filters.id + ")");
            this.target.appendChild(this.filters);
            this.Yl = B("g");
            this.Yl.setAttribute("opacity", 0);
            this.target.appendChild(this.Yl)
        };
    v(Wk, Vk);
    g = Wk.prototype;
    g.Iq = function() {
        return new Tk(this.cc, B("g"))
    };
    g.qp = function(a) {
        for (var b = 0; b < a; ++b) zh(this.zc[b].fd, this.zc[b].wi);
        this.zc.length = a
    };
    g.Lb = function(a, b) {
        this.m.ia & 65552 && (this.hc(a), this.m.ia &= -65553);
        return this.cc.Lb(a, b)
    };
    g.hc = function(a) {
        a = this.ap(a | 32);
        var b = this.filters,
            c = this.Yl,
            d = "",
            e = new w;
        yb(b);
        var f = this.m.c.ha,
            h = new w(-f.ug, -f.vg, -f.ug + f.Ad, -f.vg + f.zd),
            f = this.m.Da().multiply(f.mf),
            k = f.Bd();
        if (this.m instanceof tj && this.m.backgroundColor) {
            var n = B("feFlood");
            n.setAttribute("flood-color", this.m.backgroundColor);
            n.setAttribute("result", d = "bg");
            b.appendChild(n)
        }
        var r = a.length;
        zb(this.target.nextSibling);
        if (1 == r || 0 == a[r - 1].we) {
            --r;
            n = a[r].fd;
            n.removeAttribute("transform");
            var t = this.target;
            t.parentNode && t.parentNode.insertBefore(n,
                t.nextSibling)
        }
        for (var p = c.firstChild, t = 0; t < r; ++t) {
            var s, n = a[t].fd;
            p ? (s = p, p = s.firstChild, p != n && (p ? s.replaceChild(n, p) : s.appendChild(n)), p = s.nextSibling) : (s = c.appendChild(B("g")), s.appendChild(n));
            var u = a[t].Yd;
            u.ja(f);
            u.Wh(h);
            u.sb() || (u.Wl(), u.ja(k), n.id || (n.id = zc.Jb().Kb()), n.setAttribute("transform", "translate(" + -u.k + " " + -u.j + ")"), s.setAttribute("transform", "translate(" + u.k + " " + u.j + ")"), d = this.ju(a[t], d, b), e.Ed(u))
        }
        for (; p;) p.firstChild && p.removeChild(p.firstChild), p = p.nextSibling;
        e.Wd(b)
    };
    g.ju = function(a, b, c) {
        if (100 == a.we) return b;
        var d = B("feImage");
        ri(d, "#" + a.fd.id);
        a.Yd.Wd(d);
        c.appendChild(d);
        if (!b) {
            var e = "bg";
            d.setAttribute("result", e);
            return e
        }
        e = "fg";
        d.setAttribute("result", e);
        switch (a.we) {
            case 2:
            case 4:
            case 5:
            case 3:
                d = Fk(Yc[a.we], e, b);
                break;
            case 13:
                d = this.Xr(c, b, e);
                break;
            case 12:
                d = this.Xr(c, e, b);
                break;
            case 7:
                d = Hk(0, 1, 1, 0, e, b);
                break;
            case 8:
                a = "-fg";
                c.appendChild(Kj(-1, 1, 0, 1, e, a));
                c.appendChild(Hk(0, 1, 1, -1, a, b));
                d = this.dg(c, e, b);
                break;
            case 6:
                a = "-fg";
                c.appendChild(Kj(-1, 1, 0, 1, e, a));
                c.appendChild(Kj(1, 0, 0, 1, b, "*bg"));
                c.appendChild(Hk(0, 1, 1, -1, "*bg", a, "bg-fg"));
                a = "-bg";
                c.appendChild(Kj(-1, 1, 0, 1, b, a));
                c.appendChild(Kj(1, 0, 0, 1, e, "*fg"));
                c.appendChild(Hk(0, 1, 1, -1, a, "*fg", "fg-bg"));
                c.appendChild(Hk(0, 1, 1, 0, "bg-fg", "fg-bg"));
                d = this.Sk(c, e, b);
                break;
            case 9:
                c.appendChild(Kj(-1, 1, 1, 0, b, "-bg"));
                d = this.dg(c, e, b);
                break;
            case 10:
                d = Gk("in", b, e);
                break;
            case 11:
                d = Gk("out", b, e);
                break;
            default:
                d = Gk("over", e, b)
        }
        d.setAttribute("result", "bg");
        c.appendChild(d);
        return "bg"
    };
    g.Xr = function(a, b, c) {
        a.appendChild(Kj(1, 0, 0, 1, b, "blend"));
        a.appendChild(Kj(2, -1, 1, 0, c, "2bg"));
        a.appendChild(Fk("screen", "2bg", "blend", "blend"));
        a.appendChild(Kj(2, 0, 1, 0, c, "2bg"));
        a.appendChild(Fk("multiply", "2bg", "blend", "blend"));
        a.appendChild(Gk("in", "blend", b));
        return Gk("over", void 0, c)
    };
    g.Sk = function(a, b, c) {
        a.appendChild(Gk("in", void 0, c));
        return this.dg(a, b, c)
    };
    g.dg = function(a, b, c) {
        a.appendChild(Gk("atop", void 0, b));
        return Gk("over", void 0, c)
    };
    g.ae = function() {
        return this.cc.ae()
    };
    g.Pc = function() {
        return this.cc.Pc()
    };
    g.ka = function() {
        this.cc.ka()
    };
    Ch.i(z, Wk);
    Ch.i(pi, Wk);
    Ch.i(Bi, Wk);
    Ch.i(tj, Wk);
    var Xk = function(a) {
        Sk.call(this, a)
    };
    v(Xk, Sk);
    Ah.i(pi, Xk);
    Ah.i(Bi, Xk);
    Xk.prototype.ad = function(a) {
        return Xk.fa.ad.call(this, a)
    };
    var Yk = function(a) {
        Qk.call(this, a);
        this.dn = this.Of = this.rf = this.ni = this.Me = this.bh = null;
        this.Pm = 0
    };
    v(Yk, Qk);
    Ah.i(yh, Yk);
    g = Yk.prototype;
    g.hc = function(a, b) {
        Yk.fa.hc.call(this, a, b);
        if (b & 224) {
            yb(this.bh);
            this.rf && yb(this.rf);
            this.ce.splice(this.Pm, Number.POSITIVE_INFINITY);
            var c = this;
            a & 32 && (this.dn || (this.dn = new Zk(this)), c = this.dn);
            this.m.Uj(c);
            c = this.m.Kj();
            c.Wd(this.Me);
            c.Wd(this.ni);
            this.m.Zh ? this.Me.removeAttribute("opacity") : this.Me.setAttribute("opacity", 0)
        }
        b & 256 && (this.m.Yg ? this.Of.setAttribute("pointer-events", "visible") : this.Of.removeAttribute("pointer-events"));
        for (c = this.Pm; c < this.ce.length; ++c) this.ce[c].call(this)
    };
    g.ri = function(a, b, c, d, e) {
        var f = this.bh;
        a.format.ah() ? this.Ns(a, b, c, d, e, f) : this.Op(a, b, c, d, e, f)
    };
    g.ad = function() {
        this.m.Kj();
        this.Of = B("g");
        this.ce = [];
        this.bh = B("g");
        this.Me = B("rect");
        this.Rg(this.Me, "fill", 4294967295);
        this.Rg(this.Me, "stroke", 4278190080);
        this.Me.setAttribute("stroke-width", "10");
        var a = B("clipPath"),
            b = zc.Jb().Kb();
        a.setAttribute("id", b);
        this.ni = B("rect");
        this.ni.id = zc.Jb().Kb();
        a.appendChild(this.ni);
        this.Of.appendChild(a);
        this.bh.setAttribute("clip-path", "url(#" + b + ")");
        this.Of.appendChild(this.Me);
        this.Of.appendChild(this.bh);
        this.Pm = this.ce.length;
        return this.Of
    };
    g.Op = function(a, b, c, d, e, f) {
        e = B("text");
        e.setAttribute("fill-rule", "nonzero");
        e.setAttribute("style", "white-space:pre");
        e.setAttribute("font-size", a.format.size);
        var h = a.Oa;
        a.format.font ? e.setAttribute("font-family", a.format.ln()) : e.removeAttribute("font-family");
        e.setAttribute("y", c + .9 * d);
        e.setAttribute("x", b);
        a.format.bold && e.setAttribute("font-weight", "bold");
        a.format.italic && e.setAttribute("font-style", "italic");
        a.format.letterSpacing && e.setAttribute("letter-spacing", a.format.letterSpacing);
        e.appendChild(document.createTextNode(String(h)));
        a.format.Mb && e.setAttribute("text-decoration", "underline");
        this.Rg(e, "fill", a.format.color);
        f.appendChild(e)
    };
    g.qx = function(a, b, c, d, e, f) {
        var h = B("clipPath"),
            k = zc.Jb().Kb();
        h.setAttribute("id", k);
        this.Op(a, b, c, d, e, h);
        this.rf || (this.rf = B("defs"), this.m.c.nf.Df.appendChild(this.rf));
        this.rf.appendChild(h);
        b = B("use");
        this.Rg(b, "fill", a.format.color);
        b.setAttribute("clip-path", "url(#" + k + ")");
        b.setAttribute("clip-rule", "nonzero");
        ri(b, "#" + this.ni.id);
        f.appendChild(b)
    };
    g.Ns = function(a, b, c, d, e, f) {
        var h = a.format.font;
        h instanceof Kf && h.ascent && h.emSquareSize && (h = a.format.size / h.emSquareSize, b = a.Wm(b, c, d, e), c = B("path"), c.setAttribute("transform", "scale(" + h + ")"), c.setAttribute("d", b.join(" ")), this.Rg(c, "fill", a.format.color), f.appendChild(c))
    };
    g.ka = function() {
        Yk.fa.ka.call(this);
        zb(this.rf)
    };
    var Zk = function(a) {
        this.tx = a
    };
    Zk.prototype.ri = function(a, b, c, d, e) {
        var f = this.tx,
            h = f.bh;
        a.format.ah() ? f.Ns(a, b, c, d, e, h) : f.qx(a, b, c, d, e, h)
    };
    var $k = function(a) {
        Sk.call(this, a)
    };
    v($k, Sk);
    Ah.i(z, $k);
    $k.prototype.ad = function(a) {
        return $k.fa.ad.call(this, a)
    };
    var al = function(a, b, c, d, e) {
        this.cc = a;
        this.fd = b;
        this.name = c;
        this.value = d;
        this.Rn = [];
        this.Yr = e;
        this.Zk = null;
        this.We = 0;
        d && !d.Kf && (this.We |= 512)
    };
    g = al.prototype;
    g.wy = function(a, b) {
        var c = new this.constructor(this.cc, a, this.name, this.value, b);
        this.Rn.push(c);
        c.ao(this.Zk)
    };
    g.set = function(a) {
        this.fd.setAttribute(this.name, a.toString())
    };
    g.ao = function(a) {
        a = this.Yr ? this.Yr(a) : a;
        this.set(a)
    };
    g.apply = function() {
        this.Zk = this.value.tb(this);
        this.ao(this.Zk);
        for (var a = 0; a < this.Rn.length; a++) this.Rn[a].ao(this.Zk)
    };
    g.vc = function() {
        return this.cc.vc()
    };
    var Zh = function(a, b, c, d) {
        al.call(this, a, b, c, d);
        this.We |= 2048
    };
    v(Zh, al);
    Zh.prototype.set = function(a) {
        var b = this.cc.m.Da(),
            b = 20 / ((b.Hj() + b.Ij()) / 2);
        this.fd.setAttribute(this.name, a < b ? b : a)
    };
    var $h = function(a, b, c, d) {
        al.call(this, a, b, c, d);
        this.opacity = ("-color" == c.slice(-6) ? c.slice(0, -6) : c) + "-opacity";
        this.We |= 4096
    };
    v($h, al);
    $h.prototype.set = function(a) {
        a = this.cc.m.Mc().apply(a);
        this.fd.setAttribute(this.name, a.toString());
        this.fd.setAttribute(this.opacity, a.lb.toFixed(3))
    };
    var bl = function(a) {
        Qk.call(this, a);
        this.wk = [];
        this.xk = [];
        this.Gi = [];
        this.gc = this.gh = this.Fm = null
    };
    v(bl, Qk);
    Ah.i(qf, bl);
    g = bl.prototype;
    g.ad = function(a) {
        this.Fm = B("g");
        this.Kr(a);
        return this.Fm
    };
    g.Kr = function(a) {
        this.gc = this.Fu(this.m.c.nf.Df);
        this.km = void 0;
        this.Kp(a)
    };
    g.Au = function() {
        var a = this.m.definition;
        if (!this.gh) {
            var b = B("image");
            b.setAttribute("width", a.hm);
            b.setAttribute("height", a.gm);
            b.setAttribute("x", a.im);
            b.setAttribute("y", a.jm);
            ri(b, a.Oj);
            this.gh = b
        }
        return this.gh
    };
    g.Fu = function(a) {
        this.ce = [];
        for (var b = this.m.definition, c = b.paths, d = [], e = b.fillstyles, f = 0; f < e.length; f++)
            if (e[f]) {
                var h = e[f].qe(b.bounds || [], this);
                null != h && (this.wk[f] = h, a.appendChild(h))
            }
        e = b.linestyles;
        for (f = 0; f < e.length; f++) e[f] && (h = e[f].qe(b.bounds || [], this), null != h && (this.xk[f] = h, a.appendChild(h)));
        a = b.bounds && b.bounds.length ? b.bounds[0] : void 0;
        for (f = 0; f < c.length; f++) {
            var e = c[f],
                h = B("path"),
                k = this.setAttribute(h, "d", e.data, al);
            null != e.line && (h = b.linestyles[e.line].Wf(this, e, k, h, this.xk[e.line],
                "stroke"));
            if (null != e.fill) {
                var n = b.fillstyles[e.fill],
                    h = n.Wf(this, e, k, h, this.wk[e.fill], "fill");
                n.Qk && this.ce.push(uh(h, a))
            } else h.setAttribute("fill", "none");
            d.push(h)
        }
        if (1 == d.length) h = d[0];
        else
            for (h = B("g"), f = 0; f < d.length; f++) h.appendChild(d[f]);
        return h
    };
    g.vc = function() {
        return this.m.vc()
    };
    g.setAttribute = function(a, b, c, d) {
        a = new d(this, a, b, c);
        a.apply();
        d == al && c.Kf || !a.We || this.Gi.push(a);
        return a
    };
    g.ka = function() {
        bl.fa.ka.call(this);
        for (var a = 0; a < this.wk.length; a++) zb(this.wk[a]);
        for (a = 0; a < this.xk.length; a++) zb(this.xk[a]);
        this.Gi = []
    };
    g.Kp = function(a) {
        var b = this.Fm;
        if (b) {
            var c = this.m.c.ha.mf,
                d = Pd();
            a = 0 == (a & 2) && this.m.kp(c.Hj() * d, c.Ij() * d);
            this.km != a && (b.firstChild && b.removeChild(b.firstChild), a ? b.appendChild(this.Au()) : b.appendChild(this.gc), this.km = a)
        }
    };
    g.hc = function(a, b) {
        bl.fa.hc.call(this, a, b);
        this.Kp(a);
        for (var c = 0; c < this.Gi.length; c++) b & this.Gi[c].We && this.Gi[c].apply()
    };
    var Ff = [null, "reflect", "repeat"],
        Gf = [null, "linearRGB"],
        cl = 10 / 16384,
        hk = function(a, b, c, d, e) {
            c = Number(c || 0);
            d = Number(d || 0);
            e = Number(e || 0);
            a = Number(a);
            b = Number(b);
            return Tc.wj(-c).qf(a * cl, b * cl).Jd(a / 2 + d, b / 2 + e)
        },
        Bf = function(a) {
            this.color = a
        };
    g = Bf.prototype;
    g.qe = function() {
        return null
    };
    g.Wf = function(a, b, c, d, e, f) {
        a.setAttribute(d, f, this.color, $h);
        return d
    };
    g.Qk = !1;
    g.Yb = !0;
    g.Cc = function(a, b, c) {
        a = this.color.tb(a);
        a = c.apply(a);
        b.fillStyle = a.Cd();
        b.fill("evenodd");
        return !0
    };
    var dl = function(a, b, c, d, e, f) {
            d.setAttribute(f, "url(#" + e.id + ")");
            return d
        },
        el = function(a, b, c, d) {
            this.transform = a;
            this.stops = b;
            this.oi = Ff[c];
            this.ps = Gf[d]
        };
    g = el.prototype;
    g.ut = function(a, b) {
        a.setAttribute("gradientUnits", "userSpaceOnUse");
        b.setAttribute(a, "gradientTransform", this.transform, al);
        for (var c = 0; c < this.stops.length; c++) a.appendChild(fl(this.stops[c], b));
        this.oi && a.setAttribute("spreadMethod", this.oi);
        this.ps && a.setAttribute("color-interpolation", this.ps);
        a.id = zc.Jb().Kb();
        return a
    };
    g.Wf = dl;
    g.Dp = function(a, b, c, d, e) {
        var f = b,
            h = 1 / (c - b);
        switch (this.oi) {
            case "reflect":
                for (f & 1 && (++f, this.Aj(a, b - f, -h, d, e)); f + 1 < c;) this.Aj(a, f - b, h, d, e), f += 2, this.Aj(a, b - f, -h, d, e);
            case "repeat":
                for (; f < c;) this.Aj(a, f - b, h, d, e), ++f;
                break;
            default:
                this.Aj(a, 0, 1, d, e)
        }
    };
    g.Aj = function(a, b, c, d, e) {
        for (var f = this.stops, h = 0; h < f.length; h++) {
            var k = (f[h].offset.tb(d) + b) * c,
                n = f[h].color.tb(d),
                n = e.apply(n);
            a.addColorStop(k, n.Cd())
        }
    };
    g.Qk = !1;
    g.Yb = !1;
    var Cf = function(a, b, c, d) {
        el.call(this, a, b, c, d)
    };
    v(Cf, el);
    Cf.prototype.qe = function(a, b) {
        var c = B("linearGradient");
        c.setAttribute("x1", -1);
        c.setAttribute("x2", 1);
        c.setAttribute("y1", 0);
        c.setAttribute("y2", 0);
        return this.ut(c, b)
    };
    Cf.prototype.me = function(a, b, c) {
        a = new Uc(a, b);
        a.ja(c);
        return a.x
    };
    Cf.prototype.Cc = function(a, b, c) {
        b.save();
        var d = this.transform.tb(a);
        d.Cc(b);
        var e = -1,
            f = 1;
        if (this.oi) {
            var h = a.Bg(),
                d = d.Bd(),
                k = this.me(h.k, h.j, d);
            k < e && (e = k);
            k > f && (f = k);
            k = this.me(h.t, h.j, d);
            k < e && (e = k);
            k > f && (f = k);
            k = this.me(h.k, h.s, d);
            k < e && (e = k);
            k > f && (f = k);
            k = this.me(h.t, h.s, d);
            k < e && (e = k);
            k > f && (f = k);
            f = Math.ceil(Math.min(25, f)) | 1;
            e = Math.floor(Math.max(-25, e)) - 1 | 1
        }
        h = b.createLinearGradient(e, 0, f, 0);
        this.Dp(h, (e + 1) / 2, (f + 1) / 2, a, c);
        b.fillStyle = h;
        b.fill("evenodd");
        b.restore();
        return !0
    };
    Cf.prototype.Yb = !1;
    var Df = function(a, b, c, d, e) {
        el.call(this, a, b, c, d);
        this.fk = e
    };
    v(Df, el);
    Df.prototype.qe = function(a, b) {
        var c = B("radialGradient");
        c.setAttribute("r", 1);
        c.setAttribute("cx", 0);
        c.setAttribute("cy", 0);
        this.fk && b.setAttribute(c, "fx", this.fk, al);
        return this.ut(c, b)
    };
    Df.prototype.me = function(a, b, c, d, e) {
        var f = new Uc(b, c);
        f.ja(e);
        b = f.x;
        c = f.y;
        e = d * d - 1;
        f = d * (b - d);
        b = (b - d) * (b - d) + c * c;
        if (0 != e) {
            b = f * f - e * b;
            if (0 > b) return a;
            b = 0 < e ? (-f + Math.sqrt(b)) / e : (-f - Math.sqrt(b)) / e
        } else b = -.5 * b / f;
        return b > a ? b : a
    };
    Df.prototype.Cc = function(a, b, c) {
        b.save();
        var d = this.transform.tb(a);
        d.Cc(b);
        var e = 0;
        this.fk && (e = this.fk.tb(a));
        var f = 1;
        if (this.oi) var h = a.Bg(),
            d = d.Bd(),
            f = this.me(f, h.k, h.j, e, d),
            f = this.me(f, h.t, h.j, e, d),
            f = this.me(f, h.k, h.s, e, d),
            f = this.me(f, h.t, h.s, e, d),
            f = Math.ceil(Math.min(25, f));
        e = b.createRadialGradient(e, 0, 0, e * (1 - f), 0, f);
        this.Dp(e, 0, f, a, c);
        b.fillStyle = e;
        b.fill("evenodd");
        b.restore();
        return !0
    };
    Df.prototype.Yb = !1;
    var wi = function(a, b) {
        this.Gf = a;
        this.Mm = "";
        this.transform = b
    };
    g = wi.prototype;
    g.qe = function() {
        this.Mm || (this.Mm = this.Gf ? "#" + this.Gf.sn : "missing");
        return null
    };
    g.Wf = function(a, b, c, d, e) {
        null == e ? (c = B("use"), ri(c, this.Mm)) : c = e;
        this.transform && c.setAttribute("transform", this.transform.toString());
        a = B("g");
        a.appendChild(c);
        var f;
        b.data.Kf && (f = b.data.tb(Oh).Cu());
        if (f && this.Gf) {
            var h;
            if (null == e) e = new Uc(0, 0), h = new Uc(this.Gf.width, this.Gf.height);
            else {
                b = Number(e.getAttribute("x"));
                c = Number(e.getAttribute("y"));
                var k = Number(e.getAttribute("width"));
                h = Number(e.getAttribute("height"));
                e = new Uc(b, c);
                h = new Uc(b + k, c + h)
            }
            this.transform && (e.ja(this.transform), h.ja(this.transform));
            b = Math.round(e.x);
            c = Math.round(e.y);
            k = Math.round(h.x - e.x);
            h = Math.round(h.y - e.y);
            0 > k && (b += k, k = -k);
            0 > h && (c += h, h = -h);
            if (f.k == b && f.j == c && f.width() == k && f.height() == h) return a
        }
        f = B("clipPath");
        f.id = zc.Jb().Kb();
        f.appendChild(d);
        a.appendChild(f);
        a.setAttribute("clip-path", "url(#" + f.id + ")");
        return a
    };
    g.Qk = !0;
    g.ct = function(a, b) {
        var c = this.Gf.Od;
        if (b.ai()) return a.globalAlpha = b.fm(1), c;
        var d = document.createElement("canvas"),
            e = d.width = c.width,
            f = d.height = c.height,
            h = d.getContext("2d");
        h.drawImage(c, 0, 0);
        c = h.getImageData(0, 0, e, f);
        Vg(c.data, b);
        h.putImageData(c, 0, 0);
        return d
    };
    g.Cc = function(a, b, c) {
        b.save();
        a = this.ct(b, c);
        this.transform.Cc(b);
        b.clip("evenodd");
        b.drawImage(a, 0, 0);
        b.restore();
        return !0
    };
    g.Yb = !1;
    var gl = function(a, b) {
        wi.call(this, a, b)
    };
    v(gl, wi);
    gl.prototype.qe = function(a, b) {
        gl.fa.qe.call(this, a, b);
        var c = this.Gf;
        if (!c) return null;
        var d = this.transform,
            e = B("pattern");
        e.setAttribute("width", c.width);
        e.setAttribute("height", c.height);
        e.setAttribute("patternUnits", "userSpaceOnUse");
        var f = B("use");
        ri(f, "#" + c.sn);
        e.appendChild(f);
        e.setAttribute("patternTransform", d.toString());
        e.id = zc.Jb().Kb();
        return e
    };
    gl.prototype.Wf = function(a, b, c, d, e, f) {
        dl(a, b, c, d, e, f);
        a = B("g");
        a.appendChild(d);
        return a
    };
    gl.prototype.Cc = function(a, b, c) {
        b.save();
        a = this.ct(b, c);
        a = b.createPattern(a, "repeat");
        this.transform.Cc(b);
        b.fillStyle = a;
        b.fill("evenodd");
        b.restore();
        return !0
    };
    gl.prototype.Yb = !1;
    var fl = function(a, b) {
        var c = B("stop");
        b.setAttribute(c, "offset", a.offset, al);
        b.setAttribute(c, "stop-color", a.color, $h);
        return c
    };
    var Ef = new wf(Tc.Mi(16384, 16384)),
        hl = function(a) {
            var b = [];
            if (a)
                for (var c = 0; c < a.length; c++) {
                    var d = a[c];
                    b[c] = {
                        color: Ph(d.color, Wh, eh),
                        offset: Sh(d.offset.map(function(a) {
                            return a / 255
                        }))
                    }
                }
            return b
        },
        il = function(a, b) {
            return new this(Vh(b.transform, 16384, Ef), hl(b.gradient.stops), b.gradient.spread | 0, b.gradient.interpolation | 0, b.gradient.f ? Sh(b.gradient.f) : null)
        },
        jl = function(a, b) {
            var c;
            c = b.transform ? Uh(b.transform) : bd;
            var d = a.af(b.bitmap).get();
            return new this(d instanceof qi ? d : null, c)
        },
        kl = [null,
            function(a,
                b) {
                return new Bf(Ph(b.color, Wh, eh))
            },
            il.bind(Cf), il.bind(Df), il.bind(Df), jl.bind(gl), jl.bind(wi)
        ],
        xi = function(a, b) {
            var c = kl[b.type];
            return c ? c(a, b) : null
        };
    var ll = function(a) {
        bl.call(this, a)
    };
    v(ll, bl);
    Ah.i(sf, ll);
    ll.prototype.hc = function(a, b) {
        b & 1024 && this.Kr(0);
        ll.fa.hc.call(this, a, b)
    };
    var ml = function(a) {
        Sk.call(this, a);
        this.Lg = B("rect")
    };
    v(ml, $k);
    Ah.i(tj, ml);
    ml.prototype.ad = function(a) {
        a = ml.fa.ad.call(this, a);
        var b = B("g");
        b.appendChild(this.Lg);
        b.appendChild(a);
        return b
    };
    ml.prototype.Xh = function(a, b) {
        if (b & 524288) {
            var c = this.m,
                d = c.Jj;
            this.Lg.setAttribute("x", d.p);
            this.Lg.setAttribute("y", d.q);
            this.Lg.setAttribute("width", d.n * (c.ug + c.Ad));
            this.Lg.setAttribute("height", d.l * (c.vg + c.zd));
            this.Lg.setAttribute("fill", c.backgroundColor)
        }
        ml.fa.Xh.call(this, a, b)
    };
    var nl = function(a) {
        Qk.call(this, a);
        this.hi = !1;
        this.m.la(1)
    };
    v(nl, Qk);
    Ah.i(Hf, nl);
    nl.prototype.ad = function() {
        return this.Jy()
    };
    nl.prototype.Jy = function() {
        var a = B("g");
        a.setAttribute("fill-rule", "nonzero");
        a.setAttribute("opacity", 1);
        for (var b = this.m.definition, c = 0; c < b.records.length; c++) {
            var d = b.records[c],
                e = b.lm(c),
                f = B("path");
            f.setAttribute("d", e.toString());
            a.appendChild(f);
            this.Rg(f, "fill", d.color)
        }
        return a
    };
    nl.prototype.Xh = function(a, b) {
        var c = this.m;
        if (b & 2048) {
            var d = c.Da(),
                e = c.c.ha.mf,
                c = c.pb().qb.clone();
            c.ja(e);
            c.ja(d);
            1 > c.width() || 1 > c.height() ? this.hi || (this.hi = !0, b |= 1) : this.hi && (this.hi = !1, b |= 1)
        }
        nl.fa.Xh.call(this, a, b)
    };
    nl.prototype.cn = function() {
        return this.hi ? "scale(0)" : nl.fa.cn.call(this)
    };
    var ol = function(a) {
        Qk.call(this, a)
    };
    v(ol, Qk);
    Ah.i(Eg, ol);
    ol.prototype.ad = function() {
        return B("g")
    };
    ol.prototype.Sr = function() {};
    ol.prototype.hc = function(a, b) {
        ol.fa.hc.call(this, a, b)
    };
    var Kf = function(a, b, c, d, e, f, h, k, n) {
        gi.call(this, a);
        this.name = b;
        this.glyphs = c;
        this.emSquareSize = d;
        this.ascent = e;
        this.descent = f;
        this.bold = h;
        this.italic = k;
        this.lineHeight = (e + f) / d;
        this.nb = null;
        this.yl = {};
        for (a = 0; a < c.length; a++) this.yl[c[a].unicode] = c[a];
        this.an = n
    };
    v(Kf, gi);
    var Nf = new Kf(-1, "", [], 0, 0, 0, !1, !1);
    ci[5] = function(a) {
        for (var b = a.emSquareSize ? a.emSquareSize : 1024, c = [], d = 0; a.glyphs && d < a.glyphs.length; d++) {
            var e = a.glyphs[d];
            c.push(new pl(zi(e.data), e.unicode, e.advance, e.alignLeft, e.alignWidth, e.alignBaseline, e.alignHeight))
        }
        return new Kf(a.id, a.name, c, b, a.ascent ? a.ascent : 0, a.descent ? a.descent : 0, a.bold, a.italic, a.thickness)
    };
    g = Kf.prototype;
    g.Bm = function() {
        return this.nb
    };
    g.mr = function(a) {
        return this.yl[a] ? this.yl[a].data : null
    };
    g.xw = function(a) {
        return this.glyphs[a] ? this.glyphs[a].data : null
    };
    g.gj = function(a) {
        return this.yl[a]
    };
    g.Ja = function() {
        return null
    };
    g.Nb = function(a, b, c, d) {
        Kf.fa.Nb.call(this, a, b, c, d);
        a = this.name;
        b.Qc[a] || (b.Qc[a] = []);
        b.Qc[a].push(this)
    };
    var pl = function(a, b, c, d, e, f, h) {
        this.data = a;
        this.unicode = b;
        this.advance = c;
        this.alignLeft = d;
        this.alignWidth = e;
        this.alignBaseline = f;
        this.alignHeight = h
    };
    var ql = function(a, b, c, d, e) {
        gi.call(this, a);
        this.matrix = b;
        this.records = c;
        this.bounds = d;
        this.mode = e
    };
    v(ql, gi);
    ci[6] = function(a, b, c) {
        b = kd(a.bounds);
        for (var d = Uh(a.matrix), e = l(a.mode) ? a.mode : 1, f = [], h = 0; a.records && h < a.records.length; h++) {
            var k = a.records[h],
                n = l(k.font) ? c.af(k.font) : null,
                r = l(k.glyphs) ? Le(k.glyphs) : null;
            f.push(new rl(k.text, r, n, k.height, Le(k.x), Number(k.y), k.color))
        }
        return new ql(a.id, d, f, b, e)
    };
    ql.prototype.lm = function(a) {
        a = this.records[a];
        if (a.Zn) return a.Zn;
        var b = new oh,
            c = a.glyphs,
            d = a.text,
            e = a.font ? a.font.get() : null;
        if (e instanceof Kf)
            for (var f = a.height / e.emSquareSize, h = 0; h < d.length; h++) {
                var k = c ? e.xw(c[h]) : e.mr(d.charAt(h));
                if (k) var n = dd(f, 0, 0, f, a.x[h], a.y).multiply(this.matrix),
                    k = k.ja(n),
                    b = b.concat(k)
            }
        return a.Zn = b
    };
    ql.prototype.Bc = function(a, b, c) {
        return new Hf(this, a, c)
    };
    var rl = function(a, b, c, d, e, f, h) {
        this.text = a;
        this.glyphs = b;
        this.font = c;
        this.height = d;
        this.x = e;
        this.y = f;
        this.color = h;
        this.Zn = null
    };
    var ei = function(a, b, c, d, e, f, h, k) {
        this.definition = b;
        this.depth = a.depth;
        this.matrix = c;
        this.clip = a.clip;
        this.colortransform = d;
        this.name = a.name;
        this.ratio = h;
        this.blendmode = a.blendmode;
        this.replace = a.replace;
        this.actions = e;
        this.filters = f;
        this.Sa = !!(b && b.rm() && b.get().Sa);
        this.Dg = k;
        this.visible = a.visible;
        this.cacheAsBitmap = a.cacheAsBitmap
    };
    v(ei, di);
    ci[3] = function(a, b, c, d) {
        var e;
        if (l(a.actions)) {
            var f = b.zf(mi);
            e = a.actions.map(function(a) {
                return {
                    events: a.events,
                    key: a.key,
                    actions: f.zl(a.actions, void 0)
                }
            })
        }
        var h;
        l(a.filters) && (h = a.filters.map(function(a) {
            return ge(a)
        }));
        var k;
        l(a.matrix) && (k = a.matrix ? Uh(a.matrix) : Tc);
        b = l(a.id) ? c.af(a.id) : null;
        c = a.colortransform ? ki(a.colortransform) : void 0;
        return new ei(a, b, k, c, e, h, l(a.ratio) ? a.ratio / 65535 : void 0, d.xm())
    };
    g = ei.prototype;
    g.Pf = function(a) {
        var b = this.depth + -16384,
            c = a.oa.hd(b),
            d = null;
        if (!this.replace == !c) {
            if (c)
                if (!this.definition || c.Sa() || this.Sa) d = c;
                else {
                    if (a.Zd(b), d = this.nk(a)) d.setTransform(c.Fa()), d.Nc(c.Wb), d.Eg(c.Fb), d.gi(c.mc()), d.am(c.Pc()), d.jc(c.getName())
                } else d = this.nk(a);
            d && !d.Zp() && (this.matrix && d.setTransform(this.matrix), this.colortransform && d.Nc(this.colortransform), l(this.ratio) && d.dk(this.ratio), this.filters && d.Eg(this.filters), l(this.blendmode) && d.gi(this.blendmode), l(this.visible) && d.ok(!!this.visible),
                l(this.cacheAsBitmap) && d.$m(this.cacheAsBitmap))
        }
    };
    g.yi = function(a) {
        var b = a.oa.hd(this.depth + -16384),
            c = null;
        if (b) {
            var c = b.Sa() && this.Sa,
                d = this.definition ? this.definition.id : void 0,
                d = !b.Sa() && b.definition.id == d;
            (c || d) && b.vc() == (this.ratio || 0) ? c = b : (a.oa.tv(b), c = this.nk(a))
        } else c = this.nk(a); if (c) return c.Zp() || (c.setTransform(this.matrix ? this.matrix : Tc), c.Nc(this.colortransform ? this.colortransform : jd), c.dk(this.ratio || 0), c.Eg(this.filters ? this.filters : []), c.gi(this.blendmode | 0), l(this.visible) && c.ok(!!this.visible)), c
    };
    g.nk = function(a) {
        if (!this.definition || !this.definition.rm()) return null;
        var b = this.definition.get(),
            c = b.Bc(a.c, this.Dg);
        if (!c) return null;
        this.name ? c.jc(this.name) : a.c.pa().Pp(a.c, c);
        this.clip && c.am(this.clip + -16384);
        if (this.actions)
            for (c.bi(7), b = 0; b < this.actions.length; ++b) {
                var d = this.actions[b];
                c.tp(d.events, d.key, d.actions)
            } else b.ek && c.bi(7);
        a.Hd(c, this.depth + -16384);
        c.Ja(!0);
        return c
    };
    g.Io = function(a) {
        a.push(this)
    };
    g.yj = function(a) {
        var b = fi(a, this.depth);
        if (0 > b) this.replace || a.push(this);
        else if (this.replace) {
            var c = a[b];
            a.splice(b, 1);
            b = c.definition;
            c.Sa || this.Sa || !this.definition || (b = this.definition);
            c = new ei({
                depth: this.depth,
                name: c.name,
                replace: !1,
                Sa: c.Sa,
                clip: c.clip,
                blendmode: Jk(this.blendmode, c.blendmode),
                visible: Jk(this.visible, c.visible),
                filters: Jk(this.filters, c.filters)
            }, b, Jk(this.matrix, c.matrix), Jk(this.colortransform, c.colortransform), Jk(this.actions, c.actions), Jk(this.filters, c.filters), Jk(this.ratio,
                c.ratio), this.Dg);
            a.push(c)
        }
    };
    g.Sx = function(a) {
        if (!this.actions || !this.Sa) return !1;
        for (var b = 0; b < this.actions.length; ++b)
            if (0 != (this.actions[b].events & a)) return !0;
        return !1
    };
    g.Qx = function() {
        return new ei({
            depth: this.depth + -65536,
            name: this.name,
            replace: !1,
            Sa: !0,
            clip: 0,
            blendmode: this.blendmode,
            filters: this.filters,
            visible: this.visible
        }, this.definition, this.matrix, this.colortransform, this.actions, this.filters, this.ratio, this.Dg)
    };
    var sl = function(a, b, c, d) {
        c = l(c) ? c : !0;
        d = l(d) ? d : 4294967295;
        if (!("__swiffy_d" in this)) {
            var e = new si(of, Xe.c);
            e.Nb(a, b, c, d);
            this.__swiffy_d = e
        }
    };
    G(sl, "BitmapData", Xj);
    var tl = function(a) {
        return a.__swiffy_d
    };
    Object.defineProperty(sl, "__swiffy_override", {
        value: function(a, b, c, d) {
            return 8191 >= a && 8191 >= b && 16777215 >= a * b ? new sl(a, b, c, d) : void 0
        }
    });
    Object.defineProperty(sl.prototype, "width", {
        get: function() {
            return tl(this).Ia()
        }
    });
    Object.defineProperty(sl.prototype, "height", {
        get: function() {
            return tl(this).Xa()
        }
    });
    Object.defineProperty(sl.prototype, "rect", {
        get: function() {
            var a = tl(this);
            return new nk(0, 0, a.Ia(), a.Xa())
        }
    });
    Object.defineProperty(sl.prototype, "transparent", {
        get: function() {
            return tl(this).rd
        }
    });
    sl.loadBitmap = function(a) {
        for (var b = qk[a] || sl, c = Object.create(b.prototype), d = Xe, e = d.c.ep, f = 0; f < e.length; f++) {
            var h = e[f].Id[a];
            if (h instanceof qi) {
                c.__swiffy_d = new si(h, d.c, c);
                break
            }
        }
        b.call(c);
        return c
    };
    sl.prototype.copyPixels = function(a, b, c, d, e, f) {
        a && b && c && (e = e || b, tl(this).Ct(tl(a), b.x, b.y, b.width, b.height, c.x, c.y, d ? tl(d) : null, e.x, e.y, !!f))
    };
    sl.prototype.dispose = function() {
        tl(this).Rl()
    };
    sl.prototype.fillRect = function(a, b) {
        a && tl(this).fillRect(a.x, a.y, a.width, a.height, b)
    };
    sl.prototype.getPixel = function(a, b) {
        return tl(this).Vo(a, b) & 16777215
    };
    sl.prototype.getPixel32 = function(a, b) {
        return tl(this).Vo(a, b)
    };
    sl.prototype.scroll = function(a, b) {
        tl(this).scroll(a, b)
    };
    sl.prototype.setPixel = function(a, b, c) {
        tl(this).$o(a, b, c | 4278190080)
    };
    sl.prototype.setPixel32 = function(a, b, c) {
        tl(this).$o(a, b, c)
    };
    H(sl, null, 3);
    var ul = function(a) {
        return Xj.call(this, a)
    };
    G(ul, "Function", Xj);
    Object.defineProperty(ul, "__swiffy_wrapped_type", {
        value: Function
    });
    Object.defineProperty(Function, "__swiffy_override", {
        value: pk
    });
    Object.defineProperty(ul, "__swiffy_override", {
        value: pk
    });
    ul.prototype.apply = function(a, b) {
        var c = this;
        if (q(c)) return "__swiffy_override" in c && (c = c.__swiffy_override), Function.prototype.apply.call(c, Xj(a), ea(b) ? b : [])
    };
    Object.defineProperty(Function.prototype.apply, "__swiffy_override", {
        value: ul.prototype.apply
    });
    Function.prototype.bind && Object.defineProperty(Function.prototype.bind, "__swiffy_override", {
        value: void 0
    });
    ul.prototype.call = function(a, b) {
        return ul.prototype.apply.call(this, a, Array.prototype.slice.call(arguments, 1))
    };
    Object.defineProperty(Function.prototype.call, "__swiffy_override", {
        value: ul.prototype.call
    });
    H(ul, null, 3);
    H(ul.prototype, null, 3);
    var vl = function(a) {
            a.__swiffy_v.Dq = [];
            Object.defineProperty(a, "contentType", {
                value: "application/x-www-form-urlencoded",
                writable: !0
            });
            Object.defineProperty(a, "loaded", {
                value: !1,
                writable: !0
            })
        },
        wl = function(a, b, c) {
            var d = Xe;
            a = a.__swiffy_v.Dq;
            if (m(b) && l(c)) a.push({
                name: b,
                value: d.Ua(c)
            });
            else if (ea(b)) {
                c = b.length / 2;
                for (var e = 0; e < c; e++) a.push({
                    name: d.Ua(b[2 * e]),
                    value: d.Ua(b[2 * e + 1])
                })
            }
        },
        yl = function(a, b, c, d) {
            var e = Xe;
            a = e.Ua(a);
            b.loaded = !1;
            var f = new xd;
            f.yc = function(a) {
                xl(b.onData, b, a)
            };
            f.ee = function() {
                xl(b.onData,
                    b, void 0)
            };
            var h = null,
                k = "GET",
                n, r;
            c && (h = c.toString(), k = l(d) ? d : "POST", n = c.__swiffy_v.Dq, r = c.contentType);
            wd(a, e.c, k, h, f, n, r)
        },
        zl = function(a, b, c, d) {
            var e = Xe;
            a = e.Ua(a);
            c = l(c) ? c : "_self";
            d = l(d) ? d : "POST";
            if ("GET" == d) d = 1;
            else if ("POST" == d) d = 2;
            else return;
            e.c.si(new ij(e, b, a, c, d))
        },
        xl = function(a, b, c) {
            if (q(a)) return a.call.apply(a.call, arguments)
        };
    var Al = function() {};
    Pj(Al, J);
    var Bl = function(a, b) {
            Object.defineProperty(this, a, {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !0
            });
            var c = this.__swiffy_d;
            c && c != c.c.ub && c.ak()
        },
        Cl = function() {},
        Dl = [, , "onMouseUp", "onMouseDown", "onMouseMove", "onUnload", "onEnterFrame"];
    Dl[19] = "onConstruct";
    Dl[7] = "onLoad";
    Dl[14] = "onDragOver";
    Dl[16] = "onDragOver";
    Dl[8] = "onRollOut";
    Dl[9] = "onRollOver";
    Dl[10] = "onReleaseOutside";
    Dl[11] = "onRelease";
    Dl[12] = "onPress";
    Dl[13] = "onDragOut";
    Dl[15] = "onDragOut";
    for (var El = {}, Fl = 0; Fl < Dl.length; Fl++)
        if (1 << Fl & 63045376) {
            var Gl = Dl[Fl];
            El[Gl] = {
                get: Cl,
                set: oa(Bl, Gl)
            }
        }
    Object.defineProperties(Al.prototype, El);
    H(Al.prototype, null, 3);
    var Hl = function() {};
    Pj(Hl, Al);
    H(Hl.prototype, null, 3);
    var Il = function() {};
    G(Il, "Button", Hl);
    Il.prototype.enabled = !0;
    Il.prototype.useHandCursor = !0;
    Object.defineProperty(Il.prototype, "tabIndex", {
        value: void 0,
        writable: !0,
        enumerable: !0
    });
    H(Il.prototype, null, 3);
    var Jl = function() {
        Object.defineProperty(this, "__swiffy_v", {
            value: {}
        });
        vl(this)
    };
    G(Jl, "LoadVars");
    Jl.prototype.addRequestHeader = function(a, b) {
        wl(this, a, b)
    };
    Jl.prototype.load = function(a) {
        yl(a, this)
    };
    Jl.prototype.send = function(a, b, c) {
        if (0 == arguments.length) return !1;
        zl(a, this, b, c);
        return !0
    };
    Jl.prototype.sendAndLoad = function(a, b, c) {
        yl(a, b, this, c)
    };
    Jl.prototype.onData = function(a) {
        var b = l(a);
        b && xl(this.decode, this, a);
        this.loaded = b;
        xl(this.onLoad, this, b)
    };
    Jl.prototype.onLoad = function() {};
    Jl.prototype.decode = function(a) {
        a = yd(a);
        for (var b in a) {
            var c = a[b];
            this[b] = c[c.length - 1]
        }
    };
    Jl.prototype.toString = function() {
        return td(this)
    };
    H(Jl.prototype, null, 3);
    var D = function() {};
    G(D, "MovieClip", Hl);
    D.prototype.enabled = !0;
    D.prototype.useHandCursor = !0;
    D.prototype.focusEnabled = void 0;
    Object.defineProperty(D.prototype, "_droptarget", {
        get: function() {
            var a = this.__swiffy_d;
            return a ? (a = (a = a.Dw()) && a.ea._target) && "/" != a ? a : "" : ""
        }
    });
    D.prototype.gotoAndStop = function(a) {
        var b = this.__swiffy_d;
        b && b.Af(b.Tg(a), !1)
    };
    D.prototype.gotoAndPlay = function(a) {
        var b = this.__swiffy_d;
        b && b.Af(b.Tg(a), !0)
    };
    D.prototype.play = function() {
        var a = this.__swiffy_d;
        a && a.play()
    };
    D.prototype.stop = function() {
        var a = this.__swiffy_d;
        a && a.stop()
    };
    D.prototype.nextFrame = function() {
        var a = this.__swiffy_d;
        a && a.xj()
    };
    D.prototype.prevFrame = function() {
        var a = this.__swiffy_d;
        a && a.Ko()
    };
    D.prototype.globalToLocal = function(a) {
        var b = this.__swiffy_d;
        if (b) {
            var c = b.c.pa(),
                d = c.Sp(a);
            if (null != d) {
                var e = c.na(a, "x"),
                    c = c.na(a, "y"),
                    b = Ak(b.wc(), d);
                a[e] = b.x;
                a[c] = b.y
            }
        }
    };
    D.prototype.localToGlobal = function(a) {
        var b = this.__swiffy_d;
        if (b) {
            var c = b.c.pa(),
                d = c.Sp(a);
            if (null != d) {
                var e = c.na(a, "x"),
                    c = c.na(a, "y"),
                    b = Ak(b.Da(), d);
                a[e] = b.x;
                a[c] = b.y
            }
        }
    };
    D.prototype.createEmptyMovieClip = function(a, b) {
        var c = this.__swiffy_d;
        if (c) {
            var d = new sj(0, 0, null, c.definition.Id),
                d = new z(d, c.c, null);
            d.Dd = !0;
            d.jc(a);
            d.Ja();
            c.Zd(b);
            c.Hd(d, b);
            return d.ea
        }
    };
    D.prototype.createTextField = function(a, b, c, d, e, f) {
        if (!(6 > arguments.length)) {
            a = String(a);
            b = zk(b);
            c = zk(c);
            d = zk(d);
            e = Math.abs(zk(e));
            f = Math.abs(zk(f));
            var h = this.__swiffy_d;
            if (h) {
                var k = new Lj({
                        tag: -1,
                        height: 240,
                        color: 4278190080,
                        border: !1,
                        hp: !1,
                        html: !1,
                        maxChars: null,
                        multiline: !1,
                        password: !1,
                        selectable: !0,
                        variable: null,
                        wrap: !1,
                        Sa: 6 <= h.c.xe
                    }, new w(0, 0, 20 * e, 20 * f), h.c.xe),
                    k = new yh(k, h.c, null);
                k.jc(a);
                k.setTransform(dd(1, 0, 0, 1, 20 * c, 20 * d));
                k.Ja();
                h.Zd(b);
                h.Hd(k, b);
                return k.ea
            }
        }
    };
    D.prototype.getNextHighestDepth = function() {
        var a = this.__swiffy_d;
        return a ? a.oa.Kw() : void 0
    };
    D.prototype.getInstanceAtDepth = function(a) {
        var b = this.__swiffy_d;
        if (b && !(-16384 > a) && (a = b.oa.hd(a))) return a instanceof $i ? a.ea : b.ea
    };
    D.prototype.getSWFVersion = function() {
        var a = this.__swiffy_d;
        return a ? a.c.xe : -1
    };
    D.prototype.setMask = function(a) {
        var b = this.__swiffy_d;
        if (b) {
            var c;
            c = m(a) ? b.c.pa().Hq(a) : a;
            if (c instanceof D || c instanceof Kl) return b.Nf(c.__swiffy_d), !0;
            b.Nf(null);
            return !l(a)
        }
    };
    D.prototype.attachMovie = function(a, b, c, d) {
        var e = this.__swiffy_d;
        if (e && (a = e.definition.Id[a], l(a))) {
            var f = Hd.xm();
            a = a.Bc(e.c, f);
            a.Dd = !0;
            a.jc(b);
            e.Zd(c);
            e.Hd(a, c);
            if (l(d)) {
                b = a.ea;
                for (var h in d) b[h] = d[h]
            }
            a.Ja();
            return a.ea
        }
    };
    D.prototype.attachBitmap = function(a, b) {
        var c = this.__swiffy_d;
        if (c && a) {
            var d = new pf(a.__swiffy_d, c.c);
            d.Dd = !0;
            c.Zd(b);
            c.Hd(d, b)
        }
    };
    D.prototype.duplicateMovieClip = function(a, b, c) {
        var d = this.__swiffy_d;
        if (d) {
            var e = d.getParent();
            if (e) {
                a = d.duplicate(e, a, b);
                if (l(c)) {
                    b = a.ea;
                    for (var f in c) b[f] = c[f]
                }
                return a.ea
            }
        }
    };
    D.prototype.removeMovieClip = function() {
        var a = this.__swiffy_d;
        if (a) {
            var b = a.getParent();
            0 <= a.depth && a.Dd && b && (a.ka(), b.removeChild(a))
        }
    };
    D.prototype.loadMovie = function(a, b) {
        var c = this.__swiffy_d;
        c && (a = c.c.pa().Ua(a), c.sq(a, b, this))
    };
    D.prototype.loadVariables = function(a, b) {
        var c = this.__swiffy_d;
        c && zd(a, c.c, b, this, function() {
            return c
        })
    };
    D.prototype.unloadMovie = function() {
        var a = this.__swiffy_d;
        a && a.nn(new sj(0, 0, null, a.definition.Id))
    };
    D.prototype.swapDepths = function(a) {
        var b = this.__swiffy_d,
            c = b ? b.getParent() : void 0;
        if (c) {
            var d = void 0;
            if (a instanceof J) {
                a = a.__swiffy_d;
                if (a.getParent() != c) return;
                d = a.depth
            } else "number" === typeof a && (d = a);
            l(d) && c.Qn(b.depth, d)
        }
    };
    D.prototype.getBytesTotal = function() {
        var a = this.__swiffy_d;
        if (a) return a.c.lu
    };
    D.prototype.getBytesLoaded = D.prototype.getBytesTotal;
    D.prototype.getBounds = function(a) {
        var b = this.__swiffy_d;
        if (b) {
            var c = b.pb().Xd().clone();
            c.sb() && c.expand(134217728, 134217728);
            if (l(a)) {
                var d = null;
                m(a) && (a = b.c.pa().Yh(a, this));
                a instanceof D && (d = a.__swiffy_d);
                if (d) a = d.wc(), c.ja(b.Da().multiply(a));
                else return
            }
            b = {};
            b.xMin = c.k / 20;
            b.xMax = c.t / 20;
            b.yMin = c.j / 20;
            b.yMax = c.s / 20;
            return b
        }
    };
    D.prototype.getURL = function(a, b, c) {
        var d = this.__swiffy_d;
        if (d) {
            var e = d.c.pa();
            a = e.Ua(a);
            var f = 0;
            m(c) && (c = c.toLowerCase(), "get" == c ? f = 1 : "post" == c && (f = 2));
            a = new ij(e, this, a, b, f);
            d.c.si(a)
        }
    };
    D.prototype.hitTest = function(a, b, c) {
        var d = this.__swiffy_d;
        if (l(a) && d) {
            var e = d.pb().Xd().clone();
            e.ja(d.Da());
            if (!l(b) && !l(c)) {
                if (c = null, a instanceof D ? c = a.__swiffy_d : m(a) && (c = d.c.pa().Yh(a, this)), null != c) return d = c.pb().Xd().clone(), d.ja(c.Da()), e.jp(d)
            } else if (l(b)) return a *= 20, b *= 20, (e = e.contains(a, b)) && c ? d.Bu(a, b) : e
        }
        return !1
    };
    D.prototype.clear = function() {
        var a = this.__swiffy_d;
        a && a.ob().clear()
    };
    D.prototype.moveTo = function(a, b) {
        var c = this.__swiffy_d;
        c && c.ob().moveTo(a, b)
    };
    D.prototype.lineTo = function(a, b) {
        var c = this.__swiffy_d;
        c && c.ob().lineTo(a, b)
    };
    D.prototype.curveTo = function(a, b, c, d) {
        var e = this.__swiffy_d;
        e && e.ob().Qs(a, b, c, d)
    };
    D.prototype.lineStyle = function(a, b, c, d, e, f, h, k) {
        var n = this.__swiffy_d;
        n && n.ob().Ts(a, b, c, d, e, f, h, k)
    };
    D.prototype.beginFill = function(a, b) {
        var c = this.__swiffy_d;
        c && c.ob().Ps(a, b)
    };
    D.prototype.beginGradientFill = function(a, b, c, d, e, f, h, k) {
        var n = this.__swiffy_d;
        if (n) {
            var r = null;
            ia(e) && (e instanceof ek ? r = fk(e) : "box" == e.matrixType ? (r = hk(e.w, e.h, e.r, e.x, e.y), r = r.gd(20 * r.p, 20 * r.q)) : r = dd(e.a * cl, e.b * cl, e.d * cl, e.e * cl, 20 * e.g, 20 * e.h));
            e = r;
            n.ob().Wq(a, b, c, d, e, f, h, k)
        }
    };
    D.prototype.endFill = function() {
        var a = this.__swiffy_d;
        a && a.ob().Ss()
    };
    D.prototype.startDrag = function(a, b, c, d, e) {
        var f = this.__swiffy_d;
        f && f.c.Gq(f, a, b, c, d, e)
    };
    D.prototype.stopDrag = function() {
        var a = this.__swiffy_d;
        a && a.c.tk()
    };
    uk(D.prototype, "_currentframe", function(a) {
        return Math.max(1, a.ib + 1)
    });
    uk(D.prototype, "_totalframes", function(a) {
        return a.definition.frameCount
    });
    uk(D.prototype, "_framesloaded", function(a) {
        return a.definition.frameCount
    });
    rk(D.prototype, "_lockroot", function(a) {
        return a.Mj
    }, function(a, b) {
        a.up(Boolean(b))
    });
    rk(D.prototype, "blendMode", function(a) {
        return Yc[a.mc()]
    }, function(a, b) {
        var c = 0;
        Number(b) == b ? (c = Number(b) - 1, Yc[c] || (c = 0)) : c = Xc[String(b)] || 0;
        a.gi(c)
    });
    rk(D.prototype, "cacheAsBitmap", function(a) {
        return a.Qt()
    }, function(a, b) {
        a.$m(Boolean(b))
    });
    H(D.prototype, null, 3);
    var Ll = function() {
        Object.defineProperty(this, "__swiffy_v", {
            value: {
                so: 0,
                volume: 100,
                transform: {
                    xl: 100,
                    oo: 0,
                    po: 0,
                    qo: 100
                }
            }
        })
    };
    G(Ll, "Sound");
    Si(Ll);
    Ll.prototype.checkPolicyFile = !1;
    Object.defineProperty(Ll.prototype, "duration", {
        value: 0
    });
    Object.defineProperty(Ll.prototype, "id3", {
        value: void 0
    });
    Object.defineProperty(Ll.prototype, "position", {
        value: 0
    });
    Ll.prototype.onID3 = void 0;
    Ll.prototype.onLoad = void 0;
    Ll.prototype.onSoundComplete = void 0;
    Ll.prototype.attachSound = function() {};
    Ll.prototype.getBytesLoaded = function() {
        return 0
    };
    Ll.prototype.getBytesTotal = function() {
        return 0
    };
    Ll.prototype.getPan = function() {
        return this.__swiffy_v.so
    };
    Ll.prototype.getTransform = function() {
        var a = this.__swiffy_v;
        return {
            ll: a.transform.xl,
            lr: a.transform.oo,
            rl: a.transform.po,
            rr: a.transform.qo
        }
    };
    Ll.prototype.getVolume = function() {
        return this.__swiffy_v.volume
    };
    Ll.prototype.loadSound = function() {
        this.__swiffy_vm.Sl("setTimeout")(na(function() {
            if (q(this.onLoad)) this.onLoad(!0)
        }, this), 1)
    };
    Ll.prototype.setPan = function(a) {
        a = Ml.call(this, a);
        var b = this.__swiffy_v;
        b.so = -100 > a ? -200 - a : 100 < a ? 200 - a : a;
        b.transform = {
            xl: 0 < a ? 100 - a : 100,
            qo: 0 > a ? 100 + a : 100,
            oo: 0,
            po: 0
        }
    };
    Ll.prototype.setTransform = function(a) {
        if (a) {
            var b = this.__swiffy_v;
            l(a.ll) && (b.transform.xl = Nl.call(this, a.ll));
            l(a.lr) && (b.transform.oo = Nl.call(this, a.lr));
            l(a.rl) && (b.transform.po = Nl.call(this, a.rl));
            l(a.rr) && (b.transform.qo = Nl.call(this, a.rr));
            a = 100 - b.transform.xl;
            b.so = -100 > a ? -200 - a : 100 < a ? 200 - a : a
        }
    };
    Ll.prototype.setVolume = function(a) {
        this.__swiffy_v.volume = Ml.call(this, a)
    };
    Ll.prototype.start = function() {
        this.__swiffy_vm.Sl("setTimeout")(na(function() {
            if (q(this.onSoundComplete)) this.onSoundComplete()
        }, this), 1)
    };
    Ll.prototype.stop = function() {};
    Ll.prototype.toString = function() {
        return "[object Object]"
    };
    H(Ll.prototype, null, 3);
    var Ml = function(a) {
            a = this.__swiffy_vm.Sl("Number")(a);
            return isNaN(a) ? -2147483648 : a >> 0
        },
        Nl = function(a) {
            return this.__swiffy_vm.Sl("Number")(a) >> 0
        };
    var Ol = function() {
        this.showMenu = !0
    };
    G(Ol, "Stage");
    Object.defineProperty(Ol.prototype, "height", {
        get: function() {
            var a = this.__swiffy_d;
            return "noScale" == a.pd ? a.zd : a.di
        },
        set: function() {}
    });
    Object.defineProperty(Ol.prototype, "width", {
        get: function() {
            var a = this.__swiffy_d;
            return "noScale" == a.pd ? a.Ad : a.ei
        },
        set: function() {}
    });
    Object.defineProperty(Ol.prototype, "align", {
        get: function() {
            var a = this.__swiffy_d.Ue,
                b = "";
            a & 1 && (b += "L");
            a & 2 && (b += "T");
            a & 4 && (b += "R");
            a & 8 && (b += "B");
            return b
        },
        set: function(a) {
            this.__swiffy_d.Wt(String(a))
        }
    });
    Object.defineProperty(Ol.prototype, "scaleMode", {
        get: function() {
            return this.__swiffy_d.pd
        },
        set: function(a) {
            var b = this.__swiffy_d;
            switch (String(a).toLowerCase()) {
                case "exactfit":
                    a = "exactFit";
                    break;
                case "noborder":
                    a = "noBorder";
                    break;
                case "noscale":
                    a = "noScale";
                    break;
                default:
                    a = "showAll"
            }
            b.du(a)
        }
    });
    H(Ol.prototype, null, 3);
    var Pl = function() {
        this.allowDomain = function() {
            return !0
        };
        this.allowInsecureDomain = function() {
            return !0
        }
    };
    G(Pl, "System.security");
    var Ql = function() {
        this.security = new Pl
    };
    G(Ql, "System");
    var Rl = function() {
        gf(this, new If)
    };
    G(Rl, "TextFormat");
    var Sl = function(a) {
        var b = Object.create(Rl.prototype);
        gf(b, a);
        return b
    };
    Object.defineProperties(Rl.prototype, {
        align: {
            get: Rf,
            set: Sf,
            Vb: !0
        },
        blockIndent: {
            get: Tf,
            set: Uf,
            Vb: !0
        },
        bold: {
            get: Vf,
            set: Wf,
            Vb: !0
        },
        bullet: {
            get: Xf,
            set: bg,
            Vb: !0
        },
        color: {
            get: cg,
            set: dg,
            Vb: !0
        },
        font: {
            get: eg,
            set: fg,
            Vb: !0
        },
        indent: {
            get: gg,
            set: hg,
            Vb: !0
        },
        italic: {
            get: ig,
            set: jg,
            Vb: !0
        },
        kerning: {
            get: kg,
            set: lg,
            Vb: !0
        },
        leading: {
            get: mg,
            set: ng,
            Vb: !0
        },
        leftMargin: {
            get: og,
            set: pg,
            Vb: !0
        },
        letterSpacing: {
            get: qg,
            set: rg,
            Vb: !0
        },
        rightMargin: {
            get: sg,
            set: tg,
            Vb: !0
        },
        size: {
            get: ug,
            set: vg,
            Vb: !0
        },
        tabStops: {
            get: yg,
            set: zg,
            Vb: !0
        },
        target: {
            get: wg,
            set: xg,
            Vb: !0
        },
        underline: {
            get: Ag,
            set: Bg,
            Vb: !0
        },
        url: {
            get: Cg,
            set: Dg,
            Vb: !0
        }
    });
    var Kl = function() {};
    G(Kl, "TextField", J);
    Kl.prototype.getTextFormat = function(a, b) {
        var c = this.__swiffy_d;
        if (c) return c = c.Pt(a, b), Sl(c)
    };
    Kl.prototype.setTextFormat = function(a, b, c) {
        var d = this.__swiffy_d;
        if (d) {
            var e, f, h;
            a instanceof Rl ? e = a : b instanceof Rl ? (e = b, f = a) : c instanceof Rl && (e = c, f = a, h = b);
            e && d.Bl(A(e), f, h)
        }
    };
    Kl.prototype.getNewTextFormat = function() {
        var a = this.__swiffy_d;
        if (a) return a = a.Nt(), Sl(a)
    };
    Kl.prototype.setNewTextFormat = function(a) {
        var b = this.__swiffy_d;
        b && a instanceof Rl && b.cu(A(a))
    };
    var Tl = function(a, b, c, d) {
        Object.defineProperty(Kl.prototype, a, {
            get: function() {
                var a = this.__swiffy_d;
                if (a) return b.call(this, a)
            },
            set: function(a) {
                var b = this.__swiffy_d;
                b && c && c.call(this, b, a)
            },
            enumerable: l(d) ? d : !0
        })
    };
    Tl("text", function(a) {
        var b = a.Oa;
        a.nc && (b = lj(b, a.definition.multiline));
        return b
    }, function(a, b) {
        var c = a.c.pa();
        b = c.Ua(b);
        a.nc && (a.sk(!1), b = mj(b));
        null != a.Ke() ? c.Hu(a.Ke(), a, b) : a.kd(b);
        a.sk(!0)
    });
    Tl("htmlText", function(a) {
        var b = a.Oa;
        a.nc && (b = nj(String(b)));
        return b
    }, function(a, b) {
        var c = a.c.pa();
        b = c.Ua(b);
        null != a.Ke() ? c.rk(a.Ke(), b) : a.kd(b)
    });
    Tl("textColor", function(a) {
        return a.Ot()
    }, function(a, b) {
        a.fu(Number(b))
    });
    Tl("antiAliasType", function(a) {
        return a.hn
    }, function(a, b) {
        "normal" != b && "advanced" != b || a.Xt(String(b))
    });
    Tl("autoSize", function(a) {
        return a.Cg
    }, function(a, b) {
        switch (b) {
            case !0:
                b = "left";
            case "center":
            case "left":
            case "none":
            case "right":
                break;
            default:
                b = "none"
        }
        a.Yt(b)
    });
    Tl("background", function(a) {
        return a.wq
    }, function(a, b) {
        a.lj(!!b)
    }, !1);
    Tl("backgroundColor", function(a) {
        return a.Py()
    }, function(a, b) {
        a.vz(Number(b))
    }, !1);
    Tl("border", function(a) {
        return a.Zh
    }, function(a, b) {
        a.Zt(!!b)
    }, !1);
    Tl("borderColor", function(a) {
        return a.Qy()
    }, function(a, b) {
        a.xz(Number(b))
    }, !1);
    Tl("condenseWhite", function(a) {
        return a.xq
    }, function(a, b) {
        a.yz(!!b)
    }, !1);
    Tl("embedFonts", function(a) {
        return a.Gg
    }, function(a, b) {
        a.au(!!b)
    });
    Tl("gridFitType", function(a) {
        return a.yq
    }, function(a, b) {
        "none" != b && "pixel" != b && "subpixel" != b || a.Bz(String(b))
    }, !1);
    Tl("html", function(a) {
        return a.nc
    }, function(a, b) {
        b = !!b;
        if (b != a.nc) {
            var c = this.text;
            a.Lx(b);
            this.text = c
        }
    });
    Tl("length", function() {
        return this.text.length
    });
    Tl("maxChars", function(a) {
        return a.zq
    }, function(a, b) {
        a.Cz(null != b ? Number(b) : null)
    }, !1);
    Tl("mouseWheelEnabled", function() {
        return !0
    }, void 0, !1);
    Tl("multiline", function(a) {
        return a.dh
    }, function(a, b) {
        a.bu(!!b)
    });
    Tl("password", function(a) {
        return a.Aq
    }, function(a, b) {
        a.Fz(!!b)
    }, !1);
    Tl("restrict", function(a) {
        return a.Bq
    }, function(a, b) {
        a.Iz(null != b ? String(b) : null)
    }, !1);
    Tl("selectable", function(a) {
        return a.ii
    }, function(a, b) {
        a.eu(!!b)
    });
    Object.defineProperty(Kl.prototype, "styleSheet", {
        value: void 0,
        enumerable: !1
    });
    Tl("sharpness", function(a) {
        return a.Cq
    }, function(a, b) {
        a.Kz(Number(b))
    }, !1);
    Object.defineProperty(Kl.prototype, "tabIndex", {
        value: void 0,
        writable: !0,
        enumerable: !1
    });
    Tl("textHeight", function(a) {
        return Math.floor(a.Jq() / 20)
    });
    Tl("textWidth", function(a) {
        return Math.floor(a.Kq() / 20)
    });
    Tl("thickness", function(a) {
        return a.an
    }, function(a, b) {
        a.Lz(Number(b))
    }, !1);
    Tl("variable", function(a) {
        return a.Ke()
    }, function(a, b) {
        a.rk(null != b ? String(b) : null)
    });
    Tl("wordWrap", function(a) {
        return a.zi
    }, function(a, b) {
        a.gu(!!b)
    });
    Tl("type", function(a) {
        return a.Ck ? "input" : "dynamic"
    }, function(a, b) {
        b = String(b).toLowerCase();
        "input" == b ? a.Zo(!0) : "dynamic" == b && a.Zo(!1)
    }, !1);
    H(Kl.prototype, null, 3);
    var vk = function(a) {
        a instanceof jf || (a = this.__swiffy_vm.eh(a));
        Object.defineProperty(this, "__swiffy_d", {
            value: a
        })
    };
    G(vk, "Transform");
    Si(vk);
    rk(vk.prototype, "colorTransform", function(a) {
        return Yj(a.Wb)
    }, function(a, b) {
        a.Nc(b instanceof Wj ? b.__swiffy_v : jd)
    });
    uk(vk.prototype, "concatenatedColorTransform", function(a) {
        return Yj(a.Mc())
    });
    uk(vk.prototype, "concatenatedMatrix", function(a) {
        return gk(a.Da())
    });
    rk(vk.prototype, "matrix", function(a) {
        return gk(a.Fa())
    }, function(a, b) {
        a.setTransform(fk(b))
    });
    uk(vk.prototype, "pixelBounds", function(a) {
        var b = a.pb().Xd().clone();
        b.ja(a.Da());
        return new nk(Math.floor(b.k / 20), Math.floor(b.j / 20), Math.ceil((b.t - b.k) / 20), Math.ceil((b.s - b.j) / 20))
    });
    var Ul = function() {};
    G(Ul, "Video", J);
    Object.defineProperty(Ul.prototype, "width", {
        get: function() {
            return this.__swiffy_d.width
        }
    });
    Object.defineProperty(Ul.prototype, "height", {
        get: function() {
            return this.__swiffy_d.height
        }
    });
    Object.defineProperty(Ul.prototype, "smoothing", {
        get: function() {
            return this.__swiffy_d.smoothing
        },
        set: function(a) {
            this.__swiffy_d.smoothing = a
        }
    });
    Object.defineProperty(Ul.prototype, "deblocking", {
        get: function() {
            return this.__swiffy_d.deblocking
        },
        set: function(a) {
            this.__swiffy_d.deblocking = a
        }
    });
    Ul.prototype.attachVideo = function() {};
    Ul.prototype.clear = function() {};
    H(Ul.prototype, null, 3);
    var Wl = function(a, b) {
            if ("_" == b.charAt(0) && a instanceof J) {
                if (b in a) return b;
                var c = b.toLowerCase();
                if (c in Vl && c in a) return c
            }
            return b
        },
        Zl = function(a, b) {
            var c = Xl[typeof a];
            if (c) {
                var d = b.toLowerCase();
                return (c = c[d]) ? c : d
            }
            if (b in a) return b;
            var e = Yl(a),
                d = b.toLowerCase();
            return (c = e[d]) ? c : b == d || d in a ? d : e[d] = b
        },
        $l = function(a, b) {
            if ("_" == b.charAt(0) && a instanceof J) {
                if (b in a) return b;
                var c = b.toLowerCase();
                if (c in Vl && c in a) return c
            }
            return b
        },
        am = function(a, b) {
            var c = Xl[typeof a];
            if (!c) {
                if (b in a) return b;
                c = Yl(a)
            }
            var d = b.toLowerCase();
            return (c = c[d]) ? c : d
        },
        bm = function(a) {
            a = a instanceof pi ? a.getParent() : a;
            return a = this.Vn(a, bj)
        },
        cm = function(a) {
            a = a instanceof pi ? a.getParent() : a;
            return a = this.Vn(a, z)
        },
        dm = function(a) {
            return ha(a) ? a : !l(a) || null === a || m(a) && "" === a.trim() ? Number.NaN : Number(a)
        },
        em = function(a) {
            return ha(a) ? a : l(a) && null !== a ? m(a) && "" === a.trim() ? Number.NaN : Number(a) : 0
        },
        fm = function(a) {
            return ha(a) ? a : l(a) && null !== a ? m(a) ? (a = Number(a), isNaN(a) ? 0 : a) : Number(a) : 0
        },
        gm = function(a) {
            if (m(a)) return a;
            ga(a) &&
                (a = a ? "1" : "0");
            return l(a) ? a instanceof J ? a.__swiffy_d.Tl() : a + "" : ""
        },
        hm = function(a) {
            return m(a) ? a : l(a) ? a instanceof J ? a.__swiffy_d.Tl() : a + "" : ""
        },
        im = function(a) {
            return m(a) ? a : a instanceof J ? a.__swiffy_d.Tl() : a + ""
        },
        jm = function(a) {
            return Boolean(a)
        },
        km = function(a) {
            return "string" == typeof a ? Boolean(Number(a)) : Boolean(a)
        },
        lm = function(a, b) {
            return a == b ? 1 : 0
        },
        mm = function(a, b) {
            return a == b
        },
        nm = function(a, b) {
            var c = typeof a,
                d = typeof b;
            return "number" === c && "number" === d ? a == b : this.Lt(a, c, b, d)
        },
        om = function(a, b) {
            var c =
                typeof a,
                d = typeof b;
            return c === d && null === a === (null === b) ? a == b : this.Lt(a, c, b, d)
        };
    var pm = function(a, b) {
        Object.defineProperty(this, "nodeType", {
            value: a,
            writable: !1
        });
        Object.defineProperty(this, "attributes", {
            value: {},
            writable: !1
        });
        1 == a ? (this.nodeName = b, this.nodeValue = null) : (this.nodeName = null, this.nodeValue = b);
        Object.defineProperty(this, "__swiffy_v", {
            value: {
                nextSibling: null,
                previousSibling: null,
                parentNode: null,
                childNodes: []
            }
        })
    };
    G(pm, "XMLNode");
    var qm = function(a) {
        return a.__swiffy_v
    };
    Object.defineProperty(pm.prototype, "childNodes", {
        get: function() {
            return qm(this).childNodes.slice(0)
        }
    });
    Object.defineProperty(pm.prototype, "firstChild", {
        get: function() {
            return qm(this).childNodes[0]
        }
    });
    Object.defineProperty(pm.prototype, "lastChild", {
        get: function() {
            var a = qm(this).childNodes;
            return a[a.length - 1]
        }
    });
    Object.defineProperty(pm.prototype, "nextSibling", {
        get: function() {
            return qm(this).nextSibling
        }
    });
    Object.defineProperty(pm.prototype, "parentNode", {
        get: function() {
            return qm(this).parentNode
        }
    });
    Object.defineProperty(pm.prototype, "previousSibling", {
        get: function() {
            return qm(this).previousSibling
        }
    });
    pm.prototype.toString = function() {
        return rm(this, !1, 0)
    };
    var rm = function(a, b, c) {
        b = "undefined" !== typeof b ? b : !1;
        c = "undefined" !== typeof c ? c : 0;
        var d = "";
        if (b)
            for (var e = 0; e < c; e++) d += "  ";
        var f = b ? "\n" : "";
        if (3 == a.nodeType) return d + Vd(a.nodeValue) + f;
        var h = "";
        if (null == a.nodeName) a.xmlDecl && (h += d + a.xmlDecl + f), a.docTypeDecl && (h += d + a.docTypeDecl + f);
        else {
            var h = h + (d + "<" + a.nodeName),
                k;
            for (k in a.attributes) h += " " + k + '="' + a.attributes[k] + '"';
            if (0 == qm(a).childNodes.length) return h + " />";
            h += ">" + f
        }
        k = qm(a).childNodes;
        for (e = 0; e < k.length; e++) h += rm(k[e], b, c + 1);
        null != a.nodeName &&
            (h += d + "</" + a.nodeName + ">" + f);
        return h
    };
    pm.prototype.appendChild = function(a) {
        if (!~qm(this).childNodes.indexOf(a)) {
            a.removeNode();
            var b = this.lastChild;
            qm(this).childNodes.push(a);
            b && (qm(b).nextSibling = a, qm(a).previousSibling = b);
            qm(a).parentNode = this
        }
    };
    pm.prototype.insertBefore = function(a, b) {
        var c = qm(this).childNodes;
        if (!~c.indexOf(a)) {
            var d = c.indexOf(b);
            if (~d) {
                a.removeNode();
                qm(a).parentNode = this;
                var e = c[d - 1],
                    f = c[d];
                c.splice(d, 0, a);
                e ? (qm(e).nextSibling = a, qm(a).previousSibling = e) : qm(a).previousSibling = null;
                f ? (qm(f).previousSibling = a, qm(a).nextSibling = f) : qm(a).nextSibling = null
            }
        }
    };
    pm.prototype.removeNode = function() {
        var a = qm(this);
        a.parentNode && Ia(qm(a.parentNode).childNodes, this);
        a.nextSibling && (qm(a.nextSibling).previousSibling = a.previousSibling);
        a.previousSibling && (qm(a.previousSibling).nextSibling = a.nextSibling);
        a.nextSibling = null;
        a.previousSibling = null;
        a.parentNode = null
    };
    pm.prototype.cloneNode = function(a) {
        var b = new pm(this.nodeType, null);
        b.nodeName = this.nodeName;
        b.nodeValue = this.nodeValue;
        for (var c in this.attributes) b.attributes[c] = this.attributes[c];
        if (a) {
            c = qm(this).childNodes;
            for (var d = qm(b).childNodes, e = 0; e < c.length; e++) {
                var f = c[e].cloneNode(a);
                d[e] = f
            }
        }
        return b
    };
    pm.prototype.hasChildNodes = function() {
        return 0 < qm(this).childNodes.length
    };
    var sm = function(a, b, c) {
            for (var d = null, e = qm(b), f; f = c.next();) {
                var h;
                switch (f.type) {
                    case "close":
                        return f.value;
                    case "tag":
                        h = 1;
                        break;
                    case "text":
                    case "cdata":
                        h = 3;
                        break;
                    case "xml_declaration":
                        a.xmlDecl || (a.xmlDecl = "");
                        a.xmlDecl += f.value;
                        continue;
                    case "doctype":
                        a.docTypeDecl = f.value;
                        continue;
                    default:
                        continue
                }
                h = new pm(h, f.value);
                var k = qm(h);
                k.parentNode = b;
                d && (k.previousSibling = d, qm(d).nextSibling = h);
                d = h;
                e.childNodes.push(h);
                if ("tag" == f.type) {
                    if (f.attributes)
                        for (k = 0; k < f.attributes.length; k++) {
                            var n = f.attributes[k];
                            h.attributes[n.name] = n.value
                        }
                    h = sm(a, h, c);
                    if (null === h || h != f.value) return a.status = -9, h
                }
            }
            return null
        },
        tm = function(a) {
            pm.call(this, 1, null);
            vl(this);
            a && this.parseXML(a)
        };
    G(tm, "XML", pm);
    Si(tm);
    tm.prototype.status = 0;
    tm.prototype.createElement = function(a) {
        return new pm(1, a)
    };
    tm.prototype.createTextNode = function(a) {
        return new pm(3, a)
    };
    tm.prototype.addRequestHeader = function(a, b) {
        wl(this, a, b)
    };
    tm.prototype.load = function(a) {
        yl(a, this)
    };
    tm.prototype.send = function(a, b, c) {
        if (0 == arguments.length) return !1;
        zl(a, this.toString(), b, c);
        return !0
    };
    tm.prototype.sendAndLoad = function(a, b, c) {
        yl(a, b, this, c)
    };
    tm.prototype.onData = function(a) {
        var b = l(a);
        b && xl(this.parseXML, this, a);
        this.loaded = b;
        xl(this.onLoad, this, b)
    };
    tm.prototype.onLoad = function() {};
    tm.prototype.parseXML = function(a) {
        for (var b = qm(this).childNodes, c = b.length - 1; 0 <= c; c--) b[c].removeNode();
        for (var d in this.attributes) delete this.attributes[d];
        this.docTypeDecl = this.xmlDecl = void 0;
        a = new ce(a, this.ignoreWhite, !0);
        try {
            this.status = 0, null !== sm(this, this, a) && (this.status = -10)
        } catch (e) {
            this.status = um(e.type)
        }
    };
    var um = function(a) {
        switch (a) {
            case "cdata":
                return -2;
            case "xml_declaration":
                return -3;
            case "doctype":
                return -4;
            case "comment":
                return -5;
            case "tag":
            case "close":
                return -6;
            case "attribute":
                return -8;
            default:
                return -1
        }
    };
    H(tm.prototype, null, 3);
    var xm = function(a) {
        Object.defineProperty(this, "__swiffy_vm", {
            value: a
        });
        this.String = vm(String, function(b) {
            return a.Ua(b)
        }, ["fromCharCode"]);
        H(this, "String", 3);
        this.Number = vm(Number, function(b) {
            return a.ne(b)
        }, ["MAX_VALUE", "MIN_VALUE", "NaN", "NEGATIVE_INFINITY", "POSITIVE_INFINITY"]);
        H(this, "Number", 3);
        this.Boolean = vm(Boolean, function(b) {
            return a.Gm(b)
        });
        H(this, "Boolean", 3);
        this.AsBroadcaster = new Qj(a);
        H(this, "AsBroadcaster", 3);
        this.setInterval = function() {
            return wm(a, window.setInterval, arguments)
        };
        H(this,
            "setInterval", 3);
        this.setTimeout = function() {
            return wm(a, window.setTimeout, arguments)
        };
        H(this, "setTimeout", 3);
        this.updateAfterEvent = function() {
            a.c.ha.Nj()
        };
        H(this, "updateAfterEvent", 3);
        this.escape = function(b) {
            return encodeURIComponent(a.Ua(b)).replace(/[.!*'()]/g, function(a) {
                return "%" + a.charCodeAt(0).toString(16).toUpperCase()
            })
        };
        H(this, "escape", 3);
        this.unescape = function(b) {
            return Dk(a.Ua(b))
        };
        H(this, "unescape", 3);
        Object.prototype.hasOwnProperty("addProperty") || (Function.prototype.toString = function() {
                return "[type Function]"
            },
            Object.prototype.unwatch = function(a) {
                if (1 > arguments.length) return !1;
                var c = this[a];
                delete this[a];
                this[a] = c;
                return !0
            }, Object.prototype.watch = function(a, c, d) {
                if (2 > arguments.length) return !1;
                for (var e = this, f = null, h = this; h; h = Object.getPrototypeOf(h))
                    if (null != Object.getOwnPropertyDescriptor(h, a)) {
                        e = h;
                        f = Object.getOwnPropertyDescriptor(h, a);
                        break
                    }
                if (!f || f.configurable) {
                    var k = e[a];
                    delete e[a];
                    Object.defineProperty(e, a, {
                        get: function() {
                            return k
                        },
                        set: function(e) {
                            return k = c.call(this, a, k, e, d)
                        },
                        configurable: !0
                    })
                }
                return !0
            },
            Object.prototype.addProperty = function(a, c, d) {
                var e = Object.getOwnPropertyDescriptor(this, a);
                if (null == a || "" == a || !q(c) || d && !q(d) || e && !e.configurable) return !1;
                if (!d || e && !e.writable) d = function() {};
                Object.defineProperty(this, a, {
                    get: c,
                    set: d,
                    configurable: !0,
                    enumerable: !(e && !e.enumerable)
                });
                return !0
            }, H(Object.prototype, ["watch", "unwatch", "addProperty"], 3))
    };
    G(xm, "global");
    var vm = function(a, b, c) {
        b.__swiffy_override = function(c) {
            return new a(b(c))
        };
        b.__swiffy_wrapped_type = a;
        if (l(c))
            for (var d = 0; d < c.length; d++) b[c[d]] = a[c[d]];
        H(b, null, 3);
        return b
    };
    xm.prototype.ASSetPropFlags = function(a, b, c, d) {
        ia(a) && H(a, b, c, d)
    };
    xm.prototype.clearInterval = function(a) {
        window.clearInterval(a)
    };
    xm.prototype.clearTimeout = function(a) {
        window.clearTimeout(a)
    };
    xm.prototype.parseFloat = parseFloat;
    xm.prototype.parseInt = function(a, b) {
        !l(b) && Bk(a) && (b = 8);
        return parseInt(a, b)
    };
    xm.prototype.isFinite = function(a) {
        return isFinite(a)
    };
    xm.prototype.isNaN = function(a) {
        return isNaN(a)
    };
    var wm = function(a, b, c) {
        var d = c[0];
        if (q(d) && 2 <= c.length) {
            var e = Array.prototype.slice.call(c, 2);
            c = c[1];
            return b.call(window, function() {
                d.apply(Xj(null), e);
                a.fb()
            }, c)
        }
        if (ia(d) && 3 <= c.length) {
            var f = c[1],
                e = Array.prototype.slice.call(c, 3);
            c = c[2];
            return b.call(window, function() {
                q(d[f]) && (d[f].apply(Xj(d), e), a.fb())
            }, c)
        }
    };
    xm.prototype.Array = Array;
    xm.prototype.AsBroadcaster = Qj;
    xm.prototype.Button = Il;
    xm.prototype.flash = {
        display: {
            BitmapData: sl
        },
        external: {
            ExternalInterface: ak
        },
        filters: {
            BevelFilter: Be,
            BlurFilter: ne,
            ColorMatrixFilter: se,
            ConvolutionFilter: Ee,
            DropShadowFilter: Ie,
            GlowFilter: bk,
            GradientBevelFilter: Me,
            GradientGlowFilter: Pe
        },
        geom: {
            Matrix: ek,
            Point: ik,
            Rectangle: nk
        }
    };
    xm.prototype.Color = Vj;
    xm.prototype.Date = Date;
    xm.prototype.Error = Zj;
    xm.prototype.Function = ul;
    xm.prototype.LoadVars = Jl;
    xm.prototype.Math = Math;
    xm.prototype.MovieClip = D;
    xm.prototype.MovieClipLoader = kk;
    xm.prototype.NetConnection = lk;
    xm.prototype.NetStream = mk;
    xm.prototype.Object = Xj;
    Object.defineProperty(Xj, "__swiffy_override", {
        value: pk
    });
    Object.defineProperty(Xj, "__swiffy_wrapped_type", {
        value: Object
    });
    xm.prototype.Sound = Ll;
    xm.prototype.System = new Ql;
    xm.prototype.TextField = Kl;
    xm.prototype.TextFormat = Rl;
    xm.prototype.XML = tm;
    xm.prototype.XMLNode = pm;
    xm.prototype.Video = Ul;
    Object.defineProperty(xm.prototype, "Key", {
        get: function() {
            return this.__swiffy_vm.getKey()
        },
        set: function() {}
    });
    Object.defineProperty(xm.prototype, "Mouse", {
        get: function() {
            return this.__swiffy_vm.Og
        },
        set: function() {}
    });
    Object.defineProperty(xm.prototype, "Stage", {
        get: function() {
            return this.__swiffy_vm.c.ha.ea
        },
        set: function() {}
    });
    H(xm.prototype, null, 3);
    G(Array, "Array");
    G(Boolean, "Boolean");
    G(Date, "Date");
    G(Math, "Math");
    G(Number, "Number");
    G(String, "String");
    var ym = function(a, b) {
        this.object = a;
        this.method = b
    };
    ym.prototype.$q = function() {
        for (var a = this.object; a = Object.getPrototypeOf(a);)
            for (var b = Object.getOwnPropertyNames(a), c = 0; c < b.length; c++)
                if (a[b[c]] === this.method) return Object.getPrototypeOf(a);
        return null
    };
    var zm = function(a, b) {
        this.ta = a;
        this.data = {};
        this.Pb = b
    };
    g = zm.prototype;
    g.get = function(a) {
        var b = this.ta.na(this.data, a);
        return b in this.data ? this.data[b] : this.Pb.get(a)
    };
    g.call = function(a, b) {
        var c = this.ta.na(this.data, a);
        if (c in this.data)
            if (c = this.data[c], c instanceof ym) {
                var d = Object.getPrototypeOf(c.method.prototype).constructor;
                if (q(d)) return d.apply(c.object, b)
            } else {
                if (q(c)) return c.apply(this.oc(), b)
            } else return this.Pb.call(a, b)
    };
    g.set = function(a, b) {
        var c = this.ta.na(this.data, a);
        return c in this.data ? (this.data[c] = b, !0) : this.Pb.set(a, b)
    };
    g.pe = function(a, b) {
        this.data[this.ta.md(this.data, a)] = b
    };
    g.Fi = function(a) {
        a = this.ta.md(this.data, a);
        a in this.data || (this.data[a] = void 0)
    };
    g.Ne = function(a) {
        return this.ta.na(this.data, a) in this.data ? !1 : this.Pb.Ne(a)
    };
    g.oe = function(a) {
        this.Pb.oe(a)
    };
    g.oc = function() {
        return this.Pb.oc()
    };
    g.Uf = function() {
        return this.Pb.Uf()
    };
    var Am = function(a, b, c) {
        this.ta = a;
        this.data = c;
        this.Pb = b
    };
    g = Am.prototype;
    g.get = function(a) {
        var b = this.ta.na(this.data, a);
        return b in this.data ? this.data[b] : this.Pb.get(a)
    };
    g.call = function(a, b) {
        var c = this.ta.na(this.data, a);
        if (c in this.data) {
            if (c = this.data[c], q(c)) return c.apply(this.data, b)
        } else return this.Pb.call(a, b)
    };
    g.set = function(a, b) {
        var c = this.ta.na(this.data, a);
        return c in this.data ? (this.data[c] = b, !0) : this.Pb.set(a, b)
    };
    g.pe = function(a, b) {
        var c = this.ta.na(this.data, a);
        c in this.data ? this.data[c] = b : this.Pb.pe(a, b)
    };
    g.Fi = function(a) {
        this.ta.na(this.data, a) in this.data || this.Pb.Fi(a)
    };
    g.Ne = function(a) {
        var b = this.ta.na(this.data, a);
        return b in this.data ? this.ta.Yc(this.data, b) : this.Pb.Ne(a)
    };
    g.oe = function(a) {
        this.Pb.oe(a)
    };
    g.oc = function() {
        return this.Pb.oc()
    };
    g.Uf = function() {
        return this.Pb.Uf()
    };
    var Bm = function(a, b, c) {
        this.ta = a;
        this.bo = this.data = c;
        this.zn = b;
        this.Jn = c
    };
    g = Bm.prototype;
    g.get = function(a) {
        var b = this.ta.na(this.data, a);
        return b in this.data ? this.data[b] : "this" == a.toLowerCase() ? this.Jn : this.zn.get(a)
    };
    g.call = function(a, b) {
        var c = this.ta.na(this.data, a),
            d = this.data[c];
        if (c in this.data) {
            if (q(d)) return d.apply(this.data, b)
        } else return this.zn.call(a, b)
    };
    g.set = function(a, b) {
        var c = this.ta.md(this.data, a);
        this.data[c] = b;
        return !0
    };
    g.pe = function(a, b) {
        var c = this.ta.md(this.data, a);
        this.data[c] = b
    };
    g.Fi = function(a) {
        a = this.ta.md(this.data, a);
        a in this.data || (this.data[a] = void 0)
    };
    g.Ne = function(a) {
        var b = this.ta.na(this.data, a);
        return b in this.data ? this.ta.Yc(this.data, b) : this.zn.Ne(a)
    };
    g.oe = function(a) {
        a ? this.data = this.bo = a : (this.bo = null, this.data = this.Jn)
    };
    g.oc = function() {
        return this.bo
    };
    g.Uf = function() {
        return this.Jn
    };
    var Cm = function(a) {
        this.ta = a;
        this.data = new xm(a);
        this.data._global = this.data;
        H(this.data, "_global", 3)
    };
    g = Cm.prototype;
    g.get = function(a) {
        return this.data[this.ta.na(this.data, a)]
    };
    g.call = function(a, b) {
        var c = this.data[this.ta.na(this.data, a)];
        if (q(c)) return c.apply(this.data, b)
    };
    g.set = function() {
        return !1
    };
    g.pe = function() {};
    g.Fi = function() {};
    g.Ne = function(a) {
        a = this.ta.na(this.data, a);
        return this.ta.Yc(this.data, a)
    };
    g.oe = function() {
        throw new TypeError("setTarget should not be called on the GlobalContext");
    };
    g.oc = function() {
        throw new TypeError("getTarget should not be called on the GlobalContext");
    };
    g.Uf = function() {
        throw new TypeError("getTargetBase should not be called on the GlobalContext");
    };
    var mi = function(a) {
        this.yu(a.xe);
        this.mb = [];
        this.Ac = 0;
        this.dc = this.ld = 4;
        this.Fp = [];
        this.c = a;
        this.wu = this.Ep();
        this.Ng = [];
        this.Ee = [];
        this.Dm = !1;
        this.sm = this.$ = null;
        this.Em = Vi;
        this.Wj = new Cm(this, a);
        this.ye = new ff;
        this.Og = new jk;
        this.pi(this.Og);
        this.Vg = new ck;
        this.pi(this.Vg);
        this.tm();
        this.xu()
    };
    g = mi.prototype;
    g.Tp = !1;
    g.yu = function(a) {
        this.md = Zl;
        this.Sc = nm;
        this.na = am;
        this.Mp = cm;
        this.Zq = lm;
        this.Gm = km;
        this.ne = fm;
        this.Ua = gm;
        5 <= a && (this.Zq = mm, this.ne = em, this.Ua = hm, 6 <= a && (this.Sc = om, this.Mp = bm, 7 <= a && (this.md = Wl, this.na = $l, this.Gm = jm, this.ne = dm, this.Ua = im)))
    };
    g.xu = function() {
        var a = this,
            b = this.c.Fd;
        b.SetVariable = function(b, d) {
            var e = a.ki(String(b), a.c.ub.ea);
            if (e.path) {
                var f = a.md(e.path, e.Hg);
                e.path[f] = String(d)
            }
        };
        b.GetVariable = function(b) {
            b = a.ki(String(b), a.c.ub.ea);
            if (b.path) {
                var d = a.na(b.path, b.Hg);
                return d in b.path ? String(b.path[d]) : null
            }
            return null
        }
    };
    g.getKey = function() {
        return this.Vg
    };
    g.nr = function(a) {
        this.Ee.push(function() {
            this.Bn(a)
        })
    };
    g.uf = function(a) {
        this.Ee.push(a)
    };
    g.fb = function() {
        if (!this.Dm) {
            for (this.Dm = !0; this.Ng.length || this.Ee.length;) this.Ng.length ? this.Ng.shift().call(this) : this.Ee.shift().call(this);
            this.Dm = !1
        }
    };
    g.Rr = function(a, b) {
        try {
            a()
        } catch (c) {
            throw b(c), c;
        }
    };
    g.Ep = function() {
        return Date.now()
    };
    g.pi = function(a) {
        this.Wj.get("AsBroadcaster").initialize(a)
    };
    g.reset = function(a) {
        this.mb = [];
        this.Ac = 0;
        this.dc = this.ld = 4;
        this.$ = new Bm(this, this.Wj, a.ea)
    };
    g.Bn = function(a) {
        a.m.be() || (this.reset(a.m), a.Xv())
    };
    var Dm = function(a) {
            a = a.replace(/\.\.|\/:?|:/g, function(a) {
                return ".." == a ? "_parent" : "."
            });
            "." == a[0] && (a = "_root" + a);
            "." == a[a.length - 1] && (a = a.substring(0, a.length - 1));
            return a
        },
        Em = function(a) {
            for (var b = [], c = 0, d = a.length, e = 0; e < d; e++) switch (a[e]) {
                case ".":
                    var f = e + 1;
                    if (f != d && "." == a[f]) {
                        e > c && b.push(a.substring(c, e));
                        b.push("_parent");
                        c = e + 2;
                        e++;
                        break
                    }
                case ":":
                    e > c && b.push(a.substring(c, e));
                    c = e + 1;
                    break;
                case "/":
                    0 == e ? b.push("_root") : e > c && b.push(a.substring(c, e)), c = e + 1
            }
            e > c ? b.push(0 == c && e == d ? a : a.substring(c, e)) :
                0 == b.length && b.push("");
            return b
        };
    mi.prototype.ki = function(a, b) {
        l(b) || (b = this.oc());
        var c = 0 < a.indexOf(":") ? a.split(":") : a.split(".");
        if (1 < c.length) {
            var d = c[c.length - 1];
            return {
                path: this.Yh(c.slice(0, c.length - 1).join("."), b),
                Hg: d
            }
        }
        return {
            path: b,
            Hg: a
        }
    };
    mi.prototype.Sl = function(a) {
        return this.Wj.get(a)
    };
    var Xl = {
            "boolean": {},
            number: {},
            string: {},
            object: void 0,
            "function": void 0,
            undefined: {}
        },
        Fm = function(a) {
            var b = Object.getOwnPropertyNames(a.constructor.prototype);
            a = Xl[typeof a];
            for (var c = 0; c < b.length; ++c) {
                var d = b[c],
                    e = d.toLowerCase();
                d != e && (a[e] = d)
            }
        };
    Fm(!1);
    Fm(0);
    Fm("");
    var Yl = function(a) {
        if (!a) return {
            constructor: "constructor"
        };
        var b = a.__swiffy_nm;
        if (!b || b.__swiffy_nm != a) {
            for (var b = Object.create(Yl(Object.getPrototypeOf(a))), c = Object.getOwnPropertyNames(a), d = 0; d < c.length; ++d) {
                var e = c[d],
                    f = e.toLowerCase();
                e != f && (b[f] = e)
            }
            Object.defineProperty(b, "__swiffy_nm", {
                value: a,
                writable: !0
            });
            Object.defineProperty(a, "__swiffy_nm", {
                value: b,
                writable: !0
            })
        }
        return b
    };
    g = mi.prototype;
    g.Sp = function(a) {
        if (ia(a)) {
            var b = a[this.na(a, "x")];
            a = a[this.na(a, "y")];
            if (ha(b) && ha(a)) return new Uc(b, a)
        }
        return null
    };
    g.oc = function() {
        return this.$.oc()
    };
    g.$e = function() {
        var a = this.$.oc();
        return a ? a.__swiffy_d : null
    };
    g.push = function(a) {
        this.mb[this.dc++] = a
    };
    g.pop = function() {
        if (this.dc > this.ld) {
            var a = this.mb[--this.dc];
            this.mb[this.dc] = void 0;
            return a
        }
    };
    g.ua = function() {
        return this.ne(this.pop())
    };
    g.Wa = function() {
        return this.Ua(this.pop())
    };
    g.Re = function() {
        return this.Gm(this.pop())
    };
    g.Ir = function() {
        return this.eh(this.pop())
    };
    g.Nk = function() {
        for (var a = Number(this.pop()), a = Math.min(a, this.dc - this.ld), b = [], c = 0; c < a; ++c) b[c] = this.pop();
        return b
    };
    g.eh = function(a) {
        return a instanceof J ? a : this.Hq(String(a))
    };
    g.Yh = function(a, b) {
        if (!b || !a) return b;
        for (var c = Em(a), d = b, e = 0; e < c.length && d; e++) d = d[this.na(d, c[e])];
        return d
    };
    g.Hq = function(a) {
        return this.Yh(a, this.oc())
    };
    g.Ge = function() {
        this.Og.Ge()
    };
    g.qh = function() {
        this.jh(new Vc(4));
        this.fb();
        this.Og.qh()
    };
    g.nh = function() {
        this.Og.nh()
    };
    g.tr = function() {
        return this.Og.__swiffy_mv
    };
    g.Sm = function() {
        this.c.ha.ea.broadcastMessage("onResize")
    };
    g.cl = function(a) {
        this.Vg.cl(a)
    };
    g.Mr = function() {
        this.Vg.broadcastMessage("onKeyUp")
    };
    g.bl = function(a) {
        this.Vg.bl(a)
    };
    g.Jr = function() {
        this.Vg.broadcastMessage("onKeyDown")
    };
    g.bq = function() {};
    g.cq = function() {};
    g.cm = function() {};
    g.gq = function(a, b, c) {
        b = this.na(a, b);
        var d = !(b in a);
        if (!d) {
            var e = a.__swiffy_child_ref[b];
            e && (d = a[b], d = d === e && d.__swiffy_d.depth > c.__swiffy_d.depth)
        }
        d && (b = this.md(a, b), a[b] = c, a.__swiffy_child_ref[b] = c)
    };
    g.hq = function(a, b, c) {
        b = this.na(a, b);
        c === a[b] && (delete a[b], delete a.__swiffy_child_ref[b])
    };
    g.Lm = function(a, b, c) {
        this.Ng.push(function() {
            this.Zx(a, b, c)
        })
    };
    g.Zx = function(a, b, c) {
        this.yo(a, b, function(a, e, f, h) {
            var k = c;
            l(h.Ci[f]) || (h.Ci[f] = []);
            h.Ci[f].push(b);
            f in e && (b.kd(String(e[f])), k = e[f]);
            Object.defineProperty(e, f, a.ox(k, h.Ci[f]))
        })
    };
    g.Km = function(a, b) {
        this.Ng.push(function() {
            this.$x(a, b)
        })
    };
    g.$x = function(a, b) {
        this.yo(a, b, function(a, d, e, f) {
            (a = f.Ci[e]) && Ia(a, b)
        })
    };
    g.Hu = function(a, b, c) {
        this.yo(a, b, function(a, b, f) {
            b[f] = c
        })
    };
    g.yo = function(a, b, c) {
        if (b = this.Vn(b, z)) a = Dm(a), b = this.ki(a, b.ea), (a = b.path) && a.__swiffy_d && (b = this.md(a, b.Hg), c(this, a, b, a.__swiffy_d))
    };
    g.Vn = function(a, b) {
        for (var c = a; c && !(c instanceof b);) c = c.getParent();
        return c
    };
    g.qr = function(a, b) {
        var c = -16384 + b,
            d = "_level" + b;
        d in D.prototype || Object.defineProperty(D.prototype, d, {
            get: function() {
                var a = this.__swiffy_d;
                if (a && (a = a.c.ha.hd(c))) return a.ea
            },
            set: function(a) {
                Object.defineProperty(this, d, {
                    value: a,
                    configurable: !0,
                    writable: !0,
                    enumerable: !0
                })
            }
        })
    };
    g.fireEvent = function(a, b, c, d) {
        var e = Dl[c.type];
        c = !1;
        if (b)
            for (var f = 0; f < b.actions.length; ++f) {
                var h = b.actions[f];
                if (!h.Xp || h.Xp(this)) h.Qm && (d ? this.Bn(h.Qm) : this.nr(h.Qm)), h.stopPropagation && (c = !0)
            }
        if (e) {
            var k = this;
            b = function() {
                var b = k.na(a, e);
                if (q(a[b])) a[b]()
            };
            d ? b() : this.uf(b)
        }
        return c
    };
    g.tm = function() {
        var a = this;
        jf.prototype.Pa = function() {
            return Object.create(J.prototype)
        };
        yh.prototype.Pa = function() {
            var b = Object.create(Kl.prototype);
            a.pi(b);
            b.addListener(b);
            return b
        };
        tj.prototype.Pa = function() {
            var b = Object.create(Ol.prototype);
            a.pi(b);
            return b
        };
        bj.prototype.Pa = function() {
            return Object.create(Hl.prototype)
        };
        z.prototype.Pa = function() {
            var a = void 0,
                c = this.definition.ek;
            c && (a = qk[c]);
            return Object.create((a ? a : D).prototype)
        };
        pi.prototype.Pa = function() {
            return Object.create(Il.prototype)
        };
        si.prototype.Pa = function() {
            return {}
        };
        Eg.prototype.Pa = function() {
            return Object.create(Ul.prototype)
        }
    };
    g.Lq = function(a, b) {
        var c = a.ea;
        b ? (this.Ng.push(function() {
            a.fireEvent(new Vc(19), !0);
            c.constructor()
        }), a.fireEvent(new Vc(7)), a.ti()) : (a.ti(), a.fireEvent(new Vc(19), !0), c.constructor(), a.fireEvent(new Vc(7)))
    };
    g.qq = function() {};
    g.ox = function(a, b) {
        var c = a,
            d = this;
        return {
            get: function() {
                return c
            },
            set: function(a) {
                c = a;
                a = d.Ua(a);
                for (var f = 0; f < b.length; f++) b[f].kd(a)
            },
            configurable: !0
        }
    };
    g.Yc = function(a, b) {
        if (null != a) {
            var c = b in a,
                d = delete a[b];
            delete a[b];
            this.uz(a, b);
            return c && d
        }
        return !1
    };
    g.uz = function(a, b) {
        if (a instanceof D) {
            var c = a.__swiffy_d;
            c && (c = c.oa.rs(b)) && Ue(a, c, b)
        }
    };
    g.ys = function(a, b) {
        this.c.ub.ea[a] = b
    };
    g.yg = function() {
        return this.ye
    };
    g.zl = function(a) {
        a = this.Bj(a, 4);
        a = "return " + Gm(Hm, a);
        return Function("vm", a)(this)
    };
    g.$g = function(a, b, c, d, e) {
        var f = this.Em,
            h = Xe;
        Xe = this;
        this.Em = Wi;
        try {
            return a(b, c, d, e)
        } catch (k) {
            f.call(this, k)
        } finally {
            Xe = h, this.Em = f
        }
    };
    g.Bj = function(a, b) {
        return a ? "function(){" + this.At(a, b) + "}" : "null"
    };
    g.At = function(a, b) {
        for (var c = 0, d = "for(var j=0;;){" + Gm(Im) + "switch(j){", e = this.Oy(a), f = {
            labels: e,
            registerCount: b
        }, d = d + "case 0:", h = 0; h < a.length; h++) {
            var k = e[h];
            k && (d += "case " + k + ":");
            c++;
            var k = a[h],
                n = K[k.type];
            n && (d = n.compile ? d + n.compile.call(n, k, this, f) : d + Gm(n))
        }
        return d + "default:return;}}"
    };
    g.Oy = function(a) {
        for (var b = [-1], c = 0; c < a.length;) {
            var d = a[c++];
            switch (d.type) {
                case 157:
                case 153:
                    b[d.target] = -1
            }
        }
        for (d = c = 0; c < a.length; ++c) b[c] && (b[c] = d++);
        return b
    };
    var Jm = function(a, b) {
            for (var c = "vm." + a.action + "(", d = 1; d < arguments.length; ++d) 1 < d && (c += ","), c += arguments[d];
            return c + ")"
        },
        Gm = function(a, b) {
            return Jm.apply(null, arguments) + ";"
        },
        Km = function(a) {
            return l(a) && 0 <= a ? "j=" + a + ";continue;" : "return;"
        };
    g = mi.prototype;
    g.kk = function(a) {
        return !(a instanceof z && a.isEnabled())
    };
    g.jr = function(a, b) {
        a && a.dt(b);
        b && b.et(a)
    };
    g.jh = function(a) {
        for (var b = this.c.Ag, c = b.length - 1; 0 <= c; c--) b[c].be() || b[c].fireEvent(a)
    };
    g.Pp = function(a, b) {
        b.Sa() && b.jc(a.fi())
    };
    g.rt = function(a, b) {
        a = String(a);
        b = String(b);
        return a < b ? -1 : a > b ? 1 : 0
    };
    g.qt = function(a, b) {
        a = String(a).toUpperCase();
        b = String(b).toUpperCase();
        return a < b ? -1 : a > b ? 1 : 0
    };
    g.st = function(a, b) {
        ha(a) && ha(b) || (a = String(a), b = String(b));
        return a < b ? -1 : a > b ? 1 : 0
    };
    var Lm = "_x _y _xscale _yscale _currentframe _totalframes _alpha _visible _width _height _rotation _target _framesloaded _name _droptarget _url _highquality _focusrect _soundbuftime _quality _xmouse _ymouse".split(" "),
        Vl = function() {
            var a = {};
            Lm.forEach(function(b) {
                a[b] = !0
            });
            return a
        }(),
        K = {
            4: function() {
                this.xj()
            }
        };
    mi.prototype.xj = function() {
        var a = this.$e();
        a instanceof z && a.xj()
    };
    K[5] = function() {
        this.qz()
    };
    mi.prototype.qz = function() {
        var a = this.$e();
        a instanceof z && a.Ko()
    };
    K[6] = function() {
        this.play()
    };
    mi.prototype.play = function() {
        var a = this.$e();
        a instanceof z && a.play()
    };
    K[7] = function() {
        this.stop()
    };
    mi.prototype.stop = function() {
        var a = this.$e();
        a instanceof z && a.stop()
    };
    K[9] = function() {
        this.Oz()
    };
    mi.prototype.Oz = function() {
        var a = this.$e();
        a instanceof z && a.yf().Vq()
    };
    K[10] = function() {
        var a = this.ua(),
            b = this.ua();
        this.push(b + a)
    };
    K[11] = function() {
        var a = this.ua(),
            b = this.ua();
        this.push(b - a)
    };
    K[12] = function() {
        var a = this.ua(),
            b = this.ua();
        this.push(b * a)
    };
    K[13] = function() {
        var a = this.ua(),
            b = this.ua();
        this.push(b / a)
    };
    K[14] = function() {
        var a = this.ua(),
            b = this.ua();
        this.push(this.Zq(b, a))
    };
    K[15] = function() {
        var a = this.ua(),
            b = this.ua();
        this.push(b < a)
    };
    K[16] = function() {
        var a = this.Re(),
            b = this.Re();
        this.push(b && a)
    };
    K[17] = function() {
        var a = this.Re(),
            b = this.Re();
        this.push(b || a)
    };
    K[18] = function() {
        var a = this.Re();
        this.push(!a)
    };
    K[19] = function() {
        var a = this.Wa(),
            b = this.Wa();
        this.push(b == a)
    };
    K[20] = function() {
        var a = this.Wa();
        this.push(a.length)
    };
    K[21] = function() {
        var a = this.pop(),
            b = this.pop(),
            c = this.Wa();
        this.push(this.lx(c, b, a))
    };
    mi.prototype.lx = function(a, b, c) {
        a = this.Ua(a);
        c = Number(c);
        b = Math.max(0, Number(b) - 1);
        return a.substr(b, c)
    };
    var Mm = function() {
        return this.pop()
    };
    K[23] = Mm;
    K[24] = function() {
        var a = this.ua(),
            a = 0 > a ? Math.ceil(a) : Math.floor(a);
        this.push(a)
    };
    K[28] = function() {
        var a = this.Wa();
        this.push(this.Ke(a))
    };
    mi.prototype.Ke = function(a) {
        a = Em(a);
        var b = this.$.get(a[0]);
        if (1 < a.length) {
            var c;
            for (c = 1; l(b) && c < a.length - 1; ++c) b = b[this.na(b, a[c])];
            if (l(b)) b = b[this.na(b, a[c])];
            else return
        }
        return b
    };
    K[29] = function() {
        var a = this.pop(),
            b = this.Wa();
        this.rk(b, a)
    };
    mi.prototype.rk = function(a, b) {
        var c = Em(a);
        if (1 == c.length) this.$.set(c[0], b);
        else {
            var d = this.$.get(c[0]),
                e;
            for (e = 1; l(d) && e < c.length - 1; ++e) d = d[this.na(d, c[e])];
            l(d) && (c = this.md(d, c[e]), d[c] = b)
        }
    };
    K[33] = function() {
        var a = this.Wa(),
            b = this.Wa();
        this.push(b + a)
    };
    K[34] = function() {
        var a = this.ua(),
            b = this.pop();
        this.push(this.te(b, a))
    };
    mi.prototype.te = function(a, b) {
        var c = this.eh(a),
            d = Lm[b];
        if (c) return c[d]
    };
    K[35] = function() {
        var a = this.pop(),
            b = this.ua(),
            c = this.pop();
        this.setProperty(c, b, a)
    };
    mi.prototype.setProperty = function(a, b, c) {
        b = Lm[b];
        (a = this.eh(a)) && b && (a[b] = c)
    };
    K[36] = function() {
        var a = this.ua(),
            b = this.Wa(),
            c = this.Ir(),
            d = this.$e();
        c && d && c.__swiffy_d && c.__swiffy_d.duplicate(d, b, a + -16384)
    };
    K[37] = function() {
        var a = this.Ir();
        a instanceof D && a.removeMovieClip()
    };
    K[38] = function() {
        this.trace(this.pop())
    };
    mi.prototype.trace = function(a) {
        window.console && (a = l(a) ? this.Ua(a) : "undefined", Ti(a))
    };
    K[51] = function() {
        var a = this.ua();
        this.push(String.fromCharCode(a))
    };
    K[50] = function() {
        var a = this.Wa();
        this.push(a.charCodeAt(0))
    };
    K[52] = function() {
        this.push(this.getTime())
    };
    mi.prototype.getTime = function() {
        return this.Ep() - this.wu
    };
    K[48] = function() {
        var a = this.ua();
        this.push(this.random(a))
    };
    mi.prototype.random = function(a) {
        var b;
        do b = Math.floor(Math.random() * a); while (b == a && 0 < a);
        return b
    };
    K[60] = function() {
        var a = this.pop(),
            b = this.Wa();
        b && this.$.pe(b, a)
    };
    K[65] = function() {
        var a = this.Wa();
        a && this.$.Fi(a)
    };
    K[59] = function() {
        var a = this.Ly(this.pop());
        this.push(a)
    };
    mi.prototype.Ly = function(a) {
        a = this.Ua(a);
        a = Em(a);
        if (1 == a.length) return this.$.Ne(a[0]);
        var b = this.$.get(a[0]),
            c;
        for (c = 1; l(b) && c < a.length - 1; ++c) b = b[this.na(b, a[c])];
        return this.Yc(b, this.na(b, a[c]))
    };
    K[62] = function() {};
    K[62].vb = 2;
    K[62].compile = function() {
        return "return " + Gm(Mm)
    };
    K[63] = function() {
        var a = this.ua(),
            b = this.ua();
        this.push(b % a)
    };
    K[71] = function() {
        var a = this.pop(),
            b = this.pop();
        this.push(this.add(b, a))
    };
    mi.prototype.add = function(a, b) {
        return m(a) || m(b) ? this.Ua(a) + this.Ua(b) : this.ne(a) + this.ne(b)
    };
    K[72] = function() {
        var a = this.pop(),
            b = this.pop();
        this.push(this.Rt(b, a))
    };
    mi.prototype.Rt = function(a, b) {
        var c = typeof a,
            d = typeof b;
        if ("number" !== c || "number" !== d) {
            if ("object" === c && null !== a && (a = a.valueOf(), c = typeof a, "object" === c) || "object" === d && null !== b && (b = b.valueOf(), d = typeof b, "object" === d)) return !1;
            if ("string" === c && "string" === d) return a < b;
            a = this.ne(a);
            b = this.ne(b)
        }
        return a !== a || b !== b ? void 0 : a < b
    };
    K[103] = function() {
        var a = this.pop(),
            b = this.pop();
        this.push(this.Rt(a, b))
    };
    K[73] = function() {
        var a = this.pop(),
            b = this.pop();
        this.push(this.Sc(b, a))
    };
    mi.prototype.Lt = function(a, b, c, d) {
        "object" === b && null !== a && (a = a.valueOf(), b = typeof a);
        "object" === d && null !== c && (c = c.valueOf(), d = typeof c);
        if ("object" === b || "object" === d) return void 0 === a || null === a ? void 0 === c || null === c : a === c;
        if (a != c) return !1;
        if ("string" === b) {
            if (("boolean" === d || "number" === d) && "" == a.trim()) return !1
        } else if ("string" === d && ("boolean" === b || "number" === b) && "" == c.trim()) return !1;
        return !0
    };
    K[102] = function() {
        var a = this.pop(),
            b = this.pop();
        this.push(b === a)
    };
    K[41] = function() {
        var a = this.Wa(),
            b = this.Wa();
        this.push(b < a)
    };
    K[42] = function() {
        throw new Ui(this.pop());
    };
    K[42].vb = 2;
    K[104] = function() {
        var a = this.Wa(),
            b = this.Wa();
        this.push(b > a)
    };
    K[105] = function() {
        var a = this.pop(),
            b = this.pop();
        q(a) && q(b) && Pj(b, a)
    };
    K[74] = function() {
        var a = this.ua();
        this.push(a)
    };
    K[75] = function() {
        var a = this.Wa();
        this.push(a)
    };
    K[76] = function() {
        var a = this.pop();
        this.push(a);
        this.push(a)
    };
    K[77] = function() {
        var a = this.pop(),
            b = this.pop();
        this.push(a);
        this.push(b)
    };
    K[78] = function() {
        var a = this.pop(),
            b = this.pop();
        this.push(this.Vy(b, a))
    };
    mi.prototype.Vy = function(a, b) {
        if (null != a)
            if (a instanceof ym && (a = a.$q()), "number" === typeof b) {
                if ("string" !== typeof a) return a[b]
            } else return a[this.na(a, this.Ua(b))]
    };
    K[79] = function() {
        var a = this.pop(),
            b = this.pop(),
            c = this.pop();
        this.Dz(c, b, a)
    };
    mi.prototype.Dz = function(a, b, c) {
        if (null != a)
            if ("number" === typeof b) a[b] = c;
            else {
                var d = this.md(a, this.Ua(b));
                a instanceof Array && "length" == d && (c = ha(c) ? c : 0);
                a[d] = c;
                q(a) && "prototype" == b && (a.fa = c.constructor.prototype, c.constructor = a)
            }
    };
    K[80] = function() {
        var a = this.ua();
        this.push(++a)
    };
    K[81] = function() {
        var a = this.ua();
        this.push(--a)
    };
    K[96] = function() {
        var a = this.ua(),
            b = this.ua();
        this.push(a & b)
    };
    K[97] = function() {
        var a = this.ua(),
            b = this.ua();
        this.push(a | b)
    };
    K[98] = function() {
        var a = this.ua(),
            b = this.ua();
        this.push(b ^ a)
    };
    K[99] = function() {
        var a = this.ua(),
            b = this.ua();
        this.push(b << a)
    };
    K[100] = function() {
        var a = this.ua(),
            b = this.ua();
        this.push(b >> a)
    };
    K[101] = function() {
        var a = this.ua(),
            b = this.ua();
        this.push(b >>> a)
    };
    K[58] = function() {
        var a = this.Wa(),
            b = this.pop(),
            a = this.Yc(b, this.na(b, a));
        this.push(a)
    };
    K[129] = function(a) {
        this.az(a)
    };
    K[129].compile = function(a) {
        return Gm(this, a.frame)
    };
    mi.prototype.az = function(a) {
        var b = this.$e();
        b instanceof z && b.Af(a, !1)
    };
    K[140] = function(a) {
        this.bz(a)
    };
    K[140].compile = function(a) {
        return Gm(this, Aa(a.label))
    };
    mi.prototype.bz = function(a) {
        var b = this.$e();
        b instanceof z && (a = b.Tg(a), void 0 != a && b.Af(a, !1))
    };
    K[136] = function() {};
    K[136].compile = function(a, b) {
        b.Fp = a.constants;
        return Gm(this)
    };
    K[32] = function() {
        this.oe(this.pop())
    };
    mi.prototype.oe = function(a) {
        a instanceof J || (a = String(a), a = this.Yh(a, this.$.Uf()), a instanceof J || (a = void 0));
        this.$.oe(a)
    };
    K[69] = function() {
        var a = this.pop(),
            b = void 0;
        a instanceof J && (b = a.__swiffy_d.Tl());
        this.push(b)
    };
    K[305] = function(a) {
        this.push(a)
    };
    K[305].compile = function(a) {
        a = a.value;
        m(a) && (a = Aa(a));
        return Gm(this, a)
    };
    K[306] = function() {
        this.push(void 0)
    };
    K[307] = function() {
        this.push(Number.POSITIVE_INFINITY)
    };
    K[308] = function() {
        this.push(Number.NEGATIVE_INFINITY)
    };
    K[309] = function() {
        this.push(Number.NaN)
    };
    K[304] = function(a) {
        this.push(a)
    };
    K[304].compile = function(a, b) {
        var c = b.Fp[a.index];
        l(c) && (c = Aa(c));
        return Gm(this, c)
    };
    K[303] = function(a) {
        this.push(this.mb[a + this.Ac])
    };
    K[303].compile = function(a, b, c) {
        a = a.index;
        return a < c.registerCount ? Gm(this, a) : Gm(K[306])
    };
    K[135] = function(a) {
        this.mb[a + this.Ac] = this.mb[this.dc - 1]
    };
    K[135].compile = function(a, b, c) {
        a = a.index;
        return a < c.registerCount ? Gm(this, a) : ""
    };
    K[154] = function(a, b, c) {
        var d = this.Wa(),
            e = this.Wa();
        a = new ij(this, this.oc(), e, d, a, b, c);
        this.c.si(a)
    };
    K[154].compile = function(a) {
        return Gm(this, a.method, a.target, a.variables)
    };
    K[148] = function(a) {
        var b = this.pop();
        if (b instanceof Object) {
            var c = this.$;
            this.$ = new Am(this, c, b);
            try {
                this.$g(a)
            } finally {
                this.$ = c
            }
        }
    };
    K[148].compile = function(a, b, c) {
        return Gm(this, b.Bj(a.body, c.registerCount))
    };
    K[155] = function(a) {
        this.push(this.Jt(4, a))
    };
    K[155].compile = function(a, b) {
        var c = b.Bt(a.args, [], 0, a.body, 4);
        return Gm(this, c)
    };
    K[142] = function(a, b) {
        this.push(this.Jt(a, b))
    };
    K[142].compile = function(a, b) {
        var c = b.Bt(a.args, a.preloads, a.suppress, a.body, a.registerCount);
        return Gm(this, a.registerCount, c)
    };
    mi.prototype.Bt = function(a, b, c, d, e) {
        var f = "function(self,fn,caller,args){";
        c & 4 || (f += Gm(Nm, '"this"', "self"));
        c & 1 || (f += Gm(Om, "self", "fn"));
        c & 2 || (f += "args=Array.prototype.slice.call(args);args.callee=fn;", f += "args.caller=caller;", f += Gm(Nm, '"arguments"', "args"));
        for (c = 0; c < b.length && c + 1 < e; ++c) var h = Jm(Pm, Aa(b[c])),
            f = f + Gm(Qm, c + 1, h);
        for (c = 0; c < a.length; ++c) b = a[c], h = "args[" + c + "]", f = m(b) ? f + Gm(Nm, Aa(b), h) : f + Gm(Qm, b, h);
        return f + this.At(d, e) + "}"
    };
    mi.prototype.Jt = function(a, b) {
        var c = this,
            d = this.$,
            e = function() {
                var f = c.$,
                    h = c.$.oc(),
                    k = c.sm;
                c.sm = e;
                c.$ = new zm(c, 5 < c.c.xe ? d : new Bm(c, c.Wj, this), e);
                var n = c.Ac,
                    r = c.ld;
                c.Ac = c.dc;
                c.dc += a;
                c.ld = c.dc;
                try {
                    return c.$g(b, this, e, k, arguments)
                } finally {
                    for (var t = c.Ac; t < c.dc; ++t) c.mb[t] = void 0;
                    c.dc = c.Ac;
                    c.Ac = n;
                    c.ld = r;
                    c.sm = k;
                    c.$ = f;
                    c.$.oe(h)
                }
            };
        Pj(e, Xj);
        return e
    };
    K[143] = function(a, b, c, d, e) {
        try {
            this.$g(a)
        } catch (f) {
            if (f instanceof Ui) {
                var h = f.value;
                if (null != b) {
                    var k;
                    l(e) ? (k = this.$.get(e), this.$.pe(e, h)) : (d += this.Ac, d >= this.Ac && d < this.ld && (this.mb[d] = h));
                    try {
                        this.$g(b)
                    } finally {
                        l(e) && (l(k) ? this.$.pe(e, k) : this.$.Ne(e))
                    }
                } else throw f;
            } else throw c = null, f;
        } finally {
            null != c && this.$g(c)
        }
    };
    K[143].compile = function(a, b, c) {
        var d = a.variable;
        l(d) && (d = Aa(d));
        return Gm(this, b.Bj(a.tryBlock, c.registerCount), b.Bj(a.catchBlock, c.registerCount), b.Bj(a.finallyBlock, c.registerCount), a.register, d)
    };
    K[61] = function() {
        var a = this.Wa(),
            b = this.Nk();
        this.push(this.bx(a, b))
    };
    K[61].vb = 1;
    mi.prototype.bx = function(a, b) {
        var c = Em(a);
        if (1 >= c.length) return this.$.call(c[0], b);
        for (var d = this.$.get(c[0]), e = 1; e < c.length; ++e) {
            if (null == d) return;
            var f = d,
                d = f[this.na(f, c[e])]
        }
        if (q(d)) return d.apply(f, b)
    };
    K[82] = function() {
        var a = this.pop(),
            b = this.pop(),
            c = this.Nk();
        this.push(this.by(a, b, c))
    };
    K[82].vb = 1;
    mi.prototype.by = function(a, b, c) {
        if (null != b)
            if (null != a && "" !== a) {
                var d = b;
                if (d instanceof ym) {
                    b = d.$q();
                    if (!b) return;
                    d = d.object
                }
                b = b[this.na(b, String(a))];
                q(b) && "__swiffy_override" in b && (b = b.__swiffy_override);
                if (q(b)) return b.apply(Xj(d), c)
            } else if (b instanceof ym) {
            if (d = Object.getPrototypeOf(b.method.prototype).constructor, q(d)) return d.apply(Xj(b.object), c)
        } else if ((d = this.$.oc()) || (d = this.$.Uf()), q(b) && "__swiffy_override" in b && (b = b.__swiffy_override), q(b)) return b.apply(Xj(d), c)
    };
    K[64] = function() {
        var a = this.Wa(),
            a = this.$.get(a),
            b = this.Nk();
        q(a) || (a = Xj);
        var c;
        q(a) && "__swiffy_override" in a ? c = a.__swiffy_override.apply(Xj(null), b) : (c = Object.create(a.prototype), c.__swiffy_nvr && Object.defineProperty(c, "__swiffy_vm", {
            value: this
        }), a.apply(Xj(c), b));
        this.push(c)
    };
    K[83] = function() {
        var a = this.pop(),
            b = this.pop(),
            c = this.Nk(),
            d = void 0;
        null != b && (d = null != a && "" !== a ? b[this.na(b, String(a))] : b);
        q(d) || (d = Xj);
        q(d) && "__swiffy_override" in d ? a = d.__swiffy_override.apply(Xj(null), c) : (a = Object.create(d.prototype), a.__swiffy_nvr && Object.defineProperty(a, "__swiffy_vm", {
            value: this
        }), d.apply(Xj(a), c));
        this.push(a)
    };
    K[67] = function() {
        for (var a = pk(), b = Number(this.pop()), c = 0; c < b; c++) {
            var d = this.pop(),
                e = this.Wa();
            a[e] = d
        }
        this.push(a)
    };
    K[66] = function() {
        for (var a = [], b = Number(this.pop()), c = 0; c < b; c++) {
            var d = this.pop();
            a[c] = d
        }
        this.push(a)
    };
    K[68] = function() {
        var a = this.pop();
        this.push(a instanceof D ? "movieclip" : null == a || void 0 == a ? String(a) : typeof a)
    };
    K[85] = function() {
        var a = this.pop();
        this.push(void 0);
        if ("string" !== typeof a)
            for (var b in a) rj(b) || this.push(b)
    };
    K[153] = function() {};
    K[153].vb = 2;
    K[153].compile = function(a, b, c) {
        return Km(c.labels[a.target])
    };
    K[157] = function() {
        return this.Re()
    };
    K[157].vb = 1;
    K[157].compile = function(a, b, c) {
        return "if(" + Jm(this) + "){" + Km(c.labels[a.target]) + "}"
    };
    K[158] = function() {
        var a = this.Wa(),
            b = this.ki(a);
        if (b.path && b.path.__swiffy_d && (a = b.path.__swiffy_d) && (b = a.Tg(b.Hg), void 0 != b && (b = a.gv(b)))) {
            for (var c = this.$, d = this.Ac, e = this.ld, f = this.dc, h = this.mb, k = 0; k < b.length; k++) b[k].on(a);
            this.mb = h;
            this.$ = c;
            this.Ac = d;
            this.ld = e;
            this.dc = f
        }
    };
    K[158].vb = 1;
    K[159] = function(a, b) {
        var c = this.Wa(),
            d = this.ki(c);
        d.path && d.path.__swiffy_d && (c = d.path.__swiffy_d) && (d = c.Tg(d.Hg), void 0 != d && c.Af(d + a, b))
    };
    K[159].compile = function(a) {
        return Gm(this, a.frameBias, a.play)
    };
    K[44] = function() {
        var a = this.pop(),
            b = Number(this.pop()),
            a = (a = a ? a.prototype : null) ? a : {},
            c;
        a.hasOwnProperty("__swiffy_if") ? c = a.__swiffy_if : (c = new xc, a.__swiffy_if && c.$i(a.__swiffy_if), Object.defineProperty(a, "__swiffy_if", {
            value: c
        }));
        for (var d = 0; d < b; ++d) {
            var e = this.pop();
            if (a = e ? e.prototype : null) c.add(e), a.__swiffy_if && c.$i(a.__swiffy_if)
        }
    };
    var Rm = function(a, b) {
        if (q(b)) {
            "__swiffy_wrapped_type" in b && (b = b.__swiffy_wrapped_type);
            if (a instanceof b) return a;
            if (a instanceof Object) {
                var c = a.__swiffy_if;
                if (c && c.contains(b)) return a
            }
        }
        return null
    };
    K[43] = function() {
        var a = this.pop(),
            b = this.pop();
        this.push(Rm(a, b))
    };
    K[84] = function() {
        var a = this.pop(),
            b = this.pop();
        this.push(!!Rm(b, a))
    };
    K[39] = function() {
        var a = this.pop(),
            b = this.Re(),
            c = this.Re(),
            d = c ? this.ua() : void 0,
            e = c ? this.ua() : void 0,
            f = c ? this.ua() : void 0,
            c = c ? this.ua() : void 0,
            a = a ? a.__swiffy_d : null;
        a instanceof z && this.c.Gq(a, b, c, f, e, d)
    };
    K[40] = function() {
        this.c.tk()
    };
    K[1E3] = function() {};
    var Qm = function(a, b) {
        this.mb[a + this.Ac] = b
    };
    K[1001] = Qm;
    var Nm = function(a, b) {
        this.$.pe(a, b)
    };
    K[1002] = Nm;
    var Om = function(a, b) {
        this.$.pe("super", new ym(a, b))
    };
    K[1003] = Om;
    var Pm = function(a) {
        return this.$.get(a)
    };
    K[1004] = Pm;
    var Hm = function(a) {
        var b = this;
        return function() {
            b.$g(a)
        }
    };
    K[1005] = Hm;
    var Im = function() {};
    K[1006] = Im;
    Qa({
        KC: 4,
        QC: 5,
        NC: 6,
        QD: 7,
        RD: 9,
        jy: 10,
        uy: 11,
        ry: 12,
        my: 13,
        ny: 14,
        LESS: 15,
        Xz: 16,
        MC: 17,
        sy: 18,
        XD: 19,
        $D: 20,
        YD: 21,
        ty: 23,
        hE: 24,
        xB: 28,
        ID: 29,
        HD: 32,
        VD: 33,
        uB: 34,
        GD: 35,
        uA: 36,
        qD: 37,
        kE: 38,
        PD: 39,
        bB: 40,
        aE: 41,
        Lh: 42,
        rA: 43,
        TB: 44,
        lD: 48,
        sA: 50,
        Yz: 51,
        vB: 52,
        RA: 58,
        UA: 59,
        PA: 60,
        pA: 61,
        rD: 62,
        qy: 63,
        HC: 64,
        QA: 65,
        ZB: 66,
        aC: 67,
        mE: 68,
        gE: 69,
        Vz: 71,
        nC: 72,
        eB: 73,
        iE: 74,
        jE: 75,
        eD: 76,
        OD: 77,
        tB: 78,
        FD: 79,
        oy: 80,
        ly: 81,
        qA: 82,
        GC: 83,
        dC: 84,
        dB: 85,
        eA: 96,
        gA: 97,
        jA: 98,
        fA: 99,
        hA: 100,
        iA: 101,
        UD: 102,
        GREATER: 103,
        ZD: 104,
        hB: 105,
        yB: 129,
        SD: 135,
        yA: 136,
        AB: 140,
        OA: 142,
        Tn: 143,
        pE: 148,
        py: 153,
        wB: 154,
        NA: 155,
        DB: 157,
        ig: 158,
        zB: 159,
        iD: 303,
        dD: 304,
        kD: 305,
        jD: 306,
        hD: 307,
        gD: 308,
        fD: 309,
        FA: 1E3,
        bC: 1001,
        $B: 1002,
        cC: 1003,
        sB: 1004,
        kA: 1005,
        tA: 1006
    }, function(a, b) {
        var c = K[a];
        c.action = b;
        mi.prototype[b] = c
    });
    var Sm = function(a) {
        this.pt = a;
        this.Ik = 0
    };
    g = Sm.prototype;
    g.lv = function() {
        return this.Ik < this.pt.length
    };
    g.Te = function() {
        return this.pt.charCodeAt(this.Ik++)
    };
    g.jt = function() {
        return this.Te() << 24 >> 24
    };
    g.Qh = function() {
        var a = 0,
            b = 0;
        do var c = this.Te(),
            b = b + ((c & 127) << a),
            a = a + 7; while (c & 128);
        return b
    };
    g.ht = function() {
        var a = this.Te(),
            a = a | this.Te() << 8;
        return a |= this.jt() << 16
    };
    var Tm = function(a) {
            return [a.Qh()]
        },
        Um = function(a) {
            return [a.Qh(), a.Qh()]
        },
        Vm = function(a, b, c) {
            a = a.ht() + a.Ik;
            c[a] = !0;
            return [a]
        };
    var Wm = function(a) {
            Object.defineProperty(this, "__swiffy_vm", {
                value: a
            });
            for (var b in Wm.prototype) Object.defineProperty(this, b, {
                value: na(Wm.prototype[b], this)
            })
        },
        Xm = function(a, b) {
            Object.defineProperty(Wm.prototype, a, {
                value: b
            })
        };
    var Ym = function(a, b) {
            return a ? a + "." + b : String(b)
        },
        $m = function(a, b, c) {
            Zm && b instanceof Zm && (b = b.__swiffy_v, c = c || b.Ta, a ? b = b.Db() : (a = b.uri, b = b.localName));
            this.uri = a;
            this.localName = b;
            this.Ta = c;
            this.Bf = void 0
        };
    g = $m.prototype;
    g.complete = function() {
        return this
    };
    g.compile = function() {
        return ""
    };
    g.sc = function() {
        l(this.Bf) || (this.Bf = Ym(this.uri, this.localName));
        return this.Bf
    };
    g.Ob = function(a) {
        if (!(this.Ta || a instanceof an && ia(this.localName))) {
            var b = this.sc();
            if (b in Object(a)) return b
        }
    };
    g.re = function() {
        return this
    };
    g.Db = function() {
        switch (this.uri) {
            case "":
                return "" + this.localName;
            case null:
                return "*::" + this.localName;
            default:
                return this.uri + "::" + this.localName
        }
    };
    g.toString = function() {
        return (this.Ta ? "@" : "") + this.sc()
    };
    g.normalize = function() {
        var a = String(this.localName);
        return a === this.localName ? this : new $m(this.uri, a, this.Ta)
    };
    g.yd = function() {
        if (!this.Ta && !this.uri) {
            var a = this.localName;
            return ha(a) ? !isFinite(a) || 0 > a || 0 != a % 1 ? void 0 : a : (a = String(a), /^[0-9]+$/.test(a) ? parseInt(a, 10) : void 0)
        }
    };
    g.nj = function(a, b) {
        var c = this.yd();
        if (!l(c)) throw L(a, this.Db(), bn(b).sc());
        return c
    };
    var cn = function(a, b) {
        this.name = a;
        this.Ta = b
    };
    cn.prototype.complete = function(a) {
        return new $m(String(a), this.name, this.Ta)
    };
    cn.prototype.compile = function(a) {
        return "," + a.pop()
    };
    cn.prototype.toString = function() {
        return (this.Ta ? "@" : "") + Ym("?", this.name)
    };
    var dn = function(a) {
        this.Ta = a
    };
    dn.prototype.complete = function(a, b) {
        return new $m(String(b), a, this.Ta)
    };
    dn.prototype.compile = function(a) {
        return "," + a.pop() + "," + a.pop()
    };
    dn.prototype.toString = function() {
        return (this.Ta ? "@" : "") + Ym("?", "?")
    };
    var en = function(a, b, c) {
        this.namespaces = a;
        this.localName = b;
        this.Ta = c
    };
    g = en.prototype;
    g.complete = function() {
        return this
    };
    g.compile = function() {
        return ""
    };
    g.sc = function() {
        return Ym("", this.localName)
    };
    g.Ob = function(a) {
        if (!(this.Ta || a instanceof an && ia(this.localName))) {
            var b = this.namespaces,
                c = this.localName;
            a = Object(a);
            for (var d = 0; d < b.length; ++d) {
                var e = Ym(b[d], c);
                if (e in a) return e
            }
        }
    };
    g.re = function() {
        return new $m("", this.localName, this.Ta)
    };
    g.Db = function() {
        return String(this.localName)
    };
    g.toString = function() {
        return (this.Ta ? "@" : "") + Ym("[" + this.namespaces.join(", ") + "]", this.localName)
    };
    var fn = function(a, b) {
        this.namespaces = a;
        this.Ta = b
    };
    fn.prototype.complete = function(a) {
        return new en(this.namespaces, a, this.Ta)
    };
    fn.prototype.compile = function(a) {
        return "," + a.pop()
    };
    fn.prototype.toString = function() {
        return (this.Ta ? "@" : "") + Ym("[" + this.namespaces.join(", ") + "]", "?")
    };
    var gn = function(a) {
        this.mt = a;
        this.Oh = ""
    };
    gn.prototype.Us = function(a) {
        this.Oh && (this.Oh += ",");
        this.Oh += a ? a.Db() : "*";
        return this
    };
    gn.prototype.Vs = function() {
        return new $m(this.mt.uri, this.mt.localName + ".<" + this.Oh + ">", !1)
    };
    var hn = function(a, b, c, d, e) {
        switch (a.kind) {
            case 9:
                return new en(d[a.ns], b[a.name], !1);
            case 14:
                return new en(d[a.ns], b[a.name], !0);
            case 27:
                return new fn(d[a.ns], !1);
            case 28:
                return new fn(d[a.ns], !0);
            case 15:
                return new cn(b[a.name], !1);
            case 16:
                return new cn(b[a.name], !0);
            case 17:
                return new dn(!1);
            case 18:
                return new dn(!0);
            case 7:
                return new $m(c[a.ns], b[a.name], !1);
            case 13:
                return new $m(c[a.ns], b[a.name], !0);
            case 29:
                b = new gn(e[a.name]);
                for (c = 0; c < a.params.length; c++) b.Us(e[a.params[c]]);
                return b.Vs();
            default:
                return null
        }
    };
    var ln = function(a, b, c, d) {
            a = jn(a);
            var e = b.Ob(a);
            if (l(e)) return b = a[e], kn(b, e), b.apply(l(d) ? d : a, c);
            if ((d = a.__swiffy_proxy) && d.Gh) return d.Gh.call(a, b.re(), c);
            throw L(1069, b.Db(), bn(a).sc());
        },
        mn = function(a, b) {
            a = jn(a);
            if (b.Ob(a)) return !0;
            var c = a.__swiffy_proxy;
            return c && c.mg ? c.mg.call(a, b.re()) : !1
        },
        nn = function(a, b) {
            a = jn(a);
            var c = b.Ob(a);
            if (l(c)) return a[c];
            if ((c = a.__swiffy_proxy) && c.te) return c.te.call(a, b.re())
        },
        on = function(a, b, c) {
            a = jn(a);
            var d = b.Ob(a);
            l(d) ? a[d] = c : (d = a.__swiffy_proxy) && d.setProperty ?
                d.setProperty.call(a, b.re(), c) : a[b.sc()] = c
        };
    var pn = function(a, b, c) {
            this.Ka = a;
            this.dj = b;
            this.ww = c;
            this.ul = a ? a.ul : b
        },
        qn = new pn(null, {}, !1);
    g = pn.prototype;
    g.pr = function(a) {
        return new pn(this === qn ? null : this, a, !1)
    };
    g.rz = function(a) {
        return new pn(this === qn ? null : this, a, !0)
    };
    g.$r = function(a) {
        return this.ww ? mn(this.dj, a) : l(a.Ob(this.dj))
    };
    g.find = function(a) {
        for (var b = this; b.Ka && !b.$r(a);) b = b.Ka;
        return b.dj
    };
    g.Kt = function(a) {
        for (var b = this; b; b = b.Ka)
            if (b.$r(a)) return b.dj;
        throw L(1065, a.sc());
    };
    g.Sy = function(a) {
        var b = this.Kt(a);
        return nn(b, a)
    };
    g.Ay = function(a, b, c) {
        return ln(a, b, c, this.ul)
    };
    g.$y = function() {
        return this.dj
    };
    g.Ry = function() {
        return this.ul
    };
    g.Ey = function(a) {
        return null != a && a !== aa ? a : this.ul
    };
    var rn = function(a) {
        this.traits = a ? Object.create(a.traits) : {};
        this.Kl = a ? a.Kl.slice() : [];
        this.Jl = a ? a.Jl.slice() : []
    };
    g = rn.prototype;
    g.Ph = function(a, b) {
        this.traits[a] = b.Xo(this.traits[a])
    };
    g.Hx = function(a) {
        for (var b in a.traits) this.Ph(b, a.traits[b])
    };
    g.Uk = function(a) {
        (this.Kl.length || this.Jl.length) && Object.defineProperty(a, "__swiffy_slots", {
            value: this.Kl.concat(this.Jl)
        });
        for (var b in this.traits) a.hasOwnProperty(b) || this.traits[b].Go(a, b);
        return a
    };
    g.Yw = function(a, b, c, d, e, f) {
        a = this.px(a, b, c, d, e, f);
        b && this.Ph(b.sc(), a)
    };
    g.px = function(a, b, c, d, e, f) {
        if (a.slot) return d && (c = d.__swiffy_coerce(c)), this.Kl[a.slot] = c, new sn(a.slot, d, !a.writable);
        b = String(b.localName);
        switch (a.kind) {
            case "methods":
                return new tn((c ? c(e, f) : void 0) || un(b));
            case "setters":
                return new vn(void 0, (c ? c(e, f) : void 0) || wn(b));
            case "getters":
                return new vn((c ? c(e, f) : void 0) || xn(b), void 0);
            default:
                return d && (c = d.__swiffy_coerce(c)), new sn(-this.Jl.unshift(c), d, !a.writable)
        }
    };
    var sn = function(a, b, c) {
        this.uw = c;
        this.hy = yn(a, b)
    };
    g = sn.prototype;
    g.Go = function(a, b) {
        Object.defineProperty(a, b, this.hy)
    };
    g.get = function(a, b) {
        return a[b]
    };
    g.set = function(a, b, c) {
        a[b] = c
    };
    g.callee = function(a, b) {
        return a[b]
    };
    g.Xo = function() {
        return this
    };
    var yn = function(a, b) {
            var c, d;
            0 > a ? (c = function() {
                var b = this.__swiffy_slots;
                return b[b.length + a]
            }, d = b ? function(c) {
                var d = this.__swiffy_slots;
                d[d.length + a] = b.__swiffy_coerce(c)
            } : function(b) {
                var c = this.__swiffy_slots;
                c[c.length + a] = b
            }) : (c = function() {
                return this.__swiffy_slots[a]
            }, d = b ? function(c) {
                this.__swiffy_slots[a] = b.__swiffy_coerce(c)
            } : function(b) {
                this.__swiffy_slots[a] = b
            });
            return {
                get: c,
                set: d
            }
        },
        tn = function(a) {
            this.method = a
        };
    g = tn.prototype;
    g.Go = function(a, b) {
        Object.defineProperty(a, b, {
            value: na(this.method, a)
        })
    };
    g.get = function(a) {
        return na(this.method, a)
    };
    g.set = function() {};
    g.callee = function() {
        return this.method
    };
    g.Xo = function() {
        return this
    };
    var vn = function(a, b) {
        this.Ud = a;
        this.gf = b
    };
    g = vn.prototype;
    g.Go = function(a, b) {
        var c = Ik(a, b) || {};
        c.get = this.Ud || c.get;
        c.set = this.gf || c.set;
        Object.defineProperty(a, b, c)
    };
    g.get = function(a) {
        if (this.Ud) return this.Ud.call(a)
    };
    g.set = function(a, b, c) {
        this.gf && this.gf.call(a, c)
    };
    g.callee = function(a) {
        if (this.Ud) return this.Ud.call(a)
    };
    g.Xo = function(a) {
        if (a instanceof vn) {
            var b = this.Ud || a.Ud;
            a = this.gf || a.gf;
            if (b != this.Ud || a != this.gf) return new vn(b, a)
        }
        return this
    };
    var un = function(a) {
            return function() {
                return this[a].apply(this, arguments)
            }
        },
        xn = function(a) {
            return function() {
                return this[a]
            }
        },
        wn = function(a) {
            return function(b) {
                this[a] = b
            }
        },
        M = function(a, b, c) {
            zn(a).Ph(b, new tn(c));
            An(a, b, "value", c)
        },
        N = function(a, b, c) {
            zn(a).Ph(b, new vn(c, void 0));
            An(a, b, "get", c)
        },
        O = function(a, b, c) {
            zn(a).Ph(b, new vn(void 0, c));
            An(a, b, "set", c)
        },
        Bn = function(a) {
            var b = zn(a),
                c = bn(a),
                c = (c.uri ? c.uri + ":" : "") + c.localName + ".",
                d;
            for (d in a.prototype) b.Ph(c + d, new tn(un(d)))
        },
        An = function(a, b, c, d) {
            a =
                a.prototype;
            var e = Ik(a, b) || {};
            e.configurable = !0;
            e[c] = d;
            Object.defineProperty(a, b, e)
        };
    var Cn = function() {
            return "[class " + this.__swiffy_name.localName + "]"
        },
        En = function() {
            return Dn
        },
        Fn = 1,
        Hn = function(a, b, c, d, e, f, h, k, n) {
            var r = Fn++;
            if (!k) k = new $m("", "unnamed#" + r, !1);
            else if (!(k instanceof $m)) {
                var t = k.lastIndexOf(".");
                k = new $m(0 < t ? k.substring(0, t) : "", 0 < t ? k.substring(t + 1) : k, !1)
            }
            n || Xm(k.sc(), a);
            Object.defineProperty(a.prototype, "__swiffy_classdef", {
                value: a
            });
            Object.defineProperty(a.prototype, "constructor", {
                value: a,
                writable: !0
            });
            Object.defineProperty(a, "__swiffy_classdef", {
                get: En
            });
            Object.defineProperty(a,
                "__swiffy_coerce", {
                    value: b
                });
            Object.defineProperty(a, "__swiffy_istype", {
                value: c
            });
            Object.defineProperty(a, "__swiffy_constructor", {
                value: d
            });
            Object.defineProperty(a, "__swiffy_new", {
                value: e
            });
            Object.defineProperty(a, "__swiffy_baseclass", {
                value: f
            });
            b = new rn(f && f.__swiffy_traits);
            Object.defineProperty(a, "__swiffy_traits", {
                value: b
            });
            f = f ? f.__swiffy_if.slice() : [];
            if (h)
                for (c = 0; c < h.length; ++c)
                    for (d = Gn(h[c]), b.Hx(d.__swiffy_traits), d = d.__swiffy_if, e = 0; e < d.length; ++e) d[e] && (f[e] = d[e]);
            f[r] = a;
            Object.defineProperty(a,
                "__swiffy_if", {
                    value: f
                });
            Object.defineProperty(a, "__swiffy_name", {
                value: k
            });
            Object.defineProperty(a, "__swiffy_typeid", {
                value: r
            });
            Object.defineProperty(a, "toString", {
                value: Cn
            });
            return a
        },
        Kn = function(a, b, c, d) {
            return Hn(b, c || b, In, b, d || b, Jn, null, a)
        },
        Ln = function(a, b) {
            return null != a && ui(b, a.__swiffy_classdef)
        },
        Nn = function() {
            return function b(c) {
                return Mn.call(b, c)
            }
        },
        Mn = function(a) {
            if (null != a) {
                if (Ln(a, this)) return a;
                throw L(1034, bn(a), this.__swiffy_name);
            }
            return null
        },
        On = function(a) {
            return Ln(a, this)
        },
        In =
        function(a) {
            return this(a) === a
        },
        Pn = function(a) {
            return a.__swiffy_typeid ? a : a.__swiffy_classdef
        },
        bn = function(a) {
            return null != a ? Pn(a).__swiffy_name : new $m("", String(a), !1)
        },
        Qn = function(a) {
            a = Object.create(a.prototype);
            zn(a.__swiffy_classdef).Uk(a);
            return a
        },
        Sn = function(a) {
            var b = Qn(this);
            Rn(b).apply(b, arguments);
            return b
        },
        Tn = function() {
            var a = this.__swiffy_singleton;
            l(a) || (a = Sn.call(this), Object.defineProperty(this, "__swiffy_singleton", {
                value: a
            }));
            return a
        },
        P = function(a, b, c, d, e) {
            return Un(a, b, {
                    Jk: c,
                    interfaces: d
                },
                e)
        },
        Un = function(a, b, c, d) {
            var e = c.Zf || Nn(),
                f = c.Jk || Jn;
            e.prototype = Object.create(f.prototype);
            a.prototype = e.prototype;
            return Hn(e, c.ex || c.Zf || Mn, On, a, c.Bo || Sn, Gn(f), c.interfaces, b, d)
        },
        Vn = function(a) {
            return function() {
                throw L(a, bn(this).localName);
            }
        },
        ui = function(a, b) {
            if (!b) return !1;
            if (!a) return !0;
            var c = Gn(a),
                d = Gn(b).__swiffy_if;
            return !(!d || !d[c.__swiffy_typeid])
        },
        ti = function(a, b) {
            a.prototype.hasOwnProperty("__swiffy_buildsym") || Object.defineProperty(a.prototype, "__swiffy_buildsym", {
                value: b
            })
        },
        hi = function(a,
            b) {
            ti(a, function(a, d) {
                return b.Bc(a, null, d)
            })
        },
        zn = function(a) {
            return a.__swiffy_traits
        },
        Rn = function(a) {
            return a.__swiffy_classdef.__swiffy_constructor
        },
        Wn = function(a, b) {
            if (!b || !b.__swiffy_typeid) throw L(1041);
            return b.__swiffy_istype(a) ? a : null
        },
        Xn = function(a, b) {
            if (!b || !b.__swiffy_typeid) throw L(1041);
            return b.__swiffy_istype(a)
        },
        Yn = function(a, b) {
            if (!b || !b.__swiffy_typeid) throw L(1041);
            return b.__swiffy_coerce(a)
        },
        Zn = function(a) {
            if (this.__swiffy_new) return this.__swiffy_new.apply(this, arguments);
            var b =
                Object.create(this.prototype),
                c = this.apply(b, arguments);
            return c instanceof Object ? c : b
        },
        Gn = function(a) {
            return a.prototype.__swiffy_classdef
        },
        Q = function(a, b, c, d, e) {
            var f = d;
            Object.defineProperty(a, b, {
                get: function() {
                    return f
                },
                set: function(a) {
                    f = e && null == a ? null : Yn(a, Wm.prototype[c])
                }
            })
        },
        R = function(a, b, c) {
            Object.defineProperty(a, b, {
                value: c
            })
        },
        S = function(a, b, c, d) {
            return !l(a) && l(c) ? c : d && null == a ? null : Yn(a, Wm.prototype[b])
        },
        T = function(a) {
            bn(a).sc()
        },
        Jn = function(a) {
            return null != a ? a : {}
        },
        $n = Nn();
    Wm.prototype = Object.create(Jn.prototype);
    $n.prototype = Wm.prototype;
    Hn(Jn, function(a) {
        return null != a ? a : null
    }, function(a) {
        return null != a
    }, function() {}, function() {
        return {}
    }, null, null, "Object");
    Object.defineProperty(Jn.prototype, "toString", {
        value: function() {
            return "[object " + this.__swiffy_classdef.__swiffy_name.localName + "]"
        },
        writable: !0
    });
    Object.defineProperty(Object.prototype, "__swiffy_classdef", {
        value: Jn
    });
    Hn($n, Mn, On, Vn(1115), Sn, Jn, null, "global", !0);
    var Dn = P(Vn(1115), "Class");
    var bo = function(a, b) {
            this.Um = a;
            this.strings = a.strings;
            this.ints = a.ints;
            this.uints = a.uints;
            this.doubles = [Number.NaN];
            if (a.doubles)
                for (var c = 0; c < a.doubles.length; ++c) this.doubles.push(Number(a.doubles[c]));
            this.ta = b;
            for (var d = [""], c = 0; c < a.namespaces.length; ++c) d.push(ao(a, a.namespaces[c]));
            this.Fw = d;
            this.namespaces = [];
            for (var e = [
                [""]
            ], c = 0; c < a.namespacesets.length; ++c) {
                for (var f = a.namespacesets[c], h = [], k = 0; k < f.length; ++k) h.push(d[f[k]]);
                e.push(h)
            }
            this.multinames = [null];
            for (c = 0; c < a.multinames.length; ++c) this.multinames.push(hn(a.multinames[c],
                this.strings, d, e, this.multinames));
            this.rn = [];
            this.classes = []
        },
        co = 0,
        ao = function(a, b) {
            return "PROTECTED" == b.kind ? "|PROTECTED|" : b.name ? a.strings[b.name] : "|" + b.kind + co+++"|"
        };
    bo.prototype.Gk = "pool";
    bo.prototype.ag = function(a) {
        if (a in this.rn) a = this.rn[a];
        else {
            var b = this.rn,
                c;
            c = this.Um.methods[a];
            if (c.code) {
                var d = c.exceptions || [],
                    e = c.code,
                    f;
                if (Dc) f = aa.atob(e);
                else {
                    Ec();
                    var h = Cc;
                    f = [];
                    for (var k = 0; k < e.length;) {
                        var n = h[e.charAt(k++)],
                            r = k < e.length ? h[e.charAt(k)] : 0;
                        ++k;
                        var t = k < e.length ? h[e.charAt(k)] : 64;
                        ++k;
                        var p = k < e.length ? h[e.charAt(k)] : 64;
                        ++k;
                        if (null == n || null == r || null == t || null == p) throw Error();
                        f.push(n << 2 | r >> 4);
                        64 != t && (f.push(r << 4 & 240 | t >> 2), 64 != p && f.push(t << 6 & 192 | p))
                    }
                    if (8192 > f.length) f = String.fromCharCode.apply(null,
                        f);
                    else {
                        e = "";
                        for (h = 0; h < f.length; h += 8192) e += String.fromCharCode.apply(null, Ma(f, h, h + 8192));
                        f = e
                    }
                }
                e = [!0];
                h = [];
                for (t = 0; t < d.length; ++t) k = d[t], e[k.target] = !0, h[k.from] = !0, h[k.to + 1] = !0;
                for (var t = new Sm(f), k = [], s; t.lv();)
                    if (n = t.Ik, r = t.Te(), p = U[r]) k[n] = r = {
                        Bk: p,
                        args: p.za && p.za(t, n, e),
                        pk: void 0,
                        next: void 0,
                        Ek: void 0
                    }, s && (s.next = r), s = 2 != p.vb ? r : void 0;
                s = 0;
                p = !1;
                for (n = 0; n < f.length; ++n)
                    if (p = p || !!h[n], t = e[n], (r = k[n]) && (p || t) && (t && (r.pk = s++), p = !1, d.length))
                        for (r.Ek = [], t = 0; t < d.length; ++t) n >= d[t].from && n <= d[t].to && r.Ek.push(t);
                s = this.xi(c.traits);
                f = new eo(k, c.type, this);
                f.kv(d);
                f.append("return function(base,scope){return ");
                f.bn(U.Sq).append("(");
                f.jv(c);
                f.iv(d);
                f.append("});};");
                c = Function(Fi.prototype.Gk, bo.prototype.Gk, "traits", f.source)(this.ta, this, s)
            } else c = null;
            a = b[a] = c
        }
        return a
    };
    var fo = [void 0, !1, !0, null];
    g = bo.prototype;
    g.ss = function(a, b, c) {
        switch (a) {
            case "methods":
                return this.ag(b, c);
            case "getters":
                return this.ag(b, void 0);
            case "setters":
                return this.ag(b, void 0);
            case "classes":
                return this.classes[b];
            case "specials":
                return fo[b];
            case "doubles":
                return b ? this.doubles[b] : void 0;
            case "namespaces":
                return this.gt(b);
            default:
                return b ? this.Um[a][b] : void 0
        }
    };
    g.Vf = function(a, b, c) {
        return this.multinames[a].complete(b, c)
    };
    g.gt = function(a) {
        var b = this.namespaces[a];
        b || (this.namespaces[a] = b = new go(void 0, this.Fw[a]));
        return b
    };
    g.xi = function(a, b, c, d) {
        b = b || null;
        c = c || qn;
        d = d || new rn;
        for (var e = 0; e < a.length; ++e) {
            var f = a[e],
                h = null;
            f.type && f.writable && (h = this.Vf(f.type).sc(), h = Wm.prototype[h]);
            var k = f.name ? this.Vf(f.name).re() : null,
                n = this.ss(f.kind, f.value, void 0);
            d.Yw(f, k, n, h, b, c)
        }
        return d
    };
    g.yr = function(a) {
        var b = this.ta.qd;
        a = this.Vf(a).Ob(b);
        return b[a]
    };
    g.xt = function(a, b) {
        if (!b) return a;
        var c = this.yr(b);
        return c || null !== a ? Yn(a, c) : null
    };
    var Zm = function(a) {
            Object.defineProperty(this, "__swiffy_v", {
                value: a.normalize()
            })
        },
        ho = function(a, b, c) {
            return new Zm(new $m(a, b, c))
        };
    Un(Zm, "QName", {
        Zf: function(a) {
            return a instanceof Zm ? a : ho("", a, !1)
        },
        Bo: function(a, b) {
            var c, d;
            if (l(b)) c = l(a) ? a instanceof Zm ? a.uri : null !== a ? String(a) : null : b instanceof Zm ? b.uri : "", d = b instanceof Zm ? b.localName : String(b);
            else if (c = "", l(a)) {
                if (a instanceof Zm) return a;
                d = String(a)
            } else d = "";
            return ho(c, d, !1)
        }
    });
    Object.defineProperty(Zm.prototype, "uri", {
        get: function() {
            return this.__swiffy_v.uri
        }
    });
    Object.defineProperty(Zm.prototype, "localName", {
        get: function() {
            return this.__swiffy_v.localName
        }
    });
    Zm.prototype.toString = function() {
        return this.__swiffy_v.Db()
    };
    var go = function(a, b) {
            var c, d;
            l(b) ? (c = Sd(a), d = b instanceof Zm ? b.uri : String(b)) : l(a) ? a instanceof go ? (c = a.prefix, d = a.uri) : (d = a instanceof Zm ? a.uri : String(a), c = void 0) : d = c = "";
            R(this, "prefix", c);
            R(this, "uri", d)
        },
        io = function(a) {
            return a instanceof go ? a : new go(void 0, String(a))
        };
    Un(go, "Namespace", {
        Zf: io
    });
    go.prototype.valueOf = function() {
        return this.uri
    };
    go.prototype.toString = function() {
        return this.uri
    };
    Wm.prototype.trace = function(a) {
        var b = Array.prototype.map.call(arguments, String).join(" ");
        this.__swiffy_vm.trace(b)
    };
    Wm.prototype.parseInt = function(a, b) {
        !l(b) && Bk(a) && (b = 10);
        return parseInt(a, b)
    };
    Wm.prototype.parseFloat = parseFloat;
    Wm.prototype.isNaN = isNaN;
    Wm.prototype.isFinite = isFinite;
    Wm.prototype["flash.utils.setTimeout"] = function(a, b) {
        var c = this,
            d = Array.prototype.slice.call(arguments, 2);
        return window.setTimeout(function() {
            a.apply(c, d)
        }, b)
    };
    Wm.prototype["flash.utils.clearTimeout"] = function(a) {
        window.clearTimeout(a)
    };
    Wm.prototype["flash.utils.setInterval"] = function(a, b) {
        var c = this,
            d = Array.prototype.slice.call(arguments, 2);
        return window.setInterval(function() {
            a.apply(c, d)
        }, b)
    };
    Wm.prototype["flash.utils.clearInterval"] = function(a) {
        window.clearInterval(a)
    };
    Wm.prototype["flash.utils.getTimer"] = function() {
        return Date.now() - this.__swiffy_vm.startTime
    };
    Wm.prototype["flash.utils.getDefinitionByName"] = function(a) {
        a = a.replace("::", ".");
        "." == a[0] && (a = a.substring(1));
        return this[a]
    };
    Wm.prototype["flash.utils.getQualifiedClassName"] = function(a) {
        switch (typeof a) {
            case "undefined":
                return "void";
            case "number":
                if ((a | 0) == a) return "int"
        }
        return bn(a).Db()
    };
    Wm.prototype["flash.utils.getQualifiedSuperclassName"] = function(a) {
        t: {
            if (null != a && (a = Pn(a).__swiffy_baseclass, null != a)) {
                a = a.__swiffy_name;
                break t
            }
            a = null
        }
        return a ? a.Db() : a
    };
    Wm.prototype["flash.utils.describeType"] = function(a) {
        var b;
        if (!l(a)) throw L(1010);
        jo || (jo = new ko);
        b = jo;
        var c = new lo(null, b.xb("type"));
        if (null === a) c.cd(b.xb("@name"), "null"), c.cd(b.xb("@isStatic"), "false");
        else {
            var d = !!a.__swiffy_typeid;
            a = d ? a : a.__swiffy_classdef;
            var e = b.Hr(c, a, d),
                f = a.__swiffy_name.Db();
            c.cd(b.xb("@name"), f);
            c.cd(b.xb("@isStatic"), String(d));
            e && c.cd(b.xb("@base"), e.__swiffy_name.Db());
            e = c;
            d && (e = c.cg(b.xb("factory")), e.cd(b.xb("@type"), f), b.Hr(e, a, !1));
            b.cw(e, a.__swiffy_traits)
        }
        b = c.bf;
        return b
    };
    Wm.prototype.isXMLName = function(a) {
        return l(Sd(a))
    };
    var mo = function(a, b) {
        Xm(a, function(c) {
            try {
                return null != c ? b(String(c)) : "null"
            } catch (d) {
                throw L(1052, a);
            }
        })
    };
    mo("escape", escape);
    mo("unescape", unescape);
    mo("encodeURI", encodeURI);
    mo("encodeURIComponent", encodeURIComponent);
    mo("decodeURI", decodeURI);
    mo("decodeURIComponent", decodeURIComponent);
    Xm("Math", Math);
    Kn("Boolean", Boolean);
    Kn("Number", Number);
    var no = Kn("int", function(a) {
        return a | 0
    });
    Object.defineProperties(no, {
        MIN_VALUE: {
            value: -2147483648
        },
        MAX_VALUE: {
            value: 2147483647
        }
    });
    var oo = Kn("uint", function(a) {
        return a >>> 0
    });
    Object.defineProperties(oo, {
        MIN_VALUE: {
            value: 0
        },
        MAX_VALUE: {
            value: 4294967295
        }
    });
    Kn("void", function() {});
    Kn("String", String, function(a) {
        return null != a ? String(a) : null
    });
    Kn("Date", function(a) {
        return a instanceof Date ? a : (new Date(Date.now())).toString()
    }, function(a) {
        if (a instanceof Date) return a;
        throw L(1034, bn(a), "Date");
    }, Ri);
    Wm.prototype.Date.prototype = Date.prototype;
    Wm.prototype.Date.UTC = Date.UTC;
    Hn(Function, Mn, On, Function, Function, Jn, null, "Function");
    Hn(Array, Mn, On, Array, Array, Jn, null, "Array");
    var po = aa.RegExp;
    Hn(po, Mn, On, po, function(a, b) {
        if (a instanceof RegExp) {
            if (l(b)) throw L(1100);
            return new RegExp(a)
        }
        var c = !1,
            d = !1;
        if (null != b) {
            a = String(a);
            b = String(b);
            b = b.replace(/[^gim]/g, function(a) {
                switch (a) {
                    case "s":
                        c = !0;
                        break;
                    case "x":
                        d = !0
                }
                return ""
            });
            if (c) {
                var e = !1;
                a = a.replace(/[.\[\]]|\\./g, function(a) {
                    switch (a) {
                        case ".":
                            if (!e) return "[^]";
                            break;
                        case "[":
                            e = !0;
                            break;
                        case "]":
                            e = !1
                    }
                    return a
                })
            }
            d && (a = a.replace(/\s+/g, ""))
        }
        return new RegExp(a, b)
    }, Jn, null, "RegExp");
    Xm("undefined", void 0);
    Xm("null", null);
    Xm("Infinity", Infinity);
    Xm("NaN", NaN);
    Xm("AS3", io("http://adobe.com/AS3/2006/builtin"));
    Object.defineProperty(Object.prototype, "setPropertyIsEnumerable", {
        value: function(a, b) {
            a = S(a, "String");
            b = S(b, "Boolean");
            var c = Object.getOwnPropertyDescriptor(this, a);
            c && c.configurable && c.enumerable != b && (c.enumerable = b, Object.defineProperty(this, a, c))
        }
    });
    var qo = function(a, b) {
        Object.defineProperty(a, Ym("http://adobe.com/AS3/2006/builtin", b), {
            value: function() {
                return this[b].apply(this, arguments)
            }
        })
    };
    qo(Object.prototype, "toLocaleString");
    qo(Object.prototype, "toString");
    qo(Object.prototype, "valueOf");
    var V = function(a, b) {
        Object.defineProperty(a, Ym("http://adobe.com/AS3/2006/builtin", b), {
            value: a[b]
        })
    };
    V(Object.prototype, "hasOwnProperty");
    V(Object.prototype, "isPrototypeOf");
    V(Object.prototype, "propertyIsEnumerable");
    V(Function.prototype, "apply");
    V(Function.prototype, "call");
    V(String, "fromCharCode");
    V(String.prototype, "charAt");
    V(String.prototype, "charCodeAt");
    V(String.prototype, "concat");
    V(String.prototype, "indexOf");
    V(String.prototype, "lastIndexOf");
    V(String.prototype, "localeCompare");
    V(String.prototype, "match");
    V(String.prototype, "replace");
    V(String.prototype, "search");
    V(String.prototype, "slice");
    V(String.prototype, "split");
    V(String.prototype, "substr");
    V(String.prototype, "substring");
    V(String.prototype, "toLocaleLowerCase");
    V(String.prototype, "toLocaleUpperCase");
    V(String.prototype, "toLowerCase");
    V(String.prototype, "toUpperCase");
    V(String.prototype, "toString");
    V(String.prototype, "valueOf");
    V(Array.prototype, "concat");
    V(Array.prototype, "every");
    V(Array.prototype, "filter");
    V(Array.prototype, "forEach");
    V(Array.prototype, "indexOf");
    V(Array.prototype, "join");
    V(Array.prototype, "lastIndexOf");
    V(Array.prototype, "map");
    V(Array.prototype, "pop");
    V(Array.prototype, "push");
    V(Array.prototype, "reverse");
    V(Array.prototype, "shift");
    V(Array.prototype, "slice");
    V(Array.prototype, "some");
    V(Array.prototype, "sort");
    V(Array.prototype, "sortOn");
    V(Array.prototype, "splice");
    V(Array.prototype, "unshift");
    V(Date.prototype, "getTime");
    qo(RegExp.prototype, "exec");
    qo(RegExp.prototype, "test");
    var ro = function(a, b) {
        a = S(a, "String", "");
        b = S(b, "int", 0);
        R(this, "errorID", b);
        Q(this, "message", "String", a);
        Q(this, "name", "String", "Error")
    };
    P(ro, "Error");
    ro.prototype.getStackTrace = function() {
        T(this, "getStackTrace");
        return ""
    };
    ro.prototype.toString = function() {
        return this.name + (this.message ? ": " + this.message : "")
    };
    var so = function(a, b) {
        ro.call(this, a, b);
        this.name = "ReferenceError"
    };
    P(so, "ReferenceError", ro);
    var to = function(a, b) {
        ro.call(this, a, b);
        this.name = "TypeError"
    };
    P(to, "TypeError", ro);
    var uo = function(a, b) {
        ro.call(this, a, b);
        this.name = "VerifyError"
    };
    P(uo, "VerifyError", ro);
    var vo = function(a, b) {
        ro.call(this, a, b);
        this.name = "ArgumentError"
    };
    P(vo, "ArgumentError", ro);
    var wo = function(a, b) {
        ro.call(this, a, b);
        this.name = "RangeError"
    };
    P(wo, "RangeError", ro);
    var xo = function(a, b) {
        ro.call(this, a, b);
        this.name = "URIError"
    };
    P(xo, "URIError", ro);
    var yo = function(a, b) {
        ro.call(this, a, b)
    };
    P(yo, "flash.errors.IOError", ro);
    var zo = function(a, b) {
        ro.call(this, a, b)
    };
    P(zo, "flash.errors.EOFError", yo);
    var Ao = function(a) {
            if (null === a) throw L(1009);
            if (void 0 === a) throw L(1010);
        },
        jn = function(a) {
            Ao(a);
            return Object(a)
        },
        kn = function(a, b) {
            if (!q(a)) throw L(1006, b || "value");
        },
        L = function(a, b) {
            var c = Bo[a] || ro,
                d = Co[a],
                e = "Error #" + a;
            if (d) var f = arguments,
                e = e + (": " + d.replace(/%(\d+)/g, function(a, b) {
                    return b < f.length ? f[b] : ""
                }));
            throw new Ui(new c(e, a));
        },
        Co = {
            1001: "The method %1 is not implemented.",
            1006: "%1 is not a function.",
            1007: "Instantiation attempted on a non-constructor.",
            1009: "Cannot access a property or method of a null object reference.",
            1010: "A term is undefined and has no properties.",
            1014: "Class %1 could not be found.",
            1016: "Descendants operator (..) not supported on type",
            1034: "Type Coercion failed: cannot convert %1 to %2.",
            1040: "The right-hand side of instanceof must be a class or function.",
            1041: "The right-hand side of operator must be a class.",
            1052: "Invalid URI passed to %1 function.",
            1056: "Cannot create property %1 on %2.",
            1065: "Variable %1 is not defined.",
            1069: "Property %1 not found on %2 and there is no default value.",
            1083: 'The prefix "%1" for element "%2" is not bound.',
            1085: 'The element type "%1" must be terminated by the matching end-tag "</%2>".',
            1086: "The %1 method only works on lists containing one item.",
            1087: "Assignment to indexed XML is not allowed.",
            1088: "The markup in the document following the root element must be well-formed.",
            1090: "XML parser failure: element is malformed.",
            1091: "XML parser failure: Unterminated CDATA section.",
            1094: "XML parser failure: Unterminated comment.",
            1095: "XML parser failure: Unterminated attribute.",
            1097: "XML parser failure: Unterminated processing instruction.",
            1100: "Cannot supply flags when constructing one RegExp from another.",
            1115: "%1$ is not a constructor.",
            1123: "Filter operator not supported on type %1.",
            1125: "The index %1 is out of range %2.",
            1126: "Cannot change the length of a fixed Vector.",
            1127: "Type application attempted on a non-parameterized type.",
            1504: "End of file.",
            1506: "The specified range is invalid.",
            1508: "The value specified for argument %1 is invalid.",
            2004: "One of the parameters is invalid.",
            2006: "The supplied index is out of bounds.",
            2007: "Parameter %1 must be non-null.",
            2008: "Parameter %1 must be one of the accepted values.",
            2012: "%1$ class cannot be instantiated.",
            2015: "Invalid %1.",
            2030: "End of file was encountered.",
            2058: "There was an error decompressing the data.",
            2067: "The ExternalInterface is not available in this container.",
            2088: "The Proxy class does not implement %1. It must be overridden by a subclass.",
            2089: "The Proxy class does not implement %1. It must be overridden by a subclass.",
            2090: "The Proxy class does not implement %1. It must be overridden by a subclass.",
            2091: "The Proxy class does not implement %1. It must be overridden by a subclass.",
            2092: "The Proxy class does not implement %1. It must be overridden by a subclass.",
            2093: "The Proxy class does not implement %1. It must be overridden by a subclass.",
            2101: "The String passed to URLVariables.decode() must be a URL-encoded query string containing name/value pairs.",
            2105: "The Proxy class does not implement %1. It must be overridden by a subclass.",
            2106: "The Proxy class does not implement %1. It must be overridden by a subclass.",
            2107: "The Proxy class does not implement %1. It must be overridden by a subclass.",
            2108: "Scene %1 was not found.",
            2109: "Frame label %1 not found in scene %2."
        },
        Bo = {
            1001: uo,
            1006: to,
            1007: to,
            1009: to,
            1010: to,
            1014: so,
            1016: to,
            1034: to,
            1040: to,
            1041: to,
            1052: xo,
            1056: so,
            1065: so,
            1069: so,
            1083: to,
            1085: to,
            1086: to,
            1087: to,
            1088: to,
            1090: to,
            1091: to,
            1094: to,
            1095: to,
            1097: to,
            1100: to,
            1115: to,
            1123: to,
            1125: wo,
            1126: wo,
            1127: to,
            1504: ro,
            1506: wo,
            1508: vo,
            2004: to,
            2006: wo,
            2007: to,
            2008: vo,
            2012: vo,
            2015: vo,
            2030: zo,
            2058: yo,
            2067: ro,
            2088: ro,
            2089: ro,
            2090: ro,
            2091: ro,
            2092: ro,
            2093: ro,
            2101: ro,
            2105: ro,
            2106: ro,
            2107: ro,
            2108: vo,
            2109: vo
        };
    var U = {
            yy: function(a) {
                Qa(Zc, function(b, c) {
                    var d = U[b];
                    if (d.implementation) {
                        var e = (d.$c || a).prototype;
                        d.Ax = (e.Gk || "") + "." + c;
                        e[c] = d.implementation
                    }
                })
            }
        },
        Do = function(a, b, c, d) {
            this.target = d;
            this.typeName = 0 == b ? null : a.Vf(b).sc();
            this.traits = a.xi([{
                slot: 1,
                kind: "specials",
                value: 0,
                type: b,
                name: c
            }])
        };
    Do.prototype.Cy = function(a) {
        return !this.typeName || Ln(a, Wm.prototype[this.typeName])
    };
    var Eo = function(a, b) {
        if (a instanceof Ui && b)
            for (var c = a.value, d = 0; d < b.length; d++) {
                var e = b[d];
                if (e.Cy(c)) return e.target
            }
        throw a;
    };
    U[36] = function(a) {
        this.Ha(a)
    };
    U[36].za = function(a) {
        return [a.jt()]
    };
    U[47] = function(a) {
        this.Ha(this.ph.doubles[a])
    };
    U[47].za = Tm;
    U[39] = function() {
        this.Ha("!1")
    };
    U[45] = function(a) {
        this.Ha(this.ph.ints[a])
    };
    U[45].za = Tm;
    U.Fh = function(a) {
        this.cb().qa(U.Fh, a)
    };
    U.Fh.implementation = bo.prototype.gt;
    U.Fh.za = Tm;
    U.Fh.$c = bo;
    U[49] = U.Fh;
    U[40] = function() {
        this.Ha("Number.NaN")
    };
    U[32] = function() {
        this.Ha(null)
    };
    U[37] = function(a) {
        this.Ha(a)
    };
    U[37].za = Tm;
    U[44] = function(a) {
        this.Ha(Aa(this.ph.strings[a]))
    };
    U[44].za = Tm;
    U[38] = function() {
        this.Ha("!0")
    };
    U[46] = function(a) {
        this.Ha(this.ph.uints[a])
    };
    U[46].za = Tm;
    U[33] = function() {
        this.Ha(void 0)
    };
    U[42] = function() {
        this.Ha(this.stack(0))
    };
    U[43] = function() {
        var a = this.stack(0),
            b = this.stack(1);
        this.jl("t");
        this.append("t=" + a + ",");
        this.append(a + "=" + b + ",");
        this.append(b + "=t,");
        this.append("t=undefined;")
    };
    U[41] = function() {
        this.pop()
    };
    U[71] = function() {
        this.append("return;")
    };
    U[71].vb = 2;
    U[72] = function() {
        var a = this.pop();
        this.append("return ");
        this.sr ? this.qa(U.ef, a, this.sr) : this.append(a + ";")
    };
    U[72].vb = 2;
    U[85] = function(a) {
        for (var b = [], c = []; 0 < a--;) c[a] = this.pop(), b[a] = this.pop();
        this.jl("t");
        this.append("t={},");
        for (a = 0; a < b.length; ++a) this.append("t[" + b[a] + "]=" + c[a] + ",");
        this.cb().append("t,t=undefined;")
    };
    U[85].za = Tm;
    U[86] = function(a) {
        this.Ha(this.Oe(a))
    };
    U[86].za = Tm;
    U.Ub = function(a) {
        return function() {
            var b = this.pop(),
                c = this.pop();
            this.Ha(c + a + b)
        }
    };
    U.Fj = function(a) {
        return function() {
            this.Ha(a + this.pop())
        }
    };
    U[160] = U.Ub("+");
    U[161] = U.Ub("-");
    U[162] = U.Ub("*");
    U[163] = U.Ub("/");
    U[164] = U.Ub("%");
    U[144] = U.Fj("-");
    U[150] = U.Fj("!");
    U[145] = function() {
        this.append("++" + this.stack(0) + ";")
    };
    U[147] = function() {
        this.append("--" + this.stack(0) + ";")
    };
    U.To = function(a) {
        return function() {
            var b = this.pop(),
                c = this.pop();
            this.Ha("((" + c + "|0)" + a + "(" + b + "|0)|0")
        }
    };
    U[197] = U.To("+");
    U[198] = U.To("-");
    U[199] = U.To("*");
    U[196] = function() {
        this.Ha("(-(" + this.pop() + "|0))|0")
    };
    U[192] = function() {
        this.Ha("((" + this.pop() + "|0)+1)|0")
    };
    U[193] = function() {
        this.Ha("((" + this.pop() + "|0)-1)|0")
    };
    U[151] = U.Fj("~");
    U[169] = U.Ub("|");
    U[170] = U.Ub("^");
    U[168] = U.Ub("&");
    U[165] = U.Ub("<<");
    U[166] = U.Ub(">>");
    U[167] = U.Ub(">>>");
    U[118] = U.Fj("!!");
    U[117] = U.Fj("+");
    U[115] = function() {
        this.Ha(this.pop() + "|0")
    };
    U[116] = function() {
        this.Ha(this.pop() + ">>>0")
    };
    U[112] = function() {
        this.Ha("String(" + this.pop() + ")")
    };
    U.Pl = function(a) {
        return function() {
            this.Ha(this.register(a))
        }
    };
    U[208] = U.Pl(0);
    U[209] = U.Pl(1);
    U[210] = U.Pl(2);
    U[211] = U.Pl(3);
    U.Ql = function(a) {
        return function() {
            this.append(this.register(a) + "=" + this.pop() + ";")
        }
    };
    U[212] = U.Ql(0);
    U[213] = U.Ql(1);
    U[214] = U.Ql(2);
    U[215] = U.Ql(3);
    U.sg = function(a) {
        var b = function(b) {
            a.call(this, this.register(b))
        };
        b.za = Tm;
        return b
    };
    U[98] = U.sg(function(a) {
        this.Ha(a)
    });
    U[99] = U.sg(function(a) {
        this.append(a + "=" + this.pop() + ";")
    });
    U[146] = U.sg(function(a) {
        this.append("++" + a + ";")
    });
    U[148] = U.sg(function(a) {
        this.append("--" + a + ";")
    });
    U[194] = U.sg(function(a) {
        this.append(a + "=((" + a + "|0)+1)|0;")
    });
    U[195] = U.sg(function(a) {
        this.append(a + "=((" + a + "|0)-1)|0;")
    });
    U[8] = U.sg(function(a) {
        this.append(a + "=undefined;")
    });
    U[130] = function() {};
    U[133] = function() {
        var a = this.pop();
        this.Ha(a + "==null?null:String(" + a + ")")
    };
    U[137] = function() {
        var a = this.pop();
        this.Ha(a + "==null?null:" + a)
    };
    U[149] = function() {
        this.Ha("typeof " + this.pop())
    };
    U[171] = U.Ub("==");
    U[172] = U.Ub("===");
    U[173] = U.Ub("<");
    U[174] = U.Ub("<=");
    U[175] = U.Ub(">");
    U[176] = U.Ub(">=");
    U[16] = function(a) {
        a = this.xh(a);
        0 > a ? this.append("return;") : this.append("j=" + a + ";break;")
    };
    U[16].vb = 2;
    U[16].za = Vm;
    U.tc = function(a) {
        var b = function(b) {
            this.append("if(").append(a.call(this)).append(")");
            b = this.xh(b);
            0 > b ? this.append("return;") : this.append("{j=" + b + ";break;}")
        };
        b.vb = 1;
        b.za = Vm;
        return b
    };
    U[14] = U.tc(function() {
        var a = this.pop(),
            b = this.pop();
        return "!(" + a + "<" + b + ")"
    });
    U[12] = U.tc(function() {
        var a = this.pop();
        return "!(" + this.pop() + "<" + a + ")"
    });
    U[15] = U.tc(function() {
        var a = this.pop(),
            b = this.pop();
        return "!(" + a + "<=" + b + ")"
    });
    U[19] = U.tc(function() {
        var a = this.pop();
        return this.pop() + "==" + a
    });
    U[20] = U.tc(function() {
        var a = this.pop();
        return this.pop() + "!=" + a
    });
    U[25] = U.tc(function() {
        var a = this.pop();
        return this.pop() + "===" + a
    });
    U[26] = U.tc(function() {
        var a = this.pop();
        return this.pop() + "!==" + a
    });
    U[13] = U.tc(function() {
        var a = this.pop();
        return "!(" + this.pop() + "<=" + a + ")"
    });
    U[18] = U.tc(function() {
        return "!" + this.pop()
    });
    U[23] = U.tc(function() {
        var a = this.pop(),
            b = this.pop();
        return a + "<" + b
    });
    U[21] = U.tc(function() {
        var a = this.pop();
        return this.pop() + "<" + a
    });
    U[24] = U.tc(function() {
        var a = this.pop(),
            b = this.pop();
        return a + "<=" + b
    });
    U[22] = U.tc(function() {
        var a = this.pop();
        return this.pop() + "<=" + a
    });
    U[17] = U.tc(function() {
        return this.pop()
    });
    U[27] = function(a, b) {
        var c = this.pop(),
            d = this.xh(a);
        if (2 == arguments.length) {
            var e = this.xh(b);
            this.append("j=" + c + "?" + d + ":" + e)
        } else {
            this.append("j=[");
            for (e = 1; e < arguments.length; ++e) 1 < e && this.append(","), this.append(String(this.xh(arguments[e])));
            this.append("][" + c + "],j=j===undefined?" + d + ":j")
        }
        this.append(";break;")
    };
    U[27].za = function(a, b, c) {
        var d = [],
            e = function() {
                var e = a.ht() + b;
                c[e] = !0;
                d.push(e)
            };
        e();
        for (var f = a.Qh() + 1; 0 < f--;) e();
        return d
    };
    U[27].vb = 2;
    U[29] = function() {
        this.oz()
    };
    U.Et = function(a) {
        var b = function() {
            var a = this.pop(),
                d = this.scope();
            this.zw().append(d).qa(b, a)
        };
        b.implementation = a;
        b.$c = pn;
        return b
    };
    U[48] = U.Et(pn.prototype.pr);
    U[28] = U.Et(pn.prototype.rz);
    U.Bh = function(a) {
        this.cb().append(this.scope(a)).qa(U.Bh)
    };
    U.Bh.implementation = pn.prototype.$y;
    U.Bh.$c = pn;
    U.Bh.za = function(a) {
        return [a.Te()]
    };
    U[101] = U.Bh;
    U.hj = function() {
        this.cb().append(this.scope()).qa(U.hj)
    };
    U.hj.implementation = pn.prototype.Ry;
    U.hj.$c = pn;
    U[100] = U.hj;
    U.ig = function(a) {
        a = this.Oe(a);
        var b = this.pop(),
            c = this.pop();
        this.cb();
        this.qa(U.ig, b, c, a)
    };
    U.ig.implementation = function(a, b, c) {
        kn(b);
        return b.apply(a, c)
    };
    U.ig.za = Tm;
    U.ig.vb = 1;
    U[65] = U.ig;
    U.gg = function(a, b) {
        var c = this.Oe(b),
            d = this.Se(a),
            e = this.pop();
        this.cb().append(this.scope()).qa(U.gg, e, d, c)
    };
    U.gg.implementation = pn.prototype.Ay;
    U.gg.vb = 1;
    U.gg.za = Um;
    U.gg.$c = pn;
    U[76] = U.gg;
    U.Po = function(a, b) {
        var c = function(a, e) {
            var f = this.Oe(e),
                h = this.Se(a),
                k = this.pop();
            b && this.cb();
            this.qa(c, k, h, f)
        };
        c.vb = 1;
        c.za = Um;
        c.implementation = a;
        return c
    };
    U[70] = U.Po(ln, !0);
    U[79] = U.Po(ln, !1);
    U.Ro = function(a) {
        var b = function(a) {
            a = this.Se(a);
            this.cb().append(this.scope());
            this.qa(b, a)
        };
        b.za = Tm;
        b.implementation = a;
        b.$c = pn;
        return b
    };
    U[94] = U.Ro(pn.prototype.find);
    U[93] = U.Ro(pn.prototype.Kt);
    U[96] = U.Ro(pn.prototype.Sy);
    U.Ft = function(a) {
        var b = function(a) {
            var d = this.pop();
            a = this.Se(a);
            var e = this.pop();
            this.qa(b, e, a, d)
        };
        b.za = Tm;
        b.implementation = a;
        return b
    };
    U[97] = U.Ft(on);
    U[104] = U.Ft(on);
    U.So = function(a) {
        var b = function(a) {
            a = this.Se(a);
            var d = this.pop();
            this.cb().qa(b, d, a)
        };
        b.za = Tm;
        b.implementation = a;
        return b
    };
    U[102] = U.So(nn);
    U[89] = U.So(function(a, b) {
        a = jn(a);
        var c = a.__swiffy_proxy;
        if (c && c.Ml) return c.Ml.call(a, b.re());
        throw L(1016);
    });
    U[106] = U.So(function(a, b) {
        a = jn(a);
        var c = a.__swiffy_proxy;
        if (c && c.Yc) return c.Yc.call(a, b.re());
        c = b.Ob(a);
        return l(c) ? delete a[c] : !1
    });
    U.Lh = function() {
        this.qa(U.Lh, this.pop())
    };
    U.Lh.implementation = function(a) {
        throw new Ui(a);
    };
    U.Lh.vb = 2;
    U[3] = U.Lh;
    U.Ch = function(a) {
        this.cb().append("handler" + a);
        this.qa(U.Ch)
    };
    U.Ch.implementation = function() {
        return this.traits.Uk({})
    };
    U.Ch.$c = Do;
    U.Ch.za = Tm;
    U[90] = U.Ch;
    U.sl = function() {
        this.qa(U.sl, this.stack(0))
    };
    U.sl.implementation = function(a) {
        Ao(a);
        if (!Ln(a, Fo) && !Ln(a, Go)) throw L(1123, bn(a).sc());
    };
    U[120] = U.sl;
    U.Jh = function(a) {
        this.qa(U.Jh, Aa(this.ph.strings[a]))
    };
    U.Jh.implementation = function(a) {
        this.vk = String(a)
    };
    U.Jh.za = Tm;
    U[6] = U.Jh;
    U[7] = function() {
        this.qa(U.Jh, this.pop())
    };
    U.Gt = function(a) {
        var b = function() {
            var a = this.stack(0);
            this.append(a + "=").qa(b, a)
        };
        b.implementation = a;
        return b
    };
    U[114] = U.Gt(Wd);
    U[113] = U.Gt(Vd);
    U.Rh = function(a) {
        var b = this.stack(0);
        this.append(b + "=");
        this.Qi(U.Rh, b);
        this.append("[" + a + "];")
    };
    U.Rh.implementation = function(a) {
        jn(a);
        return a.__swiffy_slots
    };
    U.Rh.za = Tm;
    U[108] = U.Rh;
    U[109] = function(a) {
        var b = this.pop(),
            c = this.pop();
        this.Qi(U.Rh, c);
        this.append("[" + a + "]=" + b + ";")
    };
    U[109].za = Tm;
    U.fl = function() {
        var a = this.pop(),
            b = this.pop();
        this.cb().qa(U.fl, b, a)
    };
    U.fl.implementation = function(a, b) {
        return this.cz(a, b)
    };
    U[177] = U.fl;
    U.el = function() {
        var a = this.pop(),
            b = this.pop();
        this.cb().qa(U.el, b, a)
    };
    U.el.implementation = function(a, b) {
        b = jn(b);
        return mn(b, new $m("", a, !1))
    };
    U[180] = U.el;
    U.Dh = function(a) {
        var b = this.pop(),
            c = this.scope();
        this.cb().qa(U.Dh, c, a, b)
    };
    U.Dh.implementation = function(a, b, c) {
        return this.ta.Vw(this, a, b, c)
    };
    U.Dh.za = Tm;
    U.Dh.$c = bo;
    U[88] = U.Dh;
    U.Eh = function(a) {
        this.cb().qa(U.Eh, this.scope(), a)
    };
    U.Eh.implementation = function(a, b) {
        return this.ag(b, void 0)(null, a)
    };
    U.Eh.za = Tm;
    U.Eh.$c = bo;
    U[64] = U.Eh;
    U.jg = function(a) {
        a = this.Oe(a);
        var b = this.pop();
        this.cb().qa(U.jg, b, a)
    };
    U.jg.implementation = function(a, b) {
        return this.Zs(a, b)
    };
    U.jg.za = Tm;
    U.jg.vb = 1;
    U[66] = U.jg;
    U[74] = U.Po(function(a, b, c) {
        a = jn(a);
        b = b.Ob(a);
        return this.Zs(a[b], c)
    }, !0);
    U.vv = function(a, b, c, d) {
        b = jn(b);
        var e = zn(a).traits,
            f = c.Ob(e);
        if (l(f)) return a = e[f].callee(b, f), kn(a, c), a.apply(b, d);
        f = c.Ob(a.prototype);
        if (l(f)) return a = a.prototype[f], kn(a, c), a.apply(b, d);
        throw L(1069, c.Db(), bn(a).localName);
    };
    U.Dt = function(a) {
        var b = function(c, d) {
            var e = this.Oe(d),
                f = this.Se(c),
                h = this.pop();
            a && this.cb();
            this.qa(b, "base", h, f, e)
        };
        b.vb = 1;
        b.za = Um;
        b.implementation = U.vv;
        return b
    };
    U[69] = U.Dt(!0);
    U[78] = U.Dt(!1);
    U.kj = function(a) {
        var b = this.pop();
        a = this.Se(a);
        var c = this.pop();
        this.qa(U.kj, "base", c, a, b)
    };
    U.kj.za = Tm;
    U.kj.implementation = function(a, b, c, d) {
        b = jn(b);
        var e = zn(a).traits,
            f = c.Ob(e);
        if (l(f)) e[f].set(b, f, d);
        else {
            f = c.Ob(a.prototype);
            if (l(f) && (e = Ik(a.prototype, f)) && e.set) {
                e.set.call(b, d);
                return
            }
            throw L(1056, c.Db(), bn(a).localName);
        }
    };
    U[5] = U.kj;
    U.fj = function(a) {
        a = this.Se(a);
        var b = this.pop();
        this.cb().qa(U.fj, "base", b, a)
    };
    U.fj.za = Tm;
    U.fj.implementation = function(a, b, c) {
        b = jn(b);
        var d = zn(a).traits,
            e = c.Ob(d);
        if (l(e)) return d[e].get(b, e);
        e = c.Ob(a.prototype);
        if (l(e) && (d = Ik(a.prototype, e)) && d.get) return d.get.call(b);
        throw L(1069, c.Db(), bn(a).localName);
    };
    U[4] = U.fj;
    U.Ih = function(a) {
        a = this.Oe(a);
        var b = this.pop();
        this.qa(U.Ih, "base", b, a)
    };
    U.Ih.implementation = function(a, b, c) {
        b = jn(b);
        a.__swiffy_constructor.apply(b, c)
    };
    U.Ih.za = Tm;
    U.Ih.vb = 1;
    U[73] = U.Ih;
    U.ej = function(a) {
        a = this.Oe(a);
        var b = this.pop();
        this.cb();
        this.qa(U.ej, b, a)
    };
    U.ej.implementation = function(a, b) {
        var c = a && a.__swiffy_type_apply;
        if (!c) throw L(1127);
        return c.call(a, this.qd, b)
    };
    U.ej.za = Tm;
    U[83] = U.ej;
    U.gl = function() {
        this.cb();
        this.qa(U.gl, "traits")
    };
    U.gl.implementation = function(a) {
        return a.Uk({})
    };
    U[87] = U.gl;
    U.ef = function(a) {
        var b = this.stack(0);
        this.append(b + "=");
        this.qa(U.ef, b, a)
    };
    U.ef.implementation = function(a, b) {
        return this.xt(a, b)
    };
    U.ef.za = Tm;
    U.ef.$c = bo;
    U[128] = U.ef;
    U.tl = function() {
        this.qa(U.tl, this.stack(0))
    };
    U.tl.implementation = Ao;
    U[119] = U.tl;
    U.Ht = function(a) {
        var b = function(a) {
            var d = this.stack(0);
            this.append(d + "=");
            this.qa(b, d, a)
        };
        b.za = Tm;
        b.implementation = function(b, d) {
            return a(b, this.yr(d))
        };
        b.$c = bo;
        return b
    };
    U[134] = U.Ht(Wn);
    U[178] = U.Ht(Xn);
    U.It = function(a) {
        var b = function() {
            var a = this.pop(),
                d = this.pop();
            this.cb();
            this.qa(b, d, a)
        };
        b.implementation = a;
        return b
    };
    U[135] = U.It(Wn);
    U[179] = U.It(Xn);
    U.Qo = function(a) {
        var b = function() {
            var a = this.pop(),
                d = this.pop();
            this.cb().qa(b, d, a)
        };
        b.implementation = a;
        return b
    };
    U.Sn = U.Qo(function(a, b) {
        a = jn(a);
        var c = a.__swiffy_proxy;
        if (c && c.tg) b = c.tg.call(a, b);
        else {
            c = Object.keys(a);
            do
                if (++b > c.length) return 0;
            while (rj(c[b - 1]))
        }
        return b
    });
    U[31] = U.Sn;
    U[30] = U.Qo(function(a, b) {
        a = jn(a);
        var c = a.__swiffy_proxy;
        return c && c.Uh ? c.Uh.call(a, b) : Object.keys(a)[b - 1]
    });
    U[35] = U.Qo(function(a, b) {
        a = jn(a);
        var c = a.__swiffy_proxy;
        return c && c.Vh ? c.Vh.call(a, b) : a[Object.keys(a)[b - 1]]
    });
    U.cj = function(a, b) {
        this.append("while(" + this.register(a) + "&&!(" + this.register(b) + "=");
        this.Qi(U.Sn, this.register(a), this.register(b)).append("))");
        this.append(this.register(a) + "=").qa(U.cj, this.register(a));
        this.Ha("!!" + this.register(b))
    };
    U.cj.implementation = function(a) {
        var b = a.__swiffy_proxy;
        return b && b.tg ? null : Object.getPrototypeOf(a)
    };
    U.cj.za = Um;
    U[50] = U.cj;
    U.Cj = function(a) {
        var b = function() {
            var a = this.pop();
            this.cb().qa(b, a)
        };
        b.implementation = a;
        return b
    };
    U.Dj = function(a) {
        var b = function() {
            var a = this.pop(),
                d = this.pop();
            this.cb().qa(b, a, d)
        };
        b.implementation = a;
        return b
    };
    U[53] = U.Cj(function(a) {
        return this.Vd(a, 1).getUint8(a)
    });
    U[54] = U.Cj(function(a) {
        return this.Vd(a, 2).getUint16(a, !0)
    });
    U[55] = U.Cj(function(a) {
        return this.Vd(a, 4).getInt32(a, !0)
    });
    U[56] = U.Cj(function(a) {
        return this.Vd(a, 4).getFloat32(a, !0)
    });
    U[57] = U.Cj(function(a) {
        return this.Vd(a, 8).getFloat64(a, !0)
    });
    U[58] = U.Dj(function(a, b) {
        this.Vd(a, 1).setUint8(a, b)
    });
    U[59] = U.Dj(function(a, b) {
        this.Vd(a, 2).setUint16(a, b, !0)
    });
    U[60] = U.Dj(function(a, b) {
        this.Vd(a, 4).setUint32(a, b, !0)
    });
    U[61] = U.Dj(function(a, b) {
        this.Vd(a, 4).setFloat32(a, b, !0)
    });
    U[62] = U.Dj(function(a, b) {
        this.Vd(a, 8).setFloat64(a, b, !0)
    });
    U[80] = function() {
        this.Ha(this.pop() + "<<31>>31")
    };
    U[81] = function() {
        this.Ha(this.pop() + "<<24>>24")
    };
    U[82] = function() {
        this.Ha(this.pop() + "<<16>>16")
    };
    U.Ej = function(a) {
        var b = function() {};
        b.za = a;
        return b
    };
    U[2] = U.Ej();
    U[9] = U.Ej();
    U[239] = U.Ej(function(a) {
        return [a.Te(), a.Qh(), a.Te(), a.Qh()]
    });
    U[241] = U.Ej(Tm);
    U[240] = U.Ej(Tm);
    U.lf = function(a, b, c) {
        var d = function() {};
        d.implementation = a;
        d.$c = c;
        return U[b] = d
    };
    U.$s = U.lf(bo.prototype.Vf, 256, bo);
    U.Zr = U.lf(function(a, b, c) {
        return new Do(this, a, b, c)
    }, 258, bo);
    U.Sq = U.lf(function(a) {
        var b = this;
        return function() {
            var c = b.vk,
                d = b.Sf,
                e = Xe;
            b.Sf = Wi;
            Xe = b;
            try {
                return a.apply(this, arguments)
            } catch (f) {
                d.call(b, f)
            } finally {
                b.Sf = d, b.vk = c, b.Sf = d, Xe = e
            }
        }
    }, 257);
    U.Tn = U.lf(function(a) {
        for (var b, c = function() {
            b = arguments
        }, d, e = 0;;) try {
            return a(c, e, d)
        } catch (f) {
            e = Eo(f, b), d = f.value
        }
    }, 259);
    U.Tr = U.lf(function(a, b, c, d, e) {
        return a.length > b ? this.xt(a[b], c) : this.ss(d, e)
    }, 260, bo);
    U.Ur = U.lf(pn.prototype.Ey, 261, pn);
    U.Cr = U.lf(function() {}, 262);
    U.ky = U.lf(function() {}, 263);
    var eo = function(a, b, c) {
        this.source = "";
        this.fr = a;
        this.sr = b;
        this.ph = c;
        this.ql = {};
        this.dr = [];
        this.vh = this.mb = 0
    };
    v(eo, Xi);
    g = eo.prototype;
    g.xh = function(a, b) {
        var c = this.fr[a];
        return this.wn(c, b) ? c.pk : -1
    };
    g.wn = function(a, b) {
        return a && l(a.pk) ? (this.dr.push({
            Xq: a,
            stack: l(b) ? b : this.mb,
            Wv: this.vh
        }), !0) : !1
    };
    g.Fx = function(a) {
        return String(a)
    };
    g.Yf = function(a) {
        return "handler" + a
    };
    g.register = function(a) {
        return "r" + a
    };
    g.stack = function(a) {
        return "s" + (this.mb - a - 1)
    };
    g.push = function() {
        return this.jl("s" + this.mb++)
    };
    g.pop = function() {
        return "s" + --this.mb
    };
    g.Oe = function(a) {
        for (var b = "[", c = this.mb -= a; 0 < a; ++c, --a) b += "s" + c, 1 < a && (b += ",");
        return b + "]"
    };
    g.Se = function(a) {
        var b = this.ph.multinames[a];
        return this.Bk(U.$s) + "(" + this.Fx(a) + b.compile(this) + ")"
    };
    g.cb = function() {
        this.append(this.push() + "=");
        return this
    };
    g.Ha = function(a) {
        this.append(this.push() + "=" + a + ";");
        return this
    };
    g.scope = function(a) {
        return l(a) ? "scope" + a : this.vh ? "scope" + (this.vh - 1) : "scope"
    };
    g.oz = function() {
        this.vh--
    };
    g.zw = function() {
        this.append(this.jl("scope" + this.vh++) + "=");
        return this
    };
    g.kv = function(a) {
        for (var b = 0; b < a.length; ++b) {
            var c = a[b],
                d = this.xh(c.target, 1);
            this.append("var " + this.Yf(b) + "=");
            this.qa(U.Zr, c.excType, c.varName, d)
        }
    };
    g.jv = function(a) {
        var b = a.params || [],
            c = a.optionals || [],
            d = b.length - c.length;
        this.append("function(");
        for (var e = 0; e < b.length;) 0 < e && this.append(","), this.append(this.register(++e));
        this.append("){");
        for (e = 0; e < b.length; ++e) {
            var f = b[e];
            if (e >= d) {
                var h = c[e - d];
                this.append(this.register(e + 1) + "=");
                this.qa(U.Tr, "arguments", e, f, this.vw(h.kind), h.value)
            } else f && (this.append(this.register(e + 1) + "="), this.qa(U.ef, this.register(e + 1), f))
        }
        this.append("var " + this.register(0) + "=scope").Qi(U.Ur, "this");
        for (null != a.arguments &&
            this.append("," + this.register(++e) + "=Array.prototype.slice.call(arguments," + a.arguments + ")"); ++e < a.locals;) this.append("," + this.register(e));
        this.append(";")
    };
    g.jl = function(a) {
        this.ql[a] = !0;
        return a
    };
    g.$v = function(a) {
        this.ql[a] = !1
    };
    g.Yv = function() {
        var a = !1,
            b;
        for (b in this.ql) this.ql[b] && (this.append((a ? ", " : "var ") + b), a = !0);
        a && this.append(";")
    };
    g.bw = function(a) {
        this.append("katch(");
        for (var b = 0; b < a.length; ++b) 0 < b && this.append(","), this.append(this.Yf(a[b]));
        this.append(");")
    };
    g.Zv = function(a) {
        this.mb = a.stack;
        this.vh = a.Wv;
        var b = 0;
        for (a = a.Xq; a;) {
            b++;
            a.Ek && this.bw(a.Ek);
            var c = a.Bk;
            c.vb && (b = 0);
            c.apply(this, a.args);
            a = a.next;
            if (this.wn(a)) break
        }
        return this.ar()
    };
    g.iv = function(a) {
        var b = [],
            c = this.ar();
        this.wn(this.fr[0]);
        for (var d, e = 0; d = this.dr.pop(); e++) {
            var f = d.Xq.pk;
            b[f] || (b[f] = this.Zv(d))
        }
        this.append(c);
        c = 1 < e;
        if (a = !!a.length) this.append("return ").bn(U.Tn), this.append("(function(katch,j,s0){"), this.$v("s0");
        this.Yv();
        c && (this.append(a ? "for(;;){" : "for(var j=0;;){"), this.qa(U.Cr), this.append("switch(j){"));
        for (d = 0; d < b.length; ++d) b[d] && (c && this.append("case " + d + ":"), this.append(b[d]));
        c && this.append("default:return;}}");
        a && this.append("});")
    };
    var W = function(a, b, c) {
            Object.defineProperty(this, "__swiffy_v", {
                value: a
            });
            c && Ho(this, 0);
            Q(this, "fixed", "Boolean", !!b);
            Object.defineProperty(this, "length", {
                get: function() {
                    return this.__swiffy_v.length
                },
                set: function(a) {
                    a = S(a, "uint");
                    if (this.fixed) throw L(1126);
                    var b = this.__swiffy_v.length;
                    this.__swiffy_v.length = a;
                    Ho(this, b)
                }
            })
        },
        Io = function(a) {
            return a.__swiffy_classdef.__swiffy_v.Ul ? 0 : null
        },
        Ho = function(a, b) {
            for (var c = a.__swiffy_v, d = Io(a); b < c.length; b++) c[b] = d
        },
        Jo = function(a, b, c) {
            if (null == b) return Io(a);
            a = a.__swiffy_classdef.__swiffy_v;
            return !a.type || c && !a.Ul ? b : Yn(b, a.type)
        },
        Ko = function(a, b) {
            var c = Object.create(a.prototype);
            W.call(c, b || []);
            return c
        };
    W.prototype = Object.create(Jn.prototype);
    var Lo = function(a, b) {
            var c = function(a) {
                if (Ln(a, c)) return a;
                if (null == a || Object(a) !== a) throw L(1034, bn(a), c.__swiffy_name);
                var b = Ko(c);
                a instanceof W && (a = a.__swiffy_v);
                if (ea(a))
                    for (var f = b.__swiffy_v, h = 0; h < a.length; h++) f[h] = Jo(b, a[h]);
                return b
            };
            Object.defineProperty(c, "__swiffy_v", {
                value: {
                    type: a,
                    Ul: b
                }
            });
            return c
        },
        Mo = function() {
            return function(a, b) {
                a = S(a, "uint", 0);
                b = S(b, "Boolean", !1);
                W.call(this, Array(a), b, !0)
            }
        },
        No = new $m("__AS3__.vec", "Vector", !1),
        Po = function(a, b, c, d) {
            d = d || Wm.prototype;
            var e = (new gn(No)).Us(a &&
                    a.__swiffy_name).Vs(),
                f = d[e];
            f || (f = Un(Mo(), e, {
                Zf: Lo(a, b),
                ex: Mn,
                Jk: c ? W : Oo
            }), d[e] = f);
            return f
        },
        Qo = function(a, b, c) {
            a = Po(a && Wm.prototype[a], b, !0);
            Xm(No + "$" + c, a);
            return a
        },
        Oo = Qo(null, !1, "object");
    Qo("int", !0, "int");
    var Ro = Qo("uint", !0, "uint"),
        So = Qo("Number", !0, "double"),
        To = P(function() {
            throw L(1007);
        }, No);
    Object.defineProperty(To, "__swiffy_type_apply", {
        value: function(a, b) {
            if (1 != b.length) throw "PANIC! Wrong number of vector type parameters";
            return Po(b[0], !1, !1, a)
        }
    });
    Object.defineProperty(W.prototype, "__swiffy_proxy", {
        value: {
            Gh: function(a, b) {
                var c = a.nj(1069, this),
                    d = this.__swiffy_v;
                if (c >= d.length) throw L(1125, c, d.length);
                c = d[c];
                if (!q(c)) throw L(1006);
                return c.apply(this, b)
            },
            Yc: function(a) {
                return !a.Ob(this)
            },
            te: function(a) {
                a = a.nj(1069, this);
                var b = this.__swiffy_v;
                if (a >= b.length) throw L(1125, a, b.length);
                return b[a]
            },
            mg: function(a) {
                return a.yd() < this.__swiffy_v.length
            },
            Uh: function(a) {
                return a - 1
            },
            tg: function(a) {
                return ++a > this.__swiffy_v.length ? 0 : a
            },
            Vh: function(a) {
                return this.__swiffy_v[a -
                    1]
            },
            setProperty: function(a, b) {
                var c = a.nj(1056, this),
                    d = this.__swiffy_v;
                if (c > d.length || c == d.length && this.fixed) throw L(1125, c, d.length);
                d[c] = Jo(this, b)
            }
        }
    });
    var Uo = function(a, b, c) {
            if (!Ln(c, a)) throw L(1034, bn(c), a.__swiffy_name);
            b.push.apply(b, c.__swiffy_v)
        },
        Vo = function(a, b, c, d) {
            if (null != b) {
                b = S(b, "Function");
                for (var e = a.__swiffy_v, f = 0; f < e.length; f++) {
                    var h = e[f],
                        k = b.call(c, h, f, a);
                    if (d && d.call(a, k, h)) return !1
                }
            }
            return !0
        },
        Wo = function(a, b, c, d) {
            if (a.fixed) throw L(1126);
            var e = a.__swiffy_v,
                f = d.length;
            c = [b, c];
            c.length += f;
            c = e.splice.apply(e, c);
            var h = 0;
            try {
                for (; 0 < f; h++, b++, f--) e[b] = Jo(a, d[h])
            } finally {
                for (a = Io(a); 0 < f; b++, f--) e[b] = a
            }
            return c
        };
    W.prototype.concat = function(a) {
        var b = this.__swiffy_classdef,
            c = this.__swiffy_v.slice();
        if (10 < Xe.c.xe)
            for (var d = 0; d < arguments.length; d++) Uo(b, c, arguments[d]);
        else
            for (d = arguments.length - 1; 0 <= d; d--) Uo(b, c, arguments[d]);
        return Ko(b, c)
    };
    V(W.prototype, "concat");
    W.prototype.every = function(a, b) {
        return Vo(this, a, b, function(a) {
            return !a
        })
    };
    V(W.prototype, "every");
    W.prototype.filter = function(a, b) {
        var c = [];
        Vo(this, a, b, function(a, b) {
            a && c.push(b)
        });
        return Ko(this.__swiffy_classdef, c)
    };
    V(W.prototype, "filter");
    W.prototype.forEach = function(a, b) {
        Vo(this, a, b)
    };
    V(W.prototype, "forEach");
    W.prototype.indexOf = function(a, b) {
        a = Jo(this, a, !0);
        b = S(b, "int", 0);
        return this.__swiffy_v.indexOf(a, b)
    };
    V(W.prototype, "indexOf");
    W.prototype.join = function(a) {
        a = S(a, "String", ",");
        return this.__swiffy_v.join(a)
    };
    V(W.prototype, "join");
    W.prototype.lastIndexOf = function(a, b) {
        a = Jo(this, a, !0);
        b = S(b, "int", 2147483647);
        return this.__swiffy_v.lastIndexOf(a, b)
    };
    V(W.prototype, "lastIndexOf");
    W.prototype.map = function(a, b) {
        var c = [];
        Vo(this, a, b, function(a) {
            c.push(Jo(this, a))
        });
        return Ko(this.__swiffy_classdef, c)
    };
    V(W.prototype, "map");
    W.prototype.pop = function() {
        if (this.fixed) throw L(1126);
        var a = this.__swiffy_v;
        return a.length ? a.pop() : this.__swiffy_classdef.__swiffy_v.Ul ? 0 : void 0
    };
    V(W.prototype, "pop");
    W.prototype.push = function(a) {
        var b = this.__swiffy_v;
        Wo(this, b.length, 0, arguments);
        return b.length
    };
    V(W.prototype, "push");
    W.prototype.reverse = function() {
        this.__swiffy_v.reverse();
        return this
    };
    V(W.prototype, "reverse");
    W.prototype.shift = function() {
        if (this.fixed) throw L(1126);
        var a = this.__swiffy_v;
        return a.length ? a.shift() : this.__swiffy_classdef.__swiffy_v.Ul ? 0 : void 0
    };
    V(W.prototype, "shift");
    W.prototype.slice = function(a, b) {
        a = S(a, "int", 0);
        b = S(b, "int", 16777215);
        return Ko(this.__swiffy_classdef, this.__swiffy_v.slice(a, b))
    };
    V(W.prototype, "slice");
    W.prototype.some = function(a, b) {
        return !Vo(this, a, b, function(a) {
            return a
        })
    };
    V(W.prototype, "some");
    W.prototype.sort = function(a) {
        this.__swiffy_v.sort(a);
        return this
    };
    V(W.prototype, "sort");
    W.prototype.splice = function(a, b, c) {
        a = S(a, "int");
        b = S(b, "uint");
        c = Array.prototype.slice.call(arguments, 2);
        return Ko(this.__swiffy_classdef, Wo(this, a, b, c))
    };
    V(W.prototype, "splice");
    W.prototype.toLocaleString = function() {
        return this.toString()
    };
    W.prototype.unshift = function(a) {
        Wo(this, 0, 0, arguments);
        return this.__swiffy_v.length
    };
    V(W.prototype, "unshift");
    W.prototype.toString = function() {
        return this.__swiffy_v.join(",")
    };
    var $o = function(a) {
            if (a instanceof Xo) return a = Yo.call(a, 1088), Zo.copy.call(a);
            if (a instanceof $o) return Zo.copy.call(a);
            if (null != a) {
                a = S(a, "String");
                a = new ce(a, Fo.ignoreWhitespace, !1);
                var b = ap(a);
                b || (b = new bp(null, ""));
                if (cp(a)) throw L(1088);
                return b.bf
            }
            return (new bp(null, "")).bf
        },
        Fo = function(a) {
            return a instanceof $o ? a : a instanceof Xo ? Yo.call(a, 1088) : new $o(a)
        };
    Un($o, "XML", {
        Zf: Fo,
        Bo: $o
    });
    Q(Fo, "ignoreComments", "Boolean", !0);
    Q(Fo, "ignoreProcessingInstructions", "Boolean", !0);
    Q(Fo, "ignoreWhitespace", "Boolean", !0);
    Q(Fo, "prettyIndent", "int", 2);
    Q(Fo, "prettyPrinting", "Boolean", !0);
    var dp = function(a) {
        return 0 == a.yd() || this.__swiffy_v.Eo(a)
    };
    Object.defineProperty($o.prototype, "__swiffy_proxy", {
        value: {
            Gh: function(a, b) {
                var c = Zo[a];
                if (q(c)) return c.apply(this, b);
                c = String.prototype[a];
                if (q(c) && this.__swiffy_v.Nl()) return c.apply(this.toString(), b);
                throw L(1006, "value");
            },
            Yc: function() {
                return !1
            },
            Ml: function(a) {
                a = this.__swiffy_v.Nh([], a, !1);
                return ep(a)
            },
            te: function(a) {
                if (0 == a.yd()) return this;
                a = this.__swiffy_v.rg([], a);
                return ep(a)
            },
            setProperty: function(a) {
                if (l(a.yd())) throw L(1087);
            },
            mg: dp,
            Uh: function() {
                return "0"
            },
            tg: function(a) {
                return 0 ==
                    a ? 1 : 0
            },
            Vh: function() {
                return this
            }
        }
    });
    $o.prototype.hasOwnProperty = function(a) {
        return dp.call(this, fp(a))
    };
    $o.prototype.toString = function() {
        return this.__swiffy_v.ue(!1)
    };
    $o.prototype.valueOf = function() {
        return this
    };
    $o.prototype.toJSON = function() {
        return "XML"
    };
    var Zo = {
        addNamespace: function() {
            T(this, "addNamespace");
            return this
        },
        appendChild: function(a) {
            T(this, "appendChild");
            S(a, "Object");
            return this
        },
        attribute: function(a) {
            a = fp(a);
            a = this.__swiffy_v.rg([], a, !0);
            return ep(a)
        },
        attributes: function() {
            var a = this.__swiffy_v.Mo([]);
            return ep(a)
        },
        child: function(a) {
            S(a, "Object");
            T(this, "child");
            return ep([])
        },
        childIndex: function() {
            return this.__swiffy_v.Kh()
        },
        children: function() {
            var a = this.__swiffy_v.No([]);
            return ep(a)
        },
        comments: function() {
            T(this, "comments");
            return ep([])
        },
        contains: function(a) {
            S(a, "XML");
            T(this, "contains");
            return !1
        },
        copy: function() {
            return this.__swiffy_v.Sb(null).bf
        }
    };
    Fo.defaultSettings = function() {
        return {
            ignoreComments: !0,
            ignoreProcessingInstructions: !0,
            ignoreWhitespace: !0,
            prettyIndent: 2,
            prettyPrinting: !0
        }
    };
    Zo.descendants = function(a) {
        a = fp(a, "*");
        a = this.__swiffy_v.Nh([], a, !0);
        return ep(a)
    };
    Zo.elements = function(a) {
        a = fp(a, "*");
        a = this.__swiffy_v.rg([], a, !1);
        return ep(a)
    };
    Zo.hasComplexContent = function() {
        return this.__swiffy_v.rj()
    };
    Zo.hasSimpleContent = function() {
        return this.__swiffy_v.Nl()
    };
    Zo.inScopeNamespaces = function() {
        T(this, "inScopeNamespaces");
        return []
    };
    Zo.insertChildAfter = function(a, b) {
        S(a, "Object");
        S(b, "Object");
        T(this, "insertChildAfter")
    };
    Zo.insertChildBefore = function(a, b) {
        S(a, "Object");
        S(b, "Object");
        T(this, "insertChildBefore")
    };
    Zo.length = function() {
        return 1
    };
    Zo.localName = function() {
        var a = this.__swiffy_v.name;
        return a ? a.localName : null
    };
    Zo.name = function() {
        return this.__swiffy_v.name
    };
    Zo.namespace = function(a) {
        S(a, "String", "null");
        T(this, "namespace");
        return null
    };
    Zo.namespaceDeclarations = function() {
        T(this, "namespaceDeclarations");
        return []
    };
    Zo.nodeKind = function() {
        return this.__swiffy_v.jf
    };
    Zo.normalize = function() {
        T(this, "normalize");
        return this
    };
    Zo.parent = function() {
        var a = this.__swiffy_v;
        if (a.parent) return a.parent.bf
    };
    Zo.prependChild = function(a) {
        S(a, "Object");
        T(this, "prependChild");
        return this
    };
    Zo.processingInstructions = function(a) {
        S(a, "String", "*");
        T(this, "processingInstructions");
        return ep([])
    };
    Zo.propertyIsEnumerable = function(a) {
        return "0" == fp(a).yd()
    };
    Zo.removeNamespace = function(a) {
        S(a, "Namespace");
        T(this, "removeNamespace");
        return this
    };
    Zo.replace = function(a, b) {
        S(a, "Object");
        S(b, "XML");
        T(this, "replace");
        return this
    };
    Zo.setChildren = function(a) {
        S(a, "Object");
        T(this, "setChildren");
        return this
    };
    Zo.setLocalName = function(a) {
        S(a, "String");
        T(this, "setLocalName")
    };
    Zo.setName = function(a) {
        S(a, "String");
        T(this, "setName")
    };
    Zo.setNamespace = function(a) {
        S(a, "Namespace");
        T(this, "setNamespace")
    };
    Fo.setSettings = function(a) {
        ia(a) || (a = $o.defaultSettings());
        ga(a.ignoreComments) && (Fo.ignoreComments = a.ignoreComments);
        ga(a.ignoreProcessingInstructions) && (Fo.ignoreProcessingInstructions = a.ignoreProcessingInstructions);
        ga(a.ignoreWhitespace) && (Fo.ignoreWhitespace = a.ignoreWhitespace);
        ha(a.prettyIndent) && (Fo.prettyIndent = a.prettyIndent);
        ga(a.prettyPrinting) && (Fo.prettyPrinting = a.prettyPrinting)
    };
    Fo.settings = function() {
        return {
            ignoreComments: $o.ignoreComments,
            ignoreProcessingInstructions: Fo.ignoreProcessingInstructions,
            ignoreWhitespace: $o.ignoreWhitespace,
            prettyIndent: $o.prettyIndent,
            prettyPrinting: $o.prettyPrinting
        }
    };
    Zo.text = function() {
        var a = this.__swiffy_v.Oo([], "text");
        return ep(a)
    };
    Zo.toXMLString = function() {
        return this.__swiffy_v.ue(!0)
    };
    var gp = function(a) {
        this.bf = Object.create($o.prototype);
        Object.defineProperty(this.bf, "__swiffy_v", {
            value: this
        });
        this.parent = a
    };
    g = gp.prototype;
    g.name = null;
    g.namespaces = null;
    g.attributes = null;
    g.children = null;
    g.value = null;
    g.vl = function(a, b) {
        b.push(this.ue(a));
        return a
    };
    g.rj = function() {
        return !1
    };
    g.Nl = function() {
        return !this.rj()
    };
    g.Kh = function() {
        if (this.parent)
            for (var a = 0; a < this.parent.children.length; a++)
                if (this.parent.children[a] == this) return a;
        return -1
    };
    g.Mh = function(a, b) {
        return !b && !a.Ta && "*" == a.localName
    };
    g.Eo = function() {
        return !1
    };
    g.rg = function(a) {
        return a
    };
    g.Nh = function(a) {
        return a
    };
    g.Mo = function(a) {
        return a
    };
    g.No = function(a) {
        return a
    };
    g.Oo = function(a) {
        return a
    };
    var lo = function(a, b, c) {
        gp.call(this, a);
        this.name = b;
        this.namespaces = c || [];
        this.attributes = [];
        this.children = []
    };
    v(lo, gp);
    g = lo.prototype;
    g.jf = "element";
    g.ue = function(a) {
        var b = [];
        a = this.vl(a, b);
        return hp(b, a)
    };
    g.vl = function(a, b, c) {
        a = a || this.rj();
        if (!a) {
            for (a = 0; a < this.children.length; a++) this.children[a].vl(!1, b);
            return !1
        }
        c = new ip(c);
        for (a = 0; a < this.namespaces.length; a++) c.js(this.namespaces[a]);
        var d = c.Bs(this.name),
            e = "<" + d;
        for (a = 0; a < this.attributes.length; a++) var f = this.attributes[a],
            e = e + (" " + c.Bs(f.name) + '="' + Wd(f.value) + '"');
        e += c.Uw();
        if (0 == this.children.length) b.push(e + "/>");
        else if (1 == this.children.length && "text" == this.children[0].jf) b.push(e + ">" + this.children[a].ue(!0) + "</" + d + ">");
        else {
            f = [];
            for (a =
                0; a < this.children.length; a++) this.children[a].vl(!0, f, c);
            b.push(e + ">");
            b.push(f);
            b.push("</" + d + ">")
        }
        return !0
    };
    g.rj = function() {
        for (var a = 0; a < this.children.length; a++)
            if (this.children[a] instanceof lo) return !0;
        return !1
    };
    g.Sb = function(a) {
        a = new lo(a, this.name, this.namespaces.slice());
        for (var b = 0; b < this.attributes.length; b++) a.attributes.push(this.attributes[b].Sb(a));
        for (b = 0; b < this.children.length; b++) a.children.push(this.children[b].Sb(a));
        return a
    };
    g.Mh = function(a) {
        if (a.Ta) return !1;
        if ("*" == a.localName) return !0;
        var b = this.name.__swiffy_v;
        return a.localName == b.localName && a.uri == b.uri
    };
    g.Eo = function(a) {
        for (var b = a.Ta ? this.attributes : this.children, c = 0; c < b.length; c++)
            if (b[c].Mh(a, !1)) return !0;
        return !1
    };
    g.rg = function(a, b, c) {
        var d = l(c);
        c = (c = d ? c : b.Ta) ? this.attributes : this.children;
        for (var e = 0; e < c.length; e++) {
            var f = c[e];
            f.Mh(b, d) && a.push(f)
        }
        return a
    };
    g.Nh = function(a, b, c) {
        if (b.Ta)
            for (var d = 0; d < this.attributes.length; d++) {
                var e = this.attributes[d];
                e.Mh(b, c) && a.push(e)
            }
        for (d = 0; d < this.children.length; d++) e = this.children[d], e.Mh(b, c) && a.push(e), e.Nh(a, b, c);
        return a
    };
    g.Mo = function(a) {
        for (var b = 0; b < this.attributes.length; b++) a.push(this.attributes[b]);
        return a
    };
    g.No = function(a) {
        for (var b = 0; b < this.children.length; b++) a.push(this.children[b]);
        return a
    };
    g.Oo = function(a, b) {
        for (var c = 0; c < this.children.length; c++) {
            var d = this.children[c];
            d.jf == b && a.push(d)
        }
        return a
    };
    g.cd = function(a, b) {
        this.attributes.push(new jp(this, a, b));
        return this
    };
    g.cg = function(a) {
        a = new lo(this, a, []);
        this.children.push(a);
        return a
    };
    var jp = function(a, b, c) {
        gp.call(this, a);
        this.name = b;
        this.value = c
    };
    v(jp, gp);
    g = jp.prototype;
    g.jf = "attribute";
    g.ue = function(a) {
        return a ? Wd(this.value) : this.value
    };
    g.Sb = function(a) {
        return new jp(a, this.name, this.value)
    };
    g.Kh = function() {
        return -1
    };
    g.Mh = function(a, b) {
        if ("*" == a.localName) return !0;
        var c = this.name.__swiffy_v;
        return a.localName == c.localName && (b && !c.uri || a.uri == c.uri)
    };
    var bp = function(a, b) {
        gp.call(this, a);
        this.value = b
    };
    v(bp, gp);
    bp.prototype.jf = "text";
    bp.prototype.ue = function(a) {
        return a ? Vd(this.value) : this.value
    };
    bp.prototype.Sb = function(a) {
        return new bp(a, this.value)
    };
    var kp = function(a, b) {
        gp.call(this, a);
        this.value = b
    };
    v(kp, gp);
    kp.prototype.jf = "text";
    kp.prototype.ue = function(a) {
        return a ? "<![CDATA[" + this.value + "]]\x3e" : this.value
    };
    kp.prototype.Sb = function(a) {
        return new kp(a, this.value)
    };
    var fp = function(a, b) {
            if (a instanceof Zm) return a.__swiffy_v;
            a = S(a, "String", b);
            var c = "@" == a.charAt(0);
            c && (a = a.substring(1));
            return new $m("", a, c)
        },
        cp = function(a) {
            try {
                return a.next()
            } catch (b) {
                switch (b.type) {
                    case "tag":
                    case "close":
                        throw L(1090);
                    case "cdata":
                        throw L(1091);
                    case "comment":
                        throw L(1094);
                    case "processing_instruction":
                        throw L(1097);
                    case "attribute":
                        throw L(1095);
                    default:
                        throw b;
                }
            }
        },
        lp = function(a, b) {
            for (var c = new Hc, d = 0; d < a.length;) {
                var e = a[d],
                    f = e.name.match(/^xmlns(?::(.*))?$/);
                f ? (c.set(f[1] ||
                    "", e.value), a.splice(d, 1)) : d++
            }
            d = Xe.vk;
            b || !d || c.se("") || c.set("", d);
            this.ks = c;
            this.Ka = b
        };
    lp.prototype.resolve = function(a, b, c) {
        if (!l(c)) {
            var d = b.indexOf(":");
            c = 0 <= d ? b.substring(0, d) : "";
            b = 0 <= d ? b.substring(d + 1) : b
        }
        if (a && !c) return ho("", b, !0);
        d = this.ks.get(c);
        if (l(d)) return ho(d, b, a);
        if (this.Ka) return this.Ka.resolve(a, b, c);
        if (c) throw L(1083, c, b);
        return ho("", b, !1)
    };
    lp.prototype.Wy = function() {
        return this.ks.map(function(a, b) {
            return new go(b, a)
        })
    };
    var ap = function(a, b, c, d) {
            for (var e = c || null, f; f = cp(a);) switch (f.type) {
                case "tag":
                    c = f.attributes;
                    b = new lp(c, b);
                    e = new lo(e, b.resolve(!1, f.value), b.Wy());
                    for (d = 0; d < c.length; d++) {
                        var h = c[d];
                        e.attributes.push(new jp(e, b.resolve(!0, h.name), h.value))
                    }
                    for (;;) {
                        c = ap(a, b, e, f.value);
                        if (!c) return e;
                        e.children.push(c)
                    }
                case "close":
                    if (e) {
                        if (d != f.value) throw a = e.name.localName, L(1085, a, a);
                        return null
                    }
                    throw L(1088);
                case "text":
                    return new bp(e || null, f.value);
                case "cdata":
                    return new kp(e || null, f.value)
            }
            if (!c) return null;
            a = e.name.localName;
            throw L(1085, a, a);
        },
        ip = function(a) {
            this.Fl = [];
            this.kf = (this.Co = !l(a)) ? {} : a.kf
        };
    ip.prototype.Ix = function() {
        if (!this.Co) {
            var a = {},
                b;
            for (b in this.kf) a[b] = this.kf[b];
            this.kf = a;
            this.Co = !0
        }
    };
    ip.prototype.js = function(a) {
        var b = a.prefix || "",
            c = a.uri,
            d = this.kf[c];
        d != b && (void 0 === d && (this.Ix(), this.kf[c] = b), this.Fl.push(a))
    };
    ip.prototype.Bs = function(a) {
        var b = a.uri;
        a = a.localName;
        if (!b) return a;
        var c = this.kf[b];
        if (!c) {
            for (var c = "", d = 0; c in this.kf; d++) c = String.fromCharCode(97 + d / 17576) + String.fromCharCode(97 + d / 17576 % 26) + String.fromCharCode(97 + d / 676 % 26) + String.fromCharCode(97 + d / 26 % 26);
            this.js(new go(c, b))
        }
        return c ? c + ":" + a : a
    };
    ip.prototype.Uw = function() {
        for (var a = "", b = 0; b < this.Fl.length; b++) {
            var a = a + " xmlns",
                c = this.Fl[b],
                d = c.prefix;
            d && (a += ":" + d);
            a += '="' + Wd(c.uri) + '"'
        }
        this.Fl = [];
        return a
    };
    var hp = function(a, b) {
        b = b && Fo.prettyPrinting;
        var c = "";
        if (b)
            for (var d = Fo.prettyIndent; 0 < d; d--) c += " ";
        var e = [],
            f = function(a, d) {
                for (var n = 0; n < a.length; n++)
                    if (ea(a[n])) f(a[n], d + c);
                    else if (b)
                    for (var r = a[n].trim().split(/\n/), t = 0; t < r.length; t++) e.push(d + r[t]);
                else e.push(a[n])
            };
        f(a, "");
        return e.join(b ? "\n" : "")
    };
    var Xo = function(a) {
            if (a instanceof $o) a = [a.__swiffy_v];
            else if (a instanceof Xo) a = a.__swiffy_v.slice();
            else if (null != a && "" != a) {
                a = S(a, "String");
                a = new ce(a, Fo.ignoreWhitespace, !1);
                for (var b, c = []; b = ap(a);) c.push(b);
                a = c
            } else a = [];
            return ep(a)
        },
        Go = function(a) {
            return a instanceof Xo ? a : new Xo(a)
        };
    Un(Xo, "XMLList", {
        Zf: Go,
        Bo: Xo
    });
    var mp = function(a) {
        for (var b = this.__swiffy_v, c = a.yd() < b.length, d = 0; !c && d < b.length; d++) c = b[d].Eo(a);
        return c
    };
    Object.defineProperty(Xo.prototype, "__swiffy_proxy", {
        value: {
            Gh: function(a, b) {
                var c = np[a];
                if (q(c)) return c.apply(this, b);
                c = Zo[a];
                if (q(c)) {
                    var d = Yo.call(this, 1086, a);
                    return c.apply(d, b)
                }
                c = String.prototype[a];
                if (q(c) && (d = Yo.call(this, 1086, a), d.__swiffy_v.Nl())) return c.apply(d.toString(), b);
                throw L(1006, "value");
            },
            Yc: function() {
                return !1
            },
            Ml: function(a) {
                for (var b = this.__swiffy_v, c = [], d = 0; d < b.length; d++) b[d].Nh(c, a, !1);
                return ep(c)
            },
            te: function(a) {
                var b = this.__swiffy_v,
                    c = a.yd();
                if (l(c)) return op(b[c]);
                for (var c = [], d = 0; d < b.length; d++) b[d].rg(c, a);
                return ep(c)
            },
            setProperty: function(a, b) {
                var c = this.__swiffy_v,
                    d = a.yd();
                l(d) && (d > c.length && (d = c.length), b instanceof $o && (c[d] = b.__swiffy_v))
            },
            mg: mp,
            Uh: function(a) {
                return String(a - 1)
            },
            tg: function(a) {
                return ++a > this.__swiffy_v.length ? 0 : a
            },
            Vh: function(a) {
                return op(this.__swiffy_v[a - 1])
            }
        }
    });
    Xo.prototype.hasOwnProperty = function(a) {
        return mp.call(this, fp(a))
    };
    Xo.prototype.toString = function() {
        if (np.hasComplexContent.call(this)) return np.toXMLString.call(this);
        for (var a = this.__swiffy_v, b = [], c = 0; c < a.length; c++) b.push(a[c].ue(!1));
        return b.join("")
    };
    Xo.prototype.valueOf = function() {
        return this
    };
    Xo.prototype.toJSON = function() {
        return "XMLList"
    };
    var np = {
            attribute: function(a) {
                a = fp(a);
                for (var b = this.__swiffy_v, c = 0; c < b.length; c++) b[c].rg([], a, !0);
                return ep([])
            },
            attributes: function() {
                for (var a = [], b = this.__swiffy_v, c = 0; c < b.length; c++) b[c].Mo(a);
                return ep(a)
            },
            child: function(a) {
                S(a, "Object");
                T(this, "child");
                return ep([])
            },
            children: function() {
                for (var a = this.__swiffy_v, b = [], c = 0; c < a.length; c++) a[c].No(b);
                return ep(b)
            },
            comments: function() {
                T(this, "comments");
                return ep([])
            },
            contains: function(a) {
                S(a, "XML");
                T(this, "contains");
                return !1
            },
            copy: function() {
                T(this,
                    "copy");
                return ep([])
            },
            descendants: function(a) {
                a = fp(a, "*");
                for (var b = this.__swiffy_v, c = [], d = 0; d < b.length; d++) b[d].Nh(c, a, !0);
                return ep(c)
            },
            elements: function(a) {
                a = fp(a, "*");
                for (var b = this.__swiffy_v, c = [], d = 0; d < b.length; d++) b[d].rg(c, a, !1);
                return ep(c)
            },
            hasComplexContent: function() {
                var a = this.__swiffy_v;
                if (0 == a.length) return !1;
                if (1 == a.length) return a[0].rj();
                for (var b = 0; b < a.length; b++)
                    if ("element" == a[b].jf) return !0;
                return !1
            },
            hasSimpleContent: function() {
                var a = this.__swiffy_v;
                if (0 == a.length) return !0;
                if (1 == a.length) return a[0].Nl();
                for (var b = 0; b < a.length; b++)
                    if ("element" == a[b].jf) return !1;
                return !0
            },
            length: function() {
                return this.__swiffy_v.length
            },
            normalize: function() {
                T(this, "normalize");
                return ep([])
            },
            parent: function() {
                var a = this.__swiffy_v;
                if (a.length) {
                    for (var b = a[0].parent, c = 1; b && c < a.length; c++)
                        if (a[c].parent != b) return;
                    return op(b)
                }
            },
            processingInstructions: function(a) {
                S(a, "String", "*");
                T(this, "processingInstructions");
                return ep([])
            },
            propertyIsEnumerable: function(a) {
                var b = this.__swiffy_v;
                return fp(a).yd() <
                    b.length
            },
            text: function() {
                for (var a = this.__swiffy_v, b = [], c = 0; c < a.length; c++) a[c].Oo(b, "text");
                return ep(b)
            },
            toXMLString: function() {
                for (var a = this.__swiffy_v, b = [], c = 0; c < a.length; c++) b.push(a[c].ue(!0));
                return b.join("\n")
            }
        },
        ep = function(a) {
            var b = Object.create(Xo.prototype);
            Object.defineProperty(b, "__swiffy_v", {
                value: a
            });
            return b
        },
        Yo = function(a, b) {
            var c = this.__swiffy_v;
            if (1 == c.length) return c[0].bf;
            throw L.apply(null, arguments);
        },
        op = function(a) {
            return a ? a.bf : void 0
        };
    P(function() {
        Q(this, "description", "String", "");
        Q(this, "forceSimple", "Boolean", !1);
        Q(this, "name", "String", "");
        Q(this, "noAutoLabeling", "Boolean", !1);
        Q(this, "shortcut", "String", "");
        Q(this, "silent", "Boolean", !1)
    }, "flash.accessibility.AccessibilityProperties");
    var pp = P(function() {}, "flash.display.BitmapDataChannel");
    Object.defineProperties(pp, {
        ALPHA: {
            value: 8
        },
        BLUE: {
            value: 4
        },
        GREEN: {
            value: 2
        },
        RED: {
            value: 1
        }
    });
    var qp = P(function() {}, "flash.display.CapsStyle");
    R(qp, "NONE", "none");
    R(qp, "ROUND", "round");
    R(qp, "SQUARE", "square");
    var rp = P(function() {}, "flash.display.GradientType");
    R(rp, "LINEAR", "linear");
    R(rp, "RADIAL", "radial");
    var sp = Vn(2012);
    sp.da = P(sp, "flash.display.Graphics");
    sp.create = function(a) {
        var b = Object.create(sp.prototype);
        Object.defineProperty(b, "__swiffy_d", {
            value: a
        });
        return b
    };
    sp.prototype.beginBitmapFill = function(a, b, c, d) {
        S(b, "flash.geom.Matrix", null);
        S(c, "Boolean", !0);
        S(d, "Boolean", !1);
        T(this, "beginBitmapFill")
    };
    sp.prototype.beginFill = function(a, b) {
        a = S(a, "uint");
        b = 100 * S(b, "Number", 1);
        this.__swiffy_d.ob().Ps(a, b)
    };
    sp.prototype.beginGradientFill = function(a, b, c, d, e, f, h, k) {
        a = S(a, "String");
        b = S(b, "Array");
        c = S(c, "Array");
        d = S(d, "Array");
        e = S(e, "flash.geom.Matrix", null);
        f = S(f, "String", "pad");
        h = S(h, "String", "rgb");
        k = S(k, "Number", 0);
        this.__swiffy_d.ob().Wq(a, b, c, d, tp(e), f, h, k)
    };
    sp.prototype.beginShaderFill = function(a, b) {
        S(b, "flash.geom.Matrix", null);
        T(this, "beginShaderFill")
    };
    sp.prototype.clear = function() {
        this.__swiffy_d.ob().clear()
    };
    sp.prototype.copyFrom = function(a) {
        S(a, "flash.display.Graphics");
        T(this, "copyFrom")
    };
    sp.prototype.cubicCurveTo = function(a, b, c, d, e, f) {
        S(a, "Number");
        S(b, "Number");
        S(c, "Number");
        S(d, "Number");
        S(e, "Number");
        S(f, "Number");
        T(this, "cubicCurveTo")
    };
    sp.prototype.curveTo = function(a, b, c, d) {
        a = S(a, "Number");
        b = S(b, "Number");
        c = S(c, "Number");
        d = S(d, "Number");
        this.__swiffy_d.ob().Qs(a, b, c, d)
    };
    sp.prototype.drawCircle = function(a, b, c) {
        a = S(a, "Number");
        b = S(b, "Number");
        c = S(c, "Number");
        this.__swiffy_d.ob().Rs(a, b, c, c)
    };
    sp.prototype.drawEllipse = function(a, b, c, d) {
        c = S(c, "Number") / 2;
        d = S(d, "Number") / 2;
        a = S(a, "Number") + c;
        b = S(b, "Number") + d;
        this.__swiffy_d.ob().Rs(a, b, c, d)
    };
    sp.prototype.drawGraphicsData = function() {
        T(this, "drawGraphicsData")
    };
    sp.prototype.drawPath = function(a, b, c) {
        S(c, "String", "evenOdd");
        T(this, "drawPath")
    };
    sp.prototype.drawRect = function(a, b, c, d) {
        a = S(a, "Number");
        b = S(b, "Number");
        c = S(c, "Number");
        d = S(d, "Number");
        this.__swiffy_d.ob().rx(a, b, c, d)
    };
    sp.prototype.drawRoundRect = function(a, b, c, d, e, f) {
        a = S(a, "Number");
        b = S(b, "Number");
        c = S(c, "Number");
        d = S(d, "Number");
        e = S(e, "Number");
        f = S(f, "Number", e);
        this.__swiffy_d.ob().sx(a, b, c, d, e, f)
    };
    sp.prototype.drawTriangles = function(a, b, c, d) {
        S(d, "String", "none");
        T(this, "drawTriangles")
    };
    sp.prototype.endFill = function() {
        this.__swiffy_d.ob().Ss()
    };
    sp.prototype.lineBitmapStyle = function(a, b, c, d) {
        S(b, "flash.geom.Matrix", null);
        S(c, "Boolean", !0);
        S(d, "Boolean", !1);
        T(this, "lineBitmapStyle")
    };
    sp.prototype.lineGradientStyle = function(a, b, c, d, e, f, h, k) {
        S(a, "String");
        S(b, "Array");
        S(c, "Array");
        S(d, "Array");
        S(e, "flash.geom.Matrix", null);
        S(f, "String", "pad");
        S(h, "String", "rgb");
        S(k, "Number", 0);
        T(this, "lineGradientStyle")
    };
    sp.prototype.lineShaderStyle = function(a, b) {
        S(b, "flash.geom.Matrix", null);
        T(this, "lineShaderStyle")
    };
    sp.prototype.lineStyle = function(a, b, c, d, e, f, h, k) {
        l(a) && (a = S(a, "Number"));
        b = S(b, "uint", 0);
        c = 100 * S(c, "Number", 1);
        d = S(d, "Boolean", !1);
        e = S(e, "String", "normal");
        f = S(f, "String", "null");
        h = S(h, "String", "null");
        k = S(k, "Number", 3);
        this.__swiffy_d.ob().Ts(a, b, c, d, e, f, h, k)
    };
    sp.prototype.lineTo = function(a, b) {
        a = S(a, "Number");
        b = S(b, "Number");
        this.__swiffy_d.ob().lineTo(a, b)
    };
    sp.prototype.moveTo = function(a, b) {
        a = S(a, "Number");
        b = S(b, "Number");
        this.__swiffy_d.ob().moveTo(a, b)
    };
    var up = P(Vn(1001), "flash.display.IBitmapDrawable");
    up.da = up;
    Bn(up.da);
    var vp = P(function() {}, "flash.display.InterpolationMethod");
    R(vp, "RGB", "rgb");
    R(vp, "LINEAR_RGB", "linearRGB");
    var wp = P(function() {}, "flash.display.JointStyle");
    R(wp, "BEVEL", "bevel");
    R(wp, "MITER", "miter");
    R(wp, "ROUND", "round");
    var xp = P(function() {}, "flash.display.LineScaleMode");
    R(xp, "HORIZONTAL", "horizontal");
    R(xp, "NONE", "none");
    R(xp, "NORMAL", "normal");
    R(xp, "VERTICAL", "vertical");
    var yp = P(function() {}, "flash.display.PixelSnapping");
    Object.defineProperties(yp, {
        ALWAYS: {
            value: "always"
        },
        AUTO: {
            value: "auto"
        },
        NEVER: {
            value: "never"
        }
    });
    var zp = P(function() {}, "flash.display.SpreadMethod");
    R(zp, "PAD", "pad");
    R(zp, "REFLECT", "reflect");
    R(zp, "REPEAT", "repeat");
    var Ap = P(function() {}, "flash.display.StageAlign");
    R(Ap, "BOTTOM", "B");
    R(Ap, "BOTTOM_LEFT", "BL");
    R(Ap, "BOTTOM_RIGHT", "BR");
    R(Ap, "LEFT", "L");
    R(Ap, "RIGHT", "R");
    R(Ap, "TOP", "T");
    R(Ap, "TOP_LEFT", "TL");
    R(Ap, "TOP_RIGHT", "TR");
    var Bp = P(function() {}, "flash.display.StageDisplayState");
    Object.defineProperties(Bp, {
        FULL_SCREEN: {
            value: "fullScreen"
        },
        FULL_SCREEN_INTERACTIVE: {
            value: "fullScreenInteractive"
        },
        NORMAL: {
            value: "normal"
        }
    });
    var Cp = P(function() {}, "flash.display.StageQuality");
    Object.defineProperties(Cp, {
        BEST: {
            value: "best"
        },
        HIGH: {
            value: "high"
        },
        HIGH_16X16: {
            value: "16x16"
        },
        HIGH_16X16_LINEAR: {
            value: "16x16linear"
        },
        HIGH_8X8: {
            value: "8x8"
        },
        HIGH_8X8_LINEAR: {
            value: "8x8linear"
        },
        LOW: {
            value: "low"
        },
        MEDIUM: {
            value: "medium"
        }
    });
    var Dp = P(function() {}, "flash.display.StageScaleMode");
    R(Dp, "EXACT_FIT", "exactFit");
    R(Dp, "NO_BORDER", "noBorder");
    R(Dp, "NO_SCALE", "noScale");
    R(Dp, "SHOW_ALL", "showAll");
    var Ep = function(a, b, c) {
            a = S(a, "String");
            b = S(b, "Boolean", !1);
            c = S(c, "Boolean", !1);
            Object.defineProperty(this, "__swiffy_v", {
                value: {
                    type: a,
                    bubbles: b,
                    cancelable: c,
                    eventPhase: 2,
                    target: null,
                    currentTarget: null,
                    Ll: !1,
                    Is: !1,
                    defaultPrevented: !1,
                    Cl: !1
                }
            })
        },
        Fp = function(a) {
            return a.__swiffy_v
        },
        Gp = P(Ep, "flash.events.Event");
    N(Gp, "bubbles", function() {
        return Fp(this).bubbles
    });
    N(Gp, "cancelable", function() {
        return Fp(this).cancelable
    });
    N(Gp, "currentTarget", function() {
        return Fp(this).currentTarget
    });
    N(Gp, "eventPhase", function() {
        return Fp(this).eventPhase
    });
    N(Gp, "target", function() {
        return Fp(this).target
    });
    N(Gp, "type", function() {
        return Fp(this).type
    });
    M(Gp, "isDefaultPrevented", function() {
        return Fp(this).defaultPrevented
    });
    M(Gp, "preventDefault", function() {
        var a = Fp(this);
        a.cancelable && (a.defaultPrevented = !0)
    });
    M(Gp, "stopPropagation", function() {
        Fp(this).Ll = !0
    });
    M(Gp, "stopImmediatePropagation", function() {
        var a = Fp(this);
        a.Is = !0;
        a.Ll = !0
    });
    M(Gp, "formatToString", function() {
        for (var a = "[" + bn(this).localName, b = 0; b < arguments.length; b++) {
            var c = this[arguments[b]];
            ha(c) ? c = Math.round(100 * c) / 100 : m(c) && (c = '"' + c + '"');
            a += " " + arguments[b] + "=" + c
        }
        return a + "]"
    });
    M(Gp, "clone", function() {
        return Sn.call(Gp, this.type, this.bubbles, this.cancelable)
    });
    M(Gp, "toString", function() {
        return this.formatToString("type", "bubbles", "cancelable", "eventPhase")
    });
    Object.defineProperties(Gp, {
        ACTIVATE: {
            value: "activate"
        },
        ADDED: {
            value: "added"
        },
        ADDED_TO_STAGE: {
            value: "addedToStage"
        },
        CANCEL: {
            value: "cancel"
        },
        CHANGE: {
            value: "change"
        },
        CHANNEL_MESSAGE: {
            value: "channelMessage"
        },
        CHANNEL_STATE: {
            value: "channelState"
        },
        CLEAR: {
            value: "clear"
        },
        CLOSE: {
            value: "close"
        },
        CLOSING: {
            value: "closing"
        },
        COMPLETE: {
            value: "complete"
        },
        CONNECT: {
            value: "connect"
        },
        CONTEXT3D_CREATE: {
            value: "context3DCreate"
        },
        COPY: {
            value: "copy"
        },
        CUT: {
            value: "cut"
        },
        DEACTIVATE: {
            value: "deactivate"
        },
        DISPLAYING: {
            value: "displaying"
        },
        ENTER_FRAME: {
            value: "enterFrame"
        },
        EXIT_FRAME: {
            value: "exitFrame"
        },
        EXITING: {
            value: "exiting"
        },
        FRAME_CONSTRUCTED: {
            value: "frameConstructed"
        },
        FRAME_LABEL: {
            value: "frameLabel"
        },
        FULLSCREEN: {
            value: "fullScreen"
        },
        HTML_BOUNDS_CHANGE: {
            value: "htmlBoundsChange"
        },
        HTML_DOM_INITIALIZE: {
            value: "htmlDOMInitialize"
        },
        HTML_RENDER: {
            value: "htmlRender"
        },
        ID3: {
            value: "id3"
        },
        INIT: {
            value: "init"
        },
        LOCATION_CHANGE: {
            value: "locationChange"
        },
        MOUSE_LEAVE: {
            value: "mouseLeave"
        },
        NETWORK_CHANGE: {
            value: "networkChange"
        },
        OPEN: {
            value: "open"
        },
        PASTE: {
            value: "paste"
        },
        PREPARING: {
            value: "preparing"
        },
        REMOVED: {
            value: "removed"
        },
        REMOVED_FROM_STAGE: {
            value: "removedFromStage"
        },
        RENDER: {
            value: "render"
        },
        RESIZE: {
            value: "resize"
        },
        SCROLL: {
            value: "scroll"
        },
        SELECT: {
            value: "select"
        },
        SELECT_ALL: {
            value: "selectAll"
        },
        SOUND_COMPLETE: {
            value: "soundComplete"
        },
        STANDARD_ERROR_CLOSE: {
            value: "standardErrorClose"
        },
        STANDARD_INPUT_CLOSE: {
            value: "standardInputClose"
        },
        STANDARD_OUTPUT_CLOSE: {
            value: "standardOutputClose"
        },
        SUSPEND: {
            value: "suspend"
        },
        TAB_CHILDREN_CHANGE: {
            value: "tabChildrenChange"
        },
        TAB_ENABLED_CHANGE: {
            value: "tabEnabledChange"
        },
        TAB_INDEX_CHANGE: {
            value: "tabIndexChange"
        },
        TEXT_INTERACTION_MODE_CHANGE: {
            value: "textInteractionModeChange"
        },
        TEXTURE_READY: {
            value: "textureReady"
        },
        UNLOAD: {
            value: "unload"
        },
        USER_IDLE: {
            value: "userIdle"
        },
        USER_PRESENT: {
            value: "userPresent"
        },
        VIDEO_FRAME: {
            value: "videoFrame"
        },
        WORKER_STATE: {
            value: "workerState"
        }
    });
    var Hp = function(a, b, c, d) {
            Ep.call(this, a, b, c);
            this.activating = d
        },
        Ip = P(Hp, "flash.events.ActivityEvent", Ep);
    N(Ip, "activating", function() {
        return this.__swiffy_v.vy
    });
    O(Ip, "activating", function(a) {
        this.__swiffy_v.vy = S(a, "Boolean", !1)
    });
    M(Ip, "clone", function() {
        return Sn.call(Gp, this.type, this.bubbles, this.cancelable, this.activating)
    });
    M(Ip, "toString", function() {
        return this.formatToString("type", "bubbles", "cancelable", "eventPhase", "status", "activating")
    });
    Object.defineProperty(Ip, "ACTIVITY", {
        value: "activity"
    });
    var Jp = function(a, b, c, d, e) {
            Ep.call(this, a, b, c);
            this.contextMenuOwner = e;
            this.isMouseTargetInaccessible = !1;
            this.mouseTarget = d
        },
        Kp = function(a) {
            return a.__swiffy_v
        },
        Lp = P(Jp, "flash.events.ContextMenuEvent", Ep);
    N(Gp, "contextMenuOwner", function() {
        return Kp(this).Hy
    });
    O(Gp, "contextMenuOwner", function(a) {
        Kp(this).Hy = S(a, "flash.display.InteractiveObject", null)
    });
    N(Gp, "isMouseTargetInaccessible", function() {
        return Kp(this).ez
    });
    O(Gp, "isMouseTargetInaccessible", function(a) {
        Kp(this).ez = S(a, "Boolean", !1)
    });
    N(Gp, "mouseTarget", function() {
        return Kp(this).kz
    });
    O(Gp, "mouseTarget", function(a) {
        Kp(this).kz = S(a, "flash.display.InteractiveObject", null)
    });
    M(Lp, "clone", function() {
        return Sn.call(Jp, this.type, this.bubbles, this.cancelable, this.mouseTarget, this.contextMenuOwner)
    });
    Object.defineProperty(Lp, "MENU_ITEM_SELECT", {
        value: "menuItemSelect"
    });
    Object.defineProperty(Lp, "MENU_SELECT", {
        value: "menuSelect"
    });
    var Mp = function(a) {
            return a.__swiffy_v
        },
        Np = P(function(a, b, c, d, e, f, h) {
            Ep.call(this, a, b, c);
            this.relatedObject = l(d) ? d : null;
            this.shiftKey = l(e) ? e : !1;
            this.keyCode = l(f) ? f : 0;
            this.direction = l(h) ? h : "none";
            this.isRelatedObjectInaccessible = !1
        }, "flash.events.FocusEvent", Ep);
    N(Np, "direction", function() {
        return Mp(this).direction
    });
    N(Np, "isRelatedObjectInaccessible", function() {
        return Mp(this).fz
    });
    N(Np, "keyCode", function() {
        return Mp(this).keyCode
    });
    N(Np, "relatedObject", function() {
        return Mp(this).Qf
    });
    N(Np, "shiftKey", function() {
        return Mp(this).shiftKey
    });
    O(Np, "direction", function(a) {
        Mp(this).direction = S(a, "String")
    });
    O(Np, "isRelatedObjectInaccessible", function(a) {
        Mp(this).fz = S(a, "Boolean")
    });
    O(Np, "keyCode", function(a) {
        Mp(this).keyCode = S(a, "uint")
    });
    O(Np, "relatedObject", function(a) {
        Mp(this).Qf = S(a, "flash.display.InteractiveObject")
    });
    O(Np, "shiftKey", function(a) {
        Mp(this).shiftKey = S(a, "Boolean")
    });
    Object.defineProperties(Np, {
        FOCUS_IN: {
            value: "focusIn"
        },
        FOCUS_OUT: {
            value: "focusOut"
        },
        KEY_FOCUS_CHANGE: {
            value: "keyFocusChange"
        },
        MOUSE_FOCUS_CHANGE: {
            value: "mouseFocusChange"
        }
    });
    var Op = P(function(a, b, c, d, e) {
        Hp.call(this, a, b, c);
        a = this.__swiffy_v;
        a.fullScreen = S(d, "Boolean", !1);
        a.dz = S(e, "Boolean", !1)
    }, "flash.events.FullScreenEvent", Hp);
    N(Op, "fullScreen", function() {
        return this.__swiffy_v.fullScreen
    });
    N(Op, "interactive", function() {
        return this.__swiffy_v.dz
    });
    M(Op, "clone", function() {
        return Sn.call(Op, this.type, this.bubbles, this.cancelable, this.activating, this.fullScreen, this.interactive)
    });
    M(Op, "toString", function() {
        return this.formatToString("type", "bubbles", "cancelable", "eventPhase", "activating", "fullScreen", "interactive")
    });
    Object.defineProperty(Op, "FULL_SCREEN", {
        value: "fullScreen"
    });
    Object.defineProperty(Op, "FULL_SCREEN_INTERACTIVE_ACCEPTED", {
        value: "fullScreenInteractiveAccepted"
    });
    var Pp = function(a, b, c, d) {
            Ep.call(this, a, b, c);
            this.status = d;
            this.responseURL = null;
            T(this, "<init>")
        },
        Qp = P(Pp, "flash.events.HTTPStatusEvent", Ep);
    N(Qp, "status", function() {
        return this.__swiffy_v.status
    });
    O(Qp, "status", function(a) {
        this.__swiffy_v.status = S(a, "Number", 0)
    });
    M(Qp, "clone", function() {
        return Sn.call(Qp, this.type, this.bubbles, this.cancelable, this.status)
    });
    M(Qp, "toString", function() {
        return this.formatToString("type", "bubbles", "cancelable", "eventPhase", "status", "responseURL")
    });
    Object.defineProperties(Qp, {
        HTTP_RESPONSE_STATUS: {
            value: "httpResponseStatus"
        },
        HTTP_STATUS: {
            value: "httpStatus"
        }
    });
    var Rp = P(Vn(1001), "flash.events.IEventDispatcher");
    Rp.da = Rp;
    Rp.prototype.addEventListener = function() {};
    Rp.prototype.dispatchEvent = function() {};
    Rp.prototype.hasEventListener = function() {};
    Rp.prototype.removeEventListener = function() {};
    Rp.prototype.willTrigger = function() {};
    Bn(Rp.da);
    var Sp = function(a, b, c) {
            this.wd = a;
            this.ro = b;
            this.ux = c
        },
        Tp = function(a) {
            a = S(a, "flash.events.IEventDispatcher", null);
            Object.defineProperty(this, "__swiffy_v", {
                value: {
                    target: a || this
                }
            })
        };
    P(Tp, "flash.events.EventDispatcher", void 0, [Rp]);
    var Up = {},
        Vp = function(a, b) {
            for (var c = 1; c < arguments.length; ++c) Up[arguments[c]] = a
        };
    Vp(Tp, "activate", "deactivate");
    var Wp = function(a, b) {
            var c = Up[a];
            return !!c && b instanceof c
        },
        Xp = function(a, b) {
            var c = b.__swiffy_d;
            c instanceof jf && c.be() || (c = new Ep(a, !1, !1), Fp(c).Cl = !0, b.dispatchEvent(c))
        };
    Tp.prototype.addEventListener = function(a, b, c, d) {
        this.__swiffy_listeners || Object.defineProperty(this, "__swiffy_listeners", {
            value: {}
        });
        var e = this.__swiffy_listeners,
            f = e[a];
        f || (e[a] = f = []);
        d |= 0;
        c = !!c;
        for (e = 0; e < f.length; ++e)
            if (f[e].wd == b && f[e].ro == c) return;
        0 == f.length && Wp(a, this) && Xe.xx(a, this);
        for (e = f.length; 0 < e && d > f[e - 1].ux; --e);
        f.splice(e, 0, new Sp(b, c, d))
    };
    Tp.prototype.dispatchEvent = function(a) {
        var b = Fp(a),
            c = this.__swiffy_v;
        b.target = c && c.target || this;
        if (!b.Cl) {
            for (var d = [], c = this; c = c.parent;) d.push(c);
            b.eventPhase = 1;
            for (c = d.length - 1; 0 <= c && !b.Ll; c--) b.currentTarget = d[c], Yp(d[c], a, !0)
        }
        b.eventPhase = 2;
        b.currentTarget = this;
        Yp(this, a);
        if (!b.Cl && b.bubbles)
            for (b.eventPhase = 3, c = 0; c < d.length && !b.Ll; c++) b.currentTarget = d[c], Yp(d[c], a);
        return !b.defaultPrevented
    };
    var Yp = function(a, b, c) {
        var d = a.__swiffy_listeners;
        a = Fp(b);
        if (d && d[a.type])
            for (var d = d[a.type], e = 0; e < d.length && !a.Is; e++) d[e].ro == !!c && d[e].wd.call(null, b)
    };
    Tp.prototype.removeEventListener = function(a, b, c) {
        var d = this.__swiffy_listeners;
        if (d && d[a] && d[a].length) {
            d = d[a];
            c = !!c;
            for (var e = 0; e < d.length; e++) d[e].wd == b && d[e].ro == c && d.splice(e--, 1);
            0 == d.length && Wp(a, this) && Xe.Qr(a, this)
        }
    };
    Tp.prototype.hasEventListener = function(a) {
        var b = this.__swiffy_listeners;
        return !!b && !!b[a] && b[a].length
    };
    Tp.prototype.willTrigger = function(a) {
        var b = this;
        do
            if (b.hasEventListener(a)) return !0;
        while (b = b.parent);
        return !1
    };
    var $p = function(a) {
            Tp.call(this, a);
            Object.defineProperty(this, "__swiffy_d", {
                value: new ff(this)
            });
            R(this, "actionScriptVersion", 0);
            Object.defineProperty(this, "applicationDomain", {
                get: function() {
                    T(this, "applicationDomain");
                    return Sn.call(Zp)
                }
            });
            R(this, "bytes", null);
            R(this, "bytesLoaded", 0);
            R(this, "bytesTotal", 0);
            R(this, "childAllowsParent", !0);
            Q(this, "childSandboxBridge", "Object", null);
            R(this, "contentType", "");
            R(this, "frameRate", 0);
            R(this, "height", 0);
            Q(this, "isURLInaccessible", "Boolean", !1);
            R(this, "parentAllowsChild", !0);
            Q(this, "parentSandboxBridge", "Object", null);
            R(this, "sameDomain", !1);
            R(this, "sharedEvents", new Tp);
            R(this, "swfVersion", 0);
            R(this, "uncaughtErrorEvents", null);
            R(this, "width", 0);
            T(this, "<init>")
        },
        aq = P($p, "flash.display.LoaderInfo", Tp);
    Object.defineProperty($p.prototype, "content", {
        get: function() {
            return this.__swiffy_d.content
        }
    });
    Object.defineProperty($p.prototype, "loader", {
        get: function() {
            return this.__swiffy_d.Cs
        }
    });
    Object.defineProperty($p.prototype, "loaderURL", {
        get: function() {
            return this.__swiffy_d.Uy()
        }
    });
    Object.defineProperty($p.prototype, "parameters", {
        get: function() {
            return this.__swiffy_d.sp
        }
    });
    Object.defineProperty($p.prototype, "url", {
        get: function() {
            return this.__swiffy_d.je
        }
    });
    aq.getLoaderInfoByDefinition = function(a) {
        S(a, "Object");
        T($p, "getLoaderInfoByDefinition");
        return null
    };
    var bq = function() {
        Tp.call(this)
    };
    P(bq, "flash.display.NativeMenu", Tp);
    bq.prototype.clone = function() {
        return new bq
    };
    var cq = function() {
        Tp.call(this)
    };
    P(cq, "flash.display.NativeMenuItem", Tp);
    cq.prototype.clone = function() {
        return new cq
    };
    var dq = function(a) {
            return a.__swiffy_v
        },
        eq = P(function(a, b, c, d, e, f, h, k, n, r, t) {
            Ep.call(this, a, b, c);
            this.charCodeValue = l(d) ? d : 0;
            this.keyCodeValue = l(e) ? e : 0;
            this.keyLocationValue = l(f) ? f : 0;
            this.ctrlKeyValue = l(h) ? h : !1;
            this.altKeyValue = l(k) ? k : !1;
            this.shiftKeyValue = l(n) ? n : !1;
            this.controlKeyValue = l(r) ? r : !1;
            this.commandKeyValue = l(t) ? t : !1
        }, "flash.events.KeyboardEvent", Ep);
    N(eq, "charCodeValue", function() {
        return dq(this).Dy
    });
    N(eq, "keyCodeValue", function() {
        return dq(this).gz
    });
    N(eq, "keyLocationValue", function() {
        return dq(this).hz
    });
    N(eq, "ctrlKeyValue", function() {
        return dq(this).Ky
    });
    N(eq, "altKeyValue", function() {
        return dq(this).xy
    });
    N(eq, "shiftKeyValue", function() {
        return dq(this).Nz
    });
    N(eq, "controlKeyValue", function() {
        return dq(this).Iy
    });
    N(eq, "commandKeyValue", function() {
        return dq(this).Fy
    });
    O(eq, "charCodeValue", function(a) {
        dq(this).Dy = S(a, "uint")
    });
    O(eq, "keyCodeValue", function(a) {
        dq(this).gz = S(a, "uint")
    });
    O(eq, "keyLocationValue", function(a) {
        dq(this).hz = S(a, "uint")
    });
    O(eq, "ctrlKeyValue", function(a) {
        dq(this).Ky = S(a, "Boolean")
    });
    O(eq, "altKeyValue", function(a) {
        dq(this).xy = S(a, "Boolean")
    });
    O(eq, "shiftKeyValue", function(a) {
        dq(this).Nz = S(a, "Boolean")
    });
    O(eq, "controlKeyValue", function(a) {
        dq(this).Iy = S(a, "Boolean")
    });
    O(eq, "commandKeyValue", function(a) {
        dq(this).Fy = S(a, "Boolean")
    });
    M(eq, "updateAfterEvent", function() {
        T(this, "updateAfterEvent")
    });
    Object.defineProperties(eq, {
        KEY_DOWN: {
            value: "keyDown"
        },
        KEY_UP: {
            value: "keyUp"
        }
    });
    var gq = function(a, b, c, d, e, f, h, k, n, r, t) {
            Ep.call(this, a, b, c);
            this.localX = d;
            this.localY = e;
            this.relatedObject = f;
            this.ctrlKey = h;
            this.altKey = k;
            this.shiftKey = n;
            this.buttonDown = r;
            this.delta = t;
            a = fq(this);
            a.kq = NaN;
            a.lq = NaN
        },
        fq = function(a) {
            return a.__swiffy_v
        },
        hq = P(gq, "flash.events.MouseEvent", Ep);
    N(hq, "localX", function() {
        return fq(this).nq
    });
    O(hq, "localX", function(a) {
        fq(this).nq = S(a, "Number", NaN)
    });
    N(hq, "localY", function() {
        return fq(this).oq
    });
    O(hq, "localY", function(a) {
        fq(this).oq = S(a, "Number", NaN)
    });
    N(hq, "stageX", function() {
        return fq(this).kq
    });
    N(hq, "stageY", function() {
        return fq(this).lq
    });
    N(hq, "relatedObject", function() {
        return fq(this).Qf
    });
    O(hq, "relatedObject", function(a) {
        fq(this).Qf = S(a, "flash.display.InteractiveObject", null)
    });
    N(hq, "ctrlKey", function() {
        return fq(this).ctrlKey
    });
    O(hq, "ctrlKey", function(a) {
        fq(this).ctrlKey = S(a, "Boolean", !1)
    });
    N(hq, "altKey", function() {
        return fq(this).altKey
    });
    O(hq, "altKey", function(a) {
        fq(this).altKey = S(a, "Boolean", !1)
    });
    N(hq, "shiftKey", function() {
        return fq(this).shiftKey
    });
    O(hq, "shiftKey", function(a) {
        fq(this).shiftKey = S(a, "Boolean", !1)
    });
    N(hq, "buttonDown", function() {
        return fq(this).mq
    });
    O(hq, "buttonDown", function(a) {
        fq(this).mq = S(a, "Boolean", !1)
    });
    N(hq, "delta", function() {
        return fq(this).My
    });
    O(hq, "delta", function(a) {
        fq(this).My = S(a, "int", 0)
    });
    M(hq, "toString", function() {
        return this.formatToString("type", "bubbles", "cancelable", "eventPhase", "localX", "localY", "stageX", "stageY", "relatedObject", "ctrlKey", "altKey", "shiftKey", "buttonDown", "delta")
    });
    M(hq, "updateAfterEvent", function() {
        T(this, "updateAfterEvent")
    });
    Object.defineProperties(hq, {
        CLICK: {
            value: "click"
        },
        CONTEXT_MENU: {
            value: "contextMenu"
        },
        DOUBLE_CLICK: {
            value: "doubleClick"
        },
        MIDDLE_CLICK: {
            value: "middleClick"
        },
        MIDDLE_MOUSE_DOWN: {
            value: "middleMouseDown"
        },
        MIDDLE_MOUSE_UP: {
            value: "middleMouseUp"
        },
        MOUSE_DOWN: {
            value: "mouseDown"
        },
        MOUSE_MOVE: {
            value: "mouseMove"
        },
        MOUSE_OUT: {
            value: "mouseOut"
        },
        MOUSE_OVER: {
            value: "mouseOver"
        },
        MOUSE_UP: {
            value: "mouseUp"
        },
        MOUSE_WHEEL: {
            value: "mouseWheel"
        },
        RIGHT_CLICK: {
            value: "rightClick"
        },
        RIGHT_MOUSE_DOWN: {
            value: "rightMouseDown"
        },
        RIGHT_MOUSE_UP: {
            value: "rightMouseUp"
        },
        ROLL_OUT: {
            value: "rollOut"
        },
        ROLL_OVER: {
            value: "rollOver"
        }
    });
    var iq = function(a, b, c, d) {
            Ep.call(this, a, b, c);
            this.info = l(d) ? d : null
        },
        jq = P(iq, "flash.events.NetStatusEvent", Ep);
    N(jq, "info", function() {
        return this.__swiffy_v.info
    });
    O(jq, "info", function(a) {
        this.__swiffy_v.info = S(a, "Object")
    });
    Object.defineProperty(jq, "NET_STATUS", {
        value: "netStatus"
    });
    var kq = function(a, b, c, d, e) {
            Ep.call(this, a, b, c);
            this.bytesLoaded = d;
            this.bytesTotal = e
        },
        lq = P(kq, "flash.events.ProgressEvent", Ep);
    N(lq, "bytesLoaded", function() {
        return this.__swiffy_v.tj
    });
    O(lq, "bytesLoaded", function(a) {
        this.__swiffy_v.tj = S(a, "Number", 0)
    });
    N(lq, "bytesTotal", function() {
        return this.__swiffy_v.uj
    });
    O(lq, "bytesTotal", function(a) {
        this.__swiffy_v.uj = S(a, "Number", 0)
    });
    M(lq, "clone", function() {
        return Sn.call(lq, this.type, this.bubbles, this.cancelable, this.bytesLoaded, this.bytesTotal)
    });
    M(lq, "toString", function() {
        return this.formatToString("type", "bubbles", "cancelable", "bytesLoaded", "bytesTotal")
    });
    Object.defineProperties(lq, {
        PROGRESS: {
            value: "progress"
        },
        SOCKET_DATA: {
            value: "socketData"
        },
        STANDARD_ERROR_DATA: {
            value: "standardErrorData"
        },
        STANDARD_INPUT_PROGRESS: {
            value: "standardInputProgress"
        },
        STANDARD_OUTPUT_DATA: {
            value: "standardOutputData"
        }
    });
    var mq = P(function(a, b, c, d, e) {
        Ep.call(this, a, b, c);
        this.code = d;
        this.level = e
    }, "flash.events.StatusEvent", Ep);
    N(mq, "code", function() {
        return this.__swiffy_v.code
    });
    O(mq, "code", function(a) {
        this.__swiffy_v.code = S(a, "String")
    });
    N(mq, "level", function() {
        return this.__swiffy_v.iz
    });
    O(mq, "level", function(a) {
        this.__swiffy_v.iz = S(a, "String")
    });
    M(mq, "clone", function() {
        return Sn.call(mq, this.type, this.bubbles, this.cancelable, this.code, this.level)
    });
    Object.defineProperty(mq, "STATUS", {
        value: "status"
    });
    var nq = function(a, b, c, d) {
            Ep.call(this, a, b, c);
            this.text = d
        },
        oq = P(nq, "flash.events.TextEvent", Ep);
    N(oq, "text", function() {
        return this.__swiffy_v.text
    });
    O(oq, "text", function(a) {
        this.__swiffy_v.text = S(a, "String", "")
    });
    M(oq, "clone", function() {
        return Sn.call(oq, this.type, this.bubbles, this.cancelable, this.text)
    });
    M(oq, "toString", function() {
        return this.formatToString("type", "bubbles", "cancelable", "text")
    });
    Object.defineProperty(oq, "LINK", {
        value: "link"
    });
    Object.defineProperty(oq, "TEXT_INPUT", {
        value: "textInput"
    });
    var pq = function(a, b, c, d) {
            nq.call(this, a, b, c, d)
        },
        qq = P(pq, "flash.events.ErrorEvent", nq);
    M(qq, "clone", function() {
        return Sn.call(qq, this.type, this.bubbles, this.cancelable, this.text)
    });
    Object.defineProperty(qq, "ERROR", {
        value: "error"
    });
    var rq = P(function(a, b, c, d, e) {
        nq.call(this, a, b, c, d);
        this.error = e
    }, "flash.events.AsyncErrorEvent", pq);
    N(rq, "error", function() {
        return this.__swiffy_v.error
    });
    O(rq, "error", function(a) {
        this.__swiffy_v.error = S(a, "Error", null)
    });
    M(rq, "clone", function() {
        return Sn.call(rq, this.type, this.bubbles, this.cancelable, this.text, this.error)
    });
    Object.defineProperty(rq, "ASYNC_ERROR", {
        value: "asyncError"
    });
    var sq = P(function(a, b, c, d) {
        nq.call(this, a, b, c, d);
        T(this, "<init>")
    }, "flash.events.IOErrorEvent", pq);
    M(sq, "clone", function() {
        return Sn.call(sq, this.type, this.bubbles, this.cancelable, this.text)
    });
    Object.defineProperties(sq, {
        IO_ERROR: {
            value: "ioError"
        },
        STANDARD_ERROR_IO_ERROR: {
            value: "standardErrorIoError"
        },
        STANDARD_INPUT_IO_ERROR: {
            value: "standardInputIoError"
        },
        STANDARD_OUTPUT_IO_ERROR: {
            value: "standardOutputIoError"
        }
    });
    var tq = P(function(a, b, c, d) {
        nq.call(this, a, b, c, d)
    }, "flash.events.SecurityErrorEvent", pq);
    M(tq, "clone", function() {
        return Sn.call(tq, this.type, this.bubbles, this.cancelable, this.text)
    });
    Object.defineProperty(tq, "SECURITY_ERROR", {
        value: "securityError"
    });
    var uq = function(a, b, c) {
            Ep.call(this, a, b, c)
        },
        vq = P(uq, "flash.events.TimerEvent", Ep);
    M(vq, "clone", function() {
        return Sn.call(vq, this.type, this.bubbles, this.cancelable, this.activating)
    });
    Object.defineProperties(vq, {
        TIMER: {
            value: "timer"
        },
        TIMER_COMPLETE: {
            value: "timerComplete"
        }
    });
    var wq = Vn(2012);
    wq.da = P(wq, "flash.external.ExternalInterface");
    Object.defineProperty(wq.da, "available", {
        get: We
    });
    Q(wq.da, "marshallExceptions", "Boolean", !1);
    Object.defineProperty(wq.da, "objectID", {
        get: function() {
            return Xe.c.getName()
        }
    });
    wq.da.addCallback = function(a, b) {
        Ze(S(a, "String"), null, S(b, "Function"), wq.By)
    };
    wq.By = function() {
        if (wq.da.marshallExceptions) throw Error("Error in ActionScript");
        return null
    };
    wq.da.call = function(a, b) {
        return af(S(a, "String"), Array.prototype.slice.call(arguments, 1), wq.zy)
    };
    wq.zy = function(a) {
        if (wq.da.marshallExceptions) throw new Ui(new ro(String(a)));
        return null
    };
    var xq = function() {
        Object.defineProperty(this, "__swiffy_v", {
            get: function() {
                return this.ve()
            }
        })
    };
    xq.prototype.ve = function() {
        return new Se
    };
    P(xq, "flash.filters.BitmapFilter");
    xq.prototype.clone = function() {
        return new xq
    };
    xq.prototype.toString = function() {
        return "[object BitmapFilter]"
    };
    var yq = P(function() {}, "flash.filters.BitmapFilterQuality");
    Object.defineProperties(yq, {
        HIGH: {
            value: 3
        },
        LOW: {
            value: 1
        },
        MEDIUM: {
            value: 2
        }
    });
    var zq = P(function() {}, "flash.filters.BitmapFilterType");
    Object.defineProperties(zq, {
        FULL: {
            value: "full"
        },
        INNER: {
            value: "inner"
        },
        OUTER: {
            value: "outer"
        }
    });
    var Aq = function() {
            if (!this.__swiffy_d) throw L(2012, bn(this).localName);
            Tp.call(this)
        },
        Bq = P(Aq, "flash.display.DisplayObject", Tp, [up]);
    Vp(Aq, "enterFrame", "exitFrame");
    M(Bq, "localToGlobal", function(a) {
        a = S(a, "flash.geom.Point");
        a = new Uc(20 * a.x, 20 * a.y);
        a.ja(this.__swiffy_d.Da());
        return new Cq(a.x / 20, a.y / 20)
    });
    M(Bq, "globalToLocal", function(a) {
        a = S(a, "flash.geom.Point");
        a = new Uc(20 * a.x, 20 * a.y);
        a.ja(this.__swiffy_d.wc());
        return new Cq(a.x / 20, a.y / 20)
    });
    Object.defineProperty(Aq.prototype, "x", {
        get: function() {
            return this.__swiffy_d.Fa().p / 20
        },
        set: function(a) {
            var b = this.__swiffy_d,
                c = b.Fa();
            b.setTransform(c.Jd(20 * a - c.p, 0));
            b.hb()
        }
    });
    Object.defineProperty(Aq.prototype, "y", {
        get: function() {
            return this.__swiffy_d.Fa().q / 20
        },
        set: function(a) {
            var b = this.__swiffy_d,
                c = b.Fa();
            b.setTransform(c.Jd(0, 20 * a - c.q));
            b.hb()
        }
    });
    Object.defineProperty(Aq.prototype, "alpha", {
        get: function() {
            return (256 * this.__swiffy_d.Wb.sa | 0) / 256
        },
        set: function(a) {
            var b = this.__swiffy_d,
                c = b.Wb;
            b.Nc(new id(c.Ca, c.xa, c.Ba, c.wa, c.Aa, c.va, a, c.ya));
            b.hb()
        }
    });
    Object.defineProperty(Aq.prototype, "visible", {
        get: function() {
            return this.__swiffy_d.ze
        },
        set: function(a) {
            this.__swiffy_d.ok(Boolean(a))
        }
    });
    Object.defineProperty(Aq.prototype, "rotation", {
        get: function() {
            return -180 * this.__swiffy_d.dd().angle / Math.PI
        },
        set: function(a) {
            var b = this.__swiffy_d;
            b.dd().angle = -a * Math.PI / 180;
            b.Ah();
            b.hb()
        }
    });
    Object.defineProperty(Aq.prototype, "width", {
        get: function() {
            return this.__swiffy_d.Ia()
        },
        set: function(a) {
            var b = this.__swiffy_d;
            b.vo(Number(a));
            b.hb()
        }
    });
    Object.defineProperty(Aq.prototype, "height", {
        get: function() {
            return this.__swiffy_d.Xa()
        },
        set: function(a) {
            var b = this.__swiffy_d;
            b.uo(Number(a));
            b.hb()
        }
    });
    Object.defineProperty(Aq.prototype, "scaleX", {
        get: function() {
            return this.__swiffy_d.dd().fe
        },
        set: function(a) {
            var b = this.__swiffy_d;
            b.dd().fe = a;
            b.Ah();
            b.hb()
        }
    });
    Object.defineProperty(Aq.prototype, "scaleY", {
        get: function() {
            return this.__swiffy_d.dd().sf
        },
        set: function(a) {
            var b = this.__swiffy_d;
            b.dd().sf = a;
            b.Ah();
            b.hb()
        }
    });
    Object.defineProperty(Aq.prototype, "mouseX", {
        get: function() {
            var a = this.__swiffy_d,
                b = a.c.lc.clone();
            b.ja(a.wc());
            return b.x / 20
        }
    });
    Object.defineProperty(Aq.prototype, "mouseY", {
        get: function() {
            var a = this.__swiffy_d,
                b = a.c.lc.clone();
            b.ja(a.wc());
            return b.y / 20
        }
    });
    Object.defineProperty(Aq.prototype, "root", {
        get: function() {
            for (var a = this.__swiffy_d; a && !a.Mj && a != a.c.ha;)
                if (a.getParent())
                    if (a == a.c.ub) break;
                    else a = a.getParent();
            else a = null;
            return a ? a.ea : null
        }
    });
    Object.defineProperty(Aq.prototype, "parent", {
        get: function() {
            var a = this.__swiffy_d.getParent();
            return a ? a.ea : null
        }
    });
    Object.defineProperty(Aq.prototype, "name", {
        get: function() {
            return this.__swiffy_d.getName()
        },
        set: function(a) {
            this.__swiffy_d.jc(a)
        }
    });
    Object.defineProperty(Aq.prototype, "loaderInfo", {
        get: function() {
            return this.__swiffy_d.en().xf
        }
    });
    Object.defineProperty(Aq.prototype, "stage", {
        get: function() {
            var a = this.__swiffy_d;
            return this.root ? a.c.ha.ea : null
        }
    });
    Object.defineProperty(Aq.prototype, "transform", {
        get: function() {
            return new Dq(this)
        },
        set: function(a) {
            a = S(a, "flash.geom.Transform");
            a = a.__swiffy_d;
            var b = this.__swiffy_d;
            b.setTransform(a.Fa());
            b.Nc(a.Wb);
            b.hb()
        }
    });
    Object.defineProperty(Aq.prototype, "filters", {
        get: function() {
            for (var a = [], b = this.__swiffy_d.Fb, c = 0; c < b.length; c++) a.push(b[c].pg());
            return a
        },
        set: function(a) {
            for (var b = this.__swiffy_d, c = [], d = 0; d < a.length; d++) {
                var e = a[d].__swiffy_v;
                c.push(e ? e : new Se)
            }
            b.Eg(c)
        }
    });
    Object.defineProperty(Aq.prototype, "mask", {
        get: function() {
            var a = this.__swiffy_d.Oc;
            return a ? a.ea : null
        },
        set: function(a) {
            a = S(a, "flash.display.DisplayObject");
            this.__swiffy_d.Nf(a.__swiffy_d)
        }
    });
    var Eq = function(a, b, c) {
            Aq.call(this);
            a && (this.bitmapData = a);
            this.pixelSnapping = b;
            this.smoothing = c
        },
        vi = P(Eq, "flash.display.Bitmap", Aq);
    Object.defineProperty(Eq.prototype, "bitmapData", {
        get: function() {
            var a = this.__swiffy_d.pc;
            return a ? a.ea : null
        },
        set: function(a) {
            a = S(a, "flash.display.BitmapData");
            this.__swiffy_d.wz(a ? a.__swiffy_d : null)
        }
    });
    Object.defineProperty(Eq.prototype, "pixelSnapping", {
        get: function() {
            return this.__swiffy_d.bt
        },
        set: function(a) {
            this.__swiffy_d.bt = S(a, "String")
        }
    });
    Object.defineProperty(Eq.prototype, "smoothing", {
        get: function() {
            return this.__swiffy_d.smoothing
        },
        set: function(a) {
            this.__swiffy_d.smoothing = S(a, "Boolean")
        }
    });
    ti(Eq, function(a, b) {
        return new pf(null, a, b)
    });
    var Fq = function() {
        Aq.call(this);
        var a = this.__swiffy_d;
        a.jd |= 127;
        a.ak();
        Q(this, "focusRect", "Boolean", null)
    };
    P(Fq, "flash.display.InteractiveObject", Aq);
    Object.defineProperty(Fq.prototype, "tabIndex", {
        get: function() {
            return this.__swiffy_d.tabIndex
        },
        set: function(a) {
            this.__swiffy_d.tabIndex = S(a, "int")
        }
    });
    Object.defineProperty(Fq.prototype, "tabEnabled", {
        get: function() {
            return this.__swiffy_d.Wo()
        },
        set: function(a) {
            this.__swiffy_d.eg = S(a, "Boolean")
        }
    });
    Object.defineProperty(Fq.prototype, "mouseEnabled", {
        get: function() {
            return this.__swiffy_d.Yg
        },
        set: function(a) {
            return this.__swiffy_d.Vp(!!a)
        }
    });
    Object.defineProperty(Fq.prototype, "doubleClickEnabled", {
        get: function() {
            return this.__swiffy_d.Xm
        },
        set: function(a) {
            return this.__swiffy_d.zz(!!a)
        }
    });
    var Gq = function(a, b, c, d) {
            a = new gq(a, b, !1);
            b = fq(a);
            d.Qf && (b.Qf = d.Qf.ea);
            c instanceof Aq && (b.nq = c.mouseX, b.oq = c.mouseY, c = c.__swiffy_d, b.kq = c.c.lc.x / 20, b.lq = c.c.lc.y / 20, b.mq = c.c.Ae);
            return a
        },
        Hq = function(a) {
            a = new Ep(a, !1, !1);
            Fp(a).Cl = !0;
            return a
        },
        Iq = function(a) {
            return new Ep(a, !0, !1)
        },
        Jq = {};
    Jq[27] = oa(Iq, Gp.ADDED, !0, !1);
    Jq[21] = oa(Hq, Gp.ADDED_TO_STAGE);
    Jq[28] = oa(Iq, Gp.REMOVED, !0, !1);
    Jq[26] = oa(Hq, Gp.REMOVED_FROM_STAGE);
    Jq[5] = oa(Hq, Gp.UNLOAD);
    Jq[11] = oa(Gq, hq.CLICK, !0);
    Jq[25] = oa(Gq, hq.DOUBLE_CLICK, !0);
    Jq[2] = oa(Gq, hq.MOUSE_UP, !0);
    Jq[3] = oa(Gq, hq.MOUSE_DOWN, !0);
    Jq[8] = oa(Gq, hq.ROLL_OUT, !1);
    Jq[9] = oa(Gq, hq.ROLL_OVER, !1);
    Jq[24] = oa(Gq, hq.MOUSE_MOVE, !1);
    Jq[22] = oa(Gq, hq.MOUSE_OUT, !1);
    Jq[23] = oa(Gq, hq.MOUSE_OVER, !1);
    var Kq = function() {
        Fq.call(this)
    };
    P(Kq, "flash.display.DisplayObjectContainer", Fq);
    Object.defineProperty(Kq.prototype, "tabChildren", {
        value: !0,
        writable: !0
    });
    Object.defineProperty(Kq.prototype, "numChildren", {
        get: function() {
            return this.__swiffy_d.kl()
        }
    });
    Object.defineProperty(Fq.prototype, "mouseChildren", {
        get: function() {
            return this.__swiffy_d.xn
        },
        set: function(a) {
            return this.__swiffy_d.Ez(!!a)
        }
    });
    Kq.prototype.addChild = function(a) {
        if (!a) throw L(2007, "child");
        var b = this.__swiffy_d;
        b.Xf(a.__swiffy_d, b.kl())
    };
    Kq.prototype.addChildAt = function(a, b) {
        if (!a) throw L(2007, "child");
        this.__swiffy_d.Xf(a.__swiffy_d, b | 0)
    };
    Kq.prototype.contains = function(a) {
        if (!a) throw L(2007, "child");
        return this.__swiffy_d.contains(a.__swiffy_d)
    };
    Kq.prototype.getChildAt = function(a) {
        return (a = this.__swiffy_d.$f(a | 0)) ? a.ea : a
    };
    Kq.prototype.getChildByName = function(a) {
        return (a = this.__swiffy_d.Cw(a)) ? a.ea : a
    };
    Kq.prototype.getChildIndex = function(a) {
        return this.__swiffy_d.Kh(a.__swiffy_d)
    };
    Kq.prototype.removeChild = function(a) {
        if (!a) throw L(2007, "child");
        this.__swiffy_d.Ei(a.__swiffy_d)
    };
    Kq.prototype.removeChildAt = function(a) {
        var b = this.__swiffy_d;
        if (a = b.$f(a | 0)) return b.Ei(a), a.ea
    };
    Kq.prototype.setChildIndex = function(a, b) {
        if (!a) throw L(2007, "child");
        this.__swiffy_d.Xf(a.__swiffy_d, b | 0)
    };
    Kq.prototype.swapChildren = function(a, b) {
        if (!a || !b) throw L(2007, "child");
        this.swapChildrenAt(this.getChildIndex(a), this.getChildIndex(b))
    };
    Kq.prototype.swapChildrenAt = function(a, b) {
        var c = this.__swiffy_d,
            d = c.$f(a | 0),
            e = c.$f(b | 0);
        d && e && (c.Xf(d, b | 0), c.Xf(e, a | 0))
    };
    var Lq = function() {
            Fq.call(this);
            R(this, "content", null);
            var a = new $p;
            R(this, "contentLoaderInfo", a);
            a = a.__swiffy_d;
            a.vx(Xe.yg().je);
            a.Cs = this;
            R(this, "uncaughtErrorEvents", null)
        },
        Mq = P(Lq, "flash.display.Loader", Kq);
    (new sj(0, 0, null, null)).mo(Mq);
    Lq.prototype.close = function() {
        T(this, "close")
    };
    Lq.prototype.load = function(a, b) {
        a = S(a, "flash.net.URLRequest");
        b = S(b, "flash.system.LoaderContext", null);
        T(this, "load");
        var c = a.url,
            d = this.contentLoaderInfo,
            e = d.__swiffy_d,
            f = Ek(c),
            h;
        for (h in f) {
            var k = f[h];
            Object.defineProperty(e.sp, h, {
                value: k.length ? k[k.length - 1] : void 0,
                configurable: !0,
                enumerable: !0
            })
        }
        var n = this.__swiffy_d,
            f = new xd;
        f.yc = function(a, b) {
            n.hd(0) && (n.Zd(0), d.dispatchEvent(new Ep(Gp.UNLOAD)));
            var f = n.c,
                h = new nd,
                k = od(a, f, h);
            d.dispatchEvent(new Ep(Gp.OPEN));
            d.dispatchEvent(new kq(lq.PROGRESS, !1, !1, 1024, 1024));
            f.Gj(h, function() {
                var a = new z(k, f, null);
                a.up(!0);
                a.Dd = !0;
                a.jc(f.fi());
                a.dp(e);
                a.Ja();
                e.Ig(c);
                e.content = a.ea;
                n.Hd(a, 0);
                f.fb();
                n.c.pa().cm(e, b);
                f.fb()
            })
        };
        f.ee = function() {};
        Cd(c, n.c, a.method, a.data ? a.data.toString() : null, f, Nq(a))
    };
    Lq.prototype.loadBytes = function(a, b) {
        S(a, "flash.utils.ByteArray");
        S(b, "flash.system.LoaderContext", null);
        T(this, "loadBytes")
    };
    Lq.prototype.loadFilePromise = function(a, b) {
        S(a, "flash.desktop.IFilePromise");
        S(b, "flash.system.LoaderContext", null);
        T(this, "loadFilePromise")
    };
    Lq.prototype.unload = function() {
        T(this, "unload")
    };
    Lq.prototype.unloadAndStop = function(a) {
        S(a, "Boolean", !0);
        T(this, "unloadAndStop")
    };
    var Oq = function() {
        Aq.call(this);
        R(this, "graphics", sp.create(this.__swiffy_d))
    };
    P(Oq, "flash.display.Shape", Aq);
    ti(Oq, function(a, b) {
        return new sf(a, b)
    });
    var Pq = function() {
        Fq.call(this);
        this.ud = {}
    };
    P(Pq, "flash.display.SimpleButton", Fq);
    hi(Pq, new Ai(0));
    Pq.prototype.enabled = !0;
    Pq.prototype.useHandCursor = !0;
    Object.defineProperty(Pq.prototype, "upState", {
        get: function() {
            return this.ud[1]
        },
        set: function(a) {
            var b = this.__swiffy_d;
            this.ud[1] = a;
            b.Il(1, a.__swiffy_d)
        }
    });
    Object.defineProperty(Pq.prototype, "overState", {
        get: function() {
            return this.ud[2]
        },
        set: function(a) {
            var b = this.__swiffy_d;
            this.ud[2] = a;
            b.Il(2, a.__swiffy_d)
        }
    });
    Object.defineProperty(Pq.prototype, "downState", {
        get: function() {
            return this.ud[4]
        },
        set: function(a) {
            var b = this.__swiffy_d;
            this.ud[4] = a;
            b.Il(4, a.__swiffy_d)
        }
    });
    Object.defineProperty(Pq.prototype, "hitTestState", {
        get: function() {
            return this.ud[8]
        },
        set: function(a) {
            var b = this.__swiffy_d;
            this.ud[8] = a;
            b.Il(8, a.__swiffy_d)
        }
    });
    var Qq = function() {
            Fq.call(this);
            var a = this.__swiffy_d;
            a.$t(!1);
            R(this, "graphics", sp.create(a))
        },
        Rq = P(Qq, "flash.display.Sprite", Kq);
    hi(Qq, new sj(0, 0, null, null));
    Object.defineProperty(Qq.prototype, "buttonMode", {
        set: function(a) {
            this.__swiffy_d.$t(Boolean(a))
        },
        get: function() {
            return this.__swiffy_d.qi
        }
    });
    Object.defineProperty(Qq.prototype, "soundTransform", {
        set: function(a) {
            S(a, "flash.media.SoundTransform");
            T(this, "soundTransform")
        },
        get: function() {
            T(this, "soundTransform");
            return new Sq
        }
    });
    Qq.prototype.useHandCursor = !0;
    var Tq = function() {
        Qq.call(this)
    };
    P(Tq, "flash.display.MovieClip", Qq);
    Tq.prototype.addFrameScript = function(a, b) {
        for (var c = 0; c < arguments.length; c += 2) this.__swiffy_d.Dr[arguments[c]] = arguments[c + 1]
    };
    Tq.prototype.stop = function() {
        this.__swiffy_d.stop()
    };
    Tq.prototype.play = function() {
        this.__swiffy_d.play()
    };
    Tq.prototype.prevScene = function() {
        this.__swiffy_d.pz()
    };
    Tq.prototype.nextScene = function() {
        this.__swiffy_d.nz()
    };
    Tq.prototype.prevFrame = function() {
        this.__swiffy_d.Ko()
    };
    Tq.prototype.nextFrame = function() {
        this.__swiffy_d.xj()
    };
    var Uq = function(a, b, c, d) {
        var e = a.__swiffy_d,
            f = e.Tg(b, c);
        if (l(f)) e.c.pa().uf(function() {
            e.Af(f, d)
        });
        else if (0 != b) throw L(2109, b, c);
    };
    Tq.prototype.gotoAndStop = function(a, b) {
        Uq(this, a, b, !1)
    };
    Tq.prototype.gotoAndPlay = function(a, b) {
        Uq(this, a, b, !0)
    };
    Object.defineProperty(Tq.prototype, "currentFrame", {
        get: function() {
            return this.__swiffy_d.ib + 1
        }
    });
    Object.defineProperty(Tq.prototype, "framesLoaded", {
        get: function() {
            return this.__swiffy_d.definition.frameCount
        }
    });
    Object.defineProperty(Tq.prototype, "totalFrames", {
        get: function() {
            return this.__swiffy_d.definition.frameCount
        }
    });
    Object.defineProperty(Tq.prototype, "cacheAsBitmap", {
        get: function() {
            return this.__swiffy_d.Qt()
        },
        set: function(a) {
            this.__swiffy_d.$m(Boolean(a))
        }
    });
    var Wq = function() {
            Fq.call(this);
            R(this, "allowsFullScreen", !1);
            R(this, "allowsFullScreenInteractive", !1);
            Q(this, "autoOrients", "Boolean", !1);
            Q(this, "color", "uint", 0);
            Q(this, "colorCorrection", "String", "default");
            R(this, "colorCorrectionSupport", "unsupported");
            R(this, "contentsScaleFactor", 1);
            R(this, "deviceOrientation", "unknown");
            Q(this, "displayState", "String", Bp.NORMAL);
            Q(this, "focus", "flash.display.InteractiveObject", null);
            Q(this, "fullScreenSourceRect", "flash.geom.Rectangle", null);
            Q(this, "mouseLock", "Boolean", !1);
            R(this, "nativeWindow", null);
            R(this, "orientation", "unknown");
            Q(this, "quality", "String", Cp.HIGH);
            Q(this, "showDefaultContextMenu", "Boolean", !0);
            R(this, "softKeyboardRect", new Vq(0, 0, 0, 0));
            R(this, "stage3Ds", null);
            Q(this, "stageFocusRect", "Boolean", !0);
            R(this, "stageVideos", null);
            R(this, "supportedOrientations", ["default"]);
            R(this, "wmodeGPU", !1)
        },
        Xq = P(Wq, "flash.display.Stage", Kq);
    R(Xq, "supportsOrientationChange", !1);
    Wq.prototype.assignFocus = function(a, b) {
        S(a, "flash.display.InteractiveObject");
        S(b, "String");
        T(this, "assignFocus")
    };
    Wq.prototype.invalidate = function() {
        T(this, "invalidate")
    };
    Wq.prototype.isFocusInaccessible = function() {
        T(this, "isFocusInaccessible");
        return !1
    };
    Wq.prototype.setAspectRatio = function(a) {
        S(a, "String");
        T(this, "setAspectRatio")
    };
    Wq.prototype.setOrientation = function(a) {
        S(a, "String");
        T(this, "setOrientation")
    };
    Object.defineProperty(Wq.prototype, "stageWidth", {
        get: function() {
            var a = this.__swiffy_d;
            return "noScale" == a.pd ? a.Ad : a.ei
        },
        set: function() {}
    });
    Object.defineProperty(Wq.prototype, "stageHeight", {
        get: function() {
            var a = this.__swiffy_d;
            return "noScale" == a.pd ? a.zd : a.di
        },
        set: function() {}
    });
    Object.defineProperty(Wq.prototype, "fullScreenWidth", {
        get: function() {
            T(this, "fullScreenWidth");
            return this.stageWidth
        }
    });
    Object.defineProperty(Wq.prototype, "fullScreenHeight", {
        get: function() {
            T(this, "fullScreenHeight");
            return this.stageHeight
        }
    });
    Object.defineProperty(Wq.prototype, "frameRate", {
        get: function() {
            return this.__swiffy_d.c.un().Qq
        },
        set: function(a) {
            S(a, "Number");
            T(this, "frameRate")
        }
    });
    Object.defineProperty(Wq.prototype, "scaleMode", {
        get: function() {
            return this.__swiffy_d.pd
        },
        set: function(a) {
            a = S(a, "String");
            var b = this.__swiffy_d;
            switch (a) {
                case "showAll":
                case "exactFit":
                case "noBorder":
                case "noScale":
                    break;
                default:
                    throw L(2008, "scaleMode");
            }
            b.du(a)
        }
    });
    Object.defineProperty(Wq.prototype, "align", {
        get: function() {
            var a = this.__swiffy_d.Ue,
                b = "";
            a & 2 && (b += "T");
            a & 8 && (b += "B");
            a & 1 && (b += "L");
            a & 4 && (b += "R");
            return b
        },
        set: function(a) {
            a = S(a, "String");
            this.__swiffy_d.Wt(a)
        }
    });
    var Ce = function(a, b, c, d, e, f, h, k, n, r, t, p) {
        xq.call(this);
        a = S(a, "Number", 4);
        b = S(b, "Number", 45);
        c = S(c, "uint", 16777215);
        d = S(d, "Number", 1);
        e = S(e, "uint", 0);
        f = S(f, "Number", 1);
        h = S(h, "Number", 4);
        k = S(k, "Number", 4);
        n = S(n, "Number", 1);
        r = S(r, "int", 1);
        t = S(t, "String", "inner");
        p = S(p, "Boolean", !1);
        Q(this, "angle", "Number", b);
        Q(this, "blurX", "Number", h);
        Q(this, "blurY", "Number", k);
        Q(this, "distance", "Number", a);
        Q(this, "highlightAlpha", "Number", d);
        Q(this, "highlightColor", "uint", c);
        Q(this, "knockout", "Boolean", p);
        Q(this, "quality",
            "int", r);
        Q(this, "shadowAlpha", "Number", f);
        Q(this, "shadowColor", "uint", e);
        Q(this, "strength", "Number", n);
        Q(this, "type", "String", t)
    };
    P(Ce, "flash.filters.BevelFilter", xq);
    Ce.prototype.ve = function() {
        return new Ae(this.angle * Math.PI / 180, hd(this.highlightColor, this.highlightAlpha), hd(this.shadowColor, this.shadowAlpha), this.distance, this.strength, this.quality, this.blurX, this.blurY, ye(this.type, this.knockout))
    };
    Ce.prototype.clone = function() {
        return new Ce(this.distance, this.angle, this.highlightColor, this.highlightAlpha, this.shadowColor, this.shadowAlpha, this.blurX, this.blurY, this.strength, this.quality, this.type, this.knockout)
    };
    var qe = function(a, b, c) {
        xq.call(this);
        a = S(a, "Number", 4);
        b = S(b, "Number", 4);
        c = S(c, "int", 1);
        Q(this, "blurX", "Number", a);
        Q(this, "blurY", "Number", b);
        Q(this, "quality", "int", c)
    };
    P(qe, "flash.filters.BlurFilter", xq);
    qe.prototype.ve = function() {
        return new me(this.quality, this.blurX, this.blurY)
    };
    qe.prototype.clone = function() {
        return new qe(this.blurX, this.blurY, this.quality)
    };
    var te = function(a) {
        xq.call(this);
        var b;
        Object.defineProperty(this, "matrix", {
            get: function() {
                return b
            },
            set: function(a) {
                b = S(a, "Array");
                if (null != b)
                    if (20 < b.length) b.length = 20;
                    else
                        for (; 20 > b.length;) b.push(0);
                else b = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
            }
        });
        this.matrix = a
    };
    P(te, "flash.filters.ColorMatrixFilter", xq);
    te.prototype.ve = function() {
        return new re(this.matrix)
    };
    te.prototype.clone = function() {
        return new te(this.matrix.slice(0))
    };
    var Fe = function(a, b, c, d, e, f, h, k, n) {
        xq.call(this);
        a = S(a, "Number", 0);
        b = S(b, "Number", 0);
        d = S(d, "Number", 1);
        e = S(e, "Number", 0);
        f = S(f, "Boolean", !0);
        h = S(h, "Boolean", !0);
        var r;
        Object.defineProperty(this, "alpha", {
            get: function() {
                return r
            },
            set: function(a) {
                r = Math.min(1, Math.floor(255 * S(a, "Number", 0)) / 255)
            }
        });
        this.alpha = n;
        Q(this, "bias", "Number", e);
        Q(this, "clamp", "Boolean", h);
        var t;
        Object.defineProperty(this, "color", {
            get: function() {
                return t
            },
            set: function(a) {
                t = a & 16777215
            }
        });
        this.color = k;
        Q(this, "divisor", "Number",
            d);
        Q(this, "matrixX", "Number", a);
        Q(this, "matrixY", "Number", b);
        var p = [];
        Object.defineProperty(this, "matrix", {
            get: function() {
                return p
            },
            set: function(a) {
                p = S(a, "Array");
                a = this.matrixY * this.matrixX;
                null != p || (p = []);
                if (p.length > a) p.length = a;
                else
                    for (; p.length < a;) p.push(0)
            }
        });
        l(c) && (this.matrix = c);
        Q(this, "preserveAlpha", "Boolean", f)
    };
    P(Fe, "flash.filters.ConvolutionFilter", xq);
    Fe.prototype.ve = function() {
        return new De(this.bias, this.clamp, hd(this.color, this.alpha), this.divisor, this.matrix, this.matrixX, this.matrixY, this.preserveAlpha)
    };
    Fe.prototype.clone = function() {
        return new Fe(this.matrixX, this.matrixY, this.matrix, this.divisor, this.bias, this.preserveAlpha, this.clamp, this.color, this.alpha)
    };
    var Yq = function(a, b, c, d, e, f, h, k, n) {
        xq.call(this);
        c = S(c, "uint", 0);
        d = S(d, "uint", 0);
        e = S(e, "Number", 0);
        f = S(f, "Number", 0);
        h = S(h, "String", "wrap");
        var r;
        Object.defineProperty(this, "alpha", {
            get: function() {
                return r
            },
            set: function(a) {
                r = Math.min(1, Math.floor(255 * S(a, "Number", 0)) / 255)
            }
        });
        this.alpha = n;
        var t;
        Object.defineProperty(this, "color", {
            get: function() {
                return t
            },
            set: function(a) {
                t = S(a, "uint", 0) % 16777216
            }
        });
        this.color = k;
        Q(this, "componentX", "uint", c);
        Q(this, "componentY", "uint", d);
        Q(this, "mapBitmap", "flash.display.BitmapData",
            a);
        var p;
        Object.defineProperty(this, "mapPoint", {
            get: function() {
                return p
            },
            set: function(a) {
                a = S(a, "flash.geom.Point", null);
                p = null != a ? new Cq(a.x, a.y) : new Cq(0, 0)
            }
        });
        this.mapPoint = b;
        Q(this, "mode", "String", h);
        Q(this, "scaleX", "Number", e);
        Q(this, "scaleY", "Number", f)
    };
    P(Yq, "flash.filters.DisplacementMapFilter", xq);
    Yq.prototype.clone = function() {
        return new Yq(this.mapBitmap, this.mapPoint, this.componentX, this.componentY, this.scaleX, this.scaleY, this.mode, this.color, this.alpha)
    };
    var Zq = function() {};
    Zq.da = P(Zq, "flash.filters.DisplacementMapFilterMode");
    Object.defineProperties(Zq.da, {
        CLAMP: {
            value: "clamp"
        },
        COLOR: {
            value: "color"
        },
        IGNORE: {
            value: "ignore"
        },
        WRAP: {
            value: "wrap"
        }
    });
    var Je = function(a, b, c, d, e, f, h, k, n, r, t) {
        xq.call(this);
        a = S(a, "Number", 4);
        b = S(b, "Number", 45);
        c = S(c, "uint", 0);
        d = S(d, "Number", 1);
        e = S(e, "Number", 4);
        f = S(f, "Number", 4);
        h = S(h, "Number", 1);
        k = S(k, "int", 1);
        n = S(n, "Boolean", !1);
        r = S(r, "Boolean", !1);
        t = S(t, "Boolean", !1);
        var p;
        Object.defineProperty(this, "alpha", {
            get: function() {
                return p
            },
            set: function(a) {
                p = Math.min(1, Math.floor(255 * S(a, "Number", 0)) / 255)
            }
        });
        this.alpha = d;
        Q(this, "angle", "Number", b);
        Q(this, "blurX", "Number", e);
        Q(this, "blurY", "Number", f);
        var s;
        Object.defineProperty(this,
            "color", {
                get: function() {
                    return s
                },
                set: function(a) {
                    s = S(a, "uint", 0) % 16777216
                }
            });
        this.color = c;
        Q(this, "distance", "Number", a);
        Q(this, "hideObject", "Boolean", t);
        Q(this, "inner", "Boolean", n);
        Q(this, "knockout", "Boolean", r);
        Q(this, "quality", "int", k);
        Q(this, "strength", "Number", h)
    };
    P(Je, "flash.filters.DropShadowFilter", xq);
    Je.prototype.ve = function() {
        return new Ge(this.angle * Math.PI / 180, hd(this.color, this.alpha), this.distance, this.strength, this.quality, this.blurX, this.blurY, He(this.hideObject, this.inner, this.knockout))
    };
    Je.prototype.clone = function() {
        return new Je(this.distance, this.angle, this.color, this.alpha, this.blurX, this.blurY, this.strength, this.quality, this.inner, this.knockout, this.hideObject)
    };
    var $q = function(a, b, c, d, e, f, h, k) {
        xq.call(this);
        c = S(c, "Number", 6);
        d = S(d, "Number", 6);
        e = S(e, "Number", 2);
        f = S(f, "int", 1);
        h = S(h, "Boolean", !1);
        k = S(k, "Boolean", !1);
        var n;
        Object.defineProperty(this, "alpha", {
            get: function() {
                return n
            },
            set: function(a) {
                n = Math.min(1, Math.floor(255 * S(a, "Number", 1)) / 255)
            }
        });
        this.alpha = b;
        Q(this, "blurX", "Number", c);
        Q(this, "blurY", "Number", d);
        var r;
        Object.defineProperty(this, "color", {
            get: function() {
                return r
            },
            set: function(a) {
                r = S(a, "uint", 16711680) % 16777216
            }
        });
        this.color = a;
        Q(this, "inner",
            "Boolean", h);
        Q(this, "knockout", "Boolean", k);
        Q(this, "quality", "int", f);
        Q(this, "strength", "Number", e)
    };
    P($q, "flash.filters.GlowFilter", xq);
    $q.prototype.ve = function() {
        return new Ge(0, hd(this.color, this.alpha), 0, this.strength, this.quality, this.blurX, this.blurY, He(!1, this.inner, this.knockout))
    };
    $q.prototype.clone = function() {
        return new $q(this.color, this.alpha, this.blurX, this.blurY, this.strength, this.quality, this.inner, this.knockout)
    };
    var Ne = function(a, b, c, d, e, f, h, k, n, r, t) {
        xq.call(this);
        a = S(a, "Number", 4);
        b = S(b, "Number", 45);
        f = S(f, "Number", 4);
        h = S(h, "Number", 4);
        k = S(k, "Number", 1);
        n = S(n, "int", 1);
        r = S(r, "String", "inner");
        t = S(t, "Boolean", !1);
        var p = [];
        Object.defineProperty(this, "colors", {
            get: function() {
                return p
            },
            set: function(a) {
                p = S(a, "Array", []);
                l(p) || (p = []);
                for (a = 0; a < p.length; a++) p[a] = S(p[a], "uint", 16711680) % 16777216
            }
        });
        this.colors = c;
        var s = [];
        Object.defineProperty(this, "alphas", {
            get: function() {
                return s
            },
            set: function(a) {
                s = S(a, "Array", []);
                l(s) || (s = []);
                a = l(p) ? p.length : 0;
                for (var b = 0; b < a; b++) s[b] = Math.min(1, Math.floor(255 * S(s[b], "Number", 1)) / 255);
                s.length = a
            }
        });
        this.alphas = d;
        var u = [];
        Object.defineProperty(this, "ratios", {
            get: function() {
                return u
            },
            set: function(a) {
                u = S(a, "Array", []);
                l(u) || (u = []);
                a = l(p) ? p.length : 0;
                for (var b = 0; b < a; b++) u[b] = Math.floor(S(u[b], "Number", 0)), 0 > u[b] ? u[b] = 0 : 255 < u[b] && (u[b] = 255);
                u.length = a
            }
        });
        this.ratios = e;
        Q(this, "angle", "Number", b);
        Q(this, "blurX", "Number", f);
        Q(this, "blurY", "Number", h);
        Q(this, "distance", "Number", a);
        Q(this, "knockout", "Boolean", t);
        Q(this, "quality", "int", n);
        Q(this, "strength", "Number", k);
        Q(this, "type", "String", r)
    };
    P(Ne, "flash.filters.GradientBevelFilter", xq);
    Ne.prototype.ve = function() {
        return new Ke(this.angle * Math.PI / 180, this.colors, this.alphas, this.ratios, this.distance, this.strength, this.quality, this.blurX, this.blurY, ye(this.type, this.knockout))
    };
    Ne.prototype.clone = function() {
        return new Ne(this.distance, this.angle, this.colors, this.alphas, this.ratios, this.blurX, this.blurY, this.strength, this.quality, this.type, this.knockout)
    };
    var Re = function(a, b, c, d, e, f, h, k, n, r, t) {
        xq.call(this);
        a = S(a, "Number", 4);
        b = S(b, "Number", 45);
        f = S(f, "Number", 4);
        h = S(h, "Number", 4);
        k = S(k, "Number", 1);
        n = S(n, "int", 1);
        r = S(r, "String", "inner");
        t = S(t, "Boolean", !1);
        var p = [];
        Object.defineProperty(this, "colors", {
            get: function() {
                return p
            },
            set: function(a) {
                p = S(a, "Array", []);
                l(p) || (p = []);
                for (a = 0; a < p.length; a++) p[a] = S(p[a], "uint", 16711680) % 16777216
            }
        });
        this.colors = c;
        var s = [];
        Object.defineProperty(this, "alphas", {
            get: function() {
                return s
            },
            set: function(a) {
                s = S(a, "Array", []);
                l(s) || (s = []);
                a = l(p) ? p.length : 0;
                for (var b = 0; b < a; b++) s[b] = Math.min(1, Math.floor(255 * S(s[b], "Number", 1)) / 255);
                s.length = a
            }
        });
        this.alphas = d;
        var u = [];
        Object.defineProperty(this, "ratios", {
            get: function() {
                return u
            },
            set: function(a) {
                u = S(a, "Array", []);
                l(u) || (u = []);
                a = l(p) ? p.length : 0;
                for (var b = 0; b < a; b++) u[b] = Math.floor(S(u[b], "Number", 0)), 0 > u[b] ? u[b] = 0 : 255 < u[b] && (u[b] = 255);
                u.length = a
            }
        });
        this.ratios = e;
        Q(this, "angle", "Number", b);
        Q(this, "blurX", "Number", f);
        Q(this, "blurY", "Number", h);
        Q(this, "distance", "Number", a);
        Q(this, "knockout", "Boolean", t);
        Q(this, "quality", "int", n);
        Q(this, "strength", "Number", k);
        Q(this, "type", "String", r)
    };
    P(Re, "flash.filters.GradientGlowFilter", xq);
    Re.prototype.ve = function() {
        return new Oe(this.angle * Math.PI / 180, this.colors, this.alphas, this.ratios, this.distance, this.strength, this.quality, this.blurX, this.blurY, ye(this.type, this.knockout))
    };
    Re.prototype.clone = function() {
        return new Re(this.distance, this.angle, this.colors, this.alphas, this.ratios, this.blurX, this.blurY, this.strength, this.quality, this.type, this.knockout)
    };
    var ar = function(a, b, c, d, e, f, h, k) {
        a = S(a, "Number", 1);
        b = S(b, "Number", 1);
        c = S(c, "Number", 1);
        d = S(d, "Number", 1);
        e = S(e, "Number", 0);
        f = S(f, "Number", 0);
        h = S(h, "Number", 0);
        k = S(k, "Number", 0);
        Object.defineProperty(this, "__swiffy_v", {
            writable: !0,
            value: new id(a, e, b, f, c, h, d, k)
        })
    };
    P(ar, "flash.geom.ColorTransform");
    var br = function(a) {
        return new ar(a.Ca, a.Ba, a.Aa, a.sa, a.xa, a.wa, a.va, a.ya)
    };
    Object.defineProperty(ar.prototype, "redMultiplier", {
        get: function() {
            return this.__swiffy_v.Ca
        },
        set: function(a) {
            a = S(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = new id(a, b.xa, b.Ba, b.wa, b.Aa, b.va, b.sa, b.ya)
        }
    });
    Object.defineProperty(ar.prototype, "greenMultiplier", {
        get: function() {
            return this.__swiffy_v.Ba
        },
        set: function(a) {
            a = S(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = new id(b.Ca, b.xa, a, b.wa, b.Aa, b.va, b.sa, b.ya)
        }
    });
    Object.defineProperty(ar.prototype, "blueMultiplier", {
        get: function() {
            return this.__swiffy_v.Aa
        },
        set: function(a) {
            a = S(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = new id(b.Ca, b.xa, b.Ba, b.wa, a, b.va, b.sa, b.ya)
        }
    });
    Object.defineProperty(ar.prototype, "alphaMultiplier", {
        get: function() {
            return this.__swiffy_v.sa
        },
        set: function(a) {
            a = S(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = new id(b.Ca, b.xa, b.Ba, b.wa, b.Aa, b.va, a, b.ya)
        }
    });
    Object.defineProperty(ar.prototype, "redOffset", {
        get: function() {
            return this.__swiffy_v.xa
        },
        set: function(a) {
            a = S(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = new id(b.Ca, a, b.Ba, b.wa, b.Aa, b.va, b.sa, b.ya)
        }
    });
    Object.defineProperty(ar.prototype, "greenOffset", {
        get: function() {
            return this.__swiffy_v.wa
        },
        set: function(a) {
            a = S(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = new id(b.Ca, b.xa, b.Ba, a, b.Aa, b.va, b.sa, b.ya)
        }
    });
    Object.defineProperty(ar.prototype, "blueOffset", {
        get: function() {
            return this.__swiffy_v.va
        },
        set: function(a) {
            a = S(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = new id(b.Ca, b.xa, b.Ba, b.wa, b.Aa, a, b.sa, b.ya)
        }
    });
    Object.defineProperty(ar.prototype, "alphaOffset", {
        get: function() {
            return this.__swiffy_v.ya
        },
        set: function(a) {
            a = S(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = new id(b.Ca, b.xa, b.Ba, b.wa, b.Aa, b.va, b.sa, a)
        }
    });
    Object.defineProperty(ar.prototype, "color", {
        get: function() {
            return (this.__swiffy_v.xa << 16 | this.__swiffy_v.wa << 8 | this.__swiffy_v.va) >>> 0
        },
        set: function(a) {
            a = S(a, "uint");
            var b = this.__swiffy_v;
            this.__swiffy_v = new id(0, a >> 16 & 255, 0, a >> 8 & 255, 0, a & 255, b.sa, b.ya)
        }
    });
    ar.prototype.concat = function(a) {
        a = S(a, "flash.geom.ColorTransform");
        this.__swiffy_v = this.__swiffy_v.Gn(a.__swiffy_v)
    };
    ar.prototype.toString = function() {
        return "(redMultiplier=" + this.__swiffy_v.Ca + ", greenMultiplier=" + this.__swiffy_v.Ba + ", blueMultiplier=" + this.__swiffy_v.Aa + ", alphaMultiplier=" + this.__swiffy_v.sa + ", redOffset=" + this.__swiffy_v.xa + ", greenOffset=" + this.__swiffy_v.wa + ", blueOffset=" + this.__swiffy_v.va + ", alphaOffset=" + this.__swiffy_v.ya + ")"
    };
    var cr = function(a, b, c, d, e, f) {
        a = S(a, "Number", 1);
        b = S(b, "Number", 0);
        c = S(c, "Number", 0);
        d = S(d, "Number", 1);
        e = S(e, "Number", 0);
        f = S(f, "Number", 0);
        Object.defineProperty(this, "__swiffy_v", {
            writable: !0,
            value: dd(a, b, c, d, e, f)
        })
    };
    P(cr, "flash.geom.Matrix");
    var tp = function(a) {
            a = a.__swiffy_v;
            return a.gd(20 * a.p, 20 * a.q)
        },
        dr = function(a) {
            return new cr(a.n, a.u, a.o, a.l, a.p / 20, a.q / 20)
        };
    Object.defineProperty(cr.prototype, "a", {
        get: function() {
            return this.__swiffy_v.n
        },
        set: function(a) {
            a = S(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = dd(a, b.u, b.o, b.l, b.p, b.q)
        }
    });
    Object.defineProperty(cr.prototype, "b", {
        get: function() {
            return this.__swiffy_v.u
        },
        set: function(a) {
            a = S(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = dd(b.n, a, b.o, b.l, b.p, b.q)
        }
    });
    Object.defineProperty(cr.prototype, "c", {
        get: function() {
            return this.__swiffy_v.o
        },
        set: function(a) {
            a = S(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = dd(b.n, b.u, a, b.l, b.p, b.q)
        }
    });
    Object.defineProperty(cr.prototype, "d", {
        get: function() {
            return this.__swiffy_v.l
        },
        set: function(a) {
            a = S(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = dd(b.n, b.u, b.o, a, b.p, b.q)
        }
    });
    Object.defineProperty(cr.prototype, "tx", {
        get: function() {
            return this.__swiffy_v.p
        },
        set: function(a) {
            a = S(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = b.gd(a, b.q)
        }
    });
    Object.defineProperty(cr.prototype, "ty", {
        get: function() {
            return this.__swiffy_v.q
        },
        set: function(a) {
            a = S(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = b.gd(b.p, a)
        }
    });
    cr.prototype.clone = function() {
        var a = new cr;
        a.__swiffy_v = this.__swiffy_v;
        return a
    };
    cr.prototype.concat = function(a) {
        a = S(a, "flash.geom.Matrix");
        this.__swiffy_v = this.__swiffy_v.multiply(a.__swiffy_v)
    };
    cr.prototype.copyColumnFrom = function(a, b) {
        a = S(a, "uint");
        b = S(b, "flash.geom.Vector3D");
        var c = this.__swiffy_v.n,
            d = this.__swiffy_v.u,
            e = this.__swiffy_v.o,
            f = this.__swiffy_v.l,
            h = this.__swiffy_v.p,
            k = this.__swiffy_v.q;
        switch (a) {
            case 0:
                c = b.x;
                d = b.y;
                break;
            case 1:
                e = b.x;
                f = b.y;
                break;
            case 2:
                h = b.x;
                k = b.y;
                break;
            default:
                return
        }
        this.__swiffy_v = dd(c, d, e, f, h, k)
    };
    cr.prototype.copyColumnTo = function(a, b) {
        a = S(a, "uint");
        b = S(b, "flash.geom.Vector3D");
        switch (a) {
            case 0:
                b.x = this.__swiffy_v.n;
                b.y = this.__swiffy_v.u;
                b.z = 0;
                break;
            case 1:
                b.x = this.__swiffy_v.o;
                b.y = this.__swiffy_v.l;
                b.z = 0;
                break;
            case 2:
                b.x = this.__swiffy_v.p, b.y = this.__swiffy_v.q, b.z = 1
        }
    };
    cr.prototype.copyFrom = function(a) {
        a = S(a, "flash.geom.Matrix");
        this.__swiffy_v = a.__swiffy_v
    };
    cr.prototype.copyRowFrom = function(a, b) {
        a = S(a, "uint");
        b = S(b, "flash.geom.Vector3D");
        var c = this.__swiffy_v.n,
            d = this.__swiffy_v.u,
            e = this.__swiffy_v.o,
            f = this.__swiffy_v.l,
            h = this.__swiffy_v.p,
            k = this.__swiffy_v.q;
        switch (a) {
            case 0:
                c = b.x;
                e = b.y;
                h = b.z;
                break;
            case 1:
                d = b.x;
                f = b.y;
                k = b.z;
                break;
            default:
                return
        }
        this.__swiffy_v = dd(c, d, e, f, h, k)
    };
    cr.prototype.copyRowTo = function(a, b) {
        a = S(a, "uint");
        b = S(b, "flash.geom.Vector3D");
        switch (a) {
            case 0:
                b.x = this.__swiffy_v.n;
                b.y = this.__swiffy_v.o;
                b.z = this.__swiffy_v.p;
                break;
            case 1:
                b.x = this.__swiffy_v.o;
                b.y = this.__swiffy_v.l;
                b.z = this.__swiffy_v.q;
                break;
            case 2:
                b.x = 0, b.y = 0, b.z = 1
        }
    };
    cr.prototype.createBox = function(a, b, c, d, e) {
        a = S(a, "Number");
        b = S(b, "Number");
        c = S(c, "Number", 0);
        d = S(d, "Number", 0);
        e = S(e, "Number", 0);
        this.__swiffy_v = Tc.wj(-c).qf(a, b).Jd(d, e)
    };
    cr.prototype.createGradientBox = function(a, b, c, d, e) {
        a = S(a, "Number");
        b = S(b, "Number");
        c = S(c, "Number", 0);
        d = S(d, "Number", 0);
        e = S(e, "Number", 0);
        this.__swiffy_v = hk(a, b, c, d, e)
    };
    cr.prototype.deltaTransformPoint = function(a) {
        a = S(a, "flash.geom.Point");
        return new Cq(this.__swiffy_v.n * a.x + this.__swiffy_v.o * a.y, this.__swiffy_v.u * a.x + this.__swiffy_v.l * a.y)
    };
    cr.prototype.identity = function() {
        this.__swiffy_v = Tc
    };
    cr.prototype.invert = function() {
        var a = this.__swiffy_v;
        this.__swiffy_v = a.Mn() ? a.Bd() : dd(Infinity, 0, 0, Infinity, NaN, NaN)
    };
    cr.prototype.rotate = function(a) {
        a = S(a, "Number");
        this.__swiffy_v = this.__swiffy_v.wj(-a)
    };
    cr.prototype.scale = function(a, b) {
        a = S(a, "Number");
        b = S(b, "Number");
        this.__swiffy_v = this.__swiffy_v.qf(a, b)
    };
    cr.prototype.setTo = function(a, b, c, d, e, f) {
        a = S(a, "Number");
        b = S(b, "Number");
        c = S(c, "Number");
        d = S(d, "Number");
        e = S(e, "Number");
        f = S(f, "Number");
        this.__swiffy_v = dd(a, b, c, d, e, f)
    };
    cr.prototype.transformPoint = function(a) {
        a = S(a, "flash.geom.Point");
        return new Cq(this.__swiffy_v.n * a.x + this.__swiffy_v.o * a.y + this.__swiffy_v.p, this.__swiffy_v.u * a.x + this.__swiffy_v.l * a.y + this.__swiffy_v.q)
    };
    cr.prototype.translate = function(a, b) {
        a = S(a, "Number");
        b = S(b, "Number");
        this.__swiffy_v = this.__swiffy_v.Jd(a, b)
    };
    cr.prototype.toString = function() {
        return "(a=" + this.__swiffy_v.n + ", b=" + this.__swiffy_v.u + ", c=" + this.__swiffy_v.o + ", d=" + this.__swiffy_v.l + ", tx=" + this.__swiffy_v.p + ", ty=" + this.__swiffy_v.q + ")"
    };
    var Cq = function(a, b) {
            a = S(a, "Number", 0);
            b = S(b, "Number", 0);
            Q(this, "x", "Number", a);
            Q(this, "y", "Number", b)
        },
        er = P(Cq, "flash.geom.Point");
    Object.defineProperty(Cq.prototype, "length", {
        get: function() {
            return $c(this.x, this.y)
        }
    });
    Cq.prototype.add = function(a) {
        return new Cq(this.x + a.x, this.y + a.y)
    };
    Cq.prototype.clone = function() {
        return new Cq(this.x, this.y)
    };
    Cq.prototype.copyFrom = function(a) {
        this.x = a.x;
        this.y = a.y
    };
    er.distance = function(a, b) {
        return $c(a.x - b.x, a.y - b.y)
    };
    Cq.prototype.equals = function(a) {
        return this.x == a.x && this.y == a.y
    };
    er.interpolate = function(a, b, c) {
        return new Cq(a.x * c + b.x * (1 - c), a.y * c + b.y * (1 - c))
    };
    Cq.prototype.normalize = function(a) {
        a /= this.length;
        this.x *= a;
        this.y *= a
    };
    Cq.prototype.offset = function(a, b) {
        this.x += a;
        this.y += b
    };
    er.polar = function(a, b) {
        return new Cq(a * Math.cos(b), a * Math.sin(b))
    };
    Cq.prototype.setTo = function(a, b) {
        this.x = a;
        this.y = b
    };
    Cq.prototype.subtract = function(a) {
        return new Cq(this.x - a.x, this.y - a.y)
    };
    Cq.prototype.toString = function() {
        return "(x=" + this.x + ", y=" + this.y + ")"
    };
    var Vq = function(a, b, c, d) {
        a = S(a, "Number", 0);
        b = S(b, "Number", 0);
        c = S(c, "Number", 0);
        d = S(d, "Number", 0);
        Q(this, "x", "Number", a);
        Q(this, "y", "Number", b);
        Q(this, "width", "Number", c);
        Q(this, "height", "Number", d)
    };
    P(Vq, "flash.geom.Rectangle");
    Object.defineProperty(Vq.prototype, "top", {
        get: function() {
            return this.y
        },
        set: function(a) {
            this.y = S(a, "Number")
        }
    });
    Object.defineProperty(Vq.prototype, "left", {
        get: function() {
            return this.x
        },
        set: function(a) {
            this.x = S(a, "Number")
        }
    });
    Object.defineProperty(Vq.prototype, "bottom", {
        get: function() {
            return this.y + this.height
        },
        set: function(a) {
            a = S(a, "Number");
            this.height = a - this.y
        }
    });
    Object.defineProperty(Vq.prototype, "right", {
        get: function() {
            return this.x + this.width
        },
        set: function(a) {
            a = S(a, "Number");
            this.width = a - this.x
        }
    });
    Object.defineProperty(Vq.prototype, "topLeft", {
        get: function() {
            return new Cq(this.left, this.top)
        },
        set: function(a) {
            a = S(a, "flash.geom.Point");
            this.left = a.x;
            this.top = a.y
        }
    });
    Object.defineProperty(Vq.prototype, "bottomRight", {
        get: function() {
            return new Cq(this.right, this.bottom)
        },
        set: function(a) {
            a = S(a, "flash.geom.Point");
            this.right = a.x;
            this.bottom = a.y
        }
    });
    Object.defineProperty(Vq.prototype, "size", {
        get: function() {
            return new Cq(this.width, this.height)
        },
        set: function(a) {
            a = S(a, "flash.geom.Point");
            this.width = a.x;
            this.height = a.y
        }
    });
    Vq.prototype.clone = function() {
        return new Vq(this.x, this.y, this.width, this.height)
    };
    Vq.prototype.contains = function(a, b) {
        return this.x <= a && this.y <= b && a < this.right && b < this.bottom
    };
    Vq.prototype.containsPoint = function(a) {
        return this.contains(a.x, a.y)
    };
    Vq.prototype.containsRect = function(a) {
        var b = this.right,
            c = this.bottom,
            d = a.right,
            e = a.bottom;
        return this.x <= a.x && this.y <= a.y && a.x < b && a.y < c && this.x < d && this.y < e && d <= b && e <= c
    };
    Vq.prototype.copyFrom = function(a) {
        this.x = a.x;
        this.y = a.y;
        this.width = a.width;
        this.height = a.height
    };
    Vq.prototype.equals = function(a) {
        return this.x == a.x && this.y == a.y && this.width == a.width && this.height == a.height
    };
    Vq.prototype.inflate = function(a, b) {
        this.x -= a;
        this.y -= b;
        this.width += 2 * a;
        this.height += 2 * b
    };
    Vq.prototype.inflatePoint = function(a) {
        this.inflate(a.x, a.y)
    };
    Vq.prototype.intersection = function(a) {
        if (this.intersects(a)) {
            var b = Math.max(this.x, a.x),
                c = Math.max(this.y, a.y),
                d = Math.min(this.right, a.right);
            a = Math.min(this.bottom, a.bottom);
            return new Vq(b, c, d - b, a - c)
        }
        return new Vq
    };
    Vq.prototype.intersects = function(a) {
        return 0 < a.width && 0 < a.height && 0 < this.width && 0 < this.height && a.x < this.right && a.y < this.bottom && a.right > this.x && a.bottom > this.y
    };
    Vq.prototype.isEmpty = function() {
        return 0 >= this.width || 0 >= this.height
    };
    Vq.prototype.offset = function(a, b) {
        this.x += a;
        this.y += b
    };
    Vq.prototype.offsetPoint = function(a) {
        this.offset(a.x, a.y)
    };
    Vq.prototype.setEmpty = function() {
        this.height = this.width = this.y = this.x = 0
    };
    Vq.prototype.setTo = function(a, b, c, d) {
        this.x = a;
        this.y = b;
        this.width = c;
        this.height = d
    };
    Vq.prototype.union = function(a) {
        if (this.isEmpty()) return a.clone();
        if (a.isEmpty()) return this.clone();
        var b = Math.min(this.x, a.x),
            c = Math.min(this.y, a.y),
            d = Math.max(this.right, a.right);
        a = Math.max(this.bottom, a.bottom);
        return new Vq(b, c, d - b, a - c)
    };
    Vq.prototype.toString = function() {
        return "(x=" + this.x + ", y=" + this.y + ", w=" + this.width + ", h=" + this.height + ")"
    };
    var X = function(a, b, c, d) {
        a = S(a, "int");
        b = S(b, "int");
        c = S(c, "Boolean", !0);
        d = S(d, "uint", 4294967295);
        if (!(8191 >= a && 8191 >= b && 16777215 >= a * b)) throw L(2015, "BitmapData");
        this.__swiffy_d.Nb(a, b, c, d)
    };
    P(X, "flash.display.BitmapData", Jn, [up]);
    Object.defineProperty(X.prototype, "width", {
        get: function() {
            return this.__swiffy_d.Ia()
        }
    });
    Object.defineProperty(X.prototype, "height", {
        get: function() {
            return this.__swiffy_d.Xa()
        }
    });
    Object.defineProperty(X.prototype, "rect", {
        get: function() {
            return new Vq(0, 0, this.__swiffy_d.Ia(), this.__swiffy_d.Xa())
        }
    });
    Object.defineProperty(X.prototype, "transparent", {
        get: function() {
            return this.__swiffy_d.rd
        }
    });
    X.prototype.applyFilter = function() {
        T(this, "applyFilter")
    };
    X.prototype.clone = function() {
        T(this, "clone");
        return null
    };
    X.prototype.colorTransform = function(a, b) {
        S(a, "flash.geom.Rectangle");
        S(b, "flash.geom.ColorTransform");
        T(this, "colorTransform")
    };
    X.prototype.compare = function(a) {
        S(a, "flash.display.BitmapData");
        T(this, "compare");
        return 0
    };
    X.prototype.copyChannel = function(a, b, c, d, e) {
        S(a, "flash.display.BitmapData");
        S(b, "flash.geom.Rectangle");
        S(c, "flash.geom.Point");
        S(d, "uint");
        S(e, "uint");
        T(this, "copyChannel")
    };
    X.prototype.copyPixels = function(a, b, c, d, e, f) {
        a = S(a, "flash.display.BitmapData");
        b = S(b, "flash.geom.Rectangle");
        c = S(c, "flash.geom.Point");
        d = S(d, "flash.display.BitmapData", null);
        e = S(e, "flash.geom.Point", null);
        f = S(f, "Boolean", !1);
        this.__swiffy_d.Ct(a.__swiffy_d, b.x, b.y, b.width, b.height, c.x, c.y, d ? d.__swiffy_d : null, (e || b).x, (e || b).y, f)
    };
    X.prototype.copyPixelsToByteArray = function(a, b) {
        a = S(a, "flash.geom.Rectangle");
        b = S(b, "flash.utils.ByteArray");
        var c = this.__swiffy_d.Yy(a.x, a.y, a.width, a.height, b.endian == fr.LITTLE_ENDIAN),
            d = c.byteLength,
            e = void 0 === d;
        e && (d = c.length);
        if (0 != d) {
            var f = gr(b, d);
            if (e)
                for (e = 0; e < d; ++e) f[e] = c[e];
            else f.set(new Uint8Array(c.buffer, c.byteOffset, c.byteLength))
        }
    };
    X.prototype.dispose = function() {
        this.__swiffy_d.Rl()
    };
    X.prototype.draw = function() {
        T(this, "draw")
    };
    X.prototype.drawWithQuality = function(a, b, c, d, e, f, h) {
        S(a, "flash.display.IBitmapDrawable");
        S(b, "flash.geom.Matrix", null);
        S(c, "flash.geom.ColorTransform", null);
        S(d, "String", null);
        S(e, "flash.geom.Rectangle", null);
        S(f, "Boolean", !1);
        S(h, "String", null);
        T(this, "drawWithQuality")
    };
    X.prototype.encode = function(a, b, c) {
        S(a, "flash.geom.Rectangle");
        S(b, "Object");
        S(c, "flash.utils.ByteArray", null);
        T(this, "encode");
        return new Y
    };
    X.prototype.fillRect = function(a, b) {
        a = S(a, "flash.geom.Rectangle");
        b = S(b, "uint");
        this.__swiffy_d.fillRect(a.x, a.y, a.width, a.height, b)
    };
    X.prototype.floodFill = function(a, b, c) {
        S(a, "int");
        S(b, "int");
        S(c, "uint");
        T(this, "floodFill")
    };
    X.prototype.generateFilterRect = function(a, b) {
        S(a, "flash.geom.Rectangle");
        S(b, "flash.filters.BitmapFilter");
        T(this, "generateFilterRect");
        return new Vq
    };
    X.prototype.getColorBoundsRect = function(a, b, c) {
        S(a, "uint");
        S(b, "uint");
        S(c, "Boolean", !0);
        T(this, "getColorBoundsRect");
        return new Vq
    };
    X.prototype.getPixel = function(a, b) {
        a = S(a, "int");
        b = S(b, "int");
        return this.__swiffy_d.Xy(a, b)
    };
    X.prototype.getPixel32 = function(a, b) {
        a = S(a, "int");
        b = S(b, "int");
        return this.__swiffy_d.Vo(a, b)
    };
    X.prototype.getPixels = function(a) {
        var b = new Y;
        this.copyPixelsToByteArray(a, b);
        return b
    };
    X.prototype.getVector = function(a) {
        a = S(a, "flash.geom.Rectangle");
        a = this.__swiffy_d.Zy(a.x, a.y, a.width, a.height);
        return Ko(Ro, a)
    };
    X.prototype.histogram = function(a) {
        S(a, "flash.geom.Rectangle", null);
        T(this, "histogram");
        return Ko(Po(So, !1, !1))
    };
    X.prototype.hitTest = function(a, b, c, d, e) {
        S(a, "flash.geom.Point");
        S(b, "uint");
        S(c, "Object");
        S(d, "flash.geom.Point", null);
        S(e, "uint", 1);
        T(this, "hitTest");
        return !1
    };
    X.prototype.lock = function() {
        T(this, "lock");
        this.__swiffy_d.jz()
    };
    X.prototype.merge = function(a, b, c, d, e, f, h) {
        S(a, "flash.display.BitmapData");
        S(b, "flash.geom.Rectangle");
        S(c, "flash.geom.Point");
        S(d, "uint");
        S(e, "uint");
        S(f, "uint");
        S(h, "uint");
        T(this, "merge")
    };
    X.prototype.noise = function(a, b, c, d, e) {
        S(a, "int");
        S(b, "uint", 0);
        S(c, "uint", 255);
        S(d, "uint", 7);
        S(e, "Boolean", !1);
        T(this, "noise")
    };
    X.prototype.paletteMap = function(a, b, c, d, e, f, h) {
        S(a, "flash.display.BitmapData");
        S(b, "flash.geom.Rectangle");
        S(c, "flash.geom.Point");
        S(d, "Array", null);
        S(e, "Array", null);
        S(f, "Array", null);
        S(h, "Array", null);
        T(this, "paletteMap")
    };
    X.prototype.perlinNoise = function(a, b, c, d, e, f, h, k, n) {
        S(a, "Number");
        S(b, "Number");
        S(c, "uint");
        S(d, "int");
        S(e, "Boolean");
        S(f, "Boolean");
        S(h, "uint", 7);
        S(k, "Boolean", !1);
        S(n, "Array", null);
        T(this, "perlinNoise")
    };
    X.prototype.pixelDissolve = function(a, b, c, d, e, f) {
        S(a, "flash.display.BitmapData");
        S(b, "flash.geom.Rectangle");
        S(c, "flash.geom.Point");
        S(d, "int", 0);
        S(e, "int", 0);
        S(f, "uint", 0);
        T(this, "pixelDissolve");
        return 0
    };
    X.prototype.scroll = function(a, b) {
        a = S(a, "int");
        b = S(b, "int");
        this.__swiffy_d.scroll(a, b)
    };
    X.prototype.setPixel = function(a, b, c) {
        a = S(a, "int");
        b = S(b, "int");
        c = S(c, "uint");
        this.__swiffy_d.Gz(a, b, c)
    };
    X.prototype.setPixel32 = function(a, b, c) {
        a = S(a, "int");
        b = S(b, "int");
        c = S(c, "uint");
        this.__swiffy_d.$o(a, b, c)
    };
    X.prototype.setPixels = function(a, b) {
        a = S(a, "flash.geom.Rectangle");
        b = S(b, "flash.utils.ByteArray");
        var c = a.width,
            d = a.height,
            e = c * d * 4,
            f = Z(b),
            h = f.position;
        e + h > f.ma.byteLength && (e = f.ma.byteLength - h, 0 >= e && (h = 0));
        h = new Uint8Array(f.ma.buffer, h, e);
        f.position += e;
        this.__swiffy_d.Gw(a.x, a.y, c, d, h, b.endian == fr.LITTLE_ENDIAN)
    };
    X.prototype.setVector = function(a, b) {
        a = S(a, "flash.geom.Rectangle");
        b = Yn(b, Ro);
        this.__swiffy_d.Hz(a.x, a.y, a.width, a.height, b.__swiffy_v)
    };
    X.prototype.threshold = function(a, b, c, d, e, f, h, k) {
        S(a, "flash.display.BitmapData");
        S(b, "flash.geom.Rectangle");
        S(c, "flash.geom.Point");
        S(d, "String");
        S(e, "uint");
        S(f, "uint", 0);
        S(h, "uint", 4294967295);
        S(k, "Boolean", !1);
        T(this, "threshold");
        return 0
    };
    X.prototype.unlock = function(a) {
        S(a, "flash.geom.Rectangle", null);
        this.__swiffy_d.Pz()
    };
    ti(X, function(a, b) {
        return new si(of, a, b)
    });
    var Dq = function(a) {
        a = S(a, "flash.display.DisplayObject");
        Object.defineProperty(this, "__swiffy_d", {
            value: a.__swiffy_d
        })
    };
    P(Dq, "flash.geom.Transform");
    Object.defineProperty(Dq.prototype, "colorTransform", {
        get: function() {
            return br(this.__swiffy_d.Wb)
        },
        set: function(a) {
            a = S(a, "flash.geom.ColorTransform");
            var b = this.__swiffy_d;
            b.Nc(a.__swiffy_v);
            b.hb()
        }
    });
    Object.defineProperty(Dq.prototype, "concatenatedColorTransform", {
        get: function() {
            return br(this.__swiffy_d.Mc())
        }
    });
    Object.defineProperty(Dq.prototype, "concatenatedMatrix", {
        get: function() {
            return dr(this.__swiffy_d.Da())
        }
    });
    Object.defineProperty(Dq.prototype, "matrix", {
        get: function() {
            return dr(this.__swiffy_d.Fa())
        },
        set: function(a) {
            a = S(a, "flash.geom.Matrix");
            var b = this.__swiffy_d;
            b.setTransform(tp(a));
            b.hb()
        }
    });
    Object.defineProperty(Dq.prototype, "pixelBounds", {
        get: function() {
            var a = this.__swiffy_d,
                b = a.pb().Xd().clone();
            b.ja(a.Da());
            return new Vq(Math.floor(b.k / 20), Math.floor(b.j / 20), Math.ceil((b.t - b.k) / 20), Math.ceil((b.s - b.j) / 20))
        }
    });
    var hr = function(a, b, c, d) {
            this.w = l(d) ? Number(d) : 0;
            this.x = l(a) ? Number(a) : 0;
            this.y = l(b) ? Number(b) : 0;
            this.z = l(c) ? Number(c) : 0
        },
        ir = P(hr, "flash.geom.Vector3D");
    Object.defineProperty(hr.prototype, "lengthSquared", {
        get: function() {
            return this.x * this.x + this.y * this.y + this.z * this.z
        }
    });
    Object.defineProperty(hr.prototype, "length", {
        get: function() {
            return Math.sqrt(this.lengthSquared)
        }
    });
    Object.defineProperty(ir, "X_AXIS", {
        value: new hr(1, 0, 0, 0)
    });
    Object.defineProperty(ir, "Y_AXIS", {
        value: new hr(0, 1, 0, 0)
    });
    Object.defineProperty(ir, "Z_AXIS", {
        value: new hr(0, 0, 1, 0)
    });
    hr.prototype.add = function(a) {
        return new hr(this.x + a.x, this.y + a.y, this.z + a.z)
    };
    ir.angleBetween = function() {
        return 0
    };
    hr.prototype.clone = function() {
        return new hr(this.x, this.y, this.z, this.w)
    };
    hr.prototype.copyFrom = function(a) {
        this.x = a.x;
        this.y = a.y;
        this.z = a.z;
        this.w = a.w
    };
    hr.prototype.crossProduct = function() {
        return new hr
    };
    hr.prototype.decrementBy = function() {};
    ir.distance = function(a, b) {
        return a.subtract(b).length
    };
    hr.prototype.dotProduct = function() {
        return 0
    };
    hr.prototype.equals = function(a, b) {
        return this.x == a.x && this.y == a.y && this.z == a.z && (!b || this.w == a.w)
    };
    hr.prototype.incrementBy = function() {};
    hr.prototype.nearEquals = function() {
        return !1
    };
    hr.prototype.negate = function() {};
    hr.prototype.normalize = function() {
        return 0
    };
    hr.prototype.project = function() {};
    hr.prototype.scaleBy = function() {};
    hr.prototype.setTo = function(a, b, c) {
        this.x = Number(a);
        this.y = Number(b);
        this.z = Number(c)
    };
    hr.prototype.subtract = function(a) {
        return new hr(this.x - a.x, this.y - a.y, this.z - a.z)
    };
    hr.prototype.toString = function() {
        return "Vector3D(" + this.x + ", " + this.y + ", " + this.z + ")"
    };
    var jr = P(function() {}, "flash.media.AudioDecoder");
    Object.defineProperties(jr, {
        DOLBY_DIGITAL: {
            value: "DolbyDigital"
        },
        DOLBY_DIGITAL_PLUS: {
            value: "DolbyDigitalPlus"
        },
        DTS: {
            value: "DTS"
        },
        DTS_EXPRESS: {
            value: "DTSExpress"
        },
        DTS_HD_HIGH_RESOLUTION_AUDIO: {
            value: "DTSHDHighResolutionAudio"
        },
        DTS_HD_MASTER_AUDIO: {
            value: "DTSHDMasterAudio"
        }
    });
    var kr = function(a, b) {
        S(a, "flash.net.URLRequest", null);
        S(b, "flash.media.SoundLoaderContext", null);
        Q(this, "bytesLoaded", "uint", 0);
        Q(this, "bytesTotal", "Number", 0);
        Q(this, "isBuffering", "Boolean", !1);
        Q(this, "isURLInaccessible", "Boolean", !0);
        Q(this, "length", "Number", 0);
        Q(this, "url", "String", "")
    };
    P(kr, "flash.media.Sound");
    kr.prototype.play = function() {
        T(this, "play")
    };
    kr.prototype.close = function() {
        T(this, "close")
    };
    kr.prototype.connect = function() {
        T(this, "connect")
    };
    P(function(a, b) {
        a = S(a, "Number", 1E3);
        b = S(b, "Boolean", !1);
        Q(this, "bufferTime", "Number", a);
        Q(this, "checkPolicyFile", "Boolean", b)
    }, "flash.media.SoundLoaderContext");
    var Sq = function(a, b) {
        a = S(a, "Number", 1);
        b = S(b, "Number", 0);
        Q(this, "leftToLeft", "Number", 0);
        Q(this, "leftToRight", "Number", 0);
        Q(this, "pan", "Number", b);
        Q(this, "rightToLeft", "Number", 0);
        Q(this, "rightToRight", "Number", 0);
        Q(this, "volume", "Number", a)
    };
    P(Sq, "flash.media.SoundTransform");
    var lr = function(a, b) {
            Aq.call(this);
            S(a, "int", 320);
            S(b, "int", 240);
            this.deblocking = 0;
            this.smoothing = !1
        },
        mr = P(lr, "flash.media.Video", Aq);
    ti(lr, function(a, b) {
        return new Eg(Fg, a, b)
    });
    N(mr, "deblocking", function() {
        return this.__swiffy_v.deblocking
    });
    O(mr, "deblocking", function(a) {
        this.__swiffy_v.deblocking = S(a, "int")
    });
    N(mr, "smoothing", function() {
        return this.__swiffy_v.smoothing
    });
    O(mr, "smoothing", function(a) {
        this.__swiffy_v.smoothing = S(a, "Boolean")
    });
    N(mr, "videoHeight", function() {
        return 0
    });
    N(mr, "videoWidth", function() {
        return 0
    });
    lr.prototype.attachCamera = function() {
        T(this, "attachCamera")
    };
    lr.prototype.attachNetStream = function(a) {
        S(a, "flash.net.NetStream", null);
        T(this, "attachNetStream")
    };
    lr.prototype.clear = function() {
        T(this, "clear")
    };
    Wm.prototype["flash.net.navigateToURL"] = function(a, b) {
        if (!a) throw L(2007, "request");
        if (null == a.url) throw L(2007, "url");
        var c = l(b) ? b : "_blank",
            d = 0;
        a.data && (d = a.method == nr.POST ? 2 : 1);
        var e = Xe;
        e.c.si(new ij(e, a.data ? a.data.toString() : null, a.url, c, d))
    };
    var or = {};
    Wm.prototype["flash.net.registerClassAlias"] = function(a, b) {
        if (null == a) throw L(2007, "aliasName");
        if (null == b) throw L(2007, "classObject");
        a = S(a, "String");
        b = S(b, "Class");
        T(this, "flash.net.registerClassAlias");
        or[a] = b
    };
    Wm.prototype["flash.net.getClassByAlias"] = function(a) {
        if (null == a) throw L(2007, "aliasName");
        a = S(a, "String");
        T(this, "flash.net.getClassByAlias");
        var b = or[a];
        if (!b) throw L(1014, a);
        return b
    };
    var pr = function() {
            Tp.call(this);
            Q(this, "client", "Object", null);
            R(this, "domain", "");
            Q(this, "isPerUser", "Boolean", !1)
        },
        qr = P(pr, "flash.net.LocalConnection", Tp);
    Object.defineProperty(qr, "isSupported", {
        value: !1
    });
    pr.prototype.allowDomain = function() {
        T(this, "allowDomain")
    };
    pr.prototype.allowInsecureDomain = function() {
        T(this, "allowInsecureDomain")
    };
    pr.prototype.close = function() {
        T(this, "close")
    };
    pr.prototype.connect = function(a) {
        S(a, "String", "");
        T(this, "connect")
    };
    pr.prototype.send = function(a, b) {
        S(a, "String", "");
        S(b, "String", "");
        T(this, "send")
    };
    var rr = function() {
            Tp.call(this);
            Q(this, "client", "Object", null);
            R(this, "connectedProxyType", "");
            R(this, "farID", "");
            R(this, "farNonce", "");
            Q(this, "httpIdleTimeout", "Number", 0);
            Q(this, "maxPeerConnections", "uint", 0);
            R(this, "nearID", "");
            R(this, "nearNonce", "");
            Q(this, "objectEncoding", "uint", 0);
            R(this, "protocol", "");
            Q(this, "proxyType", "String", "");
            R(this, "unconnectedPeerStreams", null);
            R(this, "uri", "");
            R(this, "usingTLS", !1);
            this.__swiffy_v.Gy = !1
        },
        sr = P(rr, "flash.net.NetConnection", Tp);
    N(sr, "connected", function() {
        return this.__swiffy_v.Gy
    });
    Object.defineProperty(sr, "defaultObjectEncoding", {
        value: 0
    });
    rr.prototype.addHeader = function(a, b, c) {
        S(a, "String", "");
        S(b, "Boolean", !1);
        S(c, "Object", null);
        T(this, "addHeader")
    };
    rr.prototype.call = function(a, b) {
        S(a, "String", "");
        S(b, "flash.net.Responder", null);
        T(this, "call")
    };
    rr.prototype.close = function() {
        T(this, "close")
    };
    rr.prototype.connect = function(a) {
        S(a, "String", "");
        T(this, "connect")
    };
    var ur = function(a, b) {
            Tp.call(this);
            S(a, "flash.net.NetConnection", null);
            S(b, "String", "connectToFMS");
            Q(this, "audioReliable", "Boolean", !1);
            Q(this, "audioSampleAccess", "Boolean", !1);
            R(this, "backBufferLength", 0);
            Q(this, "backBufferTime", "Number", 0);
            Q(this, "bufferTimeMax", "Number", 0);
            Q(this, "checkPolicyFile", "Boolean", !1);
            Q(this, "dataReliable", "Boolean", !1);
            R(this, "farID", "");
            R(this, "farNonce", "");
            Q(this, "inBufferSeek", "Boolean", !1);
            R(this, "info", null);
            R(this, "liveDelay", 0);
            Q(this, "maxPauseBufferTime", "Number",
                0);
            Q(this, "multicastAvailabilitySendToAll", "Boolean", !1);
            Q(this, "multicastAvailabilityUpdatePeriod", "Number", 0);
            Q(this, "multicastFetchPeriod", "Number", 0);
            R(this, "multicastInfo", null);
            Q(this, "multicastPushNeighborLimit", "Number", 0);
            Q(this, "multicastRelayMarginDuration", "Number", 0);
            Q(this, "multicastWindowDuration", "Number", 0);
            R(this, "nearNonce", "");
            R(this, "objectEncoding", 0);
            R(this, "peerStreams", null);
            Q(this, "soundTransform", "flash.media.SoundTransform", null);
            Q(this, "useHardwareDecoder", "Boolean", !1);
            Q(this, "useJitterBuffer", "Boolean", !1);
            Q(this, "videoReliable", "Boolean", !1);
            Q(this, "videoSampleAccess", "Boolean", !1);
            Q(this, "videoStreamSettings", "flash.media.VideoStreamSettings", null);
            var c = tr(this);
            c.jo = 0;
            c.sj = .1;
            c.tj = 0;
            c.uj = 0;
            c.ko = 0;
            c.time = 0;
            c.Wi = null
        },
        tr = function(a) {
            return a.__swiffy_v
        },
        vr = P(ur, "flash.net.NetStream", Tp);
    N(vr, "bufferTime", function() {
        return tr(this).sj
    });
    O(vr, "bufferTime", function(a) {
        tr(this).sj = S(a, "Number")
    });
    N(vr, "bufferLength", function() {
        return tr(this).jo
    });
    N(vr, "bytesLoaded", function() {
        return tr(this).tj
    });
    N(vr, "bytesTotal", function() {
        return tr(this).uj
    });
    N(vr, "currentFPS", function() {
        return tr(this).ko
    });
    N(vr, "time", function() {
        return tr(this).time
    });
    N(vr, "client", function() {
        return tr(this).Wi
    });
    O(vr, "client", function(a) {
        tr(this).Wi = a
    });
    Object.defineProperty(vr, "CONNECT_TO_FMS", {
        value: "connectToFMS"
    });
    Object.defineProperty(vr, "DIRECT_CONNECTIONS", {
        value: "directConnections"
    });
    ur.prototype.appendBytes = function(a) {
        S(a, "flash.utils.ByteArray", null);
        T(this, "appendBytes")
    };
    ur.prototype.appendBytesAction = function(a) {
        S(a, "String", "");
        T(this, "appendBytesAction")
    };
    ur.prototype.attach = function(a) {
        S(a, "flash.net.NetConnection", null);
        T(this, "attach")
    };
    ur.prototype.attachAudio = function() {
        T(this, "attachAudio")
    };
    ur.prototype.attachCamera = function(a, b) {
        S(b, "int", -1);
        T(this, "attachCamera")
    };
    ur.prototype.close = function() {
        T(this, "close")
    };
    ur.prototype.dispose = function() {
        T(this, "dispose")
    };
    ur.prototype.onPeerConnect = function(a) {
        S(a, "flash.net.NetStream", null);
        T(this, "onPeerConnect");
        return !1
    };
    ur.prototype.pause = function() {
        T(this, "pause")
    };
    ur.prototype.play = function() {
        T(this, "play")
    };
    ur.prototype.play2 = function(a) {
        S(a, "flash.net.NetStreamPlayOptions", null);
        T(this, "play2")
    };
    ur.prototype.preloadEmbeddedData = function(a) {
        S(a, "flash.net.NetStreamPlayOptions", null);
        T(this, "preloadEmbeddedData")
    };
    ur.prototype.publish = function(a, b) {
        S(a, "String", "null");
        S(b, "String", "null");
        T(this, "publish")
    };
    ur.prototype.receiveAudio = function(a) {
        S(a, "Boolean", !1);
        T(this, "receiveAudio")
    };
    ur.prototype.receiveVideo = function(a) {
        S(a, "Boolean", !1);
        T(this, "receiveVideo")
    };
    ur.prototype.receiveVideoFPS = function(a) {
        S(a, "Number", 0);
        T(this, "receiveVideoFPS")
    };
    vr.resetDRMVouchers = function() {
        T(this, "resetDRMVouchers")
    };
    ur.prototype.resume = function() {
        T(this, "resume")
    };
    ur.prototype.seek = function(a) {
        S(a, "Number");
        T(this, "seek");
        this.dispatchEvent(new iq("netStatus", !1, !1, {
            code: "NetStream.SeekStart.Notify",
            level: "status"
        }))
    };
    ur.prototype.send = function(a) {
        S(a, "String", "");
        T(this, "send")
    };
    ur.prototype.setDRMAuthenticationCredentials = function(a, b, c) {
        S(a, "String", "");
        S(b, "String", "");
        S(c, "String", "");
        T(this, "setDRMAuthenticationCredentials")
    };
    ur.prototype.step = function(a) {
        S(a, "int", 0);
        T(this, "step")
    };
    ur.prototype.togglePause = function() {
        T(this, "togglePause")
    };
    P(function() {
        Tp.call(this);
        Q(this, "len", "Number", 0);
        Q(this, "offset", "Number", 0);
        Q(this, "oldStreamName", "String", "");
        Q(this, "start", "Number", 0);
        Q(this, "streamName", "String", "");
        Q(this, "transition", "String", "")
    }, "flash.net.NetStreamPlayOptions", Tp);
    var wr = Vn(2012);
    wr.da = P(wr, "flash.net.ObjectEncoding");
    Object.defineProperty(wr.da, "dynamicPropertyWriter", {
        value: null
    });
    Object.defineProperty(wr.da, "AMF0", {
        value: 0
    });
    Object.defineProperty(wr.da, "AMF3", {
        value: 3
    });
    Object.defineProperty(wr.da, "DEFAULT", {
        value: 3
    });
    P(function(a, b) {
        S(a, "Function", null);
        S(b, "Function", null)
    }, "flash.net.Responder");
    var $ = Vn(2012);
    $.hg = function(a) {
        return a.__swiffy_v
    };
    $.yt = function() {
        var a = Qn($.da);
        Tp.call(a);
        var b = $.hg(a);
        b.Wi = a;
        b.Fr = $.Wn;
        b.data = {};
        return a
    };
    $.zt = {};
    $.Wn = wr.da.AMF3;
    $.da = P($, "flash.net.SharedObject", Tp);
    N($.da, "client", function() {
        return $.hg(this).Wi
    });
    O($.da, "client", function(a) {
        if (null == a) throw L(2004);
        $.hg(this).Wi = a
    });
    M($.da, "clear", function() {
        T(this, "clear");
        $.hg(this).data = {}
    });
    M($.da, "close", function() {
        T(this, "close")
    });
    M($.da, "connect", function(a, b) {
        S(a, "flash.net.NetConnection", null);
        S(b, "String", "null");
        T(this, "connect")
    });
    N($.da, "data", function() {
        return $.hg(this).data
    });
    Object.defineProperty($.da, "defaultObjectEncoding", {
        get: function() {
            return $.Wn
        },
        set: function(a) {
            $.Wn = S(a, "uint")
        }
    });
    M($.da, "flush", function(a) {
        S(a, "int", 0);
        T(this, "flush");
        return xr.da.FLUSHED
    });
    O($.da, "fps", function() {
        T(this, "fps")
    });
    $.da.getLocal = function(a, b, c) {
        a = S(a, "String", "");
        S(b, "String", null);
        S(c, "Boolean", !1);
        T(this, "getLocal");
        (b = $.zt[a]) || ($.zt[a] = b = $.yt());
        return b
    };
    $.da.getRemote = function(a, b, c, d) {
        S(a, "String", "");
        S(b, "String", "null");
        S(c, "Object", !1);
        S(d, "Boolean", !1);
        T(this, "getRemote");
        return $.yt()
    };
    N($.da, "objectEncoding", function() {
        return $.hg(this).Fr
    });
    O($.da, "objectEncoding", function(a) {
        a = S(a, "uint");
        T(this, "objectEncoding");
        if (a != wr.da.AMF0 && a != wr.da.AMF3) throw L(2008, "objectEncoding");
        $.hg(this).Fr = a
    });
    M($.da, "send", function() {
        T(this, "send")
    });
    M($.da, "setDirty", function(a) {
        S(a, "String", "");
        T(this, "setDirty")
    });
    M($.da, "setProperty", function(a, b) {
        S(a, "String", "");
        S(b, "Object", null);
        T(this, "setProperty")
    });
    N($.da, "size", function() {
        T(this, "size");
        return 0
    });
    var xr = Vn(2012);
    xr.da = P(xr, "flash.net.SharedObjectFlushStatus");
    Object.defineProperty(xr.da, "FLUSHED", {
        value: "flushed"
    });
    Object.defineProperty(xr.da, "PENDING", {
        value: "pending"
    });
    var yr = function(a, b) {
        Tp.call(this);
        S(a, "String", "null");
        S(b, "int", 0);
        R(this, "bytesAvailable", 0);
        R(this, "bytesPending", 0);
        R(this, "connected", !1);
        Q(this, "endian", "String", fr.BIG_ENDIAN);
        R(this, "localAddress", "");
        R(this, "localPort", 0);
        Q(this, "objectEncoding", "uint", 0);
        R(this, "remoteAddress", "");
        R(this, "remotePort", 0);
        Q(this, "timeout", "uint", 0)
    };
    P(yr, "flash.net.Socket", Tp);
    yr.prototype.close = function() {
        T(this, "close")
    };
    yr.prototype.connect = function(a, b) {
        S(a, "String");
        S(b, "int");
        T(this, "connect")
    };
    yr.prototype.flush = function() {
        T(this, "flush")
    };
    yr.prototype.readBoolean = function() {
        T(this, "readBoolean");
        return !1
    };
    yr.prototype.readByte = function() {
        T(this, "readByte");
        return 0
    };
    yr.prototype.readBytes = function(a, b, c) {
        S(a, "flash.utils.ByteArray");
        S(b, "uint", 0);
        S(c, "uint", 0);
        T(this, "readBytes")
    };
    yr.prototype.readDouble = function() {
        T(this, "readDouble");
        return 0
    };
    yr.prototype.readFloat = function() {
        T(this, "readFloat");
        return 0
    };
    yr.prototype.readInt = function() {
        T(this, "readInt");
        return 0
    };
    yr.prototype.readMultiByte = function(a, b) {
        S(a, "uint");
        S(b, "String");
        T(this, "readMultiByte");
        return ""
    };
    yr.prototype.readObject = function() {
        T(this, "readObject");
        return null
    };
    yr.prototype.readShort = function() {
        T(this, "readShort");
        return 0
    };
    yr.prototype.readUnsignedByte = function() {
        T(this, "readUnsignedByte");
        return 0
    };
    yr.prototype.readUnsignedInt = function() {
        T(this, "readUnsignedInt");
        return 0
    };
    yr.prototype.readUnsignedShort = function() {
        T(this, "readUnsignedShort");
        return 0
    };
    yr.prototype.readUTF = function() {
        T(this, "readUTF");
        return ""
    };
    yr.prototype.readUTFBytes = function(a) {
        S(a, "uint");
        T(this, "readUTFBytes");
        return ""
    };
    yr.prototype.writeBoolean = function(a) {
        S(a, "Boolean");
        T(this, "writeBoolean")
    };
    yr.prototype.writeByte = function(a) {
        S(a, "int");
        T(this, "writeByte")
    };
    yr.prototype.writeBytes = function(a, b, c) {
        S(a, "flash.utils.ByteArray");
        S(b, "uint", 0);
        S(c, "uint", 0);
        T(this, "writeBytes")
    };
    yr.prototype.writeDouble = function(a) {
        S(a, "Number");
        T(this, "writeDouble")
    };
    yr.prototype.writeFloat = function(a) {
        S(a, "Number");
        T(this, "writeFloat")
    };
    yr.prototype.writeInt = function(a) {
        S(a, "int");
        T(this, "writeInt")
    };
    yr.prototype.writeMultiByte = function(a, b) {
        S(a, "String");
        S(b, "String");
        T(this, "writeMultiByte")
    };
    yr.prototype.writeObject = function(a) {
        S(a, "*");
        T(this, "writeObject")
    };
    yr.prototype.writeShort = function(a) {
        S(a, "int");
        T(this, "writeShort")
    };
    yr.prototype.writeUnsignedInt = function(a) {
        S(a, "uint");
        T(this, "writeUnsignedInt")
    };
    yr.prototype.writeUTF = function(a) {
        S(a, "String");
        T(this, "writeUTF")
    };
    yr.prototype.writeUTFBytes = function(a) {
        S(a, "String");
        T(this, "writeUTFBytes")
    };
    var Ar = function(a) {
        Tp.call(this);
        a = S(a, "flash.net.URLRequest", null);
        Q(this, "bytesLoaded", "uint", 0);
        Q(this, "bytesTotal", "uint", 0);
        this.data = void 0;
        Q(this, "dataFormat", "String", zr.TEXT);
        a && this.load(a)
    };
    P(Ar, "flash.net.URLLoader", Tp);
    Ar.prototype.close = function() {
        T(this, "close")
    };
    Ar.prototype.load = function(a) {
        a = S(a, "flash.net.URLRequest");
        T(this, "load");
        var b = this;
        this.dispatchEvent(new Ep(Gp.OPEN));
        var c = new xd;
        c.yc = function(a) {
            b.bytesLoaded = 1024;
            b.bytesTotal = 1024;
            b.dispatchEvent(new kq(lq.PROGRESS, !1, !1, 1024, 1024));
            b.dispatchEvent(new Pp(Qp.HTTP_STATUS, !1, !1, 400));
            b.data = a;
            b.dispatchEvent(new Ep(Gp.COMPLETE))
        };
        c.ee = function() {};
        wd(a.url, null, a.method, a.data ? a.data.toString() : null, c, Nq(a))
    };
    var zr = P(function() {}, "flash.net.URLLoaderDataFormat");
    R(zr, "BINARY", "binary");
    R(zr, "TEXT", "text");
    R(zr, "VARIABLES", "variables");
    var Br = function(a, b) {
        Object.defineProperty(this, "__swiffy_v", {
            value: {
                name: S(a, "String", ""),
                value: S(b, "String", "")
            }
        })
    };
    P(Br, "flash.net.URLRequestHeader");
    var Cr = function(a) {
        return a.__swiffy_v
    };
    Object.defineProperty(Br.prototype, "name", {
        get: function() {
            return Cr(this).name
        },
        set: function(a) {
            Cr(this).name = S(a, "String", "")
        }
    });
    Object.defineProperty(Br.prototype, "value", {
        get: function() {
            return Cr(this).value
        },
        set: function(a) {
            Cr(this).value = S(a, "String", "")
        }
    });
    var Nq = function(a) {
        return a.requestHeaders.map(function(a) {
            return Cr(S(a, "flash.net.URLRequestHeader"))
        })
    };
    P(function(a) {
        a = S(a, "String", null);
        Q(this, "authenticate", "Boolean", !1);
        Q(this, "cacheResponse", "Boolean", !1);
        Q(this, "contentType", "String", null);
        Q(this, "data", "Object", null);
        Q(this, "digest", "String", "");
        Q(this, "followRedirects", "Boolean", !1);
        Q(this, "idleTimeout", "Number", 0);
        Q(this, "manageCookies", "Boolean", !1);
        Q(this, "method", "String", nr.GET);
        Q(this, "url", "String", a);
        Q(this, "useCache", "Boolean", !1);
        Q(this, "userAgent", "String", "");
        R(this, "requestHeaders", [])
    }, "flash.net.URLRequest");
    var Dr = function() {},
        nr = P(Dr, "flash.net.URLRequestMethod");
    R(nr, "DELETE", "DELETE");
    R(nr, "GET", "GET");
    R(nr, "HEAD", "HEAD");
    R(nr, "OPTIONS", "OPTIONS");
    R(nr, "POST", "POST");
    R(Dr, "PUT", "PUT");
    var Er = function(a) {
        a = S(a, "String", null);
        null != a && this.decode(a)
    };
    P(Er, "flash.net.URLVariables");
    Object.defineProperty(Er.prototype, "decode", {
        value: function(a) {
            a = S(a, "String");
            a = yd(a, !0);
            var b = Object.keys(a);
            if (!b.length) throw L(2101);
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                if (!d.length) throw L(2101);
                var e = a[d];
                this[d] = 1 == e.length ? e[0] : e
            }
        }
    });
    Object.defineProperty(Er.prototype, "toString", {
        value: function() {
            return td(this)
        }
    });
    var Zp = P(function(a) {
        S(a, "flash.system.ApplicationDomain", null)
    }, "flash.system.ApplicationDomain");
    R(Zp, "MIN_DOMAIN_MEMORY_LENGTH", 1024);
    Object.defineProperty(Zp, "currentDomain", {
        get: function() {
            T(this, "currentDomain");
            return Sn.call(Zp)
        }
    });
    N(Zp, "parentDomain", function() {
        T(this, "parentDomain");
        return Sn.call(Zp)
    });
    N(Zp, "domainMemory", function() {
        T(this, "domainMemory");
        return Xe.uk
    });
    O(Zp, "domainMemory", function(a) {
        T(this, "domainMemory");
        if ((a = S(a, "flash.utils.ByteArray")) && 1024 > a.length) throw L(1504);
        Xe.uk = a
    });
    M(Zp, "getDefinition", function(a) {
        a = S(a, "String");
        T(this, "getDefinition");
        var b = Xe.qd["flash.utils.getDefinitionByName"](a);
        if (!l(b)) throw L(1065, a);
        return b
    });
    M(Zp, "getQualifiedDefinitionNames", function() {
        T(this, "getQualifiedDefinitionNames");
        return Ko(String, [])
    });
    M(Zp, "hasDefinition", function(a) {
        a = S(a, "String");
        T(this, "hasDefinition");
        a = Xe.qd["flash.utils.getDefinitionByName"](a);
        return l(a)
    });
    var Fr = P(function() {}, "flash.system.Capabilities");
    Object.defineProperty(Fr, "avHardwareDisable", {
        value: !1
    });
    Object.defineProperty(Fr, "cpuArchitecture", {
        value: ""
    });
    Object.defineProperty(Fr, "hasAccessibility", {
        value: !1
    });
    Object.defineProperty(Fr, "hasAudio", {
        value: !1
    });
    Object.defineProperty(Fr, "hasAudioEncoder", {
        value: !1
    });
    Object.defineProperty(Fr, "hasEmbeddedVideo", {
        value: !1
    });
    Object.defineProperty(Fr, "hasIME", {
        value: !1
    });
    Object.defineProperty(Fr, "hasMP3", {
        value: !1
    });
    Object.defineProperty(Fr, "hasPrinting", {
        value: !1
    });
    Object.defineProperty(Fr, "hasScreenBroadcast", {
        value: !1
    });
    Object.defineProperty(Fr, "hasScreenPlayback", {
        value: !1
    });
    Object.defineProperty(Fr, "hasStreamingAudio", {
        value: !0
    });
    Object.defineProperty(Fr, "hasStreamingVideo", {
        value: !0
    });
    Object.defineProperty(Fr, "hasTLS", {
        value: !1
    });
    Object.defineProperty(Fr, "hasVideoEncoder", {
        value: !1
    });
    Object.defineProperty(Fr, "isDebugger", {
        value: !1
    });
    Object.defineProperty(Fr, "isEmbeddedInAcrobat", {
        value: !1
    });
    Object.defineProperty(Fr, "language", {
        value: ""
    });
    Object.defineProperty(Fr, "localFileReadDisable", {
        value: !0
    });
    Object.defineProperty(Fr, "manufacturer", {
        value: ""
    });
    Object.defineProperty(Fr, "maxLevelIDC", {
        value: "5.1"
    });
    Object.defineProperty(Fr, "os", {
        value: ""
    });
    Object.defineProperty(Fr, "pixelAspectRatio", {
        value: 1
    });
    Object.defineProperty(Fr, "playerType", {
        value: "PlugIn"
    });
    Object.defineProperty(Fr, "screenColor", {
        value: "color"
    });
    Object.defineProperty(Fr, "screenDPI", {
        value: 72
    });
    Object.defineProperty(Fr, "screenResolutionX", {
        get: function() {
            return screen.width
        }
    });
    Object.defineProperty(Fr, "screenResolutionY", {
        get: function() {
            return screen.height
        }
    });
    Object.defineProperty(Fr, "serverString", {
        get: function() {
            var a = [],
                b;
            for (b in Gr) {
                var c = Gr[b],
                    c = q(c) ? c(this) : this[c],
                    c = !0 === c ? "t" : !1 === c ? "f" : encodeURIComponent(c);
                a.push(b + "=" + c)
            }
            return a.join("&")
        }
    });
    Object.defineProperty(Fr, "supports32BitProcesses", {
        value: !1
    });
    Object.defineProperty(Fr, "supports64BitProcesses", {
        value: !1
    });
    Object.defineProperty(Fr, "touchscreenType", {
        value: ""
    });
    Object.defineProperty(Fr, "version", {
        get: function() {
            return "HTML 11,0,0,0"
        }
    });
    Fr.hasMultiChannelAudio = function(a) {
        S(a, "String", "");
        T(this, "hasMultiChannelAudio");
        return !1
    };
    var Hr = function(a) {
            return function(b) {
                return b.hasMultiChannelAudio(a)
            }
        },
        Gr = {
            A: "hasAudio",
            SA: "hasStreamingAudio",
            SV: "hasStreamingVideo",
            EV: "hasEmbeddedVideo",
            MP3: "hasMP3",
            AE: "hasAudioEncoder",
            VE: "hasVideoEncoder",
            ACC: "hasAccessibility",
            PR: "hasPrinting",
            SP: "hasScreenPlayback",
            SB: "hasScreenBroadcast",
            DEB: "isDebugger",
            V: "version",
            M: "manufacturer",
            R: function(a) {
                return a.screenResolutionX + "x" + a.screenResolutionY
            },
            COL: "screenColor",
            AR: "pixelAspectRatio",
            OS: "os",
            ARCH: "cpuArchitecture",
            L: "language",
            PR32: "supports32BitProcesses",
            PR64: "supports64BitProcesses",
            PT: "playerType",
            AVD: "avHardwareDisable",
            LFD: "localFileReadDisable",
            WD: function() {
                return !1
            },
            TLS: "hasTLS",
            ML: "maxLevelIDC",
            DP: "screenDPI",
            IME: "hasIME",
            DD: Hr("DolbyDigital"),
            DDP: Hr("DolbyDigitalPlus"),
            DTS: Hr("DTS"),
            DTE: Hr("DTSExpress"),
            DTH: Hr("DTSHDHighResolutionAudio"),
            DTM: Hr("DTSHDMasterAudio")
        };
    P(function(a, b, c) {
        a = S(a, "Boolean", !1);
        b = S(b, "flash.system.ApplicationDomain", null);
        c = S(c, "flash.system.SecurityDomain", null);
        Q(this, "allowCodeImport", "Boolean", !1);
        Q(this, "allowLoadBytesCodeExecution", "Boolean", !1);
        Q(this, "applicationDomain", "flash.system.ApplicationDomain", b);
        Q(this, "checkPolicyFile", "Boolean", a);
        Q(this, "imageDecodingPolicy", "String", "");
        Q(this, "parameters", "Object", null);
        Q(this, "requestedContentParent", "flash.display.DisplayObjectContainer", null);
        Q(this, "securityDomain", "flash.system.SecurityDomain",
            c);
        T(this, "<init>")
    }, "flash.system.LoaderContext");
    var Ir = Vn(2012);
    Ir.da = P(Ir, "flash.system.Security");
    Q(Ir.da, "exactSettings", "Boolean", !1);
    R(Ir.da, "pageDomain", void 0);
    R(Ir.da, "sandboxType", "remote");
    R(Ir.da, "LOCAL_TRUSTED", "localTrusted");
    R(Ir.da, "LOCAL_WITH_FILE", "localWithFile");
    R(Ir.da, "LOCAL_WITH_NETWORK", "localWithNetwork");
    R(Ir.da, "REMOTE", "remote");
    Ir.da.allowDomain = function() {
        T(Ir, "allowDomain")
    };
    Ir.da.allowInsecureDomain = function() {
        T(Ir, "allowInsecureDomain")
    };
    Ir.da.loadPolicyFile = function(a) {
        S(a, "String");
        T(Ir, "loadPolicyFile")
    };
    Ir.da.showSettings = function(a) {
        S(a, "String", "default");
        T(Ir, "showSettings")
    };
    var Jr = function() {},
        Kr = P(Jr, "flash.system.SecurityDomain");
    R(Kr, "currentDomain", new Jr);
    var Lr = P(function() {}, "flash.text.AntiAliasType");
    R(Lr, "ADVANCED", "advanced");
    R(Lr, "NORMAL", "normal");
    var Mr = P(function() {}, "flash.text.FontStyle");
    R(Mr, "BOLD", "bold");
    R(Mr, "BOLD_ITALIC", "boldItalic");
    R(Mr, "ITALIC", "italic");
    R(Mr, "REGULAR", "regular");
    var Nr = P(function() {}, "flash.text.FontType");
    R(Nr, "DEVICE", "device");
    R(Nr, "EMBEDDED", "embedded");
    R(Nr, "EMBEDDED_CFF", "embeddedCFF");
    var Or = function() {},
        Pr = P(Or, "flash.text.Font");
    Object.defineProperty(Or.prototype, "fontName", {
        get: function() {
            var a = this.__swiffy_v;
            return a ? a.name : null
        }
    });
    Object.defineProperty(Or.prototype, "fontStyle", {
        get: function() {
            var a = this.__swiffy_v;
            return a ? a.bold ? a.italic ? Mr.BOLD_ITALIC : Mr.BOLD : a.italic ? Mr.ITALIC : Mr.REGULAR : null
        }
    });
    Object.defineProperty(Or.prototype, "fontType", {
        get: function() {
            return this.__swiffy_v ? Nr.EMBEDDED : null
        }
    });
    Pr.enumerateFonts = function(a) {
        S(a, "Boolean", !1);
        a = [];
        var b = Xe.c.Qc,
            c;
        for (c in b)
            for (var d = b[c], e = 0; e < d.length; e++) {
                var f = new Or;
                Object.defineProperty(f, "__swiffy_v", {
                    value: d[e]
                });
                a.push(f)
            }
        return a
    };
    Or.prototype.hasGlyphs = function(a) {
        a = S(a, "String");
        var b = this.__swiffy_v;
        if (!b) return !1;
        for (var c = 0; c < a.length; c++)
            if (!b.gj(a.charAt(c))) return !1;
        return !0
    };
    Pr.registerFont = function(a) {
        S(a, "Class");
        throw L(1508, "font");
    };
    var Qr = function() {
            Fq.call(this)
        },
        Rr = P(Qr, "flash.text.TextField", Fq);
    ti(Qr, function(a, b) {
        return (new Lj({
            id: 0,
            height: 240,
            html: !0,
            selectable: !0,
            leftMargin: 0,
            rightMargin: 0
        }, new w(0, 0, 2E3, 2E3), a.xe)).Bc(a, null, b)
    });
    N(Rr, "textHeight", function() {
        T(this, "textHeight");
        return 0
    });
    N(Rr, "textWidth", function() {
        T(this, "textWidth");
        return 0
    });
    Qr.prototype.appendText = function(a) {
        var b = this.__swiffy_d;
        b.kd(b.Oa + mj(String(a)))
    };
    Qr.prototype.getTextFormat = function(a, b) {
        var c = this.__swiffy_d.Pt(a, b);
        return Sr(c)
    };
    Qr.prototype.setTextFormat = function(a, b, c) {
        var d = this.__swiffy_d;
        a = S(a, "flash.text.TextFormat");
        if (null == a) throw L(2007, "format");
        d.Bl(A(a), b, c)
    };
    Object.defineProperty(Qr.prototype, "text", {
        get: function() {
            var a = this.__swiffy_d,
                b = a.Oa;
            a.nc && (b = lj(b, a.definition.multiline));
            return b
        },
        set: function(a) {
            var b = this.__swiffy_d;
            a = String(a);
            b.nc && (a = mj(a), b.sk(!1));
            b.kd(a);
            b.sk(!0)
        }
    });
    Object.defineProperty(Qr.prototype, "htmlText", {
        get: function() {
            var a = this.__swiffy_d,
                b = a.Oa;
            a.nc && (b = nj(String(b)));
            return b
        },
        set: function(a) {
            var b = this.__swiffy_d,
                c = Jf();
            c.color = 4278190080;
            b.Bl(c);
            b.kd(String(a))
        }
    });
    Object.defineProperty(Qr.prototype, "length", {
        get: function() {
            return this.text.length
        }
    });
    Object.defineProperty(Qr.prototype, "textColor", {
        get: function() {
            return this.__swiffy_d.Ot()
        },
        set: function(a) {
            this.__swiffy_d.fu(a)
        }
    });
    Object.defineProperty(Qr.prototype, "autoSize", {
        get: function() {
            return this.__swiffy_d.Cg
        },
        set: function(a) {
            switch (a) {
                case "center":
                case "left":
                case "none":
                case "right":
                    break;
                default:
                    throw L(2008, "autoSize");
            }
            this.__swiffy_d.Yt(a)
        }
    });
    Object.defineProperty(Qr.prototype, "selectable", {
        get: function() {
            return this.__swiffy_d.ii
        },
        set: function(a) {
            a = S(a, "Boolean");
            this.__swiffy_d.eu(a)
        }
    });
    Object.defineProperty(Qr.prototype, "border", {
        get: function() {
            return this.__swiffy_d.Zh
        },
        set: function(a) {
            a = S(a, "Boolean");
            this.__swiffy_d.Zt(a)
        }
    });
    Object.defineProperty(Qr.prototype, "type", {
        get: function() {
            var a = Tr;
            return this.__swiffy_d.Ck ? a.INPUT : a.DYNAMIC
        },
        set: function(a) {
            switch (a) {
                case Tr.DYNAMIC:
                    a = !1;
                    break;
                case Tr.INPUT:
                    a = !0;
                    break;
                default:
                    throw L(2008, "type");
            }
            this.__swiffy_d.Zo(a)
        }
    });
    Object.defineProperty(Qr.prototype, "antiAliasType", {
        get: function() {
            return "advanced" == this.__swiffy_d.hn ? Lr.ADVANCED : Lr.NORMAL
        },
        set: function(a) {
            this.__swiffy_d.Xt(a == Lr.ADVANCED ? "advanced" : "normal")
        }
    });
    Object.defineProperty(Qr.prototype, "numLines", {
        get: function() {
            return this.__swiffy_d.de.length
        }
    });
    Qr.prototype.getLineText = function(a) {
        a = this.__swiffy_d.Ty(a);
        if (null === a) throw new RangeError;
        return a
    };
    Object.defineProperty(Qr.prototype, "multiline", {
        get: function() {
            return this.__swiffy_d.dh
        },
        set: function(a) {
            this.__swiffy_d.bu(!!a)
        }
    });
    Object.defineProperty(Qr.prototype, "wordWrap", {
        get: function() {
            return this.__swiffy_d.zi
        },
        set: function(a) {
            this.__swiffy_d.gu(!!a)
        }
    });
    Object.defineProperty(Qr.prototype, "embedFonts", {
        get: function() {
            return this.__swiffy_d.Gg
        },
        set: function(a) {
            this.__swiffy_d.au(!!a)
        }
    });
    Object.defineProperty(Qr.prototype, "defaultTextFormat", {
        get: function() {
            return Sr(this.__swiffy_d.Nt())
        },
        set: function(a) {
            var b = this.__swiffy_d;
            a = S(a, "flash.text.TextFormat");
            if (null == a) throw L(2007, "format");
            b.cu(A(a))
        }
    });
    var Fi = function(a) {
        this.c = a;
        this.qd = new Wm(this);
        this.startTime = Date.now();
        this.Sf = Vi;
        this.vk = "";
        this.uk = null;
        this.ye = new $p;
        this.Ee = [];
        this.Dk = {};
        this.tm()
    };
    Fi.prototype.Gk = "vm";
    U.yy(Fi);
    g = Fi.prototype;
    g.Tp = !0;
    g.trace = function(a) {
        Ti(a)
    };
    g.sz = function(a, b, c) {
        var d = Nn();
        d.prototype = Object.create(this.qd);
        Hn(d, Mn, On, b.ag(a.init, void 0)(null, qn), Tn, Jn, null, "global", !0);
        var e = zn(d);
        b.xi(a.traits, null, qn, e, c);
        var f = this;
        a = function(a) {
            Object.defineProperty(f.qd, a, {
                get: function() {
                    return Zn.call(d)[a]
                },
                set: function(b) {
                    Zn.call(d)[a] = b
                },
                configurable: !0
            })
        };
        for (var h in e.traits) h in this.qd || a(h)
    };
    g.Xx = function(a) {
        var b = new bo(a.definition, this);
        a = a.definition.scripts;
        for (var c = 0; c < a.length; ++c) this.sz(a[c], b, void 0)
    };
    g.Vw = function(a, b, c, d) {
        var e = a.Um.classes[c],
            f = Nn(),
            h = b.pr(f),
            k = a.Vf(e.name).re(),
            n = [];
        if (e.interfaces)
            for (var r = 0; r < e.interfaces.length; ++r) {
                var t = a.Vf(e.interfaces[r]).Ob(this.qd);
                t && n.push(this.qd[t])
            }
        r = (r = a.ag(e.init, void 0)) ? r(d, h) : Vn(1001);
        Un(r, k, {
            Zf: f,
            Jk: d,
            interfaces: n
        });
        delete this.qd[k.sc()];
        a.xi(e.traits, d, h, zn(f), void 0);
        a.xi(e.ctraits, null, h, void 0, void 0).Uk(f);
        a.classes[c] = f;
        a.ag(e.cinit, void 0)(null, b).call(f);
        return f
    };
    g.cz = function(a, b) {
        if (b == Jn) return null != a;
        if (!q(b)) throw L(1040);
        return Object(a) instanceof b
    };
    g.yg = function() {
        return this.ye.__swiffy_d
    };
    g.Ge = function() {};
    g.qh = function(a) {
        if (a) {
            a = a.ho();
            for (var b = 0; b < a.length; b++) a[b].qh()
        }
        this.fb()
    };
    g.nh = function() {};
    g.tr = function() {
        return !0
    };
    g.cl = function() {};
    g.Mr = function() {};
    g.bl = function() {};
    g.Jr = function() {};
    g.uf = function(a) {
        this.Ee.push(a)
    };
    g.fb = function() {
        for (; 0 < this.Ee.length;) this.Ee.shift().call(this)
    };
    g.Rr = function(a, b) {
        var c = this.Sf;
        this.Sf = Wi;
        try {
            a()
        } catch (d) {
            b(d), c.call(this, d)
        } finally {
            this.Sf = c
        }
    };
    g.Sm = function() {};
    g.gq = function(a, b, c) {
        a[b] = c
    };
    g.hq = function(a, b) {
        a[b] = null
    };
    g.Lm = function() {};
    g.Km = function() {};
    g.qr = function() {};
    g.fireEvent = function(a, b, c, d) {
        if (a instanceof Tp && (b = Jq[c.type])) {
            c = b(a, c);
            if (d) return a.dispatchEvent(c);
            this.uf(na(a.dispatchEvent, a, c))
        }
        return !1
    };
    g.xx = function(a, b) {
        var c = this.Dk[a];
        c || (this.Dk[a] = c = []);
        c.push(b)
    };
    g.Qr = function(a, b) {
        var c = this.Dk[a];
        c && Ia(c, b)
    };
    g.qq = function(a) {
        a = a.ea;
        if (a instanceof Tp) {
            var b = a.__swiffy_listeners;
            if (b)
                for (var c in b) b[c].length && Wp(c, a) && this.Qr(c, a)
        }
    };
    g.Ut = function(a) {
        var b = this.Dk[a];
        if (b)
            for (var c = 0; c < b.length; ++c) this.uf(oa(Xp, a, b[c]))
    };
    g.bq = function() {
        this.Ut("enterFrame")
    };
    g.cq = function() {
        this.Ut("exitFrame")
    };
    g.cm = function(a, b) {
        var c = a && a.xf;
        c && (c.dispatchEvent(new Ep(Gp.INIT)), l(b) && c.dispatchEvent(new Pp(Qp.HTTP_STATUS, !1, !1, b)), c.dispatchEvent(new Ep(Gp.COMPLETE)))
    };
    g.Lq = function(a, b, c) {
        a.ti();
        b = a.ea;
        Rn(b).apply(b, c);
        a.ih(mf, !0)
    };
    g.Pa = function(a, b) {
        var c = a.definition.vj,
            c = Qn(ui(b, c) ? c : b),
            d;
        for (d in c) q(c[d]) && (c[d] = na(c[d], c));
        return c
    };
    g.tm = function() {
        var a = this;
        jf.prototype.Pa = function() {
            return a.Pa(this, Aq)
        };
        z.prototype.Pa = function() {
            return a.Pa(this, this.definition.vj && ui(Rq, this.definition.vj) ? Qq : Tq)
        };
        tj.prototype.Pa = function() {
            return a.Pa(this, Wq)
        };
        yh.prototype.Pa = function() {
            return a.Pa(this, Qr)
        };
        pi.prototype.Pa = function() {
            return a.Pa(this, Pq)
        };
        pf.prototype.Pa = function() {
            return a.Pa(this, Eq)
        };
        si.prototype.Pa = function() {
            return a.Pa(this, X)
        };
        Eg.prototype.Pa = function() {
            return a.Pa(this, lr)
        };
        qf.prototype.Pa = function() {
            return a.Pa(this,
                Oq)
        }
    };
    g.Zs = function(a, b) {
        if (null == a) throw L(1007);
        var c = a.prototype.__swiffy_buildsym;
        if (c) {
            var d = Qn(a),
                c = c(this.c, d);
            c instanceof jf && c.jc(this.c.fi());
            c && c.Ja(!1, b);
            return d
        }
        return Zn.apply(a, b)
    };
    g.ys = function(a, b) {
        Object.defineProperty(this.ye.parameters, a, {
            value: b,
            configurable: !0,
            enumerable: !0
        })
    };
    g.kk = function(a) {
        return a instanceof z && a.xn || a instanceof tj
    };
    g.jr = function(a, b) {
        var c;
        c = a ? a.ho() : [];
        var d;
        d = b ? b.ho() : [];
        var e = c.length - 1,
            f = d.length - 1;
        if (0 < e && 0 < f)
            for (; c[e] == d[f];) e--, f--;
        for (var h = 0; h < c.length; h++) c[h].Jx(b);
        for (h = 0; h <= e; h++) c[h].dt(b);
        for (h = 0; h <= f; h++) d[h].et(a);
        for (h = 0; h < d.length; h++) d[h].Kx(b)
    };
    g.jh = function(a) {
        var b = this.c.Rc;
        b && !b.be() && b.fireEvent(a)
    };
    g.Pp = function(a, b) {
        b.jc(a.fi())
    };
    g.rt = function(a, b) {
        a = String(a);
        b = String(b);
        return a < b ? -1 : a > b ? 1 : 0
    };
    g.qt = function(a, b) {
        a = String(a).toLowerCase();
        b = String(b).toLowerCase();
        return a < b ? -1 : a > b ? 1 : 0
    };
    g.st = function(a, b) {
        a = null !== a ? Number(a) : null;
        b = null !== b ? Number(b) : null;
        if (a !== a) throw L(1034, a, "Number");
        if (b !== b) throw L(1034, b, "Number");
        return a < b ? -1 : a > b ? 1 : 0
    };
    var Ur = null;
    Fi.prototype.Vd = function(a, b) {
        var c;
        this.uk ? c = Z(this.uk).ma : (Ur || (Ur = new DataView(new ArrayBuffer(1024))), c = Ur);
        if (0 > a || a + b > c.byteLength) throw L(1506);
        return c
    };
    USING_SWIFFY_MOCKS = !!aa.USING_SWIFFY_MOCKS;
    USING_XML_HTTP_MOCK = !!aa.USING_XML_HTTP_MOCK;
    var Vr = function(a, b, c) {
        Ad(b);
        this.Fd = a;
        this.xe = b.version;
        a = window.location.href;
        this.tu = c && c.renderer || aa.swiffy.CANVAS;
        this.nf = this.tu.ru(this);
        this.lc = new Uc(0, 0);
        this.Ae = !1;
        this.uu = new Qd;
        this.lu = b.fileSize;
        this.ku = !!b.truncated;
        this.om = new Pi(b.frameRate, this);
        this.ck = [];
        this.ep = [];
        this.Qc = {};
        var d = new nd,
            e = od(b, this, d);
        this.Va || this.zf(mi);
        this.Ag = [];
        this.he = null;
        this.qm = !1;
        this.vu = 1;
        this.tf = [];
        this.fp = !(c && c.dontWireEvents);
        this.Bb = document.createElement("div");
        this.Bb.style.position = "relative";
        this.Bb.style.width = "100%";
        this.Bb.style.height = "100%";
        this.Bb.style.overflow = "hidden";
        this.Bb.style.webkitTapHighlightColor = "rgba(0,0,0,0)";
        this.ha = new tj(this, b);
        this.ub = new z(e, this, "#0");
        this.Va instanceof Fi && (this.ub.jc("root1"), this.ub.dp(this.Va.yg()));
        this.ha.Ja();
        this.ub.su(19);
        this.ub.play();
        this.$l(this.ub, 0);
        this.Rc = null;
        this.ym = 0;
        this.Gj(d);
        this.ha.wp();
        this.ip = !1;
        this.ke = [];
        this.vf = null;
        this.Bp(a);
        this.Yj = new md;
        this.wf = new md;
        this.bm = Pa;
        this.qu = !(c && 0 == c.allowScriptAccess)
    };
    ba("swiffy.Stage", Vr, void 0);
    Vr.prototype.Ny = function() {
        this.om.stop();
        for (var a = 0; a < this.tf.length; a++) Xb(this.tf[a]);
        this.ha.ka();
        this.nf.ka();
        Yb(this.Bb);
        zb(this.Bb);
        this.yf().Vq()
    };
    Vr.prototype.destroy = Vr.prototype.Ny;
    Vr.prototype.lj = function(a) {
        this.ha.lj(a)
    };
    Vr.prototype.setBackground = Vr.prototype.lj;
    Vr.prototype.Az = function(a) {
        this.ts(yd(a))
    };
    Vr.prototype.setFlashVars = Vr.prototype.Az;
    Vr.prototype.Bp = function(a) {
        this.Va.yg().Ig(a);
        this.ts(Ek(a))
    };
    Vr.prototype.setSwfUrl = Vr.prototype.Bp;
    Vr.prototype.Mz = function(a) {
        this.bm = a || Pa
    };
    Vr.prototype.setUrlHook = Vr.prototype.Mz;
    Vr.prototype.start = function() {
        var a = this.om;
        this.Vr(function() {
            a.start()
        })
    };
    Vr.prototype.start = Vr.prototype.start;
    g = Vr.prototype;
    g.$l = function(a, b) {
        this.ha.Hd(a, -16384 + b);
        this.pa().qr(a, b)
    };
    g.Ku = function(a) {
        return this.ha.hd(-16384 + a)
    };
    g.Pk = function() {
        this.ym++
    };
    g.uh = function() {
        this.ym--;
        this.Wr()
    };
    g.tt = function() {
        return 0 == this.ym
    };
    g.Vr = function(a) {
        this.tt() ? a() : this.ck.push(a)
    };
    g.Wr = function() {
        if (this.tt()) {
            for (var a = 0; a < this.ck.length; a++)(0, this.ck[a])();
            this.ck = []
        }
    };
    g.Du = function() {
        this.fp = !1;
        if ("createTouch" in document) {
            Qb(this.Bb, "touchstart", this.qw, !1, this);
            Qb(this.Bb, "touchmove", this.pw, !1, this);
            Qb(this.Bb, "touchend", this.nw, !1, this);
            var a = Qb(document, "touchstart", this.rw, !1, this);
            this.tf.push(a);
            a = Qb(document, "touchend", this.ow, !1, this);
            this.tf.push(a)
        }
        Qb(this.Bb, "mousemove", this.hw, !1, this);
        Qb(this.Bb, "mousedown", this.gw, !1, this);
        Qb(this.Bb, "mouseup", this.jw, !1, this);
        Qb(this.Bb, "mouseout", this.iw, !1, this);
        Qb(this.Bb, "mouseover", function(a) {
            a.stopPropagation()
        }, !1);
        a = Qb(document, "mousedown", this.kw, !1, this);
        this.tf.push(a);
        a = Qb(document, "mouseup", this.mw, !1, this);
        this.tf.push(a);
        a = Qb(document, "mouseover", function(a) {
            this.lw(null, a)
        }, !1, this);
        this.tf.push(a);
        Qb(document, "keyup", this.fw, !1, this);
        Qb(new jc(document), "key", this.ew, !1, this)
    };
    g.dw = function(a) {
        this.ub.map(function(b) {
            if (b instanceof $i) return b.fireEvent(a)
        })
    };
    g.qw = function(a) {
        a.stopPropagation();
        var b = a.Fc.changedTouches;
        1 == a.Fc.touches.length && 1 == b.length && (this.Gs(a), this.Yj.rh(a))
    };
    g.gw = function(a) {
        a.stopPropagation();
        2 == a.button || this.Yj.Ti(a) || this.Gs(a)
    };
    g.Gs = function(a) {
        a = this.Ri(a);
        var b = this.ha.Ln(a);
        b && this.Si(b, a.x, a.y);
        this.tw()
    };
    g.hw = function(a) {
        a.stopPropagation();
        a = this.Ri(a);
        this.Si(this.ha.Ln(a), a.x, a.y)
    };
    g.pw = function(a) {
        a.stopPropagation();
        var b = this.Ri(a);
        this.Si(this.ha.Ln(b), b.x, b.y);
        null == this.vf && this.wf.rh(a)
    };
    g.nw = function(a) {
        a.stopPropagation();
        var b = a.Fc.changedTouches;
        0 == a.Fc.touches.length && 1 == b.length ? this.wf.Ti(a) || (this.wf.rh(a), this.As()) : this.wf.rh(a)
    };
    g.jw = function(a) {
        2 != a.button && (a.stopPropagation(), this.wf.Ti(a) || this.As())
    };
    g.rw = function(a) {
        a.stopPropagation();
        this.Ae = !0;
        this.setCapture(this.ha, !0);
        this.wf.rh(a)
    };
    g.kw = function(a) {
        a.stopPropagation();
        this.Yj.Ti(a) || (this.Ae = !0, this.setCapture(this.ha, !0))
    };
    g.ow = function(a) {
        a.stopPropagation();
        this.Ae = !1;
        this.releaseCapture(this.ha);
        this.wf.rh(a)
    };
    g.mw = function(a) {
        a.stopPropagation();
        this.Yj.Ti(a) || (this.Ae = !1, this.releaseCapture(this.ha))
    };
    g.iw = function(a) {
        a.stopPropagation();
        a = this.Ri(a);
        this.Si(null, a.x, a.y)
    };
    g.tw = function() {
        this.Rq();
        this.Ae = !0;
        this.Va.jh(new Vc(3));
        this.fb();
        this.Va.Ge();
        this.Rc ? this.Rc.Ge() : this.setCapture(this.ha);
        this.fb();
        this.Sg(!1)
    };
    g.As = function() {
        this.Ae = !1;
        this.Va.jh(new Vc(2));
        this.fb();
        this.Va.nh();
        this.Rc ? this.Rc.nh() : this.releaseCapture(this.ha);
        this.fb();
        this.Sg(!0)
    };
    g.Ri = function(a) {
        if (!this.ha.Jj) return null;
        var b = a.Fc.touches;
        b && 1 == b.length && (a = b[0]);
        var c = b = 0;
        if (a.pageX || a.pageY) b = a.pageX, c = a.pageY;
        else if (a.clientX || a.clientY) b = a.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, c = a.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        a = this.Fd;
        if (a.offsetLeft || a.offsetTop) b -= a.offsetLeft, c -= a.offsetTop;
        a = new Uc(b, c);
        a.ja(this.ha.Jj);
        return a
    };
    g.hu = function() {
        var a = this.ha,
            b = new w(0, 0, a.Ad, a.zd),
            c = window.pageXOffset - a.ug,
            a = window.pageYOffset - a.vg,
            c = new w(c, a, c + window.innerWidth, a + window.innerHeight);
        b.Wh(c);
        return b
    };
    g.fw = function(a) {
        this.Va.cl(a);
        this.Va.jh(new Vc(0));
        this.fb();
        this.Va.Mr();
        this.Sg(!0)
    };
    g.ew = function(a) {
        this.Va.bl(a);
        this.Va.jh(new Vc(1));
        this.fb();
        this.Va.Jr();
        this.dw(new Vc(20));
        this.fb();
        this.Sg(!0)
    };
    g.Iv = function() {
        return null != this.Rc
    };
    g.yn = function() {
        var a = "default";
        this.pa().tr() ? (this.jk() || this.Hv() || !this.Mf() && this.Iv()) && this.Rc && (a = this.Rc.Mk()) : a = "none";
        this.Bb.style.cursor = a
    };
    g.Gq = function(a, b, c, d, e, f) {
        this.tk();
        var h = null;
        l(c) && l(d) && l(e) && l(f) && (h = new w(20 * c, 20 * d, 20 * e, 20 * f));
        this.vf = new Sc(a, h, l(b) && b, this.lc.x, this.lc.y)
    };
    g.tk = function() {
        this.vf = null
    };
    g.Lu = function(a) {
        return null != this.vf && this.vf.clip === a
    };
    g.Si = function(a, b, c) {
        this.lc.x = b;
        this.lc.y = c;
        this.vf && this.vf.xv(b, c);
        this.Va.qh(a);
        if (a && (b = a.getParent())) {
            do this.Va.kk(b) || (a = b); while (b = b.getParent())
        }
        this.Rc != a && (this.Va.jr(this.ir(this.Rc), this.ir(a)), this.Rc = a, this.fb(), this.Sg(!1), this.yn())
    };
    g.ir = function(a) {
        return a != this.ha ? a : null
    };
    g.lw = function(a, b) {
        var c = this.Ri(b);
        null == c && (c = this.lc);
        this.Si(a, c.x, c.y)
    };
    g.Mf = function() {
        return !!this.he && !this.he.be()
    };
    g.jk = function() {
        return this.Mf() && this.qm
    };
    g.Ak = function(a) {
        return this.he == a && !a.be()
    };
    g.Hv = function() {
        var a = this.Rc;
        return !!a && this.Ak(a)
    };
    g.setCapture = function(a, b) {
        this.releaseCapture(a);
        this.he = a;
        b && (this.qm = !0, this.yn())
    };
    g.releaseCapture = function(a) {
        this.he && (this.yn(), this.he != a && (this.Rq(), this.he && (this.he.Hw(), this.fb())), this.he = null, this.qm = !1)
    };
    g.Yu = function(a) {
        this.Ag.push(a)
    };
    g.Gj = function(a, b) {
        a.Dx(this, b);
        this.ep.push(a);
        this.nf.Do(a)
    };
    g.Hm = function() {
        this.fp && this.Du();
        this.Ag = this.Ag.filter(function(a) {
            return !a.be()
        });
        this.Va.bq();
        for (var a = this.Ag.length - 1; 0 <= a; --a) {
            var b = this.Ag[a];
            b.fireEvent(new Vc(6));
            b.Hm()
        }
        this.ip || (this.ub.ea.$version = "HTML 11,0,0,0", this.ub.Ja(), this.fb(), this.ub.bi(7), this.ub.fireEvent(new Vc(7)), this.Va.cm(this.Va.yg()), this.ip = !0);
        this.Va.cq();
        this.fb();
        this.Sg(!this.Ae);
        this.ha.Nj()
    };
    g.zf = function(a) {
        this.Va || (this.Va = new a(this));
        return this.Va
    };
    g.pa = function() {
        return this.Va
    };
    g.fb = function() {
        this.Va.fb()
    };
    g.Sg = function(a) {
        for (var b = [], c = 0; c < this.ke.length; ++c) this.ke[c].Tx(a) || b.push(this.ke[c]);
        this.ke = b
    };
    g.Rq = function() {
        this.ke = []
    };
    g.si = function(a) {
        for (var b = 0; b < this.ke.length; ++b)
            if (this.ke[b].target == a.target) {
                this.ke[b] = a;
                return
            }
        this.ke.push(a)
    };
    g.un = function() {
        return this.om
    };
    g.yf = function() {
        return this.uu
    };
    g.ts = function(a) {
        for (var b = Object.keys(a), c = 0; c < b.length; c++) {
            var d = b[c],
                e = a[d];
            this.pa().ys(d, e[e.length - 1])
        }
    };
    g.fi = function() {
        return "instance" + this.vu++
    };
    g.Lb = function() {
        this.ha.wp();
        this.nf.In();
        this.Bb.parentNode || (this.nf.Zi(this.Bb), this.Fd.appendChild(this.Bb))
    };
    g.getName = function() {
        return this.Fd.id
    };
    g.Pu = function() {
        if (window.top == window) return !1;
        var a = this.Fd.parentNode;
        if (!a || a != document.body) return !1;
        for (a = a.firstChild; a; a = a.nextSibling)
            if (a != this.Fd && "SCRIPT" != a.tagName && (a.nodeType != Node.TEXT_NODE || a.nodeValue.trim())) return !1;
        return !0
    };
    g.Yq = function() {
        return this.qu ? this.Fd : null
    };
    var Wr = function() {};
    v(Wr, uj);
    ef.i(bj, Wr);
    ef.i(z, Wr);
    ef.i(tj, Wr);
    ef.i(Vr, Wr);
    Wr.prototype.Ec = function(a, b, c) {
        return this.ds(a.oa, b, c)
    };
    Wr.prototype.ds = function(a, b, c) {
        var d = [],
            e = !0;
        for (a = a.Ra; a; a = a.nextSibling)
            if (!a.Eb || c & 16) {
                for (; 0 < d.length && a.depth > d[d.length - 1];) d.pop(), b = b.tn();
                var f = c,
                    h = a.ci() && !(c & 16);
                if (h) {
                    if (a instanceof yh) continue;
                    d.push(a.Pc());
                    b = b.Uq(a.Bg(), a.Da());
                    f |= 16
                }
                e = (f & 24 ? ef.uc(a) : Lg(a)).ed(a, b, f) && e;
                h && (b = b.Tq())
            }
        for (c = 0; c < d.length; c++) b = b.tn();
        return e
    };
    var Xr = function() {};
    v(Xr, Wr);
    ef.i(pi, Xr);
    ef.i(Bi, Xr);
    Xr.prototype.Ec = function(a, b, c) {
        return this.ds(c & 8 ? a.Ff : a.oa, b, c)
    };
    var Yr = P(function() {}, "flash.text.TextFieldAutoSize");
    R(Yr, "CENTER", "center");
    R(Yr, "LEFT", "left");
    R(Yr, "NONE", "none");
    R(Yr, "RIGHT", "right");
    var Tr = P(function() {}, "flash.text.TextFieldType");
    R(Tr, "DYNAMIC", "dynamic");
    R(Tr, "INPUT", "input");
    var $r = function(a, b, c, d, e, f, h, k, n, r, t, p, s) {
        gf(this, new If);
        fg.call(this, a);
        vg.call(this, b);
        dg.call(this, c);
        Wf.call(this, d);
        jg.call(this, e);
        Bg.call(this, f);
        Dg.call(this, h);
        xg.call(this, k);
        Zr.call(this, n);
        pg.call(this, r);
        tg.call(this, t);
        hg.call(this, p);
        ng.call(this, s)
    };
    P($r, "flash.text.TextFormat");
    var Sr = function(a) {
            var b = Qn($r);
            gf(b, a);
            return b
        },
        Zr = function(a) {
            if (!Sf.call(this, a)) throw L(2008, "align");
        };
    Object.defineProperties($r.prototype, {
        align: {
            get: Rf,
            set: Zr
        },
        blockIndent: {
            get: Tf,
            set: Uf
        },
        bold: {
            get: Vf,
            set: Wf
        },
        bullet: {
            get: Xf,
            set: bg
        },
        color: {
            get: cg,
            set: dg
        },
        font: {
            get: eg,
            set: fg
        },
        indent: {
            get: gg,
            set: hg
        },
        italic: {
            get: ig,
            set: jg
        },
        kerning: {
            get: kg,
            set: lg
        },
        leading: {
            get: mg,
            set: ng
        },
        leftMargin: {
            get: og,
            set: pg
        },
        letterSpacing: {
            get: qg,
            set: rg
        },
        rightMargin: {
            get: sg,
            set: tg
        },
        size: {
            get: ug,
            set: vg
        },
        tabStops: {
            get: yg,
            set: function(a) {
                a = S(a, "Array", null, !0);
                zg.call(this, a)
            }
        },
        target: {
            get: wg,
            set: xg
        },
        underline: {
            get: Ag,
            set: Bg
        },
        url: {
            get: Cg,
            set: Dg
        }
    });
    var as = P(function() {}, "flash.text.TextFormatAlign");
    R(as, "CENTER", "center");
    R(as, "END", "end");
    R(as, "JUSTIFY", "justify");
    R(as, "LEFT", "left");
    R(as, "RIGHT", "right");
    R(as, "START", "start");
    var bs = function(a, b, c, d, e, f) {
            a = S(a, "String", "_serif");
            b = S(b, "String", "normal");
            c = S(c, "String", "normal");
            d = S(d, "String", "device");
            e = S(e, "String", "cff");
            f = S(f, "String", "horizontalStem");
            Q(this, "cffHinting", "String", f);
            Q(this, "fontLookup", "String", d);
            Q(this, "fontName", "String", a);
            Q(this, "fontPosture", "String", c);
            Q(this, "fontWeight", "String", b);
            Q(this, "locked", "Boolean", !1);
            Q(this, "renderingMode", "String", e)
        },
        cs = P(bs, "flash.text.engine.FontDescription");
    bs.prototype.clone = function() {
        return new bs(this.fontName, this.fontWeight, this.fontPosture, this.fontLookup, this.renderingMode, this.ccfHinting)
    };
    cs.isDeviceFontCompatible = function(a, b, c) {
        S(a, "String", "");
        S(b, "String", "");
        S(c, "String", "");
        T(this, "isDeviceFontCompatible");
        return !1
    };
    cs.isFontCompatible = function(a, b, c) {
        S(a, "String", "");
        S(b, "String", "");
        S(c, "String", "");
        T(this, "isFontCompatible");
        return !1
    };
    var ds = P(function() {}, "flash.text.engine.FontPosture");
    Object.defineProperty(ds, "ITALIC", {
        value: "italic"
    });
    Object.defineProperty(ds, "NORMAL", {
        value: "normal"
    });
    var es = P(function() {}, "flash.text.engine.FontWeight");
    Object.defineProperty(es, "BOLD", {
        value: "bold"
    });
    Object.defineProperty(es, "NORMAL", {
        value: "normal"
    });
    var fs = function() {
            Tp.call(this);
            Q(this, "builtInItems", "flash.ui.ContextMenuBuiltInItems", null);
            Q(this, "clipboardItems", "flash.ui.ContextMenuClipboardItems", null);
            Q(this, "clipboardMenu", "Boolean", !1);
            Q(this, "customItems", "Array", []);
            Q(this, "link", "flash.net.URLRequest", null)
        },
        gs = P(fs, "flash.ui.ContextMenu", bq);
    Object.defineProperty(gs, "isSupported", {
        value: !1
    });
    fs.prototype.clone = function() {
        return new fs
    };
    fs.prototype.hideBuiltInItems = function() {
        T(this, "hideBuiltInItems")
    };
    var hs = function(a, b, c, d) {
            Tp.call(this);
            a = S(a, "String");
            b = S(b, "Boolean", !1);
            d = S(d, "Boolean", !0);
            Q(this, "caption", "String", a);
            Q(this, "separatorBefore", "Boolean", b);
            Q(this, "visible", "Boolean", d)
        },
        is = P(hs, "flash.ui.ContextMenuItem", cq);
    hs.prototype.clone = function() {
        return new hs(this.caption, this.separatorBefore, this.enabled, this.visible)
    };
    is.systemClearMenuItem = function() {
        T(this, "systemClearMenuItem");
        return null
    };
    is.systemCopyLinkMenuItem = function() {
        T(this, "systemCopyLinkMenuItem");
        return null
    };
    is.systemCopyMenuItem = function() {
        T(this, "systemCopyMenuItem");
        return null
    };
    is.systemCutMenuItem = function() {
        T(this, "systemCutMenuItem");
        return null
    };
    is.systemOpenLinkMenuItem = function() {
        T(this, "systemOpenLinkMenuItem");
        return null
    };
    is.systemPasteMenuItem = function() {
        T(this, "systemPasteMenuItem");
        return null
    };
    is.systemSelectAllMenuItem = function() {
        T(this, "systemSelectAllMenuItem");
        return null
    };
    var js = P(function() {}, "flash.ui.Keyboard");
    Object.defineProperties(js, {
        capsLock: {
            value: !1
        },
        hasVirtualKeyboard: {
            value: !1
        },
        numLock: {
            value: !1
        },
        physicalKeyboardType: {
            value: "alphanumeric"
        },
        CharCodeStrings: {
            value: "Up Down Left Right F1 F2 F3 F4 F5 F6 F7 F8 F9 F10 F11 F12 F13 F14 F15 F16 F17 F18 F19 F20 F21 F22 F23 F24 F25 F26 F27 F28 F29 F30 F31 F32 F33 F34 F35 Insert Delete Home Begin End PgUp PgDn PrntScrn ScrlLck Pause SysReq Break Reset Stop Menu User Sys Print ClrLn ClrDsp InsLn DelLn InsChr DelChr Prev Next Select Exec Undo Redo Find Help ModeSw".split(" ")
        },
        A: {
            value: 65
        },
        ALTERNATE: {
            value: 18
        },
        AUDIO: {
            value: 16777239
        },
        B: {
            value: 66
        },
        BACK: {
            value: 16777238
        },
        BACKQUOTE: {
            value: 192
        },
        BACKSLASH: {
            value: 220
        },
        BACKSPACE: {
            value: 8
        },
        BLUE: {
            value: 16777219
        },
        C: {
            value: 67
        },
        CAPS_LOCK: {
            value: 20
        },
        CHANNEL_DOWN: {
            value: 16777221
        },
        CHANNEL_UP: {
            value: 16777220
        },
        COMMA: {
            value: 188
        },
        COMMAND: {
            value: 15
        },
        CONTROL: {
            value: 17
        },
        D: {
            value: 68
        },
        DELETE: {
            value: 46
        },
        DOWN: {
            value: 40
        },
        DVR: {
            value: 16777241
        },
        E: {
            value: 69
        },
        END: {
            value: 35
        },
        ENTER: {
            value: 13
        },
        EQUAL: {
            value: 187
        },
        ESCAPE: {
            value: 27
        },
        EXIT: {
            value: 16777237
        },
        F: {
            value: 70
        },
        F1: {
            value: 112
        },
        F10: {
            value: 121
        },
        F11: {
            value: 122
        },
        F12: {
            value: 123
        },
        F13: {
            value: 124
        },
        F14: {
            value: 125
        },
        F15: {
            value: 126
        },
        F2: {
            value: 113
        },
        F3: {
            value: 114
        },
        F4: {
            value: 115
        },
        F5: {
            value: 116
        },
        F6: {
            value: 117
        },
        F7: {
            value: 118
        },
        F8: {
            value: 119
        },
        F9: {
            value: 120
        },
        FAST_FORWARD: {
            value: 16777226
        },
        G: {
            value: 71
        },
        GREEN: {
            value: 16777217
        },
        GUIDE: {
            value: 16777236
        },
        H: {
            value: 72
        },
        HELP: {
            value: 16777245
        },
        HOME: {
            value: 36
        },
        I: {
            value: 73
        },
        INFO: {
            value: 16777235
        },
        INPUT: {
            value: 16777243
        },
        INSERT: {
            value: 45
        },
        J: {
            value: 74
        },
        K: {
            value: 75
        },
        KEYNAME_BEGIN: {
            value: "Begin"
        },
        KEYNAME_BREAK: {
            value: "Break"
        },
        KEYNAME_CLEARDISPLAY: {
            value: "ClrDsp"
        },
        KEYNAME_CLEARLINE: {
            value: "ClrLn"
        },
        KEYNAME_DELETE: {
            value: "Delete"
        },
        KEYNAME_DELETECHAR: {
            value: "DelChr"
        },
        KEYNAME_DELETELINE: {
            value: "DelLn"
        },
        KEYNAME_DOWNARROW: {
            value: "Down"
        },
        KEYNAME_END: {
            value: "End"
        },
        KEYNAME_EXECUTE: {
            value: "Exec"
        },
        KEYNAME_F1: {
            value: "F1"
        },
        KEYNAME_F10: {
            value: "F10"
        },
        KEYNAME_F11: {
            value: "F11"
        },
        KEYNAME_F12: {
            value: "F12"
        },
        KEYNAME_F13: {
            value: "F13"
        },
        KEYNAME_F14: {
            value: "F14"
        },
        KEYNAME_F15: {
            value: "F15"
        },
        KEYNAME_F16: {
            value: "F16"
        },
        KEYNAME_F17: {
            value: "F17"
        },
        KEYNAME_F18: {
            value: "F18"
        },
        KEYNAME_F19: {
            value: "F19"
        },
        KEYNAME_F2: {
            value: "F2"
        },
        KEYNAME_F20: {
            value: "F20"
        },
        KEYNAME_F21: {
            value: "F21"
        },
        KEYNAME_F22: {
            value: "F22"
        },
        KEYNAME_F23: {
            value: "F23"
        },
        KEYNAME_F24: {
            value: "F24"
        },
        KEYNAME_F25: {
            value: "F25"
        },
        KEYNAME_F26: {
            value: "F26"
        },
        KEYNAME_F27: {
            value: "F27"
        },
        KEYNAME_F28: {
            value: "F28"
        },
        KEYNAME_F29: {
            value: "F29"
        },
        KEYNAME_F3: {
            value: "F3"
        },
        KEYNAME_F30: {
            value: "F30"
        },
        KEYNAME_F31: {
            value: "F31"
        },
        KEYNAME_F32: {
            value: "F32"
        },
        KEYNAME_F33: {
            value: "F33"
        },
        KEYNAME_F34: {
            value: "F34"
        },
        KEYNAME_F35: {
            value: "F35"
        },
        KEYNAME_F4: {
            value: "F4"
        },
        KEYNAME_F5: {
            value: "F5"
        },
        KEYNAME_F6: {
            value: "F6"
        },
        KEYNAME_F7: {
            value: "F7"
        },
        KEYNAME_F8: {
            value: "F8"
        },
        KEYNAME_F9: {
            value: "F9"
        },
        KEYNAME_FIND: {
            value: "Find"
        },
        KEYNAME_HELP: {
            value: "Help"
        },
        KEYNAME_HOME: {
            value: "Home"
        },
        KEYNAME_INSERT: {
            value: "Insert"
        },
        KEYNAME_INSERTCHAR: {
            value: "InsChr"
        },
        KEYNAME_INSERTLINE: {
            value: "InsLn"
        },
        KEYNAME_LEFTARROW: {
            value: "Left"
        },
        KEYNAME_MENU: {
            value: "Menu"
        },
        KEYNAME_MODESWITCH: {
            value: "ModeSw"
        },
        KEYNAME_NEXT: {
            value: "Next"
        },
        KEYNAME_PAGEDOWN: {
            value: "PgDn"
        },
        KEYNAME_PAGEUP: {
            value: "PgUp"
        },
        KEYNAME_PAUSE: {
            value: "Pause"
        },
        KEYNAME_PREV: {
            value: "Prev"
        },
        KEYNAME_PRINT: {
            value: "Print"
        },
        KEYNAME_PRINTSCREEN: {
            value: "PrntScrn"
        },
        KEYNAME_REDO: {
            value: "Redo"
        },
        KEYNAME_RESET: {
            value: "Reset"
        },
        KEYNAME_RIGHTARROW: {
            value: "Right"
        },
        KEYNAME_SCROLLLOCK: {
            value: "ScrlLck"
        },
        KEYNAME_SELECT: {
            value: "Select"
        },
        KEYNAME_STOP: {
            value: "Stop"
        },
        KEYNAME_SYSREQ: {
            value: "SysReq"
        },
        KEYNAME_SYSTEM: {
            value: "Sys"
        },
        KEYNAME_UNDO: {
            value: "Undo"
        },
        KEYNAME_UPARROW: {
            value: "Up"
        },
        KEYNAME_USER: {
            value: "User"
        },
        L: {
            value: 76
        },
        LAST: {
            value: 16777233
        },
        LEFT: {
            value: 37
        },
        LEFTBRACKET: {
            value: 219
        },
        LIVE: {
            value: 16777232
        },
        M: {
            value: 77
        },
        MASTER_SHELL: {
            value: 16777246
        },
        MENU: {
            value: 16777234
        },
        MINUS: {
            value: 189
        },
        N: {
            value: 78
        },
        NEXT: {
            value: 16777230
        },
        NUMBER_0: {
            value: 48
        },
        NUMBER_1: {
            value: 49
        },
        NUMBER_2: {
            value: 50
        },
        NUMBER_3: {
            value: 51
        },
        NUMBER_4: {
            value: 52
        },
        NUMBER_5: {
            value: 53
        },
        NUMBER_6: {
            value: 54
        },
        NUMBER_7: {
            value: 55
        },
        NUMBER_8: {
            value: 56
        },
        NUMBER_9: {
            value: 57
        },
        NUMPAD: {
            value: 21
        },
        NUMPAD_0: {
            value: 96
        },
        NUMPAD_1: {
            value: 97
        },
        NUMPAD_2: {
            value: 98
        },
        NUMPAD_3: {
            value: 99
        },
        NUMPAD_4: {
            value: 100
        },
        NUMPAD_5: {
            value: 101
        },
        NUMPAD_6: {
            value: 102
        },
        NUMPAD_7: {
            value: 103
        },
        NUMPAD_8: {
            value: 104
        },
        NUMPAD_9: {
            value: 105
        },
        NUMPAD_ADD: {
            value: 107
        },
        NUMPAD_DECIMAL: {
            value: 110
        },
        NUMPAD_DIVIDE: {
            value: 111
        },
        NUMPAD_ENTER: {
            value: 108
        },
        NUMPAD_MULTIPLY: {
            value: 106
        },
        NUMPAD_SUBTRACT: {
            value: 109
        },
        O: {
            value: 79
        },
        P: {
            value: 80
        },
        PAGE_DOWN: {
            value: 34
        },
        PAGE_UP: {
            value: 33
        },
        PAUSE: {
            value: 16777224
        },
        PERIOD: {
            value: 190
        },
        PLAY: {
            value: 16777223
        },
        PREVIOUS: {
            value: 16777231
        },
        Q: {
            value: 81
        },
        QUOTE: {
            value: 222
        },
        R: {
            value: 82
        },
        RECORD: {
            value: 16777222
        },
        RED: {
            value: 16777216
        },
        REWIND: {
            value: 16777227
        },
        RIGHT: {
            value: 39
        },
        RIGHTBRACKET: {
            value: 221
        },
        S: {
            value: 83
        },
        SEARCH: {
            value: 16777247
        },
        SEMICOLON: {
            value: 186
        },
        SETUP: {
            value: 16777244
        },
        SHIFT: {
            value: 16
        },
        SKIP_BACKWARD: {
            value: 16777229
        },
        SKIP_FORWARD: {
            value: 16777228
        },
        SLASH: {
            value: 191
        },
        SPACE: {
            value: 32
        },
        STOP: {
            value: 16777225
        },
        STRING_BEGIN: {
            value: "\uf72a"
        },
        STRING_BREAK: {
            value: "\uf732"
        },
        STRING_CLEARDISPLAY: {
            value: "\uf73a"
        },
        STRING_CLEARLINE: {
            value: "\uf739"
        },
        STRING_DELETE: {
            value: "\uf728"
        },
        STRING_DELETECHAR: {
            value: "\uf73e"
        },
        STRING_DELETELINE: {
            value: "\uf73c"
        },
        STRING_DOWNARROW: {
            value: "\uf701"
        },
        STRING_END: {
            value: "\uf72b"
        },
        STRING_EXECUTE: {
            value: "\uf742"
        },
        STRING_F1: {
            value: "\uf704"
        },
        STRING_F10: {
            value: "\uf70d"
        },
        STRING_F11: {
            value: "\uf70e"
        },
        STRING_F12: {
            value: "\uf70f"
        },
        STRING_F13: {
            value: "\uf710"
        },
        STRING_F14: {
            value: "\uf711"
        },
        STRING_F15: {
            value: "\uf712"
        },
        STRING_F16: {
            value: "\uf713"
        },
        STRING_F17: {
            value: "\uf714"
        },
        STRING_F18: {
            value: "\uf715"
        },
        STRING_F19: {
            value: "\uf716"
        },
        STRING_F2: {
            value: "\uf705"
        },
        STRING_F20: {
            value: "\uf717"
        },
        STRING_F21: {
            value: "\uf718"
        },
        STRING_F22: {
            value: "\uf719"
        },
        STRING_F23: {
            value: "\uf71a"
        },
        STRING_F24: {
            value: "\uf71b"
        },
        STRING_F25: {
            value: "\uf71c"
        },
        STRING_F26: {
            value: "\uf71d"
        },
        STRING_F27: {
            value: "\uf71e"
        },
        STRING_F28: {
            value: "\uf71f"
        },
        STRING_F29: {
            value: "\uf720"
        },
        STRING_F3: {
            value: "\uf706"
        },
        STRING_F30: {
            value: "\uf721"
        },
        STRING_F31: {
            value: "\uf722"
        },
        STRING_F32: {
            value: "\uf723"
        },
        STRING_F33: {
            value: "\uf724"
        },
        STRING_F34: {
            value: "\uf725"
        },
        STRING_F35: {
            value: "\uf726"
        },
        STRING_F4: {
            value: "\uf707"
        },
        STRING_F5: {
            value: "\uf708"
        },
        STRING_F6: {
            value: "\uf709"
        },
        STRING_F7: {
            value: "\uf70a"
        },
        STRING_F8: {
            value: "\uf70b"
        },
        STRING_F9: {
            value: "\uf70c"
        },
        STRING_FIND: {
            value: "\uf745"
        },
        STRING_HELP: {
            value: "\uf746"
        },
        STRING_HOME: {
            value: "\uf729"
        },
        STRING_INSERT: {
            value: "\uf727"
        },
        STRING_INSERTCHAR: {
            value: "\uf73d"
        },
        STRING_INSERTLINE: {
            value: "\uf73b"
        },
        STRING_LEFTARROW: {
            value: "\uf702"
        },
        STRING_MENU: {
            value: "\uf735"
        },
        STRING_MODESWITCH: {
            value: "\uf747"
        },
        STRING_NEXT: {
            value: "\uf740"
        },
        STRING_PAGEDOWN: {
            value: "\uf72d"
        },
        STRING_PAGEUP: {
            value: "\uf72c"
        },
        STRING_PAUSE: {
            value: "\uf730"
        },
        STRING_PREV: {
            value: "\uf73f"
        },
        STRING_PRINT: {
            value: "\uf738"
        },
        STRING_PRINTSCREEN: {
            value: "\uf72e"
        },
        STRING_REDO: {
            value: "\uf744"
        },
        STRING_RESET: {
            value: "\uf733"
        },
        STRING_RIGHTARROW: {
            value: "\uf703"
        },
        STRING_SCROLLLOCK: {
            value: "\uf72f"
        },
        STRING_SELECT: {
            value: "\uf741"
        },
        STRING_STOP: {
            value: "\uf734"
        },
        STRING_SYSREQ: {
            value: "\uf731"
        },
        STRING_SYSTEM: {
            value: "\uf737"
        },
        STRING_UNDO: {
            value: "\uf743"
        },
        STRING_UPARROW: {
            value: "\uf700"
        },
        STRING_USER: {
            value: "\uf736"
        },
        SUBTITLE: {
            value: 16777240
        },
        T: {
            value: 84
        },
        TAB: {
            value: 9
        },
        U: {
            value: 85
        },
        UP: {
            value: 38
        },
        V: {
            value: 86
        },
        VOD: {
            value: 16777242
        },
        W: {
            value: 87
        },
        X: {
            value: 88
        },
        Y: {
            value: 89
        },
        YELLOW: {
            value: 16777218
        },
        Z: {
            value: 90
        }
    });
    js.isAccessible = function() {
        T(this, "isAccessible");
        return !1
    };
    var ks = P(function() {}, "flash.utils.CompressionAlgorithm");
    Object.defineProperties(ks, {
        DEFLATE: {
            value: "deflate"
        },
        ZLIB: {
            value: "zlib"
        }
    });
    var ls = {};
    var ko = function() {
            this.Tt = {}
        },
        jo = null;
    ko.prototype.xb = function(a) {
        var b = this.Tt[a];
        b || ((b = "@" === a.charAt(0)) && (a = a.substring(1)), b = this.Tt[a] = ho("", a, b));
        return b
    };
    ko.prototype.Hr = function(a, b, c) {
        var d = c ? Dn : b.__swiffy_baseclass;
        if (!d) return null;
        for (var e = [], f = d; f; f = f.__swiffy_baseclass) a.cg(this.xb("extendsClass")).cd(this.xb("@type"), f.__swiffy_name.Db()), e[f.__swiffy_typeid] = !0;
        if (!c) {
            e[b.__swiffy_typeid] = !0;
            b = b.__swiffy_if;
            for (var h in b) e[h] || (c = b[h], a.cg(this.xb("implementsInterface")).cd(this.xb("@type"), c.__swiffy_name.Db()))
        }
        return d
    };
    ko.prototype.cw = function(a, b) {
        for (var c in b.traits)
            if (!(0 <= c.indexOf("."))) {
                var d = b.traits[c],
                    e;
                d instanceof vn ? (e = a.cg(this.xb("accessor")), d.Ud && d.gf ? e.cd(this.xb("@access"), "readwrite") : d.Ud ? e.cd(this.xb("@access"), "readonly") : d.gf && e.cd(this.xb("@access"), "writeonly")) : e = d instanceof tn ? a.cg(this.xb("method")) : d.uw ? a.cg(this.xb("constant")) : a.cg(this.xb("variable"));
                e.cd(this.xb("@name"), c)
            }
    };
    var an = function() {
        Object.defineProperty(this, "__swiffy_v", {
            value: {}
        })
    };
    P(an, "flash.utils.Dictionary");
    var ms = 0,
        ns = function(a, b) {
            this.key = m(a) && /^[0-9]+$/.test(a) ? parseInt(a, 10) : a;
            this.value = b
        },
        os = function(a) {
            if (!a.Ta && !a.uri) switch (a = a.localName, typeof a) {
                case "object":
                    if (null === a) return "_null";
                case "function":
                    var b = a.__swiffy_dic_key;
                    b || (a.__swiffy_dic_key = b = ++ms);
                    return b;
                default:
                    return "_" + a
            }
        };
    Object.defineProperty(an.prototype, "toJSON", {
        value: function(a) {
            return a = S(a, "String")
        },
        writable: !0,
        configurable: !0
    });
    Object.defineProperty(an.prototype, "__swiffy_proxy", {
        value: {
            Gh: function(a, b) {
                var c = os(a);
                if (c) return c = (c = this.__swiffy_v[c]) && c.value, kn(c, a), c.apply(this, b);
                throw L(1069, a.Db(), "flash.utils.Dictionary");
            },
            Yc: function(a) {
                return (a = os(a)) ? delete this.__swiffy_v[a] : !1
            },
            te: function(a) {
                var b = os(a);
                if (b) return (a = this.__swiffy_v[b]) && a.value;
                throw L(1069, a.Db(), "flash.utils.Dictionary");
            },
            mg: function(a) {
                return (a = os(a)) ? a in this.__swiffy_v : !1
            },
            Uh: function(a) {
                var b = this.__swiffy_v;
                return b[Object.keys(b)[a -
                    1]].key
            },
            tg: function(a) {
                var b = this.__swiffy_v;
                return a++ < Object.keys(b).length ? a : 0
            },
            Vh: function(a) {
                var b = this.__swiffy_v;
                return b[Object.keys(b)[a - 1]].value
            },
            setProperty: function(a, b) {
                var c = os(a);
                if (c) this.__swiffy_v[c] = new ns(a.localName, b);
                else throw L(1056, a.Db(), "flash.utils.Dictionary");
            }
        }
    });
    var fr = P(function() {}, "flash.utils.Endian");
    Object.defineProperty(fr, "BIG_ENDIAN", {
        value: "bigEndian"
    });
    Object.defineProperty(fr, "LITTLE_ENDIAN", {
        value: "littleEndian"
    });
    var Y = function() {
            Object.defineProperty(this, "__swiffy_v", {
                value: {
                    ma: new DataView(new ArrayBuffer(0)),
                    position: 0,
                    bc: !1
                }
            });
            Q(this, "objectEncoding", "uint", 0);
            Q(this, "shareable", "Boolean", !1)
        },
        Z = function(a) {
            return a.__swiffy_v
        },
        ps = P(Y, "flash.utils.ByteArray");
    N(ps, "bytesAvailable", function() {
        var a = Z(this);
        return Math.max(0, a.ma.byteLength - a.position)
    });
    N(ps, "endian", function() {
        return Z(this).bc ? "littleEndian" : "bigEndian"
    });
    O(ps, "endian", function(a) {
        a = S(a, "String");
        var b = Z(this);
        if ("littleEndian" === a) b.bc = !0;
        else if ("bigEndian" === a) b.bc = !1;
        else {
            if (null === a) throw L(2007, "endian");
            throw L(2008, "type");
        }
    });
    N(ps, "position", function() {
        return Z(this).position
    });
    O(ps, "position", function(a) {
        a = S(a, "uint");
        Z(this).position = a
    });
    N(ps, "length", function() {
        return Z(this).ma.byteLength
    });
    O(ps, "length", function(a) {
        a = S(a, "uint");
        var b = Z(this);
        qs(b, a);
        b.position > a && (b.position = a)
    });
    var qs = function(a, b) {
            var c = a.ma;
            if (b > c.buffer.byteLength) {
                var d = new Uint8Array(b + (b >> 3) + (9 > b ? 3 : 6));
                d.set(new Uint8Array(c.buffer));
                a.ma = new DataView(d.buffer, 0, b)
            } else b !== c.byteLength && (a.ma = new DataView(c.buffer, 0, b))
        },
        rs = function(a, b) {
            var c = a.position;
            if (c + b > a.ma.byteLength) throw L(2030);
            a.position = c + b;
            return c
        },
        ss = function(a, b) {
            var c = a.position,
                d = c + b;
            d > a.ma.byteLength && qs(a, d);
            a.position = c + b;
            return c
        },
        gr = function(a, b) {
            var c = Z(a),
                d = ss(c, b);
            return new Uint8Array(c.ma.buffer, d, b)
        };
    Object.defineProperty(ps, "defaultObjectEncoding", {
        value: 0
    });
    Object.defineProperty(Y.prototype, "__swiffy_proxy", {
        value: {
            te: function(a) {
                a = a.nj(1069, this);
                var b = Z(this).ma;
                return a < b.byteLength ? b.getUint8(a) : void 0
            },
            mg: function(a) {
                return a.yd() < Z(this).ma.byteLength
            },
            setProperty: function(a, b) {
                var c = a.nj(1056, this);
                b = S(b, "int");
                var d = Z(this),
                    e = c + 1;
                e > d.ma.byteLength && qs(d, e);
                d.ma.setUint8(c, b)
            }
        }
    });
    Y.prototype.atomicCompareAndSwapIntAt = function(a, b, c) {
        a = S(a, "int");
        b = S(b, "int");
        c = S(c, "int");
        var d = this.position;
        try {
            this.position = a;
            var e = this.readInt();
            e == b && (this.position = a, this.writeInt(c));
            return e
        } finally {
            this.position = d
        }
    };
    Y.prototype.atomicCompareAndSwapLength = function(a, b) {
        a = S(a, "int");
        b = S(b, "int");
        var c = this.length;
        c == a && (this.length = b);
        return c
    };
    Y.prototype.clear = function() {
        var a = Z(this);
        a.ma = new DataView(new ArrayBuffer(0));
        a.position = 0
    };
    Y.prototype.compress = function(a) {
        S(a, "String");
        T(this, "compress")
    };
    Y.prototype.deflate = function() {
        T(this, "deflate")
    };
    Y.prototype.inflate = function() {
        this.uncompress("deflate")
    };
    Y.prototype.readBoolean = function() {
        var a = Z(this),
            b = rs(a, 1);
        return !!a.ma.getUint8(b)
    };
    Y.prototype.readByte = function() {
        var a = Z(this),
            b = rs(a, 1);
        return a.ma.getInt8(b)
    };
    Y.prototype.readBytes = function(a, b, c) {
        a = S(a, "flash.utils.ByteArray");
        b = S(b, "uint", 0);
        c = S(c, "uint", 0);
        if (0 == c) {
            var d = Z(this),
                d = d.ma.byteLength - d.position;
            0 < d && (c = d)
        }
        var d = c,
            e = Z(this),
            f = rs(e, d),
            d = new Uint8Array(e.ma.buffer, f, d);
        a = Z(a);
        e = b + c;
        e > a.ma.byteLength && qs(a, e);
        (new Uint8Array(a.ma.buffer, b, c)).set(d)
    };
    Y.prototype.readDouble = function() {
        var a = Z(this),
            b = rs(a, 8);
        return a.ma.getFloat64(b, a.bc)
    };
    Y.prototype.readFloat = function() {
        var a = Z(this),
            b = rs(a, 4);
        return a.ma.getFloat32(b, a.bc)
    };
    Y.prototype.readInt = function() {
        var a = Z(this),
            b = rs(a, 4);
        return a.ma.getInt32(b, a.bc)
    };
    Y.prototype.readMultiByte = function(a, b) {
        S(a, "uint");
        S(b, "String");
        T(this, "readMultiByte");
        return ""
    };
    Y.prototype.readObject = function() {
        T(this, "readObject")
    };
    Y.prototype.readShort = function() {
        var a = Z(this),
            b = rs(a, 2);
        return a.ma.getInt16(b, a.bc)
    };
    Y.prototype.readUnsignedByte = function() {
        var a = Z(this),
            b = rs(a, 1);
        return a.ma.getUint8(b)
    };
    Y.prototype.readUnsignedInt = function() {
        var a = Z(this),
            b = rs(a, 4);
        return a.ma.getUint32(b, a.bc)
    };
    Y.prototype.readUnsignedShort = function() {
        var a = Z(this),
            b = rs(a, 2);
        return a.ma.getUint16(b, a.bc)
    };
    var ts = function(a, b) {
        if (0 == b) return "";
        for (var c = rs(a, b), d = [], e = 0; e < b; ++e, ++c) d.push(a.ma.getUint8(c));
        return Dk(escape(String.fromCharCode.apply(String, d)))
    };
    Y.prototype.readUTF = function() {
        var a = Z(this),
            b = rs(a, 2),
            b = a.ma.getUint16(b, a.bc);
        return ts(a, b)
    };
    Y.prototype.readUTFBytes = function(a) {
        a = S(a, "uint");
        return ts(Z(this), a)
    };
    Y.prototype.toJSON = function(a) {
        S(a, "String");
        return "ByteArray"
    };
    Y.prototype.uncompress = function(a) {
        a = S(a, "String", "zlib");
        a = ls[a];
        if (!a) throw L(2058);
        var b = Z(this);
        if (b.ma.byteLength) {
            var c = new Uint8Array(b.ma.byteLength + 1);
            c.set(new Uint8Array(b.ma.buffer, 0, b.ma.byteLength));
            try {
                var d = a(c);
                b.ma = new DataView(d.buffer, 0, d.length);
                b.position = 0
            } catch (e) {
                throw L(2058);
            }
        }
    };
    Y.prototype.writeBoolean = function(a) {
        a = S(a, "Boolean");
        var b = Z(this),
            c = ss(b, 1);
        b.ma.setUint8(c, a ? 1 : 0)
    };
    Y.prototype.writeByte = function(a) {
        a = S(a, "int");
        var b = Z(this),
            c = ss(b, 1);
        b.ma.setInt8(c, a)
    };
    Y.prototype.writeBytes = function(a, b, c) {
        a = S(a, "flash.utils.ByteArray");
        b = S(b, "uint", 0);
        c = S(c, "uint", 0);
        a = Z(a).ma;
        var d = a.byteLength;
        if (b > d || b + c > d) throw L(2006);
        0 == c && (c = d - b);
        gr(this, c).set(new Uint8Array(a.buffer, b, c))
    };
    Y.prototype.writeDouble = function(a) {
        a = S(a, "Number");
        var b = Z(this),
            c = ss(b, 8);
        b.ma.setFloat64(c, a, b.bc)
    };
    Y.prototype.writeFloat = function(a) {
        a = S(a, "Number");
        var b = Z(this),
            c = ss(b, 4);
        b.ma.setFloat32(c, a, b.bc)
    };
    Y.prototype.writeInt = function(a) {
        a = S(a, "int");
        var b = Z(this),
            c = ss(b, 4);
        b.ma.setInt32(c, a, b.bc)
    };
    Y.prototype.writeMultiByte = function(a, b) {
        S(a, "String");
        S(b, "String");
        T(this, "writeMultiByte")
    };
    Y.prototype.writeObject = function() {
        T(this, "writeObject")
    };
    Y.prototype.writeShort = function(a) {
        a = S(a, "int");
        var b = Z(this),
            c = ss(b, 2);
        b.ma.setInt16(c, a, b.bc)
    };
    Y.prototype.writeUnsignedInt = function(a) {
        a = S(a, "uint");
        var b = Z(this),
            c = ss(b, 4);
        b.ma.setUint32(c, a, b.bc)
    };
    Y.prototype.writeUTF = function(a) {
        a = S(a, "String");
        a = unescape(encodeURIComponent(a));
        var b = a.length;
        if (65535 < b) throw L(2006);
        var c = Z(this),
            d = ss(c, b + 2);
        c.ma.setUint16(d, b, c.bc);
        for (var d = d + 2, e = 0; e < b; ++e, ++d) c.ma.setUint8(d, a.charCodeAt(e))
    };
    Y.prototype.writeUTFBytes = function(a) {
        a = S(a, "String");
        a = unescape(encodeURIComponent(a));
        for (var b = a.length, c = Z(this), d = ss(c, b), e = 0; e < b; ++e, ++d) c.ma.setUint8(d, a.charCodeAt(e))
    };
    var us = function() {};
    P(us, "flash.utils.Proxy");
    Xm("flash.utils.flash_proxy", new go(void 0, "http://www.adobe.com/2006/actionscript/flash/proxy"));
    Xm(Ym("http://www.adobe.com/2006/actionscript/flash/proxy", "isAttribute"), function(a) {
        return a instanceof Zm && a.__swiffy_v.Ta
    });
    var vs = function(a) {
        var b = a.localName;
        return a.Ta || a.uri || !ha(b) ? new Zm(a) : String(b)
    };
    Object.defineProperty(us.prototype, "__swiffy_proxy", {
        value: {
            Gh: function(a, b) {
                a = vs(a);
                return this[Ym("http://www.adobe.com/2006/actionscript/flash/proxy", "callProperty")].apply(this, [a].concat(b))
            },
            Yc: function(a) {
                a = vs(a);
                return this[Ym("http://www.adobe.com/2006/actionscript/flash/proxy", "deleteProperty")].call(this, a)
            },
            Ml: function(a) {
                a = vs(a);
                return this[Ym("http://www.adobe.com/2006/actionscript/flash/proxy", "getDescendants")].call(this, a)
            },
            te: function(a) {
                a = vs(a);
                return this[Ym("http://www.adobe.com/2006/actionscript/flash/proxy",
                    "getProperty")].call(this, a)
            },
            mg: function(a) {
                a = a.Db();
                return this[Ym("http://www.adobe.com/2006/actionscript/flash/proxy", "hasProperty")].call(this, a)
            },
            Uh: function(a) {
                return this[Ym("http://www.adobe.com/2006/actionscript/flash/proxy", "nextName")].call(this, S(a, "int"))
            },
            tg: function(a) {
                return this[Ym("http://www.adobe.com/2006/actionscript/flash/proxy", "nextNameIndex")].call(this, S(a, "int"))
            },
            Vh: function(a) {
                return this[Ym("http://www.adobe.com/2006/actionscript/flash/proxy", "nextValue")].call(this,
                    S(a, "int"))
            },
            setProperty: function(a, b) {
                a = vs(a);
                this[Ym("http://www.adobe.com/2006/actionscript/flash/proxy", "setProperty")].call(this, a, b)
            }
        }
    });
    var ws = function(a, b) {
        Object.defineProperty(us.prototype, Ym("http://www.adobe.com/2006/actionscript/flash/proxy", a), {
            value: function() {
                throw L(b, a);
            }
        })
    };
    ws("callProperty", 2090);
    ws("deleteProperty", 2092);
    ws("getDescendants", 2093);
    ws("getProperty", 2088);
    ws("hasProperty", 2091);
    ws("setProperty", 2089);
    ws("nextNameIndex", 2105);
    ws("nextName", 2106);
    ws("nextValue", 2107);
    var xs = function(a) {
            return a.__swiffy_v
        },
        ys = P(function(a, b) {
            Tp.call(this);
            var c = xs(this);
            c.zo = null;
            c.Al = !1;
            c.Ws = S(a, "Number");
            c.Xs = S(b, "int", 0);
            c.Dl = 0
        }, "flash.utils.Timer", Tp);
    N(ys, "delay", function() {
        return xs(this).Ws
    });
    O(ys, "delay", function(a) {
        xs(this).Ws = S(a, "Number")
    });
    N(ys, "repeatCount", function() {
        return xs(this).Xs
    });
    O(ys, "repeatCount", function(a) {
        xs(this).Xs = S(a, "int")
    });
    N(ys, "running", function() {
        return xs(this).Al
    });
    N(ys, "currentCount", function() {
        return xs(this).Dl
    });
    M(ys, "start", function() {
        var a = xs(this);
        if (!a.Al) {
            var b = this;
            a.zo = window.setInterval(function() {
                a.Dl++;
                b.dispatchEvent(Zn.call(uq, vq.TIMER, !1, !1));
                var c = b.repeatCount;
                c && a.Dl >= c && (b.stop(), b.dispatchEvent(Zn.call(uq, vq.TIMER_COMPLETE, !1, !1)))
            }, this.delay);
            a.Al = !0
        }
    });
    M(ys, "stop", function() {
        var a = xs(this);
        window.clearTimeout(a.zo);
        a.Al = !1;
        a.zo = null
    });
    M(ys, "reset", function() {
        this.stop();
        xs(this).Dl = 0
    });
})();

swiffyobject_fire = {"tags":[{"bounds":[{"ymin":-1775,"ymax":1814,"xmin":-2060,"xmax":2059}],"id":1,"fillstyles":[{"color":[-961216],"type":1}],"paths":[{"fill":0,"data":[":60T75Qa:589ca119d:a:137Cb6W8t20E63cb0S4j90B4jb7E:6H4Cb9G3I4e61Cb3m8Z90c24Ec"]}],"flat":true,"type":1},{"bounds":[{"ymin":-1632,"ymax":747,"xmin":-747,"xmax":1129}],"id":2,"fillstyles":[{"color":[-16776961],"type":1}],"paths":[{"fill":0,"data":[":29k32Pa5H2db2J5e4J5ja:va0cQa5e:ae3caH5cacbb6eT7f5Lbh2G7c7Ic:29D7gbIs4E1ea8H5fb3K2i8K5sb8c9C5h2Ga7i3Fb2i2F8g6Qc:64c62ebHv1D9dbLj8J4gb0H4e0H5rb:5de0fb:Yt5Db0cr0c8ebO9fO2habab0d4H3e1JbsY2eYapbabwa:jb5d4C2g3Ibw8Dw2Ha:ObI5c3E5cb7B:7B7Cb:V8b1Fb7b9C7b4HaF6Cc:8D8Ra::b0E5i3Q8mb0Er1O0da7O8cb4J2c1P3jb8C7d4E2kaC1gb4I4D8S9EboY2d6Da4k1Hb2e5D5g9Jap3FaW1cb1C6c7G8eb6Ez9T9db8Mt5S8eb1F2d2H5lb8M1d4Y7ma5E0eb3Q4q9T06dbI9eI3lb:10c8u28eb2i2i0t6nb9k8e8y0ga1gca7kHb5jO8s9Eb6k4E3u2OaaAb6o6O1t58Ca8e0Eb2e9E2e1SaD8JbC4Ed7Hbq0H3l5Ra::b8M7b8T7pa6C6gbV0H3F2Oav5Cb2f3I2f1Rb:1D7B5Ib8B4E8B3Ib:8F5e5Ka9k0Gb1h3D5k5Hb7d8E2d6Nc"]}],"flat":true,"type":1},{"bounds":[{"ymin":-2009,"ymax":961,"xmin":-1104,"xmax":1806}],"id":3,"fillstyles":[{"transform":["2216F160D450f0388F86b42D"],"type":2,"gradient":{"stops":[{"color":[-2005757],"offset":[0]},{"color":[-26571],"offset":[255]}]}}],"paths":[{"fill":0,"data":[":04K09Ta:970ba910b:a:970Bc"]}],"flat":true,"type":1},{"bounds":[{"ymin":-1655,"ymax":752,"xmin":-752,"xmax":1155}],"id":4,"fillstyles":[{"color":[-16776961],"type":1}],"paths":[{"fill":0,"data":[":55k55Pa7J4db2F8b8D1ibtT5cTayea:yaS1db8bC3f7Bb2d0C0e3Ga::aIdaE:bT:T7Bb:2C5c3Fc:46D1la2K9hb1E0d1H9gbqI9cKa5gMb6dX3f6Gap8Fc:91c14ebLt2E6da8G8db0J8f0J4oa:7cbf5D7d5Db3c:3c8dbH3cI5eaAlaabbd7B0c7Fb3c0E9e0Ebt:tyb:tJ0db7c2D8d4Fbl7Bl3GaB2CaWxa0C:bEJE7Bb:R0f3Mc:7J30Cb8Bp6D7dbS3c9C8kbT3h0D4kb1C1e2I1ebZj4Djb0N:2J0Ha::b2Dh2H6eaLpa8C8ib9D1n6G6raOvbX0c2E6db8G2D4P3FaAKb:7F5g4Lb5g6E5g6Mb:TJ0Da6F1fb1F9d4K9db9B:5ETaaTa0Cia6Gpb1Eo0K5ib0E2g5H3ja2D4cb5L2d0W0ma5E0eb2Q3q9T01dbK4fK2mb:12c0v31eb4i5i6t9nb7k7e4y9fa2gca9kHb4jP8s9Eb6k5E5u4OaaAb1k1K6p5XabEb6c1I7d2Sa2c8Da5g0Ib5d2F5d2KaJ8Ob:7K2g6Wa::b9F7c8L6mb8E0j2I0jb7D:7D2Fb:6D5e9Ib5e3E5e1Lb:7CQ0GbR3CR0Hb:1H5c1Ka4h7Fa2cXb9d9D9d8NaJ0Nb:0G3c8Jc"]}],"flat":true,"type":1},{"bounds":[{"ymin":-1731,"ymax":757,"xmin":-756,"xmax":1214}],"id":5,"fillstyles":[{"color":[-16776961],"type":1}],"paths":[{"fill":0,"data":[":14l31QbW7b6H2fb5G2d8F4iabcbnQ2d2Ca1e8Bb1e2C9e9Ic:36D9obOo6E6cb6E8b7E1gabda1f7Cb3cY0e4Gc:2P9hbMi4Cpb1Dl2D7dabdbnN6dUbrL8b6Dc:74e:aV1cb6C2d3G2daOEbOGOTao0Ca::bPh1D1ca8E2fb8E7f1H7fb0E:0E7DaaIai9Ba::b9Dp9H9gb0D2fR6jaeFbpS7bXaf1cac9dacuafsabiap9Bbv0C4e0Cb5c:5c0fb:6eN6hbM7b7D9eb7eO1l6Fb3i5G9l5Ra::bVp9Dpb5C:5C5Db:7C1d9Fa4f6Da5d3Dbq7By5Hc:1G85ca2E0fb6G2g2I8ma:palFb8c:8c8eaI2eb8bE4f5Db0e6E0e7LaJ5NaAAc:22D6Ib0M2c4R2qb1C2h6D2jb3C5d5I5db7B:2EOb0CQ0C2Db:1D2e1Ha3cXb5h3E5h5KaAAaZ1cbZv6Evb2E:2E2CaaIaMea9Fsb7K9b4N2fb4F8g5M5rb8B5d5I3gb2H9b5L2eb4Dy5I2gb9F5c0M6ha6E1eb0Q0q8T96cbL8fL0nbA14c0v35eb7i7i3u2ob5k4e9x7fa5gca1lIb3jP6s8Eb8k5E7u5OacBb8g0H9l1Qb4d1C6g1Ib7d0I7d6RaJ5Hb:7J3i8Sb2i2I2i2Qb:0ET2Qb:0E2c1JaBBb0G:6H5jbH3eS2gbR3c3F3cb5C:2FYb0C8B0C5Gb:8B9d6Kb5d2H1e2Qa::b5C8c0G8cb0I:0I5Jb:Zx6Hbs6D5c6Fa::aXbb5D:5D0Eb:5E2e4Jc"]}],"flat":true,"type":1},{"bounds":[{"ymin":-1785,"ymax":762,"xmin":-761,"xmax":1289}],"id":6,"fillstyles":[{"color":[-16776961],"type":1}],"paths":[{"fill":0,"data":[":44l30QaMfaOhanJanDc:1d5EaHcaGhaAdaAdaDdbPr9CwaKhaWvaAdaAda:daDda:aaAba:da:ca:aa:cbhItMabBahEa7cRaeFadCaeHaaCanQbkQh1Cc:08D4mbSe3CsbOnQ1cadcafca8bPaw1CaEGaFBc:76c5hb9C6e4F6eb2C:2C7BacKa::b2I8e4G4kbuZ6cZbt:tyaBsaZ0da8cIaemb:rT6db3f2D7h8Fb3d7D3d1KaN1Fc:6F41cbB1c1D9db9Cq9C9fae2ebdU6d7Eb9c4C9c0FaJ3Ec:O5ra5C7bbPrS3ca:ca:aaAba:baBhaCsa0f0Ea:5Dc:4X52Cb9F:6M9bb6G2c5K8ga7H8jb0F7f6I7fa2EJb0ER0E0Fal1CagNaS:bA:B:b3D:2I0db1F8d1M5oa0G3kb8B5d5F2gbXs1J2ea3L3eb2P9c94B9na6E1eb9P9p9T91cbN2gM9nbA16c2v38eb0j0j0v6ob3k2e4x4fa6gda4lIb2jP3s8Eb0l6E1v7OacBb8i0J3o8Ua8k7Lb2j1M2j13CaC9DaJabX:2E0Cb0C2C0C5Fb:9G5f2Qb5f2I5f8Qb:2G7C8Pb9E3e1K3eb7G:7G7Hb:3D2c8Ga1g7Eb2j7G2j0Ra:EaMbb1C:2FYb5C8B5C5Fb:6F5e8Ka1f9DbB:E:c"]}],"flat":true,"type":1},{"bounds":[{"ymin":-1690,"ymax":757,"xmin":-756,"xmax":1346}],"id":7,"fillstyles":[{"color":[-16776961],"type":1}],"paths":[{"fill":0,"data":[":88l73OaDjaEBadDacCabAc:5e7KaFbaTlb7Ez3I9gaAcaEkaDla:da:caAda:caHgaAcaacbdfjfbd:iBaaBaeDavJaFfaBdaBcaBdaDdaGha:ga:ha:gadhacgaiaadAabBadDadDagDaeCau1Dbp0Cu7Ea::aFaaKhaaDabDabCau0Cam4CahHbfF:Kc:5N5kaHabMk0CoaGhaSsaFkaDka:da:da:caBdaBdaAda:caAda:daKiaCfaacaecaoFagGahHaoEafHadGadDagGahTagRa:Da:CaiJbdHBMc:7i0uaNeaHgaOlaEgaIlaMuaL7baahacgbeflfbe:jCahHamOa:Ca:DahSalVa:DaaDaaDahJbhIbPc:83B0Jb8Bl1Hua6Hpb5Ix3I8ja2d9BbvP5dPbhBoBb8b:8b7bb:mT0ebT7cT0eaaaa1cKareaE5cb8d4C8h5Na7c0Kc:60E0kb8Kf3Q3ibZ8c8C3iaX5nbN2h5D9kbQt7G4ca9M4cb9N6d89B3ob9G8c0O7ia6E1eb0Q0q8T96cbL8fL0nbA14c0v35eb7i7i3u2ob5k4e9x7fa5gca1lIb3jP6s8Eb8k5E7u5OacBb9g1H1m3Qa3c0Ga1j0Oa5i0Ob8f1M8d47Ca::bZq1DqaUDbQEZQbTXY0DbCIC9Cb:6J0h72Bb0h7P0h0Ra:Gb9C4e5I4eb5G:5G0Eb:1C9f6Jb3g0H6h4Qa:6DbQy2D5db5D6c6G6cb2D:2D5CaeYa::b2C0f8H0fb2C:2C2Cb:W4g6Ja::bXy2L8db5L9b7N0hb5G3p2N4wb1C3c0F7dbRx8CxbY:Y7Db:9D0f7Ha3d9Ba7d2Dbt2Cw2Ibb4Ck3Ea::bJjVjaQEaE7Cb:3Dy4Ga0e9Da:Ec"]}],"flat":true,"type":1},{"bounds":[{"ymin":-1756,"ymax":752,"xmin":-752,"xmax":1411}],"id":8,"fillstyles":[{"color":[-16776961],"type":1}],"paths":[{"fill":0,"data":[":00n56QbOf8BsbRq8B8cacbahaacDacDan:akFalKaaDahOadKaDCaGBc:0R0maKgaJha:da:caCdaBda:dafbafBahHadDafCabCabDabDaaCaDCaGBc:5INba5e1E4ha6K5db5P1f1R0wb1g4H5m4Hbn:3cjbyny3caJ7bb9d9B1k2Pb2f2M4e3Rc:63E1tb1Kd8P5ib1D7f4F9taG1dbO2h7B9jbM1c2E7gb2d3C5i7Kaz5Db7b8D8o3Pa::bB:D:bP:7BTbLVL2Eb:3H2h4Mc:65c9tbT4d7H3ib5H2f0N2fb5F:5F0HadTa:Ab7Jc9Q6fb8E1e4J9oaFla6G7qa4C7db3GX2O2CbHXH0Eb:8Cz1HaZBb1L:73B8gb3N3g2W0ra2E9ca5E0eb2Q3q9T01dbK4fK2mb:12c0v31eb4i5i6t9nb7k7e4y9fa2gca9kHb4jP8s9Eb6k5E5u4OaaAb4f4F0k6MafJb6d6G2g0Pb0e3I1l2Rb4e7F4g1Kb9b6F9b6Ob:3ET8MbT5HT2Lb:1Dy4Ha::b7Bn5Dnb5F:5F7Gb:0F0j4Rb0j5L0j1TaF4DbUp7CpbU:7CObOOO2Cb:Yo5Hb:WM3Ec"]}],"flat":true,"type":1},{"tags":[{"clip":3,"id":2,"matrix":0,"type":3,"depth":1},{"id":3,"matrix":0,"type":3,"depth":2},{"type":2},{"type":2},{"type":4,"depth":1},{"clip":3,"id":4,"matrix":0,"type":3,"depth":1},{"type":2},{"type":2},{"type":4,"depth":1},{"clip":3,"id":5,"matrix":0,"type":3,"depth":1},{"type":2},{"type":2},{"type":4,"depth":1},{"clip":3,"id":6,"matrix":0,"type":3,"depth":1},{"type":2},{"type":2},{"type":4,"depth":1},{"clip":3,"id":7,"matrix":0,"type":3,"depth":1},{"type":2},{"type":2},{"type":4,"depth":1},{"clip":3,"id":8,"matrix":0,"type":3,"depth":1},{"type":2},{"type":2}],"id":9,"frameCount":12,"type":7},{"tags":[{"clip":10,"id":1,"matrix":0,"type":3,"depth":1},{"id":9,"matrix":"2195O507L507l2195O19i24F","colortransform":"6Y4w6Y1h6Y4c::","type":3,"depth":2},{"id":9,"matrix":"3775K963F963f3775K99j06H","colortransform":"6Y5y6Y8w6Y7t::","type":3,"depth":6},{"type":2}],"id":10,"frameCount":1,"type":7},{"id":10,"matrix":"::::40i20r","type":3,"depth":1},{"type":2}],"fileSize":3417,"v":"7.0.3","backgroundColor":-1,"frameSize":{"ymin":0,"ymax":3500,"xmin":0,"xmax":3000},"frameCount":1,"frameRate":24,"version":10};


$(window).load(function(){
var stage_fire = new swiffy.Stage(document.getElementById('swiffycontainer_fire'),
          swiffyobject_fire);
      stage_fire.setBackground(null);
      stage_fire.start();
  });