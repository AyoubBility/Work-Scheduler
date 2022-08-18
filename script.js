var hour1 = $("#hour1 .description")
var hour2 = $("#hour2 .description")
var hour3 = $("#hour3 .description")
var hour4 = $("#hour4 .description")
var hour5 = $("#hour5 .description")

var hour8 = $("#hour8 .description")
var hour9 = $("#hour9 .description")
var hour10 = $("#hour10 .description")
var hour11 = $("#hour11 .description")
var hour12 = $("#hour12 .description")

$(document).ready(function () {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        console.log("You saved", text)

        localStorage.setItem(time, text);
        if(text === ""){
            console.log("Textbox is empty.")
        } else {
            console.log(text,"was added to local storage")
        }
    })
    
    //moring
    $(hour8).val(localStorage.getItem("hour8"));
    $(hour9).val(localStorage.getItem("hour9"));
    $(hour10).val(localStorage.getItem("hour10"));
    $(hour11).val(localStorage.getItem("hour11"));
    $(hour12).val(localStorage.getItem("hour12"));

    //afternoon
    $(hour1).val(localStorage.getItem("hour1"));
    $(hour2).val(localStorage.getItem("hour2"));
    $(hour3).val(localStorage.getItem("hour3"));
    $(hour4).val(localStorage.getItem("hour4"));
    $(hour5).val(localStorage.getItem("hour5"));

    function hourTracker() {
        var currentHour = moment().hour();
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }})
    }
    hourTracker();
})