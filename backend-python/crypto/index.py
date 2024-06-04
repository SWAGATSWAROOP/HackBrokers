import os
from flask import Flask, request, jsonify, send_file, render_template
import cloudinary
import cloudinary.uploader 
import pandas as pd
import pandas_ta as ta
import pickle 
from datetime import timedelta
import matplotlib.pyplot as plt
import io
import json
app = Flask(__name__)

# Configure Cloudinary
cloudinary.config(
    cloud_name=os.getenv("CLOUD_NAME"),
    api_key=os.getenv("API_KEY"),
    api_secret=os.getenv("API_SECRET")
)

def image_generate(Type, days): 
    df = pd.read_csv(Type + '.csv', usecols=['Date', 'Close'])
    with open(Type + '.pkl', 'rb') as f:
        model = pickle.load(f)
    df['Date'] = pd.to_datetime(df['Date'], infer_datetime_format=True)
    for i in range(2):
        sma = ta.sma(df['Close'], length=5).iloc[-1]
        ema = ta.ema(df['Close'], length=5).iloc[-1]
        rsi = ta.rsi(df['Close'], length=14).iloc[-1]
        new_close = model.predict([[sma, ema, rsi]])
        new_date = df['Date'].iloc[-1] + timedelta(days=1)
        new_row = {
            "Date": new_date,
            "Close": new_close,
            "SMA": sma,
            "EMA": ema,
            "RSI": rsi
        }
        df = pd.concat([df, pd.DataFrame(new_row)], ignore_index=True)
    last_10_days = df.tail(days)
    
    plt.style.use('dark_background')
    plt.figure(figsize=(12, 6))
    
    # Plot all but the last two points
    plt.plot(last_10_days['Date'][:-2], last_10_days['Close'][:-2], linestyle='-', color='b')
    
    # Highlight the last two points
    plt.plot(last_10_days['Date'][-3:], last_10_days['Close'][-3:], linestyle='-', color='r', marker='o')
    
    plt.title(Type + ' Close Prices Over Time')
    plt.xlabel('Date')
    plt.ylabel('Close Price')
    plt.grid(True)
    plt.savefig('btc_last_10_days.png')
    img_data = io.BytesIO()
    plt.savefig(img_data, format='png')
    img_data.seek(0)
    return img_data

 

@app.route('/') 
def home():
    return render_template('index.html')

@app.route('/upload/', methods=['GET'])
def upload(): 
    Type = request.args.get('type')
    days = int(request.args.get('days'))
    img = image_generate(Type, days)  
    response = cloudinary.uploader.upload(img)
    print(response) 
    secure_url_json = json.dumps({'secure_url': response['secure_url']}) 
    return secure_url_json

if __name__ == '__main__':
    app.run(port=5000, debug=True)