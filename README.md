# workflow config
Some webpack and gulpfile config files

package.json
```js
"scripts": {
  "start": "node server.js",
  "dist": "webpack -p --define process.env.NODE_ENV='production' --progress --colors",
}
```
