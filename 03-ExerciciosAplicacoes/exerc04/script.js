/**
 * Created by josemalcher on 25/04/2017.
 */

window.onload = function () {

    //Controles
    var f   = document.getElementById("form1");
    var s   = document.getElementById("enviar");

    //ELementos
    var nome        = document.getElementById("nome");
    //var telefone    = document.getElementById("telefone");
    var email       = document.getElementById("email");
    var login       = document.getElementById("login");
    var senha       = document.getElementById("senha");

    //controle de envio
    s.onclick=function () {
        if(nome.value == '' || email.value == '' || login.value == '' || senha.value ==''){
            alert("Preencha todos os campos");
        }else if(email.value.indexOf("@") < 1){
            alert("Email INVALIDO!");
        }else if(login.value.length < 6 || login.value.length > 12){
            alert("O Login não pode ter 6-12");
        }
        return false;
    }



}
