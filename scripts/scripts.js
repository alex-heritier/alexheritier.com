
requirejs.config({
    baseUrl: 'scripts/',
    paths: {
        jquery: '//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min'
    }
});

require(["jquery"], function($) {
    var init;

    init = function() {
        // click toggling of skill sublists
        $(".skills-list li").click(function() {
            $(this).find("ul").toggle({duration: 200, easing: 'linear'});
        });
    };

    $(document).ready(function() {
        init();
    });
});
