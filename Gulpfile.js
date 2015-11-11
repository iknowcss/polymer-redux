var gulp = require('gulp');

gulp.task('connect', require('./task/gulp-connect'));
gulp.task('open', require('./task/gulp-open'));

gulp.task('default', ['connect', 'open']);
