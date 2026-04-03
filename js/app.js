document.addEventListener("DOMContentLoaded", function() {
    console.log("JS is alive!");

    let mySavedItems = [];
    if (localStorage.getItem("mySavedComments")) {
        mySavedItems = JSON.parse(localStorage.getItem("mySavedComments"));
    }

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
    let nav = bdy.querySelector("nav");

    function switchToDarkMode(){ 
        bdy.classList.toggle("dark-theme");
        crd.classList.toggle("dark-theme-card");
        ftr.classList.toggle("dark-theme");
        nav.classList.toggle("dark-theme-card");
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
        
        if (images.length > 0) {
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
    }

    let secretBtn = document.getElementById("secret-btn");
    let secretDiv = document.getElementById("secret-box");

    function showSecret(){
        secretBtn.style.display = "none";
        secretDiv.style.display = "block";
    }

    if (secretBtn && secretDiv) {
        secretBtn.addEventListener("click", showSecret);
    }

    let vipAnimals = ["capybara", "red panda", "octopus", "redpanda"];
    let vipInput = document.getElementById("nInpTxt");
    let vipTitle = document.getElementById("nH3");
    let vipBtn = document.getElementById("nBtn");
    let vipMsg = document.getElementById("nMsgP");

    function verifyAccess(){
        let userInp = vipInput.value.toLowerCase();
        if (userInp === "") {
            vipMsg.innerText = "Error! Please type something valid.";
            vipMsg.style.color = "red";
        } else if (vipAnimals.includes(userInp)) {
        // I wonder if "userInp in vipAnimals.values" would work too...
            vipMsg.innerText = "Access Granted!";
            vipMsg.style.color = "green";
        } else {
            vipMsg.innerText = "Wrong entry. Access denied.";
            vipMsg.style.color = "red";
        }
    }

    if (vipBtn && vipInput && vipMsg) {
        vipBtn.addEventListener("click", verifyAccess);
    }

    let fanForm = document.getElementById("fanguest-form");
    let fanInp = document.getElementById("fanguest-input");
    let fanUl = document.getElementById("fanguest-ul");

    function memoryBank(e){
        e.preventDefault();
        let storedComment = fanInp.value.trim();
        mySavedItems.push(storedComment);
        fanInp.value = "";
        let savedComments = JSON.stringify(mySavedItems);
        localStorage.setItem("mySavedComments", savedComments);
    }

    function displayComments() {
        fanUl.innerHTML = "";
        mySavedItems.forEach(comment => {
            let li = document.createElement("li");
            li.textContent = comment;
            li.innerHTML += ` <button id= "X-btn" class="delete-btn">X</button>`;
            fanUl.appendChild(li);
        });
    }
    displayComments();

    function deleteComment(e) {
        if (document.getElementById("X-btn") && e.target.id === "X-btn") {
            let commentText = e.target.parentElement.textContent.slice(0, -2).trim();
            mySavedItems = mySavedItems.filter(item => item !== commentText);
            localStorage.removeItem(commentText);
            displayComments();
        }
    }

    fanUl.addEventListener("click", deleteComment);

    fanForm.addEventListener("submit", memoryBank);
    fanForm.addEventListener("submit", displayComments);
});
