var id = null;
function myMove() {
  var elem = document.getElementById("nome_usuario");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 2000);
  function frame() {
    if (pos == 10) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.opacity = pos*0.1; 
    }
  }
}
