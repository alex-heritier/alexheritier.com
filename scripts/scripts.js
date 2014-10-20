
requirejs.config({
    baseUrl: 'scripts/',
    paths: {
        jquery: '//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min'
    }
});

require(["jquery"], function($) {
    var init;

    init = function() {
        // IMPORTANT!!!
        // this lets .intro-about and .projects-about have vertically aligned text which can't be done in CSS
        var projects_img = $(".projects-content img"),
            projects_about = $(".projects-about");
            intro_img = $(".intro img"),
            intro_about = $(".intro-about"),
            resize_about_divs = function() {
                if ($(window).width() > 1000) { // only resize when in desktop mode
                    projects_about.css({height: projects_img.height()});
                    intro_about.css({height: intro_img.height()});
                }
            };
        resize_about_divs();
        $(window).resize(resize_about_divs);

        // click toggling of skill sublists
        $(".skills-list li").click(function() {
            $(this).find("ul").toggle({duration: 200, easing: 'linear'});
        });
    }

    $(document).ready(function() {
        init();
    });
});
