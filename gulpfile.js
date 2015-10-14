// npm install -D gulp gulp-rename gulp-header gulp-uglify gulp-minify-css browserify vinyl-source-stream reactify babelify gulp-less gulp-connect vinyl-buffer

var gulp = require('gulp');
var rename = require('gulp-rename');
var header = require('gulp-header');
var uglify = require('gulp-uglify');
var minicss = require('gulp-minify-css');
var browserify = require('browserify');
var watchify = require('watchify');  
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var babelify = require('babelify');
var less = require('gulp-less');
var connect = require('gulp-connect');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');  
var _ = require('lodash');

var getTime = function(){
  var date = new Date();
  var time = date.getFullYear() + '/' + (parseInt(date.getMonth()) + 1) + '/' + date.getDate();
  return time;
}


var copyright = ['/**',
  ' * ' + getTime(),
  ' * link      : https://github.com/limi58',
  ' * copyright : limi58, http://www.imbgf.com',
  ' */',
  ''].join('\n');

gulp.task('connect', function () {
  connect.server({
    root: './dist/',
    livereload: true
  });
});


// /*
//   dev 
//   $ gulp
//  */

var b = watchify(browserify(_.assign({}, watchify.args, {  
  cache: {}, // required for watchify
  packageCache: {}, // required for watchify
  entries: ['./src/js/entry.jsx'],
  transform: [babelify, reactify]
}))); 

gulp.task('default', ['connect', 'buildjs', 'buildcss', 'watchcss']);  
b.on('update', bundle); // on any dep update, runs the bundler  
b.on('log', gutil.log); // output build logs to terminal

gulp.task('buildjs', function(){
  bundle()
})

gulp.task('buildcss',function(){
  return gulp.src('./src/styles/entry.less')
  .pipe(less())
  .pipe(rename('bundle.css'))
  .pipe(gulp.dest('./dist/styles'))
  .pipe(connect.reload());
});

gulp.task('watchcss', function(){
   gulp.watch('./src/styles/**/*.*', ['buildcss']);
});

function bundle(){
  return b.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    .pipe(buffer())
    // .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
    .pipe(connect.reload());
}


// /*
//   production 
//   $ gulp build
//  */
gulp.task('build',['bundlejs','bundlecss']);

gulp.task('bundlejs',function(){
  browserify('./src/js/entry.jsx')
  .transform(reactify)
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest('./dist/js/'))
  console.log('seccessful build the js !!!!!!!!!!!!!!!!!!!')
});

gulp.task('bundlecss',function(){
  return gulp.src('./src/styles/entry.less')
  .pipe(less())
  .pipe(minicss())
  .pipe(rename('bundle.css'))
  .pipe(gulp.dest('./dist/styles/'))
  console.log('seccessful build the css !!!!!!!!!!!!!!!!!!!')
});



