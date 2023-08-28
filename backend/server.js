import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/connectDB.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import cookieParser from "cookie-parser";
import productRoute from "./routes/productRoute.js";
import userRoutes from "./routes/userRoutes.js";

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cookie parser middleware
app.use(cookieParser());

app.get("/", (req, res) => {
	res.send("API is running");
});

app.use("/api/products", productRoute);
app.use("/api/users", userRoutes);

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
