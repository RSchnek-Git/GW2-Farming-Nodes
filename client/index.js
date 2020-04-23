import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import history from './history'
import store from './store'
import {Navbar} from './components'
import Routes from './routes'

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Navbar />
            <Routes />
        </Router>
    </Provider>,
    document.getElementById('app')
);