define(["jquery", "dispatcher", "os"], function(e, t, n) {
    function y() {
        function n() {
            var t = e(".gucci-wysiwyg-content");
            e(t).length > 0 && e(t).find("table").each(function() {
                var t = e(this),
                    n = e(t).attr("border");
                n != undefined && n != 0 ? (e(t).css("border-width", n + "px"), e(t).addClass("table-border")) : e(t).addClass("table-no-border");
                var r = e(t).attr("cellpadding");
                r != undefined && r != 0 && e(t).find("td").css("padding", r + "px");
                var i = e(t).attr("cellspacing");
                i != undefined && i != 0 && (e(t).css("border-spacing", i + "px"), e(t).css("border-collapse", "initial"));
                var s = e(t).attr("align");
                s != undefined && e(t).css("margin", "auto")
            })
        }
        b(), document.onreadystatechange = k, e("body").on("click", i, A), (e(".shop-the-look-main-container").length || e(".looks-detail-carousel").length) && e(l).addClass("global-standard-spinner"), e("#numberOfComponents").val() < 2 && e("body").hasClass("page-homepage") && (e(".content").addClass("nopadtopbottom"), e(".wrapper-back-to-top").addClass("hide")), e('.gucci-wysiwyg-content a[href^="/"]') && e('.gucci-wysiwyg-content a[href^="/"]').each(function() {
            var t = e(this).attr("href"),
                n = t.replace(/^\//, hybris.contextPath + "/");
            e(this).attr("href", n)
        });
        if (window.location.hash) {
            function t() {
                var t = e("#header-main").height(),
                    n = window.location.hash.substring(1),
                    r = e("a[name=" + n + "]");
                if (e(r).length > 0) {
                    var i = e("html, body"),
                        s = e(r).offset().top - t * 2;
                    i.stop().animate({
                        scrollTop: s
                    }, 500, "swing")
                }
            }
            e(window).on("hashchange", t())
        }
        n()
    }

    function b() {
        c = !0, p = w(e(document)), x("load"), k()
    }

    function w(e) {
        var t = {},
            n = E(e);
        for (var r = n.length - 1; r > -1; r--) t[n[r]] = !0;
        return t
    }

    function E(t) {
        n.isMobileDevice(), n.isIOSDevice();
        var i = "[" + r + "]",
            s = [],
            o = e("html").hasClass("iOS") && e("html").hasClass("tablet");
        return t.find(i).addBack(i).each(function() {
            var t = !0;
            typeof e(this).data("remove-experience") != "undefined" && o && (e(this).remove(), t = !1), t && (s = s.concat(S(e(this).attr(r))))
        }), s
    }

    function S(e) {
        return e.split(" ").join("").split(",")
    }

    function x(t) {
        function r(t, n) {
            e(document).ready(function() {
                N(t, n)
            })
        }
        n.isMobileDevice() && e("body").addClass("overlay-lock"), v = Object.keys(p).length, v === 0 && T();
        if (p)
            for (var i in p) i !== "zoom" && i !== "view360" ? N(i, t) : r(i, t)
    }

    function T() {
        g = !1, e(l).addClass(a), e("body").removeClass("overlay-lock")
    }

    function N(t, n) {
        var r = t;
        require([t], function(t) {
            C(t, n), e("body").trigger(r + "Loaded");
            var i = 0;
            p.zoom && i++, p.view360 && i++, m++, m == v - i && g && T()
        })
    }

    function C(t, n) {
        t != undefined && e.isFunction(t[n]) && t[n]()
    }

    function k() {
        L() && (h = !0)
    }

    function L() {
        return c && !h && document.readyState === "complete"
    }

    function A(t) {
        var n = e(this);
        P(t), O(n.attr("href"), n.attr(s), n, n.attr(o))
    }

    function O(t, n, r, i) {
        var s = e("." + n),
            o = a + " " + f;
        M(s, u, o), M(r, u, o), e.ajax({
            url: t
        }).done(function(t) {
            _(s, e(t), r, e("." + i))
        }).fail(function() {
            D(s, r)
        })
    }

    function M(e, t, n) {
        e.length && (t && e.addClass(t), n && e.removeClass(n))
    }

    function _(e, n, r, i) {
        e.length && (e.replaceWith(n), i.remove(), M(n, a), H(n), M(r, a, u), t.fireCallbacks(d, n))
    }

    function D(e, t) {
        M(e, f, u), M(t, f, u)
    }

    function P(e) {
        e && e.preventDefault && e.preventDefault()
    }

    function H(e) {
        p = w(e), x("load")
    }
    var r = "data-module",
        i = ".loader-link",
        s = "data-load_container",
        o = "data-load_remove_class",
        u = "_loading",
        a = "_loaded",
        f = "_error",
        l = ".spinner-wrapper",
        c = !1,
        h = !1,
        p = {},
        d = [],
        v = 0,
        m = 0,
        g = !0;
    return y(), {
        registerUtilMethod: function(e) {
            d.push(e)
        },
        loadModules: H,
        updateElementClass: M,
        loadRepsonseInContainer: _,
        showLoadError: D,
        loadUrl: O
    }
});
