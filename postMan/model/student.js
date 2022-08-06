const { default: mongoose } = require("mongoose")
const mogoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    role:{
        type: String

    }

})

const Student = mongoose.model("Student", studentSchema)

module.exports = Student