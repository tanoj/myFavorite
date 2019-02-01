import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import reducers from './reducers';
import Main from './Main';
import './App.css';

const store = createStore(
  reducers, {}, applyMiddleware(ReduxThunk)
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
