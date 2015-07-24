'use strict'

/**
 * dependencies
 */
var gulp = require('gulp')
var nodemon = require('gulp-nodemon')
var livereload = require('gulp-livereload')

/**
 * watch task
 */
gulp.task('watch', function () {
  livereload.listen({ port: 35728 })
  gulp.watch([ './src/**/*.styl' ], [ 'css' ])
  // gulp.watch([ './src/**/*.js' ], [ 'js' ])
})

/**
 * server task
 */
gulp.task('server', [ 'env:dev', 'build', 'watch' ], function () {
  nodemon({
    verbose: true,
    script: 'index.js',
    watch: [ './routes' ],
    ext: 'js json'
  })
})
