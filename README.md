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
I found a method for connecting a full dictionary.  It is currently commented out on the notes.  I found that this method is too large to perform on the front end and will need to move the functionality from the front end to the back end.

As of the time of this submission, the application will only check for words that are hard coded into the server.  I am still working on providing a full dictionary.

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