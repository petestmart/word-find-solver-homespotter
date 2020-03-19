const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
require('dotenv').config();

const fs = require('fs');
let dictionary = fs.readFileSync(__dirname + "/words.txt").toString('utf-8');
// remove punctuation from dictionary (Regular Expressions download)
let stripDictionary = dictionary.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
// Matching words pushed into the wordsMatch array
let wordsMatch = []
// Words from wordsMatch with subsets removed pushed into wordsMatchSubset
let wordsMatchSubset = []

// Turn dictionary into an array of words
let dictionaryClean = stripDictionary.toLowerCase().replace(/(\b(\W{1,4})\b(\s|$))/g, '').split("\n");
// let dictionaryShort = dictionaryClean.replace(/(\b(\W{1,4})\b(\s|$))/g, '').split(/\s+/)

router.post('/', (req, res) => {
    console.log('dictionary.router.post req.body', req.body); {
        // Empty the wordsMatch array before running the wordCheck function
        wordsMatch.length = 0
        wordCheck(req.body)
        res.sendStatus(201)
        // .catch(() => res.sendStatus(500));
    }


})

router.get('/', (req, res) => {
    // console.log('**dictionary.router.get**')
        (res.send(wordsMatchSubset))

        .catch(() => res.sendStatus(500));

}) // end router.get/dictionary

// check to see if word is in matrix
function wordCheck(matrix) {

    console.log('dictionary router wordCheck. matrix:', matrix);
    for (let i = 0; i < matrix.length; i++) {
        let matrixString = matrix[i].join('');
        console.log('matrixString[i]', matrixString[i])
        let stringReverse = matrixString.split('').reverse().join('');
        console.log('stringReverse', stringReverse);
        console.log('dictionary.length', dictionaryClean.length);

        for (let j = 0; j < dictionaryClean.length; j++) {
            // remove words from dictionary that are under 4 characters long
            if (dictionaryClean[j] === null || dictionaryClean[j].length < 4) {
                console.log('less than 4 characters', dictionaryClean[j])
                dictionaryClean.splice(j, 1)

            }
            // check words written from left to right and up to down
            if (matrixString.match(dictionaryClean[j])) {
                let match = dictionaryClean[j];
                wordsMatch.push(match);
                console.log('i loop#', i, 'b');
                console.log('j loop#', j, 'c');
                console.log('loop match:', matrixString.match(dictionaryClean[j]));
                console.log('wordsMatch', wordsMatch);

            }
            // check if words written from right to left and down to up
            if (stringReverse.match(dictionaryClean[j])) {
                let match = dictionaryClean[j];
                wordsMatch.push(match);
                console.log('wordsMatch', wordsMatch);
                console.log('i loop#', i, 'd');
                console.log('j loop#', j, 'e');
                console.log('reverse loop match', stringReverse.match(dictionaryClean[j]));
            }

        }

    }
    // shortRemoval()
    console.log('wordsMatch Final:', wordsMatch);
    subset()
}

// BONUS MODE
// Check For and Remove Subsets of the Same Word 
// (ex: "brokers", "broker", & "broke" would only return "brokers")
function subset() {
    console.log('subset start')
    for (let i = 0; i < wordsMatch.length; i++) {
        console.log('wordsMatch[i] subset', wordsMatch[i])
        if (wordsMatch.length > 1 && wordsMatch[i] != '' && wordsMatch[i] != null) {
            console.log('wordsMatch[i] subset if statement', wordsMatch[i])
            let k = i + 1;

            if ((wordsMatch[k] && wordsMatch[i]) && (wordsMatch[k].includes(wordsMatch[i]) || wordsMatch[i].includes(wordsMatch[k]))){
                console.log('wordsMatch[i] ', wordsMatch[i], ' includes ', wordsMatch[k]);
                if (wordsMatchSubset.includes(wordsMatch[k])){
                    wordsMatchSubset.splice(1, wordsMatchSubset.indexOf(wordsMatch[k]), '')
                }
                if (wordsMatch[i].length>wordsMatch[k].length){
                    wordsMatchSubset.push(wordsMatch[i]);
                }
                if (wordsMatch[k].length>wordsMatch[i].length){
                    wordsMatchSubset.push(wordsMatch[k])
                }
            }

            // for (let j = 0; j < wordsMatch[i].length; j++) {
            //     if (k < wordsMatch[i].length) {
            //         console.log('wordsMatch[j] subset', wordsMatch[j])
            //         console.log('wordsMatch[i][j] subset', wordsMatch[i][j], 'wordsMatch[k][j]', wordsMatch[k][j])
            //         if (wordsMatch[i].length != wordsMatch[k].length && wordsMatch[i][j] === wordsMatch[k][j]) {
            //             // if ( wordsMatch[i][j] === wordsMatch[k][j]){

            //             // }
            //             console.log('MATCH subset i', wordsMatch[i][j], 'subset k,', wordsMatch[k][j]);
            //             if (wordsMatch[i].length > wordsMatch[k].length){
            //                 console.log('long word [i]:', wordsMatch[i])
            //                 console.log('short word[k]', wordsMatch[k])
            //             }
            //             if (wordsMatch[i].length < wordsMatch[k].length) {
            //                 console.log('long word [k]:', wordsMatch[k])
            //                 console.log('short word[i]', wordsMatch[i])
            //             }
            //             if (wordsMatch[i].length === wordsMatch[k].length) {
            //                 console.log('equal length word [k]:', wordsMatch[k])
            //                 console.log('equal length word[i]', wordsMatch[i])
            //             }
            //         }
            //     }
            // }
        }
    }
}


module.exports = router;