const express = require('express');
const router = express.Router();
const nhanVienController = require('../controllers/nhanVienController');

router.get('/', nhanVienController.listNhanVien);
router.get('/create', nhanVienController.createNhanVienForm);
router.post('/create', nhanVienController.createNhanVien);
router.get('/edit/:id', nhanVienController.editNhanVienForm);
router.post('/edit/:id', nhanVienController.editNhanVien);
router.get('/delete/:id', nhanVienController.deleteNhanVien);

module.exports = router;