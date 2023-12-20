const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
  },
  password: {
    type: String,
  },
  userData: [{
    qData: [
      {
        
        q:{ type: String},
        ans:{type:  String},
      },
    ],
    household: [
      {
      
        q:{ type: String},
        ans:{type:  String},
      },
    ],
    waterConsumption: [
      {
        
        q:{ type: String},
        ans:{type:  String},
      },
    ],
    dishAndLaundry: [
      {
        q:{ type: String},
        ans:{type:  String},
      },
    ],
    plantCare: [
      {
        q:{ type: String},
        ans:{type:  String},
      },
    ],
    vehicle: [
      {
        q:{ type: String},
        ans:{type:  String},
      },
    ],
    food: [
      {
        q:{ type: String},
        ans:{type:  String},
      },
    ],
    pets: [
      {
        q:{ type: String},
        ans:{type:  String},
      },
    ],
    recycle: [
      {
        q:{ type: String},
        ans:{type:  String},
      },
    ],}
],updatedAt: {
    type: String
  },
  location: {
    longitude: { type: String },
    latitude: { type: String },
  },
});

const EduResource = mongoose.model("user", UserSchema);
module.exports = EduResource;
