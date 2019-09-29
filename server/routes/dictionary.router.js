const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
require('dotenv').config();

// const fs = require('fs');
// let dictionary = fs.readFileSync(__dirname + "/words.txt").toString('utf-8');
let dictionary = ['gas', 'sag', 'broker', 'ripe', 'bleu', 'boy', 'wood', 'garage', 'razor', 'home', 'mark', 'cow', 'kite', 'balloon', 'mouse']
// Matching words pushed into the wordsMatch array
let wordsMatch = []

// Turn dictionary into an array of words
// let dictionaryClean = dictionary.split("\n")

router.post('/', (req, res) => {
    (console.log('dictionary.router.post req.body', req.body))
    // .then(() => res.sendStatus(201))
    // .catch(() => res.sendStatus(500))
    wordCheck(req.body);
})

router.get('/', (req, res) => {
    console.log('**dictionary.router.get**')
    (res.send(dictionary))
    .catch(() => res.sendStatus(500));
}) // end router.get/dictionary

function wordCheck(matrix) {
    console.log('dictionary router wordCheck. matrix:', matrix);
    for (let i=0; i<matrix.length; i++){
        if (matrix[i] === dictionary[2]){
            console.log('We have a match!', matrix[i], '===', dictionary[2])
        }
        else {
            console.log('No match.', matrix[i], '&', dictionary[2]);
        }
    }
}

module.exports = router;