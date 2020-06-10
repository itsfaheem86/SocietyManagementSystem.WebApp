const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const logSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  date: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Log", logSchema);
