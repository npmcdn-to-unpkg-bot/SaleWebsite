define(["jquery","select","os"],function(e,t,n){function y(){O(),w(),S(),T(),(e(".breakpoint.small").css("display")=="block"||e(".breakpoint.medium").css("display")=="block")&&b()}function b(){e(".breadcrumb-item select._disable-mobile").each(function(){e(this).on("change",function(){location.href=e(this).val()})})}function w(){var t=e(".header-nav-parent-search");n.supportsTouch()&&n.isCompatible()&&v.on("focus",l,function(r){var i=e(r.target).data("fixed"),s=e("html").hasClass("tablet")&&n.isIOSDevice(),o=typeof i=="undefined"||i===undefined||i;(o||s)&&e(this).closest(c).length<=0&&v.addClass(f),t.css("overflow","hidden")}).on("touchmove",function(){g&&e(this).closest(c).length&&v.removeClass(f)}).on("blur",l,function(){v.removeClass(f),t.css("overflow","visible")})}function E(e,t){var n="gold";e.text()===t?e.addClass(n):e.removeClass(n)}function S(){m.each(function(){e(this).selectric({disableOnMobile:e(this).hasClass(a)?!0:!1,onInit:function(){var t=e(this).parent().parent(),n=t.find(p+" .label");E(n,t.find(h+" ul li").first().text())},onBeforeOpen:function(){var t=e(this).parent().parent(),n=t.find(h);n.removeClass("hidden-for-standard")},onOpen:function(t){e(t).parents(o).first().addClass(u)},onClose:function(t){var n=e(this).parent().parent(),r=n.find(p+" .label");e(t).parents(o).first().removeClass(u),E(r,n.find(".selectricItems ul li").first().text()),e(this).selectric("refresh")}})}),n.supportsTouch()&&x()}function x(){e(h).prop("readonly",!0)}function T(){d.hasClass("lt-ie10")&&e("input[placeholder]").not("["+r+"]").each(N).focus(C).keyup(k).blur(L)}function N(){var t=e(this),n=t.attr("placeholder");t.val(n).attr(r,n).addClass(i)}function C(){var t=e(this);t.val()==t.attr(r)&&t.val("").removeClass(i)}function k(){var t=e(this),n=t.val()==="",i=t.val()==t.attr(r),o=t.hasClass(s);n||i&&!o?t.removeClass(s):t.addClass(s)}function L(){var t=e(this);t.val()===""&&t.val(t.attr(r)).addClass(i)}function A(e){var t=e.attr(r),n=e.val();return t?n&&e.hasClass(s)?!0:!1:!0}function O(){for(var t=(new Date).getFullYear();t>1919;t--)e("#newsletter-year, #account-settings-year").append(e("<option />").val(t).html(t));M(null),e("#newsletter-year, #newsletter-month, #account-settings-year, #account-settings-month").change(function(t){M(t);if(!d.hasClass("touch")){var n;if(t.target.id==="newsletter-month"||t.target.id==="newsletter-year")n=e("#newsletter-day").data("selectric");else if(t.target.id==="account-settings-month"||t.target.id==="account-settings-year")n=e("#account-settings-day").data("selectric");n.refresh()}})}function M(t){var n,r,i,s,o=0;if(t){if(t.target.id==="newsletter-month"||t.target.id==="newsletter-year")s=e("#newsletter-day"),n=e("#newsletter-month").val(),r=e("#newsletter-year").val();else if(t.target.id==="account-settings-month"||t.target.id==="account-settings-year")s=e("#account-settings-day"),n=e("#account-settings-month").val(),r=e("#account-settings-year").val();o=s.val()}else s=e("#newsletter-day"),n=e("#newsletter-month").val(),r=e("#newsletter-year").val();s.html(""),i=_(n,r);var u=s.attr("data-label");s.append(e("<option />").val(0).html(u));for(var a=1;a<i+1;a++)s.append(e("<option />").val(a).html(a));s.val(o)}function _(e,t){return(new Date(t,e,0)).getDate()}var r="data-placeholder",i="_placeholder",s="_edited",o=".custom-select-parent",u="_select-active",a="_disable-mobile",f="_fix-fixed",l="input:not(.filter-bar .selectricInput), textarea, select",c=".overlay._active",h=".selectricInput",p=".selectric",d=e("html"),v=e("body"),m=e("select.custom"),g=n.isIOSDevice();return y(),{load:y}});