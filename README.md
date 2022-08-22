# LABORATORY-MICROFRONTEND

## Development

#### NX Setup

First, I create a monorepository with NX:

```bash
# Install NX structure
$ npx create-nx-workspace@latest
# Install React generator [Dont forget to CD in your workspace]
$ npm install --save-dev @nrwl/react
```

Once done, I create one react app for hosting the microfrontend and two remote react app:

```bash
nx g @nrwl/react:host host --remotes=remote1,remote2
```

We can now run the app with:

```bash
$ nx serve host
```

For adding a remote after having build the host:

```bash
$ nx g @nrwl/react:remote shop --host=host
```

#### Host Setup

In the file `module-federation.config`, we define our app as a host and what are the remote:

```js
const moduleFederationConfig = {
  name: "host",
  remotes: ["remote1", "remote2"],
};
```

In the `webpack.config.prod`, we define the url for the remote

```js
remotes: [
  ['remote1', '//localhost:4201/'],
  ['remote2', '//localhost:4202/'],
],
```

#### Expose a new component of a remote

For exposing a new component, just modify the file `module-federation.config.js` of the remote:

```js
exposes: {
  './Counter': './src/app/components/Counter/index.tsx',
  './Module': './src/remote-entry.ts',
},
```

In the host, declare the module added. It can be done in any file, I created a file `tsremote_declarations.ts` where I regrouping all the declaration of module:

```js
declare module 'remote1/Counter';
```

## Running

```bash
$ nx serve host
```
