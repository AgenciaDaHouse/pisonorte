/**
 * tasks
 */
require('./gulp/build')
require('./gulp/clean')
require('./gulp/css')
require('./gulp/env')
require('./gulp/img')
require('./gulp/js')

// dev only
if (process.env.NODE_ENV !== 'production') {
  require('./gulp/server')
}
