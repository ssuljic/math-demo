module.exports = function(grunt) {
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		express: {
		  all: {
				options: {
			    bases: [__dirname + '/public'],
			    port: 9000,
			    hostname: "0.0.0.0",
			    livereload: true
		    }
		  }
		},
		watch: {
		  all: {
		    files: ['public/index.html', 'public/scripts/*.js'],
		    options: {
		      livereload: true
		  	}
		  }
		},
		open: {
		  all: {
		    path: 'http://localhost:<%= express.all.options.port %>'
		  }
		},
		jshint: {
			all: ['Gruntfile.js', 'public/scripts/**/*.js']
		},
		uglify: {
			dist: {
				files: {
					'public/build/application.min.js': ['public/libs/angular/angular.min.js',
																							'public/libs/angular-route/angular-route.min.js',
																							'public/libs/d3/d3.js',
																							'public/libs/nvd3/nv.d3.js',
																							'public/libs/angularjs-nvd3-directives/dist/angularjs-nvd3-directives.js',
																							'public/scripts/*.js']
				}
			}
		},
		karma: {
		  unit: {
		    configFile: 'test/karma.conf.js'
		  }
		}
	});

	grunt.registerTask('server', [
	  'express',
	  'open',
	  'watch'
	]);

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-karma');
	grunt.registerTask('build', ['karma', 'uglify']);
	grunt.registerTask('test', ['karma']);
};