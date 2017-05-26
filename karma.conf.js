module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],

        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter')
        ],

        files: [
            { pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: false },
            
            { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
            { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },

            { pattern: 'systemjs.config.js', included: false, watched: false },
            { pattern: 'karma-test-shim.js', included: true, watched: false },
            

            { pattern: 'src/counter/counter.js', included: false, watched: true },
            { pattern: 'src/counter/counter.spec.js', included: false, watched: true }
        ],

        reporters: ['progress', 'kjhtml'],

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false
    });
};