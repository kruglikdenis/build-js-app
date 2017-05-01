'use strict';

let path = require('path');
let gulp = require('gulp');
let conf = require('./config');

gulp.task('watch', function () {
    gulp.watch(path.join(conf.paths.src, '/**/*.scss'), ['styles']);
});