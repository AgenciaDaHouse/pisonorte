'use strict'

/**
 * dependencies
 */
var gulp = require('gulp')
var source = require('vinyl-source-stream')
var browserify = require('browserify')
var glob = require('glob')
var es = require('event-stream')
var notify = require('gulp-notify')
var flatten = require('gulp-flatten')
var eslint = require('gulp-eslint')
var plumber = require('gulp-plumber')
var browserSync = require('browser-sync')

/**
 * eslint task
 */
gulp.task('eslint', function () {
  return gulp.src([ './src/js/*.js' ])
    .pipe(plumber({ errorHandler: notify.onError('ESLINT Error: <%= error.message %>') }))
    .pipe(eslint())
    .pipe(eslint.format())
})

/**
 * browserify task
 */
gulp.task('browserify', function () {
  return glob('./src/js/*.js', function (err, files) {
    if (err) {
      throw new Error(err)
    }

    var tasks = files.map(function (entry) {
      return browserify({ entries: [ entry ] })
        .bundle()
        .on('error', function () {
          var args = Array.prototype.slice.call(arguments)

          notify.onError({
            title: 'BROWSERIFY Error',
            message: '<%= error %>'
          }).apply(this, args)

          this.emit('end')
        })

        .pipe(source(entry))
        .pipe(flatten())
        .pipe(gulp.dest('./public/js'))
        .pipe(browserSync.reload({ stream: true }))
      })

    return es.merge.apply(null, tasks)
  })
})

/**
 * js task
 */
gulp.task('js', [ 'browserify' ])
