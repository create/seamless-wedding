module.exports = function(grunt) {

    // configure the tasks
    grunt.initConfig({

        clean: {
            scripts: {
              src: ['public/js/bundle.js']
            },
            stylesheets: {
                src: [ 'public/css/**/*', '!public/css/main.css' ]
            }
        },
        stylus: {
            build: {
                options: {
                    linenos: true,
                    compress: false
                },
                files: [{
                    expand: true,
                    flatten: true,
                    cwd: 'modules',
                    src: [ '**/client/styles/*.styl' ],
                    dest: 'public/css',
                    ext: '.css'
                }]
            }
        },
        autoprefixer: {
            build: {
                expand: true,
                cwd: 'public',
                src: [ 'css/*.css' ],
                dest: 'build'
            }
        },
        cssmin: {
            build: {
                files: {
                    'public/css/main.css': [ 'public/css/**/*.css' ]
                }
            }
        },
        browserify2: {
            dev: {
                entry: "./public/js/app.js",
                compile: "./public/js/bundle.js",
                debug: true
            }
        },
        watch: {
            stylesheets: {
                files: 'modules/**/client/styles/*.styl',
                tasks: [ 'stylesheets' ]
            },
            javascript: {
                files: ["modules/**/client/**/*.js", "public/js/app.js"],
                tasks: ['build-scripts']
            }
        }
    });

    // load the tasks
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify2');

    // define the tasks
    grunt.registerTask(
        'stylesheets',
        'Compiles the styleshzeets.',
        [ 'stylus', 'autoprefixer', 'cssmin', 'clean:stylesheets' ]
    );

    grunt.registerTask(
        'build-scripts',
        'Compiles all of the assets and copies the files to the build directory.',
        [ 'clean:scripts', 'browserify2', 'stylesheets' ]
    );

    grunt.registerTask(
        'build',
        'Compiles all of the assets and copies the files to the build directory.',
        [ 'build-scripts', 'stylesheets' ]
    );

    grunt.registerTask(
        'default',
        'Watches the project for changes, automatically builds them and runs a server.',
        [ 'build', 'watch' ]
    );
};