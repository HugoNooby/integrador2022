/*adicionar linha 
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  para os códigos a seguir funcionarem*/

function playerID() {//para o nome do jogador
  $("#playerID").fadeIn(2000);//faz o nome do jogador aparecer
}

function troca() {//para trocar a "página" a ser exibida
  $("#id_da_tag_a_ser_trocada").html('html da nova pagina')
  //colocar text no lugar de html para trocar o texto somente, sem adicionar tags
}


//inicio lorem ipsum (texto sendo escrito automáticamente)
var i = 0;
var txt = 'texto a ser escrito'; //texto que vai ser digitado
var speed = 50; //velocidade em milisegundos

function typeWriter() { //função
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
//fim do lorem ipsum
