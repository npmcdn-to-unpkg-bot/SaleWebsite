define(["jquery", "overlay"], function(e, t) {
    function o() {
        s.on("click", u)
    }

    function u(r) {
        var i = e(this).attr("href");
        t.close(n), t.open(i), a(r)
    }

    function a(e) {
        e && e.preventDefault && e.preventDefault()
    }
    var n = "#your-account-overlay",
        r = ".your-account-overlay-create-account-cta",
        i = ".your-account-overlay-sign-in-cta",
        s = e(r + ", " + i, n);
    return {
        load: function() {
            o()
        }
    }
});
