import React from 'react';

class Login extends React.Component {

    render() {
        return (
            <div>
                <input placeholder='username'></input>
                <input placeholder='password'></input>
                <button>Login</button>
            </div>
        )
    } 
}

export default Login;
