# Analyze


 
 - [ ] Install `cost` plugin 
   - webstorm: https://plugins.jetbrains.com/plugin/9970-import-cost
   - vsc: https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost
 - [ ] Check the package at:  https://bundlephobia.com/
 - [ ] webpack analyzed : 
   - add bundle-analyzer: `npm i webpack-bundle-analyzer --save-dev`
   - set the stats file: `webpack --json=stats.json`
   - run : `webpack --stats`
   - run : `webpack-bundle-analyzer stats.json`
