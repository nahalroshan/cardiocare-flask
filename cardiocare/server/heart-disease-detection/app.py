from flask import Flask, render_template, request, jsonify
import pickle
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


# Load the Random Forest Classifier model
filename = 'model.pkl'
model = pickle.load(open(filename, 'rb'))

@app.route('/')
def home():
    return render_template('test.html')

@app.route('/otherpage')
def other_page():
    return render_template('test.html')    

@app.route('/data',methods=['POST','GET'])
def get_data():
    form_data = request.json
    age = int(form_data.get('age'))
    sex = int(form_data.get('sex'))
    cp = int(form_data.get('cp'))
    trestbps = int(form_data.get('trestbps'))
    chol = int(form_data.get('chol'))
    fbs = int(form_data.get('fbs'))
    restecg = int(form_data.get('restecg'))
    thalach = int(form_data.get('thalach'))
    exang = int(form_data.get('exang'))
    oldpeak = float(form_data.get('oldpeak'))  # Convert to float if necessary
    slope = int(form_data.get('slope'))
    ca = int(form_data.get('ca'))
    thal = int(form_data.get('thal'))
    print(age)
    data = np.array([[age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal]])
    print(data)
    my_prediction = model.predict(data).tolist()
    print(my_prediction)
    # make a prediction using the loaded
    return jsonify({'prediction': my_prediction})


@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        # Retrieve form inputs
        age = int(request.form['age'])
        sex = int(request.form['sex'])  # Convert to integer
        cp = int(request.form['cp'])    # Convert to integer
        trestbps = int(request.form['trestbps'])
        chol = int(request.form['chol'])
        fbs = int(request.form['fbs'])  # Convert to integer
        restecg = int(request.form['restecg'])
        thalach = int(request.form['thalach'])
        exang = int(request.form['exang'])  # Convert to integer
        oldpeak = float(request.form['oldpeak'])
        slope = int(request.form['slope'])  # Convert to integer
        ca = int(request.form['ca'])
        thal = int(request.form['thal'])    # Convert to integer
        
        # Create numpy array for prediction
        data = np.array([[age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal]])
        print(data)
        # Make prediction
        my_prediction = model.predict(data) 
        print(my_prediction) # Convert ndarray to list
        return render_template('result.html', prediction=my_prediction)
       

if __name__ == '__main__':
    app.run(debug=True)
