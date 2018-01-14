module.exports = function () {
    $.gulp.task('pug:build' , () => {
        return $.gulp.src('./src/source/pug/pages/*.pug')
            .pipe($.gp.pug({
                pretty:false
            }))
            .pipe($.gulp.dest('./src'));
    });

    $.gulp.task('pug:dev' , () => {
        return $.gulp.src('./src/source/pug/pages/*.pug')
            .pipe($.gp.pug({
                pretty:true
            }))
            .on('error', $.gp.notify.onError(function(error) {
                return {
                    title: 'Pug',
                    message: error.message
                };
            }))
            .pipe($.gulp.dest('./src'))
            .on('end', $.browserSync.reload);
    });
};