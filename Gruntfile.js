module.exports = function(grunt) {
	grunt.initConfig({
		uglify: {
			dist: {
				files: {
					'scripts/scripts.min.js': 'scripts/scripts.js'
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
					'css/style.css': 'scss/style.scss'
				}
			},
			responsive: {
				options: {
					style: 'compact'
				},
				files: {
					'css/responsive.css': 'scss/responsive.scss',
					'css/responsive-contact.css': 'scss/responsive-contact.scss'
				}
			}
		},
		jshint: {
			all: ['*.js', 'scripts/scripts.js']
		},
		watch: {
			default: {
				files: ['scripts/scripts.js', 'scss/style.scss'],
				tasks: ['uglify:dist', 'sass:dist']
			},
			responsive: {
				files: ['scripts/scripts.js', 'scss/*.scss'],
				tasks: ['uglify:dist', 'sass:responsive']
			}
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
