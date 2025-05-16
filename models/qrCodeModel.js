const mongoose = require('mongoose');

const qrCodeSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    content: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ['text', 'url', 'contact'],
    },
    color: {
      type: String,
      default: '#000000',
    },
    backgroundColor: {
      type: String,
      default: '#FFFFFF',
    },
    size: {
      type: Number,
      default: 200,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const QRCode = mongoose.model('QRCode', qrCodeSchema);

module.exports = QRCode; 