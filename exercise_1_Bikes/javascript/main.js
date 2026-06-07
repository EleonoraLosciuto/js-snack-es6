
// Factory Function: makeBike
const makeBike = (name, weigthG) => ({
    name, weigthG
});

// Creazione array bikesList
const bikesList = [
    makeBike("Trek Emonda SLR 9", 6600),
    makeBike("Wilier Triestina Zero SLR", 6500),
    makeBike("Canyon Ultimate CFR", 6300),
    makeBike("Giant TCR Advanced SL 0", 6400),
    makeBike("Pinarello Dogma F", 6800),
    makeBike("Colnago V4Rs", 6800),
    makeBike("Specialized S-Works Tarmac SL8", 6600),
    makeBike("Cervélo S5", 7500),
    makeBike("Cannondale SuperSix EVO Lab71", 6800),
    makeBike("Specialized S-Works Aethos", 5900),
];

// Check in console dell'array bikesList
console.table(bikesList);

// Snack1:stampare a schermo la bici con peso minore

    // definisco variabili minWeigth e bikeMinorWeigth e le assegno inizialmente uguali al primo elemento dell'array [0]
    let minWeigth = bikesList[0].weigthG;
    let bikeMinorWeigth = bikesList[0].name;

    // ciclo for e condizione if per trovare la bici di minor peso e sostituire il valore delle due varaibili   
    for (let i = 1; i < bikesList.length; i++) // iterazione dell'array
        {
            if (bikesList[i].weigthG < minWeigth) {
                minWeigth =  bikesList[i].weigthG;
                bikeMinorWeigth = bikesList[i].name;
            }
        };

        console.log(minWeigth, bikeMinorWeigth);

    // mostro in pagina il risultato

    const mainElement = document.querySelector('main');

    // creo template string
    let html = `<div class = "result-card"> La bicicletta da corsa che pesa meno é ${bikeMinorWeigth} con un peso di ${
        (minWeigth/1000).toFixed(1)} Kg </div>`
        //controllo il mio html
        console.log(html)

mainElement.innerHTML += html;

    
    
    