const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();
const {ServerApiVersion} = require("mongodb");
//Middlewares
app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{
res.setHeader("Access-Control-Allow-Credentials", true);
    res.send("API is running..");
});
app.use("/books", router); //localhost:5030/books
mongoose.connect("mongodb+srv://root:root@cluster0.f8bifn6.mongodb.net/bookStore?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 }).then(() => console.log("Connected to database"))
  .then(() => {
    app.listen(5030);
  })
  .catch((err) => console.log(err));
console.log("Hey v..");
