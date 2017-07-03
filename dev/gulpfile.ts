var gulp = require('gulp'),
sass = require('gulp-sass'),
runSequence = require('run-sequence'),
minifyCss = require('gulp-minify-css'),
sourcemaps = require('gulp-sourcemaps'),
tsc = require('gulp-typescript'),
embedTemplates = require('gulp-inline-ng2-template'),
exec = require('child_process').exec;
var replace = require('gulp-string-replace');
 
//----
//build steps
gulp.task('build', function (done) {
 
  runSequence(
    'compile-sass',
    'copy-html',
    'replacePaths',
    //'replaceComponentPaths',
    // 'replaceHTML2',
    // 'replaceSCSS1',
    // 'replaceSCSS2',
    // 'replaceSCSS3'
  );

});
//----
//Sass compilation and minifiction
gulp.task('compile-sass', function () {
  gulp.src('src/**/*.scss')
   .pipe(sass().on('error', sass.logError)) // this will prevent our future watch-task from crashing on sass-errors
   .pipe(minifyCss({compatibility: 'ie8'})) // see the gulp-sass doc for more information on compatibilitymodes
   .pipe(gulp.dest('../src'));
});

gulp.task('copy-html', function () {
  gulp.src('src/**/*.html')
   .pipe(gulp.dest('../src'));
});

gulp.task('replacePaths', function() {
  gulp.src('../src/**/*.js') // Any file globs are supported 
    .pipe(replace(
      './time-picker.modal.html',
      'node_modules/mobile-time-picker/src/time-picker.modal.html'))
    .pipe(replace(
      './time-picker.modal.scss',
      'node_modules/mobile-time-picker/src/time-picker.modal.css'))
    .pipe(replace(
      './time-picker-rotation-keyframes.modal.scss',
      'node_modules/mobile-time-picker/src/time-picker-rotation-keyframes.modal.css'))
    .pipe(replace(
      './time-picker.component.html',
      'node_modules/mobile-time-picker/src/time-picker.component.html'))
    .pipe(replace(
      './time-picker.component.scss',
      'node_modules/mobile-time-picker/src/time-picker.component.css'))
    .pipe(replace(
        '../assets/i18n/',
        'node_modules/mobile-time-picker/assets/i18n/'
      ))
    .pipe(gulp.dest('../src'))
});