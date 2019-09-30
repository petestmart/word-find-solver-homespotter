// WordOutput.jsx
// Child of WordFind.jsx

import React, { Component } from 'react';
import { connect } from 'react-redux';

class WordOutput extends Component {

    renderWords = () => {
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
        }
        else {
            return (
                <div>Found Words Will Appear Here (May take several minutes after submission - depending on size of puzzle)</div>
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