let randomNumbers = document.getElementById('rNumbers');
let arrayNumb = [];
let numeriInseriti = []

for (i=0 ; i<6 ; i++){
    let generatoreNumeri = Math.floor(Math.random()*100);
    arrayNumb.push(generatoreNumeri);
}

randomNumbers.append(arrayNumb)



for(i=0 ; i<6 ; i++){

    let numeroInserito = prompt('Inserisci un Valore');
    numeriInseriti.push(numeroInserito);
    console.log(numeriInseriti);
}