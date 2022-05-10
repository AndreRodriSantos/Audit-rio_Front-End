import React from "react";
import "./css/Style_Reserva.css"
import "./css/Style_confirmacao.css"

function Reserva() {
  return (
    <div class="principal">
      <div class="Reserva">
        <div class="base_form">
            <div class="form">
                <div class="title_form">
                    <h1 class="novaRS">Criar uma nova reserva</h1>
                </div>

                <div class="formAdmin">
                    <form action="">
                        
                        <div class="User">
                            <h5 class="title_I">Início</h5>
                            <input type="date" required class="Data_Inicio"/><br/>
                            <select name="cars" id="cars" class="Tempo_Inicio">
                                <option value="volvo">13:00</option>
                                <option value="saab">13:30</option>
                                <option value="mercedes">14:00</option>
                            </select>
                            <br/>
                        </div>

                        
                        <div class="User">
                            <h5 class="title_F">Final</h5>
                            <input type="date" required class="Data_final"/><br/>

                            <select name="cars" id="cars" class="Tempo_final">
                                <option value="volvo">13:00</option>
                                <option value="saab">13:30</option>
                                <option value="mercedes">14:00</option>
                            </select>
                            <br/>
                        </div>

                        
                        <div class="User">
                            <h5 class="title_DA">Duração da reserva</h5>
                            <span class="Tempo">0 dias 3 horas 0 minutos</span>

                        </div>

                        
                        <div class="User">
                            <h5 class="title_RR">Repetir</h5>
                            <select name="cars" id="cars" class="Repetir">
                                <option value="volvo">Não Repetir</option>
                                <option value="saab">Repetir</option>
                                <option value="mercedes">Repetir Dia Inteiro</option>
                            </select>
                            <br/>
                        </div>

                        
                        <div class="User">
                            <h5 class="title_TR">Titulo da Reserva</h5>
                            <input type="text" placeholder="Nome da Reserva" required class="Nome_Reserva"/>
                            <br/>
                        </div>

                        
                        <div class="User">
                            <h5 class="title_DR">Descricao da Reserva</h5>
                            <textarea id="w3review" name="w3review" rows="4" cols="50" class="Descricao">
                            </textarea> 
                        </div>

                      
                        <h4 class="title_PT">Participantes</h4>
                        <div class="User">
                            <h5 class="Adicionar">Adicionar</h5>
                            <input type="text" placeholder="Número de Participantes" required class="Participantes"/>
                            <br/>
                        </div>

                        
                        <button type="submit" class="btn Pessoa">User</button>

                      
                        <button type="submit" class="btn Grupos">Grupos</button>

                        
                        <button type="submit" class="btn cancelar">Cancelar</button>

                        
                        <button type="submit" class="btn criar buy" onClick={Confirmacao}>Criar</button>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>

      <form class="payment" action="cadastro">
        <span class="close" onClick={Fechar}>X</span>
        <div class="Confirmacao">
          <img src="./IMG/OK.png" alt="" />
        </div>
        <div class="conteudo">
          <h1 class="title_CO">Confirmação da Operação</h1>
          <h3 class="Descricao_EC">Evento de Confirmação da Operação do Auditorio</h3>
          <h5 class="title_COnfig">Data/Hora:</h5>
          <span class="Tempo_COnfig">23/09/2022 13:30</span>

        </div>
        <button class="btn_Confirmacao Fechar">Fechar</button>
        <button class="btn_Confirmacao DE">Detalhes do Evento</button>
      </form>
    </div>
  );

}

function Confirmacao(){
  const buy = document.querySelector(".buy");
  const payment = document.querySelector(".payment");
  const close = document.querySelector(".close");
  payment.style.display = "flex"
}

function Fechar(){
  const payment = document.querySelector(".payment");
  payment.style.display = "none"
}
export default Reserva;