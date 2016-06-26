window.Modernizr = function(e, t, n) {
        function r(e) {
            m.cssText = e
        }

        function i(e, t) {
            return r(w.join(e + ";") + (t || ""))
        }

        function s(e, t) {
            return typeof e === t
        }

        function o(e, t) {
            return !!~("" + e).indexOf(t)
        }

        function u(e, t) {
            for (var r in e) {
                var i = e[r];
                if (!o(i, "-") && m[i] !== n) return t == "pfx" ? i : !0
            }
            return !1
        }

        function a(e, t, r) {
            for (var i in e) {
                var o = t[e[i]];
                if (o !== n) return r === !1 ? e[i] : s(o, "function") ? o.bind(r || t) : o
            }
            return !1
        }

        function f(e, t, n) {
            var r = e.charAt(0).toUpperCase() + e.slice(1),
                i = (e + " " + S.join(r + " ") + r).split(" ");
            return s(t, "string") || s(t, "undefined") ? u(i, t) : (i = (e + " " + x.join(r + " ") + r).split(" "), a(i, t, n))
        }
        var l = "2.8.0",
            c = {},
            h = !0,
            p = t.documentElement,
            d = "modernizr",
            v = t.createElement(d),
            m = v.style,
            g, y = ":)",
            b = {}.toString,
            w = " -webkit- -moz- -o- -ms- ".split(" "),
            E = "Webkit Moz O ms",
            S = E.split(" "),
            x = E.toLowerCase().split(" "),
            T = {
                svg: "http://www.w3.org/2000/svg"
            },
            N = {},
            C = {},
            k = {},
            L = [],
            A = L.slice,
            O, M = function(e, n, r, i) {
                var s, o, u, a, f = t.createElement("div"),
                    l = t.body,
                    c = l || t.createElement("body");
                if (parseInt(r, 10))
                    while (r--) u = t.createElement("div"), u.id = i ? i[r] : d + (r + 1), f.appendChild(u);
                return s = ["&#173;", '<style id="s', d, '">', e, "</style>"].join(""), f.id = d, (l ? f : c).innerHTML += s, c.appendChild(f), l || (c.style.background = "", c.style.overflow = "hidden", a = p.style.overflow, p.style.overflow = "hidden", p.appendChild(c)), o = n(f, e), l ? f.parentNode.removeChild(f) : (c.parentNode.removeChild(c), p.style.overflow = a), !!o
            },
            _ = function() {
                function e(e, i) {
                    i = i || t.createElement(r[e] || "div"), e = "on" + e;
                    var o = e in i;
                    return o || (i.setAttribute || (i = t.createElement("div")), i.setAttribute && i.removeAttribute && (i.setAttribute(e, ""), o = s(i[e], "function"), s(i[e], "undefined") || (i[e] = n), i.removeAttribute(e))), i = null, o
                }
                var r = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return e
            }(),
            D = {}.hasOwnProperty,
            P;
        !s(D, "undefined") && !s(D.call, "undefined") ? P = function(e, t) {
            return D.call(e, t)
        } : P = function(e, t) {
            return t in e && s(e.constructor.prototype[t], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function(e) {
            var t = this;
            if (typeof t != "function") throw new TypeError;
            var n = A.call(arguments, 1),
                r = function() {
                    if (this instanceof r) {
                        var i = function() {};
                        i.prototype = t.prototype;
                        var s = new i,
                            o = t.apply(s, n.concat(A.call(arguments)));
                        return Object(o) === o ? o : s
                    }
                    return t.apply(e, n.concat(A.call(arguments)))
                };
            return r
        }), N.flexbox = function() {
            return f("flexWrap")
        }, N.flexboxlegacy = function() {
            return f("boxDirection")
        }, N.canvas = function() {
            var e = t.createElement("canvas");
            return !!e.getContext && !!e.getContext("2d")
        }, N.canvastext = function() {
            return !!c.canvas && !!s(t.createElement("canvas").getContext("2d").fillText, "function")
        }, N.touch = function() {
            var n;
            return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : M(["@media (", w.join("touch-enabled),("), d, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
                n = e.offsetTop === 9
            }), n
        }, N.geolocation = function() {
            return "geolocation" in navigator
        }, N.hashchange = function() {
            return _("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
        }, N.history = function() {
            return !!e.history && !!history.pushState
        }, N.draganddrop = function() {
            var e = t.createElement("div");
            return "draggable" in e || "ondragstart" in e && "ondrop" in e
        }, N.rgba = function() {
            return r("background-color:rgba(150,255,150,.5)"), o(m.backgroundColor, "rgba")
        }, N.hsla = function() {
            return r("background-color:hsla(120,40%,100%,.5)"), o(m.backgroundColor, "rgba") || o(m.backgroundColor, "hsla")
        }, N.multiplebgs = function() {
            return r("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(m.background)
        }, N.backgroundsize = function() {
            return f("backgroundSize")
        }, N.borderimage = function() {
            return f("borderImage")
        }, N.borderradius = function() {
            return f("borderRadius")
        }, N.boxshadow = function() {
            return f("boxShadow")
        }, N.textshadow = function() {
            return t.createElement("div").style.textShadow === ""
        }, N.opacity = function() {
            return i("opacity:.55"), /^0.55$/.test(m.opacity)
        }, N.cssanimations = function() {
            return f("animationName")
        }, N.csscolumns = function() {
            return f("columnCount")
        }, N.cssgradients = function() {
            var e = "background-image:",
                t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                n = "linear-gradient(left top,#9f9, white);";
            return r((e + "-webkit- ".split(" ").join(t + e) + w.join(n + e)).slice(0, -e.length)), o(m.backgroundImage, "gradient")
        }, N.cssreflections = function() {
            return f("boxReflect")
        }, N.csstransforms = function() {
            return !!f("transform")
        }, N.csstransforms3d = function() {
            var e = !!f("perspective");
            return e && "webkitPerspective" in p.style && M("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t, n) {
                e = t.offsetLeft === 9 && t.offsetHeight === 3
            }), e
        }, N.csstransitions = function() {
            return f("transition")
        }, N.fontface = function() {
            var e;
            return M('@font-face {font-family:"font";src:url("https://")}', function(n, r) {
                var i = t.getElementById("smodernizr"),
                    s = i.sheet || i.styleSheet,
                    o = s ? s.cssRules && s.cssRules[0] ? s.cssRules[0].cssText : s.cssText || "" : "";
                e = /src/i.test(o) && o.indexOf(r.split(" ")[0]) === 0
            }), e
        }, N.generatedcontent = function() {
            var e;
            return M(["#", d, "{font:0/0 a}#", d, ':after{content:"', y, '";visibility:hidden;font:3px/1 a}'].join(""), function(t) {
                e = t.offsetHeight >= 3
            }), e
        }, N.video = function() {
            var e = t.createElement("video"),
                n = !1;
            try {
                if (n = !!e.canPlayType) n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
            } catch (r) {}
            return n
        }, N.audio = function() {
            var e = t.createElement("audio"),
                n = !1;
            try {
                if (n = !!e.canPlayType) n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, "")
            } catch (r) {}
            return n
        }, N.applicationcache = function() {
            return !!e.applicationCache
        }, N.svg = function() {
            return !!t.createElementNS && !!t.createElementNS(T.svg, "svg").createSVGRect
        }, N.inlinesvg = function() {
            var e = t.createElement("div");
            return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == T.svg
        }, N.svgclippaths = function() {
            return !!t.createElementNS && /SVGClipPath/.test(b.call(t.createElementNS(T.svg, "clipPath")))
        };
        for (var H in N) P(N, H) && (O = H.toLowerCase(), c[O] = N[H](), L.push((c[O] ? "" : "no-") + O));
        return c.addTest = function(e, t) {
                if (typeof e == "object")
                    for (var r in e) P(e, r) && c.addTest(r, e[r]);
                else {
                    e = e.toLowerCase();
                    if (c[e] !== n) return c;
                    t = typeof t == "function" ? t() : t, typeof h != "undefined" && h && (p.className += " " + (t ? "" : "no-") + e), c[e] = t
                }
                return c
            }, r(""), v = g = null,
            function(e, t) {
                function n(e, t) {
                    var n = e.createElement("p"),
                        r = e.getElementsByTagName("head")[0] || e.documentElement;
                    return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
                }

                function r() {
                    var e = y.elements;
                    return typeof e == "string" ? e.split(" ") : e
                }

                function i(e) {
                    var t = m[e[d]];
                    return t || (t = {}, v++, e[d] = v, m[v] = t), t
                }

                function s(e, n, r) {
                    n || (n = t);
                    if (g) return n.createElement(e);
                    r || (r = i(n));
                    var s;
                    return r.cache[e] ? s = r.cache[e].cloneNode() : h.test(e) ? s = (r.cache[e] = r.createElem(e)).cloneNode() : s = r.createElem(e), s.canHaveChildren && !c.test(e) && !s.tagUrn ? r.frag.appendChild(s) : s
                }

                function o(e, n) {
                    e || (e = t);
                    if (g) return e.createDocumentFragment();
                    n = n || i(e);
                    var s = n.frag.cloneNode(),
                        o = 0,
                        u = r(),
                        a = u.length;
                    for (; o < a; o++) s.createElement(u[o]);
                    return s
                }

                function u(e, t) {
                    t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                        return y.shivMethods ? s(n, e, t) : t.createElem(n)
                    }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-]+/g, function(e) {
                        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                    }) + ");return n}")(y, t.frag)
                }

                function a(e) {
                    e || (e = t);
                    var r = i(e);
                    return y.shivCSS && !p && !r.hasCSS && (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), g || u(e, r), e
                }
                var f = "3.7.0",
                    l = e.html5 || {},
                    c = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    p, d = "_html5shiv",
                    v = 0,
                    m = {},
                    g;
                (function() {
                    try {
                        var e = t.createElement("a");
                        e.innerHTML = "<xyz></xyz>", p = "hidden" in e, g = e.childNodes.length == 1 || function() {
                            t.createElement("a");
                            var e = t.createDocumentFragment();
                            return typeof e.cloneNode == "undefined" || typeof e.createDocumentFragment == "undefined" || typeof e.createElement == "undefined"
                        }()
                    } catch (n) {
                        p = !0, g = !0
                    }
                })();
                var y = {
                    elements: l.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: f,
                    shivCSS: l.shivCSS !== !1,
                    supportsUnknownElements: g,
                    shivMethods: l.shivMethods !== !1,
                    type: "default",
                    shivDocument: a,
                    createElement: s,
                    createDocumentFragment: o
                };
                e.html5 = y, a(t)
            }(this, t), c._version = l, c._prefixes = w, c._domPrefixes = x, c._cssomPrefixes = S, c.hasEvent = _, c.testProp = function(e) {
                return u([e])
            }, c.testAllProps = f, c.testStyles = M, p.className = p.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (h ? " js " + L.join(" ") : ""), c
    } (this, this.document),
    function(e, t, n) {
        function r(e) {
            return "[object Function]" == d.call(e)
        }

        function i(e) {
            return "string" == typeof e
        }

        function s() {}

        function o(e) {
            return !e || "loaded" == e || "complete" == e || "uninitialized" == e
        }

        function u() {
            var e = v.shift();
            m = 1, e ? e.t ? h(function() {
                ("c" == e.t ? k.injectCss : k.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
            }, 0) : (e(), u()) : m = 0
        }

        function a(e, n, r, i, s, a, f) {
            function l(t) {
                if (!d && o(c.readyState) && (w.r = d = 1, !m && u(), c.onload = c.onreadystatechange = null, t)) {
                    "img" != e && h(function() {
                        b.removeChild(c)
                    }, 50);
                    for (var r in T[n]) T[n].hasOwnProperty(r) && T[n][r].onload()
                }
            }
            var f = f || k.errorTimeout,
                c = t.createElement(e),
                d = 0,
                g = 0,
                w = {
                    t: r,
                    s: n,
                    e: s,
                    a: a,
                    x: f
                };
            1 === T[n] && (g = 1, T[n] = []), "object" == e ? c.data = n : (c.src = n, c.type = e), c.width = c.height = "0", c.onerror = c.onload = c.onreadystatechange = function() {
                l.call(this, g)
            }, v.splice(i, 0, w), "img" != e && (g || 2 === T[n] ? (b.insertBefore(c, y ? null : p), h(l, f)) : T[n].push(c))
        }

        function f(e, t, n, r, s) {
            return m = 0, t = t || "j", i(e) ? a("c" == t ? E : w, e, t, this.i++, n, r, s) : (v.splice(this.i++, 0, e), 1 == v.length && u()), this
        }

        function l() {
            var e = k;
            return e.loader = {
                load: f,
                i: 0
            }, e
        }
        var c = t.documentElement,
            h = e.setTimeout,
            p = t.getElementsByTagName("script")[0],
            d = {}.toString,
            v = [],
            m = 0,
            g = "MozAppearance" in c.style,
            y = g && !!t.createRange().compareNode,
            b = y ? c : p.parentNode,
            c = e.opera && "[object Opera]" == d.call(e.opera),
            c = !!t.attachEvent && !c,
            w = g ? "object" : c ? "script" : "img",
            E = c ? "script" : w,
            S = Array.isArray || function(e) {
                return "[object Array]" == d.call(e)
            },
            x = [],
            T = {},
            N = {
                timeout: function(e, t) {
                    return t.length && (e.timeout = t[0]), e
                }
            },
            C, k;
        k = function(e) {
            function t(e) {
                var e = e.split("!"),
                    t = x.length,
                    n = e.pop(),
                    r = e.length,
                    n = {
                        url: n,
                        origUrl: n,
                        prefixes: e
                    },
                    i, s, o;
                for (s = 0; s < r; s++) o = e[s].split("="), (i = N[o.shift()]) && (n = i(n, o));
                for (s = 0; s < t; s++) n = x[s](n);
                return n
            }

            function o(e, i, s, o, u) {
                var a = t(e),
                    f = a.autoCallback;
                a.url.split(".").pop().split("?").shift(), a.bypass || (i && (i = r(i) ? i : i[e] || i[o] || i[e.split("/").pop().split("?")[0]]), a.instead ? a.instead(e, i, s, o, u) : (T[a.url] ? a.noexec = !0 : T[a.url] = 1, s.load(a.url, a.forceCSS || !a.forceJS && "css" == a.url.split(".").pop().split("?").shift() ? "c" : n, a.noexec, a.attrs, a.timeout), (r(i) || r(f)) && s.load(function() {
                    l(), i && i(a.origUrl, u, o), f && f(a.origUrl, u, o), T[a.url] = 2
                })))
            }

            function u(e, t) {
                function n(e, n) {
                    if (e) {
                        if (i(e)) n || (f = function() {
                            var e = [].slice.call(arguments);
                            l.apply(this, e), c()
                        }), o(e, f, t, 0, u);
                        else if (Object(e) === e)
                            for (p in h = function() {
                                    var t = 0,
                                        n;
                                    for (n in e) e.hasOwnProperty(n) && t++;
                                    return t
                                }(), e) e.hasOwnProperty(p) && (!n && !--h && (r(f) ? f = function() {
                                var e = [].slice.call(arguments);
                                l.apply(this, e), c()
                            } : f[p] = function(e) {
                                return function() {
                                    var t = [].slice.call(arguments);
                                    e && e.apply(this, t), c()
                                }
                            }(l[p])), o(e[p], f, t, p, u))
                    } else !n && c()
                }
                var u = !!e.test,
                    a = e.load || e.both,
                    f = e.callback || s,
                    l = f,
                    c = e.complete || s,
                    h, p;
                n(u ? e.yep : e.nope, !!a), a && n(a)
            }
            var a, f, c = this.yepnope.loader;
            if (i(e)) o(e, 0, c, 0);
            else if (S(e))
                for (a = 0; a < e.length; a++) f = e[a], i(f) ? o(f, 0, c, 0) : S(f) ? k(f) : Object(f) === f && u(f, c);
            else Object(e) === e && u(e, c)
        }, k.addPrefix = function(e, t) {
            N[e] = t
        }, k.addFilter = function(e) {
            x.push(e)
        }, k.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", C = function() {
            t.removeEventListener("DOMContentLoaded", C, 0), t.readyState = "complete"
        }, 0)), e.yepnope = l(), e.yepnope.executeStack = u, e.yepnope.injectJs = function(e, n, r, i, a, f) {
            var l = t.createElement("script"),
                c, d, i = i || k.errorTimeout;
            l.src = e;
            for (d in r) l.setAttribute(d, r[d]);
            n = f ? u : n || s, l.onreadystatechange = l.onload = function() {
                !c && o(l.readyState) && (c = 1, n(), l.onload = l.onreadystatechange = null)
            }, h(function() {
                c || (c = 1, n(1))
            }, i), a ? l.onload() : p.parentNode.insertBefore(l, p)
        }, e.yepnope.injectCss = function(e, n, r, i, o, a) {
            var i = t.createElement("link"),
                f, n = a ? u : n || s;
            i.href = e, i.rel = "stylesheet", i.type = "text/css";
            for (f in r) i.setAttribute(f, r[f]);
            o || (p.parentNode.insertBefore(i, p), h(n, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    };
