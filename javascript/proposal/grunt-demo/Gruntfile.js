module.exports = function (grunt) {

  grunt.initConfig({
    uglify: {
      options: {
        sourceMap: true
      },
      js: {
        src: 'src/index.js',
        dest: 'dist/bundle.js'
      }
    },
    concat: {
      js: {
        src: ['./src/**/*.js', '!./src/**/*.test.js', '!./src/**/*.spec.js'],
        dest: 'dist/all.js'
      },
      css: {
        src: ['./src/**/*.css'],
        dest: 'dist/style.css'
      }
    },
    sass: {
      build: {
        files: [
          {
            src: 'src/sass/styles.scss',
            dest: 'dist/compiled.scss'
          }
        ]
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['concat']);

  grunt.registerTask('concat', ['concat']);
  grunt.registerTask('concat-js', ['concat:js']);
  grunt.registerTask('concat-css', ['concat:css']);

  grunt.registerTask('sass', ['sass']);
};