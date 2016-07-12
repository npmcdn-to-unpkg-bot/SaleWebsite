define(["jquery","breakpoints","checkout","ajaxLoader","ajaxConfig","os"],function(e,t,n,r,i,s){function H(t){var r=e.trim(t["gifting-gift-message"]),i=e.trim(t["gifting-gift-wrap"]),s=t["gifting-gift-price"],o={},u=!1;r!==""?(L.text(r),o.message=r,u=!0):L.text(C.data("no-message")),i!==""&&(A.attr(b,i),o.wrap=i),s==="true"?O.show():O.hide(),o.removePrice=s,F(),n.setModuleStatus("gifting",u,o,!0)}function B(t){var n=jQuery.extend({},u,{data:t});e(o).data("gifting-data",n)}function j(e){var t=e.fieldsInError["gifting-gift-message"];typeof t!="undefined"?(k.html(t),I()):q()}function F(){N.html("Save Changes")}function I(){C.addClass("gifting-error"),k.show()}function q(){C.removeClass("gifting-error"),k.hide()}function R(){n.goTo("payment")}function U(t){t.preventDefault();var s,o={data:r.serializeObject(e(this))};o=n.collectAllValues(o,"gifting"),o.action="save-giftwrap",i.mainSubmitMethod()==="GET"&&(o=jQuery.param(o)),s=r.endPointAccess(E,o,"POST"),s.done(function(e){var t=e,r={};switch(t.gifting.status){case"ok":B(t.gifting.data),H(t.gifting.data),n.updateOrderDetailsTotals(t.orderDetails),_?(n.closeMe(),K()==0&&R()):(_=!0,R());break;case"validationError":return r.fieldsInError=t.gifting.field_error_messages,j(r),!1}}),s.fail(function(e,t,n){console.error("The following error occurred: "+t,n)})}function z(t){e(v).val(t),M.attr("data-wrap",t)}function W(){var e=parseInt(x.val().length,10),t="placeholder-visible",n=0;e===0?x.addClass(t):x.removeClass(t),n=D-e,n<0&&(n=0),S.attr(y,n),V()}function X(){var t=e("html").hasClass("iOS"),n=e("html").hasClass("mobile"),r=e(window).scrollTop();t&&n&&e(window).scrollTop(r+100)}function V(){P===0&&(P=parseInt(x.height(),10));var e=Math.max(0,Math.ceil(P*.5,10)+10);s.isIE()&&(e-=30),x.css("padding-top",e)}function $(){x.on("keyup",W),x.on("change",W),x.on("focus",X),T.on("submit",U)}function J(){n.isModuleComplete(e("section.payment-module"))&&(F(),_=!0)}function K(){var t=e(".payment-item-info").text(),n=e.trim(t),r=!1;return n.length==0?r=!1:r=!0,r}var o="section.gifting-module",u={data:{}},a=".message-paper",f=".editable-message",l=".summary-message",c=".summary-selected-wrap",h=".summary-price",p=".selected-wrap-indicator",d=".message-error",v="#selected-wrap",m="#checkout-gifting-form",g="#gifting-gift-message",y="data-char",b="data-selectedwrap",w="",E="CHECKOUT",S=e(a),x=e(f),T=e(m),N=T.find('button[type="submit"]'),C=e(g),k=e(d),L=e(l),A=e(c),O=e(h),M=e(p),_=!1,D=parseInt(x.attr("maxlength"),10),P=0;return{load:function(){V(),z(w),$(),J(),W()}}});