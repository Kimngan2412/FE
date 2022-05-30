var nut = document.getElementsByClassName('bieutuong'),
    noidung = document.getElementsByClassName('noidung')
for (let i = 0; i < nut.length; i++) {
    nut[i].onclick = function(){
        if (this.classList[1]=='doimauicon') {
            this.classList.remove('doimauicon');
            var ndhienthi = this.getAttribute('data-hieuung');
            var nd = document.getElementById(ndhienthi);
            nd.classList.remove('active');
        } else {
            for (let k = 0; k < nut.length; k++) {
                nut[k].classList.remove('doimauicon');
            }
            this.classList.toggle('doimauicon');

            var ndhienthi = this.getAttribute('data-hieuung');
            var nd = document.getElementById(ndhienthi);
            for (let j = 0; j < noidung.length; j++) {
                noidung[j].classList.remove('active'); 
            }
            nd.classList.toggle('active');
        }
    }   
}
