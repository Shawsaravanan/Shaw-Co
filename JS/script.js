/*======================
Hide preloader
========================*/
$(window).on('load', function () { //makes sure whole site is loaded
    $("#status").fadeOut();
    $("#preloader").delay(350).fadeOut('slow');
});
/*
Social profie
*/
$(document).ready(function () {
    $("#platform").owlCarousel({
        items: 2, // Changed 'item' to 'items'
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
    });
});

/*
Progress bars
*/
$(document).ready(function () {
    $("#progress-element").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });

});



























