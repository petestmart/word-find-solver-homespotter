import { combineReducers } from 'redux';
import dictionaryReducer from './dictionaryReducer';
import userInputReducer from './userInputReducer';


const wordReducer = (state = [], action) => {
  console.log('wordReducer')
  if (action.type === 'STORE_WORDS') {
    return action.payload;
  }
  else {
    return state;
  }
};

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  wordReducer,
  dictionaryReducer,
  userInputReducer
});

export default rootReducer;
