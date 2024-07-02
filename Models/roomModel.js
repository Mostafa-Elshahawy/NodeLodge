const mongoose = require("mongoose");

const { Schema } = mongoose;

const roomSchema = new Schema({
  roomNumber: {
    type: Number,
    required: true,
    unique: true
  },
  type: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  amenities: [
    {
      type: String
    }
  ],
  isAvailable: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Room = mongoose.model("Room", roomSchema);
module.exports = Room;
