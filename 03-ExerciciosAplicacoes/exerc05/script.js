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

    //CORE
    function write_g(ideelemento, texto) {
        var x = document.getElementById(ideelemento);
        x.innerHTML = texto;
    }
    function show(ideelemento) {
        var x = document.getElementById(ideelemento);
        x.style.display = "block";
    }
    function hide(ideelemento, texto) {
        var x = document.getElementById(ideelemento);
        x.style.display = "block";
    }


    //controle de envio
    s.onclick=function () {
        if(nome.value == '' || email.value == '' || login.value == '' || senha.value ==''){
            write_g('erro','Preencha todos os campos')
            show('erro');
            //alert("Preencha todos os campos");
        }else if(email.value.indexOf("@") < 1){
            write_g('erro','Email INVALIDO!')
            show('erro');

          // alert("Email INVALIDO!");
        }else if(login.value.length < 6 || login.value.length > 12){
            write_g('erro','EO Login não pode ter 6-12')
            show('erro');

            //alert("O Login não pode ter 6-12");
        }else{
            hide('erro');
            f.submit();
        }
        return false;
    }



}
