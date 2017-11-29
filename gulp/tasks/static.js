/*
 * @Author: Mr.B 
 * @Date: 2017-11-27 15:39:34 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2017-11-27 17:12:46
 */
'use strict'; 

var gulp    = require('gulp'),
    connect = require('gulp-connect');

module.exports = ()=>{
    gulp.src('./src/scripts/plugins/**/*')
        .pipe(gulp.dest('./build/scripts/plugins'))
        .pipe(connect.reload());

    gulp.src('./src/media/**/*')
        .pipe(gulp.dest('./build/media'))
        .pipe(connect.reload());

    gulp.src('./src/stylus/fonts/**/*')
        .pipe(gulp.dest('./build/styles/fonts'))
        .pipe(connect.reload());

    gulp.src('./src/favicon.png')
        .pipe(gulp.dest('./build'))
        .pipe(connect.reload());
}