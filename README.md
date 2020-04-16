# Dcard Frontend Preliminary
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Preview
See it in action on [now.sh](https://dcard-test.now.sh/).

## Available Scripts

### `yarn start`
Start the development mode, this bundle contains `@welldone-software/why-did-you-render` to trace whether components are properly rendered or not.

### `yarn build`
Shrink the webpack sourcemap with `GENERATE_SOURCEMAP=false` for the optimized build.

### `yarn analyze`
Using `source-map-explorer` bundle analyzer to analyze the webpack bundle, will build the project with sourcemap before initialize the analyze tool.

### `yarn pretty-quick`
Run Prettier recursively in the `/src` folder
