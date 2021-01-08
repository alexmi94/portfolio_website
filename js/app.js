document.addEventListener("DOMContentLoaded", () => {

    console.log("Load");

    let footer_p = document.querySelector("footer p");
    footer_p.innerHTML += "&copy; " + new Date().getFullYear() + " -  Alexandre Cance "

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