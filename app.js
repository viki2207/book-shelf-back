const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();
//Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); //localhost:5030/books
mongoose
  .connect(
    "mongodb+srv://root:root@cluster0.f8bifn6.mongodb.net/bookStore?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to database"))
  .then(() => {
    app.listen(5030);
  })
  .catch((err) => console.log(err));
console.log("Hey v..");
