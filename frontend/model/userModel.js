import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		name: { type: String, reuqired: true },
		email: { type: String, required: true, unique },
		password: { type: String, required: true },
		isAdmin: { type: Boolean, required: true, default: false },
	},
	{ timestamps: true }
);

const User = mongoose.Model("User", userSchema);

export default User;
