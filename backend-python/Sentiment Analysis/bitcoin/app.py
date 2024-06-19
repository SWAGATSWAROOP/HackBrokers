from flask import Flask, render_template
import pandas as pd

app = Flask(__name__)

# Function to read probabilities from CSV file
def read_probabilities_from_csv(file_path):
    df = pd.read_csv(file_path)
    probability_increase = df.iloc[0]['Probability of Increase']
    probability_decrease = df.iloc[0]['Probability of Decrease']
    return probability_decrease, probability_increase

# Define route to display probabilities
@app.route('/')
def index():
    # Read probabilities from CSV file
    probability_decrease, probability_increase = read_probabilities_from_csv('probabilities_btc.csv')
    # Render HTML template with probabilities passed as variables
    return render_template('index.html', prob_decrease=probability_decrease, prob_increase=probability_increase)

if __name__ == '__main__':
    app.run(debug=True)
