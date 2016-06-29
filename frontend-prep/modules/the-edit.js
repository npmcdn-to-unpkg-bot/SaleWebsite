define(["jquery","breakpoints","handlebars","ajaxConfig"],function(e,t,n,r){function u(){e(".the-edit-issue").removeClass("active"),e(".the-edit-articles").slideUp().removeClass("open")}function a(t){t&&t.preventDefault();var n=e(this).closest(".the-edit-issue"),r=0,i=e(".the-edit-articles.open");i.length>0&&i.offset().top<=n.offset().top&&(r=i.height());var s=!e(n).is(".active");u(),s&&(n.addClass("active"),e(n.attr("href")).addClass("open").css("opacity",0).slideDown("slow").animate({opacity:1},{duration:"slow"}),e("html, body").stop().animate({scrollTop:n.offset().top-(r+e("#header-main").height())},300),D())}function f(t){t&&t.preventDefault(),e(".the-edit-issue:hidden").not(".header-nav-item").slice(0,Math.min(i,e(".the-edit-issue:hidden").not(".header-nav-item").length)).each(function(){e(this).fadeIn("slow",function(){e(this).css("display","inline-block"),e(".the-edit-issue:hidden").not(".header-nav-item").length===0&&e(".the-edit-load-more").fadeOut("slow")})})}function l(){e(this).data("url")!==undefined&&(window.location.href=e(this).data("url"))}function c(t){t&&t.preventDefault();var n=e(".the-edit-articles.open");e(".the-edit-articles-col",n).each(function(){e(".the-edit-article:hidden",e(this)).slice(0,Math.min(s/3,e(".the-edit-article:hidden",e(this)).length)).fadeIn("slow")}),e(".the-edit-article:hidden",n).length===0&&e(".the-edit-articles-load-more",n).fadeOut("slow")}function h(t){t&&t.preventDefault(),e(".the-edit-article-copy-section:hidden").each(function(){e(this).slideDown("slow"),e(".the-edit-article-text-load-more").hide(),e(".the-edit-article-text-load-less").fadeIn("slow")})}function p(t){t&&t.preventDefault(),e(".the-edit-article-copy-section:gt(0)").each(function(){e(this).slideUp("slow"),e(".the-edit-article-text-load-more").fadeIn("slow"),e(".the-edit-article-text-load-less").hide()})}function d(){e("body").hasClass("_header-nav-is-open")&&e(".header-nav-parent-main").trigger("click");var t=e(window.location.hash.replace("#","#issue-")),n=0,r=e(".the-edit-articles.open");r.length>0&&r.offset().top<=t.offset().top&&(n=r.height(),D());if(t.length>0){t.is(":hidden")&&f(),t.is(":hidden")&&f(),u(),t.addClass("active"),e(t.attr("href")).slideDown().addClass("open");var i=e(".the-edit-issue.active");e("html, body").stop().animate({scrollTop:i.offset().top-n-e("#header-main").height()},{duration:"slow"})}B()}function v(){e(this).hasClass("gucci-dim")||(window.location=e(this).data("prev"))}function m(t){e(this).hasClass("gucci-dim")?t.preventDefault():window.location=e(this).data("next")}function g(){var t=e(this).attr("href");e(t+" .carousel-inner").slick({dots:!1,infinite:!0}),e(".article-overlay.overlay-photo-gallery aside .photo-gallery-nav-option.first .gallery-number").html(e(".article-overlay .slick-active img").data("number")),b(),w(),E()}function y(){var t=e(this).attr("href");e(t+" .carousel-inner").slick({dots:!1,draggabble:!1,infinite:!0,slidesToScroll:1,slidesToShow:3,centerMode:!0,centerPadding:"0px",responsive:[{breakpoint:1023,settings:{slidesToShow:1,swipeToSlide:!0}}]}),e(".article-overlay.runway-photo-gallery aside .photo-gallery-nav-option.first .gallery-number").html(e(".article-overlay .slick-active.slick-center img").data("number")),w(),S(),e(".article-overlay.runway-photo-gallery .overlay-close.overlay-close-button-first.close").on("click",function(){e(t+" .carousel-inner").slick("unslick")}),e('[id^="runway-photo-gallery-"]').css({height:"100%","padding-top":0})}function b(){e("meta[property='og\\:title']").attr("content",e(".slick-active .gallery-title").val()),e("meta[property='og\\:description']").attr("content",e(".slick-active .gallery-info").val()),e(".overlay.promo.overlay-photo-gallery").on("click",".slick-prev, .slick-next",function(){e("meta[property='og\\:title']").attr("content",e(".slick-active .gallery-title").val()),e("meta[property='og\\:description']").attr("content",e(".slick-active .gallery-info").val())})}function w(){var t=0;typeof window.innerHeight=="number"?t=window.innerHeight:t=document.documentElement.clientHeight,e(".overlay.promo.overlay-photo-gallery .hero-background-image-large-wrapper").css("min-height",t),e("#page aside.social-overlay").length===0&&e(".photo-gallery-nav-option.last").hide()}function E(){function i(){e(".article-overlay:visible aside .photo-gallery-nav-option.first .gallery-number").html(e(".article-overlay .slick-active img").data("number"))}e(".overlay.promo.overlay-photo-gallery").on("click",".slick-prev, .slick-next",function(){e(".article-overlay:visible aside .photo-gallery-copy-section").html(e(".article-overlay:visible .slick-active .gallery-image-content .photo-gallery-copy-section").html()),e(".article-overlay:visible aside .photo-gallery-nav-option.first .gallery-number").html(e(".article-overlay .slick-active img").data("number"));if(e("aside").hasClass("open")){e(".photo-gallery-copy-section").slideUp("slow");var t=e("aside.open"),n=e(t).find("span.info-txt"),r=e(t).find("span.close-txt");e(r).hasClass("switch")&&(e(r).hide().removeClass("switch"),e(n).fadeIn("slow").addClass("switch")),e("aside").removeClass("open")}});if(e(".article-overlay.overlay.overlay-photo-gallery:hidden")&&e("aside").hasClass("open")){e(".photo-gallery-copy-section").hide();var t=e("aside.open"),n=e(t).find("span.info-txt"),r=e(t).find("span.close-txt");e(r).hasClass("switch")&&(e(r).hide().removeClass("switch"),e(n).show().addClass("switch")),e("aside").removeClass("open")}e(".overlay.promo.overlay-photo-gallery").on("touchend",".slick-slide",function(){i()}),e(".overlay.promo.overlay-photo-gallery").on("mouseout",".slick-slide",function(){i()}),setTimeout(i,30)}function S(){function t(){e(".article-overlay:visible aside .photo-gallery-nav-option.first .gallery-number").html(e(".article-overlay .slick-active.slick-center img").data("number"))}e(".overlay.promo.overlay-photo-gallery.runway-photo-gallery").on("click, mouseout",".slick-slide, .slick-prev, .slick-next",function(){t()}),e(".overlay.promo.overlay-photo-gallery.runway-photo-gallery").on("touchend",".slick-slide, .slick-prev, .slick-next",function(){t()}),setTimeout(t,30)}function x(){var t=e(this),n=e(t).parent().find("span.info-txt"),r=e(t).parent().find("span.close-txt");e(n).hasClass("switch")?(e(n).hide().removeClass("switch"),e(r).fadeIn("slow").addClass("switch")):(e(r).hide().removeClass("switch"),e(n).fadeIn("slow").addClass("switch")),e(t).closest("aside").toggleClass("open"),e("aside").hasClass("open")?e(".photo-gallery-copy-section").slideDown("slow"):e(".photo-gallery-copy-section").slideUp("slow")}function T(){e("body").addClass("video-overlay-lock"),e(".video-actions-item.video-close").on("click",function(){e("body").removeClass("video-overlay-lock")})}function N(){if(e("#nextArticleText").length===1){e(".next-article span").text(e("#nextArticleText").val()),e(".next-article").attr("href",e("#nextArticleUrl").val());var t=e(".next-article span").height();t>14?e(".next-article span").addClass("more-lines"):e(".next-article span").addClass("single-line")}else e(".next-article").hide();e(".article-photo-gallery aside .photo-gallery-copy-section").html(e(".carousel-slide .gallery-image-content .photo-gallery-copy-section:first").html())}function C(t){if(t.target.className!=="social-overlay-content"){e("#the-edit-share").find(".social-overlay-close").trigger("click"),e("body").unbind("click",C);var n=e(".overlay-photo-gallery.social-open").attr("id");e("#"+n+":visible")&&e("body").addClass("overlay-lock")}else t.target.className==="social-overlay-close"&&e("body").unbind("click",C)}function k(t){t.target.className!=="social-overlay-content"?(t.preventDefault(),t.stopPropagation(),e("#the-edit-share").removeClass("_active").hide(),e("body").addClass("overlay-lock"),e("body").unbind("click",k)):t.target.className==="social-overlay-close"&&e("body").unbind("click",k)}function L(){e(this).closest(".overlay-photo-gallery").hasClass("article-photo-gallery")&&(e(this).closest(".overlay-photo-gallery.article-photo-gallery").addClass("social-open").hide(),e(".overlay-photo-gallery").hasClass("social-open")&&e("body").bind("click",C)),e(".overlay-photo-gallery.runway-photo-gallery").hasClass("_active")&&e("body").bind("click",k)}function A(t){e("body").unbind("click",C),e("body").unbind("click",k);if(e(".overlay-photo-gallery.article-photo-gallery").hasClass("social-open")){var n=e(".overlay-photo-gallery.social-open").attr("id");e(".overlay-photo-gallery").removeClass("social-open"),e("#page").find('a[href="#'+n+'"]').trigger("click"),e("#"+n+":visible")&&e("body").addClass("overlay-lock")}else e(".overlay-photo-gallery.runway-photo-gallery").hasClass("_active")?(t.preventDefault(),t.stopPropagation(),e(".overlay.social-overlay").removeClass("_active").hide()):(e("#the-edit-share").removeClass("_active").hide(),e("body").removeClass("overlay-lock"),e("#page").removeAttr("style"))}function O(t){t.preventDefault(),t.stopPropagation();var n=e(this).attr("data-url");window.location=n}function M(t){t.preventDefault(),t.stopPropagation();var n=e(this).attr("data-url");window.location=n}function _(){if(t.is("standard")){if(e(".page-TheEditArchivePage").length)var n=".the-edit-articles .the-edit-artilces-list";else var n=".the-edit-articles.open .the-edit-artilces-list";var r=e(n+" .the-edit-article");e(n).reOrder(P(r))}}function D(){if(e(".page-TheEditArchivePage").length)var t=e(".the-edit-archive-load-more"),i=" .the-edit-artilces-list",u="articlecategory";else var t=e(".the-edit-articles.open .the-edit-articles-load-more"),i=" .the-edit-artilces-list",a=t.attr("data-issuetitle"),u="issueCode";var f=n.compile(e("#articlelist-item").html()),l=t.attr("data-articlecategory"),c=r.config(),h=t.attr("data-url"),p=parseInt(t.attr("data-page")),d=c[h.toUpperCase()],v=u+"="+l+"&page="+p;e.ajax({url:d,dataType:"json",data:v}).done(function(n){p>=n.totalNumberOfPages&&t.addClass("hide");var r=p-1,u=s*r;if(e(".page-TheEditArchivePage").length)for(var c=0;c<n.articleCategory.articles.length;c++)n.articleCategory.articles[c].pos=c+u;else for(var c=0;c<n.articles.length;c++)n.articles[c].pos=c+u,n.articles[c].category=l,n.articles[c].categoryTitle=a;e("#"+l+i).append(f(n)),o=l,e(".spinner-wrapper").addClass("_loaded"),_()}),t.attr("data-page",p+1)}function P(t){var n=[],r=3,i=0,s=0,o=0,u=t.length,a=Math.ceil(u/r);e("#page").attr("data-rown",a);for(s=0;s<r;s++){var f=0;for(o=0;o<a;o++){if(o==0)var f=s;else var f=f+r;u>i&&(n[i]=f),i++}}return n}function H(){e(".the-edit-issue").on("click",a),e(".the-edit-articles-load-more").on("click",D),e(".the-edit-load-more").on("click",f),e("body").on("click",".edit-article-teaser-link",O),e("body").on("click",".article-category-image",M),e(".the-edit-archive-load-more").on("click",D),e(".the-edit-article-text-load-more").on("click",h),e(".the-edit-article-text-load-less").on("click",p),e(".the-edit-article-nav.the-edit-article-previous").on("click",v),e(".the-edit-article-nav.the-edit-article-next").on("click",m),e(".button-gold.overlay-open.photo-gallery-open").on("click",g),e(".button-gold.overlay-open.runway-gallery-open").on("click",y),e(".photo-gallery-nav-option.middle").on("click",x),e(".style-news-page.the-edit-article-page .video-parent").on("click",".play",T),e(".gucci-dim").on("click",function(e){e.preventDefault()}),e(".next-article").on("click",l),e(".photo-gallery-nav-option").on("click",".overlay-open",L),e(".social-overlay-close").on("click",A),e(window).on("hashchange",d),N(),t.change(_),e(".banner").on("click",_)}function B(){var t=e(".the-edit-articles.open");t.length>0&&D();if(e(".page-TheEditArchivePage").length){_();if(e(".selectric-archievedBreadCrumb").find("p.label").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")){var n=e(".selectric-archievedBreadCrumb .selectricScroll ul li:eq( 1 )").text();e(".selectric-archievedBreadCrumb").find("p.label").html(n)}}}var i=4,s=9,o="";return e.fn.reOrder=function(t){var n=e("#page").attr("data-rown");return this.each(function(){if(t){for(var r=0;r<t.length;r++)e(".page-TheEditArchivePage").length?t[r]=e('li[class="the-edit-article pos'+t[r]+'"]'):t[r]=e('.open li[class="the-edit-article pos'+t[r]+'"]');e(this).empty();for(var r=0;r<t.length;r++)r%n===0&&r!=0&&e(this).append('<li class="column-break"></li>'),e(this).append(t[r])}})},n.registerHelper("each_upto",function(t,n,r){if(e(".page-TheEditArchivePage").length)var i=e(".the-edit-archive-load-more");else var i=e("#"+o+" .the-edit-articles-load-more");if(!t||t.length==0)return r.inverse(this);var u=parseInt(i.attr("data-page")),a=s*u;if(e(".page-TheEditArchivePage").length)var f=a;else var f=n+a;var l=[];(f>t.length||t.length<=s||t.length==0)&&i.addClass("hide");for(var c=0;c<f&&c<t.length;++c)l.push(r.fn(t[c]));return l.join("")}),{load:function(){H(),d(),B()}}});
