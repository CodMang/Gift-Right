const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    imgName: { type: String },
    description: { type: String, required: true },
    link: { type: String, required: true },
    price: { type: Number, required: true },
    charityId: { type: String, required: true },
    isActive: { type: Number, required: true, default: 1 },
    isDeleted: { type: Number, required: true, default: 0 }
}, {
    timestamps: true
});

mongoose.models = {};
export default mongoose.model("Product", ProductSchema);