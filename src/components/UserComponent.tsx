import * as React from "react";
import {Component} from "react";
import User from "../api/User";
import "./UserComponent.css"

class UserComponent extends Component<any,User> {
    render() {
        return (
            <div>{this.props.firstName} {this.props.lastName} {this.props.birthDate}</div>
        );
    }
}

export default UserComponent;

// const UserComponent = (props:User) => <div>{props.firstName} {props.lastName} {props.birthDate}</div>;
//
// export default UserComponent;