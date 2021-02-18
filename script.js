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

        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['1200', '1300', '1400', '1500', '1600', '1700'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });

// setTimeout(function() {
//     window.location.reload(1);
// }, 1000);