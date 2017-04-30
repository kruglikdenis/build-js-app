'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const gulpIf = require('gulp-if');
const conf = require('./config');

gulp.task('styles', function () {
    console.log(1)
    return gulp.src(conf.paths.app + '/**/*.scss')
        .pipe(gulpIf(conf.isDev, sourcemaps.init()))
        .pipe(sass())
        .pipe(concat('app.css'))
        .pipe(gulpIf(conf.isDev, sourcemaps.write()))
        .pipe(gulp.dest(conf.paths.dist + '/styles'));
});
