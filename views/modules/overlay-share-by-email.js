define(["jquery","overlay","formEndpointValidation","ajaxConfig","ajaxLoader","formValidation"],function(e,t,n,r,i,s){function v(){u.on("change",function(){b(),y(f,g)}),p.on("click tap",w),n.newInstance(o,m),e(".social-overlay-icon a").on("mouseover",function(){e(this).addClass("_active")}).on("mouseout",function(){e(this).removeClass("_active")})}function m(e){return t.close("#share-by-email-overlay"),E(),e}function g(){return e(this).closest(".accordion-item").hasClass("_open")}function y(e,t){t?e.attr("required","required"):(e.removeAttr("required"),e.removeClass("error"),e.next().remove())}function b(){a.click()}function w(){var t=e(this).attr("data-socialTitle"),n=e(this).attr("data-socialDescription"),r=e(this).attr("data-socialUrl");t&&(t=t.replace("&","and")),n&&(n=n.replace("&","and"),n=n.replace(" ,",","),n=e.trim(n)),t&&n?window.location="mailto:?body="+n+", "+r+"&subject="+t:t?window.location="mailto:?body="+t+", "+r+"&subject="+t:n?window.location="mailto:?body="+n+", "+r+"&subject=Gucci product":window.location="mailto:?body="+r+"&subject=Gucci product"}function E(){e('#share-by-email-overlay-form input[name="recipientName1"]').val(""),e('#share-by-email-overlay-form input[name="recipientEmail1"]').val(""),e('#share-by-email-overlay-form input[name="recipientName2"]').val(""),e('#share-by-email-overlay-form input[name="recipientEmail2"]').val(""),e('#share-by-email-overlay-form input[name="recipientName3"]').val(""),e('#share-by-email-overlay-form input[name="recipientEmail3"]').val(""),e('#share-by-email-overlay-form textarea[name="comment"]').val("")}var o=e("#share-by-email-overlay-form"),u=e("#share-by-email-send-more-friends"),a=e(".share-by-email-send-more-friends-accordion-button"),f=e(".share-by-email-overlay-form-container.accordion-drawer input"),l=e(document).find("title").text(),c=window.location.href,h=e("#top-right-share"),p=e(".share-email"),d=e(".share-by-email-overlay");return{load:function(){v()}}});