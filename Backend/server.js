require("dotenv").config()
const app = require("./src/app")
const connectDB = require("./src/db/db")


connectDB()
.then(()=>{
    app.listen(3000, ()=>{
    console.log("SERVER IS RUNNING ON PORT 3000");
    
});
}).catch((err)=>{
    console.error("SERVER IS NOT CONNECTED: ", err)
})