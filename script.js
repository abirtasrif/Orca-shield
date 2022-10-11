"use strict";

/////////////////////////////////////////////////////////////
// Elements
/////////////////////////////////////////////////////////////

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnCloseModal = document.querySelector(".btn--close-modal");
const nav = document.querySelector(".nav");
const navLinks = document.querySelector(".nav_links");
const header = document.querySelector(".header");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const allSections = document.querySelectorAll(".section");
const section1 = document.querySelector("#section--1");
const tabsContainer = document.querySelector(".operations_tab-container");
const tabs = document.querySelectorAll(".operations_tab");
const tabsContent = document.querySelectorAll(".operations_content");
const cookieBody = document.querySelector(".cookie");
const cookieCloseBtn = document.querySelector(".cookie_close");
const imgTargets = document.querySelectorAll("img[data-src]");
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const btnLeft = document.querySelector(".slider_btn--left");
const btnRight = document.querySelector(".slider_btn--right");
const dotContainer = document.querySelector(".dots");
const toggleBtn = document.querySelector(".nav_toggle");

//Cookie
cookieCloseBtn.addEventListener("click", function(){
    cookieBody.classList.add("hidden");
    cookieBody.style.bottom="-12rem";
})

//navbar
const navHeight = nav.getBoundingClientRect().height;
function sticky(entires){
    const entry=entires[0];
    if(!entry.isIntersecting) nav.classList.add("sticky");
    else nav.classList.remove("sticky");
}

const headerObserver = new IntersectionObserver(sticky, {
    root: null,
    threshold:0,
    rootMargin:`-${navHeight}px`,
});

headerObserver.observe(header);

//reveal
function revealSection(entries, obeserver){
    const [entry] = entries;
    if(!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden");
    obeserver.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0,
});

allSections.forEach((section) =>{
    sectionObserver.observe(section);
    section.classList.add("section--hidden");
});

//floating window
function openModal(event){
    event.preventDefault();
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

function closeModal(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

btnsOpenModal.forEach(btn=>btn.addEventListener("click",openModal));
btnCloseModal.addEventListener("click",closeModal);
overlay.addEventListener("click",closeModal);
document.addEventListener("keydown", function(event){
    if(event.key==="Escape" && !modal.classList.contains("hidden")){
        closeModal();
    }
});

//smooth scrolling
navLinks.addEventListener("click",function(event){
    event.preventDefault();
    if(event.target.classList.contains("nav_link")){
       const attr= event.target.getAttribute("href");
       document.querySelector(attr).scrollIntoView({ behavior: "smooth"});
    }
})

//navbar toggle
toggleBtn.addEventListener("click",function(){
    if(navLinks.classList.contains("nav_open")){
        navLinks.classList.remove("nav_open");
        document.querySelector('html').style.overflow="visible";
    } else {
        navLinks.classList.add("nav_open");
        document.querySelector('html').style.overflow="hidden";
    }
});

navLinks.addEventListener("click", function(){
    navLinks.classList.contains("nav_open") &&
        navLinks.classList.remove("nav_open");
});