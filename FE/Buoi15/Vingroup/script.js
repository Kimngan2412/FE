var menu = document.querySelector('.menu'),
    nut = document.querySelector('.bx-menu'),
    banner1 = document.querySelector('.banner1'),
    nutdn = document.querySelector('.nutdn'),
    formdn = document.querySelector('.formdn'),
    nutok = document.querySelector('.nutok');

nut.onclick = function(){
    menu.classList.toggle('doimau');
    banner1.classList.toggle('active');
}
nutdn.onclick = function()
{
    formdn.classList.add('hienform');
}
nutok.onclick = function(){
    formdn.classList.remove('hienform');
}