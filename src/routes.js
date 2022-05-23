import { BrowserRoute, Route, Switch, BrowserRouter, Redirect, Router } from 'react-router-dom'
import Login from './pages/Login'
import Principal from './pages/Principal'
import Reserva from './pages/Reserva'
import Cadastro from './pages/Cadastro';
import { isAuthenticated } from './Js/auth';
import {history} from './Js/history'
import Verifica from './pages/Verifica';

const PrivateRoute = (props) => {
    return isAuthenticated() ? <Route {...props}/> : <Redirect to="/" push></Redirect>
}

export default function Routes() {
    return (
        <Router history={history}>
        <Switch>
            <Route path='/' exact component={Login}></Route>
            <Route path='/Login' component={Login}></Route>
            <PrivateRoute path='/Cadastro' component={Cadastro}/>
            <Route path='/Principal' component={Principal}/>
            <PrivateRoute path='/Reserva' component={Reserva}/>
            <PrivateRoute path='/Verifica' component={Verifica}/>
        </Switch>
        </Router>
    )
}