$('.nd').slideUp();
$('h3').click(function (e) {
    e.preventDefault();
    $('.nd').slideUp(); // an het may cai 
    $(this).next().slideDown(); // next cho noi dung ke tiep no
    // $(this).children().toggleClass('xoay');
    $(this).children().toggleClass('bxs-right-arrow');
    $(this).children().toggleClass('bxs-down-arrow');
});

$('.abc').addClass(className);
$(selector).removeClass(className);
$(c).toggleClass(className);
// $('.icon').animate({});