
// the state that I currently work with looks like this 
// state = { quotesReducerNew: { counter:0, quotes:[] } }

// the initial state object below is ideally what the state object should look like
// accessing counter and the array of quotes directly rather than through quotesReducerNew
const initialState = {
    counter: 0,
    quotes: []
}

// an attempt to start with two seperate reducers that would be combined
// this reducer held quote and quote master data
// still considering if this method is possible
// const quotesReducer = (state = [], action) => {
//     switch(action.type) {
//         case 'ADD_QUOTE':
//             return [...state, {
//                 quote: action.text,
//                 quoteMaster: action.quoteMaster
//             }];
//         default:
//             return state;
//     }
// }

// self combined reducer that handles counter increments and decrement aka going
// from next quote and previous quote
// as well as the future functionality of a user adding quotes
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
                            author: action.author
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