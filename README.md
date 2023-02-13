Front
=====

[![Circle CI](https://circleci.com/gh/frontapp/front.svg?style=shield&circle-token=1a36739a429b5c7a0e6865742fbffb46fa7cd0cf)](https://circleci.com/gh/frontapp/front) [![Coverage Status](https://coveralls.io/repos/github/frontapp/front/badge.svg?t=bhtzzb)](https://coveralls.io/github/frontapp/front?branch=master)


# Getting started

## Table of contents

- [Prerequisites](#prerequisites)
- [Run the app](#run-the-app-with-local-data)
- [Testing](#testing)
- [Deployment](#deployment)
- [Helpful Commands](#helpful-commands)
- [Debugging](#debugging)
- [Style Guide](#style-guide)
- [Development Paradigms](#development-paradigms)

## Prerequisites

Before trying to run the project for the first time, you will need the following:

- [Node.js](node) v16
    - Install [nvm](https://github.com/nvm-sh/nvm#install--update-script)
    - `nvm install 16.18.1` -- Install Node 16
- [Configure NPM and Yarn for use with the GitHub Packages registry](https://docs.google.com/document/d/1xingH-8fOO3zdMqUyTycGOIPricbaR1e7bLaMCsiSn0)
- `git clone git@github.com:frontapp/front.git` -- clone the repository
- `npm install` -- install dependencies
- Add your user and create [snapshot](https://docs.google.com/document/d/1LsPPrinh5_PYuVCbmvmwL3bFClzVPU_OF0N35dQOhME/edit#bookmark=id.u0gig8lhk3kf)

## Run the app with local data

Building:

```
npm run build
```

Running local server:

```
npm run start
```

Running webpack development server:
- [front-client](https://github.com/frontapp/front-client) is required to run the frontend. Follow the repo's installation [guide](https://github.com/frontapp/front-client/blob/master/docs/getting-started.md).

## Run the app with local data & legacy support (settings, contacts...)
- [Interop mode](https://github.com/frontapp/front-client/blob/master/docs/interop.md)

## Testing

We leverage [Karma](https://karma-runner.github.io/latest/index.html) and [Mocha](https://mochajs.org) for our frontend and backend tests respectively.

Run the test suite (build, lint, and run all tests):

```
npm run test
```

Run frontend tests:

```
npm run karma
```

Run backend tests:

```
npm run mocha
```

Run specific backend tests:

```
npm run mocha:single -- <path to test file>
```

Testing on [staging](https://docs.google.com/document/d/1B-zHXn4NXRaj5pkgH5R-vWvpQnLwoK_823d3Y2z6etU)

## Deployment

Deploy `master` to production:

```
npm run mergeprod
```

### Emergencies

To deploy master to production without running tests in an emergency:

```
npm run merge:prod:skip-tests
```

## Helpful Commands

Run TypeScript's type checking on the whole project.

```
npm run tsc
```

Run [ESLint][eslint].

```
npm run lint
```

Run [ESLint][eslint] on tracked and changed files.

```
npm run lint:changes
```

All of the commands mentioned here can be found in the `scripts` section of the [package.json](./package.json) file.

## Debugging

To set a breakpoint while running locally consider using Node inspect and ndb.

Node [inspect](https://nodejs.org/api/debugger.html):

```
NODE_OPTIONS='-r ts-node/register' node inspect front.js
```

[ndb](https://github.com/GoogleChromeLabs/ndb#ndb):

```
ndb npm run start
```

```
ndb npm run mocha
```

## Style guide
Please refer to front-client's [styleguide](https://github.com/frontapp/front-client/blob/master/docs/coding-guidelines.md).

## Best Pratices

See [Best Practices @ Front](./docs/modern_code.md)

## Development Paradigms
- [Front async](https://docs.google.com/document/d/1OtjEPNBLPBAIgh2Vw1be0NXog1pSjaziGKL4L4YAXNk)
- [Ongoing initiatives](https://docs.google.com/document/d/1ZWxV2kBN3q36HLIMwcO0Vsohoan1E-S9XiNMf0nKwbs)
- [Runbooks index](https://docs.google.com/document/d/1MrvkWhjZSKMdyrYU8-vcTrkckwCiac0YnFN0HG2pFDQ)

[node]: https://nodejs.org/en/
[eslint]: https://eslint.org/
[webpack]: https://webpack.js.org/
[babel]: https://babeljs.io/
[typescript]: http://www.typescriptlang.org/
