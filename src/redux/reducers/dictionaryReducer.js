// Returns the data from the Dictionary 

const dictionaryDefaultState = []

const dictionaryReducer = (state = dictionaryDefaultState, action) => {
    console.log('dictionaryReducer', action.payload);
    if (action.type === 'RESET_DICTIONARY'){
        console.log('Dictionary Reset')
        return dictionaryDefaultState;
        
    }
    if (action.type === 'SET_DICTIONARY'){
        return action.payload
    }

    return state
}

export default dictionaryReducer;