import {Row, Col} from "react-bootstrap";
import {Link, useParams} from 'react-router-dom'
import Product from "../components/Product";
import Loader from "../components/Loader";
import {useGetProductsQuery} from "../slices/productApiSlice";
import ProductCarousel from "../components/ProductCarousel";
import Message from "../components/Message";
import Paginate from "../components/Paginate";


const HomeScreen = () => {
	const {pageNumber, keyword} = useParams()

	const { data, isLoading, isError } = useGetProductsQuery({keyword, pageNumber});

	return (
		<>
			{!keyword ? <ProductCarousel/> : <Link to="/" className="btn btn-light mb-4">Go back</Link>}
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
								keyword={keyword ? keyword : ""}
							/>
				</>
			)}
		</>
	);
};
export default HomeScreen;
