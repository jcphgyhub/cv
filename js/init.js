//Inicia función para efecto parallax
(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

//Funcion para slider
$(document).ready(function(){
  $('.slider').slider();
});


//Funcion para tabs
$(document).ready(function(){
    $('ul.tabs').tabs();
  });

//Fincion para accordion
$('.collapsible').collapsible({
    accordion: false, // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    onOpen: function(el) { /*alert('Open');*/ }, // Callback for Collapsible open
    onClose: function(el) { /*alert('Closed');*/ } // Callback for Collapsible close
  });

  //Función para carrucel de imagenes
$('.carousel.carousel-slider').carousel({fullWidth: true});
