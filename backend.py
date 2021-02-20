from flask import Flask, request
from flask_pymongo import PyMongo
import datetime
import json

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://exceed_group08:r63tbmyq@158.108.182.0:2255/exceed_group08'
mongo = PyMongo(app)

myCollection = mongo.db.nubwuttagum_store

@app.route('/update_customer/<storeId>', methods=['GET'])
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
    currentMinuteCustomer = query['thisHourCumulativeCustomerEveryFiveMinutes'][minute//5]

    hour = now.hour
    if (now.strftime("%x") != query['cumulativeCustomer'][-1]['timeStamp']) :
        added_day = {'$push': {'cumulativeCustomer': {'timeStamp': now.strftime("%x"), 'cumulativeCustomerPerHour': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}}}
        myCollection.update_one(filt, added_day)

    currentHourCustomer = query['cumulativeCustomer'][-1]["cumulativeCustomerPerHour"][hour-1]

    if (statusId == 0):
        currentCustomer -= 1
        currentMinuteCustomer -= 1
        currentHourCustomer -= 1
    else:
        currentCustomer += 1
        currentMinuteCustomer += 1
        currentHourCustomer += 1

    updated_content = {'$set': {
        'currentCustomer': currentCustomer,
        'thisHourCumulativeCustomerEveryFiveMinutes.' + str(minute//5): currentMinuteCustomer,
        }}

    length = len(myCollection.find({'storeId':0})[0][cumulativeCustomer])
    myCollection.update_one(filt, updated_content)
    myCollection.update_one(
        filt, 
        { "$set": { 'cumulativeCustomer.' + str(length-1) + '.cumulativeCustomerPerHour.' + str(hour-1) : currentHourCustomer } }
    )

    return {'result': 'Updated successfully'}

#ค่าเดียว
# @app.route('/max', methods=['GET'])
# def get_max():

# #ค่าเดียว
# @app.route('/current', methods=['GET'])
# def get_current():

# #ค่าเดียว
# @app.route('/day', methods=['GET'])
# def get_per_day():

# #array
# @app.route('/hour', methods=['GET'])
# def get_per_hour():

# #array
# @app.route('/minute', methods=['GET'])
# def get_per_five_minute_this_hour():
 
# @app.route('/predict', methods=['GET'])
# def predict():

if __name__ == "__main__":
    app.run(host='0.0.0.0', port='3000', debug=True)