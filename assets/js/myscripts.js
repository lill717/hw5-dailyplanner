// let value = localStorage.getItem('7am')
// console.log($('#7am').text(value))
// let value = localStorage.getItem('8am')
// console.log($('#8am').text(value))
// let value = localStorage.getItem('9am')
// console.log($('#9am').text(value))
// let value = localStorage.getItem('10am')
// console.log($('#10am').text(value))

var currentDayEl = moment();
$('.lead').text(currentDayEl.format("dddd, MMMM Do"));
console.log(currentDayEl);

var currentHourEl = moment();
$(".currentHour").text(currentHourEl.format("hh:" + "mm" + "a"));
console.log(currentHourEl);

function rowColor() {
    var currentHourEl = currentDayEl.hours();
    var slot = $(".time-block");
    console.log('slot', slot);
    for (var i = 0; i < slot.length; i++) {
        var rows = slot[i];
        if (parseInt(rows.id.split("-")[0]) < currentHourEl) {
            $(rows).addClass("past");
        } else if (parseInt(rows.id.split("-")[0]) === currentHourEl) {
            $(rows).removeClass("past");
            $(rows).addClass("present");
        } else {
            $(rows).removeClass("past");
            $(rows).removeClass("present");
            $(rows).addClass("future");

        }
    }
}
rowColor();

$(document).ready(function () {
    // var editAppt = $(".saveBtn").text();
    $(".saveBtn").click(function () {
        var str = $(this).siblings("textarea").val();
        var key = $(this).siblings("div.row").attr("id");
        localStorage.setItem(key, str);
        console.log(key);
    })
});


// console.log(editAppt);

// $('.col-md-10 editAppt').val(col-md-10 editAppt);

// console.log(editAppt);

// Retrieve the col-md-10 editAppt

// function displayVals() {
//     $("value").val(siblings(".btn col-md-1 saveBtn"))
//     displayVals() ;
// }

// $("#7am".textarea).val(localStorage.getItem("7am"));
// document.getElementById("input").text = localStorage.getItem("");

    // $(this).val(siblings(".rows"))
    // console.log("input", alskjdflasjfoiawjeofiwe)

