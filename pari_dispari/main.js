/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.  
*/

let utente_paridispari = prompt(`per giocare scegli PARI o DISPARI `);
utente_numero = prompt(`inserisci un numero da 1 a 5`)
console.log(`hai scelto:${utente_paridispari} , e come numero:${utente_numero}`);


let utente = utente_numero + utente_paridispari;
console.log(utente);


//  Generiamo un numero random
//  (sempre da 1 a 5) per il computer (usando una funzione).


function computer() {

    return Math.floor((Math.random() * 5) + 1);
}


let numero_pc = computer();
console.log(`il numero assegnato al pc è ${numero_pc}`);



//Sommiamo i due numeri 
let risultato = parseInt(utente_numero) + parseInt(numero_pc);
console.log(` la somma dei due è ${risultato}`);

//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

function pari_dispari(risultato) {

    if (risultato % 2 == 0) {
        return "pari"

    } else {
        return "dispari"

    }


}



console.log(pari_dispari(risultato));


// Dichiariamo chi ha vinto.


if (pari_dispari() == "pari") {
    console.log(`il risultato è: ${pari_dispari()}. complimenti utente hai vinto`);
} else pari_dispari() == "dispari"; {
    console.log(`il risultato è: ${pari_dispari()}. hai pesro`);
}

