// define dependent files
define([], 
    function() {

    'use strict';

    var MODULE = 'Config',

        APP = {

            NAME : 'Personal Site'
        },

        SECTIONS = [

            {
                id : 'experiments',
                title : 'Experiments'
            },
            {
                id : 'stream',
                title : 'Stream'
            },
            {
                id : 'articles',
                title : 'Articles'
            },
            {
                id : 'photos',
                title : 'Photos'
            },
            {
                id : 'work',
                title : 'Work'
            },
            {
                id : 'contact',
                title : 'Contact'
            }
        ]

    return {
        
        APP : APP,
        SECTIONS : SECTIONS
    };

});