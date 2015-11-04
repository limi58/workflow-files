# webpackConfig
some webpack and gulpfile config js

# package scripts
```js
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "node server.js",
  "build": "set NODE_ENV=dev&&webpack --progress --profile --colors",
  "dist": "set NODE_ENV=production&&webpack -p --progress --profile --colors"
},
```
