const gulp = require('gulp')
const ejs = require("gulp-ejs")
const rename = require("gulp-rename")
const connect = require("gulp-connect")
const sass = require("gulp-sass")
sass.compiler = require("node-sass")

function html(done) {
    gulp.src("./src/html/templates/*.ejs")
    .pipe(ejs())
    .pipe(rename(function(path) {
        path.extname = ".html"
    }))
    .pipe(gulp.dest("./dist"))
    .pipe(connect.reload())
    done()
}

function watchHtml(params) {
    gulp.watch("./src/html/**/*.ejs", { ignoreInitial: false}, html)
}
//////////////////////////
function scss(done) {
    gulp.src("src/css/**/*.scss")
        .pipe(sass().on("error", err => console.log(err)))
        .pipe(gulp.dest("dist/assets/css"))
        .pipe(connect.reload());
    done();
}
function watchScss() {
    gulp.watch("src/css/**/*.scss", { ignoreInitial: false }, scss);
}

/////////////////////////
function images(done) {
    const imagemin = require("gulp-imagemin")
    gulp.src("./src/images/*")
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/assets/images'))
        .pipe(connect.reload());
    done();
}
function watchImages() {
    gulp.watch("./src/images/*", { ignoreInitial: false }, images);
}

function javascript(done) {
    const babel = require("gulp-babel")
    gulp.src("./src/javascript/**/*.js")
        .pipe(babel({
            presets: ["@babel/env"]
            // npm i @babel/preset-env
        }).on("error", e => console.error(e)))
        .pipe(gulp.dest('./dist/assets/javascript'))
        .pipe(connect.reload());
    done();
}
function watchJavascript() {
    gulp.watch("./src/javascript/**/*.js", { ignoreInitial: false }, javascript);
}


gulp.task("dev", function(done){
    watchHtml();
    watchScss();
    watchJavascript();
    watchImages();
    connect.server({
        livereload: true,
        root: "dist"
    })
    done();
})
