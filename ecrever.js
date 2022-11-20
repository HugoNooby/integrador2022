var texto = "A Revolução Francesa aconteceu entre os anos de 1789 e 1799, foi um período progressista inspirada em ideais do Iluminismo e incentivada por um cenário de crise, vivido pela França no final do século XVIII. Ocasionou grandes transformações e designou o começo da queda do absolutismo europeu." <br> "As ruas francesas podem ser encantadoras, porém isso depende de quem você é. . .";

function typeWrite(elemento){
    const textoArray = texto.split("");
    elemento.innerHTML = '';
    textoArray.forEach(function(letra,i){

        setTimeout(function(){
            elemento.innerHTML += letra;
        },75*i)

    });
}
const titulo = document.querySelector(".titulo-principal");
var tty = document.getElementById("result");
typeWrite(tty);
