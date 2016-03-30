module.exports = function(grunt) {

  grunt.initConfig({
    svgmin: {
      options: {
        plugins: [
          {
            removeViewBox: false
          }, {
            removeUselessStrokeAndFill: false
          }
        ]
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'slopper/',
          src: ['*.svg'],
          dest: 'proper/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-svgmin');

  grunt.registerTask('default', ['svgmin']);

};
