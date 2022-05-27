import { createElement } from 'react'
import { history } from './history'
import $ from "jquery"

let listaCriada = false

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

    if (url == "http://localhost:8080/api/user/cadastrar") {
        request.onload = function () {
            if (request.status == 200) {
                window.alert("Usuário Cadastrado com sucesso")
                history.push("/Login")
            } else {
                window.alert("Erro: Cadastro inválido. \n Verifique os campos")
            }
        }
    }

    if (url == "http://localhost:8080/api/user/login") {
        request.onload = function () {
            if (request.status == 200) {
                let token = this.responseText
                console.log(token);
                token = token.replace('{"token":"', "")
                token = token.replace('"}', "")
                console.log(token.length)
                sessionStorage.setItem("token", token)
                window.alert("Usuário Logado!!")
                history.push("/Principal")
            } else if (request.status == 401) {
                window.alert("Erro: Senha ou NIF incorretos")
            } else if (request.status == 404) {
                window.alert("Erro: Usuário não existe")
            }
        }
    }
    return request.responseText
}

export default function cadastraUsuario(event) {
    event.preventDefault()
    const url = "http://localhost:8080/api/user/cadastrar"

    let nif = document.getElementById("nif").value
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    let type = document.getElementById("type").value

    var body = {
        "nif": nif,
        "nome": nome,
        "email": email,
        "senha": senha,
        "type": type
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

    const token = sessionStorage.getItem("token")

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

export function listaReservas() {
    setTimeout(() => {
        let data = fazGet("http://localhost:8080/api/reservation")
        let reservas = JSON.parse(data)
        let jan = document.getElementById("Janeiro")
        let fev = document.getElementById("Fevereiro")
        let mar = document.getElementById("Marco")
        let abr = document.getElementById("Abril")
        let mai = document.getElementById("Maio")
        let jun = document.getElementById("Junho")
        let jul = document.getElementById("Julho")
        let ago = document.getElementById("Agosto")
        let set = document.getElementById("Setembro")
        let out = document.getElementById("Outubro")
        let nov = document.getElementById("Novembro")
        let dez = document.getElementById("Dezembro")
        let tabelas = document.querySelectorAll("table")

        if(listaCriada == false){
            for (let i = 0; i < reservas.length; i++) {
                let reserva = reservas[i]
                const linha = document.createElement("tr")
    
                const tdId = document.createElement("td")
                tdId.innerHTML = reserva.id
                linha.appendChild(tdId)
    
                const tdTitulo = document.createElement("td")
                tdTitulo.innerHTML = reserva.titulo
                linha.appendChild(tdTitulo)
    
                const tdData = document.createElement("td")
                let dataInicio = (JSON.stringify(reserva.dataInicio))
                let horaInicio = dataInicio.substring(12, 17)
                dataInicio = dataInicio.substring(1, 11).replaceAll("-" ,  "/")
                let dataTermino = (JSON.stringify(reserva.dataTermino))
                let horaTermino = dataTermino.substring(12, 17)
                dataTermino = dataTermino.substring(1, 11).replaceAll("-" , "/")
                tdData.innerHTML = dataInicio + "  -  " + dataTermino + "<br/>" + horaInicio + "  -  " + horaTermino
                tdData.style.textAlign = "center"
                linha.appendChild(tdData)
    
                const status = document.createElement("td")
                status.innerHTML = reserva.status
                status.style.fontWeight = "bold"
                linha.appendChild(status)
    
                if (status.textContent == "CONFIRMADO") {
                    status.style.color = "green"
                } else if (status.textContent == "FINALIZADO") {
                    status.style.color = "red"
                } else {
                    status.style.backgroundColor = "#fccd32"
                }
    
                let mes = tdData.textContent
                mes = mes.substring(5, 7)
    
                switch (mes) {
                    case "01":
                        jan.appendChild(linha)
                        break;
    
                    case "02":
                        fev.appendChild(linha)
                        break;
                    case "03":
                        mar.appendChild(linha)
                        break;
                    case "04":
                        abr.appendChild(linha)
                        break;
                    case "05":
                        mai.appendChild(linha)
                        break;
                    case "06":
                        jun.appendChild(linha)
                        break;
                    case "07":
                        jul.appendChild(linha)
                        break;
                    case "08":
                        ago.appendChild(linha)
                        break;
                    case "09":
                        set.appendChild(linha)
                        break;
                    case "10":
                        out.appendChild(linha)
                        break;
                    case "11":
                        nov.appendChild(linha)
                        break;
                    case "12":
                        dez.appendChild(linha)
                        break;
    
                    default:
                        break;
                }
            }
            listaCriada = true
        }
    }, 1);
}

export function listaUsuariosComuns() {
    setTimeout(() => {
        let data = fazGet("http://localhost:8080/api/user/verifica")
        let users = JSON.parse(data)
        let lista = document.getElementById("lista")

        if (lista.childElementCount == 0) {
            for (let i = 0; i < users.length; i++) {
                let usuario = users[i]
                const linha = document.createElement("tr")

                const tdId = document.createElement("td")
                tdId.innerHTML = usuario.id
                linha.appendChild(tdId)

                const tdNif = document.createElement("td")
                tdNif.innerHTML = usuario.nif
                linha.appendChild(tdNif)

                const tdNome = document.createElement("td")
                tdNome.innerHTML = usuario.nome
                linha.appendChild(tdNome)

                const tdEmail = document.createElement("td")
                tdEmail.innerHTML = usuario.email
                linha.appendChild(tdEmail)

                const tdExcluir = document.createElement("td")
                let btn_delete = document.createElement("button")
                btn_delete.innerHTML = "X"

                tdExcluir.appendChild(btn_delete)
                linha.append(tdExcluir)

                lista.appendChild(linha)
            }
        }
    }, 1);
}

export function pegaTypes() {
    setTimeout(() => {
        let data = fazGet("http://localhost:8080/api/types/findAll");
        let types = JSON.parse(data)
        let select = document.getElementById("type")
        if (select.childElementCount == 0) {
            for (let i = 0; i < types.length; i++) {
                const option = document.createElement("option")
                option.innerHTML = types[i]
                select.appendChild(option)
            }
        }
    }, 1);
}

export function pegaTodosUsuarios() {
    setTimeout(() => {
        let data = fazGet("http://localhost:8080/api/user/lista");
        let users = JSON.parse(data)
        let lista = document.getElementById("listaUsuarios")
        if (lista.childElementCount == 0) {
            for (let i = 0; i < users.length; i++) {
                let usuario = users[i];
                let li = document.createElement("li")
                li.innerHTML = usuario.nome
                lista.appendChild(li)
            }
        }
    }, 1);
}

export function img() {
    const token = 'EAAcMsX26zZA0BALBu6r4R2ZAZAAr0Nrwz6lVmWGnFZBLPI3OV7ca4H13eiE0TQfuB0ES0u8XGE7KKU3K0qv1ziGeLXsPPA8ZBcqLrTQvDvXBoqkZAM5uWrgHifD9grODwBOOUDft709LgKm2lnGUJvrvcZCSb4aTKLooCXs9Pr1xCYaCzhZBqhrpcccdlNOacTSWgX6AuMsctnqg4rBes4QPusSIGMb5LpoZD'
    const url = 'https://graph.facebook.com/17903255252601782/recent_media?user_id=17841453104072947&fields=id,media_type,comments_count,like_count,permalink,media_url&access_token=' + token

    $.get(url).then(function (response) {
        const dados = response.data
        let conteudo = '<div>'

        for (let i = 0; i < dados.length; i++) {
            let feed = dados[i]
            let tipo = feed.media_type;
            conteudo += '<div><img src="' + feed.media_url + '" onclick="window.open(\'' + feed.permalink + '\');"></div>';
        }
        conteudo += '</div>'
        $('#insta').html(conteudo)
    })
}



