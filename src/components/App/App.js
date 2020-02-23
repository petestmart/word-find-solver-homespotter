// ========== REACT ========== //
import React, { Component } from 'react';
import { connect } from 'react-redux';

// ========== STYLES ========== //
import './App.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// ========== COMPONENTS ========== //
import UserInputDispaly from '../UserInputDisplay/UserInputDispaly';
import WordFind from '../WordFind/WordFind';


class App extends Component {

  
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>Word Find Solver</h1>
        </header>
        <body>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className="WordFind">
                <WordFind />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className="UserInputDisplay">
                <UserInputDispaly />
              </Paper>
            </Grid>
          </Grid>
        </body>
      </div>
    );
  }
}

export default connect()(App);
