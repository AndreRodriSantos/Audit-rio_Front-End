import React, { Fragment } from "react";
import { listaUsuarios } from "../Js/API";
import styles from "../css/Style_Verifica.module.css"

function Verifica() {
    return (
        <div>
            <h1>Lista de Usuários</h1>
            <table id="tabela" className={styles.tabela} onLoad={listaUsuarios()}>
                <thead className={styles.cabecalho}>
                    <tr className={styles.header}>
                        <td className={styles.td}>ID</td>
                        <td className={styles.td}>NIF</td>
                        <td className={styles.td}>Nome</td>
                        <td className={styles.td}>Email</td>
                        <td className={styles.td}>Excluir</td>
                    </tr>
                </thead>
                <tbody id="lista" className={styles.corpo}>

                </tbody>
            </table>
        </div>

    );
}
export default Verifica