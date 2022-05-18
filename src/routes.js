import { BrowserRoute, Route, Switch, BrowserRouter, Redirect, Router } from 'react-router-dom'
import Login from './Login'
import Principal from './Principal'
import Reserva from './Reserva'
import Cadastro from './Cadastro';
import { isAuthenticated } from './Js/auth';
import {history} from './Js/history'

const PrivateRoute = (props) => {
    return isAuthenticated() ? <Route {...props}/>: <Redirect to="/Login" push></Redirect> && console.error("Acesso negado: Você precisa estar logado")
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
        </Switch>
        </Router>
    )
}