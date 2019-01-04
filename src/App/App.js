import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import rootReducer from './reducers';
import thunk from "redux-thunk";
import logger from "redux-logger";
import ProjectShowCase from '../ProjectShowcase/containers';

const middlewares = [thunk, logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ProjectShowCase query="animal" />
        </div>
      </Provider>
    );
  }
}

export default App;
