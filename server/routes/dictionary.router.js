const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
require('dotenv').config();

// const fs = require('fs');
// let dictionary = fs.readFileSync(__dirname + "/words.txt").toString('utf-8');
let dictionary = ['gas', 'sag', 'broker', 'ripe', 'bleu', 'boy', 'wood', 'garage', 'razor', 'home', 'mark', 'cow', 'kite', 'balloon', 'mouse']

// Turn dictionary into an array of words
// let dictionaryClean = dictionary.split("\n")



router.get('/', (req, res) => {
    console.log('**dictionary.router.get**')
    (res.send(dictionary))
    .catch(() => res.sendStatus(500));
}) // end router.get/dictionary

module.exports = router;