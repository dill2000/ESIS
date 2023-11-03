const mongoose = require("mongoose");

const gasSchema = new mongoose.Schema(
  {
    
    gas_id: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      index: true,
      sparse: true,
    },

    customer_id: {
      type: String,
      trim: true,
    },

    gas_sized: {
      type: String,
      trim: true,
    },

    customer_purchased_date: {
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

module.exports = mongoose.model("gaslogs", gasSchema);
