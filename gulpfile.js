/*
 * @Author: Nokey 
 * @Date: 2016-11-22 15:30:31 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2017-11-27 17:55:56
 */
'use strict';

var runSequence = require('run-sequence'),
    gulp = require('./gulp')([
        'html',
        'es6',
        'stylus',
        'imgmin',
        'moveimg',
        'static',
        'clean',
        'server',
        'open',
        'browserify'
    ]);

/**
 * 初始化服务
 */
gulp.task('dev', (cb)=>{
    runSequence(
        ['clean'],
        ['static'],
        ['moveimg'],
        ['stylus'],
        ['es6'],
        ['html'],
        ['server'],
        ['open'],
        cb);
});

/**
 * Default
 */
gulp.task('default', (cb)=>{
    runSequence(
        ['clean'],
        ['static'],
        ['imgmin'],
        ['stylus'],
        ['es6'],
        ['html'],
        cb);
});

/**
 * Build
 */
gulp.task('build', (cb)=>{
    runSequence(
        ['clean'],
        ['static'],
        ['imgmin'],
        ['stylus'],
        ['es6'],
        ['html'],
        cb);
});

/**
 * 启动Gulp，开始监听！:)
 */
gulp.task('watch', ['dev'], ()=>{
    gulp.watch(['./rev/**/*.json', './*.html'], ['html']);
    gulp.watch('./src/scripts/*.js', ['es6']);
    gulp.watch('./src/stylus/*.styl', ['stylus']);
    gulp.watch(['./src/scripts/plugins/**/*', './src/images/**/*'], ['static']);

    // 图片压缩放到build里，提高监听性能
    gulp.watch('./src/images/**/*', ['moveimg']);
});