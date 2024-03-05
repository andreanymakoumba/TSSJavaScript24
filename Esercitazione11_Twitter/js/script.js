class Messaggio{

    constructor(nome, contenuto){
        this.nome = nome;
        this.contenuto = contenuto;
    }
}
class login{
    constructor(username,password){
        this.username = username;
        this.password = password;
    }
}

let username = document.querySelector("#username");
let messaggio = document.querySelector("#messaggio");
let btnInvia = document.querySelector("#btnInvia");
let demo = document.querySelector("#demo");
let charRes = document.querySelector("#caratteriRestanti");
let btnLogin = document.querySelector("#btnLogin");
let nome = document.querySelector("#nome");


let loginArr = [];
let messaggi = [];

function registraUser() {
    let utente = new login(username.value, password.value);

    localStorage.setItem("userConnesso", JSON.stringify(utente));

    location.reload();
}
btnInvia.addEventListener("clik", registraUser);




window.addEventListener("DOMContentLoaded", function () {

    if (this.localStorage.length != 0 && this.localStorage.key(0) == "userConnesso") {
        let userConnesso = JSON.stringify(this.localStorage.getItem("userConnesso")); //ricevo un JSON formato stringa
        console.log(userConnesso);
    
        demo.innerHTML = `<p>"Benvenuto: " ${userConnesso.nome} </p>`;
    }
    else{
        demo.innerHTML = "Nessun Utente connesso";
        
    }
});

function creaNuovoMessaggio(){
    
    if(username.value.length < 5){
        feed.innerHTML = "il tuo username è troppo breve!!"
    }
    else if(messaggio.value.length < 5){
feed.innerHTML = "il messaggio è troppo breve"
    }

    let nuovoMessaggio = new Messaggio(nome.value, messaggio.value);
    messaggi.push(nuovoMessaggio);

}

function stampaMessaggi(){
demo.innerHTML= "";
    for(let i = 0; i < messaggi.length; i++){
        demo.innerHTML += `<div class="boxMsg"> <p> ${ messaggi[i].nome} : ${messaggi[i].contenuto} </p> </div>`;
    }
}

btnInvia.addEventListener("click", creaNuovoMessaggio);

function controllaCaratteri(){
    let carRestanti = 100 - messaggio.value.length;

//charres è lo span dello HTML
    charRes.textContent = carRestanti;

    //per controllare che l'utente non superi i 100 caratteri
    if(carRestanti <= 0){
        let contenutoMsg = document.querySelector("#messaggio").value.substring(0, 100);

        messaggio.value = contenutoMsg;
        document.querySelector("#caratteriRestanti").textContent = 0;
    }
}

// messaggio è la mia textarea
messaggio.addEventListener("input", controllaCaratteri);
