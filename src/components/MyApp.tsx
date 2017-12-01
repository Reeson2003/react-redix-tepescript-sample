import * as React from 'react';
import './MyApp.css';
// import {Hello} from "./Hello";
// import {UserComponent} from "./UserComponent";

const logo = require('./logo.svg');

type State = {
    imgWidth: number;
    imgHeight: number;
}

class MyApp extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            imgWidth: 15,
            imgHeight: 15,
        };
    }

    zoom(props: WheelEvent) {
        console.log(props.deltaY);
        this.setState({
            imgWidth: this.state.imgWidth + 1,
            imgHeight: this.state.imgHeight + 1,
        })
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload.
                    <img src={logo} className="App-logo" alt="logo" style={{height: "15px", width: "15px"}}
                         onWheel={this.zoom.bind(this)}/>
                </p>
                {/*<UserComponent firstName={"AAA"} lastName={"BBB"} birthDate={new Date("04.08.1984")}/>*/}
            </div>
        );
    }
}

export default MyApp;