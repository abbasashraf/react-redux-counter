import {createStore,combineReducers} from 'redux';
import Counter from './reducer/reducer.js'
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

var reducer = combineReducers({
    Counter
})

const middleWare = applyMiddleware(thunk);

export var store = createStore(reducer, middleWare);


// export var store = function () {
//     var reducer = Redux.combineReducers({
//         Counter

//     });

//     const middleWare = applyMiddleware(thunk)
//     var store = createStore(reducer, middleWare);

//     return store;
// }