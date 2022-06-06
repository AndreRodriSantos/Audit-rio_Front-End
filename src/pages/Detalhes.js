import styles from "../css/Detalhes.module.css"
import { Chart, PieControllerChartOptions, PieController } from "chart.js";

export default function Detalhes() {
    return (
        <div className={styles.principal} id="principalDetalhes">

            <div className={styles.payment} id="paymentDetalhes">
                <div className={styles.title_form}>

                    <span className={styles.novaRS}>
                        Detalhes
                    </span>

                    <span className={styles.close} onClick={Fechar} >X</span>
                </div>
                <div className={styles.form}>
                    <div className={styles.esquerda}>
                        <div className={styles.id_status}>
                            <div>
                                <span className={styles.title}>Id:</span>
                                <span id="id"></span>
                            </div>
                            <div>
                                <span className={styles.title}>Status:</span>
                                <span id="status" className={styles.status}></span>
                            </div>
                        </div>
                        <span className={styles.title}>Titulo:</span>
                        <span className={styles.titulo} id="titulo_reserva"></span>
                        <span className={styles.title}>Data:</span>
                        <span className={styles.data} id="data"></span>
                        <span className={styles.title}>Hora:</span>
                        <span className={styles.hora} id="hora"></span>
                        <span className={styles.title}>Descrição:</span>
                        <span className={styles.descricao} id="descricao_reserva"></span>
                    </div>
                    <div className={styles.direita}>
                        <div className={styles.user}>
                            <div>
                                <span className={styles.title}>Feito por:</span>
                                <span className={styles.nome} id="nome"></span>
                            </div>
                            <div>
                                <span className={styles.title}>Email:</span>
                                <span className={styles.email} id="email"></span>
                            </div>

                        </div>
                        <div className={styles.grafico} id="grafico">
                            <canvas id="ChartParticipantes"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function ConfirmacaoDetalhes() {
    const token = sessionStorage.getItem("token")
    const payment = document.getElementById("paymentDetalhes");
    const principal = document.getElementById("principalDetalhes");
    payment.style.display = "flex"
    principal.style.display = "flex"
}

function Fechar() {
    const payment = document.getElementById("paymentDetalhes");
    const principal = document.getElementById("principalDetalhes");
    payment.style.display = "none"
    principal.style.display = "none"
} 

export function ChamaGrafico(disponivel, participantes){
//Grafico de Gêneros --------------------------
  let labels = ['Disponivel' , 'Participantes'];

  let data = {
    labels: labels,
    datasets: [{
      label: 'Quantidade de Participantes',
      data: [{disponivel} , {participantes}],
      backgroundColor: ['gray', 'red']
    }]
  };

  let config = {
    type: "pie",
    data: data,
    options: {

    }
  };
    
  const ChartGenero = new Chart(
    document.getElementById('ChartParticipantes'),
    config
  );
}