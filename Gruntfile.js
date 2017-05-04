"use strict";

module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-browser-sync");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-postcss");
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-csso');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-bake');
    grunt.loadNpmTasks('grunt-spritesmith');

    grunt.initConfig({
        sass: {
            style: {
                files: {
                    "assets/css/base.css": "assets/sass/style.scss"
                }
            }
        },

        csso: {
            style: {
                options: {
                    report: "gzip"
                },
                files: {
                    // основной файл css
                    "assets/css/base.min.css": ["assets/css/base.css"],
                    // файлы css из плагинов для минификации и объеденения
                    "assets/css/library.min.css": [
                    'node_modules/fancybox/dist/css/jquery.fancybox.css',
                    'node_modules/slick-carousel/slick/slick.css',
                    'node_modules/slick-carousel/slick/slick-theme.css',
                    'node_modules/jquery.mmenu/dist/jquery.mmenu.all.css',
                    'node_modules/hamburgers/dist/hamburgers.css',
                ]
                }
            }
        },

        postcss: {
            style: {
                options: {
                    processors: [
            require("autoprefixer")({
                            browsers: [
              "last 1 version",
              "last 2 Chrome versions",
              "last 2 Firefox versions",
              "last 2 Opera versions",
              "last 2 Edge versions"
            ]
        })
          ]
                },
                src: "assets/css/*.css"
            }
        },

        browserSync: {
            server: {
                bsFiles: {
                    src: ["*.html", "assets/css/*.css", "assets/js/*.js"]
                },
                options: {
                    server: ".",
                    watchTask: true,
                    notify: false,
                    open: true,
                    ui: false
                }
            }
        },

        watch: {
            bake: {
                files: ["app/*.html"],
                tasks: ["bake:build"]
            },
                    html: {
                        files: ["*.html"],
//                        tasks: ["copy:html"]
                    },

            style: {
                files: ["assets/sass/**/*.{scss,sass}"],
                tasks: ["sass", "postcss", "csso"],
                options: {
                    spawn: false
                }
            }
        },

        copy: {
            build: {
                files: [{
                    expand: true,
                    src: [
                    "assets/fonts/**/*.{woff, woff2}",
                    "assets/img/**",
                    "assets/js/**",
                    "assets/css/**",
//                    "*.html"
                ],
                    dest: "public"
            }]
            },
            html: {
                files: [{
                    expand: true,
                    src: ["*.html"],
                    dest: "public"
            }]
            }
        },

        clean: {
            build: ["public"],
        },

        concat: {
            options: { // "включает" использование баннера
                stripBanners: true,
                banner: "/**/"
            },
            dist: {
                // файлы для склеивания
                src: [
                    'node_modules/fancybox/dist/js/jquery.fancybox.pack.js',
                    'node_modules/slick-carousel/slick/slick.js',
                    'node_modules/jquery.mmenu/dist/jquery.mmenu.all.min.js',
                ],
                // где будут находиться склеенные файлы
                dest: 'assets/js/project.js'
            }

        },
        uglify: { // сжатие файлов js
            my_target: {
                options: {
                    beautify: true
                },
                files: {
                    //минификация в той же папке, где и основной файл 
                    "assets/js/project.min.js": ['assets/js/project.js']
                }
            }
        },
        bake: { // команда "grunt bake"
            build: {
                options: {
                    content: "app/content.json",
                    section: "de"
                },

                files: {
                    // указываются из каких шаблонов формируются готовые страницы
                    // из base.html в index.html
                    'index1.html': 'app/base.html',
                }
            }
        },
        sprite:{
      all: {
        src: 'assets/img/sprite/*.jpg',
        dest: 'assets/img/sprite/social.png',
        destCss: 'assets/css/sprites.css',
        padding: 10,
        algorithm: 'top-down'
      }
    }

    });

    grunt.registerTask("serve", [
    "sass", 
    "csso",
    "concat",
    "uglify",
    "browserSync",
    "watch",
    "bake",
  ]);
    grunt.registerTask("build", [
    "clean",
    "copy",
    "concat",
    "postcss",
  ]);
};