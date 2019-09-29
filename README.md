# Word Find Solver - HomeSpotter

## Built With

This version uses React, Redux, Express, Passport, and PostgreSQL.  
A full list of dependencies can be found in `package.json`.

## Getting Started

### Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

### Installation Instructions

* Run `npm install`
* Start postgres if not running already by using `brew services start postgresql`
* Run `npm run server`
* Run `npm run client`
* Navigate to `localhost:3000`

## Completed Requirements
* Will find all 4 letter or longer words
* Will find words in any direction: up, down, left, or right (not diagonal)
* Will handle arbitrarily sized puzzle inputs
* The solution does print out the list of found words

### Notes
As of the time of this submission, the application will only check for words that are hard coded into the server.  I am still working on providing a full dictionary.
