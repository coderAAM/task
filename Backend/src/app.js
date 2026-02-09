const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const authRouter = require("./Routes/auth.routes")
const taskRouter = require("./Routes/task.routes")
require("dotenv").config()

const app = express()
app.use(express.json())
app.use(cors({
    origin: ["http://127.0.0.1:5500", "http://localhost:5173", "http://127.0.0.1:5173"], // Vite + Live Server
    credentials: true // Allow cookies to be sent
}))


app.use(cookieParser())

app.use("/api/auth", authRouter)
app.use("/api/task", taskRouter)


module.exports = app;