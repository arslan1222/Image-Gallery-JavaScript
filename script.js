

let scroll = document.querySelector('.container');
let leftArrow = document.getElementById('left-arrow');
let rightArrow = document.getElementById('right-arrow');

scroll.addEventListener("wheel", (event) => {
    event.preventDefault();
    scroll.scrollLeft += event.deltaY;
    scroll.style.scrollBehavior = "auto";
});

leftArrow.addEventListener("click", () => {
    scroll.style.scrollBehavior = "smooth";
    scroll.scrollLeft -= 600;
});

rightArrow.addEventListener("click", () => {
    scroll.style.scrollBehavior = "smooth";
    scroll.scrollLeft += 600;
});