// Global State For User Input

const userInputDefaultState = []

const userInputReducer = (state = userInputDefaultState, action) => {
    console.log('userInputReducer', action.payload);
    if (action.type === 'RESET_USER_INPUT') {
        console.log('userInput Reset')
        return userInputDefaultState;

    }
    if (action.type === 'SET_USER_INPUT') {
        return action.payload
    }

    return state
}

export default userInputReducer;