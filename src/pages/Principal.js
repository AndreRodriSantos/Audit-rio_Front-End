import React from "react";
import logo from '../IMG/logo.png'
import styles from '../css/Style_Principal.module.css';
import { logout, listaReservas, img, pegaTodosUsuarios } from '../Js/API.js'
import Calendar from 'react-calendar'
import '../css/Calendar.css'
import Reserva, { Confirmacao } from "./Reserva";

function Principal() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>

        <a href="https://www.sp.senai.br/" target="blank" className={styles.logo_A}>
          <img className="img__logo" src={logo} />
        </a>
        
        <div className={styles.menu}>

          <a href="/Login" className={styles.cadastro} title="Login">
            <i className="fa-solid fa-sign-in"></i>
          </a>

          <a href="/Verifica" className={styles.cadastro} title="Lista de Usuários">
            <i className="fa-solid fa-list"></i>
          </a>

          <a href="#" className={styles.help} title="Informações" onClick={img}>
            <i className="fa-solid fa-info"></i>
          </a>

          <a href="/Cadastro" className={styles.cadastro} title="Cadastro">
            <i className="fa-solid fa-user-plus"></i>
          </a>

          <a className={styles.log_off} onClick={logout} title="Sair">
            <i className="fa-solid fa-person-walking-arrow-right"></i>
          </a>
        </div>
      </div>

      <div className={styles.principal}>

        <div className={styles.sidebar}>
          <div className={styles.calendario}>
            <Calendar className={styles.calendar} />
          </div>

          <div className={styles.users_lista}>
            <h1>Usuários</h1>
            <ul id="listaUsuarios" className={styles.listaUsers} onLoad={pegaTodosUsuarios()}>

            </ul>
          </div>

        </div>

        <div className={styles.div_reservas}>
          <div className={styles.div_title}>
            <a className="navigation-link navigation-link-1" href="#">
              <span data-text="Reservas" className={styles.span}>Reservas</span>
            </a>
          </div>
          <div className={styles.header_lista}>

            <div className={styles.div_pesquisa}>
              <div className={styles.base_pes}>
                <div className={styles.lupa}>
                  <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <input type="search" placeholder="Pesquisar as Reservas" className={styles.pesquisa_reservas} />
              </div>
            </div>

            <button className={styles.imprimir} onClick={window.print}>
              <i className="fa-solid fa-print"></i>
            </button>

            <button className={styles.download}>
              <i className="fa-solid fa-download"></i>
            </button>

            <button className={styles.btn_NovaReserva}>
              <a onClick={Confirmacao}>Nova Reserva</a> <i className="fa-solid fa-plus"></i>
            </button>
          </div>

          <div className={styles.reservas}>
            <ul className={styles.lista} id="lista" onLoad={listaReservas()}>
              <table id="Janeiro" className={styles.tabela_mes}>
                <thead><tr><th colSpan="1" className={styles.mes}>Janeiro</th><th colSpan="4" className={styles.num}>01</th></tr></thead>
                <tbody className={styles.body}>

                </tbody>
              </table>

              <table id="Fevereiro" className={styles.tabela_mes}>
                <thead><tr><th colSpan="1" className={styles.mes}>Fevereiro</th><th colSpan="4" className={styles.num}>02</th></tr></thead>
                <tbody className={styles.body}>

                </tbody>
              </table>

              <table id="Marco" className={styles.tabela_mes}>
                <thead><tr><th colSpan="1" className={styles.mes}>Março</th><th colSpan="4" className={styles.num}>03</th></tr></thead>
                <tbody className={styles.body}>

                </tbody>
              </table>

              <table id="Abril" className={styles.tabela_mes}>
                <thead><tr><th colSpan="1" className={styles.mes}>Abril</th><th colSpan="4" className={styles.num}>04</th></tr></thead>
                <tbody className={styles.body}>

                </tbody>
              </table>

              <table id="Maio" className={styles.tabela_mes}>
                <thead><tr><th colSpan="1" className={styles.mes}>Maio</th><th colSpan="4" className={styles.num}>05</th></tr></thead>
                <tbody className={styles.body}>

                </tbody>
              </table>

              <table id="Junho" className={styles.tabela_mes}>
                <thead><tr><th colSpan="1" className={styles.mes}>Junho</th><th colSpan="4" className={styles.num}>06</th></tr></thead>
                <tbody className={styles.body}>

                </tbody>
              </table>

              <table id="Julho" className={styles.tabela_mes}>
                <thead><tr><th colSpan="1" className={styles.mes}>Julho</th><th colSpan="4" className={styles.num}>07</th></tr></thead>
                <tbody className={styles.body}>

                </tbody>
              </table>

              <table id="Agosto" className={styles.tabela_mes}>
                <thead><tr><th colSpan="1" className={styles.mes}>Agosto</th><th colSpan="4" className={styles.num}>08</th></tr></thead>
                <tbody className={styles.body}>

                </tbody>
              </table>

              <table id="Setembro" className={styles.tabela_mes}>
                <thead><tr><th colSpan="1" className={styles.mes}>Setembro</th><th colSpan="4" className={styles.num}>09</th></tr></thead>
                <tbody className={styles.body}>
                </tbody>
              </table>

              <table id="Outubro" className={styles.tabela_mes}>
                <thead><tr><th colSpan="1" className={styles.mes}>Outubro</th><th colSpan="4" className={styles.num}>10</th></tr></thead>
                <tbody className={styles.body}>
                </tbody>
              </table>

              <table id="Novembro" className={styles.tabela_mes}>
                <thead><tr><th colSpan="1" className={styles.mes}>Novembro</th><th colSpan="4" className={styles.num}>11</th></tr></thead>
                <tbody className={styles.body}>
                </tbody>
              </table>
              <table id="Dezembro" className={styles.tabela_mes}>
                <thead><tr><th colSpan="1" className={styles.mes}>Dezembro</th><th colSpan="4" className={styles.num}>12</th></tr></thead>
                <tbody className={styles.body}>
                </tbody>
              </table>
            </ul>
          </div>
        </div>
      </div>
      <Reserva></Reserva>
    </div>
  );
}
export default Principal;
