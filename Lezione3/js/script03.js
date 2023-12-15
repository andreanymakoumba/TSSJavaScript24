let color = ["Giallo", "Verde", "Blu", "Rosso", "Rosa", "Azzuro"];

//0 based
//
let primoColore = color[0];
 console.log(primoColore);

 let lunghezza = color.length;

 console.log("il mio array contiennne "+ lunghezza + "elemenenti");


 // la frutta fa bene alla salute

 let frutta = ["mela", "pesca", "banana", "kiwi", "arance"];

 // push() aggiuge un elemento
 frutta.push("cilliegia");
 frutta.push("mandarino");

 console.log(frutta);

 // pop() elimina l'ultimo elementoù

 frutta.pop();

 console.log(frutta);

 //sort() ordina l'array
frutta.sort();
console.log(frutta);

//reverse() ribalta l'ordine
frutta.reverse();
console.log(frutta);

// unire 2 array..... con operatore 3 (tree) dot

let verdura = ["broccoli", "cavolfiori", "lattuga", "cime di rape"];
let fruttaEVerdura = frutta.concat(...verdura);
 console.log(fruttaEVerdura);


 // unire gli elementi di un array
 
 let mioNome = ["B", "E", "S", "T"];

console.log(mioNome.join());

// le stringhe sono da considerarsi array di caratteri

let mioCognome = "Mak";

// il metodo split() elimina il separatore e divide l'array
let cognomeArr = mioCognome.split("");

console.log(cognomeArr);

let frase = " ciao mi chiamo Dario";
let fraseArr = frase.split(" ");
console.log(fraseArr);

let frase2 = "i topi non avevano nipoti";
let fraseArr2 = frase2.split(" ");
console.log(fraseArr2);

// vogllio invertire delle lettere del mio nome

let nomeUser = "Best";
console.log(nomeUser.split("").reverse().join(""));

// Array Misti non serve a descrivere entità complesse 

let docente = ["Dario", "Mannilo", "Javascript", 12, true];

//per poter leggere un array elemento per elemento uso il ciclo FOR

let listaFrutta = document.getElementById("listaFrutta");

console.log("leggo l'array con un for classico");
for(let i = 0; i < frutta.length; i++){
console.log(frutta[i]);
listaFrutta.innerHTML += "<li>" + frutta[i] + "</li>";
}

let sommaOre = 0;
//qual è la somma delle ore del giorno?
for (let i = 0; i <= 24; i++){
    sommaOre += i;
}
console.log(sommaOre);







