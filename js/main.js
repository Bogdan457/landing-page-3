function ClearFields() {
     document.getElementById("textarea").value = "";
     document.getElementById("input").value = "";
     document.getElementById("input1").value = "";
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


  // коробочка с меню навигация
var nav = document.querySelector("#nav");
// коробочка с иконкой меню 
var burger = document.querySelector("#menu");
// функция показывающая меню хедера при клике (адаптивная вёрстка)
function changeSize() {
  nav.style.display = "block";
  burger.style.display = "none";
}
// функция скрывающая меню хедера при клике (адаптивная вёрстка)
function backSize() {
  nav.style.display = "none";
  burger.style.display = "block";
}
 $(document).ready(function(){
  $("#nav").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });
});
