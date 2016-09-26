var path = require('path');
var fs = require('fs');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var source = fs.createReadStream('./app/index.html');
var dest = fs.createWriteStream('./build/index.html');

source.pipe(dest);
source.on('end', function() { 
  console.log('index copy succeed');
});

source.on('error', function(err) { 
  console.log('index copy error'); 
});

var config = {
  entry: path.resolve(__dirname, './app/app.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js'
  },
  debug: false,
  module: {
    loaders : [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'app'),
        loader: 'babel-loader',
      },
      { test : /\.scss$/, loader : 'style!css!sass' },
      { test : /\.css$/, loader : 'style!css' },
      { test : /\.(png|jpg)$/, loader : 'url?limit=125000' },
    ]
  }
};

module.exports = config;