const studentData = require('../models/Studnet')




// ShowAllData to MongoDb.
const showHomePage = async (req, res) => {

    try {

        const getAllStudentData = await studentData.find();
        res.render('student', {
            getAllStudentData
        });
        
    } catch (error) {
        console.log(error.message);
    }

};


// createStudentData to mongoDB.
const createStudentData = async (req, res) => {

    try {
        await studentData.create({
            name : req.body.name,
            email : req.body.email,
            cell : req.body.cell,
            gender : req.body.gender,
            photo : req.file.filename
        });

    } catch (error) {
        console.log(error.message);
    };

    // Back to All Student Data-Table.
    res.redirect('/student');
};





// showSingleStudentData
const showSingleStudentData = async (req, res) => {

    try {
        
        const {id} = req.params;
        const getSingleStudentData = await studentData.findById(id);
        res.render('single', {
            getSingleStudentData
        })

    } catch (error) {
        console.log(error.message);
    }
};




// ShowEditForm.
const showEditForm = async (req, res) => {

    try {
        const {id} = req.params;
        const getSingleStudentData = await studentData.findById(id);
        res.render('edit', {
            getSingleStudentData
        })

    } catch (error) {
        console.log(error.message);
    }
}



// Submit Update_form.
const updateSingleData = async (req, res) => {

    try {

        const { id } = req.params;
        const { photo } = await studentData.findById(id)

        await studentData.findByIdAndUpdate(id, {
            name : req.body.name,
            email : req.body.email,
            cell : req.body.cell,
            gender : req.body.gender,
            photo : req.file ? req.file.filename : `${photo}`,
        })

        res.redirect('/student');
        
    } catch (error) {
        console.log(error.message);
    }
};




// Delete Single-Student-Data.
const deleteSingleStudentData = async (req, res) => {

    try {
        
        const { id } = req.params;
        await studentData.findByIdAndDelete(id);
        res.redirect('/student');

    } catch (error) {
        console.log(error.message);
    }

};








// Exports Controller.
module.exports = {
    showHomePage,
    createStudentData,
    showSingleStudentData,
    showEditForm,
    updateSingleData,
    deleteSingleStudentData
};