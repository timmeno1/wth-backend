'use strict';

global.$ = {
    gulp: require('gulp'),
    del: require('del'),
    gp: require('gulp-load-plugins')(),
    browserSync: require('browser-sync').create(),

    path: {
        tasks: require('./gulp/config/tasks.js')
    }
};

$.path.tasks.forEach(function (taskPath) {
   require(taskPath)();
});

$.gulp.task('dev', $.gulp.series(
    'clean',
    $.gulp.parallel('pug:dev', 'sass:dev', 'image:dev', 'svg', 'fonts')
));

$.gulp.task('build', $.gulp.series(
    'clean',
    $.gulp.parallel('pug:build', 'sass:build', 'image:build', 'svg', 'fonts')
));

$.gulp.task('default', $.gulp.series(
    'dev',
    $.gulp.parallel('watch', 'serve')
));