# bourbone-client
Basic example of a full stack webapp using Angular 2 and Node. Intended to be used as a starting point to quickly prototype new ideas. It displays a simple list of links and contains:

* a component serving as a list of links
* a model interface for links
* a service to retrieve links
* a rest api to return the links

## Features (client)
* Framework: Angular 2
* Language: TypeScript
* Unit tests: Karma/Jasmine
* E2E tests: Protractor
* Others:
  * es6
  * angular-cli
  * rxjs
  * systemjs
  * watches/lints changes in code

## Features (server)
* Framework: Node/Express
* Language: Javascript
* Storage: MongoDB

## Setup (client)
* checkout
* npm install

## Setup (server)
* checkout [bourbone-server](https://github.com/cguillemette/bourbone-server)
* npm install
* set mongodb URL (look for 'var mongodbURL')
* import to mongodb /bourbone-server/db/links.json

## Run (client)
* ng serve
* make sure you have Chrome's extension 'Allow-Control-Allow-Origin: *'' installed
* go to http://localhost:4200/

## Run (server)
* grunt serve