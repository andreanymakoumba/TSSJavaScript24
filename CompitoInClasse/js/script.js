//Descrizione di uno studente

let studente = {
    nome: "Best",
    cognome: "MAKOUMBA",
    matricola: "07",
    materie : [
        {
            nomeCorso: "JavaScript",
            docente: "Dario Menillo",
            ore: 10,

        },
        {
            nomeCorso: "java",
            docente: "Mauro",
            ore: 20,
        },
        {
            nomeCorso:"HTML",
            docente: "Oscar",
            ore: 30,
        }

    ],

    presentati(){
let presentazione = `${this.nome} ${this.cognome} , matricola: ${this.matricola}
${this.materie}`;

this.materie.forEach(materia =>{
   presentazione += `<br>${materia.nomeCorso} - ${materia.docente} - ${materia.ore} ore`; 
})

return presentazione;
    }
}

let demo = document.getElementById("demo")
function presentaStudente(){
    demo.innerHTML = studente.presentati()
} 