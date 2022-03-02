module.exports = function(grunt) {
    var pkgJson = require('./package.json');
    // console.log(pkgJson);

    grunt.initConfig({

        // lint this file
        jshint: {
            files: ['Gruntfile.js'],
            options: {
                jshintrc: true // tell JSHint to search for .jshintrc
            }
        },

        // convert markdown to html
        md2html: {
            // index.html
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
            // www/*
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
                // if changes made to these files ...
                files: ['Gruntfile.js', 'tutorial/assets/css/*', 'tutorial/assets/md2html/templates/*'],
                // run these tasks ...
                tasks: ['shell:marp', 'md2html', 'alldone']
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
                tasks: ['shell:marp', 'md2html', 'alldone'], // run these tasks
                options: {
                    spawn: false,
                },
            },
            copyAssets: {
                // if final extension assets are updated ...
                files: ['extension/explode-tutorial-final/**/*'],
                tasks: ['shell:copyAssets', 'alldone']
            }
        },
        // individual shell tasks (called from watch tasks)
        shell: {
            hello: {
                command: "echo [🙌 running grunt-shell:hello]"
            },
            // call marp for slides
            marp: {
                command: concatBash([
                    "echo [🎁 running grunt-shell:marp]",
                    // "touch hello.txt", //test
                    "marp",
                ])
            },
            // copy assets if they are updated
            copyAssets: {
                command: concatBash([
                    "echo [📄 running grunt-shell:copyAssets]",
                    // sub dir in destination must exist
                    "cp -R extension/explode-tutorial-final/assets extension/explode-tutorial-3/",
                    "cp -R extension/explode-tutorial-final/assets extension/explode-tutorial-4/",
                    // parentheses temporarily changes directory, to get only assets dir, then hide zip output
                    "(cd extension/explode-tutorial-final/ && zip -r ../assets.zip ./assets > /dev/null)"
                ])
            },
        }
    });

    // a custom task
    grunt.task.registerTask('alldone', 'run when finished', function() {
        console.log("🔥 all done");
    });

    function concatBash(arr) {
        return arr.join('&&');
    }


    // enable plugins, register tasks
    grunt.loadNpmTasks('grunt-md2html');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');
    grunt.registerTask('default', ['jshint', 'md2html', 'shell:hello',  'shell:marp', 'shell:copyAssets', 'alldone']);
};
