// dICHIARAZIONE DELL'aRRAY

let libreia = ["Best1", "Best2", "Best3", "Best4"];
let listaPrezzi =[10, 20, 15, 15];

let lunghezza = libreia.length;

//lettura dell'Array

let elencoLibri = document.getElementById("elencoLibri");

for(let i = 0; i < lunghezza; i++){
    console.log(libreia[i]);
    elencoLibri.innerHTML += "<li>" + libreia[i]+ "</li>";
}

// somma dei libri

let sommaDeiLibri = 0;

for(let i = 0; i < listaPrezzi.length; i++){
    sommaDeiLibri += listaPrezzi[i];
}
console.log(sommaDeiLibri);

let totaleLibri = document.getElementById("totaleLibri");



