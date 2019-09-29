import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

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
} // end Watcher Saga dictionarySaga

export default dictionarySaga;