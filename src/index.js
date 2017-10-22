import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux'
import highlightsReducer from './reducers/highlightsReducer'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(highlightsReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
