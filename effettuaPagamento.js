document.addEventListener("DOMContentLoaded", function () {

  //   gestiamo la scelta paese
const linkModificaPaese = document.getElementById("linkModificaPaese");

const elencoSecondoLivello = document.getElementById("elencoSecondoLivello");

const paesi = document.querySelectorAll("#elencoSecondoLivello li a");

const paese = document.getElementById("paese");

linkModificaPaese.onclick=function(){
elencoSecondoLivello.classList.remove("displayNone");
}
for (let i = 0; i < paesi.length; i++) {
    const element = paesi[i];

    element.onclick=function(){
        console.log(element.innerHTML);

        paese.innerHTML=element.innerHTML; 

        elencoSecondoLivello.classList.add("displayNone");
    }
}


// gestiamo i campi input e la checkbox
const invia = document.querySelector("#containerSxPagamento input:last-child");

const buttonVerifDati = document.getElementById("buttonVerifDati");

const campiInput = document.querySelectorAll("#containerDatiCarta input");

const boxCodPromo = document.getElementById("boxCodPromo");

const checkbox = document.querySelector("#boxPossiediUnaGift > input");

const inviaCodPromo = document.querySelector("#boxCodPromo button");

const inputValue = document.querySelector("#boxCodPromo input");

inviaCodPromo.onclick=function(){
  boxCodPromo.classList.add("hidden");
  checkbox.checked = false;
  inputValue.value="";  //svuota il contenitore input 
}

checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        console.log('Checkbox selezionata!');
        boxCodPromo.classList.remove("hidden");
    } else {
        console.log('Checkbox deselezionata.');
        boxCodPromo.classList.add("hidden");
      }
});

// ciclo for per assegnare a tutti i campi input la classe false
  for (let i = 0; i < campiInput.length; i++) {
    const element = campiInput[i];
    element.classList.add("false");
  }

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
checkInput("inputNumCarta",16);

checkInput("inputMeseAnnoCarta",5);

checkInput("inputCodCarta",3);


let checheddd=false;  //variabile di appoggio
const buttonRadio = document.querySelectorAll('input[type="radio"]'); //nodeList di tutti gli input di tipo radio
for (let i = 0; i < buttonRadio.length; i++) {
    const element = buttonRadio[i];
    
    element.addEventListener('change', function() {
        if (this.checked) {

    checheddd=true;
    carta.style.backgroundColor="white";
    payPal.style.backgroundColor="white";
    GPlay.style.backgroundColor="white";

        }
    
    });
}

const carta = document.getElementById("carta");
const payPal = document.getElementById("payPal");
const GPlay = document.getElementById("GPlay");

buttonVerifDati.addEventListener("click", function (event) {
    event.preventDefault(); // Annulla l'evento predefinito
    console.log("invia");
    invia.classList.remove("hidden")

   for (let i = 0; i < campiInput.length; i++) {
      const element = campiInput[i];
      console.log(element);
      if (element.classList.contains("false") || checheddd==false ) { //controlla se tutti gli input sono compilati e di conseguenza non hanno la classe false oppure la chek non checcata
        console.log("dato non verificato");
        invia.classList.add("hidden")
        carta.style.backgroundColor="red";
        payPal.style.backgroundColor="red";
        GPlay.style.backgroundColor="red";
      }

    }
   

  })




})