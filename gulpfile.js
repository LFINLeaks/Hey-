
var gulp = require('gulp');


gulp.task('generate-service-worker', function(callback) {
  var path = require('path');
  var swPrecache = require('sw-precache');

  swPrecache.write(path.join('sw.js'), {
    staticFileGlobs: [
      'index.html',
      '{css,img,js,libs,partials,sounds}/*.{js,html,css,png,jpg,gif,svg,mp3,wav}',
      '{css,img,js,libs,partials,sounds}/**/*.{js,html,css,png,jpg,gif,svg,mp3,wav}'
    ],
  }, callback);
});
