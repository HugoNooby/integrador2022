var texto = "A Revolução Francesa aconteceu entre os anos de 1789 e 1799, foi um período progressista inspirada em ideais do Iluminismo e incentivada por um cenário de crise, vivido pela França no final do século XVIII. Ocasionou grandes transformações e designou o começo da queda do absolutismo europeu. As ruas francesas podem ser encantadoras, porém isso depende de quem você é. . .";
var result;

var count = 0;
function digitar() {
result = document.getElementById("result");
window.setTimeout(function() { inserir(texto[count]) }, 30);
}

function inserir(letra) {
result.innerHTML += letra;
count++;
if(count < texto.length)
window.setTimeout(function() { inserir(texto[count]) }, 30);
}

window.onload = digitar;


