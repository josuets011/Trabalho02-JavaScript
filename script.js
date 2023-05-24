
function leiaMais() {
    var pontos = document.getElementById("pontos")
    var confirm = document.getElementById("confsenha")
    var btnSenha = document.getElementById("Confirme")

    if (pontos.style.display === "none") {
        pontos.style.display = "inline"
        confirm.style.display = "none"
    }else{
        pontos.style.display = "none"
        confirm.style.display = "inline"
        btnSenha.style.opacity = 50
    }
}


const confirmar = document.getElementById('cadastroCC')
    confirmar.addEventListener("click", function(){
        let User = document.querySelector("#email1")
        let Psenha = document.querySelector("#senha1").value;
        let Csenha = document.querySelector("#senha2").value;
        if (Csenha == "" && Psenha == "") {
            alert("Erro, digite uma senha.")
            
        }else if (Csenha == Psenha) {
            alert("Senhas corretas")
            localStorage.setItem(User, Csenha)
            window.open("index.html")
        }
        else{
            alert("Senhas Incorretas")
        }
        console.log("deu certo")
    })




