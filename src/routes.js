import { BrowserRoute, Route, Switch, BrowserRouter, Redirect, Router } from 'react-router-dom'
import Login from './pages/Login'
import Principal from './pages/Principal'
import Reserva from './pages/Reserva'
import Cadastro from './pages/Cadastro';
import { isAuthenticated } from './Js/auth';
import {history} from './Js/history'
import Verifica from './pages/Verifica';
import { PostAuditorio } from './pages/PostAuditorio';
import { decodaToken } from './Js/API';

const PrivateRouteAdmin = (props) => {
    isAuthenticated() ? <Route {...props}/> : <Redirect to="/Principal" push></Redirect> 
    
    /* if(isAuthenticated() == "ok"){
        return <Route {...props}/>
    }else{
        return <Redirect to="/Principal" push></Redirect> 
    } */
}

export default function Routes() {
    return (
        <Router history={history}>
        <Switch>
            <Route path='/' exact component={Login}></Route>
            <Route path='/Login' component={Login}></Route>
            <Route path='/Cadastro' component={Cadastro}/>
            <Route path='/Principal' component={Principal}/>
            <Route path='/PostAuditorio' component={PostAuditorio}/>
            <Route path='/Reserva' component={Reserva}/>
            <PrivateRouteAdmin path='/Verifica' component={Verifica}/>
        </Switch>
        </Router>
    )
}