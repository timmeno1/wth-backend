module.exports = function () { 
    $.gulp.task('svg',function () { 
        return $.gulp.src('./src/source/img/**/*.svg') 
        .pipe($.gp.svgmin()) 
        .pipe($.gp.svgstore({ 
            inlineSvg: true 
        })) 
        .pipe($.gp.rename('symbols.svg')) 
        .pipe($.gulp.dest('./src/assets/img/')); 
    }); 
}; 
    