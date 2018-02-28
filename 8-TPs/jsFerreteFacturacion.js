/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 


{

var Precio1;
var Precio2;
var Precio3;
var Total;

Precio1=parseFloat(document.getElementById( "PrecioUno").value);
Precio2=parseFloat(document.getElementById( "PrecioDos").value);
Precio3=parseFloat(document.getElementById( "PrecioTres").value);

Total= Precio1 + Precio2 + Precio3

alert( " La suma de los precios es $" + Total);

}
function Promedio () 
{
var Precio1;
var Precio2;
var Precio3;
var Total;
var promedio;

Precio1=parseFloat(document.getElementById( "PrecioUno").value);
Precio2=parseFloat(document.getElementById( "PrecioDos").value);
Precio3=parseFloat(document.getElementById( "PrecioTres").value);

Total= Precio1 + Precio2 + Precio3

promedio= Total / 3;

alert( " El promedio de los precios es $" + promedio);
	
}
function PrecioFinal () 
{
var Precio1;
var Precio2;
var Precio3;
var Total;
var MasIva;

Precio1=parseFloat(document.getElementById( "PrecioUno").value);
Precio2=parseFloat(document.getElementById( "PrecioDos").value);
Precio3=parseFloat(document.getElementById( "PrecioTres").value);

Total= Precio1 + Precio2 + Precio3

MasIva= Total * 1.21;

alert( " El precio final es $" + MasIva);

}