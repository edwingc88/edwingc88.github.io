const images = document.querySelector(".images");
const imagesCollection = document.querySelectorAll(".imagen");
const prevBtn = document.querySelector(".prev");
const nextBtn  = document.querySelector(".next");


//const textElement = document.querySelector("#quote");

//textElement.scrollIntoView({behavior:"smooth"});

prevBtn.addEventListener("click",prevSlide);

nextBtn.addEventListener("click",nextSlide);

let widthImagen=imagesCollection[0].offsetWidth;

let index=0
/*console.log("index ",index);*/


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
