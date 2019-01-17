$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#stage');
   var offset = startchange.offset();

   if (startchange.length){
     $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
            $('.navbar').css('background-color', '#30303A');
            $('.navbar-toggle').css('background-color', '#30303A');
         } else {
            $('.navbar').css('background-color', 'transparent');
            $('.navbar-toggle').css('background-color', 'transparent');
         }
     });
    }
});

var $root = $('html, body');
$('.navbar-nav a').click(function() {
  var href = $.attr(this, 'href');
  if (href != undefined && href != '#') {
  $root.animate({
    scrollTop: $(href).offset().top
  }, 500, function () {
    window.location.hash = href;
  });
  }
  return false;
});

  // Caption On Hover
  $('.portfolio-caption-container').mouseenter(function() {
    $('.portfolio-caption-title', this).show();
  }).mouseleave(function() {
    $('.portfolio-caption-title', this).hide();
  });

  // Future Tests
  /* $(window).resize(function () {
    var screenHeight = $(window).height();
    $("#home").css("height", screenHeight);
  });
  var screenHeight = $(window).height();
  $("#home").css("height", screenHeight); */

// Google Maps API
function initMap() {
  // Berlin LatLng
  var myLatLng = {lat: 52.5065133, lng: 13.1445545};
  var map = new google.maps.Map(document.getElementById('google-maps'), {
    center: myLatLng,
    zoom: 10
  });

  var myFirstMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    label: 'RS',
    title: 'Hello, Career Foundry!'
  });
}
