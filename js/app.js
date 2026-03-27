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

vipBtn.addEventListener("click", verifyAccess);

let myArray = [
    {name:"Tiger", 
        image:"..\\images\\tigerFront.webp", 
        description:"Tigers are the largest of all wild cats, with significant size variation between subspecies. Males typically weigh 220-660 pounds (100-300 kg) and measure 8-10 feet (2.4-3.3 meters) in length including the tail, while females are smaller at 140-370 pounds (65-170 kg). They have powerful, muscular bodies with distinctive orange to reddish-orange fur marked with vertical black stripes (though white tigers exist due to a genetic variation). Each tiger's stripe pattern is unique, like human fingerprints. They have large heads, strong jaws with 30 teeth (including 3-inch canines), retractable claws, and padded paws for silent stalking. Their white spots on the back of their ears, called \"eye spots,\" may help cubs follow their mother or intimidate rivals from behind. Tigers have excellent night vision (about 6 times better than humans) and can see in color."
    }, 
    {name:"Immortal Jellyfish",
        image:"..\\images\\immortal-jellyfish2.png", 
        description:"Turritopsis dohrnii is a tiny jellyfish measuring only 4-5 millimeters (0.16-0.2 inches) in diameter when mature, roughly the size of a pinky fingernail. It has a transparent, bell-shaped body (medusa) with a bright red stomach visible in the center. Adults have 80-90 thin tentacles extending from the bell margin. The jellyfish has a simple nervous system with no brain, no heart, and no blood—nutrients and oxygen diffuse directly through its thin tissues. Like other jellyfish, it's about 95% water. Its body is radially symmetrical with a single opening serving as both mouth and anus. What makes it truly remarkable is its ability to undergo cellular transdifferentiation, allowing its cells to transform from one type to another—a process that enables its \"immortality.\""
    }, 
    {name:"Tardigrade",
        image:"..\images\tardigrade.webp",
        description:"Tardigrades, commonly called \"water bears\" or \"moss piglets\", are microscopic animals measuring 0.1-1.5 millimeters (0.004-0.06 inches) in length, with most species around 0.5 mm. They have plump, segmented bodies with four pairs of stubby legs ending in claws or sucking disks. Their body structure includes a simplified nervous system with a brain, eyespots in some species, a complete digestive system with a mouth, pharynx, and anus, and a fluid-filled body cavity. They have no respiratory or circulatory system—gases and nutrients diffuse directly through their cuticle (outer layer). Their bodies are covered in a tough cuticle made of chitin and protein that they molt periodically. Despite their microscopic size, they have complex organ systems including muscles, a storage bladder, and reproductive organs. They move slowly using their clawed legs in a lumbering gait that resembles a bear's walk, hence the nickname."
    },
    {name:"Arctic Fox",
        image:"..\images\fox\white\w_fox1.jpg",
        description:"Arctic foxes are small, compact foxes measuring 18-27 inches (46-68 cm) in body length, plus a bushy 10-17 inch (25-43 cm) tail, and weighing 5.5-17 pounds (2.5-8 kg), with males slightly larger than females. They have the most insulating fur of any mammal, with a thick double coat that changes color seasonally—pure white or bluish-white in winter for snow camouflage, and brown, gray, or bluish-gray in summer. Their compact body shape minimizes heat loss with short legs, small rounded ears (the smallest ears relative to body size of any canid), a short muzzle, and a thick bushy tail. Fur even covers the bottom of their paws, acting like built-in snowshoes and insulation. They have a low surface-area-to-volume ratio that reduces heat loss. Their body temperature remains constant even when ambient temperatures drop to -70°F (-56°C), and they don't begin to shiver until temperatures reach -94°F (-70°C). They have excellent hearing for detecting prey under snow and keen eyesight adapted for Arctic conditions."
    }];

let generativeCont = document.getElementById("content-grid");

for (let item of myArray) {
    if (item.image !== null) {
       let htmlString = "<h2>" + item.name + "</h2><img id=\"img1\" src=" + item.image + "alt=\"Image 1\" style=\"width: 100%; display: block;\"><div id=\"info-div\" style=\"max-width: 900px; margin: 0 auto; padding: 20px;\"><section><h2 class=\"section-h2\">Physiological Info</h2><p class=\"section-p\">" + item.description + "</p></section>"; 
       generativeCont.innerHTML += htmlString;
    } else {
       let htmlString = "<h2>" + item.name + "</h2><div id=\"info-div\" style=\"max-width: 900px; margin: 0 auto; padding: 20px;\"><section><h2 class=\"section-h2\">Physiological Info</h2><p class=\"section-p\">" + item.description + "</p></section>";
       generativeCont.style.backgroundColor = "red";
       console.log("Image not found...");  
       generativeCont.innerHTML += htmlString;
    }
}
