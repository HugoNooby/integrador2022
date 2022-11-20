var textnum = 0;
var dialogue = ["14 de julho, Bastilha a prisão, o grande símbolo político e absolutista, estava em chamas. Graças a um aviso dado por um jornalista, o povo pode-se preparar para algo assim. Invadiram um hospital e de lá roubaram o armamento, depois seguiram para Bastilha e a atacaram, creio que será um grande marco para a história francesa. Marquês de Launay, o diretor da prisão, tentou fazer um acordo com os líderes dos revolucionários, todavia não há como convencer aqueles que, já estão dominados por seus desejos. O tiroteio começou e Launay se rendeu e foi capturado. O que fazer em um cenário como este?", "Escolha o rumo em que queira que a história tome (você poderá voltar caso mude de ideia):" ];
const text = document.getElementById("text");
function nextDialogue(){
  
  if (textnum<=3){
    $("#seta").hide();
    document.getElementById("text").innerHTML = dialogue[textnum];
    typeWrite(text);
    setTimeout(mostra(),5000);
    textnum++;
  } else if (textnum==4){
    $('#box').html('<div class="data-container"><a href="bispoesconder.html" class="button">SE ESCONDER</a></div><br><div class="data-container"><a href="bispojuntar.html" class="button">SE JUNTAR AO POVO</a></div><br><div class="data-container"><a href="viu.html" class="button">VOLTAR E TENTAR NOVAMENTE</a></div>') ;
  }else{
    textnum = 0;
  }
  
}

function typeWrite(elemento){
     const textoArray = elemento.innerHTML.split("");
    elemento.innerHTML = '';
    textoArray.forEach(function(letra,i){
        setTimeout(function(){
            elemento.innerHTML += letra;
        },50*i)

    });
}

function mostra(){
  $("#seta").show();
}