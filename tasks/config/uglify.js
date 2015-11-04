/**
 * Minify files with UglifyJS.
 *
 * ---------------------------------------------------------------
 *
 * Minifies client-side javascript `assets`.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-uglify
 *
 */
module.exports = function(grunt) {

	grunt.config.set('uglify', {
		my_target: {
			options: {
	      		mangle: false
	    	},
		    files: {
				'.tmp/public/min/production.min.js': ['.tmp/public/concat/production.js'],
				'.tmp/public/min/production.mobile.min.js': ['.tmp/public/concat/production.mobile.js']
			}
	    }
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
};
