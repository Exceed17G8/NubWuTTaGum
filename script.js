function update() {
    var date = new Date();

    var day = "";
    switch (date.getDay()) {
        case 0:
            day = "SUNDAY";
            break;
        case 1:
            day = "MONDAY";
            break;
        case 2:
            day = "TUESDAY";
            break;
        case 3:
            day = "WEDNESDAY";
            break;
        case 4:
            day = "THURSDAY";
            break;
        case 5:
            day = "FRIDAY";
            break;
        case 6:
            day = "SATURDAY";
            break;
    }
    document.getElementById("day").innerText = day;
    document.getElementById("time").innerText = date.toLocaleString();

    var customer = 1;
    var max_customer = 0;

    var max_url = "http://158.108.182.9:3000/max";
    var curr_url = "http://158.108.182.9:3000/current" 

    $.when(
        $.getJSON(max_url),
        $.getJSON(curr_url)
    ).done(function(data1, data2) {
        var max_customer = data1[0]["maxCustomer"];
        var customer = data2[0]["currentCustomer"];
        document.getElementById("amount-max").innerText = max_customer
        document.getElementById("amount-now").innerText = customer
        document.getElementById("customer-status").className = (customer > max_customer) ? "bg-danger" : "bg-dark";
    });

    $.getJSON('http://158.108.182.9:3000/day', function(data) {
        document.getElementById("amount-cum").innerText = data;
    });

    setTimeout(update, 1000);
}
update();

// setTimeout(function() {
//     window.location.reload(1);
// }, 1000);