const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")


async function userRegister(req,res) {
    
        const {name, email, password} = req.body

        const isAlreadyExists = await userModel.findOne({email: req.body.email})

        if(isAlreadyExists){
            return res.status(401).json({
                message: "user already exits"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await userModel.create({
            name,
            email,
            password: hashedPassword
        })

        const token = jwt.sign({
            id: user._id,
            name: user.name,
            email: user.email
        },process.env.JWT_SECRET_KEY)

        res.cookie("token", token)

        res.status(201).json({
            message: "user registered successfully",
            user
        })
    } 

async function userLogin(req,res) {
    const {email, password} = req.body

    $or:[
        {email: email},
        {password: password}
    ]
    const userNotExits = await userModel.findOne({email: req.body.email})

    if(!userNotExits){
        return res.status(401).json({
            message: "user not exits"
        })

    }
    const isPasswordCorrect = await bcrypt.compare(password, userNotExits.password)

    if(!isPasswordCorrect){
        return res.status(401).json({
            message: "password is incorrect"
        })

    }
    const token = jwt.sign({
        id: userNotExits._id,
        name: userNotExits.name,
        email: userNotExits.email
    },process.env.JWT_SECRET_KEY,{
        expiresIn: "1d"
    })

    res.cookie("token", token)

    res.status(200).json({
        message: "user logged in successfully",
        userNotExits
    })

}



module.exports = {userRegister, userLogin};