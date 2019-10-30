1. Run ``npm install``
2. Run ``node ./watch.js``. Should result in error:

```Error: You must specify "output.format", which can be one of "amd", "cjs", "system", "esm", "iife" or "umd".```

Isn't ``output.format`` supposed to be overriden to ``iife`` by tscc?

```
"It only supports IIFE bundles - output.format will be overridden to iife."
https://github.com/theseanl/tscc/blob/master/packages/rollup-plugin-tscc/README.md
```

BUT, for some reason, some projects do not require explicit ``iife`` -- so I'm not sure what I'm missing 😅
