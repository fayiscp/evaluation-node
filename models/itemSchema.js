let mongoose = require("mongoose");

let itemSchema = new mongoose.Schema({
  itemname: {
    type: String,
    unique: true,
  },
  Brandname: {
    type: String,
    unique: true,
  },
  Category: {
    type: String,
  },
  Price: {
    type: Number,
  },
});

module.exports = mongoose.model("item", itemSchema);
