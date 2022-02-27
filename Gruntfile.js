module.exports = function(grunt) {
    var pkgJson = require('./package.json');
    // console.log(pkgJson);

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js'],
            options: {
                jshintrc: true // tell JSHint to search for .jshintrc
            }
        },
        md2html: {
            one_file: {
                options: {
                    layout: "tutorial/assets/md2html/templates/bootstrap.html",
                    templateData: {
                        basePath: "",
                        author: pkgJson.author,
                        projectTitle: pkgJson.title,
                        filename: function(src) {
                            return src[0].match(/\/(.*).md/);
                        },
                    },
                },
                files: [{
                    src: ['README.md'],
                    dest: 'index.html'
                }]
            },
            multiple_files: {
                options: {
                    layout: "tutorial/assets/md2html/templates/bootstrap.html",
                    templateData: {
                        basePath: "../",
                        author: pkgJson.author,
                        projectTitle: pkgJson.title,
                        filename: function(src) {
                            return src[0].match(/\/(.*).md/);
                        },
                    },
                },
                files: [{
                    expand: true,
                    cwd: 'tutorial/markdown',
                    src: ['**/*.md'],
                    dest: 'tutorial/www', // destination directory
                    ext: '.html' // new file ext
                }]
            }
        },
        watch: {
            grunt: {
                files: ['Gruntfile.js', 'tutorial/assets/css/*', 'tutorial/assets/md2html/templates/*'],
                tasks: ['shell', 'md2html', 'alldone']
            },
            configFiles: {
                files: ['Gruntfile.js'], // watch/validate grunt config
                tasks: ['jshint'],
                options: {
                    reload: true
                }
            },
            markdown: {
                files: ['tutorial/markdown/*.md', 'README.md'], // files to watch
                tasks: ['md2html', 'shell'], // run these tasks
                options: {
                    spawn: false,
                },
            }
        },
        shell: {
            command: [
                "echo [🙌 running grunt-shell]",
                // "touch hello.txt", //test
                "marp", // call marp for slides
            ].join('&&')
        }
    });


    // a custom task
    grunt.task.registerTask('alldone', 'run when finished', function() {
        console.log("🔥 all done");
    });


    // enable plugins, register tasks
    grunt.loadNpmTasks('grunt-md2html');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');
    grunt.registerTask('default', ['jshint', 'md2html', 'shell', 'alldone']);
};
