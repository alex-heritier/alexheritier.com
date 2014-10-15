
requirejs.config({
    baseUrl: 'scripts/',
    paths: {
        jquery: 'jquery.min'
    }
});

require(["jquery"], function($) {
    $(".skills-list li").click(function() {
        $(this).find("ul").toggle({duration: 200, easing: 'linear'});
    });
});
