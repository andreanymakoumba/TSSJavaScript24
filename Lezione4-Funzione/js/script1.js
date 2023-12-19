// Dichiaro una funzione
function salutaUtente(){
    //corpo della funzione

let nomeUtente = "Best"; // variabile locale, si puo vedere solo dentro la funzione
let cognomeUtente = "Mak";

//Alt + 96 = ` backtck
console.log(`ciao ${nomeUtente} ${cognomeUtente}`);
}

// richiamo la funzione
salutaUtente();

function salutaDocente(){
    let nome = "MAK";
    let cognome = "albert";

    console.log(`ciao docente ${nome} ${cognome}`);
}
salutaDocente();

function salutaRespo(){
    let nome = "Egle";
    let cognome = "Risola";
    console.log(`ciao responsabile ${nome} ${cognome}`);
}
salutaRespo();

//una funzione puo richiamare altre funzioni

function salutaTutti(){
    console.log("salauta tutti in un colpo");
    salutaDocente();
    salutaRespo();
}

//voglio richiamare dall'html con <button onclick =""></button>