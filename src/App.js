import React from 'react';
import './App.scss';
import { RestServiceProvider } from './rest-service-context';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import ListsPage from './pages/lists-page';
import LoginPage from './pages/login-page';
import RestService from './services/rest-service';
import RestServiceDummy from './services/rest-service-dummy';
import Header from './header/header';

export default class App extends React.Component {

    restService = new RestServiceDummy();

    state = {
        isLoggedIn : false
    }

    refreshToken = async () => {
        if(await this.restService.refreshToken()) this.logIn();
    }

    logIn = () => {
        this.setState({
            isLoggedIn: true
        });
    }

    logOut = () => {
        localStorage.jt = '';
        this.setState({
            isLoggedIn: false
        });
    }
    componentDidMount(){
        this.refreshToken();
    }

    render() {
        let isLoggedIn = this.state.isLoggedIn;
        console.log(isLoggedIn);
        return (
            <RestServiceProvider value={this.restService}>
                <Router>
                    <Header isLoggedIn={isLoggedIn} logOut={this.logOut} />

                    <Switch>
                        <Route path="/login" render={()=> <LoginPage isLoggedIn={isLoggedIn} logIn={this.logIn} />} />
                        <Route render={()=> <ListsPage isLoggedIn={isLoggedIn}/>} />
                        <Route render={()=><h2>Page not found!</h2>}/>
                    </Switch>
                    
                </Router>
            </RestServiceProvider>
        );
    }
}
