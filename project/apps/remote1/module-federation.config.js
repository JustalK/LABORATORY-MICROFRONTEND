// @ts-check

/**
 * @type {import('@nrwl/react/module-federation').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'remote1',
  exposes: {
    './Counter': './src/app/components/Counter/index.tsx',
    './Button': './src/app/components/Button/index.tsx',
    './Module': './src/remote-entry.ts',
  },
};

module.exports = moduleFederationConfig;
