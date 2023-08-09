import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/connectDB.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productRoute from "./routes/productRoute.js";

const PORT = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
	res.send("API is running");
});

app.use("/api/products", productRoute);

app.use(notFound);
app.use(errorHandler);

const startServer = async () => {
	try {
		await connectDB();
		app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
	} catch (error) {
		console.log(error);
	}
};

startServer();
