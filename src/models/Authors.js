const mongoose = require("mongoose");

const authorSchema = {
  name: {
    type: String,
    required: [true, "Name is required."],
    trim: true,
  },
  country: {
    type: String,
    default: "Desconocido",
    trim: true,
  },
  birthday: {
    type: Number,
  },
};

module.exports = mongoose.model("Author", authorSchema);
