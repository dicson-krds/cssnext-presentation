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
            map: {
               inline: false, // save all sourcemaps as separate files...
               annotation: 'dist/css/maps/' // ...to the specified directory
            },
            diff: 'custom/file.css.patch',
            processors: [
               require("postcss-cssnext")(),
               require("postcss-import")(),
               require("postcss-url")(),
               require("postcss-browser-reporter")(),
               require("postcss-reporter")(),
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
