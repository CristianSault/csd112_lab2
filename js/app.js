console.log("JS is alive!");

function navEffects() {
    const dropdown = document.getElementById('animalsDropdown');
        const menu = document.getElementById('dropdownMenu');
        
        dropdown.addEventListener('mouseenter', function() {
            menu.style.display = 'block';
        });
        
        dropdown.addEventListener('mouseleave', function() {
            menu.style.display = 'none';
        });
        
        // Add hover effects to nav links
        const navLinks = document.querySelectorAll('#mainNav ul > li > a');
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.backgroundColor = '#e9ecef';
                this.style.borderBottomColor = '#667eea';
            });
            link.addEventListener('mouseleave', function() {
                this.style.backgroundColor = 'transparent';
                this.style.borderBottomColor = 'transparent';
            });
        });
        
        // Add hover effects to dropdown items
        const dropdownLinks = document.querySelectorAll('#dropdownMenu a');
        dropdownLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.backgroundColor = '#f8f9fa';
                this.style.paddingLeft = '25px';
            });
            link.addEventListener('mouseleave', function() {
                this.style.backgroundColor = '#fff';
                this.style.paddingLeft = '20px';
            });
        });
}

navEffects();
let btn = document.getElementById("theme-btn");
let bdy = document.body;
let crd = bdy.querySelector(".card");
let ftr = bdy.querySelector("footer");

function switchToDarkMode(){ 
    bdy.classList.toggle("dark-theme");
    crd.classList.toggle("dark-theme-card");
    ftr.classList.toggle("dark-theme");
    if (bdy.classList.contains("dark-theme")) {
        btn.innerText = "Light Mode";
    } else {
        btn.innerText = "Dark Mode";
    } 
    // let info = bdy.getElementById("info-div");
    // let ps = info.getElementsByTagName("section");
    // ps.forEach(section => {section.classList.toggle("dark-theme");});
}

btn.addEventListener("click", switchToDarkMode);

// carousel
let slideIndex = 1;
showSlide(slideIndex);

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    let images = document.querySelectorAll('div > img[id^="img"]');
    let dots = document.querySelectorAll('div > div > span');
    
    if (n > images.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = images.length }
    
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].style.backgroundColor = "rgba(255,255,255,0.5)";
    }
    
    images[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].style.backgroundColor = "#fff";
}

let secretBtn = document.getElementById("secret-btn");
let secretDiv = document.getElementById("secret-box");

function showSecret(){
    secretBtn.style.display = "none";
    secretDiv.style.display = "block";
}

secretBtn.addEventListener("click", showSecret);
