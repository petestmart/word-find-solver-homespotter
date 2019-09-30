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
        // let PuzzleGrid = this.puzzleGrid(puzzle);

        let PuzzleOut = puzzle.map((letter) => {
            return (
                <li>{letter}</li>
            )

            

        });

        // if (wordReducer.length !=0) {
        wordOut = dictionaryReducer.map((word, i) => {
                return (
                    <li key={i}>{word}</li>
                )
            });
        // }
        // else {
        //     return (
        //         <div>Found Words:</div>
        //     )
        // }
        

        

        return (
            

            <div>
                
                <ul>{wordOut}</ul>
                {/* <ul>{this.conditionalFoundNames}</ul> */}
                
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState
});

export default connect(mapStateToProps)(WordOutput);