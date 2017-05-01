import resolve from 'rollup-plugin-node-resolve' // resolve node_modules
import commonjs from 'rollup-plugin-commonjs' // to es6 module
import babel from 'rollup-plugin-babel' // babel
import filesize from 'rollup-plugin-filesize' // show file size
import livereload from 'rollup-plugin-livereload' // auto refresh
import serve from 'rollup-plugin-serve' // create server
import uglify from 'rollup-plugin-uglify' // minify js
import cleanup from 'rollup-plugin-cleanup' // remove space etc
import eslint from 'rollup-plugin-eslint' // eslint
import replace from 'rollup-plugin-replace' // replace js str
const DEBUG = process.env.NODE_ENV !== 'production'

const devConfig = [
  serve({
    open: true,
    verbose: true,
    contentBase: 'dist',
    host: 'localhost',
    port: 8080,
  }),
  livereload({
    watch: 'src',
    verbose: true,
  }),
]

const proConfig = [
  uglify(),
  cleanup(),
]

const config = DEBUG ? devConfig : proConfig

export default {
  entry: 'src/index.js',
  format: 'umd',
  dest: './dist/bundle.js',
  sourceMap: false,
  plugins: [
    commonjs(),
    resolve(),
    filesize(),
    eslint({
      throwError: true,
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    replace({
      exclude: 'node_modules/**',
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    ...config,
  ],
  moduleName: 'PullToRefresh',
}
