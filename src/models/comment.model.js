const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    body: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      path: "user",
      required: true,
    },
    book: {
      type: mongoose.Schema.Types.ObjectId,
      path: "book",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('comment',commentSchema);