import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import WordFind from '../WordFind/WordFind';

class App extends Component {

  // ========== LIFE CYCLE ========== //
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_DICTIONARY' });
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>Word Find Solver</h1>
        </header>
        <body>
          <WordFind />
        </body>
      </div>
    );
  }
}

export default connect()(App);
