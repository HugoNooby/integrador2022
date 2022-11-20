var textnum = 0;
var dialogue = ["Guilhotina, um instrumento impiedoso, possui uma lâmina mais afiada que os olhos famintos dos que se encontravam ali. Não lhe darei mais detalhes sobre o que aconteceu com rei Luís XVI, talvez sua imaginação já tenha contado. Mas então, onde está Emmanuel?", "Escolha o rumo em que queira que a história tome (você poderá voltar caso mude de ideia):" ];
const text = document.getElementById("text");
function nextDialogue(){
  
  if (textnum<=1){
    $("#seta").hide();
    document.getElementById("text").innerHTML = dialogue[textnum];
    typeWrite(text);
    setTimeout(mostra(),5000);
    textnum++;
  } else if (textnum==2){
    $('#box').html('<div class="data-container"><a href="bispo_desapareceu.html" class="button">DESAPARECEU</a></div><br><div class="data-container"><a  href="bispo_fugiu.html" class="button">FUGIU POR CULPA</a></div><br><div class="data-container"><a href="bispoesconder.html" class="button">VOLTAR E TENTAR NOVAMENTE</a></div>') ;
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
