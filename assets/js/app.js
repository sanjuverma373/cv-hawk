let a = document.getElementById("nav-bar");
let flow = document.querySelector(".sec-flow");
let cross4 = document.querySelector(".cross-4");
let cross5 = document.querySelector(".cross-5");
let cross6 = document.querySelector(".cross-6");
let menuIcon = document.querySelector("#menuIcon");
let home = document.querySelector(".home");
let about = document.querySelector(".about");
let services = document.querySelector(".services");
let pricing = document.querySelector(".pricing");
let faq = document.querySelector(".faq");
let login = document.querySelector(".faq");

menuIcon.addEventListener("click", function () {
    if (a.classList !== document.querySelector("fix-lft")) {
        a.classList.toggle("fix-lft");
        flow.classList.toggle("flow-hidden");
        cross4.classList.toggle("cross-1");
        cross5.classList.toggle("cross-2");
        cross6.classList.toggle("cross-3")
    }
});

home.addEventListener("click", function () {
    a.classList.toggle("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});
about.addEventListener("click", function () {
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});
services.addEventListener("click", function () {
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});
pricing.addEventListener("click", function () {
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});
faq.addEventListener("click", function () {
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});

