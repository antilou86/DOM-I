const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// loops through nav elements and sets inner text to whatever text is found within corresponding JSON file data
let navi = document.querySelectorAll('nav a');
for (let i=0; i < navi.length; i++) {
  navi[i].textContent = siteContent.nav[`nav-item-${i+1}`]; 
}

let ctaDiv = document.querySelectorAll('.cta .cta-text')[0];
let ctaImg = document.querySelector('#cta-img');

ctaDiv.getElementsByTagName('h1')[0].innerHTML = siteContent['cta']['h1'];
ctaDiv.getElementsByTagName('button')[0].innerHTML = siteContent['cta']['button'];
ctaImg.src = siteContent['cta']["img-src"];

let topContent = document.getElementsByClassName('text-content')[0];
topContent.getElementsByTagName('h4')[0].innerHTML = siteContent["main-content"]['features-h4'];
topContent.getElementsByTagName('p')[0].innerHTML = siteContent["main-content"]['features-content'];

let textContent =document.getElementsByClassName('text-content')[1];
textContent.getElementsByTagName('h4')[0].innerHTML = siteContent["main-content"]['about-h4'];
textContent.getElementsByTagName('p')[0].innerHTML = siteContent["main-content"]['about-content'];

let middleImg = document.querySelector('.middle-img');
middleImg.src = siteContent['main-content']["middle-img-src"];

let bottomContent = document.querySelectorAll('.bottom-content')[0].getElementsByClassName('text-content');
bottomContent[0].getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['services-h4'];
bottomContent[0].getElementsByTagName('p')[0].innerHTML = siteContent['main-content']['services-content'];



// bottomContent[0].children[0].h4.textContent = siteContent['main-content']['services-h4'];
// bottomContent[0].children[0].p.textContent = siteContent['main-content']['services-content'];
// bottomContent[0].children[1].h4.textContent = siteContent['main-content']['product-h4'];
// bottomContent[0].children[1].p.textContent = siteContent['main-content']['product-content'];
// bottomContent[0].children[2].h4.textContent = siteContent['main-content']['vision-h4'];
// bottomContent[0].children[2].p.textContent = siteContent['main-content']['vision-content'];



// let contact = document.querySelector('.contact');

// contact.h4 = siteContent.contact['contact-h4'];

// for (let i=1; i < siteContent.contact.length; i++){
//   contact.children[i] = siteContent.contact[i];
// }
// console.log(contact.children[1])

// "contact": {
//   "contact-h4" : "Contact",
//   "address" : "123 Way 456 Street Somewhere, USA",
//   "phone" : "1 (888) 888-8888",
//   "email" : "sales@greatidea.io",
// },