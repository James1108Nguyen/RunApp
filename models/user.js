const mongoose = require("mongoose")
var uniqueValidator = require("mongoose-unique-validator")


// Schema là lược đồ database
let user_schema = mongoose.Schema({

    email: {
        type : String,
        default: "Chưa có thông tin"
    },

    username: {
        type: String,
        unique: true, 
        require: true
    },
    password:{
        type: String,
        require: true
    },
})


let userInfo_schema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId ,
        ref : 'User',
        require: true,
        unique: true
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    birthday: {
        type: String
    },
    fullname: {
        type: String
    },
    image: {
        type: String
    },
    gender: {
        type: String,
    },
    note: {
        type:String,
    },
    height:{
        type: Number,
    },
    weight: {
        type: Number,
    },
    description: {
        type: String,
    },
    job: {
        type: String,
    },
})

// Unique Check
user_schema.plugin(uniqueValidator)
userInfo_schema.plugin(uniqueValidator)

exports.User = mongoose.model("User", user_schema)

exports.userInfo = mongoose.model("userInfo", userInfo_schema)

