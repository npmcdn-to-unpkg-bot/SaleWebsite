define(["jquery","ajaxConfig","handlebars","imageLoader"],function(e,t,n,r){function c(){m(),h()}function h(){a||(e(window).on("saved-item.save",null,e.proxy(p)),e(window).on("saved-item.remove",null,e.proxy(p)))}function p(e,t){d(t.data,t.itemCount)}function d(t,n){s.length<=1&&(s=e(i+" .header-nav-favorites-list")),v(n),s.find("li").remove(),e.each(t,function(t,n){var r=l(n);s.append(r),e(".header-nav-child-favorites").removeClass("box-favorites-empty"),e(".header-nav-favorites-link").removeClass("hide"),e(".header-nav-child-favorites-wrapper .empty").addClass("hide")}),m(t.length),s.scrollTop(0),r.loadImage(s)}function v(t){var n=t,r;n>0?r="("+n+")":(r="",n=0),e("#header-main").find(u).html(r)}function m(){var t=e(".header-nav-favorites-item").length,n="header-nav-child-favorites-empty",r="header-nav-child-favorites-small",i="header-nav-child-favorites-single",s=e("div#header-nav-favorites");s.removeClass(n+" "+i+" "+r),t=o;switch(e(".header-nav-favorites-item").length){case 0:s.addClass(n);break;case 1:s.addClass(i);break;case 2:s.addClass(r);break;default:}}var i="#header-nav-favorites",s=e(".header-nav-favorites-list"),o=0,u="[data-saved-items-count]",a=e("#header-main-checkout").length>0;if(!a)var f=e("#saved-item-flyout-template").html(),l=n.compile(f);return{load:function(){c()},setFavoritesHeight:m}});