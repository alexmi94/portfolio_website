document.addEventListener("DOMContentLoaded", () => {

    console.log("Load");

    let img = document.querySelector("ul li img");


    let button = document.querySelector("ul li img");
    let html = document.querySelector("html");

    img.addEventListener("click", e => {
        console.log("click");
        html.classList.toggle("color_access");
        button.classList.toggle("color_access_title");
        e.stopPropagation();
    });

});