import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

import rootReducer from './reducers/reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


// step 2: Set up store and Provider

const store = createStore(rootReducer);



const rootElement = document.getElementById('root');
ReactDOM.render(

<Provider store={store}>
   <App />
   </Provider>
   , rootElement);
