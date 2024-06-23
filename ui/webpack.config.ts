import path from 'path'

import Dotenv from 'dotenv-webpack'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin'
import { type Configuration as WebpackConfiguration } from 'webpack'
import { type Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'

import svgoConfig from './svgo.config'

export const CONFIG = (env: {
  production: boolean
}): WebpackConfiguration & { devServer: WebpackDevServerConfiguration } => {
  return {
    mode: env.production ? 'production' : 'development',
    devtool: env.production ? false : 'eval-cheap-module-source-map',
    context: __dirname,
    entry: './src/index.tsx',
    target: 'web',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
      },
      extensions: ['.tsx', '.ts', '...'],
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      clean: true,
      filename: env.production ? 'static/js/bundle-[fullhash].js' : 'static/js/bundle-[name].js',
      chunkFilename: env.production ? 'static/js/[chunkhash].chunk.js' : 'static/js/[name].chunk.js',
      publicPath: '/',
    },
    devServer: {
      port: 3000,
      historyApiFallback: true,
      client: {
        overlay: {
          errors: false,
          warnings: false,
          runtimeErrors: true,
        },
      },
    },
    module: {
      rules: LOADER_RULES,
    },
    optimization: {
      minimizer: [IMAGE_MINIMIZER_PLUGIN, '...'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html'),
      }),
      new Dotenv({ safe: true, allowEmptyValues: false }),
      new ForkTsCheckerWebpackPlugin(),
    ].filter(Boolean),
  }
}

const LOADER_RULES = [
  {
    test: /\.tsx?$/,
    loader: 'swc-loader',
  },
  {
    test: /\.svg$/i,
    type: 'asset',
    resourceQuery: /url/, // *.svg?url
  },
  {
    test: /\.svg$/i,
    issuer: /\.tsx?$/,
    resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
    use: [{ loader: '@svgr/webpack', options: { svgoConfig } }],
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
  },
  {
    test: /\.(jpe?g|png|webp)$/i,
    type: 'asset',
  },
]

const IMAGE_MINIMIZER_PLUGIN = new ImageMinimizerPlugin({
  minimizer: [
    {
      implementation: ImageMinimizerPlugin.sharpMinify,
      options: {
        encodeOptions: {
          jpeg: {
            // https://sharp.pixelplumbing.com/api-output#jpeg
            quality: 100,
          },
          webp: {
            // https://sharp.pixelplumbing.com/api-output#webp
            lossless: true,
          },
          // png by default sets the quality to 100%, which is same as lossless
          // https://sharp.pixelplumbing.com/api-output#png
          png: {},
        },
      },
    },
    {
      implementation: ImageMinimizerPlugin.svgoMinify,
      options: {
        encodeOptions: svgoConfig,
      },
    },
  ],
})

export default CONFIG
