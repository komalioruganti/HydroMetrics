const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
const mongoose = require("mongoose");
const userData = require("./models/userData");
const port = 3001; // Choose a port number
app.use(bodyParser.json());

app.get('/q',async (req,res)=>{
    const user = await userData.find({"name" : "komali"});
    res.status(200).send(user);
})


app.post('/q', async (req, res) => {
    const sortedItems = [
        {  "text": 'Number of residents' },
        {  "text": 'Water purification methods' },
        {  "text": 'Consumption of bottled water' },
        {  "text": 'Use of low-flow toilets' },
        {  "text": 'Presence of desert plants' },
        {  "text": 'Cleaning frequency' },
        {  "text": 'Plastic recycling habits' },
        {  "text": 'Paper recycling habits' },
        {  "text": 'Clothes donation/reuse' },
        { "text": 'Primary diet' },
        { "text": 'Daily water consumption per person' },
        { "text": 'Frequency of bottled water consumption' },
        { "text": 'Shower duration' },
        { "text": 'Bath frequency' },
        { "text": 'Use of low-flow shower-heads' },
        { "text": 'Tap running duration and type' },
        { "text": 'Dishwashing routine' },
        { "text": 'Water usage for dishwashing' },
        { "text": 'Laundry routine' },
        { "text": 'Laundry load size' },
        { "text": 'Water usage for plant watering' },
        { "text": 'Number of vehicles owned' },
        { "text": 'Vehicle washing routine' },
        { "text": 'Frequency of vehicle washing' },
        { "text": 'Meat consumption frequency' },
        { "text": 'Dairy product consumption frequency' },
        { "text": 'Beverage consumption frequency' },
        { "text": 'Number of pets owned' },
        { "text": 'Pet washing frequency' },
      ];
  const formData = req.body.q;
  console.log(formData)

  // Process the form data here (e.g., save it to a database)
  var house = [],
    consump = [],
    dish = [],
    plant = [],
    vehicle = [],
    food = [],
    pet = [],
    recycle = [];
    var ques;
    var qData = [];

  for (let i = 0; i < sortedItems.length; i++) {
     ques = sortedItems[i].text;
     qData.push({ q: ques, ans: String(formData[i]) });
     console.log(qData[i]);
    if (i === 1 || i === 2 || i === 3 || i === 4 || i === 6) {
      house.push( qData[i]);
    }
    if (i === 11 || i === 12 || i === 13 || i === 14 || i === 16 || i === 15) {
      consump.push( qData[i]);
    }
    if (i === 17 || i === 18 || i === 19 || i === 20) {
      dish.push( qData[i]);
    }
    if (i === 21 || i === 5) {
      plant.push( qData[i]);
    }
    if (i === 22 || i === 23 || i === 24) {
      vehicle.push( qData[i]);
    }
    if (i === 10 || i === 25 || i === 26 || i === 27) {
      food.push( qData[i]);
    }
    if (i === 28 || i === 29) {
      pet.push( qData[i]);
    }
    if (i === 7 || i === 8) {
      recycle.push( qData[i]);
    }
  }
  const currentDate = new Date();
const currentTime = currentDate.toLocaleTimeString();
let latitude = "";
let longitude = "";

  const user = await userData.find({"name" : "komali"});
  if(user.length === 0){
    const newUser = await userData.create({
        "name":"komali",
        "password": "123",
        "userData": [{
            "qData": qData,
            "household" : house,
            "waterConsumption":consump,
            "dishAndLaundry":dish,
            "plantCare":plant,
            "vehicle":vehicle,
            "food":food,
            "pets":pet,
            "recycle":recycle,
        }],
        "updatedAt":currentTime,
        "location":{
            "longitude":longitude,
            "latitude":latitude
        }
    })
  console.log(newUser);
  // Send a response back to the client
  res.status(200).json({ message: "Form data received successfully " });
}else{
  const updatedUser = await userData.updateOne(
    { "name": "komali" },
    {
      $set: {
        "userData": [{
          "qData": qData,
          "household": house,
          "waterConsumption": consump,
          "dishAndLaundry": dish,
          "plantCare": plant,
          "vehicle": vehicle,
          "food": food,
          "pets": pet,
          "recycle": recycle,
        }],
        "updatedAt": currentTime,
        "location": {
          "longitude": longitude,
          "latitude": latitude
        }
      }
    }
  );
}
})

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://komali:12345@cluster0.pz9lfdp.mongodb.net/user?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
