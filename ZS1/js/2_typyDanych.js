//CTRL+D - duplikowanie linii
var a=10, b="3c";
var wynik= a+b;
//alert(wynik);
//alert(a+b);
console.log("tekst");
console.log(a);
console.log(typeof(a)); //number
console.log(typeof(b)); //string
console.log(typeof(a+b)); //string

console.trace();

var _zmienna1 = 10;
//var 3liczba = 10; //błędna nazwa zmiennej
var zmiennaZmiennoprzecinkowa = 2.5;
console.log(typeof(zmiennaZmiennoprzecinkowa));

//int integer liczba całkowita np. 3 (c++)
//float zmiennoprzecinkowa np 3.5 (c++)

//bool

var prawda = true;
var falsz = false;
console.log(typeof(prawda)); //boolean

//string

var tekst = "Janusz";
console.log(typeof(tekst));

//undefined

var imie;
console.log(imie); //undefinded
console.log(typeof(imie)); //undefinded
imie = "Sandra";
console.log(imie);
console.log(typeof(imie));

//object

var tablica = ["Janusz", "Anna", "Krystyna"];
console.log(tablica);
console.log(typeof(tablica));

//###################################################################################

//var liczba = prompt("Podaj liczbę");
//var liczba1 = prompt("Podaj pierwszą liczbę", "np. 3.4");
//var liczba2 = prompt("Podaj drugą liczbę", "np. 3.4");
// parseInt - liczby całkowite
//liczba1 = parseInt(liczba1);
//liczba2 = parseInt(liczba2);
//
// konwersja na typ zmiennoprzecinkowy
//liczba1 = parseFloat(liczba1);
//liczba2 = parseFloat(liczba2);
//console.log(typeof(liczba1));
//console.log(typeof(liczba2));
//var suma = liczba1 + liczba2; //konkatencja
//document.write(suma);
//console.log(typeof(suma));

//zad.1
/*mama, tata oraz dziecko podają swój wiek z klawiatury
Na ekranie wyświetl w formacie

mama: ...lat
tata: ...lat
dziecko: ...lat
średni wiek wynosi: ...lat*/

var mama = prompt("Podaj wiek mamy:");
var tata = prompt("Podaj wiek taty:");
var dziecko = prompt("Podaj wiek dziecka:");

mama = parseInt(mama);
tata = parseInt(tata);
dziecko = parseInt(dziecko);

var średnia = (mama + tata + dziecko)/3;

średnia = średnia.toFixed(2);

document.write("<br>","Mama: "+ mama, " lat");
document.write("<br>","Tata: "+ tata, " lat");
document.write("<br>","Dziecko: "+ dziecko, " lat");
document.write("<br>", "Średni wiek: "+ średnia, " lat");














