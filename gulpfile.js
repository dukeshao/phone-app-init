//引入gulp
var gulp = require("gulp");
//合并文件
var concat = require("gulp-concat");
//编译scss
var sass = require("gulp-sass");


//编译scss为css
gulp.task("scss", gulp.series([], function () {
  gulp.src("./*.scss")
    .pipe(concat('main.scss'))
    .pipe(sass())
    .pipe(gulp.dest("./"));
}))