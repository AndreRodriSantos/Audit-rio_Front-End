import {img} from '../Js/API.js';
import styles from "../css/PostAuditorio.module.css"

export function PostAuditorio(){
    return(
        <div className={styles.container} onLoad={img()}>
        <div id="insta" className={styles.insta}></div>
        </div>
    )
}