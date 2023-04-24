# Analyze

- [ ] Install `cost` plugin
    - webstorm: https://plugins.jetbrains.com/plugin/9970-import-cost
    - vsc: https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost
- [ ] Check the package at:  https://bundlephobia.com/
- [ ] webpack analyzed :
    - add bundle-analyzer: `npm i webpack-bundle-analyzer --save-dev`
    - set the stats file: `webpack --profile --json=stats.json`
    - run : `webpack --stats`
    - run : `webpack-bundle-analyzer stats.json`
- [ ]  Magic comments [link](https://webpack.js.org/api/module-methods/#magic-comments)
```typescript
   import(
   /* webpackChunkName: "my-chunk-name" */
   /* webpackMode: "lazy" */
   /* webpackExports: ["default", "named"] */
   'module'
   );
            
   // Multiple possible targets
   import(
   /* webpackInclude: /\.json$/ */
   /* webpackExclude: /\.noimport\.json$/ */
   /* webpackChunkName: "my-chunk-name" */
   /* webpackMode: "lazy" */
   /* webpackPrefetch: true */
   /* webpackPreload: true */
   `./locale/${language}`
   );
```
  - [Prefetching/Preloading modules](https://webpack.js.org/guides/code-splitting/#prefetchingpreloading-modules) 
