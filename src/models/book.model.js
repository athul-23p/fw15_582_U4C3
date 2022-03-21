const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    likes: { type: Number, required: true },
    coverImage: { type: String },
    content: { type: String, required: true },
    publication: {
      type: mongoose.Schema.Types.ObjectId,
      path: "publication",
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      path: "user",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('book',bookSchema);