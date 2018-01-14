module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('./src/source/pug/**/*.pug', $.gulp.series('pug:dev'));
        $.gulp.watch('./src/source/sass/**/*.scss', $.gulp.series('sass:dev'));
        $.gulp.watch('./src/source/fonts/**/*.*', $.gulp.series('fonts'));
        $.gulp.watch('./src/source/img/**/*.{png,jpg,gif}', $.gulp.series('image:dev'));
        $.gulp.watch('./src/source/img/**/*.svg', $.gulp.series('svg'));        
    });
};