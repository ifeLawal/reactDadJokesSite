import React, { Fragment } from 'react';
// import logo from './logo.svg';
import './index.css';

import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, useHistory, HashRouter } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory'

function App() {
  const name = 'John Doe'
  const isAuthenticated = true
  // const history = useHistory()
  return (
    // <Router HashRouter={history}></Router>
    <Router basename="/reactDadJokesSite">
      <main>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            {/* <li><Link to="/about">About</Link></li> */}
            <li><Link to={`/about/${name}`}>About</Link></li>
            <li><Link to='/work'>Work</Link></li>
            {/* <li><Link to='/test'>Test</Link></li> */}
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/about" component={About} /> */}
            {isAuthenticated ?
              <>
                <Route path="/about/:name" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/work" component={Work} />
                {/* <Route path="/test" component={Test} /> */}
              </> : <Route path="/noAccess" component={NoAccess} />
            }
            <Route render={() => <h1>404: page not found</h1>} />
          </Switch>
      </main>
    </Router>
  );
}

// const Test = () => {

//   return (<h1>This is a test class</h1>)
// }

// Home Page
const Home = () => (
  <Fragment>
    <h1>Home</h1>
    <FakeText />
  </Fragment>
);

// About Page
const About = ({ match: { params: { name } } }) => (
  <Fragment>
    {name !== 'John Doe' ? <Redirect to="/" /> : null}
    <h1>About {name}</h1>
    <FakeText />
  </Fragment>
);

// Contact
const Contact = ({ history }) => (
  <Fragment>
    <h1>Contact</h1>
    <button onClick={() => history.push('/')} >Go to home</button>
    <FakeText />
  </Fragment>
);

// Work
const Work = () => {
  const history = useHistory()
  return (
    <Fragment>
      <h1>Work</h1>
      <button onClick={() => history.push('/')} >Go back home</button>
      <FakeText />
    </Fragment>
  );
}

// Work
const NoAccess = () => {
  return (
    <Fragment>
      <h1>You do not have access to that page</h1>
      <FakeText />
    </Fragment>
  );
}


const FakeText = () => (
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto officia unde temporibus soluta eos dolorem, in aliquid nesciunt libero corrupti ea nostrum voluptate obcaecati quibusdam, impedit ipsa blanditiis animi dolor.
  </p>
);

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: true,
      count: 0,
      input: ''
    }
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  increment() {
    this.setState((state) => ({
      count: state.count + 1
    }))
  }

  decrement() {
    this.setState((state) => ({
      count: state.count - 1
    }))
  }

  reset() {
    this.setState(() => ({
      count: 0
    }))
  }

  toggleVisibility() {
    this.setState((state) => ({
      visibility: !state.visibility
    }))
  }

  render() {
    if(this.state.visibility) {
      return(
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
          <br />
          <form>
            <label>
              Name:
              <input type="text" value={this.state.input} onChange={this.handleChange}/>
            </label>
          </form>
          <h1>Current name input: {this.state.input}</h1>
        </div>
      )
    }
    else {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
            <h1>Now you're counting!</h1>
            <br />
            <button onClick={this.increment}>Increment!</button ><button onClick={this.decrement}>Decrement!</button><button onClick={this.reset}>Reset</button>
            <h1>Current Count: {this.state.count}</h1>
          </div>
      )
    }
  }
}


const DailyTask = (props) => {
  return (
    <div>
      <h1>{props.day}</h1>
      <p>{props.tasks.join(", ")}</p>
    </div>
  )
}

DailyTask.propTypes = {
  day: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired
}

class DailyPlanner extends React.Component {
 constructor(props) {
   super(props)
 } 

 render() {
   return (
     <div>
       <DailyTask day={"Monday"} tasks={["Walk the dog","Feed your sister","Go to the vet"]}/>
       <DailyTask day={"Tuesday"} tasks={["Walk the dog","Talk to your mom"]}/>
     </div>
   )
 }

}

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* change code below this line */ }
        <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
        <RenderInput input={this.state.inputValue} />
        { /* change code above this line */ }
       </div>
    );
  }
};

// Lifecycle methods
// componentWillMount() componentDidMount() shouldComponentUpdate()
// componentDidUpdate() componentWillUnmount()
// componentWillMount to soon be deprecated

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: [
//         {
//           username: 'Jeff',
//           online: true
//         },
//         {
//           username: 'Alan',
//           online: false
//         },
//         {
//           username: 'Mary',
//           online: true
//         },
//         {
//           username: 'Jim',
//           online: false
//         },
//         {
//           username: 'Sara',
//           online: true
//         },
//         {
//           username: 'Laura',
//           online: true
//         }
//       ]
//     }
//   }
//   render() {
//     const usersOnline = this.state.users.filter((user) => user.online); // change code here
//     const renderOnline = usersOnline.map((user, i) => {
//       return <li key={i}>{user.username}</li>
//     }); // change code here
//     return (
//        <div>
//          <h1>Current Online Users:</h1>
//          <ul>
//            {renderOnline}
//          </ul>
//        </div>
//     );
//   }
// };

export default MyComponent;
