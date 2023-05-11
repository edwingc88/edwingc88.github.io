const body  = document.querySelector("body");
const toggle = document.querySelector("#toggle-mode");
/*const main  = document.querySelector("#inicio");
const menu = document.querySelectorAll(".menu_link");

console.log(body)*/
toggle.onclick = function(){
    toggle.classList.toggle("switch");
    body.classList.toggle("switch");
}
/*
for(const element of menu) {
    element.addEventListener('click', ()=>{
        for(const elementDeleteClass of menu) {
            elementDeleteClass.classList.remove('activo')
        }    
        element.classList.add('activo');
    })
}*/

console.log("hello"); 