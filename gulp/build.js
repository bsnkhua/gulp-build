var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function() {
    runSequence(
        'clean',
        'copy',
        'sass',
        'group-media-queries',
        'imagemin'
    );
});
