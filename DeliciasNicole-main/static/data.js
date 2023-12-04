
//Textos de la parte de Informacion

console.log('Hola')

let recorrido_text = "<p class='green mb-0'>Nuestro recorrido</p><div class='mb-3'><span class='green-2'><h1 style='font-weight: 700;'>E</h1></span><h1 style='font-weight: 700;'>xperiencia</h1></div><p class='texto'>Cada bocado te transporta a un mundo lleno de sabores dulces y deliciosos que nunca querrás dejar de probar.. Cada bocado te transporta a un mundo lleno de sabores dulces y deliciosos que nunca</p>"
let soporte_text = "<p class='green mb-0'>Soporte para sus fiestas</p><div class='mb-3'><span class='green-2'><h1 style='font-weight: 700;'>E</h1></span><h1 style='font-weight: 700;'>ventos</h1></div><p class='texto'>Cada bocado te transporta a un mundo lleno de sabores dulces y deliciosos que nunca querrás dejar de probar..Cada bocado te transporta a un mundo lleno de sabores dulces y deliciosos que nunca</p>"
let calidad_text = "<p class='green mb-0'>Nuestra calidad</p><div class='mb-3'><span class='green-2'><h1 style='font-weight: 700;'>I</h1></span><h1 style='font-weight: 700;'>ngredientes</h1></div><p class='texto'>Cada bocado te transporta a un mundo lleno de sabores dulces y deliciosos que nunca querrás dejar de probar..Cada bocado te transporta a un mundo lleno de sabores dulces y deliciosos que nunca</p>"

document.getElementById('recorrido-text').innerHTML = recorrido_text;
document.getElementById('recorrido-text2').innerHTML = recorrido_text;

document.getElementById('soporte-text').innerHTML = soporte_text;
document.getElementById('soporte-text2').innerHTML = soporte_text;

document.getElementById('calidad-text').innerHTML = calidad_text;
document.getElementById('calidad-text2').innerHTML = calidad_text;


//Textos de las Reseñas

let card1 = `<img class="woman mt-3" src="static/images/woman-1.png" alt="">
            <div class="card-body  pt-3 ps-1 pe-0 pb-0">
            <h5 class="card-title">María P.</h5>
            <h6 class="card-subtitle mt-1 mb-4">Ordenó caramelos de cianuro</h6>
            <p class="texto me-3 mb-3 pb-5">Me gustó porque sabía a caramelos y el toque de cianuro era para morirse. Se los recomendaré a todos mis familiares, lo mejor que he probado.</p>
            </div>`
            
let card2 = `<img class="woman mt-3" src="static/images/woman-2.png" alt="">
            <div class="card-body pt-3 ps-1 pe-0 pb-0">
            <h5 class="card-title">María P.</h5>
            <h6 class="card-subtitle mt-1 mb-4">Ordenó chicharrón</h6>
            <p class="texto me-3 mb-3 pb-5">Demasiado bueno, siempre voy a preferirlos. Desde la primera vez que lo probé quede encantada, la pido cada año en diciembre para comer chicharron en familia.</p>
            </div>`
            
let card3 = `<img class="woman mt-3" src="static/images/woman-1.png" alt="">
            <div class="card-body pt-3 ps-1 pe-0 pb-0">
            <h5 class="card-title">María P.</h5>
            <h6 class="card-subtitle mt-1 mb-4">Ordenó puré de papa</h6>
            <p class="texto me-3 mb-3 pb-5">Mejor que el puré de manzanas y el de pera, no hay igual. Puré es una palabra graciosa si la dices varias veces, bueno chao.</p>
            </div>`
            
let card4 = `<img class="woman mt-3" src="static/images/woman-2.png" alt="">
            <div class="card-body pt-3 ps-1 pe-0 pb-0">
            <h5 class="card-title">María P.</h5>
            <h6 class="card-subtitle mt-1 mb-4">Ordenó camarones con queso</h6>
            <p class="texto me-3 mb-3 pb-5">Excelente combinación, lo pido en cada oportunidad que tengo para mi, mis sobrinos y mis nietos... Todos quedan encantados.</p>
            </div>`

document.getElementById('card-1').innerHTML = card1;
document.getElementById('card-2').innerHTML = card2;
document.getElementById('card-3').innerHTML = card3;
document.getElementById('card-4').innerHTML = card4;

document.getElementById('card-5').innerHTML = card1;
document.getElementById('card-6').innerHTML = card2;
document.getElementById('card-7').innerHTML = card3;
document.getElementById('card-8').innerHTML = card4;

function openimg(){

}

// const myCarouselElement = document.querySelector('#carouselExampleAutoplaying')

// const carousel = new bootstrap.Carousel(myCarouselElement, {
//   interval: 5000,
//   touch: true
// });
