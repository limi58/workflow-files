# workflow config
webpack3.x, rollup, gulpfile config files

# package.json 

**webpack devDependencies**

```js
"devDependencies": {
  "babel-cli": "^6.14.0",
  "babel-core": "^6.25.0",
  "babel-loader": "^6.2.4",
  "babel-plugin-transform-decorators-legacy": "^1.3.4",
  "babel-preset-es2015": "^6.9.0",
  "babel-preset-latest": "^6.14.0",
  "babel-preset-react": "^6.11.1",
  "babel-preset-stage-0": "^6.22.0",
  "bundle-loader": "^0.5.5",
  "chunk-manifest-webpack-plugin": "^1.1.0",
  "clean-webpack-plugin": "^0.1.16",
  "cross-env": "^5.0.1",
  "css-loader": "^0.28.0",
  "eslint": "^4.18.2",
  "eslint-config-standard": "^11.0.0",
  "eslint-plugin-import": "^2.9.0",
  "eslint-plugin-node": "^6.0.1",
  "eslint-plugin-promise": "^3.7.0",
  "eslint-plugin-standard": "^3.0.1",
  "extract-text-webpack-plugin": "^2.1.2",
  "file-loader": "^0.11.1",
  "html-webpack-plugin": "^2.29.0",
  "style-loader": "^0.16.1",
  "stylus": "^0.54.5",
  "stylus-loader": "^3.0.1",
  "url-loader": "^0.5.9",
  "webpack": "^3.3.0",
  "webpack-chunk-hash": "^0.4.0",
  "webpack-dev-server": "^2.4.5"
}
```

**webpack scripts**

```js
"scripts": {
  "dev": "webpack-dev-server --open",
  "build": "webpack -p --progress --profile --colors",
  "watch": "webpack --watch",
  "test": "node ./test/test.js"
}
```

**rollup scripts**

```js
"scripts": {
  "dev": "set NODE_ENV=dev&&rollup -c -w",
  "build": "set NODE_ENV=production&&rollup -c",
  "test": "mocha"
},
```

# install

**rollup**

npm --registry=https://registry.npm.taobao.org i -D babel-core babel-plugin-external-helpers babel-preset-es2015 babel-preset-stage-0 rollup-plugin-babel rollup-plugin-cleanup rollup-plugin-commonjs rollup-plugin-filesize rollup-plugin-livereload rollup-plugin-serve rollup-plugin-uglify rollup-watch rollup-plugin-replace rollup-plugin-eslint
