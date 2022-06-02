import { decodaToken, sendId } from "./API"

export const isAuthenticatedAdmin = function () {
    const token = sessionStorage.getItem("token")
    let admin = "ADMINISTRADOR"
    if (token) {
        let data = decodaToken().replaceAll('"', "")
        let id = sendId()
        if (data != admin) {
            return false
        } else {
            return true
        }
    } else {
        return false
    }
}

export const isAuthenticated = function () {
    const token = sessionStorage.getItem("token")
    if (token) {
        return true
    } else {
        return false
    }
}