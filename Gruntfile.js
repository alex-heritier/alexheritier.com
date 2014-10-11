module.exports = function(grunt) {
	grunt.initConfig({
		uglify: {
			dist: {
				files: {
					'scripts/script.min.js': 'scripts/scripts.js'
				},
				options: {
					banner: '/* This is my minified app, built <%= grunt.template.today() %> */'
				}
			}
		},
		sass: {
			dist: {
				options: {
					style: 'nested'
				},
				files: {
					'css/style.css': 'css/style.scss'
				}
			}
		},
		jshint: {
			all: ['*.js', 'scripts/scripts.js']
		},
		watch: {
			files: ['scripts/scripts.js', 'css/style.scss'],
			tasks: ['uglify:dist', 'sass:dist']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', [
		'uglify:dist',
		'sass:dist',
		'jshint:all'
	]);
};
