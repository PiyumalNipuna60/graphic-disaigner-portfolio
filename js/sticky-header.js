/**
 * cbslideheader - A jQuery plugin to display or hide headerbar with a sliding motion
 * @version v0.3.6
 * @author maechabin <mail@chab.in> http://mae.chab.in/
 * @license MIT license
 */
!(function (e) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e(require("jquery"), window, document))
    : e(jQuery, window, document);
})(function (e, i, o, t) {
  "use strict";
  var n = function (i, o) {
    (this.element = i),
      (this.$element = e(i)),
      (this.methodType = ""),
      (this.config = {}),
      (this.options = o),
      (this.slideFlag = "up"),
      (this.defaults = {
        headerBarHeight: this.$element.height(),
        headerBarWidth: "100%",
        header2SelectorName: ".cb-header2",
        headerClone: !1,
        fullscreenView: !1,
        zIndex: 9999,
        boxShadow: "none",
        opacity: 1,
        slidePoint: 0,
        slideDownDuration: "normal",
        slideUpDuration: "normal",
        slideDownEasing: "swing",
        slideUpEasing: "swing",
        slideDownCallback: function () {},
        slideUpCallback: function () {},
        headroom: !1,
      });
  };
  (n.prototype.slide = function (e, o, t, n) {
    var s = this;
    (this.slideFlag = "up" === e ? "down" : "up"),
      i.setTimeout(function () {
        s.$element
          .stop()
          .animate(
            { top: o },
            s.config["slide" + t + "Speed"],
            s.config["slide" + t + "Easing"],
            s.config["slide" + t + "Callback"]
          )
          .css(n);
      }, 200);
  }),
    (n.prototype.slideHeader = function () {
      var o = this,
        t = e(i),
        n =
          "slideDown" === o.methodType
            ? 0
            : "-" + o.config.headerBarHeight + "px",
        s =
          "slideDown" === o.methodType
            ? "-" + o.config.headerBarHeight + "px"
            : 15,
        d = "slideDown" === o.methodType ? "Down" : "Up",
        l = "slideDown" === o.methodType ? "Up" : "Down",
        a = {
          "box-shadow": o.config.boxShadow,
          transition: "box-shadow .9s linear",
        },
        h = { "box-shadow": "none" },
        c = "slideDown" === o.methodType ? a : h,
        r = "slideDown" === o.methodType ? h : a,
        p = 0,
        g = 0;
      t.on("scroll", function () {
        "slideUp" === o.methodType && o.config.headroom === !0
          ? ((g = t.scrollTop()),
            g > p && g > 0
              ? "up" === o.slideFlag && o.slide.call(o, o.slideFlag, n, d, c)
              : "down" === o.slideFlag && o.slide.call(o, o.slideFlag, s, l, r),
            (p = g))
          : t.scrollTop() > o.config.slidePoint
          ? "up" === o.slideFlag && o.slide.call(o, o.slideFlag, n, d, c)
          : "down" === o.slideFlag && o.slide.call(o, o.slideFlag, s, l, r);
      });
    }),
    (n.prototype.setStyle = function () {
      var e = this,
        i =
          "slideDown" === e.methodType
            ? "-" + e.config.headerBarHeight + "px"
            : 15;
      e.$element.css({
        top: i,
        visibility: "visible",
        opacity: e.config.opacity,
        width: e.config.width,
        "z-index": e.config.zIndex,
      });
    }),
    (n.prototype.cloneHeader = function () {
      var e = this,
        i = e.$element.clone(!0);
      i.insertAfter(e.$element)
        .removeClass("cb-header")
        .addClass("cb-header1")
        .css({ "z-index": 1e4 });
    }),
    (n.prototype.changeHeaderHeight = function () {
      var o = this,
        t = o.$element.height(),
        n = e(o.config.header2SelectorName),
        s = t + n.height(),
        d = e(i).height(),
        l = "";
      d > s
        ? ((l = o.config.headerClone === !0 ? (d - s) / 2 : (d - s + t) / 2),
          (o.config.slidePoint = d),
          n.css({ "padding-top": l + "px", "padding-bottom": l + "px" }))
        : o.config.headerClone === !0
        ? (o.config.slidePoint = s)
        : (o.config.slidePoint = s - t);
    }),
    (n.prototype.init = function (i) {
      return (
        (this.methodType = i),
        (this.config = e.extend({}, this.defaults, this.options)),
        this.config.headerClone === !0 && this.cloneHeader(),
        this.setStyle(),
        this.config.fullscreenView === !0 && this.changeHeaderHeight(),
        this.slideHeader(),
        this
      );
    }),
    e.extend(e.fn, {
      cbSlideDownHeader: function (e) {
        return this.each(function () {
          new n(this, e).init("slideDown");
        });
      },
      cbSlideUpHeader: function (e) {
        return this.each(function () {
          new n(this, e).init("slideUp");
        });
      },
    });
});
