$(window).scroll(function () {
    // console.log( $(this).scrollTop());
    if ($(this).scrollTop() > 150) {
        $('.menu').addClass('doimenu');
        $('.nut').addClass('hienTop');
    }
    else {
        $('.menu').removeClass('doimenu');
        $('.nut').removeClass('hienTop');

    }
});
$('.menu a:nth-child(2)').click(function (e) {
    e.preventDefault();
    $('html,body').animate({ scrollTop: $('.phan1').offset().top - 40 }, 1000);


});
// console.log($('.phan1').offset().top);
$('.menu a:nth-child(3)').click(function (e) {
    e.preventDefault();
    $('html,body').animate({ scrollTop: $('.phan2').offset().top - 40 }, 1000);
}); 
$('.nut').click(function (e) {
    e.preventDefault();
    $('html,body').animate({ scrollTop:0}, 1000);
}); 

$('.nutclose').click(function (e) { 
    e.preventDefault();
    $('.popup').addClass('anpopup');
});

// tự động ẩn popup
var tb = setInterval(function () {
    $('.popup').addClass('anpopup');
    clearInterval(tb)

    
}, 4000);