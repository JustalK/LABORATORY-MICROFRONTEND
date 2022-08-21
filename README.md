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

## Running

```bash
$ nx serve host
```
