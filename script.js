

const daysContainer = document.querySelector(".days");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const month = document.querySelector(".month");
const todayBtn = document.querySelector(".today-btn");


const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];



const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const date = new Date();
// console.log(date);


let currentMonth = date.getMonth();
// console.log(currentMonth);


let currentYear = date.getFullYear();
// console.log(currentYear);



function renderCalender(){
  date.setDate(1)
  const firstDay = new Date(currentYear,currentMonth,1);
  // console.log(firstDay);
  
  const lastDay = new Date(currentYear,currentMonth+1,0);
  // console.log(lastDay);

  const lastDayIndex = lastDay.getDay();
  // console.log(lastDayIndex);
  
  const lastDayDate = lastDay.getDate();
  // console.log(lastDayDate);
  
  const prevlastDay = new Date(currentYear,currentMonth,0)
  // console.log(prevlastDay);
  
  const prevlastDayDate= prevlastDay.getDate();
  // console.log(prevlastDayDate);
  
  const nextDays = 7 - lastDayIndex -1;
  // console.log(nextDays);


  month.innerHTML=`${months[currentMonth]} ${currentYear}`



  let days="";

  for(let x=firstDay.getDay();x > 0; x--){
    days+=`<div class="day prev">${prevlastDayDate - x + 1}</div>`;
    
  }

  for(let i = 1; i<=lastDayDate;i++){
    if (i===new Date().getDate() && currentMonth===new Date().getMonth() && currentYear===new Date().getFullYear()) {
      days+=`<div class="day today">${i}</div>`
      
    }
    else{
      days+=`<div class="day">${i}</div>`
    }
  }


  for(let j =1; j<=nextDays;j++){
    days+=`<div class="day next">${j}</div>`
  }


  hidetodayBtn();

  daysContainer.innerHTML=days;
  

}


renderCalender();


nextBtn.addEventListener("click",()=>{
  currentMonth++;
  if(currentMonth>11){
    currentMonth=0;
    currentYear++
  }
  renderCalender();
})


prevBtn.addEventListener("click",()=>{
  currentMonth--;
  if(currentMonth<0){
    currentMonth=11;
    currentYear--;
  }
  renderCalender();
})

today.addEventListener("click",()=>{
  currentMonth=date.getMonth();
  currentYear=date.getFullYear();
  renderCalender()
})



function hidetodayBtn(){
  if (currentMonth===new Date().getMonth() && currentYear===new Date().getFullYear()) {
    todayBtn.style.display = "none";
    
  }
  else{
    todayBtn.style.display="flex";
  }

}









  
  
  




