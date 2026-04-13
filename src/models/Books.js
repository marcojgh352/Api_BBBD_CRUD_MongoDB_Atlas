const mongoose = require("mongoose");


const ALLOWED_GENRES = ["Novela histórica", "aventura", "filosofía", "distopía", "terror"];

const bookSchema = {
  title: {
    type: String,
    required: [true, "Title is required."],
    trim: true,
  },
  genre: {
    type: String,
    require: [true, "Genre is required."],
    trim: true,
    enum: {
      values: ALLOWED_GENRES,
    },
  },
  publishedYear: {
    type: Number,
    require: true,
    trim: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId, // El tipo que necesitamos para poder hacer el populate.
    ref: "Author", // La referencia del Schema.
  },
};

module.exports = mongoose.model("Book", bookSchema);
