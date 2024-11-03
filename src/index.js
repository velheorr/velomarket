import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/store";
import {QueryClient,
    QueryClientProvider,} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";


const querryClient = new QueryClient()

ReactDOM.render(

        <Router>
            <QueryClientProvider client={querryClient}>
                <Provider store={store}>
                    <App/>
                </Provider>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </Router>,
    document.getElementById('root')
)
;

