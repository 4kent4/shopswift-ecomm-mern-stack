import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";
import { useState, useEffect } from "react";

const HomeScreen = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const res = await axios.get("/api/products");
			setProducts(res.data);
		};

		fetchProducts();
	}, []);

	console.log(products);

	return (
		<>
			<h1>Latest Products</h1>
			<Row>
				{products.map((product) => (
					<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</>
	);
};
export default HomeScreen;
