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

let thisH1 = ctaDiv.getElementsByTagName('h1')[0];
console.log(thisH1);
thisH1.innerHTML= thisH1.innerHTML.split(' ').join('<br />');
console.log(thisH1);

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

bottomContent[1].getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['product-h4'];
bottomContent[1].getElementsByTagName('p')[0].innerHTML = siteContent['main-content']['product-content'];

bottomContent[2].getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['vision-h4'];
bottomContent[2].getElementsByTagName('p')[0].innerHTML = siteContent['main-content']['vision-content'];


let contact = document.getElementsByClassName('contact')[0];
contact.getElementsByTagName('h4')[0].innerHTML = siteContent.contact['contact-h4'];
contact.getElementsByTagName('p')[0].innerHTML = siteContent.contact['address'];
contact.getElementsByTagName('p')[1].innerHTML = siteContent.contact['phone'];
contact.getElementsByTagName('p')[2].innerHTML = siteContent.contact['email'];

let newNav = document.getElementsByTagName('nav')[0];
console.log(newNav);

const newEl = document.createElement('a');
const newEl2 = document.createElement('a');
newNav.appendChild(newEl);

//.setAttribute('href', '#');
//.textContent('something');

newNav.prepend(newEl2);
newNav.getElementsByTagName('a')[0].setAttribute('href', '#');
newNav.getElementsByTagName('a')[newNav.getElementsByTagName('a').length -1].setAttribute('href', '#');
newNav.getElementsByTagName('a')[0].innerHTML = 'SING IT';
newNav.getElementsByTagName('a')[newNav.getElementsByTagName('a').length -1].innerHTML = 'OUT LOUD'
newNav.getElementsByTagName('a')[0].style.color = 'green';
newNav.getElementsByTagName('a')[newNav.getElementsByTagName('a').length -1].style.color = 'green';

//loops over nav and sets font to green
for (let i=0; i <navi.length; i++) {
  navi[i].style.color = 'green';
}

