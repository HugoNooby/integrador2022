var textnum = 0;
var dialogue = ["'A rumores de que o povo irá atacar o palácio às três da tarde, enquanto o soberano estiver com sua rainha' foi o que ouviu um soldado dizer, 'Matarão os dois', sussurrou para si. É interessante saber como Emmanuel pensou naquele momento, não estava preocupado, nem incomodado, seu olhar de indiferença entregou tudo. Não é segredo que seja contra a monarquia e a nobreza, e que defendeu o terceiro estado em outra de suas prestigiosas obras, dizendo que não precisavam de ambos os estamentos, mas desejaria ele a morte de seus soberanos?", "Escolha o rumo em que queira que a história tome (você poderá voltar caso mude de ideia):" ];
const text = document.getElementById("text");
function nextDialogue(){
  
  if (textnum<=3){
    $("#seta").hide();
    document.getElementById("text").innerHTML = dialogue[textnum];
    typeWrite(text);
    setTimeout(mostra(),5000);
    textnum++;
  } else if (textnum==4){
    $('#box').html('<div class="data-container"><a href="bispo_sim.html" class="button">SIM</a></div><br><div class="data-container"><a href="bispo_nao.html" class="button">NÃO</a></div><br><div class="data-container"><a href="Bispo_Sieyès.html" class="button">VOLTAR E TENTAR NOVAMENTE</a></div>') ;
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

$(window).ready(function () {

  $(".main__nav-btn").click(function (){
    $(".main_nav, .main_nav-btn").toggleClass("active");
  });

});
