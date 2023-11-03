const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema(
  {

    time: {
      type: String,
      trim: true,
    },

    date: {
      type: String,
      trim: true,
    },

    venue: {
      type: String,
      trim: true,
    },

  },
  {
    timestamps: {
      type: Date,
      default: Date.now,
    },
  }
);

module.exports = mongoose.model("notices", noticeSchema);
