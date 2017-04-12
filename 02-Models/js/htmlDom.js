/**
 * Created by josemalcher on 11/04/2017.
 */

/*
 HTML DOM API
 - ID
 - Class
 - Name
 - Tag
 - Selector


 */

window.onload = function() {


    var x = document.getElementById('titulo');
    var y = document.getElementsByClassName("titulo");
    var z = document.getElementsByName("nome");
    var h = document.getElementsByTagName("h2");

    //alert(y);
    var input = y[2];
    input.value = "TESTE de acesso e atualização do html dom";
    input.size="100";
    input.disabled = "disabled";

    for(i = 0 ; i < z.length ; i++){
        alert(z[i]);
    }

    var s = document.querySelectorAll(".titulo")
    alert(s[0])

    //h[0].innerHTML = "<p style = \"color:red;\">teste h2 de vermelho</h2> ";

    // selecionando um unico objeto
    var t = h[0];
    // escrevendo no meu objeto
    var i = t.innerHTML = "TESTE DE ESCRITA";
    // Personalizando o meu objeto
    var s = t.style.color = "red";

    alert(t.style.color)

}

