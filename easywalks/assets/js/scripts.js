$(document).ready(function() {
    
    /* Scroll on buttons */
    $('.js--scroll-to-about').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-about').offset().top}, 1000);  
    });

    $('.js--scroll-to-tours').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-tours').offset().top}, 1000);   
    });

    $('.js--scroll-to-testimonials').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-testimonials').offset().top}, 1000);  
    });
    
     $('.js--scroll-to-contact').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 1000);   
    });
      
});