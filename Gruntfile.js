module.exports = function(grunt) {

  // Project configuration.
  
  grunt.initConfig({
	  
	 watch: {
		scripts: {
			files: ['sass/*.sass'],
			tasks: ['sass'],
			options: {
				spawn: false,
			},
		}
	},
	
	
	
  	sass: {
  		options: {
  			sourceMap: true
  		},
  		dist: {
  			files: {
  				'css/style.css': 'sass/style.sass'
  			}
  		}
  	}

  });
  
  
  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).

  grunt.registerTask('default', ['sass', 'watch']);
};