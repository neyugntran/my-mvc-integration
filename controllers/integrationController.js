const NhanVienLuong = require('../models/NhanVienLuong');

exports.listIntegratedData = async(req, res) => {
    try {
        const integratedData = await NhanVienLuong.getReport();
        res.render('integration/list', { title: 'Báo cáo Lương Nhân Viên', integratedData });
    } catch (error) {
        res.status(500).send(error.message);
    }
};