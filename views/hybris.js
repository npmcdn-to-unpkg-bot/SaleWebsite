function validateEmail(){var e=$("#countdown-promo-email").val(),t=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;return e!==""&&t.test(e)}function saveEventReminder(e){var t=$(".hero-title .eyebrow"),n=$("#countdown-promo-email").val(),r=$("#eventCode").val(),i=$("#eventSubmitUrl").val();$.get(i,{email:n,eventCode:r},function(n){if(n!="SUCCESS")return $("#reminderErrMessage").html('<span class="eyebrow">Error Setting reminder</span>'),!1;e(),t.show()})}(function(){window.hybris={},hybris.fav={save:function(e,t){var n=$(e);if(n.is("#sign-in-overlay")){$("#header-nav-favorites").is("._active")?n.attr("data-redirect-url",hybris.contextPath+"/wishlist/saved-items").removeAttr("data-save-item"):$("#header-nav-signin").is("._active")&&this.restore(e);return}if(t===undefined)return;var r=n.find("[href=#sign-in-overlay]");if(r.length==1&&t.attr("data-save-item")!==undefined){$("#sign-in-overlay").attr("data-redirect-url",window.location.href).attr("data-save-item",t.attr("data-save-item")),$("#form-create-account").attr("data-redirect-url",window.location.href).attr("data-save-item",t.attr("data-save-item"));if(t.is(".button-wishlist")){var i=t.parents("li.baglist-item-summary");$("#sign-in-overlay").attr("data-shopping-bag",i.data("item-unique-index")),$("#form-create-account").attr("data-shopping-bag",i.data("item-unique-index"))}}},restore:function(e){var t=hybris.contextPath+"/my-account",n=$(e);n.is("#sign-in-overlay, #form-create-account")&&($("#sign-in-overlay").attr("data-redirect-url",t).removeAttr("data-save-item").removeAttr("data-shopping-bag"),$("#form-create-account").removeAttr("data-redirect-url").removeAttr("data-save-item").removeAttr("data-shopping-bag"))},createAccountCB:function(){this.redirect($("#form-create-account"))},signInCB:function(){this.redirect($("#sign-in-overlay"))},redirect:function(e){if(e.attr("data-redirect-url")!==undefined)if(e.attr("data-save-item")===undefined)window.location=e.attr("data-redirect-url");else if(e.attr("data-shopping-bag")!==undefined)$.post(hybris.contextPath+"/wishlist/ajaxSaveItem",{productId:e.attr("data-save-item"),CSRFToken:hybris.CSRFToken},function(){$.get(hybris.contextPath+"/cart/ajax/shopping-bag-remove-item.json",{"unique-entry-number":e.attr("data-shopping-bag"),qty:"0"},function(){window.location=e.attr("data-redirect-url")})});else{var t=e.attr("data-save-item"),n=$("#product-details-selected-size").val();n!=-1&&n!==undefined&&(t=n),$.post(hybris.contextPath+"/wishlist/ajaxSaveItem",{productId:t,CSRFToken:hybris.CSRFToken},function(){window.location=e.attr("data-redirect-url")})}else e.is("#form-create-account")&&(window.location=hybris.contextPath+"/my-account?create=true")}},hybris["hero-countdown"]={bindSubmit:function(e,t,n){e.on("click",function(e){validateEmail()?saveEventReminder(n):$("#incorrectEmail").html('<span class="eyebrow">Incorrect Email</span>'),t(e)})},countDownOnLoad:function(e,t,n){var r=$(".hero-title .eyebrow");$("#displayRemindMeButton").val()=="true"?(e(),t()):n()}}})();
