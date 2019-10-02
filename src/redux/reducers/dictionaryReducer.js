// Returns the data from the Dictionary 

const dictionaryDefaultState = []

const dictionaryReducer = (state = [], action) => {
    console.log('dictionaryReducer', action.payload);
    if (action.type === 'RESET_DICTIONARY'){
        return dictionaryDefaultState;
    }
    if (action.type === 'SET_DICTIONARY'){
        return action.payload
    }

    return state
}

export default dictionaryReducer;