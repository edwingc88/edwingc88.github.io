const images = document.querySelector(".images");
const imagesCollection = document.querySelectorAll(".imagen");
const prevBtn = document.querySelector(".prev");
const nextBtn  = document.querySelector(".next");


const navigation  = document.querySelectorAll(".menu_link");

const body  = document.querySelector("body");
const toggle  = document.querySelector("#toggle");
const inicio = document.querySelector("#inicio");
const h1= document.querySelectorAll("h1");

const h2= document.querySelectorAll("h2");

toggle.onclick = function(){
    toggle.classList.toggle("switch");
    body.classList.toggle("switch");
    inicio.classList.toggle("switch");
   // h1[0].classList.toggle("switch");
    for (const item of h1) {
        console.log(h1);
        console.log(item);
        h1[0].classList.toggle("switch");
    }

    for (const itemh2 of h2) {
        console.log(h2);
        console.log(itemh2);
        console.log(h2.length)
        for(i=0;i<h2.length;i++){
            h2[i].classList.toggle("switch");
        }
   
    }
 
}

function activarLink(){
    console.log("activo")
    navigation.forEach((item)=>{
        item.classList.remove('active')
        this.classList.add('active')
    }) 
}

navigation.forEach((item)=>{
    item.addEventListener('click', activarLink)
})


prevBtn.addEventListener("click",prevSlide);

nextBtn.addEventListener("click",nextSlide);

let widthImagen=imagesCollection[0].offsetWidth;

let index=0;

function prevSlide(){
    index--;
    console.log(index);
    moveCarousel();
}

function nextSlide(){
    index++;
    console.log(index);
    moveCarousel();
}

function moveCarousel(){
    widthImagen=imagesCollection[0].offsetWidth;

    if(index> imagesCollection.length -1){
     index=0;
    } else if(index<0){
        index= imagesCollection.length-1
    }
    images.style.transform = `translateX(-${index*widthImagen}px)`;
}




