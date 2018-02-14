function Mostrar()
{
//tomo la edad  
var edad;

edad=document.getElementById("edad").value;

if(edad <13)
{
    alert("Niño");
}

else if(edad <18)
{
    alert("Adolescente");
}

else
{
    alert("Adulto");
}

}//FIN DE LA FUNCIÓN