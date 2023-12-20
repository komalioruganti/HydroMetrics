const mongoose = require('mongoose');

const wfSchema = mongoose.Schema(
    {
        title:{
            type: String,
        },
        waterFootprint:{
            type:String
        }
    }
)

const wf = mongoose.model('EducationalResource',wfSchema);
module.exports = wf;