function init() {
    var e = new ymaps.Map("map", {
        center: [47.249076, 39.72934],
        zoom: 13,
        controls: ["zoomControl"]
    }, {searchControlProvider: "yandex#search"}), t = new ymaps.Placemark([47.228534, 39.71362], {
        balloonContentHeader: "Красноармейская 63/90",
        balloonContentBody: "Розничный отдел:<br/> +7 (863) 302-03-04<br/> +7 (919) 888-6-777 <br/> Время\nработы:<br/> ПН-СБ 10:00-19:00<br/> ВС 10:00-16:00<br/> td@pamira.ru<br/>",
        hintContent: "Красноармейская 63/90"
    });
    myPlacemark02 = new ymaps.Placemark([47.267786, 39.761483], {
        balloonContentHeader: "Троллейбусная 24/2В",
        balloonContentBody: "Офис:<br/> +7 (863) 300-52-97<br/> Время работы:<br/> ПН-ПТ 10:00-18:00<br/>",
        hintContent: "Троллейбусная 24/2В"
    }), myPlacemark03 = new ymaps.Placemark([47.269126, 39.761824], {
        balloonContentHeader: "50-летия Ростсельмаша, 2-6/22Б",
        balloonContentBody: "Склад:<br/> +7 (863) 219-21-39<br/> Время работы:<br/> ПН-ПТ 9:00-18:00",
        hintContent: "50-летия Ростсельмаша, 2-6/22Б"
    }), e.behaviors.disable(["scrollZoom"]), e.geoObjects.add(t), e.geoObjects.add(myPlacemark02), e.geoObjects.add(myPlacemark03)
}

(function () {
    var $lg = $('.map_menu');
    var $lg_items = null;
    var $lg_item_labels = null;

    if ($lg.length > 0) {
        $lg_items = $lg.find('.map-item');
        $lg_item_labels = $lg_items.find('.map-item_label');
        $lg_item_labels.on('click', function () {
            console.log('click');
            var wndSize = $(window).width();
            $(this).parents('.map_menu').find('.active').removeClass('active');
            var currentItem = $(this).parent('.map-item');
            currentItem.addClass('active');
            if (wndSize <= 576) {
                setTimeout(function () {
                    $('html, body').animate({
                        scrollTop: parseInt(currentItem.offset().top) - 80
                    }, 300);
                }, 300);
            }
        });
    }
})();

!function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";

    function i(e, t, i) {
        var n, r = (t = t || ae).createElement("script");
        if (r.text = e, i) for (n in _e) i[n] && (r[n] = i[n]);
        t.head.appendChild(r).parentNode.removeChild(r)
    }

    function n(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? he[pe.call(e)] || "object" : typeof e
    }

    function r(e) {
        var t = !!e && "length" in e && e.length, i = n(e);
        return !ye(e) && !be(e) && ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function s(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function a(e, t, i) {
        return ye(t) ? we.grep(e, function (e, n) {
            return !!t.call(e, n, e) !== i
        }) : t.nodeType ? we.grep(e, function (e) {
            return e === t !== i
        }) : "string" != typeof t ? we.grep(e, function (e) {
            return ue.call(t, e) > -1 !== i
        }) : we.filter(t, e, i)
    }

    function o(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) ;
        return e
    }

    function l(e) {
        var t = {};
        return we.each(e.match(Ie) || [], function (e, i) {
            t[i] = !0
        }), t
    }

    function d(e) {
        return e
    }

    function c(e) {
        throw e
    }

    function u(e, t, i, n) {
        var r;
        try {
            e && ye(r = e.promise) ? r.call(e).done(t).fail(i) : e && ye(r = e.then) ? r.call(e, t, i) : t.apply(void 0, [e].slice(n))
        } catch (e) {
            i.apply(void 0, [e])
        }
    }

    function h() {
        ae.removeEventListener("DOMContentLoaded", h), e.removeEventListener("load", h), we.ready()
    }

    function p(e, t) {
        return t.toUpperCase()
    }

    function f(e) {
        return e.replace($e, "ms-").replace(He, p)
    }

    function m() {
        this.expando = we.expando + m.uid++
    }

    function g(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ze.test(e) ? JSON.parse(e) : e)
    }

    function v(e, t, i) {
        var n;
        if (void 0 === i && 1 === e.nodeType) if (n = "data-" + t.replace(Re, "-$&").toLowerCase(), "string" == typeof(i = e.getAttribute(n))) {
            try {
                i = g(i)
            } catch (e) {
            }
            je.set(e, t, i)
        } else i = void 0;
        return i
    }

    function y(e, t, i, n) {
        var r, s, a = 20, o = n ? function () {
                return n.cur()
            } : function () {
                return we.css(e, t, "")
            }, l = o(), d = i && i[3] || (we.cssNumber[t] ? "" : "px"),
            c = (we.cssNumber[t] || "px" !== d && +l) && Ve.exec(we.css(e, t));
        if (c && c[3] !== d) {
            for (l /= 2, d = d || c[3], c = +l || 1; a--;) we.style(e, t, c + d), (1 - s) * (1 - (s = o() / l || .5)) <= 0 && (a = 0), c /= s;
            c *= 2, we.style(e, t, c + d), i = i || []
        }
        return i && (c = +c || +l || 0, r = i[1] ? c + (i[1] + 1) * i[2] : +i[2], n && (n.unit = d, n.start = c, n.end = r)), r
    }

    function b(e) {
        var t, i = e.ownerDocument, n = e.nodeName, r = Ue[n];
        return r || (t = i.body.appendChild(i.createElement(n)), r = we.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), Ue[n] = r, r)
    }

    function _(e, t) {
        for (var i, n, r = [], s = 0, a = e.length; s < a; s++) (n = e[s]).style && (i = n.style.display, t ? ("none" === i && (r[s] = We.get(n, "display") || null, r[s] || (n.style.display = "")), "" === n.style.display && Ge(n) && (r[s] = b(n))) : "none" !== i && (r[s] = "none", We.set(n, "display", i)));
        for (s = 0; s < a; s++) null != r[s] && (e[s].style.display = r[s]);
        return e
    }

    function w(e, t) {
        var i;
        return i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && s(e, t) ? we.merge([e], i) : i
    }

    function x(e, t) {
        for (var i = 0, n = e.length; i < n; i++) We.set(e[i], "globalEval", !t || We.get(t[i], "globalEval"))
    }

    function T(e, t, i, r, s) {
        for (var a, o, l, d, c, u, h = t.createDocumentFragment(), p = [], f = 0, m = e.length; f < m; f++) if ((a = e[f]) || 0 === a) if ("object" === n(a)) we.merge(p, a.nodeType ? [a] : a); else if (Ze.test(a)) {
            for (o = o || h.appendChild(t.createElement("div")), l = (Ke.exec(a) || ["", ""])[1].toLowerCase(), d = Qe[l] || Qe._default, o.innerHTML = d[1] + we.htmlPrefilter(a) + d[2], u = d[0]; u--;) o = o.lastChild;
            we.merge(p, o.childNodes), (o = h.firstChild).textContent = ""
        } else p.push(t.createTextNode(a));
        for (h.textContent = "", f = 0; a = p[f++];) if (r && we.inArray(a, r) > -1) s && s.push(a); else if (c = we.contains(a.ownerDocument, a), o = w(h.appendChild(a), "script"), c && x(o), i) for (u = 0; a = o[u++];) Je.test(a.type || "") && i.push(a);
        return h
    }

    function E() {
        return !0
    }

    function S() {
        return !1
    }

    function C() {
        try {
            return ae.activeElement
        } catch (e) {
        }
    }

    function k(e, t, i, n, r, s) {
        var a, o;
        if ("object" == typeof t) {
            "string" != typeof i && (n = n || i, i = void 0);
            for (o in t) k(e, o, i, n, t[o], s);
            return e
        }
        if (null == n && null == r ? (r = i, n = i = void 0) : null == r && ("string" == typeof i ? (r = n, n = void 0) : (r = n, n = i, i = void 0)), !1 === r) r = S; else if (!r) return e;
        return 1 === s && (a = r, (r = function (e) {
            return we().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = we.guid++)), e.each(function () {
            we.event.add(this, t, r, n, i)
        })
    }

    function D(e, t) {
        return s(e, "table") && s(11 !== t.nodeType ? t : t.firstChild, "tr") ? we(e).children("tbody")[0] || e : e
    }

    function O(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function M(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function A(e, t) {
        var i, n, r, s, a, o, l, d;
        if (1 === t.nodeType) {
            if (We.hasData(e) && (s = We.access(e), a = We.set(t, s), d = s.events)) {
                delete a.handle, a.events = {};
                for (r in d) for (i = 0, n = d[r].length; i < n; i++) we.event.add(t, r, d[r][i])
            }
            je.hasData(e) && (o = je.access(e), l = we.extend({}, o), je.set(t, l))
        }
    }

    function I(e, t) {
        var i = t.nodeName.toLowerCase();
        "input" === i && Xe.test(e.type) ? t.checked = e.checked : "input" !== i && "textarea" !== i || (t.defaultValue = e.defaultValue)
    }

    function P(e, t, n, r) {
        t = de.apply([], t);
        var s, a, o, l, d, c, u = 0, h = e.length, p = h - 1, f = t[0], m = ye(f);
        if (m || h > 1 && "string" == typeof f && !ve.checkClone && at.test(f)) return e.each(function (i) {
            var s = e.eq(i);
            m && (t[0] = f.call(this, i, s.html())), P(s, t, n, r)
        });
        if (h && (s = T(t, e[0].ownerDocument, !1, e, r), a = s.firstChild, 1 === s.childNodes.length && (s = a), a || r)) {
            for (l = (o = we.map(w(s, "script"), O)).length; u < h; u++) d = s, u !== p && (d = we.clone(d, !0, !0), l && we.merge(o, w(d, "script"))), n.call(e[u], d, u);
            if (l) for (c = o[o.length - 1].ownerDocument, we.map(o, M), u = 0; u < l; u++) d = o[u], Je.test(d.type || "") && !We.access(d, "globalEval") && we.contains(c, d) && (d.src && "module" !== (d.type || "").toLowerCase() ? we._evalUrl && we._evalUrl(d.src) : i(d.textContent.replace(ot, ""), c, d))
        }
        return e
    }

    function N(e, t, i) {
        for (var n, r = t ? we.filter(t, e) : e, s = 0; null != (n = r[s]); s++) i || 1 !== n.nodeType || we.cleanData(w(n)), n.parentNode && (i && we.contains(n.ownerDocument, n) && x(w(n, "script")), n.parentNode.removeChild(n));
        return e
    }

    function L(e, t, i) {
        var n, r, s, a, o = e.style;
        return (i = i || dt(e)) && ("" !== (a = i.getPropertyValue(t) || i[t]) || we.contains(e.ownerDocument, e) || (a = we.style(e, t)), !ve.pixelBoxStyles() && lt.test(a) && ct.test(t) && (n = o.width, r = o.minWidth, s = o.maxWidth, o.minWidth = o.maxWidth = o.width = a, a = i.width, o.width = n, o.minWidth = r, o.maxWidth = s)), void 0 !== a ? a + "" : a
    }

    function $(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    function H(e) {
        if (e in gt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), i = mt.length; i--;) if ((e = mt[i] + t) in gt) return e
    }

    function F(e) {
        var t = we.cssProps[e];
        return t || (t = we.cssProps[e] = H(e) || e), t
    }

    function W(e, t, i) {
        var n = Ve.exec(t);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
    }

    function j(e, t, i, n, r, s) {
        var a = "width" === t ? 1 : 0, o = 0, l = 0;
        if (i === (n ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === i && (l += we.css(e, i + Ye[a], !0, r)), n ? ("content" === i && (l -= we.css(e, "padding" + Ye[a], !0, r)), "margin" !== i && (l -= we.css(e, "border" + Ye[a] + "Width", !0, r))) : (l += we.css(e, "padding" + Ye[a], !0, r), "padding" !== i ? l += we.css(e, "border" + Ye[a] + "Width", !0, r) : o += we.css(e, "border" + Ye[a] + "Width", !0, r));
        return !n && s >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - s - l - o - .5))), l
    }

    function z(e, t, i) {
        var n = dt(e), r = L(e, t, n), s = "border-box" === we.css(e, "boxSizing", !1, n), a = s;
        if (lt.test(r)) {
            if (!i) return r;
            r = "auto"
        }
        return a = a && (ve.boxSizingReliable() || r === e.style[t]), ("auto" === r || !parseFloat(r) && "inline" === we.css(e, "display", !1, n)) && (r = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (r = parseFloat(r) || 0) + j(e, t, i || (s ? "border" : "content"), a, n, r) + "px"
    }

    function R(e, t, i, n, r) {
        return new R.prototype.init(e, t, i, n, r)
    }

    function B() {
        yt && (!1 === ae.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(B) : e.setTimeout(B, we.fx.interval), we.fx.tick())
    }

    function V() {
        return e.setTimeout(function () {
            vt = void 0
        }), vt = Date.now()
    }

    function Y(e, t) {
        var i, n = 0, r = {height: e};
        for (t = t ? 1 : 0; n < 4; n += 2 - t) r["margin" + (i = Ye[n])] = r["padding" + i] = e;
        return t && (r.opacity = r.width = e), r
    }

    function G(e, t, i) {
        for (var n, r = (X.tweeners[t] || []).concat(X.tweeners["*"]), s = 0, a = r.length; s < a; s++) if (n = r[s].call(i, t, e)) return n
    }

    function q(e, t, i) {
        var n, r, s, a, o, l, d, c, u = "width" in t || "height" in t, h = this, p = {}, f = e.style,
            m = e.nodeType && Ge(e), g = We.get(e, "fxshow");
        i.queue || (null == (a = we._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, o = a.empty.fire, a.empty.fire = function () {
            a.unqueued || o()
        }), a.unqueued++, h.always(function () {
            h.always(function () {
                a.unqueued--, we.queue(e, "fx").length || a.empty.fire()
            })
        }));
        for (n in t) if (r = t[n], bt.test(r)) {
            if (delete t[n], s = s || "toggle" === r, r === (m ? "hide" : "show")) {
                if ("show" !== r || !g || void 0 === g[n]) continue;
                m = !0
            }
            p[n] = g && g[n] || we.style(e, n)
        }
        if ((l = !we.isEmptyObject(t)) || !we.isEmptyObject(p)) {
            u && 1 === e.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (d = g && g.display) && (d = We.get(e, "display")), "none" === (c = we.css(e, "display")) && (d ? c = d : (_([e], !0), d = e.style.display || d, c = we.css(e, "display"), _([e]))), ("inline" === c || "inline-block" === c && null != d) && "none" === we.css(e, "float") && (l || (h.done(function () {
                f.display = d
            }), null == d && (c = f.display, d = "none" === c ? "" : c)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", h.always(function () {
                f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
            })), l = !1;
            for (n in p) l || (g ? "hidden" in g && (m = g.hidden) : g = We.access(e, "fxshow", {display: d}), s && (g.hidden = !m), m && _([e], !0), h.done(function () {
                m || _([e]), We.remove(e, "fxshow");
                for (n in p) we.style(e, n, p[n])
            })), l = G(m ? g[n] : 0, n, h), n in g || (g[n] = l.start, m && (l.end = l.start, l.start = 0))
        }
    }

    function U(e, t) {
        var i, n, r, s, a;
        for (i in e) if (n = f(i), r = t[n], s = e[i], Array.isArray(s) && (r = s[1], s = e[i] = s[0]), i !== n && (e[n] = s, delete e[i]), (a = we.cssHooks[n]) && "expand" in a) {
            s = a.expand(s), delete e[n];
            for (i in s) i in e || (e[i] = s[i], t[i] = r)
        } else t[n] = r
    }

    function X(e, t, i) {
        var n, r, s = 0, a = X.prefilters.length, o = we.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (r) return !1;
            for (var t = vt || V(), i = Math.max(0, d.startTime + d.duration - t), n = 1 - (i / d.duration || 0), s = 0, a = d.tweens.length; s < a; s++) d.tweens[s].run(n);
            return o.notifyWith(e, [d, n, i]), n < 1 && a ? i : (a || o.notifyWith(e, [d, 1, 0]), o.resolveWith(e, [d]), !1)
        }, d = o.promise({
            elem: e,
            props: we.extend({}, t),
            opts: we.extend(!0, {specialEasing: {}, easing: we.easing._default}, i),
            originalProperties: t,
            originalOptions: i,
            startTime: vt || V(),
            duration: i.duration,
            tweens: [],
            createTween: function (t, i) {
                var n = we.Tween(e, d.opts, t, i, d.opts.specialEasing[t] || d.opts.easing);
                return d.tweens.push(n), n
            },
            stop: function (t) {
                var i = 0, n = t ? d.tweens.length : 0;
                if (r) return this;
                for (r = !0; i < n; i++) d.tweens[i].run(1);
                return t ? (o.notifyWith(e, [d, 1, 0]), o.resolveWith(e, [d, t])) : o.rejectWith(e, [d, t]), this
            }
        }), c = d.props;
        for (U(c, d.opts.specialEasing); s < a; s++) if (n = X.prefilters[s].call(d, e, c, d.opts)) return ye(n.stop) && (we._queueHooks(d.elem, d.opts.queue).stop = n.stop.bind(n)), n;
        return we.map(c, G, d), ye(d.opts.start) && d.opts.start.call(e, d), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always), we.fx.timer(we.extend(l, {
            elem: e,
            anim: d,
            queue: d.opts.queue
        })), d
    }

    function K(e) {
        return (e.match(Ie) || []).join(" ")
    }

    function J(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function Q(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(Ie) || [] : []
    }

    function Z(e, t, i, r) {
        var s;
        if (Array.isArray(t)) we.each(t, function (t, n) {
            i || At.test(e) ? r(e, n) : Z(e + "[" + ("object" == typeof n && null != n ? t : "") + "]", n, i, r)
        }); else if (i || "object" !== n(t)) r(e, t); else for (s in t) Z(e + "[" + s + "]", t[s], i, r)
    }

    function ee(e) {
        return function (t, i) {
            "string" != typeof t && (i = t, t = "*");
            var n, r = 0, s = t.toLowerCase().match(Ie) || [];
            if (ye(i)) for (; n = s[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
        }
    }

    function te(e, t, i, n) {
        function r(o) {
            var l;
            return s[o] = !0, we.each(e[o] || [], function (e, o) {
                var d = o(t, i, n);
                return "string" != typeof d || a || s[d] ? a ? !(l = d) : void 0 : (t.dataTypes.unshift(d), r(d), !1)
            }), l
        }

        var s = {}, a = e === Bt;
        return r(t.dataTypes[0]) || !s["*"] && r("*")
    }

    function ie(e, t) {
        var i, n, r = we.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && we.extend(!0, e, n), e
    }

    function ne(e, t, i) {
        for (var n, r, s, a, o = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
        if (n) for (r in o) if (o[r] && o[r].test(n)) {
            l.unshift(r);
            break
        }
        if (l[0] in i) s = l[0]; else {
            for (r in i) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    s = r;
                    break
                }
                a || (a = r)
            }
            s = s || a
        }
        if (s) return s !== l[0] && l.unshift(s), i[s]
    }

    function re(e, t, i, n) {
        var r, s, a, o, l, d = {}, c = e.dataTypes.slice();
        if (c[1]) for (a in e.converters) d[a.toLowerCase()] = e.converters[a];
        for (s = c.shift(); s;) if (e.responseFields[s] && (i[e.responseFields[s]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = c.shift()) if ("*" === s) s = l; else if ("*" !== l && l !== s) {
            if (!(a = d[l + " " + s] || d["* " + s])) for (r in d) if ((o = r.split(" "))[1] === s && (a = d[l + " " + o[0]] || d["* " + o[0]])) {
                !0 === a ? a = d[r] : !0 !== d[r] && (s = o[0], c.unshift(o[1]));
                break
            }
            if (!0 !== a) if (a && e.throws) t = a(t); else try {
                t = a(t)
            } catch (e) {
                return {state: "parsererror", error: a ? e : "No conversion from " + l + " to " + s}
            }
        }
        return {state: "success", data: t}
    }

    var se = [], ae = e.document, oe = Object.getPrototypeOf, le = se.slice, de = se.concat, ce = se.push,
        ue = se.indexOf, he = {}, pe = he.toString, fe = he.hasOwnProperty, me = fe.toString, ge = me.call(Object),
        ve = {}, ye = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        }, be = function (e) {
            return null != e && e === e.window
        }, _e = {type: !0, src: !0, noModule: !0}, we = function (e, t) {
            return new we.fn.init(e, t)
        }, xe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    we.fn = we.prototype = {
        jquery: "3.3.1", constructor: we, length: 0, toArray: function () {
            return le.call(this)
        }, get: function (e) {
            return null == e ? le.call(this) : e < 0 ? this[e + this.length] : this[e]
        }, pushStack: function (e) {
            var t = we.merge(this.constructor(), e);
            return t.prevObject = this, t
        }, each: function (e) {
            return we.each(this, e)
        }, map: function (e) {
            return this.pushStack(we.map(this, function (t, i) {
                return e.call(t, i, t)
            }))
        }, slice: function () {
            return this.pushStack(le.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, i = +e + (e < 0 ? t : 0);
            return this.pushStack(i >= 0 && i < t ? [this[i]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: ce, sort: se.sort, splice: se.splice
    }, we.extend = we.fn.extend = function () {
        var e, t, i, n, r, s, a = arguments[0] || {}, o = 1, l = arguments.length, d = !1;
        for ("boolean" == typeof a && (d = a, a = arguments[o] || {}, o++), "object" == typeof a || ye(a) || (a = {}), o === l && (a = this, o--); o < l; o++) if (null != (e = arguments[o])) for (t in e) i = a[t], a !== (n = e[t]) && (d && n && (we.isPlainObject(n) || (r = Array.isArray(n))) ? (r ? (r = !1, s = i && Array.isArray(i) ? i : []) : s = i && we.isPlainObject(i) ? i : {}, a[t] = we.extend(d, s, n)) : void 0 !== n && (a[t] = n));
        return a
    }, we.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isPlainObject: function (e) {
            var t, i;
            return !(!e || "[object Object]" !== pe.call(e) || (t = oe(e)) && ("function" != typeof(i = fe.call(t, "constructor") && t.constructor) || me.call(i) !== ge))
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, globalEval: function (e) {
            i(e)
        }, each: function (e, t) {
            var i, n = 0;
            if (r(e)) for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++) ; else for (n in e) if (!1 === t.call(e[n], n, e[n])) break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(xe, "")
        }, makeArray: function (e, t) {
            var i = t || [];
            return null != e && (r(Object(e)) ? we.merge(i, "string" == typeof e ? [e] : e) : ce.call(i, e)), i
        }, inArray: function (e, t, i) {
            return null == t ? -1 : ue.call(t, e, i)
        }, merge: function (e, t) {
            for (var i = +t.length, n = 0, r = e.length; n < i; n++) e[r++] = t[n];
            return e.length = r, e
        }, grep: function (e, t, i) {
            for (var n = [], r = 0, s = e.length, a = !i; r < s; r++) !t(e[r], r) !== a && n.push(e[r]);
            return n
        }, map: function (e, t, i) {
            var n, s, a = 0, o = [];
            if (r(e)) for (n = e.length; a < n; a++) null != (s = t(e[a], a, i)) && o.push(s); else for (a in e) null != (s = t(e[a], a, i)) && o.push(s);
            return de.apply([], o)
        }, guid: 1, support: ve
    }), "function" == typeof Symbol && (we.fn[Symbol.iterator] = se[Symbol.iterator]), we.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        he["[object " + t + "]"] = t.toLowerCase()
    });
    var Te = function (e) {
        function t(e, t, i, n) {
            var r, s, a, o, l, c, h, p = t && t.ownerDocument, f = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f) return i;
            if (!n && ((t ? t.ownerDocument || t : W) !== A && M(t), t = t || A, P)) {
                if (11 !== f && (l = me.exec(e))) if (r = l[1]) {
                    if (9 === f) {
                        if (!(a = t.getElementById(r))) return i;
                        if (a.id === r) return i.push(a), i
                    } else if (p && (a = p.getElementById(r)) && H(t, a) && a.id === r) return i.push(a), i
                } else {
                    if (l[2]) return K.apply(i, t.getElementsByTagName(e)), i;
                    if ((r = l[3]) && _.getElementsByClassName && t.getElementsByClassName) return K.apply(i, t.getElementsByClassName(r)), i
                }
                if (_.qsa && !V[e + " "] && (!N || !N.test(e))) {
                    if (1 !== f) p = t, h = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((o = t.getAttribute("id")) ? o = o.replace(be, _e) : t.setAttribute("id", o = F), s = (c = E(e)).length; s--;) c[s] = "#" + o + " " + u(c[s]);
                        h = c.join(","), p = ge.test(e) && d(t.parentNode) || t
                    }
                    if (h) try {
                        return K.apply(i, p.querySelectorAll(h)), i
                    } catch (e) {
                    } finally {
                        o === F && t.removeAttribute("id")
                    }
                }
            }
            return C(e.replace(se, "$1"), t, i, n)
        }

        function i() {
            function e(i, n) {
                return t.push(i + " ") > w.cacheLength && delete e[t.shift()], e[i + " "] = n
            }

            var t = [];
            return e
        }

        function n(e) {
            return e[F] = !0, e
        }

        function r(e) {
            var t = A.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function s(e, t) {
            for (var i = e.split("|"), n = i.length; n--;) w.attrHandle[i[n]] = t
        }

        function a(e, t) {
            var i = t && e, n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (n) return n;
            if (i) for (; i = i.nextSibling;) if (i === t) return -1;
            return e ? 1 : -1
        }

        function o(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && xe(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function l(e) {
            return n(function (t) {
                return t = +t, n(function (i, n) {
                    for (var r, s = e([], i.length, t), a = s.length; a--;) i[r = s[a]] && (i[r] = !(n[r] = i[r]))
                })
            })
        }

        function d(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        function c() {
        }

        function u(e) {
            for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
            return n
        }

        function h(e, t, i) {
            var n = t.dir, r = t.next, s = r || n, a = i && "parentNode" === s, o = z++;
            return t.first ? function (t, i, r) {
                for (; t = t[n];) if (1 === t.nodeType || a) return e(t, i, r);
                return !1
            } : function (t, i, l) {
                var d, c, u, h = [j, o];
                if (l) {
                    for (; t = t[n];) if ((1 === t.nodeType || a) && e(t, i, l)) return !0
                } else for (; t = t[n];) if (1 === t.nodeType || a) if (u = t[F] || (t[F] = {}), c = u[t.uniqueID] || (u[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[n] || t; else {
                    if ((d = c[s]) && d[0] === j && d[1] === o) return h[2] = d[2];
                    if (c[s] = h, h[2] = e(t, i, l)) return !0
                }
                return !1
            }
        }

        function p(e) {
            return e.length > 1 ? function (t, i, n) {
                for (var r = e.length; r--;) if (!e[r](t, i, n)) return !1;
                return !0
            } : e[0]
        }

        function f(e, i, n) {
            for (var r = 0, s = i.length; r < s; r++) t(e, i[r], n);
            return n
        }

        function m(e, t, i, n, r) {
            for (var s, a = [], o = 0, l = e.length, d = null != t; o < l; o++) (s = e[o]) && (i && !i(s, n, r) || (a.push(s), d && t.push(o)));
            return a
        }

        function g(e, t, i, r, s, a) {
            return r && !r[F] && (r = g(r)), s && !s[F] && (s = g(s, a)), n(function (n, a, o, l) {
                var d, c, u, h = [], p = [], g = a.length, v = n || f(t || "*", o.nodeType ? [o] : o, []),
                    y = !e || !n && t ? v : m(v, h, e, o, l), b = i ? s || (n ? e : g || r) ? [] : a : y;
                if (i && i(y, b, o, l), r) for (d = m(b, p), r(d, [], o, l), c = d.length; c--;) (u = d[c]) && (b[p[c]] = !(y[p[c]] = u));
                if (n) {
                    if (s || e) {
                        if (s) {
                            for (d = [], c = b.length; c--;) (u = b[c]) && d.push(y[c] = u);
                            s(null, b = [], d, l)
                        }
                        for (c = b.length; c--;) (u = b[c]) && (d = s ? Q(n, u) : h[c]) > -1 && (n[d] = !(a[d] = u))
                    }
                } else b = m(b === a ? b.splice(g, b.length) : b), s ? s(null, a, b, l) : K.apply(a, b)
            })
        }

        function v(e) {
            for (var t, i, n, r = e.length, s = w.relative[e[0].type], a = s || w.relative[" "], o = s ? 1 : 0, l = h(function (e) {
                return e === t
            }, a, !0), d = h(function (e) {
                return Q(t, e) > -1
            }, a, !0), c = [function (e, i, n) {
                var r = !s && (n || i !== k) || ((t = i).nodeType ? l(e, i, n) : d(e, i, n));
                return t = null, r
            }]; o < r; o++) if (i = w.relative[e[o].type]) c = [h(p(c), i)]; else {
                if ((i = w.filter[e[o].type].apply(null, e[o].matches))[F]) {
                    for (n = ++o; n < r && !w.relative[e[n].type]; n++) ;
                    return g(o > 1 && p(c), o > 1 && u(e.slice(0, o - 1).concat({value: " " === e[o - 2].type ? "*" : ""})).replace(se, "$1"), i, o < n && v(e.slice(o, n)), n < r && v(e = e.slice(n)), n < r && u(e))
                }
                c.push(i)
            }
            return p(c)
        }

        function y(e, i) {
            var r = i.length > 0, s = e.length > 0, a = function (n, a, o, l, d) {
                var c, u, h, p = 0, f = "0", g = n && [], v = [], y = k, b = n || s && w.find.TAG("*", d),
                    _ = j += null == y ? 1 : Math.random() || .1, x = b.length;
                for (d && (k = a === A || a || d); f !== x && null != (c = b[f]); f++) {
                    if (s && c) {
                        for (u = 0, a || c.ownerDocument === A || (M(c), o = !P); h = e[u++];) if (h(c, a || A, o)) {
                            l.push(c);
                            break
                        }
                        d && (j = _)
                    }
                    r && ((c = !h && c) && p--, n && g.push(c))
                }
                if (p += f, r && f !== p) {
                    for (u = 0; h = i[u++];) h(g, v, a, o);
                    if (n) {
                        if (p > 0) for (; f--;) g[f] || v[f] || (v[f] = U.call(l));
                        v = m(v)
                    }
                    K.apply(l, v), d && !n && v.length > 0 && p + i.length > 1 && t.uniqueSort(l)
                }
                return d && (j = _, k = y), g
            };
            return r ? n(a) : a
        }

        var b, _, w, x, T, E, S, C, k, D, O, M, A, I, P, N, L, $, H, F = "sizzle" + 1 * new Date, W = e.document, j = 0,
            z = 0, R = i(), B = i(), V = i(), Y = function (e, t) {
                return e === t && (O = !0), 0
            }, G = {}.hasOwnProperty, q = [], U = q.pop, X = q.push, K = q.push, J = q.slice, Q = function (e, t) {
                for (var i = 0, n = e.length; i < n; i++) if (e[i] === t) return i;
                return -1
            },
            Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ie = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
            ne = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
            re = new RegExp(ee + "+", "g"), se = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
            ae = new RegExp("^" + ee + "*," + ee + "*"), oe = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
            le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"), de = new RegExp(ne),
            ce = new RegExp("^" + te + "$"), ue = {
                ID: new RegExp("^#(" + te + ")"),
                CLASS: new RegExp("^\\.(" + te + ")"),
                TAG: new RegExp("^(" + te + "|[*])"),
                ATTR: new RegExp("^" + ie),
                PSEUDO: new RegExp("^" + ne),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + Z + ")$", "i"),
                needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
            }, he = /^(?:input|select|textarea|button)$/i, pe = /^h\d$/i, fe = /^[^{]+\{\s*\[native \w/,
            me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ge = /[+~]/,
            ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"), ye = function (e, t, i) {
                var n = "0x" + t - 65536;
                return n !== n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            }, be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, _e = function (e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, we = function () {
                M()
            }, xe = h(function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {dir: "parentNode", next: "legend"});
        try {
            K.apply(q = J.call(W.childNodes), W.childNodes), q[W.childNodes.length].nodeType
        } catch (e) {
            K = {
                apply: q.length ? function (e, t) {
                    X.apply(e, J.call(t))
                } : function (e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++];) ;
                    e.length = i - 1
                }
            }
        }
        _ = t.support = {}, T = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, M = t.setDocument = function (e) {
            var t, i, n = e ? e.ownerDocument || e : W;
            return n !== A && 9 === n.nodeType && n.documentElement ? (A = n, I = A.documentElement, P = !T(A), W !== A && (i = A.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", we, !1) : i.attachEvent && i.attachEvent("onunload", we)), _.attributes = r(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), _.getElementsByTagName = r(function (e) {
                return e.appendChild(A.createComment("")), !e.getElementsByTagName("*").length
            }), _.getElementsByClassName = fe.test(A.getElementsByClassName), _.getById = r(function (e) {
                return I.appendChild(e).id = F, !A.getElementsByName || !A.getElementsByName(F).length
            }), _.getById ? (w.filter.ID = function (e) {
                var t = e.replace(ve, ye);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, w.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && P) {
                    var i = t.getElementById(e);
                    return i ? [i] : []
                }
            }) : (w.filter.ID = function (e) {
                var t = e.replace(ve, ye);
                return function (e) {
                    var i = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return i && i.value === t
                }
            }, w.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && P) {
                    var i, n, r, s = t.getElementById(e);
                    if (s) {
                        if ((i = s.getAttributeNode("id")) && i.value === e) return [s];
                        for (r = t.getElementsByName(e), n = 0; s = r[n++];) if ((i = s.getAttributeNode("id")) && i.value === e) return [s]
                    }
                    return []
                }
            }), w.find.TAG = _.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : _.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var i, n = [], r = 0, s = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; i = s[r++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return s
            }, w.find.CLASS = _.getElementsByClassName && function (e, t) {
                if (void 0 !== t.getElementsByClassName && P) return t.getElementsByClassName(e)
            }, L = [], N = [], (_.qsa = fe.test(A.querySelectorAll)) && (r(function (e) {
                I.appendChild(e).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || N.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + F + "-]").length || N.push("~="), e.querySelectorAll(":checked").length || N.push(":checked"), e.querySelectorAll("a#" + F + "+*").length || N.push(".#.+[+~]")
            }), r(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = A.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && N.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && N.push(":enabled", ":disabled"), I.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && N.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), N.push(",.*:")
            })), (_.matchesSelector = fe.test($ = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && r(function (e) {
                _.disconnectedMatch = $.call(e, "*"), $.call(e, "[s!='']:x"), L.push("!=", ne)
            }), N = N.length && new RegExp(N.join("|")), L = L.length && new RegExp(L.join("|")), t = fe.test(I.compareDocumentPosition), H = t || fe.test(I.contains) ? function (e, t) {
                var i = 9 === e.nodeType ? e.documentElement : e, n = t && t.parentNode;
                return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
            } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, Y = t ? function (e, t) {
                if (e === t) return O = !0, 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !_.sortDetached && t.compareDocumentPosition(e) === i ? e === A || e.ownerDocument === W && H(W, e) ? -1 : t === A || t.ownerDocument === W && H(W, t) ? 1 : D ? Q(D, e) - Q(D, t) : 0 : 4 & i ? -1 : 1)
            } : function (e, t) {
                if (e === t) return O = !0, 0;
                var i, n = 0, r = e.parentNode, s = t.parentNode, o = [e], l = [t];
                if (!r || !s) return e === A ? -1 : t === A ? 1 : r ? -1 : s ? 1 : D ? Q(D, e) - Q(D, t) : 0;
                if (r === s) return a(e, t);
                for (i = e; i = i.parentNode;) o.unshift(i);
                for (i = t; i = i.parentNode;) l.unshift(i);
                for (; o[n] === l[n];) n++;
                return n ? a(o[n], l[n]) : o[n] === W ? -1 : l[n] === W ? 1 : 0
            }, A) : A
        }, t.matches = function (e, i) {
            return t(e, null, null, i)
        }, t.matchesSelector = function (e, i) {
            if ((e.ownerDocument || e) !== A && M(e), i = i.replace(le, "='$1']"), _.matchesSelector && P && !V[i + " "] && (!L || !L.test(i)) && (!N || !N.test(i))) try {
                var n = $.call(e, i);
                if (n || _.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (e) {
            }
            return t(i, A, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== A && M(e), H(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== A && M(e);
            var i = w.attrHandle[t.toLowerCase()],
                n = i && G.call(w.attrHandle, t.toLowerCase()) ? i(e, t, !P) : void 0;
            return void 0 !== n ? n : _.attributes || !P ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }, t.escape = function (e) {
            return (e + "").replace(be, _e)
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, i = [], n = 0, r = 0;
            if (O = !_.detectDuplicates, D = !_.sortStable && e.slice(0), e.sort(Y), O) {
                for (; t = e[r++];) t === e[r] && (n = i.push(r));
                for (; n--;) e.splice(i[n], 1)
            }
            return D = null, e
        }, x = t.getText = function (e) {
            var t, i = "", n = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) i += x(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else for (; t = e[n++];) i += x(t);
            return i
        }, (w = t.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: ue,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(ve, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(ve, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, i = !e[6] && e[2];
                    return ue.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && de.test(i) && (t = E(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(ve, ye).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = R[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && R(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (e, i, n) {
                    return function (r) {
                        var s = t.attr(r, e);
                        return null == s ? "!=" === i : !i || (s += "", "=" === i ? s === n : "!=" === i ? s !== n : "^=" === i ? n && 0 === s.indexOf(n) : "*=" === i ? n && s.indexOf(n) > -1 : "$=" === i ? n && s.slice(-n.length) === n : "~=" === i ? (" " + s.replace(re, " ") + " ").indexOf(n) > -1 : "|=" === i && (s === n || s.slice(0, n.length + 1) === n + "-"))
                    }
                }, CHILD: function (e, t, i, n, r) {
                    var s = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), o = "of-type" === t;
                    return 1 === n && 0 === r ? function (e) {
                        return !!e.parentNode
                    } : function (t, i, l) {
                        var d, c, u, h, p, f, m = s !== a ? "nextSibling" : "previousSibling", g = t.parentNode,
                            v = o && t.nodeName.toLowerCase(), y = !l && !o, b = !1;
                        if (g) {
                            if (s) {
                                for (; m;) {
                                    for (h = t; h = h[m];) if (o ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                    f = m = "only" === e && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [a ? g.firstChild : g.lastChild], a && y) {
                                for (b = (p = (d = (c = (u = (h = g)[F] || (h[F] = {}))[h.uniqueID] || (u[h.uniqueID] = {}))[e] || [])[0] === j && d[1]) && d[2], h = p && g.childNodes[p]; h = ++p && h && h[m] || (b = p = 0) || f.pop();) if (1 === h.nodeType && ++b && h === t) {
                                    c[e] = [j, p, b];
                                    break
                                }
                            } else if (y && (b = p = (d = (c = (u = (h = t)[F] || (h[F] = {}))[h.uniqueID] || (u[h.uniqueID] = {}))[e] || [])[0] === j && d[1]), !1 === b) for (; (h = ++p && h && h[m] || (b = p = 0) || f.pop()) && ((o ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && ((c = (u = h[F] || (h[F] = {}))[h.uniqueID] || (u[h.uniqueID] = {}))[e] = [j, b]), h !== t));) ;
                            return (b -= r) === n || b % n == 0 && b / n >= 0
                        }
                    }
                }, PSEUDO: function (e, i) {
                    var r, s = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return s[F] ? s(i) : s.length > 1 ? (r = [e, e, "", i], w.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function (e, t) {
                        for (var n, r = s(e, i), a = r.length; a--;) e[n = Q(e, r[a])] = !(t[n] = r[a])
                    }) : function (e) {
                        return s(e, 0, r)
                    }) : s
                }
            },
            pseudos: {
                not: n(function (e) {
                    var t = [], i = [], r = S(e.replace(se, "$1"));
                    return r[F] ? n(function (e, t, i, n) {
                        for (var s, a = r(e, null, n, []), o = e.length; o--;) (s = a[o]) && (e[o] = !(t[o] = s))
                    }) : function (e, n, s) {
                        return t[0] = e, r(t, null, s, i), t[0] = null, !i.pop()
                    }
                }), has: n(function (e) {
                    return function (i) {
                        return t(e, i).length > 0
                    }
                }), contains: n(function (e) {
                    return e = e.replace(ve, ye), function (t) {
                        return (t.textContent || t.innerText || x(t)).indexOf(e) > -1
                    }
                }), lang: n(function (e) {
                    return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ve, ye).toLowerCase(), function (t) {
                        var i;
                        do {
                            if (i = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var i = e.location && e.location.hash;
                    return i && i.slice(1) === t.id
                }, root: function (e) {
                    return e === I
                }, focus: function (e) {
                    return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: o(!1), disabled: o(!0), checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !w.pseudos.empty(e)
                }, header: function (e) {
                    return pe.test(e.nodeName)
                }, input: function (e) {
                    return he.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: l(function () {
                    return [0]
                }), last: l(function (e, t) {
                    return [t - 1]
                }), eq: l(function (e, t, i) {
                    return [i < 0 ? i + t : i]
                }), even: l(function (e, t) {
                    for (var i = 0; i < t; i += 2) e.push(i);
                    return e
                }), odd: l(function (e, t) {
                    for (var i = 1; i < t; i += 2) e.push(i);
                    return e
                }), lt: l(function (e, t, i) {
                    for (var n = i < 0 ? i + t : i; --n >= 0;) e.push(n);
                    return e
                }), gt: l(function (e, t, i) {
                    for (var n = i < 0 ? i + t : i; ++n < t;) e.push(n);
                    return e
                })
            }
        }).pseudos.nth = w.pseudos.eq;
        for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) w.pseudos[b] = function (e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }(b);
        for (b in{submit: !0, reset: !0}) w.pseudos[b] = function (e) {
            return function (t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === e
            }
        }(b);
        return c.prototype = w.filters = w.pseudos, w.setFilters = new c, E = t.tokenize = function (e, i) {
            var n, r, s, a, o, l, d, c = B[e + " "];
            if (c) return i ? 0 : c.slice(0);
            for (o = e, l = [], d = w.preFilter; o;) {
                n && !(r = ae.exec(o)) || (r && (o = o.slice(r[0].length) || o), l.push(s = [])), n = !1, (r = oe.exec(o)) && (n = r.shift(), s.push({
                    value: n,
                    type: r[0].replace(se, " ")
                }), o = o.slice(n.length));
                for (a in w.filter) !(r = ue[a].exec(o)) || d[a] && !(r = d[a](r)) || (n = r.shift(), s.push({
                    value: n,
                    type: a,
                    matches: r
                }), o = o.slice(n.length));
                if (!n) break
            }
            return i ? o.length : o ? t.error(e) : B(e, l).slice(0)
        }, S = t.compile = function (e, t) {
            var i, n = [], r = [], s = V[e + " "];
            if (!s) {
                for (t || (t = E(e)), i = t.length; i--;) (s = v(t[i]))[F] ? n.push(s) : r.push(s);
                (s = V(e, y(r, n))).selector = e
            }
            return s
        }, C = t.select = function (e, t, i, n) {
            var r, s, a, o, l, c = "function" == typeof e && e, h = !n && E(e = c.selector || e);
            if (i = i || [], 1 === h.length) {
                if ((s = h[0] = h[0].slice(0)).length > 2 && "ID" === (a = s[0]).type && 9 === t.nodeType && P && w.relative[s[1].type]) {
                    if (!(t = (w.find.ID(a.matches[0].replace(ve, ye), t) || [])[0])) return i;
                    c && (t = t.parentNode), e = e.slice(s.shift().value.length)
                }
                for (r = ue.needsContext.test(e) ? 0 : s.length; r-- && (a = s[r], !w.relative[o = a.type]);) if ((l = w.find[o]) && (n = l(a.matches[0].replace(ve, ye), ge.test(s[0].type) && d(t.parentNode) || t))) {
                    if (s.splice(r, 1), !(e = n.length && u(s))) return K.apply(i, n), i;
                    break
                }
            }
            return (c || S(e, h))(n, t, !P, i, !t || ge.test(e) && d(t.parentNode) || t), i
        }, _.sortStable = F.split("").sort(Y).join("") === F, _.detectDuplicates = !!O, M(), _.sortDetached = r(function (e) {
            return 1 & e.compareDocumentPosition(A.createElement("fieldset"))
        }), r(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || s("type|href|height|width", function (e, t, i) {
            if (!i) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), _.attributes && r(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || s("value", function (e, t, i) {
            if (!i && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), r(function (e) {
            return null == e.getAttribute("disabled")
        }) || s(Z, function (e, t, i) {
            var n;
            if (!i) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }), t
    }(e);
    we.find = Te, we.expr = Te.selectors, we.expr[":"] = we.expr.pseudos, we.uniqueSort = we.unique = Te.uniqueSort, we.text = Te.getText, we.isXMLDoc = Te.isXML, we.contains = Te.contains, we.escapeSelector = Te.escape;
    var Ee = function (e, t, i) {
        for (var n = [], r = void 0 !== i; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
            if (r && we(e).is(i)) break;
            n.push(e)
        }
        return n
    }, Se = function (e, t) {
        for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
        return i
    }, Ce = we.expr.match.needsContext, ke = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    we.filter = function (e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? we.find.matchesSelector(n, e) ? [n] : [] : we.find.matches(e, we.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, we.fn.extend({
        find: function (e) {
            var t, i, n = this.length, r = this;
            if ("string" != typeof e) return this.pushStack(we(e).filter(function () {
                for (t = 0; t < n; t++) if (we.contains(r[t], this)) return !0
            }));
            for (i = this.pushStack([]), t = 0; t < n; t++) we.find(e, r[t], i);
            return n > 1 ? we.uniqueSort(i) : i
        }, filter: function (e) {
            return this.pushStack(a(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(a(this, e || [], !0))
        }, is: function (e) {
            return !!a(this, "string" == typeof e && Ce.test(e) ? we(e) : e || [], !1).length
        }
    });
    var De, Oe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (we.fn.init = function (e, t, i) {
        var n, r;
        if (!e) return this;
        if (i = i || De, "string" == typeof e) {
            if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Oe.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof we ? t[0] : t, we.merge(this, we.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : ae, !0)), ke.test(n[1]) && we.isPlainObject(t)) for (n in t) ye(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            return (r = ae.getElementById(n[2])) && (this[0] = r, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : ye(e) ? void 0 !== i.ready ? i.ready(e) : e(we) : we.makeArray(e, this)
    }).prototype = we.fn, De = we(ae);
    var Me = /^(?:parents|prev(?:Until|All))/, Ae = {children: !0, contents: !0, next: !0, prev: !0};
    we.fn.extend({
        has: function (e) {
            var t = we(e, this), i = t.length;
            return this.filter(function () {
                for (var e = 0; e < i; e++) if (we.contains(this, t[e])) return !0
            })
        }, closest: function (e, t) {
            var i, n = 0, r = this.length, s = [], a = "string" != typeof e && we(e);
            if (!Ce.test(e)) for (; n < r; n++) for (i = this[n]; i && i !== t; i = i.parentNode) if (i.nodeType < 11 && (a ? a.index(i) > -1 : 1 === i.nodeType && we.find.matchesSelector(i, e))) {
                s.push(i);
                break
            }
            return this.pushStack(s.length > 1 ? we.uniqueSort(s) : s)
        }, index: function (e) {
            return e ? "string" == typeof e ? ue.call(we(e), this[0]) : ue.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(we.uniqueSort(we.merge(this.get(), we(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), we.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return Ee(e, "parentNode")
        }, parentsUntil: function (e, t, i) {
            return Ee(e, "parentNode", i)
        }, next: function (e) {
            return o(e, "nextSibling")
        }, prev: function (e) {
            return o(e, "previousSibling")
        }, nextAll: function (e) {
            return Ee(e, "nextSibling")
        }, prevAll: function (e) {
            return Ee(e, "previousSibling")
        }, nextUntil: function (e, t, i) {
            return Ee(e, "nextSibling", i)
        }, prevUntil: function (e, t, i) {
            return Ee(e, "previousSibling", i)
        }, siblings: function (e) {
            return Se((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return Se(e.firstChild)
        }, contents: function (e) {
            return s(e, "iframe") ? e.contentDocument : (s(e, "template") && (e = e.content || e), we.merge([], e.childNodes))
        }
    }, function (e, t) {
        we.fn[e] = function (i, n) {
            var r = we.map(this, t, i);
            return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (r = we.filter(n, r)), this.length > 1 && (Ae[e] || we.uniqueSort(r), Me.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var Ie = /[^\x20\t\r\n\f]+/g;
    we.Callbacks = function (e) {
        e = "string" == typeof e ? l(e) : we.extend({}, e);
        var t, i, r, s, a = [], o = [], d = -1, c = function () {
            for (s = s || e.once, r = t = !0; o.length; d = -1) for (i = o.shift(); ++d < a.length;) !1 === a[d].apply(i[0], i[1]) && e.stopOnFalse && (d = a.length, i = !1);
            e.memory || (i = !1), t = !1, s && (a = i ? [] : "")
        }, u = {
            add: function () {
                return a && (i && !t && (d = a.length - 1, o.push(i)), function t(i) {
                    we.each(i, function (i, r) {
                        ye(r) ? e.unique && u.has(r) || a.push(r) : r && r.length && "string" !== n(r) && t(r)
                    })
                }(arguments), i && !t && c()), this
            }, remove: function () {
                return we.each(arguments, function (e, t) {
                    for (var i; (i = we.inArray(t, a, i)) > -1;) a.splice(i, 1), i <= d && d--
                }), this
            }, has: function (e) {
                return e ? we.inArray(e, a) > -1 : a.length > 0
            }, empty: function () {
                return a && (a = []), this
            }, disable: function () {
                return s = o = [], a = i = "", this
            }, disabled: function () {
                return !a
            }, lock: function () {
                return s = o = [], i || t || (a = i = ""), this
            }, locked: function () {
                return !!s
            }, fireWith: function (e, i) {
                return s || (i = [e, (i = i || []).slice ? i.slice() : i], o.push(i), t || c()), this
            }, fire: function () {
                return u.fireWith(this, arguments), this
            }, fired: function () {
                return !!r
            }
        };
        return u
    }, we.extend({
        Deferred: function (t) {
            var i = [["notify", "progress", we.Callbacks("memory"), we.Callbacks("memory"), 2], ["resolve", "done", we.Callbacks("once memory"), we.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", we.Callbacks("once memory"), we.Callbacks("once memory"), 1, "rejected"]],
                n = "pending", r = {
                    state: function () {
                        return n
                    }, always: function () {
                        return s.done(arguments).fail(arguments), this
                    }, catch: function (e) {
                        return r.then(null, e)
                    }, pipe: function () {
                        var e = arguments;
                        return we.Deferred(function (t) {
                            we.each(i, function (i, n) {
                                var r = ye(e[n[4]]) && e[n[4]];
                                s[n[1]](function () {
                                    var e = r && r.apply(this, arguments);
                                    e && ye(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[n[0] + "With"](this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, then: function (t, n, r) {
                        function s(t, i, n, r) {
                            return function () {
                                var o = this, l = arguments, u = function () {
                                    var e, u;
                                    if (!(t < a)) {
                                        if ((e = n.apply(o, l)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                        u = e && ("object" == typeof e || "function" == typeof e) && e.then, ye(u) ? r ? u.call(e, s(a, i, d, r), s(a, i, c, r)) : (a++, u.call(e, s(a, i, d, r), s(a, i, c, r), s(a, i, d, i.notifyWith))) : (n !== d && (o = void 0, l = [e]), (r || i.resolveWith)(o, l))
                                    }
                                }, h = r ? u : function () {
                                    try {
                                        u()
                                    } catch (e) {
                                        we.Deferred.exceptionHook && we.Deferred.exceptionHook(e, h.stackTrace), t + 1 >= a && (n !== c && (o = void 0, l = [e]), i.rejectWith(o, l))
                                    }
                                };
                                t ? h() : (we.Deferred.getStackHook && (h.stackTrace = we.Deferred.getStackHook()), e.setTimeout(h))
                            }
                        }

                        var a = 0;
                        return we.Deferred(function (e) {
                            i[0][3].add(s(0, e, ye(r) ? r : d, e.notifyWith)), i[1][3].add(s(0, e, ye(t) ? t : d)), i[2][3].add(s(0, e, ye(n) ? n : c))
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? we.extend(e, r) : r
                    }
                }, s = {};
            return we.each(i, function (e, t) {
                var a = t[2], o = t[5];
                r[t[1]] = a.add, o && a.add(function () {
                    n = o
                }, i[3 - e][2].disable, i[3 - e][3].disable, i[0][2].lock, i[0][3].lock), a.add(t[3].fire), s[t[0]] = function () {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = a.fireWith
            }), r.promise(s), t && t.call(s, s), s
        }, when: function (e) {
            var t = arguments.length, i = t, n = Array(i), r = le.call(arguments), s = we.Deferred(), a = function (e) {
                return function (i) {
                    n[e] = this, r[e] = arguments.length > 1 ? le.call(arguments) : i, --t || s.resolveWith(n, r)
                }
            };
            if (t <= 1 && (u(e, s.done(a(i)).resolve, s.reject, !t), "pending" === s.state() || ye(r[i] && r[i].then))) return s.then();
            for (; i--;) u(r[i], a(i), s.reject);
            return s.promise()
        }
    });
    var Pe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    we.Deferred.exceptionHook = function (t, i) {
        e.console && e.console.warn && t && Pe.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
    }, we.readyException = function (t) {
        e.setTimeout(function () {
            throw t
        })
    };
    var Ne = we.Deferred();
    we.fn.ready = function (e) {
        return Ne.then(e).catch(function (e) {
            we.readyException(e)
        }), this
    }, we.extend({
        isReady: !1, readyWait: 1, ready: function (e) {
            (!0 === e ? --we.readyWait : we.isReady) || (we.isReady = !0, !0 !== e && --we.readyWait > 0 || Ne.resolveWith(ae, [we]))
        }
    }), we.ready.then = Ne.then, "complete" === ae.readyState || "loading" !== ae.readyState && !ae.documentElement.doScroll ? e.setTimeout(we.ready) : (ae.addEventListener("DOMContentLoaded", h), e.addEventListener("load", h));
    var Le = function (e, t, i, r, s, a, o) {
        var l = 0, d = e.length, c = null == i;
        if ("object" === n(i)) {
            s = !0;
            for (l in i) Le(e, t, l, i[l], !0, a, o)
        } else if (void 0 !== r && (s = !0, ye(r) || (o = !0), c && (o ? (t.call(e, r), t = null) : (c = t, t = function (e, t, i) {
            return c.call(we(e), i)
        })), t)) for (; l < d; l++) t(e[l], i, o ? r : r.call(e[l], l, t(e[l], i)));
        return s ? e : c ? t.call(e) : d ? t(e[0], i) : a
    }, $e = /^-ms-/, He = /-([a-z])/g, Fe = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    m.uid = 1, m.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, Fe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        }, set: function (e, t, i) {
            var n, r = this.cache(e);
            if ("string" == typeof t) r[f(t)] = i; else for (n in t) r[f(n)] = t[n];
            return r
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][f(t)]
        }, access: function (e, t, i) {
            return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i), void 0 !== i ? i : t)
        }, remove: function (e, t) {
            var i, n = e[this.expando];
            if (void 0 !== n) {
                if (void 0 !== t) {
                    i = (t = Array.isArray(t) ? t.map(f) : (t = f(t)) in n ? [t] : t.match(Ie) || []).length;
                    for (; i--;) delete n[t[i]]
                }
                (void 0 === t || we.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }, hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !we.isEmptyObject(t)
        }
    };
    var We = new m, je = new m, ze = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Re = /[A-Z]/g;
    we.extend({
        hasData: function (e) {
            return je.hasData(e) || We.hasData(e)
        }, data: function (e, t, i) {
            return je.access(e, t, i)
        }, removeData: function (e, t) {
            je.remove(e, t)
        }, _data: function (e, t, i) {
            return We.access(e, t, i)
        }, _removeData: function (e, t) {
            We.remove(e, t)
        }
    }), we.fn.extend({
        data: function (e, t) {
            var i, n, r, s = this[0], a = s && s.attributes;
            if (void 0 === e) {
                if (this.length && (r = je.get(s), 1 === s.nodeType && !We.get(s, "hasDataAttrs"))) {
                    for (i = a.length; i--;) a[i] && 0 === (n = a[i].name).indexOf("data-") && (n = f(n.slice(5)), v(s, n, r[n]));
                    We.set(s, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function () {
                je.set(this, e)
            }) : Le(this, function (t) {
                var i;
                if (s && void 0 === t) {
                    if (void 0 !== (i = je.get(s, e))) return i;
                    if (void 0 !== (i = v(s, e))) return i
                } else this.each(function () {
                    je.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                je.remove(this, e)
            })
        }
    }), we.extend({
        queue: function (e, t, i) {
            var n;
            if (e) return t = (t || "fx") + "queue", n = We.get(e, t), i && (!n || Array.isArray(i) ? n = We.access(e, t, we.makeArray(i)) : n.push(i)), n || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var i = we.queue(e, t), n = i.length, r = i.shift(), s = we._queueHooks(e, t), a = function () {
                we.dequeue(e, t)
            };
            "inprogress" === r && (r = i.shift(), n--), r && ("fx" === t && i.unshift("inprogress"), delete s.stop, r.call(e, a, s)), !n && s && s.empty.fire()
        }, _queueHooks: function (e, t) {
            var i = t + "queueHooks";
            return We.get(e, i) || We.access(e, i, {
                empty: we.Callbacks("once memory").add(function () {
                    We.remove(e, [t + "queue", i])
                })
            })
        }
    }), we.fn.extend({
        queue: function (e, t) {
            var i = 2;
            return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? we.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var i = we.queue(this, e, t);
                we._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && we.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                we.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var i, n = 1, r = we.Deferred(), s = this, a = this.length, o = function () {
                --n || r.resolveWith(s, [s])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) (i = We.get(s[a], e + "queueHooks")) && i.empty && (n++, i.empty.add(o));
            return o(), r.promise(t)
        }
    });
    var Be = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ve = new RegExp("^(?:([+-])=|)(" + Be + ")([a-z%]*)$", "i"),
        Ye = ["Top", "Right", "Bottom", "Left"], Ge = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && we.contains(e.ownerDocument, e) && "none" === we.css(e, "display")
        }, qe = function (e, t, i, n) {
            var r, s, a = {};
            for (s in t) a[s] = e.style[s], e.style[s] = t[s];
            r = i.apply(e, n || []);
            for (s in t) e.style[s] = a[s];
            return r
        }, Ue = {};
    we.fn.extend({
        show: function () {
            return _(this, !0)
        }, hide: function () {
            return _(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Ge(this) ? we(this).show() : we(this).hide()
            })
        }
    });
    var Xe = /^(?:checkbox|radio)$/i, Ke = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, Je = /^$|^module$|\/(?:java|ecma)script/i,
        Qe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Qe.optgroup = Qe.option, Qe.tbody = Qe.tfoot = Qe.colgroup = Qe.caption = Qe.thead, Qe.th = Qe.td;
    var Ze = /<|&#?\w+;/;
    !function () {
        var e = ae.createDocumentFragment().appendChild(ae.createElement("div")), t = ae.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), ve.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", ve.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var et = ae.documentElement, tt = /^key/, it = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        nt = /^([^.]*)(?:\.(.+)|)/;
    we.event = {
        global: {}, add: function (e, t, i, n, r) {
            var s, a, o, l, d, c, u, h, p, f, m, g = We.get(e);
            if (g) for (i.handler && (i = (s = i).handler, r = s.selector), r && we.find.matchesSelector(et, r), i.guid || (i.guid = we.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function (t) {
                return void 0 !== we && we.event.triggered !== t.type ? we.event.dispatch.apply(e, arguments) : void 0
            }), d = (t = (t || "").match(Ie) || [""]).length; d--;) p = m = (o = nt.exec(t[d]) || [])[1], f = (o[2] || "").split(".").sort(), p && (u = we.event.special[p] || {}, p = (r ? u.delegateType : u.bindType) || p, u = we.event.special[p] || {}, c = we.extend({
                type: p,
                origType: m,
                data: n,
                handler: i,
                guid: i.guid,
                selector: r,
                needsContext: r && we.expr.match.needsContext.test(r),
                namespace: f.join(".")
            }, s), (h = l[p]) || ((h = l[p] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, n, f, a) || e.addEventListener && e.addEventListener(p, a)), u.add && (u.add.call(e, c), c.handler.guid || (c.handler.guid = i.guid)), r ? h.splice(h.delegateCount++, 0, c) : h.push(c), we.event.global[p] = !0)
        }, remove: function (e, t, i, n, r) {
            var s, a, o, l, d, c, u, h, p, f, m, g = We.hasData(e) && We.get(e);
            if (g && (l = g.events)) {
                for (d = (t = (t || "").match(Ie) || [""]).length; d--;) if (o = nt.exec(t[d]) || [], p = m = o[1], f = (o[2] || "").split(".").sort(), p) {
                    for (u = we.event.special[p] || {}, h = l[p = (n ? u.delegateType : u.bindType) || p] || [], o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = h.length; s--;) c = h[s], !r && m !== c.origType || i && i.guid !== c.guid || o && !o.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (h.splice(s, 1), c.selector && h.delegateCount--, u.remove && u.remove.call(e, c));
                    a && !h.length && (u.teardown && !1 !== u.teardown.call(e, f, g.handle) || we.removeEvent(e, p, g.handle), delete l[p])
                } else for (p in l) we.event.remove(e, p + t[d], i, n, !0);
                we.isEmptyObject(l) && We.remove(e, "handle events")
            }
        }, dispatch: function (e) {
            var t, i, n, r, s, a, o = we.event.fix(e), l = new Array(arguments.length),
                d = (We.get(this, "events") || {})[o.type] || [], c = we.event.special[o.type] || {};
            for (l[0] = o, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (o.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, o)) {
                for (a = we.event.handlers.call(this, o, d), t = 0; (r = a[t++]) && !o.isPropagationStopped();) for (o.currentTarget = r.elem, i = 0; (s = r.handlers[i++]) && !o.isImmediatePropagationStopped();) o.rnamespace && !o.rnamespace.test(s.namespace) || (o.handleObj = s, o.data = s.data, void 0 !== (n = ((we.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, l)) && !1 === (o.result = n) && (o.preventDefault(), o.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, o), o.result
            }
        }, handlers: function (e, t) {
            var i, n, r, s, a, o = [], l = t.delegateCount, d = e.target;
            if (l && d.nodeType && !("click" === e.type && e.button >= 1)) for (; d !== this; d = d.parentNode || this) if (1 === d.nodeType && ("click" !== e.type || !0 !== d.disabled)) {
                for (s = [], a = {}, i = 0; i < l; i++) void 0 === a[r = (n = t[i]).selector + " "] && (a[r] = n.needsContext ? we(r, this).index(d) > -1 : we.find(r, this, null, [d]).length), a[r] && s.push(n);
                s.length && o.push({elem: d, handlers: s})
            }
            return d = this, l < t.length && o.push({elem: d, handlers: t.slice(l)}), o
        }, addProp: function (e, t) {
            Object.defineProperty(we.Event.prototype, e, {
                enumerable: !0, configurable: !0, get: ye(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                }, set: function (t) {
                    Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
                }
            })
        }, fix: function (e) {
            return e[we.expando] ? e : new we.Event(e)
        }, special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== C() && this.focus) return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === C() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && s(this, "input")) return this.click(), !1
                }, _default: function (e) {
                    return s(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, we.removeEvent = function (e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i)
    }, we.Event = function (e, t) {
        if (!(this instanceof we.Event)) return new we.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? E : S, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && we.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[we.expando] = !0
    }, we.Event.prototype = {
        constructor: we.Event,
        isDefaultPrevented: S,
        isPropagationStopped: S,
        isImmediatePropagationStopped: S,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = E, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = E, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = E, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, we.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && tt.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && it.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, we.event.addProp), we.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        we.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var i, n = this, r = e.relatedTarget, s = e.handleObj;
                return r && (r === n || we.contains(n, r)) || (e.type = s.origType, i = s.handler.apply(this, arguments), e.type = t), i
            }
        }
    }), we.fn.extend({
        on: function (e, t, i, n) {
            return k(this, e, t, i, n)
        }, one: function (e, t, i, n) {
            return k(this, e, t, i, n, 1)
        }, off: function (e, t, i) {
            var n, r;
            if (e && e.preventDefault && e.handleObj) return n = e.handleObj, we(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (i = t, t = void 0), !1 === i && (i = S), this.each(function () {
                we.event.remove(this, e, i, t)
            })
        }
    });
    var rt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        st = /<script|<style|<link/i, at = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    we.extend({
        htmlPrefilter: function (e) {
            return e.replace(rt, "<$1></$2>")
        }, clone: function (e, t, i) {
            var n, r, s, a, o = e.cloneNode(!0), l = we.contains(e.ownerDocument, e);
            if (!(ve.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || we.isXMLDoc(e))) for (a = w(o), n = 0, r = (s = w(e)).length; n < r; n++) I(s[n], a[n]);
            if (t) if (i) for (s = s || w(e), a = a || w(o), n = 0, r = s.length; n < r; n++) A(s[n], a[n]); else A(e, o);
            return (a = w(o, "script")).length > 0 && x(a, !l && w(e, "script")), o
        }, cleanData: function (e) {
            for (var t, i, n, r = we.event.special, s = 0; void 0 !== (i = e[s]); s++) if (Fe(i)) {
                if (t = i[We.expando]) {
                    if (t.events) for (n in t.events) r[n] ? we.event.remove(i, n) : we.removeEvent(i, n, t.handle);
                    i[We.expando] = void 0
                }
                i[je.expando] && (i[je.expando] = void 0)
            }
        }
    }), we.fn.extend({
        detach: function (e) {
            return N(this, e, !0)
        }, remove: function (e) {
            return N(this, e)
        }, text: function (e) {
            return Le(this, function (e) {
                return void 0 === e ? we.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return P(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || D(this, e).appendChild(e)
            })
        }, prepend: function () {
            return P(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = D(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return P(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return P(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (we.cleanData(w(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return we.clone(this, e, t)
            })
        }, html: function (e) {
            return Le(this, function (e) {
                var t = this[0] || {}, i = 0, n = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !st.test(e) && !Qe[(Ke.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = we.htmlPrefilter(e);
                    try {
                        for (; i < n; i++) 1 === (t = this[i] || {}).nodeType && (we.cleanData(w(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = [];
            return P(this, arguments, function (t) {
                var i = this.parentNode;
                we.inArray(this, e) < 0 && (we.cleanData(w(this)), i && i.replaceChild(t, this))
            }, e)
        }
    }), we.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        we.fn[e] = function (e) {
            for (var i, n = [], r = we(e), s = r.length - 1, a = 0; a <= s; a++) i = a === s ? this : this.clone(!0), we(r[a])[t](i), ce.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var lt = new RegExp("^(" + Be + ")(?!px)[a-z%]+$", "i"), dt = function (t) {
        var i = t.ownerDocument.defaultView;
        return i && i.opener || (i = e), i.getComputedStyle(t)
    }, ct = new RegExp(Ye.join("|"), "i");
    !function () {
        function t() {
            if (d) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", d.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", et.appendChild(l).appendChild(d);
                var t = e.getComputedStyle(d);
                n = "1%" !== t.top, o = 12 === i(t.marginLeft), d.style.right = "60%", a = 36 === i(t.right), r = 36 === i(t.width), d.style.position = "absolute", s = 36 === d.offsetWidth || "absolute", et.removeChild(l), d = null
            }
        }

        function i(e) {
            return Math.round(parseFloat(e))
        }

        var n, r, s, a, o, l = ae.createElement("div"), d = ae.createElement("div");
        d.style && (d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", ve.clearCloneStyle = "content-box" === d.style.backgroundClip, we.extend(ve, {
            boxSizingReliable: function () {
                return t(), r
            }, pixelBoxStyles: function () {
                return t(), a
            }, pixelPosition: function () {
                return t(), n
            }, reliableMarginLeft: function () {
                return t(), o
            }, scrollboxSize: function () {
                return t(), s
            }
        }))
    }();
    var ut = /^(none|table(?!-c[ea]).+)/, ht = /^--/,
        pt = {position: "absolute", visibility: "hidden", display: "block"},
        ft = {letterSpacing: "0", fontWeight: "400"}, mt = ["Webkit", "Moz", "ms"], gt = ae.createElement("div").style;
    we.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var i = L(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, s, a, o = f(t), l = ht.test(t), d = e.style;
                if (l || (t = F(o)), a = we.cssHooks[t] || we.cssHooks[o], void 0 === i) return a && "get" in a && void 0 !== (r = a.get(e, !1, n)) ? r : d[t];
                "string" == (s = typeof i) && (r = Ve.exec(i)) && r[1] && (i = y(e, t, r), s = "number"), null != i && i === i && ("number" === s && (i += r && r[3] || (we.cssNumber[o] ? "" : "px")), ve.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (d[t] = "inherit"), a && "set" in a && void 0 === (i = a.set(e, i, n)) || (l ? d.setProperty(t, i) : d[t] = i))
            }
        },
        css: function (e, t, i, n) {
            var r, s, a, o = f(t);
            return ht.test(t) || (t = F(o)), (a = we.cssHooks[t] || we.cssHooks[o]) && "get" in a && (r = a.get(e, !0, i)), void 0 === r && (r = L(e, t, n)), "normal" === r && t in ft && (r = ft[t]), "" === i || i ? (s = parseFloat(r), !0 === i || isFinite(s) ? s || 0 : r) : r
        }
    }), we.each(["height", "width"], function (e, t) {
        we.cssHooks[t] = {
            get: function (e, i, n) {
                if (i) return !ut.test(we.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? z(e, t, n) : qe(e, pt, function () {
                    return z(e, t, n)
                })
            }, set: function (e, i, n) {
                var r, s = dt(e), a = "border-box" === we.css(e, "boxSizing", !1, s), o = n && j(e, t, n, a, s);
                return a && ve.scrollboxSize() === s.position && (o -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(s[t]) - j(e, t, "border", !1, s) - .5)), o && (r = Ve.exec(i)) && "px" !== (r[3] || "px") && (e.style[t] = i, i = we.css(e, t)), W(e, i, o)
            }
        }
    }), we.cssHooks.marginLeft = $(ve.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(L(e, "marginLeft")) || e.getBoundingClientRect().left - qe(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), we.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        we.cssHooks[e + t] = {
            expand: function (i) {
                for (var n = 0, r = {}, s = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) r[e + Ye[n] + t] = s[n] || s[n - 2] || s[0];
                return r
            }
        }, "margin" !== e && (we.cssHooks[e + t].set = W)
    }), we.fn.extend({
        css: function (e, t) {
            return Le(this, function (e, t, i) {
                var n, r, s = {}, a = 0;
                if (Array.isArray(t)) {
                    for (n = dt(e), r = t.length; a < r; a++) s[t[a]] = we.css(e, t[a], !1, n);
                    return s
                }
                return void 0 !== i ? we.style(e, t, i) : we.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), we.Tween = R, R.prototype = {
        constructor: R, init: function (e, t, i, n, r, s) {
            this.elem = e, this.prop = i, this.easing = r || we.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = s || (we.cssNumber[i] ? "" : "px")
        }, cur: function () {
            var e = R.propHooks[this.prop];
            return e && e.get ? e.get(this) : R.propHooks._default.get(this)
        }, run: function (e) {
            var t, i = R.propHooks[this.prop];
            return this.options.duration ? this.pos = t = we.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : R.propHooks._default.set(this), this
        }
    }, R.prototype.init.prototype = R.prototype, R.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = we.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            }, set: function (e) {
                we.fx.step[e.prop] ? we.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[we.cssProps[e.prop]] && !we.cssHooks[e.prop] ? e.elem[e.prop] = e.now : we.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, we.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, we.fx = R.prototype.init, we.fx.step = {};
    var vt, yt, bt = /^(?:toggle|show|hide)$/, _t = /queueHooks$/;
    we.Animation = we.extend(X, {
        tweeners: {
            "*": [function (e, t) {
                var i = this.createTween(e, t);
                return y(i.elem, e, Ve.exec(t), i), i
            }]
        }, tweener: function (e, t) {
            ye(e) ? (t = e, e = ["*"]) : e = e.match(Ie);
            for (var i, n = 0, r = e.length; n < r; n++) i = e[n], X.tweeners[i] = X.tweeners[i] || [], X.tweeners[i].unshift(t)
        }, prefilters: [q], prefilter: function (e, t) {
            t ? X.prefilters.unshift(e) : X.prefilters.push(e)
        }
    }), we.speed = function (e, t, i) {
        var n = e && "object" == typeof e ? we.extend({}, e) : {
                complete: i || !i && t || ye(e) && e,
                duration: e,
                easing: i && t || t && !ye(t) && t
            }
        ;
        return we.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in we.fx.speeds ? n.duration = we.fx.speeds[n.duration] : n.duration = we.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
            ye(n.old) && n.old.call(this), n.queue && we.dequeue(this, n.queue)
        }, n
    }, we.fn.extend({
        fadeTo: function (e, t, i, n) {
            return this.filter(Ge).css("opacity", 0).show().end().animate({opacity: t}, e, i, n)
        }, animate: function (e, t, i, n) {
            var r = we.isEmptyObject(e), s = we.speed(t, i, n), a = function () {
                var t = X(this, we.extend({}, e), s);
                (r || We.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a, r || !1 === s.queue ? this.each(a) : this.queue(s.queue, a)
        }, stop: function (e, t, i) {
            var n = function (e) {
                var t = e.stop;
                delete e.stop, t(i)
            };
            return "string" != typeof e && (i = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                var t = !0, r = null != e && e + "queueHooks", s = we.timers, a = We.get(this);
                if (r) a[r] && a[r].stop && n(a[r]); else for (r in a) a[r] && a[r].stop && _t.test(r) && n(a[r]);
                for (r = s.length; r--;) s[r].elem !== this || null != e && s[r].queue !== e || (s[r].anim.stop(i), t = !1, s.splice(r, 1));
                !t && i || we.dequeue(this, e)
            })
        }, finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var t, i = We.get(this), n = i[e + "queue"], r = i[e + "queueHooks"], s = we.timers,
                    a = n ? n.length : 0;
                for (i.finish = !0, we.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; t < a; t++) n[t] && n[t].finish && n[t].finish.call(this);
                delete i.finish
            })
        }
    }), we.each(["toggle", "show", "hide"], function (e, t) {
        var i = we.fn[t];
        we.fn[t] = function (e, n, r) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(Y(t, !0), e, n, r)
        }
    }), we.each({
        slideDown: Y("show"),
        slideUp: Y("hide"),
        slideToggle: Y("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        we.fn[e] = function (e, i, n) {
            return this.animate(t, e, i, n)
        }
    }), we.timers = [], we.fx.tick = function () {
        var e, t = 0, i = we.timers;
        for (vt = Date.now(); t < i.length; t++) (e = i[t])() || i[t] !== e || i.splice(t--, 1);
        i.length || we.fx.stop(), vt = void 0
    }, we.fx.timer = function (e) {
        we.timers.push(e), we.fx.start()
    }, we.fx.interval = 13, we.fx.start = function () {
        yt || (yt = !0, B())
    }, we.fx.stop = function () {
        yt = null
    }, we.fx.speeds = {slow: 600, fast: 200, _default: 400}, we.fn.delay = function (t, i) {
        return t = we.fx ? we.fx.speeds[t] || t : t, i = i || "fx", this.queue(i, function (i, n) {
            var r = e.setTimeout(i, t);
            n.stop = function () {
                e.clearTimeout(r)
            }
        })
    }, function () {
        var e = ae.createElement("input"), t = ae.createElement("select").appendChild(ae.createElement("option"));
        e.type = "checkbox", ve.checkOn = "" !== e.value, ve.optSelected = t.selected, (e = ae.createElement("input")).value = "t", e.type = "radio", ve.radioValue = "t" === e.value
    }();
    var wt, xt = we.expr.attrHandle;
    we.fn.extend({
        attr: function (e, t) {
            return Le(this, we.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                we.removeAttr(this, e)
            })
        }
    }), we.extend({
        attr: function (e, t, i) {
            var n, r, s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? we.prop(e, t, i) : (1 === s && we.isXMLDoc(e) || (r = we.attrHooks[t.toLowerCase()] || (we.expr.match.bool.test(t) ? wt : void 0)), void 0 !== i ? null === i ? void we.removeAttr(e, t) : r && "set" in r && void 0 !== (n = r.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : r && "get" in r && null !== (n = r.get(e, t)) ? n : null == (n = we.find.attr(e, t)) ? void 0 : n)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!ve.radioValue && "radio" === t && s(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var i, n = 0, r = t && t.match(Ie);
            if (r && 1 === e.nodeType) for (; i = r[n++];) e.removeAttribute(i)
        }
    }), wt = {
        set: function (e, t, i) {
            return !1 === t ? we.removeAttr(e, i) : e.setAttribute(i, i), i
        }
    }, we.each(we.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var i = xt[t] || we.find.attr;
        xt[t] = function (e, t, n) {
            var r, s, a = t.toLowerCase();
            return n || (s = xt[a], xt[a] = r, r = null != i(e, t, n) ? a : null, xt[a] = s), r
        }
    });
    var Tt = /^(?:input|select|textarea|button)$/i, Et = /^(?:a|area)$/i;
    we.fn.extend({
        prop: function (e, t) {
            return Le(this, we.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[we.propFix[e] || e]
            })
        }
    }), we.extend({
        prop: function (e, t, i) {
            var n, r, s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return 1 === s && we.isXMLDoc(e) || (t = we.propFix[t] || t, r = we.propHooks[t]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(e, i, t)) ? n : e[t] = i : r && "get" in r && null !== (n = r.get(e, t)) ? n : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = we.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Tt.test(e.nodeName) || Et.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), ve.optSelected || (we.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), we.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        we.propFix[this.toLowerCase()] = this
    }), we.fn.extend({
        addClass: function (e) {
            var t, i, n, r, s, a, o, l = 0;
            if (ye(e)) return this.each(function (t) {
                we(this).addClass(e.call(this, t, J(this)))
            });
            if ((t = Q(e)).length) for (; i = this[l++];) if (r = J(i), n = 1 === i.nodeType && " " + K(r) + " ") {
                for (a = 0; s = t[a++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                r !== (o = K(n)) && i.setAttribute("class", o)
            }
            return this
        }, removeClass: function (e) {
            var t, i, n, r, s, a, o, l = 0;
            if (ye(e)) return this.each(function (t) {
                we(this).removeClass(e.call(this, t, J(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = Q(e)).length) for (; i = this[l++];) if (r = J(i), n = 1 === i.nodeType && " " + K(r) + " ") {
                for (a = 0; s = t[a++];) for (; n.indexOf(" " + s + " ") > -1;) n = n.replace(" " + s + " ", " ");
                r !== (o = K(n)) && i.setAttribute("class", o)
            }
            return this
        }, toggleClass: function (e, t) {
            var i = typeof e, n = "string" === i || Array.isArray(e);
            return "boolean" == typeof t && n ? t ? this.addClass(e) : this.removeClass(e) : ye(e) ? this.each(function (i) {
                we(this).toggleClass(e.call(this, i, J(this), t), t)
            }) : this.each(function () {
                var t, r, s, a;
                if (n) for (r = 0, s = we(this), a = Q(e); t = a[r++];) s.hasClass(t) ? s.removeClass(t) : s.addClass(t); else void 0 !== e && "boolean" !== i || ((t = J(this)) && We.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : We.get(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, i, n = 0;
            for (t = " " + e + " "; i = this[n++];) if (1 === i.nodeType && (" " + K(J(i)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var St = /\r/g;
    we.fn.extend({
        val: function (e) {
            var t, i, n, r = this[0];
            return arguments.length ? (n = ye(e), this.each(function (i) {
                var r;
                1 === this.nodeType && (null == (r = n ? e.call(this, i, we(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = we.map(r, function (e) {
                    return null == e ? "" : e + ""
                })), (t = we.valHooks[this.type] || we.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = we.valHooks[r.type] || we.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (i = t.get(r, "value")) ? i : "string" == typeof(i = r.value) ? i.replace(St, "") : null == i ? "" : i : void 0
        }
    }), we.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = we.find.attr(e, "value");
                    return null != t ? t : K(we.text(e))
                }
            }, select: {
                get: function (e) {
                    var t, i, n, r = e.options, a = e.selectedIndex, o = "select-one" === e.type, l = o ? null : [],
                        d = o ? a + 1 : r.length;
                    for (n = a < 0 ? d : o ? a : 0; n < d; n++) if (((i = r[n]).selected || n === a) && !i.disabled && (!i.parentNode.disabled || !s(i.parentNode, "optgroup"))) {
                        if (t = we(i).val(), o) return t;
                        l.push(t)
                    }
                    return l
                }, set: function (e, t) {
                    for (var i, n, r = e.options, s = we.makeArray(t), a = r.length; a--;) ((n = r[a]).selected = we.inArray(we.valHooks.option.get(n), s) > -1) && (i = !0);
                    return i || (e.selectedIndex = -1), s
                }
            }
        }
    }), we.each(["radio", "checkbox"], function () {
        we.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = we.inArray(we(e).val(), t) > -1
            }
        }, ve.checkOn || (we.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), ve.focusin = "onfocusin" in e;
    var Ct = /^(?:focusinfocus|focusoutblur)$/, kt = function (e) {
        e.stopPropagation()
    };
    we.extend(we.event, {
        trigger: function (t, i, n, r) {
            var s, a, o, l, d, c, u, h, p = [n || ae], f = fe.call(t, "type") ? t.type : t,
                m = fe.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = h = o = n = n || ae, 3 !== n.nodeType && 8 !== n.nodeType && !Ct.test(f + we.event.triggered) && (f.indexOf(".") > -1 && (f = (m = f.split(".")).shift(), m.sort()), d = f.indexOf(":") < 0 && "on" + f, t = t[we.expando] ? t : new we.Event(f, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = m.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), i = null == i ? [t] : we.makeArray(i, [t]), u = we.event.special[f] || {}, r || !u.trigger || !1 !== u.trigger.apply(n, i))) {
                if (!r && !u.noBubble && !be(n)) {
                    for (l = u.delegateType || f, Ct.test(l + f) || (a = a.parentNode); a; a = a.parentNode) p.push(a), o = a;
                    o === (n.ownerDocument || ae) && p.push(o.defaultView || o.parentWindow || e)
                }
                for (s = 0; (a = p[s++]) && !t.isPropagationStopped();) h = a, t.type = s > 1 ? l : u.bindType || f, (c = (We.get(a, "events") || {})[t.type] && We.get(a, "handle")) && c.apply(a, i), (c = d && a[d]) && c.apply && Fe(a) && (t.result = c.apply(a, i), !1 === t.result && t.preventDefault());
                return t.type = f, r || t.isDefaultPrevented() || u._default && !1 !== u._default.apply(p.pop(), i) || !Fe(n) || d && ye(n[f]) && !be(n) && ((o = n[d]) && (n[d] = null), we.event.triggered = f, t.isPropagationStopped() && h.addEventListener(f, kt), n[f](), t.isPropagationStopped() && h.removeEventListener(f, kt), we.event.triggered = void 0, o && (n[d] = o)), t.result
            }
        }, simulate: function (e, t, i) {
            var n = we.extend(new we.Event, i, {type: e, isSimulated: !0});
            we.event.trigger(n, null, t)
        }
    }), we.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                we.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var i = this[0];
            if (i) return we.event.trigger(e, t, i, !0)
        }
    }), ve.focusin || we.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var i = function (e) {
            we.event.simulate(t, e.target, we.event.fix(e))
        };
        we.event.special[t] = {
            setup: function () {
                var n = this.ownerDocument || this, r = We.access(n, t);
                r || n.addEventListener(e, i, !0), We.access(n, t, (r || 0) + 1)
            }, teardown: function () {
                var n = this.ownerDocument || this, r = We.access(n, t) - 1;
                r ? We.access(n, t, r) : (n.removeEventListener(e, i, !0), We.remove(n, t))
            }
        }
    });
    var Dt = e.location, Ot = Date.now(), Mt = /\?/;
    we.parseXML = function (t) {
        var i;
        if (!t || "string" != typeof t) return null;
        try {
            i = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            i = void 0
        }
        return i && !i.getElementsByTagName("parsererror").length || we.error("Invalid XML: " + t), i
    };
    var At = /\[\]$/, It = /\r?\n/g, Pt = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;
    we.param = function (e, t) {
        var i, n = [], r = function (e, t) {
            var i = ye(t) ? t() : t;
            n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i)
        };
        if (Array.isArray(e) || e.jquery && !we.isPlainObject(e)) we.each(e, function () {
            r(this.name, this.value)
        }); else for (i in e) Z(i, e[i], t, r);
        return n.join("&")
    }, we.fn.extend({
        serialize: function () {
            return we.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = we.prop(this, "elements");
                return e ? we.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !we(this).is(":disabled") && Nt.test(this.nodeName) && !Pt.test(e) && (this.checked || !Xe.test(e))
            }).map(function (e, t) {
                var i = we(this).val();
                return null == i ? null : Array.isArray(i) ? we.map(i, function (e) {
                    return {name: t.name, value: e.replace(It, "\r\n")}
                }) : {name: t.name, value: i.replace(It, "\r\n")}
            }).get()
        }
    });
    var Lt = /%20/g, $t = /#.*$/, Ht = /([?&])_=[^&]*/, Ft = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Wt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, jt = /^(?:GET|HEAD)$/, zt = /^\/\//, Rt = {},
        Bt = {}, Vt = "*/".concat("*"), Yt = ae.createElement("a");
    Yt.href = Dt.href, we.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Dt.href,
            type: "GET",
            isLocal: Wt.test(Dt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Vt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": we.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? ie(ie(e, we.ajaxSettings), t) : ie(we.ajaxSettings, e)
        },
        ajaxPrefilter: ee(Rt),
        ajaxTransport: ee(Bt),
        ajax: function (t, i) {
            function n(t, i, n, o) {
                var d, h, p, _, w, x = i;
                c || (c = !0, l && e.clearTimeout(l), r = void 0, a = o || "", T.readyState = t > 0 ? 4 : 0, d = t >= 200 && t < 300 || 304 === t, n && (_ = ne(f, T, n)), _ = re(f, _, T, d), d ? (f.ifModified && ((w = T.getResponseHeader("Last-Modified")) && (we.lastModified[s] = w), (w = T.getResponseHeader("etag")) && (we.etag[s] = w)), 204 === t || "HEAD" === f.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = _.state, h = _.data, d = !(p = _.error))) : (p = x, !t && x || (x = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (i || x) + "", d ? v.resolveWith(m, [h, x, T]) : v.rejectWith(m, [T, x, p]), T.statusCode(b), b = void 0, u && g.trigger(d ? "ajaxSuccess" : "ajaxError", [T, f, d ? h : p]), y.fireWith(m, [T, x]), u && (g.trigger("ajaxComplete", [T, f]), --we.active || we.event.trigger("ajaxStop")))
            }

            "object" == typeof t && (i = t, t = void 0), i = i || {};
            var r, s, a, o, l, d, c, u, h, p, f = we.ajaxSetup({}, i), m = f.context || f,
                g = f.context && (m.nodeType || m.jquery) ? we(m) : we.event, v = we.Deferred(),
                y = we.Callbacks("once memory"), b = f.statusCode || {}, _ = {}, w = {}, x = "canceled", T = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (c) {
                            if (!o) for (o = {}; t = Ft.exec(a);) o[t[1].toLowerCase()] = t[2];
                            t = o[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return c ? a : null
                    }, setRequestHeader: function (e, t) {
                        return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, _[e] = t), this
                    }, overrideMimeType: function (e) {
                        return null == c && (f.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (c) T.always(e[T.status]); else for (t in e) b[t] = [b[t], e[t]];
                        return this
                    }, abort: function (e) {
                        var t = e || x;
                        return r && r.abort(t), n(0, t), this
                    }
                };
            if (v.promise(T), f.url = ((t || f.url || Dt.href) + "").replace(zt, Dt.protocol + "//"), f.type = i.method || i.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(Ie) || [""], null == f.crossDomain) {
                d = ae.createElement("a");
                try {
                    d.href = f.url, d.href = d.href, f.crossDomain = Yt.protocol + "//" + Yt.host != d.protocol + "//" + d.host
                } catch (e) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = we.param(f.data, f.traditional)), te(Rt, f, i, T), c) return T;
            (u = we.event && f.global) && 0 == we.active++ && we.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !jt.test(f.type), s = f.url.replace($t, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Lt, "+")) : (p = f.url.slice(s.length), f.data && (f.processData || "string" == typeof f.data) && (s += (Mt.test(s) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (s = s.replace(Ht, "$1"), p = (Mt.test(s) ? "&" : "?") + "_=" + Ot++ + p), f.url = s + p), f.ifModified && (we.lastModified[s] && T.setRequestHeader("If-Modified-Since", we.lastModified[s]), we.etag[s] && T.setRequestHeader("If-None-Match", we.etag[s])), (f.data && f.hasContent && !1 !== f.contentType || i.contentType) && T.setRequestHeader("Content-Type", f.contentType), T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Vt + "; q=0.01" : "") : f.accepts["*"]);
            for (h in f.headers) T.setRequestHeader(h, f.headers[h]);
            if (f.beforeSend && (!1 === f.beforeSend.call(m, T, f) || c)) return T.abort();
            if (x = "abort", y.add(f.complete), T.done(f.success), T.fail(f.error), r = te(Bt, f, i, T)) {
                if (T.readyState = 1, u && g.trigger("ajaxSend", [T, f]), c) return T;
                f.async && f.timeout > 0 && (l = e.setTimeout(function () {
                    T.abort("timeout")
                }, f.timeout));
                try {
                    c = !1, r.send(_, n)
                } catch (e) {
                    if (c) throw e;
                    n(-1, e)
                }
            } else n(-1, "No Transport");
            return T
        },
        getJSON: function (e, t, i) {
            return we.get(e, t, i, "json")
        },
        getScript: function (e, t) {
            return we.get(e, void 0, t, "script")
        }
    }), we.each(["get", "post"], function (e, t) {
        we[t] = function (e, i, n, r) {
            return ye(i) && (r = r || n, n = i, i = void 0), we.ajax(we.extend({
                url: e,
                type: t,
                dataType: r,
                data: i,
                success: n
            }, we.isPlainObject(e) && e))
        }
    }), we._evalUrl = function (e) {
        return we.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
    }, we.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (ye(e) && (e = e.call(this[0])), t = we(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        }, wrapInner: function (e) {
            return ye(e) ? this.each(function (t) {
                we(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = we(this), i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = ye(e);
            return this.each(function (i) {
                we(this).wrapAll(t ? e.call(this, i) : e)
            })
        }, unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                we(this).replaceWith(this.childNodes)
            }), this
        }
    }), we.expr.pseudos.hidden = function (e) {
        return !we.expr.pseudos.visible(e)
    }, we.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, we.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) {
        }
    };
    var Gt = {0: 200, 1223: 204}, qt = we.ajaxSettings.xhr();
    ve.cors = !!qt && "withCredentials" in qt, ve.ajax = qt = !!qt, we.ajaxTransport(function (t) {
        var i, n;
        if (ve.cors || qt && !t.crossDomain) return {
            send: function (r, s) {
                var a, o = t.xhr();
                if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) o[a] = t.xhrFields[a];
                t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (a in r) o.setRequestHeader(a, r[a]);
                i = function (e) {
                    return function () {
                        i && (i = n = o.onload = o.onerror = o.onabort = o.ontimeout = o.onreadystatechange = null, "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? s(0, "error") : s(o.status, o.statusText) : s(Gt[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {binary: o.response} : {text: o.responseText}, o.getAllResponseHeaders()))
                    }
                }, o.onload = i(), n = o.onerror = o.ontimeout = i("error"), void 0 !== o.onabort ? o.onabort = n : o.onreadystatechange = function () {
                    4 === o.readyState && e.setTimeout(function () {
                        i && n()
                    })
                }, i = i("abort");
                try {
                    o.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (i) throw e
                }
            }, abort: function () {
                i && i()
            }
        }
    }), we.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), we.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return we.globalEval(e), e
            }
        }
    }), we.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), we.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, i;
            return {
                send: function (n, r) {
                    t = we("<script>").prop({charset: e.scriptCharset, src: e.url}).on("load error", i = function (e) {
                        t.remove(), i = null, e && r("error" === e.type ? 404 : 200, e.type)
                    }), ae.head.appendChild(t[0])
                }, abort: function () {
                    i && i()
                }
            }
        }
    });
    var Ut = [], Xt = /(=)\?(?=&|$)|\?\?/;
    we.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Ut.pop() || we.expando + "_" + Ot++;
            return this[e] = !0, e
        }
    }), we.ajaxPrefilter("json jsonp", function (t, i, n) {
        var r, s, a,
            o = !1 !== t.jsonp && (Xt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(t.data) && "data");
        if (o || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = ye(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, o ? t[o] = t[o].replace(Xt, "$1" + r) : !1 !== t.jsonp && (t.url += (Mt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
            return a || we.error(r + " was not called"), a[0]
        }, t.dataTypes[0] = "json", s = e[r], e[r] = function () {
            a = arguments
        }, n.always(function () {
            void 0 === s ? we(e).removeProp(r) : e[r] = s, t[r] && (t.jsonpCallback = i.jsonpCallback, Ut.push(r)), a && ye(s) && s(a[0]), a = s = void 0
        }), "script"
    }), ve.createHTMLDocument = function () {
        var e = ae.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), we.parseHTML = function (e, t, i) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (i = t, t = !1);
        var n, r, s;
        return t || (ve.createHTMLDocument ? ((n = (t = ae.implementation.createHTMLDocument("")).createElement("base")).href = ae.location.href, t.head.appendChild(n)) : t = ae), r = ke.exec(e), s = !i && [], r ? [t.createElement(r[1])] : (r = T([e], t, s), s && s.length && we(s).remove(), we.merge([], r.childNodes))
    }, we.fn.load = function (e, t, i) {
        var n, r, s, a = this, o = e.indexOf(" ");
        return o > -1 && (n = K(e.slice(o)), e = e.slice(0, o)), ye(t) ? (i = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && we.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            s = arguments, a.html(n ? we("<div>").append(we.parseHTML(e)).find(n) : e)
        }).always(i && function (e, t) {
            a.each(function () {
                i.apply(this, s || [e.responseText, t, e])
            })
        }), this
    }, we.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        we.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), we.expr.pseudos.animated = function (e) {
        return we.grep(we.timers, function (t) {
            return e === t.elem
        }).length
    }, we.offset = {
        setOffset: function (e, t, i) {
            var n, r, s, a, o, l, d = we.css(e, "position"), c = we(e), u = {};
            "static" === d && (e.style.position = "relative"), o = c.offset(), s = we.css(e, "top"), l = we.css(e, "left"), ("absolute" === d || "fixed" === d) && (s + l).indexOf("auto") > -1 ? (a = (n = c.position()).top, r = n.left) : (a = parseFloat(s) || 0, r = parseFloat(l) || 0), ye(t) && (t = t.call(e, i, we.extend({}, o))), null != t.top && (u.top = t.top - o.top + a), null != t.left && (u.left = t.left - o.left + r), "using" in t ? t.using.call(e, u) : c.css(u)
        }
    }, we.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                we.offset.setOffset(this, e, t)
            });
            var t, i, n = this[0];
            return n ? n.getClientRects().length ? (t = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {
                top: t.top + i.pageYOffset,
                left: t.left + i.pageXOffset
            }) : {top: 0, left: 0} : void 0
        }, position: function () {
            if (this[0]) {
                var e, t, i, n = this[0], r = {top: 0, left: 0};
                if ("fixed" === we.css(n, "position")) t = n.getBoundingClientRect(); else {
                    for (t = this.offset(), i = n.ownerDocument, e = n.offsetParent || i.documentElement; e && (e === i.body || e === i.documentElement) && "static" === we.css(e, "position");) e = e.parentNode;
                    e && e !== n && 1 === e.nodeType && ((r = we(e).offset()).top += we.css(e, "borderTopWidth", !0), r.left += we.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - we.css(n, "marginTop", !0),
                    left: t.left - r.left - we.css(n, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === we.css(e, "position");) e = e.offsetParent;
                return e || et
            })
        }
    }), we.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var i = "pageYOffset" === t;
        we.fn[e] = function (n) {
            return Le(this, function (e, n, r) {
                var s;
                if (be(e) ? s = e : 9 === e.nodeType && (s = e.defaultView), void 0 === r) return s ? s[t] : e[n];
                s ? s.scrollTo(i ? s.pageXOffset : r, i ? r : s.pageYOffset) : e[n] = r
            }, e, n, arguments.length)
        }
    }), we.each(["top", "left"], function (e, t) {
        we.cssHooks[t] = $(ve.pixelPosition, function (e, i) {
            if (i) return i = L(e, t), lt.test(i) ? we(e).position()[t] + "px" : i
        })
    }), we.each({Height: "height", Width: "width"}, function (e, t) {
        we.each({padding: "inner" + e, content: t, "": "outer" + e}, function (i, n) {
            we.fn[n] = function (r, s) {
                var a = arguments.length && (i || "boolean" != typeof r),
                    o = i || (!0 === r || !0 === s ? "margin" : "border");
                return Le(this, function (t, i, r) {
                    var s;
                    return be(t) ? 0 === n.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement, Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === r ? we.css(t, i, o) : we.style(t, i, r, o)
                }, t, a ? r : void 0, a)
            }
        })
    }), we.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        we.fn[t] = function (e, i) {
            return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
        }
    }), we.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), we.fn.extend({
        bind: function (e, t, i) {
            return this.on(e, null, t, i)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, i, n) {
            return this.on(t, e, i, n)
        }, undelegate: function (e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    }), we.proxy = function (e, t) {
        var i, n, r;
        if ("string" == typeof t && (i = e[t], t = e, e = i), ye(e)) return n = le.call(arguments, 2), r = function () {
            return e.apply(t || this, n.concat(le.call(arguments)))
        }, r.guid = e.guid = e.guid || we.guid++, r
    }, we.holdReady = function (e) {
        e ? we.readyWait++ : we.ready(!0)
    }, we.isArray = Array.isArray, we.parseJSON = JSON.parse, we.nodeName = s, we.isFunction = ye, we.isWindow = be, we.camelCase = f, we.type = n, we.now = Date.now, we.isNumeric = function (e) {
        var t = we.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return we
    });
    var Kt = e.jQuery, Jt = e.$;
    return we.noConflict = function (t) {
        return e.$ === we && (e.$ = Jt), t && e.jQuery === we && (e.jQuery = Kt), we
    }, t || (e.jQuery = e.$ = we), we
}), function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
}(this, function () {
    "use strict";

    function e(e) {
        var t = !1;
        return function () {
            t || (t = !0, window.Promise.resolve().then(function () {
                t = !1, e()
            }))
        }
    }

    function t(e) {
        var t = !1;
        return function () {
            t || (t = !0, setTimeout(function () {
                t = !1, e()
            }, oe))
        }
    }

    function i(e) {
        var t = {};
        return e && "[object Function]" === t.toString.call(e)
    }

    function n(e, t) {
        if (1 !== e.nodeType) return [];
        var i = getComputedStyle(e, null);
        return t ? i[t] : i
    }

    function r(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }

    function s(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case"HTML":
            case"BODY":
                return e.ownerDocument.body;
            case"#document":
                return e.body
        }
        var t = n(e), i = t.overflow, a = t.overflowX;
        return /(auto|scroll)/.test(i + t.overflowY + a) ? e : s(r(e))
    }

    function a(e) {
        var t = e && e.offsetParent, i = t && t.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(t.nodeName) && "static" === n(t, "position") ? a(t) : t : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function o(e) {
        var t = e.nodeName;
        return "BODY" !== t && ("HTML" === t || a(e.firstElementChild) === e)
    }

    function l(e) {
        return null !== e.parentNode ? l(e.parentNode) : e
    }

    function d(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var i = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, n = i ? e : t, r = i ? t : e,
            s = document.createRange();
        s.setStart(n, 0), s.setEnd(r, 0);
        var c = s.commonAncestorContainer;
        if (e !== c && t !== c || n.contains(r)) return o(c) ? c : a(c);
        var u = l(e);
        return u.host ? d(u.host, t) : d(e, l(t).host)
    }

    function c(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
            i = "top" === t ? "scrollTop" : "scrollLeft", n = e.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var r = e.ownerDocument.documentElement;
            return (e.ownerDocument.scrollingElement || r)[i]
        }
        return e[i]
    }

    function u(e, t) {
        var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n = c(t, "top"), r = c(t, "left"),
            s = i ? -1 : 1;
        return e.top += n * s, e.bottom += n * s, e.left += r * s, e.right += r * s, e
    }

    function h(e, t) {
        var i = "x" === t ? "Left" : "Top", n = "Left" === i ? "Right" : "Bottom";
        return parseFloat(e["border" + i + "Width"], 10) + parseFloat(e["border" + n + "Width"], 10)
    }

    function p(e, t, i, n) {
        return Math.max(t["offset" + e], t["scroll" + e], i["client" + e], i["offset" + e], i["scroll" + e], he() ? i["offset" + e] + n["margin" + ("Height" === e ? "Top" : "Left")] + n["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
    }

    function f() {
        var e = document.body, t = document.documentElement, i = he() && getComputedStyle(t);
        return {height: p("Height", e, t, i), width: p("Width", e, t, i)}
    }

    function m(e) {
        return ge({}, e, {right: e.left + e.width, bottom: e.top + e.height})
    }

    function g(e) {
        var t = {};
        if (he()) try {
            t = e.getBoundingClientRect();
            var i = c(e, "top"), r = c(e, "left");
            t.top += i, t.left += r, t.bottom += i, t.right += r
        } catch (e) {
        } else t = e.getBoundingClientRect();
        var s = {left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top},
            a = "HTML" === e.nodeName ? f() : {}, o = a.width || e.clientWidth || s.right - s.left,
            l = a.height || e.clientHeight || s.bottom - s.top, d = e.offsetWidth - o, u = e.offsetHeight - l;
        if (d || u) {
            var p = n(e);
            d -= h(p, "x"), u -= h(p, "y"), s.width -= d, s.height -= u
        }
        return m(s)
    }

    function v(e, t) {
        var i = he(), r = "HTML" === t.nodeName, a = g(e), o = g(t), l = s(e), d = n(t),
            c = parseFloat(d.borderTopWidth, 10), h = parseFloat(d.borderLeftWidth, 10),
            p = m({top: a.top - o.top - c, left: a.left - o.left - h, width: a.width, height: a.height});
        if (p.marginTop = 0, p.marginLeft = 0, !i && r) {
            var f = parseFloat(d.marginTop, 10), v = parseFloat(d.marginLeft, 10);
            p.top -= c - f, p.bottom -= c - f, p.left -= h - v, p.right -= h - v, p.marginTop = f, p.marginLeft = v
        }
        return (i ? t.contains(l) : t === l && "BODY" !== l.nodeName) && (p = u(p, t)), p
    }

    function y(e) {
        var t = e.ownerDocument.documentElement, i = v(e, t), n = Math.max(t.clientWidth, window.innerWidth || 0),
            r = Math.max(t.clientHeight, window.innerHeight || 0), s = c(t), a = c(t, "left");
        return m({top: s - i.top + i.marginTop, left: a - i.left + i.marginLeft, width: n, height: r})
    }

    function b(e) {
        var t = e.nodeName;
        return "BODY" !== t && "HTML" !== t && ("fixed" === n(e, "position") || b(r(e)))
    }

    function _(e, t, i, n) {
        var a = {top: 0, left: 0}, o = d(e, t);
        if ("viewport" === n) a = y(o); else {
            var l = void 0;
            "scrollParent" === n ? (l = s(r(t)), "BODY" === l.nodeName && (l = e.ownerDocument.documentElement)) : l = "window" === n ? e.ownerDocument.documentElement : n;
            var c = v(l, o);
            if ("HTML" !== l.nodeName || b(o)) a = c; else {
                var u = f(), h = u.height, p = u.width;
                a.top += c.top - c.marginTop, a.bottom = h + c.top, a.left += c.left - c.marginLeft, a.right = p + c.left
            }
        }
        return a.left += i, a.top += i, a.right -= i, a.bottom -= i, a
    }

    function w(e) {
        return e.width * e.height
    }

    function x(e, t, i, n, r) {
        var s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var a = _(i, n, s, r), o = {
            top: {width: a.width, height: t.top - a.top},
            right: {width: a.right - t.right, height: a.height},
            bottom: {width: a.width, height: a.bottom - t.bottom},
            left: {width: t.left - a.left, height: a.height}
        }, l = Object.keys(o).map(function (e) {
            return ge({key: e}, o[e], {area: w(o[e])})
        }).sort(function (e, t) {
            return t.area - e.area
        }), d = l.filter(function (e) {
            var t = e.width, n = e.height;
            return t >= i.clientWidth && n >= i.clientHeight
        }), c = d.length > 0 ? d[0].key : l[0].key, u = e.split("-")[1];
        return c + (u ? "-" + u : "")
    }

    function T(e, t, i) {
        return v(i, d(t, i))
    }

    function E(e) {
        var t = getComputedStyle(e), i = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            n = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return {width: e.offsetWidth + n, height: e.offsetHeight + i}
    }

    function S(e) {
        var t = {left: "right", right: "left", bottom: "top", top: "bottom"};
        return e.replace(/left|right|bottom|top/g, function (e) {
            return t[e]
        })
    }

    function C(e, t, i) {
        i = i.split("-")[0];
        var n = E(e), r = {width: n.width, height: n.height}, s = -1 !== ["right", "left"].indexOf(i),
            a = s ? "top" : "left", o = s ? "left" : "top", l = s ? "height" : "width", d = s ? "width" : "height";
        return r[a] = t[a] + t[l] / 2 - n[l] / 2, r[o] = i === o ? t[o] - n[d] : t[S(o)], r
    }

    function k(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function D(e, t, i) {
        if (Array.prototype.findIndex) return e.findIndex(function (e) {
            return e[t] === i
        });
        var n = k(e, function (e) {
            return e[t] === i
        });
        return e.indexOf(n)
    }

    function O(e, t, n) {
        return (void 0 === n ? e : e.slice(0, D(e, "name", n))).forEach(function (e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var n = e.function || e.fn;
            e.enabled && i(n) && (t.offsets.popper = m(t.offsets.popper), t.offsets.reference = m(t.offsets.reference), t = n(t, e))
        }), t
    }

    function M() {
        if (!this.state.isDestroyed) {
            var e = {instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {}};
            e.offsets.reference = T(this.state, this.popper, this.reference), e.placement = x(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = C(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = "absolute", e = O(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
        }
    }

    function A(e, t) {
        return e.some(function (e) {
            var i = e.name;
            return e.enabled && i === t
        })
    }

    function I(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], i = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length - 1; n++) {
            var r = t[n], s = r ? "" + r + i : e;
            if (void 0 !== document.body.style[s]) return s
        }
        return null
    }

    function P() {
        return this.state.isDestroyed = !0, A(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[I("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
    }

    function N(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function L(e, t, i, n) {
        var r = "BODY" === e.nodeName, a = r ? e.ownerDocument.defaultView : e;
        a.addEventListener(t, i, {passive: !0}), r || L(s(a.parentNode), t, i, n), n.push(a)
    }

    function $(e, t, i, n) {
        i.updateBound = n, N(e).addEventListener("resize", i.updateBound, {passive: !0});
        var r = s(e);
        return L(r, "scroll", i.updateBound, i.scrollParents), i.scrollElement = r, i.eventsEnabled = !0, i
    }

    function H() {
        this.state.eventsEnabled || (this.state = $(this.reference, this.options, this.state, this.scheduleUpdate))
    }

    function F(e, t) {
        return N(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
            e.removeEventListener("scroll", t.updateBound)
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
    }

    function W() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = F(this.reference, this.state))
    }

    function j(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function z(e, t) {
        Object.keys(t).forEach(function (i) {
            var n = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(i) && j(t[i]) && (n = "px"), e.style[i] = t[i] + n
        })
    }

    function R(e, t) {
        Object.keys(t).forEach(function (i) {
            !1 !== t[i] ? e.setAttribute(i, t[i]) : e.removeAttribute(i)
        })
    }

    function B(e) {
        return z(e.instance.popper, e.styles), R(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && z(e.arrowElement, e.arrowStyles), e
    }

    function V(e, t, i, n, r) {
        var s = T(r, t, e), a = x(i.placement, s, t, e, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding);
        return t.setAttribute("x-placement", a), z(t, {position: "absolute"}), i
    }

    function Y(e, t) {
        var i = t.x, n = t.y, r = e.offsets.popper, s = k(e.instance.modifiers, function (e) {
            return "applyStyle" === e.name
        }).gpuAcceleration;
        void 0 !== s && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
        var o = void 0 !== s ? s : t.gpuAcceleration, l = a(e.instance.popper), d = g(l), c = {position: r.position},
            u = {
                left: Math.floor(r.left),
                top: Math.floor(r.top),
                bottom: Math.floor(r.bottom),
                right: Math.floor(r.right)
            }, h = "bottom" === i ? "top" : "bottom", p = "right" === n ? "left" : "right", f = I("transform"),
            m = void 0, v = void 0;
        if (v = "bottom" === h ? -d.height + u.bottom : u.top, m = "right" === p ? -d.width + u.right : u.left, o && f) c[f] = "translate3d(" + m + "px, " + v + "px, 0)", c[h] = 0, c[p] = 0, c.willChange = "transform"; else {
            var y = "bottom" === h ? -1 : 1, b = "right" === p ? -1 : 1;
            c[h] = v * y, c[p] = m * b, c.willChange = h + ", " + p
        }
        var _ = {"x-placement": e.placement};
        return e.attributes = ge({}, _, e.attributes), e.styles = ge({}, c, e.styles), e.arrowStyles = ge({}, e.offsets.arrow, e.arrowStyles), e
    }

    function G(e, t, i) {
        var n = k(e, function (e) {
            return e.name === t
        }), r = !!n && e.some(function (e) {
            return e.name === i && e.enabled && e.order < n.order
        });
        if (!r) {
            var s = "`" + t + "`", a = "`" + i + "`";
            console.warn(a + " modifier is required by " + s + " modifier in order to work, be sure to include it before " + s + "!")
        }
        return r
    }

    function q(e, t) {
        var i;
        if (!G(e.instance.modifiers, "arrow", "keepTogether")) return e;
        var r = t.element;
        if ("string" == typeof r) {
            if (!(r = e.instance.popper.querySelector(r))) return e
        } else if (!e.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
        var s = e.placement.split("-")[0], a = e.offsets, o = a.popper, l = a.reference,
            d = -1 !== ["left", "right"].indexOf(s), c = d ? "height" : "width", u = d ? "Top" : "Left",
            h = u.toLowerCase(), p = d ? "left" : "top", f = d ? "bottom" : "right", g = E(r)[c];
        l[f] - g < o[h] && (e.offsets.popper[h] -= o[h] - (l[f] - g)), l[h] + g > o[f] && (e.offsets.popper[h] += l[h] + g - o[f]), e.offsets.popper = m(e.offsets.popper);
        var v = l[h] + l[c] / 2 - g / 2, y = n(e.instance.popper), b = parseFloat(y["margin" + u], 10),
            _ = parseFloat(y["border" + u + "Width"], 10), w = v - e.offsets.popper[h] - b - _;
        return w = Math.max(Math.min(o[c] - g, w), 0), e.arrowElement = r, e.offsets.arrow = (i = {}, me(i, h, Math.round(w)), me(i, p, ""), i), e
    }

    function U(e) {
        return "end" === e ? "start" : "start" === e ? "end" : e
    }

    function X(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i = ye.indexOf(e),
            n = ye.slice(i + 1).concat(ye.slice(0, i));
        return t ? n.reverse() : n
    }

    function K(e, t) {
        if (A(e.instance.modifiers, "inner")) return e;
        if (e.flipped && e.placement === e.originalPlacement) return e;
        var i = _(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
            n = e.placement.split("-")[0], r = S(n), s = e.placement.split("-")[1] || "", a = [];
        switch (t.behavior) {
            case be.FLIP:
                a = [n, r];
                break;
            case be.CLOCKWISE:
                a = X(n);
                break;
            case be.COUNTERCLOCKWISE:
                a = X(n, !0);
                break;
            default:
                a = t.behavior
        }
        return a.forEach(function (o, l) {
            if (n !== o || a.length === l + 1) return e;
            n = e.placement.split("-")[0], r = S(n);
            var d = e.offsets.popper, c = e.offsets.reference, u = Math.floor,
                h = "left" === n && u(d.right) > u(c.left) || "right" === n && u(d.left) < u(c.right) || "top" === n && u(d.bottom) > u(c.top) || "bottom" === n && u(d.top) < u(c.bottom),
                p = u(d.left) < u(i.left), f = u(d.right) > u(i.right), m = u(d.top) < u(i.top),
                g = u(d.bottom) > u(i.bottom),
                v = "left" === n && p || "right" === n && f || "top" === n && m || "bottom" === n && g,
                y = -1 !== ["top", "bottom"].indexOf(n),
                b = !!t.flipVariations && (y && "start" === s && p || y && "end" === s && f || !y && "start" === s && m || !y && "end" === s && g);
            (h || v || b) && (e.flipped = !0, (h || v) && (n = a[l + 1]), b && (s = U(s)), e.placement = n + (s ? "-" + s : ""), e.offsets.popper = ge({}, e.offsets.popper, C(e.instance.popper, e.offsets.reference, e.placement)), e = O(e.instance.modifiers, e, "flip"))
        }), e
    }

    function J(e) {
        var t = e.offsets, i = t.popper, n = t.reference, r = e.placement.split("-")[0], s = Math.floor,
            a = -1 !== ["top", "bottom"].indexOf(r), o = a ? "right" : "bottom", l = a ? "left" : "top",
            d = a ? "width" : "height";
        return i[o] < s(n[l]) && (e.offsets.popper[l] = s(n[l]) - i[d]), i[l] > s(n[o]) && (e.offsets.popper[l] = s(n[o])), e
    }

    function Q(e, t, i, n) {
        var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), s = +r[1], a = r[2];
        if (!s) return e;
        if (0 === a.indexOf("%")) {
            var o = void 0;
            switch (a) {
                case"%p":
                    o = i;
                    break;
                case"%":
                case"%r":
                default:
                    o = n
            }
            return m(o)[t] / 100 * s
        }
        if ("vh" === a || "vw" === a) {
            return ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * s
        }
        return s
    }

    function Z(e, t, i, n) {
        var r = [0, 0], s = -1 !== ["right", "left"].indexOf(n), a = e.split(/(\+|\-)/).map(function (e) {
            return e.trim()
        }), o = a.indexOf(k(a, function (e) {
            return -1 !== e.search(/,|\s/)
        }));
        a[o] && -1 === a[o].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            d = -1 !== o ? [a.slice(0, o).concat([a[o].split(l)[0]]), [a[o].split(l)[1]].concat(a.slice(o + 1))] : [a];
        return d = d.map(function (e, n) {
            var r = (1 === n ? !s : s) ? "height" : "width", a = !1;
            return e.reduce(function (e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, a = !0, e) : a ? (e[e.length - 1] += t, a = !1, e) : e.concat(t)
            }, []).map(function (e) {
                return Q(e, r, t, i)
            })
        }), d.forEach(function (e, t) {
            e.forEach(function (i, n) {
                j(i) && (r[t] += i * ("-" === e[n - 1] ? -1 : 1))
            })
        }), r
    }

    function ee(e, t) {
        var i = t.offset, n = e.placement, r = e.offsets, s = r.popper, a = r.reference, o = n.split("-")[0],
            l = void 0;
        return l = j(+i) ? [+i, 0] : Z(i, s, a, o), "left" === o ? (s.top += l[0], s.left -= l[1]) : "right" === o ? (s.top += l[0], s.left += l[1]) : "top" === o ? (s.left += l[0], s.top -= l[1]) : "bottom" === o && (s.left += l[0], s.top += l[1]), e.popper = s, e
    }

    function te(e, t) {
        var i = t.boundariesElement || a(e.instance.popper);
        e.instance.reference === i && (i = a(i));
        var n = _(e.instance.popper, e.instance.reference, t.padding, i);
        t.boundaries = n;
        var r = t.priority, s = e.offsets.popper, o = {
            primary: function (e) {
                var i = s[e];
                return s[e] < n[e] && !t.escapeWithReference && (i = Math.max(s[e], n[e])), me({}, e, i)
            }, secondary: function (e) {
                var i = "right" === e ? "left" : "top", r = s[i];
                return s[e] > n[e] && !t.escapeWithReference && (r = Math.min(s[i], n[e] - ("right" === e ? s.width : s.height))), me({}, i, r)
            }
        };
        return r.forEach(function (e) {
            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
            s = ge({}, s, o[t](e))
        }), e.offsets.popper = s, e
    }

    function ie(e) {
        var t = e.placement, i = t.split("-")[0], n = t.split("-")[1];
        if (n) {
            var r = e.offsets, s = r.reference, a = r.popper, o = -1 !== ["bottom", "top"].indexOf(i),
                l = o ? "left" : "top", d = o ? "width" : "height",
                c = {start: me({}, l, s[l]), end: me({}, l, s[l] + s[d] - a[d])};
            e.offsets.popper = ge({}, a, c[n])
        }
        return e
    }

    function ne(e) {
        if (!G(e.instance.modifiers, "hide", "preventOverflow")) return e;
        var t = e.offsets.reference, i = k(e.instance.modifiers, function (e) {
            return "preventOverflow" === e.name
        }).boundaries;
        if (t.bottom < i.top || t.left > i.right || t.top > i.bottom || t.right < i.left) {
            if (!0 === e.hide) return e;
            e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
        } else {
            if (!1 === e.hide) return e;
            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
        }
        return e
    }

    function re(e) {
        var t = e.placement, i = t.split("-")[0], n = e.offsets, r = n.popper, s = n.reference,
            a = -1 !== ["left", "right"].indexOf(i), o = -1 === ["top", "left"].indexOf(i);
        return r[a ? "left" : "top"] = s[i] - (o ? r[a ? "width" : "height"] : 0), e.placement = S(t), e.offsets.popper = m(r), e
    }

    for (var se = "undefined" != typeof window && "undefined" != typeof document, ae = ["Edge", "Trident", "Firefox"], oe = 0, le = 0; le < ae.length; le += 1) if (se && navigator.userAgent.indexOf(ae[le]) >= 0) {
        oe = 1;
        break
    }
    var de = se && window.Promise, ce = de ? e : t, ue = void 0, he = function () {
            return void 0 === ue && (ue = -1 !== navigator.appVersion.indexOf("MSIE 10")), ue
        }, pe = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }, fe = function () {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            return function (t, i, n) {
                return i && e(t.prototype, i), n && e(t, n), t
            }
        }(), me = function (e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e
        }, ge = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
            }
            return e
        },
        ve = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        ye = ve.slice(3), be = {FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise"}, _e = {
            shift: {order: 100, enabled: !0, fn: ie},
            offset: {order: 200, enabled: !0, fn: ee, offset: 0},
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: te,
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {order: 400, enabled: !0, fn: J},
            arrow: {order: 500, enabled: !0, fn: q, element: "[x-arrow]"},
            flip: {order: 600, enabled: !0, fn: K, behavior: "flip", padding: 5, boundariesElement: "viewport"},
            inner: {order: 700, enabled: !1, fn: re},
            hide: {order: 800, enabled: !0, fn: ne},
            computeStyle: {order: 850, enabled: !0, fn: Y, gpuAcceleration: !0, x: "bottom", y: "right"},
            applyStyle: {order: 900, enabled: !0, fn: B, onLoad: V, gpuAcceleration: void 0}
        }, we = {
            placement: "bottom", eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () {
            }, onUpdate: function () {
            }, modifiers: _e
        }, xe = function () {
            function e(t, n) {
                var r = this, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                pe(this, e), this.scheduleUpdate = function () {
                    return requestAnimationFrame(r.update)
                }, this.update = ce(this.update.bind(this)), this.options = ge({}, e.Defaults, s), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(ge({}, e.Defaults.modifiers, s.modifiers)).forEach(function (t) {
                    r.options.modifiers[t] = ge({}, e.Defaults.modifiers[t] || {}, s.modifiers ? s.modifiers[t] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
                    return ge({name: e}, r.options.modifiers[e])
                }).sort(function (e, t) {
                    return e.order - t.order
                }), this.modifiers.forEach(function (e) {
                    e.enabled && i(e.onLoad) && e.onLoad(r.reference, r.popper, r.options, e, r.state)
                }), this.update();
                var a = this.options.eventsEnabled;
                a && this.enableEventListeners(), this.state.eventsEnabled = a
            }

            return fe(e, [{
                key: "update", value: function () {
                    return M.call(this)
                }
            }, {
                key: "destroy", value: function () {
                    return P.call(this)
                }
            }, {
                key: "enableEventListeners", value: function () {
                    return H.call(this)
                }
            }, {
                key: "disableEventListeners", value: function () {
                    return W.call(this)
                }
            }]), e
        }();
    return xe.Utils = ("undefined" != typeof window ? window : global).PopperUtils, xe.placements = ve, xe.Defaults = we, xe
}), function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t(e.bootstrap = {}, e.jQuery, e.Popper)
}(this, function (e, t, i) {
    "use strict";

    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function r(e, t, i) {
        return t && n(e.prototype, t), i && n(e, i), e
    }

    function s(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e
    }

    function a(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {}, n = Object.keys(i);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function (e) {
                return Object.getOwnPropertyDescriptor(i, e).enumerable
            }))), n.forEach(function (t) {
                s(e, t, i[t])
            })
        }
        return e
    }

    function o(e, t) {
        e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
    }

    t = t && t.hasOwnProperty("default") ? t.default : t, i = i && i.hasOwnProperty("default") ? i.default : i;
    var l = function (e) {
        function t(e) {
            return {}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase()
        }

        function i() {
            return {
                bindType: r, delegateType: r, handle: function (t) {
                    if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
                }
            }
        }

        function n(t) {
            var i = this, n = !1;
            return e(this).one(s.TRANSITION_END, function () {
                n = !0
            }), setTimeout(function () {
                n || s.triggerTransitionEnd(i)
            }, t), this
        }

        var r = "transitionend", s = {
            TRANSITION_END: "bsTransitionEnd", getUID: function (e) {
                do {
                    e += ~~(1e6 * Math.random())
                } while (document.getElementById(e));
                return e
            }, getSelectorFromElement: function (t) {
                var i = t.getAttribute("data-target");
                i && "#" !== i || (i = t.getAttribute("href") || "");
                try {
                    return e(document).find(i).length > 0 ? i : null
                } catch (e) {
                    return null
                }
            }, getTransitionDurationFromElement: function (t) {
                if (!t) return 0;
                var i = e(t).css("transition-duration");
                return parseFloat(i) ? (i = i.split(",")[0], 1e3 * parseFloat(i)) : 0
            }, reflow: function (e) {
                return e.offsetHeight
            }, triggerTransitionEnd: function (t) {
                e(t).trigger(r)
            }, supportsTransitionEnd: function () {
                return Boolean(r)
            }, isElement: function (e) {
                return (e[0] || e).nodeType
            }, typeCheckConfig: function (e, i, n) {
                for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
                    var a = n[r], o = i[r], l = o && s.isElement(o) ? "element" : t(o);
                    if (!new RegExp(a).test(l)) throw new Error(e.toUpperCase() + ': Option "' + r + '" provided type "' + l + '" but expected type "' + a + '".')
                }
            }
        };
        return function () {
            e.fn.emulateTransitionEnd = n, e.event.special[s.TRANSITION_END] = i()
        }(), s
    }(t), d = function (e) {
        var t = "alert", i = e.fn[t], n = {DISMISS: '[data-dismiss="alert"]'},
            s = {CLOSE: "close.bs.alert", CLOSED: "closed.bs.alert", CLICK_DATA_API: "click.bs.alert.data-api"},
            a = {ALERT: "alert", FADE: "fade", SHOW: "show"}, o = function () {
                function t(e) {
                    this._element = e
                }

                var i = t.prototype;
                return i.close = function (e) {
                    var t = this._element;
                    e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
                }, i.dispose = function () {
                    e.removeData(this._element, "bs.alert"), this._element = null
                }, i._getRootElement = function (t) {
                    var i = l.getSelectorFromElement(t), n = !1;
                    return i && (n = e(i)[0]), n || (n = e(t).closest("." + a.ALERT)[0]), n
                }, i._triggerCloseEvent = function (t) {
                    var i = e.Event(s.CLOSE);
                    return e(t).trigger(i), i
                }, i._removeElement = function (t) {
                    var i = this;
                    if (e(t).removeClass(a.SHOW), !e(t).hasClass(a.FADE)) return void this._destroyElement(t);
                    var n = l.getTransitionDurationFromElement(t);
                    e(t).one(l.TRANSITION_END, function (e) {
                        return i._destroyElement(t, e)
                    }).emulateTransitionEnd(n)
                }, i._destroyElement = function (t) {
                    e(t).detach().trigger(s.CLOSED).remove()
                }, t._jQueryInterface = function (i) {
                    return this.each(function () {
                        var n = e(this), r = n.data("bs.alert");
                        r || (r = new t(this), n.data("bs.alert", r)), "close" === i && r[i](this)
                    })
                }, t._handleDismiss = function (e) {
                    return function (t) {
                        t && t.preventDefault(), e.close(this)
                    }
                }, r(t, null, [{
                    key: "VERSION", get: function () {
                        return "4.1.1"
                    }
                }]), t
            }();
        return e(document).on(s.CLICK_DATA_API, n.DISMISS, o._handleDismiss(new o)), e.fn[t] = o._jQueryInterface, e.fn[t].Constructor = o, e.fn[t].noConflict = function () {
            return e.fn[t] = i, o._jQueryInterface
        }, o
    }(t), c = function (e) {
        var t = "button", i = e.fn[t], n = {ACTIVE: "active", BUTTON: "btn", FOCUS: "focus"}, s = {
            DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
            DATA_TOGGLE: '[data-toggle="buttons"]',
            INPUT: "input",
            ACTIVE: ".active",
            BUTTON: ".btn"
        }, a = {
            CLICK_DATA_API: "click.bs.button.data-api",
            FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api"
        }, o = function () {
            function t(e) {
                this._element = e
            }

            var i = t.prototype;
            return i.toggle = function () {
                var t = !0, i = !0, r = e(this._element).closest(s.DATA_TOGGLE)[0];
                if (r) {
                    var a = e(this._element).find(s.INPUT)[0];
                    if (a) {
                        if ("radio" === a.type) if (a.checked && e(this._element).hasClass(n.ACTIVE)) t = !1; else {
                            var o = e(r).find(s.ACTIVE)[0];
                            o && e(o).removeClass(n.ACTIVE)
                        }
                        if (t) {
                            if (a.hasAttribute("disabled") || r.hasAttribute("disabled") || a.classList.contains("disabled") || r.classList.contains("disabled")) return;
                            a.checked = !e(this._element).hasClass(n.ACTIVE), e(a).trigger("change")
                        }
                        a.focus(), i = !1
                    }
                }
                i && this._element.setAttribute("aria-pressed", !e(this._element).hasClass(n.ACTIVE)), t && e(this._element).toggleClass(n.ACTIVE)
            }, i.dispose = function () {
                e.removeData(this._element, "bs.button"), this._element = null
            }, t._jQueryInterface = function (i) {
                return this.each(function () {
                    var n = e(this).data("bs.button");
                    n || (n = new t(this), e(this).data("bs.button", n)), "toggle" === i && n[i]()
                })
            }, r(t, null, [{
                key: "VERSION", get: function () {
                    return "4.1.1"
                }
            }]), t
        }();
        return e(document).on(a.CLICK_DATA_API, s.DATA_TOGGLE_CARROT, function (t) {
            t.preventDefault();
            var i = t.target;
            e(i).hasClass(n.BUTTON) || (i = e(i).closest(s.BUTTON)), o._jQueryInterface.call(e(i), "toggle")
        }).on(a.FOCUS_BLUR_DATA_API, s.DATA_TOGGLE_CARROT, function (t) {
            var i = e(t.target).closest(s.BUTTON)[0];
            e(i).toggleClass(n.FOCUS, /^focus(in)?$/.test(t.type))
        }), e.fn[t] = o._jQueryInterface, e.fn[t].Constructor = o, e.fn[t].noConflict = function () {
            return e.fn[t] = i, o._jQueryInterface
        }, o
    }(t), u = function (e) {
        var t = "carousel", i = "bs.carousel", n = "." + i, s = e.fn[t],
            o = {interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0}, d = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                slide: "(boolean|string)",
                pause: "(string|boolean)",
                wrap: "boolean"
            }, c = {NEXT: "next", PREV: "prev", LEFT: "left", RIGHT: "right"}, u = {
                SLIDE: "slide" + n,
                SLID: "slid" + n,
                KEYDOWN: "keydown" + n,
                MOUSEENTER: "mouseenter" + n,
                MOUSELEAVE: "mouseleave" + n,
                TOUCHEND: "touchend" + n,
                LOAD_DATA_API: "load.bs.carousel.data-api",
                CLICK_DATA_API: "click.bs.carousel.data-api"
            }, h = {
                CAROUSEL: "carousel",
                ACTIVE: "active",
                SLIDE: "slide",
                RIGHT: "carousel-item-right",
                LEFT: "carousel-item-left",
                NEXT: "carousel-item-next",
                PREV: "carousel-item-prev",
                ITEM: "carousel-item"
            }, p = {
                ACTIVE: ".active",
                ACTIVE_ITEM: ".active.carousel-item",
                ITEM: ".carousel-item",
                NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                INDICATORS: ".carousel-indicators",
                DATA_SLIDE: "[data-slide], [data-slide-to]",
                DATA_RIDE: '[data-ride="carousel"]'
            }, f = function () {
                function s(t, i) {
                    this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(i), this._element = e(t)[0], this._indicatorsElement = e(this._element).find(p.INDICATORS)[0], this._addEventListeners()
                }

                var f = s.prototype;
                return f.next = function () {
                    this._isSliding || this._slide(c.NEXT)
                }, f.nextWhenVisible = function () {
                    !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next()
                }, f.prev = function () {
                    this._isSliding || this._slide(c.PREV)
                }, f.pause = function (t) {
                    t || (this._isPaused = !0), e(this._element).find(p.NEXT_PREV)[0] && (l.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                }, f.cycle = function (e) {
                    e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                }, f.to = function (t) {
                    var i = this;
                    this._activeElement = e(this._element).find(p.ACTIVE_ITEM)[0];
                    var n = this._getItemIndex(this._activeElement);
                    if (!(t > this._items.length - 1 || t < 0)) {
                        if (this._isSliding) return void e(this._element).one(u.SLID, function () {
                            return i.to(t)
                        });
                        if (n === t) return this.pause(), void this.cycle();
                        var r = t > n ? c.NEXT : c.PREV;
                        this._slide(r, this._items[t])
                    }
                }, f.dispose = function () {
                    e(this._element).off(n), e.removeData(this._element, i), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                }, f._getConfig = function (e) {
                    return e = a({}, o, e), l.typeCheckConfig(t, e, d), e
                }, f._addEventListeners = function () {
                    var t = this;
                    this._config.keyboard && e(this._element).on(u.KEYDOWN, function (e) {
                        return t._keydown(e)
                    }), "hover" === this._config.pause && (e(this._element).on(u.MOUSEENTER, function (e) {
                        return t.pause(e)
                    }).on(u.MOUSELEAVE, function (e) {
                        return t.cycle(e)
                    }), "ontouchstart" in document.documentElement && e(this._element).on(u.TOUCHEND, function () {
                        t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
                            return t.cycle(e)
                        }, 500 + t._config.interval)
                    }))
                }, f._keydown = function (e) {
                    if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                        case 37:
                            e.preventDefault(), this.prev();
                            break;
                        case 39:
                            e.preventDefault(), this.next()
                    }
                }, f._getItemIndex = function (t) {
                    return this._items = e.makeArray(e(t).parent().find(p.ITEM)), this._items.indexOf(t)
                }, f._getItemByDirection = function (e, t) {
                    var i = e === c.NEXT, n = e === c.PREV, r = this._getItemIndex(t), s = this._items.length - 1;
                    if ((n && 0 === r || i && r === s) && !this._config.wrap) return t;
                    var a = e === c.PREV ? -1 : 1, o = (r + a) % this._items.length;
                    return -1 === o ? this._items[this._items.length - 1] : this._items[o]
                }, f._triggerSlideEvent = function (t, i) {
                    var n = this._getItemIndex(t), r = this._getItemIndex(e(this._element).find(p.ACTIVE_ITEM)[0]),
                        s = e.Event(u.SLIDE, {relatedTarget: t, direction: i, from: r, to: n});
                    return e(this._element).trigger(s), s
                }, f._setActiveIndicatorElement = function (t) {
                    if (this._indicatorsElement) {
                        e(this._indicatorsElement).find(p.ACTIVE).removeClass(h.ACTIVE);
                        var i = this._indicatorsElement.children[this._getItemIndex(t)];
                        i && e(i).addClass(h.ACTIVE)
                    }
                }, f._slide = function (t, i) {
                    var n, r, s, a = this, o = e(this._element).find(p.ACTIVE_ITEM)[0], d = this._getItemIndex(o),
                        f = i || o && this._getItemByDirection(t, o), m = this._getItemIndex(f),
                        g = Boolean(this._interval);
                    if (t === c.NEXT ? (n = h.LEFT, r = h.NEXT, s = c.LEFT) : (n = h.RIGHT, r = h.PREV, s = c.RIGHT), f && e(f).hasClass(h.ACTIVE)) return void(this._isSliding = !1);
                    if (!this._triggerSlideEvent(f, s).isDefaultPrevented() && o && f) {
                        this._isSliding = !0, g && this.pause(), this._setActiveIndicatorElement(f);
                        var v = e.Event(u.SLID, {relatedTarget: f, direction: s, from: d, to: m});
                        if (e(this._element).hasClass(h.SLIDE)) {
                            e(f).addClass(r), l.reflow(f), e(o).addClass(n), e(f).addClass(n);
                            var y = l.getTransitionDurationFromElement(o);
                            e(o).one(l.TRANSITION_END, function () {
                                e(f).removeClass(n + " " + r).addClass(h.ACTIVE), e(o).removeClass(h.ACTIVE + " " + r + " " + n), a._isSliding = !1, setTimeout(function () {
                                    return e(a._element).trigger(v)
                                }, 0)
                            }).emulateTransitionEnd(y)
                        } else e(o).removeClass(h.ACTIVE), e(f).addClass(h.ACTIVE), this._isSliding = !1, e(this._element).trigger(v);
                        g && this.cycle()
                    }
                }, s._jQueryInterface = function (t) {
                    return this.each(function () {
                        var n = e(this).data(i), r = a({}, o, e(this).data());
                        "object" == typeof t && (r = a({}, r, t));
                        var l = "string" == typeof t ? t : r.slide;
                        if (n || (n = new s(this, r), e(this).data(i, n)), "number" == typeof t) n.to(t); else if ("string" == typeof l) {
                            if (void 0 === n[l]) throw new TypeError('No method named "' + l + '"');
                            n[l]()
                        } else r.interval && (n.pause(), n.cycle())
                    })
                }, s._dataApiClickHandler = function (t) {
                    var n = l.getSelectorFromElement(this);
                    if (n) {
                        var r = e(n)[0];
                        if (r && e(r).hasClass(h.CAROUSEL)) {
                            var o = a({}, e(r).data(), e(this).data()), d = this.getAttribute("data-slide-to");
                            d && (o.interval = !1), s._jQueryInterface.call(e(r), o), d && e(r).data(i).to(d), t.preventDefault()
                        }
                    }
                }, r(s, null, [{
                    key: "VERSION", get: function () {
                        return "4.1.1"
                    }
                }, {
                    key: "Default", get: function () {
                        return o
                    }
                }]), s
            }();
        return e(document).on(u.CLICK_DATA_API, p.DATA_SLIDE, f._dataApiClickHandler), e(window).on(u.LOAD_DATA_API, function () {
            e(p.DATA_RIDE).each(function () {
                var t = e(this);
                f._jQueryInterface.call(t, t.data())
            })
        }), e.fn[t] = f._jQueryInterface, e.fn[t].Constructor = f, e.fn[t].noConflict = function () {
            return e.fn[t] = s, f._jQueryInterface
        }, f
    }(t), h = function (e) {
        var t = "collapse", i = "bs.collapse", n = e.fn[t], s = {toggle: !0, parent: ""},
            o = {toggle: "boolean", parent: "(string|element)"}, d = {
                SHOW: "show.bs.collapse",
                SHOWN: "shown.bs.collapse",
                HIDE: "hide.bs.collapse",
                HIDDEN: "hidden.bs.collapse",
                CLICK_DATA_API: "click.bs.collapse.data-api"
            }, c = {SHOW: "show", COLLAPSE: "collapse", COLLAPSING: "collapsing", COLLAPSED: "collapsed"},
            u = {WIDTH: "width", HEIGHT: "height"},
            h = {ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]'}, p = function () {
                function n(t, i) {
                    this._isTransitioning = !1, this._element = t, this._config = this._getConfig(i), this._triggerArray = e.makeArray(e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                    for (var n = e(h.DATA_TOGGLE), r = 0; r < n.length; r++) {
                        var s = n[r], a = l.getSelectorFromElement(s);
                        null !== a && e(a).filter(t).length > 0 && (this._selector = a, this._triggerArray.push(s))
                    }
                    this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                }

                var p = n.prototype;
                return p.toggle = function () {
                    e(this._element).hasClass(c.SHOW) ? this.hide() : this.show()
                }, p.show = function () {
                    var t = this;
                    if (!this._isTransitioning && !e(this._element).hasClass(c.SHOW)) {
                        var r, s;
                        if (this._parent && (r = e.makeArray(e(this._parent).find(h.ACTIVES).filter('[data-parent="' + this._config.parent + '"]')), 0 === r.length && (r = null)), !(r && (s = e(r).not(this._selector).data(i)) && s._isTransitioning)) {
                            var a = e.Event(d.SHOW);
                            if (e(this._element).trigger(a), !a.isDefaultPrevented()) {
                                r && (n._jQueryInterface.call(e(r).not(this._selector), "hide"), s || e(r).data(i, null));
                                var o = this._getDimension();
                                e(this._element).removeClass(c.COLLAPSE).addClass(c.COLLAPSING), this._element.style[o] = 0, this._triggerArray.length > 0 && e(this._triggerArray).removeClass(c.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                                var u = function () {
                                        e(t._element).removeClass(c.COLLAPSING).addClass(c.COLLAPSE).addClass(c.SHOW), t._element.style[o] = "", t.setTransitioning(!1), e(t._element).trigger(d.SHOWN)
                                    }, p = o[0].toUpperCase() + o.slice(1), f = "scroll" + p,
                                    m = l.getTransitionDurationFromElement(this._element);
                                e(this._element).one(l.TRANSITION_END, u).emulateTransitionEnd(m), this._element.style[o] = this._element[f] + "px"
                            }
                        }
                    }
                }, p.hide = function () {
                    var t = this;
                    if (!this._isTransitioning && e(this._element).hasClass(c.SHOW)) {
                        var i = e.Event(d.HIDE);
                        if (e(this._element).trigger(i), !i.isDefaultPrevented()) {
                            var n = this._getDimension();
                            if (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", l.reflow(this._element), e(this._element).addClass(c.COLLAPSING).removeClass(c.COLLAPSE).removeClass(c.SHOW), this._triggerArray.length > 0) for (var r = 0; r < this._triggerArray.length; r++) {
                                var s = this._triggerArray[r], a = l.getSelectorFromElement(s);
                                if (null !== a) {
                                    var o = e(a);
                                    o.hasClass(c.SHOW) || e(s).addClass(c.COLLAPSED).attr("aria-expanded", !1)
                                }
                            }
                            this.setTransitioning(!0);
                            var u = function () {
                                t.setTransitioning(!1), e(t._element).removeClass(c.COLLAPSING).addClass(c.COLLAPSE).trigger(d.HIDDEN)
                            };
                            this._element.style[n] = "";
                            var h = l.getTransitionDurationFromElement(this._element);
                            e(this._element).one(l.TRANSITION_END, u).emulateTransitionEnd(h)
                        }
                    }
                }, p.setTransitioning = function (e) {
                    this._isTransitioning = e
                }, p.dispose = function () {
                    e.removeData(this._element, i), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                }, p._getConfig = function (e) {
                    return e = a({}, s, e), e.toggle = Boolean(e.toggle), l.typeCheckConfig(t, e, o), e
                }, p._getDimension = function () {
                    return e(this._element).hasClass(u.WIDTH) ? u.WIDTH : u.HEIGHT
                }, p._getParent = function () {
                    var t = this, i = null;
                    l.isElement(this._config.parent) ? (i = this._config.parent, void 0 !== this._config.parent.jquery && (i = this._config.parent[0])) : i = e(this._config.parent)[0];
                    var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                    return e(i).find(r).each(function (e, i) {
                        t._addAriaAndCollapsedClass(n._getTargetFromElement(i), [i])
                    }), i
                }, p._addAriaAndCollapsedClass = function (t, i) {
                    if (t) {
                        var n = e(t).hasClass(c.SHOW);
                        i.length > 0 && e(i).toggleClass(c.COLLAPSED, !n).attr("aria-expanded", n)
                    }
                }, n._getTargetFromElement = function (t) {
                    var i = l.getSelectorFromElement(t);
                    return i ? e(i)[0] : null
                }, n._jQueryInterface = function (t) {
                    return this.each(function () {
                        var r = e(this), o = r.data(i), l = a({}, s, r.data(), "object" == typeof t && t ? t : {});
                        if (!o && l.toggle && /show|hide/.test(t) && (l.toggle = !1), o || (o = new n(this, l), r.data(i, o)), "string" == typeof t) {
                            if (void 0 === o[t]) throw new TypeError('No method named "' + t + '"');
                            o[t]()
                        }
                    })
                }, r(n, null, [{
                    key: "VERSION", get: function () {
                        return "4.1.1"
                    }
                }, {
                    key: "Default", get: function () {
                        return s
                    }
                }]), n
            }();
        return e(document).on(d.CLICK_DATA_API, h.DATA_TOGGLE, function (t) {
            "A" === t.currentTarget.tagName && t.preventDefault();
            var n = e(this), r = l.getSelectorFromElement(this);
            e(r).each(function () {
                var t = e(this), r = t.data(i), s = r ? "toggle" : n.data();
                p._jQueryInterface.call(t, s)
            })
        }), e.fn[t] = p._jQueryInterface, e.fn[t].Constructor = p, e.fn[t].noConflict = function () {
            return e.fn[t] = n, p._jQueryInterface
        }, p
    }(t), p = function (e) {
        var t = "dropdown", n = "bs.dropdown", s = "." + n, o = e.fn[t], d = new RegExp("38|40|27"), c = {
            HIDE: "hide" + s,
            HIDDEN: "hidden" + s,
            SHOW: "show" + s,
            SHOWN: "shown" + s,
            CLICK: "click" + s,
            CLICK_DATA_API: "click.bs.dropdown.data-api",
            KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
            KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
        }, u = {
            DISABLED: "disabled",
            SHOW: "show",
            DROPUP: "dropup",
            DROPRIGHT: "dropright",
            DROPLEFT: "dropleft",
            MENURIGHT: "dropdown-menu-right",
            MENULEFT: "dropdown-menu-left",
            POSITION_STATIC: "position-static"
        }, h = {
            DATA_TOGGLE: '[data-toggle="dropdown"]',
            FORM_CHILD: ".dropdown form",
            MENU: ".dropdown-menu",
            NAVBAR_NAV: ".navbar-nav",
            VISIBLE_ITEMS: ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
        }, p = {
            TOP: "top-start",
            TOPEND: "top-end",
            BOTTOM: "bottom-start",
            BOTTOMEND: "bottom-end",
            RIGHT: "right-start",
            RIGHTEND: "right-end",
            LEFT: "left-start",
            LEFTEND: "left-end"
        }, f = {offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic"}, m = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        }, g = function () {
            function o(e, t) {
                this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }

            var g = o.prototype;
            return g.toggle = function () {
                if (!this._element.disabled && !e(this._element).hasClass(u.DISABLED)) {
                    var t = o._getParentFromElement(this._element), n = e(this._menu).hasClass(u.SHOW);
                    if (o._clearMenus(), !n) {
                        var r = {relatedTarget: this._element}, s = e.Event(c.SHOW, r);
                        if (e(t).trigger(s), !s.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if (void 0 === i) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                var a = this._element;
                                "parent" === this._config.reference ? a = t : l.isElement(this._config.reference) && (a = this._config.reference, void 0 !== this._config.reference.jquery && (a = this._config.reference[0])), "scrollParent" !== this._config.boundary && e(t).addClass(u.POSITION_STATIC), this._popper = new i(a, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === e(t).closest(h.NAVBAR_NAV).length && e(document.body).children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass(u.SHOW), e(t).toggleClass(u.SHOW).trigger(e.Event(c.SHOWN, r))
                        }
                    }
                }
            }, g.dispose = function () {
                e.removeData(this._element, n), e(this._element).off(s), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
            }, g.update = function () {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, g._addEventListeners = function () {
                var t = this;
                e(this._element).on(c.CLICK, function (e) {
                    e.preventDefault(), e.stopPropagation(), t.toggle()
                })
            }, g._getConfig = function (i) {
                return i = a({}, this.constructor.Default, e(this._element).data(), i), l.typeCheckConfig(t, i, this.constructor.DefaultType), i
            }, g._getMenuElement = function () {
                if (!this._menu) {
                    var t = o._getParentFromElement(this._element);
                    this._menu = e(t).find(h.MENU)[0]
                }
                return this._menu
            }, g._getPlacement = function () {
                var t = e(this._element).parent(), i = p.BOTTOM;
                return t.hasClass(u.DROPUP) ? (i = p.TOP, e(this._menu).hasClass(u.MENURIGHT) && (i = p.TOPEND)) : t.hasClass(u.DROPRIGHT) ? i = p.RIGHT : t.hasClass(u.DROPLEFT) ? i = p.LEFT : e(this._menu).hasClass(u.MENURIGHT) && (i = p.BOTTOMEND), i
            },
                g._detectNavbar = function () {
                    return e(this._element).closest(".navbar").length > 0
                }, g._getPopperConfig = function () {
                var e = this, t = {};
                "function" == typeof this._config.offset ? t.fn = function (t) {
                    return t.offsets = a({}, t.offsets, e._config.offset(t.offsets) || {}), t
                } : t.offset = this._config.offset;
                var i = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: t,
                        flip: {enabled: this._config.flip},
                        preventOverflow: {boundariesElement: this._config.boundary}
                    }
                };
                return "static" === this._config.display && (i.modifiers.applyStyle = {enabled: !1}), i
            }, o._jQueryInterface = function (t) {
                return this.each(function () {
                    var i = e(this).data(n), r = "object" == typeof t ? t : null;
                    if (i || (i = new o(this, r), e(this).data(n, i)), "string" == typeof t) {
                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                        i[t]()
                    }
                })
            }, o._clearMenus = function (t) {
                if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var i = e.makeArray(e(h.DATA_TOGGLE)), r = 0; r < i.length; r++) {
                    var s = o._getParentFromElement(i[r]), a = e(i[r]).data(n), l = {relatedTarget: i[r]};
                    if (a) {
                        var d = a._menu;
                        if (e(s).hasClass(u.SHOW) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && e.contains(s, t.target))) {
                            var p = e.Event(c.HIDE, l);
                            e(s).trigger(p), p.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), i[r].setAttribute("aria-expanded", "false"), e(d).removeClass(u.SHOW), e(s).removeClass(u.SHOW).trigger(e.Event(c.HIDDEN, l)))
                        }
                    }
                }
            }, o._getParentFromElement = function (t) {
                var i, n = l.getSelectorFromElement(t);
                return n && (i = e(n)[0]), i || t.parentNode
            }, o._dataApiKeydownHandler = function (t) {
                if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || e(t.target).closest(h.MENU).length)) : d.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !e(this).hasClass(u.DISABLED))) {
                    var i = o._getParentFromElement(this), n = e(i).hasClass(u.SHOW);
                    if (!n && (27 !== t.which || 32 !== t.which) || n && (27 === t.which || 32 === t.which)) {
                        if (27 === t.which) {
                            var r = e(i).find(h.DATA_TOGGLE)[0];
                            e(r).trigger("focus")
                        }
                        return void e(this).trigger("click")
                    }
                    var s = e(i).find(h.VISIBLE_ITEMS).get();
                    if (0 !== s.length) {
                        var a = s.indexOf(t.target);
                        38 === t.which && a > 0 && a--, 40 === t.which && a < s.length - 1 && a++, a < 0 && (a = 0), s[a].focus()
                    }
                }
            }, r(o, null, [{
                key: "VERSION", get: function () {
                    return "4.1.1"
                }
            }, {
                key: "Default", get: function () {
                    return f
                }
            }, {
                key: "DefaultType", get: function () {
                    return m
                }
            }]), o
        }();
        return e(document).on(c.KEYDOWN_DATA_API, h.DATA_TOGGLE, g._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, h.MENU, g._dataApiKeydownHandler).on(c.CLICK_DATA_API + " " + c.KEYUP_DATA_API, g._clearMenus).on(c.CLICK_DATA_API, h.DATA_TOGGLE, function (t) {
            t.preventDefault(), t.stopPropagation(), g._jQueryInterface.call(e(this), "toggle")
        }).on(c.CLICK_DATA_API, h.FORM_CHILD, function (e) {
            e.stopPropagation()
        }), e.fn[t] = g._jQueryInterface, e.fn[t].Constructor = g, e.fn[t].noConflict = function () {
            return e.fn[t] = o, g._jQueryInterface
        }, g
    }(t), f = function (e) {
        var t = "modal", i = ".bs.modal", n = e.fn[t], s = {backdrop: !0, keyboard: !0, focus: !0, show: !0},
            o = {backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean"}, d = {
                HIDE: "hide.bs.modal",
                HIDDEN: "hidden.bs.modal",
                SHOW: "show.bs.modal",
                SHOWN: "shown.bs.modal",
                FOCUSIN: "focusin.bs.modal",
                RESIZE: "resize.bs.modal",
                CLICK_DISMISS: "click.dismiss.bs.modal",
                KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
                MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
                MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
                CLICK_DATA_API: "click.bs.modal.data-api"
            }, c = {
                SCROLLBAR_MEASURER: "modal-scrollbar-measure",
                BACKDROP: "modal-backdrop",
                OPEN: "modal-open",
                FADE: "fade",
                SHOW: "show"
            }, u = {
                DIALOG: ".modal-dialog",
                DATA_TOGGLE: '[data-toggle="modal"]',
                DATA_DISMISS: '[data-dismiss="modal"]',
                FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                STICKY_CONTENT: ".sticky-top",
                NAVBAR_TOGGLER: ".navbar-toggler"
            }, h = function () {
                function n(t, i) {
                    this._config = this._getConfig(i), this._element = t, this._dialog = e(t).find(u.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0
                }

                var h = n.prototype;
                return h.toggle = function (e) {
                    return this._isShown ? this.hide() : this.show(e)
                }, h.show = function (t) {
                    var i = this;
                    if (!this._isTransitioning && !this._isShown) {
                        e(this._element).hasClass(c.FADE) && (this._isTransitioning = !0);
                        var n = e.Event(d.SHOW, {relatedTarget: t});
                        e(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), e(document.body).addClass(c.OPEN), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(d.CLICK_DISMISS, u.DATA_DISMISS, function (e) {
                            return i.hide(e)
                        }), e(this._dialog).on(d.MOUSEDOWN_DISMISS, function () {
                            e(i._element).one(d.MOUSEUP_DISMISS, function (t) {
                                e(t.target).is(i._element) && (i._ignoreBackdropClick = !0)
                            })
                        }), this._showBackdrop(function () {
                            return i._showElement(t)
                        }))
                    }
                }, h.hide = function (t) {
                    var i = this;
                    if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
                        var n = e.Event(d.HIDE);
                        if (e(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                            this._isShown = !1;
                            var r = e(this._element).hasClass(c.FADE);
                            if (r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off(d.FOCUSIN), e(this._element).removeClass(c.SHOW), e(this._element).off(d.CLICK_DISMISS), e(this._dialog).off(d.MOUSEDOWN_DISMISS), r) {
                                var s = l.getTransitionDurationFromElement(this._element);
                                e(this._element).one(l.TRANSITION_END, function (e) {
                                    return i._hideModal(e)
                                }).emulateTransitionEnd(s)
                            } else this._hideModal()
                        }
                    }
                }, h.dispose = function () {
                    e.removeData(this._element, "bs.modal"), e(window, document, this._element, this._backdrop).off(i), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
                }, h.handleUpdate = function () {
                    this._adjustDialog()
                }, h._getConfig = function (e) {
                    return e = a({}, s, e), l.typeCheckConfig(t, e, o), e
                }, h._showElement = function (t) {
                    var i = this, n = e(this._element).hasClass(c.FADE);
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && l.reflow(this._element), e(this._element).addClass(c.SHOW), this._config.focus && this._enforceFocus();
                    var r = e.Event(d.SHOWN, {relatedTarget: t}), s = function () {
                        i._config.focus && i._element.focus(), i._isTransitioning = !1, e(i._element).trigger(r)
                    };
                    if (n) {
                        var a = l.getTransitionDurationFromElement(this._element);
                        e(this._dialog).one(l.TRANSITION_END, s).emulateTransitionEnd(a)
                    } else s()
                }, h._enforceFocus = function () {
                    var t = this;
                    e(document).off(d.FOCUSIN).on(d.FOCUSIN, function (i) {
                        document !== i.target && t._element !== i.target && 0 === e(t._element).has(i.target).length && t._element.focus()
                    })
                }, h._setEscapeEvent = function () {
                    var t = this;
                    this._isShown && this._config.keyboard ? e(this._element).on(d.KEYDOWN_DISMISS, function (e) {
                        27 === e.which && (e.preventDefault(), t.hide())
                    }) : this._isShown || e(this._element).off(d.KEYDOWN_DISMISS)
                }, h._setResizeEvent = function () {
                    var t = this;
                    this._isShown ? e(window).on(d.RESIZE, function (e) {
                        return t.handleUpdate(e)
                    }) : e(window).off(d.RESIZE)
                }, h._hideModal = function () {
                    var t = this;
                    this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
                        e(document.body).removeClass(c.OPEN), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(d.HIDDEN)
                    })
                }, h._removeBackdrop = function () {
                    this._backdrop && (e(this._backdrop).remove(), this._backdrop = null)
                }, h._showBackdrop = function (t) {
                    var i = this, n = e(this._element).hasClass(c.FADE) ? c.FADE : "";
                    if (this._isShown && this._config.backdrop) {
                        if (this._backdrop = document.createElement("div"), this._backdrop.className = c.BACKDROP, n && e(this._backdrop).addClass(n), e(this._backdrop).appendTo(document.body), e(this._element).on(d.CLICK_DISMISS, function (e) {
                            if (i._ignoreBackdropClick) return void(i._ignoreBackdropClick = !1);
                            e.target === e.currentTarget && ("static" === i._config.backdrop ? i._element.focus() : i.hide())
                        }), n && l.reflow(this._backdrop), e(this._backdrop).addClass(c.SHOW), !t) return;
                        if (!n) return void t();
                        var r = l.getTransitionDurationFromElement(this._backdrop);
                        e(this._backdrop).one(l.TRANSITION_END, t).emulateTransitionEnd(r)
                    } else if (!this._isShown && this._backdrop) {
                        e(this._backdrop).removeClass(c.SHOW);
                        var s = function () {
                            i._removeBackdrop(), t && t()
                        };
                        if (e(this._element).hasClass(c.FADE)) {
                            var a = l.getTransitionDurationFromElement(this._backdrop);
                            e(this._backdrop).one(l.TRANSITION_END, s).emulateTransitionEnd(a)
                        } else s()
                    } else t && t()
                }, h._adjustDialog = function () {
                    var e = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                }, h._resetAdjustments = function () {
                    this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                }, h._checkScrollbar = function () {
                    var e = document.body.getBoundingClientRect();
                    this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                }, h._setScrollbar = function () {
                    var t = this;
                    if (this._isBodyOverflowing) {
                        e(u.FIXED_CONTENT).each(function (i, n) {
                            var r = e(n)[0].style.paddingRight, s = e(n).css("padding-right");
                            e(n).data("padding-right", r).css("padding-right", parseFloat(s) + t._scrollbarWidth + "px")
                        }), e(u.STICKY_CONTENT).each(function (i, n) {
                            var r = e(n)[0].style.marginRight, s = e(n).css("margin-right");
                            e(n).data("margin-right", r).css("margin-right", parseFloat(s) - t._scrollbarWidth + "px")
                        }), e(u.NAVBAR_TOGGLER).each(function (i, n) {
                            var r = e(n)[0].style.marginRight, s = e(n).css("margin-right");
                            e(n).data("margin-right", r).css("margin-right", parseFloat(s) + t._scrollbarWidth + "px")
                        });
                        var i = document.body.style.paddingRight, n = e(document.body).css("padding-right");
                        e(document.body).data("padding-right", i).css("padding-right", parseFloat(n) + this._scrollbarWidth + "px")
                    }
                }, h._resetScrollbar = function () {
                    e(u.FIXED_CONTENT).each(function (t, i) {
                        var n = e(i).data("padding-right");
                        void 0 !== n && e(i).css("padding-right", n).removeData("padding-right")
                    }), e(u.STICKY_CONTENT + ", " + u.NAVBAR_TOGGLER).each(function (t, i) {
                        var n = e(i).data("margin-right");
                        void 0 !== n && e(i).css("margin-right", n).removeData("margin-right")
                    });
                    var t = e(document.body).data("padding-right");
                    void 0 !== t && e(document.body).css("padding-right", t).removeData("padding-right")
                }, h._getScrollbarWidth = function () {
                    var e = document.createElement("div");
                    e.className = c.SCROLLBAR_MEASURER, document.body.appendChild(e);
                    var t = e.getBoundingClientRect().width - e.clientWidth;
                    return document.body.removeChild(e), t
                }, n._jQueryInterface = function (t, i) {
                    return this.each(function () {
                        var r = e(this).data("bs.modal"), o = a({}, s, e(this).data(), "object" == typeof t && t ? t : {});
                        if (r || (r = new n(this, o), e(this).data("bs.modal", r)), "string" == typeof t) {
                            if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
                            r[t](i)
                        } else o.show && r.show(i)
                    })
                }, r(n, null, [{
                    key: "VERSION", get: function () {
                        return "4.1.1"
                    }
                }, {
                    key: "Default", get: function () {
                        return s
                    }
                }]), n
            }();
        return e(document).on(d.CLICK_DATA_API, u.DATA_TOGGLE, function (t) {
            var i, n = this, r = l.getSelectorFromElement(this);
            r && (i = e(r)[0]);
            var s = e(i).data("bs.modal") ? "toggle" : a({}, e(i).data(), e(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
            var o = e(i).one(d.SHOW, function (t) {
                t.isDefaultPrevented() || o.one(d.HIDDEN, function () {
                    e(n).is(":visible") && n.focus()
                })
            });
            h._jQueryInterface.call(e(i), s, this)
        }), e.fn[t] = h._jQueryInterface, e.fn[t].Constructor = h, e.fn[t].noConflict = function () {
            return e.fn[t] = n, h._jQueryInterface
        }, h
    }(t), m = function (e) {
        var t = "tooltip", n = ".bs.tooltip", s = e.fn[t], o = new RegExp("(^|\\s)bs-tooltip\\S+", "g"), d = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)"
            }, c = {AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left"}, u = {
                animation: !0,
                template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                selector: !1,
                placement: "top",
                offset: 0,
                container: !1,
                fallbackPlacement: "flip",
                boundary: "scrollParent"
            }, h = {SHOW: "show", OUT: "out"}, p = {
                HIDE: "hide" + n,
                HIDDEN: "hidden" + n,
                SHOW: "show" + n,
                SHOWN: "shown" + n,
                INSERTED: "inserted" + n,
                CLICK: "click" + n,
                FOCUSIN: "focusin" + n,
                FOCUSOUT: "focusout" + n,
                MOUSEENTER: "mouseenter" + n,
                MOUSELEAVE: "mouseleave" + n
            }, f = {FADE: "fade", SHOW: "show"},
            m = {TOOLTIP: ".tooltip", TOOLTIP_INNER: ".tooltip-inner", ARROW: ".arrow"},
            g = {HOVER: "hover", FOCUS: "focus", CLICK: "click", MANUAL: "manual"}, v = function () {
                function s(e, t) {
                    if (void 0 === i) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                    this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
                }

                var v = s.prototype;
                return v.enable = function () {
                    this._isEnabled = !0
                }, v.disable = function () {
                    this._isEnabled = !1
                }, v.toggleEnabled = function () {
                    this._isEnabled = !this._isEnabled
                }, v.toggle = function (t) {
                    if (this._isEnabled) if (t) {
                        var i = this.constructor.DATA_KEY, n = e(t.currentTarget).data(i);
                        n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (e(this.getTipElement()).hasClass(f.SHOW)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
                }, v.dispose = function () {
                    clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal"), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                }, v.show = function () {
                    var t = this;
                    if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");
                    var n = e.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        e(this.element).trigger(n);
                        var r = e.contains(this.element.ownerDocument.documentElement, this.element);
                        if (n.isDefaultPrevented() || !r) return;
                        var s = this.getTipElement(), a = l.getUID(this.constructor.NAME);
                        s.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && e(s).addClass(f.FADE);
                        var o = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement,
                            d = this._getAttachment(o);
                        this.addAttachmentClass(d);
                        var c = !1 === this.config.container ? document.body : e(this.config.container);
                        e(s).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(s).appendTo(c), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new i(this.element, s, {
                            placement: d,
                            modifiers: {
                                offset: {offset: this.config.offset},
                                flip: {behavior: this.config.fallbackPlacement},
                                arrow: {element: m.ARROW},
                                preventOverflow: {boundariesElement: this.config.boundary}
                            },
                            onCreate: function (e) {
                                e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                            },
                            onUpdate: function (e) {
                                t._handlePopperPlacementChange(e)
                            }
                        }), e(s).addClass(f.SHOW), "ontouchstart" in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);
                        var u = function () {
                            t.config.animation && t._fixTransition();
                            var i = t._hoverState;
                            t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), i === h.OUT && t._leave(null, t)
                        };
                        if (e(this.tip).hasClass(f.FADE)) {
                            var p = l.getTransitionDurationFromElement(this.tip);
                            e(this.tip).one(l.TRANSITION_END, u).emulateTransitionEnd(p)
                        } else u()
                    }
                }, v.hide = function (t) {
                    var i = this, n = this.getTipElement(), r = e.Event(this.constructor.Event.HIDE), s = function () {
                        i._hoverState !== h.SHOW && n.parentNode && n.parentNode.removeChild(n), i._cleanTipClass(), i.element.removeAttribute("aria-describedby"), e(i.element).trigger(i.constructor.Event.HIDDEN), null !== i._popper && i._popper.destroy(), t && t()
                    };
                    if (e(this.element).trigger(r), !r.isDefaultPrevented()) {
                        if (e(n).removeClass(f.SHOW), "ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), this._activeTrigger[g.CLICK] = !1, this._activeTrigger[g.FOCUS] = !1, this._activeTrigger[g.HOVER] = !1, e(this.tip).hasClass(f.FADE)) {
                            var a = l.getTransitionDurationFromElement(n);
                            e(n).one(l.TRANSITION_END, s).emulateTransitionEnd(a)
                        } else s();
                        this._hoverState = ""
                    }
                }, v.update = function () {
                    null !== this._popper && this._popper.scheduleUpdate()
                }, v.isWithContent = function () {
                    return Boolean(this.getTitle())
                }, v.addAttachmentClass = function (t) {
                    e(this.getTipElement()).addClass("bs-tooltip-" + t)
                }, v.getTipElement = function () {
                    return this.tip = this.tip || e(this.config.template)[0], this.tip
                }, v.setContent = function () {
                    var t = e(this.getTipElement());
                    this.setElementContent(t.find(m.TOOLTIP_INNER), this.getTitle()), t.removeClass(f.FADE + " " + f.SHOW)
                }, v.setElementContent = function (t, i) {
                    var n = this.config.html;
                    "object" == typeof i && (i.nodeType || i.jquery) ? n ? e(i).parent().is(t) || t.empty().append(i) : t.text(e(i).text()) : t[n ? "html" : "text"](i)
                }, v.getTitle = function () {
                    var e = this.element.getAttribute("data-original-title");
                    return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
                }, v._getAttachment = function (e) {
                    return c[e.toUpperCase()]
                }, v._setListeners = function () {
                    var t = this;
                    this.config.trigger.split(" ").forEach(function (i) {
                        if ("click" === i) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
                            return t.toggle(e)
                        }); else if (i !== g.MANUAL) {
                            var n = i === g.HOVER ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                                r = i === g.HOVER ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                            e(t.element).on(n, t.config.selector, function (e) {
                                return t._enter(e)
                            }).on(r, t.config.selector, function (e) {
                                return t._leave(e)
                            })
                        }
                        e(t.element).closest(".modal").on("hide.bs.modal", function () {
                            return t.hide()
                        })
                    }), this.config.selector ? this.config = a({}, this.config, {
                        trigger: "manual",
                        selector: ""
                    }) : this._fixTitle()
                }, v._fixTitle = function () {
                    var e = typeof this.element.getAttribute("data-original-title");
                    (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                }, v._enter = function (t, i) {
                    var n = this.constructor.DATA_KEY;
                    return i = i || e(t.currentTarget).data(n), i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), t && (i._activeTrigger["focusin" === t.type ? g.FOCUS : g.HOVER] = !0), e(i.getTipElement()).hasClass(f.SHOW) || i._hoverState === h.SHOW ? void(i._hoverState = h.SHOW) : (clearTimeout(i._timeout), i._hoverState = h.SHOW, i.config.delay && i.config.delay.show ? void(i._timeout = setTimeout(function () {
                        i._hoverState === h.SHOW && i.show()
                    }, i.config.delay.show)) : void i.show())
                }, v._leave = function (t, i) {
                    var n = this.constructor.DATA_KEY;
                    if (i = i || e(t.currentTarget).data(n), i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), t && (i._activeTrigger["focusout" === t.type ? g.FOCUS : g.HOVER] = !1), !i._isWithActiveTrigger()) {
                        if (clearTimeout(i._timeout), i._hoverState = h.OUT, !i.config.delay || !i.config.delay.hide) return void i.hide();
                        i._timeout = setTimeout(function () {
                            i._hoverState === h.OUT && i.hide()
                        }, i.config.delay.hide)
                    }
                }, v._isWithActiveTrigger = function () {
                    for (var e in this._activeTrigger) if (this._activeTrigger[e]) return !0;
                    return !1
                }, v._getConfig = function (i) {
                    return i = a({}, this.constructor.Default, e(this.element).data(), "object" == typeof i && i ? i : {}), "number" == typeof i.delay && (i.delay = {
                        show: i.delay,
                        hide: i.delay
                    }), "number" == typeof i.title && (i.title = i.title.toString()), "number" == typeof i.content && (i.content = i.content.toString()), l.typeCheckConfig(t, i, this.constructor.DefaultType), i
                }, v._getDelegateConfig = function () {
                    var e = {};
                    if (this.config) for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                    return e
                }, v._cleanTipClass = function () {
                    var t = e(this.getTipElement()), i = t.attr("class").match(o);
                    null !== i && i.length > 0 && t.removeClass(i.join(""))
                }, v._handlePopperPlacementChange = function (e) {
                    this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
                }, v._fixTransition = function () {
                    var t = this.getTipElement(), i = this.config.animation;
                    null === t.getAttribute("x-placement") && (e(t).removeClass(f.FADE), this.config.animation = !1, this.hide(), this.show(), this.config.animation = i)
                }, s._jQueryInterface = function (t) {
                    return this.each(function () {
                        var i = e(this).data("bs.tooltip"), n = "object" == typeof t && t;
                        if ((i || !/dispose|hide/.test(t)) && (i || (i = new s(this, n), e(this).data("bs.tooltip", i)), "string" == typeof t)) {
                            if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                            i[t]()
                        }
                    })
                }, r(s, null, [{
                    key: "VERSION", get: function () {
                        return "4.1.1"
                    }
                }, {
                    key: "Default", get: function () {
                        return u
                    }
                }, {
                    key: "NAME", get: function () {
                        return t
                    }
                }, {
                    key: "DATA_KEY", get: function () {
                        return "bs.tooltip"
                    }
                }, {
                    key: "Event", get: function () {
                        return p
                    }
                }, {
                    key: "EVENT_KEY", get: function () {
                        return n
                    }
                }, {
                    key: "DefaultType", get: function () {
                        return d
                    }
                }]), s
            }();
        return e.fn[t] = v._jQueryInterface, e.fn[t].Constructor = v, e.fn[t].noConflict = function () {
            return e.fn[t] = s, v._jQueryInterface
        }, v
    }(t), g = function (e) {
        var t = "popover", i = ".bs.popover", n = e.fn[t], s = new RegExp("(^|\\s)bs-popover\\S+", "g"),
            l = a({}, m.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
            }), d = a({}, m.DefaultType, {content: "(string|element|function)"}), c = {FADE: "fade", SHOW: "show"},
            u = {TITLE: ".popover-header", CONTENT: ".popover-body"}, h = {
                HIDE: "hide" + i,
                HIDDEN: "hidden" + i,
                SHOW: "show" + i,
                SHOWN: "shown" + i,
                INSERTED: "inserted" + i,
                CLICK: "click" + i,
                FOCUSIN: "focusin" + i,
                FOCUSOUT: "focusout" + i,
                MOUSEENTER: "mouseenter" + i,
                MOUSELEAVE: "mouseleave" + i
            }, p = function (n) {
                function a() {
                    return n.apply(this, arguments) || this
                }

                o(a, n);
                var p = a.prototype;
                return p.isWithContent = function () {
                    return this.getTitle() || this._getContent()
                }, p.addAttachmentClass = function (t) {
                    e(this.getTipElement()).addClass("bs-popover-" + t)
                }, p.getTipElement = function () {
                    return this.tip = this.tip || e(this.config.template)[0], this.tip
                }, p.setContent = function () {
                    var t = e(this.getTipElement());
                    this.setElementContent(t.find(u.TITLE), this.getTitle());
                    var i = this._getContent();
                    "function" == typeof i && (i = i.call(this.element)), this.setElementContent(t.find(u.CONTENT), i), t.removeClass(c.FADE + " " + c.SHOW)
                }, p._getContent = function () {
                    return this.element.getAttribute("data-content") || this.config.content
                }, p._cleanTipClass = function () {
                    var t = e(this.getTipElement()), i = t.attr("class").match(s);
                    null !== i && i.length > 0 && t.removeClass(i.join(""))
                }, a._jQueryInterface = function (t) {
                    return this.each(function () {
                        var i = e(this).data("bs.popover"), n = "object" == typeof t ? t : null;
                        if ((i || !/destroy|hide/.test(t)) && (i || (i = new a(this, n), e(this).data("bs.popover", i)), "string" == typeof t)) {
                            if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                            i[t]()
                        }
                    })
                }, r(a, null, [{
                    key: "VERSION", get: function () {
                        return "4.1.1"
                    }
                }, {
                    key: "Default", get: function () {
                        return l
                    }
                }, {
                    key: "NAME", get: function () {
                        return t
                    }
                }, {
                    key: "DATA_KEY", get: function () {
                        return "bs.popover"
                    }
                }, {
                    key: "Event", get: function () {
                        return h
                    }
                }, {
                    key: "EVENT_KEY", get: function () {
                        return i
                    }
                }, {
                    key: "DefaultType", get: function () {
                        return d
                    }
                }]), a
            }(m);
        return e.fn[t] = p._jQueryInterface, e.fn[t].Constructor = p, e.fn[t].noConflict = function () {
            return e.fn[t] = n, p._jQueryInterface
        }, p
    }(t), v = function (e) {
        var t = "scrollspy", i = e.fn[t], n = {offset: 10, method: "auto", target: ""},
            s = {offset: "number", method: "string", target: "(string|element)"}, o = {
                ACTIVATE: "activate.bs.scrollspy",
                SCROLL: "scroll.bs.scrollspy",
                LOAD_DATA_API: "load.bs.scrollspy.data-api"
            }, d = {DROPDOWN_ITEM: "dropdown-item", DROPDOWN_MENU: "dropdown-menu", ACTIVE: "active"}, c = {
                DATA_SPY: '[data-spy="scroll"]',
                ACTIVE: ".active",
                NAV_LIST_GROUP: ".nav, .list-group",
                NAV_LINKS: ".nav-link",
                NAV_ITEMS: ".nav-item",
                LIST_ITEMS: ".list-group-item",
                DROPDOWN: ".dropdown",
                DROPDOWN_ITEMS: ".dropdown-item",
                DROPDOWN_TOGGLE: ".dropdown-toggle"
            }, u = {OFFSET: "offset", POSITION: "position"}, h = function () {
                function i(t, i) {
                    var n = this;
                    this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(i), this._selector = this._config.target + " " + c.NAV_LINKS + "," + this._config.target + " " + c.LIST_ITEMS + "," + this._config.target + " " + c.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(o.SCROLL, function (e) {
                        return n._process(e)
                    }), this.refresh(), this._process()
                }

                var h = i.prototype;
                return h.refresh = function () {
                    var t = this, i = this._scrollElement === this._scrollElement.window ? u.OFFSET : u.POSITION,
                        n = "auto" === this._config.method ? i : this._config.method,
                        r = n === u.POSITION ? this._getScrollTop() : 0;
                    this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), e.makeArray(e(this._selector)).map(function (t) {
                        var i, s = l.getSelectorFromElement(t);
                        if (s && (i = e(s)[0]), i) {
                            var a = i.getBoundingClientRect();
                            if (a.width || a.height) return [e(i)[n]().top + r, s]
                        }
                        return null
                    }).filter(function (e) {
                        return e
                    }).sort(function (e, t) {
                        return e[0] - t[0]
                    }).forEach(function (e) {
                        t._offsets.push(e[0]), t._targets.push(e[1])
                    })
                }, h.dispose = function () {
                    e.removeData(this._element, "bs.scrollspy"), e(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                }, h._getConfig = function (i) {
                    if (i = a({}, n, "object" == typeof i && i ? i : {}), "string" != typeof i.target) {
                        var r = e(i.target).attr("id");
                        r || (r = l.getUID(t), e(i.target).attr("id", r)), i.target = "#" + r
                    }
                    return l.typeCheckConfig(t, i, s), i
                }, h._getScrollTop = function () {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                }, h._getScrollHeight = function () {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }, h._getOffsetHeight = function () {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                }, h._process = function () {
                    var e = this._getScrollTop() + this._config.offset, t = this._getScrollHeight(),
                        i = this._config.offset + t - this._getOffsetHeight();
                    if (this._scrollHeight !== t && this.refresh(), e >= i) {
                        var n = this._targets[this._targets.length - 1];
                        return void(this._activeTarget !== n && this._activate(n))
                    }
                    if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                    for (var r = this._offsets.length; r--;) {
                        this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                    }
                }, h._activate = function (t) {
                    this._activeTarget = t, this._clear();
                    var i = this._selector.split(",");
                    i = i.map(function (e) {
                        return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                    });
                    var n = e(i.join(","));
                    n.hasClass(d.DROPDOWN_ITEM) ? (n.closest(c.DROPDOWN).find(c.DROPDOWN_TOGGLE).addClass(d.ACTIVE), n.addClass(d.ACTIVE)) : (n.addClass(d.ACTIVE), n.parents(c.NAV_LIST_GROUP).prev(c.NAV_LINKS + ", " + c.LIST_ITEMS).addClass(d.ACTIVE), n.parents(c.NAV_LIST_GROUP).prev(c.NAV_ITEMS).children(c.NAV_LINKS).addClass(d.ACTIVE)), e(this._scrollElement).trigger(o.ACTIVATE, {relatedTarget: t})
                }, h._clear = function () {
                    e(this._selector).filter(c.ACTIVE).removeClass(d.ACTIVE)
                }, i._jQueryInterface = function (t) {
                    return this.each(function () {
                        var n = e(this).data("bs.scrollspy"), r = "object" == typeof t && t;
                        if (n || (n = new i(this, r), e(this).data("bs.scrollspy", n)), "string" == typeof t) {
                            if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                            n[t]()
                        }
                    })
                }, r(i, null, [{
                    key: "VERSION", get: function () {
                        return "4.1.1"
                    }
                }, {
                    key: "Default", get: function () {
                        return n
                    }
                }]), i
            }();
        return e(window).on(o.LOAD_DATA_API, function () {
            for (var t = e.makeArray(e(c.DATA_SPY)), i = t.length; i--;) {
                var n = e(t[i]);
                h._jQueryInterface.call(n, n.data())
            }
        }), e.fn[t] = h._jQueryInterface, e.fn[t].Constructor = h, e.fn[t].noConflict = function () {
            return e.fn[t] = i, h._jQueryInterface
        }, h
    }(t), y = function (e) {
        var t = e.fn.tab, i = {
                HIDE: "hide.bs.tab",
                HIDDEN: "hidden.bs.tab",
                SHOW: "show.bs.tab",
                SHOWN: "shown.bs.tab",
                CLICK_DATA_API: "click.bs.tab.data-api"
            }, n = {DROPDOWN_MENU: "dropdown-menu", ACTIVE: "active", DISABLED: "disabled", FADE: "fade", SHOW: "show"},
            s = {
                DROPDOWN: ".dropdown",
                NAV_LIST_GROUP: ".nav, .list-group",
                ACTIVE: ".active",
                ACTIVE_UL: "> li > .active",
                DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
                DROPDOWN_TOGGLE: ".dropdown-toggle",
                DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
            }, a = function () {
                function t(e) {
                    this._element = e
                }

                var a = t.prototype;
                return a.show = function () {
                    var t = this;
                    if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(n.ACTIVE) || e(this._element).hasClass(n.DISABLED))) {
                        var r, a, o = e(this._element).closest(s.NAV_LIST_GROUP)[0],
                            d = l.getSelectorFromElement(this._element);
                        if (o) {
                            var c = "UL" === o.nodeName ? s.ACTIVE_UL : s.ACTIVE;
                            a = e.makeArray(e(o).find(c)), a = a[a.length - 1]
                        }
                        var u = e.Event(i.HIDE, {relatedTarget: this._element}), h = e.Event(i.SHOW, {relatedTarget: a});
                        if (a && e(a).trigger(u), e(this._element).trigger(h), !h.isDefaultPrevented() && !u.isDefaultPrevented()) {
                            d && (r = e(d)[0]), this._activate(this._element, o);
                            var p = function () {
                                var n = e.Event(i.HIDDEN, {relatedTarget: t._element}),
                                    r = e.Event(i.SHOWN, {relatedTarget: a});
                                e(a).trigger(n), e(t._element).trigger(r)
                            };
                            r ? this._activate(r, r.parentNode, p) : p()
                        }
                    }
                }, a.dispose = function () {
                    e.removeData(this._element, "bs.tab"), this._element = null
                }, a._activate = function (t, i, r) {
                    var a, o = this;
                    a = "UL" === i.nodeName ? e(i).find(s.ACTIVE_UL) : e(i).children(s.ACTIVE);
                    var d = a[0], c = r && d && e(d).hasClass(n.FADE), u = function () {
                        return o._transitionComplete(t, d, r)
                    };
                    if (d && c) {
                        var h = l.getTransitionDurationFromElement(d);
                        e(d).one(l.TRANSITION_END, u).emulateTransitionEnd(h)
                    } else u()
                }, a._transitionComplete = function (t, i, r) {
                    if (i) {
                        e(i).removeClass(n.SHOW + " " + n.ACTIVE);
                        var a = e(i.parentNode).find(s.DROPDOWN_ACTIVE_CHILD)[0];
                        a && e(a).removeClass(n.ACTIVE), "tab" === i.getAttribute("role") && i.setAttribute("aria-selected", !1)
                    }
                    if (e(t).addClass(n.ACTIVE), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), l.reflow(t), e(t).addClass(n.SHOW), t.parentNode && e(t.parentNode).hasClass(n.DROPDOWN_MENU)) {
                        var o = e(t).closest(s.DROPDOWN)[0];
                        o && e(o).find(s.DROPDOWN_TOGGLE).addClass(n.ACTIVE), t.setAttribute("aria-expanded", !0)
                    }
                    r && r()
                }, t._jQueryInterface = function (i) {
                    return this.each(function () {
                        var n = e(this), r = n.data("bs.tab");
                        if (r || (r = new t(this), n.data("bs.tab", r)), "string" == typeof i) {
                            if (void 0 === r[i]) throw new TypeError('No method named "' + i + '"');
                            r[i]()
                        }
                    })
                }, r(t, null, [{
                    key: "VERSION", get: function () {
                        return "4.1.1"
                    }
                }]), t
            }();
        return e(document).on(i.CLICK_DATA_API, s.DATA_TOGGLE, function (t) {
            t.preventDefault(), a._jQueryInterface.call(e(this), "show")
        }), e.fn.tab = a._jQueryInterface, e.fn.tab.Constructor = a, e.fn.tab.noConflict = function () {
            return e.fn.tab = t, a._jQueryInterface
        }, a
    }(t);
    !function (e) {
        if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = e.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(t), e.Util = l, e.Alert = d, e.Button = c, e.Carousel = u, e.Collapse = h, e.Dropdown = p, e.Modal = f, e.Popover = g, e.Scrollspy = v, e.Tab = y, e.Tooltip = m, Object.defineProperty(e, "__esModule", {value: !0})
}), function (e, t, i) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(t || i)
}(function (e) {
    "use strict";
    var t = function (t, i, n) {
        var r = {
            invalid: [], getCaret: function () {
                try {
                    var e, i = 0, n = t.get(0), s = document.selection, a = n.selectionStart;
                    return s && -1 === navigator.appVersion.indexOf("MSIE 10") ? (e = s.createRange(), e.moveStart("character", -r.val().length), i = e.text.length) : (a || "0" === a) && (i = a), i
                } catch (e) {
                }
            }, setCaret: function (e) {
                try {
                    if (t.is(":focus")) {
                        var i, n = t.get(0);
                        n.setSelectionRange ? n.setSelectionRange(e, e) : (i = n.createTextRange(), i.collapse(!0), i.moveEnd("character", e), i.moveStart("character", e), i.select())
                    }
                } catch (e) {
                }
            }, events: function () {
                t.on("keydown.mask", function (e) {
                    t.data("mask-keycode", e.keyCode || e.which), t.data("mask-previus-value", t.val()), t.data("mask-previus-caret-pos", r.getCaret()), r.maskDigitPosMapOld = r.maskDigitPosMap
                }).on(e.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", r.behaviour).on("paste.mask drop.mask", function () {
                    setTimeout(function () {
                        t.keydown().keyup()
                    }, 100)
                }).on("change.mask", function () {
                    t.data("changed", !0)
                }).on("blur.mask", function () {
                    o === r.val() || t.data("changed") || t.trigger("change"), t.data("changed", !1)
                }).on("blur.mask", function () {
                    o = r.val()
                }).on("focus.mask", function (t) {
                    !0 === n.selectOnFocus && e(t.target).select()
                }).on("focusout.mask", function () {
                    n.clearIfNotMatch && !s.test(r.val()) && r.val("")
                })
            }, getRegexMask: function () {
                for (var e, t, n, r, s, o, l = [], d = 0; d < i.length; d++) e = a.translation[i.charAt(d)], e ? (t = e.pattern.toString().replace(/.{1}$|^.{1}/g, ""), n = e.optional, r = e.recursive, r ? (l.push(i.charAt(d)), s = {
                    digit: i.charAt(d),
                    pattern: t
                }) : l.push(n || r ? t + "?" : t)) : l.push(i.charAt(d).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
                return o = l.join(""), s && (o = o.replace(new RegExp("(" + s.digit + "(.*" + s.digit + ")?)"), "($1)?").replace(new RegExp(s.digit, "g"), s.pattern)), new RegExp(o)
            }, destroyEvents: function () {
                t.off(["input", "keydown", "keyup", "paste", "drop", "blur", "focusout", ""].join(".mask "))
            }, val: function (e) {
                var i, n = t.is("input"), r = n ? "val" : "text";
                return arguments.length > 0 ? (t[r]() !== e && t[r](e), i = t) : i = t[r](), i
            }, calculateCaretPosition: function () {
                var e = t.data("mask-previus-value") || "", i = r.getMasked(), n = r.getCaret();
                if (e !== i) {
                    var s = t.data("mask-previus-caret-pos") || 0, a = i.length, o = e.length, l = 0, d = 0, c = 0,
                        u = 0, h = 0;
                    for (h = n; h < a && r.maskDigitPosMap[h]; h++) d++;
                    for (h = n - 1; h >= 0 && r.maskDigitPosMap[h]; h--) l++;
                    for (h = n - 1; h >= 0; h--) r.maskDigitPosMap[h] && c++;
                    for (h = s - 1; h >= 0; h--) r.maskDigitPosMapOld[h] && u++;
                    if (n > o) n = 10 * a; else if (s >= n && s !== o) {
                        if (!r.maskDigitPosMapOld[n]) {
                            var p = n;
                            n -= u - c, n -= l, r.maskDigitPosMap[n] && (n = p)
                        }
                    } else n > s && (n += c - u, n += d)
                }
                return n
            }, behaviour: function (i) {
                i = i || window.event, r.invalid = [];
                var n = t.data("mask-keycode");
                if (-1 === e.inArray(n, a.byPassKeys)) {
                    var s = r.getMasked(), o = r.getCaret();
                    return setTimeout(function () {
                        r.setCaret(r.calculateCaretPosition())
                    }, e.jMaskGlobals.keyStrokeCompensation), r.val(s), r.setCaret(o), r.callbacks(i)
                }
            }, getMasked: function (e, t) {
                var s, o, l = [], d = void 0 === t ? r.val() : t + "", c = 0, u = i.length, h = 0, p = d.length, f = 1,
                    m = "push", g = -1, v = 0, y = [];
                n.reverse ? (m = "unshift", f = -1, s = 0, c = u - 1, h = p - 1, o = function () {
                    return c > -1 && h > -1
                }) : (s = u - 1, o = function () {
                    return c < u && h < p
                });
                for (var b; o();) {
                    var _ = i.charAt(c), w = d.charAt(h), x = a.translation[_];
                    x ? (w.match(x.pattern) ? (l[m](w), x.recursive && (-1 === g ? g = c : c === s && c !== g && (c = g - f), s === g && (c -= f)), c += f) : w === b ? (v--, b = void 0) : x.optional ? (c += f, h -= f) : x.fallback ? (l[m](x.fallback), c += f, h -= f) : r.invalid.push({
                        p: h,
                        v: w,
                        e: x.pattern
                    }), h += f) : (e || l[m](_), w === _ ? (y.push(h), h += f) : (b = _, y.push(h + v), v++), c += f)
                }
                var T = i.charAt(s);
                u !== p + 1 || a.translation[T] || l.push(T);
                var E = l.join("");
                return r.mapMaskdigitPositions(E, y, p), E
            }, mapMaskdigitPositions: function (e, t, i) {
                var s = n.reverse ? e.length - i : 0;
                r.maskDigitPosMap = {};
                for (var a = 0; a < t.length; a++) r.maskDigitPosMap[t[a] + s] = 1
            }, callbacks: function (e) {
                var s = r.val(), a = s !== o, l = [s, e, t, n], d = function (e, t, i) {
                    "function" == typeof n[e] && t && n[e].apply(this, i)
                };
                d("onChange", !0 === a, l), d("onKeyPress", !0 === a, l), d("onComplete", s.length === i.length, l), d("onInvalid", r.invalid.length > 0, [s, e, t, r.invalid, n])
            }
        };
        t = e(t);
        var s, a = this, o = r.val();
        i = "function" == typeof i ? i(r.val(), void 0, t, n) : i, a.mask = i, a.options = n, a.remove = function () {
            var e = r.getCaret();
            return a.options.placeholder && t.removeAttr("placeholder"), t.data("mask-maxlength") && t.removeAttr("maxlength"), r.destroyEvents(), r.val(a.getCleanVal()), r.setCaret(e), t
        }, a.getCleanVal = function () {
            return r.getMasked(!0)
        }, a.getMaskedVal = function (e) {
            return r.getMasked(!1, e)
        }, a.init = function (o) {
            if (o = o || !1, n = n || {}, a.clearIfNotMatch = e.jMaskGlobals.clearIfNotMatch, a.byPassKeys = e.jMaskGlobals.byPassKeys, a.translation = e.extend({}, e.jMaskGlobals.translation, n.translation), a = e.extend(!0, {}, a, n), s = r.getRegexMask(), o) r.events(), r.val(r.getMasked()); else {
                n.placeholder && t.attr("placeholder", n.placeholder), t.data("mask") && t.attr("autocomplete", "off");
                for (var l = 0, d = !0; l < i.length; l++) {
                    var c = a.translation[i.charAt(l)];
                    if (c && c.recursive) {
                        d = !1;
                        break
                    }
                }
                d && t.attr("maxlength", i.length).data("mask-maxlength", !0), r.destroyEvents(), r.events();
                var u = r.getCaret();
                r.val(r.getMasked()), r.setCaret(u)
            }
        }, a.init(!t.is("input"))
    };
    e.maskWatchers = {};
    var i = function () {
        var i = e(this), r = {}, s = i.attr("data-mask");
        if (i.attr("data-mask-reverse") && (r.reverse = !0), i.attr("data-mask-clearifnotmatch") && (r.clearIfNotMatch = !0), "true" === i.attr("data-mask-selectonfocus") && (r.selectOnFocus = !0), n(i, s, r)) return i.data("mask", new t(this, s, r))
    }, n = function (t, i, n) {
        n = n || {};
        var r = e(t).data("mask"), s = JSON.stringify, a = e(t).val() || e(t).text();
        try {
            return "function" == typeof i && (i = i(a)), "object" != typeof r || s(r.options) !== s(n) || r.mask !== i
        } catch (e) {
        }
    };
    e.fn.mask = function (i, r) {
        r = r || {};
        var s = this.selector, a = e.jMaskGlobals, o = a.watchInterval, l = r.watchInputs || a.watchInputs,
            d = function () {
                if (n(this, i, r)) return e(this).data("mask", new t(this, i, r))
            };
        return e(this).each(d), s && "" !== s && l && (clearInterval(e.maskWatchers[s]), e.maskWatchers[s] = setInterval(function () {
            e(document).find(s).each(d)
        }, o)), this
    }, e.fn.masked = function (e) {
        return this.data("mask").getMaskedVal(e)
    }, e.fn.unmask = function () {
        return clearInterval(e.maskWatchers[this.selector]), delete e.maskWatchers[this.selector], this.each(function () {
            var t = e(this).data("mask");
            t && t.remove().removeData("mask")
        })
    }, e.fn.cleanVal = function () {
        return this.data("mask").getCleanVal()
    }, e.applyDataMask = function (t) {
        t = t || e.jMaskGlobals.maskElements, (t instanceof e ? t : e(t)).filter(e.jMaskGlobals.dataMaskAttr).each(i)
    };
    var r = {
        maskElements: "input,td,span,div",
        dataMaskAttr: "*[data-mask]",
        dataMask: !0,
        watchInterval: 300,
        watchInputs: !0,
        keyStrokeCompensation: 10,
        useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && function (e) {
            var t, i = document.createElement("div");
            return e = "on" + e, t = e in i, t || (i.setAttribute(e, "return;"), t = "function" == typeof i[e]), i = null, t
        }("input"),
        watchDataMask: !1,
        byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
        translation: {
            0: {pattern: /\d/},
            9: {pattern: /\d/, optional: !0},
            "#": {pattern: /\d/, recursive: !0},
            A: {pattern: /[a-zA-Z0-9]/},
            S: {pattern: /[a-zA-Z]/}
        }
    };
    e.jMaskGlobals = e.jMaskGlobals || {}, r = e.jMaskGlobals = e.extend(!0, {}, r, e.jMaskGlobals), r.dataMask && e.applyDataMask(), setInterval(function () {
        e.jMaskGlobals.watchDataMask && e.applyDataMask()
    }, r.watchInterval)
}, window.jQuery, window.Zepto), function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (e) {
    e.extend(e.fn, {
        validate: function (t) {
            if (!this.length) return void(t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var i = e.data(this[0], "validator");
            return i || (this.attr("novalidate", "novalidate"), i = new e.validator(t, this[0]), e.data(this[0], "validator", i), i.settings.onsubmit && (this.on("click.validate", ":submit", function (t) {
                i.submitButton = t.currentTarget, e(this).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== e(this).attr("formnovalidate") && (i.cancelSubmit = !0)
            }), this.on("submit.validate", function (t) {
                function n() {
                    var n, r;
                    return i.submitButton && (i.settings.submitHandler || i.formSubmitted) && (n = e("<input type='hidden'/>").attr("name", i.submitButton.name).val(e(i.submitButton).val()).appendTo(i.currentForm)), !i.settings.submitHandler || (r = i.settings.submitHandler.call(i, i.currentForm, t), n && n.remove(), void 0 !== r && r)
                }

                return i.settings.debug && t.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, n()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : n() : (i.focusInvalid(), !1)
            })), i)
        }, valid: function () {
            var t, i, n;
            return e(this[0]).is("form") ? t = this.validate().form() : (n = [], t = !0, i = e(this[0].form).validate(), this.each(function () {
                (t = i.element(this) && t) || (n = n.concat(i.errorList))
            }), i.errorList = n), t
        }, rules: function (t, i) {
            var n, r, s, a, o, l, d = this[0];
            if (null != d && (!d.form && d.hasAttribute("contenteditable") && (d.form = this.closest("form")[0], d.name = this.attr("name")), null != d.form)) {
                if (t) switch (n = e.data(d.form, "validator").settings, r = n.rules, s = e.validator.staticRules(d), t) {
                    case"add":
                        e.extend(s, e.validator.normalizeRule(i)), delete s.messages, r[d.name] = s, i.messages && (n.messages[d.name] = e.extend(n.messages[d.name], i.messages));
                        break;
                    case"remove":
                        return i ? (l = {}, e.each(i.split(/\s/), function (e, t) {
                            l[t] = s[t], delete s[t]
                        }), l) : (delete r[d.name], s)
                }
                return a = e.validator.normalizeRules(e.extend({}, e.validator.classRules(d), e.validator.attributeRules(d), e.validator.dataRules(d), e.validator.staticRules(d)), d), a.required && (o = a.required, delete a.required, a = e.extend({required: o}, a)), a.remote && (o = a.remote, delete a.remote, a = e.extend(a, {remote: o})), a
            }
        }
    }), e.extend(e.expr.pseudos || e.expr[":"], {
        blank: function (t) {
            return !e.trim("" + e(t).val())
        }, filled: function (t) {
            var i = e(t).val();
            return null !== i && !!e.trim("" + i)
        }, unchecked: function (t) {
            return !e(t).prop("checked")
        }
    }), e.validator = function (t, i) {
        this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = i, this.init()
    }, e.validator.format = function (t, i) {
        return 1 === arguments.length ? function () {
            var i = e.makeArray(arguments);
            return i.unshift(t), e.validator.format.apply(this, i)
        } : void 0 === i ? t : (arguments.length > 2 && i.constructor !== Array && (i = e.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), e.each(i, function (e, i) {
            t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function () {
                return i
            })
        }), t)
    }, e.extend(e.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: e([]),
            errorLabelContainer: e([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function (e) {
                this.lastActive = e, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e)))
            },
            onfocusout: function (e) {
                this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
            },
            onkeyup: function (t, i) {
                var n = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                9 === i.which && "" === this.elementValue(t) || -1 !== e.inArray(i.keyCode, n) || (t.name in this.submitted || t.name in this.invalid) && this.element(t)
            },
            onclick: function (e) {
                e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
            },
            highlight: function (t, i, n) {
                "radio" === t.type ? this.findByName(t.name).addClass(i).removeClass(n) : e(t).addClass(i).removeClass(n)
            },
            unhighlight: function (t, i, n) {
                "radio" === t.type ? this.findByName(t.name).removeClass(i).addClass(n) : e(t).removeClass(i).addClass(n)
            }
        },
        setDefaults: function (t) {
            e.extend(e.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: e.validator.format("Please enter no more than {0} characters."),
            minlength: e.validator.format("Please enter at least {0} characters."),
            rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
            range: e.validator.format("Please enter a value between {0} and {1}."),
            max: e.validator.format("Please enter a value less than or equal to {0}."),
            min: e.validator.format("Please enter a value greater than or equal to {0}."),
            step: e.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function () {
                function t(t) {
                    !this.form && this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0], this.name = e(this).attr("name"));
                    var i = e.data(this.form, "validator"), n = "on" + t.type.replace(/^validate/, ""), r = i.settings;
                    r[n] && !e(this).is(r.ignore) && r[n].call(i, this, t)
                }

                this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var i, n = this.groups = {};
                e.each(this.settings.groups, function (t, i) {
                    "string" == typeof i && (i = i.split(/\s/)), e.each(i, function (e, i) {
                        n[i] = t
                    })
                }), i = this.settings.rules, e.each(i, function (t, n) {
                    i[t] = e.validator.normalizeRule(n)
                }), e(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t), this.settings.invalidHandler && e(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
            }, form: function () {
                return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            }, checkForm: function () {
                this.prepareForm();
                for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
                return this.valid()
            }, element: function (t) {
                var i, n, r = this.clean(t), s = this.validationTargetFor(r), a = this, o = !0;
                return void 0 === s ? delete this.invalid[r.name] : (this.prepareElement(s), this.currentElements = e(s), n = this.groups[s.name], n && e.each(this.groups, function (e, t) {
                    t === n && e !== s.name && (r = a.validationTargetFor(a.clean(a.findByName(e)))) && r.name in a.invalid && (a.currentElements.push(r), o = a.check(r) && o)
                }), i = !1 !== this.check(s), o = o && i, this.invalid[s.name] = !i, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e(t).attr("aria-invalid", !i)), o
            }, showErrors: function (t) {
                if (t) {
                    var i = this;
                    e.extend(this.errorMap, t), this.errorList = e.map(this.errorMap, function (e, t) {
                        return {message: e, element: i.findByName(t)[0]}
                    }), this.successList = e.grep(this.successList, function (e) {
                        return !(e.name in t)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            }, resetForm: function () {
                e.fn.resetForm && e(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(t)
            }, resetElements: function (e) {
                var t;
                if (this.settings.unhighlight) for (t = 0; e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ""), this.findByName(e[t].name).removeClass(this.settings.validClass); else e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            }, numberOfInvalids: function () {
                return this.objectLength(this.invalid)
            }, objectLength: function (e) {
                var t, i = 0;
                for (t in e) void 0 !== e[t] && null !== e[t] && !1 !== e[t] && i++;
                return i
            }, hideErrors: function () {
                this.hideThese(this.toHide)
            }, hideThese: function (e) {
                e.not(this.containers).text(""), this.addWrapper(e).hide()
            }, valid: function () {
                return 0 === this.size()
            }, size: function () {
                return this.errorList.length
            }, focusInvalid: function () {
                if (this.settings.focusInvalid) try {
                    e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (e) {
                }
            }, findLastActive: function () {
                var t = this.lastActive;
                return t && 1 === e.grep(this.errorList, function (e) {
                    return e.element.name === t.name
                }).length && t
            }, elements: function () {
                var t = this, i = {};
                return e(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
                    var n = this.name || e(this).attr("name");
                    return !n && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0], this.name = n), !(n in i || !t.objectLength(e(this).rules())) && (i[n] = !0, !0)
                })
            }, clean: function (t) {
                return e(t)[0]
            }, errors: function () {
                var t = this.settings.errorClass.split(" ").join(".");
                return e(this.settings.errorElement + "." + t, this.errorContext)
            }, resetInternals: function () {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([])
            }, reset: function () {
                this.resetInternals(), this.currentElements = e([])
            }, prepareForm: function () {
                this.reset(), this.toHide = this.errors().add(this.containers)
            }, prepareElement: function (e) {
                this.reset(), this.toHide = this.errorsFor(e)
            }, elementValue: function (t) {
                var i, n, r = e(t), s = t.type;
                return "radio" === s || "checkbox" === s ? this.findByName(t.name).filter(":checked").val() : "number" === s && void 0 !== t.validity ? t.validity.badInput ? "NaN" : r.val() : (i = t.hasAttribute("contenteditable") ? r.text() : r.val(), "file" === s ? "C:\\fakepath\\" === i.substr(0, 12) ? i.substr(12) : (n = i.lastIndexOf("/")) >= 0 ? i.substr(n + 1) : (n = i.lastIndexOf("\\"), n >= 0 ? i.substr(n + 1) : i) : "string" == typeof i ? i.replace(/\r/g, "") : i)
            }, check: function (t) {
                t = this.validationTargetFor(this.clean(t));
                var i, n, r, s, a = e(t).rules(), o = e.map(a, function (e, t) {
                    return t
                }).length, l = !1, d = this.elementValue(t);
                if ("function" == typeof a.normalizer ? s = a.normalizer : "function" == typeof this.settings.normalizer && (s = this.settings.normalizer), s) {
                    if ("string" != typeof(d = s.call(t, d))) throw new TypeError("The normalizer should return a string value.");
                    delete a.normalizer
                }
                for (n in a) {
                    r = {method: n, parameters: a[n]};
                    try {
                        if ("dependency-mismatch" === (i = e.validator.methods[n].call(this, d, t, r.parameters)) && 1 === o) {
                            l = !0;
                            continue
                        }
                        if (l = !1, "pending" === i) return void(this.toHide = this.toHide.not(this.errorsFor(t)));
                        if (!i) return this.formatAndAdd(t, r), !1
                    } catch (e) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method.", e), e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method."), e
                    }
                }
                if (!l) return this.objectLength(a) && this.successList.push(t), !0
            }, customDataMessage: function (t, i) {
                return e(t).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || e(t).data("msg")
            }, customMessage: function (e, t) {
                var i = this.settings.messages[e];
                return i && (i.constructor === String ? i : i[t])
            }, findDefined: function () {
                for (var e = 0; e < arguments.length; e++) if (void 0 !== arguments[e]) return arguments[e]
            }, defaultMessage: function (t, i) {
                "string" == typeof i && (i = {method: i});
                var n = this.findDefined(this.customMessage(t.name, i.method), this.customDataMessage(t, i.method), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[i.method], "<strong>Warning: No message defined for " + t.name + "</strong>"),
                    r = /\$?\{(\d+)\}/g;
                return "function" == typeof n ? n = n.call(this, i.parameters, t) : r.test(n) && (n = e.validator.format(n.replace(r, "{$1}"), i.parameters)), n
            }, formatAndAdd: function (e, t) {
                var i = this.defaultMessage(e, t);
                this.errorList.push({
                    message: i,
                    element: e,
                    method: t.method
                }), this.errorMap[e.name] = i, this.submitted[e.name] = i
            }, addWrapper: function (e) {
                return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
            }, defaultShowErrors: function () {
                var e, t, i;
                for (e = 0; this.errorList[e]; e++) i = this.errorList[e], this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
                if (this.settings.unhighlight) for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            }, validElements: function () {
                return this.currentElements.not(this.invalidElements())
            }, invalidElements: function () {
                return e(this.errorList).map(function () {
                    return this.element
                })
            }, showLabel: function (t, i) {
                var n, r, s, a, o = this.errorsFor(t), l = this.idOrName(t), d = e(t).attr("aria-describedby");
                o.length ? (o.removeClass(this.settings.validClass).addClass(this.settings.errorClass), o.html(i)) : (o = e("<" + this.settings.errorElement + ">").attr("id", l + "-error").addClass(this.settings.errorClass).html(i || ""), n = o, this.settings.wrapper && (n = o.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(n) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, n, e(t)) : n.insertAfter(t), o.is("label") ? o.attr("for", l) : 0 === o.parents("label[for='" + this.escapeCssMeta(l) + "']").length && (s = o.attr("id"), d ? d.match(new RegExp("\\b" + this.escapeCssMeta(s) + "\\b")) || (d += " " + s) : d = s, e(t).attr("aria-describedby", d), (r = this.groups[t.name]) && (a = this, e.each(a.groups, function (t, i) {
                    i === r && e("[name='" + a.escapeCssMeta(t) + "']", a.currentForm).attr("aria-describedby", o.attr("id"))
                })))), !i && this.settings.success && (o.text(""), "string" == typeof this.settings.success ? o.addClass(this.settings.success) : this.settings.success(o, t)), this.toShow = this.toShow.add(o)
            }, errorsFor: function (t) {
                var i = this.escapeCssMeta(this.idOrName(t)), n = e(t).attr("aria-describedby"),
                    r = "label[for='" + i + "'], label[for='" + i + "'] *";
                return n && (r = r + ", #" + this.escapeCssMeta(n).replace(/\s+/g, ", #")), this.errors().filter(r)
            }, escapeCssMeta: function (e) {
                return e.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
            }, idOrName: function (e) {
                return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
            }, validationTargetFor: function (t) {
                return this.checkable(t) && (t = this.findByName(t.name)), e(t).not(this.settings.ignore)[0]
            }, checkable: function (e) {
                return /radio|checkbox/i.test(e.type)
            }, findByName: function (t) {
                return e(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']")
            }, getLength: function (t, i) {
                switch (i.nodeName.toLowerCase()) {
                    case"select":
                        return e("option:selected", i).length;
                    case"input":
                        if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                }
                return t.length
            }, depend: function (e, t) {
                return !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t)
            }, dependTypes: {
                boolean: function (e) {
                    return e
                }, string: function (t, i) {
                    return !!e(t, i.form).length
                }, function: function (e, t) {
                    return e(t)
                }
            }, optional: function (t) {
                var i = this.elementValue(t);
                return !e.validator.methods.required.call(this, i, t) && "dependency-mismatch"
            }, startRequest: function (t) {
                this.pending[t.name] || (this.pendingRequest++, e(t).addClass(this.settings.pendingClass), this.pending[t.name] = !0)
            }, stopRequest: function (t, i) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], e(t).removeClass(this.settings.pendingClass), i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.submitButton && e("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            }, previousValue: function (t, i) {
                return i = "string" == typeof i && i || "remote", e.data(t, "previousValue") || e.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, {method: i})
                })
            }, destroy: function () {
                this.resetForm(), e(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
            }
        },
        classRuleSettings: {
            required: {required: !0},
            email: {email: !0},
            url: {url: !0},
            date: {date: !0},
            dateISO: {dateISO: !0},
            number: {number: !0},
            digits: {digits: !0},
            creditcard: {creditcard: !0}
        },
        addClassRules: function (t, i) {
            t.constructor === String ? this.classRuleSettings[t] = i : e.extend(this.classRuleSettings, t)
        },
        classRules: function (t) {
            var i = {}, n = e(t).attr("class");
            return n && e.each(n.split(" "), function () {
                this in e.validator.classRuleSettings && e.extend(i, e.validator.classRuleSettings[this])
            }), i
        },
        normalizeAttributeRule: function (e, t, i, n) {
            /min|max|step/.test(i) && (null === t || /number|range|text/.test(t)) && (n = Number(n), isNaN(n) && (n = void 0)), n || 0 === n ? e[i] = n : t === i && "range" !== t && (e[i] = !0)
        },
        attributeRules: function (t) {
            var i, n, r = {}, s = e(t), a = t.getAttribute("type");
            for (i in e.validator.methods) "required" === i ? (n = t.getAttribute(i), "" === n && (n = !0), n = !!n) : n = s.attr(i), this.normalizeAttributeRule(r, a, i, n);
            return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r
        },
        dataRules: function (t) {
            var i, n, r = {}, s = e(t), a = t.getAttribute("type");
            for (i in e.validator.methods) n = s.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()), this.normalizeAttributeRule(r, a, i, n);
            return r
        },
        staticRules: function (t) {
            var i = {}, n = e.data(t.form, "validator");
            return n.settings.rules && (i = e.validator.normalizeRule(n.settings.rules[t.name]) || {}), i
        },
        normalizeRules: function (t, i) {
            return e.each(t, function (n, r) {
                if (!1 === r) return void delete t[n];
                if (r.param || r.depends) {
                    var s = !0;
                    switch (typeof r.depends) {
                        case"string":
                            s = !!e(r.depends, i.form).length;
                            break;
                        case"function":
                            s = r.depends.call(i, i)
                    }
                    s ? t[n] = void 0 === r.param || r.param : (e.data(i.form, "validator").resetElements(e(i)), delete t[n])
                }
            }), e.each(t, function (n, r) {
                t[n] = e.isFunction(r) && "normalizer" !== n ? r(i) : r
            }), e.each(["minlength", "maxlength"], function () {
                t[this] && (t[this] = Number(t[this]))
            }), e.each(["rangelength", "range"], function () {
                var i;
                t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (i = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/), t[this] = [Number(i[0]), Number(i[1])]))
            }), e.validator.autoCreateRanges && (null != t.min && null != t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), null != t.minlength && null != t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
        },
        normalizeRule: function (t) {
            if ("string" == typeof t) {
                var i = {};
                e.each(t.split(/\s/), function () {
                    i[this] = !0
                }), t = i
            }
            return t
        },
        addMethod: function (t, i, n) {
            e.validator.methods[t] = i, e.validator.messages[t] = void 0 !== n ? n : e.validator.messages[t], i.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t))
        },
        methods: {
            required: function (t, i, n) {
                if (!this.depend(n, i)) return "dependency-mismatch";
                if ("select" === i.nodeName.toLowerCase()) {
                    var r = e(i).val();
                    return r && r.length > 0
                }
                return this.checkable(i) ? this.getLength(t, i) > 0 : t.length > 0
            }, email: function (e, t) {
                return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
            }, url: function (e, t) {
                return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(e)
            }, date: function (e, t) {
                return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString())
            }, dateISO: function (e, t) {
                return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
            }, number: function (e, t) {
                return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
            }, digits: function (e, t) {
                return this.optional(t) || /^\d+$/.test(e)
            }, minlength: function (t, i, n) {
                var r = e.isArray(t) ? t.length : this.getLength(t, i);
                return this.optional(i) || r >= n
            }, maxlength: function (t, i, n) {
                var r = e.isArray(t) ? t.length : this.getLength(t, i);
                return this.optional(i) || r <= n
            }, rangelength: function (t, i, n) {
                var r = e.isArray(t) ? t.length : this.getLength(t, i);
                return this.optional(i) || r >= n[0] && r <= n[1]
            }, min: function (e, t, i) {
                return this.optional(t) || e >= i
            }, max: function (e, t, i) {
                return this.optional(t) || e <= i
            }, range: function (e, t, i) {
                return this.optional(t) || e >= i[0] && e <= i[1]
            }, step: function (t, i, n) {
                var r, s = e(i).attr("type"), a = "Step attribute on input type " + s + " is not supported.",
                    o = ["text", "number", "range"], l = new RegExp("\\b" + s + "\\b"), d = s && !l.test(o.join()),
                    c = function (e) {
                        var t = ("" + e).match(/(?:\.(\d+))?$/);
                        return t && t[1] ? t[1].length : 0
                    }, u = function (e) {
                        return Math.round(e * Math.pow(10, r))
                    }, h = !0;
                if (d) throw new Error(a);
                return r = c(n), (c(t) > r || u(t) % u(n) != 0) && (h = !1), this.optional(i) || h
            }, equalTo: function (t, i, n) {
                var r = e(n);
                return this.settings.onfocusout && r.not(".validate-equalTo-blur").length && r.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
                    e(i).valid()
                }), t === r.val()
            }, remote: function (t, i, n, r) {
                if (this.optional(i)) return "dependency-mismatch";
                r = "string" == typeof r && r || "remote";
                var s, a, o, l = this.previousValue(i, r);
                return this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), l.originalMessage = l.originalMessage || this.settings.messages[i.name][r], this.settings.messages[i.name][r] = l.message, n = "string" == typeof n && {url: n} || n, o = e.param(e.extend({data: t}, n.data)), l.old === o ? l.valid : (l.old = o, s = this, this.startRequest(i), a = {}, a[i.name] = t, e.ajax(e.extend(!0, {
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: a,
                    context: s.currentForm,
                    success: function (e) {
                        var n, a, o, d = !0 === e || "true" === e;
                        s.settings.messages[i.name][r] = l.originalMessage, d ? (o = s.formSubmitted, s.resetInternals(), s.toHide = s.errorsFor(i), s.formSubmitted = o, s.successList.push(i), s.invalid[i.name] = !1, s.showErrors()) : (n = {}, a = e || s.defaultMessage(i, {
                            method: r,
                            parameters: t
                        }), n[i.name] = l.message = a, s.invalid[i.name] = !0, s.showErrors(n)), l.valid = d, s.stopRequest(i, d)
                    }
                }, n)), "pending")
            }
        }
    });
    var t, i = {};
    return e.ajaxPrefilter ? e.ajaxPrefilter(function (e, t, n) {
        var r = e.port;
        "abort" === e.mode && (i[r] && i[r].abort(), i[r] = n)
    }) : (t = e.ajax, e.ajax = function (n) {
        var r = ("mode" in n ? n : e.ajaxSettings).mode, s = ("port" in n ? n : e.ajaxSettings).port;
        return "abort" === r ? (i[s] && i[s].abort(), i[s] = t.apply(this, arguments), i[s]) : t.apply(this, arguments)
    }), e
});
var DateFormatter;
!function () {
    "use strict";
    var e, t, i, n, r, s, a;
    s = 864e5, a = 3600, e = function (e, t) {
        return "string" == typeof e && "string" == typeof t && e.toLowerCase() === t.toLowerCase()
    }, t = function (e, i, n) {
        var r = n || "0", s = e.toString();
        return s.length < i ? t(r + s, i) : s
    }, i = function (e) {
        var t, n;
        for (e = e || {}, t = 1; t < arguments.length; t++) if (n = arguments[t]) for (var r in n) n.hasOwnProperty(r) && ("object" == typeof n[r] ? i(e[r], n[r]) : e[r] = n[r]);
        return e
    }, n = function (e, t) {
        for (var i = 0; i < t.length; i++) if (t[i].toLowerCase() === e.toLowerCase()) return i;
        return -1
    }, r = {
        dateSettings: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            meridiem: ["AM", "PM"],
            ordinal: function (e) {
                var t = e % 10, i = {1: "st", 2: "nd", 3: "rd"};
                return 1 !== Math.floor(e % 100 / 10) && i[t] ? i[t] : "th"
            }
        },
        separators: /[ \-+\/\.T:@]/g,
        validParts: /[dDjlNSwzWFmMntLoYyaABgGhHisueTIOPZcrU]/g,
        intParts: /[djwNzmnyYhHgGis]/g,
        tzParts: /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        tzClip: /[^-+\dA-Z]/g
    }, (DateFormatter = function (e) {
        var t = this, n = i(r, e);
        t.dateSettings = n.dateSettings, t.separators = n.separators, t.validParts = n.validParts, t.intParts = n.intParts, t.tzParts = n.tzParts, t.tzClip = n.tzClip
    }).prototype = {
        constructor: DateFormatter, getMonth: function (e) {
            var t, i = this;
            return 0 === (t = n(e, i.dateSettings.monthsShort) + 1) && (t = n(e, i.dateSettings.months) + 1), t
        }, parseDate: function (t, i) {
            var n, r, s, a, o, l, d, c, u, h, p = this, f = !1, m = !1, g = p.dateSettings,
                v = {date: null, year: null, month: null, day: null, hour: 0, min: 0, sec: 0};
            if (!t) return null;
            if (t instanceof Date) return t;
            if ("U" === i) return (s = parseInt(t)) ? new Date(1e3 * s) : t;
            switch (typeof t) {
                case"number":
                    return new Date(t);
                case"string":
                    break;
                default:
                    return null
            }
            if (!(n = i.match(p.validParts)) || 0 === n.length) throw new Error("Invalid date format definition.");
            for (r = t.replace(p.separators, "\0").split("\0"), s = 0; s < r.length; s++) switch (a = r[s], o = parseInt(a), n[s]) {
                case"y":
                case"Y":
                    if (!o) return null;
                    u = a.length, v.year = 2 === u ? parseInt((70 > o ? "20" : "19") + a) : o, f = !0;
                    break;
                case"m":
                case"n":
                case"M":
                case"F":
                    if (isNaN(o)) {
                        if (!((l = p.getMonth(a)) > 0)) return null;
                        v.month = l
                    } else {
                        if (!(o >= 1 && 12 >= o)) return null;
                        v.month = o
                    }
                    f = !0;
                    break;
                case"d":
                case"j":
                    if (!(o >= 1 && 31 >= o)) return null;
                    v.day = o, f = !0
                    ;
                    break;
                case"g":
                case"h":
                    if (d = n.indexOf("a") > -1 ? n.indexOf("a") : n.indexOf("A") > -1 ? n.indexOf("A") : -1, h = r[d], d > -1) c = e(h, g.meridiem[0]) ? 0 : e(h, g.meridiem[1]) ? 12 : -1, o >= 1 && 12 >= o && c > -1 ? v.hour = o + c - 1 : o >= 0 && 23 >= o && (v.hour = o); else {
                        if (!(o >= 0 && 23 >= o)) return null;
                        v.hour = o
                    }
                    m = !0;
                    break;
                case"G":
                case"H":
                    if (!(o >= 0 && 23 >= o)) return null;
                    v.hour = o, m = !0;
                    break;
                case"i":
                    if (!(o >= 0 && 59 >= o)) return null;
                    v.min = o, m = !0;
                    break;
                case"s":
                    if (!(o >= 0 && 59 >= o)) return null;
                    v.sec = o, m = !0
            }
            if (!0 === f && v.year && v.month && v.day) v.date = new Date(v.year, v.month - 1, v.day, v.hour, v.min, v.sec, 0); else {
                if (!0 !== m) return null;
                v.date = new Date(0, 0, 0, v.hour, v.min, v.sec, 0)
            }
            return v.date
        }, guessDate: function (e, t) {
            if ("string" != typeof e) return e;
            var i, n, r, s, a, o, l = this, d = e.replace(l.separators, "\0").split("\0"), c = /^[djmn]/g,
                u = t.match(l.validParts), h = new Date, p = 0;
            if (!c.test(u[0])) return e;
            for (r = 0; r < d.length; r++) {
                if (p = 2, a = d[r], o = parseInt(a.substr(0, 2)), isNaN(o)) return null;
                switch (r) {
                    case 0:
                        "m" === u[0] || "n" === u[0] ? h.setMonth(o - 1) : h.setDate(o);
                        break;
                    case 1:
                        "m" === u[0] || "n" === u[0] ? h.setDate(o) : h.setMonth(o - 1);
                        break;
                    case 2:
                        if (n = h.getFullYear(), i = a.length, p = 4 > i ? i : 4, !(n = parseInt(4 > i ? n.toString().substr(0, 4 - i) + a : a.substr(0, 4)))) return null;
                        h.setFullYear(n);
                        break;
                    case 3:
                        h.setHours(o);
                        break;
                    case 4:
                        h.setMinutes(o);
                        break;
                    case 5:
                        h.setSeconds(o)
                }
                (s = a.substr(p)).length > 0 && d.splice(r + 1, 0, s)
            }
            return h
        }, parseFormat: function (e, i) {
            var n, r = this, o = r.dateSettings, l = /\\?(.?)/gi, d = function (e, t) {
                return n[e] ? n[e]() : t
            };
            return n = {
                d: function () {
                    return t(n.j(), 2)
                }, D: function () {
                    return o.daysShort[n.w()]
                }, j: function () {
                    return i.getDate()
                }, l: function () {
                    return o.days[n.w()]
                }, N: function () {
                    return n.w() || 7
                }, w: function () {
                    return i.getDay()
                }, z: function () {
                    var e = new Date(n.Y(), n.n() - 1, n.j()), t = new Date(n.Y(), 0, 1);
                    return Math.round((e - t) / s)
                }, W: function () {
                    var e = new Date(n.Y(), n.n() - 1, n.j() - n.N() + 3), i = new Date(e.getFullYear(), 0, 4);
                    return t(1 + Math.round((e - i) / s / 7), 2)
                }, F: function () {
                    return o.months[i.getMonth()]
                }, m: function () {
                    return t(n.n(), 2)
                }, M: function () {
                    return o.monthsShort[i.getMonth()]
                }, n: function () {
                    return i.getMonth() + 1
                }, t: function () {
                    return new Date(n.Y(), n.n(), 0).getDate()
                }, L: function () {
                    var e = n.Y();
                    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0 ? 1 : 0
                }, o: function () {
                    var e = n.n(), t = n.W();
                    return n.Y() + (12 === e && 9 > t ? 1 : 1 === e && t > 9 ? -1 : 0)
                }, Y: function () {
                    return i.getFullYear()
                }, y: function () {
                    return n.Y().toString().slice(-2)
                }, a: function () {
                    return n.A().toLowerCase()
                }, A: function () {
                    var e = n.G() < 12 ? 0 : 1;
                    return o.meridiem[e]
                }, B: function () {
                    var e = i.getUTCHours() * a, n = 60 * i.getUTCMinutes(), r = i.getUTCSeconds();
                    return t(Math.floor((e + n + r + a) / 86.4) % 1e3, 3)
                }, g: function () {
                    return n.G() % 12 || 12
                }, G: function () {
                    return i.getHours()
                }, h: function () {
                    return t(n.g(), 2)
                }, H: function () {
                    return t(n.G(), 2)
                }, i: function () {
                    return t(i.getMinutes(), 2)
                }, s: function () {
                    return t(i.getSeconds(), 2)
                }, u: function () {
                    return t(1e3 * i.getMilliseconds(), 6)
                }, e: function () {
                    return /\((.*)\)/.exec(String(i))[1] || "Coordinated Universal Time"
                }, I: function () {
                    return new Date(n.Y(), 0) - Date.UTC(n.Y(), 0) != new Date(n.Y(), 6) - Date.UTC(n.Y(), 6) ? 1 : 0
                }, O: function () {
                    var e = i.getTimezoneOffset(), n = Math.abs(e);
                    return (e > 0 ? "-" : "+") + t(100 * Math.floor(n / 60) + n % 60, 4)
                }, P: function () {
                    var e = n.O();
                    return e.substr(0, 3) + ":" + e.substr(3, 2)
                }, T: function () {
                    return (String(i).match(r.tzParts) || [""]).pop().replace(r.tzClip, "") || "UTC"
                }, Z: function () {
                    return 60 * -i.getTimezoneOffset()
                }, c: function () {
                    return "Y-m-d\\TH:i:sP".replace(l, d)
                }, r: function () {
                    return "D, d M Y H:i:s O".replace(l, d)
                }, U: function () {
                    return i.getTime() / 1e3 || 0
                }
            }, d(e, e)
        }, formatDate: function (e, t) {
            var i, n, r, s, a, o = this, l = "";
            if ("string" == typeof e && !(e = o.parseDate(e, t))) return null;
            if (e instanceof Date) {
                for (r = t.length, i = 0; r > i; i++) "S" !== (a = t.charAt(i)) && "\\" !== a && (i > 0 && "\\" === t.charAt(i - 1) ? l += a : (s = o.parseFormat(a, e), i !== r - 1 && o.intParts.test(a) && "S" === t.charAt(i + 1) && (n = parseInt(s) || 0, s += o.dateSettings.ordinal(n)), l += s));
                return l
            }
            return ""
        }
    }
}();
var datetimepickerFactory = function (e) {
    "use strict";

    function t(e, t, i) {
        this.date = e, this.desc = t, this.style = i
    }

    var i = {
        i18n: {
            ar: {
                months: ["كانون الثاني", "شباط", "آذار", "نيسان", "مايو", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"],
                dayOfWeekShort: ["ن", "ث", "ع", "خ", "ج", "س", "ح"],
                dayOfWeek: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت", "الأحد"]
            },
            ro: {
                months: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
                dayOfWeekShort: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ"],
                dayOfWeek: ["Duminică", "Luni", "Marţi", "Miercuri", "Joi", "Vineri", "Sâmbătă"]
            },
            id: {
                months: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
                dayOfWeekShort: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
                dayOfWeek: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
            },
            is: {
                months: ["Janúar", "Febrúar", "Mars", "Apríl", "Maí", "Júní", "Júlí", "Ágúst", "September", "Október", "Nóvember", "Desember"],
                dayOfWeekShort: ["Sun", "Mán", "Þrið", "Mið", "Fim", "Fös", "Lau"],
                dayOfWeek: ["Sunnudagur", "Mánudagur", "Þriðjudagur", "Miðvikudagur", "Fimmtudagur", "Föstudagur", "Laugardagur"]
            },
            bg: {
                months: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
                dayOfWeekShort: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                dayOfWeek: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"]
            },
            fa: {
                months: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
                dayOfWeekShort: ["یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"],
                dayOfWeek: ["یک‌شنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه", "یک‌شنبه"]
            },
            ru: {
                months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                dayOfWeekShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                dayOfWeek: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
            },
            uk: {
                months: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
                dayOfWeekShort: ["Ндл", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Сбт"],
                dayOfWeek: ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"]
            },
            en: {
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                dayOfWeekShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            },
            el: {
                months: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
                dayOfWeekShort: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"],
                dayOfWeek: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"]
            },
            de: {
                months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
                dayOfWeekShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
                dayOfWeek: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
            },
            nl: {
                months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
                dayOfWeekShort: ["zo", "ma", "di", "wo", "do", "vr", "za"],
                dayOfWeek: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]
            },
            tr: {
                months: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
                dayOfWeekShort: ["Paz", "Pts", "Sal", "Çar", "Per", "Cum", "Cts"],
                dayOfWeek: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
            },
            fr: {
                months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
                dayOfWeekShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
                dayOfWeek: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
            },
            es: {
                months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                dayOfWeekShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
                dayOfWeek: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
            },
            th: {
                months: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
                dayOfWeekShort: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
                dayOfWeek: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์", "อาทิตย์"]
            },
            pl: {
                months: ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"],
                dayOfWeekShort: ["nd", "pn", "wt", "śr", "cz", "pt", "sb"],
                dayOfWeek: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]
            },
            pt: {
                months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                dayOfWeekShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
                dayOfWeek: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
            },
            ch: {
                months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                dayOfWeekShort: ["日", "一", "二", "三", "四", "五", "六"]
            },
            se: {
                months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
                dayOfWeekShort: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"]
            },
            km: {
                months: ["មករា​", "កុម្ភៈ", "មិនា​", "មេសា​", "ឧសភា​", "មិថុនា​", "កក្កដា​", "សីហា​", "កញ្ញា​", "តុលា​", "វិច្ឆិកា", "ធ្នូ​"],
                dayOfWeekShort: ["អាទិ​", "ច័ន្ទ​", "អង្គារ​", "ពុធ​", "ព្រហ​​", "សុក្រ​", "សៅរ៍"],
                dayOfWeek: ["អាទិត្យ​", "ច័ន្ទ​", "អង្គារ​", "ពុធ​", "ព្រហស្បតិ៍​", "សុក្រ​", "សៅរ៍"]
            },
            kr: {
                months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                dayOfWeekShort: ["일", "월", "화", "수", "목", "금", "토"],
                dayOfWeek: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
            },
            it: {
                months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
                dayOfWeekShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
                dayOfWeek: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"]
            },
            da: {
                months: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"],
                dayOfWeekShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
                dayOfWeek: ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"]
            },
            no: {
                months: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
                dayOfWeekShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
                dayOfWeek: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"]
            },
            ja: {
                months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                dayOfWeekShort: ["日", "月", "火", "水", "木", "金", "土"],
                dayOfWeek: ["日曜", "月曜", "火曜", "水曜", "木曜", "金曜", "土曜"]
            },
            vi: {
                months: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
                dayOfWeekShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
                dayOfWeek: ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"]
            },
            sl: {
                months: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"],
                dayOfWeekShort: ["Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"],
                dayOfWeek: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "Četrtek", "Petek", "Sobota"]
            },
            cs: {
                months: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
                dayOfWeekShort: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"]
            },
            hu: {
                months: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
                dayOfWeekShort: ["Va", "Hé", "Ke", "Sze", "Cs", "Pé", "Szo"],
                dayOfWeek: ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"]
            },
            az: {
                months: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"],
                dayOfWeekShort: ["B", "Be", "Ça", "Ç", "Ca", "C", "Ş"],
                dayOfWeek: ["Bazar", "Bazar ertəsi", "Çərşənbə axşamı", "Çərşənbə", "Cümə axşamı", "Cümə", "Şənbə"]
            },
            bs: {
                months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
                dayOfWeekShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
                dayOfWeek: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"]
            },
            ca: {
                months: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
                dayOfWeekShort: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
                dayOfWeek: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"]
            },
            "en-GB": {
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                dayOfWeekShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            },
            et: {
                months: ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"],
                dayOfWeekShort: ["P", "E", "T", "K", "N", "R", "L"],
                dayOfWeek: ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"]
            },
            eu: {
                months: ["Urtarrila", "Otsaila", "Martxoa", "Apirila", "Maiatza", "Ekaina", "Uztaila", "Abuztua", "Iraila", "Urria", "Azaroa", "Abendua"],
                dayOfWeekShort: ["Ig.", "Al.", "Ar.", "Az.", "Og.", "Or.", "La."],
                dayOfWeek: ["Igandea", "Astelehena", "Asteartea", "Asteazkena", "Osteguna", "Ostirala", "Larunbata"]
            },
            fi: {
                months: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
                dayOfWeekShort: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
                dayOfWeek: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"]
            },
            gl: {
                months: ["Xan", "Feb", "Maz", "Abr", "Mai", "Xun", "Xul", "Ago", "Set", "Out", "Nov", "Dec"],
                dayOfWeekShort: ["Dom", "Lun", "Mar", "Mer", "Xov", "Ven", "Sab"],
                dayOfWeek: ["Domingo", "Luns", "Martes", "Mércores", "Xoves", "Venres", "Sábado"]
            },
            hr: {
                months: ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
                dayOfWeekShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
                dayOfWeek: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"]
            },
            ko: {
                months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                dayOfWeekShort: ["일", "월", "화", "수", "목", "금", "토"],
                dayOfWeek: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
            },
            lt: {
                months: ["Sausio", "Vasario", "Kovo", "Balandžio", "Gegužės", "Birželio", "Liepos", "Rugpjūčio", "Rugsėjo", "Spalio", "Lapkričio", "Gruodžio"],
                dayOfWeekShort: ["Sek", "Pir", "Ant", "Tre", "Ket", "Pen", "Šeš"],
                dayOfWeek: ["Sekmadienis", "Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis"]
            },
            lv: {
                months: ["Janvāris", "Februāris", "Marts", "Aprīlis ", "Maijs", "Jūnijs", "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"],
                dayOfWeekShort: ["Sv", "Pr", "Ot", "Tr", "Ct", "Pk", "St"],
                dayOfWeek: ["Svētdiena", "Pirmdiena", "Otrdiena", "Trešdiena", "Ceturtdiena", "Piektdiena", "Sestdiena"]
            },
            mk: {
                months: ["јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември"],
                dayOfWeekShort: ["нед", "пон", "вто", "сре", "чет", "пет", "саб"],
                dayOfWeek: ["Недела", "Понеделник", "Вторник", "Среда", "Четврток", "Петок", "Сабота"]
            },
            mn: {
                months: ["1-р сар", "2-р сар", "3-р сар", "4-р сар", "5-р сар", "6-р сар", "7-р сар", "8-р сар", "9-р сар", "10-р сар", "11-р сар", "12-р сар"],
                dayOfWeekShort: ["Дав", "Мяг", "Лха", "Пүр", "Бсн", "Бям", "Ням"],
                dayOfWeek: ["Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба", "Ням"]
            },
            "pt-BR": {
                months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                dayOfWeekShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
                dayOfWeek: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
            },
            sk: {
                months: ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"],
                dayOfWeekShort: ["Ne", "Po", "Ut", "St", "Št", "Pi", "So"],
                dayOfWeek: ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"]
            },
            sq: {
                months: ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor"],
                dayOfWeekShort: ["Die", "Hën", "Mar", "Mër", "Enj", "Pre", "Shtu"],
                dayOfWeek: ["E Diel", "E Hënë", "E Martē", "E Mërkurë", "E Enjte", "E Premte", "E Shtunë"]
            },
            "sr-YU": {
                months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
                dayOfWeekShort: ["Ned", "Pon", "Uto", "Sre", "čet", "Pet", "Sub"],
                dayOfWeek: ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak", "Subota"]
            },
            sr: {
                months: ["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"],
                dayOfWeekShort: ["нед", "пон", "уто", "сре", "чет", "пет", "суб"],
                dayOfWeek: ["Недеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота"]
            },
            sv: {
                months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
                dayOfWeekShort: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"],
                dayOfWeek: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"]
            },
            "zh-TW": {
                months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                dayOfWeekShort: ["日", "一", "二", "三", "四", "五", "六"],
                dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
            },
            zh: {
                months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                dayOfWeekShort: ["日", "一", "二", "三", "四", "五", "六"],
                dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
            },
            ug: {
                months: ["1-ئاي", "2-ئاي", "3-ئاي", "4-ئاي", "5-ئاي", "6-ئاي", "7-ئاي", "8-ئاي", "9-ئاي", "10-ئاي", "11-ئاي", "12-ئاي"],
                dayOfWeek: ["يەكشەنبە", "دۈشەنبە", "سەيشەنبە", "چارشەنبە", "پەيشەنبە", "جۈمە", "شەنبە"]
            },
            he: {
                months: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
                dayOfWeekShort: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "שבת"],
                dayOfWeek: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת", "ראשון"]
            },
            hy: {
                months: ["Հունվար", "Փետրվար", "Մարտ", "Ապրիլ", "Մայիս", "Հունիս", "Հուլիս", "Օգոստոս", "Սեպտեմբեր", "Հոկտեմբեր", "Նոյեմբեր", "Դեկտեմբեր"],
                dayOfWeekShort: ["Կի", "Երկ", "Երք", "Չոր", "Հնգ", "Ուրբ", "Շբթ"],
                dayOfWeek: ["Կիրակի", "Երկուշաբթի", "Երեքշաբթի", "Չորեքշաբթի", "Հինգշաբթի", "Ուրբաթ", "Շաբաթ"]
            },
            kg: {
                months: ["Үчтүн айы", "Бирдин айы", "Жалган Куран", "Чын Куран", "Бугу", "Кулжа", "Теке", "Баш Оона", "Аяк Оона", "Тогуздун айы", "Жетинин айы", "Бештин айы"],
                dayOfWeekShort: ["Жек", "Дүй", "Шей", "Шар", "Бей", "Жум", "Ише"],
                dayOfWeek: ["Жекшемб", "Дүйшөмб", "Шейшемб", "Шаршемб", "Бейшемби", "Жума", "Ишенб"]
            },
            rm: {
                months: ["Schaner", "Favrer", "Mars", "Avrigl", "Matg", "Zercladur", "Fanadur", "Avust", "Settember", "October", "November", "December"],
                dayOfWeekShort: ["Du", "Gli", "Ma", "Me", "Gie", "Ve", "So"],
                dayOfWeek: ["Dumengia", "Glindesdi", "Mardi", "Mesemna", "Gievgia", "Venderdi", "Sonda"]
            },
            ka: {
                months: ["იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი", "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"],
                dayOfWeekShort: ["კვ", "ორშ", "სამშ", "ოთხ", "ხუთ", "პარ", "შაბ"],
                dayOfWeek: ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"]
            }
        },
        ownerDocument: document,
        contentWindow: window,
        value: "",
        rtl: !1,
        format: "Y/m/d H:i",
        formatTime: "H:i",
        formatDate: "Y/m/d",
        startDate: !1,
        step: 60,
        monthChangeSpinner: !0,
        closeOnDateSelect: !1,
        closeOnTimeSelect: !0,
        closeOnWithoutClick: !0,
        closeOnInputClick: !0,
        openOnFocus: !0,
        timepicker: !0,
        datepicker: !0,
        weeks: !1,
        defaultTime: !1,
        defaultDate: !1,
        minDate: !1,
        maxDate: !1,
        minTime: !1,
        maxTime: !1,
        minDateTime: !1,
        maxDateTime: !1,
        allowTimes: [],
        opened: !1,
        initTime: !0,
        inline: !1,
        theme: "",
        touchMovedThreshold: 5,
        onSelectDate: function () {
        },
        onSelectTime: function () {
        },
        onChangeMonth: function () {
        },
        onGetWeekOfYear: function () {
        },
        onChangeYear: function () {
        },
        onChangeDateTime: function () {
        },
        onShow: function () {
        },
        onClose: function () {
        },
        onGenerate: function () {
        },
        withoutCopyright: !0,
        inverseButton: !1,
        hours12: !1,
        next: "xdsoft_next",
        prev: "xdsoft_prev",
        dayOfWeekStart: 0,
        parentID: "body",
        timeHeightInTimePicker: 25,
        timepickerScrollbar: !0,
        todayButton: !0,
        prevButton: !0,
        nextButton: !0,
        defaultSelect: !0,
        scrollMonth: !0,
        scrollTime: !0,
        scrollInput: !0,
        lazyInit: !1,
        mask: !1,
        validateOnBlur: !0,
        allowBlank: !0,
        yearStart: 1950,
        yearEnd: 2050,
        monthStart: 0,
        monthEnd: 11,
        style: "",
        id: "",
        fixed: !1,
        roundTime: "round",
        className: "",
        weekends: [],
        highlightedDates: [],
        highlightedPeriods: [],
        allowDates: [],
        allowDateRe: null,
        disabledDates: [],
        disabledWeekDays: [],
        yearOffset: 0,
        beforeShowDay: null,
        enterLikeTab: !0,
        showApplyButton: !1
    }, n = null, r = null, s = "en", a = {meridiem: ["AM", "PM"]}, o = function () {
        var t = i.i18n[s], o = {
            days: t.dayOfWeek,
            daysShort: t.dayOfWeekShort,
            months: t.months,
            monthsShort: e.map(t.months, function (e) {
                return e.substring(0, 3)
            })
        };
        "function" == typeof DateFormatter && (n = r = new DateFormatter({dateSettings: e.extend({}, a, o)}))
    }, l = {
        moment: {
            default_options: {format: "YYYY/MM/DD HH:mm", formatDate: "YYYY/MM/DD", formatTime: "HH:mm"},
            formatter: {
                parseDate: function (e, t) {
                    if (c(t)) return r.parseDate(e, t);
                    var i = moment(e, t);
                    return !!i.isValid() && i.toDate()
                }, formatDate: function (e, t) {
                    return c(t) ? r.formatDate(e, t) : moment(e).format(t)
                }, formatMask: function (e) {
                    return e.replace(/Y{4}/g, "9999").replace(/Y{2}/g, "99").replace(/M{2}/g, "19").replace(/D{2}/g, "39").replace(/H{2}/g, "29").replace(/m{2}/g, "59").replace(/s{2}/g, "59")
                }
            }
        }
    };
    e.datetimepicker = {
        setLocale: function (e) {
            var t = i.i18n[e] ? e : "en";
            s !== t && (s = t, o())
        }, setDateFormatter: function (t) {
            if ("string" == typeof t && l.hasOwnProperty(t)) {
                var r = l[t];
                e.extend(i, r.default_options), n = r.formatter
            } else n = t
        }
    };
    var d = {
        RFC_2822: "D, d M Y H:i:s O",
        ATOM: "Y-m-dTH:i:sP",
        ISO_8601: "Y-m-dTH:i:sO",
        RFC_822: "D, d M y H:i:s O",
        RFC_850: "l, d-M-y H:i:s T",
        RFC_1036: "D, d M y H:i:s O",
        RFC_1123: "D, d M Y H:i:s O",
        RSS: "D, d M Y H:i:s O",
        W3C: "Y-m-dTH:i:sP"
    }, c = function (e) {
        return -1 !== Object.values(d).indexOf(e)
    };
    e.extend(e.datetimepicker, d), o(), window.getComputedStyle || (window.getComputedStyle = function (e) {
        return this.el = e, this.getPropertyValue = function (t) {
            var i = /(-([a-z]))/g;
            return "float" === t && (t = "styleFloat"), i.test(t) && (t = t.replace(i, function (e, t, i) {
                return i.toUpperCase()
            })), e.currentStyle[t] || null
        }, this
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function (e, t) {
        var i, n;
        for (i = t || 0, n = this.length; i < n; i += 1) if (this[i] === e) return i;
        return -1
    }), Date.prototype.countDaysInMonth = function () {
        return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate()
    }, e.fn.xdsoftScroller = function (t, i) {
        return this.each(function () {
            var n, r, s, a, o, l = e(this), d = function (e) {
                var t, i = {x: 0, y: 0};
                return "touchstart" === e.type || "touchmove" === e.type || "touchend" === e.type || "touchcancel" === e.type ? (t = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0], i.x = t.clientX, i.y = t.clientY) : "mousedown" !== e.type && "mouseup" !== e.type && "mousemove" !== e.type && "mouseover" !== e.type && "mouseout" !== e.type && "mouseenter" !== e.type && "mouseleave" !== e.type || (i.x = e.clientX, i.y = e.clientY), i
            }, c = 100, u = !1, h = 0, p = 0, f = 0, m = !1, g = 0, v = function () {
            };
            "hide" !== i ? (e(this).hasClass("xdsoft_scroller_box") || (n = l.children().eq(0), r = l[0].clientHeight, s = n[0].offsetHeight, a = e('<div class="xdsoft_scrollbar"></div>'), o = e('<div class="xdsoft_scroller"></div>'), a.append(o), l.addClass("xdsoft_scroller_box").append(a), v = function (e) {
                var t = d(e).y - h + g;
                t < 0 && (t = 0), t + o[0].offsetHeight > f && (t = f - o[0].offsetHeight), l.trigger("scroll_element.xdsoft_scroller", [c ? t / c : 0])
            }, o.on("touchstart.xdsoft_scroller mousedown.xdsoft_scroller", function (n) {
                r || l.trigger("resize_scroll.xdsoft_scroller", [i]), h = d(n).y, g = parseInt(o.css("margin-top"), 10), f = a[0].offsetHeight, "mousedown" === n.type || "touchstart" === n.type ? (t.ownerDocument && e(t.ownerDocument.body).addClass("xdsoft_noselect"), e([t.ownerDocument.body, t.contentWindow]).on("touchend mouseup.xdsoft_scroller", function i() {
                    e([t.ownerDocument.body, t.contentWindow]).off("touchend mouseup.xdsoft_scroller", i).off("mousemove.xdsoft_scroller", v).removeClass("xdsoft_noselect")
                }), e(t.ownerDocument.body).on("mousemove.xdsoft_scroller", v)) : (m = !0, n.stopPropagation(), n.preventDefault())
            }).on("touchmove", function (e) {
                m && (e.preventDefault(), v(e))
            }).on("touchend touchcancel", function () {
                m = !1, g = 0
            }), l.on("scroll_element.xdsoft_scroller", function (e, t) {
                r || l.trigger("resize_scroll.xdsoft_scroller", [t, !0]), t = t > 1 ? 1 : t < 0 || isNaN(t) ? 0 : t, o.css("margin-top", c * t), setTimeout(function () {
                    n.css("marginTop", -parseInt((n[0].offsetHeight - r) * t, 10))
                }, 10)
            }).on("resize_scroll.xdsoft_scroller", function (e, t, i) {
                var d, u;
                r = l[0].clientHeight, s = n[0].offsetHeight, u = (d = r / s) * a[0].offsetHeight, d > 1 ? o.hide() : (o.show(), o.css("height", parseInt(u > 10 ? u : 10, 10)), c = a[0].offsetHeight - o[0].offsetHeight, !0 !== i && l.trigger("scroll_element.xdsoft_scroller", [t || Math.abs(parseInt(n.css("marginTop"), 10)) / (s - r)]))
            }), l.on("mousewheel", function (e) {
                var t = Math.abs(parseInt(n.css("marginTop"), 10));
                return (t -= 20 * e.deltaY) < 0 && (t = 0), l.trigger("scroll_element.xdsoft_scroller", [t / (s - r)]), e.stopPropagation(), !1
            }), l.on("touchstart", function (e) {
                u = d(e), p = Math.abs(parseInt(n.css("marginTop"), 10))
            }), l.on("touchmove", function (e) {
                if (u) {
                    e.preventDefault();
                    var t = d(e);
                    l.trigger("scroll_element.xdsoft_scroller", [(p - (t.y - u.y)) / (s - r)])
                }
            }), l.on("touchend touchcancel", function () {
                u = !1, p = 0
            })), l.trigger("resize_scroll.xdsoft_scroller", [i])) : l.find(".xdsoft_scrollbar").hide()
        })
    }, e.fn.datetimepicker = function (r, a) {
        var o, l, d = this, c = 48, u = 96, h = 105, p = 17, f = 46, m = 13, g = 8, v = 9, y = !1,
            b = e.isPlainObject(r) || !r ? e.extend(!0, {}, i, r) : e.extend(!0, {}, i), _ = 0, w = function (e) {
                e.on("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart", function t() {
                    e.is(":disabled") || e.data("xdsoft_datetimepicker") || (clearTimeout(_), _ = setTimeout(function () {
                        e.data("xdsoft_datetimepicker") || o(e), e.off("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart", t).trigger("open.xdsoft")
                    }, 100))
                })
            };
        return o = function (i) {
            function a() {
                var e, t = !1;
                return b.startDate ? t = x.strToDate(b.startDate) : (t = b.value || (i && i.val && i.val() ? i.val() : "")) ? (t = x.strToDateTime(t), b.yearOffset && (t = new Date(t.getFullYear() - b.yearOffset, t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()))) : b.defaultDate && (t = x.strToDateTime(b.defaultDate), b.defaultTime && (e = x.strtotime(b.defaultTime), t.setHours(e.getHours()), t.setMinutes(e.getMinutes()))), t && x.isValidDate(t) ? E.data("changed", !0) : t = "", t || 0
            }

            function o(t) {
                var r = function (e, t) {
                    var i = e.replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g, "\\$1").replace(/_/g, "{digit+}").replace(/([0-9]{1})/g, "{digit$1}").replace(/\{digit([0-9]{1})\}/g, "[0-$1_]{1}").replace(/\{digit[\+]\}/g, "[0-9_]{1}");
                    return new RegExp(i).test(t)
                }, s = function (e, i) {
                    if (!(e = "string" == typeof e || e instanceof String ? t.ownerDocument.getElementById(e) : e)) return !1;
                    if (e.createTextRange) {
                        var n = e.createTextRange();
                        return n.collapse(!0), n.moveEnd("character", i), n.moveStart("character", i), n.select(), !0
                    }
                    return !!e.setSelectionRange && (e.setSelectionRange(i, i), !0)
                };
                t.mask && i.off("keydown.xdsoft"), !0 === t.mask && (n.formatMask ? t.mask = n.formatMask(t.format) : t.mask = t.format.replace(/Y/g, "9999").replace(/F/g, "9999").replace(/m/g, "19").replace(/d/g, "39").replace(/H/g, "29").replace(/i/g, "59").replace(/s/g, "59")), "string" === e.type(t.mask) && (r(t.mask, i.val()) || (i.val(t.mask.replace(/[0-9]/g, "_")), s(i[0], 0)), i.on("paste.xdsoft", function (n) {
                    var a = (n.clipboardData || n.originalEvent.clipboardData || window.clipboardData).getData("text"),
                        o = this.value, l = this.selectionStart;
                    return o = o.substr(0, l) + a + o.substr(l + a.length), l += a.length, r(t.mask, o) ? (this.value = o, s(this, l)) : "" === e.trim(o) ? this.value = t.mask.replace(/[0-9]/g, "_") : i.trigger("error_input.xdsoft"), n.preventDefault(), !1
                }), i.on("keydown.xdsoft", function (n) {
                    var a, o = this.value, l = n.which, d = this.selectionStart, b = this.selectionEnd, _ = d !== b;
                    if (l >= c && l <= 57 || l >= u && l <= h || l === g || l === f) {
                        for (a = l === g || l === f ? "_" : String.fromCharCode(u <= l && l <= h ? l - c : l), l === g && d && !_ && (d -= 1); ;) {
                            var w = t.mask.substr(d, 1), x = d < t.mask.length, T = d > 0;
                            if (!(/[^0-9_]/.test(w) && x && T)) break;
                            d += l !== g || _ ? 1 : -1
                        }
                        if (_) {
                            var E = b - d, S = t.mask.replace(/[0-9]/g, "_"), C = S.substr(d, E).substr(1);
                            o = o.substr(0, d) + (a + C) + o.substr(d + E)
                        } else o = o.substr(0, d) + a + o.substr(d + 1);
                        if ("" === e.trim(o)) o = S; else if (d === t.mask.length) return n.preventDefault(), !1;
                        for (d += l === g ? 0 : 1; /[^0-9_]/.test(t.mask.substr(d, 1)) && d < t.mask.length && d > 0;) d += l === g ? 0 : 1;
                        r(t.mask, o) ? (this.value = o, s(this, d)) : "" === e.trim(o) ? this.value = t.mask.replace(/[0-9]/g, "_") : i.trigger("error_input.xdsoft")
                    } else if (-1 !== [65, 67, 86, 90, 89].indexOf(l) && y || -1 !== [27, 38, 40, 37, 39, 116, p, v, m].indexOf(l)) return !0;
                    return n.preventDefault(), !1
                }))
            }

            var l, d, _, w, x, T, E = e('<div class="xdsoft_datetimepicker xdsoft_noselect"></div>'),
                S = e('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'),
                C = e('<div class="xdsoft_datepicker active"></div>'),
                k = e('<div class="xdsoft_monthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button><div class="xdsoft_label xdsoft_month"><span></span><i></i></div><div class="xdsoft_label xdsoft_year"><span></span><i></i></div><button type="button" class="xdsoft_next"></button></div>'),
                D = e('<div class="xdsoft_calendar"></div>'),
                O = e('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'),
                M = O.find(".xdsoft_time_box").eq(0), A = e('<div class="xdsoft_time_variant"></div>'),
                I = e('<button type="button" class="xdsoft_save_selected blue-gradient-button">Save Selected</button>'),
                P = e('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>'),
                N = e('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>'), L = !1, $ = 0;
            b.id && E.attr("id", b.id), b.style && E.attr("style", b.style), b.weeks && E.addClass("xdsoft_showweeks"), b.rtl && E.addClass("xdsoft_rtl"), E.addClass("xdsoft_" + b.theme), E.addClass(b.className), k.find(".xdsoft_month span").after(P), k.find(".xdsoft_year span").after(N), k.find(".xdsoft_month,.xdsoft_year").on("touchstart mousedown.xdsoft", function (t) {
                var i, n, r = e(this).find(".xdsoft_select").eq(0), s = 0, a = 0, o = r.is(":visible");
                for (k.find(".xdsoft_select").hide(), x.currentTime && (s = x.currentTime[e(this).hasClass("xdsoft_month") ? "getMonth" : "getFullYear"]()), r[o ? "hide" : "show"](), i = r.find("div.xdsoft_option"), n = 0; n < i.length && i.eq(n).data("value") !== s; n += 1) a += i[0].offsetHeight;
                return r.xdsoftScroller(b, a / (r.children()[0].offsetHeight - r[0].clientHeight)), t.stopPropagation(), !1
            });
            var H = function (e) {
                var t = e.originalEvent, i = t.touches ? t.touches[0] : t;
                this.touchStartPosition = this.touchStartPosition || i;
                var n = Math.abs(this.touchStartPosition.clientX - i.clientX),
                    r = Math.abs(this.touchStartPosition.clientY - i.clientY);
                Math.sqrt(n * n + r * r) > b.touchMovedThreshold && (this.touchMoved = !0)
            };
            k.find(".xdsoft_select").xdsoftScroller(b).on("touchstart mousedown.xdsoft", function (e) {
                var t = e.originalEvent;
                this.touchMoved = !1, this.touchStartPosition = t.touches ? t.touches[0] : t, e.stopPropagation(), e.preventDefault()
            }).on("touchmove", ".xdsoft_option", H).on("touchend mousedown.xdsoft", ".xdsoft_option", function () {
                if (!this.touchMoved) {
                    void 0 !== x.currentTime && null !== x.currentTime || (x.currentTime = x.now());
                    var t = x.currentTime.getFullYear();
                    x && x.currentTime && x.currentTime[e(this).parent().parent().hasClass("xdsoft_monthselect") ? "setMonth" : "setFullYear"](e(this).data("value")), e(this).parent().parent().hide(), E.trigger("xchange.xdsoft"), b.onChangeMonth && e.isFunction(b.onChangeMonth) && b.onChangeMonth.call(E, x.currentTime, E.data("input")), t !== x.currentTime.getFullYear() && e.isFunction(b.onChangeYear) && b.onChangeYear.call(E, x.currentTime, E.data("input"))
                }
            }), E.getValue = function () {
                return x.getCurrentTime()
            }, E.setOptions = function (r) {
                var s = {};
                b = e.extend(!0, {}, b, r), r.allowTimes && e.isArray(r.allowTimes) && r.allowTimes.length && (b.allowTimes = e.extend(!0, [], r.allowTimes)), r.weekends && e.isArray(r.weekends) && r.weekends.length && (b.weekends = e.extend(!0, [], r.weekends)), r.allowDates && e.isArray(r.allowDates) && r.allowDates.length && (b.allowDates = e.extend(!0, [], r.allowDates)), r.allowDateRe && "[object String]" === Object.prototype.toString.call(r.allowDateRe) && (b.allowDateRe = new RegExp(r.allowDateRe)), r.highlightedDates && e.isArray(r.highlightedDates) && r.highlightedDates.length && (e.each(r.highlightedDates, function (i, r) {
                    var a, o = e.map(r.split(","), e.trim), l = new t(n.parseDate(o[0], b.formatDate), o[1], o[2]),
                        d = n.formatDate(l.date, b.formatDate);
                    void 0 !== s[d] ? (a = s[d].desc) && a.length && l.desc && l.desc.length && (s[d].desc = a + "\n" + l.desc) : s[d] = l
                }), b.highlightedDates = e.extend(!0, [], s)), r.highlightedPeriods && e.isArray(r.highlightedPeriods) && r.highlightedPeriods.length && (s = e.extend(!0, [], b.highlightedDates), e.each(r.highlightedPeriods, function (i, r) {
                    var a, o, l, d, c, u, h;
                    if (e.isArray(r)) a = r[0], o = r[1], l = r[2], h = r[3]; else {
                        var p = e.map(r.split(","), e.trim);
                        a = n.parseDate(p[0], b.formatDate), o = n.parseDate(p[1], b.formatDate), l = p[2],
                            h = p[3]
                    }
                    for (; a <= o;) d = new t(a, l, h), c = n.formatDate(a, b.formatDate), a.setDate(a.getDate() + 1), void 0 !== s[c] ? (u = s[c].desc) && u.length && d.desc && d.desc.length && (s[c].desc = u + "\n" + d.desc) : s[c] = d
                }), b.highlightedDates = e.extend(!0, [], s)), r.disabledDates && e.isArray(r.disabledDates) && r.disabledDates.length && (b.disabledDates = e.extend(!0, [], r.disabledDates)), r.disabledWeekDays && e.isArray(r.disabledWeekDays) && r.disabledWeekDays.length && (b.disabledWeekDays = e.extend(!0, [], r.disabledWeekDays)), !b.open && !b.opened || b.inline || i.trigger("open.xdsoft"), b.inline && (L = !0, E.addClass("xdsoft_inline"), i.after(E).hide()), b.inverseButton && (b.next = "xdsoft_prev", b.prev = "xdsoft_next"), b.datepicker ? C.addClass("active") : C.removeClass("active"), b.timepicker ? O.addClass("active") : O.removeClass("active"), b.value && (x.setCurrentTime(b.value), i && i.val && i.val(x.str)), isNaN(b.dayOfWeekStart) ? b.dayOfWeekStart = 0 : b.dayOfWeekStart = parseInt(b.dayOfWeekStart, 10) % 7, b.timepickerScrollbar || M.xdsoftScroller(b, "hide"), b.minDate && /^[\+\-](.*)$/.test(b.minDate) && (b.minDate = n.formatDate(x.strToDateTime(b.minDate), b.formatDate)), b.maxDate && /^[\+\-](.*)$/.test(b.maxDate) && (b.maxDate = n.formatDate(x.strToDateTime(b.maxDate), b.formatDate)), b.minDateTime && /^\+(.*)$/.test(b.minDateTime) && (b.minDateTime = x.strToDateTime(b.minDateTime).dateFormat(b.formatDate)), b.maxDateTime && /^\+(.*)$/.test(b.maxDateTime) && (b.maxDateTime = x.strToDateTime(b.maxDateTime).dateFormat(b.formatDate)), I.toggle(b.showApplyButton), k.find(".xdsoft_today_button").css("visibility", b.todayButton ? "visible" : "hidden"), k.find("." + b.prev).css("visibility", b.prevButton ? "visible" : "hidden"), k.find("." + b.next).css("visibility", b.nextButton ? "visible" : "hidden"), o(b), b.validateOnBlur && i.off("blur.xdsoft").on("blur.xdsoft", function () {
                    if (b.allowBlank && (!e.trim(e(this).val()).length || "string" == typeof b.mask && e.trim(e(this).val()) === b.mask.replace(/[0-9]/g, "_"))) e(this).val(null), E.data("xdsoft_datetime").empty(); else {
                        var t = n.parseDate(e(this).val(), b.format);
                        if (t) e(this).val(n.formatDate(t, b.format)); else {
                            var i = +[e(this).val()[0], e(this).val()[1]].join(""),
                                r = +[e(this).val()[2], e(this).val()[3]].join("");
                            !b.datepicker && b.timepicker && i >= 0 && i < 24 && r >= 0 && r < 60 ? e(this).val([i, r].map(function (e) {
                                return e > 9 ? e : "0" + e
                            }).join(":")) : e(this).val(n.formatDate(x.now(), b.format))
                        }
                        E.data("xdsoft_datetime").setCurrentTime(e(this).val())
                    }
                    E.trigger("changedatetime.xdsoft"), E.trigger("close.xdsoft")
                }), b.dayOfWeekStartPrev = 0 === b.dayOfWeekStart ? 6 : b.dayOfWeekStart - 1, E.trigger("xchange.xdsoft").trigger("afterOpen.xdsoft")
            }, E.data("options", b).on("touchstart mousedown.xdsoft", function (e) {
                return e.stopPropagation(), e.preventDefault(), N.hide(), P.hide(), !1
            }), M.append(A), M.xdsoftScroller(b), E.on("afterOpen.xdsoft", function () {
                M.xdsoftScroller(b)
            }), E.append(C).append(O), !0 !== b.withoutCopyright && E.append(S), C.append(k).append(D).append(I), e(b.parentID).append(E), x = new function () {
                var t = this;
                t.now = function (e) {
                    var i, n, r = new Date;
                    return !e && b.defaultDate && (i = t.strToDateTime(b.defaultDate), r.setFullYear(i.getFullYear()), r.setMonth(i.getMonth()), r.setDate(i.getDate())), r.setFullYear(r.getFullYear()), !e && b.defaultTime && (n = t.strtotime(b.defaultTime), r.setHours(n.getHours()), r.setMinutes(n.getMinutes()), r.setSeconds(n.getSeconds()), r.setMilliseconds(n.getMilliseconds())), r
                }, t.isValidDate = function (e) {
                    return "[object Date]" === Object.prototype.toString.call(e) && !isNaN(e.getTime())
                }, t.setCurrentTime = function (e, i) {
                    "string" == typeof e ? t.currentTime = t.strToDateTime(e) : t.isValidDate(e) ? t.currentTime = e : e || i || !b.allowBlank || b.inline ? t.currentTime = t.now() : t.currentTime = null, E.trigger("xchange.xdsoft")
                }, t.empty = function () {
                    t.currentTime = null
                }, t.getCurrentTime = function () {
                    return t.currentTime
                }, t.nextMonth = function () {
                    void 0 !== t.currentTime && null !== t.currentTime || (t.currentTime = t.now());
                    var i, n = t.currentTime.getMonth() + 1;
                    return 12 === n && (t.currentTime.setFullYear(t.currentTime.getFullYear() + 1), n = 0), i = t.currentTime.getFullYear(), t.currentTime.setDate(Math.min(new Date(t.currentTime.getFullYear(), n + 1, 0).getDate(), t.currentTime.getDate())), t.currentTime.setMonth(n), b.onChangeMonth && e.isFunction(b.onChangeMonth) && b.onChangeMonth.call(E, x.currentTime, E.data("input")), i !== t.currentTime.getFullYear() && e.isFunction(b.onChangeYear) && b.onChangeYear.call(E, x.currentTime, E.data("input")), E.trigger("xchange.xdsoft"), n
                }, t.prevMonth = function () {
                    void 0 !== t.currentTime && null !== t.currentTime || (t.currentTime = t.now());
                    var i = t.currentTime.getMonth() - 1;
                    return -1 === i && (t.currentTime.setFullYear(t.currentTime.getFullYear() - 1), i = 11), t.currentTime.setDate(Math.min(new Date(t.currentTime.getFullYear(), i + 1, 0).getDate(), t.currentTime.getDate())), t.currentTime.setMonth(i), b.onChangeMonth && e.isFunction(b.onChangeMonth) && b.onChangeMonth.call(E, x.currentTime, E.data("input")), E.trigger("xchange.xdsoft"), i
                }, t.getWeekOfYear = function (t) {
                    if (b.onGetWeekOfYear && e.isFunction(b.onGetWeekOfYear)) {
                        var i = b.onGetWeekOfYear.call(E, t);
                        if (void 0 !== i) return i
                    }
                    var n = new Date(t.getFullYear(), 0, 1);
                    return 4 !== n.getDay() && n.setMonth(0, 1 + (4 - n.getDay() + 7) % 7), Math.ceil(((t - n) / 864e5 + n.getDay() + 1) / 7)
                }, t.strToDateTime = function (e) {
                    var i, r, s = [];
                    return e && e instanceof Date && t.isValidDate(e) ? e : ((s = /^([+-]{1})(.*)$/.exec(e)) && (s[2] = n.parseDate(s[2], b.formatDate)), s && s[2] ? (i = s[2].getTime() - 6e4 * s[2].getTimezoneOffset(), r = new Date(t.now(!0).getTime() + parseInt(s[1] + "1", 10) * i)) : r = e ? n.parseDate(e, b.format) : t.now(), t.isValidDate(r) || (r = t.now()), r)
                }, t.strToDate = function (e) {
                    if (e && e instanceof Date && t.isValidDate(e)) return e;
                    var i = e ? n.parseDate(e, b.formatDate) : t.now(!0);
                    return t.isValidDate(i) || (i = t.now(!0)), i
                }, t.strtotime = function (e) {
                    if (e && e instanceof Date && t.isValidDate(e)) return e;
                    var i = e ? n.parseDate(e, b.formatTime) : t.now(!0);
                    return t.isValidDate(i) || (i = t.now(!0)), i
                }, t.str = function () {
                    var e = b.format;
                    return b.yearOffset && (e = (e = e.replace("Y", t.currentTime.getFullYear() + b.yearOffset)).replace("y", String(t.currentTime.getFullYear() + b.yearOffset).substring(2, 4))), n.formatDate(t.currentTime, e)
                }, t.currentTime = this.now()
            }, I.on("touchend click", function (e) {
                e.preventDefault(), E.data("changed", !0), x.setCurrentTime(a()), i.val(x.str()), E.trigger("close.xdsoft")
            }), k.find(".xdsoft_today_button").on("touchend mousedown.xdsoft", function () {
                E.data("changed", !0), x.setCurrentTime(0, !0), E.trigger("afterOpen.xdsoft")
            }).on("dblclick.xdsoft", function () {
                var e, t, n = x.getCurrentTime();
                n = new Date(n.getFullYear(), n.getMonth(), n.getDate()), e = x.strToDate(b.minDate), n < (e = new Date(e.getFullYear(), e.getMonth(), e.getDate())) || (t = x.strToDate(b.maxDate), n > (t = new Date(t.getFullYear(), t.getMonth(), t.getDate())) || (i.val(x.str()), i.trigger("change"), E.trigger("close.xdsoft")))
            }), k.find(".xdsoft_prev,.xdsoft_next").on("touchend mousedown.xdsoft", function () {
                var t = e(this), i = 0, n = !1;
                !function e(r) {
                    t.hasClass(b.next) ? x.nextMonth() : t.hasClass(b.prev) && x.prevMonth(), b.monthChangeSpinner && (n || (i = setTimeout(e, r || 100)))
                }(500), e([b.ownerDocument.body, b.contentWindow]).on("touchend mouseup.xdsoft", function t() {
                    clearTimeout(i), n = !0, e([b.ownerDocument.body, b.contentWindow]).off("touchend mouseup.xdsoft", t)
                })
            }), O.find(".xdsoft_prev,.xdsoft_next").on("touchend mousedown.xdsoft", function () {
                var t = e(this), i = 0, n = !1, r = 110;
                !function e(s) {
                    var a = M[0].clientHeight, o = A[0].offsetHeight, l = Math.abs(parseInt(A.css("marginTop"), 10));
                    t.hasClass(b.next) && o - a - b.timeHeightInTimePicker >= l ? A.css("marginTop", "-" + (l + b.timeHeightInTimePicker) + "px") : t.hasClass(b.prev) && l - b.timeHeightInTimePicker >= 0 && A.css("marginTop", "-" + (l - b.timeHeightInTimePicker) + "px"), M.trigger("scroll_element.xdsoft_scroller", [Math.abs(parseInt(A[0].style.marginTop, 10) / (o - a))]), r = r > 10 ? 10 : r - 10, n || (i = setTimeout(e, s || r))
                }(500), e([b.ownerDocument.body, b.contentWindow]).on("touchend mouseup.xdsoft", function t() {
                    clearTimeout(i), n = !0, e([b.ownerDocument.body, b.contentWindow]).off("touchend mouseup.xdsoft", t)
                })
            }), l = 0, E.on("xchange.xdsoft", function (t) {
                clearTimeout(l), l = setTimeout(function () {
                    void 0 !== x.currentTime && null !== x.currentTime || (x.currentTime = x.now());
                    for (var t, a, o, l, d, c, u, h, p, f, m = "", g = new Date(x.currentTime.getFullYear(), x.currentTime.getMonth(), 1, 12, 0, 0), v = 0, y = x.now(), _ = !1, w = !1, T = !1, S = !1, C = [], O = !0, M = ""; g.getDay() !== b.dayOfWeekStart;) g.setDate(g.getDate() - 1);
                    for (m += "<table><thead><tr>", b.weeks && (m += "<th></th>"), t = 0; t < 7; t += 1) m += "<th>" + b.i18n[s].dayOfWeekShort[(t + b.dayOfWeekStart) % 7] + "</th>";
                    m += "</tr></thead>", m += "<tbody>", !1 !== b.maxDate && (_ = x.strToDate(b.maxDate), _ = new Date(_.getFullYear(), _.getMonth(), _.getDate(), 23, 59, 59, 999)), !1 !== b.minDate && (w = x.strToDate(b.minDate), w = new Date(w.getFullYear(), w.getMonth(), w.getDate())), !1 !== b.minDateTime && (T = x.strToDate(b.minDateTime), T = new Date(T.getFullYear(), T.getMonth(), T.getDate(), T.getHours(), T.getMinutes(), T.getSeconds())), !1 !== b.maxDateTime && (S = x.strToDate(b.maxDateTime), S = new Date(S.getFullYear(), S.getMonth(), S.getDate(), S.getHours(), S.getMinutes(), S.getSeconds()));
                    var I;
                    for (!1 !== S && (I = 31 * (12 * S.getFullYear() + S.getMonth()) + S.getDate()); v < x.currentTime.countDaysInMonth() || g.getDay() !== b.dayOfWeekStart || x.currentTime.getMonth() === g.getMonth();) {
                        C = [], v += 1, o = g.getDay(), l = g.getDate(), d = g.getFullYear(), c = g.getMonth(), u = x.getWeekOfYear(g), f = "", C.push("xdsoft_date"), h = b.beforeShowDay && e.isFunction(b.beforeShowDay.call) ? b.beforeShowDay.call(E, g) : null, b.allowDateRe && "[object RegExp]" === Object.prototype.toString.call(b.allowDateRe) && (b.allowDateRe.test(n.formatDate(g, b.formatDate)) || C.push("xdsoft_disabled")), b.allowDates && b.allowDates.length > 0 && -1 === b.allowDates.indexOf(n.formatDate(g, b.formatDate)) && C.push("xdsoft_disabled");
                        var L = 31 * (12 * g.getFullYear() + g.getMonth()) + g.getDate();
                        (!1 !== _ && g > _ || !1 !== T && g < T || !1 !== w && g < w || !1 !== S && L > I || h && !1 === h[0]) && C.push("xdsoft_disabled"), -1 !== b.disabledDates.indexOf(n.formatDate(g, b.formatDate)) && C.push("xdsoft_disabled"), -1 !== b.disabledWeekDays.indexOf(o) && C.push("xdsoft_disabled"), i.is("[disabled]") && C.push("xdsoft_disabled"), h && "" !== h[1] && C.push(h[1]), x.currentTime.getMonth() !== c && C.push("xdsoft_other_month"), (b.defaultSelect || E.data("changed")) && n.formatDate(x.currentTime, b.formatDate) === n.formatDate(g, b.formatDate) && C.push("xdsoft_current"), n.formatDate(y, b.formatDate) === n.formatDate(g, b.formatDate) && C.push("xdsoft_today"), 0 !== g.getDay() && 6 !== g.getDay() && -1 === b.weekends.indexOf(n.formatDate(g, b.formatDate)) || C.push("xdsoft_weekend"), void 0 !== b.highlightedDates[n.formatDate(g, b.formatDate)] && (a = b.highlightedDates[n.formatDate(g, b.formatDate)], C.push(void 0 === a.style ? "xdsoft_highlighted_default" : a.style), f = void 0 === a.desc ? "" : a.desc), b.beforeShowDay && e.isFunction(b.beforeShowDay) && C.push(b.beforeShowDay(g)), O && (m += "<tr>", O = !1, b.weeks && (m += "<th>" + u + "</th>")), m += '<td data-date="' + l + '" data-month="' + c + '" data-year="' + d + '" class="xdsoft_date xdsoft_day_of_week' + g.getDay() + " " + C.join(" ") + '" title="' + f + '"><div>' + l + "</div></td>", g.getDay() === b.dayOfWeekStartPrev && (m += "</tr>", O = !0), g.setDate(l + 1)
                    }
                    m += "</tbody></table>", D.html(m), k.find(".xdsoft_label span").eq(0).text(b.i18n[s].months[x.currentTime.getMonth()]), k.find(".xdsoft_label span").eq(1).text(x.currentTime.getFullYear() + b.yearOffset), M = "", c = "";
                    var $ = 0;
                    !1 !== b.minTime && (F = x.strtotime(b.minTime), $ = 60 * F.getHours() + F.getMinutes());
                    var H = 1440;
                    if (!1 !== b.maxTime && (F = x.strtotime(b.maxTime), H = 60 * F.getHours() + F.getMinutes()), !1 !== b.minDateTime && (F = x.strToDateTime(b.minDateTime), n.formatDate(x.currentTime, b.formatDate) === n.formatDate(F, b.formatDate) && (c = 60 * F.getHours() + F.getMinutes()) > $ && ($ = c)), !1 !== b.maxDateTime) {
                        var F = x.strToDateTime(b.maxDateTime);
                        n.formatDate(x.currentTime, b.formatDate) === n.formatDate(F, b.formatDate) && (c = 60 * F.getHours() + F.getMinutes()) < H && (H = c)
                    }
                    if (p = function (t, r) {
                        var s, a = x.now(), o = b.allowTimes && e.isArray(b.allowTimes) && b.allowTimes.length;
                        a.setHours(t), t = parseInt(a.getHours(), 10), a.setMinutes(r), r = parseInt(a.getMinutes(), 10), C = [];
                        var l = 60 * t + r;
                        (i.is("[disabled]") || l >= H || l < $) && C.push("xdsoft_disabled"), (s = new Date(x.currentTime)).setHours(parseInt(x.currentTime.getHours(), 10)), o || s.setMinutes(Math[b.roundTime](x.currentTime.getMinutes() / b.step) * b.step), (b.initTime || b.defaultSelect || E.data("changed")) && s.getHours() === parseInt(t, 10) && (!o && b.step > 59 || s.getMinutes() === parseInt(r, 10)) && (b.defaultSelect || E.data("changed") ? C.push("xdsoft_current") : b.initTime && C.push("xdsoft_init_time")), parseInt(y.getHours(), 10) === parseInt(t, 10) && parseInt(y.getMinutes(), 10) === parseInt(r, 10) && C.push("xdsoft_today"), M += '<div class="xdsoft_time ' + C.join(" ") + '" data-hour="' + t + '" data-minute="' + r + '">' + n.formatDate(a, b.formatTime) + "</div>"
                    }, b.allowTimes && e.isArray(b.allowTimes) && b.allowTimes.length) for (v = 0; v < b.allowTimes.length; v += 1) p(x.strtotime(b.allowTimes[v]).getHours(), c = x.strtotime(b.allowTimes[v]).getMinutes()); else for (v = 0, t = 0; v < (b.hours12 ? 12 : 24); v += 1) for (t = 0; t < 60; t += b.step) {
                        var W = 60 * v + t;
                        W < $ || W >= H || p((v < 10 ? "0" : "") + v, c = (t < 10 ? "0" : "") + t)
                    }
                    for (A.html(M), r = "", v = parseInt(b.yearStart, 10); v <= parseInt(b.yearEnd, 10); v += 1) r += '<div class="xdsoft_option ' + (x.currentTime.getFullYear() === v ? "xdsoft_current" : "") + '" data-value="' + v + '">' + (v + b.yearOffset) + "</div>";
                    for (N.children().eq(0).html(r), v = parseInt(b.monthStart, 10), r = ""; v <= parseInt(b.monthEnd, 10); v += 1) r += '<div class="xdsoft_option ' + (x.currentTime.getMonth() === v ? "xdsoft_current" : "") + '" data-value="' + v + '">' + b.i18n[s].months[v] + "</div>";
                    P.children().eq(0).html(r), e(E).trigger("generate.xdsoft")
                }, 10), t.stopPropagation()
            }).on("afterOpen.xdsoft", function () {
                if (b.timepicker) {
                    var e, t, i, n;
                    A.find(".xdsoft_current").length ? e = ".xdsoft_current" : A.find(".xdsoft_init_time").length && (e = ".xdsoft_init_time"), e ? (t = M[0].clientHeight, (i = A[0].offsetHeight) - t < (n = A.find(e).index() * b.timeHeightInTimePicker + 1) && (n = i - t), M.trigger("scroll_element.xdsoft_scroller", [parseInt(n, 10) / (i - t)])) : M.trigger("scroll_element.xdsoft_scroller", [0])
                }
            }), d = 0, D.on("touchend click.xdsoft", "td", function (t) {
                t.stopPropagation(), d += 1;
                var n = e(this), r = x.currentTime;
                if (void 0 !== r && null !== r || (x.currentTime = x.now(), r = x.currentTime), n.hasClass("xdsoft_disabled")) return !1;
                r.setDate(1), r.setFullYear(n.data("year")), r.setMonth(n.data("month")), r.setDate(n.data("date")), E.trigger("select.xdsoft", [r]), i.val(x.str()), b.onSelectDate && e.isFunction(b.onSelectDate) && b.onSelectDate.call(E, x.currentTime, E.data("input"), t), E.data("changed", !0), E.trigger("xchange.xdsoft"), E.trigger("changedatetime.xdsoft"), (d > 1 || !0 === b.closeOnDateSelect || !1 === b.closeOnDateSelect && !b.timepicker) && !b.inline && E.trigger("close.xdsoft"), setTimeout(function () {
                    d = 0
                }, 200)
            }), A.on("touchstart", "div", function (e) {
                this.touchMoved = !1
            }).on("touchmove", "div", H).on("touchend click.xdsoft", "div", function (t) {
                if (!this.touchMoved) {
                    t.stopPropagation();
                    var i = e(this), n = x.currentTime;
                    if (void 0 !== n && null !== n || (x.currentTime = x.now(), n = x.currentTime), i.hasClass("xdsoft_disabled")) return !1;
                    n.setHours(i.data("hour")), n.setMinutes(i.data("minute")), E.trigger("select.xdsoft", [n]), E.data("input").val(x.str()), b.onSelectTime && e.isFunction(b.onSelectTime) && b.onSelectTime.call(E, x.currentTime, E.data("input"), t), E.data("changed", !0), E.trigger("xchange.xdsoft"), E.trigger("changedatetime.xdsoft"), !0 !== b.inline && !0 === b.closeOnTimeSelect && E.trigger("close.xdsoft")
                }
            }), C.on("mousewheel.xdsoft", function (e) {
                return !b.scrollMonth || (e.deltaY < 0 ? x.nextMonth() : x.prevMonth(), !1)
            }), i.on("mousewheel.xdsoft", function (e) {
                return !b.scrollInput || (!b.datepicker && b.timepicker ? ((_ = A.find(".xdsoft_current").length ? A.find(".xdsoft_current").eq(0).index() : 0) + e.deltaY >= 0 && _ + e.deltaY < A.children().length && (_ += e.deltaY), A.children().eq(_).length && A.children().eq(_).trigger("mousedown"), !1) : b.datepicker && !b.timepicker ? (C.trigger(e, [e.deltaY, e.deltaX, e.deltaY]), i.val && i.val(x.str()), E.trigger("changedatetime.xdsoft"), !1) : void 0)
            }), E.on("changedatetime.xdsoft", function (t) {
                if (b.onChangeDateTime && e.isFunction(b.onChangeDateTime)) {
                    var i = E.data("input");
                    b.onChangeDateTime.call(E, x.currentTime, i, t), delete b.value, i.trigger("change")
                }
            }).on("generate.xdsoft", function () {
                b.onGenerate && e.isFunction(b.onGenerate) && b.onGenerate.call(E, x.currentTime, E.data("input")), L && (E.trigger("afterOpen.xdsoft"), L = !1)
            }).on("click.xdsoft", function (e) {
                e.stopPropagation()
            }), _ = 0, T = function (e, t) {
                do {
                    if (!(e = e.parentNode) || !1 === t(e)) break
                } while ("HTML" !== e.nodeName)
            }, w = function () {
                var t, i, n, r, s, a, o, l, d, c, u, h, p;
                if (l = E.data("input"), t = l.offset(), i = l[0], c = "top", n = t.top + i.offsetHeight - 1, r = t.left, s = "absolute", d = e(b.contentWindow).width(), h = e(b.contentWindow).height(), p = e(b.contentWindow).scrollTop(), b.ownerDocument.documentElement.clientWidth - t.left < C.parent().outerWidth(!0)) {
                    var f = C.parent().outerWidth(!0) - i.offsetWidth;
                    r -= f
                }
                "rtl" === l.parent().css("direction") && (r -= E.outerWidth() - l.outerWidth()), b.fixed ? (n -= p, r -= e(b.contentWindow).scrollLeft(), s = "fixed") : (o = !1, T(i, function (e) {
                    return null !== e && ("fixed" === b.contentWindow.getComputedStyle(e).getPropertyValue("position") ? (o = !0, !1) : void 0)
                }), o ? (s = "fixed", n + E.outerHeight() > h + p ? (c = "bottom", n = h + p - t.top) : n -= p) : n + E[0].offsetHeight > h + p && (n = t.top - E[0].offsetHeight + 1), n < 0 && (n = 0), r + i.offsetWidth > d && (r = d - i.offsetWidth)), a = E[0], T(a, function (e) {
                    if ("relative" === b.contentWindow.getComputedStyle(e).getPropertyValue("position") && d >= e.offsetWidth) return r -= (d - e.offsetWidth) / 2, !1
                }), (u = {position: s, left: r, top: "", bottom: ""})[c] = n, E.css(u)
            }, E.on("open.xdsoft", function (t) {
                var i = !0;
                b.onShow && e.isFunction(b.onShow) && (i = b.onShow.call(E, x.currentTime, E.data("input"), t)), !1 !== i && (E.show(), w(), e(b.contentWindow).off("resize.xdsoft", w).on("resize.xdsoft", w), b.closeOnWithoutClick && e([b.ownerDocument.body, b.contentWindow]).on("touchstart mousedown.xdsoft", function t() {
                    E.trigger("close.xdsoft"), e([b.ownerDocument.body, b.contentWindow]).off("touchstart mousedown.xdsoft", t)
                }))
            }).on("close.xdsoft", function (t) {
                var i = !0;
                k.find(".xdsoft_month,.xdsoft_year").find(".xdsoft_select").hide(), b.onClose && e.isFunction(b.onClose) && (i = b.onClose.call(E, x.currentTime, E.data("input"), t)), !1 === i || b.opened || b.inline || E.hide(), t.stopPropagation()
            }).on("toggle.xdsoft", function () {
                E.is(":visible") ? E.trigger("close.xdsoft") : E.trigger("open.xdsoft")
            }).data("input", i), $ = 0, E.data("xdsoft_datetime", x), E.setOptions(b), x.setCurrentTime(a()), i.data("xdsoft_datetimepicker", E).on("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart", function () {
                i.is(":disabled") || i.data("xdsoft_datetimepicker").is(":visible") && b.closeOnInputClick || b.openOnFocus && (clearTimeout($), $ = setTimeout(function () {
                    i.is(":disabled") || (L = !0, x.setCurrentTime(a(), !0), b.mask && o(b), E.trigger("open.xdsoft"))
                }, 100))
            }).on("keydown.xdsoft", function (t) {
                var i, n = t.which;
                return -1 !== [m].indexOf(n) && b.enterLikeTab ? (i = e("input:visible,textarea:visible,button:visible,a:visible"), E.trigger("close.xdsoft"), i.eq(i.index(this) + 1).focus(), !1) : -1 !== [v].indexOf(n) ? (E.trigger("close.xdsoft"), !0) : void 0
            }).on("blur.xdsoft", function () {
                E.trigger("close.xdsoft")
            })
        }, l = function (t) {
            var i = t.data("xdsoft_datetimepicker");
            i && (i.data("xdsoft_datetime", null), i.remove(), t.data("xdsoft_datetimepicker", null).off(".xdsoft"), e(b.contentWindow).off("resize.xdsoft"), e([b.contentWindow, b.ownerDocument.body]).off("mousedown.xdsoft touchstart"), t.unmousewheel && t.unmousewheel())
        }, e(b.ownerDocument).off("keydown.xdsoftctrl keyup.xdsoftctrl").on("keydown.xdsoftctrl", function (e) {
            e.keyCode === p && (y = !0)
        }).on("keyup.xdsoftctrl", function (e) {
            e.keyCode === p && (y = !1)
        }), this.each(function () {
            var t = e(this).data("xdsoft_datetimepicker");
            if (t) {
                if ("string" === e.type(r)) switch (r) {
                    case"show":
                        e(this).select().focus(), t.trigger("open.xdsoft");
                        break;
                    case"hide":
                        t.trigger("close.xdsoft");
                        break;
                    case"toggle":
                        t.trigger("toggle.xdsoft");
                        break;
                    case"destroy":
                        l(e(this));
                        break;
                    case"reset":
                        this.value = this.defaultValue, this.value && t.data("xdsoft_datetime").isValidDate(n.parseDate(this.value, b.format)) || t.data("changed", !1), t.data("xdsoft_datetime").setCurrentTime(this.value);
                        break;
                    case"validate":
                        t.data("input").trigger("blur.xdsoft");
                        break;
                    default:
                        t[r] && e.isFunction(t[r]) && (d = t[r](a))
                } else t.setOptions(r);
                return 0
            }
            "string" !== e.type(r) && (!b.lazyInit || b.open || b.inline ? o(e(this)) : w(e(this)))
        }), d
    }, e.fn.datetimepicker.defaults = i
};
!function (e) {
    "function" == typeof define && define.amd ? define(["jquery", "jquery-mousewheel"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(datetimepickerFactory), function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function (e) {
    function t(t) {
        var a = t || window.event, o = l.call(arguments, 1), d = 0, u = 0, h = 0, p = 0, f = 0, m = 0;
        if (t = e.event.fix(a), t.type = "mousewheel", "detail" in a && (h = -1 * a.detail), "wheelDelta" in a && (h = a.wheelDelta), "wheelDeltaY" in a && (h = a.wheelDeltaY), "wheelDeltaX" in a && (u = -1 * a.wheelDeltaX), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (u = -1 * h, h = 0), d = 0 === h ? u : h, "deltaY" in a && (d = h = -1 * a.deltaY), "deltaX" in a && (u = a.deltaX, 0 === h && (d = -1 * u)), 0 !== h || 0 !== u) {
            if (1 === a.deltaMode) {
                var g = e.data(this, "mousewheel-line-height");
                d *= g, h *= g, u *= g
            } else if (2 === a.deltaMode) {
                var v = e.data(this, "mousewheel-page-height");
                d *= v, h *= v, u *= v
            }
            if (p = Math.max(Math.abs(h), Math.abs(u)), (!s || p < s) && (s = p, n(a, p) && (s /= 40)), n(a, p) && (d /= 40, u /= 40, h /= 40), d = Math[d >= 1 ? "floor" : "ceil"](d / s), u = Math[u >= 1 ? "floor" : "ceil"](u / s), h = Math[h >= 1 ? "floor" : "ceil"](h / s), c.settings.normalizeOffset && this.getBoundingClientRect) {
                var y = this.getBoundingClientRect();
                f = t.clientX - y.left, m = t.clientY - y.top
            }
            return t.deltaX = u, t.deltaY = h, t.deltaFactor = s, t.offsetX = f, t.offsetY = m, t.deltaMode = 0, o.unshift(t, d, u, h), r && clearTimeout(r), r = setTimeout(i, 200), (e.event.dispatch || e.event.handle).apply(this, o)
        }
    }

    function i() {
        s = null
    }

    function n(e, t) {
        return c.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
    }

    var r, s, a = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        o = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        l = Array.prototype.slice;
    if (e.event.fixHooks) for (var d = a.length; d;) e.event.fixHooks[a[--d]] = e.event.mouseHooks;
    var c = e.event.special.mousewheel = {
        version: "3.1.12", setup: function () {
            if (this.addEventListener) for (var i = o.length; i;) this.addEventListener(o[--i], t, !1); else this.onmousewheel = t;
            e.data(this, "mousewheel-line-height", c.getLineHeight(this)), e.data(this, "mousewheel-page-height", c.getPageHeight(this))
        }, teardown: function () {
            if (this.removeEventListener) for (var i = o.length; i;) this.removeEventListener(o[--i], t, !1); else this.onmousewheel = null;
            e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
        }, getLineHeight: function (t) {
            var i = e(t), n = i["offsetParent" in e.fn ? "offsetParent" : "parent"]();
            return n.length || (n = e("body")), parseInt(n.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
        }, getPageHeight: function (t) {
            return e(t).height()
        }, settings: {adjustOldDeltas: !0, normalizeOffset: !0}
    };
    e.fn.extend({
        mousewheel: function (e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        }, unmousewheel: function (e) {
            return this.unbind("mousewheel", e)
        }
    })
}), function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t()
}(this, function () {
    "use strict";

    function e(e, t) {
        var i = [], n = 0;
        if (e && !t && e instanceof $e) return e;
        if (e) if ("string" == typeof e) {
            var r, s, a = e.trim();
            if (a.indexOf("<") >= 0 && a.indexOf(">") >= 0) {
                var o = "div";
                for (0 === a.indexOf("<li") && (o = "ul"), 0 === a.indexOf("<tr") && (o = "tbody"), 0 !== a.indexOf("<td") && 0 !== a.indexOf("<th") || (o = "tr"), 0 === a.indexOf("<tbody") && (o = "table"), 0 === a.indexOf("<option") && (o = "select"), s = Ne.createElement(o), s.innerHTML = a, n = 0; n < s.childNodes.length; n += 1) i.push(s.childNodes[n])
            } else for (r = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || Ne).querySelectorAll(e.trim()) : [Ne.getElementById(e.trim().split("#")[1])], n = 0; n < r.length; n += 1) r[n] && i.push(r[n])
        } else if (e.nodeType || e === Le || e === Ne) i.push(e); else if (e.length > 0 && e[0].nodeType) for (n = 0; n < e.length; n += 1) i.push(e[n]);
        return new $e(i)
    }

    function t(e) {
        for (var t = [], i = 0; i < e.length; i += 1) -1 === t.indexOf(e[i]) && t.push(e[i]);
        return t
    }

    function i(e) {
        var t = this;
        if (void 0 === e) return this;
        for (var i = e.split(" "), n = 0; n < i.length; n += 1) for (var r = 0; r < this.length; r += 1) void 0 !== t[r].classList && t[r].classList.add(i[n]);
        return this
    }

    function n(e) {
        for (var t = this, i = e.split(" "), n = 0; n < i.length; n += 1) for (var r = 0; r < this.length; r += 1) void 0 !== t[r].classList && t[r].classList.remove(i[n]);
        return this
    }

    function r(e) {
        return !!this[0] && this[0].classList.contains(e)
    }

    function s(e) {
        for (var t = this, i = e.split(" "), n = 0; n < i.length; n += 1) for (var r = 0; r < this.length; r += 1) void 0 !== t[r].classList && t[r].classList.toggle(i[n]);
        return this
    }

    function a(e, t) {
        var i = arguments, n = this;
        if (1 !== arguments.length || "string" != typeof e) {
            for (var r = 0; r < this.length; r += 1) if (2 === i.length) n[r].setAttribute(e, t); else for (var s in e) n[r][s] = e[s], n[r].setAttribute(s, e[s]);
            return this
        }
        if (this[0]) return this[0].getAttribute(e)
    }

    function o(e) {
        for (var t = this, i = 0; i < this.length; i += 1) t[i].removeAttribute(e);
        return this
    }

    function l(e, t) {
        var i, n = this;
        if (void 0 !== t) {
            for (var r = 0; r < this.length; r += 1) i = n[r], i.dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
            return this
        }
        if (i = this[0]) {
            if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
            var s = i.getAttribute("data-" + e);
            if (s) return s
        } else ;
    }

    function d(e) {
        for (var t = this, i = 0; i < this.length; i += 1) {
            var n = t[i].style;
            n.webkitTransform = e, n.transform = e
        }
        return this
    }

    function c(e) {
        var t = this;
        "string" != typeof e && (e += "ms");
        for (var i = 0; i < this.length; i += 1) {
            var n = t[i].style;
            n.webkitTransitionDuration = e, n.transitionDuration = e
        }
        return this
    }

    function u() {
        function t(t) {
            var i = t.target;
            if (i) {
                var n = t.target.dom7EventData || [];
                if (n.indexOf(t) < 0 && n.unshift(t), e(i).is(l)) d.apply(i, n); else for (var r = e(i).parents(), s = 0; s < r.length; s += 1) e(r[s]).is(l) && d.apply(r[s], n)
            }
        }

        function i(e) {
            var t = e && e.target ? e.target.dom7EventData || [] : [];
            t.indexOf(e) < 0 && t.unshift(e), d.apply(this, t)
        }

        for (var n, r = this, s = [], a = arguments.length; a--;) s[a] = arguments[a];
        var o = s[0], l = s[1], d = s[2], c = s[3];
        "function" == typeof s[1] && (n = s, o = n[0], d = n[1], c = n[2], l = void 0), c || (c = !1);
        for (var u, h = o.split(" "), p = 0; p < this.length; p += 1) {
            var f = r[p];
            if (l) for (u = 0; u < h.length; u += 1) {
                var m = h[u];
                f.dom7LiveListeners || (f.dom7LiveListeners = {}), f.dom7LiveListeners[m] || (f.dom7LiveListeners[m] = []), f.dom7LiveListeners[m].push({
                    listener: d,
                    proxyListener: t
                }), f.addEventListener(m, t, c)
            } else for (u = 0; u < h.length; u += 1) {
                var g = h[u];
                f.dom7Listeners || (f.dom7Listeners = {}), f.dom7Listeners[g] || (f.dom7Listeners[g] = []), f.dom7Listeners[g].push({
                    listener: d,
                    proxyListener: i
                }), f.addEventListener(g, i, c)
            }
        }
        return this
    }

    function h() {
        for (var e, t = this, i = [], n = arguments.length; n--;) i[n] = arguments[n];
        var r = i[0], s = i[1], a = i[2], o = i[3];
        "function" == typeof i[1] && (e = i, r = e[0], a = e[1], o = e[2], s = void 0), o || (o = !1);
        for (var l = r.split(" "), d = 0; d < l.length; d += 1) for (var c = l[d], u = 0; u < this.length; u += 1) {
            var h = t[u], p = void 0;
            !s && h.dom7Listeners ? p = h.dom7Listeners[c] : s && h.dom7LiveListeners && (p = h.dom7LiveListeners[c]);
            for (var f = p.length - 1; f >= 0; f -= 1) {
                var m = p[f];
                a && m.listener === a ? (h.removeEventListener(c, m.proxyListener, o), p.splice(f, 1)) : a || (h.removeEventListener(c, m.proxyListener, o), p.splice(f, 1))
            }
        }
        return this
    }

    function p() {
        for (var e = this, t = [], i = arguments.length; i--;) t[i] = arguments[i];
        for (var n = t[0].split(" "), r = t[1], s = 0; s < n.length; s += 1) for (var a = n[s], o = 0; o < this.length; o += 1) {
            var l = e[o], d = void 0;
            try {
                d = new Le.CustomEvent(a, {detail: r, bubbles: !0, cancelable: !0})
            } catch (e) {
                d = Ne.createEvent("Event"), d.initEvent(a, !0, !0), d.detail = r
            }
            l.dom7EventData = t.filter(function (e, t) {
                return t > 0
            }), l.dispatchEvent(d), l.dom7EventData = [], delete l.dom7EventData
        }
        return this
    }

    function f(e) {
        function t(s) {
            if (s.target === this) for (e.call(this, s), i = 0; i < n.length; i += 1) r.off(n[i], t)
        }

        var i, n = ["webkitTransitionEnd", "transitionend"], r = this;
        if (e) for (i = 0; i < n.length; i += 1) r.on(n[i], t);
        return this
    }

    function m(e) {
        if (this.length > 0) {
            if (e) {
                var t = this.styles();
                return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
            }
            return this[0].offsetWidth
        }
        return null
    }

    function g(e) {
        if (this.length > 0) {
            if (e) {
                var t = this.styles();
                return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
            }
            return this[0].offsetHeight
        }
        return null
    }

    function v() {
        if (this.length > 0) {
            var e = this[0], t = e.getBoundingClientRect(), i = Ne.body, n = e.clientTop || i.clientTop || 0,
                r = e.clientLeft || i.clientLeft || 0, s = e === Le ? Le.scrollY : e.scrollTop,
                a = e === Le ? Le.scrollX : e.scrollLeft;
            return {top: t.top + s - n, left: t.left + a - r}
        }
        return null
    }

    function y() {
        return this[0] ? Le.getComputedStyle(this[0], null) : {}
    }

    function b(e, t) {
        var i, n = this;
        if (1 === arguments.length) {
            if ("string" != typeof e) {
                for (i = 0; i < this.length; i += 1) for (var r in e) n[i].style[r] = e[r];
                return this
            }
            if (this[0]) return Le.getComputedStyle(this[0], null).getPropertyValue(e)
        }
        if (2 === arguments.length && "string" == typeof e) {
            for (i = 0; i < this.length; i += 1) n[i].style[e] = t;
            return this
        }
        return this
    }

    function _(e) {
        var t = this;
        if (!e) return this;
        for (var i = 0; i < this.length; i += 1) if (!1 === e.call(t[i], i, t[i])) return t;
        return this
    }

    function w(e) {
        var t = this;
        if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
        for (var i = 0; i < this.length; i += 1) t[i].innerHTML = e;
        return this
    }

    function x(e) {
        var t = this;
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (var i = 0; i < this.length; i += 1) t[i].textContent = e;
        return this
    }

    function T(t) {
        var i, n, r = this[0];
        if (!r || void 0 === t) return !1;
        if ("string" == typeof t) {
            if (r.matches) return r.matches(t);
            if (r.webkitMatchesSelector) return r.webkitMatchesSelector(t);
            if (r.msMatchesSelector) return r.msMatchesSelector(t);
            for (i = e(t), n = 0; n < i.length; n += 1) if (i[n] === r) return !0;
            return !1
        }
        if (t === Ne) return r === Ne;
        if (t === Le) return r === Le;
        if (t.nodeType || t instanceof $e) {
            for (i = t.nodeType ? [t] : t, n = 0; n < i.length; n += 1) if (i[n] === r) return !0;
            return !1
        }
        return !1
    }

    function E() {
        var e, t = this[0];
        if (t) {
            for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
            return e
        }
    }

    function S(e) {
        if (void 0 === e) return this;
        var t, i = this.length;
        return e > i - 1 ? new $e([]) : e < 0 ? (t = i + e, new $e(t < 0 ? [] : [this[t]])) : new $e([this[e]])
    }

    function C() {
        for (var e = this, t = [], i = arguments.length; i--;) t[i] = arguments[i];
        for (var n, r = 0; r < t.length; r += 1) {
            n = t[r];
            for (var s = 0; s < this.length; s += 1) if ("string" == typeof n) {
                var a = Ne.createElement("div");
                for (a.innerHTML = n; a.firstChild;) e[s].appendChild(a.firstChild)
            } else if (n instanceof $e) for (var o = 0; o < n.length; o += 1) e[s].appendChild(n[o]); else e[s].appendChild(n)
        }
        return this
    }

    function k(e) {
        var t, i, n = this;
        for (t = 0; t < this.length; t += 1) if ("string" == typeof e) {
            var r = Ne.createElement("div");
            for (r.innerHTML = e, i = r.childNodes.length - 1; i >= 0; i -= 1) n[t].insertBefore(r.childNodes[i], n[t].childNodes[0])
        } else if (e instanceof $e) for (i = 0; i < e.length; i += 1) n[t].insertBefore(e[i], n[t].childNodes[0]); else n[t].insertBefore(e, n[t].childNodes[0]);
        return this
    }

    function D(t) {
        return new $e(this.length > 0 ? t ? this[0].nextElementSibling && e(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
    }

    function O(t) {
        var i = [], n = this[0];
        if (!n) return new $e([]);
        for (; n.nextElementSibling;) {
            var r = n.nextElementSibling;
            t ? e(r).is(t) && i.push(r) : i.push(r), n = r
        }
        return new $e(i)
    }

    function M(t) {
        if (this.length > 0) {
            var i = this[0];
            return new $e(t ? i.previousElementSibling && e(i.previousElementSibling).is(t) ? [i.previousElementSibling] : [] : i.previousElementSibling ? [i.previousElementSibling] : [])
        }
        return new $e([])
    }

    function A(t) {
        var i = [], n = this[0];
        if (!n) return new $e([]);
        for (; n.previousElementSibling;) {
            var r = n.previousElementSibling;
            t ? e(r).is(t) && i.push(r) : i.push(r), n = r
        }
        return new $e(i)
    }

    function I(i) {
        for (var n = this, r = [], s = 0; s < this.length; s += 1) null !== n[s].parentNode && (i ? e(n[s].parentNode).is(i) && r.push(n[s].parentNode) : r.push(n[s].parentNode));
        return e(t(r))
    }

    function P(i) {
        for (var n = this, r = [], s = 0; s < this.length; s += 1) for (var a = n[s].parentNode; a;) i ? e(a).is(i) && r.push(a) : r.push(a), a = a.parentNode;
        return e(t(r))
    }

    function N(e) {
        var t = this;
        return void 0 === e ? new $e([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
    }

    function L(e) {
        for (var t = this, i = [], n = 0; n < this.length; n += 1) for (var r = t[n].querySelectorAll(e), s = 0; s < r.length; s += 1) i.push(r[s]);
        return new $e(i)
    }

    function $(i) {
        for (var n = this, r = [], s = 0; s < this.length; s += 1) for (var a = n[s].childNodes, o = 0; o < a.length; o += 1) i ? 1 === a[o].nodeType && e(a[o]).is(i) && r.push(a[o]) : 1 === a[o].nodeType && r.push(a[o]);
        return new $e(t(r))
    }

    function H() {
        for (var e = this, t = 0; t < this.length; t += 1) e[t].parentNode && e[t].parentNode.removeChild(e[t])
        ;
        return this
    }

    function F() {
        for (var t = [], i = arguments.length; i--;) t[i] = arguments[i];
        var n, r, s = this;
        for (n = 0; n < t.length; n += 1) {
            var a = e(t[n]);
            for (r = 0; r < a.length; r += 1) s[s.length] = a[r], s.length += 1
        }
        return s
    }

    function W() {
        var e, t, i = this, n = i.$el;
        e = void 0 !== i.params.width ? i.params.width : n[0].clientWidth, t = void 0 !== i.params.height ? i.params.height : n[0].clientHeight, 0 === e && i.isHorizontal() || 0 === t && i.isVertical() || (e = e - parseInt(n.css("padding-left"), 10) - parseInt(n.css("padding-right"), 10), t = t - parseInt(n.css("padding-top"), 10) - parseInt(n.css("padding-bottom"), 10), Fe.extend(i, {
            width: e,
            height: t,
            size: i.isHorizontal() ? e : t
        }))
    }

    function j() {
        var e = this, t = e.params, i = e.$wrapperEl, n = e.size, r = e.rtlTranslate, s = e.wrongRTL,
            a = i.children("." + e.params.slideClass), o = e.virtual && t.virtual.enabled,
            l = o ? e.virtual.slides.length : a.length, d = [], c = [], u = [], h = t.slidesOffsetBefore;
        "function" == typeof h && (h = t.slidesOffsetBefore.call(e));
        var p = t.slidesOffsetAfter;
        "function" == typeof p && (p = t.slidesOffsetAfter.call(e));
        var f = l, m = e.snapGrid.length, g = e.snapGrid.length, v = t.spaceBetween, y = -h, b = 0, _ = 0;
        if (void 0 !== n) {
            "string" == typeof v && v.indexOf("%") >= 0 && (v = parseFloat(v.replace("%", "")) / 100 * n), e.virtualSize = -v, r ? a.css({
                marginLeft: "",
                marginTop: ""
            }) : a.css({marginRight: "", marginBottom: ""});
            var w;
            t.slidesPerColumn > 1 && (w = Math.floor(l / t.slidesPerColumn) === l / e.params.slidesPerColumn ? l : Math.ceil(l / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (w = Math.max(w, t.slidesPerView * t.slidesPerColumn)));
            for (var x, T = t.slidesPerColumn, E = w / T, S = E - (t.slidesPerColumn * E - l), C = 0; C < l; C += 1) {
                x = 0;
                var k = a.eq(C);
                if (t.slidesPerColumn > 1) {
                    var D = void 0, O = void 0, M = void 0;
                    "column" === t.slidesPerColumnFill ? (O = Math.floor(C / T), M = C - O * T, (O > S || O === S && M === T - 1) && (M += 1) >= T && (M = 0, O += 1), D = O + M * w / T, k.css({
                        "-webkit-box-ordinal-group": D,
                        "-moz-box-ordinal-group": D,
                        "-ms-flex-order": D,
                        "-webkit-order": D,
                        order: D
                    })) : (M = Math.floor(C / E), O = C - M * E), k.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== M && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", O).attr("data-swiper-row", M)
                }
                if ("none" !== k.css("display")) {
                    if ("auto" === t.slidesPerView) {
                        var A = Le.getComputedStyle(k[0], null), I = k[0].style.transform;
                        I && (k[0].style.transform = "none"), x = e.isHorizontal() ? k[0].getBoundingClientRect().width + parseFloat(A.getPropertyValue("margin-left")) + parseFloat(A.getPropertyValue("margin-right")) : k[0].getBoundingClientRect().height + parseFloat(A.getPropertyValue("margin-top")) + parseFloat(A.getPropertyValue("margin-bottom")), I && (k[0].style.transform = I), t.roundLengths && (x = Math.floor(x))
                    } else x = (n - (t.slidesPerView - 1) * v) / t.slidesPerView, t.roundLengths && (x = Math.floor(x)), a[C] && (e.isHorizontal() ? a[C].style.width = x + "px" : a[C].style.height = x + "px");
                    a[C] && (a[C].swiperSlideSize = x), u.push(x), t.centeredSlides ? (y = y + x / 2 + b / 2 + v, 0 === b && 0 !== C && (y = y - n / 2 - v), 0 === C && (y = y - n / 2 - v), Math.abs(y) < .001 && (y = 0), _ % t.slidesPerGroup == 0 && d.push(y), c.push(y)) : (_ % t.slidesPerGroup == 0 && d.push(y), c.push(y), y = y + x + v), e.virtualSize += x + v, b = x, _ += 1
                }
            }
            e.virtualSize = Math.max(e.virtualSize, n) + p;
            var P;
            if (r && s && ("slide" === t.effect || "coverflow" === t.effect) && i.css({width: e.virtualSize + t.spaceBetween + "px"}), We.flexbox && !t.setWrapperSize || (e.isHorizontal() ? i.css({width: e.virtualSize + t.spaceBetween + "px"}) : i.css({height: e.virtualSize + t.spaceBetween + "px"})), t.slidesPerColumn > 1 && (e.virtualSize = (x + t.spaceBetween) * w, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? i.css({width: e.virtualSize + t.spaceBetween + "px"}) : i.css({height: e.virtualSize + t.spaceBetween + "px"}), t.centeredSlides)) {
                P = [];
                for (var N = 0; N < d.length; N += 1) d[N] < e.virtualSize + d[0] && P.push(d[N]);
                d = P
            }
            if (!t.centeredSlides) {
                P = [];
                for (var L = 0; L < d.length; L += 1) d[L] <= e.virtualSize - n && P.push(d[L]);
                d = P, Math.floor(e.virtualSize - n) - Math.floor(d[d.length - 1]) > 1 && d.push(e.virtualSize - n)
            }
            0 === d.length && (d = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? r ? a.css({marginLeft: v + "px"}) : a.css({marginRight: v + "px"}) : a.css({marginBottom: v + "px"})), Fe.extend(e, {
                slides: a,
                snapGrid: d,
                slidesGrid: c,
                slidesSizesGrid: u
            }), l !== f && e.emit("slidesLengthChange"), d.length !== m && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), c.length !== g && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
        }
    }

    function z(e) {
        var t, i = this, n = [], r = 0;
        if ("number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed), "auto" !== i.params.slidesPerView && i.params.slidesPerView > 1) for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
            var s = i.activeIndex + t;
            if (s > i.slides.length) break;
            n.push(i.slides.eq(s)[0])
        } else n.push(i.slides.eq(i.activeIndex)[0]);
        for (t = 0; t < n.length; t += 1) if (void 0 !== n[t]) {
            var a = n[t].offsetHeight;
            r = a > r ? a : r
        }
        r && i.$wrapperEl.css("height", r + "px")
    }

    function R() {
        for (var e = this, t = e.slides, i = 0; i < t.length; i += 1) t[i].swiperSlideOffset = e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop
    }

    function B(e) {
        void 0 === e && (e = this && this.translate || 0);
        var t = this, i = t.params, n = t.slides, r = t.rtlTranslate;
        if (0 !== n.length) {
            void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
            var s = -e;
            r && (s = e), n.removeClass(i.slideVisibleClass);
            for (var a = 0; a < n.length; a += 1) {
                var o = n[a],
                    l = (s + (i.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + i.spaceBetween);
                if (i.watchSlidesVisibility) {
                    var d = -(s - o.swiperSlideOffset), c = d + t.slidesSizesGrid[a];
                    (d >= 0 && d < t.size || c > 0 && c <= t.size || d <= 0 && c >= t.size) && n.eq(a).addClass(i.slideVisibleClass)
                }
                o.progress = r ? -l : l
            }
        }
    }

    function V(e) {
        void 0 === e && (e = this && this.translate || 0);
        var t = this, i = t.params, n = t.maxTranslate() - t.minTranslate(), r = t.progress, s = t.isBeginning,
            a = t.isEnd, o = s, l = a;
        0 === n ? (r = 0, s = !0, a = !0) : (r = (e - t.minTranslate()) / n, s = r <= 0, a = r >= 1), Fe.extend(t, {
            progress: r,
            isBeginning: s,
            isEnd: a
        }), (i.watchSlidesProgress || i.watchSlidesVisibility) && t.updateSlidesProgress(e), s && !o && t.emit("reachBeginning toEdge"), a && !l && t.emit("reachEnd toEdge"), (o && !s || l && !a) && t.emit("fromEdge"), t.emit("progress", r)
    }

    function Y() {
        var e = this, t = e.slides, i = e.params, n = e.$wrapperEl, r = e.activeIndex, s = e.realIndex,
            a = e.virtual && i.virtual.enabled;
        t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass);
        var o;
        o = a ? e.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : t.eq(r), o.addClass(i.slideActiveClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + s + '"]').addClass(i.slideDuplicateActiveClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + s + '"]').addClass(i.slideDuplicateActiveClass));
        var l = o.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
        i.loop && 0 === l.length && (l = t.eq(0), l.addClass(i.slideNextClass));
        var d = o.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
        i.loop && 0 === d.length && (d = t.eq(-1), d.addClass(i.slidePrevClass)), i.loop && (l.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), d.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
    }

    function G(e) {
        var t, i = this, n = i.rtlTranslate ? i.translate : -i.translate, r = i.slidesGrid, s = i.snapGrid,
            a = i.params, o = i.activeIndex, l = i.realIndex, d = i.snapIndex, c = e;
        if (void 0 === c) {
            for (var u = 0; u < r.length; u += 1) void 0 !== r[u + 1] ? n >= r[u] && n < r[u + 1] - (r[u + 1] - r[u]) / 2 ? c = u : n >= r[u] && n < r[u + 1] && (c = u + 1) : n >= r[u] && (c = u);
            a.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
        }
        if (t = s.indexOf(n) >= 0 ? s.indexOf(n) : Math.floor(c / a.slidesPerGroup), t >= s.length && (t = s.length - 1), c === o) return void(t !== d && (i.snapIndex = t, i.emit("snapIndexChange")));
        var h = parseInt(i.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
        Fe.extend(i, {
            snapIndex: t,
            realIndex: h,
            previousIndex: o,
            activeIndex: c
        }), i.emit("activeIndexChange"), i.emit("snapIndexChange"), l !== h && i.emit("realIndexChange"), i.emit("slideChange")
    }

    function q(t) {
        var i = this, n = i.params, r = e(t.target).closest("." + n.slideClass)[0], s = !1;
        if (r) for (var a = 0; a < i.slides.length; a += 1) i.slides[a] === r && (s = !0);
        if (!r || !s) return i.clickedSlide = void 0, void(i.clickedIndex = void 0);
        i.clickedSlide = r, i.virtual && i.params.virtual.enabled ? i.clickedIndex = parseInt(e(r).attr("data-swiper-slide-index"), 10) : i.clickedIndex = e(r).index(), n.slideToClickedSlide && void 0 !== i.clickedIndex && i.clickedIndex !== i.activeIndex && i.slideToClickedSlide()
    }

    function U(e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        var t = this, i = t.params, n = t.rtlTranslate, r = t.translate, s = t.$wrapperEl;
        if (i.virtualTranslate) return n ? -r : r;
        var a = Fe.getTranslate(s[0], e);
        return n && (a = -a), a || 0
    }

    function X(e, t) {
        var i = this, n = i.rtlTranslate, r = i.params, s = i.$wrapperEl, a = i.progress, o = 0, l = 0;
        i.isHorizontal() ? o = n ? -e : e : l = e, r.roundLengths && (o = Math.floor(o), l = Math.floor(l)), r.virtualTranslate || (We.transforms3d ? s.transform("translate3d(" + o + "px, " + l + "px, 0px)") : s.transform("translate(" + o + "px, " + l + "px)")), i.translate = i.isHorizontal() ? o : l;
        var d, c = i.maxTranslate() - i.minTranslate();
        d = 0 === c ? 0 : (e - i.minTranslate()) / c, d !== a && i.updateProgress(e), i.emit("setTranslate", i.translate, t)
    }

    function K() {
        return -this.snapGrid[0]
    }

    function J() {
        return -this.snapGrid[this.snapGrid.length - 1]
    }

    function Q(e, t) {
        var i = this;
        i.$wrapperEl.transition(e), i.emit("setTransition", e, t)
    }

    function Z(e, t) {
        void 0 === e && (e = !0);
        var i = this, n = i.activeIndex, r = i.params, s = i.previousIndex;
        r.autoHeight && i.updateAutoHeight();
        var a = t;
        if (a || (a = n > s ? "next" : n < s ? "prev" : "reset"), i.emit("transitionStart"), e && n !== s) {
            if ("reset" === a) return void i.emit("slideResetTransitionStart");
            i.emit("slideChangeTransitionStart"), "next" === a ? i.emit("slideNextTransitionStart") : i.emit("slidePrevTransitionStart")
        }
    }

    function ee(e, t) {
        void 0 === e && (e = !0);
        var i = this, n = i.activeIndex, r = i.previousIndex;
        i.animating = !1, i.setTransition(0);
        var s = t;
        if (s || (s = n > r ? "next" : n < r ? "prev" : "reset"), i.emit("transitionEnd"), e && n !== r) {
            if ("reset" === s) return void i.emit("slideResetTransitionEnd");
            i.emit("slideChangeTransitionEnd"), "next" === s ? i.emit("slideNextTransitionEnd") : i.emit("slidePrevTransitionEnd")
        }
    }

    function te(e, t, i, n) {
        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
        var r = this, s = e;
        s < 0 && (s = 0);
        var a = r.params, o = r.snapGrid, l = r.slidesGrid, d = r.previousIndex, c = r.activeIndex, u = r.rtlTranslate;
        if (r.animating && a.preventIntercationOnTransition) return !1;
        var h = Math.floor(s / a.slidesPerGroup);
        h >= o.length && (h = o.length - 1), (c || a.initialSlide || 0) === (d || 0) && i && r.emit("beforeSlideChangeStart");
        var p = -o[h];
        if (r.updateProgress(p), a.normalizeSlideIndex) for (var f = 0; f < l.length; f += 1) -Math.floor(100 * p) >= Math.floor(100 * l[f]) && (s = f);
        if (r.initialized && s !== c) {
            if (!r.allowSlideNext && p < r.translate && p < r.minTranslate()) return !1;
            if (!r.allowSlidePrev && p > r.translate && p > r.maxTranslate() && (c || 0) !== s) return !1
        }
        var m;
        return m = s > c ? "next" : s < c ? "prev" : "reset", u && -p === r.translate || !u && p === r.translate ? (r.updateActiveIndex(s), a.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== a.effect && r.setTranslate(p), "reset" !== m && (r.transitionStart(i, m), r.transitionEnd(i, m)), !1) : (0 !== t && We.transition ? (r.setTransition(t), r.setTranslate(p), r.updateActiveIndex(s), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, n), r.transitionStart(i, m), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
            r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.transitionEnd(i, m))
        }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))) : (r.setTransition(0), r.setTranslate(p), r.updateActiveIndex(s), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, n), r.transitionStart(i, m), r.transitionEnd(i, m)), !0)
    }

    function ie(e, t, i, n) {
        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
        var r = this, s = e;
        return r.params.loop && (s += r.loopedSlides), r.slideTo(s, t, i, n)
    }

    function ne(e, t, i) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var n = this, r = n.params, s = n.animating;
        return r.loop ? !s && (n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft, n.slideTo(n.activeIndex + r.slidesPerGroup, e, t, i)) : n.slideTo(n.activeIndex + r.slidesPerGroup, e, t, i)
    }

    function re(e, t, i) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var n = this, r = n.params, s = n.animating, a = n.snapGrid, o = n.slidesGrid, l = n.rtlTranslate;
        if (r.loop) {
            if (s) return !1;
            n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft
        }
        var d, c = l ? n.translate : -n.translate, u = (a[a.indexOf(c)], a[a.indexOf(c) - 1]);
        return u && (d = o.indexOf(u)) < 0 && (d = n.activeIndex - 1), n.slideTo(d, e, t, i)
    }

    function se(e, t, i) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var n = this;
        return n.slideTo(n.activeIndex, e, t, i)
    }

    function ae(e, t, i) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var n = this, r = n.activeIndex, s = Math.floor(r / n.params.slidesPerGroup);
        if (s < n.snapGrid.length - 1) {
            var a = n.rtlTranslate ? n.translate : -n.translate, o = n.snapGrid[s];
            a - o > (n.snapGrid[s + 1] - o) / 2 && (r = n.params.slidesPerGroup)
        }
        return n.slideTo(r, e, t, i)
    }

    function oe() {
        var t, i = this, n = i.params, r = i.$wrapperEl,
            s = "auto" === n.slidesPerView ? i.slidesPerViewDynamic() : n.slidesPerView, a = i.clickedIndex;
        if (n.loop) {
            if (i.animating) return;
            t = parseInt(e(i.clickedSlide).attr("data-swiper-slide-index"), 10), n.centeredSlides ? a < i.loopedSlides - s / 2 || a > i.slides.length - i.loopedSlides + s / 2 ? (i.loopFix(), a = r.children("." + n.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + n.slideDuplicateClass + ")").eq(0).index(), Fe.nextTick(function () {
                i.slideTo(a)
            })) : i.slideTo(a) : a > i.slides.length - s ? (i.loopFix(), a = r.children("." + n.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + n.slideDuplicateClass + ")").eq(0).index(), Fe.nextTick(function () {
                i.slideTo(a)
            })) : i.slideTo(a)
        } else i.slideTo(a)
    }

    function le() {
        var t = this, i = t.params, n = t.$wrapperEl;
        n.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
        var r = n.children("." + i.slideClass);
        if (i.loopFillGroupWithBlank) {
            var s = i.slidesPerGroup - r.length % i.slidesPerGroup;
            if (s !== i.slidesPerGroup) {
                for (var a = 0; a < s; a += 1) {
                    var o = e(Ne.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                    n.append(o)
                }
                r = n.children("." + i.slideClass)
            }
        }
        "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length), t.loopedSlides = parseInt(i.loopedSlides || i.slidesPerView, 10), t.loopedSlides += i.loopAdditionalSlides, t.loopedSlides > r.length && (t.loopedSlides = r.length);
        var l = [], d = [];
        r.each(function (i, n) {
            var s = e(n);
            i < t.loopedSlides && d.push(n), i < r.length && i >= r.length - t.loopedSlides && l.push(n), s.attr("data-swiper-slide-index", i)
        });
        for (var c = 0; c < d.length; c += 1) n.append(e(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass));
        for (var u = l.length - 1; u >= 0; u -= 1) n.prepend(e(l[u].cloneNode(!0)).addClass(i.slideDuplicateClass))
    }

    function de() {
        var e, t = this, i = t.params, n = t.activeIndex, r = t.slides, s = t.loopedSlides, a = t.allowSlidePrev,
            o = t.allowSlideNext, l = t.snapGrid, d = t.rtlTranslate;
        t.allowSlidePrev = !0, t.allowSlideNext = !0;
        var c = -l[n], u = c - t.getTranslate();
        if (n < s) {
            e = r.length - 3 * s + n, e += s;
            t.slideTo(e, 0, !1, !0) && 0 !== u && t.setTranslate((d ? -t.translate : t.translate) - u)
        } else if ("auto" === i.slidesPerView && n >= 2 * s || n > r.length - 2 * i.slidesPerView) {
            e = -r.length + n + s, e += s;
            var h = t.slideTo(e, 0, !1, !0);
            h && 0 !== u && t.setTranslate((d ? -t.translate : t.translate) - u)
        }
        t.allowSlidePrev = a, t.allowSlideNext = o
    }

    function ce() {
        var e = this, t = e.$wrapperEl, i = e.params, n = e.slides;
        t.children("." + i.slideClass + "." + i.slideDuplicateClass).remove(), n.removeAttr("data-swiper-slide-index")
    }

    function ue(e) {
        var t = this;
        if (!(We.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked)) {
            var i = t.el;
            i.style.cursor = "move", i.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", i.style.cursor = e ? "-moz-grabbin" : "-moz-grab", i.style.cursor = e ? "grabbing" : "grab"
        }
    }

    function he() {
        var e = this;
        We.touch || e.params.watchOverflow && e.isLocked || (e.el.style.cursor = "")
    }

    function pe(e) {
        var t = this, i = t.$wrapperEl, n = t.params;
        if (n.loop && t.loopDestroy(), "object" == typeof e && "length" in e) for (var r = 0; r < e.length; r += 1) e[r] && i.append(e[r]); else i.append(e);
        n.loop && t.loopCreate(), n.observer && We.observer || t.update()
    }

    function fe(e) {
        var t = this, i = t.params, n = t.$wrapperEl, r = t.activeIndex;
        i.loop && t.loopDestroy();
        var s = r + 1;
        if ("object" == typeof e && "length" in e) {
            for (var a = 0; a < e.length; a += 1) e[a] && n.prepend(e[a]);
            s = r + e.length
        } else n.prepend(e);
        i.loop && t.loopCreate(), i.observer && We.observer || t.update(), t.slideTo(s, 0, !1)
    }

    function me(e) {
        var t = this, i = t.params, n = t.$wrapperEl, r = t.activeIndex;
        i.loop && (t.loopDestroy(), t.slides = n.children("." + i.slideClass));
        var s, a = r;
        if ("object" == typeof e && "length" in e) {
            for (var o = 0; o < e.length; o += 1) s = e[o], t.slides[s] && t.slides.eq(s).remove(), s < a && (a -= 1);
            a = Math.max(a, 0)
        } else s = e, t.slides[s] && t.slides.eq(s).remove(), s < a && (a -= 1), a = Math.max(a, 0);
        i.loop && t.loopCreate(), i.observer && We.observer || t.update(), i.loop ? t.slideTo(a + t.loopedSlides, 0, !1) : t.slideTo(a, 0, !1)
    }

    function ge() {
        for (var e = this, t = [], i = 0; i < e.slides.length; i += 1) t.push(i);
        e.removeSlide(t)
    }

    function ve(t) {
        var i = this, n = i.touchEventsData, r = i.params, s = i.touches;
        if (!i.animating || !r.preventIntercationOnTransition) {
            var a = t;
            if (a.originalEvent && (a = a.originalEvent), n.isTouchEvent = "touchstart" === a.type, (n.isTouchEvent || !("which" in a) || 3 !== a.which) && (!n.isTouched || !n.isMoved)) {
                if (r.noSwiping && e(a.target).closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0]) return void(i.allowClick = !0);
                if (!r.swipeHandler || e(a).closest(r.swipeHandler)[0]) {
                    s.currentX = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX, s.currentY = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY;
                    var o = s.currentX, l = s.currentY;
                    if (!(Xe.ios && !Xe.cordova && r.iOSEdgeSwipeDetection && o <= r.iOSEdgeSwipeThreshold && o >= Le.screen.width - r.iOSEdgeSwipeThreshold)) {
                        if (Fe.extend(n, {
                            isTouched: !0,
                            isMoved: !1,
                            allowTouchCallbacks: !0,
                            isScrolling: void 0,
                            startMoving: void 0
                        }), s.startX = o, s.startY = l, n.touchStartTime = Fe.now(), i.allowClick = !0, i.updateSize(), i.swipeDirection = void 0, r.threshold > 0 && (n.allowThresholdMove = !1), "touchstart" !== a.type) {
                            var d = !0;
                            e(a.target).is(n.formElements) && (d = !1), Ne.activeElement && e(Ne.activeElement).is(n.formElements) && Ne.activeElement !== a.target && Ne.activeElement.blur(), d && i.allowTouchMove && a.preventDefault()
                        }
                        i.emit("touchStart", a)
                    }
                }
            }
        }
    }

    function ye(t) {
        var i = this, n = i.touchEventsData, r = i.params, s = i.touches, a = i.rtlTranslate, o = t;
        if (o.originalEvent && (o = o.originalEvent), !n.isTouched) return void(n.startMoving && n.isScrolling && i.emit("touchMoveOpposite", o));
        if (!n.isTouchEvent || "mousemove" !== o.type) {
            var l = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX,
                d = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;
            if (o.preventedByNestedSwiper) return s.startX = l, void(s.startY = d);
            if (!i.allowTouchMove) return i.allowClick = !1, void(n.isTouched && (Fe.extend(s, {
                startX: l,
                startY: d,
                currentX: l,
                currentY: d
            }), n.touchStartTime = Fe.now()));
            if (n.isTouchEvent && r.touchReleaseOnEdges && !r.loop) if (i.isVertical()) {
                if (d < s.startY && i.translate <= i.maxTranslate() || d > s.startY && i.translate >= i.minTranslate()) return n.isTouched = !1, void(n.isMoved = !1)
            } else if (l < s.startX && i.translate <= i.maxTranslate() || l > s.startX && i.translate >= i.minTranslate()) return;
            if (n.isTouchEvent && Ne.activeElement && o.target === Ne.activeElement && e(o.target).is(n.formElements)) return n.isMoved = !0, void(i.allowClick = !1);
            if (n.allowTouchCallbacks && i.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
                s.currentX = l, s.currentY = d;
                var c = s.currentX - s.startX, u = s.currentY - s.startY;
                if (void 0 === n.isScrolling) {
                    var h;
                    i.isHorizontal() && s.currentY === s.startY || i.isVertical() && s.currentX === s.startX ? n.isScrolling = !1 : c * c + u * u >= 25 && (h = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI, n.isScrolling = i.isHorizontal() ? h > r.touchAngle : 90 - h > r.touchAngle)
                }
                if (n.isScrolling && i.emit("touchMoveOpposite", o), "undefined" == typeof startMoving && (s.currentX === s.startX && s.currentY === s.startY || (n.startMoving = !0)), n.isScrolling) return void(n.isTouched = !1);
                if (n.startMoving) {
                    i.allowClick = !1, o.preventDefault(), r.touchMoveStopPropagation && !r.nested && o.stopPropagation(), n.isMoved || (r.loop && i.loopFix(), n.startTranslate = i.getTranslate(), i.setTransition(0), i.animating && i.$wrapperEl.trigger("webkitTransitionEnd transitionend"), n.allowMomentumBounce = !1, !r.grabCursor || !0 !== i.allowSlideNext && !0 !== i.allowSlidePrev || i.setGrabCursor(!0), i.emit("sliderFirstMove", o)), i.emit("sliderMove", o), n.isMoved = !0;
                    var p = i.isHorizontal() ? c : u;
                    s.diff = p, p *= r.touchRatio, a && (p = -p), i.swipeDirection = p > 0 ? "prev" : "next", n.currentTranslate = p + n.startTranslate;
                    var f = !0, m = r.resistanceRatio;
                    if (r.touchReleaseOnEdges && (m = 0), p > 0 && n.currentTranslate > i.minTranslate() ? (f = !1, r.resistance && (n.currentTranslate = i.minTranslate() - 1 + Math.pow(-i.minTranslate() + n.startTranslate + p, m))) : p < 0 && n.currentTranslate < i.maxTranslate() && (f = !1, r.resistance && (n.currentTranslate = i.maxTranslate() + 1 - Math.pow(i.maxTranslate() - n.startTranslate - p, m))), f && (o.preventedByNestedSwiper = !0), !i.allowSlideNext && "next" === i.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !i.allowSlidePrev && "prev" === i.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), r.threshold > 0) {
                        if (!(Math.abs(p) > r.threshold || n.allowThresholdMove)) return void(n.currentTranslate = n.startTranslate);
                        if (!n.allowThresholdMove) return n.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, n.currentTranslate = n.startTranslate, void(s.diff = i.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
                    }
                    r.followFinger && ((r.freeMode || r.watchSlidesProgress || r.watchSlidesVisibility) && (i.updateActiveIndex(), i.updateSlidesClasses()), r.freeMode && (0 === n.velocities.length && n.velocities.push({
                        position: s[i.isHorizontal() ? "startX" : "startY"],
                        time: n.touchStartTime
                    }), n.velocities.push({
                        position: s[i.isHorizontal() ? "currentX" : "currentY"],
                        time: Fe.now()
                    })), i.updateProgress(n.currentTranslate), i.setTranslate(n.currentTranslate))
                }
            }
        }
    }

    function be(e) {
        var t = this, i = t.touchEventsData, n = t.params, r = t.touches, s = t.rtlTranslate, a = t.$wrapperEl,
            o = t.slidesGrid, l = t.snapGrid, d = e;
        if (d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", d), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && n.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
        n.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        var c = Fe.now(), u = c - i.touchStartTime;
        if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap", d), u < 300 && c - i.lastClickTime > 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), i.clickTimeout = Fe.nextTick(function () {
            t && !t.destroyed && t.emit("click", d)
        }, 300)), u < 300 && c - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit("doubleTap", d))), i.lastClickTime = Fe.now(), Fe.nextTick(function () {
            t.destroyed || (t.allowClick = !0)
        }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === r.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
        i.isTouched = !1, i.isMoved = !1, i.startMoving = !1;
        var h;
        if (h = n.followFinger ? s ? t.translate : -t.translate : -i.currentTranslate, n.freeMode) {
            if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);
            if (h > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
            if (n.freeModeMomentum) {
                if (i.velocities.length > 1) {
                    var p = i.velocities.pop(), f = i.velocities.pop(), m = p.position - f.position,
                        g = p.time - f.time;
                    t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < n.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || Fe.now() - p.time > 300) && (t.velocity = 0)
                } else t.velocity = 0;
                t.velocity *= n.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                var v = 1e3 * n.freeModeMomentumRatio, y = t.velocity * v, b = t.translate + y;
                s && (b = -b);
                var _, w, x = !1, T = 20 * Math.abs(t.velocity) * n.freeModeMomentumBounceRatio;
                if (b < t.maxTranslate()) n.freeModeMomentumBounce ? (b + t.maxTranslate() < -T && (b = t.maxTranslate() - T), _ = t.maxTranslate(), x = !0, i.allowMomentumBounce = !0) : b = t.maxTranslate(), n.loop && n.centeredSlides && (w = !0); else if (b > t.minTranslate()) n.freeModeMomentumBounce ? (b - t.minTranslate() > T && (b = t.minTranslate() + T), _ = t.minTranslate(), x = !0, i.allowMomentumBounce = !0) : b = t.minTranslate(), n.loop && n.centeredSlides && (w = !0); else if (n.freeModeSticky) {
                    for (var E, S = 0; S < l.length; S += 1) if (l[S] > -b) {
                        E = S;
                        break
                    }
                    b = Math.abs(l[E] - b) < Math.abs(l[E - 1] - b) || "next" === t.swipeDirection ? l[E] : l[E - 1], b = -b
                }
                if (w && t.once("transitionEnd", function () {
                    t.loopFix()
                }), 0 !== t.velocity) v = s ? Math.abs((-b - t.translate) / t.velocity) : Math.abs((b - t.translate) / t.velocity); else if (n.freeModeSticky) return void t.slideToClosest();
                n.freeModeMomentumBounce && x ? (t.updateProgress(_), t.setTransition(v), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating = !0, a.transitionEnd(function () {
                    t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(n.speed), t.setTranslate(_), a.transitionEnd(function () {
                        t && !t.destroyed && t.transitionEnd()
                    }))
                })) : t.velocity ? (t.updateProgress(b), t.setTransition(v), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, a.transitionEnd(function () {
                    t && !t.destroyed && t.transitionEnd()
                }))) : t.updateProgress(b), t.updateActiveIndex(), t.updateSlidesClasses()
            } else if (n.freeModeSticky) return void t.slideToClosest();
            return void((!n.freeModeMomentum || u >= n.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses()))
        }
        for (var C = 0, k = t.slidesSizesGrid[0], D = 0; D < o.length; D += n.slidesPerGroup) void 0 !== o[D + n.slidesPerGroup] ? h >= o[D] && h < o[D + n.slidesPerGroup] && (C = D, k = o[D + n.slidesPerGroup] - o[D]) : h >= o[D] && (C = D, k = o[o.length - 1] - o[o.length - 2]);
        var O = (h - o[C]) / k;
        if (u > n.longSwipesMs) {
            if (!n.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (O >= n.longSwipesRatio ? t.slideTo(C + n.slidesPerGroup) : t.slideTo(C)), "prev" === t.swipeDirection && (O > 1 - n.longSwipesRatio ? t.slideTo(C + n.slidesPerGroup) : t.slideTo(C))
        } else {
            if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && t.slideTo(C + n.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(C)
        }
    }

    function _e() {
        var e = this, t = e.params, i = e.el;
        if (!i || 0 !== i.offsetWidth) {
            t.breakpoints && e.setBreakpoint();
            var n = e.allowSlideNext, r = e.allowSlidePrev, s = e.snapGrid;
            if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
                var a = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight()
            } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
            e.allowSlidePrev = r, e.allowSlideNext = n, e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow()
        }
    }

    function we(e) {
        var t = this;
        t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
    }

    function xe() {
        var e = this, t = e.params, i = e.touchEvents, n = e.el, r = e.wrapperEl;
        e.onTouchStart = ve.bind(e), e.onTouchMove = ye.bind(e), e.onTouchEnd = be.bind(e), e.onClick = we.bind(e);
        var s = "container" === t.touchEventsTarget ? n : r, a = !!t.nested;
        if (We.touch || !We.pointerEvents && !We.prefixedPointerEvents) {
            if (We.touch) {
                var o = !("touchstart" !== i.start || !We.passiveListener || !t.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                s.addEventListener(i.start, e.onTouchStart, o), s.addEventListener(i.move, e.onTouchMove, We.passiveListener ? {
                    passive: !1,
                    capture: a
                } : a), s.addEventListener(i.end, e.onTouchEnd, o)
            }
            (t.simulateTouch && !Xe.ios && !Xe.android || t.simulateTouch && !We.touch && Xe.ios) && (s.addEventListener("mousedown", e.onTouchStart, !1), Ne.addEventListener("mousemove", e.onTouchMove, a), Ne.addEventListener("mouseup", e.onTouchEnd, !1))
        } else s.addEventListener(i.start, e.onTouchStart, !1), Ne.addEventListener(i.move, e.onTouchMove, a), Ne.addEventListener(i.end, e.onTouchEnd, !1);
        (t.preventClicks || t.preventClicksPropagation) && s.addEventListener("click", e.onClick, !0), e.on("resize observerUpdate", _e, !0)
    }

    function Te() {
        var e = this, t = e.params, i = e.touchEvents, n = e.el, r = e.wrapperEl,
            s = "container" === t.touchEventsTarget ? n : r, a = !!t.nested;
        if (We.touch || !We.pointerEvents && !We.prefixedPointerEvents) {
            if (We.touch) {
                var o = !("onTouchStart" !== i.start || !We.passiveListener || !t.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                s.removeEventListener(i.start, e.onTouchStart, o), s.removeEventListener(i.move, e.onTouchMove, a), s.removeEventListener(i.end, e.onTouchEnd, o)
            }
            (t.simulateTouch && !Xe.ios && !Xe.android || t.simulateTouch && !We.touch && Xe.ios) && (s.removeEventListener("mousedown", e.onTouchStart, !1), Ne.removeEventListener("mousemove", e.onTouchMove, a), Ne.removeEventListener("mouseup", e.onTouchEnd, !1))
        } else s.removeEventListener(i.start, e.onTouchStart, !1), Ne.removeEventListener(i.move, e.onTouchMove, a), Ne.removeEventListener(i.end, e.onTouchEnd, !1);
        (t.preventClicks || t.preventClicksPropagation) && s.removeEventListener("click", e.onClick, !0), e.off("resize observerUpdate", _e)
    }

    function Ee() {
        var e = this, t = e.activeIndex, i = e.initialized, n = e.loopedSlides;
        void 0 === n && (n = 0);
        var r = e.params, s = r.breakpoints;
        if (s && (!s || 0 !== Object.keys(s).length)) {
            var a = e.getBreakpoint(s);
            if (a && e.currentBreakpoint !== a) {
                var o = a in s ? s[a] : e.originalParams, l = r.loop && o.slidesPerView !== r.slidesPerView;
                Fe.extend(e.params, o), Fe.extend(e, {
                    allowTouchMove: e.params.allowTouchMove,
                    allowSlideNext: e.params.allowSlideNext,
                    allowSlidePrev: e.params.allowSlidePrev
                }), e.currentBreakpoint = a, l && i && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - n + e.loopedSlides, 0, !1)), e.emit("breakpoint", o)
            }
        }
    }

    function Se(e) {
        if (e) {
            var t = !1, i = [];
            Object.keys(e).forEach(function (e) {
                i.push(e)
            }), i.sort(function (e, t) {
                return parseInt(e, 10) - parseInt(t, 10)
            });
            for (var n = 0; n < i.length; n += 1) {
                var r = i[n];
                r >= Le.innerWidth && !t && (t = r)
            }
            return t || "max"
        }
    }

    function Ce() {
        var e = this, t = e.classNames, i = e.params, n = e.rtl, r = e.$el, s = [];
        s.push(i.direction), i.freeMode && s.push("free-mode"), We.flexbox || s.push("no-flexbox"), i.autoHeight && s.push("autoheight"), n && s.push("rtl"), i.slidesPerColumn > 1 && s.push("multirow"), Xe.android && s.push("android"), Xe.ios && s.push("ios"), Qe.isIE && (We.pointerEvents || We.prefixedPointerEvents) && s.push("wp8-" + i.direction), s.forEach(function (e) {
            t.push(i.containerModifierClass + e)
        }), r.addClass(t.join(" "))
    }

    function ke() {
        var e = this, t = e.$el, i = e.classNames;
        t.removeClass(i.join(" "))
    }

    function De(e, t, i, n, r, s) {
        function a() {
            s && s()
        }

        var o;
        e.complete && r ? a() : t ? (o = new Le.Image, o.onload = a, o.onerror = a, n && (o.sizes = n), i && (o.srcset = i), t && (o.src = t)) : a()
    }

    function Oe() {
        function e() {
            void 0 !== t && null !== t && t && !t.destroyed && (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1), t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(), t.emit("imagesReady")))
        }

        var t = this;
        t.imagesToLoad = t.$el.find("img");
        for (var i = 0; i < t.imagesToLoad.length; i += 1) {
            var n = t.imagesToLoad[i];
            t.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, e)
        }
    }

    function Me() {
        var e = this, t = e.isLocked;
        e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update())
    }

    function Ae() {
        var e = "onwheel" in Ne;
        if (!e) {
            var t = Ne.createElement("div");
            t.setAttribute("onwheel", "return;"), e = "function" == typeof t.onwheel
        }
        return !e && Ne.implementation && Ne.implementation.hasFeature && !0 !== Ne.implementation.hasFeature("", "") && (e = Ne.implementation.hasFeature("Events.wheel", "3.0")), e
    }

    var Ie;
    Ie = "undefined" == typeof document ? {
        body: {}, addEventListener: function () {
        }, removeEventListener: function () {
        }, activeElement: {
            blur: function () {
            }, nodeName: ""
        }, querySelector: function () {
            return null
        }, querySelectorAll: function () {
            return []
        }, getElementById: function () {
            return null
        }, createEvent: function () {
            return {
                initEvent: function () {
                }
            }
        }, createElement: function () {
            return {
                children: [], childNodes: [], style: {}, setAttribute: function () {
                },
                getElementsByTagName: function () {
                    return []
                }
            }
        }, location: {hash: ""}
    } : document;
    var Pe, Ne = Ie;
    Pe = "undefined" == typeof window ? {
        document: Ne,
        navigator: {userAgent: ""},
        location: {},
        history: {},
        CustomEvent: function () {
            return this
        },
        addEventListener: function () {
        },
        removeEventListener: function () {
        },
        getComputedStyle: function () {
            return {
                getPropertyValue: function () {
                    return ""
                }
            }
        },
        Image: function () {
        },
        Date: function () {
        },
        screen: {},
        setTimeout: function () {
        },
        clearTimeout: function () {
        }
    } : window;
    var Le = Pe, $e = function (e) {
        for (var t = this, i = 0; i < e.length; i += 1) t[i] = e[i];
        return t.length = e.length, this
    };
    e.fn = $e.prototype, e.Class = $e, e.Dom7 = $e;
    var He = {
        addClass: i,
        removeClass: n,
        hasClass: r,
        toggleClass: s,
        attr: a,
        removeAttr: o,
        data: l,
        transform: d,
        transition: c,
        on: u,
        off: h,
        trigger: p,
        transitionEnd: f,
        outerWidth: m,
        outerHeight: g,
        offset: v,
        css: b,
        each: _,
        html: w,
        text: x,
        is: T,
        index: E,
        eq: S,
        append: C,
        prepend: k,
        next: D,
        nextAll: O,
        prev: M,
        prevAll: A,
        parent: I,
        parents: P,
        closest: N,
        find: L,
        children: $,
        remove: H,
        add: F,
        styles: y
    };
    Object.keys(He).forEach(function (t) {
        e.fn[t] = He[t]
    });
    var Fe = {
        deleteProps: function (e) {
            var t = e;
            Object.keys(t).forEach(function (e) {
                try {
                    t[e] = null
                } catch (e) {
                }
                try {
                    delete t[e]
                } catch (e) {
                }
            })
        }, nextTick: function (e, t) {
            return void 0 === t && (t = 0), setTimeout(e, t)
        }, now: function () {
            return Date.now()
        }, getTranslate: function (e, t) {
            void 0 === t && (t = "x");
            var i, n, r, s = Le.getComputedStyle(e, null);
            return Le.WebKitCSSMatrix ? (n = s.transform || s.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map(function (e) {
                return e.replace(",", ".")
            }).join(", ")), r = new Le.WebKitCSSMatrix("none" === n ? "" : n)) : (r = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = r.toString().split(",")), "x" === t && (n = Le.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (n = Le.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), n || 0
        }, parseUrlQuery: function (e) {
            var t, i, n, r, s = {}, a = e || Le.location.href;
            if ("string" == typeof a && a.length) for (a = a.indexOf("?") > -1 ? a.replace(/\S*\?/, "") : "", i = a.split("&").filter(function (e) {
                return "" !== e
            }), r = i.length, t = 0; t < r; t += 1) n = i[t].replace(/#\S+/g, "").split("="), s[decodeURIComponent(n[0])] = void 0 === n[1] ? void 0 : decodeURIComponent(n[1]) || "";
            return s
        }, isObject: function (e) {
            return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
        }, extend: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            for (var i = Object(e[0]), n = 1; n < e.length; n += 1) {
                var r = e[n];
                if (void 0 !== r && null !== r) for (var s = Object.keys(Object(r)), a = 0, o = s.length; a < o; a += 1) {
                    var l = s[a], d = Object.getOwnPropertyDescriptor(r, l);
                    void 0 !== d && d.enumerable && (Fe.isObject(i[l]) && Fe.isObject(r[l]) ? Fe.extend(i[l], r[l]) : !Fe.isObject(i[l]) && Fe.isObject(r[l]) ? (i[l] = {}, Fe.extend(i[l], r[l])) : i[l] = r[l])
                }
            }
            return i
        }
    }, We = function () {
        var e = Ne.createElement("div");
        return {
            touch: Le.Modernizr && !0 === Le.Modernizr.touch || function () {
                return !!("ontouchstart" in Le || Le.DocumentTouch && Ne instanceof Le.DocumentTouch)
            }(),
            pointerEvents: !(!Le.navigator.pointerEnabled && !Le.PointerEvent),
            prefixedPointerEvents: !!Le.navigator.msPointerEnabled,
            transition: function () {
                var t = e.style;
                return "transition" in t || "webkitTransition" in t || "MozTransition" in t
            }(),
            transforms3d: Le.Modernizr && !0 === Le.Modernizr.csstransforms3d || function () {
                var t = e.style;
                return "webkitPerspective" in t || "MozPerspective" in t || "OPerspective" in t || "MsPerspective" in t || "perspective" in t
            }(),
            flexbox: function () {
                for (var t = e.style, i = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), n = 0; n < i.length; n += 1) if (i[n] in t) return !0;
                return !1
            }(),
            observer: function () {
                return "MutationObserver" in Le || "WebkitMutationObserver" in Le
            }(),
            passiveListener: function () {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function () {
                            e = !0
                        }
                    });
                    Le.addEventListener("testPassiveListener", null, t)
                } catch (e) {
                }
                return e
            }(),
            gestures: function () {
                return "ongesturestart" in Le
            }()
        }
    }(), je = function (e) {
        void 0 === e && (e = {});
        var t = this;
        t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
            t.on(e, t.params.on[e])
        })
    }, ze = {components: {configurable: !0}};
    je.prototype.on = function (e, t, i) {
        var n = this;
        if ("function" != typeof t) return n;
        var r = i ? "unshift" : "push";
        return e.split(" ").forEach(function (e) {
            n.eventsListeners[e] || (n.eventsListeners[e] = []), n.eventsListeners[e][r](t)
        }), n
    }, je.prototype.once = function (e, t, i) {
        function n() {
            for (var i = [], s = arguments.length; s--;) i[s] = arguments[s];
            t.apply(r, i), r.off(e, n)
        }

        var r = this;
        return "function" != typeof t ? r : r.on(e, n, i)
    }, je.prototype.off = function (e, t) {
        var i = this;
        return i.eventsListeners ? (e.split(" ").forEach(function (e) {
            void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e].forEach(function (n, r) {
                n === t && i.eventsListeners[e].splice(r, 1)
            })
        }), i) : i
    }, je.prototype.emit = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var i = this;
        if (!i.eventsListeners) return i;
        var n, r, s;
        return "string" == typeof e[0] || Array.isArray(e[0]) ? (n = e[0], r = e.slice(1, e.length), s = i) : (n = e[0].events, r = e[0].data, s = e[0].context || i), (Array.isArray(n) ? n : n.split(" ")).forEach(function (e) {
            if (i.eventsListeners && i.eventsListeners[e]) {
                var t = [];
                i.eventsListeners[e].forEach(function (e) {
                    t.push(e)
                }), t.forEach(function (e) {
                    e.apply(s, r)
                })
            }
        }), i
    }, je.prototype.useModulesParams = function (e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function (i) {
            var n = t.modules[i];
            n.params && Fe.extend(e, n.params)
        })
    }, je.prototype.useModules = function (e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function (i) {
            var n = t.modules[i], r = e[i] || {};
            n.instance && Object.keys(n.instance).forEach(function (e) {
                var i = n.instance[e];
                t[e] = "function" == typeof i ? i.bind(t) : i
            }), n.on && t.on && Object.keys(n.on).forEach(function (e) {
                t.on(e, n.on[e])
            }), n.create && n.create.bind(t)(r)
        })
    }, ze.components.set = function (e) {
        var t = this;
        t.use && t.use(e)
    }, je.installModule = function (e) {
        for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
        var n = this;
        n.prototype.modules || (n.prototype.modules = {});
        var r = e.name || Object.keys(n.prototype.modules).length + "_" + Fe.now();
        return n.prototype.modules[r] = e, e.proto && Object.keys(e.proto).forEach(function (t) {
            n.prototype[t] = e.proto[t]
        }), e.static && Object.keys(e.static).forEach(function (t) {
            n[t] = e.static[t]
        }), e.install && e.install.apply(n, t), n
    }, je.use = function (e) {
        for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
        var n = this;
        return Array.isArray(e) ? (e.forEach(function (e) {
            return n.installModule(e)
        }), n) : n.installModule.apply(n, [e].concat(t))
    }, Object.defineProperties(je, ze);
    var Re = {
            updateSize: W,
            updateSlides: j,
            updateAutoHeight: z,
            updateSlidesOffset: R,
            updateSlidesProgress: B,
            updateProgress: V,
            updateSlidesClasses: Y,
            updateActiveIndex: G,
            updateClickedSlide: q
        }, Be = {getTranslate: U, setTranslate: X, minTranslate: K, maxTranslate: J},
        Ve = {setTransition: Q, transitionStart: Z, transitionEnd: ee}, Ye = {
            slideTo: te,
            slideToLoop: ie,
            slideNext: ne,
            slidePrev: re,
            slideReset: se,
            slideToClosest: ae,
            slideToClickedSlide: oe
        }, Ge = {loopCreate: le, loopFix: de, loopDestroy: ce}, qe = {setGrabCursor: ue, unsetGrabCursor: he},
        Ue = {appendSlide: pe, prependSlide: fe, removeSlide: me, removeAllSlides: ge}, Xe = function () {
            var e = Le.navigator.userAgent, t = {
                    ios: !1,
                    android: !1,
                    androidChrome: !1,
                    desktop: !1,
                    windows: !1,
                    iphone: !1,
                    ipod: !1,
                    ipad: !1,
                    cordova: Le.cordova || Le.phonegap,
                    phonegap: Le.cordova || Le.phonegap
                }, i = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/), n = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                r = e.match(/(iPad).*OS\s([\d_]+)/), s = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                a = !r && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            if (i && (t.os = "windows", t.osVersion = i[2], t.windows = !0), n && !i && (t.os = "android", t.osVersion = n[2], t.android = !0, t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0), (r || a || s) && (t.os = "ios", t.ios = !0), a && !s && (t.osVersion = a[2].replace(/_/g, "."), t.iphone = !0), r && (t.osVersion = r[2].replace(/_/g, "."), t.ipad = !0), s && (t.osVersion = s[3] ? s[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && e.indexOf("Version/") >= 0 && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (a || r || s) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
                var o = t.osVersion.split("."), l = Ne.querySelector('meta[name="viewport"]');
                t.minimalUi = !t.webView && (s || a) && (1 * o[0] == 7 ? 1 * o[1] >= 1 : 1 * o[0] > 7) && l && l.getAttribute("content").indexOf("minimal-ui") >= 0
            }
            return t.pixelRatio = Le.devicePixelRatio || 1, t
        }(), Ke = {attachEvents: xe, detachEvents: Te}, Je = {setBreakpoint: Ee, getBreakpoint: Se}, Qe = function () {
            return {
                isIE: !!Le.navigator.userAgent.match(/Trident/g) || !!Le.navigator.userAgent.match(/MSIE/g),
                isSafari: function () {
                    var e = Le.navigator.userAgent.toLowerCase();
                    return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
                }(),
                isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(Le.navigator.userAgent)
            }
        }(), Ze = {addClasses: Ce, removeClasses: ke}, et = {loadImage: De, preloadImages: Oe}, tt = {checkOverflow: Me},
        it = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            preventIntercationOnTransition: !1,
            iOSEdgeSwipeDetection: !1,
            iOSEdgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
        }, nt = {
            update: Re,
            translate: Be,
            transition: Ve,
            slide: Ye,
            loop: Ge,
            grabCursor: qe,
            manipulation: Ue,
            events: Ke,
            breakpoints: Je,
            checkOverflow: tt,
            classes: Ze,
            images: et
        }, rt = {}, st = function (t) {
            function i() {
                for (var n, r = [], s = arguments.length; s--;) r[s] = arguments[s];
                var a, o;
                1 === r.length && r[0].constructor && r[0].constructor === Object ? o = r[0] : (n = r, a = n[0], o = n[1]), o || (o = {}), o = Fe.extend({}, o), a && !o.el && (o.el = a), t.call(this, o), Object.keys(nt).forEach(function (e) {
                    Object.keys(nt[e]).forEach(function (t) {
                        i.prototype[t] || (i.prototype[t] = nt[e][t])
                    })
                });
                var l = this;
                void 0 === l.modules && (l.modules = {}), Object.keys(l.modules).forEach(function (e) {
                    var t = l.modules[e];
                    if (t.params) {
                        var i = Object.keys(t.params)[0], n = t.params[i];
                        if ("object" != typeof n) return;
                        if (!(i in o && "enabled" in n)) return;
                        !0 === o[i] && (o[i] = {enabled: !0}), "object" != typeof o[i] || "enabled" in o[i] || (o[i].enabled = !0), o[i] || (o[i] = {enabled: !1})
                    }
                });
                var d = Fe.extend({}, it);
                l.useModulesParams(d), l.params = Fe.extend({}, d, rt, o), l.originalParams = Fe.extend({}, l.params), l.passedParams = Fe.extend({}, o), l.$ = e;
                var c = e(l.params.el);
                if (a = c[0]) {
                    if (c.length > 1) {
                        var u = [];
                        return c.each(function (e, t) {
                            var n = Fe.extend({}, o, {el: t});
                            u.push(new i(n))
                        }), u
                    }
                    a.swiper = l, c.data("swiper", l);
                    var h = c.children("." + l.params.wrapperClass);
                    return Fe.extend(l, {
                        $el: c,
                        el: a,
                        $wrapperEl: h,
                        wrapperEl: h[0],
                        classNames: [],
                        slides: e(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: function () {
                            return "horizontal" === l.params.direction
                        },
                        isVertical: function () {
                            return "vertical" === l.params.direction
                        },
                        rtl: "rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction"),
                        rtlTranslate: "horizontal" === l.params.direction && ("rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction")),
                        wrongRTL: "-webkit-box" === h.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: l.params.allowSlideNext,
                        allowSlidePrev: l.params.allowSlidePrev,
                        touchEvents: function () {
                            var e = ["touchstart", "touchmove", "touchend"], t = ["mousedown", "mousemove", "mouseup"];
                            return We.pointerEvents ? t = ["pointerdown", "pointermove", "pointerup"] : We.prefixedPointerEvents && (t = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), l.touchEventsTouch = {
                                start: e[0],
                                move: e[1],
                                end: e[2]
                            }, l.touchEventsDesktop = {
                                start: t[0],
                                move: t[1],
                                end: t[2]
                            }, We.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop
                        }(),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video",
                            lastClickTime: Fe.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: l.params.allowTouchMove,
                        touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), l.useModules(), l.params.init && l.init(), l
                }
            }

            t && (i.__proto__ = t), i.prototype = Object.create(t && t.prototype), i.prototype.constructor = i;
            var n = {
                extendedDefaults: {configurable: !0},
                defaults: {configurable: !0},
                Class: {configurable: !0},
                $: {configurable: !0}
            };
            return i.prototype.slidesPerViewDynamic = function () {
                var e = this, t = e.params, i = e.slides, n = e.slidesGrid, r = e.size, s = e.activeIndex, a = 1;
                if (t.centeredSlides) {
                    for (var o, l = i[s].swiperSlideSize, d = s + 1; d < i.length; d += 1) i[d] && !o && (l += i[d].swiperSlideSize, a += 1, l > r && (o = !0));
                    for (var c = s - 1; c >= 0; c -= 1) i[c] && !o && (l += i[c].swiperSlideSize, a += 1, l > r && (o = !0))
                } else for (var u = s + 1; u < i.length; u += 1) n[u] - n[s] < r && (a += 1);
                return a
            }, i.prototype.update = function () {
                function e() {
                    var e = t.rtlTranslate ? -1 * t.translate : t.translate,
                        i = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
                    t.setTranslate(i), t.updateActiveIndex(), t.updateSlidesClasses()
                }

                var t = this;
                if (t && !t.destroyed) {
                    var i = t.snapGrid, n = t.params;
                    n.breakpoints && t.setBreakpoint(), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses();
                    t.params.freeMode ? (e(), t.params.autoHeight && t.updateAutoHeight()) : (("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0)) || e(), n.watchOverflow && i !== t.snapGrid && t.checkOverflow(), t.emit("update")
                }
            }, i.prototype.init = function () {
                var e = this;
                e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
            }, i.prototype.destroy = function (e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                var i = this, n = i.params, r = i.$el, s = i.$wrapperEl, a = i.slides;
                return void 0 === i.params || i.destroyed ? null : (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), n.loop && i.loopDestroy(), t && (i.removeClasses(), r.removeAttr("style"), s.removeAttr("style"), a && a.length && a.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function (e) {
                    i.off(e)
                }), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), Fe.deleteProps(i)), i.destroyed = !0, null)
            }, i.extendDefaults = function (e) {
                Fe.extend(rt, e)
            }, n.extendedDefaults.get = function () {
                return rt
            }, n.defaults.get = function () {
                return it
            }, n.Class.get = function () {
                return t
            }, n.$.get = function () {
                return e
            }, Object.defineProperties(i, n), i
        }(je), at = {name: "device", proto: {device: Xe}, static: {device: Xe}},
        ot = {name: "support", proto: {support: We}, static: {support: We}},
        lt = {name: "browser", proto: {browser: Qe}, static: {browser: Qe}}, dt = {
            name: "resize", create: function () {
                var e = this;
                Fe.extend(e, {
                    resize: {
                        resizeHandler: function () {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                        }, orientationChangeHandler: function () {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            }, on: {
                init: function () {
                    var e = this;
                    Le.addEventListener("resize", e.resize.resizeHandler), Le.addEventListener("orientationchange", e.resize.orientationChangeHandler)
                }, destroy: function () {
                    var e = this;
                    Le.removeEventListener("resize", e.resize.resizeHandler), Le.removeEventListener("orientationchange", e.resize.orientationChangeHandler)
                }
            }
        }, ct = {
            func: Le.MutationObserver || Le.WebkitMutationObserver, attach: function (e, t) {
                void 0 === t && (t = {});
                var i = this, n = ct.func, r = new n(function (e) {
                    e.forEach(function (e) {
                        i.emit("observerUpdate", e)
                    })
                });
                r.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), i.observer.observers.push(r)
            }, init: function () {
                var e = this;
                if (We.observer && e.params.observer) {
                    if (e.params.observeParents) for (var t = e.$el.parents(), i = 0; i < t.length; i += 1) e.observer.attach(t[i]);
                    e.observer.attach(e.$el[0], {childList: !1}), e.observer.attach(e.$wrapperEl[0], {attributes: !1})
                }
            }, destroy: function () {
                var e = this;
                e.observer.observers.forEach(function (e) {
                    e.disconnect()
                }), e.observer.observers = []
            }
        }, ut = {
            name: "observer", params: {observer: !1, observeParents: !1}, create: function () {
                var e = this;
                Fe.extend(e, {
                    observer: {
                        init: ct.init.bind(e),
                        attach: ct.attach.bind(e),
                        destroy: ct.destroy.bind(e),
                        observers: []
                    }
                })
            }, on: {
                init: function () {
                    this.observer.init()
                }, destroy: function () {
                    this.observer.destroy()
                }
            }
        }, ht = {
            update: function (e) {
                function t() {
                    i.updateSlides(), i.updateProgress(), i.updateSlidesClasses(), i.lazy && i.params.lazy.enabled && i.lazy.load()
                }

                var i = this, n = i.params, r = n.slidesPerView, s = n.slidesPerGroup, a = n.centeredSlides, o = i.virtual,
                    l = o.from, d = o.to, c = o.slides, u = o.slidesGrid, h = o.renderSlide, p = o.offset;
                i.updateActiveIndex();
                var f, m = i.activeIndex || 0;
                f = i.rtlTranslate ? "right" : i.isHorizontal() ? "left" : "top";
                var g, v;
                a ? (g = Math.floor(r / 2) + s, v = Math.floor(r / 2) + s) : (g = r + (s - 1), v = s);
                var y = Math.max((m || 0) - v, 0), b = Math.min((m || 0) + g, c.length - 1),
                    _ = (i.slidesGrid[y] || 0) - (i.slidesGrid[0] || 0);
                if (Fe.extend(i.virtual, {
                    from: y,
                    to: b,
                    offset: _,
                    slidesGrid: i.slidesGrid
                }), l === y && d === b && !e) return i.slidesGrid !== u && _ !== p && i.slides.css(f, _ + "px"), void i.updateProgress();
                if (i.params.virtual.renderExternal) return i.params.virtual.renderExternal.call(i, {
                    offset: _,
                    from: y,
                    to: b,
                    slides: function () {
                        for (var e = [], t = y; t <= b; t += 1) e.push(c[t]);
                        return e
                    }()
                }), void t();
                var w = [], x = [];
                if (e) i.$wrapperEl.find("." + i.params.slideClass).remove(); else for (var T = l; T <= d; T += 1) (T < y || T > b) && i.$wrapperEl.find("." + i.params.slideClass + '[data-swiper-slide-index="' + T + '"]').remove();
                for (var E = 0; E < c.length; E += 1) E >= y && E <= b && (void 0 === d || e ? x.push(E) : (E > d && x.push(E), E < l && w.push(E)));
                x.forEach(function (e) {
                    i.$wrapperEl.append(h(c[e], e))
                }), w.sort(function (e, t) {
                    return e < t
                }).forEach(function (e) {
                    i.$wrapperEl.prepend(h(c[e], e))
                }), i.$wrapperEl.children(".swiper-slide").css(f, _ + "px"), t()
            }, renderSlide: function (t, i) {
                var n = this, r = n.params.virtual;
                if (r.cache && n.virtual.cache[i]) return n.virtual.cache[i];
                var s = e(r.renderSlide ? r.renderSlide.call(n, t, i) : '<div class="' + n.params.slideClass + '" data-swiper-slide-index="' + i + '">' + t + "</div>");
                return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", i), r.cache && (n.virtual.cache[i] = s), s
            }, appendSlide: function (e) {
                var t = this;
                t.virtual.slides.push(e), t.virtual.update(!0)
            }, prependSlide: function (e) {
                var t = this;
                if (t.virtual.slides.unshift(e), t.params.virtual.cache) {
                    var i = t.virtual.cache, n = {};
                    Object.keys(i).forEach(function (e) {
                        n[e + 1] = i[e]
                    }), t.virtual.cache = n
                }
                t.virtual.update(!0), t.slideNext(0)
            }
        }, pt = {
            name: "virtual",
            params: {virtual: {enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null}},
            create: function () {
                var e = this;
                Fe.extend(e, {
                    virtual: {
                        update: ht.update.bind(e),
                        appendSlide: ht.appendSlide.bind(e),
                        prependSlide: ht.prependSlide.bind(e),
                        renderSlide: ht.renderSlide.bind(e),
                        slides: e.params.virtual.slides,
                        cache: {}
                    }
                })
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    if (e.params.virtual.enabled) {
                        e.classNames.push(e.params.containerModifierClass + "virtual");
                        var t = {watchSlidesProgress: !0};
                        Fe.extend(e.params, t), Fe.extend(e.originalParams, t), e.virtual.update()
                    }
                }, setTranslate: function () {
                    var e = this;
                    e.params.virtual.enabled && e.virtual.update()
                }
            }
        }, ft = {
            handle: function (e) {
                var t = this, i = t.rtlTranslate, n = e;
                n.originalEvent && (n = n.originalEvent);
                var r = n.keyCode || n.charCode;
                if (!t.allowSlideNext && (t.isHorizontal() && 39 === r || t.isVertical() && 40 === r)) return !1;
                if (!t.allowSlidePrev && (t.isHorizontal() && 37 === r || t.isVertical() && 38 === r)) return !1;
                if (!(n.shiftKey || n.altKey || n.ctrlKey || n.metaKey || Ne.activeElement && Ne.activeElement.nodeName && ("input" === Ne.activeElement.nodeName.toLowerCase() || "textarea" === Ne.activeElement.nodeName.toLowerCase()))) {
                    if (t.params.keyboard.onlyInViewport && (37 === r || 39 === r || 38 === r || 40 === r)) {
                        var s = !1;
                        if (t.$el.parents("." + t.params.slideClass).length > 0 && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
                        var a = Le.innerWidth, o = Le.innerHeight, l = t.$el.offset();
                        i && (l.left -= t.$el[0].scrollLeft);
                        for (var d = [[l.left, l.top], [l.left + t.width, l.top], [l.left, l.top + t.height], [l.left + t.width, l.top + t.height]], c = 0; c < d.length; c += 1) {
                            var u = d[c];
                            u[0] >= 0 && u[0] <= a && u[1] >= 0 && u[1] <= o && (s = !0)
                        }
                        if (!s) return
                    }
                    t.isHorizontal() ? (37 !== r && 39 !== r || (n.preventDefault ? n.preventDefault() : n.returnValue = !1), (39 === r && !i || 37 === r && i) && t.slideNext(), (37 === r && !i || 39 === r && i) && t.slidePrev()) : (38 !== r && 40 !== r || (n.preventDefault ? n.preventDefault() : n.returnValue = !1), 40 === r && t.slideNext(), 38 === r && t.slidePrev()), t.emit("keyPress", r)
                }
            }, enable: function () {
                var t = this;
                t.keyboard.enabled || (e(Ne).on("keydown", t.keyboard.handle), t.keyboard.enabled = !0)
            }, disable: function () {
                var t = this;
                t.keyboard.enabled && (e(Ne).off("keydown", t.keyboard.handle), t.keyboard.enabled = !1)
            }
        }, mt = {
            name: "keyboard", params: {keyboard: {enabled: !1, onlyInViewport: !0}}, create: function () {
                var e = this;
                Fe.extend(e, {
                    keyboard: {
                        enabled: !1,
                        enable: ft.enable.bind(e),
                        disable: ft.disable.bind(e),
                        handle: ft.handle.bind(e)
                    }
                })
            }, on: {
                init: function () {
                    var e = this;
                    e.params.keyboard.enabled && e.keyboard.enable()
                }, destroy: function () {
                    var e = this;
                    e.keyboard.enabled && e.keyboard.disable()
                }
            }
        }, gt = {
            lastScrollTime: Fe.now(), event: function () {
                return Le.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : Ae() ? "wheel" : "mousewheel"
            }(), normalize: function (e) {
                var t = 0, i = 0, n = 0, r = 0;
                return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), n = 10 * t, r = 10 * i, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (n = e.deltaX), (n || r) && e.deltaMode && (1 === e.deltaMode ? (n *= 40, r *= 40) : (n *= 800, r *= 800)), n && !t && (t = n < 1 ? -1 : 1), r && !i && (i = r < 1 ? -1 : 1), {
                    spinX: t,
                    spinY: i,
                    pixelX: n,
                    pixelY: r
                }
            }, handleMouseEnter: function () {
                this.mouseEntered = !0
            }, handleMouseLeave: function () {
                this.mouseEntered = !1
            }, handle: function (e) {
                var t = e, i = this, n = i.params.mousewheel;
                if (!i.mouseEntered && !n.releaseOnEdges) return !0;
                t.originalEvent && (t = t.originalEvent);
                var r = 0, s = i.rtlTranslate ? -1 : 1, a = gt.normalize(t);
                if (n.forceToAxis) if (i.isHorizontal()) {
                    if (!(Math.abs(a.pixelX) > Math.abs(a.pixelY))) return !0;
                    r = a.pixelX * s
                } else {
                    if (!(Math.abs(a.pixelY) > Math.abs(a.pixelX))) return !0;
                    r = a.pixelY
                } else r = Math.abs(a.pixelX) > Math.abs(a.pixelY) ? -a.pixelX * s : -a.pixelY;
                if (0 === r) return !0;
                if (n.invert && (r = -r), i.params.freeMode) {
                    i.params.loop && i.loopFix();
                    var o = i.getTranslate() + r * n.sensitivity, l = i.isBeginning, d = i.isEnd;
                    if (o >= i.minTranslate() && (o = i.minTranslate()), o <= i.maxTranslate() && (o = i.maxTranslate()), i.setTransition(0), i.setTranslate(o), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!l && i.isBeginning || !d && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky && (clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = Fe.nextTick(function () {
                        i.slideToClosest()
                    }, 300)), i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.stopAutoplay(), o === i.minTranslate() || o === i.maxTranslate()) return !0
                } else {
                    if (Fe.now() - i.mousewheel.lastScrollTime > 60) if (r < 0) if (i.isEnd && !i.params.loop || i.animating) {
                        if (n.releaseOnEdges) return !0
                    } else i.slideNext(), i.emit("scroll", t); else if (i.isBeginning && !i.params.loop || i.animating) {
                        if (n.releaseOnEdges) return !0
                    } else i.slidePrev(), i.emit("scroll", t);
                    i.mousewheel.lastScrollTime = (new Le.Date).getTime()
                }
                return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
            }, enable: function () {
                var t = this;
                if (!gt.event) return !1;
                if (t.mousewheel.enabled) return !1;
                var i = t.$el;
                return "container" !== t.params.mousewheel.eventsTarged && (i = e(t.params.mousewheel.eventsTarged)), i.on("mouseenter", t.mousewheel.handleMouseEnter), i.on("mouseleave", t.mousewheel.handleMouseLeave), i.on(gt.event, t.mousewheel.handle), t.mousewheel.enabled = !0, !0
            }, disable: function () {
                var t = this;
                if (!gt.event) return !1;
                if (!t.mousewheel.enabled) return !1;
                var i = t.$el;
                return "container" !== t.params.mousewheel.eventsTarged && (i = e(t.params.mousewheel.eventsTarged)), i.off(gt.event, t.mousewheel.handle), t.mousewheel.enabled = !1, !0
            }
        }, vt = {
            name: "mousewheel",
            params: {
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarged: "container"
                }
            },
            create: function () {
                var e = this;
                Fe.extend(e, {
                    mousewheel: {
                        enabled: !1,
                        enable: gt.enable.bind(e),
                        disable: gt.disable.bind(e),
                        handle: gt.handle.bind(e),
                        handleMouseEnter: gt.handleMouseEnter.bind(e),
                        handleMouseLeave: gt.handleMouseLeave.bind(e),
                        lastScrollTime: Fe.now()
                    }
                })
            },
            on: {
                init: function () {
                    var e = this;
                    e.params.mousewheel.enabled && e.mousewheel.enable()
                }, destroy: function () {
                    var e = this;
                    e.mousewheel.enabled && e.mousewheel.disable()
                }
            }
        }, yt = {
            update: function () {
                var e = this, t = e.params.navigation;
                if (!e.params.loop) {
                    var i = e.navigation, n = i.$nextEl, r = i.$prevEl;
                    r && r.length > 0 && (e.isBeginning ? r.addClass(t.disabledClass) : r.removeClass(t.disabledClass), r[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), n && n.length > 0 && (e.isEnd ? n.addClass(t.disabledClass) : n.removeClass(t.disabledClass), n[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
                }
            }, init: function () {
                var t = this, i = t.params.navigation;
                if (i.nextEl || i.prevEl) {
                    var n, r;
                    i.nextEl && (n = e(i.nextEl), t.params.uniqueNavElements && "string" == typeof i.nextEl && n.length > 1 && 1 === t.$el.find(i.nextEl).length && (n = t.$el.find(i.nextEl))), i.prevEl && (r = e(i.prevEl), t.params.uniqueNavElements && "string" == typeof i.prevEl && r.length > 1 && 1 === t.$el.find(i.prevEl).length && (r = t.$el.find(i.prevEl))), n && n.length > 0 && n.on("click", function (e) {
                        e.preventDefault(), t.isEnd && !t.params.loop || t.slideNext()
                    }), r && r.length > 0 && r.on("click", function (e) {
                        e.preventDefault(), t.isBeginning && !t.params.loop || t.slidePrev()
                    }), Fe.extend(t.navigation, {$nextEl: n, nextEl: n && n[0], $prevEl: r, prevEl: r && r[0]})
                }
            }, destroy: function () {
                var e = this, t = e.navigation, i = t.$nextEl, n = t.$prevEl;
                i && i.length && (i.off("click"), i.removeClass(e.params.navigation.disabledClass)), n && n.length && (n.off("click"), n.removeClass(e.params.navigation.disabledClass))
            }
        }, bt = {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            },
            create: function () {
                var e = this;
                Fe.extend(e, {navigation: {init: yt.init.bind(e), update: yt.update.bind(e), destroy: yt.destroy.bind(e)}})
            },
            on: {
                init: function () {
                    var e = this;
                    e.navigation.init(), e.navigation.update()
                }, toEdge: function () {
                    this.navigation.update()
                }, fromEdge: function () {
                    this.navigation.update()
                }, destroy: function () {
                    this.navigation.destroy()
                }, click: function (t) {
                    var i = this, n = i.navigation, r = n.$nextEl, s = n.$prevEl;
                    !i.params.navigation.hideOnClick || e(t.target).is(s) || e(t.target).is(r) || (r && r.toggleClass(i.params.navigation.hiddenClass), s && s.toggleClass(i.params.navigation.hiddenClass))
                }
            }
        }, _t = {
            update: function () {
                var t = this, i = t.rtl, n = t.params.pagination;
                if (n.el && t.pagination.el && t.pagination.$el && 0 !== t.pagination.$el.length) {
                    var r, s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                        a = t.pagination.$el,
                        o = t.params.loop ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                    if (t.params.loop ? (r = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup), r > s - 1 - 2 * t.loopedSlides && (r -= s - 2 * t.loopedSlides), r > o - 1 && (r -= o), r < 0 && "bullets" !== t.params.paginationType && (r = o + r)) : r = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === n.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                        var l, d, c, u = t.pagination.bullets;
                        if (n.dynamicBullets && (t.pagination.bulletSize = u.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), a.css(t.isHorizontal() ? "width" : "height", t.pagination.bulletSize * (n.dynamicMainBullets + 4) + "px"), n.dynamicMainBullets > 1 && void 0 !== t.previousIndex && (t.pagination.dynamicBulletIndex += r - t.previousIndex, t.pagination.dynamicBulletIndex > n.dynamicMainBullets - 1 ? t.pagination.dynamicBulletIndex = n.dynamicMainBullets - 1 : t.pagination.dynamicBulletIndex < 0 && (t.pagination.dynamicBulletIndex = 0)), l = r - t.pagination.dynamicBulletIndex, d = l + (Math.min(u.length, n.dynamicMainBullets) - 1), c = (d + l) / 2), u.removeClass(n.bulletActiveClass + " " + n.bulletActiveClass + "-next " + n.bulletActiveClass + "-next-next " + n.bulletActiveClass + "-prev " + n.bulletActiveClass + "-prev-prev " + n.bulletActiveClass + "-main"), a.length > 1) u.each(function (t, i) {
                            var s = e(i), a = s.index();
                            a === r && s.addClass(n.bulletActiveClass), n.dynamicBullets && (a >= l && a <= d && s.addClass(n.bulletActiveClass + "-main"), a === l && s.prev().addClass(n.bulletActiveClass + "-prev").prev().addClass(n.bulletActiveClass + "-prev-prev"), a === d && s.next().addClass(n.bulletActiveClass + "-next").next().addClass(n.bulletActiveClass + "-next-next"))
                        }); else {
                            if (u.eq(r).addClass(n.bulletActiveClass), n.dynamicBullets) {
                                for (var h = u.eq(l), p = u.eq(d), f = l; f <= d; f += 1) u.eq(f).addClass(n.bulletActiveClass + "-main");
                                h.prev().addClass(n.bulletActiveClass + "-prev").prev().addClass(n.bulletActiveClass + "-prev-prev"), p.next().addClass(n.bulletActiveClass + "-next").next().addClass(n.bulletActiveClass + "-next-next")
                            }
                        }
                        if (n.dynamicBullets) {
                            var m = Math.min(u.length, n.dynamicMainBullets + 4),
                                g = (t.pagination.bulletSize * m - t.pagination.bulletSize) / 2 - c * t.pagination.bulletSize,
                                v = i ? "right" : "left";
                            u.css(t.isHorizontal() ? v : "top", g + "px")
                        }
                    }
                    if ("fraction" === n.type && (a.find("." + n.currentClass).text(r + 1), a.find("." + n.totalClass).text(o)), "progressbar" === n.type) {
                        var y;
                        y = n.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                        var b = (r + 1) / o, _ = 1, w = 1;
                        "horizontal" === y ? _ = b : w = b, a.find("." + n.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + _ + ") scaleY(" + w + ")").transition(t.params.speed)
                    }
                    "custom" === n.type && n.renderCustom ? (a.html(n.renderCustom(t, r + 1, o)), t.emit("paginationRender", t, a[0])) : t.emit("paginationUpdate", t, a[0]), a[t.params.watchOverflow && t.isLocked ? "addClass" : "removeClass"](n.lockClass)
                }
            }, render: function () {
                var e = this, t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        n = e.pagination.$el, r = "";
                    if ("bullets" === t.type) {
                        for (var s = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, a = 0; a < s; a += 1) t.renderBullet ? r += t.renderBullet.call(e, a, t.bulletClass) : r += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                        n.html(r), e.pagination.bullets = n.find("." + t.bulletClass)
                    }
                    "fraction" === t.type && (r = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', n.html(r)),
                    "progressbar" === t.type && (r = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', n.html(r)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
                }
            }, init: function () {
                var t = this, i = t.params.pagination;
                if (i.el) {
                    var n = e(i.el);
                    0 !== n.length && (t.params.uniqueNavElements && "string" == typeof i.el && n.length > 1 && 1 === t.$el.find(i.el).length && (n = t.$el.find(i.el)), "bullets" === i.type && i.clickable && n.addClass(i.clickableClass), n.addClass(i.modifierClass + i.type), "bullets" === i.type && i.dynamicBullets && (n.addClass("" + i.modifierClass + i.type + "-dynamic"), t.pagination.dynamicBulletIndex = 0, i.dynamicMainBullets < 1 && (i.dynamicMainBullets = 1)), "progressbar" === i.type && i.progressbarOpposite && n.addClass(i.progressbarOppositeClass), i.clickable && n.on("click", "." + i.bulletClass, function (i) {
                        i.preventDefault();
                        var n = e(this).index() * t.params.slidesPerGroup;
                        t.params.loop && (n += t.loopedSlides), t.slideTo(n)
                    }), Fe.extend(t.pagination, {$el: n, el: n[0]}))
                }
            }, destroy: function () {
                var e = this, t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var i = e.pagination.$el;
                    i.removeClass(t.hiddenClass), i.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && i.off("click", "." + t.bulletClass)
                }
            }
        }, wt = {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                    clickableClass: "swiper-pagination-clickable",
                    lockClass: "swiper-pagination-lock"
                }
            },
            create: function () {
                var e = this;
                Fe.extend(e, {
                    pagination: {
                        init: _t.init.bind(e),
                        render: _t.render.bind(e),
                        update: _t.update.bind(e),
                        destroy: _t.destroy.bind(e),
                        dynamicBulletIndex: 0
                    }
                })
            },
            on: {
                init: function () {
                    var e = this;
                    e.pagination.init(), e.pagination.render(), e.pagination.update()
                }, activeIndexChange: function () {
                    var e = this;
                    e.params.loop ? e.pagination.update() : void 0 === e.snapIndex && e.pagination.update()
                }, snapIndexChange: function () {
                    var e = this;
                    e.params.loop || e.pagination.update()
                }, slidesLengthChange: function () {
                    var e = this;
                    e.params.loop && (e.pagination.render(), e.pagination.update())
                }, snapGridLengthChange: function () {
                    var e = this;
                    e.params.loop || (e.pagination.render(), e.pagination.update())
                }, destroy: function () {
                    this.pagination.destroy()
                }, click: function (t) {
                    var i = this;
                    i.params.pagination.el && i.params.pagination.hideOnClick && i.pagination.$el.length > 0 && !e(t.target).hasClass(i.params.pagination.bulletClass) && i.pagination.$el.toggleClass(i.params.pagination.hiddenClass)
                }
            }
        }, xt = {
            setTranslate: function () {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar, i = e.rtlTranslate, n = e.progress, r = t.dragSize, s = t.trackSize, a = t.$dragEl,
                        o = t.$el, l = e.params.scrollbar, d = r, c = (s - r) * n;
                    i ? (c = -c, c > 0 ? (d = r - c, c = 0) : -c + r > s && (d = s + c)) : c < 0 ? (d = r + c, c = 0) : c + r > s && (d = s - c), e.isHorizontal() ? (We.transforms3d ? a.transform("translate3d(" + c + "px, 0, 0)") : a.transform("translateX(" + c + "px)"), a[0].style.width = d + "px") : (We.transforms3d ? a.transform("translate3d(0px, " + c + "px, 0)") : a.transform("translateY(" + c + "px)"), a[0].style.height = d + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function () {
                        o[0].style.opacity = 0, o.transition(400)
                    }, 1e3))
                }
            }, setTransition: function (e) {
                var t = this;
                t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
            }, updateSize: function () {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar, i = t.$dragEl, n = t.$el;
                    i[0].style.width = "", i[0].style.height = "";
                    var r, s = e.isHorizontal() ? n[0].offsetWidth : n[0].offsetHeight, a = e.size / e.virtualSize,
                        o = a * (s / e.size);
                    r = "auto" === e.params.scrollbar.dragSize ? s * a : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? i[0].style.width = r + "px" : i[0].style.height = r + "px", n[0].style.display = a >= 1 ? "none" : "", e.params.scrollbarHide && (n[0].style.opacity = 0), Fe.extend(t, {
                        trackSize: s,
                        divider: a,
                        moveDivider: o,
                        dragSize: r
                    }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
                }
            }, setDragPosition: function (e) {
                var t, i = this, n = i.scrollbar, r = i.rtlTranslate, s = n.$el, a = n.dragSize, o = n.trackSize;
                t = i.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY;
                var l;
                l = (t - s.offset()[i.isHorizontal() ? "left" : "top"] - a / 2) / (o - a), l = Math.max(Math.min(l, 1), 0), r && (l = 1 - l);
                var d = i.minTranslate() + (i.maxTranslate() - i.minTranslate()) * l;
                i.updateProgress(d), i.setTranslate(d), i.updateActiveIndex(), i.updateSlidesClasses()
            }, onDragStart: function (e) {
                var t = this, i = t.params.scrollbar, n = t.scrollbar, r = t.$wrapperEl, s = n.$el, a = n.$dragEl;
                t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), r.transition(100), a.transition(100), n.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), s.transition(0), i.hide && s.css("opacity", 1), t.emit("scrollbarDragStart", e)
            }, onDragMove: function (e) {
                var t = this, i = t.scrollbar, n = t.$wrapperEl, r = i.$el, s = i.$dragEl;
                t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, i.setDragPosition(e), n.transition(0), r.transition(0), s.transition(0), t.emit("scrollbarDragMove", e))
            }, onDragEnd: function (e) {
                var t = this, i = t.params.scrollbar, n = t.scrollbar, r = n.$el;
                t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, i.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = Fe.nextTick(function () {
                    r.css("opacity", 0), r.transition(400)
                }, 1e3)), t.emit("scrollbarDragEnd", e), i.snapOnRelease && t.slideToClosest())
            }, enableDraggable: function () {
                var e = this;
                if (e.params.scrollbar.el) {
                    var t = e.scrollbar, i = e.touchEvents, n = e.touchEventsDesktop, r = e.params, s = t.$el, a = s[0],
                        o = !(!We.passiveListener || !r.passiveListener) && {passive: !1, capture: !1},
                        l = !(!We.passiveListener || !r.passiveListener) && {passive: !0, capture: !1};
                    We.touch || !We.pointerEvents && !We.prefixedPointerEvents ? (We.touch && (a.addEventListener(i.start, e.scrollbar.onDragStart, o), a.addEventListener(i.move, e.scrollbar.onDragMove, o), a.addEventListener(i.end, e.scrollbar.onDragEnd, l)), (r.simulateTouch && !Xe.ios && !Xe.android || r.simulateTouch && !We.touch && Xe.ios) && (a.addEventListener("mousedown", e.scrollbar.onDragStart, o), Ne.addEventListener("mousemove", e.scrollbar.onDragMove, o), Ne.addEventListener("mouseup", e.scrollbar.onDragEnd, l))) : (a.addEventListener(n.start, e.scrollbar.onDragStart, o), Ne.addEventListener(n.move, e.scrollbar.onDragMove, o), Ne.addEventListener(n.end, e.scrollbar.onDragEnd, l))
                }
            }, disableDraggable: function () {
                var e = this;
                if (e.params.scrollbar.el) {
                    var t = e.scrollbar, i = e.touchEvents, n = e.touchEventsDesktop, r = e.params, s = t.$el, a = s[0],
                        o = !(!We.passiveListener || !r.passiveListener) && {passive: !1, capture: !1},
                        l = !(!We.passiveListener || !r.passiveListener) && {passive: !0, capture: !1};
                    We.touch || !We.pointerEvents && !We.prefixedPointerEvents ? (We.touch && (a.removeEventListener(i.start, e.scrollbar.onDragStart, o), a.removeEventListener(i.move, e.scrollbar.onDragMove, o), a.removeEventListener(i.end, e.scrollbar.onDragEnd, l)), (r.simulateTouch && !Xe.ios && !Xe.android || r.simulateTouch && !We.touch && Xe.ios) && (a.removeEventListener("mousedown", e.scrollbar.onDragStart, o), Ne.removeEventListener("mousemove", e.scrollbar.onDragMove, o), Ne.removeEventListener("mouseup", e.scrollbar.onDragEnd, l))) : (a.removeEventListener(n.start, e.scrollbar.onDragStart, o), Ne.removeEventListener(n.move, e.scrollbar.onDragMove, o), Ne.removeEventListener(n.end, e.scrollbar.onDragEnd, l))
                }
            }, init: function () {
                var t = this;
                if (t.params.scrollbar.el) {
                    var i = t.scrollbar, n = t.$el, r = t.params.scrollbar, s = e(r.el);
                    t.params.uniqueNavElements && "string" == typeof r.el && s.length > 1 && 1 === n.find(r.el).length && (s = n.find(r.el));
                    var a = s.find("." + t.params.scrollbar.dragClass);
                    0 === a.length && (a = e('<div class="' + t.params.scrollbar.dragClass + '"></div>'), s.append(a)), Fe.extend(i, {
                        $el: s,
                        el: s[0],
                        $dragEl: a,
                        dragEl: a[0]
                    }), r.draggable && i.enableDraggable()
                }
            }, destroy: function () {
                this.scrollbar.disableDraggable()
            }
        }, Tt = {
            name: "scrollbar",
            params: {
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag"
                }
            },
            create: function () {
                var e = this;
                Fe.extend(e, {
                    scrollbar: {
                        init: xt.init.bind(e),
                        destroy: xt.destroy.bind(e),
                        updateSize: xt.updateSize.bind(e),
                        setTranslate: xt.setTranslate.bind(e),
                        setTransition: xt.setTransition.bind(e),
                        enableDraggable: xt.enableDraggable.bind(e),
                        disableDraggable: xt.disableDraggable.bind(e),
                        setDragPosition: xt.setDragPosition.bind(e),
                        onDragStart: xt.onDragStart.bind(e),
                        onDragMove: xt.onDragMove.bind(e),
                        onDragEnd: xt.onDragEnd.bind(e),
                        isTouched: !1,
                        timeout: null,
                        dragTimeout: null
                    }
                })
            },
            on: {
                init: function () {
                    var e = this;
                    e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate()
                }, update: function () {
                    this.scrollbar.updateSize()
                }, resize: function () {
                    this.scrollbar.updateSize()
                }, observerUpdate: function () {
                    this.scrollbar.updateSize()
                }, setTranslate: function () {
                    this.scrollbar.setTranslate()
                }, setTransition: function (e) {
                    this.scrollbar.setTransition(e)
                }, destroy: function () {
                    this.scrollbar.destroy()
                }
            }
        }, Et = {
            setTransform: function (t, i) {
                var n = this, r = n.rtl, s = e(t), a = r ? -1 : 1, o = s.attr("data-swiper-parallax") || "0",
                    l = s.attr("data-swiper-parallax-x"), d = s.attr("data-swiper-parallax-y"),
                    c = s.attr("data-swiper-parallax-scale"), u = s.attr("data-swiper-parallax-opacity");
                if (l || d ? (l = l || "0", d = d || "0") : n.isHorizontal() ? (l = o, d = "0") : (d = o, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * i * a + "%" : l * i * a + "px", d = d.indexOf("%") >= 0 ? parseInt(d, 10) * i + "%" : d * i + "px", void 0 !== u && null !== u) {
                    var h = u - (u - 1) * (1 - Math.abs(i));
                    s[0].style.opacity = h
                }
                if (void 0 === c || null === c) s.transform("translate3d(" + l + ", " + d + ", 0px)"); else {
                    var p = c - (c - 1) * (1 - Math.abs(i));
                    s.transform("translate3d(" + l + ", " + d + ", 0px) scale(" + p + ")")
                }
            }, setTranslate: function () {
                var t = this, i = t.$el, n = t.slides, r = t.progress, s = t.snapGrid;
                i.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, i) {
                    t.parallax.setTransform(i, r)
                }), n.each(function (i, n) {
                    var a = n.progress;
                    t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (a += Math.ceil(i / 2) - r * (s.length - 1)), a = Math.min(Math.max(a, -1), 1), e(n).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, i) {
                        t.parallax.setTransform(i, a)
                    })
                })
            }, setTransition: function (t) {
                void 0 === t && (t = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (i, n) {
                    var r = e(n), s = parseInt(r.attr("data-swiper-parallax-duration"), 10) || t;
                    0 === t && (s = 0), r.transition(s)
                })
            }
        }, St = {
            name: "parallax", params: {parallax: {enabled: !1}}, create: function () {
                var e = this;
                Fe.extend(e, {
                    parallax: {
                        setTransform: Et.setTransform.bind(e),
                        setTranslate: Et.setTranslate.bind(e),
                        setTransition: Et.setTransition.bind(e)
                    }
                })
            }, on: {
                beforeInit: function () {
                    var e = this;
                    e.params.parallax.enabled && (e.params.watchSlidesProgress = !0)
                }, init: function () {
                    var e = this;
                    e.params.parallax && e.parallax.setTranslate()
                }, setTranslate: function () {
                    var e = this;
                    e.params.parallax && e.parallax.setTranslate()
                }, setTransition: function (e) {
                    var t = this;
                    t.params.parallax && t.parallax.setTransition(e)
                }
            }
        }, Ct = {
            getDistanceBetweenTouches: function (e) {
                if (e.targetTouches.length < 2) return 1;
                var t = e.targetTouches[0].pageX, i = e.targetTouches[0].pageY, n = e.targetTouches[1].pageX,
                    r = e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(n - t, 2) + Math.pow(r - i, 2))
            }, onGestureStart: function (t) {
                var i = this, n = i.params.zoom, r = i.zoom, s = r.gesture;
                if (r.fakeGestureTouched = !1, r.fakeGestureMoved = !1, !We.gestures) {
                    if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
                    r.fakeGestureTouched = !0, s.scaleStart = Ct.getDistanceBetweenTouches(t)
                }
                if (!(s.$slideEl && s.$slideEl.length || (s.$slideEl = e(t.target).closest(".swiper-slide"), 0 === s.$slideEl.length && (s.$slideEl = i.slides.eq(i.activeIndex)), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + n.containerClass), s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio, 0 !== s.$imageWrapEl.length))) return void(s.$imageEl = void 0);
                s.$imageEl.transition(0), i.zoom.isScaling = !0
            }, onGestureChange: function (e) {
                var t = this, i = t.params.zoom, n = t.zoom, r = n.gesture;
                if (!We.gestures) {
                    if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                    n.fakeGestureMoved = !0, r.scaleMove = Ct.getDistanceBetweenTouches(e)
                }
                r.$imageEl && 0 !== r.$imageEl.length && (We.gestures ? t.zoom.scale = e.scale * n.currentScale : n.scale = r.scaleMove / r.scaleStart * n.currentScale, n.scale > r.maxRatio && (n.scale = r.maxRatio - 1 + Math.pow(n.scale - r.maxRatio + 1, .5)), n.scale < i.minRatio && (n.scale = i.minRatio + 1 - Math.pow(i.minRatio - n.scale + 1, .5)), r.$imageEl.transform("translate3d(0,0,0) scale(" + n.scale + ")"))
            }, onGestureEnd: function (e) {
                var t = this, i = t.params.zoom, n = t.zoom, r = n.gesture;
                if (!We.gestures) {
                    if (!n.fakeGestureTouched || !n.fakeGestureMoved) return;
                    if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !Xe.android) return;
                    n.fakeGestureTouched = !1, n.fakeGestureMoved = !1
                }
                r.$imageEl && 0 !== r.$imageEl.length && (n.scale = Math.max(Math.min(n.scale, r.maxRatio), i.minRatio), r.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(" + n.scale + ")"), n.currentScale = n.scale, n.isScaling = !1, 1 === n.scale && (r.$slideEl = void 0))
            }, onTouchStart: function (e) {
                var t = this, i = t.zoom, n = i.gesture, r = i.image;
                n.$imageEl && 0 !== n.$imageEl.length && (r.isTouched || (Xe.android && e.preventDefault(), r.isTouched = !0, r.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, r.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            }, onTouchMove: function (e) {
                var t = this, i = t.zoom, n = i.gesture, r = i.image, s = i.velocity;
                if (n.$imageEl && 0 !== n.$imageEl.length && (t.allowClick = !1, r.isTouched && n.$slideEl)) {
                    r.isMoved || (r.width = n.$imageEl[0].offsetWidth, r.height = n.$imageEl[0].offsetHeight, r.startX = Fe.getTranslate(n.$imageWrapEl[0], "x") || 0, r.startY = Fe.getTranslate(n.$imageWrapEl[0], "y") || 0, n.slideWidth = n.$slideEl[0].offsetWidth, n.slideHeight = n.$slideEl[0].offsetHeight, n.$imageWrapEl.transition(0), t.rtl && (r.startX = -r.startX, r.startY = -r.startY));
                    var a = r.width * i.scale, o = r.height * i.scale;
                    if (!(a < n.slideWidth && o < n.slideHeight)) {
                        if (r.minX = Math.min(n.slideWidth / 2 - a / 2, 0), r.maxX = -r.minX, r.minY = Math.min(n.slideHeight / 2 - o / 2, 0), r.maxY = -r.minY, r.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, r.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !r.isMoved && !i.isScaling) {
                            if (t.isHorizontal() && (Math.floor(r.minX) === Math.floor(r.startX) && r.touchesCurrent.x < r.touchesStart.x || Math.floor(r.maxX) === Math.floor(r.startX) && r.touchesCurrent.x > r.touchesStart.x)) return void(r.isTouched = !1);
                            if (!t.isHorizontal() && (Math.floor(r.minY) === Math.floor(r.startY) && r.touchesCurrent.y < r.touchesStart.y || Math.floor(r.maxY) === Math.floor(r.startY) && r.touchesCurrent.y > r.touchesStart.y)) return void(r.isTouched = !1)
                        }
                        e.preventDefault(), e.stopPropagation(), r.isMoved = !0, r.currentX = r.touchesCurrent.x - r.touchesStart.x + r.startX, r.currentY = r.touchesCurrent.y - r.touchesStart.y + r.startY, r.currentX < r.minX && (r.currentX = r.minX + 1 - Math.pow(r.minX - r.currentX + 1, .8)), r.currentX > r.maxX && (r.currentX = r.maxX - 1 + Math.pow(r.currentX - r.maxX + 1, .8)), r.currentY < r.minY && (r.currentY = r.minY + 1 - Math.pow(r.minY - r.currentY + 1, .8)), r.currentY > r.maxY && (r.currentY = r.maxY - 1 + Math.pow(r.currentY - r.maxY + 1, .8)), s.prevPositionX || (s.prevPositionX = r.touchesCurrent.x), s.prevPositionY || (s.prevPositionY = r.touchesCurrent.y), s.prevTime || (s.prevTime = Date.now()), s.x = (r.touchesCurrent.x - s.prevPositionX) / (Date.now() - s.prevTime) / 2, s.y = (r.touchesCurrent.y - s.prevPositionY) / (Date.now() - s.prevTime) / 2, Math.abs(r.touchesCurrent.x - s.prevPositionX) < 2 && (s.x = 0), Math.abs(r.touchesCurrent.y - s.prevPositionY) < 2 && (s.y = 0), s.prevPositionX = r.touchesCurrent.x, s.prevPositionY = r.touchesCurrent.y, s.prevTime = Date.now(), n.$imageWrapEl.transform("translate3d(" + r.currentX + "px, " + r.currentY + "px,0)")
                    }
                }
            }, onTouchEnd: function () {
                var e = this, t = e.zoom, i = t.gesture, n = t.image, r = t.velocity;
                if (i.$imageEl && 0 !== i.$imageEl.length) {
                    if (!n.isTouched || !n.isMoved) return n.isTouched = !1, void(n.isMoved = !1);
                    n.isTouched = !1, n.isMoved = !1;
                    var s = 300, a = 300, o = r.x * s, l = n.currentX + o, d = r.y * a, c = n.currentY + d;
                    0 !== r.x && (s = Math.abs((l - n.currentX) / r.x)), 0 !== r.y && (a = Math.abs((c - n.currentY) / r.y));
                    var u = Math.max(s, a);
                    n.currentX = l, n.currentY = c;
                    var h = n.width * t.scale, p = n.height * t.scale;
                    n.minX = Math.min(i.slideWidth / 2 - h / 2, 0), n.maxX = -n.minX, n.minY = Math.min(i.slideHeight / 2 - p / 2, 0), n.maxY = -n.minY, n.currentX = Math.max(Math.min(n.currentX, n.maxX), n.minX), n.currentY = Math.max(Math.min(n.currentY, n.maxY), n.minY), i.$imageWrapEl.transition(u).transform("translate3d(" + n.currentX + "px, " + n.currentY + "px,0)")
                }
            }, onTransitionEnd: function () {
                var e = this, t = e.zoom, i = t.gesture;
                i.$slideEl && e.previousIndex !== e.activeIndex && (i.$imageEl.transform("translate3d(0,0,0) scale(1)"), i.$imageWrapEl.transform("translate3d(0,0,0)"), i.$slideEl = void 0, i.$imageEl = void 0, i.$imageWrapEl = void 0, t.scale = 1, t.currentScale = 1)
            }, toggle: function (e) {
                var t = this, i = t.zoom;
                i.scale && 1 !== i.scale ? i.out() : i.in(e)
            }, in: function (t) {
                var i = this, n = i.zoom, r = i.params.zoom, s = n.gesture, a = n.image;
                if (s.$slideEl || (s.$slideEl = i.clickedSlide ? e(i.clickedSlide) : i.slides.eq(i.activeIndex), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + r.containerClass)), s.$imageEl && 0 !== s.$imageEl.length) {
                    s.$slideEl.addClass("" + r.zoomedSlideClass);
                    var o, l, d, c, u, h, p, f, m, g, v, y, b, _, w, x, T, E;
                    void 0 === a.touchesStart.x && t ? (o = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, l = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (o = a.touchesStart.x, l = a.touchesStart.y), n.scale = s.$imageWrapEl.attr("data-swiper-zoom") || r.maxRatio, n.currentScale = s.$imageWrapEl.attr("data-swiper-zoom") || r.maxRatio, t ? (T = s.$slideEl[0].offsetWidth, E = s.$slideEl[0].offsetHeight, d = s.$slideEl.offset().left, c = s.$slideEl.offset().top, u = d + T / 2 - o, h = c + E / 2 - l, m = s.$imageEl[0].offsetWidth, g = s.$imageEl[0].offsetHeight, v = m * n.scale, y = g * n.scale, b = Math.min(T / 2 - v / 2, 0), _ = Math.min(E / 2 - y / 2, 0), w = -b, x = -_, p = u * n.scale, f = h * n.scale, p < b && (p = b), p > w && (p = w), f < _ && (f = _), f > x && (f = x)) : (p = 0, f = 0), s.$imageWrapEl.transition(300).transform("translate3d(" + p + "px, " + f + "px,0)"), s.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + n.scale + ")")
                }
            }, out: function () {
                var t = this, i = t.zoom, n = t.params.zoom, r = i.gesture;
                r.$slideEl || (r.$slideEl = t.clickedSlide ? e(t.clickedSlide) : t.slides.eq(t.activeIndex), r.$imageEl = r.$slideEl.find("img, svg, canvas"), r.$imageWrapEl = r.$imageEl.parent("." + n.containerClass)), r.$imageEl && 0 !== r.$imageEl.length && (i.scale = 1, i.currentScale = 1, r.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), r.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), r.$slideEl.removeClass("" + n.zoomedSlideClass), r.$slideEl = void 0)
            }, enable: function () {
                var e = this, t = e.zoom;
                if (!t.enabled) {
                    t.enabled = !0;
                    var i = !("touchstart" !== e.touchEvents.start || !We.passiveListener || !e.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    We.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, i)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
                }
            }, disable: function () {
                var e = this, t = e.zoom;
                if (t.enabled) {
                    e.zoom.enabled = !1;
                    var i = !("touchstart" !== e.touchEvents.start || !We.passiveListener || !e.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    We.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, i)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
                }
            }
        }, kt = {
            name: "zoom",
            params: {
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            },
            create: function () {
                var e = this, t = {
                    enabled: !1,
                    scale: 1,
                    currentScale: 1,
                    isScaling: !1,
                    gesture: {
                        $slideEl: void 0,
                        slideWidth: void 0,
                        slideHeight: void 0,
                        $imageEl: void 0,
                        $imageWrapEl: void 0,
                        maxRatio: 3
                    },
                    image: {
                        isTouched: void 0,
                        isMoved: void 0,
                        currentX: void 0,
                        currentY: void 0,
                        minX: void 0,
                        minY: void 0,
                        maxX: void 0,
                        maxY: void 0,
                        width: void 0,
                        height: void 0,
                        startX: void 0,
                        startY: void 0,
                        touchesStart: {},
                        touchesCurrent: {}
                    },
                    velocity: {x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0}
                };
                "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (i) {
                    t[i] = Ct[i].bind(e)
                }), Fe.extend(e, {zoom: t})
            },
            on: {
                init: function () {
                    var e = this;
                    e.params.zoom.enabled && e.zoom.enable()
                }, destroy: function () {
                    this.zoom.disable()
                }, touchStart: function (e) {
                    var t = this;
                    t.zoom.enabled && t.zoom.onTouchStart(e)
                }, touchEnd: function (e) {
                    var t = this;
                    t.zoom.enabled && t.zoom.onTouchEnd(e)
                }, doubleTap: function (e) {
                    var t = this;
                    t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e)
                }, transitionEnd: function () {
                    var e = this;
                    e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
                }
            }
        }, Dt = {
            loadInSlide: function (t, i) {
                void 0 === i && (i = !0);
                var n = this, r = n.params.lazy;
                if (void 0 !== t && 0 !== n.slides.length) {
                    var s = n.virtual && n.params.virtual.enabled,
                        a = s ? n.$wrapperEl.children("." + n.params.slideClass + '[data-swiper-slide-index="' + t + '"]') : n.slides.eq(t),
                        o = a.find("." + r.elementClass + ":not(." + r.loadedClass + "):not(." + r.loadingClass + ")");
                    !a.hasClass(r.elementClass) || a.hasClass(r.loadedClass) || a.hasClass(r.loadingClass) || (o = o.add(a[0])), 0 !== o.length && o.each(function (t, s) {
                        var o = e(s);
                        o.addClass(r.loadingClass);
                        var l = o.attr("data-background"), d = o.attr("data-src"), c = o.attr("data-srcset"),
                            u = o.attr("data-sizes");
                        n.loadImage(o[0], d || l, c, u, !1, function () {
                            if (void 0 !== n && null !== n && n && (!n || n.params) && !n.destroyed) {
                                if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (c && (o.attr("srcset", c), o.removeAttr("data-srcset")), u && (o.attr("sizes", u), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(r.loadedClass).removeClass(r.loadingClass), a.find("." + r.preloaderClass).remove(), n.params.loop && i) {
                                    var e = a.attr("data-swiper-slide-index");
                                    if (a.hasClass(n.params.slideDuplicateClass)) {
                                        var t = n.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + n.params.slideDuplicateClass + ")");
                                        n.lazy.loadInSlide(t.index(), !1)
                                    } else {
                                        var s = n.$wrapperEl.children("." + n.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                        n.lazy.loadInSlide(s.index(), !1)
                                    }
                                }
                                n.emit("lazyImageReady", a[0], o[0])
                            }
                        }), n.emit("lazyImageLoad", a[0], o[0])
                    })
                }
            }, load: function () {
                function t(e) {
                    if (l) {
                        if (r.children("." + s.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                    } else if (a[e]) return !0;
                    return !1
                }

                function i(t) {
                    return l ? e(t).attr("data-swiper-slide-index") : e(t).index()
                }

                var n = this, r = n.$wrapperEl, s = n.params, a = n.slides, o = n.activeIndex,
                    l = n.virtual && s.virtual.enabled, d = s.lazy, c = s.slidesPerView;
                if ("auto" === c && (c = 0), n.lazy.initialImageLoaded || (n.lazy.initialImageLoaded = !0), n.params.watchSlidesVisibility) r.children("." + s.slideVisibleClass).each(function (t, i) {
                    var r = l ? e(i).attr("data-swiper-slide-index") : e(i).index();
                    n.lazy.loadInSlide(r)
                }); else if (c > 1) for (var u = o; u < o + c; u += 1) t(u) && n.lazy.loadInSlide(u); else n.lazy.loadInSlide(o);
                if (d.loadPrevNext) if (c > 1 || d.loadPrevNextAmount && d.loadPrevNextAmount > 1) {
                    for (var h = d.loadPrevNextAmount, p = c, f = Math.min(o + p + Math.max(h, p), a.length), m = Math.max(o - Math.max(p, h), 0), g = o + c; g < f; g += 1) t(g) && n.lazy.loadInSlide(g);
                    for (var v = m; v < o; v += 1) t(v) && n.lazy.loadInSlide(v)
                } else {
                    var y = r.children("." + s.slideNextClass);
                    y.length > 0 && n.lazy.loadInSlide(i(y));
                    var b = r.children("." + s.slidePrevClass);
                    b.length > 0 && n.lazy.loadInSlide(i(b))
                }
            }
        }, Ot = {
            name: "lazy",
            params: {
                lazy: {
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            },
            create: function () {
                var e = this;
                Fe.extend(e, {lazy: {initialImageLoaded: !1, load: Dt.load.bind(e), loadInSlide: Dt.loadInSlide.bind(e)}})
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
                }, init: function () {
                    var e = this;
                    e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load()
                }, scroll: function () {
                    var e = this;
                    e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
                }, resize: function () {
                    var e = this;
                    e.params.lazy.enabled && e.lazy.load()
                }, scrollbarDragMove: function () {
                    var e = this;
                    e.params.lazy.enabled && e.lazy.load()
                }, transitionStart: function () {
                    var e = this;
                    e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
                }, transitionEnd: function () {
                    var e = this;
                    e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load()
                }
            }
        }, Mt = {
            LinearSpline: function (e, t) {
                var i = function () {
                    var e, t, i;
                    return function (n, r) {
                        for (t = -1, e = n.length; e - t > 1;) i = e + t >> 1, n[i] <= r ? t = i : e = i;
                        return e
                    }
                }();
                this.x = e, this.y = t, this.lastIndex = e.length - 1;
                var n, r;
                return this.interpolate = function (e) {
                    return e ? (r = i(this.x, e), n = r - 1, (e - this.x[n]) * (this.y[r] - this.y[n]) / (this.x[r] - this.x[n]) + this.y[n]) : 0
                }, this
            }, getInterpolateFunction: function (e) {
                var t = this;
                t.controller.spline || (t.controller.spline = t.params.loop ? new Mt.LinearSpline(t.slidesGrid, e.slidesGrid) : new Mt.LinearSpline(t.snapGrid, e.snapGrid))
            }, setTranslate: function (e, t) {
                function i(e) {
                    var t = s.rtlTranslate ? -s.translate : s.translate;
                    "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), r = -s.controller.spline.interpolate(-t)), r && "container" !== s.params.controller.by || (n = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), r = (t - s.minTranslate()) * n + e.minTranslate()), s.params.controller.inverse && (r = e.maxTranslate() - r), e.updateProgress(r), e.setTranslate(r, s), e.updateActiveIndex(), e.updateSlidesClasses()
                }

                var n, r, s = this, a = s.controller.control;
                if (Array.isArray(a)) for (var o = 0; o < a.length; o += 1) a[o] !== t && a[o] instanceof st && i(a[o]); else a instanceof st && t !== a && i(a)
            }, setTransition: function (e, t) {
                function i(t) {
                    t.setTransition(e, r), 0 !== e && (t.transitionStart(), t.$wrapperEl.transitionEnd(function () {
                        s && (t.params.loop && "slide" === r.params.controller.by && t.loopFix(), t.transitionEnd())
                    }))
                }

                var n, r = this, s = r.controller.control;
                if (Array.isArray(s)) for (n = 0; n < s.length; n += 1) s[n] !== t && s[n] instanceof st && i(s[n]); else s instanceof st && t !== s && i(s)
            }
        }, At = {
            name: "controller",
            params: {controller: {control: void 0, inverse: !1, by: "slide"}},
            create: function () {
                var e = this;
                Fe.extend(e, {
                    controller: {
                        control: e.params.controller.control,
                        getInterpolateFunction: Mt.getInterpolateFunction.bind(e),
                        setTranslate: Mt.setTranslate.bind(e),
                        setTransition: Mt.setTransition.bind(e)
                    }
                })
            },
            on: {
                update: function () {
                    var e = this;
                    e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                }, resize: function () {
                    var e = this;
                    e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                }, observerUpdate: function () {
                    var e = this;
                    e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                }, setTranslate: function (e, t) {
                    var i = this;
                    i.controller.control && i.controller.setTranslate(e, t)
                }, setTransition: function (e, t) {
                    var i = this;
                    i.controller.control && i.controller.setTransition(e, t)
                }
            }
        }, It = {
            makeElFocusable: function (e) {
                return e.attr("tabIndex", "0"), e
            }, addElRole: function (e, t) {
                return e.attr("role", t), e
            }, addElLabel: function (e, t) {
                return e.attr("aria-label", t), e
            }, disableEl: function (e) {
                return e.attr("aria-disabled", !0), e
            }, enableEl: function (e) {
                return e.attr("aria-disabled", !1), e
            }, onEnterKey: function (t) {
                var i = this, n = i.params.a11y;
                if (13 === t.keyCode) {
                    var r = e(t.target);
                    i.navigation && i.navigation.$nextEl && r.is(i.navigation.$nextEl) && (i.isEnd && !i.params.loop || i.slideNext(), i.isEnd ? i.a11y.notify(n.lastSlideMessage) : i.a11y.notify(n.nextSlideMessage)), i.navigation && i.navigation.$prevEl && r.is(i.navigation.$prevEl) && (i.isBeginning && !i.params.loop || i.slidePrev(), i.isBeginning ? i.a11y.notify(n.firstSlideMessage) : i.a11y.notify(n.prevSlideMessage)), i.pagination && r.is("." + i.params.pagination.bulletClass) && r[0].click()
                }
            }, notify: function (e) {
                var t = this, i = t.a11y.liveRegion;
                0 !== i.length && (i.html(""), i.html(e))
            }, updateNavigation: function () {
                var e = this;
                if (!e.params.loop) {
                    var t = e.navigation, i = t.$nextEl, n = t.$prevEl;
                    n && n.length > 0 && (e.isBeginning ? e.a11y.disableEl(n) : e.a11y.enableEl(n)), i && i.length > 0 && (e.isEnd ? e.a11y.disableEl(i) : e.a11y.enableEl(i))
                }
            }, updatePagination: function () {
                var t = this, i = t.params.a11y;
                t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length && t.pagination.bullets.each(function (n, r) {
                    var s = e(r);
                    t.a11y.makeElFocusable(s), t.a11y.addElRole(s, "button"), t.a11y.addElLabel(s, i.paginationBulletMessage.replace(/{{index}}/, s.index() + 1))
                })
            }, init: function () {
                var e = this;
                e.$el.append(e.a11y.liveRegion);
                var t, i, n = e.params.a11y;
                e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (i = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, n.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), i && (e.a11y.makeElFocusable(i), e.a11y.addElRole(i, "button"), e.a11y.addElLabel(i, n.prevSlideMessage), i.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
            }, destroy: function () {
                var e = this;
                e.a11y.liveRegion && e.a11y.liveRegion.length > 0 && e.a11y.liveRegion.remove();
                var t, i;
                e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (i = e.navigation.$prevEl), t && t.off("keydown", e.a11y.onEnterKey), i && i.off("keydown", e.a11y.onEnterKey), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.off("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
            }
        }, Pt = {
            name: "a11y",
            params: {
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}"
                }
            },
            create: function () {
                var t = this;
                Fe.extend(t, {a11y: {liveRegion: e('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')}}), Object.keys(It).forEach(function (e) {
                    t.a11y[e] = It[e].bind(t)
                })
            },
            on: {
                init: function () {
                    var e = this;
                    e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation())
                }, toEdge: function () {
                    var e = this;
                    e.params.a11y.enabled && e.a11y.updateNavigation()
                }, fromEdge: function () {
                    var e = this;
                    e.params.a11y.enabled && e.a11y.updateNavigation()
                }, paginationUpdate: function () {
                    var e = this;
                    e.params.a11y.enabled && e.a11y.updatePagination()
                }, destroy: function () {
                    var e = this;
                    e.params.a11y.enabled && e.a11y.destroy()
                }
            }
        }, Nt = {
            init: function () {
                var e = this;
                if (e.params.history) {
                    if (!Le.history || !Le.history.pushState) return e.params.history.enabled = !1, void(e.params.hashNavigation.enabled = !0);
                    var t = e.history;
                    t.initialized = !0, t.paths = Nt.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || Le.addEventListener("popstate", e.history.setHistoryPopState))
                }
            }, destroy: function () {
                var e = this;
                e.params.history.replaceState || Le.removeEventListener("popstate", e.history.setHistoryPopState)
            },
            setHistoryPopState: function () {
                var e = this;
                e.history.paths = Nt.getPathValues(), e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1)
            }, getPathValues: function () {
                var e = Le.location.pathname.slice(1).split("/").filter(function (e) {
                    return "" !== e
                }), t = e.length;
                return {key: e[t - 2], value: e[t - 1]}
            }, setHistory: function (e, t) {
                var i = this;
                if (i.history.initialized && i.params.history.enabled) {
                    var n = i.slides.eq(t), r = Nt.slugify(n.attr("data-history"));
                    Le.location.pathname.includes(e) || (r = e + "/" + r);
                    var s = Le.history.state;
                    s && s.value === r || (i.params.history.replaceState ? Le.history.replaceState({value: r}, null, r) : Le.history.pushState({value: r}, null, r))
                }
            }, slugify: function (e) {
                return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            }, scrollToSlide: function (e, t, i) {
                var n = this;
                if (t) for (var r = 0, s = n.slides.length; r < s; r += 1) {
                    var a = n.slides.eq(r), o = Nt.slugify(a.attr("data-history"));
                    if (o === t && !a.hasClass(n.params.slideDuplicateClass)) {
                        var l = a.index();
                        n.slideTo(l, e, i)
                    }
                } else n.slideTo(0, e, i)
            }
        }, Lt = {
            name: "history", params: {history: {enabled: !1, replaceState: !1, key: "slides"}}, create: function () {
                var e = this;
                Fe.extend(e, {
                    history: {
                        init: Nt.init.bind(e),
                        setHistory: Nt.setHistory.bind(e),
                        setHistoryPopState: Nt.setHistoryPopState.bind(e),
                        scrollToSlide: Nt.scrollToSlide.bind(e),
                        destroy: Nt.destroy.bind(e)
                    }
                })
            }, on: {
                init: function () {
                    var e = this;
                    e.params.history.enabled && e.history.init()
                }, destroy: function () {
                    var e = this;
                    e.params.history.enabled && e.history.destroy()
                }, transitionEnd: function () {
                    var e = this;
                    e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex)
                }
            }
        }, $t = {
            onHashCange: function () {
                var e = this, t = Ne.location.hash.replace("#", "");
                t !== e.slides.eq(e.activeIndex).attr("data-hash") && e.slideTo(e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index())
            }, setHash: function () {
                var e = this;
                if (e.hashNavigation.initialized && e.params.hashNavigation.enabled) if (e.params.hashNavigation.replaceState && Le.history && Le.history.replaceState) Le.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || ""); else {
                    var t = e.slides.eq(e.activeIndex), i = t.attr("data-hash") || t.attr("data-history");
                    Ne.location.hash = i || ""
                }
            }, init: function () {
                var t = this;
                if (!(!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled)) {
                    t.hashNavigation.initialized = !0;
                    var i = Ne.location.hash.replace("#", "");
                    if (i) for (var n = 0, r = t.slides.length; n < r; n += 1) {
                        var s = t.slides.eq(n), a = s.attr("data-hash") || s.attr("data-history");
                        if (a === i && !s.hasClass(t.params.slideDuplicateClass)) {
                            var o = s.index();
                            t.slideTo(o, 0, t.params.runCallbacksOnInit, !0)
                        }
                    }
                    t.params.hashNavigation.watchState && e(Le).on("hashchange", t.hashNavigation.onHashCange)
                }
            }, destroy: function () {
                var t = this;
                t.params.hashNavigation.watchState && e(Le).off("hashchange", t.hashNavigation.onHashCange)
            }
        }, Ht = {
            name: "hash-navigation",
            params: {hashNavigation: {enabled: !1, replaceState: !1, watchState: !1}},
            create: function () {
                var e = this;
                Fe.extend(e, {
                    hashNavigation: {
                        initialized: !1,
                        init: $t.init.bind(e),
                        destroy: $t.destroy.bind(e),
                        setHash: $t.setHash.bind(e),
                        onHashCange: $t.onHashCange.bind(e)
                    }
                })
            },
            on: {
                init: function () {
                    var e = this;
                    e.params.hashNavigation.enabled && e.hashNavigation.init()
                }, destroy: function () {
                    var e = this;
                    e.params.hashNavigation.enabled && e.hashNavigation.destroy()
                }, transitionEnd: function () {
                    var e = this;
                    e.hashNavigation.initialized && e.hashNavigation.setHash()
                }
            }
        }, Ft = {
            run: function () {
                var e = this, t = e.slides.eq(e.activeIndex), i = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = Fe.nextTick(function () {
                    e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
                }, i)
            }, start: function () {
                var e = this;
                return void 0 === e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0))
            }, stop: function () {
                var e = this;
                return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0))
            }, pause: function (e) {
                var t = this;
                t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())))
            }
        }, Wt = {
            name: "autoplay",
            params: {
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1
                }
            },
            create: function () {
                var e = this;
                Fe.extend(e, {
                    autoplay: {
                        running: !1,
                        paused: !1,
                        run: Ft.run.bind(e),
                        start: Ft.start.bind(e),
                        stop: Ft.stop.bind(e),
                        pause: Ft.pause.bind(e),
                        onTransitionEnd: function (t) {
                            e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                        }
                    }
                })
            },
            on: {
                init: function () {
                    var e = this;
                    e.params.autoplay.enabled && e.autoplay.start()
                }, beforeTransitionStart: function (e, t) {
                    var i = this;
                    i.autoplay.running && (t || !i.params.autoplay.disableOnInteraction ? i.autoplay.pause(e) : i.autoplay.stop())
                }, sliderFirstMove: function () {
                    var e = this;
                    e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
                }, destroy: function () {
                    var e = this;
                    e.autoplay.running && e.autoplay.stop()
                }
            }
        }, jt = {
            setTranslate: function () {
                for (var e = this, t = e.slides, i = 0; i < t.length; i += 1) {
                    var n = e.slides.eq(i), r = n[0].swiperSlideOffset, s = -r;
                    e.params.virtualTranslate || (s -= e.translate);
                    var a = 0;
                    e.isHorizontal() || (a = s, s = 0);
                    var o = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(n[0].progress), 0) : 1 + Math.min(Math.max(n[0].progress, -1), 0);
                    n.css({opacity: o}).transform("translate3d(" + s + "px, " + a + "px, 0px)")
                }
            }, setTransition: function (e) {
                var t = this, i = t.slides, n = t.$wrapperEl;
                if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
                    var r = !1;
                    i.transitionEnd(function () {
                        if (!r && t && !t.destroyed) {
                            r = !0, t.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) n.trigger(e[i])
                        }
                    })
                }
            }
        }, zt = {
            name: "effect-fade", params: {fadeEffect: {crossFade: !1}}, create: function () {
                var e = this;
                Fe.extend(e, {fadeEffect: {setTranslate: jt.setTranslate.bind(e), setTransition: jt.setTransition.bind(e)}})
            }, on: {
                beforeInit: function () {
                    var e = this;
                    if ("fade" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "fade");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        Fe.extend(e.params, t), Fe.extend(e.originalParams, t)
                    }
                }, setTranslate: function () {
                    var e = this;
                    "fade" === e.params.effect && e.fadeEffect.setTranslate()
                }, setTransition: function (e) {
                    var t = this;
                    "fade" === t.params.effect && t.fadeEffect.setTransition(e)
                }
            }
        }, Rt = {
            setTranslate: function () {
                var t, i = this, n = i.$el, r = i.$wrapperEl, s = i.slides, a = i.width, o = i.height, l = i.rtlTranslate,
                    d = i.size, c = i.params.cubeEffect, u = i.isHorizontal(), h = i.virtual && i.params.virtual.enabled,
                    p = 0;
                c.shadow && (u ? (t = r.find(".swiper-cube-shadow"), 0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'), r.append(t)), t.css({height: a + "px"})) : (t = n.find(".swiper-cube-shadow"), 0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'), n.append(t))));
                for (var f = 0; f < s.length; f += 1) {
                    var m = s.eq(f), g = f;
                    h && (g = parseInt(m.attr("data-swiper-slide-index"), 10));
                    var v = 90 * g, y = Math.floor(v / 360);
                    l && (v = -v, y = Math.floor(-v / 360));
                    var b = Math.max(Math.min(m[0].progress, 1), -1), _ = 0, w = 0, x = 0;
                    g % 4 == 0 ? (_ = 4 * -y * d, x = 0) : (g - 1) % 4 == 0 ? (_ = 0, x = 4 * -y * d) : (g - 2) % 4 == 0 ? (_ = d + 4 * y * d, x = d) : (g - 3) % 4 == 0 && (_ = -d, x = 3 * d + 4 * d * y), l && (_ = -_), u || (w = _, _ = 0);
                    var T = "rotateX(" + (u ? 0 : -v) + "deg) rotateY(" + (u ? v : 0) + "deg) translate3d(" + _ + "px, " + w + "px, " + x + "px)";
                    if (b <= 1 && b > -1 && (p = 90 * g + 90 * b, l && (p = 90 * -g - 90 * b)), m.transform(T), c.slideShadows) {
                        var E = u ? m.find(".swiper-slide-shadow-left") : m.find(".swiper-slide-shadow-top"),
                            S = u ? m.find(".swiper-slide-shadow-right") : m.find(".swiper-slide-shadow-bottom");
                        0 === E.length && (E = e('<div class="swiper-slide-shadow-' + (u ? "left" : "top") + '"></div>'), m.append(E)), 0 === S.length && (S = e('<div class="swiper-slide-shadow-' + (u ? "right" : "bottom") + '"></div>'), m.append(S)), E.length && (E[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0))
                    }
                }
                if (r.css({
                    "-webkit-transform-origin": "50% 50% -" + d / 2 + "px",
                    "-moz-transform-origin": "50% 50% -" + d / 2 + "px",
                    "-ms-transform-origin": "50% 50% -" + d / 2 + "px",
                    "transform-origin": "50% 50% -" + d / 2 + "px"
                }), c.shadow) if (u) t.transform("translate3d(0px, " + (a / 2 + c.shadowOffset) + "px, " + -a / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + c.shadowScale + ")"); else {
                    var C = Math.abs(p) - 90 * Math.floor(Math.abs(p) / 90),
                        k = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2),
                        D = c.shadowScale, O = c.shadowScale / k, M = c.shadowOffset;
                    t.transform("scale3d(" + D + ", 1, " + O + ") translate3d(0px, " + (o / 2 + M) + "px, " + -o / 2 / O + "px) rotateX(-90deg)")
                }
                var A = Qe.isSafari || Qe.isUiWebView ? -d / 2 : 0;
                r.transform("translate3d(0px,0," + A + "px) rotateX(" + (i.isHorizontal() ? 0 : p) + "deg) rotateY(" + (i.isHorizontal() ? -p : 0) + "deg)")
            }, setTransition: function (e) {
                var t = this, i = t.$el;
                t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && i.find(".swiper-cube-shadow").transition(e)
            }
        }, Bt = {
            name: "effect-cube",
            params: {cubeEffect: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94}},
            create: function () {
                var e = this;
                Fe.extend(e, {cubeEffect: {setTranslate: Rt.setTranslate.bind(e), setTransition: Rt.setTransition.bind(e)}})
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    if ("cube" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            resistanceRatio: 0,
                            spaceBetween: 0,
                            centeredSlides: !1,
                            virtualTranslate: !0
                        };
                        Fe.extend(e.params, t), Fe.extend(e.originalParams, t)
                    }
                }, setTranslate: function () {
                    var e = this;
                    "cube" === e.params.effect && e.cubeEffect.setTranslate()
                }, setTransition: function (e) {
                    var t = this;
                    "cube" === t.params.effect && t.cubeEffect.setTransition(e)
                }
            }
        }, Vt = {
            setTranslate: function () {
                for (var t = this, i = t.slides, n = t.rtlTranslate, r = 0; r < i.length; r += 1) {
                    var s = i.eq(r), a = s[0].progress;
                    t.params.flipEffect.limitRotation && (a = Math.max(Math.min(s[0].progress, 1), -1));
                    var o = s[0].swiperSlideOffset, l = -180 * a, d = l, c = 0, u = -o, h = 0;
                    if (t.isHorizontal() ? n && (d = -d) : (h = u, u = 0, c = -d, d = 0), s[0].style.zIndex = -Math.abs(Math.round(a)) + i.length, t.params.flipEffect.slideShadows) {
                        var p = t.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                            f = t.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                        0 === p.length && (p = e('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "left" : "top") + '"></div>'), s.append(p)), 0 === f.length && (f = e('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(f)), p.length && (p[0].style.opacity = Math.max(-a, 0)), f.length && (f[0].style.opacity = Math.max(a, 0))
                    }
                    s.transform("translate3d(" + u + "px, " + h + "px, 0px) rotateX(" + c + "deg) rotateY(" + d + "deg)")
                }
            }, setTransition: function (e) {
                var t = this, i = t.slides, n = t.activeIndex, r = t.$wrapperEl;
                if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                    var s = !1;
                    i.eq(n).transitionEnd(function () {
                        if (!s && t && !t.destroyed) {
                            s = !0, t.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) r.trigger(e[i])
                        }
                    })
                }
            }
        }, Yt = {
            name: "effect-flip", params: {flipEffect: {slideShadows: !0, limitRotation: !0}}, create: function () {
                var e = this;
                Fe.extend(e, {flipEffect: {setTranslate: Vt.setTranslate.bind(e), setTransition: Vt.setTransition.bind(e)}})
            }, on: {
                beforeInit: function () {
                    var e = this;
                    if ("flip" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        Fe.extend(e.params, t), Fe.extend(e.originalParams, t)
                    }
                }, setTranslate: function () {
                    var e = this;
                    "flip" === e.params.effect && e.flipEffect.setTranslate()
                }, setTransition: function (e) {
                    var t = this;
                    "flip" === t.params.effect && t.flipEffect.setTransition(e)
                }
            }
        }, Gt = {
            setTranslate: function () {
                for (var t = this, i = t.width, n = t.height, r = t.slides, s = t.$wrapperEl, a = t.slidesSizesGrid, o = t.params.coverflowEffect, l = t.isHorizontal(), d = t.translate, c = l ? i / 2 - d : n / 2 - d, u = l ? o.rotate : -o.rotate, h = o.depth, p = 0, f = r.length; p < f; p += 1) {
                    var m = r.eq(p), g = a[p], v = m[0].swiperSlideOffset, y = (c - v - g / 2) / g * o.modifier,
                        b = l ? u * y : 0, _ = l ? 0 : u * y, w = -h * Math.abs(y), x = l ? 0 : o.stretch * y,
                        T = l ? o.stretch * y : 0;
                    Math.abs(T) < .001 && (T = 0), Math.abs(x) < .001 && (x = 0), Math.abs(w) < .001 && (w = 0), Math.abs(b) < .001 && (b = 0), Math.abs(_) < .001 && (_ = 0);
                    var E = "translate3d(" + T + "px," + x + "px," + w + "px)  rotateX(" + _ + "deg) rotateY(" + b + "deg)";
                    if (m.transform(E), m[0].style.zIndex = 1 - Math.abs(Math.round(y)), o.slideShadows) {
                        var S = l ? m.find(".swiper-slide-shadow-left") : m.find(".swiper-slide-shadow-top"),
                            C = l ? m.find(".swiper-slide-shadow-right") : m.find(".swiper-slide-shadow-bottom");
                        0 === S.length && (S = e('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'), m.append(S)), 0 === C.length && (C = e('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'), m.append(C)), S.length && (S[0].style.opacity = y > 0 ? y : 0), C.length && (C[0].style.opacity = -y > 0 ? -y : 0)
                    }
                }
                if (We.pointerEvents || We.prefixedPointerEvents) {
                    s[0].style.perspectiveOrigin = c + "px 50%"
                }
            }, setTransition: function (e) {
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
        }, qt = {
            name: "effect-coverflow",
            params: {coverflowEffect: {rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0}},
            create: function () {
                var e = this;
                Fe.extend(e, {
                    coverflowEffect: {
                        setTranslate: Gt.setTranslate.bind(e),
                        setTransition: Gt.setTransition.bind(e)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
                }, setTranslate: function () {
                    var e = this;
                    "coverflow" === e.params.effect && e.coverflowEffect.setTranslate()
                }, setTransition: function (e) {
                    var t = this;
                    "coverflow" === t.params.effect && t.coverflowEffect.setTransition(e)
                }
            }
        }, Ut = [at, ot, lt, dt, ut, pt, mt, vt, bt, wt, Tt, St, kt, Ot, At, Pt, Lt, Ht, Wt, zt, Bt, Yt, qt];
    return void 0 === st.use && (st.use = st.Class.use, st.installModule = st.Class.installModule), st.use(Ut), st
});
var topSlider = new Swiper(".top-slider .swiper-container", {
    direction: "horizontal",
    loop: !0,
    roundLengths: !0,
    pagination: {el: ".top-slider .swiper-pagination", clickable: !0},
    navigation: {nextEl: ".top-slider .swiper-button-next", prevEl: ".top-slider .swiper-button-prev"}
});
topSlider.on("slideChange", function (e) {
    var t = this;
    "light" == $(t.slides[t.activeIndex]).data("style") ? $("header").removeClass("light").addClass("dark") : $("header").removeClass("dark").addClass("light")
});
var brandSlider = new Swiper(".wr-brands .swiper-container", {
    slidesPerView: 4,
    direction: "horizontal",
    loop: !0,
    roundLengths: !0,
    navigation: {nextEl: ".wr-brands .swiper-button-next", prevEl: ".wr-brands .swiper-button-prev"},
    breakpoints: {540: {slidesPerView: 1}, 720: {slidesPerView: 2}, 960: {slidesPerView: 3}}
}), eventsSlider = new Swiper(".wr-events .swiper-container", {
    direction: "horizontal",
    loop: !0,
    roundLengths: !0,
    pagination: {el: ".wr-events .swiper-pagination"}
}), eventsMonthSlider = new Swiper(".wr-events-month .swiper-container", {
    slidesPerView: 4,
    direction: "horizontal",
    loop: !0,
    roundLengths: !0,
    navigation: {nextEl: ".wr-events-month .swiper-button-next", prevEl: ".wr-events-month .swiper-button-prev"},
    breakpoints: {540: {slidesPerView: 1}, 720: {slidesPerView: 2}, 1200: {slidesPerView: 3}}
});
$eventsMonth = $(".wr-events-month .events-month"), $eventSlider = $(".wr-events .swiper-slide"), $eventsMonth.each(function () {
    var e = $(this), t = $(this).attr("data-swiper-slide-index");
    e.on("click", function () {
        return $eventsMonth.removeClass("active"), $eventSlider.removeClass("swiper-slide-active"), e.toggleClass("active"), eventsSlider.slideTo(t, 500, !0), !1
    })
}), $(document).ready(function () {
    var e = $(".wr-slider-narrow");
    $.each(e, function () {
        var e = $(this).attr("id"), t = $("#" + e).find(".swiper-container"),
            i = $("#" + e).find(".swiper-button-next"), n = $("#" + e).find(".swiper-button-prev"),
            r = $("#" + e).find(".swiper-pagination");
        new Swiper(t, {loop: !0, navigation: {nextEl: i, prevEl: n}, pagination: {el: r, clickable: !0}})
    })
}), $(document).ready(function () {
    var e = $(".wr-slider-text");
    $.each(e, function () {
        var e = $(this).attr("id"), t = $("#" + e).find(".swiper-container"),
            i = $("#" + e).find(".swiper-button-next"), n = $("#" + e).find(".swiper-button-prev"),
            r = $("#" + e).find(".swiper-pagination");
        new Swiper(t, {loop: !0, navigation: {nextEl: i, prevEl: n}, pagination: {el: r, clickable: !0}})
    })
}), $(document).ready(function () {
    new Swiper(".catalog-brand-slider .swiper-container", {
        direction: "horizontal",
        loop: !0,
        slidesPerView: 5,
        roundLengths: !0,
        navigation: {
            nextEl: ".catalog-brand-slider .swiper-button-next",
            prevEl: ".catalog-brand-slider .swiper-button-prev"
        }
    })
}), "object" == typeof ymaps && ymaps.ready(init), function () {
    $(document).ready(function () {
        $("body").find(".menu-item").find(".menu-item h3").off("click").on("click", function (e) {
            var t = "A" === e.target.tagName;
            return t || $(this).toggleClass("closed"), t
        })
    })
}(), $(document).ready(function () {
}), function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], function (t) {
        return e(t, document, window, navigator)
    }) : "object" == typeof exports ? e(require("jquery"), document, window, navigator) : e(jQuery, document, window, navigator)
}(function (e, t, i, n, r) {
    "use strict";
    var s = 0, a = function () {
        var t, i = n.userAgent, r = /msie\s\d+/i;
        return i.search(r) > 0 && (t = r.exec(i).toString(), (t = t.split(" ")[1]) < 9) && (e("html").addClass("lt-ie9"), !0)
    }();
    Function.prototype.bind || (Function.prototype.bind = function (e) {
        var t = this, i = [].slice;
        if ("function" != typeof t) throw new TypeError;
        var n = i.call(arguments, 1), r = function () {
            if (this instanceof r) {
                var s = function () {
                };
                s.prototype = t.prototype;
                var a = new s, o = t.apply(a, n.concat(i.call(arguments)));
                return Object(o) === o ? o : a
            }
            return t.apply(e, n.concat(i.call(arguments)))
        };
        return r
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function (e, t) {
        var i;
        if (null == this) throw new TypeError('"this" is null or not defined');
        var n = Object(this), r = n.length >>> 0;
        if (0 === r) return -1;
        var s = +t || 0;
        if (Math.abs(s) === 1 / 0 && (s = 0), s >= r) return -1;
        for (i = Math.max(s >= 0 ? s : r - Math.abs(s), 0); i < r;) {
            if (i in n && n[i] === e) return i;
            i++
        }
        return -1
    });
    var o = function (n, s, a) {
        this.VERSION = "2.2.0", this.input = n, this.plugin_count = a, this.current_plugin = 0, this.calc_count = 0, this.update_tm = 0, this.old_from = 0, this.old_to = 0, this.old_min_interval = null, this.raf_id = null, this.dragging = !1, this.force_redraw = !1, this.no_diapason = !1, this.has_tab_index = !0, this.is_key = !1, this.is_update = !1, this.is_start = !0, this.is_finish = !1, this.is_active = !1, this.is_resize = !1, this.is_click = !1, s = s || {}, this.$cache = {
            win: e(i),
            body: e(t.body),
            input: e(n),
            cont: null,
            rs: null,
            min: null,
            max: null,
            from: null,
            to: null,
            single: null,
            bar: null,
            line: null,
            s_single: null,
            s_from: null,
            s_to: null,
            shad_single: null,
            shad_from: null,
            shad_to: null,
            edge: null,
            grid: null,
            grid_labels: []
        }, this.coords = {
            x_gap: 0,
            x_pointer: 0,
            w_rs: 0,
            w_rs_old: 0,
            w_handle: 0,
            p_gap: 0,
            p_gap_left: 0,
            p_gap_right: 0,
            p_step: 0,
            p_pointer: 0,
            p_handle: 0,
            p_single_fake: 0,
            p_single_real: 0,
            p_from_fake: 0,
            p_from_real: 0,
            p_to_fake: 0,
            p_to_real: 0,
            p_bar_x: 0,
            p_bar_w: 0,
            grid_gap: 0,
            big_num: 0,
            big: [],
            big_w: [],
            big_p: [],
            big_x: []
        }, this.labels = {
            w_min: 0,
            w_max: 0,
            w_from: 0,
            w_to: 0,
            w_single: 0,
            p_min: 0,
            p_max: 0,
            p_from_fake: 0,
            p_from_left: 0,
            p_to_fake: 0,
            p_to_left: 0,
            p_single_fake: 0,
            p_single_left: 0
        };
        var o, l, d, c = this.$cache.input, u = c.prop("value");
        o = {
            type: "single",
            min: 10,
            max: 100,
            from: null,
            to: null,
            step: 1,
            min_interval: 0,
            max_interval: 0,
            drag_interval: !1,
            values: [],
            p_values: [],
            from_fixed: !1,
            from_min: null,
            from_max: null,
            from_shadow: !1,
            to_fixed: !1,
            to_min: null,
            to_max: null,
            to_shadow: !1,
            prettify_enabled: !0,
            prettify_separator: " ",
            prettify: null,
            force_edges: !1,
            keyboard: !0,
            grid: !1,
            grid_margin: !0,
            grid_num: 4,
            grid_snap: !1,
            hide_min_max: !1,
            hide_from_to: !1,
            prefix: "",
            postfix: "",
            max_postfix: "",
            decorate_both: !0,
            values_separator: " — ",
            input_values_separator: ";",
            disable: !1,
            block: !1,
            extra_classes: "",
            scope: null,
            onStart: null,
            onChange: null,
            onFinish: null,
            onUpdate: null
        }, "INPUT" !== c[0].nodeName && console && console.warn && console.warn("Base element should be <input>!", c[0]), l = {
            type: c.data("type"),
            min: c.data("min"),
            max: c.data("max"),
            from: c.data("from"),
            to: c.data("to"),
            step: c.data("step"),
            min_interval: c.data("minInterval"),
            max_interval: c.data("maxInterval"),
            drag_interval: c.data("dragInterval"),
            values: c.data("values"),
            from_fixed: c.data("fromFixed"),
            from_min: c.data("fromMin"),
            from_max: c.data("fromMax"),
            from_shadow: c.data("fromShadow"),
            to_fixed: c.data("toFixed"),
            to_min: c.data("toMin"),
            to_max: c.data("toMax"),
            to_shadow: c.data("toShadow"),
            prettify_enabled: c.data("prettifyEnabled"),
            prettify_separator: c.data("prettifySeparator"),
            force_edges: c.data("forceEdges"),
            keyboard: c.data("keyboard"),
            grid: c.data("grid"),
            grid_margin: c.data("gridMargin"),
            grid_num: c.data("gridNum"),
            grid_snap: c.data("gridSnap"),
            hide_min_max: c.data("hideMinMax"),
            hide_from_to: c.data("hideFromTo"),
            prefix: c.data("prefix"),
            postfix: c.data("postfix"),
            max_postfix: c.data("maxPostfix"),
            decorate_both: c.data("decorateBoth"),
            values_separator: c.data("valuesSeparator"),
            input_values_separator: c.data("inputValuesSeparator"),
            disable: c.data("disable"),
            block: c.data("block"),
            extra_classes: c.data("extraClasses")
        }, l.values = l.values && l.values.split(",");
        for (d in l) l.hasOwnProperty(d) && (l[d] !== r && "" !== l[d] || delete l[d]);
        u !== r && "" !== u && (u = u.split(l.input_values_separator || s.input_values_separator || ";"), u[0] && u[0] == +u[0] && (u[0] = +u[0]), u[1] && u[1] == +u[1] && (u[1] = +u[1]), s && s.values && s.values.length ? (o.from = u[0] && s.values.indexOf(u[0]), o.to = u[1] && s.values.indexOf(u[1])) : (o.from = u[0] && +u[0], o.to = u[1] && +u[1])), e.extend(o, s), e.extend(o, l), this.options = o, this.update_check = {}, this.validate(), this.result = {
            input: this.$cache.input,
            slider: null,
            min: this.options.min,
            max: this.options.max,
            from: this.options.from,
            from_percent: 0,
            from_value: null,
            to: this.options.to,
            to_percent: 0,
            to_value: null
        }, this.init()
    };
    o.prototype = {
        init: function (e) {
            this.no_diapason = !1, this.coords.p_step = this.convertToPercent(this.options.step, !0), this.target = "base", this.toggleInput(), this.append(), this.setMinMax(), e ? (this.force_redraw = !0, this.calc(!0), this.callOnUpdate()) : (this.force_redraw = !0, this.calc(!0), this.callOnStart()), this.updateScene()
        }, append: function () {
            var e = '<span class="irs js-irs-' + this.plugin_count + " " + this.options.extra_classes + '"></span>';
            this.$cache.input.before(e), this.$cache.input.prop("readonly", !0), this.$cache.cont = this.$cache.input.prev(), this.result.slider = this.$cache.cont, this.$cache.cont.html('<span class="irs"><span class="irs-line" tabindex="0"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span><span class="irs-bar"></span>'), this.$cache.rs = this.$cache.cont.find(".irs"), this.$cache.min = this.$cache.cont.find(".irs-min"), this.$cache.max = this.$cache.cont.find(".irs-max"), this.$cache.from = this.$cache.cont.find(".irs-from"), this.$cache.to = this.$cache.cont.find(".irs-to"), this.$cache.single = this.$cache.cont.find(".irs-single"), this.$cache.bar = this.$cache.cont.find(".irs-bar"), this.$cache.line = this.$cache.cont.find(".irs-line"), this.$cache.grid = this.$cache.cont.find(".irs-grid"), "single" === this.options.type ? (this.$cache.cont.append('<span class="irs-bar-edge"></span><span class="irs-shadow shadow-single"></span><span class="irs-slider single"></span>'), this.$cache.edge = this.$cache.cont.find(".irs-bar-edge"), this.$cache.s_single = this.$cache.cont.find(".single"), this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.shad_single = this.$cache.cont.find(".shadow-single")) : (this.$cache.cont.append('<span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-slider from"></span><span class="irs-slider to"></span>'), this.$cache.s_from = this.$cache.cont.find(".from"), this.$cache.s_to = this.$cache.cont.find(".to"), this.$cache.shad_from = this.$cache.cont.find(".shadow-from"), this.$cache.shad_to = this.$cache.cont.find(".shadow-to"), this.setTopHandler()), this.options.hide_from_to && (this.$cache.from[0].style.display = "none", this.$cache.to[0].style.display = "none", this.$cache.single[0].style.display = "none"), this.appendGrid(), this.options.disable ? (this.appendDisableMask(), this.$cache.input[0].disabled = !0) : (this.$cache.input[0].disabled = !1, this.removeDisableMask(), this.bindEvents()), this.options.disable || (this.options.block ? this.appendDisableMask() : this.removeDisableMask()), this.options.drag_interval && (this.$cache.bar[0].style.cursor = "ew-resize")
        }, setTopHandler: function () {
            var e = this.options.min, t = this.options.max, i = this.options.from, n = this.options.to;
            i > e && n === t ? this.$cache.s_from.addClass("type_last") : n < t && this.$cache.s_to.addClass("type_last")
        }, changeLevel: function (e) {
            switch (e) {
                case"single":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single_fake), this.$cache.s_single.addClass("state_hover");
                    break;
                case"from":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.$cache.s_from.addClass("state_hover"), this.$cache.s_from.addClass("type_last"), this.$cache.s_to.removeClass("type_last");
                    break;
                case"to":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to_fake), this.$cache.s_to.addClass("state_hover"), this.$cache.s_to.addClass("type_last"), this.$cache.s_from.removeClass("type_last");
                    break;
                case"both":
                    this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.coords.p_gap_right = this.toFixed(this.coords.p_to_fake - this.coords.p_pointer), this.$cache.s_to.removeClass("type_last"), this.$cache.s_from.removeClass("type_last")
            }
        }, appendDisableMask: function () {
            this.$cache.cont.append('<span class="irs-disable-mask"></span>'), this.$cache.cont.addClass("irs-disabled")
        }, removeDisableMask: function () {
            this.$cache.cont.remove(".irs-disable-mask"), this.$cache.cont.removeClass("irs-disabled")
        }, remove: function () {
            this.$cache.cont.remove(), this.$cache.cont = null, this.$cache.line.off("keydown.irs_" + this.plugin_count), this.$cache.body.off("touchmove.irs_" + this.plugin_count), this.$cache.body.off("mousemove.irs_" + this.plugin_count), this.$cache.win.off("touchend.irs_" + this.plugin_count), this.$cache.win.off("mouseup.irs_" + this.plugin_count), a && (this.$cache.body.off("mouseup.irs_" + this.plugin_count), this.$cache.body.off("mouseleave.irs_" + this.plugin_count)), this.$cache.grid_labels = [], this.coords.big = [], this.coords.big_w = [], this.coords.big_p = [], this.coords.big_x = [], cancelAnimationFrame(this.raf_id)
        }, bindEvents: function () {
            this.no_diapason || (this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("focus.irs_" + this.plugin_count, this.pointerFocus.bind(this)), this.options.drag_interval && "double" === this.options.type ? (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"))) : (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), "single" === this.options.type ? (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))) : (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), this.options.keyboard && this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard")), a && (this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this))))
        }, pointerFocus: function (e) {
            if (!this.target) {
                var t, i;
                i = "single" === this.options.type ? this.$cache.single : this.$cache.from, t = i.offset().left, t += i.width() / 2 - 1, this.pointerClick("single", {
                    preventDefault: function () {
                    }, pageX: t
                })
            }
        }, pointerMove: function (e) {
            if (this.dragging) {
                var t = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
                this.coords.x_pointer = t - this.coords.x_gap, this.calc()
            }
        }, pointerUp: function (t) {
            this.current_plugin === this.plugin_count && this.is_active && (this.is_active = !1, this.$cache.cont.find(".state_hover").removeClass("state_hover"), this.force_redraw = !0, a && e("*").prop("unselectable", !1), this.updateScene(), this.restoreOriginalMinInterval(), (e.contains(this.$cache.cont[0], t.target) || this.dragging) && this.callOnFinish(), this.dragging = !1)
        }, pointerDown: function (t, i) {
            i.preventDefault();
            var n = i.pageX || i.originalEvent.touches && i.originalEvent.touches[0].pageX;
            2 !== i.button && ("both" === t && this.setTempMinInterval(), t || (t = this.target || "from"), this.current_plugin = this.plugin_count, this.target = t, this.is_active = !0, this.dragging = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = n - this.coords.x_gap, this.calcPointerPercent(), this.changeLevel(t), a && e("*").prop("unselectable", !0),
                this.$cache.line.trigger("focus"), this.updateScene())
        }, pointerClick: function (e, t) {
            t.preventDefault();
            var i = t.pageX || t.originalEvent.touches && t.originalEvent.touches[0].pageX;
            2 !== t.button && (this.current_plugin = this.plugin_count, this.target = e, this.is_click = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = +(i - this.coords.x_gap).toFixed(), this.force_redraw = !0, this.calc(), this.$cache.line.trigger("focus"))
        }, key: function (e, t) {
            if (!(this.current_plugin !== this.plugin_count || t.altKey || t.ctrlKey || t.shiftKey || t.metaKey)) {
                switch (t.which) {
                    case 83:
                    case 65:
                    case 40:
                    case 37:
                        t.preventDefault(), this.moveByKey(!1);
                        break;
                    case 87:
                    case 68:
                    case 38:
                    case 39:
                        t.preventDefault(), this.moveByKey(!0)
                }
                return !0
            }
        }, moveByKey: function (e) {
            var t = this.coords.p_pointer, i = (this.options.max - this.options.min) / 100;
            i = this.options.step / i, e ? t += i : t -= i, this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * t), this.is_key = !0, this.calc()
        }, setMinMax: function () {
            if (this.options) {
                if (this.options.hide_min_max) return this.$cache.min[0].style.display = "none", void(this.$cache.max[0].style.display = "none");
                if (this.options.values.length) this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])), this.$cache.max.html(this.decorate(this.options.p_values[this.options.max])); else {
                    var e = this._prettify(this.options.min), t = this._prettify(this.options.max);
                    this.result.min_pretty = e, this.result.max_pretty = t, this.$cache.min.html(this.decorate(e, this.options.min)), this.$cache.max.html(this.decorate(t, this.options.max))
                }
                this.labels.w_min = this.$cache.min.outerWidth(!1), this.labels.w_max = this.$cache.max.outerWidth(!1)
            }
        }, setTempMinInterval: function () {
            var e = this.result.to - this.result.from;
            null === this.old_min_interval && (this.old_min_interval = this.options.min_interval), this.options.min_interval = e
        }, restoreOriginalMinInterval: function () {
            null !== this.old_min_interval && (this.options.min_interval = this.old_min_interval, this.old_min_interval = null)
        }, calc: function (e) {
            if (this.options && (this.calc_count++, (10 === this.calc_count || e) && (this.calc_count = 0, this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.calcHandlePercent()), this.coords.w_rs)) {
                this.calcPointerPercent();
                var t = this.getHandleX();
                switch ("both" === this.target && (this.coords.p_gap = 0, t = this.getHandleX()), "click" === this.target && (this.coords.p_gap = this.coords.p_handle / 2, t = this.getHandleX(), this.options.drag_interval ? this.target = "both_one" : this.target = this.chooseHandle(t)), this.target) {
                    case"base":
                        var i = (this.options.max - this.options.min) / 100,
                            n = (this.result.from - this.options.min) / i, r = (this.result.to - this.options.min) / i;
                        this.coords.p_single_real = this.toFixed(n), this.coords.p_from_real = this.toFixed(n), this.coords.p_to_real = this.toFixed(r), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real), this.target = null;
                        break;
                    case"single":
                        if (this.options.from_fixed) break;
                        this.coords.p_single_real = this.convertToRealPercent(t), this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
                        break;
                    case"from":
                        if (this.options.from_fixed) break;
                        this.coords.p_from_real = this.convertToRealPercent(t), this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real > this.coords.p_to_real && (this.coords.p_from_real = this.coords.p_to_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
                        break;
                    case"to":
                        if (this.options.to_fixed) break;
                        this.coords.p_to_real = this.convertToRealPercent(t), this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real < this.coords.p_from_real && (this.coords.p_to_real = this.coords.p_from_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                        break;
                    case"both":
                        if (this.options.from_fixed || this.options.to_fixed) break;
                        t = this.toFixed(t + .001 * this.coords.p_handle), this.coords.p_from_real = this.convertToRealPercent(t) - this.coords.p_gap_left, this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.convertToRealPercent(t) + this.coords.p_gap_right, this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                        break;
                    case"both_one":
                        if (this.options.from_fixed || this.options.to_fixed) break;
                        var s = this.convertToRealPercent(t), a = this.result.from_percent, o = this.result.to_percent,
                            l = o - a, d = l / 2, c = s - d, u = s + d;
                        c < 0 && (c = 0, u = c + l), u > 100 && (u = 100, c = u - l), this.coords.p_from_real = this.calcWithStep(c), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.calcWithStep(u), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real)
                }
                "single" === this.options.type ? (this.coords.p_bar_x = this.coords.p_handle / 2, this.coords.p_bar_w = this.coords.p_single_fake, this.result.from_percent = this.coords.p_single_real, this.result.from = this.convertToValue(this.coords.p_single_real), this.result.from_pretty = this._prettify(this.result.from), this.options.values.length && (this.result.from_value = this.options.values[this.result.from])) : (this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + this.coords.p_handle / 2), this.coords.p_bar_w = this.toFixed(this.coords.p_to_fake - this.coords.p_from_fake), this.result.from_percent = this.coords.p_from_real, this.result.from = this.convertToValue(this.coords.p_from_real), this.result.from_pretty = this._prettify(this.result.from), this.result.to_percent = this.coords.p_to_real, this.result.to = this.convertToValue(this.coords.p_to_real), this.result.to_pretty = this._prettify(this.result.to), this.options.values.length && (this.result.from_value = this.options.values[this.result.from], this.result.to_value = this.options.values[this.result.to])), this.calcMinMax(), this.calcLabels()
            }
        }, calcPointerPercent: function () {
            if (!this.coords.w_rs) return void(this.coords.p_pointer = 0);
            this.coords.x_pointer < 0 || isNaN(this.coords.x_pointer) ? this.coords.x_pointer = 0 : this.coords.x_pointer > this.coords.w_rs && (this.coords.x_pointer = this.coords.w_rs), this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100)
        }, convertToRealPercent: function (e) {
            return e / (100 - this.coords.p_handle) * 100
        }, convertToFakePercent: function (e) {
            return e / 100 * (100 - this.coords.p_handle)
        }, getHandleX: function () {
            var e = 100 - this.coords.p_handle, t = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
            return t < 0 ? t = 0 : t > e && (t = e), t
        }, calcHandlePercent: function () {
            "single" === this.options.type ? this.coords.w_handle = this.$cache.s_single.outerWidth(!1) : this.coords.w_handle = this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100)
        }, chooseHandle: function (e) {
            return "single" === this.options.type ? "single" : e >= this.coords.p_from_real + (this.coords.p_to_real - this.coords.p_from_real) / 2 ? this.options.to_fixed ? "from" : "to" : this.options.from_fixed ? "to" : "from"
        }, calcMinMax: function () {
            this.coords.w_rs && (this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100, this.labels.p_max = this.labels.w_max / this.coords.w_rs * 100)
        }, calcLabels: function () {
            this.coords.w_rs && !this.options.hide_from_to && ("single" === this.options.type ? (this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = this.coords.p_single_fake + this.coords.p_handle / 2 - this.labels.p_single_fake / 2, this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake)) : (this.labels.w_from = this.$cache.from.outerWidth(!1), this.labels.p_from_fake = this.labels.w_from / this.coords.w_rs * 100, this.labels.p_from_left = this.coords.p_from_fake + this.coords.p_handle / 2 - this.labels.p_from_fake / 2, this.labels.p_from_left = this.toFixed(this.labels.p_from_left), this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from_fake), this.labels.w_to = this.$cache.to.outerWidth(!1), this.labels.p_to_fake = this.labels.w_to / this.coords.w_rs * 100, this.labels.p_to_left = this.coords.p_to_fake + this.coords.p_handle / 2 - this.labels.p_to_fake / 2, this.labels.p_to_left = this.toFixed(this.labels.p_to_left), this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake), this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = (this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2 - this.labels.p_single_fake / 2, this.labels.p_single_left = this.toFixed(this.labels.p_single_left), this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake)))
        }, updateScene: function () {
            this.raf_id && (cancelAnimationFrame(this.raf_id), this.raf_id = null), clearTimeout(this.update_tm), this.update_tm = null, this.options && (this.drawHandles(), this.is_active ? this.raf_id = requestAnimationFrame(this.updateScene.bind(this)) : this.update_tm = setTimeout(this.updateScene.bind(this), 300))
        }, drawHandles: function () {
            this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && (this.coords.w_rs !== this.coords.w_rs_old && (this.target = "base", this.is_resize = !0), (this.coords.w_rs !== this.coords.w_rs_old || this.force_redraw) && (this.setMinMax(), this.calc(!0), this.drawLabels(), this.options.grid && (this.calcGridMargin(), this.calcGridLabels()), this.force_redraw = !0, this.coords.w_rs_old = this.coords.w_rs, this.drawShadow()), this.coords.w_rs && (this.dragging || this.force_redraw || this.is_key) && ((this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) && (this.drawLabels(), this.$cache.bar[0].style.left = this.coords.p_bar_x + "%", this.$cache.bar[0].style.width = this.coords.p_bar_w + "%", "single" === this.options.type ? (this.$cache.s_single[0].style.left = this.coords.p_single_fake + "%", this.$cache.single[0].style.left = this.labels.p_single_left + "%") : (this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%", this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%", (this.old_from !== this.result.from || this.force_redraw) && (this.$cache.from[0].style.left = this.labels.p_from_left + "%"), (this.old_to !== this.result.to || this.force_redraw) && (this.$cache.to[0].style.left = this.labels.p_to_left + "%"), this.$cache.single[0].style.left = this.labels.p_single_left + "%"), this.writeToInput(), this.old_from === this.result.from && this.old_to === this.result.to || this.is_start || (this.$cache.input.trigger("change"), this.$cache.input.trigger("input")), this.old_from = this.result.from, this.old_to = this.result.to, this.is_resize || this.is_update || this.is_start || this.is_finish || this.callOnChange(), (this.is_key || this.is_click) && (this.is_key = !1, this.is_click = !1, this.callOnFinish()), this.is_update = !1, this.is_resize = !1, this.is_finish = !1), this.is_start = !1, this.is_key = !1, this.is_click = !1, this.force_redraw = !1))
        }, drawLabels: function () {
            if (this.options) {
                var e, t, i, n, r, s = this.options.values.length, a = this.options.p_values;
                if (!this.options.hide_from_to) if ("single" === this.options.type) s ? (e = this.decorate(a[this.result.from]), this.$cache.single.html(e)) : (n = this._prettify(this.result.from), e = this.decorate(n, this.result.from), this.$cache.single.html(e)), this.calcLabels(), this.labels.p_single_left < this.labels.p_min + 1 ? this.$cache.min[0].style.visibility = "hidden" : this.$cache.min[0].style.visibility = "visible", this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels.p_max - 1 ? this.$cache.max[0].style.visibility = "hidden" : this.$cache.max[0].style.visibility = "visible"; else {
                    s ? (this.options.decorate_both ? (e = this.decorate(a[this.result.from]), e += this.options.values_separator, e += this.decorate(a[this.result.to])) : e = this.decorate(a[this.result.from] + this.options.values_separator + a[this.result.to]), t = this.decorate(a[this.result.from]), i = this.decorate(a[this.result.to]), this.$cache.single.html(e), this.$cache.from.html(t), this.$cache.to.html(i)) : (n = this._prettify(this.result.from), r = this._prettify(this.result.to), this.options.decorate_both ? (e = this.decorate(n, this.result.from), e += this.options.values_separator, e += this.decorate(r, this.result.to)) : e = this.decorate(n + this.options.values_separator + r, this.result.to), t = this.decorate(n, this.result.from), i = this.decorate(r, this.result.to), this.$cache.single.html(e), this.$cache.from.html(t), this.$cache.to.html(i)), this.calcLabels();
                    var o = Math.min(this.labels.p_single_left, this.labels.p_from_left),
                        l = this.labels.p_single_left + this.labels.p_single_fake,
                        d = this.labels.p_to_left + this.labels.p_to_fake, c = Math.max(l, d);
                    this.labels.p_from_left + this.labels.p_from_fake >= this.labels.p_to_left ? (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", this.result.from === this.result.to ? ("from" === this.target ? this.$cache.from[0].style.visibility = "visible" : "to" === this.target ? this.$cache.to[0].style.visibility = "visible" : this.target || (this.$cache.from[0].style.visibility = "visible"), this.$cache.single[0].style.visibility = "hidden", c = d) : (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", c = Math.max(l, d))) : (this.$cache.from[0].style.visibility = "visible", this.$cache.to[0].style.visibility = "visible", this.$cache.single[0].style.visibility = "hidden"), o < this.labels.p_min + 1 ? this.$cache.min[0].style.visibility = "hidden" : this.$cache.min[0].style.visibility = "visible", c > 100 - this.labels.p_max - 1 ? this.$cache.max[0].style.visibility = "hidden" : this.$cache.max[0].style.visibility = "visible"
                }
            }
        }, drawShadow: function () {
            var e, t, i, n, r = this.options, s = this.$cache, a = "number" == typeof r.from_min && !isNaN(r.from_min),
                o = "number" == typeof r.from_max && !isNaN(r.from_max),
                l = "number" == typeof r.to_min && !isNaN(r.to_min),
                d = "number" == typeof r.to_max && !isNaN(r.to_max);
            "single" === r.type ? r.from_shadow && (a || o) ? (e = this.convertToPercent(a ? r.from_min : r.min), t = this.convertToPercent(o ? r.from_max : r.max) - e, e = this.toFixed(e - this.coords.p_handle / 100 * e), t = this.toFixed(t - this.coords.p_handle / 100 * t), e += this.coords.p_handle / 2, s.shad_single[0].style.display = "block", s.shad_single[0].style.left = e + "%", s.shad_single[0].style.width = t + "%") : s.shad_single[0].style.display = "none" : (r.from_shadow && (a || o) ? (e = this.convertToPercent(a ? r.from_min : r.min), t = this.convertToPercent(o ? r.from_max : r.max) - e, e = this.toFixed(e - this.coords.p_handle / 100 * e), t = this.toFixed(t - this.coords.p_handle / 100 * t), e += this.coords.p_handle / 2, s.shad_from[0].style.display = "block", s.shad_from[0].style.left = e + "%", s.shad_from[0].style.width = t + "%") : s.shad_from[0].style.display = "none", r.to_shadow && (l || d) ? (i = this.convertToPercent(l ? r.to_min : r.min), n = this.convertToPercent(d ? r.to_max : r.max) - i, i = this.toFixed(i - this.coords.p_handle / 100 * i), n = this.toFixed(n - this.coords.p_handle / 100 * n), i += this.coords.p_handle / 2, s.shad_to[0].style.display = "block", s.shad_to[0].style.left = i + "%", s.shad_to[0].style.width = n + "%") : s.shad_to[0].style.display = "none")
        }, writeToInput: function () {
            "single" === this.options.type ? (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value) : this.$cache.input.prop("value", this.result.from), this.$cache.input.data("from", this.result.from)) : (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator + this.result.to_value) : this.$cache.input.prop("value", this.result.from + this.options.input_values_separator + this.result.to), this.$cache.input.data("from", this.result.from), this.$cache.input.data("to", this.result.to))
        }, callOnStart: function () {
            this.writeToInput(), this.options.onStart && "function" == typeof this.options.onStart && (this.options.scope ? this.options.onStart.call(this.options.scope, this.result) : this.options.onStart(this.result))
        }, callOnChange: function () {
            this.writeToInput(), this.options.onChange && "function" == typeof this.options.onChange && (this.options.scope ? this.options.onChange.call(this.options.scope, this.result) : this.options.onChange(this.result))
        }, callOnFinish: function () {
            this.writeToInput(), this.options.onFinish && "function" == typeof this.options.onFinish && (this.options.scope ? this.options.onFinish.call(this.options.scope, this.result) : this.options.onFinish(this.result))
        }, callOnUpdate: function () {
            this.writeToInput(), this.options.onUpdate && "function" == typeof this.options.onUpdate && (this.options.scope ? this.options.onUpdate.call(this.options.scope, this.result) : this.options.onUpdate(this.result))
        }, toggleInput: function () {
            this.$cache.input.toggleClass("irs-hidden-input"), this.has_tab_index ? this.$cache.input.prop("tabindex", -1) : this.$cache.input.removeProp("tabindex"), this.has_tab_index = !this.has_tab_index
        }, convertToPercent: function (e, t) {
            var i, n, r = this.options.max - this.options.min, s = r / 100;
            return r ? (i = t ? e : e - this.options.min, n = i / s, this.toFixed(n)) : (this.no_diapason = !0, 0)
        }, convertToValue: function (e) {
            var t, i, n = this.options.min, r = this.options.max, s = n.toString().split(".")[1],
                a = r.toString().split(".")[1], o = 0, l = 0;
            if (0 === e) return this.options.min;
            if (100 === e) return this.options.max;
            s && (t = s.length, o = t), a && (i = a.length, o = i), t && i && (o = t >= i ? t : i), n < 0 && (l = Math.abs(n), n = +(n + l).toFixed(o), r = +(r + l).toFixed(o));
            var d, c = (r - n) / 100 * e + n, u = this.options.step.toString().split(".")[1];
            return u ? c = +c.toFixed(u.length) : (c /= this.options.step, c *= this.options.step, c = +c.toFixed(0)), l && (c -= l), d = u ? +c.toFixed(u.length) : this.toFixed(c), d < this.options.min ? d = this.options.min : d > this.options.max && (d = this.options.max), d
        }, calcWithStep: function (e) {
            var t = Math.round(e / this.coords.p_step) * this.coords.p_step;
            return t > 100 && (t = 100), 100 === e && (t = 100), this.toFixed(t)
        }, checkMinInterval: function (e, t, i) {
            var n, r, s = this.options;
            return s.min_interval ? (n = this.convertToValue(e), r = this.convertToValue(t), "from" === i ? r - n < s.min_interval && (n = r - s.min_interval) : n - r < s.min_interval && (n = r + s.min_interval), this.convertToPercent(n)) : e
        }, checkMaxInterval: function (e, t, i) {
            var n, r, s = this.options;
            return s.max_interval ? (n = this.convertToValue(e), r = this.convertToValue(t), "from" === i ? r - n > s.max_interval && (n = r - s.max_interval) : n - r > s.max_interval && (n = r + s.max_interval), this.convertToPercent(n)) : e
        }, checkDiapason: function (e, t, i) {
            var n = this.convertToValue(e), r = this.options;
            return "number" != typeof t && (t = r.min), "number" != typeof i && (i = r.max), n < t && (n = t), n > i && (n = i), this.convertToPercent(n)
        }, toFixed: function (e) {
            return +(e = e.toFixed(20))
        }, _prettify: function (e) {
            return this.options.prettify_enabled ? this.options.prettify && "function" == typeof this.options.prettify ? this.options.prettify(e) : this.prettify(e) : e
        }, prettify: function (e) {
            return e.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator)
        }, checkEdges: function (e, t) {
            return this.options.force_edges ? (e < 0 ? e = 0 : e > 100 - t && (e = 100 - t), this.toFixed(e)) : this.toFixed(e)
        }, validate: function () {
            var e, t, i = this.options, n = this.result, r = i.values, s = r.length;
            if ("string" == typeof i.min && (i.min = +i.min), "string" == typeof i.max && (i.max = +i.max), "string" == typeof i.from && (i.from = +i.from), "string" == typeof i.to && (i.to = +i.to), "string" == typeof i.step && (i.step = +i.step), "string" == typeof i.from_min && (i.from_min = +i.from_min), "string" == typeof i.from_max && (i.from_max = +i.from_max), "string" == typeof i.to_min && (i.to_min = +i.to_min), "string" == typeof i.to_max && (i.to_max = +i.to_max), "string" == typeof i.grid_num && (i.grid_num = +i.grid_num), i.max < i.min && (i.max = i.min), s) for (i.p_values = [], i.min = 0, i.max = s - 1, i.step = 1, i.grid_num = i.max, i.grid_snap = !0, t = 0; t < s; t++) e = +r[t], isNaN(e) ? e = r[t] : (r[t] = e, e = this._prettify(e)), i.p_values.push(e);
            ("number" != typeof i.from || isNaN(i.from)) && (i.from = i.min), ("number" != typeof i.to || isNaN(i.to)) && (i.to = i.max), "single" === i.type ? (i.from < i.min && (i.from = i.min), i.from > i.max && (i.from = i.max)) : (i.from < i.min && (i.from = i.min), i.from > i.max && (i.from = i.max), i.to < i.min && (i.to = i.min), i.to > i.max && (i.to = i.max), this.update_check.from && (this.update_check.from !== i.from && i.from > i.to && (i.from = i.to), this.update_check.to !== i.to && i.to < i.from && (i.to = i.from)), i.from > i.to && (i.from = i.to), i.to < i.from && (i.to = i.from)), ("number" != typeof i.step || isNaN(i.step) || !i.step || i.step < 0) && (i.step = 1), "number" == typeof i.from_min && i.from < i.from_min && (i.from = i.from_min), "number" == typeof i.from_max && i.from > i.from_max && (i.from = i.from_max), "number" == typeof i.to_min && i.to < i.to_min && (i.to = i.to_min), "number" == typeof i.to_max && i.from > i.to_max && (i.to = i.to_max), n && (n.min !== i.min && (n.min = i.min), n.max !== i.max && (n.max = i.max), (n.from < n.min || n.from > n.max) && (n.from = i.from), (n.to < n.min || n.to > n.max) && (n.to = i.to)), ("number" != typeof i.min_interval || isNaN(i.min_interval) || !i.min_interval || i.min_interval < 0) && (i.min_interval = 0), ("number" != typeof i.max_interval || isNaN(i.max_interval) || !i.max_interval || i.max_interval < 0) && (i.max_interval = 0), i.min_interval && i.min_interval > i.max - i.min && (i.min_interval = i.max - i.min), i.max_interval && i.max_interval > i.max - i.min && (i.max_interval = i.max - i.min)
        }, decorate: function (e, t) {
            var i = "", n = this.options;
            return n.prefix && (i += n.prefix), i += e, n.max_postfix && (n.values.length && e === n.p_values[n.max] ? (i += n.max_postfix, n.postfix && (i += " ")) : t === n.max && (i += n.max_postfix, n.postfix && (i += " "))), n.postfix && (i += n.postfix), i
        }, updateFrom: function () {
            this.result.from = this.options.from, this.result.from_percent = this.convertToPercent(this.result.from), this.result.from_pretty = this._prettify(this.result.from), this.options.values && (this.result.from_value = this.options.values[this.result.from])
        }, updateTo: function () {
            this.result.to = this.options.to, this.result.to_percent = this.convertToPercent(this.result.to), this.result.to_pretty = this._prettify(this.result.to), this.options.values && (this.result.to_value = this.options.values[this.result.to])
        }, updateResult: function () {
            this.result.min = this.options.min, this.result.max = this.options.max, this.updateFrom(), this.updateTo()
        }, appendGrid: function () {
            if (this.options.grid) {
                var e, t, i, n, r, s = this.options, a = s.max - s.min, o = s.grid_num, l = 0, d = 0, c = 4, u = 0,
                    h = "";
                for (this.calcGridMargin(), s.grid_snap ? a > 50 ? (o = 50 / s.step, l = this.toFixed(s.step / .5)) : (o = a / s.step, l = this.toFixed(s.step / (a / 100))) : l = this.toFixed(100 / o), o > 4 && (c = 3), o > 7 && (c = 2), o > 14 && (c = 1), o > 28 && (c = 0), e = 0; e < o + 1; e++) {
                    for (i = c, d = this.toFixed(l * e), d > 100 && (d = 100), this.coords.big[e] = d, n = (d - l * (e - 1)) / (i + 1), t = 1; t <= i && 0 !== d; t++) u = this.toFixed(d - n * t), h += '<span class="irs-grid-pol small" style="left: ' + u + '%"></span>';
                    h += '<span class="irs-grid-pol" style="left: ' + d + '%"></span>', r = this.convertToValue(d), r = s.values.length ? s.p_values[r] : this._prettify(r), h += '<span class="irs-grid-text js-grid-text-' + e + '" style="left: ' + d + '%">' + r + "</span>"
                }
                this.coords.big_num = Math.ceil(o + 1), this.$cache.cont.addClass("irs-with-grid"), this.$cache.grid.html(h), this.cacheGridLabels()
            }
        }, cacheGridLabels: function () {
            var e, t, i = this.coords.big_num;
            for (t = 0; t < i; t++) e = this.$cache.grid.find(".js-grid-text-" + t), this.$cache.grid_labels.push(e);
            this.calcGridLabels()
        }, calcGridLabels: function () {
            var e, t, i = [], n = [], r = this.coords.big_num;
            for (e = 0; e < r; e++) this.coords.big_w[e] = this.$cache.grid_labels[e].outerWidth(!1), this.coords.big_p[e] = this.toFixed(this.coords.big_w[e] / this.coords.w_rs * 100), this.coords.big_x[e] = this.toFixed(this.coords.big_p[e] / 2), i[e] = this.toFixed(this.coords.big[e] - this.coords.big_x[e]), n[e] = this.toFixed(i[e] + this.coords.big_p[e]);
            for (this.options.force_edges && (i[0] < -this.coords.grid_gap && (i[0] = -this.coords.grid_gap, n[0] = this.toFixed(i[0] + this.coords.big_p[0]), this.coords.big_x[0] = this.coords.grid_gap), n[r - 1] > 100 + this.coords.grid_gap && (n[r - 1] = 100 + this.coords.grid_gap, i[r - 1] = this.toFixed(n[r - 1] - this.coords.big_p[r - 1]), this.coords.big_x[r - 1] = this.toFixed(this.coords.big_p[r - 1] - this.coords.grid_gap))), this.calcGridCollision(2, i, n), this.calcGridCollision(4, i, n), e = 0; e < r; e++) t = this.$cache.grid_labels[e][0], this.coords.big_x[e] !== Number.POSITIVE_INFINITY && (t.style.marginLeft = -this.coords.big_x[e] + "%")
        }, calcGridCollision: function (e, t, i) {
            var n, r, s, a = this.coords.big_num;
            for (n = 0; n < a && !((r = n + e / 2) >= a); n += e) s = this.$cache.grid_labels[r][0], i[n] <= t[r] ? s.style.visibility = "visible" : s.style.visibility = "hidden"
        }, calcGridMargin: function () {
            this.options.grid_margin && (this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && ("single" === this.options.type ? this.coords.w_handle = this.$cache.s_single.outerWidth(!1) : this.coords.w_handle = this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100), this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - .1), this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%", this.$cache.grid[0].style.left = this.coords.grid_gap + "%"))
        }, update: function (t) {
            this.input && (this.is_update = !0, this.options.from = this.result.from, this.options.to = this.result.to, this.update_check.from = this.result.from, this.update_check.to = this.result.to, this.options = e.extend(this.options, t), this.validate(), this.updateResult(t), this.toggleInput(), this.remove(), this.init(!0))
        }, reset: function () {
            this.input && (this.updateResult(), this.update())
        }, destroy: function () {
            this.input && (this.toggleInput(), this.$cache.input.prop("readonly", !1), e.data(this.input, "ionRangeSlider", null), this.remove(), this.input = null, this.options = null)
        }
    }, e.fn.ionRangeSlider = function (t) {
        return this.each(function () {
            e.data(this, "ionRangeSlider") || e.data(this, "ionRangeSlider", new o(this, t, s++))
        })
    }, function () {
        for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !i.requestAnimationFrame; ++n) i.requestAnimationFrame = i[t[n] + "RequestAnimationFrame"], i.cancelAnimationFrame = i[t[n] + "CancelAnimationFrame"] || i[t[n] + "CancelRequestAnimationFrame"];
        i.requestAnimationFrame || (i.requestAnimationFrame = function (t, n) {
            var r = (new Date).getTime(), s = Math.max(0, 16 - (r - e)), a = i.setTimeout(function () {
                t(r + s)
            }, s);
            return e = r + s, a
        }), i.cancelAnimationFrame || (i.cancelAnimationFrame = function (e) {
            clearTimeout(e)
        })
    }()
}), $(document).ready(function () {
    var e = $(".main__sections-nav .main__sections-nav__level-0 .nav-link");
    $(".main__sections-nav .main__sections-nav__level-1");
    e.each(function () {
        $elementClick.on("click", function () {
            var e = ($(this).attr("href"), $(elementClick).offset().top);
            return $.browser.safari ? $("body").animate({scrollTop: e}, 1100) : $("html").animate({scrollTop: e}, 1100), !1
        })
    })
}), $(document).ready(function () {
    var e = ($(".wr-flying-nav_links_icon"), $(".wr-icon")), t = $("#icon-search"), i = $("#icon-call"),
        n = $("#icon-basket"), r = $("#icon-selected"), s = $("#search"), a = $("#call"), o = $("#basket"),
        l = $("#selected");
    t.on("click", function () {
        return s.hasClass("icon-active") ? s.removeClass("icon-active") : (e.removeClass("icon-active"), s.toggleClass("icon-active")), !1
    }), i.on("click", function () {
        return a.hasClass("icon-active") ? a.removeClass("icon-active") : (e.removeClass("icon-active"), a.toggleClass("icon-active")), !1
    }), n.on("click", function () {
        return o.hasClass("icon-active") ? o.removeClass("icon-active") : (e.removeClass("icon-active"), o.toggleClass("icon-active")), !1
    }), r.on("click", function () {
        return l.hasClass("icon-active") ? l.removeClass("icon-active") : (e.removeClass("icon-active"), l.toggleClass("icon-active")), !1
    });
    var d = $(".basket img"), c = $(".wr-contacts-form img");
    d.on("click", function () {
        $(this).parent().parent().removeClass("icon-active")
    }), c.on("click", function () {
        $(this).parent().parent().removeClass("icon-active")
    }), $(".basket__product img").on("click", function () {
        $(this).parent().fadeOut(500)
    });
    var u = $(".basket-calc__plus"), h = $(".basket-calc__minus");
    u.on("click", function () {
        var e = parseInt($(this).prev().text());
        return $numberPlus = e + 1, $(this).prev().text($numberPlus), !1
    }), h.on("click", function () {
        var e = parseInt($(this).next().text());
        return e <= 1 ? $(this).closest(".basket__product").fadeOut(500) : ($numberMinus = e - 1, $(this).next().text($numberMinus)), !1
    }), $(".basket__title").on("click", function () {
        return $(this).hasClass("direction-arrow") ? ($(this).toggleClass("direction-arrow"), $(this).siblings().toggleClass("hide-products")) : ($(this).addClass("title-margin"), $(this).toggleClass("direction-arrow"), $(this).siblings().toggleClass("hide-products")), !1
    })
}), $(document).ready(function () {
    var e = new Swiper(".single-item_imgs_main", {spaceBetween: 20, slidesPerView: "1", loop: "true"}),
        t = new Swiper(".single-item_imgs_thumbs", {
            direction: "vertical",
            spaceBetween: 20,
            loop: "true",
            centeredSlides: !0,
            slidesPerView: "3",
            touchRatio: .2,
            slideToClickedSlide: !0
        });
    e.controller && t.controller && (e.controller.control = t, t.controller.control = e, e.on("click", function (t) {
        console.log("galleryTop click", t, e.clickedSlide)
    }))
}), function () {
    var e = $(".locationPicker"), t = $(".locationPicker__list"), n = $(".locationPicker__list__item"),
        r = $(".locationPicker__label__city"), s = $(".locationPicker__label__address"), a = function () {
            t = $(".locationPicker__list"), n = $(".locationPicker__list__item"), r = $(".locationPicker__label__city"), s = $(".locationPicker__label__address"), r.off("click").on("click", function () {
                e.hasClass("show") ? e.removeClass("show") : e.addClass("show")
            }), n.off("click").on("click", function () {
                var t = $(this), i = t.data("citykey"), n = t.data("address");
                t.data("phones");
                $(".locationPicker__list__item.active").removeClass("active"), t.addClass("active"), r.text(locations[i].name), s.text(n), void 0 !== locations[i] && o(locations[i].phones), e.hasClass("show") && e.removeClass("show")
            })
        }, o = function (e) {
            var t = $(".phoneList");
            if (e.length > 0) for (t.html(""), i = 0; i < e.length; i++) {
                var n = $("<a/>").addClass("phoneList__item__phone").attr("href", "tel:" + e[i].p).text(e[i].p),
                    r = $("<span/>").addClass("phoneList__item__label").text(e[i].l),
                    s = $("<li/>").addClass("phoneList__item").append(n).append(r);
                t.append(s)
            }
        };
    !function () {
        locations && (t.html(""), Object.keys(locations).map(function (e) {
            var i = locations[e], n = $("<li/>").addClass("locationPicker__list__item");
            t.append(n), n.attr("data-city", i.name), n.attr("data-address", i.addr), n.attr("data-citykey", e), n.text(i.name)
        }), t.find("li:first-of-type").addClass("active"), a(), t.find("li.active").trigger("click"))
    }()
}(), function () {
    $(document).ready(function () {
        var e = $("body"), t = $(".pushNav"), i = $(".toggle-nav"), n = $(".pushNav__header__close"),
            r = $("#showPushNav"), s = t.find(".pushNav__content__nav"), a = s.find(".pushNav__content__nav__item"),
            o = function () {
                setTimeout(function () {
                    i.hasClass("show") || t.hasClass("show") ? e.addClass("g-menu-opened") : e.removeClass("g-menu-opened")
                }, 300)
            };
        a.find("ul").parent().addClass("parent"), n.off("click").on("click", function (e) {
            return t.removeClass("show"), o(), !1
        }), i.on("click", function (e) {
            if (i.get(0).id === e.target.id) return i.toggleClass("show"), o(), !1
        }), r.off("click").on("click", function (e) {
            $(window).width();
            return window.innerWidth <= 576 || window.innerHeight < window.innerWidth && window.innerHeight <= 576 ? t.toggleClass("show") : i.toggleClass("show"), o(), !1
        }), a.off("click").on("click", function (e) {
            var t = "A" === e.target.tagName;
            return t || $(this).toggleClass("active"), t
        })
    })
}(), $(document).ready(function () {
    $("#priceRange").ionRangeSlider({type: "double", min: 0, max: 125e3, from: 0, to: 125e3})
}), $(window).load(function () {
});