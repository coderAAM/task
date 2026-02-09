const mongoose = require("mongoose")


const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "complete"],
        default: "pending"
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const taskModel = mongoose.model("task", taskSchema)

module.exports = taskModel;