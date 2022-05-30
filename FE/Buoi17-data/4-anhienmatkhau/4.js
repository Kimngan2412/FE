var eyeOpen=document.querySelector('.eye-open');
var eyeClose=document.querySelector('.eye-close');
var input =document.querySelector('input');
eyeClose.classList.remove('fa-eye-slash');//ẩn đối tượng close
eyeOpen.onclick=function(){
    // console.log('ok');
    this.classList.remove('fa-eye');
    eyeClose.classList.add('fa-eye-slash');
    input.setAttribute("type","text"); 
}
eyeClose.onclick=function(){
    // console.log('ok');
    this.classList.add('fa-eye');
    eyeClose.classList.remove('fa-eye-slash');  
    input.setAttribute("type","password");
} 