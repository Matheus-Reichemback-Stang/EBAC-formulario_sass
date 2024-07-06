const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const htmlmin = require('gulp-htmlmin');


function compilaSass(){
    return gulp.src('./src/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles/'))
}

function minificaHtml() {
    return gulp.src('./src/index.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./build/'))
}

exports.default = gulp.series(compilaSass, minificaHtml);
exports.watch = function(){
    gulp.watch('./src/styles/main.scss', {ignoreInitial: false}, gulp.series(compilaSass))
    gulp.watch('./src/styles/*/*.scss', {ignoreInitial: false}, gulp.series(compilaSass))
    gulp.watch('./src/index.html', {ignoreInitial: false}, gulp.series(minificaHtml))
}