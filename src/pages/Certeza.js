import styles from "../css/Certeza.module.css"
import { reserva } from "../Js/API";

export default function Certeza() {
    return (
        <div className={styles.principal} id="principalCert">
            <div className={styles.payment} id="paymentCert">
                <div className={styles.div_just}>
                    <span>Tem certeza? Após criar a reserva ela não poderá ser alterada, somente excluída.</span>
                </div>
                <div className={styles.botoes}>
                    <button id="cancelar" onClick={FecharConfirmacao}>Cancelar</button>
                    <button onClick={reserva}>Confirmar</button>
                </div>
            </div>
        </div>
    )
}

export function confirmacaoCert(event) {
    event.preventDefault();
    const payment = document.getElementById("paymentCert");
    const principal = document.getElementById("principalCert");
    payment.style.display = "flex"
    principal.style.display = "flex"
}

export function FecharConfirmacao() {
    const payment = document.getElementById("paymentCert");
    const principal = document.getElementById("principalCert");
    document.getElementById("justificativa").innerHTML = ""
    payment.style.display = "none"
    principal.style.display = "none"
}