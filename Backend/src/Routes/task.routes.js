const express = require("express")
const taskController = require("../controller/task.controller")
const router = express.Router()

router.post('/create-task',taskController.createTask)
router.get('/get-task', taskController.getTask)
router.put('/update-task/:id', taskController.putTask)
router.delete('/delete-task/:id', taskController.deleteTask)

module.exports = router;