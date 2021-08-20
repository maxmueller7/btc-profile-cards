import { combineReducers, createStore } from 'redux';
import { profileReducer } from 'redux/reducers/profileReducer';
import { Provider } from 'react-redux';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import './index.scss';

const rootReducer = combineReducers({
  profiles: profileReducer,
});
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
