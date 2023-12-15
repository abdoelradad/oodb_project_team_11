const express = require("express");
const mongoose = require("mongoose");
let app = express();

mongoose.connect("mongodb://0.0.0.0:27017/library", (err) => {
  if (!err) console.log("DB is Connected");
  else console.log("ops !");
});
// assigning a port to let the server listen on it -->
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

// assigning a port to let the server listen on it ( another way of doing )-->

// app.listen(3000 , function(){
//     console.log("Hello there $")
// })

// categories collection
const categories_schema = new mongoose.Schema({
  name: String,
});
let category_model = new mongoose.model("Categories", categories_schema);
// //---------------------------------------------
// // writers collection
const writers_schema = new mongoose.Schema({
  name: String,
  rate: String,
});
let writers_model = new mongoose.model("Writers", writers_schema);
// //---------------------------------------------
// // Comments collection
const comments_schema = new mongoose.Schema({
  comment: String,
});
let comments_model = new mongoose.model("Comments", comments_schema);
// //---------------------------------------------
// // Users collection
const users_schema = new mongoose.Schema({
  Email: String,
  password: String,
});
let users_model = new mongoose.model("Users", users_schema);
// //---------------------------------------------
// // // Adding categories
// let StoriesCategory = new category_model({
//     name : "قصص"
// }).save();
// let novelsCategory = new category_model({
//     name : "روايات"
// }).save();
// let quotesCategory = new category_model({
//     name : "إقتباسات"
// }).save();
// // //---------------------------------------------
// // // Adding Writers
// let firstWriter = new writers_model({
//     name : "أحمد خالد توفيق"
// }).save();
// let secondWriter = new writers_model({
//     name : "شكسبير"
// }).save();
// let thirdWriter = new writers_model({
//     name : "سقراط"
// }).save();

// // //---------------------------------------------
// // // Adding Comments
// let firstComment = new comments_model({
//     comment : "موقع رائع و سهل الاتسخدام انصح به و بشدة "
// }).save();
// let secondComment = new comments_model({
//     comment : "موقع سئ جدا و ردئ موت"
// }).save();
// let thirdComment = new comments_model({
//     comment : "فلسطين حرة"
// }).save();

// // //---------------------------------------------
// // // Adding Users
// let firstUser = new users_model({
//     Email : "Abdelrahman Elrdad",
//     password : "123456789"
// }).save();
// let secondtUser = new users_model({
//     Email : "Omar mohsen",
//     password : "0123456789"
// }).save();
// let thirdUser = new users_model({
//     Email : "mohamed eltabaey",
//     password : "00000000"
// }).save();

//----------------------------------
//http verb ( get )
app.get("/", (req, res) => {
  res.send("welcome sir !");
});

app.get("/Users", async (req, res) => {
  let allUsers = await users_model.find();
  res.status(200);
  res.json(allUsers);
  console.log(allUsers.length);
});
app.get("/Writers", async (req, res) => {
  let allWriters = await writers_model.find();
  res.status(200);
  res.json(allWriters);
  console.log(allWriters.length);
});
app.get("/categories", async (req, res) => {
  let allCaregories = await category_model.find();
  res.status(200);
  res.json(allCaregories);
  console.log(allCategories.length);
});
app.get("/Comments", async (req, res) => {
  let allComments = await comments_model.find();
  res.status(200);
  res.json(allComments);
  console.log(allComments.length);
});
//----------------------------------
// http verb ( post )
app.post("/Users", async (req, res) => {
  let newUser = await users_model({
    Email: "Ahmed",
    password: "11111111",
  }).save();
  res.status(201);
  res.json("successful operation !");
});
app.post("/Comments", async (req, res) => {
  let newComment = await comments_model({
    comment: "Testing post verb ",
  }).save();
  res.status(201);
  res.json("A comment has been added");
});
app.post("/categories", async (req, res) => {
  let newCategory = await categories_model({
    name: "سحر ",
  }).save();
  res.status(201);
  res.json("A category has been added");
});
app.post("/Writers", async (req, res) => {
  let newWriter = await writers_model({
    name: "Testing post verb ",
    rete: "4.5",
  }).save();
  res.status(201);
  res.json("A new writer has been added");
});
//------------------------------------
// http verb ( put )
app.put("/update/:_id", async (req, res) => {
  console.log(req.params);
  const data = await users_model.updateOne(req.params, {
    $set: {
      Email: "",
      password: "",
    },
  });
  res.send(data);
});
app.put("/update/:_id", async (req, res) => {
  console.log(req.params);
  const data = await category_model.updateOne(req.params, {
    $set: {
      Name: "  ",
    },
  });
  res.send(data);
});
app.put("/update/:_id", async (req, res) => {
  console.log(req.params);
  const data = await comments_model.updateOne(req.params, {
    $set: {
      comment: "  ",
    },
  });
  res.send(data);
});
app.put("/update/:_id", async (req, res) => {
  console.log(req.params);
  const data = await writers_model.updateOne(req.params, {
    $set: {
      name: "  ",
    },
  });
  res.send(data);
});

//------------------------------------
// http verb ( delete by id )
app.delete("/delete/:_id", async (req, res) => {
  console.log(req.params);
  let data = await users_model.deleteOne(req.params);
  res.send(data);
  res.json("User has been deleted successfully :D");
});
app.delete("/delete/:_id", async (req, res) => {
  console.log(req.params);
  let data = await categories_model.deleteOne(req.params);
  res.send(data);
  res.json("User has been deleted successfully :D");
});
app.delete("/delete/:_id", async (req, res) => {
  console.log(req.params);
  let data = await writers_model.deleteOne(req.params);
  res.send(data);
  res.json("User has been deleted successfully :D");
});
app.delete("/delete/:_id", async (req, res) => {
  console.log(req.params);
  let data = await comments_model.deleteOne(req.params);
  res.send(data);
  res.json("User has been deleted successfully :D");
});
