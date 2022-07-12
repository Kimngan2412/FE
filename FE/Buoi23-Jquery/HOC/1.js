// var abc = document.querySelector('h1');
// abc.classList.add('an'); 
$('h1').animate({ opacity: 0 });

$('.btn').click(function (e) { 
    e.preventDefault();
    $('.khoi').animate({marginLeft : 200})
});