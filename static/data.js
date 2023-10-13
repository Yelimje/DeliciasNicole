const myCarouselElement = document.querySelector('#carouselExampleAutoplaying')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 5000,
  touch: true
})