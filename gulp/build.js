'use strict'

/**
 * dependencies
 */
var gulp = require('gulp')
var runSequence = require('run-sequence')

/**
 * settings
 */
var tasks = [ 'css', 'js' ]

/**
 * build task
 */
gulp.task('build', [ 'env:dev' ], function (next) {
  runSequence('clean:dist', tasks, next)
})
