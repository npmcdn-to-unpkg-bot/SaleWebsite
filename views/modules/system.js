define(["jquery","viewport","os"],function(e,t,n){function r(){e("html").hasClass("iOS")&&window.setTimeout(function(){window.scrollTo(0,0);var n=e(":focus");n.blur();var r=t.get();e("header").css("min-width",r.width+"px"),window.scrollTo(0,1)},0)}function i(){t.resizeWidth(r)}return{load:function(){n.isIOSDevice(),i()}}});