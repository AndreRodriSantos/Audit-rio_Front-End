import React from "react";
import cadastraUsuario, { cadUser, fazGet, login, pegaTypes } from './Js/api.js'

function Login() {
    return (
        <div className="Login">
            <div className="form">
                <h1>Login</h1>
                <div className="formAdmin">
                    <form onSubmit={login}>
                        <div className="User">
                            <i className="fa-solid fa-user-large"></i>
                            <input type="text" placeholder="NIF" name="nif" required id="loginNif" />
                        </div>
                        <div className="User">
                            <i className="fa-solid fa-lock"></i>
                            <input type="Senha" placeholder="Senha" required name="senha" id="loginSenha" />
                        </div>
                        <button type="submit" className="btn">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default Login;