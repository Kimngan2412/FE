var menu = document.querySelector('.menu');
var codinh = document.querySelector('.cd');
window.addEventListener('scroll', function(){
    if(window.pageYOffset>50){
        menu.classList.add('doimenu');
    }else{
        menu.classList.remove('doimenu');
    }
    if(window.pageYOffset > codinh.offsetTop){
        codinh.classList.add('codinh');
    }
    else{
        codinh.classList.remove('codinh');
    }
})

console.log(codinh.offsetTop)