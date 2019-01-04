import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import rootReducer from './reducers';
import thunk from "redux-thunk";
import logger from "redux-logger";
import ProjectShowCase from '../ProjectShowcase/containers';
import CheckMobile from '../CheckMobile/container';
import Header from '../Header/Header';
import classes from './App.css';

const middlewares = [thunk, logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <CheckMobile
            yes={
              <div className={classes.AppMobile}>
                <ProjectShowCase query="animal" />
                <ProjectShowCase query="anime" />
              </div>
            }
            no={
              <div className={classes.AppDesktop}>
                <ProjectShowCase query="animal" />
                <ProjectShowCase query="anime" />
              </div>
            }
          />
        </div>
      </Provider>
    );
  }
}

export default App;
