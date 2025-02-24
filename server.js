const express = require('express');
const path = require('path');
const { connectDB } = require('./db');
const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const nhanVienRoutes = require('./routes/nhanVienRoutes');
const bangLuongRoutes = require('./routes/bangLuongRoutes');
const integrationRoutes = require('./routes/integrationRoutes');

app.get('/', (req, res) => res.render('index', { title: 'Dashboard' }));
app.use('/nhanvien', nhanVienRoutes);
app.use('/bangluong', bangLuongRoutes);
app.use('/integration', integrationRoutes);

app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});