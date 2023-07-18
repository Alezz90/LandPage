//varibles
const Upbutton = document.getElementById("UpArrow");
var navbar = document.getElementById("navbar");
const menu = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
   menu.classList.add('listnav');  
  

/**
 **
 * 
 *Daynamic Navbar
 * 
 * 
*/


// Build menu 

// Scroll to section on link click

let ListNav;
sections.forEach(function (section) {
     ListNav += `<li class='menu__link ${section.className}' data-link=${section.id}><a href="#${section.id}">${section.dataset.nav}</li>`
    menu.innerHTML=ListNav;
   
});
 

/**
 * scroll up display arrow and nav
 * 
*/

navbar.style.display="flex";
var navLocation = navbar.offsetTop;

window.onscroll = function() {scrollFunction()};
function scrollFunction() {

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
   Upbutton.style.display = "block";
   navbar.style.display="flex";

  } else {
   Upbutton.style.display = "none";
}

 /**
  * using of getBoundingClintRect
  */
 sections.forEach(function(entery) {
  let linkmove = menu.querySelector(`[data-link=${entery.id}]`);
if(entery.getBoundingClientRect().top >= -400 && entery.getBoundingClientRect().top <= 150){

  entery.classList.add("your-active-class");
  linkmove.classList.add('active');
  }
  else{
      entery.classList.remove("your-active-class");
      linkmove.classList.remove('active');
  }
});
//closing scroll function
}

function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }
 //time to cuont scroll 
 const MyScrolStop = callback => {
   let ScrollWork;
   window.addEventListener('scroll', e => {
       clearTimeout(ScrollWork);
       ScrollWork = setTimeout(() => {callback();}, 1500);
     },
     false
   );
 };
 // on scrollstop up
 MyScrolStop(() => {
   Upbutton.style.display="none";
   if (window.scrollY <= navLocation) {
        navbar.style.display='flex';
      
    } else {
      navbar.style.display="none";
    }
 });


const more = document.getElementById("MoreRestur");
more.addEventListener("click", function(event){
  event.preventDefault();
});
document.getElementById("MorePlace").addEventListener('click',function(event){
  event.preventDefault();
});
document.getElementById("MoreHotel").addEventListener('click',function(event){
  event.preventDefault();
});
