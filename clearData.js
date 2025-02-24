const mongoose = require('mongoose');
const { connectDB } = require('./db');
const NhanVien = require('./models/NhanVien');
const BangLuong = require('./models/BangLuong');

const clearDatabase = async() => {
    try {
        await connectDB();
        await NhanVien.deleteMany({});
        console.log('Đã xoá tất cả dữ liệu trong collection NhanVien');
        await BangLuong.deleteMany({});
        console.log('Đã xoá tất cả dữ liệu trong collection BangLuong');
        mongoose.connection.close();
    } catch (error) {
        console.error('Lỗi khi xoá dữ liệu:', error);
    }
};

clearDatabase();