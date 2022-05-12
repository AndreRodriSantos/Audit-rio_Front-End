import React from "react";
import cadastraUsuario, {cadUser, fazGet, login, pegaTypes} from './Js/API.js'

function Login() {
    return (
        <div className="Login">
            <div className="base_form">
                <div className="form">
                    <div className="title_form">
                        <h1 className="effect">Login</h1>
                    </div>

                    <div className="formAdmin">
                        <form onSubmit={login}>
                            <div className="User">
                                <i className="fa-solid fa-user-large"></i>
                                <input type="text" placeholder="NIF" name="nif" required id="loginNif"/>
                            </div>
                            <div className="User">
                                <i className="fa-solid fa-lock"></i>
                                <input type="Senha" placeholder="Senha" required name="senha" id="loginSenha"/>
                            </div>
                            <button type="submit" className="btn">Login</button>
                        </form>
                    </div>
                </div>

                <div className="form">
                    <div className="title_form">
                        <h1 className="effect">Cadastro</h1>
                    </div>

                    <div className="formAdmin">
                        <form onSubmit={cadastraUsuario}>
                            <div className="User">
                                <i className="fa-solid fa-user-large"></i>
                                <input type="hidden" name="id"/>
                            </div>

                            <div className="User">
                                <i className="fa-solid fa-user-large"></i>
                                <input type="text" name="nif" placeholder="NIF" required id="nif"/>
                            </div>
                            <div className="User">
                                <i className="fa-solid fa-user-large"></i>
                                <input type="email" placeholder="Email" name="email" required  id="email"/>
                            </div>
                            <div className="User">
                                <i className="fa-solid fa-lock"></i>
                                <input type="password" placeholder="Senha" name="senha" required id="senha" />
                            </div>
                            <br/>
                            <select className="User" id="type" name="type" >
                            </select> 
                            <br/>
                            <button type="submit" className="btn" onChange={pegaTypes()}
                            >Cadastrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>   
    );
    
}

export default Login;