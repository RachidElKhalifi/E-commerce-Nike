document.addEventListener("DOMContentLoaded", function () {

  const invia = document.querySelector("#boxModulo input:last-child");

  const buttonVerifDati = document.getElementById("buttonVerifDati");

  const campiInput = document.querySelectorAll("#boxModulo input");


// ciclo for per assegnare a tutti i campi input la classe false
  for (let i = 0; i < campiInput.length; i++) {
    const element = campiInput[i];
    console.log(element);
    element.classList.add("false");
  }
  invia.classList.remove("false"); //oglie la classe false all'ultimo input che è di tipo submit


// funzione che controlla che gli input siano compilati con la giusta quantità di caratteri
  function checkInput(idElemento, numCaratteri) {
    const input = document.getElementById(idElemento);
    input.addEventListener("input", function () {
      if (input.value.length >= numCaratteri) {
        input.classList.add("true");
        input.classList.remove("false");
      } else {
        input.classList.add("false");
        input.classList.remove("true");
        invia.classList.add("hidden");
      }
    
    });
  }

// richiamo della funzione checkInput
  checkInput("nome", 2);
  checkInput("cognome", 3);
  checkInput("indirizzo", 7);
  checkInput("cap", 5);
  checkInput("citta", 2);
  checkInput("paese", 3);
  checkInput("email", 9);
  checkInput("telefono", 10);

  buttonVerifDati.addEventListener("click", function (event) {
    event.preventDefault(); // Annulla l'evento predefinito
    console.log("invia");
    invia.classList.remove("hidden") //viene aggiunta questa classe
//  per poi esser tolta se la condizione sotto non è verificata
   for (let i = 0; i < campiInput.length; i++) {
      const element = campiInput[i];
      console.log(element);
      if (element.classList.contains("false")) {     //controlla se tutti gli input sono compilati e di conseguenza non hanno la classe false
        console.log("dato non verificato");
        invia.classList.add("hidden")
      }
      

    }
   
  })

})