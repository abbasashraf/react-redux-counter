import {createStore,combineReducers} from 'redux';
import Counter from './reducer/reducer.js'

var reducer = combineReducers({
    Counter
})

export var store = createStore(reducer);