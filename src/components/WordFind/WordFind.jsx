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
        flip: false
    }

    wordsMatch;

    handleChange = (event) => {
        let puzzleInput = event.target.value.toLowerCase()
        this.setState({
            puzzleInput: puzzleInput,
            
        })
        if (this.state.puzzleInput === '') {
            this.setState({
                flip: false,
            })
        }
        
    }

    // Clears Reducer Upon New Submission
    clear = (puzzle) => {
        console.log('click')
        this.props.dispatch({ type: 'SET_DICTIONARY', payload: ''});
        this.props.dispatch({ type: 'RESET_DICTIONARY', payload: ''});
        this.props.dispatch({ type: 'STORE_WORDS', payload: ''});
        this.puzzleDisplay(puzzle);
        this.setState({
            flip: true,

        })
    }

    puzzleDisplay = (input) => {

        let puzzLength = input.length; // length of puzzle
        let row = Math.floor(Math.sqrt(puzzLength)); // length of row
        let column = Math.ceil(Math.sqrt(puzzLength)); // length of column
        let k = 0; // keeps count of the letters as they are looped
        let l = 0; // keeps count of the rows in the matrix and they are looped
        let m = 0; // keeps count of the columns in vertMatrix as letters are added in loops
        let vertMatrix = []; // array to store the columns in the matrix
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
                    }
                    k++;
                    m++;
                } // end if statement 
            } // end for j loop
        } // end for i loop
        
        // adding the array of vertical words to the matrix array
        for (let n = 0; n < vertMatrix.length; n++) {
            matrix.push(vertMatrix[n])
        }
        this.props.dispatch({ type: 'CHECK_DICTIONARY', payload: matrix })
        
    } // end function puzzleDisplay

    render() {
        let puzzleData = this.state.puzzleInput;
        let puzzle = puzzleData.split(' ');
        let flip = this.state.flip;

        

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
                    onClick={() => this.clear(puzzle)}
                    // onClick={() => this.puzzleDisplay(puzzle)}
                    
                    variant="contained"
                >Find Words</Button>
                
                <WordOutput
                    flip={flip}
                    puzzle={puzzleData}
                />
            </p>
        ) // end return
    } // end render
} // end class

const mapStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapStateToProps)(WordFind);