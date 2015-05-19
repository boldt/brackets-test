module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: grunt.file.readJSON('config/jshint.json'),
        jslint: grunt.file.readJSON('config/jslint.json'),
        jscs: grunt.file.readJSON('config/jscs.json')
    });

    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks("grunt-jscs");

    //    grunt.registerTask('check', ['jshint', 'jslint']);
    grunt.registerTask('default', ['jslint', 'jshint', 'jscs']);
};
