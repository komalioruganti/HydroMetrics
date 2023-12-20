const express = require('express')
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");
app.use(cors());
const port = 8000;
const items = require('./waterOfFood.js');
const wf = require('./models/wf.js');

app.post('/',async (req,res)=>{
    try{
        const insertedItems = await wf.insertMany(items);
        res.status(200).json(insertedItems);
    }
    catch(e){
        console.log(e.message);
        res.status(500).json({message:e.message
        })
    }
})

mongoose.set("strictQuery",false);
mongoose.connect('mongodb+srv://komali:12345@cluster0.pz9lfdp.mongodb.net/WaterOfFood?retryWrites=true&w=majority')
.then(()=>{
    console.log('connected to MongoDB')
}).catch((e)=>{
console.log(e)
}
)

app.listen(port,'0.0.0.0',()=>{
    console.log("Running on port" + port)
})