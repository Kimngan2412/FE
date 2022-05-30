Đặng Công Tùng
var td = document.getElementsByTagName('h4');
console.log(td[0].innerHTML);
var vd=document.querySelector('h4');
console.log(vd.innerHTML);
for (let i = 0; i < td.length; i++) {
    td[i].innerHTML = '<div class="btn btn-danger">Click</div>' 
}
var nd1=document.getElementById('nd1')
console.log(nd1.innerHTML);
var nd=document.getElementsByClassName('card-text')
console.log(nd.length);
var vd2=document.querySelectorAll('card-text')