module.exports = function(grunt) {
	grunt.initConfig({
		newer: {

		},
		uglify: {
			dist: {
				files: {
					'scripts/scripts.min.js': 'scripts/scripts.js'
				},
				options: {
					banner: '/* Created by Alex Heritier, built <%= grunt.template.today() %> */'
				}
			}
		},
		sass: {
			dist: {
				options: {
					style: 'compact'
				},
				files: {
					'css/responsive.css': ['scss/responsive.scss', 'scss/partials/*.scss'],
					'css/responsive-contact.css': ['scss/responsive-contact.scss', 'scss/partials/*.scss']
				}
			}
		},
		jshint: {
			all: ['*.js', 'scripts/*.js']
		},
		watch: {
			default: {
				files: ['scripts/*.js', 'scss/*.scss', 'scss/**/*.scss'],
				tasks: ['newer:uglify:dist', 'newer:sass:dist']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
  	grunt.loadNpmTasks('grunt-newer');

	grunt.registerTask('default', [
		'uglify:dist',
		'sass:dist',
		'jshint:all'
	]);
};
