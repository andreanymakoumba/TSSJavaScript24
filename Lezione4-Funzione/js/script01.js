function calcalaArea(){
    let base = 10;
    let altezza = 7;
    let area = base * altezza;

    return area;
}

//salvo nella var valoreArea il valore restituito dalla funzione calcolaArea()
let valoreArea = calcolaArea();

console.log(valoreArea);

//voglio passare dei parametri alla mia funzione

function calcolaSuperfice(base, altezza){
let area = base * altezza;
return area;

}

let valoreSuperfice = calcolaSuperfice(8,6);

console.log(valoreSuperfice);

function salutami (nome,cognome){
    console.log(`ciao ${nome} ${cognome}`);
    return`ciao ${nome} ${cognome}`
}
salutami("best", "mak");