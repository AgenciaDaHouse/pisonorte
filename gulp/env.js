'use strict'

/**
 * dependencies
 */
var gulp = require('gulp')
var env = require('gulp-env')

/**
 * env tasks
 */
gulp.task('env:dev', function () {
  env({ vars: { NODE_ENV: 'production' }})
})

gulp.task('env:build', function () {
  env({ vars: { NODE_ENV: 'production' }})
})
