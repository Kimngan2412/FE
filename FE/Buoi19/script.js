var nutchuyen = document.querySelectorAll('.nutchuyen ul li');

for (let i = 0; i < nutchuyen.length; i++) {
    nutchuyen[i].onclick = function(){
        for (let k = 0; k < nutchuyen.length; k++) {
            nutchuyen[k].classList.remove('active');     
        }
        this.classList.add('active');
        console.log(this.previousElementSibling);
    }

        // var nutactive=this;
        // var vt=0;
        // for (vt = 0; nutactive=nutactive.previousElementSibling; vt++) {
        //     console.log('bien i'+1);
                               
        // }
    
}