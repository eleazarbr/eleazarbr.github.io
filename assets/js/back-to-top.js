// ===== Scroll to Top ====
$(window).scroll(function() {
    // If page is scrolled more than 50px
    if ($(this).scrollTop() >= 50) {
        $('.go-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('.go-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('.go-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});
