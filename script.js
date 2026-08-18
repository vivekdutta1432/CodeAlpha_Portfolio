// Navbar Background

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        navbar.classList.add("active");

    } else {

        navbar.classList.remove("active");

    }

});

// Scroll Progress Bar

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (window.pageYOffset / totalHeight) * 100;

    document.getElementById("progressBar").style.width =
        progress + "%";

});

// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.onclick = () => {

    navLinks.classList.toggle("active");

};

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.onclick = () => {

        navLinks.classList.remove("active");

    }

});

/* ========= Typing Animation ========= */

const words = [

    "AI & ML Student",

    "Full Stack Developer",

    "Quick Learner",

    "Problem Solver"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.querySelector(".typing");

function typeEffect(){

    const current = words[wordIndex];

    if(!deleting){

        typing.textContent = current.substring(0,charIndex++);

        if(charIndex > current.length){

            deleting = true;

            setTimeout(typeEffect,1200);

            return;

        }

    }

    else{

        typing.textContent = current.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting?60:120);

}

typeEffect();

/* ============================
Scroll Reveal
============================ */

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    reveals.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if(top < windowHeight - 100){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();

/* ============================
Progress Bar Animation
============================ */

const bars = document.querySelectorAll(".progress-bar");

function animateBars(){

    bars.forEach(bar=>{

        const top = bar.getBoundingClientRect().top;

        if(top < window.innerHeight-50){

            bar.style.width = bar.dataset.width;

        }

    });

}

window.addEventListener("scroll", animateBars);

animateBars();

/* ===========================
COUNTER ANIMATION
=========================== */

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function startCounters(){

if(counterStarted) return;

const section = document.querySelector(".stats");

if(section.getBoundingClientRect().top < window.innerHeight-100){

counterStarted = true;

counters.forEach(counter=>{

const target = +counter.dataset.target;

let count = 0;

const speed = target/100;

const update=()=>{

count += speed;

if(count < target){

counter.innerText = Math.floor(count);

requestAnimationFrame(update);

}

else{

counter.innerText = target;

}

};

update();

});

}

}

window.addEventListener("scroll",startCounters);

startCounters();



/* ==============================
PROJECT FILTER
============================== */

const filterButtons = document.querySelectorAll(".filter-btn");

const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

document.querySelector(".filter-btn.active").classList.remove("active");

button.classList.add("active");

const filter = button.dataset.filter;

projectCards.forEach(card=>{

if(filter==="all"){

card.style.display="block";

}

else{

if(card.classList.contains(filter)){

card.style.display="block";

}

else{

card.style.display="none";

}

}

});

});

});


/* ==========================
CERTIFICATE MODAL
========================== */

const modal = document.querySelector(".certificate-modal");

const modalImage = document.getElementById("modalImage");

const closeModal = document.querySelector(".close-modal");

document.querySelectorAll(".view-btn").forEach(btn=>{

btn.onclick=()=>{

modal.style.display="flex";

modalImage.src=btn.dataset.img;

};

});

closeModal.onclick=()=>{

modal.style.display="none";

};

window.onclick=(e)=>{

if(e.target===modal){

modal.style.display="none";

}

};

/* ==========================
LOADER
========================== */

window.onload = () => {

document.getElementById("loader").style.opacity="0";

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},600);

};

/* ==========================
BACK TO TOP
========================== */

const topBtn=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/* ==========================
CONTACT FORM
========================== */

const form=document.getElementById("contactForm");

const toast=document.getElementById("toast");

form.addEventListener("submit",(e)=>{

e.preventDefault();

toast.style.display="block";

setTimeout(()=>{

toast.style.display="none";

},2500);

form.reset();

});

/* ==========================
DARK/LIGHT MODE
========================== */

const toggle=document.getElementById("themeToggle");

toggle.onclick=()=>{

document.body.classList.toggle("light");

localStorage.setItem(

"theme",

document.body.classList.contains("light")

);

};

if(localStorage.getItem("theme")=="true"){

document.body.classList.add("light");

}