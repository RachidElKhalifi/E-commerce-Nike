document.addEventListener("DOMContentLoaded", function () {

  //  gestiamo la scelta taglia della prima scarpa
  const boxSceltaTaglia = document.getElementById("boxSceltaTaglia");
  const buttonSceltaTaglia = document.getElementById("bottoneSceltaTaglia");

  const tagliaCarrello = document.getElementById("tagliaCarrello");
  const tagliaScelta = document.querySelectorAll("#buttonSceltaTaglia1 > li ul li h4");
  const buttonQuantita = document.querySelector("#boxQuantita button");

  const quantitaCarrello = document.getElementById("quantitaCarrello");
  const quantitaCarrello2 = document.getElementById("quantitaCarrello2");

  const quantitaScelta2 = document.querySelectorAll("#boxQuantita2 a");

  const InputQuantita = document.getElementById
    ("InputQuantita");

  const buttonOk = document.getElementById("buttonOk");

  const boxInputQuantita = document.getElementById("boxInputQuantita");

  const costoTotale = document.getElementById("costoTotale");
  const subTotale = document.getElementById("subTotale");

  const prezzoScarpa1 = parseFloat(document.getElementById("prezzoScarpa1").textContent);

  const prezzoScarpa2 = parseFloat(document.getElementById("prezzoScarpa2").textContent);

  const cestino1 = document.getElementById("cestino1");

  const cestino2 = document.getElementById("cestino2");
  const boxPrimaScarpa = document.getElementById("boxDescrizionePrimaScarpa");

  const boxSecondaScarpa = document.getElementById("boxDescrizioneSecondaScarpa");

  // subTotale.innerHTML = (prezzoScarpa2 + prezzoScarpa1) + " €";
  // costoTotale.innerHTML = (prezzoScarpa2 + prezzoScarpa1) + " €";


  // calcola il costo delle 2 scarpe
  costoTotale.innerHTML = ((prezzoScarpa1 * quantitaCarrello.innerHTML) + (prezzoScarpa2 * quantitaCarrello2.innerHTML)).toFixed(2) + " €";
  subTotale.innerHTML = ((prezzoScarpa1 * quantitaCarrello.innerHTML) + (prezzoScarpa2 * quantitaCarrello2.innerHTML)).toFixed(2) + " €";

  // gestiamo la selezione quantità con input del primo box scarpe e multiplichiamo il prezzo unitario per la quantità inserita
  buttonOk.onclick = function () {

    boxInputQuantita.classList.add("displayNone");
    costoTotale.innerHTML = ((prezzoScarpa1 * quantitaCarrello.innerHTML) + (prezzoScarpa2 * quantitaCarrello2.innerHTML)).toFixed(2) + " €";
    subTotale.innerHTML = ((prezzoScarpa1 * quantitaCarrello.innerHTML) + (prezzoScarpa2 * quantitaCarrello2.innerHTML)).toFixed(2) + " €";

    //           non funziona perchè inputQuantita.value risulta null!!!!! 

    //   const InputQuantita = parseInt (document.getElementById
    // ("InputQuantita").value);
    // quantitaCarrello.innerHTML = InputQuantita;
  };

  for (let i = 0; i < tagliaScelta.length; i++) {
    const element = tagliaScelta[i];
    element.onclick = function (event) {
      event.preventDefault()
      tagliaCarrello.innerHTML = tagliaScelta[i].innerHTML;
      boxSceltaTaglia.classList.add("displayNone");
    }
  }

  buttonSceltaTaglia.onclick = function () {
    boxSceltaTaglia.classList.remove("displayNone");
    boxSceltaTaglia.style.border = "1px solid red";
  };
  // gestiamo la scelta quantità e il costo totale

  buttonQuantita.onclick = function () {
    boxInputQuantita.classList.remove("displayNone");
  }
  // gestiamo la scelta quantità paia di scarpe del secondo box Modello Scarpe
  for (let i = 0; i < quantitaScelta2.length; i++) {
    const element = quantitaScelta2[i];
    element.onclick = function (event) {
      event.preventDefault()
      quantitaCarrello2.innerHTML = element.innerHTML
      boxInputQuantita2.classList.add("displayNone");


      // modifica il costo totale sulle modifiche applicate al box seconda scarpa
      if (boxSecondaScarpa.classList.contains("displayNone")) {
        subTotale.innerHTML = (prezzoScarpa1 * quantitaCarrello.innerHTML).toFixed(2) + " €";
        costoTotale.innerHTML = (prezzoScarpa1 * quantitaCarrello.innerHTML).toFixed(2) + " €";
      }
      else if (boxPrimaScarpa.classList.contains("displayNone")) {
        subTotale.innerHTML = (prezzoScarpa2 * quantitaCarrello2.innerHTML).toFixed(2) + " €";
        costoTotale.innerHTML = (prezzoScarpa2 * quantitaCarrello2.innerHTML).toFixed(2) + " €";

      }
      else {
        subTotale.innerHTML = ((prezzoScarpa1 * quantitaCarrello.innerHTML) + (prezzoScarpa2 * quantitaCarrello2.innerHTML)).toFixed(2) + " €";
        costoTotale.innerHTML = ((prezzoScarpa1 * quantitaCarrello.innerHTML) + (prezzoScarpa2 * quantitaCarrello2.innerHTML)).toFixed(2) + " €";

      }
    }
  }


  cestino1.addEventListener("click", function (event) {
    event.preventDefault()
    boxPrimaScarpa.classList.add("displayNone");

    costoTotale.innerHTML = (parseFloat(subTotale.textContent) - (prezzoScarpa1 * parseFloat(quantitaCarrello.textContent))).toFixed(2) + " €";//calcolo con risultato con soli 2 decimali

    subTotale.innerHTML = (parseFloat(subTotale.textContent) - (prezzoScarpa1 * parseFloat(quantitaCarrello.textContent))).toFixed(2) + " €";

  });

  cestino2.addEventListener("click", function (event) {
    event.preventDefault()
    boxSecondaScarpa.classList.add("displayNone");

    costoTotale.innerHTML = (parseFloat(subTotale.textContent) - (prezzoScarpa2 * parseFloat(quantitaCarrello2.textContent))).toFixed(2) + " €";//calcolo con risultato con soli 2 decimali

    subTotale.innerHTML = (parseFloat(subTotale.textContent) - (prezzoScarpa2 * parseFloat(quantitaCarrello2.textContent))).toFixed(2) + " €";

  });

  // gestiamo la scelta taglia della seconda scarpa
  const tagliaCarrello2 = document.getElementById("tagliaCarrello2");
  const tagliaScelta2 = document.querySelectorAll("#buttonSceltaTaglia2 > li ul li h4");
  for (let i = 0; i < tagliaScelta2.length; i++) {
    const element = tagliaScelta2[i];
    element.onclick = function (event) {
      event.preventDefault()
      tagliaCarrello2.innerHTML = tagliaScelta2[i].innerHTML;
    }
  }
  // gestiamo la scelta quantità della seconda scarpa
  const buttonQuantit2 = document.getElementById("buttonQuantit2");

  const boxInputQuantita2 = document.getElementById("boxInputQuantita2");


  const datoInputQuantita2 = document.querySelector("boxInpitQuantita2 input");

  buttonQuantit2.onclick = function () {
    boxInputQuantita2.classList.remove("displayNone");
  }

})