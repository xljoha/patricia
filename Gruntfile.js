module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    less: {
      development: {
        files: { "css/development.css": "_less/main.less" }
      },
      production: {
        options: {
          cleancss: true
        },
        files: {"css/production.css": "_less/main.less"}
      }
    },
    watch: {
      styles: {
        files: ['_less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true,
          livereload: {
            port: 9000
          }
        }
      }
    } 
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
};