const express = require('express')
const courseModel = require('../schema/cs')
const courseRout = express.Router()

courseRout.get("/", async (req, res) => {
    try {
        const courses = await courseModel.find();
        res.json(courses)
    } catch (error) {
        res.send(error)
    }
});


courseRout.get("/:id", async (req, res) => {
    const courseId = req.params.id
 
    try {
        const courses = await courseModel.findOne({_id:courseId});
        res.json(courses);
    } catch (error) {
        res.send(error)
    }
});

// Add a Course to the database
courseRout.post("/add", async (req, res)=> {
    try {
        const course = new courseModel(req.body)
        await course.save();
        res.json(course)
    } catch (error) {
        res.send(error)
    }
});

courseRout.patch("/update/:id", async (req, res) => {
    const courseId = req.params.id;
    const updateCourse = req.body
    try {
        const course = await courseModel.findByIdAndUpdate({_id:courseId}, updateCourse)
        res.send(course)
    } catch (error) {
        res.send(error)
    }
})


courseRout.delete("/del/:id", async (req, res) => {
    const courseId = req.params.id
    try {
         await courseModel.findByIdAndDelete({_id:courseId})
         res.send("deleted!");
    } catch (error) {
        res.send(error)
    }
});

module.exports = courseRout