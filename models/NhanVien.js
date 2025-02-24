const mongoose = require('mongoose');

const NhanVienSchema = new mongoose.Schema({
    hoTen: { type: String, required: true, trim: true },
    ngaySinh: { type: Date, required: true },
    diaChi: { type: String, default: '', trim: true },
    soDienThoai: { type: String, trim: true },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    chucVu: { type: String, default: 'Nhân viên', trim: true },
    phongBan: { type: String, trim: true },
    ngayVaoLam: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('NhanVien', NhanVienSchema);