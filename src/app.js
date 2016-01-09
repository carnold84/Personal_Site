requirejs.config ({

    baseUrl : '../src/app', // dev environment
    paths : {
        
        handlebars : '../libs/handlebars-v4.0.5',
        utilities : '../utilities'
    }
});

require(['Main'], function(Main) {

    Main.init();
});