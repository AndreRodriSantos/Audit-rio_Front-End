
import React, { Fragment } from "react";
import { listaUsuariosComuns } from "../Js/API";
import styles from "../css/Style_Verifica.module.css"

function Verifica() {
    return (
        <div className={styles.principal}>

            <div className={styles.base_voltar}>
                <a className={styles.btn_voltar} href='../Principal'>
                    <i class="fa-solid fa-reply"></i>
                </a>
            </div>

            <div className={styles.reservas}>
                <div className={styles.base_lista}>
                    <div className={styles.postion_text_reserva}>
                        <h5 className={styles.title_reserva}>Usuários</h5>
                    </div>

                    <div className={styles.div_pesquisa}>
                        <div className={styles.base_pes}>
                            <div className={styles.lupa}>
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <input type="search" placeholder="Busca Pela Reserva" className={styles.pesquisa_reservas} />
                        </div>
                    </div>

                    <ul className={styles.lista}>
                        <table id="tabela" className={styles.tabela_mes} onLoad={listaUsuariosComuns()}>
                            <thead>
                                <tr className={styles.header_list}>
                                    <td className={styles.mes}>ID</td>
                                    <td className={styles.mes}>NIF</td>
                                    <td className={styles.mes}>Nome</td>
                                    <td className={styles.mes}>Email</td>
                                    <td className={styles.mes}>Excluir</td>
                                </tr>
                            </thead>
                            <tbody id="lista" className={styles.body}>

                            </tbody>
                        </table>

                    </ul>
                </div>

            </div>

        </div>

    );
}
export default Verifica
