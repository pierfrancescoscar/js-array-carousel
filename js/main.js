/**
 * JS CAROUSEL
 *
 * Dati tre array contenenti
 * una lista ordinata di 5 immagini e
 * una lista ordinata dei relativi 5 luoghi,
 * e una lista di 5 testi.
 * creare un carosello come nella foto alegata
 *
 * Al click dell'utente sulle frecce l'immagine attiva diventa
 * visibile in formato grande a sinistra e
 * nel suo angolo in basso a destra dovranno essere aggiunti i relativi titolo e il testo.
 * Aggiorniamo anche la thumbnail attiva.
 */

// Immagini
const imageCollection = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg',
];

// Titoli
const titleCollection = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise',
];

// Testi
const textCollection = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

// Ref
const imgs = document.querySelector('.images');
const thumbRef = document.querySelector('.thumbs');
let activeImg = 1;

// Cycle for imgs and text

for (let i = 0; i < imageCollection.length; i++) {
    imgs.innerHTML +=
    `<div class="image-container">
                <img src="${imageCollection[i]}" alt="${titleCollection[i]}">
                <div class="text">
                    <h3>${titleCollection[i]}</h3>
                    <p>${textCollection[i]}</p>
                </div>
            </div>`
        // Thumbs
    thumbRef.innerHTML +=
        `<div class="thumb">
        <img src="${imageCollection[i]}" alt="${titleCollection[i]}">
        </div>`
}



// Set "active" mode for imgs and thumbs

document.getElementsByClassName('image-container')[activeImg].classList.add('active');

document.getElementsByClassName('thumb')[activeImg].classList.add('active');

// Click event for next image

const next = document.querySelector('.next');

    next.addEventListener('click', function () {

    
    // Update img counter, loop for next and previous navigation
    if (activeImg === imageCollection.length - 1) {
        activeImg = 0;
    } else {
        activeImg++;
    }

    // Set "active image", but first reset his native active class
    document.querySelector('.image-container.active').classList.remove('active');
    // Set "active image" on the next (after click) img
    document.getElementsByClassName('image-container')[activeImg].classList.add('active');
    // Set "active thumb", but first reset his native active class
    document.querySelector('.thumb.active').classList.remove('active');
    // Set "active thumb" on the next (after click) thumb
    document.getElementsByClassName('thumb')[activeImg].classList.add('active');

})










