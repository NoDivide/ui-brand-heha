/**
 * Dependencies
 */
var LessPluginAutoPrefix = require('less-plugin-autoprefix');

var gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefix = new LessPluginAutoPrefix({ browsers: ["last 2 versions"] }),
    sourceMaps = require('gulp-sourcemaps'),
    runSequence = require('run-sequence'),
    browserSync = require('browser-sync').create();


/**
 * Project paths
 */
var url = 'http://heha.loc';

var paths = {
    root: 'heha',
    assets: 'heha/assets',

    styles: 'heha/assets/css',
    scripts: 'heha/assets/js',
    images:  'heha/assets/images'
};


/**
 * Default task
 */
gulp.task('default', function(cb)
{
    runSequence('run', 'watch-with-browser-sync', cb);
});


/**
 * Run task
 */
gulp.task('run', function(cb)
{
    runSequence(['compile-less'], cb);
});


/**
 * Compile .less files task
 */
gulp.task('compile-less', function()
{
    return gulp.src(paths.styles + '/app.less')
        .pipe(less({
            plugins: [autoprefix]
        }))
        .pipe(gulp.dest(paths.styles));
});


/**
 * Watch task
 */
gulp.task('watch', function()
{
    /**
     * Watch .less files
     */
    gulp.watch([paths.styles + '/**/*.less'], function(cb)
    {
        runSequence('compile-less');
    });
});


/**
 * Browser Sync (aka Live Reload) task
 */
gulp.task('watch-with-browser-sync', ['watch'], function()
{
    browserSync.init({
        proxy: url,
        open: false
    });

    /**
     *  Watch any files in root, reload on change
     */
    gulp.watch([paths.root + '/**/*.{php,css,html,js}']).on('change', browserSync.reload);
});