const express = require('express');
const router = express.Router();
const {
  generateQRCode,
  getMyQRCodes,
  getQRCodeById,
  updateQRCode,
  deleteQRCode,
} = require('../controllers/qrCodeController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
  .post(protect, generateQRCode)
  .get(protect, getMyQRCodes);

router
  .route('/:id')
  .get(protect, getQRCodeById)
  .put(protect, updateQRCode)
  .delete(protect, deleteQRCode);

module.exports = router; 