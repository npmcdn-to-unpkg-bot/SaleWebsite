define(["jquery","ajaxConfig","addProductShoppingBagFlyout","savedItemsFlyout","savedItems","overlay"],function(e,t,n,r,i,s){function d(t){e.ajax({url:o,type:"POST",dataType:"json",data:{CSRFToken:t}}).done(function(e){n.refreshMiniCart(e.data),pageType=="PRODUCT"&&dataLayer.push({"cart token":e.data.order_token,"cart total":e.data.order_raw_total})}).fail(function(){})}function v(t){e.ajax({url:u,type:"POST",data:{CSRFToken:t},dataType:"html"}).done(function(t){e("li#header-nav-user").replaceWith(t)}).fail(function(){})}function m(t){e.ajax({url:a,type:"POST",data:{CSRFToken:t},dataType:"html"}).done(function(t){e("li#header-nav-favorites").replaceWith(t),r.setFavoritesHeight(),i.fillSavedItems()}).fail(function(){})}function g(t){e.ajax({url:l+"?key="+(new Date).getTime(),type:"GET",dataType:"json"}).done(function(t){e('select[data-populate*="title"]').val(t.titleCode).selectric("refresh"),e('input[data-populate*="first-name"]').val(t.firstName),e('input[data-populate*="last-name"]').val(t.lastName),e('input[data-populate*="email"]').val(t.uid);var n=t.subscribeMailing?"1":"0";dataLayer.push({"user email":t.uid,"user optin":n})}).fail(function(e){})}function y(t){e.ajax({url:h+"?key="+(new Date).getTime(),type:"GET",dataType:"html"}).done(function(t){!t||(s.open("#"+p),e(window).load(function(){e("#"+p+":visible")&&e("body").addClass("overlay-lock")}),e(".merging-basket-overlay-wrapper").html(t),require(["addMergedProductShoppingBag"],function(e){e.bindEvents()}))}).fail(function(){})}function b(){e.ajax({url:c+"?key="+(new Date).getTime(),type:"GET",dataType:"json"}).done(function(t){if(t!==""){var n='<li class="header-nav-group"> <a class="header-nav-item header-nav-link visible-for-standard overlay-open" href="#ssa-logged-in">'+t+" </a>",r='<span class="ssa-mobile">'+t+"</span>";e(".header-ssa-to-display").html(n),e(".header-ssa-display-mobile").html(r),s.load();var i=e(".overlay-ssa-logged-in-title-standard-name");i&&i.text(t)}}).fail(function(){})}function w(t){hybris.CSRFToken=t,e('input[name*="CSRFToken"]').val(t)}var o=t.getRemoteService("SHOPPING-BAG-MINI-CART"),u=t.getRemoteService("MY-ACCOUNT-FLYOUT-CONTENT"),a=t.getRemoteService("SAVED-ITEMS-FLYOUT-CONTENT"),f=t.getRemoteService("GET_CSRF_TOKEN"),l=t.getRemoteService("GET_CUSTOMER_INFO"),c=t.getRemoteService("GET_ASSISTANT_USER_INFO"),h=t.getRemoteService("UPDATE_CART_MERGE_ENTRIES"),p="merging-basket-overlay";return{load:function(){e.ajax({url:f+"?key="+(new Date).getTime(),type:"GET",dataType:"html"}).done(function(e){n.load(),d(e),v(e),m(e),w(e),g(),b(e),y(e)}).fail(function(){})},refreshMiniCart:d}});
