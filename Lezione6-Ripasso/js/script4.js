function estrai(){

let numDaestrarre = document.getElementById("numDaEstrarre").value;

if(numDaestrarre <=90){


let numeriEstratti = [];
let giri = 0;

for(let i = 0; i < numDaestrarre; i++) {
let numero = Math.ceil(Math.random() * 90);

if(numeriEstratti.includes(numero)){
    i--;
}
else{
    numeriEstratti.push(numero);
}
giri++;
}
console.log(numeriEstratti);
console.log(giri);
}
}

/*
//secondo metodo

while(numeriEstratti.length < 5){
    let numero =  Math.ceil(Math.random() * 90);
    if(!numeriEstratti.includes(numero)){
        numeriEstratti.push(numero);
    }
}
*/

/* lego array da 1 a 90
for(let i = 0; i <= 90; i++){
numero[i] = i;
}

console.log(numero);

//Estrazione
for(let i = 0; i < 6; i++){
    console.log(Math.ceil(Math.random() * 90));

} */

