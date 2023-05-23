const body  = document.querySelector("body");
const toggle = document.querySelector("#toggle-mode");
const $a  = document.querySelectorAll(".main a");
const $p  = document.querySelectorAll(".main p");
const $h1Title= document.querySelector("#inicio > header > div.header_info > h1")
/*const menu = document.querySelectorAll(".menu_link");*/

console.log(body);
toggle.onclick = function(){
    toggle.classList.toggle("switch");
    body.classList.toggle("switch");
    $h1Title.classList.toggle("switch_title");
    for(const element of $a) {
        console.log(element); 
        element.classList.toggle("switch");
    }
    for(const element of $p) {
        console.log(element); 
        element.classList.toggle("switch");
    }
    
}
