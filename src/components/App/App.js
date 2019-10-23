import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import WordFind from '../WordFind/WordFind';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


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
          </Grid>
        </body>
      </div>
    );
  }
}

export default connect()(App);
