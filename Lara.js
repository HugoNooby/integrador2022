var j=0;
var i=document.getElementById("menu").childNodes;
function expand(){
	if(j==0){
		document.getElementById("add").style.transform = 'rotate(45deg)';
		document.getElementById("menu").style.transform = 'scale(1)';
	i[1].style.transform='translateY(-160px)';
	i[3].style.transform='translate(140px, -80px)';
	i[5].style.transform='translate(140px, 80px)';
	i[7].style.transform='translateY(160px)';
	i[9].style.transform='translate(-140px, 80px)';
	i[11].style.transform='translate(-140px, -80px)';
	j=1;
    }
	else{
		document.getElementById("add").style.transform = 'rotate(0deg)';
		document.getElementById("menu").style.transform = 'scale(0.9)';
	i[1].style.transform='translateY(0)';
	i[3].style.transform='translate(0)';
	i[5].style.transform='translate(0)';
	i[7].style.transform='translateY(0)';
	i[9].style.transform='translate(0)';
	i[11].style.transform='translate(0)';
	j=0;
	}
}

