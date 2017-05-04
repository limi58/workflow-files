# workflow config
webpack2.x, rollup, gulpfile config files

# package.json scripts

**webpack**

```js
"scripts": {
  "dev": "webpack-dev-server --open",
  "build": "webpack -p --progress --profile --colors",
  "watch": "webpack --watch",
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

npm --registry=https://registry.npm.taobao.org i -D webpack babel-core babel-preset-es2015 babel-loader url-loader file-loader style-loader css-loader stylus-loader stylus webpack-dev-server extract-text-webpack-plugin html-webpack-plugin babel-preset-stage-0 eslint-loader eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard

**rollup**

npm --registry=https://registry.npm.taobao.org i -D babel-core babel-plugin-external-helpers babel-preset-es2015 babel-preset-stage-0 rollup-plugin-babel rollup-plugin-cleanup rollup-plugin-commonjs rollup-plugin-filesize rollup-plugin-livereload rollup-plugin-serve rollup-plugin-uglify rollup-watch rollup-plugin-replace rollup-plugin-eslint
