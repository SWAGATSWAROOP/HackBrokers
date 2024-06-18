from flask import Flask, render_template

app = Flask(__name__)

# Define route to display probabilities
@app.route('/')
def index():
    # Define probabilities (you can fetch these from a database or other source)
    probability_decrease = 0.73
    probability_increase = 0.27
    
    # Render HTML template with probabilities passed as variables
    return render_template('index.html', prob_decrease=probability_decrease, prob_increase=probability_increase)

if __name__ == '__main__':
    app.run(debug=True)
