import express from "express";
import {
	addOrderItems,
	getMyOrders,
	getOrderById,
	updateOrdertoPaid,
	updateOrdertoDelivered,
	getOrders,
} from "../controllers/orderController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, addOrderItems).get(protect, admin, getOrders);

router.route("/mine").get(protect, getMyOrders);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updateOrdertoPaid);
router.route("/:id/deliver").put(protect, admin, updateOrdertoDelivered);

export default router;
