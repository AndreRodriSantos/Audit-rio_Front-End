import { BrowserRoute, Route, Switch, BrowserRouter, Redirect, Router } from 'react-router-dom'
import Login from './pages/Login'
import Principal from './pages/Principal'
import Reserva from './pages/Reserva'
import Cadastro from './pages/Cadastro';
import { isAuthenticated, isAuthenticatedAdmin } from './Js/auth';
import { history } from './Js/history'
import Verifica from './pages/Verifica';
import { PostAuditorio } from './pages/PostAuditorio';
import { decodaToken } from './Js/API';
import { erro } from './components/mensagem';

const PrivateRouteAdmin = (props) => {
    if (isAuthenticatedAdmin() === true) {
        return <Route {...props} />
    } else {
        erro("Precisa estar logado como um\nAdministrador para acessar essa página")
        return <Redirect to="/Principal" push></Redirect>
    }
}

const PrivateRoute = (props) => {
    if (isAuthenticated() === true) {
        return <Route {...props} />
    } else {
        return <Redirect to="/" push></Redirect>
    }
}

export default function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <Route path='/' exact component={Login}></Route>
                <Route path='/Login' component={Login}></Route>
                <PrivateRouteAdmin path='/Cadastro' component={Cadastro} />
                <Route path='/Principal' component={Principal} />
                <Route path='/PostAuditorio' component={PostAuditorio} />
                <PrivateRouteAdmin path='/Verifica' component={Verifica} />
                <Route path='*' exact component={Login}></Route>
            </Switch>
        </Router>
    )
}