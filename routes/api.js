const express = require('express');
const router = express.Router();
const multer = require('multer');

const komikController = require('../controllers/komikController');

// Konfigurasi multer untuk upload gambar (disimpan sebagai buffer)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Routes komik
router.post('/komik', upload.single('gambar'), komikController.createKomik);
router.get('/komik', komikController.getAllKomik);
router.get('/komik/:id', komikController.getKomikById);
router.put('/komik/:id', upload.single('gambar'), komikController.updateKomik);
router.delete('/komik/:id', komikController.deleteKomik);

module.exports = router;
