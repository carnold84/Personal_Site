// define dependent files
define(['handlebars', 'utilities/Events', 'utilities/Broadcast'], 
    function(Handlebars, EVENTS, BROADCAST) {

    'use strict';

    var MODULE = 'Sections',

        sections = [], // array of sections
        el; // reference to main content

    function add (id, name, callback) {

        console.log(MODULE + ':add -> ' + name);

        sections.push({

            id : id,
            title : name
        });
    }

    function build () {

        console.log(MODULE + ':build');

        var source = document.querySelector('#sections').innerHTML,
            template = Handlebars.compile(source);

        clear();

        el = template({
            sections : sections
        });

        return el;
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