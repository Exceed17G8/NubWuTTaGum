var ctx = document.getElementById("dayChart").getContext("2d");
         
         var data = {
           labels: ["Mon","Tue","Wed","Thr"],
           datasets: [{
             label: "My Second dataset",
             fillColor: "rgba(151,187,205,0.2)",
             strokeColor: "rgba(151,187,205,1)",
             pointColor: "rgba(151,187,205,1)",
             pointStrokeColor: "#fff",
             pointHighlightFill: "#fff",
             pointHighlightStroke: "rgba(151,187,205,1)",
             data: [28, 48, 40, 19, 86, 27, 90]
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
         
         var myLineChart = new Chart(ctx).Line(data, options);
         
         setInterval(function() {
           setData(data.datasets[0].data);
           setData(data.datasets[1].data);
           setLabels(data.labels);
         
           var myLineChart = new Chart(ctx).Line(data, options);
         }, 86400000);
         
         function setLabels(labels) {
           var nextMonthIndex = weekday.indexOf(labels[labels.length - 1]) + 1;
           var nextMonthName = weekday[nextMonthIndex] != undefined ? weekday[nextMonthIndex] : "Mon";
           labels.push(nextMonthName);
           labels.shift();
         }
         
         function setData(data) {
           //******function get and push and fetch voiiiiii*********
           // fetch("http://xxx",{
           //   method: "GET",
           // })
           // .then(data.push(data.text))
           data.push(Math.floor(Math.random() * 100) + 1);
           data.shift();
         }
         
         function convertMonthNameToNumber(monthName) {
           var myDate = new Date(monthName + " 1, 2016");
           var monthDigit = myDate.getMonth();
           return isNaN(monthDigit) ? 0 : (monthDigit + 1);
         }
         
         var weekday = ["Mon","Tue","Wed","Thr","Fri","Sat","Sun"];
         