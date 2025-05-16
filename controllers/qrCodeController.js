const asyncHandler = require('express-async-handler');
const QRCode = require('../models/qrCodeModel');

// @desc    Generate a new QR code
// @route   POST /api/qrcodes
// @access  Private
const generateQRCode = asyncHandler(async (req, res) => {
  const { content, type, color, backgroundColor, size, name } = req.body;

  const qrCode = await QRCode.create({
    user: req.user._id,
    content,
    type,
    color,
    backgroundColor,
    size,
    name,
  });

  if (qrCode) {
    res.status(201).json(qrCode);
  } else {
    res.status(400);
    throw new Error('Invalid QR code data');
  }
});

// @desc    Get all QR codes for a user
// @route   GET /api/qrcodes
// @access  Private
const getMyQRCodes = asyncHandler(async (req, res) => {
  const qrCodes = await QRCode.find({ user: req.user._id });
  res.json(qrCodes);
});

// @desc    Get QR code by ID
// @route   GET /api/qrcodes/:id
// @access  Private
const getQRCodeById = asyncHandler(async (req, res) => {
  const qrCode = await QRCode.findById(req.params.id);

  if (qrCode && qrCode.user.toString() === req.user._id.toString()) {
    res.json(qrCode);
  } else {
    res.status(404);
    throw new Error('QR code not found');
  }
});

// @desc    Update QR code
// @route   PUT /api/qrcodes/:id
// @access  Private
const updateQRCode = asyncHandler(async (req, res) => {
  const qrCode = await QRCode.findById(req.params.id);

  if (qrCode && qrCode.user.toString() === req.user._id.toString()) {
    qrCode.content = req.body.content || qrCode.content;
    qrCode.type = req.body.type || qrCode.type;
    qrCode.color = req.body.color || qrCode.color;
    qrCode.backgroundColor = req.body.backgroundColor || qrCode.backgroundColor;
    qrCode.size = req.body.size || qrCode.size;
    qrCode.name = req.body.name || qrCode.name;

    const updatedQRCode = await qrCode.save();
    res.json(updatedQRCode);
  } else {
    res.status(404);
    throw new Error('QR code not found');
  }
});

// @desc    Delete QR code
// @route   DELETE /api/qrcodes/:id
// @access  Private
const deleteQRCode = asyncHandler(async (req, res) => {
  const qrCode = await QRCode.findById(req.params.id);

  if (qrCode && qrCode.user.toString() === req.user._id.toString()) {
    await qrCode.deleteOne();
    res.json({ message: 'QR code removed' });
  } else {
    res.status(404);
    throw new Error('QR code not found');
  }
});

module.exports = {
  generateQRCode,
  getMyQRCodes,
  getQRCodeById,
  updateQRCode,
  deleteQRCode,
}; 