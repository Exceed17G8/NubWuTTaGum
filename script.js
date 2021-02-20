var date = new Date();

var dayTH = "";
switch (date.getDay()) {
    case 0:
        dayTH = "วันอาทิตย์";
        break;
    case 1:
        dayTH = "วันจันทร์";
        break;
    case 2:
        dayTH = "วันอังคาร";
        break;
    case 3:
        dayTH = "วันพุธ";
        break;
    case 4:
        dayTH = "วันพฤหัสบดี";
        break;
    case 5:
        dayTH = "วันศุกร์";
        break;
    case 6:
        dayTH = "วันเสาร์";
        break;
}
document.getElementById("day").innerText = dayTH;
document.getElementById("time").innerText = date.toLocaleString();
// http://158.108.182.9:3000/max
$.getJSON('mockup/max.json', function(data) {
    console.log(data);
    document.getElementById("amount-max").innerText = data["maxCustomer"];
});
// var ctx = document.getElementById('myChart').getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: ['1200', '1300', '1400', '1500', '1600', '1700'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });

// setTimeout(function() {
//     window.location.reload(1);
// }, 1000);


// var ctx = document.getElementById("myChart").getContext("2d");
// var data = {
//     labels: ["0000","0100","0200","0300","0400","0500"],
//     datasets: [{
//             label: "My First dataset",
//             fillColor: "rgba(220,220,220,0.2)",
//             strokeColor: "rgba(220,220,220,1)",
//             pointColor: "rgba(220,220,220,1)",
//             pointStrokeColor: "#fff",
//             pointHighlightFill: "#fff",
//             pointHighlightStroke: "rgba(220,220,220,1)",
//             data: [65, 59, 80, 81, 56, 55, 40]
//         },
//         {
//             label: "My Second dataset",
//             fillColor: "rgba(151,187,205,0.2)",
//             strokeColor: "rgba(151,187,205,1)",
//             pointColor: "rgba(151,187,205,1)",
//             pointStrokeColor: "#fff",
//             pointHighlightFill: "#fff",
//             pointHighlightStroke: "rgba(151,187,205,1)",
//             data: [28, 48, 40, 19, 86, 27, 90]
//         }
//     ]
// };
// var options = {
//     animation: false,
//     //Boolean - If we want to override with a hard coded scale
//     scaleOverride: false,
//     //** Required if scaleOverride is true **
//     //Number - The number of steps in a hard coded scale
//     scaleSteps: 10,
//     //Number - The value jump in the hard coded scale
//     scaleStepWidth: 10,
//     //Number - The scale starting value
//     scaleStartValue: 0
// };
// var myLineChart = new Chart(ctx).Line(data, options);

// setInterval(function() {
//     setData(data.datasets[0].data);
//     setData(data.datasets[1].data);
//     setLabels(data.labels);

//     var myLineChart = new Chart(ctx).Line(data, options);
// }, 2000);

// function setLabels(labels) {
//     var nextMonthIndex = months.indexOf(labels[labels.length - 1]) + 1;
//     var nextMonthName = months[nextMonthIndex] != undefined ? months[nextMonthIndex] : "0000";
//     labels.push(nextMonthName);
//     labels.shift();
// }

// function setData(data) {
//     //******function get and push and fetch voiiiiii*********
//     // fetch("http://xxx",{
//     //   method: "GET",
//     // })
//     // .then(data.push(data.text))
//     data.push(Math.floor(Math.random() * 100) + 1);
//     data.shift();
// }

// function convertMonthNameToNumber(monthName) {
//     var myDate = new Date(monthName + " 1, 2016");
//     var monthDigit = myDate.getMonth();
//     return isNaN(monthDigit) ? 0 : (monthDigit + 1);
// }

// var months = ["0000", "0100", "0200", "0300", "0400", "0500",
//   "0600", "0700", "0800", "0900", "1000", "1100","1200","1300","1400","1500","1600","1700","1800","1900","2000","2100","2200","2300","2400"
// ];


// var ctx = document.getElementById('myChart').getContext('2d');
// var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'line',

//     // The data for our dataset
//     data: {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [{
//             label: 'My First dataset',
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgb(255, 99, 132)',
//             data: [0, 10, 5, 2, 20, 30, 45]
//         }]
//     },

//     // Configuration options go here
//     options: {}
// });

// var ctx = document.getElementById("myChart").getContext("2d");

// var data = {
//   labels: ["0000","0100","0200","0300","0400","0500"],
//   datasets: [{
//     label: "My First dataset",
//     fillColor: "rgba(220,220,220,0.2)",
//     strokeColor: "rgba(220,220,220,1)",
//     pointColor: "rgba(220,220,220,1)",
//     pointStrokeColor: "#fff",
//     pointHighlightFill: "#fff",
//     pointHighlightStroke: "rgba(220,220,220,1)",
//     data: [65, 59, 80, 81, 56, 55, 40]
//   }, {
//     label: "My Second dataset",
//     fillColor: "rgba(151,187,205,0.2)",
//     strokeColor: "rgba(151,187,205,1)",
//     pointColor: "rgba(151,187,205,1)",
//     pointStrokeColor: "#fff",
//     pointHighlightFill: "#fff",
//     pointHighlightStroke: "rgba(151,187,205,1)",
//     data: [28, 48, 40, 19, 86, 27, 90]
//   }]
// };
// var options = {
//   animation: false,
//   //Boolean - If we want to override with a hard coded scale
//   scaleOverride: false,
//   //** Required if scaleOverride is true **
//   //Number - The number of steps in a hard coded scale
//   scaleSteps: 10,
//   //Number - The value jump in the hard coded scale
//   scaleStepWidth: 10,
//   //Number - The scale starting value
//   scaleStartValue: 0
// };

// var myLineChart = new Chart(ctx).Line(data, options);

// setInterval(function() {
//   setData(data.datasets[0].data);
//   setData(data.datasets[1].data);
//   setLabels(data.labels);

//   var myLineChart = new Chart(ctx).Line(data, options);
// }, 2000);

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
