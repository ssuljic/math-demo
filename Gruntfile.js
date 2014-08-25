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
		    tasks: ['jshint', 'uglify'],
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
					'public/build/application.min.js': ['public/bower_components/angular/angular.min.js',
																							'public/bower_components/angular-route/angular-route.min.js',
																							'public/bower_components/d3/d3.js',
																							'public/bower_components/nvd3/nv.d3.js',
																							'public/bower_components/angularjs-nvd3-directives/dist/angularjs-nvd3-directives.js',
																							'public/scripts/*.js']
				}
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
	grunt.registerTask('default', ['uglify']);
};