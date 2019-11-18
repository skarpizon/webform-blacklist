import React from 'react';
import { Redirect } from 'react-router-dom';
import { withRestService } from '../hoc-helpers';
import Spinner from '../spinner';

class LoginPage extends React.Component {

    state = {
        login: '',
        password: '',
        loading: false,
        error: false
    };

    loginTextChanged = (text) => {
        this.setState(() => {
            return {
                login: text
            };
        })
    };

    onLoginTextChanged = (event) => {
        this.loginTextChanged(event.target.value);
    };

    passwordTextChanged = (text) => {
        this.setState(() => {
            return {
                password: text
            };
        })
    };

    onPasswordTextChanged = (event) => {
        this.passwordTextChanged(event.target.value);
    };

    onLogin = () => {
        this.setState({
            loading: true,
            error:false
        });
        this.props.auth({
            username: this.state.login,
            password: this.state.password
        }).then((res) => {
            if (res.ok)
            {
                this.props.logIn();
                this.setState({
                loading: false,
                error:false
                });
            }
            else
            {
                this.setState({
                    loading: false,
                    error:true
                });
            }
            
        })
        .catch(()=> {
            this.setState({
                loading: false,
                error:true
            });
        });
    }

    render() {
        let logBut = this.state.loading ? <Spinner isLogin={true}/>: <button className= "button login__enter" onClick={this.onLogin}>Войти</button>;
        if (this.props.isLoggedIn) return <Redirect to="/lists"/>;
        let error = this.state.error ? 'Неверная пара логин\пароль!' : null;
        return (
            <React.Fragment>
                <div className= "wrapper login_grid">
                    <div className= "login_border">
                        <div>
                            <p className= "input_text">Login:</p>
                            <input className= "email_input" type = "text" placeholder = "Login" onChange={this.onLoginTextChanged}/>
                            <p className= "input_text no_margin">Password:</p>
                            <input className= "email_input" type = "Password" placeholder = "Password" onChange={this.onPasswordTextChanged}/>
                            <div className="login">
                                <div className="login__error">{error}</div>
                                {logBut}
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}


const mapMethodsToProps = (restService) => {
    return {
        auth: restService.auth
    };
};

export default withRestService(LoginPage, mapMethodsToProps);