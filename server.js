const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const expressLayouts = require('express-ejs-layouts');
const mongoDBconnection = require('./config/db');
const studentRoute = require('./routes/studentRoute');



// Init Express.
const app = express();

// Init EnvironmentVariables.
dotenv.config();
const PORT = process.env.PORT || 4000;

// Init Static-Folder.
app.use(express.static('public'));

// Init EJS.
app.set("view engine", "ejs");
app.set("layout", "layouts/app");
app.use(expressLayouts);

// DataManage.
app.use(express.json());
app.use(express.urlencoded({ extended : false }));


// Connect Router.
app.use('/student', studentRoute);



// Create Server.
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.bgMagenta.black);
    mongoDBconnection();
});


