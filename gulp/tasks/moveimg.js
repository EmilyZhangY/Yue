/*
 * @Author: Mr.B 
 * @Date: 2017-11-27 15:36:30 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2017-11-27 17:10:46
 */
'use strict'; 

var gulp    = require('gulp'),
    connect = require('gulp-connect');

module.exports = ()=>{
    return gulp.src('./src/images/**/*')
        .pipe(gulp.dest('./build/images'))
        .pipe(connect.reload());
}