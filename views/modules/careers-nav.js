define(["jquery"],function(e){function r(e){var t=encodeURI(e);window.location.assign(t)}function i(){n.on("change",function(){r(e(this).val())})}var t="careers-nav-mobile",n=e("."+t);return{load:i}});