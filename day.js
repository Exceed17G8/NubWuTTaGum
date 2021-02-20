function update_graph_day() {
    var date = new Date();
    var hour = date.getHours();
    var ctx2 = document.getElementById("dayChart").getContext("2d");

    var label_hours = [];
    for (var i = 0; i < 10; i++) {
      label_hours.push(`0${i}:00`);
    }
    for (var i = 10; i < 24; i++) {
      label_hours.push(`${i}:00`);
    }
    // http://158.108.182.9:3000/hour
    $.getJSON('http://158.108.182.9:3000/hour', function(data) {
        var data = {
            labels: label_hours,
            datasets: [{
              label: "Today's cumulative customer",
              fillColor: "rgba(151,187,205,0.2)",
              strokeColor: "rgba(151,187,205,1)",
              pointColor: "rgba(151,187,205,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(151,187,205,1)",
              data: data.slice(0, hour+1)
            }]
          };
          var options = {
            animation: false,
            //Boolean - If we want to override with a hard coded scale
            scaleOverride: false,
            //** Required if scaleOverride is true **
            //Number - The number of steps in a hard coded scale
            scaleSteps: 10,
            //Number - The value jump in the hard coded scale
            scaleStepWidth: 10,
            //Number - The scale starting value
            scaleStartValue: 0
          };
          
          var myLineChart = new Chart(ctx2).Line(data, options);
    });

    setTimeout(update_graph_day, 1000);
}

update_graph_day();





// setInterval(function() {
// setData(data.datasets[0].data);
// setData(data.datasets[1].data);
// setLabels(data.labels);

// var myLineChart = new Chart(ctx2).Line(data, options);
// }, 3600000);

// function setLabels(labels) {
//   var nextMonthIndex = months.indexOf(labels[labels.length - 1]) + 1;
//   var nextMonthName = months[nextMonthIndex] != undefined ? months[nextMonthIndex] : "0000";
//   labels.push(nextMonthName);
//   labels.shift();
// }

// function setData(data) {
//   //******function get and push and fetch voiiiiii*********
//   // fetch("http://xxx",{
//   //   method: "GET",
//   // })
//   // .then(data.push(data.text))
//   data.push(Math.floor(Math.random() * 100) + 1);
//   data.shift();
// }

// function convertMonthNameToNumber(monthName) {
//   var myDate = new Date(monthName + " 1, 2016");
//   var monthDigit = myDate.getMonth();
//   return isNaN(monthDigit) ? 0 : (monthDigit + 1);
// }

// var months = ["0000", "0100", "0200", "0300", "0400", "0500",
//   "0600", "0700", "0800", "0900", "1000", "1100","1200","1300","1400","1500","1600","1700","1800","1900","2000","2100","2200","2300","2400"
// ];
