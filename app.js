const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const linkRoutes = require("./routes/linkRouter")
const path = require("path")

const app = express();

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  family: 4, // Use IPv4, skip trying IPv6
};

mongoose.connect("mongodb://localhost/Links", options)
.then(db => {
    console.log("Mongodb OK")
}).catch(err => console.log(err))

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", linkRoutes);

app.listen(PORT, () => {
  console.log("Server ON in port: ", PORT);
});
