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

mongoose
  .connect(
    "mongodb+srv://new_user:X2FLCk4DHSYCcmNx@links.gu9y8vw.mongodb.net/?retryWrites=true&w=majority/links",
    options
  )
  .then((db) => {
    console.log("Mongodb OK");
  })
  .catch((err) => console.log(err));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", linkRoutes);

app.listen(PORT, () => {
  console.log("Server ON in port: ", PORT);
});
