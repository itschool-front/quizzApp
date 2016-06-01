
var fs = require('fs');

module.exports = function(grunt){
		
	'use strict';

	require('load-grunt-tasks')(grunt);


	grunt.initConfig({



		/*Server for development
		----------------------------*/
		connect: {

			server: {

				options: {
					base: '.',
					open: true,
					livereload: true,
				}

			}

		},

			
		/*Typescript compiler options
		------------------------------*/
		ts: {
	      default : {
	        src: ["src/**/*.ts"],
	    		outDir: "dest"  
				}
	    },

	    /*Working with html templates
	    ------------------------------*/
	    htmlbuild: {
	    	
					
			dev: {
	    		src: 'src/templates/index.tpl.html',
	    		dest: 'index.html',
	    		options: {
	    	
	    			styles: {
		               
		                vendor: [
							'bower_components/angular-material/angular-material.min.css', 
							'bower_components/angular-material-icons/angular-material-icons.css'
							],

		                app: 'assets/app.css'

		            },

		            scripts: {
		            	vendor: [
		            		'bower_components/angular/angular.min.js',
		            		'bower_components/angular-animate/angular-animate.min.js',
		            		'bower_components/angular-aria/angular-aria.min.js',
		            		'bower_components/angular-material/angular-material.min.js',
							'bower_components/angular-material-icons/angular-material-icons.min.js',
							'bower_components/angular-resource/angular-resource.min.js'
		            	],

		            	main: 'dest/boot.js',
						
						domain: ['dest/domain/question.js', 'dest/domain/test.js'],

		            	models: [
		            		'dest/models.js'
		            	],
		            	
		            	services: [
							'dest/services/commonServices.js',
							'dest/services/dataAccessService.js',
		            		'dest/services/userService.js'
		            	],

		            	controllers: [
		            		'dest/controllers/mainController.js'
		            	]

		            },
					
					sections: {
						layout: [
							'src/templates/layout-main.tpl.html'
						]
					}
	    		}
	    	}

			
	    },


		watch: {
			
			options: {
				livereload: true
			},
			
		  src: {
		    files: ['src/**/*.ts'],
			tasks: ['ts']
		  },
			
			html: {
				files: ['src/templates/**/*.html', 'dest/viewes/**/*.html', 'assets/**/*'],
				tasks: ['htmlbuild:dev']
			}		
	}
	

	});

	
	grunt.registerTask('serve', ['ts', 'htmlbuild', 'connect', 'watch']);
	grunt.registerTask('default', ['serve']);
}
