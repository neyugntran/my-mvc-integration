const mongoose = require('mongoose');

const BangLuongSchema = new mongoose.Schema({
    nhanVienId: { type: mongoose.Schema.Types.ObjectId, ref: 'NhanVien', required: true },
    ngayDiLam: { type: Date, required: true },
    ngayNghi: { type: Number, default: 0, min: 0 },
    mucLuong: { type: Number, required: true, min: 0 },
    bonus: { type: Number, default: 0, min: 0 },
    phuCap: { type: Number, default: 0, min: 0 },
    thuNhapKhac: { type: Number, default: 0, min: 0 },
    thue: { type: Number, default: 0, min: 0 },
    ghiChu: { type: String, trim: true },
}, { timestamps: true });

module.exports = mongoose.model('BangLuong', BangLuongSchema);