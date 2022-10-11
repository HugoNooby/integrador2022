var texto = "A Revolução Francesa aconteceu entre os anos de 1789 e 1799, foi um período progressista inspirada em ideais do Iluminismo e incentivada por um cenário de crise, vivido pela França no final so século XVIII. Ocasionou grandes transformações e designou o começo da queda do absolutismo europeu.";
var result;

var count = 0;
function digitar() {
  result = document.getElementById("result");
  window.setTimeout(function() { inserir(texto[count]) }, 100);
}

function inserir(letra) {
  result.innerHTML += letra;
  count++;
  if(count < texto.length)
    window.setTimeout(function() { inserir(texto[count]) }, 100);
}

window.onload = digitar;






