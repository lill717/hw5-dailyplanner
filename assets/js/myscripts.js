
// var appointments = [];

var currentDayEl = moment();
$('.lead').text(currentDayEl.format("dddd, MMMM Do"));
console.log(currentDayEl);

var currentHourEl = moment();
$(".currentHour").text(currentHourEl.format("hh:" + "mm" + "a"));
console.log(currentHourEl);





function rowColor() {
    var currentHourEl = currentDayEl.hours();
    var slot = $(".time-block");
    for (var i = 0; i < slot.length; i++); {
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

// function appointments() {
    //can save by //clicking save button to //local storage
    //when refresh, still there

