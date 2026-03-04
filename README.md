# Diabetes Risk Assessment

A web application for preliminary diabetes risk evaluation using a BigML decision tree model trained on the Pima Indians Diabetes dataset.

## Features

- 📊 **Machine Learning Model**: Decision tree classification from BigML
- 🎨 **Modern UI**: Responsive design with gradient background
- ⚠️ **Risk Assessment**: Visual feedback for low/high risk predictions
- 💡 **Health Metrics**: Input fields for 7 health parameters

## How to Use

1. Open `index.html` in any modern web browser
2. Fill in your health metrics:
   - **BMI** (kg/m²) - Body Mass Index
   - **Glucose** (mg/dL) - Blood glucose level
   - **Insulin** (µU/mL) - Serum insulin level
   - **Age** (years) - Your age
   - **Diabetes Pedigree** - Family history function
   - **Skinfold Thickness** (mm) - Triceps skinfold thickness
   - **Blood Pressure** (mmHg) - Diastolic blood pressure

3. Click **"Analyze Risk"** to get your prediction

## Results

- ✅ **Low Risk**: Green result with lifestyle recommendations
- ⚠️ **High Risk**: Red warning with recommendation to consult healthcare professional

## Testing Examples

### Low Risk:
- BMI: 22.5, Glucose: 95, Insulin: 50, Age: 30, Pedigree: 0.25, Skinfold: 20, BP: 70

### High Risk:
- BMI: 38, Glucose: 500, Insulin: 400, Age: 40, Pedigree: 0.8, Skinfold: 35, BP: 89

## Running on GitHub Pages

This repository is configured to run on GitHub Pages:

1. Push to GitHub: `git push origin main`
2. Go to **Settings** → **Pages**
3. Select **main** branch as source
4. Your app will be live at: `https://yourusername.github.io/cloud_datamining/`

## Files

- `index.html` - Main application interface
- `predict.js` - BigML decision tree model and logic
- `README.md` - This file

## Model Source

Decision tree model exported from BigML trained on the Pima Indians Diabetes Dataset.

## Disclaimer

This application is for educational purposes only and should not be used as a substitute for professional medical advice. Always consult with a healthcare professional for proper diabetes screening and management.

## License

MIT
