import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';


import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer  } from './reducers/reducer'


// step 2: Set up store and Provider

const store = createStore(reducer);



const rootElement = document.getElementById('root');
ReactDOM.render(

<Provider store={store}>
   <App />
   </Provider>
   , rootElement);
