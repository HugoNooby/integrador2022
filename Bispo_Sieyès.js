const Ejulho = document.getElementById("Ejulho");
const acreditoobserve = document.querySelector(".acreditoobserve");
const Opovo = document.querySelector(".Opovo");
const osguardas = document.querySelector(".osguardas");
const fechouaporta = document.querySelector(".fechouaporta");
const E1792 = document.querySelector(".E1792");
const seuvoto = document.querySelector(".seuvoto");
const guilhotina = document.querySelector(".guilhotina");

 document.querySelector(".titulo-principal");




//função funcional
function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split("");
    elemento.innerHTML = '';
    textoArray.forEach(function(letra,i){

        setTimeout(function(){
            elemento.innerHTML += letra;
        },75*i)

    });
}

function Mudarestado(el) {
        var display = document.getElementById(el).style.display;
        if(display == "block"){
            document.getElementById(el).style.display = 'none';
	}else{
            document.getElementById(el).style.display = 'block';
	}
    }

	
typeWrite(Ejulho);
typeWrite(acreditoobserve);
typeWrite(Opovo);
typeWrite(osguardas);
typeWrite(fechouaporta);
typeWrite(E1792);
typeWrite(seuvoto);
typeWrite(guilhotina);
	
	
var num=0;
function mostrar(){
	if (num==0){
		document.getElementById('minhaDiv').style.display='block';
		num=1;
	}else{
		document.getElementById('minhaDiv').style.display='none';
		num=0;
	}
}
