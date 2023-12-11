const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

var div = "header";

button.addEventListener('click', function () {
  mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function () {
  if (this.window.scrollX> 0) return navbar.classList.add('active');
  return navbar.classList.remove('active');
});

function opacity(element){
  if(element === div){

  } else {
    const invisibleDiv = document.getElementById(div);
    invisibleDiv.classList.add("op")

    const newVisibleDiv = document.getElementById(element)
    newVisibleDiv.classList.remove("op")
    newVisibleDiv.style.display = ''

    div = newVisibleDiv.id
    console.log(div)
  }
}

window.addEventListener('DOMContentLoaded', function() {
  const div1 = document.querySelector('.navbar');
  const div2 = document.querySelector('.space');
  
  function atualizarAltura() {
      div1.style.height = `${div2.clientHeight}px`;
  }
  
  // Atualiza a altura da div1 sempre que a janela for redimensionada
  window.addEventListener('resize', atualizarAltura);
  
  // Chama a função inicialmente para garantir que div1 comece com o mesmo tamanho que div2
  atualizarAltura();
});


let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slide");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
        
    if (slideIndex > (slides.length - 1)) {
        slideIndex = 0;
    } else if(slideIndex === -1){
      slideIndex = 2
    }    
    console.log(slideIndex-1)

    slides[slideIndex].style.display = "block";
      
    
}

function mudarSlide(n) {
    slideIndex += n;
    showSlides();
}

function social(){
  const social_master = document.getElementById('social_master')
  social_master.classList.toggle('social_master')
}