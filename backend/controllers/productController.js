import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../model/productModel.js";

const getProducts = asyncHandler(async (req, res) => {
	const products = await Product.find({});
	res.status(200).json(products);
});

const getProductById = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const product = await Product.findById(id);

	if (product) {
		return res.status(200).json(product);
	} else {
		res.status(404);
		throw new Error("Resource not found");
	}
});

export { getProducts, getProductById };
