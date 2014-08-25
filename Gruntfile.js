module.exports = function(grunt) {
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		express: {
		  all: {
				options: {
			    bases: [__dirname],
			    port: 9000,
			    hostname: "0.0.0.0",
			    livereload: true
		    }
		  }
		},
		watch: {
		  all: {
		    files: ['index.html', 'scripts/*.js'],
		    tasks: ['jshint'],
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
			all: ['Gruntfile.js', 'scripts/**/*.js']
		},
		uglify: {
			dist: {
				files: {
					'build/application.min.js': 'scripts/*.js'
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