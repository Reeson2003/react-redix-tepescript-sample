import * as React from 'react';
// import {connect} from "react-redux";
import State from "./api/State";
import UserInputComponent from "./components/UserInputComponent";
import UserListComponent from "./components/UserListComponent";


class App extends React.Component<any, State> {
    // trackInput:HTMLInputElement;
    // addTrack() {
    //     const text = this.trackInput.value;
    //     console.log(text);
    //     this.props.onAddTrack(text);
    //     this.trackInput.value = '';
    // }

    render() {
        // console.log(this.props.testStore);
        // return (
        //     <div>
        //         <input type="text" ref={(input:HTMLInputElement)=> {this.trackInput = input}}/>
        //         <button onClick={this.addTrack.bind(this)}>Add</button>
        //         <ul>
        //             {
        //                 this.props.testStore.map((entry: string, index: number) =>
        //                     <li key={index}>{entry}</li>
        //                 )
        //             }
        //         </ul>
        //     </div>
        // );
        return <div>
            <UserInputComponent/>
            <UserListComponent/>
        </div>
    }
}

// export default connect(
//     state => ({
//         testStore: state
//     }),
//     dispatch => ({
//         onAddTrack: (trackName:string) => {
//             dispatch({type:'ADD', payload: trackName})
//         }
//     })
// )(App);

export default App;
