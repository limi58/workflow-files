# workflow config
Some webpack and gulpfile config files

# package.json scripts
```js
"scripts": {
  "start": "set NODE_ENV=development&&webpack --watch ./src/libname.js ./dist/libname.js",
  "build": "npm run dev&&npm run min",
  "dev": "set NODE_ENV=development&&webpack ./src/libname.js ./dist/libname.js",
  "min": "set NODE_ENV=production&&webpack -p src/libname.js dist/libname.min.js",
  "test": "node ./test/test.js"
}
```

# install

npm --registry=https://registry.npm.taobao.org install --save-dev webpack babel-core babel-preset-es2015 babel-loader url-loader file-loader style-loader css-loader sass-loader webpack-dev-server extract-text-webpack-plugin
