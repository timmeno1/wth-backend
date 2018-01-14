module.exports = function () {
    $.gulp.task('image:build', () =>
        $.gulp.src('./src/source/img/**/*.{png,jpg,gif}')
            .pipe($.gp.imagemin({
                optimizationLevel: 4
            }))
            .pipe($.gulp.dest('./src/assets/img'))
    );

    $.gulp.task('image:dev', () =>
    $.gulp.src('./src/source/img/**/*.{png,jpg,gif}')        
        .pipe($.gulp.dest('./src/assets/img'))
    );
};