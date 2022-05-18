import React from "react";
/* import "./css/Style_Reserva.css"*/
import "./css/Style_confirmacao.css" 
import { mostraReservas, reserva } from "./Js/api";

function Reserva() {
  return (
    <div className="principal">
      <div className="Reserva">
        <div className="base_form">
            <div className="form">
                <div className="title_form">
                    <h1 className="novaRS">Criar uma nova reserva</h1>
                </div>

                <div className="formAdmin">
                    <form onSubmit={reserva}>
                        <input type="hidden" name="id" ></input>
                        <div className="User">
                            <h5 className="title_I">Início</h5>
                            <input type="datetime-local" id="dataInicio" name="dataInicio" required className="Data_Inicio"/><br/>
                            
                            <br/>
                        </div>

                        
                        <div className="User">
                            <h5 className="title_F">Final</h5>
                            <input type="datetime-local" name="dataTermino" id="dataTermino" required className="Data_Inicio"/>
                            <br/>
                        </div>

                        <div className="User">
                            <h5 className="title_RR" >Repetir</h5>

                            { <input  type="checkbox" name="repetir" id="repetir" ></input> }
                            
                            <br/>
                        </div>

                        
                        <div className="User">
                            <h5 className="title_TR">Titulo da Reserva</h5>
                            <input type="text" name="titulo" placeholder="Nome da Reserva" id="titulo" required className="Nome_Reserva"/>
                            <br/>
                        </div>

                        
                        <div className="User">
                            <h5 className="title_DR">Descricao da Reserva</h5>
                            <textarea name="descricao" rows="4" cols="50" id="descricao" className="Descricao" >
                            </textarea> 
                        </div>

                      
                        <h4 className="title_PT">Participantes</h4>
                        <div className="User">
                            <h5 className="Adicionar">Adicionar</h5>
                            <input type="text" name="participantes" placeholder="Número de Participantes" id="participantes" required className="Participantes"/>
                            <br/>
                        </div>

                        <button type="submit" className="btn cancelar">Cancelar</button>

                        
                        <button type="submit" className="btn criar buy" onClick={Confirmacao}>Criar</button>
                        <button type="submit" className="btn criar buy" onClick={mostraReservas}>Mostrar Reservas</button>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>

      <form className="payment" action="cadastro">
        <span className="close" onClick={Fechar}>X</span>
        <div className="Confirmacao">
          <img src="./IMG/OK.png" alt="" />
        </div>
        <div className="conteudo">
          <h1 className="title_CO">Confirmação da Operação</h1>
          <h3 className="Descricao_EC">Evento de Confirmação da Operação do Auditorio</h3>
          <h5 className="title_COnfig">Data/Hora:</h5>
          <span className="Tempo_COnfig">23/09/2022 13:30</span>

        </div>
        <button className="btn_Confirmacao Fechar">Fechar</button>
        <button className="btn_Confirmacao DE">Detalhes do Evento</button>
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