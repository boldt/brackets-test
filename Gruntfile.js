module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: grunt.file.readJSON('jshint.json'),
        jslint: grunt.file.readJSON('jslint.json')
    });

    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    //    grunt.registerTask('check', ['jshint', 'jslint']); 
    grunt.registerTask('default', ['jslint']);
};
