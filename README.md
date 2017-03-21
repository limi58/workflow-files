# workflow config
webpack2.x and gulpfile config files

# package.json scripts
```js
"scripts": {
  "start": "node ./server.js",
  "build": "set NODE_ENV=production&&webpack -p",
  "watch": "set NODE_ENV=development&&webpack --watch",
  "test": "node ./test/test.js"
}
```

# install

```bash
npm --registry=https://registry.npm.taobao.org install --save-dev webpack babel-core babel-preset-es2015 babel-loader url-loader file-loader style-loader css-loader stylus-loader stylus webpack-dev-server extract-text-webpack-plugin html-webpack-plugin babel-preset-stage-0
```
