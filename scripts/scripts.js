
requirejs.config({
    baseUrl: 'scripts/',
    paths: {
        jquery: 'jquery.min'
    }
});

require(["jquery"], function($) {
    var masterList = {
        "CSS": [
            "SASS"
        ],
        "Javascript": [
            "Angular.js",
            "jQuery",
            "Require.js"
        ],
        "PHP": [
            "CodeIgniter",
            "Laravel"
        ]
    };

    function addHiddenSubMenu(elements, data) {
        elements.each(function() {
            var that = $(this),
                text = that.find("p").text();

            if (data[text] !== undefined) {
                var subList = $("<ul class='skills-sublist'>").hide();
                for (var i = 0; i < data[text].length; i++) {
                    var subListLi = $("<li>"),
                        subListP = $("<p>");
                    subListP.text(data[text][i]);
                    subListLi.append(subListP);
                    subList.append(subListLi);
                }
                that.append(subList);
            }
        });
    }

    var elements = $(".skills-list li");
    addHiddenSubMenu(elements, masterList);
    elements.click(function() {
        $(this).find("ul").toggle({duration: 200, easing: 'linear'});
    });
});
