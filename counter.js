const buttons = document.querySelectorAll(".btn")
const number = document.getElementById("display__number")

let counter = 0;

buttons.forEach((button) =>{
    button.addEventListener("click", (e) =>{
       let value = e.currentTarget.classList;
       if (value.contains("decrease")){
        counter--
       } else if (value.contains("increase")){
        counter++
       } else {
        counter = 0;
       }

       if(counter > 0){
        number.classList.add("number__positive")
    } else if (counter < 0){
        number.classList.add("number__negative")
    } else{
        number.classList.remove("number__positive", "number__negative")
    } 
    number.textContent = counter;
})   
})

