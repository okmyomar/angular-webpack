const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

// start or build
const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

const common = {
  // Entry accepts a path or an object of entries. We'll be using the
  // latter form given it's convenient with more complex configurations.
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  }
};


console.log('TARGET', TARGET)

// Default configuratoin
if (TARGET === 'build' || !TARGET) {
  module.exports = merge(common, {});
}

if (TARGET === 'start') {
  module.exports = merge(common, {
    module: {
      loaders: [
        {
          test: /\.css$/,
          loaders: ['style', 'css'],
          include: PATHS.app
        }
      ]
    },

    devServer: {
      contentBase: PATHS.build,
      devtool: 'source-map',

      // Enable history API fallback so HTML5 History API based
      // routing works. This is a good default that will come
      // in handy in more complicated setups.
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only'
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}
