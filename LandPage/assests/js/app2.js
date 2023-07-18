const subnav = document.getElementsByClassName("subnav");
console.log(subnav.offsetWidth);
var navbar = document.getElementById("navM");
navbar.classList.add("MainMenu");
const lift = document.getElementById("lift");
lift.classList.add("leftSaid");
//lift.classList.add("leftSaidSStop");


const dom = document.querySelector('.MainMenu');
const but =document.getElementById('hamburger');
const leftbunner=document.querySelector('.liftbanner');
var navbar = document.getElementById("navM");
navbar.classList.add("MainMenu");
let Scrolling;
let windowzise = screen.width;

//create ul for navegation bar
const ulList = document.createElement('ul');
const mainPages = ['<a href="../../index.html">Home</a>','<a href="../html/Hotels.html">Hotels</a>','<a id="linkPages" href="../html/touristicPlaces.html">Natural places</a>','<a href="../html/Restaurant.html">Restaurants</a>'];

ulList.setAttribute('id','listnav');
for(i=0;i<mainPages.length;i++){
const li = document.createElement('li');
li.innerHTML=mainPage[i];
ulList.appendChild(li);
ulList.style.display='flex';
ulList.style.flexDirection='column';
ulList.style.listStyleType='none';
ulList.style.marginRight='20px';
ulList.style.textAlign='right';
ulList.style.backgroundColor='antiquewhite';
ulList.style.paddingRight='10px';
}
leftbunner.appendChild(ulList);
ulList.style.display="none";

if(screen.width>=520){
  navbar.display='none';
  ulList.style.display="flex";
  }else
  ulList.style.display="none";

but.addEventListener('click',function(){
   if( ulList.style.display==="flex"){
    ulList.style.display="none";
   }else{
    ulList.style.display="flex";
   }
    
});

//Page hotel nav
document.getElementById("FirstCard").addEventListener("click", () => {
    document.getElementById("FirstCard1").scrollIntoView({ behavior: "smooth" });

});
document.getElementById("SecondCard").addEventListener("click", () => {
 document.getElementById("SecondCard2").scrollIntoView({ behavior: "smooth" }) ;

});
document.getElementById("TherdCard").addEventListener("click", function () {
   document.getElementById("TherdCard3").scrollIntoView({ behavior: "smooth" });
});

// button to go up
const Upbutton = document.getElementById("UpArrow");
//Upbutton.style.visibility="hidden";
var navLocation = navbar.offsetTop;

navbar.classList.add("MainMenu");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
   Upbutton.style.display = "block";

  } else {
   Upbutton.style.display = "none";
  
}
if (window.scrollY >= navLocation) {
   navbar.classList.add("sticky");
   lift.classList.add("leftSaidList");
   
 } else {
   navbar.classList.remove("sticky");
   navbar.classList.add("MainMenu");
   lift.classList.add("leftSaid");
   lift.classList.remove('leftSaidList');
 }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  
}
const MyScrolStop = callback => {
  let ScrollWork;
  window.addEventListener('scroll', e => {
      clearTimeout(ScrollWork);
      navbar.style.display='flex';
      ScrollWork = setTimeout(() => {callback();}, 1500);
    },
    false
  );
};
MyScrolStop(() => {
  Upbutton.style.display="none";
  if (window.scrollY <= navLocation) {
    //navbar.classList.add('MainMenu');
      navbar.style.display='flex';
  } else {
    navbar.style.display="none";
  }
});