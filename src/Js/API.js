import { type } from "@testing-library/user-event/dist/type"

function fazPost(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }
    return request.responseText
}
export default function cadastraUsuario(event) {
    event.preventDefault()
    const url= "http://localhost:8080/api/user/cadastrar"
    
    let nif = document.getElementById("nif").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value

    var body = {
        "nif": nif,
        "email": email,
        "senha": senha
    }
    console.log(body)
    fazPost(url, body)
}

// Consumindo api
export function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function login() {
    let data = fazGet("http://localhost:8080/api/user/login");
    let usuarios = JSON.parse(data);
    usuarios.forEach(element => {
        
    });
}

export function pegaTypes(){
    let data = fazGet("http://localhost:8080/api/types/findAll");
    let types = JSON.parse(data)
    const select = document.getElementById("types")
    
    if(select.childElementCount == 0){
    for (let i = 0; i < types.length; i++) {
        const option = document.createElement("option")
        option.innerHTML = types[i]
        console.log(types)
        select.appendChild(option)
    }
}   
}
