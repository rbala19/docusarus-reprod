# @frontapp/example-library

## What is included in Initial Library Example?
- Sample `tsconfig.json` for managing typescript configurations. This inherits from our base one in the repository.
- Empty `.eslintrc.js` for managing specific `eslint` rules. This inherits from our base one in the repository.
- Simple `package.json` for managing dependencies with `mocha` and `should` preinstalled. `typescript` and `eslint` packages are inherited from the base package.json in the repository.
- Simple `.gitingore` for the dist folder where the `typescript` build is located
- Standard npm scripts expected of all libraries in `package.json`:
  - `build`: This builds all the `src` files into the `dist` folder
  - `lint`: This does linting for the src and tests folders
  - `test`: This runs all the tests in the tests folder
  - `test:single`: This runs a single provided test
  - `typecheck`: Runs typescript type checking against the project
  - `prepublishOnly`: Runs the `build` script before publishing to Github Package Registry
- Simple `src` and `tests` folder setup

## Building

Build: `npm run build`

## Linting

Lint: `npm run lint`

## Testing

Run all tests: `npm run test`
Run single test: `npm run test:single tests/basic/index.ts`

## Typechecking

Typecheck: `npm run typecheck`

## Manual Publishing to Github Package Registry

From the root of the library, run `npm publish`. Alternatively, from the root of the repository, run `npm publish --workspace=@frontapp/example-library`.
