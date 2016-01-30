'use strict';

module.exports = function(grunt) {

  // Grunt configuration
  grunt.initConfig({
    htmlmin: {
      options: {
        removeComments: true,
        removeCommentsfromCDATA: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
      },
      dist: {
        files: {
          'index.html': 'src/index.html'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // Register default tasks
  grunt.registerTask('default', ['htmlmin']);
}
