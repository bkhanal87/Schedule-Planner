document.getElementById("currentDay").innerHTML = Date();

$(document).ready(function(){
    $(".saveBtn").on("click",function(){
        let userDescription = $(this).siblings(".description").val()
        let time = $(this).parent().attr("id")
        console.log(userDescription,time);
        localStorage.setItem(time, userDescription)
    })
$("#9 .description").val(localStorage.getItem("9"))
$("#10 .description").val(localStorage.getItem("10"))
$("11 .description").val(localStorage.getItem("11"))
$("#12 .description").val(localStorage.getItem("12"))
$("#13 .description").val(localStorage.getItem("13"))
$("#14 .description").val(localStorage.getItem("14"))
$("#15 .description").val(localStorage.getItem("15"))
$("#16 .description").val(localStorage.getItem("16"))
$("#17 .description").val(localStorage.getItem("17"))
}) 

let now = moment();

moment("08-27-2021", "MM-DD-YYYY hh:mm:ss", true);

moment().hour(Number);

let timeBlocks = document.querySelectorAll(".time-block");

for(let i=0; i<timeBlocks.length; i++) {

    let hour = timeBlocks[i].getAttribute("id").split("-")[1]
    console.log(hour);
    let currentHour = moment().hours();
    if (hour<currentHour){timeBlocks[i].classList.add("past")}
    else if (hour>currentHour){timeBlocks[i].classList.add("future")}
    else if (hour===currentHour){timeBlocks[i].classList.add("currenthour")}


}








