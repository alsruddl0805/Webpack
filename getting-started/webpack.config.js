var path = require('path');

module.exports = {
  mode: 'none', // "build": "webpack --mode=none" 등의 옵션이 해당 module 내부에 들어감
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};