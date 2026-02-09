const taskModel = require("../models/task.model")

async function createTask(req,res) {
    const {title, description, status,date} = req.body

    const task = await taskModel.create({
        title,
        description,
        status,
        date
    })

    res.status(201).json({
        message: "task created successfully",
        task
    })
}

async function getTask(req,res){
    const task = await taskModel.find()
    res.status(200).json({
        message: "task fetched successfully",
        task
    })

}

async function putTask(req,res) {
    const {id} = req.params
    const {title, description, status} = req.body
    const task = await taskModel.findByIdAndUpdate(id, {
        title,
        description,
        status
    })
    res.status(200).json({
        message: "task updated successfully",
        task
    })
}

async function deleteTask(req,res) {
    const {id} = req.params
    const task = await taskModel.findByIdAndDelete(id)
    res.status(200).json({
        message: "task deleted successfully",
        task
    })
}



module.exports = {createTask, getTask, putTask, deleteTask};