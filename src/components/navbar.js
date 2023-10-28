import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <p>
          <Link to="/book">book</Link>
          <br />
          <Link to="/calc">poids</Link>
          <br />
          <Link to="/">covid</Link>
        </p>
      </nav>
    </>
  );
};

export default Navbar;
