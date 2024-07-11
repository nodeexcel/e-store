const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CategorySchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = Category = mongoose.model("category", CategorySchema);
