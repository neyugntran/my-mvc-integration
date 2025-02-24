const NhanVien = require('../models/NhanVien');

exports.listNhanVien = async(req, res) => {
    try {
        const nhanviens = await NhanVien.find();
        res.render('nhanvien/list', { title: 'Danh sách Nhân Viên', nhanviens });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.createNhanVienForm = (req, res) => {
    res.render('nhanvien/create', { title: 'Thêm Nhân Viên' });
};

exports.createNhanVien = async(req, res) => {
    try {
        await NhanVien.create(req.body);
        res.redirect('/nhanvien');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.editNhanVienForm = async(req, res) => {
    try {
        const nhanVien = await NhanVien.findById(req.params.id);
        if (!nhanVien) return res.status(404).send('Không tìm thấy nhân viên');
        res.render('nhanvien/edit', { title: 'Chỉnh sửa Nhân Viên', nhanVien });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.editNhanVien = async(req, res) => {
    try {
        await NhanVien.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/nhanvien');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteNhanVien = async(req, res) => {
    try {
        await NhanVien.findByIdAndRemove(req.params.id);
        res.redirect('/nhanvien');
    } catch (error) {
        res.status(500).send(error.message);
    }
};