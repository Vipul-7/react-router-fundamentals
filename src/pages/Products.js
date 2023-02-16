import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    id: "p1",
    name: "Product-1",
  },
  { id: "p2", name: "Product-2" },
  { id: "p3", name: "Product-3" },
];

const Products = () => {
  return (
    <>
      <h1>This is the Products page</h1>
      <ul>
        {PRODUCTS.map((prd) => (
          <li key={prd.id}>
            <Link to={`/products/${prd.id}`}>{prd.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
