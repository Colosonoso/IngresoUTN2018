function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

while(numero <0 || numero >9)
{

numero=prompt("Error. numero incorrecto. Reingrese un numero entre 0 y 10 ");

}


document.getElementById("Numero").value=numero;
}//FIN DE LA FUNCIÓN