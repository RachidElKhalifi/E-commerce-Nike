document.addEventListener("DOMContentLoaded", function () {

    // gestiamo la scelta del colore di scarpa da aggiungere al carrello per mostrarlo nel boxImgScarpa

    const ModelloScarpa = document.querySelectorAll("#boxDueModelliScarpa a");

    const miniFoto2 = document.querySelectorAll("#boxMiniFoto2 li");

    const miniFoto = document.querySelectorAll("#boxMiniFoto li");

    const box1 = document.querySelector("#boxMiniFoto");

    const box2 = document.querySelector("#boxMiniFoto2");

    const boxImgScarpaAggiunta = document.querySelector("#boximgScarpaAggiunta");

    const coloreScarpa = document.querySelector("#coloreScarpa");

    const h4Scarpa = document.querySelector("#h4ScarpaProdotti");

    for (let i = 0; i < ModelloScarpa.length; i++) {
        const element = ModelloScarpa[i];
        element.onclick = function () {

            imgScarpaZoom.innerHTML = element.innerHTML;
            coloreScarpa.innerHTML = "colore:";
            uomoDonna.innerHTML = "scarpa -"
            h4Scarpa.innerHTML = " scarpa -";

            if (i == 1) {
                box2.style.display = "none";
                box1.style.display = "block";
                coloreScarpa.innerHTML += " Black";
                uomoDonna.innerHTML += " uomo";
                h4Scarpa.innerHTML += " uomo";
                boxImgScarpaAggiunta.innerHTML = "<img src='MATERIALE-progetto-01-2024/Scarpa/4.jpg'>"
            }
            else {
                coloreScarpa.innerHTML = "colore:";
                uomoDonna.innerHTML = "scarpa -"
                h4Scarpa.innerHTML = " scarpa -";
                box1.style.display = "none";
                box2.style.display = "block"
                coloreScarpa.innerHTML += " Gold";
                uomoDonna.innerHTML += " donna"
                h4Scarpa.innerHTML += " donna";
                boxImgScarpaAggiunta.innerHTML = "<img src='MATERIALE-progetto-01-2024/Scarpa_2/6.jpg'>"

            }

        }
    }

    const imgScarpaZoom = document.querySelector("#boxImgZoom");

    for (let i = 0; i < miniFoto.length; i++) {
        miniFoto[i].addEventListener("click", function () {
            if (i < 9) {
                imgScarpaZoom.innerHTML = "<img src='MATERIALE-progetto-01-2024/Scarpa/" + (i + 1) + ".jpg'> <div id='frecceFotoScarpa'><nav class='floatRight'><ul><li class='frecceDiScorrimento'> <a href='#'> < </a></li><li class='frecceDiScorrimento'> <a href='#'> > </a> </li></ul></nav></div>";
            } else {
                imgScarpaZoom.innerHTML = "<video src=\"MATERIALE-progetto-01-2024/Scarpa/video.mp4\" muted autoplay></video><nav class='floatRight'><ul><li class='frecceDiScorrimento'> <a href='#'> < </a></li><li class='frecceDiScorrimento'> <a href='#'> > </a> </li></ul></nav></div>";
            }
        })
    }

    for (let i = 0; i < miniFoto2.length; i++) {
        miniFoto2[i].addEventListener("click", function () {
            if (i < 7) {
                imgScarpaZoom.innerHTML = "<img src='MATERIALE-progetto-01-2024/Scarpa_2/" + (i + 1) + ".jpg'> <div id='frecceFotoScarpa'><nav class='floatRight'><ul><li class='frecceDiScorrimento'> <a href='#'> < </a></li><li class='frecceDiScorrimento'> <a href='#'> > </a> </li></ul></nav></div>";
            }
            else {
                imgScarpaZoom.innerHTML = "<video src=\"MATERIALE-progetto-01-2024/Scarpa_2/video.mp4\" muted autoplay></video><nav class='floatRight'><ul><li class='frecceDiScorrimento'> <a href='#'> < </a></li><li class='frecceDiScorrimento'> <a href='#'> > </a> </li></ul></nav></div>";

            }
        })
    }

    // gestiamo il click aggiungi al carrello
    const linkSelezionaTaglia = document.getElementById("seleziona");

    const containerProdotti = document.getElementById("containerProdotti");

    const boxTaglie = document.getElementById("boxTaglie");

    const boxMiniFoto = document.getElementById("boxMiniFoto");

    const boxInSovraimpressione = document.getElementById("boxInSovraimpressione");

    const boxImgZoom = document.getElementById("boxImgZoom");

    const buttonAggiungi = document.querySelector("#aggiungi li");

    const boxDueModelliScarpa = document.getElementById("boxDueModelliScarpa");

    const nomeScarpaScelta = document.getElementById("nomeScarpaScelta");
    const uomoDonna = document.getElementById("uomoDonna");

    const taglia = document.getElementById("taglia");

    const prezzo = document.getElementById("prezzo");

    const boxTaglieDisponobili = document.querySelector("#boxTaglieDisponibili");

    const taglieDisponobili = document.querySelectorAll("#boxTaglieDisponibili a");


    for (let i = 0; i < taglieDisponobili.length; i++) {
        taglieDisponobili[i].onclick = function () {
            for (let j = 0; j < taglieDisponobili.length; j++) {
                taglieDisponobili[j].style.backgroundColor = "white";
                taglieDisponobili[j].style.color = "black";
            }


            taglia.innerHTML = "Taglia/Misura " + taglieDisponobili[i].innerHTML;
            taglieDisponobili[i].style.backgroundColor = "green";
        }

    }
    linkSelezionaTaglia.addEventListener("click", function () {
        boxTaglieDisponobili.style.display = "block"
    })

    buttonAggiungi.onclick = function () {

        boxInSovraimpressione.style.display = "block";
        boxInSovraimpressione.style.opacity = "1";

        boxImgZoom.style.opacity = "0.5";
        boxImgZoom.style.pointerEvents = "none";

        box1.style.opacity = "0.5";
        box1.style.pointerEvents = "none";

        boxTaglie.style.opacity = "0.05";
        boxTaglie.style.pointerEvents = "none";

        boxDueModelliScarpa.style.opacity = "0.5";
        boxDueModelliScarpa.style.pointerEvents = "none";

        box2.style.opacity = "0.5";
        box2.style.pointerEvents = "none";
    }

    const boxTaglia = document.querySelectorAll("#boxTaglieDisponibili a");
    const buttonExit = document.querySelector("#boxInSovraimpressione a");

    buttonExit.onclick = function () {

        boxInSovraimpressione.style.display = "none";

        boxImgZoom.style.opacity = "1";
        boxImgZoom.style.pointerEvents = "auto";

        box1.style.opacity = "1";
        box1.style.pointerEvents = "auto";

        boxTaglie.style.opacity = "1";
        boxTaglie.style.pointerEvents = "auto";

        boxDueModelliScarpa.style.opacity = "1";
        boxDueModelliScarpa.style.pointerEvents = "auto";

        box2.style.opacity = "1";
        box2.style.pointerEvents = "auto";


    }

})
