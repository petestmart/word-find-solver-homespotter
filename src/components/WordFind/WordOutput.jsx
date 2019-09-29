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

                (this.props.reduxState.wordReducer) :
                <div>'Loading...'</div>


        )
    }

    renderWords = () => {

        console.log('renderWords reduxState', this.props.reduxState)
        // console.log('renderWords wordReducer', this.props.reduxState.wordReducer[0])
        console.log('renderWords wordReducer', this.props.reduxState.wordReducer)


        return (
            this.props.reduxState.wordReducer
        )
    }

    render() {
        // console.log('this.props.reduxState.foundNames', this.props.reduxState.foundNames)
        let puzzle = this.props.puzzle.split(' ');
        let testWords;
        let searchTerm = 'A';
        let wordReducer = this.props.reduxState.wordReducer
        // let PuzzleGrid = this.puzzleGrid(puzzle);

        let PuzzleOut = puzzle.map((letter) => {
            return (
                <li>{letter}</li>
            )

            // if (letter === searchTerm){
            //     return (
            //         <li>{letter}</li>
            //     )
            // }
            // else {
            //     return (
            //         <li>.</li>
            //     )
            // }

        });

        let wordOut = wordReducer.map((word, i) => {
            return (
                <li key={i}>{word}</li>
            )
        });

        // conditionalFoundNames = () => {
        //     return (
        //         (this.props.reduxState.foundNames.length > 0) ?
        //             this.renderWords() :
        //             <div></div>
        //     )
        // }

        // renderWords = () => {
        //     return (
        //         this.props.reduxState.foundNames
        //     )
        // }



        // let PuzzleOut = puzzle.join('').includes(searchTerm);

        // let PuzzleOut = 

        return (

            <div>


                <ul>{wordOut}</ul>
                {this.conditionalFoundNames}
                {/* <ul>{PuzzleGrid}</ul> */}
                {/* <ul>{PuzzleOut}</ul> */}

            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState
});

export default connect(mapStateToProps)(WordOutput);