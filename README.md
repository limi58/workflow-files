# workflow config
webpack2.x, rollup, gulpfile config files

# package.json scripts

**webpack**

```js
"scripts": {
  "start": "node ./server.js",
  "build": "set NODE_ENV=production&&webpack -p",
  "watch": "set NODE_ENV=development&&webpack --watch",
  "test": "node ./test/test.js"
}
```

**rollup**

```js
"scripts": {
  "dev": "set NODE_ENV=dev&&rollup -c -w",
  "build": "set NODE_ENV=production&&rollup -c",
  "test": "mocha"
},
```

# install

**webpack**

npm --registry=https://registry.npm.taobao.org i -D webpack babel-core babel-preset-es2015 babel-loader url-loader file-loader style-loader css-loader stylus-loader stylus webpack-dev-server extract-text-webpack-plugin html-webpack-plugin babel-preset-stage-0

**rollup**

npm --registry=https://registry.npm.taobao.org i -D babel-core babel-plugin-external-helpers babel-preset-es2015 babel-preset-stage-0 rollup-plugin-babel rollup-plugin-cleanup rollup-plugin-commonjs rollup-plugin-filesize rollup-plugin-livereload rollup-plugin-serve rollup-plugin-uglify rollup-watch rollup-plugin-replace rollup-plugin-eslint
