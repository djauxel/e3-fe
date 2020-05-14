import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

<<<<<<< HEAD
import Dashboard from './components/Layout/Dashboard';

ReactDOM.render(
  <React.StrictMode>
    <Dashboard>
      
    </Dashboard>
=======
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './components/Layout/Dashboard';
import Login from './components/Pages/Login';

ReactDOM.render(
  <React.StrictMode>
    <Dashboard />
    {/* <Login /> */}
>>>>>>> 83ceb0c197fa26c688e66b0756241bc77f39736b
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
