define(["jquery","ajaxLoader"],function(e,t){function r(n){var r,i=e(n.FILTERS),s;i.on("click",function(o){o.preventDefault(),s=e(this),r=s.data("filter"),i.removeClass("selected"),s.addClass("selected"),t.loadJson(r,n.DATA_LOAD_CONTAINER,s,n.DATA_LOAD_REMOVE_CLASS)})}function i(){r(n)}var n={FILTERS:".capsule-products-grid-filter-link",DATA_LOAD_CONTAINER:"capsule-products-grid-tiles-load-content",DATA_LOAD_REMOVE_CLASS:"product-tiles-grid-item"};return{load:i}});