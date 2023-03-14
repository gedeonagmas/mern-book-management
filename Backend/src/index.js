const express = require("express");
const route = require("./route/router.js");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://ravisingh007ravi:Ravi1234@cluster0.w9hbwbb.mongodb.net/BookManagment?retryWrites=true&w=majority",
    { UseNewUrlParser: true }
  )
  .then(() => console.log("Mongo-Db is connected"))
  .catch((err) => console.log(err.message));

app.use("/", route);

app.listen(process.env.PORT || 4000, function () {
  console.log("listening at " + (process.env.PORT || 4000));
});
