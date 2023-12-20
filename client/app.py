from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pickle
import numpy as np

app = FastAPI()

# Enable CORS for all routes
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define the input data model
class InputData(BaseModel):
    annual_production_volume: float
    raw_material_water_usage: float
    dyeing_process_water_usage: float
    washing_finishing_water_usage: float
    supply_chain_water_footprint: float

# Load the trained model+
with open('linear_regression_model.pkl', 'rb') as file:
    model = pickle.load(file)

@app.post('/predict')
def predict(data: InputData):
    features = np.array([[
        data.annual_production_volume,
        data.raw_material_water_usage,
        data.dyeing_process_water_usage,
        data.washing_finishing_water_usage,
        data.supply_chain_water_footprint
    ]])
    prediction = model.predict(features)
    return {'water_footprint': prediction[0]}