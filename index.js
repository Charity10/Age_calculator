const dayError = document.getElementById("day-error");
const yearError = document.getElementById("year-error");
const monthError = document.getElementById("month-error");
const birthDay = document.getElementById("day");
const birthMonth = document.getElementById("month");
const birthYear = document.getElementById("year");
const Display_days = document.getElementById("days");
const Display_month = document.getElementById("months");
const Display_year = document.getElementById("years");
const yearValue = document.getElementById("yearNo");
const monthValue = document.getElementById("monthNo");
const dayValue = document.getElementById("dayNo");
const calBtn = document.getElementById('btn');
const yearNum = document.getElementById('yearNum');
const dayNum = document.getElementById('dayNum');
const monthNum = document.getElementById('monthNum');
// const  = document.getElementById("form-date");
const today = new Date();


let currentDay = today.getDate();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();




const dateValidation = () => {
     
        
      if (birthYear.value > currentYear){
            yearError.textContent = "Please enter a valid Year"
            yearError.style.color = "red"
         }
    
      else if (birthMonth.value > 12 || birthMonth.value < 1){
         monthError.textContent = "Please enter a valid month"
         monthError.style.color = "red"
         }
        
      else if (birthDay.value > 30 && (birthMonth.value == 4  || birthMonth.value == 6 || birthMonth.value == 9 || birthMonth.value == 11)) {
         dayError.textContent = "Birth Month has 30 days"
         dayError.style.color = "red"
      }

      else if (birthDay.value > 31 || birthDay.value < 1){
         dayError.textContent = "Birth Day must be between 1 - 31"
         dayError.style.color = "red"
            }

      else if (birthDay.value > 28 && birthMonth.value == 2) {
         dayError.textContent = "Birth Month has 28 days"
         dayError.style.color = "red"
            }
      
      else  {
         dayError.textContent = ''
         monthError.textContent = ''
         yearError.textContent = ''
         
               if (currentDay < birthDay.value){

               dayNum.innerHTML = ((currentDay - birthDay.value) + 30)
                  // Display_days.innerHTML +=' Days'

               } else if(currentDay > birthDay.value){
                  
                  dayNum.innerHTML = currentDay - birthDay.value
                  // Display_days.innerHTML += ' Days'
               }

               if(currentMonth > birthMonth.value){
                  monthNum.innerHTML =  (currentMonth - birthMonth.value)
               // Display_month.innerHTML  +=  'Months';

               } else if(currentMonth < birthMonth.value) {
                  
                  
                  monthNum.innerHTML = ((currentMonth - birthMonth.value) + 12) 
                  
                  // Display_month.innerHTML += 'Month' ;
                  currentYear = currentYear - 1
                 
               } 

               yearNum.innerHTML = (currentYear - birthYear.value) 

               currentYear += 1
                  }

               }



calBtn.addEventListener('click', (event) =>{
  event.preventDefault();

       dateValidation()

  
    // Display_year.innerHTML += 'Years'
})


