//requiring packages

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");
const expressSession = require("express-session");
const authMiddleware = require("./middleware/authMiddleware");
const homeController = require("./controllers/homeController");
const signupController = require("./controllers/signupController");
const loginController = require("./controllers/loginController");
const aboutController = require("./controllers/aboutController");
const featuresController = require("./controllers/featuresController");
const allStudentsController = require("./controllers/allStudentsController");
const searchStudentController = require("./controllers/searchStudentController");
const studentDetailsController = require("./controllers/studentDetailsController");
const addStudentController = require("./controllers/addStudentController");
const logoutController = require("./controllers/logoutController");
const morgan = require("morgan");
const editStudentController = require("./controllers/editStudentController");
const deleteStudentController = require("./controllers/deleteStudentController");

let accessLogStream = fs.createWriteStream(path.join(__dirname, "logs.html"), {
  flags: "a",
});
app.use(morgan("dev", { stream: accessLogStream }));

//CONNECTION TO DATABASE
mongoose.connect("mongodb://localhost/crud-app-database", {
  useNewUrlParser: true,
});

//MIDDLEWARES
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  expressSession({
    secret: "Abena Dufie",
    resave: false,
    saveUninitialized: true,
  })
);

//ROUTES
app.get("/", homeController);
app.post("/login", loginController);
app.post("/signup", signupController);
app.get("/about", aboutController);
app.get("/features", featuresController);
app.get("/allstudents", authMiddleware, allStudentsController);
app.get("/search", authMiddleware, searchStudentController.searchStudent);
app.get("/studentdetails/:id", studentDetailsController); //add authMiddleware
app.post("/addstudent", authMiddleware, addStudentController);
app.get("#editstudentdetails/:id", authMiddleware, editStudentController);
app.post("/delete/:id", authMiddleware, deleteStudentController);
app.post("/logout", logoutController);

//add a route for notfound
//add a route for errors

app.listen(3000, () => {
  console.log(`Server is running on Port 3000`);
});
