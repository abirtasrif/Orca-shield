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
const toggleBtn = document.querySelector(".nav_toggle");
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
    root: null, threshold:0,rootMargin:`-${navHeight}px`,
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