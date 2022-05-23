import React from "react";
import logo from '../IMG/logo.png'
import styles from '../css/Style_Principal.module.css';
import { logout } from '../Js/api.js'

function Principal() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>

        <a href="https://www.sp.senai.br/" target="blank" className={styles.logo_A}>
          <img className="img__logo" src={logo} />
        </a>

        <div className={styles.menu}>
          <a href="#" className={styles.help}>
            <i className="fa-solid fa-info"></i>
          </a>

          <a href="/Cadastro" className={styles.cadastro}>
            <i className="fa-solid fa-user-plus"></i>
          </a>

          <a className={styles.log_off} onClick={logout}>
            <i className="fa-solid fa-person-walking-arrow-right"></i>
          </a>
        </div>
      </div>

      <div className={styles.principal}>

        <div className={styles.sidebar}>
          <div className={styles.calendario}>
            Calendario
          </div>

          <div className={styles.users_lista}>
            Lista de usuarios
          </div>

        </div>

        <div className={styles.div_reservas}>

            <div className={styles.header_lista}>

              <div className={styles.div_pesquisa}>
              <h2 className={styles.title_pes}>Pesquisar Reservas</h2>
              <input type="search" placeholder="Pesquisar as Reservas" className={styles.pesquisa_reservas} />
              </div>

              <button className={styles.imprimir} onClick={window.print}>
              <i class="fa-solid fa-print"></i>
              </button>

              <button className={styles.download}>
              <i class="fa-solid fa-download"></i>
              </button>

              <button className={styles.btn_NovaReserva}>
                <a href="/Reserva" >Nova Reserva</a> <i class="fa-solid fa-plus"></i>
              </button>

            </div>

            <div className={styles.reservas}>
              <ul className={styles.lista}>
                Lista de Reservas
              </ul>
            </div>
            
        </div>

      </div>
    </div>
  );
}
export default Principal;
