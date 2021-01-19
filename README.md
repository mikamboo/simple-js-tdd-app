# Simple js testion

Learn JavaScript/NodeJS test-driven developpement (TDD) using __mocha__ + native __assert__

Repo URL : https://github.com/mikamboo/simple-js-tdd-app

## Stack 

|Domain|Solution|
|---|---|
|Frontend|Preact|
|REST API|[Fastify](https://www.fastify.io)|
|Code coverage|[Istanbul (nyc)](https://istanbul.js.org)|
|Unit testing| [Mocha](https://mochajs.org) + [Assert](https://nodejs.org/api/assert.html)|
|E2E testing||

## Step 1 : Prepare project

* Init npm `npm init --yes`
* Install mocha : `yarn add --dev mocha`
* Set test command in packages.json to `mocha **/*.test.js`

## Step 2 : Start tdd

* Run test in watch mode : `yarn test -w`
* Let's code : Reapeat theses steps
  1. Witre test that fail
  2. Implement test
  3. Test must pass

## Step 3 : Code covergage

Run following command to output code covegare and generate coverage files

```bash
yarn test-cov
```

## TODO

* [ ] Add api features/tests
* [ ] Add frontend micro fwk
* [ ] Add e2e testing
* [ ] Add Circle ci config
* [ ] Add code coverage
* [ ] Add monitoring stack
* [ ] Add docker-compose
* [ ] Add one-click deploy

## Links

* https://developer.okta.com/blog/2020/01/27/best-nodejs-testing-tools
* https://medium.com/swlh/setup-a-modern-javascript-tdd-environment-with-vs-code-131c4de44203
* https://github.com/CircleCI-Public/circleci-demo-javascript-react-app
* https://developers.redhat.com/blog/2016/03/15/test-driven-development-for-building-apis-in-node-js-and-express
* https://www.digitalocean.com/community/tutorials/workflow-nodemon-fr