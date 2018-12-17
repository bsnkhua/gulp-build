var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function() {
    runSequence(
        'clean',
        'copy',
        'sass',
        'server',
        'copy:watch',
        'sass:watch'
    );
});
