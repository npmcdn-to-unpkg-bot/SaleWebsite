define(["jquery","overlay","tooltip"],function(e,t,n){function f(){s.on("click",l),e(".edit-info-link",o).on("click",function(){h(i)}),e(".edit-info-link",e(".may-we-help-email-us-container",r)).on("click",function(){h(u)}),t.onClose(function(e){var t=e.attr("id");if(t==="may-we-help-overlay"||t==="client-services-overlay")i.show(),u.show(),o.hide(),s.removeClass(a)}),e(".tooltip-mwh").on("mouseleave",function(){n.close("#"+e(this).attr("id"))}),e(".may-we-help").on("click",function(n){n.preventDefault(),e("#may-we-help-overlay .simple-tabs-list a").removeClass("selected"),e("#may-we-help-overlay .simple-tabs-list a").first().addClass("selected"),e("#may-we-help-overlay .simple-tabs-tab").hide(),e("#may-we-help-overlay .simple-tabs-tab").first().show(),t.open("#"+r.attr("id"))})}function l(t){var n=e(this);t.preventDefault(),n.hasClass(a)?(o.fadeOut(),s.removeClass(a)):(o.fadeIn(),s.addClass(a))}function c(){e(document).on("formOk",function(e){var t=e.form;t.hasClass("schedule-callback-form")?i.fadeOut():t.hasClass("email-us-form")&&u.fadeOut()})}function h(e){e.delay(400).fadeIn()}var r=e(".may-we-help-overlay"),i=e(".may-we-help-schedule-call-text",r),s=e(".may-we-help-schedule-callback-opener",r),o=e(".may-we-help-schedule-callback-container",r),u=e(".may-we-help-email-us-text",r),a="may-we-help-schedule-callback-opener-active";return{load:function(){f(),c()}}});
