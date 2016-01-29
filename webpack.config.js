var webpack = require('webpack');

module.exports = {
  entry: './www/js/index.js',
  output: {
    path: './www',
    filename: 'client.js',
  },

  devServer: {
    contentBase: "./www",
    publicPath: "/",
    colors: true,
  },

  bail: true,
  debug: true,
  cache: true,

  devtool: 'inline-source-map',

  stats: {
    colors: true,
    reasons: true,
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.ts', '.tsx'],
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css!postcss'
      },
      {
        test: /\.scss$/,
        loader: "style!raw!postcss!sass",
      },
      {
        test: /\.gif/,
        loader: 'url?limit=10000&mimetype=image/gif'
      },
      {
        test: /\.jpg/,
        loader: 'url?limit=10000&mimetype=image/jpg'
      },
      {
        test: /\.png/,
        loader: 'url?limit=10000&mimetype=image/png'
      },
      {
        test: /\.svg/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-2'],
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts',
        query: {
          transpileOnly: true,
        },
      },
    ],
  },
  // postcss: [autoprefixer([
  //   'Android 2.3',
  //   'Android >= 4',
  //   'Chrome >= 20',
  //   'Firefox >= 24',
  //   'Explorer >= 8',
  //   'iOS >= 6',
  //   'Opera >= 12',
  //   'Safari >= 6',
  // ])],
};
