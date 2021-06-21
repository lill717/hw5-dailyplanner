// moment().format("DD/MM.YYY")
var d = new Date();
var day = getDate();
var month = getMonth() + 1;
var year = getFullYear();
// var today = d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear();
const morning = '6 am';
const evening = '8 pm';
let width = 80;
var appointments = [];
let date = ("today");
var currentHour = (newDate()).getHours();

















// return day + "/" + month + "/" + year;

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


console.log(d);
alert(d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate());


function colorCoding() {
    $(".colorCoding")
        .each(function () {
            var timeSlot = parseInt($(this).hour("id"));
            if (timeSlot < currentHour && timeSlot > currentHour - 4) {
                $(this).past;
            } else if (timeSlot > currentHour && timeSlot < currentHour + 4); {
                $(this).;
            } else if (timeSlot === currentHour); {
                $(this);
            } else {
                $(this).css("background-color", "Grey");
            }
        }
        );


    function appointments()
    //can save by //clicking save button to //local storage
    //when refresh, still there
}