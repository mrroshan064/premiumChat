const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const port = process.env.PORT || 3001;


connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", require("./routes/userRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));