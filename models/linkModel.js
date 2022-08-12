const mongoose = require("mongoose");

// CRIANDO LINK

const LinkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: String,
  url: { type: String, required: true },
  click: { type: Number, default: 0 },
});

// const Link = mongoose.model("Link", LinkSchema);

// let link = new Link({
//     title: "Youtube",
//     desc: "Meu canal no youtube!",
//     url: "https://youtube.com",
// })

// link.save().then(doc => {
//     console.log(doc)
// }).catch(err => console.log(err))

module.exports = mongoose.model("Link", LinkSchema);