'use strict';

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

module.exports.paths = {
    src: 'src',
    app: 'src/app',
    dist: 'dist',
    tmp: '.tmp'
};

module.exports.cleanDist = [
    module.exports.paths.dist + 'styles'
];

module.exports.isDev = isDev;