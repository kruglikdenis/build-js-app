const gulp = require('gulp');
let path = require('path');
const del = require('del');
const conf = require('./config');

gulp.task('clean', function (done) {
    return del(conf.cleanDist.concat([path.join(conf.paths.tmp, '/')]), {force: true}, done);
});