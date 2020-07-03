var hamburger_clicked=0;

function hide_dropdown(first){
    console.log($(window).width());
    if ($(window).width()>990)
        return;
    if (first)
         $('#nav-dropdown').hide();//hide immediately
    $('#nav-dropdown').addClass("trans");
    setTimeout(function(){
        $('#nav-dropdown').hide();
    },400);
}
hide_dropdown(1);

(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                // 把hamburger變回來
                $('#hamburger_icon').removeClass("is-active");
                hamburger_clicked=0;
                hide_dropdown(0);
                $('html, body').animate({
                    scrollTop: (target.offset().top - 56)
                }, 1000, "easeInOutExpo");

            return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
        
    });
    $('#hamburger_icon').click(function() {
        if (hamburger_clicked==0) { 
            $('#hamburger_icon').addClass("is-active");
            hamburger_clicked=1;
            $('#nav-dropdown').show();
            $('#nav-dropdown').removeClass("trans");
            $('#mainNav').removeClass("navtop");
            $('#mainNav').addClass("navscrolled");
        }
        else{
            $('#hamburger_icon').removeClass("is-active");
            hamburger_clicked=0;
            $('#nav-dropdown').addClass("trans");
            setTimeout(function(){
                $('#nav-dropdown').hide();
            },400);
            var top = window.scrollY;
            if (top<=0) {
                $('#mainNav').addClass("navtop");
                $('#mainNav').removeClass("navscrolled");

            }
            
        }

    });
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 56
    });

})(jQuery); // End of use strict

window.addEventListener("scroll", function(event) {
        var top = this.scrollY,
            left =this.scrollX;
        if (hamburger_clicked==0 && top<=0) {//需要dropdown是關閉的
            $('#mainNav').addClass("navtop");
            $('#mainNav').removeClass("navscrolled");
            $('#to_top_icon').hide();
        }
        else{
            $('#mainNav').removeClass("navtop");
            $('#mainNav').addClass("navscrolled");
            $('#to_top_icon').show();
        }

}, false);
