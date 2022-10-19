const express = require('express');
const multer = require('multer');
const path = require('path');
const { showHomePage, createStudentData, showSingleStudentData, showEditForm, updateSingleData, deleteSingleStudentData } = require('../controllers/studentController');



// Student Photo Multer.
const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        if( file.mimetype == 'image/jpeg' || file.mimetype == 'image/png' || file.mimetype == 'image/jpg'){
            cb( null, path.join(__dirname, '../public/studentImages'));
        };
    },
    filename : (req, file, cb) => {
        cb( null, Date.now() + '_' + Math.floor(Math.random() * 10000000 ) + '_' + file.originalname ); 
    }
})
const studentPhotoMulter = multer({
    storage : storage
}).single('student_photo_upload')



// Init router.
const router = express.Router();



// Routes.
router.route('/').get(showHomePage).post(studentPhotoMulter, createStudentData);
router.route('/:id').get(showSingleStudentData)
router.route('/edit/:id').get(showEditForm).post(studentPhotoMulter, updateSingleData)
router.route('/delete/:id').get(deleteSingleStudentData)



// Exports routes.
module.exports = router;