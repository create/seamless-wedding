module.exports = function(grunt) {

    // configure the tasks
    grunt.initConfig({

        copy: {
            build: {
                cwd: 'public',
                src: [ 'public/js/*.js', 'modules/**/*.js' ],
                dest: 'public/build',
                expand: true
            }
        },
        clean: {
            build: {
                src: [ 'public/build', 'public/css' ]
            },
            stylesheets: {
                src: [ 'public/css/**/*.css', '!public/css/main.css' ]
            },
            scripts: {
                src: [ 'public/build/**/*.js', '!public/build/main.js' ]
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
                    cwd: 'styles',
                    src: [ '**/*.styl' ],
                    dest: 'public/css',
                    ext: '.css'
                }]
            }
        },
        autoprefixer: {
            build: {
                expand: true,
                cwd: 'build',
                src: [ 'public/css/*.css' ],
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
        uglify: {
            build: {
                options: {
                    mangle: false
                },
                files: {
                    'public/build/main.js': [ 'public/build/**/*.js' ]
                }
            }
        },
        jade: {
            compile: {
                options: {
                    data: {}
                },
                files: [{
                    expand: true,
                    cwd: 'views',
                    src: [ 'partials/**/*.jade' ],
                    dest: 'views/html',
                    ext: '.html'
                }]
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
    grunt.loadNpmTasks('grunt-contrib-jade');

    // define the tasks
    grunt.registerTask(
        'stylesheets',
        'Compiles the stylesheets.',
        [ 'stylus', 'autoprefixer', 'cssmin', 'clean:stylesheets' ]
    );

    grunt.registerTask(
        'scripts',
        'Compiles the JavaScript files.',
        [ 'uglify', 'clean:scripts' ]
    );

    grunt.registerTask(
        'build',
        'Compiles all of the assets and copies the files to the build directory.',
        [ 'clean', 'copy', 'stylesheets', 'scripts', 'jade' ]
    );
};