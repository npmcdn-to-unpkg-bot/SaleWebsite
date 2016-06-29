define(["jquery","viewport","breakpoints","ajaxProductDetails","handlebars","overlay"],function(e,t,n,r,i,s){function X(){e(".view-detail-link, .certificate-link").on("click",V),e(u+" a").on("click",$),e(".view-product-link").on("click",J),H.on("click",S+" a",tt),j.on("click",function(){F.data("item-id",e(this).data("item-id")),F.data("style-id",e(this).data("style-id"))}),W.on("click tap",it)}function V(t){var n=e(this);n.toggleClass("_active").next().slideToggle(),nt(t)}function $(n){if(q){var r=e(".product-detail-carousel-image .view-360-image");r.data("rotate-phase")==="no-rotated"&&r.data("rotate-phase","rotated"),B.trigger("scrollingProductDetailCarousel")}e(l).addClass(f).removeClass(a).children(c).stop().slideUp(h),e(".product-detail-accordion .accordion-item").eq(e(this).parent().index()).addClass(a).children(c).stop().slideDown(h,function(){R&&e(this).prev(".accordion-button").trigger("click"),q?t.scrollTo(m,d,1600,et):t.scrollTo(m,d,1600)}),nt(n)}function J(e){q?(B.trigger("scrollingProductDetailCarousel"),t.scrollTo(d,d,1600,et)):t.scrollTo(d,d,1600),nt(e)}function K(){v=e(d).height(),setTimeout(function(){p=_.offset().top,D.removeClass("_static").removeAttr("style")},600),Q()}function Q(){if(!n.is("small")){var r=t.get().height-v+20,i=e(y).find(".product-tiles-grid-item-image img").height(),s=0;e(g+", "+m).css("min-height",r),i>r/2?s=i:s=r/2,e(y).css({"min-height":s,height:"auto"}),e(b).length>0&&P.css("height",r)}else e(g+", "+m+", "+y).css("min-height",0),e(b).length>0&&P.css("height","auto")}function G(t,n){var r=[];for(var s=0;s<n;s++)r.push(s+1);var o={links:r},u=e("#product-detail-vertical-carousel-pagination-template").html(),a=i.compile(u),f=a(o);t.find(S).html(f),Y(t,0)}function Y(e,t){var n=e.find("."+T);n.filter(k).removeClass(C),n.eq(t).addClass(C),e.find(".item").eq(t).addClass(A+" "+C+" "+L).siblings().removeClass(A+" "+C+" "+L)}function Z(n,r){var i=n.find(".item").eq(r).addClass("next");B.trigger("scrollingProductDetailCarousel"),t.get().scrollTop<=n.height()+e(d).height()&&(r===0?t.scrollTo(".content",d,1600,et):(t.get().scrollTop>0||r!==0)&&t.scrollTo(w+" .next",d,1600,et)),i.removeClass("next"),Y(n,r)}function et(){B.trigger("stopScrollingProductDetailCarousel")}function tt(t){var n=e(this),r=H,i=e(".last-item"),s=n.find("."+N).html(),o=parseInt(s,10)-1,u=i.css("position")=="fixed",a=e(".product-detail-carousel-pagination").find("li").length;o!=a-1&&u&&i.css({position:"relative",top:0}),Z(r,o),nt(t)}function nt(e){e&&e.preventDefault&&e.preventDefault()}function rt(){var t=e(".accordion-wrapper .product-detail"),r=e(".accordion-wrapper .product-detail-2");if(t.html().length>M){t.addClass("columnize-by-2");if(!n.is("small")&&!U){t.addClass("mixinColumn"),r.addClass("mixinColumn");var i=t.outerHeight();r.html(function(){return t.html()+'<p style="height:'+i+'px;" />'}),r.scrollTop(i)}}}function it(){z.hide().removeClass("_active"),s.open(O)}function st(){r.loadPriceData()}function ot(){r.loadShippingData()}function ut(){r.saveRecentlyViewedItem()}function at(){r.loadRecentlyViewedItems()}function ft(){e.trim(e("#size-guide-overlay-shoes .size-guide-wrapper").html())===""||e(".size-guide").hasClass("noSizeDropDown")?(e(".size-guide").hide(),e(".size-guide").next().hasClass("personalize")&&e(".size-guide").next().addClass("no-size-guide")):e(".size-guide").show()}function lt(){e(".content .overlay.article-overlay").insertAfter("#page")}function ct(){e(".size-dropdown select option[disabled]").remove()}function ht(){p=_.offset().top}var o=e(".product-detail-wrap"),u=".product-details-nav",a="_open",f="_close",l=".product-detail-accordion ."+a,c=".accordion-drawer",h=500,p=9999,d="#header-main",v=e(d).height(),m=".detail-accordion",g=".product-related-column",y=g+" article",b=".exclusive-product",w=".product-detail-carousel",E="carousel-pagination",S="."+E,x=e(w+" .item").length,T=E+"-link",N=T+"-index",C="_active",k="."+C,L=C+"-slide",A="_active-item-icon",O=e("#share-by-email-overlay"),M=250,_=e(m),D=e(".product-detail-purchase"),P=e(".exclusive-last-product-image"),H=e(w),B=e(window),j=e(".find-in-store",o),F=e("#find-in-store-overlay"),I=navigator.userAgent.toLowerCase(),q=/(ipad).* os 7_/.test(I),R=e("html").hasClass("iOS"),U=e("html").hasClass("csscolumns"),z=e("#top-right-share"),W=e(".share-email");return{load:function(){X(),n.change(K),Q(),G(H,x),n.change(rt),ot(),st(),at(),ft(),lt(),ct(),setTimeout(ht,600),rt(),ut()},updatePaginationActive:function(e,t){Y(e,t)}}});
