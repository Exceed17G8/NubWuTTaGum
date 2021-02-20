from flask import Flask, request
from flask_pymongo import PyMongo
from flask_cors import CORS, cross_origin
import datetime
import json

app = Flask(__name__)
cors = CORS(app, resources={r"/": {"origins": "*"}})
app.config['MONGO_URI'] = 'mongodb://exceed_group08:r63tbmyq@158.108.182.0:2255/exceed_group08'
mongo = PyMongo(app)

myCollection = mongo.db.nubwuttagum_store

@app.route('/update_customer/<storeId>', methods=['POST'])
def update_customer(storeId):
    # get status (0/1) for (in/out)
    data = request.json
    storeId = int(storeId)
    statusId = int(data['statusId'])
    filt = {'storeId': int(storeId)}

    query = myCollection.find_one(filt)
    currentCustomer = query['currentCustomer']

    now = datetime.datetime.utcnow()-datetime.timedelta(hours=5)
    minute = now.minute
    currentMinuteCustomer = query['thisHourCumulativeCustomerEveryFiveMinutes'][(minute//5)]
    if currentCustomer == 0:
        currentMinuteCustomer = query['thisHourCumulativeCustomerEveryFiveMinutes'][(minute//5)-1]


    hour = now.hour
    currentHourCustomer = 0
    if (now.strftime("%x") != query['cumulativeCustomer'][-1]['timeStamp']) :
        added_day = {'$push': {'cumulativeCustomer': {'timeStamp': now.strftime("%x"), 'cumulativeCustomerPerHour': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}}}
        myCollection.update_one(filt, added_day)
    # for i in range(hour-1):
    currentHourCustomer = query['cumulativeCustomer'][-1]["cumulativeCustomerPerHour"][hour]
    if currentHourCustomer == 0:
        currentHourCustomer = query['cumulativeCustomer'][-1]["cumulativeCustomerPerHour"][hour-1]

    if (statusId == 0):
        currentCustomer -= 1
    else:
        currentCustomer += 1
        currentMinuteCustomer += 1
        currentHourCustomer += 1

    updated_content = {'$set': {
        'currentCustomer': currentCustomer,
        'thisHourCumulativeCustomerEveryFiveMinutes.' + str(minute//5): currentMinuteCustomer,
        }}

    length = len(myCollection.find({'storeId':0})[0]['cumulativeCustomer'])
    myCollection.update_one(filt, updated_content)
    myCollection.update_one(
        filt, 
        { "$set": { 'cumulativeCustomer.' + str(length-1) + '.cumulativeCustomerPerHour.' + str(hour-1) : currentHourCustomer } }
    )

    return {'result': 'Updated successfully'}

@app.route('/max', methods=['GET'])
def get_max():
    query = myCollection.find_one()
    max_customer = {
        "maxCustomer": query["maxCustomer"],
    }
    return max_customer
    
@app.route('/current', methods=['GET'])
def get_current():
    query = myCollection.find_one()
    current = {
        "currentCustomer": query["currentCustomer"],
    }
    return current

@app.route('/minute', methods=['GET'])
def get_per_minute_this_hour():
    query = myCollection.find_one()
    five_minute = query["thisHourCumulativeCustomerEveryFiveMinutes"]
    list_five = []
    for i in five_minute:
        list_five.append(i)
    return json.dumps(list_five)

@app.route('/hour', methods=['GET'])
def get_per_hour():
    query = myCollection.find_one()
    data = query['cumulativeCustomer']
    list_day = []
    list_hour =[]
    for i in data:
        list_day.append(i)
    latest_date = list_day[-1]
    del latest_date["timeStamp"]
    for i in latest_date.values():
        list_hour.append(i)
    return json.dumps(list_hour[0])

@app.route('/day', methods=['GET'])
def get_per_day():
    query = myCollection.find_one()
    data = query['cumulativeCustomer']
    list_day = []
    list_hour =[]
    for i in data:
        list_day.append(i)
    latest_date = list_day[-1]
    del latest_date["timeStamp"]
    for i in latest_date.values():
        list_hour.append(i)
    return json.dumps(sum(list_hour[0]))
 
# @app.route('/predict', methods=['GET'])
# def predict():

if __name__ == "__main__":
    app.run(host='0.0.0.0', port='3000', debug=True)