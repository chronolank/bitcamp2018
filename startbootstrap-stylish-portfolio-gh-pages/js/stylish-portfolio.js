(function($) {
  "use strict"; // Start of use strict

  // Closes the sidebar menu
  $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });


  // Closes responsive menu when a scroll trigger link is clicked
  $('#sidebar-wrapper .js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

$("#startbtn").click(function (event) {
  event.preventDefault();
    $("#timerscreen").show();
    $("#startscreen").hide();
    var timeleft = 4;

    /*var downloadTimer = setInterval(function(){
    
    console.log(timeleft);
    $("#countdowntimer").html(timeleft);
    //document.getElementById("countdowntimer").textContent = timeleft;
    if(timeleft <= 0)
        clearInterval(downloadTimer);
    timeleft--;
    },1000);*/  

    function f()
    {
      timeleft--;
      console.log(timeleft);
      $("#countdowntimer").html(timeleft);
      setTimeout(function(){
       if(timeleft > 1)
       { 
        f();
       }
       else if(timeleft==1)
      {
        $("#countdowntimer").hide();
      }
      },1000);
      
    }
    
    f();

    
});


})(jQuery); // End of use strict


var numberOfSongs = 3;
var sound = new Array(numberOfSongs)
sound[0]= "music/ChibiNinja.mp3";
sound[1]= "music/Arpanauts.mp3";
sound[2]= "music/AllofUs.mp3";
function randomNumber()
{
  var randomLooper = -1
  while (randomLooper < 0 || randomLooper > numberOfSongs || isNaN(randomLooper))
  { 
    randomLooper = parseInt(Math.random()*(numberOfSongs));
  }
  return randomLooper;
}
var randomAudio=$("#random3");
$("#random3").attr("src", sound[randomNumber()]);
randomAudio[0].play();

var randomsub = randomNumber()

var soundFile = sound[randomsub]
document.write ('<EMBED src= "' + soundFile + '" hidden=true autostart=true loop=true>');

// Disable Google Maps scrolling
// See http://stackoverflow.com/a/25904582/1607849
// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function(event) {
  var that = $(this);
  that.on('click', onMapClickHandler);
  that.off('mouseleave', onMapMouseleaveHandler);
  that.find('iframe').css("pointer-events", "none");
}
var onMapClickHandler = function(event) {
  var that = $(this);
  // Disable the click handler until the user leaves the map area
  that.off('click', onMapClickHandler);
  // Enable scrolling zoom
  that.find('iframe').css("pointer-events", "auto");
  // Handle the mouse leave event
  that.on('mouseleave', onMapMouseleaveHandler);
}
// Enable map zooming with mouse scroll when the user clicks the map
$('.map').on('click', onMapClickHandler);

