var nut = document.querySelector('.btn');
//     hinh = document.querySelector('.hinh');
// nut.onclick = function(){
//     hinh.classList.toggle('dichchuyen');
// }
nut.onclick = function(){
    console.log(this.getAttribute('data-hieuung'));
    var n1  = this.getAttribute('data-hieuung');
    var a = document.getElementById(n1);
    a.classList.toggle('dichchuyen');
}