//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var nota;
    var sexo;
    var promedio;
    var varonesMas6=0;
    var flag=0;
    var AcumNota=0;
    var notabaja;
    

for(var i=0; i<6; i++)

{

nota=parseInt(prompt(" Ingrese nota: "));


while(nota <0 || nota >10)


nota=parseInt(prompt( "Error. La nota debe estar entre el 0 y el 10. Reingrese"))

}

sexo=prompt(" Ingrese sexo");

while(sexo !="f" && sexo!="m")

{

sexo=prompt(" Error, el sexo debe ser f o m. Reingrese");

}

AcumNota+=nota;


if(nota< notabaja || flag==0)

{
    notabaja=nota;
    flag=1;
}

if(sexo=="m" && nota>=0)
{
    varonesMas6++;
}

promedio=AcumNota/6;

alert(" Promedio de notas" + promedio);
alert("Nota más baja" + notabaja);
alert("Varones con nota >=6"+ varonesMas6);

}

