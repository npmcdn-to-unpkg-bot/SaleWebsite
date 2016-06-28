define([], function() {
    var e = e || {};
    return e.userMessages = {
        loginError: 'Invalid email and/or password. Try again or click on "forgot your password?" link.',
        required: "This field cannot be empty",
        match: "The fields do not match"
    }, e.times = {
        closeFlyOutWait: 6e3
    }, e.user = {
        isAuthenticated: !0
    }, e.breakpoints = {
        small: 768,
        medium: 1024,
        standard: 1600
    }, e.localizedData = {
        localizedMonths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        localizedDays: ["S", "M", "T", "W", "T", "F", "S"]
    }, typeof window.GUCCI != "undefined" && (e = $.extend({}, window.GUCCI, e)), window.GUCCI = e, e
});
