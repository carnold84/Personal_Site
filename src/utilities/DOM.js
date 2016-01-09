// define dependent files
define([], function() {

    'use strict';

    function createElement (type, class_name) {

        var el = document.createElement(type);
        
        if (class_name !== undefined) {

            el.classList.add(class_name);
        }

        return el;
    }

    function createLink (href, text, class_name) {

        var el = document.createElement('a');
        
        if (href !== undefined) {
            
            el.setAttribute('href', href);
        }
        
        if (text !== undefined) {
            
            el.innerHTML = text;
        }
        
        if (class_name !== undefined) {
            
            el.classList.add(class_name);
        }

        return el;
    }

    return {
        
        createElement : createElement,
        createLink : createLink
    };

});