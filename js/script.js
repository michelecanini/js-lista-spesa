"use strict";

//PROBLEMA: Data una lista della spesa, stampare sulla pagina  gli elementi della lista individualmente con un ciclo while.

/* 
PARTE 1 DICHIARAZIONE DELLE VARIABILI
*/

// VARIABILE DELLA LISTA DELLA SPESA ARRAY
let shopping_list = [
    'pane',
    'latte',
    'burro',
    'salsicce',
    'pomodori',
    'mele',
    'formaggio',
    'pasta',
    'pizza'
]
console.log(shopping_list)

//COSTANTE DEL TAG HTML E DELL'ARRAY
const container_list = document.getElementById('shopping_list')
console.log(container_list)

// VARIABILE = 0 CONTATORE DELL'ARRAY
let counter = 0;
console.log(counter)

/* 
PARTE 2 LOGICA DEL PROGRAMMA
*/

// CREAZIONE DEL CICLO WHILE PER SCORRERE GLI ELEMENTI DELLA LISTA
while (counter < shopping_list.length) {

    // VARIABILI INTERNE AL CICLO

}