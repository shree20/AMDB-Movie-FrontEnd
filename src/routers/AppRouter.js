import React from 'react'
import {  BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import { createBrowserHistory } from 'history';
import App from '../App';
import AddMovie from '../components/AddMovie'
import EditMovie from '../components/EditMovie';

export const history = createBrowserHistory()

const AppRouter = ()=>{
    return (
 <Router history={history}>
    <div>
    <Switch>
    <Route path="/"  component={App} exact={true} />
    <Route path="/dashboard" component={App} exact={true} />
    <Route path="/create" component={AddMovie} />
    <Route path="/edit/:id" component={EditMovie} />
    </Switch>
    </div>
</Router>
    )
}

export default AppRouter