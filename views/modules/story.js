define(["jquery","tweenMax"],function(e){function i(i){i=i||!0,e(t,n).each(function(t,n){o(e(n))}),typeof r=="number"&&i&&window.clearTimeout(r)}function s(e){e.addClass("_hover")}function o(e){e.removeClass("_hover")}function u(){e(".story-column-wrapper-over-button",n).on("touchend",function(n){n.preventDefault();var o=e(this),u=e(o.closest(t));i(!1),s(u),r=window.setTimeout(i,1e4)})}var t=".story-block",n=e(".story-module"),r="";return{load:u}});