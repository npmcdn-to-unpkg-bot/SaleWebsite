define(["googleMapsApi", "dispatcher"], function(e, t) {
    function f(t, n, r) {
        r = !1;
        var i = r || {
            zoom: 7,
            enableWheelZoom: !1,
            enableDragPan: !0,
            enableDblClickZoom: !0,
            mapMode: 0,
            activateTrafficMap: !1,
            activateBicycleMap: !1,
            minMaxLevel: [1, 14]
        };
        i.point = n || new nhn.api.map.LatLng(37.5778164, 126.9710339);
        var s = new nhn.api.map.Map(t, i);
        return s.forceRedraw = function() {
            return this
        }, s.addMarker = function(e, t) {
            return this.markers = this.markers || [], this.markers.push(e), this
        }, s.clearMap = function() {
            if (this.markers) {
                for (var e = this.markers.length - 1; e >= 0; e--) this.markers[e].setMap(null);
                delete this.bounds, delete this.markers
            }
            return this
        }, s.zoomAll = function() {
            return this.bounds && this.fitBounds(this.bounds), this
        }, s.setActiveMarker = function(e) {
            return e.setActive(), this.panTo(e.position), this
        }, s.clearActiveMarker = function() {
            if (this.markers)
                for (var e = this.markers.length - 1; e >= 0; e--) this.markers[e].clearActive();
            return this
        }, s.resetCenter = function() {
            var t = this.getCenter();
            return e.event.trigger(this, "resize"), this.setCenter(t), this
        }, s
    }

    function l(t) {
        var n = t.split(" ").join("").split(",");
        return new e.LatLng(n[0], n[1])
    }

    function c(e, t, n, r, i, s, a, f, l) {
        var c = h(e),
            d = {
                module: e,
                paramName: t,
                paramValue: n,
                geolocateCallback: r,
                successCallback: i,
                failureCallback: s,
                map: a,
                settings: f,
                onclickFunction: l
            };
        c > -1 ? o.splice(c, 1, d) : o.push(d), u || p()
    }

    function h(e) {
        for (var t = o.length - 1; t > -1; t--)
            if (o[t].module == e) return t;
        return -1
    }

    function p() {
        var e = o.shift();
        u = !0, v(e.paramName, e.paramValue, e.geolocateCallback, e.successCallback, e.failureCallback, e.map, e.settings, e.onclickFunction), a = setTimeout(d, s)
    }

    function d() {
        u = !1, o.length && p()
    }

    function v(t, n, r, i, s, o, u, a) {
        var f = new e.Geocoder,
            l = {};
        l[t] = n, f.geocode(l, function(e, t) {
            m(e, t, r, i, s, o, u, a)
        })
    }

    function m(n, r, i, s, o, u, a, f) {
        r == e.GeocoderStatus.OK && n.length ? i(n[0], s, u, a, f) : t.fireCallbacks([o], r)
    }

    function g(e, n) {
        t.fireCallbacks([n], y(e))
    }

    function y(e) {
        return E(w(b(), e))
    }

    function b() {
        return {
            streetNumber: "street_number.long_name",
            street: "route.long_name",
            city: "sublocality.long_name",
            state: "administrative_area_level_1.long_name",
            stateAbbr: "administrative_area_level_1.short_name",
            country: "country.long_name",
            postalCode: "postal_code.long_name",
            google: {}
        }
    }

    function w(e, t) {
        var n = t.address_components;
        for (var r = n.length - 1; r >= 0; r--) {
            var i = n[r],
                s = i.types[0];
            e.google[s] = {}, e.google[s].long_name = i.long_name, e.google[s].short_name = i.short_name
        }
        return e
    }

    function E(e) {
        for (var t in e) {
            var n = e[t];
            if (typeof n == "string") {
                var r = n.split("."),
                    i = r[0],
                    s = r[1];
                e.google[i] && e.google[i][s] && (e[t] = e.google[i][s])
            }
        }
        return e
    }

    function S(e, t, n, r, i, s, o, u) {
        c(e, "address", t, n, r, i, s, o, u)
    }

    function x(e, t, i, s, o, u) {
        var a = new nhn.api.map.SpriteIcon(s.markerURL, {
                width: 30,
                height: 45
            }, {
                width: 30,
                height: 45
            }, 0),
            f = new nhn.api.map.SpriteMarker(a, {
                point: e,
                zIndex: 5,
                title: s.id
            });
        return $(f._elEl).append("<span>" + s.id + "</span>"), i.addOverlay(f), f.setActive = function() {
            return f.map.clearActiveMarker(), this.removeClass(n).addClass(n + r), this
        }, f.clearActive = function() {
            return this.removeClass(r), this
        }, f.addClass = function(e) {
            return this
        }, f.removeClass = function(e) {
            return this
        }, T(f, t, o, u), f
    }

    function T(e, n, r, s) {
        t.fireCallbacks([n], e), L(e, "mouseover", function() {
            s(e), e.addClass(i)
        }), L(e, "mouseout", function() {
            e.removeClass(i)
        }), $.isFunction(r) && L(e, "click", function() {
            r(e)
        })
    }

    function N(e, t, n, r, i) {
        x(e.geometry.location, t, n, r, i)
    }

    function C(t, n) {
        var r = [];
        $.each(t, function() {
            var t = new e.LatLng($(this).data("latitude"), $(this).data("longitude"));
            r.push(t)
        }), n.setBound(r, {
            useEffect: !0,
            centerMark: !0
        }, 20), $("#store-locator-map").attr("data-zoom", "true")
    }

    function k(e, t, n, r, i, s) {
        var o = $(".location-" + t + " .name").html();
        this.addMarkerFromLatLng(o, e, function(e) {
            i(e, t, n, o)
        }, s, n, {
            id: t,
            markerURL: r
        }, function() {}, function() {})
    }

    function L(e, t, n) {
        $(e._elEl).on(t, n)
    }

    function A(e, t) {
        $("div.nmap").css(t)
    }

    function O(e, t) {
        e.setCenter(t)
    }

    function M(e, t) {
        e.setLevel(t, {
            useEffect: !0,
            centerMark: !0
        })
    }

    function _(e) {
        return e.getLevel()
    }

    function D(e) {
        return e.getBound()
    }

    function P(e) {}

    function H(e, t) {}

    function B(e, t, n) {
        var r = {
            width: 30,
            height: 45
        };
        t == "over" && (r = {
            width: 33,
            height: 48
        }), $(e._elEl).css(r).find("img").attr("src", n).css(r), e.redraw()
    }
    var n = " _clicked",
        r = " _active",
        i = " _hover",
        s = 500,
        o = [],
        u = !1,
        a = null;
    return {
        zoomToFitMarkers: C,
        createMarker: k,
        addListener: L,
        redraw: A,
        setCenter: O,
        setZoom: M,
        getZoom: _,
        getBounds: D,
        setControls: P,
        removeMarker: H,
        updateMarker: B,
        buildMap: f,
        getLatLng: l,
        getLocationFromLatLng: function(e, t, n, r) {
            c(e, "latLng", l(t), g, n, r)
        },
        getLocationFromAddress: function(e, t, n, r) {
            S(e, t, g, n, r)
        },
        addMarkerFromLatLng: function(e, t, n, r, i, s, o, u) {
            return x(l(t), n, i, s, o, u)
        },
        addMarkerFromAddress: function(e, t, n, r, i, s, o) {
            S(e, t, N, n, r, i, s, o)
        }
    }
});
