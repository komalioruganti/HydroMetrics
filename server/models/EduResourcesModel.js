const mongoose = require('mongoose');

const EduResourcesSchema = mongoose.Schema(
    {
        title:{
            type: String,
        },
        publishedAt :{
           type: String, 
        },
        content:{
            type: String,
        },
        updatedAt:{
            type: String
        }
    }
)

const EduResource = mongoose.model('EducationalResource',EduResourcesSchema);
module.exports = EduResource;