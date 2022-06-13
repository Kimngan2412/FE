var nutchuyen=document.querySelectorAll('.nutchuyen ul li');
var slides = document.querySelectorAll('.ndslide ul li');

for (let i = 0; i < nutchuyen.length; i++) {
    nutchuyen[i].onclick=function(){
    for (let k = 0; k < nutchuyen.length; k++) {
        nutchuyen[k].classList.remove('active');
    }
        this.classList.add('active');  
        // console.log(this.previousElementSibling);
        var nutactive=this;
        var vt=0;
        for (vt = 0; nutactive=nutactive.previousElementSibling; vt++) { }
        // console.log(vt);
        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active');
            slides[vt].classList.add('active');         
         }
        
    }
}

autoSlide();
function autoSlide(){
    var thoigian = setInterval(function(){
    var vtslide = 0;
    var slidehientai=document.querySelector('.ndslide ul li.active');
    for (var vtslide = 0; slidehientai=slidehientai.previousElementSibling; vtslide++) {   }
    if(vtslide<(slides.length-1)){
        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active');
            nutchuyen[i].classList.remove('active');
        }
        slides[vtslide].nextElementSibling.classList.add('active');	
        nutchuyen[vtslide].nextElementSibling.classList.add('active');
    }
    },6000);
}