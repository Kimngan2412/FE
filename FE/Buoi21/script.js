var next = document.querySelector('.nutchuyen .phai');
var slides = document.querySelectorAll('.slides ul li ');
slSlides = slides.length;
console.log(slSlides);
var chisohientai = 0 ;
// hàm vô danh
var moveSlidesRight = function(){
    var pthientai = slides[chisohientai];
    if(chisohientai < slSlides ){
        chisohientai = chisohientai +1;
    }
    else {
        chisohientai = 0;
    }
    var pttieptheo=slides[chisohientai];
    // console.log(pthientai);
    // console.log(pttieptheo);
    var ketThucAnSlide = function(){
        console.log('slide hiện tại đã ẩn rồi');
        this.classList.remove('active');
        this.classList.remove('anslideNext');
    }
    pthientai.addEventListener('webkitAnimationEnd',ketThucAnSlide);
    
    var ketThucHienSlide = function(){
        console.log('slide tiếp theo đã hiện ra');
        this.classList.add('active');
        this.classList.remove('hienslideNext');
    }
    pttieptheo.addEventListener('webkitAnimationEnd',ketThucHienSlide);
    pthientai.classList.add('anslideNext');
    pttieptheo.classList.add('hienslideNext');
}
next.addEventListener('click', moveSlidesRight);