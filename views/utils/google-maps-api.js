define(["async!https://maps.googleapis.com/maps/api/js?v=3.9&libraries=geometry"], function() {
    function e(t, n) {
        this.marker_ = t, this.handCursorURL_ = t.handCursorURL, this.labelDiv_ = document.createElement("div"), this.labelDiv_.style.cssText = "position: absolute; overflow: hidden;", this.eventDiv_ = document.createElement("div"), this.eventDiv_.style.cssText = this.labelDiv_.style.cssText, this.eventDiv_.setAttribute("onselectstart", "return false;"), this.eventDiv_.setAttribute("ondragstart", "return false;"), this.crossDiv_ = e.getSharedCross(n)
    }
    return e.prototype = new google.maps.OverlayView, e.getSharedCross = function(t) {
        var n;
        return typeof e.getSharedCross.crossDiv == "undefined" && (n = document.createElement("img"), n.style.cssText = "position: absolute; z-index: 1000002; display: none;", n.style.marginLeft = "-8px", n.style.marginTop = "-9px", n.src = t, e.getSharedCross.crossDiv = n), e.getSharedCross.crossDiv
    }, e.prototype.onAdd = function() {
        var t = this,
            n = !1,
            r = !1,
            i, s, o, u, a, f, l, c = 20,
            h = "url(" + this.handCursorURL_ + ")",
            p = function(e) {
                e.preventDefault && e.preventDefault(), e.cancelBubble = !0, e.stopPropagation && e.stopPropagation()
            },
            d = function() {
                t.marker_.setAnimation(null)
            };
        this.getPanes().overlayImage.appendChild(this.labelDiv_), this.getPanes().overlayMouseTarget.appendChild(this.eventDiv_), typeof e.getSharedCross.processed == "undefined" && (this.getPanes().overlayImage.appendChild(this.crossDiv_), e.getSharedCross.processed = !0), this.listeners_ = [google.maps.event.addDomListener(this.eventDiv_, "mouseover", function(e) {
            if (t.marker_.getDraggable() || t.marker_.getClickable()) this.style.cursor = "pointer", google.maps.event.trigger(t.marker_, "mouseover", e)
        }), google.maps.event.addDomListener(this.eventDiv_, "mouseout", function(e) {
            (t.marker_.getDraggable() || t.marker_.getClickable()) && !r && (this.style.cursor = t.marker_.getCursor(), google.maps.event.trigger(t.marker_, "mouseout", e))
        }), google.maps.event.addDomListener(this.eventDiv_, "mousedown", function(e) {
            r = !1, t.marker_.getDraggable() && (n = !0, this.style.cursor = h);
            if (t.marker_.getDraggable() || t.marker_.getClickable()) google.maps.event.trigger(t.marker_, "mousedown", e), p(e)
        }), google.maps.event.addDomListener(document, "mouseup", function(e) {
            var s;
            n && (n = !1, t.eventDiv_.style.cursor = "pointer", google.maps.event.trigger(t.marker_, "mouseup", e));
            if (r) {
                if (a) {
                    s = t.getProjection().fromLatLngToDivPixel(t.marker_.getPosition()), s.y += c, t.marker_.setPosition(t.getProjection().fromDivPixelToLatLng(s));
                    try {
                        t.marker_.setAnimation(google.maps.Animation.BOUNCE), setTimeout(d, 1406)
                    } catch (o) {}
                }
                t.crossDiv_.style.display = "none", t.marker_.setZIndex(i), u = !0, r = !1, e.latLng = t.marker_.getPosition(), google.maps.event.trigger(t.marker_, "dragend", e)
            }
        }), google.maps.event.addListener(t.marker_.getMap(), "mousemove", function(e) {
            var u;
            n && (r ? (e.latLng = new google.maps.LatLng(e.latLng.lat() - s, e.latLng.lng() - o), u = t.getProjection().fromLatLngToDivPixel(e.latLng), a && (t.crossDiv_.style.left = u.x + "px", t.crossDiv_.style.top = u.y + "px", t.crossDiv_.style.display = "", u.y -= c), t.marker_.setPosition(t.getProjection().fromDivPixelToLatLng(u)), a && (t.eventDiv_.style.top = u.y + c + "px"), google.maps.event.trigger(t.marker_, "drag", e)) : (s = e.latLng.lat() - t.marker_.getPosition().lat(), o = e.latLng.lng() - t.marker_.getPosition().lng(), i = t.marker_.getZIndex(), f = t.marker_.getPosition(), l = t.marker_.getMap().getCenter(), a = t.marker_.get("raiseOnDrag"), r = !0, t.marker_.setZIndex(1e6), e.latLng = t.marker_.getPosition(), google.maps.event.trigger(t.marker_, "dragstart", e)))
        }), google.maps.event.addDomListener(document, "keydown", function(e) {
            r && e.keyCode === 27 && (a = !1, t.marker_.setPosition(f), t.marker_.getMap().setCenter(l), google.maps.event.trigger(document, "mouseup", e))
        }), google.maps.event.addDomListener(this.eventDiv_, "click", function(e) {
            if (t.marker_.getDraggable() || t.marker_.getClickable()) u ? u = !1 : (google.maps.event.trigger(t.marker_, "click", e), p(e))
        }), google.maps.event.addDomListener(this.eventDiv_, "dblclick", function(e) {
            if (t.marker_.getDraggable() || t.marker_.getClickable()) google.maps.event.trigger(t.marker_, "dblclick", e), p(e)
        }), google.maps.event.addListener(this.marker_, "dragstart", function() {
            r || (a = this.get("raiseOnDrag"))
        }), google.maps.event.addListener(this.marker_, "drag", function() {
            r || a && (t.setPosition(c), t.labelDiv_.style.zIndex = 1e6 + (this.get("labelInBackground") ? -1 : 1))
        }), google.maps.event.addListener(this.marker_, "dragend", function() {
            r || a && t.setPosition(0)
        }), google.maps.event.addListener(this.marker_, "position_changed", function() {
            t.setPosition()
        }), google.maps.event.addListener(this.marker_, "zindex_changed", function() {
            t.setZIndex()
        }), google.maps.event.addListener(this.marker_, "visible_changed", function() {
            t.setVisible()
        }), google.maps.event.addListener(this.marker_, "labelvisible_changed", function() {
            t.setVisible()
        }), google.maps.event.addListener(this.marker_, "title_changed", function() {
            t.setTitle()
        }), google.maps.event.addListener(this.marker_, "labelcontent_changed", function() {
            t.setContent()
        }), google.maps.event.addListener(this.marker_, "labelanchor_changed", function() {
            t.setAnchor()
        }), google.maps.event.addListener(this.marker_, "labelclass_changed", function() {
            t.setStyles()
        }), google.maps.event.addListener(this.marker_, "labelstyle_changed", function() {
            t.setStyles()
        })]
    }, e.prototype.onRemove = function() {
        var e;
        this.labelDiv_.parentNode.removeChild(this.labelDiv_), this.eventDiv_.parentNode.removeChild(this.eventDiv_);
        for (e = 0; e < this.listeners_.length; e++) google.maps.event.removeListener(this.listeners_[e])
    }, e.prototype.draw = function() {
        this.setContent(), this.setTitle(), this.setStyles()
    }, e.prototype.setContent = function() {
        var e = this.marker_.get("labelContent");
        typeof e.nodeType == "undefined" ? (this.labelDiv_.innerHTML = e, this.eventDiv_.innerHTML = this.labelDiv_.innerHTML) : (this.labelDiv_.innerHTML = "", this.labelDiv_.appendChild(e), e = e.cloneNode(!0), this.eventDiv_.appendChild(e))
    }, e.prototype.setTitle = function() {
        this.eventDiv_.title = this.marker_.getTitle() || ""
    }, e.prototype.setStyles = function() {
        var e, t;
        this.labelDiv_.className = this.marker_.get("labelClass"), this.eventDiv_.className = this.labelDiv_.className, this.labelDiv_.style.cssText = "", this.eventDiv_.style.cssText = "", t = this.marker_.get("labelStyle");
        for (e in t) t.hasOwnProperty(e) && (this.labelDiv_.style[e] = t[e], this.eventDiv_.style[e] = t[e]);
        this.setMandatoryStyles()
    }, e.prototype.setMandatoryStyles = function() {
        this.labelDiv_.style.position = "absolute", this.labelDiv_.style.overflow = "hidden", typeof this.labelDiv_.style.opacity != "undefined" && this.labelDiv_.style.opacity !== "" && (this.labelDiv_.style.filter = "alpha(opacity=" + this.labelDiv_.style.opacity * 100 + ")"), this.eventDiv_.style.position = this.labelDiv_.style.position, this.eventDiv_.style.overflow = this.labelDiv_.style.overflow, this.eventDiv_.style.opacity = .01, this.eventDiv_.style.filter = "alpha(opacity=1)", this.setAnchor(), this.setPosition(), this.setVisible()
    }, e.prototype.setAnchor = function() {
        var e = this.marker_.get("labelAnchor");
        this.labelDiv_.style.marginLeft = -e.x + "px", this.labelDiv_.style.marginTop = -e.y + "px", this.eventDiv_.style.marginLeft = -e.x + "px", this.eventDiv_.style.marginTop = -e.y + "px"
    }, e.prototype.setPosition = function(e) {
        var t = this.getProjection().fromLatLngToDivPixel(this.marker_.getPosition());
        typeof e == "undefined" && (e = 0), this.labelDiv_.style.left = Math.round(t.x) + "px", this.labelDiv_.style.top = Math.round(t.y - e) + "px", this.eventDiv_.style.left = this.labelDiv_.style.left, this.eventDiv_.style.top = this.labelDiv_.style.top, this.setZIndex()
    }, e.prototype.setZIndex = function() {
        var e = this.marker_.get("labelInBackground") ? -1 : 1;
        typeof this.marker_.getZIndex() == "undefined" ? (this.labelDiv_.style.zIndex = parseInt(this.labelDiv_.style.top, 10) + e, this.eventDiv_.style.zIndex = this.labelDiv_.style.zIndex) : (this.labelDiv_.style.zIndex = this.marker_.getZIndex() + e, this.eventDiv_.style.zIndex = this.labelDiv_.style.zIndex)
    }, e.prototype.setVisible = function() {
        this.marker_.get("labelVisible") ? this.labelDiv_.style.display = this.marker_.getVisible() ? "block" : "none" : this.labelDiv_.style.display = "none", this.eventDiv_.style.display = this.labelDiv_.style.display
    }, google.maps.MarkerWithLabel = function(n) {
        n = n || {}, n.labelContent = n.labelContent || "", n.labelAnchor = n.labelAnchor || new google.maps.Point(0, 0), n.labelClass = n.labelClass || "markerLabels", n.labelStyle = n.labelStyle || {}, n.labelInBackground = n.labelInBackground || !1, typeof n.labelVisible == "undefined" && (n.labelVisible = !0), typeof n.raiseOnDrag == "undefined" && (n.raiseOnDrag = !0), typeof n.clickable == "undefined" && (n.clickable = !0), typeof n.draggable == "undefined" && (n.draggable = !1), typeof n.optimized == "undefined" && (n.optimized = !1), n.crossImage = n.crossImage || "https://maps.gstatic.com/intl/en_us/mapfiles/drag_cross_67_16.png", n.handCursor = n.handCursor || "https://maps.gstatic.com/intl/en_us/mapfiles/closedhand_8_8.cur", n.optimized = !1, this.label = new e(this, n.crossImage, n.handCursor), google.maps.Marker.apply(this, arguments)
    }, google.maps.MarkerWithLabel.prototype = new google.maps.Marker, google.maps.MarkerWithLabel.prototype.setMap = function(e) {
        google.maps.Marker.prototype.setMap.apply(this, arguments), this.label.setMap(e)
    }, window.google.maps
});
