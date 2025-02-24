const express = require('express');
const router = express.Router();
const bangLuongController = require('../controllers/bangLuongController');

router.get('/', bangLuongController.listBangLuong);
router.get('/create', bangLuongController.createBangLuongForm);
router.post('/create', bangLuongController.createBangLuong);
router.get('/edit/:id', bangLuongController.editBangLuongForm);
router.post('/edit/:id', bangLuongController.editBangLuong);
router.get('/delete/:id', bangLuongController.deleteBangLuong);

module.exports = router;