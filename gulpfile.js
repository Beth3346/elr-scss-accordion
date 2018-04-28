var gulp = require('gulp');
var path = require('path');
var sass = require('gulp-sass');
var scsslint = require('gulp-scss-lint');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');

var paths = {
  app: 'dist/',
  css: 'dist/css/'
};

gulp.task('scsslint', function() {
  return gulp.src('src/**/*.scss').pipe(scsslint());
});

gulp.task('styles', ['scsslint'], function() {
  return gulp
    .src('style.scss')
    .pipe(plumber())
    .pipe(
      sass({
        includePaths: ['node_modules']
      }).on('error', sass.logError)
    )
    .pipe(gulp.dest(paths.css))
    .pipe(
      autoprefixer({
        browsers: ['last 3 versions'],
        cascade: false
      })
    )
    .pipe(gulp.dest(paths.css))
    .pipe(cleanCSS({ debug: true }))
    .pipe(gulp.dest(paths.css));
});

gulp.task('default', ['styles']);
