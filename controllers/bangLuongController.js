const BangLuong = require('../models/BangLuong');

exports.listBangLuong = async(req, res) => {
    try {
        const bangluongs = await BangLuong.find().populate('nhanVienId');
        res.render('bangluong/list', { title: 'Danh sách Bảng Lương', bangluongs });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.createBangLuongForm = (req, res) => {
    res.render('bangluong/create', { title: 'Thêm Bảng Lương' });
};

exports.createBangLuong = async(req, res) => {
    try {
        await BangLuong.create(req.body);
        res.redirect('/bangluong');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.editBangLuongForm = async(req, res) => {
    try {
        const bangluong = await BangLuong.findById(req.params.id);
        if (!bangluong) return res.status(404).send('Không tìm thấy bản ghi lương');
        res.render('bangluong/edit', { title: 'Chỉnh sửa Bảng Lương', bangluong });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.editBangLuong = async(req, res) => {
    try {
        await BangLuong.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/bangluong');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteBangLuong = async(req, res) => {
    try {
        await BangLuong.findByIdAndRemove(req.params.id);
        res.redirect('/bangluong');
    } catch (error) {
        res.status(500).send(error.message);
    }
};