const Path = require('path');
const { JavascriptWebpackConfig, CssWebpackConfig } = require('@silverstripe/webpack-config');
const { ModuleFederationPlugin } = require('webpack').container;

const ENV = process.env.NODE_ENV;

const PATHS = {
  ROOT: Path.resolve(),
  SRC: Path.resolve('client/src'),
};

const rules = [
  {
    // .js, .mjs, and .jsx files are caught
    test: /\.m?jsx?$/,
    loader: 'babel-loader',
    options: {
      presets: [
        '@babel/preset-react',
      ],
      comments: false,
      cacheDirectory: (ENV !== 'production'),
    },
  },
  {
    test: /\.(png|gif|jpe?g|svg)$/,
    exclude: /fonts[\/\\]([\w_-]+)\.svg$/,
    loader: 'file-loader',
    options: {
      name: 'images/[name].[ext]',
    },
  },
  {
    /*
      Allows importing raw content from a file.
      Usage: import content from 'some-file.txt?raw'

      Also used to execute a script in the global context (replaces script-loader):
      import('someScript?raw').then(rawModule => eval.call(null, rawModule.default));
    */
    resourceQuery: /raw/,
    type: 'asset/source',
    generator: {
      emit: false,
    },
  },
  {
    test: /\.modernizrrc.js$/,
    use: [ '@sect/modernizr-loader' ]
  },
  {
    test: /\.modernizrrc(\.json)?$/,
    use: [
      '@sect/modernizr-loader',
      'json-loader'
    ]
  },
];

const JsConfig = new JavascriptWebpackConfig('js', PATHS)
  .setEntry({
    bundle: `${PATHS.SRC}/bundles/bundle.js`,
  })
  .mergeConfig({
    cache: false,
    mode: "development",
    devtool: 'source-map',
    resolve: {
      extensions: ['.jsx', '.js', '.json'],
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'Dex',
        library: { type: 'var', name: 'Dex' },
        filename: 'remoteEntry.js',
        exposes: {
          'Dex/TableBuilder': './client/src/components/TableBuilder/TableBuilder.js',
        },
        shared: {
          react: {
            import: 'react', // the "react" package will be used a provided and fallback module
            shareKey: 'react', // under this name the shared module will be placed in the share scope
            shareScope: 'default', // share scope with this name will be used
            singleton: true, // only a single version of the shared module is allowed
          },
          'react-dom': {
            singleton: true, // only a single version of the shared module is allowed
          },
          'lib/Injector': {
            singleton: true, // only a single version of the shared module is allowed
          },
        },
      }),
    ],
  })
  .getConfig();

JsConfig.module = { rules };

const config = [
  // main JS bundle
  JsConfig,
  // sass to css
  new CssWebpackConfig('css', PATHS)
    .setEntry({
      bundle: `${PATHS.SRC}/styles/bundle.scss`,
    })
    .getConfig(),
];

// Use WEBPACK_CHILD=js or WEBPACK_CHILD=css env var to run a single config
module.exports = (process.env.WEBPACK_CHILD)
  ? config.find((entry) => entry.name === process.env.WEBPACK_CHILD)
  : config;
