const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const linkRoutes = require("./routes/linkRouter")
const path = require("path")

const app = express();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/",{
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", linkRoutes);

app.listen(PORT, () => {
  console.log("Server ON in port: ", PORT);
});
