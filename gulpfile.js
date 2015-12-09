/**
 * Dependencies
 */
var LessPluginAutoPrefix = require('less-plugin-autoprefix');

var gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefix = new LessPluginAutoPrefix({ browsers: ["last 2 versions"] }),
    concat = require('gulp-concat'),
    runSequence = require('run-sequence'),
    browserSync = require('browser-sync').create();


/**
 * Project paths
 */
var url = 'http://heha.loc';

var paths = {
    root: 'heha',
    assets: 'heha/assets',
    vendor: 'src/vendor',

    styles: 'heha/assets/css',
    scripts: 'heha/assets/js',
    images:  'heha/assets/images'
};


/**
 * JS dependencies installed by Bower and compiled into vendor.js
 */
var jsDependencies = [
    paths.vendor + '/jquery/dist/jquery.min.js',
    paths.vendor + '/jquery.fitvids/jquery.fitvids.js'
];


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
    runSequence(['compile-less', 'combine-javascript-dependencies'], cb);
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
 * Combine js dependencies task
 */
gulp.task('combine-javascript-dependencies', function()
{
    return gulp.src(jsDependencies)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(paths.scripts));
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

    /**
     * Watch .less files
     */
    gulp.watch([paths.scripts + '/**/*.js'], function(cb)
    {
        runSequence('combine-javascript-dependencies');
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