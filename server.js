const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./router");
const app = express();

const port = 3002;
const host = 'localhost';

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://skeshan:KE1120@cluster0.c6nznra.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("MongoDB Error: ", error);
  }
};

connect();

const server = app.listen(port, host, () => {
  console.log(`Node server is listening on ${server.address().port}`);
});

app.use('/api',router);
