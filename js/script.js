

let toggler = document.querySelector(".toggler-btn");

let toggleNav = document.querySelector(".toogle-nav");

    toggler.addEventListener("click", function(){
        if(toggleNav.style.display == "none"){
            toggleNav.style.display = "block"; 
        }else{
            toggleNav.style.display = "none";  
        }
    });