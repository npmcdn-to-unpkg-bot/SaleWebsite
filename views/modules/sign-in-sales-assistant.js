define(["jquery","select","formValidation","ajaxConfig","ajaxLoader"],function(e,t,n,r,i){function f(){a.selectric("init")}function l(){n.newFormValidate(e(s)),e(".sign-in-sa-content input").bind("change",function(){e(this).val()!==undefined&&e(this).val()!==""&&e(this).removeClass("error")}),e(o).bind("change",h),e(o).change(),e(".full-ssa-logged-out-cta").bind("click",c)}function c(){e(this).closest("form").submit()}function h(){var t={email:e(this).val()},n=i.endPointAccess(u,t,"POST");n.done(function(t){var n=t;a.find("option").not('[value=""]').remove();if(n.userType=="ssa"&&n.stores!==undefined&&n.stores.length>0){var r=n.stores.length==1;n.stores.map(function(t){e("<option>",{value:t.storeCode,selected:r}).text(t.name).appendTo(a)})}a.selectric("init").selectric("refresh")}),n.fail(function(e,t,n){console.error("The following error occurred: "+t,n)})}var s="#loginSAForm",o=".sign-in-form input[name=email]",u="SALES-ASSISTANT-STORES",a=e("#sales-assistant-stores");return{load:function(){f(),l()}}});