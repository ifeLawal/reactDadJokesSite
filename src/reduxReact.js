import { createStore } from 'redux'
import React from 'react'
import { ReactReduxContext, connect } from 'react-redux'
// import from 'react-redux'


// react

class Presentational extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      // messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  submitMessage() {
    this.setState((state) => {
      this.props.submitNewMessage(state.input);
      this.state.input = '';
      // input: '',
      // messages: [...this.state.messages, this.state.input]
    })
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message: </h2>
        <form>
          <input type="text" value={this.state.input} onChange={this.handleChange}/>
        </form>
        <button type="submit" onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.props.messages.map((message,idx) => <li key={idx}>{message}</li>)}
        </ul>
      </div>
    )
  }
}

// Redux Code:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = createStore(messageReducer);

const Provider = ReactReduxContext.Provider;

// const state = [];

// React-Redux:

const mapStateToProps = (state) => {
  return {messages: state};
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: function(newMessage) {
      dispatch(addMessage(newMessage))
    }
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational)

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    )  
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Presentational);