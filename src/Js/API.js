
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
export default function cadastraUsuario() {
    
    let nif = document.getElementById("nif").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value

    var body = {
        "nif": nif,
        "email": email,
        "senha": senha
    }
    return body
}

// COnsumindo api
export function fazGet(url) {
    
}

function login() {
    let data = fazGet("http://10.98.192.20:8080/api/user");
    let usuarios = JSON.parse(data);
    usuarios.forEach(element => {

    });
}
