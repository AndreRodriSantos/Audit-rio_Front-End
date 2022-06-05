import React from "react";
import logo from '../IMG/logo.png'
import styles from '../css/Style_Principal.module.css';
import '../css/DropDown.css';
import { logout, listaReservas, img, pegaTodosUsuarios, contador, pesquisaReserva } from '../Js/API.js'
import Reserva, { Confirmacao } from "./Reserva";
import Calendario from "../components/calendario.js";

function Principal() {
  return (
    <div className={styles.container}>
      <Reserva></Reserva>
      <div className={styles.header}>

        <a href="https://www.sp.senai.br/" target="blank" className={styles.logo_A}>
          <img className="img__logo" src={logo} />
        </a>

        <div className={styles.menu}>

          <a href="/Login" className={styles.cadastro} title="Login">
            <i className="fa-solid fa-reply"></i>
          </a>

          <a href="/Verifica" className={styles.cadastro} title="Lista de Usuários">
            <i className="fa-solid fa-list"></i>
          </a>

          {/* <a href="#" className={styles.help} title="Informações" onClick={img}>
            <i className="fa-solid fa-ins"></i>
          </a> */}

          <a href="/Cadastro" className={styles.cadastro} title="Cadastro">
            <i className="fa-solid fa-user-plus"></i>
          </a>

          <a href="/Alterar" className={styles.alterar} title="Alterar">
            <i className="fa-solid fa-user-edit"></i>
          </a>

          <a className={styles.log_off} onClick={logout} title="Sair">
            <i className="fa-solid fa-person-walking-arrow-right"></i>
          </a>
        </div>
      </div>

      <div className={styles.principal}>

        <div className={styles.sidebar}>
          <div className={styles.calendario}>
            <div className={styles.title_calen_base}>
            </div>
            <Calendario />
          </div>

          <div className={styles.users_lista}>
            <h3 className={styles.title_User}>Reservado por</h3>

            <a className={styles.btn_NC} href="/Cadastro">
              <i className="fa-solid fa-circle-plus"></i>
              <span className={styles.title_NC}>nova conta</span>
            </a>

            <div className={styles.base_user}>
              <div className={styles.header_user}>
                <span className={styles.title_menu}>titular da conta</span>
                <span className={styles.title_menu}>dias / horas</span>
                <span className={styles.title_menu}>sobre</span>
                {/* Linha */}
                <span className={styles.linha_menu} ></span>

              </div>
              <ul id="listaUsuarios" className={styles.listaUsers} onLoad={pegaTodosUsuarios()}>

              </ul>
            </div>

          </div>

        </div>

        {/* HEADER */}

        <div className={styles.div_reservas}>

          <div className={styles.header_lista}>

            <div className={styles.qnd_header}>

              <div className={styles.base_icons}>
                <div className={styles.base_color_qnd1}>
                  <i className="fa-solid fa-users"></i>
                </div>
              </div>

              <div className={styles.title}>
                <h3 className={styles.name}>Usuários</h3>
              </div>

              <div className={styles.qnd_title}>
                <span className={styles.qnd_number} id="contUsers">0</span>
              </div>

              <div className={styles.base_linha}>
                <div className={styles.linha}></div>
              </div>

              <div className={styles.sub_title}>
                <span className={styles.sub_name}>User</span>
              </div>

            </div>

            <div className={styles.qnd_header}>

              <div className={styles.base_icons}>
                <div className={styles.base_color_qnd2}>
                  <i className="fa-solid fa-user-tie"></i>
                </div>
              </div>

              <div className={styles.title} onLoad={contador()}>
                <h3 className={styles.name}>Administrador</h3>
              </div>

              <div className={styles.qnd_title}>
                <span className={styles.qnd_number} id="contAdmin">0</span>
              </div>

              <div className={styles.base_linha}>
                <div className={styles.linha}></div>
              </div>

              <div className={styles.sub_title}>
                <span className={styles.sub_name}>Admin</span>
              </div>

            </div>

            <div className={styles.qnd_header}>

              <div className={styles.base_icons}>
                <div className={styles.base_color_qnd3}>
                  <i className="fa-solid fa-calendar-check"></i>
                </div>
              </div>

              <div className={styles.title}>
                <h3 className={styles.name}>Reservas</h3>
              </div>

              <div className={styles.qnd_title}>
                <span className={styles.qnd_number} id="contReservas">0</span>
              </div>

              <div className={styles.base_linha}>
                <div className={styles.linha}></div>
              </div>

              <div className={styles.sub_title}>
                <span className={styles.sub_name}>Reservations</span>
              </div>

            </div>

            <div className={styles.btn_header}>

              <button className={styles.btns_header} onClick={window.print} title="Imprimir">
                <div className={styles.base_icons_btn}>
                  <div className={styles.base_color_btn1}>
                    <i className="fa-solid fa-print"></i>
                  </div>
                </div>
              </button>

              <a className={styles.btns_header} href="/PostAuditorio" title="Auditório Fotos">
                <div className={styles.base_icons_btn}>
                  <div className={styles.base_color_btn2}>
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                </div>
              </a>

              <a className={styles.btns_header} onClick={Confirmacao} title="Nova Reserva">
                <div className={styles.base_icons_btn}>
                  <div className={styles.base_color_btn3}>
                    <i className="fa-solid fa-circle-plus"></i>
                  </div>
                </div>
              </a>

            </div>

          </div>

          {/* LISTA */}

          <div className={styles.reservas}>
            <div className={styles.base_lista}>
              <div className={styles.postion_text_reserva}>
                <h5 className={styles.title_reserva}>Reservas</h5>
              </div>

              <div className={styles.div_pesquisa}>
                <form onSubmit={pesquisaReserva}>
                  <div className={styles.base_pes}>
                    <button type="submit" className={styles.lupa}>
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                    <input type="search" placeholder="Busca Pela Reserva" className={styles.pesquisa_reservas} id="pesquisa"/>
                  </div>
                </form>
              </div>

              <ul className={styles.lista} id="lista" onLoad={listaReservas()}>
                <table id="Janeiro" className={styles.tabela_mes}>

                  <thead>
                    <tr><th colSpan="2" className={styles.mes}>Janeiro</th>
                      <th colSpan="4" className={styles.num}>01</th></tr>
                  </thead>

                  <tbody className={styles.body}>

                  </tbody>

                </table>

                <table id="Fevereiro" className={styles.tabela_mes}>
                  <thead><tr><th colSpan="2" className={styles.mes}>Fevereiro</th><th colSpan="4" className={styles.num}>02</th></tr></thead>
                  <tbody className={styles.body}>

                  </tbody>
                </table>

                <table id="Marco" className={styles.tabela_mes}>
                  <thead><tr><th colSpan="2" className={styles.mes}>Março</th><th colSpan="4" className={styles.num}>03</th></tr></thead>
                  <tbody className={styles.body}>

                  </tbody>
                </table>

                <table id="Abril" className={styles.tabela_mes}>
                  <thead><tr><th colSpan="2" className={styles.mes}>Abril</th><th colSpan="4" className={styles.num}>04</th></tr></thead>
                  <tbody className={styles.body}>

                  </tbody>
                </table>

                <table id="Maio" className={styles.tabela_mes}>
                  <thead><tr><th colSpan="2" className={styles.mes}>Maio</th><th colSpan="4" className={styles.num}>05</th></tr></thead>
                  <tbody className={styles.body}>

                  </tbody>
                </table>

                <table id="Junho" className={styles.tabela_mes}>
                  <thead><tr><th colSpan="2" className={styles.mes}>Junho</th><th colSpan="4" className={styles.num}>06</th></tr></thead>
                  <tbody className={styles.body}>

                  </tbody>
                </table>

                <table id="Julho" className={styles.tabela_mes}>
                  <thead><tr><th colSpan="2" className={styles.mes}>Julho</th><th colSpan="4" className={styles.num}>07</th></tr></thead>
                  <tbody className={styles.body}>

                  </tbody>
                </table>

                <table id="Agosto" className={styles.tabela_mes}>
                  <thead><tr><th colSpan="2" className={styles.mes}>Agosto</th><th colSpan="4" className={styles.num}>08</th></tr></thead>
                  <tbody className={styles.body}>

                  </tbody>
                </table>

                <table id="Setembro" className={styles.tabela_mes}>
                  <thead><tr><th colSpan="2" className={styles.mes}>Setembro</th><th colSpan="4" className={styles.num}>09</th></tr></thead>
                  <tbody className={styles.body}>
                  </tbody>
                </table>

                <table id="Outubro" className={styles.tabela_mes}>
                  <thead><tr><th colSpan="2" className={styles.mes}>Outubro</th><th colSpan="4" className={styles.num}>10</th></tr></thead>
                  <tbody className={styles.body}>
                  </tbody>
                </table>

                <table id="Novembro" className={styles.tabela_mes}>
                  <thead><tr><th colSpan="2" className={styles.mes}>Novembro</th><th colSpan="4" className={styles.num}>11</th></tr></thead>
                  <tbody className={styles.body}>
                  </tbody>
                </table>
                <table id="Dezembro" className={styles.tabela_mes}>
                  <thead><tr><th colSpan="2" className={styles.mes}>Dezembro</th><th colSpan="4" className={styles.num}>12</th></tr></thead>
                  <tbody className={styles.body}>
                  </tbody>
                </table>

              </ul>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
export default Principal;
