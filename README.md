# workflow config
webpack4.x, gulpfile config files

# package.json 

**webpack devDependencies**

```js
"devDependencies": {
  "autoprefixer": "^8.4.1",
  "babel-core": "^6.26.3",
  "babel-loader": "^7.1.4",
  "babel-plugin-syntax-dynamic-import": "^6.18.0",
  "babel-preset-env": "^1.6.1",
  "babel-preset-es2015": "^6.24.1",
  "babel-preset-react": "^6.24.1",
  "babel-preset-stage-0": "^6.24.1",
  "clean-webpack-plugin": "^0.1.19",
  "css-loader": "^0.28.11",
  "file-loader": "^1.1.11",
  "html-webpack-plugin": "^3.2.0",
  "mini-css-extract-plugin": "^0.4.0",
  "postcss-loader": "^2.1.5",
  "pug": "^2.0.3",
  "pug-loader": "^2.4.0",
  "react": "^16.4.2",
  "react-dom": "^16.4.2",
  "react-hot-loader": "^4.2.0",
  "react-lazyload": "^2.3.0",
  "react-loadable": "^5.4.0",
  "react-router-dom": "^4.2.2",
  "style-loader": "^0.21.0",
  "stylus": "^0.54.5",
  "stylus-loader": "^3.0.2",
  "uglifyjs-webpack-plugin": "^1.2.5",
  "webpack": "^4.10.1",
  "webpack-bundle-analyzer": "^2.13.1",
  "webpack-cli": "^2.1.4",
  "webpack-dev-server": "^3.1.4",
  "webpack-merge": "^4.1.2",
}
```

**webpack scripts**

```js
"scripts": {
  "start": "npx webpack-dev-server --hot --config webpack_dev.js",
  "build": "npx webpack --mode=production --config webpack_prod.js --progress --colors",
}
```

