//document.getElementById('blok1').innerHTML = 'Janusz'

var b1 = document.getElementById('blok1');
var b2 = document.getElementById('blok2');
var b3 = document.getElementById('blok3');
var b4 = document.getElementById('blok4');
var inner = document.getElementById('inner');
var content = document.getElementById('content');

b1.innerHTML = 'Anna';
b2.innerHTML = 'Jacek';

var imie = prompt('Podaj imię');
b3.innerHTML = imie;

b4.textContent = 'Tomek';

//różnicy pomiędzy innerHTML a textContent

inner.innerHTML = '<a href="http://wp.pl"><h1>inner</h1></a>';
content.textContent = '<a href="http://wp.pl"><h1>content</h1></a>';

/*
Zadanie 1. Użytkownik podaje z klawiatury dwie wartości: długość podstawy oraz wysokość trójkąta. Wyświetl wynik div-ie w formacie "Pole trójkąta wynosi:... cm2";
Wynik ma być w kolorze Białym na tle Czarnym.
Ogranicz blok wyświetlający do szerokości 200 px.
Zaokrąglij wynik do dwóch miejsc po przecinku.
W arkuszu stylów ustaw wyrównanie tekstu do środka.
*/

var Wynik = document.getElementById('wynik');
var dl = Number(prompt('Podaj długość'));
var wys = Number(prompt('Podaj wysokość'));
var oblicz = 0.5 * dl * wys;
oblicz = oblicz.toFixed(2);
Wynik.innerHTML = 'Pole trójkąta wynosi:' + oblicz + 'cm <sup>2</sup>';
