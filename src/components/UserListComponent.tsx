import {Component} from "react";
import User from "../api/User";
import {connect} from "react-redux";
import State from "../api/State";
import * as React from "react";
import UserComponent from "./UserComponent";
import "./UserListComponent.css";

class UserListComponent extends Component<any, State> {
    deleteUser = (event:any)=> {
        const id = event.currentTarget.id;
        // console.log(id);
        // console.log(this.props.users[id])
        console.log(event.constructor.name);
        const user = this.props.users[id];
        this.props.onDeleteUser(user);
    };
    render() {
        return <ul className={'userList'}>
            {this.props.users.map((user: User, index: number) =>
                <li key={index} className={'userListItem'}  onClick={this.deleteUser} id={index.toString()}>
                    <UserComponent firstName={user.firstName} lastName={user.lastName}
                                   birthDate={user.birthDate.toLocaleDateString()}/>
                </li>
            )}
        </ul>

    }
}

export default connect(
    state => ({
        users: state
    }),
    dispatch => ({
        onDeleteUser(user:User) {
            dispatch({type:'DELETE', payload: user})
        }
    })
)(UserListComponent);