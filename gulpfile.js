var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require('path');
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});


gulp.task('watch', ['sass:watch']);

gulp.task('default', ['compile']);

