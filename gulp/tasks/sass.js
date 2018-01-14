module.exports = function () {
    $.gulp.task('sass:build', () => {
        return $.gulp.src('./src/source/sass/main.scss')            
            .pipe($.gp.sass())
            .pipe($.gp.autoprefixer({
                browsers:['last 5 version']
            }))
            .pipe($.gp.csso())
            .pipe($.gp.rename('styles.css'))            
            .pipe($.gulp.dest('./src'));
    });

    $.gulp.task('sass:dev', () => {
        return $.gulp.src('./src/source/sass/main.scss')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass({
                errLogToConsole: false
            }))
            .on('error', $.gp.notify.onError(function (error) {
                return notify().write(error);
            }))
            .pipe($.gp.autoprefixer({
                browsers:['last 5 version']
            }))          
            .pipe($.gp.sourcemaps.write())
            .pipe($.gp.rename('styles.css'))
            .pipe($.gulp.dest('./src'))
            .pipe($.browserSync.reload({
                stream:true
            }));
    });
};