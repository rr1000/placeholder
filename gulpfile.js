// Removable if upgrading node to 0.12.*
require('es6-promise').polyfill();

var g = require('gulp');
var gsass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');

g.task('browserSync', function(){
    browserSync.init({
        server:{
            baseDir: 'build'
        },
    })
});

g.task('sass', function(){
    return g.src('build/styles.scss')
        .pipe(gsass())
        .pipe(g.dest('build'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

g.task('useref', function(){
    return g.src('build/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulpIf('*.css', uglify()))
        .pipe(g.dest('build'))
});

g.task('watch', ['browserSync'], function(){
    g.watch('build/styles.scss', ['sass']);
});
