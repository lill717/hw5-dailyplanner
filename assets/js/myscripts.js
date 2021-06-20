var today = moment();
const morning = '6 am'
const evening = '8 pm'
let width = 80
var appointments = []
let date = ("today")

console.log(today.format("MMM, YYY"));

    $("planner") = function(choices) {
        var layout = $.extend({}, planner, choices);

        return this.each(function() {
            render.planner($(this), layout);
            addEventListener(layout);
            setWidth(layout.width);
            date.set(layout.date);
            startAppts(layout.date, layout.appointments, layout);

        }
    );
}

$("#currentDate").text(`${ouput}`)


