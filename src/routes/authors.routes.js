const express = require("express");
const router = express.Router();
const {
  getAuthors,
  createAuthors,
  getAuthorId,
  editAuthors,
  deleteAuthors,
} = require("../controllers/authors.controllers");

router.get("/authors", getAuthors);
router.get("/authors/:id", getAuthorId);
router.post("/authors/", createAuthors);
router.put("/authors/:id", editAuthors);
router.delete("/authors/:id", deleteAuthors);

module.exports = router;
