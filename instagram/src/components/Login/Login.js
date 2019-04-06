import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages} from '@fortawesome/free-solid-svg-icons';




const Formy = styled.form`padding: 0px;`;
const Inputy = styled.input` 
margin: 20px;
height: 50px;
border-radius: 10px;

`;
const Buttony = styled.button`
margin-left: 70px;
margin-bottom: 10px;
padding: 10px 20px;
border-radius: 10px;
background: black;
color: white;

`;

const Divvy = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: light-grey;
    border: 1px solid grey;
    flex-direction: column;
`;

class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            username : '',
            password : ''
        }
        this.userNameInput = React.createRef();
        this.passwordInput = React.createRef();

    }

    login = (e) => {
        e.preventDefault();
        console.log(localStorage.username);
        localStorage.setItem('username', this.userNameInput.current.value);
        localStorage.setItem('password', this.passwordInput.current.value);
        this.render();
    }

    // logout = (e) => {
    //     localStorage.clear();
    //     this.render();
    // }

    render() {

        return (
            <Divvy>
                <FontAwesomeIcon icon={faImages} size='6x' /><br/>
                <Formy>
                    <Inputy name={this.state.username} placeholder='username' ref={this.userNameInput} value={this.userNameInput.value} onChange={this.login} /><br/>
                    <Inputy name={this.state.password} placeholder='password' type='password' ref={this.passwordInput} value={this.passwordInput.value} onChange={this.login} /><br/>
                    <Buttony>Login</Buttony>
                </Formy>
            </Divvy>
            


        )


    }

}

export default Login;
