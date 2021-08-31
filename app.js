// Carne = 400g por pessoa (+6 horas = 650)
// Cerveja = 1200ml por pessoa (+6 horas = 2000ml)
// Refrigerante/agua = 1000ml por pessoa (+6 horas = 1500ml)
// Crianças valem a metade (0,5)

var currentSlide = 0;
var slides = document.querySelectorAll(".slide");
var spans = document.querySelectorAll(".balls > span");
var slideCount = slides.length;

const InputAdultos = document.querySelector("#adultos")
const InputCriancas = document.querySelector("#criancas")
const InputDuracao = document.querySelector("#duracao")
const resultado = document.querySelector("#resultado")

function calcular() {
    let adultos = InputAdultos.value
    let criancas = InputCriancas.value
    let duracao = InputDuracao.value

    let totalCarne = Carne(duracao) * adultos + (Carne(duracao) /2 )* criancas;  
    let totalCerveja = Cerveja(duracao) * adultos;
    let totalBebidas = Bebida(duracao) * adultos + (Bebida(duracao) /2) * criancas ; 
    resultado.innerHTML = `<p>${totalCarne / 1000}Kg de carne </p>`
    resultado.innerHTML += `<p>${Math.ceil(totalCerveja /355)} Latinha de Refrigerante</p>`
    resultado.innerHTML += `<p>${Math.ceil(totalBebidas / 2000)} Garrafas de Bebida</p>`
}

function Carne(tempo) {
    if(tempo >= 6) {
        return 650
    } else {
        return 400
    }
}

function Cerveja(tempo) {
    if(tempo >= 6) {
        return 2000
    } else {
        return 1200
    }
}

function Bebida(tempo) {
    if(tempo >= 6) {
        return 1500
    } else {
        return 1000
    }
}
function showSlide(index) {
    slides.forEach(function(slide) {
      slide.style.display = "none";
    });
    
    spans.forEach(function(span) {
      span.classList.remove("active-slide");
      span.addEventListener("click", function (event) {
          showSlide(event.target.getAttribute("data-index"));
      });
    });
  
    slides[index].style.display = "block";
    spans[index].classList.add("active-slide");
  }
  
  showSlide(currentSlide);
  
  setInterval(function () {
      currentSlide++;
    
    if (currentSlide >= slideCount) currentSlide = 0;
    
    showSlide(currentSlide);
  }, 3000);

