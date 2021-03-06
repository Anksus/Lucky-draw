const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  startsAt: {
    type: Date,
    required: true,
    unique: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  reward: {
    type: String,
    required: true,
    trim: true,
  },
  participants: [
    {
      email: {
        type: String,
      },
    },
  ],
  winner: {
    type: String,
    trim: true,
  },
  running: {
    type: Boolean,
    default: false,
  },
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
