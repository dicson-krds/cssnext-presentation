//require('postcss-plugin')({option: true})
module.exports = function(grunt) {
   grunt.loadNpmTasks('grunt-postcss');
   grunt.loadNpmTasks('grunt-contrib-watch');

   grunt.initConfig({
      watch: {
         files: "css/style.css",
         tasks: ["postcss"]
      },
      postcss: {
         options: {
            processors: [
               require("postcss-import")(),
               require("postcss-url")(),
               require("postcss-cssnext")(),
               require("postcss-browser-reporter")(),
               require("postcss-reporter")()
               //require('pixrem')(), // add fallbacks for rem units
               //require('autoprefixer')({browsers: ["chrome > 10", "firefox > 10", "ie > 7", "android > 2", "ios > 5"]}), // add vendor prefixes
               //require('cssnano')() // minify the result
            ]
         },
         dist: {
            src: 'css/style.css',
            dest: 'css/build.css'
         }
      }
   });

   grunt.registerTask("default", ["postcss", "watch"]);
};
