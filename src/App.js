import React from "react";
import './App.css';
import Test from "./pages/Test/test";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";

const App = () => {
    return (
        <div className='pkf_app'>
            <div >Header</div>
            <div>
                <Switch>
                    <Route exact path='/' render={()=> <Redirect to={'/test'}/>} />
                    <Route path='/test' render={() => <Test/>}/>
                    <Route path='*' render={() => <div>Error 404  "Страница не найдена"</div>}/>
                </Switch>
            </div>
        </div>
    );
}

export default compose (
    withRouter,
    connect())(App);