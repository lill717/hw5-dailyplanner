// const morning = '7 am';
// let width = 80;
// var appointments = [];

var currentDayEl = moment();
$('.lead').text(currentDayEl.format("dddd, MMMM Do"));
console.log(currentDayEl);

var currentHourEl = moment();
$(".currentHour").text(currentHourEl.format("hh:" + "mm" + "a"));
console.log(currentHourEl);



// $("planner") = function (choices) {
//     var layout = $.extend({}, planner, choices);

//     return this.each(function () {
//         render.planner($(this), layout);
//         addEventListener(layout);
//         setWidth(layout.width);
//         date.set(layout.date);
//         startAppts(layout.date, layout.appointments, layout);

//     }
//     );
// }

// moment("6/20/2021").add(1, "day").format(LL)
// $("#currentDate").text(`${moment}`)


// console.log(d);
// alert(d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate());


// function colorCoding() {

    var textarea = parseInt($(this).hour("#7am", "#8am", "#9am", "#10am"));
    if (textarea < currentHour && textarea > currentHour - 10) {
        $(this).css("background-color", "Blueviolet");
    } else if (textarea > currentHour && textarea < currentHour + 10); {
        $(this).css("background-color", "Violet");
    } else (textarea === currentHour); {
        $(this).css("background-color", "Yellow");
    }



// function appointments() {
    //can save by //clicking save button to //local storage
    //when refresh, still there



