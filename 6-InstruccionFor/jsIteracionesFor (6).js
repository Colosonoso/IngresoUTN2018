function Mostrar()
{
var numero;
var i;
var ContPares=0;

numero=parseInt(prompt(" Ingrese un número"));

for(i=1; i<=numero; i++)

{
      if(i % 2==0)
       {

          ContPares++;
          console.log(i);

       }

}

console.log(" Se encontraron " + ContPares + " números pares ");

}//FIN DE LA FUNCIÓN