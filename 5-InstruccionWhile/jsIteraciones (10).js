function Mostrar()
{
    var SumaPos=0;
    var SumaNeg=0;
	var ContadorPos=0;
	var ContadorNeg=0;
	var CantidadPos=0;
	var CantidadNeg=0;
	var ContadorCeros=0;
	var ContadorPares=0;
	var PromedioPos;
	var PromedioNeg;
	var diferencia;
	var respuesta;

	do	
	{
	numero=parseInt(prompt("Ingrese un numero"))


	if(numero <0)
{

SumaNeg=SumaNeg + numero
ContadorNeg --;
CantidadNeg +=numero;

}


	  else if(numero>=0)
	{

SumaPos= SumaPos + numero 
ContadorPos ++;
CantidadPos +=numero;



	}

     else
	 {
	ContadorCeros ++;
	 }

if(numero % 2==0)
{
	ContadorPares ++;
}
	respuesta=prompt(" Desea continuar?:");	

	}
	while(respuesta=="si")

	PromedioNeg= SumaNeg / ContadorNeg;
	PromedioPos= SumaPos / ContadorPos;
	diferencia= SumaPos - SumaNeg;

document.write("1- Suma de los negativos:" + SumaNeg + "<br/>");
document.write("2- Suma de los Positivos:" + SumaPos + "<br/>");
document.write("3- Cantidad de los Positivos:" + CantidadPos + "<br/>");
document.write("4- Cantidad de los Negativos:" + CantidadNeg + "<br/>");
document.write("5- Cantidad de Ceros:" + ContadorCeros + "<br/>");
document.write("2- Cantidad de numeros pares:" + ContadorPares + "<br/>");
document.write("3- Promedio de los positivos:" + PromedioPos + "<br/>");
document.write("4- Promedio de los Negativos:" + PromedioNeg + "<br/>");
document.write("1- Diferencia entre positivos y negativos:" + diferencia + "<br/>");


}//FIN DE LA FUNCIÓN