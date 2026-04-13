const express = require("express");
const app = express();
const routesAuthors = require("./routes/authors.routes");
const routesBooks = require("./routes/books.routes");
const { connectDB } = require("./config/db");

require("dotenv").config()

const PORT = 3000;

app.use(express.json()); // Parse de datos que vengan del body.

app.get("/", (req, res) => {
  res.send("It works.");
});

app.use("/api", routesAuthors);
app.use("/api", routesBooks);

connectDB();

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}.`);
});

//===//
app.use((req, res) => {
  res.status(404).json({
    error: "Page not found.",
  });
});
//===//
