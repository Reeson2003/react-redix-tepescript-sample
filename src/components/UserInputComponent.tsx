import * as React from 'react'

import {Component} from "react";
import './UserInputComponent.css'
import State from "../api/State";
import {connect} from "react-redux";
import User from "../api/User";

class UserInputComponent extends Component<any, State> {
    firstNameInput: HTMLInputElement;
    lastNameInput: HTMLInputElement;
    birthDateInput: HTMLInputElement;
    addUser = () => {
        const firstName = this.firstNameInput.value;
        const lastName = this.lastNameInput.value;
        const birthDate = this.birthDateInput.value;
        const user: User = {
            firstName: firstName,
            lastName: lastName,
            birthDate: new Date(birthDate)
        };
        this.props.onAddUser(user);
    }

    render() {
        return (
            <div>
                <ul className={'userInputElements'}>
                    <li>User input component</li>
                    <li className={'inputElement'}>
                        <label>first name</label>
                        <input type={'text'} id={'firstNameInput'} ref={(input: HTMLInputElement) => {
                            this.firstNameInput = input
                        }}/>
                    </li>
                    <li>
                        <label>last name</label>
                        <input type={'text'} id={'lastNameInput'} ref={(input: HTMLInputElement) => {
                            this.lastNameInput = input
                        }}/>
                    </li>
                    <li>
                        <label>birth date</label>
                        <input type={'date'} id={'birthDateInput'} ref={(input: HTMLInputElement) => {
                            this.birthDateInput = input
                        }}/>
                    </li>
                </ul>
                <button className={'userInputConfirm'} onClick={this.addUser}>Send</button>
            </div>
        )
    }
}

export default connect(
    state => ({}),
    dispatch => ({
        onAddUser: (user: User) => {
            dispatch({type: 'ADD', payload: user})
        }
    })
)(UserInputComponent);