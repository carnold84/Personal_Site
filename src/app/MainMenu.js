// define dependent files
define(['handlebars', 'utilities/Events', 'utilities/Broadcast'], 
    function(Handlebars, EVENTS, BROADCAST) {

    'use strict';

    var MODULE = 'MainMenu',

        menuItems = {}, // object storing menu items referenced by id
        itemsLookup = [], // array of item ids
        currentId, // id of selected item
        previousPosition, // previous position of parent scroll
        currentPosition, // current position of parent scroll
        centerPoint, // center of main element
        animId, // id of animationFrame

        el, // reference to main element
        elMenu; // reference to menu element

    function add (id, title, link, callback) {

        console.log(MODULE + ':add -> ' + title);

        menuItems[id] = {

            id : id,
            title : title,
            href : link,
            callback : callback
        };

        itemsLookup.push(id);
    }

    function build (target) {

        console.log(MODULE + ':build');

        var source = document.querySelector('#main-menu').innerHTML,
            template = Handlebars.compile(source),
            html;

        clear();

        el = target;

        html = template({
            menuItems : menuItems
        });

        el.innerHTML = html;

        elMenu = el.querySelector('.main-menu');

        resize();

        elMenu.addEventListener('click', onClickHandler);
    }

    function resize () {

        console.log(MODULE + ':build');

        var items,
            item,
            id,
            data = {},
            i = 0,
            len;

        items = el.querySelectorAll('.main-menu__item');

        centerPoint = el.offsetWidth / 2;

        len = items.length;

        for (i; i < len; i++) {

            item = items[i];

            id = item.querySelector('.main-menu__item-link').getAttribute('data-id');

            menuItems[id].el = item;
            menuItems[id].width = item.offsetWidth;
            menuItems[id].left = item.offsetLeft;
            menuItems[id].center = menuItems[id].width / 2;

            if (currentId === undefined) {
                setCurrentItem(id);
            }
        }
    }

    function setCurrentItem (id) {

        console.log(MODULE + ':setCurrentItem, id = ' + id);

        var item;

        currentId = id;

        item = menuItems[currentId];

        currentPosition = parseInt(centerPoint - item.center - item.left);

        elMenu.style.transform = 'translate3d(' + currentPosition + 'px, 0, 0)';
    }

    function onClickHandler (evt) {

        console.log(MODULE + ':onClickHandler');

        var item = evt.target;

        setCurrentItem(item.getAttribute('data-id'));

        if (typeof item.callback === 'function') {

            item.callback.call();
        }

        evt.stopPropagation();
        evt.preventDefault();
    }

    function clear () {

        console.log(MODULE + ':clear');

        el = undefined;
    }

    return {
        
        add : add,
        clear : clear,
        build : build
    };

});