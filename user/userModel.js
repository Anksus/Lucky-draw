const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  tickets: {
    type: Number,
    default: 0,
  },
  luckyDrawParticipation: [
    {
      event: {
        type: String,
      },
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
