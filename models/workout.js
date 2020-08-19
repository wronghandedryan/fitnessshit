const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Workout = new Schema({
  date: {
    type: Date,
    default: Date.now()
  },

 exercises: {
    type: Array,
    default: []
  }
});

module.exports = mongoose.model("Workout", Workout);
