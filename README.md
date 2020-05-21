# Clean Architecture React Boilerplate

### DESCRIPTION

This repository is a real life example of Clean Architecture with use of `React.js` and `Typescript`

TODO DIAGRAM

##### Technologies used

1. `Typescript` ( `v3.7.5` )
2. `Inversify.js`
4. `React.js`

##### Structure

1. ui

        Contains definition of presentation layer like controller, express setup etc  
        
2. domain
    
        Contains definition of use cases, DTO's, contracts for repositories
        
3. data 

        Contains definition of data sources
        
4. ioc ( `Dependency injection layer` )
        
        Contains definition for Container and whole project dependencies
        
##### What is supported?

TODO       

##### Reference

TODO

### PREREQUISITIES

* `Yarn`

### SETUP

TODO
       
### HOW TO RUN LOCALLY

1. Follow `SETUP` section first and install `PREREQUISITIES`
2. `Yarn install` - installing dependencies
3. `Yarn start` - run app
       
### TESTING

TODO

#### Mutational Testing

TODO

### APPLIED CONCEPTS

There are some universal concepts in programming ( designed patterns ) which are common for general engineering but
it's not always obvious how to use environment specific concepts. In this boilerplate I'm going to show how to handle that.

#### Request Object

Request object defines parameters / input to specific module input ( domain / infrastructure ), and holds
required data which cannot be changed on the fly.

#### Mocking

TODO

#### Mapper

Simple concept where one module data structure is translated to another module

##### Data -> Domain Mapper

TODO

##### Domain -> UI Mapper 

TODO

#### Seeds

Used for local development or testing - it's just data for specific use cases which can be also used for dev
environment where QA's can test specific endpoints or screens. It's also useful as start data for local development 
especially when you are working as a full stack.

#### Tests parallelization

TODO

#### Mutational testing

TODO

#### Integration testing

TODO

### STILL TODO

* Provide example of marionette testing with use of react-testing-library ( alternative to enzyme )
* Provide example of mutational testing with react
* Provide example of BDD integration with cucumber use and Cypress
* Provide few examples of UI testing
* Provide examples how to group tests by tags in Cucumber
* Introduce mocking system to project with DataStore module
* Implement Data module with available sources based on Graphql
* Implement state management `recoil`
* Introduce `urql`
* Introduce Kubernetes
* Introduce docker
* Introduce missing few screens with more examples regarding navigator pattern
* Add more common components for general usecases
* Introduce Request Objects to project
* Introduce mappers to project
* Introduce local storage integration
* Introduce way of thinking understood as `Data Space` which will simplify data and content management across specific
  screen
* Introduce and explain communication between screen with `Data Space` and nested widgets
* Add CHANGELOG v1 when boilerplate is finished
* Provide example of handling multiple states ( loaded, completed etc )
* Provide example of handling errors ( api error, component error )
* Apply animations

### KNOWN ISSUES

TODO
