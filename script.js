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

var amount_now = document.getElementById("amount-now");
var amount_max = document.getElementById("amount-max");
amount_now.innerText = "5";
amount_max.innerText = "50";

setTimeout(function() {
    window.location.reload(1);
}, 1000);