const express = require("express");
const errorHandler = require("./utils/errorHandler");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
})

const upload = multer({ storage });

app.use(express.json());

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); 

// for parsing multipart/form-data
// app.use(upload.array()); 
app.use(express.static('public'))

// Version 1 routes
const routes = require("./routes");

app.use("/api", routes);


app.use(errorHandler)

module.exports = app;
