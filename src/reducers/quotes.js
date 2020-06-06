// creates an array object that stores a quote object that contains the quote

import { Switch } from "react-router-dom";

// the state currently looks like this 
// state = {quotesReducerNew: { counter:0, quotes:[] } }
// the initial state object below is ideally what the state object should look like
// accessing counter and the array of quotes directly
const initialState = {
    counter: 0,
    quotes: []
}

// text and author
const quotesReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_QUOTE':
            return [...state, {
                quote: action.text,
                quoteMaster: action.quoteMaster
            }];
        default:
            return state;
    }
}

// object structure
// {counter: int, array[{quotes:str,quotemaster:str}]}
function wrapCounterInObject(obj, num) {
    if(obj.array.length < num) {
       return Object.assign({}, [...obj], {
        counter: 0,
       });
    } else if(num < 0) {
        return Object.assign({}, {
            counter: obj.array.length,
        })
    } else {
        return Object.assign({}, {
            counter: num,
        });
    }
}

const quotesReducerNew = (state = initialState, action) => {
    let obj = state.quotesReducerNew;
    switch(action.type) {
        case 'ADD_QUOTE':
            return Object.assign({}, state, {
                quotesReducerNew: {
                    quotes: [
                        ...state.quotes,
                        {
                            quote: action.text,
                            quoteMaster: action.author
                        }
                    ]
                }
            });
        // state is constructed incorrectly as an object that points to
        // quotesReducerNew, that's why the obj variable points to
        // quotesReducerNew which has the counter and quotes array data.
        // This mimicks the initial that's passed in the store in src/index.js
        // which uses quotesReducerNew and is passed the data obj from data/index.js
        case 'INCREMENT':
            const newStateIncreased = obj.counter + 1 >= obj.quotes.length ? Object.assign({}, state, {
                quotesReducerNew: {
                    counter: 0,
                    quotes: [
                        ...obj.quotes,
                    ]
                }
            }) : Object.assign({}, state, {
                quotesReducerNew: {
                    counter: obj.counter + 1,
                    quotes: [
                        ...obj.quotes,
                    ]
                }
            }) ;
            return newStateIncreased;
        case 'DECREMENT':
            const newStateDecreased = obj.counter - 1 < 0 ? Object.assign({}, state, {
                quotesReducerNew: {
                    counter: obj.quotes.length - 1,
                    quotes: [
                        ...obj.quotes,
                    ]
                }
            }): Object.assign({}, state, {
                quotesReducerNew: {
                    counter: obj.counter - 1,
                    quotes: [
                        ...obj.quotes,
                    ]
                }
            }); 
            return newStateDecreased;
        default:
            return state;
    }
}

export default quotesReducerNew;