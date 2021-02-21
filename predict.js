function update_prediction() {
    $.getJSON('http://158.108.182.9:3000/get_predict', function(data) {
        var date = new Date();
        var today = date.getDay();
        var prediction_value = data["customerDensity"][(today+1)%7]; // Next day
        var prediction_customer = data["dayAvg"][(today+1)%7] // Next day
        var prediction_content = `Tomorrow's average customer is ${Math.round(prediction_customer)} people.\n`;
    
        if (prediction_value < 0.25) prediction_content += "So, U R chilled out tomorrow bro!";
        else if (prediction_value >= 0.25 && prediction_value < 50) prediction_content += "Tomorrow is a normal day for you.";
        else if (prediction_value >= 50 && prediction_value < 75) prediction_content += "U R busy in tomorrow.";
        else  prediction_content += "Prepare for your plenty of customers in tomorrow.";
    
        document.getElementById("predict").innerText = prediction_content;
    });

    setTimeout(update_prediction, 1000);
}

update_prediction();
