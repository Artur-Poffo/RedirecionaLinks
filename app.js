const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const linkRoutes = require("./routes/linkRouter")
const path = require("path")

const app = express();

mongoose
  .connect(
    "mongodb+srv://new_user:666x@links.gu9y8vw.mongodb.net/?retryWrites=true&w=majority/Links")
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
