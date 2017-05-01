'use strict';

const gulp = require('gulp');

gulp.task('dev', ['build'], function () {
    gulp.start('watch');
});