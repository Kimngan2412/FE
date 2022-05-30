var menu = document.querySelector('.menu')
window.addEventListener('scroll',function(){
    // console.log( window.pageYOffset);
    if( window.pageYOffset>50){
        // console.log('adđ hieu ung');
        menu.classList.add('codinhmenu');
    }
    else{
        menu.classList.remove('codinhmenu');
    }
})