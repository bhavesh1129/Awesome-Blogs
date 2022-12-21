const express = require('express');
const app = express();
const multer = require('multer');
const dotenv = require('dotenv');
const path = require("path");
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');
dotenv.config();

//Middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

//MongoDB Connection
mongoose.set("strictQuery", false);
mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log("Connected to MongoDB!"))
    .catch((err) => console.log(err));

//Multer
const storage = multer.diskStorage({
    destination: (req, file, callbackfunc) => {
        callbackfunc(null, "images");
    },
    filename: (req, file, callbackfunc) => {
        callbackfunc(null, req.body.name);
    },
});

const upload = multer({
    storage: storage
});

app.post("/server/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been successfully uploaded");
});


//Routes
app.use("/server/auth", authRoute);
app.use("/server/users", userRoute);
app.use("/server/posts", postRoute);
app.use("/server/categories", categoryRoute);


app.listen("5000", () => {
    console.log("Server is running on port 5000!");
})