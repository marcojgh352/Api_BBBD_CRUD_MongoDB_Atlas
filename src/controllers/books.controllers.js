const Book = require("../models/Books");
const Author = require("../models/Authors");

const getBooks = async (req, res) => {
  try {
    const books = await Book.find().populate("author", [
      "name",
      "country",
      "birthday",
    ]);
    res.json(books);
  } catch (err) {
    console.log(err);
  }
};

const getBookId = async (req, res) => {
  const id = req.params.id;

  try {
    const book = await Book.findById(id);
    if (!book) {
      res.status(404).json({
        msg: "ID not found",
      });
    } else {
      res.status(200).json({ book });
    }
  } catch (err) {
    console.log(err);
  }
};

const createBooks = async (req, res) => {
  try {
    const author = await Author.findById(req.body.author);

    if (!author) {
      res.status(404).json({ msg: "El autor no existe" });
    }
    const book = await Book.create(req.body);

    res.status(201).json({ book });
  } catch (err) {
    console.log(err);
  }
};

const editBooks = async (req, res) => {
  const id = req.params.id;
  try {
    const editBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ editBook });
  } catch (err) {
    console.log(err);
  }
};

const deleteBooks = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteBook = await Book.findByIdAndDelete(id);
    res.json(deleteBook);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getBooks,
  createBooks,
  getBookId,
  editBooks,
  deleteBooks,
};
