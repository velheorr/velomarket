import React from "react";
import './App.css';
import Test from "./pages/Test/test";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import Header from "./pages/Header/Header";

const App = () => {
    return (
        <div className='main'>
            <div className='mainHeader'>
                <Header/>
            </div>
            <div className='mainBody'>
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