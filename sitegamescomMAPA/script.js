
function salvarCadastro() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("Confirmasenha").value;

   
    var cadastro = {
        nome: nome,
        email: email,
        telefone: telefone,
        senha: senha
    };
    localStorage.setItem('cadastro', JSON.stringify(cadastro));

 
    window.location.href = "login.html";


    return false;
}

function validarLogin() {
    var email = document.getElementById("loginEmail").value;
    var senha = document.getElementById("loginSenha").value;

    
    var cadastro = JSON.parse(localStorage.getItem('cadastro'));
    if (cadastro && cadastro.email === email && cadastro.senha === senha) {
      
        window.location.href = "pginicials.html"; 
        return true;
    } else {
    
        alert("Email ou senha incorretos");
        return false;
    }
}