import * as React from 'react';
import { Component } from 'react';
import State from "../api/State";



export class Hello extends Component<any, State> {
    render() {
        return (
            <div id="myDiv">
                <input type="text" />
                <button >Add</button>
                <ul>

                </ul>
            </div>
        );
    }
}

export default Hello;