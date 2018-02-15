function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;


switch(mesDelAño)

{
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
    case "Enero":
    case "Febrero":
    alert("Ya pasamos el frio, ahora calor!!!");
    break;

    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
    alert("Falta para el invierno");
    break;
    
    default:
    alert("Abrigate que hace frio");
    break;


}
}//FIN DE LA FUNCIÓN