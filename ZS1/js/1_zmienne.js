var imie;
imie = "Janusz";
var nazwisko = "Kowal";
//+ konkatenacja
document.write("Imię: " + imie + "<br>");
document.write("Nazwisko: " + nazwisko);

var wiek = 15;
if(wiek>=18){
    document.write("<br>Jesteś pełnoletni");
}else if(wiek<15){
    document.write("<br>Jesteś dzieckiem");
}else{
    document.write("<br>Nie jesteś pełnoletni");
}

var x, y;
x = 9;
y = 10;
var suma = x + y;
//window.alert("Suma wynosi: " + suma);
alert("Suma wynosi: " + suma);
var różnica = x - y;
var dzielenie = x / y;
var mnożenie = x * y;
var modulo = x % y;

console.log(modulo);

