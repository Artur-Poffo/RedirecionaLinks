const Link = require("../models/linkModel");

const redirect = (req, res) => {
  let title = req.params.title;

  Link.findOne({ title: title })
    .then((doc) => {
      console.log(doc);
      res.redirect(doc.url);
    })
    .catch(() => res.send("Rota não encontrada!!!"));
};

const addLink = async (req, res) => {
  let link = new Link(req.body);

  try {
    let doc = await link.save();
    res.render("LinkCriado");
  } catch (error) {
    res.render("NewLink", { error });
  }
};

const listAll = async (req, res) => {
  try {
    let links = await Link.find({});
    res.render("index", { links });
  } catch (error) {
    res.send("<h1>Nenhum link encontrado!</h1>");
  }
};

const deleteLink = async (req, res) => {
  let ID = req.params.id;

  if (!ID) {
    let ID = req.body.id;
  }

  try {
    res.send(await Link.findByIdAndDelete(ID));
  } catch (error) {
    res.status(404).send(error)
  }
};

const SelectLink = async (req,res) => {
  let id = req.params.id

  try {
    let doc = await Link.findById(id)
    res.render("EditLink", {error: false, body: doc})
  } catch (error) {
    res.status(404).send(error);
  }
}

const editLink = async (req,res) => {
  let link = {}
  link.title = req.body.title;
  link.desc = req.body.desc;
  link.url = req.body.url;

  let ID = req.params.id;

  if (!ID) {
    let ID = req.body.id;
  }

  try {
    let doc = await Link.findByIdAndUpdate(ID, link)
    res.redirect("/")
  } catch (error) {
    res.render("EditLink", {error, body: req.body})
  }
}

module.exports = { redirect, addLink, listAll, deleteLink, SelectLink, editLink };
