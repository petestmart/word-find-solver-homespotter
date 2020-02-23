import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserInputDisplay extends Component {

    render() {

        let inputDisplay
        let userInputReducer = this.props.reduxState.userInputReducer;

        if (userInputReducer.length !== 0){
            // inputDisplay = userInputReducer.map((input, i) => {
                return (
                    // <div key={i}>{input}</div>
                    <div>You Typed Something</div>
                )
            // })
        }
        else {
            return (
                <div>Input Empty</div>
            )
        }
        // return (
        //    <div>
        //         <ul>{inputDisplay}</ul>
        //    </div> 

        // )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapStateToProps)(UserInputDisplay);