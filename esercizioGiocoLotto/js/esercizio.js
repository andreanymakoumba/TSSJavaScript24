 let numeriEstratti = [];

let giri = 0;

for(let i = 0; i < 10; i++){
let numero = Math.ceil(Math.random() * 90);

if(numeriEstratti.includes(numero)){
    i--;
}else{
    numeriEstratti.push(numero);
}
giri++;

}
console.log(numeriEstratti);
console.log(giri);

/*

//estrazione di n numeri da 25 a 50
let numeriDaEstrare = [];
let giriG = 0;

for(let i = 0; i < 10; i++){
    let max = 50;
    let min = 24; // per comprendere anche 25 stesso

   // let numero = Math.ceil(Math.random() * 25) +25;
   let numero = Math.ceil(Math.random() * (max - min)) + min;
    
    if(numeriDaEstrare.includes(numero)){
        i--;
    }else{
        numeriDaEstrare.push(numero);
    }
    giri++;
    
    }
    console.log(numeriDaEstrare);
    console.log(giri); */

    //Con WHILE estrsgo numeri casuali da un set di num . i numeri non si possono
    //ripettere

   /* let numDaEstrare = [];
    //let girG = 0;

    while (numDaEstrare.length < 10 ) {
        let num = Math.ceil(Math.random() * 25) + 24;

        if(!numDaEstrare.includes(num)){
            numDaEstrare.push(num);
        }
    }

    console.log(numDaEstrare);  */

    //SENZA IF

   /* let setPerEstrarezione = [];

    for(let i = 0; i < 90; i++){
        setPerEstrarezione.push(i+1);
        
    }
    console.log(setPerEstrarezione);
    let numeriEstratti2 = [];

    for(let i = 0; i < 6; i++){
        let numCasuale = Math.floor(Math.random() * setPerEstrarezione.length);
        numeriEstratti2.push(setPerEstrarezione[numCasuale]);
        setPerEstrarezione.splice(numCasuale);
    }
console.log(numeriEstratti2);
console.log(setPerEstrarezione); */  

   


