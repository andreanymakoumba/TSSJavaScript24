// ARRAY 

let studenti = ["Mak", "Best", "Francy", "Gabri", "Alessio"];

console.log(studenti[2]);

studenti.reverse(); //per ivertire i nomi dell'array
studenti.sort();



//ciclo for per poter leggere l'ARRAY
for (let i = 0; i < studenti.length; i++){
console.log(studenti[i]);
}

//For al contrario
for(let i = studenti.length - 1; i >= 0; i--){
    console.log(studenti[i]);
}

//FOREACH = per oggi studente nell'array degli studenti fai qualcosa
console.log("uso il ForEach");

studenti.forEach(studente =>{
    console.log(studente);
});

//For
for(let i = 0; i < 10; i++){
    console.log("numero: " + i);
}

// For per gli asterischi
let string = "";

for(let i = 0; i < 10; i++){
    for(let j = 0; j <= i; j++){
        string += "*";
    }
    string += "\n";
}
console.log(string);

//for con IF innestato

let numeri = [10, 20,1,14,9,55,16,32,21];

//voglio capire quanti e quali numeri sono sopra il 20

for(let i = 0; i < numeri.length; i++){

    if(numeri[i] > 20){
        console.log(numeri[i] + "questo è più grande !");
    }
    else if(numeri[i] == 20){
        console.log(numeri[i] + "questo è proprio 20");
    }
    else{
        console.log(numeri[i]);
    }
}
//stessa cosa con le parole
let parole = ["ciao", "come", "stai", "tutto", "bene", "arrivederci"];

for(let i = 0; i < parole.length; i++){
    //parole[i]
if (porole[i].length < 7){
    
}
}