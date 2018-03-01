//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var largo;
    var ancho;
    var perimetro;
    
    largo= document.getElementById("largo").value;
    ancho= document.getElementById("ancho").value;

perimetro= (largo + ancho) *2;

alambre= perimetro * 6;

alert(" Se necesitan" + alambre + " metros de alambre");

}

