function saluta(){
    console.log("Ciao Dario");

}
// Domanda da colloquio: come posso simulare in JS il 
//modificatore private ? con le closure

//Evento in JS
let btn = document.querySelector("#btn");
btn.onclick = saluta;

//eventi listener 
let btn2 = document.querySelector("#btn2");
//la funzione va richiamata senza le parentesi tonde
btn2.addEventListener("click", saluta);