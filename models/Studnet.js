

const mongoose = require('mongoose');


// Create StudentSchema.
const studentSchema = mongoose.Schema({

    name : {
        type : String,
        required : true,
        trim : true,
        minLength : 5,
        maxLength : 15
    },
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    cell : {
        type : String,
        required : true,
        trim : true
    },
    gender : {
        type : String,
        required : true,
        trim : true,
        enum : ["Male", "Female"]
    },
    photo : {
        type : String,
    }

},{
    timestamps : true
});


// Create Student Collection
module.exports = mongoose.model('Student', studentSchema);