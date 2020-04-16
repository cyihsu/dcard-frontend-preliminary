# Dcard Frontend Preliminary
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Preview
See it in action on [now.sh](https://dcard-test.now.sh/).

## Installation
```
$ git clone https://github.com/cyihsu/dcard-frontend-preliminary.git
$ cd dcard-frontend-preliminary
$ yarn install && yarn start
```

## Features
### Code Splitted and Build Cacheable Chunks
As the result, can achieve faster page loading and easy to cache, since chunks have been splitted on its name, not integers.
Inspired by [A Pinterest Progressive Web App Performance Case Study](https://medium.com/dev-channel/a-pinterest-progressive-web-app-performance-case-study-3bd6ed2e6154)
```
59.03 KB (-45 B)  build/static/js/6.47d4bdd6.chunk.js
8.41 KB (-42 B)   build/static/js/0.3b33d67a.chunk.js
5.86 KB (-42 B)   build/static/js/7.ae3fe9a1.chunk.js
5.11 KB (-40 B)   build/static/js/Post.e7bd09a6.chunk.js
3.06 KB (-43 B)   build/static/js/List.7627ebd6.chunk.js
2.33 KB (-40 B)   build/static/js/main.a47e898a.chunk.js
1.2 KB (-42 B)    build/static/js/runtime-main.7893c2d5.js
906 B (-44 B)     build/static/css/main.293add04.chunk.css
795 B (-42 B)     build/static/js/Nav.d983b8de.chunk.js
```

### Redux-free, Context based
This project uses `React Context API` to achieve `Redux-like` reducer and dispatcher operations, but less bloated bundled size

### Virtualized Post List
This project implemented the post-list component using `react-window` to achieve a faster user expericence, as the Chrome Performance Monitor, It took less than **4.2MB JS heap size**, **350 DOM nodes** on initial renderer.

### Polyfill-less Bundle Script
Inspired by Instagram's [Making instagram.com faster: Code size and execution optimizations](https://instagram-engineering.com/making-instagram-com-faster-code-size-and-execution-optimizations-part-4-57668be796a8), this project uses `ES2017` as Typescript transpile target, since nearly 56% of user's browser supports `ES2017+` syntax. As a result, this shrinks 15% of source-mapped bundle size, and gained 20% of runtime performance (from Google Chrome Audit's Result, 83% -> 100% Performance Index)

### Rerender-less
As using `@welldone-software/why-did-you-render`'s debug tool, this project would not trigger excessive re-render since all rerender-expensive large components has been memoized by `React.useMemo` hooks, and did not applied to too many components to avoid too many shallow compares, which may lead to a slower render speed, and for most case, this project may run at 60fps on most devices.

## Available Scripts

### `yarn install`
Install all dependencies of this project

### `yarn start`
Start the development mode, this bundle contains `@welldone-software/why-did-you-render` to trace whether components are properly rendered or not.

### `yarn build`
Shrink the webpack sourcemap with `GENERATE_SOURCEMAP=false` for the optimized build.

### `yarn analyze`
Using `source-map-explorer` bundle analyzer to analyze the webpack bundle, will build the project with sourcemap before initialize the analyze tool.

### `yarn pretty-quick`
Run Prettier recursively in the `/src` folder
