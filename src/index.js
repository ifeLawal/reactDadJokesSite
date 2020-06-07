import React from 'react';
import ReactDOM from 'react-dom';
// import Container from './reduxReact'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import DadJokesPage from './DadJokesPage';
import {quoteData} from './data'

console.log(quoteData.counter);
// set up the redux store and give it a starting state with the populated quotes
const store = createStore(rootReducer, {
  quotesReducerNew: quoteData
});

// debug the state of the store
console.log(store.getState());


ReactDOM.render(
  <Provider store={store}>
    <DadJokesPage />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
