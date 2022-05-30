var nut = document.getElementsByClassName('nut');
for (let i = 0; i < nut.length; i++) {
    nut[i].onclick = function(){
        console.log(this.getAttribute('data-mk'));
    }
}