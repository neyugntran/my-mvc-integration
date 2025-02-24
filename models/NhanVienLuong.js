const mongoose = require('mongoose');

const NhanVienLuongSchema = new mongoose.Schema({}, { strict: false });

// Phương thức tĩnh để tích hợp dữ liệu từ NhanVien và BangLuong
NhanVienLuongSchema.statics.getReport = async function() {
    return await mongoose.model('NhanVien').aggregate([{
            $lookup: {
                from: 'bangluongs', // tên collection của BangLuong (Mongoose chuyển tên model thành số nhiều, viết thường)
                localField: '_id',
                foreignField: 'nhanVienId',
                as: 'bangLuongs',
            },
        },
        {
            $project: {
                hoTen: 1,
                ngaySinh: 1,
                email: 1,
                chucVu: 1,
                phongBan: 1,
                ngayVaoLam: 1,
                bangLuongs: 1,
            },
        },
    ]);
};

module.exports = mongoose.model('NhanVienLuong', NhanVienLuongSchema);