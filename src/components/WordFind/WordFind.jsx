// WordFind.jsx
// Child of App.js

// ========== REACT ========== //
import React, { Component } from 'react';
import { connect } from 'react-redux';

// ========== COMPONENTS ========== //
import WordOutput from './WordOutput';


// ========== STYLES ========== //
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './WordFind.css'

class WordFind extends Component {

    state = {
        puzzleInput: '',
    }

    wordsMatch;

    handleChange = (event) => {
        console.log('Input Word Find', event.target.value);
        let puzzleInput = event.target.value.toLowerCase()
        this.setState({
            puzzleInput: puzzleInput
        })
        console.log('this.state.puzzleInput', this.state.puzzleInput);
    }

    puzzleDisplay = (input) => {

        let puzzLength = input.length; // length of puzzle
        let row = Math.floor(Math.sqrt(puzzLength)); // length of row
        console.log('row', row);
        let column = Math.ceil(Math.sqrt(puzzLength)); // length of column
        let k = 0; // keeps count of the letters as they are looped
        let l = 0; // keeps count of the rows in the matrix and they are looped
        let m = 0; // keeps count of the columns in vertMatrix as letters are added in loops
        let vertMatrix = []; // array to store the columns in the matrix
        console.log('column', column);
        let matrix = [[]];

        if (row * column < puzzLength) {
            row = column;
        }

        // Convert String into a two dimensional matrix
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < column; j++) {

                if (k < puzzLength) {

                    input[i] = input[k]
                    input[j] = input[k]

                    if (m === column) {
                        console.log('reset');
                        m = 0;
                    }

                    if (i === 0 && j < puzzLength) {
                        matrix[0].push(input[k])
                        console.log('if (i === 0 && j < puzzLength): matrix[0]', matrix[0]);
                        vertMatrix.push([]);
                        vertMatrix[m].push(input[k]);
                    }
                    else if (i > 0 && j === 0) {
                        matrix.push([])
                        l++
                        matrix[l].push(input[k])
                        vertMatrix[m].push(input[k]);
                        console.log('else if (i > 0 && j === 0): matrix[l]', matrix[l]);

                    }
                    else {
                        matrix[l].push(input[k])
                        vertMatrix[m].push(input[k]);
                        console.log('else matrix[l].push(input[k]): matrix[l]', matrix[l]);
                        console.log('else vertMatrix[l].push(input[k]): vertMatrix[l]', vertMatrix[l]);

                    }

                    console.log('letter is', input[i], 'at (', i, ',', j, '); Check (input[j]:', input[j], ';');
                    console.log('k', k, ';', 'input[k]', input[k], ';');
                    console.log('l', l, ';', 'matrix[l]', matrix[l], ';');
                    console.log('matrix', matrix);
                    console.log('vertMatrix[l]', vertMatrix[l]);
                    console.log('vertMatrix', vertMatrix)
                    console.log('m', m);
                    k++;
                    m++;
                    console.log('_________________________________')
                }
            }
        }
        
        // adding the array of vertical words to the matrix array
        for (let n = 0; n < vertMatrix.length; n++) {

            matrix.push(vertMatrix[n])
        }
        this.props.dispatch({ type: 'CHECK_DICTIONARY', payload: matrix })
    } // end function puzzleDisplay

    

    render() {

        let puzzleData = this.state.puzzleInput;
        let puzzle = puzzleData.split(' ');

        return (
            <p>
                <TextField
                    onChange={this.handleChange}
                    id="word-find-input"
                    label="Enter Word Find"
                    multiline
                    rows="4"
                    margin="normal"
                />
                <Button
                    onClick={() => this.puzzleDisplay(puzzle)}
                    variant="contained"
                >Find Words</Button>
                
                <WordOutput
                    puzzle={puzzleData}
                />
            </p>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapStateToProps)(WordFind);