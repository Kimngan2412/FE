var nut = document.getElementsByClassName('nut');
nut[1].classList.remove('btn-info');
nut[1].classList.add('btn-warning');
nut[0].classList.toggle('btn-info');
nut[0].classList.toggle('btn-danger');
nut[2].classList.add('kt');
nut[0].onclick=function(){
    this.classList.toggle('doimau');
    nut[2].classList.toggle('kt');
    nut[2].classList.toggle('dichchuyen');

}
