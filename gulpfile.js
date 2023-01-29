const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const server = require("browser-sync").create();
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const svgstore = require("gulp-svgstore")
const htmlmin = require("gulp-htmlmin");
const del = require("del");
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');

const css = function () {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
};

const syncServer = function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/sass/**/*.{scss,sass}", gulp.series(css));
  gulp.watch("source/img/icon-*.svg", gulp.series(sprite, html, refresh));
  gulp.watch('source/js/**/*.{js,json}', gulp.series(script, refresh));
  gulp.watch("source/*.html", gulp.series(html, refresh));
};

const refresh = function (done) {
  server.reload();
  done();
};

const images = function () {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({ optimizationLevel: 3 }),
      imagemin.mozjpeg({quality: 75, progressive: true }),
      imagemin.svgo()
    ]))

    .pipe(gulp.dest("source/img"));

};

const createWebp = function () {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({ quality: 90 }))
    .pipe(gulp.dest("source/img"));
};

const sprite = function () {
  return gulp.src("source/img/sprite/*.svg")
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename("sprite_auto.svg"))
    .pipe(gulp.dest("build/img"));
};

const html = function () {
  return gulp.src("source/*.html")
  .pipe(htmlmin({collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
};

const script = function () {
  return gulp.src(['source/js/main.js'])
    .pipe(webpackStream(webpackConfig))
    .pipe(gulp.dest('build/js'))
};


const copy = function () {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/js/**",
  ], {
    base: "source"
  })
    .pipe(gulp.dest("build"));
};

const clean = function () {
  return del("build");
};

const start = gulp.series(clean, copy, css, images, createWebp, sprite, html, script, syncServer);
const build = gulp.series(clean, script, copy, css, images, createWebp, sprite, html);

gulp.task('default', start);
gulp.task('build', build);
