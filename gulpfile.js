var gulp = require('gulp'),
    browserSync = require('browser-sync')
  ;


// Tasks - List

gulp.task('default', ['watch', 'browser-sync'])
gulp.task('watch', _task_Watch);
gulp.task('browser-sync', _task_browserSync);

// Tasks - Functions

  function _task_browserSync() {
    browserSync.init({
      server: {
          baseDir: "./"
      }
    });
  }

  function _task_Watch() {
    gulp.watch("./styles/**/*.css", browserSync.reload);
    gulp.watch("./*.html").on('change', browserSync.reload);
  }