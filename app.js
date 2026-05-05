const openBtn=document.getElementById("open-btn");
const closeBtn=document.getElementById("close-btn");
const modelcont=document.getElementById("main-cont");
openBtn.addEventListener('click', function(){
//   if(e.target===openBtn){
//     e.target.style.display= 'block';
//   }
    modelcont.style.display='block';
})
closeBtn.addEventListener("click",function(){
    modelcont.style.display= 'none';
})

window.addEventListener("click", function(e){
    if(e.target===modelcont)
    modelcont.style.display= 'none';
})