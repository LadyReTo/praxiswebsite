// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs

    
////////// sorgt dafür, dass im Menü erkennbar ist, wo man sich befindet
$(document).ready(function() {
    $("[href]").each(function() {
    if ((this.href == window.location.href)) {
      if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) != "index.html") {
        $(this).addClass("active");
        }
      }
    });
});




///////UI Effekt auf der Kontakt Seite
$( "button" ).click(function() {
  $( ".fassade" ).show( "fold", 1000 );
  $("button").hide();
});




////Slider-Anpassungen
$(document).foundation({
  orbit: {
      animation: 'slide', // Sets the type of animation used for transitioning between slides, can also be 'fade'
      timer_speed: 5000, // Sets the amount of time in milliseconds before transitioning a slide
      pause_on_hover: false, // Pauses on the current slide while hovering
      resume_on_mouseout: false, // If pause on hover is set to true, this setting resumes playback after mousing out of slide
      next_on_click: false, // Advance to next slide on click
      animation_speed: 500, // Sets the amount of time in milliseconds the transition between slides will last
      stack_on_small: false,
      navigation_arrows: true,
      slide_number: false,
      slide_number_text: 'von',
  }
});




//// sorgt dafür, dass der sticky footer keine Probleme macht 
$(window).bind("load", function () {
    var sticky_footer = $("#sticky_footer");
    var pos = sticky_footer.position();
    var height = $(window).height();
    height = height - pos.top;
    height = height - sticky_footer.height();
    if (height > 0) {
        sticky_footer.css({
            'margin-top': height + 'px'
        });
    }
});