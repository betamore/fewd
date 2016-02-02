var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browserSync', function() {
  browserSync({
    proxy: "localhost:4000"
  })
});

gulp.task('watch', ['browserSync'], function() {
  gulp.watch('_site/**/*.html', browserSync.reload);
  gulp.watch('css/main.css', browserSync.reload);
});
