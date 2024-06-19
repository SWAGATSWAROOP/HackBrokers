import pandas as pd   
from sklearn.model_selection import train_test_split
import yfinance as yf 
import pandas_ta as ta
from sklearn.model_selection import GridSearchCV
from sklearn.ensemble import RandomForestRegressor
import pickle 
import os
from datetime import datetime 
crypto = ['BTC', 'ETH', 'SOL', 'USDT', 'BNB']

for type in crypto:
    if os.path.exists(type + '.csv'):
        os.remove(type + '.csv')
    data_ticker = yf.Ticker(type +"-USD")
    data = data_ticker.history(period="max")
    data.to_csv(type+".csv")
    data = pd.read_csv(type + '.csv')
    data.drop([ 'Open', 'High', 'Low',  'Dividends', 'Stock Splits', 'Volume'], inplace = True, axis = 1)
    data['time'] = pd.to_datetime(data['Date'])
    data['formatted_time'] = data['time'].dt.strftime('%d-%m-%Y') 
    data.drop([ 'Date', 'time'], inplace = True, axis = 1)
    data['SMA'] = ta.sma(data['Close'], length=5) 
    data['EMA'] = ta.ema(data['Close'], length=5) 
    data['RSI'] = ta.rsi(data['Close'], length=14) 
    data.fillna(0, inplace = True)
    X = data.drop(['Close', 'formatted_time'], axis = 1).values
    Y = data['Close'].values
    rf = RandomForestRegressor()
    X_train, X_test, y_train, y_test = train_test_split(X, Y, test_size=0.2, random_state=42)
    param_grid = {
        'n_estimators': [50, 100, 150, 200, 250, 300]
    }
    grid_search_rf = GridSearchCV(estimator=rf, param_grid=param_grid, cv=3)
    grid_search_rf.fit(X_train, y_train)
    if os.path.exists(type + '.pkl'):
        os.remove(type + '.pkl')
    with open(type +'.pkl', 'wb') as f:
        pickle.dump(grid_search_rf.best_estimator_, f) 
        print(f"The model of {type} is successfully trained and the {type}.csv is updated and new {type}.pkl is formed at {datetime.now()}")
