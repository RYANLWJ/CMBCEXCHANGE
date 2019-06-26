import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/main.css';
// import './assets/css/header.css'//引进样式
// import TogglePlus from './components/father';

import Exchange from './pages/Exchange';
import Home from './pages/Home';
import { HashRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";

// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
// import store from './stores/store'
// console.log(store)




ReactDOM.render(
 
        <Router>
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route path="/exchange" component={Exchange} />
                {/* <Route path="/togg" component={TogglePlus} /> */}
            </Switch>
            <Redirect to="/home" />
        </Router>
    , document.getElementById('root'));
