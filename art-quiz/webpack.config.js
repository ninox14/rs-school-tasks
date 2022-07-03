const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer');
// const { dirname } = require('path');

const nothing = () => {};

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';
  const isAnalyze = env.analyze;

  return {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'source-map' : 'eval',
    entry: ['./src/index.js'],
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, '/build'),
    },
    resolve: {
      extensions: ['.js', '.json', '.mjs'],
      alias: {
        '@': path.join(__dirname, 'src'),
      },
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
            {
              loader: 'sass-resources-loader',
              options: {
                resources: 'src/styles/vars.scss',
              },
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(wav|mp3)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.html$/,
          use: {
            loader: 'html-loader',
          },
        },
      ],
    },
    devServer: {
      static: path.resolve(__dirname, '/src/static'),
      port: 8080,
      liveReload: true,
    },
    plugins: [
      isProduction ? new CleanWebpackPlugin({}) : nothing,
      new HtmlWebpackPlugin({
        template: './src/index.html',
        favicon: './src/assets/favicons/favicon-32x32.png',
      }),
      isAnalyze ? new BundleAnalyzerPlugin() : nothing,
    ],
  };
};
