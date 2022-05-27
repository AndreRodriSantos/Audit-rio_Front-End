import Principal from "../pages/Principal"
import { decodaToken } from "./API"

export const isAuthenticated = function () {
    const token = sessionStorage.getItem("token")
    let data = decodaToken()
    let tipo = data.replaceAll('"', "")
    if(token) {
        if (tipo === "ADMINISTRADOR") {
            return true
        }else {
            return false
        }
    }else {
        return false
    }
}
