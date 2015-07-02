module.exports = function(grunt) {
 
  //Checks the dependencies associated with Grunt and autoloads
  //& requires ALL of them in this Gruntfile
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
 
  // Project configuration.
  grunt.initConfig({





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
      files: [
        '**/*.html',
        'js/**/*.js',
        'css/**/*.scss',
        'img/**/*.{png,jpg,gif,svg}'
      ],
      tasks: [
        'sass'
      ]
    }
 
  });
 
  //grunt serve
  grunt.registerTask('default', ['watch']);
};
