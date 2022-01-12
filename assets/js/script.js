/*
- var - variavel de escopo global, pode ser acessado dentro de todo 
o código e não somente dentro da onde foi chamado.

- let - variavel de escopo local, pode ser acessado apenas dentro
do escopo onde foi chamado.

- const - escopo global, porém de valor constante, imutável.

Boas Práticas -> utilizar sempre o let

--------------------------------------------------------------
Reconhecer elementos do DOM

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
--------------------------------------------------------------

*/

let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let nomeOk = false;
let emailOK = false;
let assuntoOk = false;
let img = document.querySelector("#imgSkt");

nome.style.width = "100%";
email.style.width = "100%";

function validaNome() {
  let txtNome = document.querySelector("#txtNome");
  if (nome.value.length < 3) {
    txtNome.innerHTML = "Nome inválido";
    txtNome.style.color = "red";
  } else {
    txtNome.innerHTML = "Nome válido";
    txtNome.style.color = "green";
    nomeOk = true;
  }
}

function validaEmail() {
  let txtEmail = document.querySelector("#txtEmail");
  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    txtEmail.innerHTML = "E-mail inválido";
    txtEmail.style.color = "red";
  } else {
    txtEmail.innerHTML = "E-mail válido";
    txtEmail.style.color = "green";
    emailOK = true;
  }
}

function validaAssunto() {
  let txtAssunto = document.querySelector("#txtAssunto");
  if (assunto.value.length >= 100) {
    txtAssunto.innerHTML =
      "Texto é muito grande, digite no máximo 100 caracteres";
    txtAssunto.style.color = "red";
    txtAssunto.style.display = "block";
  } else {
    txtAssunto.style.display = "none";
    assuntoOk = true;
  }
}

function enviar() {
    if(nomeOk == true && emailOK == true && assuntoOk == true) {
        alert("Formulário enviado com sucesso!");
    }else{
        alert("Preencha o formulário corretamente antes de enviar.");
    }
}

function imgZoom() {
    img.style.width = "800px";
    img.style.height = "600px";
}

function imgNormal() {
    img.style.width = "400px";
    img.style.height = "250px";
}