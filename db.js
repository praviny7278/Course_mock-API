const mongoose = require('mongoose')


const connection = mongoose.connect("mongodb+srv://praveen:praveen@cluster0.dhjmuqu.mongodb.net/course_list?retryWrites=true&w=majority")



module.exports = connection