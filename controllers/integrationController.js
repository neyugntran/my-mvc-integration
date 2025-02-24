const mongoose = require('mongoose');

exports.listIntegratedData = async(req, res) => {
    try {
        const integratedData = await mongoose.model('NhanVien').aggregate([{
                $lookup: {
                    from: 'bangluongs',
                    localField: '_id',
                    foreignField: 'nhanVienId',
                    as: 'bangLuongs'
                }
            },
            {
                $project: {
                    hoTen: 1,
                    ngaySinh: 1,
                    email: 1,
                    chucVu: 1,
                    phongBan: 1,
                    ngayVaoLam: 1,
                    bangLuongs: 1
                }
            }
        ]);
        res.render('integration/list', { title: 'Báo cáo Lương Nhân Viên', integratedData });
    } catch (error) {
        console.error('Lỗi trong listIntegratedData:', error);
        res.status(500).send(error.message);
    }
};