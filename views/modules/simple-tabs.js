define(["jquery"],function(e){function r(){e(".simple-tabs-tab.selected",t).css("display","block")}function i(r){r.preventDefault();var i=e(this).attr("href"),s=e(".simple-tabs-tab",t),o="selected",u="300";e(this).hasClass("selected")||(e(this).hasClass("simple-tabs-opener")&&(i="#"+e(this).attr("data-simple-tab-open")),e(".simple-tabs-link, .simple-tabs-tab-link",t).removeClass(o),s.fadeOut(u).removeClass(o),e(".simple-tabs-link[href="+i+"]").addClass(o),e(i).delay(u).fadeIn(u,function(){e(i).addClass(o),n="#"+e(".simple-tabs-tab.selected").attr("id")}))}function s(){e("body").on("click",".simple-tabs-opener, .simple-tabs-wrapper .simple-tabs-link, .simple-tabs-wrapper .simple-tabs-tab-link",i)}var t=e(".simple-tabs-wrapper"),n="#"+e(".simple-tabs-tab.selected").attr("id");return{load:function(){s(),r()}}});