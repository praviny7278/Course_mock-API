const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
    name: String,
    description:String
})


const courseModel = mongoose.model("course", courseSchema)
module.exports = courseModel

