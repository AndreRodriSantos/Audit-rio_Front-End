import React, { Fragment } from "react";
import { listaUsuarios } from "../Js/api";
import styles from "../css/Style_Verifica.module.css"

function Verifica() {
    return (
        <div>
            <h1>Lista de Usuários</h1>
            <table id="tabela" className={styles.tabela} onLoad={listaUsuarios()}>
                <thead className={styles.cabecalho}>
                    <tr>
                        <td>ID</td>
                        <td>NIF</td>
                        <td>Nome</td>
                        <td>Email</td>
                        <td>Excluir</td>
                    </tr>
                </thead>
                <tbody id="lista" className={styles.corpo}>

                </tbody>
            </table>
        </div>

    );
}
export default Verifica