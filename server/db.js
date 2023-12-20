const { MongoClient } = require('mongodb');
const mongoose = require("mongoose");
const uri =
  "mongodb+srv://komali:12345@cluster0.pz9lfdp.mongodb.net/?retryWrites=true&w=majority";

  const mongoUri = 'mongodb+srv://komali:123@cluster0.pz9lfdp.mongodb.net/HydroMetrics?retryWrites=true&w=majority';


  MongoClient.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
      console.error('Error connecting to MongoDB:', err);
      return;
    }
  
    console.log('Connected to MongoDB');
  
    // Use the HydroMetrics database
    const db = client.db('HydroMetrics');
  
    // Define the /eduResources route
    app.get('/eduResources', async (req, res) => {
      try {
        // Fetch information from the EduResources collection (replace 'EduResources' with your actual collection name)
        const eduResources = await db.collection('EducationalResources').find().toArray();
  
        // Send the fetched data as a JSON response
        res.json(eduResources);
      } catch (error) {
        console.error('Error fetching eduResources:', error);
        res.status(500).send('Internal Server Error');
      }
    });
  })