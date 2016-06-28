define(["jquery"], function() {
    function r(e) {
        var n, r, i, s = function(e) {
            e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var t = new RegExp("[\\?&]" + e + "=([^&#]*)"),
                n = t.exec(location.search);
            return n === null ? "" : decodeURIComponent(n[1].replace(/\+/g, " "))
        };
        return r = s("scenario"), i = e, jQuery.trim(r) !== "" && (i = e + "-" + r.toUpperCase(), t[i] !== undefined && (e = i)), n = t[e], n
    }
    var e = "POST",
        t = {
            "WALLET-MAKE-PRIMARY-CC": "/_ui/responsive/common/ajax/account/wallet-set-primary.json",
            "ADDRESS-BOOK-MAKE-PRIMARY": "/_ui/responsive/common/ajax/account/address-book-set-primary.json",
            "WALLET-DELETE-CARD-CC": "/_ui/responsive/common/ajax/account/wallet-delete.json",
            "ADDRESS-BOOK-DELETE-CARD": "/_ui/responsive/common/ajax/account/address-book-delete.json",
            "CREATE-ACCOUNT-ENDPOINT": "/_ui/responsive/common/ajax/create-account/create-account-form-ok.json",
            "RECOGNIZED-EMAIL-ENDPOINT-RECOGNIZED": "/_ui/responsive/common/ajax/recognized-email/recognized-email-form-recognized-ok.json",
            "LOOKS-DETAIL": "/_ui/responsive/common/ajax/looks-detail-items.json",
            "PRODUCT-TILES-GRID": "/_ui/responsive/common/ajax/product-tiles-grid.json",
            "PRODUCT-TILES-GRID-2": "/_ui/responsive/common/ajax/product-tiles-grid-2.json",
            "PRODUCT-TILES-GRID-3": "/_ui/responsive/common/ajax/product-tiles-grid-3.json",
            "PRODUCT-TILES-GRID-RESET": "/_ui/responsive/common/ajax/product-tiles-grid-reset.json",
            "SEARCH-RESULTS-GRID": "/_ui/responsive/common/ajax/search-results-grid.json",
            "SEARCH-RESULTS-GRID-REST": "/_ui/responsive/common/ajax/search-results-grid-rest.json",
            "LOOKS-GRID-ITEM": "/_ui/responsive/common/ajax/looks-grid-item.json",
            "SEARCH-LOOKS-GRID": "/_ui/responsive/common/ajax/search-looks-grid.json",
            "SEARCH-LOOKS-GRID-REST": "/_ui/responsive/common/ajax/search-looks-grid-rest.json",
            "ZIP-CODE-ERROR": "/_ui/responsive/common/ajax/zip-code-error.json",
            "SHOPPING-BAG": "/_ui/responsive/common/ajax/shopping-bag.json",
            "SHOPPING-BAG-PRODUCT": "/_ui/responsive/common/ajax/shopping-bag-item.json",
            "SHOPPING-BAG-SAVE-ITEM-ENDPOINT": "/_ui/responsive/common/ajax/shopping-bag-save-item.json",
            "SHOPPING-BAG-REMOVE-ITEM-ENDPOINT": "/_ui/responsive/common/ajax/shopping-bag-remove-item.json",
            "SHOP-THE-LOOK": "/_ui/responsive/common/ajax/shop-the-look-products.json",
            "SHOP-THE-LOOK-SINGLE-LOOK": "/_ui/responsive/common/shop-the-look/shop-the-look-single-look.json",
            "SHOP-THE-LOOK-SINGLE-LOOK-5256": "/_ui/responsive/common/shop-the-look/shop-the-look-single-look-5256.json",
            "SHOP-THE-LOOK-SINGLE-LOOK-5257": "/_ui/responsive/common/shop-the-look/shop-the-look-single-look-5257.json",
            "SHOP-THE-LOOK-SINGLE-LOOK-5258": "/_ui/responsive/common/shop-the-look/shop-the-look-single-look-5258.json",
            "SHOP-THE-LOOK-SINGLE-LOOK-5259": "/_ui/responsive/common/shop-the-look/shop-the-look-single-look-5259.json",
            "SHOP-THE-LOOK-STYLE-338961BNC001000": "/_ui/responsive/common/shop-the-look/shop-the-look-related-styles-338961BNC001000.json",
            "SHOP-THE-LOOK-STYLE-338961BNC001001": "/_ui/responsive/common/shop-the-look/shop-the-look-related-styles-338961BNC001001.json",
            "SHOP-THE-LOOK-STYLE-338961BNC001002": "/_ui/responsive/common/shop-the-look/shop-the-look-related-styles-338961BNC001002.json",
            "SHOP-THE-LOOK-STYLE-338961BNC001003": "/_ui/responsive/common/shop-the-look/shop-the-look-related-styles-338961BNC001003.json",
            "SHOP-THE-LOOK-STYLE-338961BNC001004": "/_ui/responsive/common/shop-the-look/shop-the-look-related-styles-338961BNC001004.json",
            "CHECKOUT-LOGIN": "/_ui/responsive/common/ajax/checkout-login-customer.json",
            "CHECKOUT-LOGIN-GUEST": "/_ui/responsive/common/ajax/checkout-login-guest.json",
            "CHECKOUT-SHIPPING-SAVED-ADDRESS": "/_ui/responsive/common/ajax/checkout-shipping-saved-validated-address.json",
            "CHECKOUT-SHIPPING-LOAD-ADDRESS": "/_ui/responsive/common/ajax/checkout-shipping-load-address.json",
            "CHECKOUT-SHIPPING-NEAR-ADDRESS": "/_ui/responsive/common/ajax/checkout-shipping-near-address.json",
            "CHECKOUT-PAYMENT-SAVED-ADDRESS-BILLING-CREDIT-CARD": "/_ui/responsive/common/ajax/checkout-payment-saved-address.json",
            "CHECKOUT-PAYMENT-SAVED-CREDIT-CARD": "/_ui/responsive/common/ajax/checkout-payment-saved-credit-card.json",
            "CHECKOUT-PAYMENT-SAVED-PREPAID-CARD": "/_ui/responsive/common/ajax/checkout-payment-saved-prepaid-card.json",
            "CHECKOUT-PAYMENT-SAVED-ADDRESS-BILLING-PREPAID-CARD": "/_ui/responsive/common/ajax/checkout-payment-saved-address-prepaid-card.json",
            "CHECKOUT-PAYMENT-SAVED-ADDRESS-BILLING-TO-BE-DEFINED": "/_ui/responsive/common/ajax/checkout-payment-saved-address-to-be-defined.json",
            "CHECKOUT-PAYMENT-LOADED-CREDIT-CARD": "/_ui/responsive/common/ajax/checkout-payment-loaded-credit-card.json",
            "CHECKOUT-GIFT-SAVED": "/_ui/responsive/common/ajax/checkout-gift-saved.json",
            "STORE-LOCATOR-DATA-RESPONSE": "/_ui/responsive/common/ajax/store_locator_data_response.json",
            "STORE-LOCATOR-EMPTY-RESPONSE": "/_ui/responsive/common/ajax/store_locator_empty_response.json",
            CHECKOUT: "/_ui/responsive/common/ajax/checkout/scenario-01.json",
            "CHECKOUT-SHIPPING-METHODS": "/_ui/responsive/common/ajax/checkout/shipping-methods.json",
            CHECKOUT_PAYMENT_FORM_FIELDS: "/_ui/responsive/common/ajax/checkout/checkout-bill-to-address.json",
            "CANCEL-ORDER-ENDPOINT": "/_ui/responsive/common/ajax/orders/cancel-order-ok.json",
            "CANCEL-ITEM-ENDPOINT": "/_ui/responsive/common/ajax/orders/cancel-item-ok.json",
            "RETURN-ITEM-ENDPOINT": "/_ui/responsive/common/ajax/orders/return-item-ok.json",
            "ACCOUNT-LANDING-ENDPOINT": "/_ui/responsive/common/ajax/account/al-hero-ok.json",
            "CHANGE-PASSWORD-ENDPOINT": "/_ui/responsive/common/ajax/account/change-password-form-ok.json",
            "CHANGE-EMAIL-ENDPOINT": "/_ui/responsive/common/ajax/account/change-email-form-ok.json",
            "DELETE-ACCOUNT-ENDPOINT": "/_ui/responsive/common/ajax/account/delete-account-form-ok.json",
            "SIGN-IN-ENDPOINT": "/_ui/responsive/common/ajax/account/sign-in-ok.json",
            "CREATE-ACCOUNT-ENDPOINT-RECOGNIZED": "/_ui/responsive/common/ajax/create-account/create-account-form-recognized-ok.json",
            "FIND-IN-STORE-CONTACT-ENDPOINT": "/_ui/responsive/common/ajax/find-in-store-contact-ok.json",
            "HEADER-MY-ACCOUNT-MENU": "/_ui/responsive/common/ajax/header-my-account-menu.json",
            "UNACCEPTED-ORDER": "/_ui/responsive/common/ajax/checkout/unaccepted-order.json",
            "THANK-YOU-NEWSLETTER": "/_ui/responsive/common/ajax/newsletter/newsletter-signup-optional-ok.json",
            "SIGN-UP-UPDATES": "/_ui/responsive/common/ajax/newsletter/newsletter-signup-ok.json",
            "SAVED-ITEMS-EMAIL-ENDPOINT": "/_ui/responsive/common/ajax/saved-items/saved-items-email-ok.json",
            "SAVED-ITEMS-SAVE-ENDPOINT": "/_ui/responsive/common/ajax/saved-items/saved-items-save-item-ok.json",
            "SAVED-ITEMS-REMOVE-ENDPOINT": "/_ui/responsive/common/ajax/saved-items/saved-items-remove.json",
            "WALLET-CREDIT-CARD-CREATE": "/_ui/responsive/common/ajax/account/wallet-create-ok.json",
            "WALLET-CREDIT-CARD-UPDATE": "/_ui/responsive/common/ajax/account/wallet-update-ok.json",
            "SCHEDULE-APPOINTMENT-ENDPOINT": "/_ui/responsive/common/ajax/contact-us/schedule-appointment-ok.json",
            "ADDRESS-BOOK-CARD-CREATE": "/_ui/responsive/common/ajax/account/address-book-create-ok.json",
            "ADDRESS-BOOK-CARD-UPDATE": "/_ui/responsive/common/ajax/account/address-book-update-ok.json",
            "FORGOT-PASSWORD-ENDPOINT": "/_ui/responsive/common/ajax/account/forgot-password-ok.json",
            "SCHEDULE-CALL-ENDPOINT": "/_ui/responsive/common/ajax/contact-us/schedule-appointment-ok.json",
            "CALL-BACK-ENDPOINT": "/_ui/responsive/common/ajax/contact-us/call-back-ok.json",
            "EMAIL-US-ENDPOINT": "/_ui/responsive/common/ajax/contact-us/contact-us-ok.json",
            "CHANGE-SIZE-ENDPOINT": "/_ui/responsive/common/ajax/product-detail-size-changed.json",
            "ARTICLES-LIST": "_ui/responsive/common/ajax/the-edit/landing-page.json",
            "ARTICLES-ARCHIVE": "_ui/responsive/common/ajax/the-edit/archive-page.json"
        },
        n = {
            "CHECKOUT-SCENARIO-01": "/_ui/responsive/common/ajax/checkout/scenario-01.json",
            "CHECKOUT-SCENARIO-01-CC01": "/_ui/responsive/common/ajax/checkout/scenario-01-cc01.json",
            "CHECKOUT-SCENARIO-01-CC02": "/_ui/responsive/common/ajax/checkout/scenario-01-cc02.json",
            "CHECKOUT-SCENARIO-01-CC03": "/_ui/responsive/common/ajax/checkout/scenario-01-cc03.json",
            "CHECKOUT-SCENARIO-01-CC04": "/_ui/responsive/common/ajax/checkout/scenario-01-cc04.json",
            "CHECKOUT-SCENARIO-01-CC05": "/_ui/responsive/common/ajax/checkout/scenario-01-cc05.json",
            "CHECKOUT-SCENARIO-02": "/_ui/responsive/common/ajax/checkout/scenario-02.json",
            "CHECKOUT-SCENARIO-02-CC01": "/_ui/responsive/common/ajax/checkout/scenario-02-cc01.json",
            "CHECKOUT-SCENARIO-02-CC02": "/_ui/responsive/common/ajax/checkout/scenario-02-cc02.json",
            "CHECKOUT-SCENARIO-03": "/_ui/responsive/common/ajax/checkout/scenario-03.json",
            "CHECKOUT-SCENARIO-01-EU-IT": "/_ui/responsive/common/ajax/checkout/scenario-01-eu-it.json",
            "CHECKOUT-SCENARIO-01-EU-IT-CC01": "/_ui/responsive/common/ajax/checkout/scenario-01-eu-it-cc01.json",
            "CHECKOUT-SCENARIO-02-EU-IT": "/_ui/responsive/common/ajax/checkout/scenario-02-eu-it.json",
            "CHECKOUT-SCENARIO-02-EU-IT-CC01": "/_ui/responsive/common/ajax/checkout/scenario-02-eu-it-cc01.json",
            "CHECKOUT-SCENARIO-01-EU-NO-IT": "/_ui/responsive/common/ajax/checkout/scenario-01-eu-no-it.json",
            "CHECKOUT-SCENARIO-01-EU-NO-IT-CC01": "/_ui/responsive/common/ajax/checkout/scenario-01-eu-no-it-cc01.json",
            "CHECKOUT-SCENARIO-02-EU-NO-IT": "/_ui/responsive/common/ajax/checkout/scenario-02-eu-no-it.json",
            "CHECKOUT-SCENARIO-02-EU-NO-IT-CC01": "/_ui/responsive/common/ajax/checkout/scenario-02-eu-no-it-cc01.json",
            "CHECKOUT-SHIPPING-SEARCH-STORE-DATA": "/_ui/responsive/common/ajax/checkout-search-store_data_response.json",
            "ACCOUNT-LANDING-ENDPOINT-ERROR": "/_ui/responsive/common/ajax/account/al-hero-error.json",
            "CHANGE-PASSWORD-ENDPOINT-ERROR": "/_ui/responsive/common/ajax/account/change-password-form-error.json",
            "CHANGE-EMAIL-ENDPOINT-ERROR": "/_ui/responsive/common/ajax/account/change-email-form-error.json",
            "DELETE-ACCOUNT-ENDPOINT-ERROR": "/_ui/responsive/common/ajax/account/delete-account-form-error.json",
            "CREATE-ACCOUNT-ENDPOINT-ERROR": "/_ui/responsive/common/ajax/create-account/create-account-form-error.json",
            "CREATE-ACCOUNT-ENDPOINT-RECOGNIZED-ERROR": "/_ui/responsive/common/ajax/create-account/create-account-form-recognized-error.json",
            "RECOGNIZED-EMAIL-ENDPOINT-RECOGNIZED-ERROR": "/_ui/responsive/common/ajax/recognized-email/recognized-email-form-recognized-error.json",
            "SIGN-IN-ENDPOINT-ERROR": "/_ui/responsive/common/ajax/account/sign-in-error.json",
            "FIND-IN-STORE-CONTACT-ENDPOINT-ERROR": "/_ui/responsive/common/ajax/find-in-store-contact-error.json",
            "SAVED-ITEMS-EMAIL-ENDPOINT-ERROR": "/_ui/responsive/common/ajax/saved-items/saved-items-email-error.json",
            "SHOPPING-BAG-SAVE-ITEM-ENDPOINT-ERROR": "/_ui/responsive/common/ajax/shopping-bag-save-item-error.json",
            "SCHEDULE-APPOINTMENT-ENDPOINT-ERROR": "/_ui/responsive/common/ajax/contact-us/schedule-appointment-error.json",
            "SHOPPING-BAG-ERROR": "/_ui/responsive/common/ajax/shopping-bag-error.json",
            "SHOPPING-BAG-PRODUCT-ERROR": "/_ui/responsive/common/ajax/shopping-bag-item-error.json",
            "ADDRESS-BOOK-CARD-CREATE-ERROR": "/_ui/responsive/common/ajax/account/address-book-create-error.json",
            "ADDRESS-BOOK-CARD-CREATE-ADDRESS-ERROR": "/_ui/responsive/common/ajax/account/address-book-create-address-error.json",
            "ADDRESS-BOOK-CARD-CREATE-EU-OK": "/_ui/responsive/common/ajax/account/address-book-create-eu-ok.json",
            "ADDRESS-BOOK-CARD-CREATE-EU-ERROR": "/_ui/responsive/common/ajax/account/address-book-create-eu-error.json",
            "ADDRESS-BOOK-CARD-CREATE-PRIMARY-OK": "/_ui/responsive/common/ajax/account/address-book-create-primary-ok.json",
            "ADDRESS-BOOK-CARD-UPDATE-ERROR": "/_ui/responsive/common/ajax/account/address-book-update-error.json",
            "ADDRESS-BOOK-CARD-UPDATE-ADDRESS-ERROR": "/_ui/responsive/common/ajax/account/address-book-update-address-error.json",
            "ADDRESS-BOOK-CARD-UPDATE-EU-OK": "/_ui/responsive/common/ajax/account/address-book-update-eu-ok.json",
            "ADDRESS-BOOK-CARD-UPDATE-EU-ERROR": "/_ui/responsive/common/ajax/account/address-book-update-eu-error.json",
            "ADDRESS-BOOK-CARD-UPDATE-PRIMARY-OK": "/_ui/responsive/common/ajax/account/address-book-update-primary-ok.json",
            "ADDRESS-BOOK-MAKE-PRIMARY-ERROR": "/_ui/responsive/common/ajax/account/address-book-set-primary.json",
            "ADDRESS-BOOK-MAKE-PRIMARY-ADDRESS-ERROR": "/_ui/responsive/common/ajax/account/address-book-set-primary.json",
            "ADDRESS-BOOK-MAKE-PRIMARY-EU-OK": "/_ui/responsive/common/ajax/account/address-book-set-primary.json",
            "ADDRESS-BOOK-MAKE-PRIMARY-EU-ERROR": "/_ui/responsive/common/ajax/account/address-book-set-primary.json",
            "ADDRESS-BOOK-MAKE-PRIMARY-PRIMARY-OK": "/_ui/responsive/common/ajax/account/address-book-set-primary.json",
            "WALLET-CREDIT-CARD-CREATE-ERROR": "/_ui/responsive/common/ajax/account/wallet-create-error.json",
            "WALLET-CREDIT-CARD-CREATE-EU-OK": "/_ui/responsive/common/ajax/account/wallet-create-eu-ok.json",
            "WALLET-CREDIT-CARD-CREATE-EU-ERROR": "/_ui/responsive/common/ajax/account/wallet-create-eu-error.json",
            "WALLET-CREDIT-CARD-UPDATE-ERROR": "/_ui/responsive/common/ajax/account/wallet-update-error.json",
            "WALLET-CREDIT-CARD-UPDATE-EU-OK": "/_ui/responsive/common/ajax/account/wallet-update-eu-ok.json",
            "WALLET-CREDIT-CARD-UPDATE-EU-ERROR": "/_ui/responsive/common/ajax/account/wallet-update-eu-error.json",
            "WALLET-MAKE-PRIMARY-CC-ERROR": "/_ui/responsive/common/ajax/account/wallet-set-primary.json",
            "WALLET-MAKE-PRIMARY-CC-EU-OK": "/_ui/responsive/common/ajax/account/wallet-set-primary.json",
            "WALLET-MAKE-PRIMARY-CC-EU-ERROR": "/_ui/responsive/common/ajax/account/wallet-set-primary.json",
            "FORGOT-PASSWORD-ENDPOINT-ERROR": "/_ui/responsive/common/ajax/account/forgot-password-error.json",
            CHECKOUT_PAYMENT_FORM_FIELDS_ES: "/_ui/responsive/common/ajax/checkout/checkout-bill-to-address-es.json",
            CHECKOUT_PAYMENT_FORM_FIELDS_IT: "/_ui/responsive/common/ajax/checkout/checkout-bill-to-address-it.json",
            CHECKOUT_PAYMENT_FORM_FIELDS_US: "/_ui/responsive/common/ajax/checkout/checkout-bill-to-address-us.json",
            CHECKOUT_PAYMENT_FORM_FIELDS_JP: "/_ui/responsive/common/ajax/checkout/checkout-bill-to-address-jp.json",
            CHECKOUT_PAYMENT_FORM_FIELDS_FR: "/_ui/responsive/common/ajax/checkout/checkout-bill-to-address-fr.json",
            "SCHEDULE-CALL-ENDPOINT-ERROR": "/_ui/responsive/common/ajax/contact-us/call-back-error.json",
            "CALL-BACK-ENDPOINT-ERROR": "/_ui/responsive/common/ajax/contact-us/call-back-error.json",
            "EMAIL-US-ENDPOINT-ERROR": "/_ui/responsive/common/ajax/contact-us/contact-us-error.json",
            "CANCEL-ORDER-ENDPOINT-ERROR": "/_ui/responsive/common/ajax/orders/cancel-order-error.json",
            "CANCEL-ITEM-ENDPOINT-ERROR": "/_ui/responsive/common/ajax/orders/cancel-item-error.json",
            "RETURN-ITEM-ENDPOINT-ERROR": "/_ui/responsive/common/ajax/orders/return-item-error.json"
        };
    return t = $.extend({}, t, n), t["PRODUCT-DETAIL"] = hybris.contextPath + "/p/ajax/product-detail-price.json", t["LOOKS-DETAIL"] = hybris.contextPath + "/p/ajax/looks-detail-items.json", t["PRODUCT-TILES-GRID"] = hybris.contextPath + "/c/productgrid", t["PRODUCT-TILES-GRID-2"] = hybris.contextPath + "/c/productgrid", t["PRODUCT-TILES-GRID-3"] = hybris.contextPath + "/c/productgrid", t["PRODUCT-TILES-GRID-REST"] = hybris.contextPath + "/c/productgrid", t["SEARCH-RESULTS-GRID"] = hybris.contextPath + "/search/search-results", t["SEARCH-RESULTS-GRID-REST"] = hybris.contextPath + "/search/search-results", t["PRODUCT-DETAIL-SHIPPING"] = hybris.contextPath + "/p/ajax/product-detail-shipping.json", t["LOOKS-GRID-ITEM"] = hybris.contextPath + "/c/looksgrid", t["CHECKOUT-LOGIN-GUEST"] = hybris.contextPath + "/login/checkout/ajax/guest", t["CHECKOUT-LOGIN"] = hybris.contextPath + "/login/checkout/guest/auth", t["CHECKOUT-EMAIL"] = hybris.contextPath + "/checkout/single/update-guest-user-email", t["SHOPPING-BAG"] = hybris.contextPath + "/cart/ajax/shopping-bag-remove-item.json", t["SHOPPING-BAG-SHIPPING"] = hybris.contextPath + "/cart/ajax/shopping-bag-shipping.json", t["SHOPPING-BAG-TAX"] = hybris.contextPath + "/cart/ajax/shopping-bag-tax.json", t["SHOPPING-BAG-CHANGE-QUANTITY"] = hybris.contextPath + "/cart/ajax/shopping-bag-change-quantity.json", t["SHOPPING-BAG-REMOVE_ITEM"] = hybris.contextPath + "/cart/ajax/shopping-bag-remove-item.json", t["SHOPPING-BAG-REMOVE-ITEM-ENDPOINT"] = hybris.contextPath + "/cart/ajax/shopping-bag-remove-item.json", t["SHOPPING-BAG-SAVE-PRODUCT"] = hybris.contextPath + "/cart/ajax/shopping-bag-save-item.json", t["SHOPPING-BAG-PRODUCT"] = hybris.contextPath + "/cart/ajax/shopping-bag-item.json", t.CHECKOUT = hybris.contextPath + "/checkout/single/save-shipping-info", t["CHECKOUT-ENDPOINT"] = hybris.contextPath + "/checkout/single/save-shipping-info", t["PLACEORDER-ENDPOINT"] = hybris.contextPath + "/checkout/single/place-order", t["CHECKOUT-SHIPPING-METHODS"] = hybris.contextPath + "/checkout/single/list-delivery-modes", t["SIGN-IN-ENDPOINT"] = hybris.contextPath + "/ajaxLogin/auth", t.CHECKOUT_PAYMENT_FORM_FIELDS = hybris.contextPath + "/checkout/single/checkout-bill-to-address", t["ACCOUNT-LANDING-ENDPOINT"] = hybris.contextPath + "/my-account/ajaxSave", t["CHANGE-PASSWORD-ENDPOINT"] = hybris.contextPath + "/myaccount-settings/change-password-form-ok.json", t["CHANGE-EMAIL-ENDPOINT"] = hybris.contextPath + "/myaccount-settings/ajax/account/change-email-form-ok.json", t["STORE-LOCATOR-DATA-RESPONSE"] = hybris.contextPath + "/store-finder/ajax/store_locator_data.json", t["ADDRESS-BOOK-CARD-CREATE"] = hybris.contextPath + "/my-account/add-address", t["ADDRESS-BOOK-CARD-UPDATE"] = hybris.contextPath + "/my-account/edit-address", t["ADDRESS-BOOK-CARD-UPDATE-FIELDS"] = hybris.contextPath + "/my-account/edit-address-fields", t["WALLET-MAKE-PRIMARY-CC"] = hybris.contextPath + "/my-account/setprimary-card", t["WALLET-DELETE-CARD-CC"] = hybris.contextPath + "/my-account/setprimary-card", t["ADDRESS-BOOK-MAKE-PRIMARY"] = hybris.contextPath + "/my-account/ajaxMarkPrimaryAddress", t["ADDRESS-BOOK-DELETE-ADDRESS"] = hybris.contextPath + "/my-account/ajaxDeleteAddress", t["SAVED-ITEMS-SAVE-ENDPOINT"] = hybris.contextPath + "/wishlist/ajaxSaveItem", t["SAVED-ITEMS-REMOVE-ENDPOINT"] = hybris.contextPath + "/wishlist/ajaxRemoveItem", t["SAVED-ITEMS-GET-ENDPOINT"] = hybris.contextPath + "/wishlist/ajaxGetItems", t["FORGOT-PASSWORD-ENDPOINT"] = hybris.contextPath + "/login/pw/forgot-password.json", t["CHECKOUT-SHIPPING-SEARCH-STORE-DATA"] = hybris.contextPath + "/store-finder/ajax/find-in-store-detail.json", t["CHECKOUT-SECURE-SHIPPING-SEARCH-STORE-DATA"] = hybris.contextPath + "/store-finder/ajax/secure-find-in-store-detail.json", t["WALLET-CREDIT-CARD-CREATE"] = hybris.contextPath + "/my-account/add-card", t["SHOP-THE-LOOK"] = hybris.contextPath + "/shop-the-look/ajax/", t["SHOP-THE-LOOK-STYLE"] = hybris.contextPath + "/shop-the-look/style/", t["SHOPPING-BAG-SAVE-ITEM-ENDPOINT"] = hybris.contextPath + "/cart/ajax/add", t["DELETE-ACCOUNT-ENDPOINT"] = hybris.contextPath + "/myaccount-settings/ajax/delete-account", t["SIGN-UP-UPDATES"] = hybris.contextPath + "/newsletters/ajax/subscribe", t["THANK-YOU-NEWSLETTER"] = hybris.contextPath + "/newsletters/ajax/update", t["CALL-BACK-ENDPOINT"] = hybris.contextPath + "/ajax/Contact/callback", t["EMAIL-US-ENDPOINT"] = hybris.contextPath + "/ajax/Contact/emailus", t["SHOPPING-BAG-MINI-CART"] = hybris.contextPath + "/cart/ajax/miniCart", t["SAVED-ITEMS-EMAIL-ENDPOINT"] = hybris.contextPath + "/wishlist/ajax/saved-items-email-endpoint.json", t["MY-ACCOUNT-FLYOUT-CONTENT"] = hybris.contextPath + "/view/HeaderMyAccountNavBarCollComponentController?componentUid=HeaderMyAccountBarComponent", t["SAVED-ITEMS-FLYOUT-CONTENT"] = hybris.contextPath + "/view/WishListComponentController?componentUid=WishListComponent", t["UNACCEPTED-ORDER"] = hybris.contextPath + "/ajax/Contact/unaccepted-order", t.UNSUBSCRIBE = hybris.contextPath + "/newsletters/doUnsubscribe", t["SALES-ASSISTANT-SIGN-IN"] = hybris.contextPath + "/assisted-service/login", t["SALES-ASSISTANT-STORES"] = hybris.contextPath + "/assisted-service/stores", t.GET_CSRF_TOKEN = hybris.contextPath + "/csrf", t.GET_CUSTOMER_INFO = hybris.contextPath + "/customer/ajax/basic-info", t.GET_ASSISTANT_USER_INFO = hybris.contextPath + "/assisted-service/ajax/assistant-user", t.GET_RECENTLY_VIEWED_ITEMS = hybris.contextPath + "/view/RecentlyViewedProductComponentController?componentUid=recentlyViewed_Global_ProductComponent", t.SAVE_RECENTLY_VIEWED_PRODUCT = hybris.contextPath + "/product/ajax/saveRecentlyViewedProduct", t["ARTICLES-LIST"] = hybris.contextPath + "/view/IssueContainerComponentController/getArticles", t["ARTICLES-ARCHIVE"] = hybris.contextPath + "/articlecategory/getArticlesForArchive", t.UPDATE_CART_MERGE_ENTRIES = hybris.contextPath + "/cart/ajax/merge", {
        config: function() {
            return t
        },
        mainSubmitMethod: function() {
            return e
        },
        getRemoteService: function(e) {
            return r(e)
        }
    }
});
