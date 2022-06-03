import cadastraUsuario, { alteraUsuario, pegaTypes, pegaUsuario, sendId } from "../Js/API";
import styles from '../css/Style_Alterar.module.css';
import auditorio from '../IMG/Gato de Botas 2.mp4'
import user from '../IMG/UserImg.png'

export default function Alterar() {
    return (
        <div className={styles.principal} onLoad={pegaUsuario()}>

            <div className={styles.video_div}>
                <video src={auditorio} autoPlay loop className={styles.video} muted type="mp4" />
            </div>

            <a href="/Principal" className={styles.home} title="Principal/Home">
                <i className="fa-solid fa-home"></i>
            </a>

            <div className={styles.div_title}>
                <a className="navigation-link navigation-link-1" href="#">
                    <span data-text="Alteração" className={styles.span}>Alteração</span>
                </a>
            </div>

            <div className={styles.div_form}>

                <div className={styles.form_base}>

                    <form className={styles.form} onSubmit={alteraUsuario}>

                        <input type="hidden" name="id" id="id"></input>

                        <div className={styles.User}>
                            <input type="text" placeholder="NOME" name="nome" required id="nome" className={styles.input} /><br />
                            <i className="fa-solid fa-address-card" id={styles.lock_ico}></i>
                        </div>

                        <div className={styles.User}>
                            <input type="email" placeholder="EMAIL" name="email" required id="email" className={styles.input} /><br />
                            <i className="fa-solid fa-envelope" id={styles.lock_ico}></i>
                        </div>

                        <div className={styles.User}>
                            <input type="password" placeholder="SENHA" name="senha" required id="senha" className={styles.input} /><br />
                            <i className="fa-solid fa-lock" id={styles.lock_ico}></i>
                        </div>

                        <button className={styles.btn} type="submit"> <i className="fa-solid fa-user-edit" id={styles.sign_ico}></i>Alterar</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

function fileChange() {
    let photo = document.getElementById('imgPhoto');
    let file = document.getElementById('fileImage');

    if (file.files.length <= 0) {
        return;
    }

    let reader = new FileReader();

    reader.onload = () => {
        photo.src = reader.result;
    }

    reader.readAsDataURL(file.files[0]);
}

