function calcolaArea (base, altezza){
    let area = base* altezza;
    return area;

}

function calcolaVolume(base, altezza, profondita){
    let volume = base * altezza* profondita;
    return volume;
}

let area1 = calcolaArea(5,6);
let volume1 = calcolaVolume(7,5,6);

console.log("l'area vale : " + area1);
console.log("il volime vale: " + volume1);

//sfrutto una funzione dentro l'altra

function calcolaVolumeConArea (base, altezza, profondita){

    let volume = calcolaArea(base, altezza) * profondita;
    return volume;
}

let volume2 = calcolaVolumeConArea(5,10,26);
console.log("ll volume vale : " + volume2);

//posso sfrutare ancora un'altra soluzione
function calcolaVolumeConArea2 (area,profondita){
    let volume = area * profondita;
    return volume;
}

let valoreVolume2 = calcolaVolumeConArea2(calcolaArea(5,6),8);
console.log("il valore del volume è: " + valoreVolume2);

//chiedero all'utente di fornirmi 3 numeri
let numeriUser = window.prompt("inserisci 3 numeri separati da una virgola");

let numeriUserArr = numeriUser.split(","); // [num1, num2, num3]

let valoreArea = calcolaArea(numeriUserArr[0], numeriUserArr[1]);
let valoreVolume3 = calcolaVolumeConArea2(valoreArea, numeriUserArr[2]);

let demoArea = document.getElementById("demoArea");
let demoVolume = document.getElementById("demoVolume");

demoArea.innerHTML = "l'area è: " + valoreArea + "m2";
demoVolume.innerHTML = "il volume è: " + valoreVolume3 + "m3";



