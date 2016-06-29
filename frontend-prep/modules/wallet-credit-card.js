define(["jquery","viewport","breakpoints","ajaxLoader","formEndpointValidation","ajaxConfig","handlebars","overlay","tooltip","validatorForm","creditCardValidation","os"],function(e,t,n,r,i,s,o,u,a,f,l,c){function ln(e){an=e}function cn(){sn=e(this).val(),sn==="new"?At.removeClass(X):At.addClass(X)}function hn(){var t=e("option:selected",this).attr("data-hasstardateval");on=e(this).val(),t==="true"?(Mt.removeClass(X),Jt.removeClass(X),Xt.removeClass(W)):(Mt.addClass(X),Jt.addClass(X),Xt.addClass(W))}function pn(){e(this).is(":checked")?Dt.removeClass(X):Dt.addClass(X)}function dn(){e(this).is(":checked")?(Ht.removeClass(X),Bt.removeClass(X),jt.removeClass(X)):(Ht.addClass(X),Bt.addClass(X),jt.addClass(X))}function vn(){un=e("option:selected",this).attr("data-country-code"),un==="US"?(qt.removeClass(X),Rt.addClass(X),Ut.removeClass(X),zt.addClass(X),It.removeClass(X),Qt.removeClass(z)):un==="IT"?(qt.addClass(X),Rt.removeClass(X),Ut.addClass(X),zt.removeClass(X),It.removeClass(X),Qt.removeClass(z)):(qt.addClass(X),Rt.addClass(X),Ut.addClass(X),zt.addClass(X),It.addClass(X),Qt.addClass(z))}function mn(e){var t;switch(e.status){case"ok":t=Nt.attr("action"),u.close(pt),setTimeout(function(){switch(t){case ct:e.data["payment-credit-card-id"]=Math.ceil(Math.random()*1e4),an.addNewCreditCardCard(e.data);break;case ht:an.updateCreditCardCard(fn.paymentCreditCardId,e.data)}Nt.prop("action",ct)},500);break;case"validationError":return!1}}function gn(t){var n,r;Nt.prop("action",ht),Ct.addClass(X),kt.removeClass(X),Gt.addClass(X),Yt.removeClass(X),Zt.removeClass(X),Wt.addClass(X),Vt.addClass(X),$t.addClass(X),Jt.addClass(X),Kt.removeClass(X),fn=t.data(),e.each(fn,function(t,i){n=t.replace(/\W+/g,"-").replace(/([a-z\d])([A-Z])/g,"$1-$2").toLowerCase(),n=n.replace("line-one","line-1").replace("line-two","line-2"),r=Nt.find("[name="+n+"]"),n.indexOf("payment-billing")===-1&&(!r.is("input")||r.attr("type")!=="text"&&r.attr("type")!=="tel"?r.is("input")&&r.attr("type")==="checkbox"?(r.prop("checked",i),r.change()):r.is("select")?r.each(function(){typeof i=="string"?(e(this).find('option[value="'+i+'"]').prop("selected",!0),e(this).find('option[value="'+i.toLowerCase()+'"]').prop("selected",!0),e(this).find('option[value="'+i.toUpperCase()+'"]').prop("selected",!0)):e(this).find('option[value="'+i+'"]').prop("selected",!0),e(this).change(),e(this).selectric("refresh")}):r.is("input")&&r.attr("type")==="radio"&&e("input[name="+n+"][value="+i+"]").prop("checked",!0):r.val(i))}),Kt.find(".account-data-card-password").html(fn.paymentCreditCardNumber),Kt.find(".account-data-card-logo").removeClass(function(e,t){return t.replace("account-data-card-logo","")}).addClass("account-data-card-logo-"+fn.paymentCreditCardType),Kt.find(".account-data-card-logo").html(fn.paymentCreditCardBrand),fn.paymentCreditCardStartMonth!==undefined&&fn.paymentCreditCardStartMonth!==""?Mt.removeClass(X):Mt.addClass(X)}function yn(){Ot.selectric({optionsItemBuilder:function(t,n){var r={},i=e("script#wallet-credit-card-credit-item-dropdown").html(),s=o.compile(i);return r.class=n.attr("data-select-card-class"),r.text=t.text,s(r)},onInit:function(){var t={},n=e(this).find(":selected"),r=e(this).parent().parent().find(".selectric").find(".label"),i=e("script#wallet-credit-card-credit-item-dropdown").html(),s=o.compile(i);t.text=n.text(),t.class=n.attr("data-select-card-class"),n.val()==="0"?e(r).addClass("gold"):e(r).removeClass("gold"),r.html(s(t))},onClose:function(){var t={},n=e(this).find(":selected"),r=e(this).parent().parent().find(".selectric").find(".label"),i=e("script#wallet-credit-card-credit-item-dropdown").html(),s=o.compile(i);t.text=n.text(),t.class=n.attr("data-select-card-class"),n.val()==="0"?e(r).addClass("gold"):e(r).removeClass("gold"),r.html(s(t))}}),c.isIE()&&e(".start-date-expiration-month, .start-date-expiration-year, .countries-only-dropdown, .title-dropdown, .address-states-us, .address-states-it, .countries-dropdown",rn).selectric("init")}function bn(e){e.find("input[type=text]").removeClass("error").val(""),e.find("input[type=tel]").removeClass("error").val(""),e.find(".selectric").removeClass("error").val("0"),e.find(".selectricWrapper").removeClass("error"),e.find("select").removeClass("error").val("0"),e.find(".error-text").remove(),_t.prop("checked",!1),_t.change(),Pt.prop("checked",!1),Pt.change()}function wn(){e(".selectricWrapper",Nt).filter(".selectricOpen").find("select").each(function(){e(this).selectric("close")})}function En(){var t=e(this),n=t.hasClass("error");n&&a.close(t.data("tooltip"))}function Sn(){var t=e(this),n=t.hasClass("error"),r=e("html").hasClass("iOS");wn(),n&&(a.open(t.data("tooltip")),r&&e("header").css({position:"absolute"}))}function xn(){}function Tn(){Lt.bind("change",cn),en.on("focus",Sn),en.on("blur",En),rn.on("click",function(){wn()}),Gt.on("click touchstart",Cn),tn.on("click touchstart",_n),Ot.bind("change",jn)}function Nn(){u.onClose(function(t){t.attr("id")===P&&(bn(Nt),e(".global-errors-wrapper").hide(),e("select",Nt).each(function(){e(this).find('option[value="0"]').prop("selected",!0),e(this).change(),e(this).selectric("refresh")}),Wt.removeClass(X),Vt.removeClass(X),$t.removeClass(X),Kt.addClass(X),Lt.length&&(Lt.first().prop("checked",!0),Lt.first().change()),Nt.prop("action",ct),Ct.removeClass(X),kt.addClass(X),Gt.removeClass(X),Yt.addClass(X),Zt.addClass(X))}),Tn(),yn(),Ct.removeClass(X),kt.addClass(X),e("select",Nt).on("selectric-before-open",function(){wn()}),Nt.prop("action",ct),tn.length==1?nn.show():nn.hide(),Dn()}function Cn(t,n){var i,s={},a=[];if(!l.validate())return!1;t!=undefined&&t.preventDefault(),n===undefined?e('.add-new-payment-address-form-renamed input[name="payment-billing-ignore-validation"]').val("false"):e('.add-new-payment-address-form-renamed input[name="payment-billing-ignore-validation"]').val(n),An(),a={},a.address=e("#add-new-payment-address"),e(".input-text-form").blur(),s=kn(s,a),i=r.endPointAccess(V,s,"POST"),i.done(function(t){var n=t,r={};switch(n.payment.status){case"ok":Ln(n.payment),e("#silentOrderPostForm").submit();break;case"validationError":return r.fieldsInError=n.payment.field_error_messages,r.errorMessages=n.payment.global_error_messages,e.each(a,function(e,t){f.checkThis(t,r)}),f.load(),!1;case"addressError":r.data=n.payment.data,r.possibleAddresses=n.payment.possible_addresses;if(Pn(r.possibleAddresses))Hn(r.possibleAddresses[0],!0);else{var i=e("#checkout-error-billing-address-not-found-overlay").html(),s=o.compile(i);e("#billing-address-not-found-overlay").html(s(r)),Bn(r.data,r.possibleAddresses),u.open("#billing-address-not-found-overlay")}return!1}}),i.fail(function(e,t,n){console.error("The following error occurred: "+t+", "+n)})}function kn(t,n){var i=jQuery.extend({},t),s='[name^="payment-"]',o='[name^="shipping-"]';n.creditcard=e("#credit-card-order"),i["select-corporate-company"]=e("#select-corporate-company").is(":checked"),e("#select-corporate-company").length>0&&e("#select-corporate-company").is(":checked")&&(i["payment-billing-vat-code"]=e("#payment-billing-vat-code").val(),i["payment-billing-company-name"]=e("#payment-billing-company-name").val()),i["payment-billing-address-id"]=e("[name=address-radio]:checked").val();if(i["payment-billing-address-id"]===undefined||i["payment-billing-address-id"]==="new")i=jQuery.extend(i,r.serializeObject(n.address));var u=e("#input-credit-card-number").val(),a;return u.length>5?(a=u.substring(0,u.length-4).replace(/./g,"*"),a+=u.substring(u.length-4,u.length)):a=u.replace(/./g,"*"),i["payment-credit-card-number-masked"]=a,i["payment-credit-card-cvn"]=e("#input-credit-card-code").val(),i["payment-credit-card-cvn-masked"]=e("#input-credit-card-code").val().replace(/./g,"*"),i["payment-save-to-address-book-payment"]=!0,i=jQuery.extend(i,r.serializeObject(n.creditcard.find(s))),i=jQuery.extend(i,r.serializeObject(n.creditcard.find(o))),i}function Ln(t){On(t),e("#sop_merchant_secure_data2").val(e("input[name=payment-credit-card-primary]").is(":checked")),e("#sop_card_type").val(e("#payment-credit-card-type").val()),e("#sop_card_number").val(e("#input-credit-card-number").val()),e("#sop_card_nameOnCard").val(e("#input-credit-card-name").val()),e("#sop_card_cvn").val(e("#input-credit-card-code").val());var n=e("#card_expirationMonth").val();e("#card_expirationMonth").val()<10&&(n="0"+n),n=n+"-"+e("#card_expirationYear").val(),e("#sop_card_expiry_date").val(n)}function An(){e(".checkout-error-messages li").remove(),f.cleansForm(undefined,e("#credit-card-order"))}function On(t){t!=undefined&&t.data!=undefined&&t.data.sopParameters!=undefined&&(e("#silentOrderPostForm .sop-parameters").html(""),jQuery.each(t.data.sopParameters,function(t,n){Mn(e("#silentOrderPostForm .sop-parameters"),t,n)}))}function Mn(e,t,n){e.append('<input type="hidden" name="'+t+'" value="'+n+'" />')}function _n(t){var n=e(t.target);nn.hide(),n.is(":checked")&&n.hasClass("new-address")?nn.show():nn.hide(),e(this).attr("checked","checked"),tn.not(this).removeAttr("checked")}function Dn(){e(".add-card-error-messages li").length>0&&e(".account-data-card-add-cta").click()}function Pn(e){return e!=undefined&&e[0].autoAccept?!0:!1}function Hn(t,n){t!=undefined&&(e.each(t,function(t,n){if(t!=undefined&&n!=undefined){var r=e('[name="'+t+'"]');r.length>0&&(r.is(":text")?r.val(n):r.is("select")&&(r.find('option[value="'+n+'"]').attr("selected",!0),r.selectric("refresh")))}}),n&&Cn(undefined,"true"))}function Bn(t,n){var r=e("[data-use-this-address]"),i=e("[data-use-original-address]"),s=e('[name="suggested-shipping-address"]'),o={};e(n).each(function(){var t=e(this);o[t[0].id]=t[0]}),s.on("click.selection",function(){s.removeClass("_selected"),e(this).addClass("_selected")}),i.data("address",t),i.on("click.use-original-data touchstart",function(e){e.preventDefault(),Cn(undefined,"true")}),r.on("click.use-this-data touchstart",function(e){e.preventDefault();var t=s.filter(":checked").attr("value"),n=o[t];Hn(n,!0)})}function jn(){var t=e("html, body"),n=e("html").hasClass("iOS"),r=e("html").hasClass("iPad");n&&r&&t.stop().animate({scrollTop:0},"500","swing",function(){})}var h="account-data-card-add-credit-form",p="new-payment-title",d="edit-payment-title",v="payment-addres-id",m="adca-form-container-address",g="cards-dropdown",y="adca-credit-form-input-start",b="address-business-address-checkbox",w="adca-address-form-business",E="address-alternative-phone",S="adca-address-form-alt-phone-country",x="adca-address-form-alt-phone",T="adca-address-form-alert-alt-phone",N="address-country",C="adca-address-form-input-state",k="us-state-container",L="it-state-container",A="address-states-us-label",O="address-states-it-label",M="adca-form-save-button",_="adca-form-change-button",D="adca-form-cancel-button",P="account-data-card-add-credit-card-overlay",H="account-data-card-add-overlay-content",B="adca-credit-form-input-type",j="adca-credit-form-input-name",F="adca-credit-form-input-number",I="adca-credit-form-input-security",q="adca-credit-form-input-issuance",R="adca-credit-form-label-edit",U="adca-address-form-input-zip",z="adca-is-zipcode-exist",W="adca-is-issuance-exist",X="adca-hidden",V="WALLET-CREDIT-CARD-CREATE",$="."+h,J="."+p,K="."+d,Q="."+m,G="."+g,Y="."+y,Z="."+b,et="."+w,tt="."+E,nt="."+S,rt="."+x,it="."+T,st="."+N,ot="."+C,ut="."+k,at="."+L,ft="."+A,lt="."+O,ct=s.getRemoteService("WALLET-CREDIT-CARD-CREATE"),ht=s.getRemoteService("WALLET-CREDIT-CARD-UPDATE"),pt="#"+P,dt="."+H,vt="."+M,mt="."+_,gt="."+D,yt="."+B,bt="."+j,wt="."+F,Et="."+I,St="."+q,xt="."+U,Tt="."+R,Nt=e($),Ct=e(J),kt=e(K),Lt=e($+' input:radio[name="'+v+'"]'),At=e(Q,$),Ot=e(G,$),Mt=e(Y,$),_t=e(Z,$),Dt=e(et,$),Pt=e(tt,$),Ht=e(nt,$),Bt=e(rt,$),jt=e(it,$),Ft=e(st,$),It=e(ot,$),qt=e(ut,$),Rt=e(at,$),Ut=e(ft,$),zt=e(lt,$),Wt=e(yt,$),Xt=e(bt,$),Vt=e(wt,$),$t=e(Et,$),Jt=e(St,$),Kt=e(Tt,$),Qt=e(xt,$),Gt=e(vt,$),Yt=e(mt,$),Zt=e(gt,$),en=e("input",Nt),tn=e("input[name=address-radio]",$),nn=e(".adca-form-container-checkout-billing-address",$),rn=e(dt+".add-card"),sn,on,un,an,fn;return{load:Nn(),setData:gn,setAccountCards:ln}});
