// Slash / + doppio ** per avere JS Docs

/**
 * 
 * @param {String} nome 
 * @param {String} cognome 
 * @param {Number} eta 
 * @param {String} codFisc 
 * @param {String[]} materie
 */
function Persona (nome, cognome, eta, codFisc){
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
    this.codFisc = codFisc;
   // this.materie = materie;

    //descrivere
    this.toString = function(){
        return `${this.nome} ${this.cognome} - eta: ${this.eta} - codice fiscale 
        ${this.codFisc} - materie: ${this.materie}`;
    }
}

let persona1 = new Persona("best", "Mak", 34, "ajhdjhlhfhsjsfhl");

console.log(persona1.toString());

let personeRegistrate = [
    new Persona("pippo", "Rossi", 32, "sdilsdjsdjsdopd", ["Js", "TS", "html"]),

]

/*personeRegistrate.forEach(Persona =>{
    
});*/
console.log(personeRegistrate.toString());