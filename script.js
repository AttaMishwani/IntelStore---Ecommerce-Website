
const toggleBtn = document.getElementById("toggle-btn");


const menu = document.querySelector("#header .menu");

const header  = document.getElementById("header");


window.addEventListener("scroll", function() {


    if(this.window.scrollY > 50){
        header.classList.add("active");
    }else{
        header.classList.remove("active");
    
    }
})
// TOGGLE MENU
// OPEN TOGGLE MENU

toggleBtn.addEventListener("click", () => {
    menu.classList.add("active");
});




// CLOSE TOGGLE MENU


closeMenu = () =>{
    menu.classList.remove("active");
}


// single product page


let mainImg = document.getElementById("mainImg");
let spImg = document.getElementsByClassName("spImg");

spImg[0].onclick = function() {
    mainImg.src  = spImg[0].src;
}
spImg[1].onclick = function() {
    mainImg.src  = spImg[1].src;
}
spImg[2].onclick = function() {
    mainImg.src  = spImg[2].src;
}
spImg[3].onclick = function() {
    mainImg.src  = spImg[3].src;
}

