define(["jquery","ajaxConfig"],function(e,t){function l(){e(n).on("submit",h),e(r).on("click",h)}function c(e){var t=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;return t.test(e)}function h(t){t.preventDefault(),f.removeClass("error"),e(i).text("");if(!f.val()||!c(f.val()))return f.trigger("focus"),f.addClass("error"),e(i).text("Field is not a valid email"),!1;var r={};return e(".unsubscribe input:checked")&&e(".unsubscribe input").each(function(t){e(this).is(":checked")||(r[e(this).attr("name")]="on")}),r.email=f.val(),r.CSRFToken=hybris.CSRFToken,e.ajax({url:a,type:"POST",data:r,dataType:"json"}).done(function(e){p(r.email)}).fail(function(){p(r.email)}),f.trigger("blur"),e(n).addClass(o),setTimeout(function(){e(s).addClass(u)},600),!0}function p(e){dataLayer.push({event:"newsletterUnsubscribe",email:e})}var n=".unsubscribe form",r=".button-unsubscribe",i=".error-message",s=".unsubscribe-successful",o="_hide",u="_show",a=t.getRemoteService("UNSUBSCRIBE"),f=e("#unsubscribe-newsletter-email",n);return{load:function(){l()}}});
