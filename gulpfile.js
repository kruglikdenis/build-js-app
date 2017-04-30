'use strict';

const gulp = require('gulp');

gulp.task('default', function () {
   return gulp.src('app/**/*.*')
       .pipe(gulp.dest('dest'));
});