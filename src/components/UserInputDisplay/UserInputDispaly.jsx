import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserInputDisplay extends Component {

    render() {

        let userInputDisplay = this.props.reduxState.UserInputReducer

        return (
            <div>
                UserInputDisplay Goes Here
                <userInputDisplay />
            </div>

        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapStateToProps)(UserInputDisplay);