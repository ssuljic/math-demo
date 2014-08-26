module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      dist: {
        files: {
          'public/build/js/application.min.js':  ['public/libs/angular/angular.min.js',
                              										'public/libs/angular-route/angular-route.min.js',
                              										'public/libs/d3/d3.js',
                              										'public/libs/nvd3/nv.d3.js',
                              										'public/libs/angularjs-nvd3-directives/dist/angularjs-nvd3-directives.js',
                              										'public/scripts/**/*.js']
        }
      }
    },
    cssmin: {
      build: {
        files: {
          'public/build/css/style.min.css': ['public/libs/nvd3/nv.d3.css', 'public/libs/bootstrap/dist/css/bootstrap.min.css']
        }
      }
    },
    watch: {
      all: {
        files: ['public/index.html', 'public/scripts/**/*.js'],
        options: {
          livereload: true
        }
      },
      js: {
        files: ['public/scripts/**/*.js'],
        tasks: ['uglify']
      }
    },
    jshint: {
      all: ['public/scripts/**/*.js']
    },
    karma: {
      unit: {
        configFile: 'test/karma.conf.js'
      }
    },
    nodemon: {
      dev: {
        script: 'server.js'
      }
    },
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      tasks: ['nodemon', 'watch']
    }   
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('build', ['cssmin', 'uglify', 'karma']);
  grunt.registerTask('test', ['karma']);
  grunt.registerTask('default', ['cssmin', 'uglify', 'concurrent']);
};