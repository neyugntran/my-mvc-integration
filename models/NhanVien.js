const mongoose = require('mongoose');
const Counter = require('./Counter');

const NhanVienSchema = new mongoose.Schema({
    maNhanVien: { type: Number, unique: true },
    hoTen: { type: String, required: true, trim: true },
    ngaySinh: { type: Date, required: true },
    diaChi: { type: String, default: '', trim: true },
    soDienThoai: { type: String, trim: true },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    chucVu: { type: String, default: 'Nhân viên', trim: true },
    phongBan: { type: String, trim: true },
    ngayVaoLam: { type: Date, default: Date.now }
}, { timestamps: true });

NhanVienSchema.pre('validate', async function(next) {
    if (!this.maNhanVien) {
        try {
            const counter = await Counter.findOneAndUpdate({ field: 'maNhanVien' }, { $inc: { value: 1 } }, { new: true, upsert: true });
            this.maNhanVien = counter.value;
            console.log(`Generated maNhanVien: ${this.maNhanVien}`);
            next();
        } catch (err) {
            next(err);
        }
    } else {
        next();
    }
});

module.exports = mongoose.model('NhanVien', NhanVienSchema);