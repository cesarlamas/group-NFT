const User = require("../models/model.user")


exports.getAllUsers = async(req,res) => {
    try {
        const users = await User.find()
        res.status(200)
        res.send(users)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

exports.addUser = async(req,res) => {
    try {
        const user = req.body
        console.log(user)
        const add = await User.create(user)
        res.status(201);
        res.send(add)
    } catch (error) {
        console.log(error)
    }
}
