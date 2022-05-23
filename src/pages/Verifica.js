import React, { Fragment } from "react";
import {ListaUsuarios} from "../Js/api";

function Verifica(){
return(
    <div>
        <ul id="lista" onLoad={ListaUsuarios}>
        </ul>
    </div>

);
}
export default Verifica