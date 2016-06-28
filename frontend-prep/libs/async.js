define([], function() {
    function n(e) {
        var n = e.replace("https:").replace("http:").split(":"),
            r = n[1];
        return r ? r : (t++, "__async_req_" + t + "__")
    }

    function r(t, n) {
        var r = t.split("!"),
            i = r[0],
            s = r[1] || e,
            o = i.indexOf("?") < 0 ? "?" : "&";
        return i + o + s + "=" + n
    }

    function i(e) {
        var t = document.createElement("script"),
            n = document.getElementsByTagName("script")[0];
        if (e.indexOf("http") > -1 && location.protocol.indexOf("https") > -1 && e.indexOf("https") == -1) {
            console.log("removed: " + e);
            return
        }
        t.type = "text/javascript", t.async = !0, t.src = e, n.parentNode.insertBefore(t, n)
    }
    var e = "callback",
        t = 0;
    return {
        load: function(e, t, s, o) {
            if (o.isBuild) s(null);
            else {
                var u = n(e);
                window[u] = s, i(r(e, u))
            }
        }
    }
});
