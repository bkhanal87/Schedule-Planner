document.getElementById("currentDay").innerHTML = Date();

$(document).ready(function(){
    $(".saveBtn").on("click",function(){
        let userDescription = $(this).siblings(".description").val()
        let time = $(this).parent().attr("id")
        console.log(userDescription,time);
        localStorage.setItem(time, userDescription)
    })
$("#9 .description").val(localStorage.getItem("9"))
}) 

