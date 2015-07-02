module.exports = function(grunt) {
 
  //Creates a reference to the package obj
  var pkg = require('./package.json');
 
  //Checks the dependencies associated with Grunt and autoloads
  //& requires ALL of them in this Gruntfile
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
 
  // Project configuration.
  grunt.initConfig({
 




    //connect settings. used in grunt serve and livereload
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
        }
      },
      dist: {
        options: {
          base: '~/<%= pkg.name %>'
        }
      }
    },





    //Sass configuration
    sass: {
      options: {
        sourceMap: false,
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          'css/main.css': 'css/scss/main.scss'
        }
      }
    },
 




    //Watches files and folders for us
    watch: {
 
      //watch to see if we change this gruntfile
      gruntfile: {
        files: ['Gruntfile.js']
      },
 
      //livereload  
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '{,*/}*.html',
          'js/{,*/}*.js',
          'css/{,*/}*.css',
          'css/{,*/}*.scss',
          'img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      },
    }
 
  });
 
  //grunt serve
  grunt.registerTask('serve', ['connect:livereload','sass','watch']);
};
