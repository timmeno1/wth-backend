module.exports = function() {
    $.gulp.task('fonts', () => {
        return $.gulp.src('./src/source/fonts/**/*.*')
            .pipe($.gulp.dest('./src/assets/fonts/'));
    });
};