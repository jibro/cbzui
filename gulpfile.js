var gulp = require('gulp')
var postcss = require('gulp-postcss')
var cssmin = require('gulp-cssmin')
var salad = require('postcss-salad')(require('./theme/salad.config.json'))

gulp.task('compile', function () {
  return gulp.src('./theme/src/*.css')
    .pipe(postcss([salad]))
    .pipe(cssmin())
    .pipe(gulp.dest('./theme/lib'))
})

gulp.task('copyfont', function () {
  return gulp.src('./theme/src/fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest('./theme/lib/fonts'))
})

gulp.task('build', ['compile', 'copyfont'])
gulp.task('watch', function () {
  gulp.watch('./theme/src/*.css', ['compile'])
})
