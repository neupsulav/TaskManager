const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must be given a value"],
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = new mongoose.model("Task", taskSchema);
