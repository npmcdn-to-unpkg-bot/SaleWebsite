define(["jquery","select","breakpoints","handlebars","ajaxProductDetails"],function(e,t,n,r,i){function c(){i.loadPriceData()}function h(e){i.loadShippingData(e)}function p(){s=e("select.size-select"),o&&f&&e(".size-dropdown").addClass("touch-desktop-hide"),s.find("option").each(function(e,t){b(t)}),s.selectric({disableOnMobile:!0,openOnHover:!1,inheritOriginalWidth:!1,onInit:function(){var t=e(".product-info-wrapper .selectricItems");t.height()>=200&&t.addClass("size-scrollable")},onBeforeOpen:function(e){g(e)},onChange:function(t){e(this).hasClass("flyoutSize-select")===!0&&e("#flyout-dropdown-size-select").val()!="-1"&&e("#flyout-dropdown-size").find(".error-text").css("display","none"),v(t),e("#product-details-selected-size").val(t.value),h(e(t));if(e(".product-detail-print-link").length){var n=e(".product-detail-print-link").attr("href").split("?")[0];if(t.selectedIndex>0){var r=n+"?size="+t.options[t.selectedIndex].text;e(".product-detail-print-link").attr("href",r)}else e(".product-detail-print-link").attr("href",n)}e(".save").removeClass("_active"),e(".shop-the-look-main-container").length>0&&w(e(this)),d(t)},onClose:function(){s.selectric("refresh")},optionsItemBuilder:function(t,n){if(n.val().length&&n.val()!="-1"){var i=e(n).parent().attr("class").match(/(flyoutSize-select)/)?!0:!1,s=e(n).data("template");if(i===!0)var s="product-size-findinstore-template";var o=s?"#"+s:"#product-size-template",u=e(n).data("available"),a={itemHeader:!0,itemValue:t.text,itemAvailable:u},f=e(o).html(),l=r.compile(f),c=l(a);return c}return t.text}}),s.selectric("refresh"),e(".find-in-store-product-selected-description select.size-select").selectric({openOnHover:!1});if(e(".noSizeDropDown").length>0){var t=e(".noSizeDropDown"),n=t.attr("data-no-size"),i=e('option[value="'+n+'"]',t).index();s.prop("selectedIndex",i).selectric("refresh");if(e(".findInStoreNoSizeDropDown").length>0){var u=e(".find-in-store-cta",".add-to-shopping-bag-form");u&&u.css({display:"inline-block"})}}s.change(v)}function d(t){var n,r,i=e(t).closest(".size-dropdown"),o=e(t).closest(".size-dropdown").find("li.selected .sizes-item-value");s.selectric("refresh"),n=e(o).hasClass("sizes-item-value-disabled"),n?e(i).find(".label").addClass("label-line-disabled"):e(i).find(".label").removeClass("label-line-disabled")}function v(t){var n,r,i=e(t).closest(".size-dropdown"),s=".add-to-bag-button",u=".tooltip-add-to-bag",a=".find-in-store-cta",f=".order-by-phone-cta";o&&!l?(n=e("option:selected",this),r=e(this).closest(".product-info-wrapper"),e("#product-details-selected-size").val(this.value),h(e(this))):(n=e("option:selected",t),r=e(t).closest(".product-info-wrapper"));if(n.val()!=="-1"){var c;o?(e(this).removeClass("error"),e(".error-text").css({display:"none"}),c=e(this)):(i.find(".selectric-size-select .selectric").removeClass("error"),c=e(t)),c.closest(".add-to-shopping-bag-form").find(".shipping-info").show(),i.addClass("product-sizes-first-element"),e("#size-error",r).addClass("hide"),e(".add-to-bag-size-selector .error-text").remove(),e(".personalize-link").removeClass("_disabled")}else i.removeClass("product-sizes-first-element"),e(".personalize-link").addClass("_disabled");n.data("available")||n.val()==="-1"?(e("body").find(u).length>0&&(e(s,e(u)).css({display:"inline-block"}),e(a,e(u)).hide()),e(".shopping-bag-cta",r).css({display:"block"}),e(a,r).hide(),e(f).removeAttr("style")):(e("body").find(u).length>0&&(e(s,e(u)).hide(),e(a,e(u)).css({display:"inline-block"})),e(".shopping-bag-cta",r).hide(),e(a,r).css({display:"block"}),e(f).css({display:"none"})),e(".shop-the-look-main-container").length===0&&m(n)}function m(t){var n=null,r=".size-dropdown";t.closest(".find-in-store-overlay-content").length?(n=e(".product-info-wrapper"),0===n.length&&(n=e(".find-in-store-overlay-content"))):n=e(".find-in-store-overlay-content");if(e(".gucci-open-fis-to-update").length){e(".gucci-open-fis-to-update").attr("data-item-id",t.attr("data-style-id"));var i="#fis-element-selected-"+t.attr("data-style-id");e(r,e(i)).eq(t.index()).trigger("click")}s.val(t.val())}function g(t){var n=e(t).find("option").first().text(),r=e(t).parent().next().find(".label");r.text(n)}function y(){s.selectric("refresh")}function b(t){var n=e(t).data("copy"),r=e(t).data("copy-device"),i=e(t).data("available");o&&f===!1&&!i?e(t).html(r):e(t).html(n)}function w(e){var t=e.closest(".stl-item-details"),n=t.find(".added-to-shopping-bag-button");n.is(":visible")&&n.removeClass("show-added-button")}function E(){if(u===!0&&a===!0){var t=e(window).height();e(".overlay").css({height:t,top:"-50px"})}}function S(){e(window).resize(function(){E()})}var s,o=Modernizr.touch,u=e("html").hasClass("iPad")?!0:!1,a=navigator.userAgent.match(/(iPad|iPhone|iPod touch);.*CPU.*OS.*8/)?!0:!1,f=e("html").hasClass("tablet")||e("html").hasClass("mobile")?!1:!0,l=e("html").hasClass("touch")&&!e("html").hasClass("tablet")&&!e("html").hasClass("mobile");return{load:function(){S(),p(),n.change(y)}}});