var g = require('gulp');
var gsass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');

g.task('browserSync', function(){
    browserSync.init({
        server:{
            baseDir: 'build'
        },
    })
});

g.task('templates', function (){
    var templateData = {
        firstName: 'Kaanon'
    },
    options = {
        ignorePartials: true,
        partials : {
            footer : '/build/partials/footer.handlebars',
            header : '/build/partials/header.handlebars',
            head : '/build/partials/head.handlebars'
        },
        batch : ['./build/partials'],
        helpers : {
            capitals : function(str){
                return str.toUpperCase();
            }
        }
    }
    // Build p10 page
    return g.src('build/p10/p10.handlebars')
        .pipe(handlebars(templateData, options))
        .pipe(rename('index.html'))
        .pipe(g.dest('build/p10/'))
        .pipe(browserSync.reload({ stream: true }))
});

g.task('sass', function(){
    return g.src('build/styles.scss')
        .pipe(gsass())
        .pipe(g.dest('build'))
        .pipe(browserSync.reload({ stream: true }))
});

g.task('watch', ['browserSync'], function(){
    g.watch('build/*.scss', ['sass']);
    g.watch('build/*.handlebars', ['templates']);
    g.watch('build/*/*.handlebars', ['templates']);
});
