import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import { BlackList, EmailsList } from '../lists';
import ListPanel from '../list-panel/list-panel';


const ListsPage = ({isLoggedIn}) => {

    if (!isLoggedIn) return <Redirect to="/login"/>

    return (
        <React.Fragment>
            
            <Router>
                <ListPanel/>
                <Switch>
                    <Route exact path="/lists" render={()=> <Redirect to="/lists/blacklist"/>} />
                    <Route path="/lists/blacklist" render={()=> <BlackList/>} />
                    <Route path="/lists/emails" render={()=> <EmailsList/>} />
                </Switch>
            </Router>
        </React.Fragment>
    );
}

export default ListsPage;
