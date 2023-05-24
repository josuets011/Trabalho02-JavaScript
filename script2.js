const entrar = document.getElementById("entrada")

    entrar.addEventListener("click", ()=>{
        const user = document.getElementById('InputEmail1').value;
        const fsenha = document.getElementById("password").value;
        for (let i = 0, len = localStorage.length; i < len; i++) {
            let key = localStorage.key(i)
            let valor = localStorage.getItem(key)
            if (user == key && fsenha == valor) {
                var confirm = 1
            }
        } if (confirm == 1) {
            alert("Login Efetuado")
            window.open("index2.html")
    
        } else {
            alert("Error")
        }
    })
       