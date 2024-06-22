import Product from '@/models/Products';
import connectDb from '@/middleware/dbConnect';

const handler = async (req, res) => {
    let products = await Product.find({ isDeleted: 0 }).select('-createdAt -updatedAt -isDeleted');
    res.status(200).json({ products });
}

export default connectDb(handler);