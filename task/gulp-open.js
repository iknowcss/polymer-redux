var gulp = require('gulp');
var open = require('gulp-open');

module.exports = function () {
  gulp
    .src(__filename)
    .pipe(open({ uri: 'http://localhost:8080/demo.html' }));
};
