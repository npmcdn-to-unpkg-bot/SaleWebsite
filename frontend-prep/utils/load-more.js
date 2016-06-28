define(["jquery","handlebars","imageLoader","savedItems"],function(e,t,n,r){function s(n){this.$context=n;if(this.$context.hasClass("js_load_more"))return;this.$context.addClass("js_load_more"),this.$buttonWrapper=e(".ajax-loader-link-container",this.$context),this.$button=e(".looks-ajax-loader-link",this.$buttonWrapper),this.targetSelector=this.$context.data("load-more-target"),this.$target=e(this.targetSelector,this.$context),this.endpoint=this.$context.data("load-more"),this.templateSelector=this.$context.data("load-more-template"),this.templateSource=e(this.templateSelector).html(),this.template=t.compile(this.templateSource),this.isLoading=!1,this.bindEvents()}function o(){e('[data-module="loadMore"]').each(function(){new s(e(this))})}var i="";return s.prototype.bindEvents=function(){this.$button.on("click",e.proxy(this.loadMoreHandler,this))},s.prototype.loadMoreHandler=function(t){t.preventDefault();var n=e(this.targetSelector).parents("#page").find(".capsule-ajax-loader-link");n.length>0&&n.addClass("disabled");if(this.isLoading)return;this.isLoading=!0;var r=e.ajax({url:this.endpoint,dataType:"json"});e(t.currentTarget).data("on-success")&&(i=e(t.currentTarget).data("on-success")),r.done(e.proxy(this.loadMoreSuccessHandler,this)),r.fail(e.proxy(this.loadMoreFailHandler,this))},s.prototype.loadMoreSuccessHandler=function(e){var t=e.looks,s=t.items,o="",u=this.template;this.updateButton(t),s.forEach(function(e){i!==""&&e.genre!==i&&i!=="all"&&(e.hideGenre="_hide"),o+=u(e)}),this.$target.append(o),this.$context.trigger("load-more-success"),n.loadImage(this.$target),this.isLoading=!1,r.fillSavedItems()},s.prototype.loadMoreFailHandler=function(){this.isLoading=!1},s.prototype.updateButton=function(t){var n=e(this.targetSelector).parents("#page").find(".capsule-ajax-loader-link");t.nextPageURL?(this.endpoint=hybris.contextPath+t.nextPageURL,this.$button.html(t.nextPageLabel)):this.$buttonWrapper.remove(),n.length>0&&n.removeClass("disabled")},{load:function(){o()}}});
