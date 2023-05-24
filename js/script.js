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

//COSTANTE DEL TAG HTML E DELL'ARRAY
const container_list = document.getElementById('shopping_list')

// VARIABILE = 0 CONTATORE DELL'ARRAY
let counter = 0;

/* 
PARTE 2 LOGICA DEL PROGRAMMA
*/

// CREAZIONE DEL CICLO WHILE PER SCORRERE GLI ELEMENTI DELLA LISTA
while (counter < shopping_list.length - 1) {
    counter++;

    // VARIABILE DELL'ITEM
    let item = shopping_list[counter]

    // VARIABILE CONTENITORE HTML DI 'LI'
    let container_item = document.createElement('li')

    // INSERIMENTO DELL'ITEM ALL'INTERNO DEL CONTAINER
    container_item.innerText = item;

    // INSERIMENTO DELLA LISTA
    container_list.appendChild(container_item)
}