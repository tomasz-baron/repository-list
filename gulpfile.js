const gulp = require('gulp'),
        connect = require('gulp-connect'),
        jsdoc = require('gulp-jsdoc3'),
        jshint = require('gulp-jshint'),
        webpack = require('webpack'),
        runSequence = require('gulp-run-sequence'),
        config = require('./webpack.config.js');

 
gulp.task('docs', function (cb) {
        gulp.src(['README.md', './src/**/*.js'], {read: false})
                .pipe(jsdoc(cb));
});

gulp.task('lint', function() {
        return gulp.src('./src/*.js')
                .pipe(jshint())
                .pipe(jshint.reporter('default'));
});

gulp.task('build', function() {
        webpack(config).run();
        return gulp.src('index.html')
                .pipe(gulp.dest('./dist'));
});

gulp.task('server', function() {
        connect.server({
                port: 8000,
                livereload: true,
                root: ['dist']
        });
});

gulp.task('serve', function() {
        runSequence('docs', 'lint', 'build', 'server');
});

gulp.task('default', ['serve']);