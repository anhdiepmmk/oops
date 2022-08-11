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
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['concat']);
};