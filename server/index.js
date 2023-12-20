const express = require('express')
const app = express();
const cors = require("cors");
import('got');
app.use(cors());
const port = 8080;
const API_KEY = "1d3a0eefa97b499d8fbc4ee93eeb40b7";
const mongoose = require('mongoose');
const EduResource = require('./models/EduResourcesModel')
app.use(express.json())
const {arr} = require('./scrape.js');

app.get('/everything', async (req, res) => {
    var url = 'https://newsapi.org/v2/everything?q=water&apiKey=ade5237bc50c4da6adb9d9c844fb8d58';

var requ = new Request(url);
try {
  const response = await fetch(url);
  const data = await response.json();
  res.send(data);
} catch (e) {
  console.log(e);
  res.status(500).send('Internal Server Error');
}
})
app.get('/topHeadlines', async (req, res) => {
  var url = 'https://newsapi.org/v2/top-headlines?q=water&apiKey=ade5237bc50c4da6adb9d9c844fb8d58';

var requ = new Request(url);
try {
const response = await fetch(url);
const data = await response.json();
res.send(data);
} catch (e) {
console.log(e);
res.status(500).send('Internal Server Error');
}
})

app.get('/eduResources',async (req,res)=>{
  try{
const resource = await EduResource.find({});
res.status(200).json(resource);
  }catch(e){
      res.status(500).json({message: e.message})
  }
})
app.post('/eduResources',async (req,res)=>{
  try{
      const eduResource = await EduResource.create(req.body)
      res.status(200).json(eduResource) 
  }
  catch(e){
      console.log(e.message);
      res.status(500).json({message:e.message
      })
  }
  })

  app.get('/Ingredients',async(req,res)=>{
    try {
      res.status(200).json(arr);
    }catch(e){
      console.log(e.message);
      res.status(500).json({message:e.message})
    }
  })
// Scan Feature

app.get('/hardware',async(req,res)=>{
  try {
    const response = await fetch("https://api.thingspeak.com/channels/2384227/fields/2.json?api_key=BT6UJWOLO6AQ9R5M");
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching articles:", error);
  }
})
app.get('/hardware2',async(req,res)=>{
  try {
    const response = await fetch("https://api.thingspeak.com/channels/2384227/fields/2.json?api_key=BT6UJWOLO6AQ9R5M");
    const data = await response.json();
    const feed = data.feeds
    const arr = [];
    for(var i = 0;i<feed.length-1;i++){
     arr.push(Math.abs(feed[i].field2-feed[i+1].field2))}
    console.log(arr);
    const response1 = await fetch("https://api.thingspeak.com/channels/2384227/fields/3.json?api_key=BT6UJWOLO6AQ9R5M");
    const data1 = await response1.json();
    const feed1 = data1.feeds;
    const arr1 = [];
    for(var i = 0;i<feed1.length;i++){
      var randomBinary = Math.floor(Math.random()*2);
      arr1.push(randomBinary)
    }
    var pH_sum = 0;
    console.log(feed.length);
    console.log(feed1.length)
    for(var i = 20;i<feed.length-1;i++){
      var pH = feed1[i].field3;
      if(pH !== undefined){
        pH_sum+=pH;
        if(pH>=6.5 && pH<=8.5){
  arr1.push(1)
        }else{
          arr1.push(0);
        }
      }
    }
    console.log(arr1)
    var pH_avg = pH_sum/(feed1.length);
    var freshwater = 0;
    var pollutedwater = 0;
    for(var i = 0;i<arr1.length;i++){
      if(arr1[i] === 1) freshwater= freshwater+arr[i];
      else pollutedwater=pollutedwater+arr[i]
    }
    console.log(freshwater);
    console.log(pollutedwater)
    var blue_footprint =freshwater-pollutedwater;
    var grey_footprint = ((Math.pow(10,-pH_avg)*pollutedwater)/(Math.pow(10,-6.5))) - pollutedwater;

    res.status(200).json({blue:blue_footprint,grey:grey_footprint});
  } catch (error) {
    console.error("Error fetching articles:", error);
  }
})
app.get('/hardware1',async(req,res)=>{
  try {
    const response = await fetch("https://api.thingspeak.com/channels/2384227/fields/3.json?api_key=BT6UJWOLO6AQ9R5M");
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching articles:", error);
  }
})

app.get('/scan',async(req,res)=>{
  const apiKey = 'acc_27dbe281a374432';
const apiSecret = '79d1a5a90915c795ed533ddcd5c9970e';
const imageUrl = 'https://docs.imagga.com/static/images/docs/sample/japan-605234_1280.jpg';
const url = 'https://api.imagga.com/v2/tags?image_url=' + encodeURIComponent(imageUrl);
  try {
    const response = await got(url, {username: apiKey, password: apiSecret});
    res.send(response);
    console.log(response);
} catch (error) {
    console.log(error.response);
    res.send(response);
}
})



  
// Database connection 

mongoose.set("strictQuery",false);
mongoose.connect('mongodb+srv://komali:12345@cluster0.pz9lfdp.mongodb.net/EDResources?retryWrites=true&w=majority')
.then(()=>{
    console.log('connected to MongoDB')
}).catch((e)=>{
console.log(e)
}
)

app.listen(port,'0.0.0.0',()=>{
    console.log("Running on port" + port)
})