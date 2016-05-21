'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    copy: {
      'fec-style': {
        files: [
          {
            expand: true,
            cwd: 'node_modules/fec-style',
            src: 'scss/**',
            dest: 'fec_eregs/static/fec_eregs/fec-style/'
          },
          {
            expand: true,
            cwd: 'node_modules/fec-style',
            src: 'img/**',
            dest: 'fec_eregs/static/fec_eregs/'
          },
          {
            expand: true,
            cwd: 'node_modules/fec-style',
            src: 'fonts/**',
            dest: 'fec_eregs/static/fec_eregs/fec-style/'
          }
        ]
      }
    },
    sass: {
      options: {
        includePaths: [
          'fec_eregs/static/fec_eregs/scss',
          'fec_eregs/static/fec_eregs/fec-style/scss',
        ]
      },
      dist: {
        files: {
          'fec_eregs/static/fec_eregs/css/main.css': 'fec_eregs/static/fec_eregs/scss/main.scss'
          //'frontend/static/fec_eregs/fec-style/css/main.css': 'fec_eregs/static/fec_eregs/fec-style/css/scss/main.scss'
        }
      }
    },
    shell: {
      'munge-fec-style': {
        command: 'sed -r -i -f wrap-rem.sed scss/**/*.scss',
        options: {
          execOptions: {
            cwd: 'fec_eregs/static/fec_eregs/fec-style/'
          }
        }
      }
    },
    watch: {
      sass: {
        files: ['fec_eregs/static/fec_eregs/fec-style/css/scss/*.scss'],
        tasks: ['sass']
      }
    }
  });

  grunt.registerTask('build:css', ['copy:fec-style', 'shell:munge-fec-style', 'sass']);

  grunt.registerTask('default', ['sass']);
};
