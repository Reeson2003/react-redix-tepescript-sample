import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import {Provider} from "react-redux";
import {createStore} from "redux";
import {AnyAction} from "redux";
import User from "./api/User";

const initState: User[] = [{
    firstName: 'HHH',
    lastName: 'NNN',
    birthDate: new Date()
}, {
    firstName:'MMM',
    lastName:'BBB',
    birthDate: new Date()
}];
const enhancer = window['devToolsExtension'] ? window['devToolsExtension']()(createStore) : createStore;

const store = enhancer((state: User[] = initState, action: AnyAction) => {
    if (action.type === "ADD") {
        console.log("ADD", action.payload);
        return [...state, action.payload];
    }
    if (action.type === "DELETE") {
        const user = action.payload as User;
        const index = state.indexOf(user);
        console.log("DELETE", index);
        // state.sort((a,b) => {return a.firstName.localeCompare(b.firstName)})
        state.splice(index,1);
        return [...state];
    }
    return state;
});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();

// import {createStore} from "redux";
// import {AnyAction} from "redux";
//
// const store = createStore((state: string[] = [], action: AnyAction) => {
//     if (action.type === "ADD")
//         return [...state, action.payload];
//     console.log("ACTION:");
//     console.log(action);
//     return state;
// });
//
// store.subscribe(() => {
//     const list = document.querySelectorAll('.list')[0];
//     const st = store.getState();
//     if (st != undefined)
//         st.forEach(elem => {
//             const li = document.createElement('li');
//             li.innerText = elem;
//             list.appendChild(li);
//         });
//     console.log('subscribe', store.getState())
// });
//
// const addButton = document.querySelectorAll('.addTrack')[0];
// addButton.addEventListener('click', () => {
//     const elem = document.querySelectorAll('.trackInput')[0] as HTMLInputElement;
//     const name = elem.value;
//     store.dispatch({type: "ADD", payload: name});
// });