import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/connectDB.js";
import products from "./data/products.js";

const PORT = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
	res.send("API is running");
});

app.get("/api/products", (req, res) => {
	res.json(products);
});

app.get("/api/product/:id", (req, res) => {
	const product = products.find((p) => p._id === req.params.id);
	res.json(product);
});

const startServer = async () => {
	try {
		await connectDB();
		app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
	} catch (error) {
		console.log(error);
	}
};

startServer();
