'use strict'

/**
 * dependencies
 */
var gulp = require('gulp')

/**
 * images task
 */
gulp.task('img', function () {
  return gulp.src('./src/img/*.{jpg,png,gif,svg,ico}')
    .pipe(gulp.dest('./public/img'))
})
