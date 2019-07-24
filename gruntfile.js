module.exports = function (grunt) {
  const sass = require('node-sass');

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    watch: {
      files: ['source/sass/**/*.scss'],
      tasks: ['sass']
    },
    sass: {
      options: {
        implementation: sass
      },
      dev: {
        files: {
          'source/css/style.css': 'source/sass/main.scss'
        }
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'source/css/*.css',
            'source/*.html',
            'source/js/*.js'
          ]
        },
        options: {
          watchTask: true,
          server: 'source/',
          browser: 'firefox'
        }
      }
    }
  });

  grunt.registerTask('server', ['sass', 'browserSync', 'watch']);
};
