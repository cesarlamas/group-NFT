const mongoose = require('./model.index')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required: true
    }
})

const User = mongoose.model("user", userSchema);

module.exports = User