const express = require("express");
const router = express.Router();
const {
  getBooks,
  createBooks,
  getBookId,
  editBooks,
  deleteBooks,
} = require("../controllers/books.controllers");

router.get("/books", getBooks);
router.get("/books/:id", getBookId);
router.post("/books", createBooks);
router.put("/books/:id", editBooks);
router.delete("/books/:id", deleteBooks);

module.exports = router;
