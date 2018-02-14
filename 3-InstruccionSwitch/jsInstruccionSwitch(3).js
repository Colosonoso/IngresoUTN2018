function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{

case "Febrero": alert("Este mes no tiene más de 29 días");
break;

default: alert(" Este mes tiene más de 30 días");
break;



}
	
	


}//FIN DE LA FUNCIÓN