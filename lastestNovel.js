const slider = document.querySelector(".slider");
const sidebar = document.querySelector(".sidebar") ;
const notif = document.querySelector(".notif");


// notification code
const time = document.querySelectorAll(".time");
const icon =  document.querySelector(".slider .nn i");


//drop-down
const drop = document.querySelector(".in2 .hin i");
const drop2 = document.querySelector(".in2 .hin2 i");
const newsbar = document.querySelector(".newbar");
newsbar.style.display ="none";
const newsbar2 = document.querySelector(".newbar2");
newsbar2.style.display ="none";



window.onload = () => {
    sidebar.style.display="none";
   
   
  };

  notif.addEventListener("click",()=>{
    sidebar.style.display = "flex";
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

//function for the first drop-down
  function dis(){
    drop.addEventListener("mouseover",()=>{
      drop.style.rotate ="0deg";
      newsbar.style.display= "flex";
       drop.style.color = "orangered"
   
     newsbar.addEventListener("mouseleave",()=>{
  
    drop.style.rotate ="180deg";
    newsbar.style.display= "none";
     drop.style.color = "black"
    dis();  
     }) 
   })
}
dis();

function dis2(){
  drop2.addEventListener("mouseover",()=>{
    drop2.style.rotate ="0deg";
    newsbar2.style.display= "flex";
     drop2.style.color = "orangered"
 
   newsbar2.addEventListener("mouseleave",()=>{

  drop2.style.rotate ="180deg";
  newsbar2.style.display= "none";
  drop2.style.color = "black"
  dis2();  
   }) 
 })
}
//calling the second drop-down
dis2();
//header ends here