const URLEndpoint = "http://localhost:3000/rubrica";
let btnReg = document.querySelector("#btnReg").value;
let demo = document.querySelector("#demo").value;

fetch(URLEndpoint)
.then(data => { return data.json()})
.then(response =>{

    console.log(response);

    response.forEach(rubrica => {
        demo.innerHTML += `<li> ID: ${rubrica.id} - ${rubrica.nome} ${rubrica.cognome}</li>`
    });
});

btnReg.addEventListener("click", function(){


    
})


