const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

gulp.task('sass', function (){
  return gulp.src('./src/styles/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./dist/css'));
});

gulp.task('imagemin', function() {
  return gulp.src('./src/imgs/**/*')
  .pipe(imagemin())
  .pipe(gulp.dest("./dist/imgs"));
});

gulp.task('watch', function() {
  gulp.watch('./src/styles/**/*.scss', gulp.parallel('sass'));
});

gulp.task('dev', function(callback) {
  gulp.parallel('watch')(callback);
});

gulp.task('build', function(callback) {
  gulp.parallel('sass', 'imagemin')(callback);
})
