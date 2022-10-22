"use strict";const modal=document.querySelector(".modal"),overlay=document.querySelector(".overlay"),btnsOpenModal=document.querySelectorAll(".btn--show-modal"),btnCloseModal=document.querySelector(".btn--close-modal"),nav=document.querySelector(".nav"),navLinks=document.querySelector(".nav_links"),header=document.querySelector(".header"),btnScrollTo=document.querySelector(".btn--scroll-to"),allSections=document.querySelectorAll(".section"),section1=document.querySelector("#section--1"),tabsContainer=document.querySelector(".operations_tab-container"),tabs=document.querySelectorAll(".operations_tab"),tabsContent=document.querySelectorAll(".operations_content"),cookieBody=document.querySelector(".cookie"),cookieCloseBtn=document.querySelector(".cookie_close"),imgTargets=document.querySelectorAll("img[data-src]"),slides=document.querySelectorAll(".slide"),slider=document.querySelector(".slider"),btnLeft=document.querySelector(".slider_btn--left"),btnRight=document.querySelector(".slider_btn--right"),dotContainer=document.querySelector(".dots"),toggleBtn=document.querySelector(".nav_toggle");cookieCloseBtn.addEventListener("click",(function(){cookieBody.classList.add("hidden"),cookieBody.style.bottom="-12rem"}));const navHeight=nav.getBoundingClientRect().height;function sticky(e){e[0].isIntersecting?nav.classList.remove("sticky"):nav.classList.add("sticky")}const headerObserver=new IntersectionObserver(sticky,{root:null,threshold:0,rootMargin:`-${navHeight}px`});function revealSection(e,t){const[o]=e;o.isIntersecting&&(o.target.classList.remove("section--hidden"),t.unobserve(o.target))}headerObserver.observe(header);const sectionObserver=new IntersectionObserver(revealSection,{root:null,threshold:0});function openModal(e){e.preventDefault(),modal.classList.remove("hidden"),overlay.classList.remove("hidden")}function closeModal(){modal.classList.add("hidden"),overlay.classList.add("hidden")}allSections.forEach((e=>{sectionObserver.observe(e),e.classList.add("section--hidden")})),btnsOpenModal.forEach((e=>e.addEventListener("click",openModal))),btnCloseModal.addEventListener("click",closeModal),overlay.addEventListener("click",closeModal),document.addEventListener("keydown",(function(e){"Escape"!==e.key||modal.classList.contains("hidden")||closeModal()})),navLinks.addEventListener("click",(function(e){if(e.preventDefault(),e.target.classList.contains("nav_link")){const t=e.target.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth"})}})),toggleBtn.addEventListener("click",(function(){navLinks.classList.contains("nav_open")?(navLinks.classList.remove("nav_open"),document.querySelector("html").style.overflow="visible"):(navLinks.classList.add("nav_open"),document.querySelector("html").style.overflow="hidden")})),navLinks.addEventListener("click",(function(){navLinks.classList.contains("nav_open")&&navLinks.classList.remove("nav_open"),document.querySelector("html").style.overflow="visible"})),btnScrollTo.addEventListener("click",(function(){section1.scrollIntoView({behavior:"smooth"})}));const loadImage=function(e,t){const o=e[0];o.isIntersecting&&(o.target.src=o.target.dataset.src,o.target.addEventListener("load",(function(){o.target.classList.remove("lazy-img")})))},imageObserver=new IntersectionObserver(loadImage,{root:null,threshold:0,rootMargin:"250px"});imgTargets.forEach((e=>imageObserver.observe(e)));let currentSlide=0;const maxSlide=slides.length-1;function creatingDots(){slides.forEach(((e,t)=>{const o=`<button class="dots_dot" data-slide="${t}"></button>`;dotContainer.insertAdjacentHTML("beforeend",o)}))}function activateDots(e){document.querySelectorAll(".dots_dot").forEach((e=>e.classList.remove("dots_dot--active"))),document.querySelector(`.dots_dot[data-slide="${e}"]`).classList.add("dots_dot--active")}function updateSlide(e){slides.forEach(((t,o)=>t.style.transform=`translateX(${100*(o-e)}%)`))}function previousSlide(){0===currentSlide?currentSlide=maxSlide:currentSlide--,updateSlide(currentSlide),activateDots(currentSlide)}function nextSlide(){currentSlide===maxSlide?currentSlide=0:currentSlide++,updateSlide(currentSlide),activateDots(currentSlide)}creatingDots(),activateDots(0),updateSlide(0),dotContainer.addEventListener("click",(function(e){e.target.classList.contains("dots_dot")&&(activateDots(e.target.dataset.slide),updateSlide(e.target.dataset.slide))})),btnLeft.addEventListener("click",previousSlide),btnRight.addEventListener("click",nextSlide),document.addEventListener("keydown",(e=>{"ArrowLeft"===e.key&&previousSlide(),"ArrowRight"===e.key&&nextSlide()})),tabsContainer.addEventListener("click",(function(e){const t=e.target.closest(".operations_tab");t&&(tabs.forEach((e=>e.classList.remove("operations_tab--active"))),tabsContent.forEach((e=>e.classList.remove("operations_content--active"))),t.classList.add("operations_tab--active"),document.querySelector(`.operations_content--${t.dataset.tab}`).classList.add("operations_content--active"))}));
//# sourceMappingURL=index.224253b9.js.map