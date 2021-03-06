# VR Explorer Graphql API

## Typescript configuration
---
#### TS Path resolution
To use the path resolution configuration set on `tsconfig.json`. The package `tsconfig-paths` should be installed and must be passed as argument when `ts-node` is executed. ([Ref](https://www.npmjs.com/package/ts-node#loading-tsconfigjson))

```
nodemon --exec ts-node -r tsconfig-paths/register index.ts
```

## Linting
---
#### TS-Eslint
To read more about TS linting, [here the docs](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin);


## Development
---
#### Start the project
To execute this project, docker and docker-compose need to be installed.
To start the development enviroment, run the following.
```
docker-compose up -d
```
This will start the Hapi server and the MariaDB. 
