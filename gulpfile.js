var gulp       = require('gulp');
var babelify   = require('babelify');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');

gulp.task('start', ["bundle"], function() {
    browserify('./modules/ShoppingCart.jsx.js')
    .transform(babelify)
    .bundle()
    .pipe(source('ShoppingCart.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('bundle', function() {
    // browserify('./app/UnstyledCart.jsx.js').transform(babelify).bundle().pipe(source('UnstyledCart.js')).pipe(gulp.dest('./app/build'));
    browserify('./app/BootstrapCart.jsx.js').transform(babelify).bundle().pipe(source('BootstrapCart.js')).pipe(gulp.dest('./app/build'));
    // browserify('./app/DragDropCart.jsx.js').transform(babelify).bundle().pipe(source('DragDropCart.js')).pipe(gulp.dest('./app/build'));
});
