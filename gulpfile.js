'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

gulp.task('less', function() {
  return gulp.src(['./assets/less/base.less'])
    .pipe(less())
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('js', function() {
  return gulp.src(['./assets/js/**/*.js'])
    .pipe(uglify())
    .pipe(gulp.dest('./public/js/'));
});


gulp.task('watch', function() {
  // watch less files
  gulp.watch('./assets/less/**/*.less', ['less']);

  gulp.watch('./assets/js/**/*.js', ['js']);
});

gulp.task('default', ['less', 'js']);
