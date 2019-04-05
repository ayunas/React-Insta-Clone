import React from 'react';

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
            <form>
                <input name={this.state.username} placeholder='username' ref={this.userNameInput} value={this.userNameInput.value} onChange={this.login} />
                <input name={this.state.password} placeholder='password' ref={this.passwordInput} value={this.passwordInput.value} onChange={this.login} />
                <button>Login</button>
                {/* <button onClick={this.logout}>Logout</button> */}
            </form>


        )


    }

}

export default Login;
