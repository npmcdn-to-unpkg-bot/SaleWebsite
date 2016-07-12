define(["googleMapsApi", "dispatcher"], function(e, t) {
    function f(t, n, r) {
        var i = r || {
            mapTypeControl: !1,
            overviewMapControl: !1,
            panControl: !1,
            scaleControl: !1,
            streetViewControl: !1,
            maxZoom: 18,
            zoom: 8,
            zoomControl: !0,
            zoomControlOptions: {
                position: e.ControlPosition.RIGHT_TOP,
                style: e.ZoomControlStyle.SMALL
            }
        };
        i.center = n || new e.LatLng(37.09024, -95.712891);
        var s = new e.Map(document.getElementById(t), i);
        return s.forceRedraw = function() {
            return e.event.trigger(this, "resize"), this
        }, s.addMarker = function(t, n) {
            return this.markers = this.markers || [], this.markers.push(t), this.bounds = this.bounds || new e.LatLngBounds, this.bounds.extend(n), this
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

    function x(t, i, s, o, u, a) {
        var f = o || {};
        f.position = t, f.map = s, f.labelInBackground = !1;
        var l = new e.MarkerWithLabel(f);
        return l.setActive = function() {
            return l.map.clearActiveMarker(), this.removeClass(n).addClass(n + r), this
        }, l.clearActive = function() {
            return this.removeClass(r), this
        }, l.addClass = function(e) {
            var t = this.get("labelClass");
            return this.set("labelClass", t + e), this
        }, l.removeClass = function(e) {
            var t = this.get("labelClass").replace(e, "");
            return this.set("labelClass", t), this
        }, s.addMarker(l, t), T(l, i, u, a), l
    }

    function T(n, r, s, o) {
        t.fireCallbacks([r], n), e.event.addListener(n, "mouseover", function() {
            o(n), n.addClass(i)
        }), e.event.addListener(n, "mouseout", function() {
            n.removeClass(i)
        }), $.isFunction(s) && e.event.addListener(n, "click", function() {
            s(n)
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
        });
        var i = new google.maps.LatLngBounds;
        for (var s = 0; s < r.length; s++) i.extend(r[s]);
        $("#store-locator-map").attr("data-zoom", "false"), n.fitBounds(i), google.maps.event.addListenerOnce(n, "idle", function() {
            $("#store-locator-map").attr("data-zoom", "true")
        })
    }

    function k(t, n, r, i, s, o, u) {
        var a = $(".location-" + n + " .name").html(),
            f = {
                labelContent: "" + n,
                labelSize: new e.Size(30, 45),
                labelAnchor: new e.Point(15, 35),
                labelVisible: !0,
                icon: {
                    origin: new google.maps.Point(0, 0),
                    url: i,
                    scaledSize: new google.maps.Size(30, 45)
                },
                optimized: !1,
                labelInBackground: !1,
                labelClass: "map-column-icon-label map-google-label-id-" + n,
                zIndex: u,
                labelZIndex: u
            };
        this.addMarkerFromLatLng(a, t, function(e) {
            s(e, n, r, a)
        }, o, r, f, function() {}, function() {})
    }

    function L(t, n, r) {
        e.event.addListener(t, n, r)
    }

    function A(e, t) {
        e.forceRedraw()
    }

    function O(e, t) {
        e.setCenter(t)
    }

    function M(e, t) {
        e.setZoom(t)
    }

    function _(e) {
        return e.getZoom()
    }

    function D(e) {
        return e.getBounds()
    }

    function P(t) {
        t.set("zoomControl", !1), t.set("zoomControlOptions", {
            position: e.ControlPosition.LEFT_BOTTOM,
            style: e.ZoomControlStyle.SMALL
        }), t.set("scrollwheel", !1)
    }

    function H(e, t) {
        e.setMap(t)
    }

    function B(t, n, r) {
        var i = new e.Point(15, 35),
            s = new google.maps.Size(30, 45);
        n == "over" && (s = new google.maps.Size(33, 48)), t.setIcon({
            origin: new e.Point(0, 0),
            url: r,
            scaledSize: s
        }), t.labelAnchor = i, t.label.setStyles(), t.label.draw()
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
