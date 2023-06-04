const NextFederationPlugin = require('@module-federation/nextjs-mf');
const {createDelegatedModule} = require('@module-federation/utilities');


const remotes = isServer => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    header: createDelegatedModule(require.resolve('./remote-delegate.js'), {
      remote: `header@http://localhost:3002/_next/static/${location}/remoteEntry.js`
    }),
    footer: createDelegatedModule(require.resolve('./remote-delegate.js'), {
      remote: `footer@http://localhost:3001/_next/static/${location}/remoteEntry.js`
    }),
    home: createDelegatedModule(require.resolve('./remote-delegate.js'), {
      remote: `home@http://localhost:3000/_next/static/${location}/remoteEntry.js`
    })
  };
};

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'home',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './home': './pages/index.js'
        },
        remotes: remotes(options.isServer),
        shared: {},
        extraOptions: {
          automaticAsyncBoundary: true
        }
      })
    );

    return config
  }
}
