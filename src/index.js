import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { AuthStore } from './contexts/AuthStore';

ReactDOM.render(
  <BrowserRouter>
    <AuthStore>
      <App /> 
    </AuthStore>
  </BrowserRouter>
 ,document.getElementById('root'));

serviceWorker.unregister();
