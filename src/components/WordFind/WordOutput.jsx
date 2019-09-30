// WordOutput.jsx
// Child of WordFind.jsx
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class WordOutput extends Component {


    testFunction = () => {
        console.log('testFunction')
        return (
            <div>'Loading..'</div>
        )

    }

    conditionalFoundNames = () => {
        console.log('conditionalFoundNames')
        return (
            (this.props.reduxState.wordReducer.length > 0) ?

                (this.wordOut()) :
                <div>'Loading...'</div>


        )
    }

    renderWords = () => {

        console.log('renderWords reduxState', this.props.reduxState)
        console.log('renderWords wordReducer', this.props.reduxState.wordReducer)


        return (
            this.props.reduxState.wordReducer
        )
    }

    wordOut = this.props.reduxState.wordReducer.map((word, i) => {
        return (
            <li key={i}>{word}</li>
        )
    });



    render() {

        let puzzle = this.props.puzzle.split(' ');
        let testWords;
        let searchTerm = 'A';
        let wordOut
        let wordReducer = this.props.reduxState.wordReducer
        let dictionaryReducer = this.props.reduxState.dictionaryReducer
        let longWords = [];
        // Remove words less than 4 characters long
        // let strippedDictionaryReducer = dictionaryReducer.replace(/(\b(\w{1,4})\b(\s|$))/g, '').split(" ");
        // let PuzzleGrid = this.puzzleGrid(puzzle);

        let PuzzleOut = puzzle.map((letter) => {
            return (
                <li>{letter}</li>
            )



        });

        if (dictionaryReducer.length != 0) {
            
            if (dictionaryReducer.length != 0){
                wordOut = dictionaryReducer.map((word, i) => {
                    if (word != "" && word != null && word.length > 3){
                        return (
                            <li key={i}>{word}</li>
                        )
                    }
                        
                })
            }
            
        }
        else {
            return (
                <div>Found Words Will Appear Here (May take several minutes after submission)</div>
            )
        }

        return (
            <div>
                <ul>{wordOut}</ul>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState
});

export default connect(mapStateToProps)(WordOutput);