const gulp = require("gulp");
const ts = require("gulp-typescript");
const uglify = require("gulp-uglify");
const sourcemaps = require("gulp-sourcemaps");

const tsProject = ts.createProject("tsconfig.json");

gulp.task("default", function () {
  return gulp
    .src("src/**/**.ts")
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist"));
});
