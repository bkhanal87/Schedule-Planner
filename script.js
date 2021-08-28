document.getElementById("currentDay").innerHTML = Date();

$(document).ready(function(){
    $(".saveBtn").on("click",function(){
        let userDescription = $(this).siblings(".description").val()
        let time = $(this).parent().attr("id")
        console.log(userDescription,time);
        localStorage.setItem(time, userDescription)
    })
$("#hour-9 .description").val(localStorage.getItem("hour-9"))
$("#hour-10 .description").val(localStorage.getItem("hour-10"))
$("#hour-11 .description").val(localStorage.getItem("hour-11"))
$("#hour-12 .description").val(localStorage.getItem("hour-12"))
$("#hour-13 .description").val(localStorage.getItem("hour-13"))
$("#hour-14 .description").val(localStorage.getItem("hour-14"))
$("#hour-15 .description").val(localStorage.getItem("hour-15"))
$("#hour-16 .description").val(localStorage.getItem("hour-16"))
$("#hour-17 .description").val(localStorage.getItem("hour-17"))
}) 

let now = moment();

moment("08-27-2021", "MM-DD-YYYY hh:mm:ss", true);

//moment().hour(Number);//

let timeBlocks = document.querySelectorAll(".time-block");

for(let i=0; i<timeBlocks.length; i++) {

    let hour = timeBlocks[i].getAttribute("id").split("-")[1]
    console.log(hour);
    let currentHour = moment().hours();
    if (hour<currentHour){timeBlocks[i].classList.add("past")}
    else if (hour>currentHour){timeBlocks[i].classList.add("future")}
    else if (hour==currentHour){timeBlocks[i].classList.add("present")}


}








