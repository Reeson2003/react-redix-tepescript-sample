import * as React from 'react';

import "./Counter.css";
import {CSSProperties} from "react";

interface State {
    count: number;
    style: CSSProperties;
}

class Counter extends React.Component<any, State> {
    state = {
        count: 0,
        style: {
            color: "#7f7"
        }
    };

    increment = () => {
        this.changeCounter(1);
    };

    decrement = () => {
        this.changeCounter(-1);
    };

    changeCounter(delta: number) {
        const current = (this.state.count + delta) < 0 ? 0 : this.state.count + delta;
        this.setState({
            count: current,
            style: {
                color: current < 10 ? "#7f7" : "#f77"
            }
        }, () => {
            console.log("State changed");
        });
    };

    startCountDown = () => {
        const id = setInterval(() => {
            if (this.state.count > 0) {
                this.decrement();
            }
            else {
                clearInterval(id);
            }
        }, 1000)
    };

    render() {
        return (
            <div className={"counter"}>
                <h2 className={"counterHeader"}>Counter</h2>
                <div className={"buttonsHolder"}>
                    <button onMouseUp={this.decrement} className={'minusButton'}>-</button>
                    <span className={"counterHolder"} style={this.state.style}>{this.state.count}</span>
                    <button onMouseUp={this.increment} className={'plusButton'}>+</button>
                </div>
                <button onClick={this.startCountDown} className={"startButton"}>Start</button>
            </div>
        )
    }
}

export default Counter;