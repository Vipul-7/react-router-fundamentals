import { useParams } from "react-router-dom";

const ProductsDetails = () => {
  const params = useParams();
  return (
    <>
      <h1>Products detail page</h1>
      <h4>{params.productId}</h4>
    </>
  );
};

export default ProductsDetails;
