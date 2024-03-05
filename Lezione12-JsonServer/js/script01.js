
let demo = document.querySelector("#demo")
const URLEndpoint = "http://localhost:3000/studenti";
let btnReg = document.querySelector("#btnReg")


fetch(URLEndpoint)
.then(data => { return data.json()})
.then(response =>{

    console.log(response);

    response.forEach(studente => {
        demo.innerHTML += `<li> ID: ${studente.id} - ${studente.nome} ${studente.cognome} </li>`
    });
});


btnReg.addEventListener("click", function(){
    let nomeStud = document.querySelector("#nomeStud").value;
    let cognomeStud = document.querySelector("#cognomeStud").value;

    
    if(nomeStud != "" && cognomeStud != ""){
        var nuovoStud = new Studente(nomeStud, cognomeStud);
    

/* let nuovoStud = {
    id: "4",
    nome: "Pasquale",
    cognome: "Gialli"
} */

fetch(URLEndpoint, {

    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
body: JSON.stringify(nuovoStud)
})
.then(data => {
    return data.json()
})
    }else{
        console.log("non hai inserito niente");
        event.preventDefault();
    }

})

class Studente{
    constructor(nome,cognome){
this.nome = nome;
this.cognome = cognome;
    }
}