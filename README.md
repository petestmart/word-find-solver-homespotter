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
As of the this commit, the application will check for words found in any size word find.  To see the array of results look in the server terminal.  It does not yet print the list of words to the DOM.  The list also includes words that are less than 4 characters in length.

### Next Steps
* Remove console logs
* Clean up layout
    * Position of "Find Words" button is awkwardly placed. Use MUI grid to reposition and make responsive
* Design
    * Color Buttons
    * Add color to Page
    * Different color header (possibly add an app bar)
* Display user submitted puzzle
    * When user submits a word find, have the word find display on the DOM
    * Highlight words in wordfind when user hovers over the word in the found words list