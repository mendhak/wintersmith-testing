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
  });

  // Load NPM Task
  grunt.loadNpmTasks('grunt-wintersmith');

};