import React from "react";

function Login() {
    return (
      <div className="Login">
          <div className="base_form">
    <div className="form">
        <div className="title_form">
            <h1 className="effect">Login</h1>
        </div>

        <div className="formAdmin">
            <form action="">
                <div className="User">
                    <i className="fa-solid fa-user-large"></i>
                    <input type="text" placeholder="NIF" required />
                </div>
                <div className="User">
                    <i className="fa-solid fa-lock"></i>
                    <input type="Senha" placeholder="Senha" required />
                </div>
                <button type="submit" className="btn">Login</button>
            </form>
        </div>
    </div>
</div>
      </div>
    );
  }
  export default Login;