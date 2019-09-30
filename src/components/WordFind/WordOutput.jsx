// WordOutput.jsx
// Child of WordFind.jsx
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class WordOutput extends Component {

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

        let wordOut
        let dictionaryReducer = this.props.reduxState.dictionaryReducer

        if (dictionaryReducer.length != 0) {

            if (dictionaryReducer.length != 0) {
                wordOut = dictionaryReducer.map((word, i) => {
                    if (word != "" && word != null && word.length > 3) {
                        return (
                            <li key={i}>{word}</li>
                        )
                    }
                })
                // this.props.dispatch({ type: 'CHECK_DICTIONARY', payload: '' })
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