import cadastraUsuario, { pegaTypes } from "../Js/api";

export default function Cadastro() {
    return (
        <div className="principal">
            <div className="form">
                    <div className="title_form">
                        <h1 className="effect">Cadastro</h1>
                        <div className="formAdmin">
                <form onSubmit={cadastraUsuario}>
                    <div className="User">
                        <i className="fa-solid fa-user-large"></i>
                        <input type="hidden" name="id" />
                    </div>

                    <div className="User">
                        <i className="fa-solid fa-user-large"></i>
                        <input type="text" name="nif" placeholder="NIF" required id="nif" />
                    </div>

                    <div className="User">
                        <i className="fa-solid fa-user-large"></i>
                        <input type="text" placeholder="Nome" name="nome" required id="nome" />
                    </div>

                    <div className="User">
                        <i className="fa-solid fa-user-large"></i>
                        <input type="email" placeholder="Email" name="email" required id="email" />
                    </div>

                    <div className="User">
                        <i className="fa-solid fa-lock"></i>
                        <input type="password" placeholder="Senha" name="senha" required id="senha" />
                    </div>
                    <br />
                    <select className="User" id="type" name="type" >
                    </select>
                    <br />
                    <button type="submit" className="btn" onChange={pegaTypes()}
                    >Cadastrar</button>
                </form>
            </div>
        </div>
                    </div>
                </div>   
    )
}
