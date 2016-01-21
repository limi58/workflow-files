/**
 * gulpfile config file
 * author - limi58
 * $ npm start - to live debug app
 * $ npm run dev - to build the development css and js bundle
 * $ npm run dist - to build the production css and js bundle
 */

const gulp = require('gulp')
const uglify = require('gulp-uglify')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const babelify = require('babelify')
const sass = require('gulp-sass')
const connect = require('gulp-connect')
const buffer = require('vinyl-buffer')
const path = require('path')
const gulpif = require('gulp-if')
const header = require('gulp-header')
const argv = require('yargs').argv

const config = {
  serverDir: path.join(__dirname, 'dist'),
  port: 3838,
  entryJs: path.join(__dirname, 'src', 'main.js'), //array or simgle
  entryCss: path.join(__dirname, 'src', 'main.scss'), // * or simgle
  watchCss: path.join(__dirname, 'src', '**', '*.scss'),
  watchJs: path.join(__dirname, 'src', '**', '*.js'),
  distJs: path.join(__dirname, 'dist', 'js'),
  distJsName: 'main.js',
  distCss: path.join(__dirname, 'dist', 'css'),
  header: '// fullSlider v1.2.0\n// author - limi58\n// github - https://github.com/limi58/fullSlider\n',
  debug: argv.debug === 'false' ? false : true,
}

/**
 * tasks
 */

gulp.task('default', ['connect', 'watchJs', 'watchCss', 'buildJs', 'buildCss'])
gulp.task('build', ['buildJs', 'buildCss'])

gulp.task('connect', function () {
  connect.server({
    root: config.serverDir,
    livereload: true,
    port: config.port,
  })
})

gulp.task('buildCss', function () {
  buildCss()
})

gulp.task('buildJs', function () {
  buildJs()
})

gulp.task('watchCss', function(){
   gulp.watch(config.watchCss, ['buildCss'])
})

gulp.task('watchJs', function(){
  gulp.watch(config.watchJs, ['buildJs'])
})


/**
 * build function
 */

function buildJs() {
  browserify(config.entryJs)
    .transform("babelify", {presets: ["es2015"]})
    .bundle()
    .on('error', console.error)
    .pipe(source(config.distJsName))
    .pipe(buffer())
    .pipe(gulpif(! config.debug, uglify()))
    .pipe(gulpif(! config.debug, header(config.header)))
    .pipe(gulp.dest(config.distJs))
    .pipe(gulpif(config.debug, connect.reload()))
} 

function buildCss(){
  gulp.src(config.entryCss)
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(gulp.dest(config.distCss))
   .pipe(gulpif(config.debug, connect.reload()))
}