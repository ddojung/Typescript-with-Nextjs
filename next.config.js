const path = require("path");
const ForkTsCheckerWebapckPlugin = require('fork-ts-checker-webpack-plugin');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  target: 'serverless',
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  webpack(config, { dev, isServer }) {
    if (dev && !isServer) {
      config.plugins.push(new ForkTsCheckerWebapckPlugin());
    }

    config.resolve.extensions = [".tsx", ".ts", ".js"];

    if (process.env.NODE_ENV === 'development') {
      config.devServer = {
        contentBase: "./dist",
        hot: true,
      }
    }

    return config;
  }
})