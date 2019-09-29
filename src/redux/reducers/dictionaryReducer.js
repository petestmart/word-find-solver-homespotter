// Returns the data from the Dictionary 
const dictionaryReducer = (state = [], action) => {
    console.log('dictionaryReducer', action.payload);
    if (action.type === 'SET_DICTIONARY'){
        return [action.payload]
    }

    return state
}

export default dictionaryReducer;