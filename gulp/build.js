const gulp = require('gulp');
let path = require('path');
const del = require('del');
const conf = require('./config');

gulp.task('clean', function (done) {
    return del(conf.cleanDist.concat([path.join(conf.paths.tmp, '/')]), {force: true}, done);
});

gulp.task('assets', function (done) {
    return gulp.src(conf.paths.src + '/assets/**')
        .pipe(gulp.dest(conf.paths.dist + '/assets'));
});

gulp.task('build-after-clean', ['styles', 'assets']);

gulp.task('build', ['clean'], function () {
    gulp.start('build-after-clean');
});