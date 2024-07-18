

const next1 = document.querySelector(".next1");
const next2 = document.querySelector(".next2");
const next3 = document.querySelector(".next3");
const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");
const slide3 = document.querySelector(".slide3");
const signButton = document.querySelector(".slide3 button");
const slider = document.querySelector(".slider");
const sidebar = document.querySelector(".sidebar") ;
const notif = document.querySelector(".notif");


// notification code
const time = document.querySelectorAll(".time");
const icon =  document.querySelector(".slider .nn i");

//stoping any other stuff in the first page domant
const in2 = document.querySelector(".in2 h3")
const user = document.querySelector("header-in")
const hero = document.querySelector(".hero")












window.onload = () => {
  const slide2 = (document.querySelector(".slide2").style.display = "none");
  const slide3 = (document.querySelector(".slide3").style.display = "none");
  sidebar.style.display="none";
};
next1.addEventListener("click", () => {

  next2.style.background = "white";
  next3.style.background = "white";
  next1.style.background = "black";
  slide1.style.display = "flex";
  slide1.style.flexDirection = "column";
  slide2.style.display = "none";
  slide3.style.display = "none";
});

next2.addEventListener("click", () => {
  next1.style.background = "white";
  next1.style.border = "1px black solid";
  next1.style.width = "20px";
  next1.style.height = "7px";
  next3.style.background = "white";
  next2.style.background = "black";
  slide1.style.display = "none";
  slide2.style.display = "flex";
  slide2.style.flexDirection = "column";

  slide3.style.display = "none";
});

next3.addEventListener("click", () => {
  next1.style.background = "white";
  next1.style.border = "1px black solid";
  next1.style.width = "20px";
  next1.style.height = "7px";
  next3.style.background = "black";
  next2.style.background = "white";
  slide1.style.display = "none";
  slide3.style.flexDirection = "column";
  slide2.style.display = "none";
  slide3.style.display = "flex";
});
signButton.addEventListener("click", () => {
  alert("Register successfull");
});

notif.addEventListener("click",()=>{
  sidebar.style.display = "flex";
  slider.style.transition = "all 0.5s"
  slider.style.transform = "translateX(0px)";
  
  
})
icon.addEventListener("click", () => {
 
  slider.style.transform = "translateX(600px)";
  sidebar.style.display = "none";
  
});



//notification implimentation
time.forEach(element => {
  var today = new Date();
  var formattedDate = today.getHours() % 12 || 12
var ampm =  today.getHours >= 12 ? "am":"pm";
 var getTime = formattedDate + ":" + today.getMinutes() + " "+ampm;
 element.textContent = getTime;
console.log(ampm)
});

