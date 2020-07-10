// Your code goes here

document.querySelectorAll("a").forEach(item => {
    item.addEventListener("mousemove", event => {
        event.target.style.color = "red";
        event.preventDefault();
    })
})

document.querySelector("h1").addEventListener("click", event => {
     event.target.style.color = "blue";
})

document.querySelector(".intro img").addEventListener("load", event => {
    event.target.style.border = "2rem solid black";
})

document.querySelector(".intro p").addEventListener("dblclick", event => {
    event.target.style.color = "purple";
})

document.querySelector("h2").addEventListener("mouseenter", event => {
    event.target.style.color = "silver";
})

document.querySelector(".text-content h2").addEventListener("mouseout", event => {
    event.target.style.color = "brown";
})

document.querySelector(".text-content p").addEventListener("mousedown", event => {
    event.target.style.color = "coral";
})

document.querySelector(".content-destination h2").addEventListener("mouseleave", event => {
    event.target.style.color = "pink";
})

document.querySelector(".content-destination p").addEventListener("mouseup", event => {
    event.target.style.color = "magenta";
})

document.querySelector(".footer p").addEventListener("mouseover", event => {
    event.target.style.color = "gold";
})

//bubbling

document.querySelector("a").addEventListener("click", event => {
    console.log(` ${event.target} a was clicked`);
})

document.querySelector("h1").addEventListener("click", event => {
    console.log(`${event.target} h1 was clicked`);
    event.stopPropagation();
})

//var tl = gsap.timeline();

gsap.to("a", {duration:0.1, opacity:0, scale: 0.3, stagger:0.25, ease:"back" });

gsap.to("img", {duration:2 , x: 1000, rotation:360});




