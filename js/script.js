/*
CONSEGNA:

Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal (ad esempio).
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
*/


/*
PSEUDOCODICE:

x leggere elementi del DOM che formano il carousel
x creare un array contenente le src delle 5 immagini fornite
x creo una variabile indice a 0
x inserire l'ìmmagine di partenza nel carousel
x creo n div quante sono le immagini (5) nell'array
x creo n img tag quante sono le immagini (5) nell'array
x inserire le immagini nella thumbnail sulla base delle src dell'array
x AL CLICK della freccia in basso 
    ? SE l'indice raggiunge l'ultima immagine disponibile nell'array
        ° V1: riparto da 0 ;
        ° V2: riassegno prima immagine;
    : ALTRIMNETI
        ° F1: aumento lìindice;
        ° F2: riassegno l'immagine del carousel sulla base della posizione indice;
x AL CLICK della freccia in alto 
    ? SE l'indice raggiunge l'ultima immagine disponibile nell'array
        ° V1: riparto da 0 ;
        ° V2: riassegno prima immagine;
    : ALTRIMNETI
        ° F1: diminuisco lìindice;
        ° F2: riassegno l'immagine del carousel sulla base della posizione indice;
    


*/

// CODE

// - leggere elementi del DOM che formano il carousel
const carouselImgEl = document.getElementById('carousel-img');
const arrowTopEl = document.getElementById('arrow-top');
const arrowBottomEl = document.getElementById('arrow-bottom');
const thumbContainerEl = document.getElementById('thumbnails-container');

// - creare un array contenente le src delle 5 immagini fornite
const imgSrcs = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];

// - creo una variabile indice
let index = 0;

// - inserire l'ìmmagine di partenza nel carousel
// parto da quella centrale per styling
carouselImgEl.src = imgSrcs[2];

for(let i=0; i<imgSrcs.length; i++){
    // - creo n div quante sono le immagini (5) nell'array
    const newThumbnailEl = document.createElement('div');
    thumbContainerEl.append(newThumbnailEl);
    newThumbnailEl.classList.add('thumbnail');
    
    // - creo n img tag quante sono le immagini (5) nell'array
    const newImgThumbEl = document.createElement('img');
    newThumbnailEl.append(newImgThumbEl);

    // - inserire le immagini nella thumbnail sulla base delle src dell'array
    newImgThumbEl.src = imgSrcs[index++];

}

// Azzero la variabile indice
// parto da quella centrale per styling
index = 2;

// Assegno variabile active all'immagine di partenza
const imgSelectedEl = document.querySelectorAll('.thumbnail img');
imgSelectedEl[index].classList.add('active');

// - AL CLICK della freccia in basso 
arrowBottomEl.addEventListener('click', function(){

    // ? SE l'indice raggiunge l'ultima immagine disponibile nell'array

    // aumento l'indice
    index++;

    if(index>imgSrcs.length-1){
        // azzero l'indice se ho raggiunto ultima posizione
        index=0;
        carouselImgEl.src = imgSrcs[index];
        imgSelectedEl[index].classList.add('active');
        imgSelectedEl[imgSrcs.length-1].classList.remove('active');
    } else {
        // vado avanti
        carouselImgEl.src = imgSrcs[index];
        imgSelectedEl[index].classList.add('active');
        imgSelectedEl[index-1].classList.remove('active');
    }


});



// - AL CLICK della freccia in alto 
arrowTopEl.addEventListener('click', function(){

    // ? SE l'indice raggiunge la prima immagine disponibile nell'array

    // diminuisco l'indice
    index--;


    if(index<0){
        // porto l'indice all'ultima posizione e vado indietro
        index=imgSrcs.length-1;
        carouselImgEl.src = imgSrcs[index];
        imgSelectedEl[index].classList.add('active');
        imgSelectedEl[0].classList.remove('active');
    } else {
        // vado indietro
        carouselImgEl.src = imgSrcs[index];
        imgSelectedEl[index].classList.add('active');
        imgSelectedEl[index+1].classList.remove('active');
    }



});
