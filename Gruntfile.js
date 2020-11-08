const sass = require('node-sass');

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        copy: {
            components: {
                expand: true,
                cwd: 'src/js/components',
                src: '**/*.js',
                dest: 'dist/js/components',
                filter: 'isFile',
                flatten: true
            },
            testPages: {
                expand: true,
                cwd: 'src/tests',
                src: '**/*.html',
                dest: 'dist/tests',
                filter: 'isFile',
                flatten: true
            },
            index: {
                expand: true,
                src: 'src/index.html',
                dest: 'dist/',
                filter: 'isFile',
                flatten: true
            },
            images: {
                expand: true,
                cwd: 'src/images',
                src: '**/*.*',
                dest: 'dist/images',
                filter: 'isFile',
                flatten: true
            }
        },
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                    'dist/css/app.css': 'src/scss/app.scss'
                }
            }
        },
        // Because regular grunt copy process binaries and we dont want to do that
        simple_copy: {
            main:{
              files:{
                'dist/fonts': ['src/fonts/icofont/**/*.*', 'src/fonts/dsari/**/*.*', 'src/fonts/opensans/**/*.*', ],
              }
            }
        },
        watch: {
            sass: {
                files: 'src/scss/**/*.scss',
                tasks: ['sass']
            },
            html: {
                files: ['src/**/*.html'],
                tasks: ['copy:index', 'copy:testPages'],
                options: {
                    spawn: false,
                }, 
            },
            components: {
                files: ['src/js/components/**/*.js'],
                tasks: ['copy:components'],
                options: {
                    spawn: false,
                },
            },
            readMe: {
                files: ['readmemd'],
                tasks: [],
                options: {
                    spawn: false,
                },
            },
        },
    });

    // Default task(s).
    grunt.registerTask('default', ['copy', 'simple_copy', 'sass', 'watch']);
  
};