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


//combo box 
const option1 = document.querySelector(".option2")
const option2 = document.querySelector(".option3")
const option3 = document.querySelector(".option4")
const option4 = document.querySelector(".option1")

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
   
     newsbar.addEventListener("mouseleave",()=>{
  
    drop.style.rotate ="180deg";
    newsbar.style.display= "none";
    dis();  
     }) 
   })
}
dis();

function dis2(){
  drop2.addEventListener("mouseover",()=>{
    drop2.style.rotate ="0deg";
    newsbar2.style.display= "flex";
    
 
   newsbar2.addEventListener("mouseleave",()=>{

  drop2.style.rotate ="180deg";
  newsbar2.style.display= "none";
  dis2();  
   }) 
 })
}
//calling the second drop-down
dis2();


//combo box implementation
option4.addEventListener("change", (event)=>{
  // console.log(event.target.value.toLowerCase())
  
  if(event.target.value== "college"){
    option1.style.display = "none";
    option2.style.display = "none";
    option3.style.display = "flex";
  }
  if(event.target.value=="polythenic"){
    option1.style.display = "none";
    option2.style.display = "flex";
    option3.style.display = "none";
  }
  if(event.target.value=="University"){
  option1.style.display = "flex";
    option2.style.display = "none";
    option3.style.display = "none";
 }
})


//Downloading jamb novel
const novel = document.querySelector(".last1");

const novel2 = document.querySelector("#downloadLink");
novel.addEventListener("click", ()=>{
  novel2.click();
})

