import { img } from '../Js/API.js';
import styles from '../css/PostAuditorio.module.css';
export function PostAuditorio() {
    return (
        <div className={styles.container} onLoad={img()}>
            <div className={styles.nome_post}>
                <i class="fa-brands fa-instagram"></i>
                <span className={styles.hashtag}>#auditoriosenaicotia</span>
                <i class="fa-brands fa-instagram"></i>
            </div>

            <div className={styles.base_voltar}>
                <a className={styles.btn_voltar} href='../Principal'>
                    <i class="fa-solid fa-reply"></i>
                </a>
            </div>

            <div id="insta" className={styles.insta}>

            </div>

        </div>
    )
}