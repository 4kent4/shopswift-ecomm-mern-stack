import {Row, Col} from "react-bootstrap";
import {useParams} from 'react-router-dom'
import Product from "../components/Product";
import Loader from "../components/Loader";
import { useGetProductsQuery } from "../slices/productApiSlice";
import Message from "../components/Message";
import Paginate from "../components/Paginate";

const HomeScreen = () => {
	const {pageNumber} = useParams()
	const { data, isLoading, isError } = useGetProductsQuery({pageNumber});

	return (
		<>
			{isLoading ? (
				<Loader />
			) : isError ? (
				<Message variant="danger">
					{isError?.data?.message || isError.error}
				</Message>
			) : (
				<>
					<h1>Latest Products</h1>
					<Row>
						{data.products.map((product) => (
							<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
								<Product product={product} />
							</Col>
						))}
							</Row>
							<Paginate
								pages={data.pages}
								page={data.page}
							/>
				</>
			)}
		</>
	);
};
export default HomeScreen;
