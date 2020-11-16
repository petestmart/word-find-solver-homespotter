// WordOutput.jsx
// Child of WordFind.jsx

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './WordFind.css';

class WordOutput extends Component {

    state = {
        flip: false,
    }

    renderWords = () => {
        return (
            this.props.reduxState.wordReducer
        )
    }

    clear = () => {
        this.props.dispatch({ type: 'RESET_DICTIONARY', payload: '' });
        this.props.dispatch({ type: 'SET_DICTIONARY', payload: '' });

    }

    wordOut = this.props.reduxState.wordReducer.map((word, i) => {
        return (
            <li key={i}>{word}</li>
        )
    });

    render() {

        let wordOut;
        let dictionaryReducer = this.props.reduxState.dictionaryReducer;

        if (dictionaryReducer.length != 0) {

            if (dictionaryReducer.length != 0) {
                wordOut = dictionaryReducer.map((word, i) => {
                    if (word != "" && word != null && word.length > 3) {
                        return (
                            <li key={i}>{word}</li>
                        )
                    }
                }
                )
            }
            // this.clear();
        }
        else if (this.props.flip === true) {
            return (
                <div><img src="images/loading.gif" className="loading" alt="loading" /></div>
            )
        }
        else {
            return (
                <div><p>Found Words Will Appear Here </p><p>(May take several minutes after submission depending on size of submission)</p></div>
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