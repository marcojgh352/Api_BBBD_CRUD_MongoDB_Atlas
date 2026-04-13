const Author = require("../models/Authors");

const getAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (err) {
    console.log(err);
  }
};

const getAuthorId = async (req, res) => {
  const id = req.params.id;

  try {
    const author = await Author.findById(id);
    if (!author) {
      res.status(404).json({
        msg: "ID not found",
      });
    } else {
      res.status(200).json({ author });
    }
  } catch (err) {
    console.log(err);
  }
};

const createAuthors = async (req, res) => {
  try {
    const author = await Author.create(req.body);
    res.status(201).json({
      elements_created: 1,
      data: author,
    });
  } catch (err) {
    console.log(err);
  }
};

const editAuthors = async (req, res) => {
  const id = req.params.id;
  try {
    const editAuthor = await Author.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ editAuthor });
  } catch (err) {
    console.log(err);
  }
};

const deleteAuthors = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteAuthor = await Author.findByIdAndDelete(id);
    res.json(deleteAuthor);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAuthors,
  createAuthors,
  getAuthorId,
  editAuthors,
  deleteAuthors,
};
