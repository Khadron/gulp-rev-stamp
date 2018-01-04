var gulp = require('gulp');
var stamp = require('./index');

gulp.task("build", function() {
    gulp.src('./test/index.html').pipe(stamp('$hehe$')).pipe(gulp.dest('./test/dist'));
});