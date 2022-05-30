var icon = document.querySelector('.icon'),
    phanduoi = document.querySelector('.phanduoi');

icon.onclick = function(){
    icon.classList.toggle('icontrang');
    phanduoi.classList.toggle('active');

}