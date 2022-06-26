import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


import {Provider} from "react-redux";
import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from '../redux';
import logger from "redux-logger";


import ShowStore from '../components/ShowStore'
import Game from '../containers/Game'
import AppHeader from './AppHeader';
import './app.css';


const store = createStore(
    rootReducer,
    applyMiddleware(logger)
);


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App container">
                        <AppHeader/>
                        <Switch>
                            <Route path="/" exact component={Game}/>
                        </Switch>
                        <ShowStore/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;