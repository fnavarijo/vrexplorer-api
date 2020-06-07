# VR Explorer Graphql API

## Typescript configuration
---
#### TS Path resolution
To use the path resolution configuration set on `tsconfig.json`. The package `tsconfig-paths` should be installed and must be passed as argument when `ts-node` is executed. ([Ref](https://www.npmjs.com/package/ts-node#loading-tsconfigjson))

```
nodemon --exec ts-node -r tsconfig-paths/register index.ts
```