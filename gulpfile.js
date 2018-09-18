const pug = require('gulp-pug')
const gulp = require('gulp')
const stylus = require('gulp-stylus')
const rename = require("gulp-rename")
const babel = require('gulp-babel')
const error = require('gulp-plumber')
const uglify = require('gulp-uglify')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')

gulp.task('dev', ['watchStyle', 'watchJs', 'watchPug', 'buildJs', 'buildStyle', 'buildPug'])
gulp.task('build', ['buildJs', 'buildStyle', 'buildPug'])

gulp.task("watchPug", () => {
  const pugWatcher = gulp.watch('./src/pug/**/*.pug', ['buildPug'])
  pugWatcher.on('change', event => {
    console.log(`File ${event.path} was ${event.type}, running tasks...`)
  })
})

gulp.task("watchStyle", () => {
  const styleWatcher = gulp.watch('./src/stylus/**/*.styl', ['buildStyle'])
  styleWatcher.on('change', event => {
    console.log(`File ${event.path} was ${event.type}, running tasks...`)
  })
})

gulp.task("watchJs", () => {
  const jsWatcher = gulp.watch('./src/**/*.js', ['buildJs'])
  jsWatcher.on('change', event => {
    console.log(`File ${event.path} was ${event.type}, running tasks...`)
  })
})

gulp.task("buildJs", () => {
  return gulp.src("src/**/*.js")
    .pipe(error())
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest("public"))
    .on('error', err => console.log(err))
})

gulp.task('buildPug', () => {
  return gulp.src('./src/pug/pages/*.pug')
    .pipe(error())
    .pipe(pug({
      pretty: true,
    }))
    .pipe(gulp.dest('./public/home'))
})

gulp.task('buildStyle', () => {
  return gulp.src('./src/stylus/index.styl')
    .pipe(error())
    .pipe(stylus({
      compress: true
    }))
    .pipe(postcss([ autoprefixer({
      browsers: [
        "iOS >= 8",
        "Android >= 4.3",
      ]
  }) ]))
    .pipe(rename('main.css'))
    .pipe(gulp.dest('./public/css'))
})
