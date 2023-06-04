const NextFederationPlugin = require('@module-federation/nextjs-mf');
const {createDelegatedModule} = require('@module-federation/utilities');

const remotes = isServer => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    header: createDelegatedModule(require.resolve('./remote-delegate.js'), {
      remote: `header@${process.env.HEADER_URL}/_next/static/${location}/remoteEntry.js`
    }),
    footer: createDelegatedModule(require.resolve('./remote-delegate.js'), {
      remote: `footer@${process.env.FOOTER_URL}/_next/static/${location}/remoteEntry.js`
    }),
    home: createDelegatedModule(require.resolve('./remote-delegate.js'), {
      remote: `home@${process.env.HOME_URL}/_next/static/${location}/remoteEntry.js`
    })
  };
};

module.exports = {
  env: {
    HEADER_URL: process.env.HEADER_URL,
    FOOTER_URL: process.env.FOOTER_URL,
    HOME_URL: process.env.HOME_URL
  },
  webpack(config, options) {

    config.plugins.push(
      new NextFederationPlugin({
        name: 'footer',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './footer': './components/footer.js',
        },
        remotes: remotes(options.isServer),
        extraOptions:{
          automaticAsyncBoundary: true
        }
      }),
    );

    return config;
  },
};
