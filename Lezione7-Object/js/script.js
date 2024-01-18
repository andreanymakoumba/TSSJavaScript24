let studente = {
// dichiaro le mie prop.
nome: "Best",
cognome: "mak",
eta: 34,
esami: ["Maths", "Fisica", "Chimica", "MMA"],

docenti: [
    {
        nome: "Dario",
        cognome: "Menillo",
        materia: "Js"
    },
    {
        nome: "MAuro",
        cognome: "Bogliaccino",
        materia: "java"
    },
    {
        nome: "Oscar",
        cognome: "yesSir",
        materia: "HTML"
    }
],
computer: {
    marca: "Del",
    modello: "HACCP",
    ram: 8,
    accesso: true
},
//Dichiaro un metodo interno in minuscolo 
//il metodo costruttore esterno comincia con la maiuscola
presentati: function(){
    let presentazione = "Ciao, mi chiamo: " + this.nome + " " + this.cognome + ". Mi mancano ancora i segenti esami: ";
    for(let i = 0; i < this.esami.length; i++){
        presentazione += "<li>" + this.esami[i] + "</li>";
    }
    return presentazione
}
}
//il this all'esterno fa riferimento al window, cioè al browser
console.log(this.location);

//leggo il valore delle propreità o richiamo delle proprità
console.log(studente);
console.log(studente.nome);

// richiamo il nome del primo docente
console.log(studente.docenti[0].nome);

//richiamo il nome del computer
console.log(studente.computer.marca + " " + studente.computer.modello);

//document.getElementById("demo").innerHTML = "il mio studente si chiama " + studente.nome + " "+ studente.cognome;

//richiamo il metodo
document.getElementById("demo").innerHTML = studente.presentati();