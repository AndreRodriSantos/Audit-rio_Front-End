import { createElement } from 'react'
import { history } from './history'
import $ from "jquery"
import { erro, sucesso } from '../components/mensagem'


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
                sucesso("Reserva Cadastrada com sucesso")
            } else {
                erro("Erro: Cadastro inválido.\nVerifique os campos")
            }
        }
    }

    if (url == "http://localhost:8080/api/user/cadastrar") {
        request.onload = function () {
            if (request.status == 200) {
                sucesso("Usuário Cadastrado com sucesso")
                history.push("/Login")
                
            } else {
                erro("Erro: Cadastro inválido.\nVerifique os campos")
            }
        }
    }

    if (url == "http://localhost:8080/api/user/login") {
        request.onload = function () {
            if (request.status == 200) {
                let token = this.responseText
                console.log("Token Antes do replace = " + token)
                token = token.replace('{"token":"', "")
                token = token.replace('"}', "")
                console.log("Token Depois do replace = " + token)
                sessionStorage.setItem("token", token)
                sucesso("Usuário Logado!!")
                history.push("/Principal")
            } else if (request.status == 401) {
                erro("Erro: Senha ou NIF incorretos")
            } else if (request.status == 404) {
                erro("Erro: Esse usuário não existe")
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
    let photo = document.getElementById('imgPhoto');
    let foto = photo.src
    console.log(foto)

    var body = {
        "nif": nif,
        "nome": nome,
        "email": email,
        "senha": senha,
        "type": type,
        "foto": foto
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
    const token = decodaToken()
    console.log("IRINEL!!"+token);
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
        erro("Erro:Você já está Logado")
    }
}

export function logout() {
    let token = sessionStorage.getItem("token")
    if (token) {
        sessionStorage.removeItem("token")
        sucesso("Usuário Deslogado")
        history.push("/")
    } else {
        erro("Você não está logado")
    }
}

export function reserva(event) {
    event.preventDefault();
    let url = ("http://localhost:8080/api/reservation/save");
    let titulo = document.getElementById("titulo").value
    let descricao = document.getElementById("descricao").value
    let dataInicio = document.getElementById("dataInicio").value
    let dataTermino = document.getElementById("dataTermino").value
    let participantes = document.getElementById("participantes").textContent

    var body = {
        "titulo": titulo,
        "descricao": descricao,
        "dataInicio": dataInicio,
        "dataTermino": dataTermino,
        "participantes": participantes
    }
    fazPost(url, body)
}

function dataFormatada(date){
    var data = new Date(date),
        dia  = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(),
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = data.getFullYear();
    return diaF+"/"+mesF+"/"+anoF;
}


let listaCriada = false

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


        if (listaCriada == false) {
            listaCriada = true

            for (let i = 0; i < reservas.length; i++) {
                let reserva = reservas[i]
                const linha = document.createElement("tr")

                const tdId = document.createElement("td")
                tdId.innerHTML = reserva.id
                linha.appendChild(tdId)

                const tdTitulo = document.createElement("td")
                tdTitulo.innerHTML = reserva.titulo
                tdTitulo.style.textAlign = "center"
                linha.appendChild(tdTitulo)

                const tdData = document.createElement("td")
                tdData.style.color = "gray"

                let dataInicio = (JSON.stringify(reserva.dataInicio))
                let horaInicio = dataInicio.substring(12, 17)
                dataInicio = dataInicio.substring(1, 11)

                /* CHAMANDO O METODO DE FORMATAR JÁ ATRIBUINDO A VARIAVEL*/
                dataInicio = dataFormatada(dataInicio)
                /* CHAMANDO O METODO DE FORMATAR */

                let dataTermino = (JSON.stringify(reserva.dataTermino))
                let horaTermino = dataTermino.substring(12, 17)
                dataTermino = dataTermino.substring(1, 11)
                
                /* CHAMANDO O METODO DE FORMATAR JÁ ATRIBUINDO A VARIAVEL*/
                dataTermino = dataFormatada(dataTermino)
                /* CHAMANDO O METODO DE FORMATAR */

                tdData.innerHTML = dataInicio + "  -  " + dataTermino + "<br/>" + horaInicio + "  -  " + horaTermino
                tdData.style.textAlign = "center"
                linha.appendChild(tdData)

                const status = document.createElement("td")
                status.innerHTML = reserva.status
                status.style.fontWeight = "bold"
                status.style.textAlign = "center"
                linha.appendChild(status)

                //Foto
                const fotoSpan = document.createElement("span")
                const img = document.createElement("img")

                //Usuario nome
                
                let usuario = reserva.usuario
                console.log(usuario)
                const tdUsuario = document.createElement("td")
                tdUsuario.innerHTML = usuario.nome
                linha.appendChild(tdUsuario)

                const tdBtn = document.createElement("td")
                const btn = document.createElement("button")
                btn.innerHTML = "..."
                tdBtn.appendChild(btn)
                linha.appendChild(tdBtn)

                if (status.textContent == "CONFIRMADO") {
                    status.style.color = "green"
                } else if (status.textContent == "FINALIZADO") {
                    status.style.color = "red"
                } else {
                    status.style.color = "#fccd32"
                }

                let mes = tdData.textContent
                mes = mes.substring(3, 5)

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
        }
    }, 1);
}

export function decodaToken() {
    let data = fazGet("http://localhost:8080/api/user/decodaToken")
    console.log("tipo do Metodo DecodaToken = " + data)
    return data
}

export function sendId() {
    let data = fazGet("http://localhost:8080/api/user/sendId")
    console.log("Id do Metodo DecodaToken = " + data)
    return data
}

export function pegaUsuario(){
    const id = sendId()
    let data = fazGet("http://localhost:8080/api/user/" + id)
    console.log(data);
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
    setTimeout(() => {
        
    const token = 'EAAcMsX26zZA0BAKQYMKQDIJIe9PeNPZBmjLXi9lSl8ycZAjdeDDGDAjw10AZALXTEumsS3NzGk3F59OKMm8xfMLv9kqjSeiEmY53zqv92eUpovxevoKZBQTRtTHgjIMTq8ZAFZCX8ZBfU2Tr6YvrcPZCOVLxxEE8jMHIU2mrRytKBLtB2ZAujL0mVv'
    const url = 'https://graph.facebook.com/17903255252601782/recent_media?user_id=17841453104072947&fields=id,media_type,comments_count,like_count,permalink,media_url&access_token=' + token

    $.get(url).then(function (response) {
        const dados = response.data
        let conteudo = '<div>'

        for (let i = 0; i < dados.length; i++) {
            let feed = dados[i]
            console.log(feed);
            let tipo = feed.media_type;
            conteudo += '<div><img src="' + feed.media_url + '" onclick="window.open(\'' + feed.permalink + '\');"></div>';
        }
        conteudo += '</div>'
        $('#insta').html(conteudo)
    })
}, 1);
}

export function contador() {
    setTimeout(() => {
        let usuarios = fazGet("http://localhost:8080/api/user/verifica")
        usuarios = JSON.parse(usuarios)
        let reservas = fazGet("http://localhost:8080/api/reservation")
        reservas = JSON.parse(reservas)
        let admins = fazGet("http://localhost:8080/api/user/verificaAdmin")
        admins = JSON.parse(admins)

        let usuarioSpan = document.getElementById("contUsers")
        let adminSpan = document.getElementById("contAdmin")
        let reservaSpan = document.getElementById("contReservas")

        let contadorUser = 0
        let contadorAdmin = 0
        let contadorReserva = 0

        if (usuarioSpan.textContent == 0) {
            for (let i = 0; i < usuarios.length; i++) {
                contadorUser++
            }
            for (let i = 0; i < admins.length; i++) {
                contadorAdmin++
            }

            for (let i = 0; i < reservas.length; i++) {
                contadorReserva++
            }
            usuarioSpan.innerHTML = contadorUser
            adminSpan.innerHTML = contadorAdmin
            reservaSpan.innerHTML = contadorReserva
        }
    }, 5);
}


