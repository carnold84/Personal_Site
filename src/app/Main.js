// define dependent files
define(['utilities/Events', 'utilities/Broadcast', 'Config', 'MainMenu', 'Sections'], 
    function(EVENTS, BROADCAST, Config, Menu, Sections) {

    'use strict';

    var MODULE = 'Main',

        mainMenu,

        elHeader, // reference to header
        elNav, // reference to nav
        elContent; // reference to main content

    function init () {

        console.log(MODULE + ':init');

        // store refs to divs
        elHeader = document.querySelector('.main-header');
        elNav = document.querySelector('.main-nav');
        elContent = document.querySelector('.main-content');

        buildMenu();

        buildSections();
    }

    function buildMenu () {

        console.log(MODULE + ':buildMenu');

        var i = 0,
            len = Config.SECTIONS.length,
            section;

        Menu.clear();

        for (i; i < len; i++) {

            section = Config.SECTIONS[i];

            Menu.add(section.id, section.title, '#' + section.id);
        }

        Menu.build(elNav);
    }

    function buildSections () {

        console.log(MODULE + ':buildSections');

        var i = 0,
            len = Config.SECTIONS.length,
            section;

        Sections.clear();

        for (i; i < len; i++) {

            section = Config.SECTIONS[i];

            Sections.add(section.id, section.title);
        }

        elContent.innerHTML = Sections.build();
    }

    return {
        
        init : init
    };

});