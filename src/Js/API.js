import { history } from './history'

function fazPost(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.setRequestHeader("Authorization", sessionStorage.getItem("token"))
    request.send(JSON.stringify(body))

    if (url == "http://localhost:8080/api/reservation/save") {
        request.onload = function () {
            if (request.status == 200) {
                window.alert("Reserva Cadastrada com sucesso")
            } else {
                window.alert("Erro: Cadastro inválido")
            }
        }
    }

    if (url == "http://localhost:8080/api/user/login") {
        request.onload = function () {
            if (request.status == 200) {
                const token = this.responseText
                sessionStorage.setItem("token", token.substring(10, 182))
                window.alert("Usuário Logado!!")
                history.push("/Principal")
            } else {
                window.alert("Erro: Esse Usuário não existe")
            }
        }
    }
    return request.responseText
}

    

export default function cadastraUsuario(event) {
    event.preventDefault()
    const url = "http://localhost:8080/api/user/cadastrar"

    let nif = document.getElementById("nif").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    let type = document.getElementById("type").value


    var body = {
        "nif": nif,
        "email": email,
        "senha": senha,
        "type": type,
    }
    console.log(body)
    fazPost(url, body)
}

// Consumindo api
export function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.setRequestHeader("Authorization", sessionStorage.getItem("token"))
    request.send()
    return request.responseText
}

export function login(event) {
    event.preventDefault()
    if (sessionStorage.getItem("token") == null) {
        let url = ("http://localhost:8080/api/user/login");
        let nif = document.getElementById("loginNif").value
        let senha = document.getElementById("loginSenha").value
        var body = {
            "nif": nif,
            "senha": senha,
        }
        fazPost(url, body)
    } else {
        window.alert("Erro:Você já está Logado")
    }
}

export function logout() {
    sessionStorage.removeItem("token")
    window.alert("Usuário Deslogado")
    history.push("/")
}

export function reserva(event) {
    event.preventDefault();
    let url = ("http://localhost:8080/api/reservation/save");
    let titulo = document.getElementById("titulo").value
    let descricao = document.getElementById("descricao").value
    let dataInicio = document.getElementById("dataInicio").value
    let dataTermino = document.getElementById("dataTermino").value
    let participantes = document.getElementById("participantes").value
    let repetir = document.getElementById("repetir").checked

    console.log(dataInicio)
    console.log(dataTermino)

    var body = {
        "titulo": titulo,
        "descricao": descricao,
        "dataInicio": dataInicio,
        "dataTermino": dataTermino,
        "participantes": participantes,
        "repetir": repetir
    }

    fazPost(url, body)
}
export function mostraReservas() {
    let data = fazGet("http://localhost:8080/api/reservation")
    let reserva = JSON.parse(data)
    console.log(reserva)
}

export function pegaTypes() {
    setTimeout(() => {
        let data = fazGet("http://localhost:8080/api/types/findAll");
        let types = JSON.parse(data)
        let select = document.getElementById("type")
        for (let i = 0; i < types.length; i++) {
            const option = document.createElement("option")
            option.innerHTML = types[i]
            select.appendChild(option)
        }
    }, 1);

}


