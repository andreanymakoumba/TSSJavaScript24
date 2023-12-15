//metodi per stringhe


let paragrafo = " Questa è la nostra terza lezione di javaScript";

console.log(paragrafo);

console.log("il paragrafo è fprmato da " + paragrafo.length + "carateri");

console.log("primo carattere: " + paragrafo.charAt(0));
console.log("ultimo carattere: " + paragrafo.charAt(paragrafo.length -1));
 
// METODI DI RICERCA 
let search1 = paragrafo.indexOf("a"); // restittuisce la prima occorenza
console.log(search1);

console.log(paragrafo.lastIndexOf("a"));

console.log(paragrafo.indexOf("terza"));

//cerco una parola inesistente

let search2 = paragrafo.indexOf("Dario");
console.log(search2);

if (paragrafo.indexOf("Dario") == -1) {
    console.log("mi spiace, la parola cercata non esiste");

}
else {
    console.log("la parola o il patern cercato non esiste");
}

//indexOf e lastIndexOf funzionanao anche sugli Array
let mioArray = ["ciao", "come", "stai"];
console.log(mioArray.indexOf("ciao"));
console.log(mioArray.indexOf("come"));

//Metodi per il taglio

let paragrafo2 = " A breve faremo un esercitazione";
console.log(paragrafo2.slice(10,30));
console.log(paragrafo2.substring(10,30));
console.log(paragrafo2.split(" ")); // taglia ad ogni spazio ed inserisce tutto in un array

//sostituzione
console.log(paragrafo2.replace("faremo un esercitazione"));

//inclusione

console.log(paragrafo2.includes("Array")); //true

//upperCase e LowerCase
console.log(paragrafo2.toLocaleUpperCase());





