module.exports = function(grunt) {

  grunt.initConfig({

    wintersmith: {
      production: {
        options: {
          config: './config.json'
        }
      },
      preview: {
        options: {
          action: "preview",
          config: './config-preview.json'
        }
      }
    }
,
    uncss: {
      dist: {
        // src: grunt.file.expand({ filter: 'isFile'}, ['../../.docs/**/*.html']),
        src: grunt.file.expand({  filter: 'isFile'}, ['../../docs/**/*.html']),
        dest: '../../docs/css/main.css',
        options: {
          report: 'min' // optional: include to report savings
        }
      }
    } 
  });

  // Load NPM Task
  grunt.loadNpmTasks('grunt-wintersmith');
  grunt.loadNpmTasks('grunt-uncss');


grunt.registerTask('preview', ['wintersmith:preview'])
grunt.registerTask('production', ['wintersmith:production','uncss'])

};