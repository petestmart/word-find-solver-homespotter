import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// Send Matrix of letters to server to check dictionary
function* postDictionary(action){
    console.log('in postDictionary', action.payload)
    try {
        const postDictReponse = yield axios.post(`/api/dictionary`, action.payload);
        console.log('postDictResponse', postDictReponse)
        yield put({ type: 'FETCH_DICTIONARY'})
    } catch (error){
        console.log('error in postDictionary', error)
    }
}

// Send GET request for words from the dictionary
function* getDictionary(action) {
    console.log('in getDictionary');
    try {
        const dictionaryResponse = yield axios.get(`/api/dictionary`)
        console.log('getDictionary Response:', dictionaryResponse.data);
        yield put({ type: 'SET_DICTIONARY', payload: dictionaryResponse.data })
    } catch (error) {
        console.log('error in getDictionary Saga', error);
    }
} // end getDictionary Saga

// Watcher Saga
function* dictionarySaga() {
    yield takeLatest('FETCH_DICTIONARY', getDictionary)
    yield takeLatest('CHECK_DICTIONARY', postDictionary)
} // end Watcher Saga dictionarySaga

export default dictionarySaga;