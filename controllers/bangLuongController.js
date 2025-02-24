const BangLuong = require('../models/BangLuong');
const NhanVien = require('../models/NhanVien');

exports.listBangLuong = async(req, res) => {
    try {
        const bangluongs = await BangLuong.find().populate('nhanVienId');
        res.render('bangluong/list', { title: 'Danh sách Bảng Lương', bangluongs });
    } catch (error) {
        console.error('Lỗi trong listBangLuong:', error);
        res.status(500).send(error.message);
    }
};

exports.createBangLuongForm = async(req, res) => {
    try {
        const nhanviens = await NhanVien.find();
        res.render('bangluong/create', { title: 'Thêm Bảng Lương', nhanviens });
    } catch (error) {
        console.error('Lỗi trong createBangLuongForm:', error);
        res.status(500).send(error.message);
    }
};

exports.createBangLuong = async(req, res) => {
    try {
        if (!req.body.nhanVienId || !req.body.ngayDiLam || !req.body.mucLuong) {
            return res.status(400).send('Nhân viên, ngày đi làm và mức lương là bắt buộc');
        }
        await BangLuong.create(req.body);
        res.redirect('/bangluong');
    } catch (error) {
        console.error('Lỗi trong createBangLuong:', error);
        res.status(500).send(error.message);
    }
};

exports.editBangLuongForm = async(req, res) => {
    try {
        const bangluong = await BangLuong.findById(req.params.id);
        if (!bangluong) return res.status(404).send('Không tìm thấy bản ghi lương');
        res.render('bangluong/edit', { title: 'Chỉnh sửa Bảng Lương', bangluong });
    } catch (error) {
        console.error('Lỗi trong editBangLuongForm:', error);
        res.status(500).send(error.message);
    }
};

exports.editBangLuong = async(req, res) => {
    try {
        await BangLuong.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/bangluong');
    } catch (error) {
        console.error('Lỗi trong editBangLuong:', error);
        res.status(500).send(error.message);
    }
};

exports.deleteBangLuong = async(req, res) => {
    try {
        await BangLuong.findByIdAndDelete(req.params.id);
        res.redirect('/bangluong');
    } catch (error) {
        console.error('Lỗi trong deleteBangLuong:', error);
        res.status(500).send(error.message);
    }
};