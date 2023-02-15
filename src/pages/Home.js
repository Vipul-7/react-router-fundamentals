import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>This is the home page</h1>
      <p>
        Go to <Link to="/products">Products page</Link>
      </p>
    </>
  );
};

export default Home;
