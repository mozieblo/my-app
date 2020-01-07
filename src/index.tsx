import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';
import thunk from 'redux-thunk';

const logger: any = (store: any) => {
    return (next: any) => {
        return (action: any) => {
            console.log('middleware', action);
            const result = next(action);
            console.log('next state', store.getState());
            return result;
        }
    }
}

const store = createStore(reducer, applyMiddleware(logger, thunk));

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
