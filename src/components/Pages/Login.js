import React, { Component } from 'react';
import LoginForm from '../Forms/LoginForm';

class Login extends Component {
    render() {
        return (
            <div>
                <h1>Login page</h1>
                
                <LoginForm />
            </div>
        );
    }
}

export default Login;