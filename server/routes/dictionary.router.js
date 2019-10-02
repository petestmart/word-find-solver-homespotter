const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
require('dotenv').config();

const fs = require('fs');
let dictionary = fs.readFileSync(__dirname + "/words.txt").toString('utf-8');
// remove punctuation from dictionary
let stripDictionary = dictionary.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
// Matching words pushed into the wordsMatch array
let wordsMatch = []

// Turn dictionary into an array of words
let dictionaryClean = stripDictionary.replace(/(\b(\W{1,4})\b(\s|$))/g, '').split("\n")
// let dictionaryShort = dictionaryClean.replace(/(\b(\W{1,4})\b(\s|$))/g, '').split(/\s+/)

router.post('/', (req, res) => {
    console.log('dictionary.router.post req.body', req.body);{
        wordsMatch.length = 0
        wordCheck(req.body)
        res.sendStatus(201)
        // .catch(() => res.sendStatus(500));
    }
    
    
})

router.get('/', (req, res) => {
    console.log('**dictionary.router.get**')
        (res.send(wordsMatch))

    .catch(() => res.sendStatus(500));
    
}) // end router.get/dictionary

// check to see if word is in matrix
function wordCheck(matrix) {
    
    console.log('dictionary router wordCheck. matrix:', matrix);
    for (let i=0; i<matrix.length; i++){
        let matrixString = matrix[i].join('');
        console.log('matrixString[i]', matrixString[i])
        let stringReverse = matrixString.split('').reverse().join('');
        console.log('stringReverse', stringReverse);
        console.log('dictionary.length', dictionaryClean.length);

        for (let j = 0; j < dictionaryClean.length; j++){
            // remove words from dictionary that are under 4 characters long
            if (dictionaryClean[j] === null || dictionaryClean[j].length < 4  ){
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
}



// removes words from wordsMatch array that are under 4 characters
// function shortRemoval(wordsMatch) {
//     console.log('shortRemoval', wordsMatch)
//     for (let i = 0; i < wordsMatch.length; i++){
//         console.log('wordsMatch[i]', wordsMatch[i])
//         // console.log('wordsMatch[i].length', wordsMatch[i].length)
//         if (wordsMatch[i] === '' || wordsMatch[i].length < 4){
//             console.log('less than 4 characters', wordsMatch[i])
//             wordsMatch.splice(i, 1)
//             console.log('wordsMatch', wordsMatch)
//         }
//     }
//     console.log('Final Array of Words', wordsMatch);
    
// }

module.exports = router;