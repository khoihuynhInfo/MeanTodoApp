'use strict';
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const TodoSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model("todoModel", TodoSchema);