let automobile = {
    marca: "Audi",
    modello: "RS6",
    cilindrata: 3000,
    colore: "nero opaco",
    stripLed: true,
    trasmissione: "automatica",

    marciaAttuale: 0,
    velocita: 0,
    numeroGiri: 0,
    accesa: false,

    descrivi(){
        let descrizione = `${this.marca} ${this.modello} - colore: ${this.colore
        } - trasmissione ${this.trasmissione} - Cilindrata: ${this.cilindrata}`;

        return descrizione;
    },

    //Metodo della velocita
    calcolavelocita(numGiri, marciaAttuale){
this.numeroGiri  = numGiri;
this.marciaAttuale = marciaAttuale;

let velocita = (this.numGiri * this.marciaAttuale) / 100;
return velocita;
    },

    accendi(){
        if(this.accesa){
            console.log("L'auto è già accesa");
        } else{
            this.accesa = true;
            console.log("Auto ON");
        }
       
    }, 

    spegni(){
        if(this.accesa){
            this.accesa = false;
            console.log("Auto OFF");
        }
        else{
            console.log("L'auto è già spanta");
        }
    },

    guidaAuto(){
        if(this.accessa){
            console.log("adesso puoi guidare la tua auto"); 
            this.velocita = this.calcolavelocita(3500, 6);
        return `L'auto è accesa ${this.accesa} e viaggia a ${this.velocita} Km/h`;  
        }else{
            return "L'auto è ancora spenta";
        }
        

    }
}
automobile.accendi();
console.log(automobile.guidaAuto());

automobile.spegni();
console.log(automobile.guidaAuto());