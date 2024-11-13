$(document).ready(function () {
    $(".product-action-vertical .btn-product-icon").click(function () {
        !$(this).hasClass("active") ? $(this).addClass("active") : $(this).removeClass("active");
    });


    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        dost: false,
        autoplay: false,
        items: 5,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        responsive: {
            0 : {items: 1},
            576 : {items: 2},
            768 : {items: 3},
            992 : {items: 4},
            1200 : {items: 5}
        }
    })
});


// 258         300