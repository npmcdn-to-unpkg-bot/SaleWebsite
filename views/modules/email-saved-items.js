define(["jquery","ajaxConfig","overlay","formEndpointValidation","os"],function(e,t,n,r,i){function a(){o.prop("action",s),r.newInstance(o,f)}function f(e){return n.close("#email-overlay"),e}function l(){u&&e(".email-overlay-form-input",e("#email-overlay")).is(":focus")&&o.submit()}function c(){e(".email-overlay-form-send-button",e("#email-overlay")).bind("click touchend",l)}var s=t.getRemoteService("SAVED-ITEMS-EMAIL-ENDPOINT"),o=e(".email-overlay-form"),u=i.isIOSDevice;return{load:function(){a(),c()}}});