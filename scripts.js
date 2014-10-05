window.onload = function() {
    'use strict';

    var skillsList = document.getElementsByClassName("skills-list"),
        childLists = skillsList[0].children,
        children2 = skillsList[1].children,
        masterList = {
            "CSS": [
                "LESS",
                "SASS"
            ],
            "Javascript": [
                "Angular.js",
                "jQuery"
            ],
            "PHP": [
                "Codeigniter",
                "Laravel"
            ]
        };
    for (var k = 0; k < skillsList.length; k++) {
        var childLists = skillsList[k].children;
        for (var i = 0; i < childLists.length; i++) {
            (function() {
                var entry = childLists[i],
                    sub = getSublist(entry);
                entry.sublistVisible = false;
                if (sub !== undefined) {
                    var subList = document.createElement("ul");
                    subList.className = "skills-list-sublist";
                    entry.onclick = function() {
                        if (!entry.sublistVisible) {
                            for (var j = 0; j < sub.length; j++) {
                                var subSubList = document.createElement("li"),
                                    subItem = document.createElement("p");
                                subItem.innerHTML = sub[j];
                                subSubList.appendChild(subItem);
                                subList.appendChild(subSubList);
                            }
                        } else {
                            entry.children[1].innerHTML = '';
                        }
                        entry.appendChild(subList);
                        entry.sublistVisible = !entry.sublistVisible;
                    }
                }
            })();
        }
    }

    function getSublist(listItem) {
        var p = listItem.children[0];
        return masterList[p.innerHTML];
    }
}
