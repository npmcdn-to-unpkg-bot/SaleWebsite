define(["jquery","viewport","slick"],function(e,t){function h(){f=e(".style-selector-carousel",u),a.on("click.styleselector",b),e(i+" "+s,u).on("click.styleselector",y),e(r,e(o)).on("click.styleselector",g),c&&t.resizeWidth(S),u.on("overlay.open",v)}function p(){e(".product-style-selector").each(function(t,n){function s(){r.css("display","none")}var r=e(this).find("img")||e(this).find("._loaded"),i=new Image;i.src=r.attr("src"),i.onerror=s})}function d(){a.off("click.styleselector"),e(i+" "+s,u).off("click.styleselector"),e(r,e(o)).off("click.styleselector"),e(".carousel-inner",u).off("beforeChange.styleselector"),u.off("overlay.open",v)}function v(){m(),setTimeout(function(){S(),e(".slick-track",u).width()===0&&e(".carousel-inner",u).slick("refresh")},200)}function m(){if(e(".product-detail-wrap").length>0){var t={};t.ecommerce=ecommerce,t.event="productImpression",dataLayer.push(t)}}function g(){l=e(this).closest(o)}function y(){a.trigger("click")}function b(){var e=u.find(".slick-center").attr("data-url");e!==undefined&&(document.location.href=e)}function w(t,r,i,s){var o=e(".carousel-inner",u).find("[data-slick-index="+s+"]"),a=parseInt(o.index()+1,10);e(n+" .product-title span",u).text(o.data("title")),e(n+" .color-material-title",u).attr("data-image",o.data("image")).text(o.data("color-material")),o.data("full-price")!==""?e(n+" .product-price",u).html('<span class="fullprice">'+o.data("full-price")+'</span> <span class="saleprice">'+o.data("price")+"</span>"):e(n+" .product-price",u).text(o.data("price")),e(n+" .btn-select-style",u).attr("data-style-id",o.data("code")),e(n+" .actual-count",u).text(a),o.is(":last-child")?e(".next-style",u).addClass("_disabled"):e(".next-style",u).removeClass("_disabled"),o.is(":first-child")?e(".prev-style",u).addClass("_disabled"):e(".prev-style",u).removeClass("_disabled")}function E(){var t=u.find(".slick-center"),r=parseInt(t.index()+1,10);e(n+" .product-title span",u).text(t.data("title")),e(n+" .color-material-title",u).attr("data-image",t.data("image")).text(t.data("color-material")),t.data("full-price")!==""?e(n+" .product-price",u).html('<span class="fullprice">'+t.data("full-price")+'</span> <span class="saleprice">'+t.data("price")+"</span>"):e(n+" .product-price",u).text(t.data("price")),e(n+" .btn-select-style",u).attr("data-style-id",t.data("code")),e(n+" .actual-count",u).text(r),e(n+" .total-quantity",u).text(e(".style-selector-overlay .carousel-slide").length),S(),p()}function S(){f.removeAttr("style").css("padding","0 "+(e(".style-selector-overlay-content").width()-f.width())/2+"px")}var n=".product-style-resume",r=".styles-link",i=".container-carousel-style-selector",s=".carousel-slide",o=".add-to-shopping-bag-form",u=e("#style-selector-overlay"),a=e(".btn-select-style",u),f=null,l=null,c=!0;return{load:function(){h(),E(),e(".carousel-inner",u).on("beforeChange.styleselector",w),c=!1},unLoad:d}});