/**
 * Created by josemalcher on 24/04/2017.
 */
window.onload = function () {
    var y = document.getElementById('sim');
    var n = document.getElementById('nao');
    var b = document.getElementById('next');

    b.disabled='disabled';
    n.checked = 'checked';

    y.onclick = function () {
        //y.checked = 'checked';
        checabotao();
    }
    n.onclick = function () {
        checabotao();
    }

    function checabotao() {
        if(y.checked){
            //alert("Aceito");
            //b.disabled='';
            desabilita('next');
        }else if(n.checked){
            //alert("Não aceito");
            //b.disabled='disabled';
            desabilita('next','y');
        }
    }
    function desabilita(elemento, estado) {
        var attr = '';
        if(estado == "y"){
            attr = 'disabled';
        }
        document.getElementById(elemento).disabled = attr;
    }

}