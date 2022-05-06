import './App.css';

function App() {
  return (
    <div className="App">

      <div class="base_form">
        <div class="form">
          <div class="title_form">
            <h1 class="effect">Login</h1>
          </div>

          <div class="formAdmin">
            <form action="">
              <div class="User">
                <i class="fa-solid fa-user-large"></i>
                <input type="text" placeholder="NIF" required />
              </div>
              <div class="User">
                <i class="fa-solid fa-lock"></i>
                <input type="Senha" placeholder="Senha" required />
              </div>
              <button type="submit" class="btn">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
