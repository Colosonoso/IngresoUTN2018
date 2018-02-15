function Mostrar()
{

var sexo = prompt("ingrese f o m .");



document.getElementById('Sexo').value=sexo;

while(sexo !="f" || sexo!="m")


{

sexo=prompt("Letra incorrecta, reingrese nuevamente");

}

alert("Letra correcta!1");

}//FIN DE LA FUNCIÓN