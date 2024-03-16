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
            }, 3000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});

$('#start-button a').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 2000, function () {
            window.location.hash = hash;
        });
    }
});

function sendEmail() {
    var email = document.getElementById("email").value;
    var from_name = document.getElementById("name").value;
    var message = document.getElementById("message").value;

    var templateParams = {
        email: email,
        to_name: from_name,
        message: message
    };

    emailjs.send('service_sn985lk', 'template_ctxj18o', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            // Show the popup on successful submission
            document.getElementById("popup").style.display = "block";
            // Reset form fields
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        })
        .catch(function (error) {
            console.error('FAILED...', error);
            // Handle error
        });
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
