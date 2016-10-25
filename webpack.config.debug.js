var path = require('path');
var webpack = require('webpack');

entry={};
entry["user"] = './app/user.jsx';
entry[0] = 'webpack-dev-server/client?http://localhost:3000';
entry[1] = 'webpack/hot/only-dev-server';

module.exports = {
    entry: entry,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/static/',
    },
    externals: {
        'jquery': {
          root: 'jQuery',
          commonjs2: 'jquery',
          commonjs: 'jquery',
          amd: 'jquery'
        }
      },
    module: {
        loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel',
          query:
          {
            presets:['es2015','react']
          }
        }, {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'source-map'
}
