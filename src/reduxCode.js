import Redux from 'redux'

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

const defaultState = {
    authenticated: false
};

const authReducer = (state = defaultState, action) => {
    // change code below this line
    switch (action.type) {
        case LOGIN:
            return { authenticated: true }
        case LOGOUT:
            return { authenticated: false }
        default:
            return state
    }
    // change code above this line
};

// const store = Redux.createStore(authReducer);

store.subscribe(() => console.log(store.getState()));

const loginUser = () => {
    return {
        type: LOGIN
    }
};

const logoutUser = () => {
    return {
        type: LOGOUT
    }
};

// dispatching test actions
// store.dispatch({type: ADD});
// console.log(count);
// store.dispatch({type: ADD});
// console.log(count);
// store.dispatch({type: ADD});
// console.log(count);

// for when you have multiple reducers
// example a note taking app that has authentication actions and notes submitted
// by users
const rootReducer = Redux.combineReducers({
    auth: authReducer,
    notes: counterReducer
  });

const store = Redux.createStore(rootReducer);


// -----------
// example of dispatching user data along with the action type
// and printing out the text using redux store
// const ADD_NOTE = 'ADD_NOTE';

// const notesReducer = (state = 'Initial State', action) => {
//   switch(action.type) {
//     // change code below this line
//     case ADD_NOTE:
//       return state = action.text
//     // change code above this line
//     default:
//       return state;
//   }
// };

// const addNoteText = (note) => {
//   // change code below this line
//   return {type: ADD_NOTE, text: note}
//   // change code above this line
// };

// const store = Redux.createStore(notesReducer);

// console.log(store.getState());
// store.dispatch(addNoteText('Hello!'));
// console.log(store.getState());

// -----------
// dispatching actions asynchronously
// remeber to pass actions as functions since they return objects

// const REQUESTING_DATA = 'REQUESTING_DATA'
// const RECEIVED_DATA = 'RECEIVED_DATA'

// const requestingData = () => { return {type: REQUESTING_DATA} }
// const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

// const handleAsync = () => {
//   return function(dispatch) {
//     // dispatch request action here
//     dispatch(requestingData());
//     setTimeout(function() {
//       let data = {
//         users: ['Jeff', 'William', 'Alice']
//       }
//       // dispatch received data action here
//       dispatch(receivedData(data));
//     }, 2500);
//   }
// };

// const defaultState = {
//   fetching: false,
//   users: []
// };

// const asyncDataReducer = (state = defaultState, action) => {
//   switch(action.type) {
//     case REQUESTING_DATA:
//       return {
//         fetching: true,
//         users: []
//       }
//     case RECEIVED_DATA:
//       return {
//         fetching: false,
//         users: action.users
//       }
//     default:
//       return state;
//   }
// };

// const store = Redux.createStore(
//   asyncDataReducer,
//   Redux.applyMiddleware(ReduxThunk.default)
// );



// const immutableReducer = (state = [0,1,2,3,4,5], action) => {
//     switch(action.type) {
//       case 'REMOVE_ITEM':
//         // don't mutate state here or the tests will fail
//         return [...state.slice(0,action.index), ...state.slice(action.index+1)]
//       default:
//         return state;
//     }
//   };
  
//   const removeItem = (index) => {
//     return {
//       type: 'REMOVE_ITEM',
//       index
//     }
//   }
  
//   const store = Redux.createStore(immutableReducer);
  
//   // store.subscribe(() => console.log(store.getState()));
//   // store.dispatch(removeItem(1));
  