var div = document.getElementById('texto_caracteres');
var texto = 'A Revolução Francesa aconteceu entre os anos de 1789 e 1799, foi um período progressista inspirada em ideais do Iluminismo e incentivada por um cenário de crise, vivido pela França no final so século XVIII. Ocasionou grandes transformações e designou o começo da queda do absolutismo europeu.';

function escrever(str, el) {
  var char = str.split('').reverse();
  var typer = setInterval(function() {
    if (!char.length) return clearInterval(typer);
    var next = char.pop();
    el.innerHTML += next;
  }, 100);
}

escrever(texto, div);






