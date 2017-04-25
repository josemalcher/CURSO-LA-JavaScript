/**
 * Created by josemalcher on 24/04/2017.
 */

window.onload = function () {

    var s = document.getElementById('enviar');
    var f = document.getElementById('form1');
    var t = document.getElementById('nome');

    s.onclick = function () {
        //alert('bloqueado com sucesso');
        //return false;
        if(nome.value ==''){
            alert("Preencha todos os campos");
        }else{
            f.submit();
        }
        return false;
    }

    
}
