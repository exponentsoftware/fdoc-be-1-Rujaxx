const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    username: {
        type : String,
        required : [true,'Please add a username']
    },
    title: {
        type : String,
        required : [true,'Please add a title']
    },
    desc: {
        type : String,
    },
    isComplete:{
        type : Boolean,
        default : false
    },
    category:[String],
    createdAt:{
        type : Date,
        default : Date.now
    },
    updatedAt: {
        type: Date,
        default: new Date()
    }
},{timestamps : true })


module.exports = mongoose.model('Task',TaskSchema);