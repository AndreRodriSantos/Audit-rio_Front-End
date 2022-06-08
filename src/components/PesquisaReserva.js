import { render } from "@testing-library/react";
import { Component } from "react";

import styles from "../css/Lista_Pesquisa.module.css"

export class PesquisaReserva extends Component {
    render() {
        return (
            <div className={styles.listaPesquisa} id="listaPesquisa">
                <table id="tabela" className={styles.tabelaPesquisa}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Titulo</th>
                            <th>Data</th>
                            <th>Hora</th>
                            <th>Usuario</th>
                        </tr>
                    </thead>
                    <tbody id="listaPesquisaBody" className={styles.body}>

                    </tbody>
                </table>
            </div>
        )
    }
}

export function FecharPesquisa() {
    const divPesquisa = document.getElementById("listaPesquisa")
    divPesquisa.style.display = "none"
    
    const x = document.getElementById("fecharPesquisa")
    x.style.visibility = "hidden"

    const linhas = document.querySelectorAll("#listaPesquisaBody > *")

    if (linhas.length > 0) {
        for (let l = 0; l < linhas.length; l++) {
            linhas[l].remove()
        }
    }
}