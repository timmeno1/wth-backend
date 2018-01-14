module.exports = function () {
    $.gulp.task('clean', function() {
        return $.del([
            './src/assets/img/',
            './src/assets/fonts/',
            './src/index.html',
            './src/styles.css'
        ]);
    });
};