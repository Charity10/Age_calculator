const ageForm = document.getElementById("form-date");
const birthDay = document.getElementById("day");
const birthMonth = document.getElementById("month");
const birthYear = document.getElementById("year");
const Display_days = document.getElementById("days");
const Display_month = document.getElementById("months");
const Display_year = document.getElementById("years");
const calBtn = document.getElementById('btn')
// const  = document.getElementById("form-date");
const today = new Date();


let currentDay = today.getDate();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();


const dateValidation = () => {
        if(birthYear.value > currentYear){
            alert('Future year not allowed')
            
        } else {
              
        }

       if(birthMonth.value > 12 || birthMonth.value < 1){
        alert("Birth Month must be between 1 - 12")
        
       } else {

       }

      if(birthDay.value > 31 || birthDay.value < 1){
        alert("Birth Day must be between 1 - 31")

      }else {

      }
}

 calBtn.addEventListener('click', (event) => {
     
    event.preventDefault()


    if(currentDay < birthDay.value){
      
      Display_days.innerHTML =  ((currentDay - birthDay.value) + 30) + 'Days'

    } else if(currentDay > birthDay.value) {
        
         Display_days.innerHTML = currentDay - birthDay.value + ' Days'
    }

    if(currentMonth < birthMonth.value){
        
       Display_month.innerHTML = ((currentMonth - birthMonth.value) + 12) + 'months';
       currentYear = currentYear - 1

     } else if(currentMonth > birthMonth.value) {
 
          Display_month.innerHTML =  currentMonth - birthMonth.value + 'months'
     }
    
    
     Display_year.innerHTML = 'Age: ' + (currentYear - birthYear.value) + " years"
})

