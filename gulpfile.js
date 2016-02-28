// Removable if upgrading node to 0.12.*
require('es6-promise').polyfill();

var g = require('gulp');
var gsass = require('gulp-sass');
var browserSync = require('browser-sync').create();

g.task('browserSync', function(){
    browserSync.init({
        server:{
            baseDir: 'build'
        },
    })
});

g.task('cssnano', function(){
    return g.src('build/styles.css')
        .pipe(cssnano())
        .pipe(g.dest('build'))
});

g.task('sass', function(){
    return g.src('build/styles.scss')
        .pipe(gsass())
        .pipe(g.dest('build'))
        .pipe(browserSync.reload({ stream: true }))
});

g.task('watch', ['browserSync'], function(){
    g.watch('build/styles.scss', ['sass']);
});
