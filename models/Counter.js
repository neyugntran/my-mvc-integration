const mongoose = require('mongoose');

const CounterSchema = new mongoose.Schema({
    field: { type: String, required: true, unique: true }, // Ví dụ: "maNhanVien"
    value: { type: Number, required: true, default: 1 }
});

module.exports = mongoose.model('Counter', CounterSchema);