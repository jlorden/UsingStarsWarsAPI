import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Router, navigate } from '@reach/router';
import Display from './components/Display';
import Activity from './components/Activity';


function App() {
  const clickHandler = e => {
    navigate("/")
  }
  return (
    <Fragment>
      <div className="container">
        <h1 className="display-3">Hello, Earthling!</h1>
        <p className="lead">Welcome to the page where you can view anything Star Wars related.</p>
        <h4>Don't worry, I am not your father. Or am I?</h4>
        <hr className="my-5"></hr>
        <p>Ready to find your person or your planet or your starship?</p>
        <input className="btn btn-lg btn-info" value="Home" onClick={clickHandler} />

      </div>
      <Router>
        <Display exact path="/" />
        <Activity exact path="/:category/:id" component={Activity} />
      </Router>
    </Fragment>
  );
}

export default App;